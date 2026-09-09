# Minds & Models — Brand-Facing Capability Inventory (evidence-based, 2026-09-04)

Sources are cited inline as `repo/path`. Where a claim in the strategy frame (system prompt) could not be independently verified in code/docs, I say so explicitly.

---

## 0. The one structural fact that governs everything below

**There is no brand-facing product today.** `dashboard-backend`'s `Company` entity (`src/Dashboard/Models/Entities/Company.cs`, `UserContext.ActiveOrganizationId`) is the **retailer** tenant — GymBeam, Super zoo, EuroOil, Sportisimo. There is no `Brand` entity, no brand login, no brand-scoped API anywhere in `dashboard-backend`, `analysis-api`, or `analytics-assistant-be` (confirmed by `grep -rl "class Brand\|BrandController" src/Dashboard` → only a `BrandCategories.cs` helper enum, not a tenant concept). Every brand-facing artifact that has ever shipped (`mm-business/clients/*/delivered/**`) was **hand-built from a query pipeline**, not served by a brand-facing app. This constrains everything else: today, "what a brand gets" = a report/deck someone builds and sends, not a login.

---

## 1. The attribute/taxonomy inventory

Single source of truth: `datalayer/config/registry.yaml` (1,441 lines), enforced end-to-end by `pipeline/schema.py::validate()` against `mapping.yaml` and `sql/ddl/sessions.sql`, and mirrored in production by `analysis-api/config/registry.yaml` (same contract, feeds `analysis-api/libs/analyzer/schema.py` + `prompts.py`, regenerated via `scripts/artifacts.py`).

**Sections 1–11 — fixed-vocabulary attributes captured per shopper observation** (counted directly from the registry, `grep -c "^  [a-z_]*:"` minus `keywords_json`): **~90 attributes**, by category:

| Category | Count | Examples |
|---|---:|---|
| apparel | 25 | shoe/bottom/upper/headwear × {type, fit, brand, color}; jewellery, belt, watch, glasses, neck_wear, handbag, apparel_graphics_type, apparel_condition |
| body | 18 | body_type (8-way, incl. `soft_sedentary` vs `athletic` vs `muscular` tiers), body_shape, height, chest_size, skin_tone, hair {colour/length/texture/style}, facial_hair, tattoos, piercings, grooming_state, visible_pregnancy |
| psychographic (section 11, holistic) | 10 | apparent_spending_tier, gender_expression, subcultural_alignment, brand_tier_mix, outfit_formality/functionality/coordination, apparent_lifestyle_orientation, apparent_engagement_state, apparent_life_stage |
| personal_items | 10 | handbag/luggage/headphones/gadgets brand+type, consumables_type, smoking_type, mobility_type, other_visible_items |
| shopping | 9 | individual_activity (intent ladder: waiting→browsing→inspecting→comparing→paying), shopping_tool_type/fill, shopping_bag_brand, merchandise_items/quantity/brand/location |
| demographic | 6 | age (decade bucket, 10s–60s+, `unknown` allowed and preferred over guessing), sex (biological, distinct from `gender_expression`), is_staff, occupational_context, group_size context |
| style (section 11) | 5 | occupational_signal, supplementary_context_tags, tech_ecosystem, signal_richness, logo_prominence |
| session (temporal, `llm_free`) | 4 | time_of_day, day_of_week, day_of_month_segment, season — mechanically derived from timestamp, zero LLM cost |
| social | 3 | group_size, group_activity (incl. `selling` = staff actively closing), group_gender_mix |
| economic (section 11) | 3 | apparent_spending_tier, brand_culture_alignment, physical_activity_orientation |
| physical/holistic | 2 | physical_activity_level, body_composition_archetype |

Every field carries a **three-way null semantic** (`registry.yaml` header, repeated in `datalayer/README.md`): `NULL` = unobservable, `"unknown"` = visible but indeterminate, a committed value = actually judged. This is enforced in the prompt, not bolted on after.

**Section 12 — open-ended keyword sweep** (`registry.yaml` lines 1307–1441, `keywords_json` jsonb column): **15 dimensions**, each yielding 3–7 free English kebab-case keywords + a 3-level confidence (0=guess/1=plausible/2=clearly visible): `demographic_observable`, `grooming_presentation`, `apparel_items`, `apparel_brand_logo`, `material_color_signal`, `behavioral_cue` (all venue-blind, "observable"), plus `style_archetype`, `subculture_signal`, `economic_signal`, `aspirational_projection`, `psychographic_traits`, `life_context`, `social_role`, `emotional_affect`, `commercial_persona` (venue/time-context-aware, "inferred"). This is the open vocabulary the system-prompt's "450+ detectable vocabulary" figure refers to — **I could not independently verify the exact number**; `canon.yaml` (the per-tenant canonicalized keyword map) is gitignored/generated-at-runtime, not checked into the repo, so there's no static count to audit. Treat "450+" as an unverified pitch figure, not a code fact, until someone points me at a specific `canon.yaml` run.

**What is NOT captured, ever** (explicit design decisions in `registry.yaml` and `SPEC.md`):
- No facial geometry / no biometric template — attributes are visual-judgment categoricals, not embeddings.
- No cross-visit identity: `person_id` is a per-visit UUID (`analysis-api/README.md`: "Unique visitor identifier" per POST), there is no re-identification code path anywhere I found, and this is written into the product as a promise (`06-ws-product-data.md`: *"Re-identification code must never ship — 'no cross-visit identification' is a written promise to retailers"*).
- No raw image retained past extraction in the intended architecture (`06-ws-product-data.md`: 72h hard cap on raw images) — though I did not find retention-deletion code in `dashboard-backend`/`analysis-api` to confirm this is actually implemented today; it reads as a policy target, not a verified running job.
- Age is never a point estimate — always a decade bucket with `unknown` as a first-class value, never sharper.

**Derived layer** (downstream of raw attributes, in `analysis-api/libs/segmentation/` and mirrored by `datalayer/pipeline/{canon,topic,cards,personas}.py`): per-tenant NMF (`sklearn.NMF`) persona clusters over the keyword bag + curated enums → LLM-named topics → persona cards with demographics/drivers/signature tags. This is **run-scoped, not live-windowed** — `docs/analytics-endpoints.md`'s `segments` row is explicit: *"Measured NMF personas — run-scoped, NOT windowed... no active row → empty segments"*. Eligibility to even get a first run: `analysis-api/README.md` — a tenant needs **≥500 sessions** and no completed run in the last 7 days (`nightly_segmentation_scan`, `--min-sessions 500`), and **auto-scheduling is currently disabled** (commented out in `apps/automation/app.py`) — someone has to run it by hand.

---

## 2. The join (POS/receipt matching)

**Real vs. modeled, per retailer** (`mm-business/clients/*/facts.yaml`, field `pilot.pos_matching`):

| Retailer | `pos_matching` | Match rate | Volume |
|---|---|---|---|
| GymBeam | **real** | 92% | 7,475 visitors → 2,622 matched orders, 1.29M CZK, 21 days |
| Super zoo | **real** | (see report below) | 9,064 baskets analyzed in one delivered artifact |
| EuroOil | **modeled** | — | flagged in facts.yaml: *"tobacco decks use ILLUSTRATIVE POS — always label as such"* |
| Sportisimo | none | — | `status: pipeline`, `stores_live: 0` |
| Teta | none | — | `status: pipeline`, `stores_live: 0` |

This matters a lot for the tobacco category (a named target vertical): **the EuroOil tobacco decks that exist today (`datalayer/tobacco-decks/eurooil-{bat,pmi,jti}-deck.html`) run on illustrative, not real, POS.** Any brand-facing tobacco claim sourced from those decks is a mockup of what the join *would* show, not a measured result, and must be labeled as such per the facts.yaml warning itself.

**Where a real join exists (SuperZoo), what it actually unlocks** — evidenced by the shipped `mm-business/clients/superzoo/delivered/data-report-exports/superzoo-basket-intelligence.html` (single store, "CS314", 9,064 checkout baskets, 16 Jun–9 Aug):
- Basket anatomy: median 288 CZK / 2 items, distribution p10→p95.
- Market-basket cross-sell lift (e.g. "small pet + carrier" 35.8×, n=51 co-occurring baskets, 54% attach rate) — each lift figure carries its own basket count, i.e. cell-size is visible in the artifact.
- Basket size by breadth (1 vs 2 vs 3+ departments: 383 → 606 → 790 CZK) and by depth (items).
- **Persona × category basket signature**: each of 7 named personas gets an over-indexed product list with a lift multiplier (e.g. "Suburban Women 30s → small live pets, supplementary food, harnesses, 1.5×").

That is the ceiling of what the join buys today, demonstrated, not hypothetical: **basket × persona, cross-sell lift, basket-value levers, all at n=1 store**. The `06-ws-product-data.md` calibration math is explicit about why this doesn't scale yet: *"one gold store ≈ 750 receipt-joins/month; a coarse persona × category grid needs ~12.5k joins ≈ 2–3 gold-store-months"* — and the planning ratio is **1–3% of locations as gold stores**. Conversion/repeat/frequency cuts are structurally capped by "no cross-visit tracking" — you can say "X% of visitors buy category Y" per visit, never "X% of repeat visitors" or "average visits before purchase," because there is no cross-visit person key anywhere in the schema.

---

## 3. Delivery surfaces

| Surface | Status | What a brand-side user could actually get, and how |
|---|---|---|
| **Retailer dashboard** (`frontend`, `dashboard-backend` REST) | **Live, working, retailer-only** | 22 `/api/analytics/*` endpoints (`docs/analytics-endpoints.md`), each with documented source table, filters, joins. Family 1 = ad-screen session stats (traffic trend, mission/location/product performance). Family 2 = visitor-warehouse panels: kpi-summary, temporal heatmap, conversion funnel, store performance, demographics, social-context, lifestyle, spending tier, cultural preference, wellness, body/outfit, shopping-tool-type, visitor-brands (multi-select, 11 brand slots), 5 keyword-derived scales (economic, self-presentation, occasion, subculture, keyword-signals), and the NMF `segments` endpoint. **A brand does not have a login to this** — it is the retailer's own dashboard.
| **Analytics API** | Live | Same 22 endpoints, callable by anyone with a Clerk JWT for that company's org. No brand-scoped or cross-retailer version exists.
| **Chat assistant ("Store Twin")** | **Real engineering, synthetic data — a demo, not a shipped product** | `analytics-assistant-be/README.md` says it outright: *"Working end to end against the demo dataset"*; `"dashboard parity (v2, real data)"` is explicitly listed under **Not in v1**. The demo dataset (`analytics-assistant-be/demo_mock/`) is **entirely generated**: 10 fictional CZ/SK sites, 179k synthetic visits, 484k synthetic receipt lines, a 96%-match join that is a rounded stand-in for the real 92% GymBeam figure, not a live join. The strategy doc (`06-ws-product-data.md`) confirms this is the "Store Twin" P&G asked for, and it's scheduled to ship **≤15 Nov 2026** — it has not shipped. Engineering quality is real (SSE streaming, typed `Query` model the LLM must emit rather than raw SQL, EXPLAIN-cost guard, per-turn audit rows, a documented population/denominator rule), but the **query surface is narrow**: `libs/query/models.py` allows filters on only `graphics_types`, `upper_types`, `brand`, `store_id`; metrics limited to `count`/`share`/`avg_duration`; group-by only `store_id`/`day`/`week`/`month`. No POS join, no demographics filter, no keyword-dimension filter is wired into the query model yet, and the system prompt (`libs/agent/prompt.py`) hard-forbids ever stating an absolute headcount ("GUARDRAIL (demo)"). Small-sample handling is a soft `low_row_count` warning at **n<100** (`execute.py`, `LOW_ROW_COUNT_THRESHOLD = 100`), not a hard k≥25 suppression — different, and weaker, than the doctrine elsewhere in the business.
| **PDF/HTML data report** | **Live, and the best-evidenced surface** | `mm-business/.claude/skills/data-report` + `templates/data-report/SPEC.md` define a fixed structure (cover → exec summary → methodology/privacy → personas → basket-by-persona [only if `pos_matching: real`] → daypart → recommendations → next steps), hand-built per client from `data/queries/`. Real shipped instances: GymBeam pilot deck+POS pilot report, SuperZoo pilot deck + 5 separate data-report-exports (basket intelligence, campaign report, features-vs-purchases, POS×visual value, campaign funnels), EuroOil pilot report + tobacco generic/BAT/PMI/JTI decks (illustrative POS, as noted above), Sportisimo deck, LEGO one-pager. This is genuinely the most credible "what a brand gets" artifact today.
| **Exports (CSV/PDF from the dashboard UI)** | **Not built — a labeled stub** | `frontend/src/components/dashboard/insights-hub-stub.tsx`, wired live into `InsightsHubRoute.tsx`. The "Insight Packages" tab (weekly PDF, "brand-partner cluster snapshot" CSV+PDF, monthly exec summary) exists visually but every action fires `toast.info("Insight Packages are coming soon")`. If anyone is describing self-serve export to a brand today, that's describing a mockup, not a feature.
| **Real-time gRPC (`ImageAnalysisGrpcService`) / MQTT** | Live, but **not a brand-facing surface at all** | `Protos/image_analysis.proto`: request carries image + demographics + timing; response is an opaque `google.protobuf.Struct` — Gemini's ad-content decision for that screen, consumed by the device, never exposed to a brand or even persisted as structured attributes on that path (the structured attribute extraction happens separately, via `analysis-api`'s realtime/batch endpoints, fed by the fire-and-forget forwarding channel). This pathway exists to pick what ad plays next on a screen, not to deliver audience data to anyone.

---

## 4. The honest limits table

| Limit | Mechanism / evidence | Consequence for a brand deliverable |
|---|---|---|
| **k≥25 aggregation** | Business doctrine, `messaging/*`, `06-ws-product-data.md` "export gate... k≥25 suppression on every published cell." **Not enforced in code** in the one place I checked closely (`analytics-assistant-be` uses n<100 soft warning, not a k≥25 hard cutoff) — so today this is a report-authoring discipline, not a system guarantee, outside the manually-built data-report pipeline. | Every cross-tab (persona × category × daypart) must be hand-checked for cell size before it goes in a deck; nothing autogenerates a k≥25-safe cut yet except by the report author's care. |
| **No identities / no cross-visit tracking** | `person_id` is per-visit; no re-identification code found anywhere; written as a permanent promise (`06-ws-product-data.md`). | No repeat-visit rate, no frequency, no loyalty measurement, no "did the campaign bring the same person back" — structurally impossible on current schema, not just policy-limited. |
| **n=1 store, everywhere, today** | Every `facts.yaml` shows `stores_live: 1` (GymBeam, Super zoo, EuroOil); Sportisimo/Teta at 0. | Every current number is "this store," never "the chain." The retailer-facing dashboard doesn't even aggregate across stores meaningfully yet for most tenants because there's only one live. |
| **Single-chain** | No cross-retailer data model exists (`Company` = one tenant, no shared brand view). | Category-level brand claims ("share of pouch buyers in Czech forecourt") cannot be built from one retailer's data without disclosing it's single-chain — same rule the strategy doc already states. |
| **Age = estimate with error bands** | `registry.yaml`: decade bucket, `unknown` explicitly preferred over guessing; never sharper than a decade. | Cannot promise age-verification-grade precision to any brand, especially not for age-gated categories (tobacco, alcohol) — this is a hard ceiling, not a rounding choice. |
| **Trading-data firewall** | Not a technical wall I could locate — no code enforces "brands never see retailer margin/elasticity data"; it is a **process/contract rule** (messaging docs), and the dashboard doesn't expose margin/sell-through data at all today (no such field exists in `Session`, `Product`, or the analytics endpoints), so the firewall currently holds by omission rather than by design. | Safe today because the data literally isn't captured, but if anyone ever adds a margin/cost field to `Product` or `Session`, there is no access-control layer that would stop it reaching a brand-facing surface — worth flagging to engineering. |
| **Brand-worn fill rate** | `06-ws-product-data.md`: current upper-body fill 4–10%; shoes 4%, watches 3%; target ≥25% fill by 1 Oct pending a €3k label-buy re-tune. **Per-brand-worn claims are explicitly banned at any current result** — pooled claims only. | The `visitor-brands` dashboard endpoint (11 brand columns) and `apparel_brand_logo` keyword dim exist and run, but their output is too sparse to name-check any one brand safely; anything brand-specific from this column must stay pooled/aggregate. |
| **Sample size / cell-size math** | `06-ws-product-data.md`: "the coarse grid needs ~12.5k joins ≈ 2–3 gold-store-months." | Sets the actual floor for any promised persona×category×daypart grid — a brand asking for a fine-grained cut before enough gold-store-months exist is asking for something the join can't yet support cleanly. |
| **NMF segmentation eligibility** | `analysis-api/README.md`: ≥500 sessions per tenant to even get a first run; nightly auto-scan **currently disabled**, run manually. | Segments in the dashboard `segments`/`customers-page.tsx` view are not guaranteed fresh or even present for a new/low-volume tenant; someone has to trigger the pipeline by hand. |
| **Latency** | `CLAUDE.md`: `AnalyzeImage` is the "latency-critical hot path," fails fast (`RpcException FailedPrecondition`) on any cache miss rather than falling back to DB. | This is an internal ad-personalization guarantee, not a brand-facing SLA — no equivalent freshness/latency contract exists for brand-facing analytics; the dashboard's analytics endpoints are plain request/response with no documented refresh cadence. |
| **Coverage** | `docs/analytics-endpoints.md` "Image-present vs normalized" section: May 2026 raw-visitor over-count was ~4× (EuroOil: 329,919 raw vs 75,089 normalized, 22.8%), which is *why* the count panels now gate on `image_path IS NOT NULL` instead of the normalized join. | Even "real" visitor counts in the dashboard are the photographed/engaged subset, not literal footfall; a brand comparing this number to a retailer's own door-counter will see a materially smaller figure by design, and that has to be explained, not hidden. |

---

## 5. Feasibility ladder for brand-facing outputs

**Deliverable TODAY** (built by hand from real, live data — GymBeam and/or Super zoo, n=1 store, k-checked by the author):
- Persona distribution with named clusters + traits (NMF `segments`, `datalayer/pipeline/personas.py` output) — shipped for EuroOil, GymBeam, Super zoo, O2.
- Persona × basket-category affinity with lift and cell counts, e.g. *"small-pet + carrier lift 35.8×, n=51 baskets, 54% attach rate, this store"* — shipped, SuperZoo.
- Basket-value levers by department breadth / item depth, e.g. *"basket value 383→606 CZK crossing 1→2 departments, this store"* — shipped, SuperZoo.
- Daypart / weekday persona mix (`temporal-heatmap`, `time_of_day`/`day_of_week` in registry) — supported by both the dashboard endpoint and the report template.
- Pooled (not per-brand) apparel/style/spending-tier distribution of shoppers in a category, e.g. *"share of visitors reading as budget-conscious vs premium at this forecourt, k≥25"* — supported by `apparent-spending`, `economic-scale`; per-brand-worn is explicitly off-limits (4–10% fill).
- Conversion funnel by attention threshold (`conversion-funnel`, ≥1.5/≥2.5s attention stages) at store level.

**Needs ONE signed retailer mandate** (not a data problem — a rights/consent problem; the data model already supports it once a second/third retailer instruments):
- Any of the above, for EuroOil (currently modeled POS only — needs the real receipt feed live, not just the camera pilot) or for Sportisimo/Teta (currently `stores_live: 0`, `pos_matching: none`).
- Category study across GymBeam + one additional sports-nutrition-adjacent retailer, pooled — still legally n could be "two named chains," which the doctrine treats as still needing careful "n=2" labeling, not "the market."
- A brand-specific pilot-scale study for a category currently unrepresented (tobacco real-POS, drugstore/HPC, beverages) — each needs its own signed instrument; EuroOil tobacco today is illustrative-POS only.

**Needs MULTI-CHAIN density** (structurally can't be delivered on today's footprint regardless of contracts signed):
- Any claim using the word "the market" or "the category" rather than "this store"/"this chain."
- A fine-grained grid like *"share of pouch buyers aged 25–34 at forecourt, by daypart, k≥25"* — the `06-ws-product-data.md` math is explicit that the **standard** grid (day-part-resolved) needs ~50k receipt-joins ≈ several gold-store-months; one station's real POS can calibrate a wave, but the wave itself (10–30 gold stores per 1,000 locations) doesn't exist yet.
- Cross-retailer repeat-exposure / campaign-lift measurement — blocked twice over: no cross-visit ID within one chain, and no shared-identity concept across chains either (nor should there be, per the anonymity doctrine).
- Per-brand-worn share claims at any granularity — blocked by fill rate (4–10%), independent of store count; this unlocks only after the label-buy re-tune targeting ≥25% fill, which is a data-quality project, not a density project.

**Not feasible on the current architecture, full stop:**
- Age-verification-grade or point-estimate age to any brand (structurally a decade bucket with `unknown` as first-class).
- Any brand-facing self-serve export/API/portal — doesn't exist; the only export UI (`insights-hub-stub.tsx`) is a labeled "coming soon" stub.
- A live, production-data chat interface for a brand — the only chat assistant that exists runs on a synthetic demo dataset and is scheduled, not shipped (target ≤15 Nov 2026).
- Retailer margin/sell-through/elasticity data reaching a brand in any form — not captured in the schema at all today, so the firewall currently holds by absence of the field, not by an access-control layer; flag this to engineering before anyone builds a margin field into `Product`/`Session` without also building the wall.

---

### Key file references (for persona researchers to re-check claims directly)
- Taxonomy: `datalayer/config/registry.yaml`, `analysis-api/config/registry.yaml`, `analysis-api/README.md` (§ "Data layer")
- Dashboard endpoints: `dashboard-backend/docs/analytics-endpoints.md` (canonical, mandatory-to-update doc)
- Chat assistant reality check: `analytics-assistant-be/README.md`, `demo_mock/README.md`, `libs/query/models.py`, `libs/agent/prompt.py`
- POS/join status per client: `mm-business/clients/{gymbeam,superzoo,eurooil,sportisimo,teta}/facts.yaml`
- Fill-rate / calibration math / firewall / ban-list: `mm-business/strategy/2026-08-19-base-strategy/06-ws-product-data.md`
- Real shipped brand-facing evidence: `mm-business/clients/superzoo/delivered/data-report-exports/superzoo-basket-intelligence.html`, `mm-business/templates/data-report/SPEC.md`
- Export stub: `frontend/src/components/dashboard/insights-hub-stub.tsx` + `pages/dashboard/routes/InsightsHubRoute.tsx`