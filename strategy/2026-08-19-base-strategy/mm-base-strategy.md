# Minds & Models — Base Strategy Layer

**Version 1.0 · 18 August 2026 · INTERNAL-ONLY**

> **Sensitivity:** this document contains INTERNAL-ONLY material (NIQ supply/demand benchmarks, unit costs, counterparty intelligence, contract terms). It must never be forwarded externally. Downstream agents producing external material from this document must pass every output through `mm-business/messaging/` rules (never-say list, forwardability litmus, approved copy) — externally safe numbers are ONLY those marked public in `mm-business/messaging/stats.yaml`.

> **Tag discipline:** `[FACT]` = from the founder Fact Base of 18 Aug 2026 or a primary document on disk (RFI, signed contract, counsel letter). `[EST]` = derived estimate, arithmetic shown. `[ASSUME]` = assumption with its kill-test named. External research claims carry a source and are at best `[EST]`.

> **How to read this:** Section 0 is the one-page thesis. Modules 1–8 follow in derivation order — each builds on the previous, each ends with **Decisions required from founders** and **Kill-tests scheduled**. Module 8 is the part downstream people and agents execute from. The Week-1 list closes the document. Three clocks tick through everything: **SuperZoo exec meeting (end Aug)**, **tobacco/brand budget lock (Oct–Nov)**, **cash-out (mid-Dec)**.

---

## 0. Executive thesis

**The bet.** Physical retail's measurement incumbent (NIQ, $3.97bn revenue, ~23,000 clients averaging ~$173k/yr `[EST — S-1]`) sells brands *what sold*. It is structurally blind to *who buys* — and it pays ~$636M/yr to acquire its raw data `[EST — S-1: 16% Cash Data Costs]` while brands pay it 8–18.5M CZK/yr per category read in CZ alone `[FACT 3.8]`. M&M's bet: **own the who-layer of that spread** — per-visitor visual attributes matched to receipts (92% match, receipt-verified `[FACT — GymBeam pilot]`) — by acquiring supply at near-zero cost (free AI software on cameras retailers already own, granted in exchange for perpetual k≥25 aggregate rights) and selling the syndicated read to every brand in each category at NIQ-anchored prices. Collection is the moat's gate; **translation is the moat** (calibration, personas, the Store Twin): the corpus is worthless to copy without the POS×visual join that prices it.

**Why it can win now.** Four facts, all new within 90 days: (1) **SuperZoo's inbound RFI** — a 206-store, company-operated chain formally asking vendors to run AI analytics *on its existing HIKVISION estate* with a 250+-store licensing horizon `[FACT]` — is written proof that the your-cameras/our-engine supply model has demand, and it arrived from the warmest rights prospect in the portfolio; (2) the **category graveyard** validates the shape: hardware capex and "interesting insights" killed Grabango, Cooler Screens, Prism Skylabs; the EU survivors ride existing CCTV and bill against budget lines that already exist `[EST — research annex]` — exactly this plan's architecture; (3) the **EU-compliance pack is a weapon, not a tax**: the EDPB purpose-change gate (one signature ≠ one legal basis) kills naive competitors at every retailer-DPO review, and M&M — post-purge, with counsel's not-prohibited/not-high-risk letter `[FACT]` — can arrive with the homework done; (4) **P&G told us where the money is**: brands hold the margins and the data teams, want CEE-local data, quarterly Excel, and stated they'd pay — the hurdle is the budget bucket, which this plan hacks by shipping the read in the incumbent's own format `[FACT 3.9]`.

**The plan in one breath.** Retailers are supply, never customers (Checkpoint 1): a €0 platform-for-rights bid wins the RFI, the 60-day revocable mandate makes the first rights ask unrefusable, and one receipt-level "gold station" at EuroOil calibrates the whole tobacco wave. Brands are the revenue: founding-seat cohorts (3 per category, density-escrowed) across tobacco, pet, drugstore, FMCG; a Brand-Worn Index; Store Twin seats; closed-loop measurement — **€4.40M of named, benchmark-anchored run-rate plus an €0.81M expansion block, a €5.21M ceiling** `[EST — §6.1]`, every euro with a payer, a contract shape, and a gate. The named block alone lands 12% short of €5M at band-top: the target needs the whole architecture *and* the expansion, which is the first honest thing this plan says about itself.

**What must be true — the honest part.** Tobacco meetings materialize by 30 Sep after a summer of stalling; SuperZoo signs rights inside its own procurement; the gold station lands; D2 parity ≥92% (Module 5); a cold second petrol chain signs by 31 Dec; the €500k closes by 15 Nov against a mid-December cash wall; and two product-led motions the founders have never run both work. **P(all of it — €5M by 18 Feb) ≈ 5%** `[EST]`; the prior red-team pack independently priced the same conjunction ≤3%. The base case if the hacks half-work: **€0.8–1.4M run-rate + the asset scoreboard** (≥200 rights-clean locations, ≥3 rights instruments, ≥3 gold stores, ≥50k joins, fill ≥25%) — which is precisely what the €2–4M data-infrastructure round diligences. The target stays €5M; the plan is built so that *missing it still leaves the company owning the thing the target was for*.

**Three clocks run through everything: the SuperZoo exec meeting (end Aug) · the tobacco/brand budget lock (Oct–Nov) · cash-out (mid-Dec).** Week 1 starts Monday 24 August; ten actions, owners assigned, at the end of this document.

---

## Module 1 — Chokehold map: "data from 1,000 stores in 1 month"

Take the question literally and decompose to physics. A "live capture point" requires five things simultaneously: (1) a lens pointed at shoppers, (2) compute that turns frames into attributes, (3) a legal basis + signed paper for the processing, (4) a channel that gets M&M's software to that lens, and (5) someone who wants the output enough to let it all happen. Today M&M has 11 capture points `[FACT]` because it has been supplying all five ingredients itself: its own lens (RPi kit), its own compute, its own GDPR certificate, its own installers, and a personalization pitch as the reason.

The 1,000-store question is not "how do we do that 90× faster." It is: **which of the five ingredients already exist in the world at 1,000-store scale, and what single pieces of paper attach M&M to them?** Lenses exist (every chain already owns cameras — SuperZoo alone operates ~900–1,000 cameras across 206 CZ stores at 4–5 per store `[FACT — RFI §4.2]`). Compute exists in-store (new SuperZoo stores run an i5-14500/16GB recorder per store `[FACT — RFI §4.2.1]`). The missing ingredients are M&M's: the stream-ingest software, the paper, and the demand proof.

### 1.1 Chokehold inventory, ranked by binding order

Binding order = the order in which each constraint actually stops the plan if unresolved. (Re-derived from the Fact Base; the founders' prior trio — rights, demand, deployment velocity — survives, but cash and legal debt rank higher than prior thinking placed them.)

| # | Chokehold | What it blocks | Evidence | Binds when |
|---|---|---|---|---|
| C1 | **Zero rights paper.** No mandate letter, no aggregate license, no data clause anywhere `[FACT 3.4]` | 100% of data revenue; all brand outreach (own doctrine: no pre-mandate brand talk beyond methodology) | every `clients/*/facts.yaml`: `mandate_signed: false` | Immediately — at the first euro |
| C2 | **Zero demand-side proof.** No brand LOIs; tobacco meeting never held; P&G warm but bucketless `[FACT 3.2/3.4/3.9]` | Retailer expansion (EuroOil explicitly waits on tobacco WTP `[FACT 3.4]`); pricing credibility; the fundraise narrative | Fact Base | Immediately — in parallel with C1 |
| C3 | **Capture coupled to own hardware.** Stream-ingest into third-party CCTV/VMS not built `[FACT 3.1]` | Any scale-up beyond ~10 own installs/mo `[EST — canon deployment throughput]`; the entire "ride existing estates" family of deals | Fact Base; RFI demands existing-estate integration `[FACT — RFI §4.3]` | At store ~30–50, i.e. within weeks of any chain deal |
| C4 | **Cash.** €50k bank / €12k-mo burn → out ~mid-Dec `[FACT 3.2]` | Everything, from Nov onward; forces raise onto the critical path | Fact Base | ~1 Nov (decisions), mid-Dec (terminal) |
| C5 | **Legal debt.** Art. 9 fields extracted (pregnancy, skin tone — the latter AI-Act-prohibited since Feb 2025), raw frames retained indefinitely, DPAs signed with nobody but CPI, DPIA only CPI `[FACT — mm-gdpr-exec-brief]` | Every third-party-estate deal (riding retailer CCTV makes M&M a **processor**, where "anonymous to us" is legally void — the processor trap `[FACT — data-privacy.md]`); every retailer-DPO review; live fine exposure | mm-gdpr briefs; EDPB 02/2026 | At the first DPO review — SuperZoo's RFI has a full GDPR/AI-Act section `[FACT — RFI §3]`, so: now |
| C6 | **Founder bandwidth.** 2 × 40h/wk + Dima 8–10h; no other sellers `[FACT 3.6]` | Deal count. ~2,000 gross founder-hours over 26 weeks; at most ~1,000 sellable after product/fundraise/ops `[EST: 2×40×26×~50%]` | Fact Base | Always — it shapes the architecture rather than halting it |
| C7 | **LLM economics unverified at scale.** ~$20/device/mo at 1 visitor/6s, on free credits ~1 yr; behavior at 10–100× unknown `[FACT 3.1]` | Unit economics of any 250+-store deal; the RFI itself flags "Gemini API only partially usable due to cost and GDPR" `[FACT — RFI §4.1.5]` | Fact Base + RFI | At rollout signature — must be verified before pricing a 250-store contract |
| C8 | **Install logistics & passive partners.** ~10 stores/mo committed throughput `[EST — canon]`; NANOVO/LCD/LUXX have zero paper on disk `[FACT — sweep]`; Moris channel stalled all summer `[FACT 3.4]` | The old hardware-led growth model | canon; facts.yaml | Only if C3 stays unsolved — see §1.3 |

**The reading that matters:** C1+C2 are one coupled system (the rights-demand chicken-and-egg: retailers won't grant rights without brand money visible; brands won't commit without retailer data access). C3+C5 are one coupled system (riding other people's cameras is the only route to scale, and it is exactly the route that requires the legal debt paid first). C4 is the clock on both. C6 dictates the *shape* of the plan: few big valves, not many small ones. C7 is an engineering verification, not a strategy question. C8 largely evaporates (§1.3).

### 1.2 Removal hacks per chokehold

Format: **hack — owner — cost — time-to-signal — kill-test.** These remove chokeholds, not soothe them. (Hacks marked ★ are load-bearing for Module 6.)

**C1 — Rights paper (from zero to first signature)**

1. ★ **Mandate-in-a-week.** The 60-day, revocable, veto-everything mandate letter already exists as a Czech draft (`mm-business/templates/one-pager/mandate-letter-cz.md` `[FACT]`). Legal čistopis by external counsel, then put it on the table at the SuperZoo exec meeting (already scheduled, end Aug `[FACT 3.4]`) as the smallest possible yes: "60 days, you approve every artifact, you can revoke any time, nothing is sold, and the economics presume up to 40% is yours." — **Owner:** Josef (counsel: the DD-room attorney). **Cost:** ~€1–2k counsel `[EST]`. **Time-to-signal:** ≤2 weeks. **Kill-test:** if the warmest retailer in the portfolio refuses even a revocable, no-cost probe, the rights-first GTM is disproven as designed → escalate to the inverted model (hack 3) or M&M-operated capture (Module 3).
2. ★ **Rights embedded in the RFI response as the whole price.** Per the Checkpoint-1 architecture (brands-only, retailers as pure supply — Module 4.3), the RFI response bids the store layer at **€0 license**: free working entry-counting, dashboards, reporting and the compliance pack, with the perpetual k≥25 aggregate license + POS feed rider as the consideration. Procurement evaluates a bid that costs nothing against integrator bids that cost hundreds of thousands — and the rights clause is visibly *what pays for it*, not a hidden grab. — **Owner:** Josef. **Cost:** M&M carries ~€120k/yr operating cost at 250 stores `[EST — Module 4.2]`. **Time-to-signal:** exec meeting (end Aug) + RFI evaluation. **Kill-test:** if procurement strips the rider even at €0, rights cannot be bartered at all with this counterparty → escalate to the inverted cash model (hack 3) or walk.
3. **Data-Act site-license inversion (the "we pay you" paper).** Under the EU Data Act, when the retailer pays for analytics, the retailer is the statutory "User" of the connected devices and can restrict commercialization even of *anonymized* outputs; when **M&M pays the retailer** for site access under a Site-Host agreement with an explicit waiver, M&M becomes the User and keeps commercialization rights `[FACT — data-privacy.md §6]`. Use where the counterparty is procurement-bound or fee-averse — ČEPRO (state-owned `[FACT — facts.yaml]`) is the archetype: a contract where money flows *to* them avoids public-procurement friction entirely. Benchmark the fee to the NIQ supply side: ~287 CZK/store/mo `[FACT — internal benchmark]` → 1,000 stores ≈ 3.4M CZK/yr ≈ €140k/yr `[EST: 287×12×1,000/24.5]` — trivial against the 20–60× syndication spread `[FACT 3.8]`. — **Owner:** Ondřej + counsel. **Cost:** counsel ~€2–3k + the per-store fees when triggered. **Time-to-signal:** first term sheet to a retailer in Sep. **Kill-test:** two retailers reject "we pay you for access + waiver" → the waiver is the blocker, not the money; fall back to processor-model DPAs with license riders.

**C2 — Demand proof (from zero LOIs to bankable demand)**

1. ★ **Trigger the Moris 6-month clock in writing, now.** The signed Moris agreement contains a forcing device: when M&M identifies an opportunity at a Moris client and Moris fails to advance it after a written request, exclusivity toward that client lapses in 6 months `[FACT — D1 §II.7]`. Send the written request naming the EuroOil tobacco opportunity this week. It costs nothing, it is contractually polite, and it converts "Moris is slow" from a complaint into a countdown that either produces the meeting or produces freedom by ~Feb. In parallel: PM Slovakia direct (already possibly soon `[FACT 3.4]`) and cold outreach to JTI/BAT CZ trade-marketing with the anonymized sportstore report as the artifact — tobacco brands are not Moris clients, so direct brand outreach breaches nothing `[FACT — D1 scope: exclusivity covers Moris's *clients*, Příloha 1]`. — **Owner:** Josef (letter Ondřej). **Cost:** €0. **Time-to-signal:** meetings booked by mid-Sep or not. **Kill-test:** no tobacco meeting on any channel by 30 Sep → tobacco is not a 2026 revenue line; reweight Module 6 to pet + drugstore + landlord and revisit tobacco at Q1-27 budgets.
2. ★ **Founding-seat pre-sale with a density escrow.** Offer each category's brands 3 "founding seats" on the category read: ~50% off year 1, capped at 3 buyers, with a written clause — *if instrumented density < 30 stores in your category by Q2-27, fees are refunded or credited*. This converts "the data doesn't exist yet" from objection into option value, and it is honest: the money is at risk against a named milestone. LOIs "subject to retailer data agreement" (canon mechanism `[FACT — brain]`) are the soft version; founding seats are the cash version. — **Owner:** Josef. **Cost:** margin give-away year 1. **Time-to-signal:** first seat sold ≤6 weeks after first mandate. **Kill-test:** zero seats sold at any discount across ≥6 qualified brand conversations → P&G's "complementary, nice-to-have" classification `[FACT 3.9]` is binding at CZ scale too → syndication reprices to one-off studies and Module 6's E2 engine halves.
3. **The budget-bucket hack for giants.** P&G's stated blocker is bucket, not money `[FACT 3.9]`. So ship the bucket: deliver one quarterly category mini-read **free**, formatted exactly like the incumbent measurement deliverable (Excel, NIQ-style structure — their KPIs already live on NIQ data `[FACT 3.9]`), invoiced at €0 through whatever vendor channel their procurement already knows. The ask is not "buy new data", it is "add a line to an existing measurement PO at renewal." — **Owner:** Josef (Dima builds the read, ≤10h). **Cost:** ~2 Dima-weeks of output. **Time-to-signal:** their procurement either can or cannot book a €0 pilot within 4 weeks. **Kill-test:** if even free cannot be booked, the enterprise-vendor path (or riding NIQ itself as channel — Module 4.5) is the only route to giants; stop direct-selling them in this plan.

**C3 — Hardware-coupled capture (the stream-ingest gate)**

1. ★ **Ship "M&M on your recorder" (software-only capture).** New-format SuperZoo stores already run an i5-14500/16GB/2TB recorder with a 4-camera estate `[FACT — RFI §4.2.1]` — the on-prem appliance architecture in M&M's own legal design doc names literally this CPU class as the target `[FACT — data-privacy.md §3, Arch. 3]`. Port the extraction pipeline to run as a containerized service on the retailer's recorder, pulling RTSP locally, emitting only k-aggregable structured sessions; raw frames never leave the store (the strongest possible GDPR posture, and the exact answer to the RFI's "Gemini API only partially usable due to cost and GDPR" objection `[FACT — RFI §4.1.5]`). Marginal hardware cost per store: **€0**. Install: remote deploy. — **Owner:** Josef specs; backend/CV engineers build (this is the one large build the plan buys — see Module 6.4). **Cost:** ~4–6 eng-weeks to MVP `[EST]`. **Time-to-signal:** demo on one SuperZoo new-format store ≤4 weeks after access. **Kill-test:** i5-14500 cannot sustain extraction at required frame sampling → fall back to hack 2/3; if none work under €30/store/mo all-in, the software-only chain deal is mispriced and Module 6's E1 pricing rises.
2. ★ **Edge-puller box v2.** Repackage the existing RPi kit from "camera holder" to "NVR client": a box that plugs into the store LAN, pulls RTSP/ONVIF sub-streams from the *existing* NVR (old-format stores run i3 recorders that can't host M&M software `[FACT — RFI §4.2.2]`), samples frames, runs the current cloud extraction. BOM stays ~$130 `[FACT 3.1]`, but install collapses to "plug into switch" — no camera mounting, no positioning surveys. — **Owner:** same build track. **Cost:** ~2–3 eng-weeks (it reuses the whole current pipeline) `[EST]`. **Time-to-signal:** bench demo against a Hikvision NVR ≤2 weeks. **Kill-test:** NVR sub-stream access is blocked/unusable on common Hikvision firmware → VMS-API route (hack 3) becomes mandatory and per-camera license costs enter the unit economics.
3. **VMS-API / transient-cloud ingest.** For estates managed through HikCentral/Milestone-class VMS (SuperZoo's M2C-run part; any future corporate estate), pull sub-streams via the VMS API into a transient cloud pipeline — frames processed in memory and flushed, metadata out, under an Art. 28 DPA (the "1-ms transient stream" architecture, already legally designed `[FACT — data-privacy.md §3, Arch. 2]`). — **Owner:** cloud engineer. **Cost:** ~3–4 eng-weeks + per-camera VMS license economics (verify — research pending). **Time-to-signal:** proof against a HikCentral sandbox. **Kill-test:** VMS licensing per camera makes per-store cost exceed the SaaS price → restrict this SKU to estates where the retailer already holds licenses.

**C4 — Cash (the mid-December wall)**

1. ★ **Artifact-gated raise calendar, working backwards from the wall.** Close €500k by **15 Nov** (four weeks of buffer before mid-Dec `[FACT 3.2]`). Deck locked 15 Sep carrying exactly four artifacts: the SuperZoo RFI (inbound proof of the your-cameras model), the first signed mandate (C1), the calibration result (Module 5), and tobacco/pet meeting outcomes. — **Owner:** Ondřej runs process, Josef pitches. **Cost:** founder-time (~15h/wk Ondřej from Sep `[EST]`). **Time-to-signal:** first partner-meeting conversions by early Oct. **Kill-test:** <3 term-sheet-grade conversations by 15 Oct → trigger bridge (hack 2) immediately, do not wait.
2. **Bridge pre-commitment now, drawn only if needed.** Marek signaled €10–30k `[FACT 3.2]`; existing CLA angels are warm. Paper a standby CLA top-up (~€60–100k at the existing €3.5M cap) in September while it is cheap to ask, drawn only if the round slips. Extends runway to ~Q1-end at current burn `[EST: +€60–100k ÷ €12k ≈ +5–8 mo]`. — **Owner:** Ondřej. **Cost:** dilution at cap. **Time-to-signal:** signatures on standby paper by 30 Sep. **Kill-test:** angels decline standby → the December wall is real; Module 6's cash plan degrades to the survival variant (§6.3).
3. **Revenue-now, from work already wanted.** Three invoiceable items require no new strategy: a paid RFI pilot phase (SuperZoo is procuring *anyway*; a paid 3-store PoC is a normal procurement step), the CPI expansion (the only direct-pay client today `[FACT 3.2]`), and 1–2 paid category studies at 150–500k CZK `[FACT — canon ladder]` once the first mandate exists. Realistic H2 cash-in: €40–80k `[EST: PoC ~€15–25k + CPI ~€10–20k + 1–2 studies ~€12–40k]`. — **Owner:** Josef. **Kill-test:** none needed — this is straight execution; failure to invoice anything by 31 Oct is itself the signal that the demand side is softer than modeled.

**C5 — Legal debt (pay it, then weaponize it)**

1. ★ **P0 purge sprint (days, not weeks).** Execute `mm-gdpr-dev-actions.md` P0 verbatim: delete the Art. 9 / AI-Act-prohibited extraction fields and purge columns; 72h hard-delete on raw JPEGs; minor-suppression `[FACT — mm-gdpr-dev-actions]`. This single sprint (a) ends the prohibited-practice exposure, (b) restores the truth of counsel's Feb-2026 clean bill (not prohibited, not high-risk `[FACT — AIA assessment]`), which then becomes a sales document. — **Owner:** Josef assigns eng (CV/privacy engineer); Ondřej confirms completion in writing. **Cost:** ~3–5 eng-days `[EST — per the action list]`. **Time-to-signal:** done inside Week 1. **Kill-test:** none — this is not optional.
2. ★ **Productize the compliance pack.** DPIA template + LIA + two-layer signage + Art. 26/28 paper + counsel's AIA letter, bound as a deliverable handed to the retailer's DPO. The RFI dedicates a full section to GDPR/AI-Act and explicitly fears high-risk classification `[FACT — RFI §3]` — every competitor bidding that RFI must scramble for this; M&M can lead with it. — **Owner:** Ondřej + external DPO (retain part-time, ~€500–800/mo `[EST]`). **Cost:** ~€3–5k setup. **Time-to-signal:** pack v1 inside Phase 0 (14 days). **Kill-test:** a DPO rejects the pack substantively → fix what they name; each review hardens it.
3. **Retention architecture (30-day join room + k≥25 export gate)** per the dev-actions P1 list — required before any *third-party-estate* data flows. — **Owner:** eng. **Cost:** ~2–3 weeks elapsed alongside other work. **Time-to-signal:** architecture live before first external-estate pilot data arrives.

**C7 — LLM economics (verify before pricing)**

1. **Load-verify at 10× on free credits now**: batch-replay archived footage at rollout-scale request rates; measure rate-limit behavior and true $/store/mo at the sampling rates the software-only SKU will use. — **Owner:** cloud engineer + Dima. **Cost:** credits (free `[FACT 3.1]`). **Time-to-signal:** 1 week. **Kill-test:** >€30/store/mo at target sampling `[ASSUME threshold — set by E1 pricing]` → edge extraction (local model on the i5) must precede any 250-store rollout; renegotiate ship dates in Module 6.2.

### 1.3 Which chokeholds evaporate without own hardware

If M&M stops requiring its own camera kit and rides existing estates (the SuperZoo RFI is standing, written, inbound evidence that a 206-store chain *wants* vendors to do exactly this `[FACT 3.4 + RFI §4.3]`):

| Chokehold | With own hardware | Riding existing estates |
|---|---|---|
| Install logistics (C8) | site survey + mount + power + SIM + maintenance × 1,000; ~10 stores/mo `[EST]` | remote software deploy (new-format stores) or plug-in edge box (old-format); chain-wide in **weeks** |
| Hardware capex | ~$130 × 1,000 = ~$130k + spares/logistics `[EST]` | ~€0 (software SKU) to ~$130/store only where the puller box is needed |
| Per-store sales cycle | none existed — per-*chain* anyway | unchanged: per-chain. One signature = 200–400 stores `[FACT — RFI: 206 CZ, 250+ CZ/SK ask]` |
| Maintenance fleet ops | M&M's problem, at 1,000 sites | the retailer's/integrator's existing estate; M&M maintains software |
| What does NOT evaporate | — | **C1/C2 (paper + demand) — untouched. C5 hardens (processor trap: their cameras ⇒ their controllership ⇒ DPA + clean pipeline mandatory `[FACT — data-privacy.md]`). C7 (inference cost) scales with stores either way. Per-chain integration engineering is new real work.** |

**Conclusion:** hardware decoupling converts the 1,000-store question from an impossible logistics problem into (a) one product build (stream-ingest, three SKUs — Module 3.4), (b) the same paper problem as before (C1/C5), and (c) a short list of chain-scale signatures (Module 2). The chokeholds that remain — rights, demand, cash — are exactly the ones no amount of hardware cleverness touches. That is the honest core of this plan: **the firehose is legal-commercial, not mechanical.**

> **Decisions required from founders (M1):**
> 1. Approve the pivot of the deployment default from "own RPi + camera kit" to "software on existing estates, own kit only where no estate exists" (this changes the RFI response, the fundraise narrative, and eng priorities).
> 2. Approve sending the Moris §II.7 written request naming EuroOil/tobacco this week (starts the 6-month clock; mildly adversarial signal to a partner who also pays three pilots `[FACT 3.2]` — the draft must be framed as help, per the dossier playbook).
> 3. Approve the P0 GDPR purge as a this-week engineering interrupt (it deletes ~6 fields incl. some with minor commercial value `[FACT — mm-gdpr briefs]`).
>
> **Kill-tests scheduled (M1):**
> - Mandate refusal test — Josef — at SuperZoo exec meeting (end Aug).
> - Tobacco-meeting-by-30-Sep test — Josef — 30 Sep.
> - i5 on-prem feasibility — eng — ≤4 weeks after store access.
> - NVR sub-stream bench test — eng — ≤2 weeks.
> - LLM 10× load test — Dima + cloud eng — ≤1 week.
> - Standby-bridge signatures — Ondřej — 30 Sep.

---

## Module 2 — Killing the B2B sales cycle

The question is not "how to sell faster." It is: **which single signatures replace hundreds of sales cycles, and what does each signature cost in rights position?** Mechanism table first, then brutal honesty per mechanism.

### 2.1 Mechanism table

| Mechanism | Who signs | Locations / signature | Time-to-first-data | Marginal cost / location | Rights position left |
|---|---|---|---|---|---|
| **A. Chain platform deal** ("your cameras, our engine") | Chain COO/CIO (SuperZoo: Plaček family exec `[FACT — RFI]`) | 200–400 (SuperZoo: 206 CZ now, 250+ CZ/SK design target, 400+ group `[FACT — RFI]`) | 2–6 weeks post-integration build | ~€0–5/store/mo infra `[EST]` | Strongest available: DPA (processor) + aggregate-license rider negotiated *at* signature; retailer = joint controller, M&M holds perpetual k≥25 license |
| **B. Landlord portfolio** | Property-asset management (CPI — already a direct-pay client, DPIA signed `[FACT 3.2/3.5.d]`) | CPI group: >600 commercial properties, retail = 26% of a €20.2bn portfolio, largest retail-space owner in CZ, 36 retail parks CZ/SK/PL/HU `[EST — researched, annex]`; realistically 10–30 CZ retail assets in a first rider | weeks (common-area cams are theirs) | low (existing cams; common-area only) | Landlord controls **common areas only** — corridor footfall/audience, never in-store shelf behavior, never POS; clean but shallower data; incumbents (ShopperTrak-class) often present |
| **C. Security-integrator partnership** (M2C — runs part of SuperZoo's estate `[FACT — RFI §4.1.4]`; also NAM system, Trade FIDES, Securitas ČR) | Integrator commercial lead | their monitoring centres **already aggregate video from hundreds of client sites** — the pre-existing connectivity is the asset `[EST — researched, annex]` | months (partner cycle) | shared margin (integrator channel economics compress per-site margins) | **None by itself** — the integrator's contracts are for *security*; per EDPB 3/2019 the purpose change to analytics needs each end-client's fresh legal basis. Value = distribution + solved connectivity, never a legal shortcut |
| **D. Federation / co-op** (COOP) | **Not one signature — confirmed** `[EST — researched: COOP Centrum/Morava coordinate purchasing and brand; they cannot bind member co-ops on IT/CCTV]`; each of the independent regional cooperatives signs for its own ~30–300 stores | 30–300 per regional co-op | months per co-op | per-store hardware where no estate | Same paper per co-op; the "2,400 stores" is a sum of independent estates — treat as N mid-size chains with a shared brand. Same fragmentation: CBA, Hruška, Żabka (franchise) |
| **E. Corporate petrol / franchise HQ** | Country org (ČEPRO/EuroOil: state-owned — procurement rules bite anything they *pay* for `[FACT — facts.yaml]`) | EuroOil: **~200 company-operated vs ~500 total network — both figures circulate and measure different things; carry both** `[EST — researched, annex]`; Orlen/Benzina, MOL, OMV: hundreds per country, but **camera control follows operating model (owned vs dealer), not brand** | EuroOil: 50-station wave already planned, Moris pays install `[FACT — D1 §II.2 + 3.4]` | install borne by Moris (EuroOil); else ~$130 kit | EuroOil: data contract must be M&M↔ČEPRO direct; Moris channel for comms per contract `[FACT — D1 §II.12]`. Inverted (we-pay) structure dodges procurement + flips Data-Act User status `[FACT — data-privacy.md §6]` |
| **F. Brand-mandated deployment** | Brand trade-marketing (tobacco co-funding the EuroOil wave is literally the current ask `[FACT — facts.yaml]`) | whole channel the brand cares about | gated on brand meeting (C2) | brand-funded | Brand money forces the retailer's yes but grants no rights — the retailer paper is still needed; sequencing: disclose to retailer first (canon rule) |
| **G. Inverted site-license** ("we pay you") | Any retailer CFO | chain-wide | fast — money flowing toward them removes the budget cycle entirely | ~287 CZK/store/mo benchmark `[FACT — NIQ-DM]` + install | **Best possible**: M&M = Data-Act "User", retailer waives commercialization rights `[FACT — data-privacy.md §6]`; this is Marek's "pay for the data" instinct with a statute behind it |
| **H. DOOH / screen estates** (NANOVO, LCD, LUXX, POS Media, Moris media) | **Network operator** — the Quividi-validated model: analytics runs on the operator's own player hardware, operator's site contracts carry the measurement permission `[EST — researched, annex]` | operator's whole estate (100s of venues; POS Media runs multi-country CEE grocery/drugstore networks) | months; the three named CZ partners have **zero paper on disk** `[FACT — sweep]` | runs on their players (no camera retrofit where sensors exist) | Audience-measurement-at-the-screen only; and the **Cooler Screens lesson**: hardware in someone else's store is a tenancy that ends when the retailer's strategy changes. Treat as opportunistic distribution for P3, not capture strategy |
| **I. M&M-operated venues** (vending [Vilgain live `[FACT 3.3]`], gyms, window/street panels, events) | Venue owner takes a fee | 1 per signature — but the signature is trivial | days | kit + venue fee | **Cleanest of all**: M&M is operator and Data-Act User; Site-Host agreement, full commercialization rights; low per-venue volume |
| **J. POS-vendor marketplace** ("buy the join, not the pixels") — cloud-POS platforms with self-serve app stores (Dotykačka-class, ~25k CZ merchants `[EST — prior-work inventory, verify]`) | Platform partnership + merchant self-serve opt-in | hundreds of SMB merchants per platform | 2–4 mo partnership + 4–8 wks app build | rev-share | Merchant opt-in delivers **camera permission AND the transaction feed in one click** — the only mechanism where the POS join arrives with the permission; SMB volume, not chain density; one platform max in this window |

**The legal gate that sits across every mechanism** (researched, adopted as doctrine): EDPB Guidelines 3/2019 on video devices establish that existing retail CCTV is almost universally lawful under the legitimate interest of *property protection* — and that turning those cameras to marketing/audience analytics is a **purpose change** requiring its own Art. 6(4) compatibility analysis, fresh signage, a DPIA (large-scale systematic monitoring), and — decisively — that the analytics vendor "will have to make its own legal analysis" and cannot shelter under the retailer's existing basis `[EST — EDPB 3/2019 ¶2, ¶51–55, annex]`. Practical consequence: **one signature ≠ one legal basis.** The signature unlocks the estate; the compliance pack (Module 1/C5) manufactures the legal basis, per chain, as a repeatable product. The mechanisms below are ranked with this gate priced in — it is also why the pack is a moat: every competitor riding CCTV owes the same homework, and none of them arrive with it done. (The same guidelines' ¶76–77 confirm the carve-out M&M's architecture is built on: ephemeral, non-identifying inference without biometric templates is not Art. 9 biometric data.)

### 2.2 Brutal honesty per mechanism

**A is the firehose.** One chain-platform deal ≈ 200+ locations, real motivation (the RFI *is* a procurement process — they are already paying M2C for camera operations and are dissatisfied with fragmentation `[FACT — RFI §4.1.5]`), and the rights conversation happens once, at maximum leverage, embedded in a contract the retailer wants for their own reasons (safety/ops/compliance — the three benefit areas the RFI names `[FACT — RFI Zhrnutie]`) — and which, under the Checkpoint-1 architecture, costs them nothing. Everything else in this plan either feeds A (C3 build, C5 pack, Module 5 evidence) or monetizes what A captures (Module 4 products). The catch, stated plainly: M&M has never run a competitive RFI process, incumbents (Hikvision integrators, M2C itself) will bid hardware-heavy solutions, and chain procurement can take months. Mitigation: M&M's bid is the only one that can (a) reuse the estate with zero new hardware on new-format stores, (b) hand the DPO a finished compliance pack, (c) attach a revenue-generating audience layer no security integrator can offer. Bid to win the *store* scope; do not bid to win warehouse ops (crowded, off-moat) — offer warehouse as a phase-2 partner scope, ideally *with* M2C (converts the incumbent from rival bidder to delivery ally — their hardware/ops, M&M's AI layer).

**G is the sleeper and should be standard kit.** The inverted deal is usually dismissed as "we can't afford to pay retailers." Quantified, that's wrong: at the NIQ-DM supply benchmark (~287 CZK/store/mo), **every 100 stores of paid access costs ~€14k/yr** `[EST: 287×12×100/24.5]` — one founding-seat brand contract covers ~500 stores of supply. The legal effect (Data-Act User + waiver) is worth more than the cash cost, and for state-owned ČEPRO it may be the *only* fast contractual shape. The honest limit: money alone doesn't buy DPO comfort — the compliance pack still has to clear, and a retailer who smells "they're monetizing us" without the win-win frame will balk; the fee must be presented as the supply side of a partnership, not a purchase of their shoppers.

**B is undervalued by the current pipeline.** CPI is the only counterparty that pays M&M directly today `[FACT 3.2]` and the only one with a DPIA `[FACT 3.5.d]`. A portfolio rider ("same terms, all assets") is one signature away and produces dense, rights-clean footfall+demographics inventory across malls — sellable to the landlord (leasing evidence, tenant mix), to mall advertisers (audience proof), and as corpus. It will never carry POS. It is the fastest *incremental* 10–30 capture points available.

**C, D, E, F are slower than they look, for different reasons.** C (integrator): real distribution, zero rights — do one partnership (M2C, because SuperZoo makes it concrete) and stop there; do not build a partner program with two founders. D (COOP): the 2,400-store number is a brand, not a counterparty; budget it as 1–2 regional co-ops in this window, not "COOP" (open question V5, carried in Module 8: can COOP central bind member co-ops at all?). E (petrol majors beyond EuroOil): corporate country orgs are real one-signature targets but cold; RobinOil is small and warm-ish `[FACT 3.4]`; sequence after EuroOil proof. F (brand mandate): highest leverage per meeting, but it is *downstream* of C2 — a mechanism that fires only after the tobacco/pet meetings happen; when it fires, it collapses the retailer cycle to "your supplier is paying, sign here" — and it has a concrete install channel: **brand-owned powered fixtures** (tobacco display units, branded coolers, vending), serviced by the brand's *existing weekly field-merchandising force*, which turns one brand deal into a cross-chain deployment vector with zero M&M installers (disclosed to retailers always — canon rule). J (POS-vendor): the right *second* channel after the RFI, because it is the only one where permission and the POS join arrive together; gate it exactly as prior analysis did — one qualified platform meeting by 30 Sep or it dies like the passive partners.

**H and I are corpus plays, not revenue plays, in this window.** I (M&M-operated) matters strategically as the rights-cleanest fallback if retailer paper stalls — and vending (Vilgain live) is POS-native — but the volumes are small. H (DOOH) has zero paper and three-way rights friction; take any inbound, chase nothing.

**Verdict — the sales cycle is "killed" by three moves, not ten:** (1) win the inbound RFI as a platform deal with rights embedded (A), (2) run the EuroOil/tobacco forcing sequence to its date-certain conclusion (E+F, with the Moris clock as the deadline machine), (3) paper CPI portfolio expansion (B) as the fast, boring win. Everything else is opportunistic. This is also what two founders can actually hold (C6): three primary negotiations, each worth 100+ locations per signature.

> **Decisions required from founders (M2):**
> 1. Confirm the three-front focus (SuperZoo platform / EuroOil-tobacco / CPI portfolio) and the explicit *deprioritization* of COOP-as-a-whole, DOOH estates, O2, and new pilot logos for the next 90 days.
> 2. Approve approaching M2C as a partner (delivery ally / warehouse scope) rather than treating them as a rival bidder — this discloses M&M's bid intent to the incumbent; the alternative is bidding against them blind.
> 3. Approve the inverted site-license as a standard offer variant (it commits M&M to paying access fees when triggered).
>
> **Kill-tests scheduled (M2):**
> - RFI shortlist signal (are we invited to present?) — Josef — ≤3 weeks after response submitted.
> - CPI portfolio-rider conversation — Josef — by 15 Sep.
> - M2C partner probe (one call: hostile or curious?) — Ondřej — by 30 Sep.
> - Inverted-deal reception at ČEPRO (term-sheet floated via the Moris channel per D1 §II.12, or direct after waiver) — Josef — by 15 Oct.

---

## Module 3 — Maximum commercially valuable visual data (quantity play)

### 3.1 What a "commercially valuable session" is

A session (one unique visitor observed once) is worth what someone will pay for the aggregate it feeds. Define session value as the product of four factors:

**V = A × M × R × L**, where

- **A — attribute yield**: how many of the ~80 attributes `[FACT 3.1]` actually fill at usable confidence in that environment (camera height/angle/light; fill collapses in bad placements — brand-worn already sits at only 4–10% in *good* placements `[FACT 3.3]`).
- **M — category monetizability**: the wallet attached to the category read. Tobacco-at-fuel and FMCG-at-grocery are proven 8–18.5M CZK/yr wallets `[FACT 3.8]`; drugstore carries the P&G/Henkel/L'Oréal complex; pet carries Purina/Mars/Vafo `[FACT — brain dossiers]`; a mall corridor carries advertiser + leasing wallets; a gym carries almost none.
- **R — rights cleanliness**: 1.0 when M&M is operator with a Site-Host waiver (Data-Act User); high with a signed DPA+license rider; ~0 when captured under a pilot with no data clause — today's fleet `[FACT 3.5.a]` — because it cannot legally feed a sellable aggregate until paper is retrofitted.
- **L — POS linkability**: sessions in POS-linked stores are worth a multiple of visual-only sessions (they calibrate everything else — Module 5); sessions in POS-*native* environments (vending, new-format SuperZoo stores whose entrance camera already writes into the POS DB `[FACT — RFI §4.2.1]`) carry L≈1 at zero extra integration.

Corollary, stated once and used everywhere: **13 3k sessions across 11 devices `[FACT 3.3]` currently have R ≈ 0.** The single highest-leverage "data acquisition" act available is not a new camera — it is a signature that flips R on the existing corpus (mandate → license retrofits). Quantity without rights is inventory in a warehouse with no door.

### 3.2 Ranked acquisition plays

Scored qualitatively on **sessions/month per founder-hour × V × time-to-live** (columns show the dominant factor; fleet math where checkable):

Volume planning rate, derived from the live fleet's own actuals rather than guesses: **~1,500 sessions/location/month** (per-tenant range 861–2,411 `[EST — 133k sessions ÷ 11 devices ÷ ~9 months; per-client table in prior-work annex, V2 verify against Postgres timestamps]`). Marek's "1,000 stores" is therefore ~18M sessions/year; the current historical corpus is ~0.7% of one such year.

| # | Play | Sessions/mo at scale `[EST — 1,500/loc/mo rate]` | V drivers | Founder-effort to unlock | Time-to-live | Verdict |
|---|---|---|---|---|---|---|
| 1 | **SuperZoo estate ride** (206 CZ → 250+ CZ/SK stores on existing cams) | ~310k/mo at 206 stores; ~375k at 250 | A: purpose-placed entrance cams; M: pet wallet; R: negotiable in one contract; **L: POS-native on new-format stores** | ONE negotiation (already inbound) | 4–8 wks post-build | **Do first. The RFI is the template's live instance.** |
| 2 | **EuroOil 50-station wave** (Moris-funded install `[FACT — D1 §II.2]`) | ~75k/mo | M: the #1 tobacco wallet; R: needs direct ČEPRO paper; **L: none — and this is the wave's whole weakness: ONE receipt-level POS station calibrates all 50 (gold-store math, §5.1); that single feed is worth more than the other 49 installs combined** `[EST — prior-work arithmetic, adopted]` | Moris channel + tobacco forcing + the POS-feed ask | wave already planned | Do in parallel; ask for the gold station **now** |
| 3 | **CPI portfolio** (malls) | ~high per asset — mall corridors far exceed store rates `[ASSUME — verify portfolio + rates]` | A: good (corridors); M: advertiser+leasing; R: best paper status today; L: never | one rider signature | weeks | Fast, clean, shallow — volume + landlord revenue |
| 4 | **Teta 511 counter-NIQ** `[FACT — facts.yaml]` | ~770k/mo at full chain | M: drugstore = P&G's home category complex; R/L: to negotiate | one mid-size-chain cycle (cold-ish) | Q1-27 realistically | The **second** platform deal; start the cycle now, monetize next year |
| 5 | **COOP regional co-op ×1–2** | ~45–450k/mo per co-op (30–300 stores) | M: FMCG wallet (Asahi seed `[FACT — brain]`); R: per-co-op paper (V5: can central bind?) | one cycle per co-op | Q1-27 | Start one as the grocery beachhead; do not budget "2,400 stores" |
| 6 | **POS-vendor marketplace** (mechanism J) | ~1.5k/mo per opted-in merchant | R+L arrive together (the join with the permission) | platform partnership | Q1-27 (post-S2) | The right second channel; one platform only |
| 7 | **Vending / unmanned** (Vilgain live) | ~10–50k/mo per 100 machines `[ASSUME]` | R: operator-clean; L: POS-native; M: niche | trivial per machine | days | Corpus + methodology; not a revenue driver |
| 8 | **M&M-operated street/window/event panels** | arbitrary | R = 1.0; M ≈ 0 (no category wallet); pure corpus | low | days | Only if the AI-data line (Module 4) validates; else skip |
| 9 | **DOOH estates** | — | zero paper `[FACT — sweep]`; three-way rights | high | months | Inbound-only |

Geography note (prompt principle 9): the ranked plays are CZ/SK because the counterparties are — but play 1's *template* is geography-free: any chain on Hikvision/ONVIF estates anywhere in the EU is addressable with the same three SKUs and the same compliance pack, and Plaček itself extends to PL/LV (400+ group `[FACT — RFI §1.1]`). P&G's locality rule (CEE data for CEE subsidiaries `[FACT 3.9]`) means CEE density is an asset, not parochialism; the first non-CZ/SK deal should ride an existing counterparty's footprint (Plaček PL, Orlen PL) rather than a cold market entry.

### 3.3 The commercial definition the founders should adopt

For the next 6 months a session counts toward the plan only if **R > 0 or a dated path to R exists** (mandate signed, or license rider in negotiation). Track weekly: (a) rights-clean sessions/month, (b) POS-linked share of those, (c) category coverage (stores per category per chain — density gates the sellable tier `[FACT — canon ladder: 30–60 stores = chain read; 150–300 across ≥2 chains = channel currency]`). Vanity metric to stop reporting: raw datapoints.

### 3.4 Productizing the RFI template — "Your cameras. Our engine."

The product the RFI asks for, generalized into three deployment SKUs (all three legally pre-designed in `data-privacy.md` `[FACT]`):

| SKU | Where it lands | What ships | Marginal cost/store | GDPR posture |
|---|---|---|---|---|
| **S1 — On-prem software** | New-format stores with capable recorders (i5-class `[FACT — RFI]`) | container on retailer hardware, pulls local RTSP, emits anonymized session rows + k≥25 aggregates; frames never leave the store | ~€0 | Strongest: on-prem processing; Art. 28 DPA + JCA |
| **S2 — Edge puller box** | Old-format stores (i3 recorders), any store with an NVR | RPi-class box on store LAN pulling NVR sub-streams (`rtsp://…/Streaming/Channels/x02`) → extraction; **bypasses HikCentral licensing entirely** — the RFI's 32-camera license cap is not the blocker it appears `[EST — researched, annex]`; note: ONVIF user must be explicitly enabled on modern Hikvision firmware | ~$130 `[FACT 3.1]` | Transient processing under DPA; 72h/30d retention regime `[FACT — dev-actions]` |
| **S3 — VMS-API ingest** | Corporate estates behind HikCentral/Milestone | server-side sub-stream pull via VMS API (HikCentral OpenAPI `previewURLs` → licensed, capacity-limited Streaming Gateway) | per-channel VMS licenses + gateway capacity `[EST — annex]` | DPA; frames flushed in-memory `[FACT — data-privacy.md Arch. 2]`. **Scale warning:** ~8 cams × 2 Mbps × 200 stores ≈ 3.2 Gbps sustained — cloud pull is infeasible at chain scale `[EST — annex]`; S3 is a small-estate/bridging tool. Edge inference (S1/S2) is mandatory at scale — which is also the cleanest GDPR posture (no image egress) |

Build gate and order: S2 first (2–3 eng-weeks, reuses everything, unblocks *any* estate immediately `[EST]`), S1 second (4–6 weeks, wins the RFI's economics), S3 third (only when a VMS-bound estate signs). The **stream-ingest ship date is the plan's single most important product milestone** — every mechanism-A deal waits on it (owner and dates: Module 6.2).

Two engineering truths carried from Module 1 into the build spec: the inference-cost verification (C7) must complete *before* S1/S2 pricing is quoted in the RFI response; and the export gate (k≥25, coarse time) must sit between the capture fleet and every product surface before third-party data flows (C5).

> **Decisions required from founders (M3):**
> 1. Adopt the rights-weighted session definition (§3.3) as the company's growth metric, replacing device/datapoint counts in all internal and investor reporting.
> 2. Approve the three-SKU productization and the S2→S1→S3 build order (this commits the eng team's next ~8 weeks and displaces other roadmap items).
> 3. Decide the RFI bid scope: stores-first with warehouse as phase-2 partner scope (recommended), vs. bidding the full warehouse ops scope solo (off-moat, against specialized incumbents).
>
> **Kill-tests scheduled (M3):**
> - The 1,500-sessions/location/month planning rate (V2) — Dima — recompute from first/last session timestamps per tenant in Postgres, then check against SuperZoo's own entrance counts during the paid PoC; if real volumes diverge >30%, the session-economics table re-ranks.
> - S2 bench against Hikvision NVR — eng — ≤2 weeks (shared with M1/C3).
> - Rights-clean session counter live in weekly reporting — Ondřej — first Monday Pack after Phase 0.

---

## Module 4 — Value & customer: who actually pays, what recurs, what scales

### 4.0 The external base rate, faced first

Before resolving the internal tensions, the category's history (researched post-mortems, sources on file in the research annex): **hardware capex killed Grabango ($73M raised), Cooler Screens (~$100M+), Imagr, and forced Amazon's own Just Walk Out retreat; "understand-your-shopper" insights as a discretionary line killed a16z-funded Prism Skylabs in 2012-vintage and starved Aura Vision for seven years; no camera-based retail-analytics company anywhere has disclosed nine-figure revenue** `[EST — researched, sources in annex]`. The two structural EU survivors do two specific things: **Veesion** (€53M raised, 5,000+ stores) plugs into existing CCTV with zero capex and bills against a quantified P&L line (shrinkage); **Quividi** sells advertising *currency* to media owners — revenue creation, not cost insight. And the one $100M+-ARR winner, Placer.ai, never touched a camera. The lesson this module obeys: **sell measurement and P&L effect into budget lines that already exist; never sell "interesting data"; never own the capex.** This is also exactly the second co-founder's note from the Marek meeting ("data alone — cool, interesting, won't pay") `[FACT — transcript]`, now with a graveyard behind it.

### 4.1 The three tensions, resolved

**(a) "Complementary, nice-to-have" (P&G) vs 8–18.5M CZK core reads (PMI/Nestlé).** These are not contradictory data points — they describe *two different products*. PMI's 8M CZK bought a **channel measurement currency**: the tobacco read in petrol/convenience, plugged into KPIs, bought annually because share is managed on it `[FACT 3.8]`. P&G's "nice to have" describes **persona/insight decks**: interesting, unbudgeted, bought once `[FACT 3.9]`. The product decision follows: M&M sells the *currency shape* — an always-on, syndicated, per-category read with the one attribute NIQ is structurally blind to (**who** engaged and bought, not just what sold), delivered quarterly in Excel exactly as P&G asked `[FACT 3.9]`, contracted annually. What moves it from complementary to budget-line: (1) attach to an **existing** line — the NIQ read it augments or displaces (P&G is already drifting from NIQ toward direct retailer data `[FACT 3.9]`; the ask at renewal is "add the who-layer," not "create a bucket"); (2) closed-loop claims nobody else can make (segment × engagement × receipt at 92% match `[FACT — stats.yaml]`); (3) founding-seat pricing that makes year-1 a cheap option on the category currency (Module 1/C2-hack-2). Kill-test carried: if founding seats don't sell (C2), the complementary cap is binding and E2 reprices to studies.

**(b) P&G says retailer-data-first; the founders want to skip slow retailer sales cycles.** Both are right because "retailer" conflates two different relationships. As a *customer for insights*, the retailer is a bad buyer: ~4% margins, ~1 analyst per 2–3 categories `[FACT 3.9]`, no budget line — selling them insight decks is the Prism Skylabs death. As a *supply partner and platform customer*, the retailer is excellent — and the SuperZoo RFI proves it with a procurement process: retailers **will pay cash for the ops layer** (safety, queue/staffing, replenishment, dead stock, compliance — their own three named benefit areas `[FACT — RFI]`, all direct P&L, the Veesion pattern), and the same contract can carry the rights rider that P&G's advice actually points at (brands buy retailer-blessed data `[FACT 3.9]`). **Resolution: retailers are not skipped and not "sold insights" — they buy the platform (P1) and grant rights; brands pay for the read (P2–P4).** One chain negotiation produces both. This preserves the founders' instinct (no 12-month insight-selling cycles to retailers) while honoring the sequencing advice (retailer data first — as supply).

**(c) Quarterly Excel suffices (P&G) — doesn't that kill recurrence?** No: cadence and recurrence are different axes. NIQ's own model is quarterly-ish deliverables under **annual syndicated subscriptions** — recurrence lives in the contract and in KPI-dependence, not in delivery frequency. Design rule for every product below: annual term, auto-renew, syndicated (sold to every brand in the category — canon rule: no exclusivity, ever `[FACT — brain]`), with an always-on surface (index/chat/API) that creates workflow dependence between deliveries. A persona report bought once is the explicitly named failure mode; nothing below is shaped like one.

### 4.2 The recurring product architecture

| # | Product | Buyer | Price hypothesis | Delivery cost | Why it recurs |
|---|---|---|---|---|---|
| **P1** | **Store Intelligence Platform** — "your cameras, our engine": entry counting that actually works (the RFI admits their pixel-counting is wrong `[FACT — RFI §4.2.3]`), queue/staffing signals, dead-stock & replenishment alerts, incident/risk flags, unified cloud dashboard, **compliance pack** (DPIA/LIA/signage/DPA + counsel letter) | Retailer chain — **priced at €0: pure barter for the rights rider** (perpetual k≥25 aggregate license + POS feed + brand-outreach blessing) `[DECIDED — Checkpoint 1, 18 Aug: brands-only architecture; retailers are supply, never revenue]` | **€0 license.** M&M carries the operating cost: <1,000 CZK/store/mo all-in `[FACT — internal]` → ~€120k/yr at 250 stores `[EST: 250×~1,000×12/24.5×~0.98]`. This IS the data-access burn Marek proposed — spent as free infrastructure instead of fees | S1/S2 marginal ~€0–5/store/mo + inference (C7 verify) | Not revenue — but the contract renews because the retailer's counting, reporting and compliance run on it; **it is the rights carrier and the switching-cost moat** |
| **P2** | **Category Read** — syndicated who×what channel currency: quarterly Excel/API read of segment × engagement × purchase for one category in one chain (T1) → across chains (T2) | Brand insights/trade-marketing (tobacco, pet, drugstore FMCG) | **T1 1–3M CZK/yr/brand (30–60 stores); T2 3–8M CZK/yr/brand (150–300 stores, ≥2 chains)** `[FACT — canon ladder; anchored: PMI paid ~8M for the petrol tobacco read; ÚZEI pays ACNielsen 3.7M/yr for a public feed]`; founding seats 50% off yr-1, max 3/category, density escrow | Dima + report factory (exists `[FACT 3.1]`); marginal cost per additional brand ≈ 0 — **this is the 20–60× syndication spread engine** `[FACT 3.8]` | Annual syndicated subscription; KPI integration; category managers re-buy currencies, not reports |
| **P3** | **Closed-loop campaign measurement** — did the in-store campaign move the segment that saw it: audience proof + conversion delta, for retail-media campaigns on any screen estate (incl. Moris/EuroOil screens) | Brand trade-marketing; retailer/estate RMN teams | **200–500k CZK/campaign or 5–10% of media** `[FACT — canon]` | Per-campaign analyst time (Dima-heavy — capacity-capped until hire) | Usage-based; converts to retainer once a brand runs ≥3 campaigns/yr |
| **P4** | **Store Twin** — the productized translation moat: chat + simulation seats over the aggregate layer ("ask your channel anything"; P&G explicitly wants the chat UI `[FACT 3.9]`), quarterly recalibrated from the POS×visual join (Module 5) | Brand teams & agencies (seat bundles) | **€1.5–4k/mo per brand seat bundle** `[ASSUME — no external anchor yet; kill-test below]` | Chat is demo-grade → productization cost in Module 6.2; marginal serve cost low | Tool-in-workflow; recalibration cadence; expands per seat |
| **P5** | *(demoted)* Personalization screens | Only where a **brand funds deployment** (tobacco wave: €120/device/mo ask stands `[FACT — facts.yaml]`) | — | — | Not sold standalone; see §4.4 |

Two deliberate absences: **retailer-paid insight dashboards** (the canon already demoted them to barter `[FACT — brain]`; this document confirms — the dashboard is P1's UI, not a product) and **raw-data feeds to brokers** (violates the moat principle — collection feeds translation; brokers get distribution conversations only after the currency exists).

### 4.3 Primary customer for the next 6 months — the decision `[DECIDED — Checkpoint 1, 18 Aug]`

**Brands-only. Retailers are pure supply — they are never asked for money; they grant rights and receive the platform, reports and compliance pack free as consideration.** The founders chose this over the dual-engine variant (retailer-paid SaaS + rights) that this module's derivation recommended; the trade is recorded in the decision log (Module 8.3): M&M forgoes ~€240–360k/yr of potential platform SaaS revenue on a SuperZoo-scale chain `[EST: 250 stores × €79–119/mo]` and instead carries ~€120k/yr of operating cost as the price of a cleaner story, a friction-free rights ask ("it costs you nothing, ever"), and total absence of budget cycles on the supply side. The RFI response follows: **M&M bids the store layer at €0 license** — free counting (fixing their admittedly broken counters `[FACT — RFI §4.2.3]`), free dashboards, free compliance pack, in exchange for the Data Partner rider — an offer no security integrator can match or even parse. Hardware where needed (S2 boxes for old-format stores) at cost pass-through; warehouse ops scope offered as phase-2 partner work (M2C), not bid solo.

Concretely, the six accounts of the next 6 months: (1) **SuperZoo/Plaček** — free platform + rights now, pet founding seats (P2) from Oct; (2) **EuroOil/ČEPRO** — tobacco-funded wave (P5) + direct data paper, tobacco founding seats inside the Oct–Nov budget window or not this year (C2 kill-test governs); (3) **P&G** — lighthouse via the free-mini-read bucket hack, revenue expected Q1-27, not counted earlier; (4) **Teta** — second supply cycle started now (counter-NIQ pitch `[FACT — facts.yaml]`), brand revenue next year; (5) **pet & tobacco brand lists** — the actual paying customers: JTI/PMI/BAT/PM-Slovakia; Purina/Mars-RC/Vafo-Brit + mid-tier pet; (6) **CPI** — the one exception to "nobody upstream pays": a landlord is not a retailer; CPI stays a (small) direct-pay analytics customer `[FACT 3.2 — they pay today]` and portfolio-expansion target (flagged in the decision log for founder confirmation). Brokers/data companies: not customers in this window. NIQ posture (used by Module 6): **coopetition-with-a-clock** — build independently, price against their lines (their EMEA revenue is $1.73bn and their average client pays ~$173k/yr `[EST — NIQ S-1, annex]`), open the direct NIQ contact only after ≥1 rights signature + ≥1 paid brand contract; not before 1 Nov `[ASSUME — revisit at Checkpoint 2]`.

**Closest untapped euro** (shortest path from existing data to first data-euro): the **first pet-category study at 150–500k CZK** the day the SuperZoo mandate is signed (GymBeam-grade methodology and the report factory already exist `[FACT — stats.yaml/3.1]`), the **CPI expansion invoice** (the exception account), and **founding-seat deposits** against the tobacco/pet reads. **Most scalable value:** P2 at T2 (channel currency — marginal cost ≈ 0 per added brand; NIQ's own S-1 shows the structure: it pays out only ~16% of revenue for all its data acquisition `[EST — S-1: Cash Data Costs 16% of $3.97bn]`) and P4 (pure software on the same aggregates, priced where synthetic-research products already transact: Synthetic Users from $12.5k/yr, Yabble $8.9–80k/yr `[EST — published pricing, annex]`).

### 4.4 The personalization verdict — CONFIRM demotion, with one nuance

Evidence for demotion: Marek's visceral reaction and the VC-scale argument `[FACT — transcript]`; P&G's indifference to it `[FACT 3.9]`; retailers' core fear is data misuse, and personalization is the scariest framing of the same cameras (own objections bank `[FACT]`); the entire capex-death pattern above — **Raydiant died selling screens with analytics bolted on; Cooler Screens died owning ad hardware in someone else's store**; and legally, per-person real-time ad selection is the hardest-to-defend processing purpose in the pipeline (the inference test `[FACT — data-privacy.md]`) while pure aggregation is the easiest. **Decision: personalization is a deployment subsidy and capture surface, never the pitch, never sold standalone.** The nuance: where a brand pays for it (tobacco wave at €120/device/mo `[FACT]`) it is *good business* — brand-funded screens finance the capture estate and create the retail-media surface P3 measures. Existing screen commitments are honored; the word disappears from the cover narrative (canon already moved it to the vision slide `[FACT — narrative.md]`).

### 4.5 The Marek corpus angle — evidence vs conviction, and the founders' call

The instinct "burn a round acquiring data, sell the corpus to AI labs/startups" was tested against the market. The evidence is negative: **no verified transaction of passive shopper/CCTV/POS behavioral data to an AI lab exists in the public record** (checked across ~91 tracked licensing agreements `[EST — annex]`); labs pay for elicited expert labor (Scale $870M rev; Surge >$1bn; Mercor $2bn ARR) and *content* licensing (Reddit↔Google $60M/yr); the named comp (Rehearsals/Deep Prediction, a16z Speedrun) builds AI twins from its **own consented interview panel, explicitly not purchased data**; and the raw-video price floor collapsed in Apr 2026 when a ~1M-hour egocentric corpus went free under Apache 2.0. The one live positive: premium *annotated* video transacts at $60–240/hr (Troveo has paid $20M+ to owners), and synthetic-consumer research products transact at published prices (Synthetic Users from $12.5k/yr; Yabble $8.9k–80k/yr) `[EST — annex]`.

**Founder decision (Checkpoint 1, 18 Aug): the AI-data line STAYS in the Module 6 revenue architecture** — conviction weighted over the negative base rate; recorded as such in the decision log. This document shapes it into its most defensible form rather than the unevidenced one: what is sold is never raw footage (legally impossible anyway — 72h deletion `[FACT — dev-actions]`) but (a) **ground-truth evaluation/calibration sets** for synthetic-consumer vendors (their simulators need real-world validation; M&M's POS×visual join is exactly that), (b) **Store Twin API access** for AI startups (P4 at B2B-data pricing), and (c) aggregate statistical priors under license. Modeled at €100–500k ARR with an explicit gate: the 10-email kill-test (Rehearsals, Aaru, Listen Labs, Fairgen, Evidenza, Qualtrics Edge…) must produce ≥2 paying responses ≥€20k/yr by mid-October, or the line zeroes in the Feb plan `[ASSUME — the whole line]`. — **Owner:** Ondřej (outreach), Josef (deals). **Cost:** hours + Dima packaging one eval-set spec. **Time-to-signal:** 3 weeks.

> **Decisions required from founders (M4) — CHECKPOINT 1 outcomes (taken 18 Aug 2026):**
> 1. **Customer architecture: DECIDED — brands-only; retailers are pure supply** (platform, reports, compliance = barter for rights; €0 retailer pricing). Overrides this module's dual-engine recommendation; trade-off recorded in the decision log.
> 2. **Personalization: DECIDED — demoted** to brand-funded deployment subsidy (§4.4), existing funded waves honored.
> 3. **Corpus/AI-data: DECIDED — kept as a Module 6 revenue line** in the defensible shape of §4.5, gated on the mid-Oct kill-test; research counter-evidence recorded.
> 4. Open (for Module 8 decision log): CPI's status as the paying-landlord exception; NIQ contact date (proposed ≥1 Nov).
>
> **Kill-tests scheduled (M4):**
> - Founding-seat sale (≥1 seat in any category ≤6 weeks post-mandate) — Josef.
> - Rights-yield of the €0-platform offer (SuperZoo signs the rider ≤4 weeks after RFI response) — Josef — RFI cycle.
> - P4 price discovery (3 brand conversations quoting €1.5–4k/mo; measure reaction) — Josef — by 31 Oct.
> - AI-data outreach (10 emails; ≥2 paid responses ≥€20k/yr keeps the line, else it zeroes) — Ondřej — by 15 Oct.
> - P&G free-read bookability (≤4 weeks) — Josef + Dima — by 15 Oct.

---

## Module 5 — The POS:visual calibration ratio

This is the scientific heart of the moat claim: if a model calibrated on POS-matched stores can reproduce what full POS collection would show in visual-only stores, then every visual-only capture point inherits POS-grade commercial meaning — and the whole quantity play of Module 3 monetizes at Module 4 prices. If it can't, the honest product is narrower. The experiment below decides which, with data that already exists.

### 5.1 Framing the question properly

"92–99% parity" is meaningless until three things are fixed: the **target statistic**, the **error metric**, and the **transfer distance**. The deliverable is not one number but a **parity table**: target × transfer-distance → measured parity with confidence bounds. Available ground truth: GymBeam — 7,475 visitors, 2,622 matched orders (92% of orders), 1.29M CZK matched revenue, 21 days, 1 store `[FACT — stats.yaml]`; SuperZoo — real POS matching, volumes to be pulled from the pilot exports (`clients/superzoo/delivered/…/pos_link_export.csv` `[FACT — sweep]`). Everything else is visual-only `[FACT 3.3]`.

Targets, ordered by statistical reachability with current data:

| Target | Statistic | Reachable now? | Why |
|---|---|---|---|
| **T1 Conversion by segment** | visit→purchase rate per age-band × gender segment | **Yes** | ~35% base conversion `[EST: 2,622/7,475]`; ~12 coarse segments ⇒ ~600 visitors/segment average — segment-level CIs of roughly ±4–6pp `[EST — binomial]` |
| **T2 Basket-band by segment** | share of small/medium/large baskets per segment | Yes, coarsely | revenue per matched order exists; 3 bands × 12 segments = 36 cells, some under k≥25 — merge cells honestly |
| **T3 Category propensity** | P(category ∈ basket \| segment) | Partially | needs SKU→category mapping; GymBeam is monobrand (narrow categories `[FACT — brain]`), SuperZoo is the real test; cell sparsity governs |
| **T4 Persona validity** | do NMF personas predict purchase better than raw demographics? | Yes | lift comparison is sample-efficient; personas exist in datalayer `[FACT — brain]` |
| **T5 Brand-worn affinity** | P(purchase \| brand worn) per brand | **No — and say so** | fill rates 4–10% `[FACT 3.3]` ⇒ 2,622 × 0.04–0.10 ≈ **105–262 brand-tagged purchase observations total** `[EST]`, spread over many brands ⇒ per-brand cells are single digits. Only *pooled* claims ("wearers of any athletic brand convert +Xpp") are honest at current volume; per-brand affinity needs ~10× the matched volume `[EST]` |

And the **transfer distances**, from easiest to hardest: (D0) same store, later weeks; (D1) same chain, different store — *measurable only after SuperZoo expansion delivers ≥2 POS-linked stores*; (D2) different chain, different category (GymBeam↔SuperZoo — **the decisive test**, because if fitness→pet transfers, chain-internal transfer is a fortiori credible); (D3) different format entirely (fuel/convenience — no POS ground truth exists there yet `[FACT — EuroOil POS modeled]`, so D3 stays *unmeasured* and EuroOil claims stay labeled modeled until a POS feed lands — this is a contractual to-do in the rights rider, not a statistics problem).

**The "POS:visual ratio" reframed — and partially already answered.** It is not one ratio; it is "how many POS-linked ('gold') stores per chain-format does parity ≥ target require?" The arithmetic that exists today `[EST — derived in the prior red-team pack from fleet actuals, verified here]`: one gold store yields ~750 joins/month (1,500 sessions × ~50% receipt-link yield observed at SuperZoo); a *coarse* reporting grid (8 personas × 12 categories, k≈130/cell) needs ~12.5k joins ≈ **2–3 gold stores × 6 months**; the *standard* grid (×4 dayparts) needs ~50k ≈ 10–11 gold-store-months per chain-format. Two consequences: (1) **M&M is POS-rich and volume-poor** — the ~7.3k usable joins already held (SuperZoo ~4.7k high-confidence + GymBeam 2,622 `[EST — V3 verify the SuperZoo confidence cutoff]`) are *inside* the coarse grid for pet, which is why the first pet study is sellable off existing data the day rights exist (Module 4.3); (2) the planning ratio is **~1–3% of locations as gold stores** (3–8 gold stores per 250 locations; 10–30 per 1,000), not a large POS-matched share — the experiment's job is to replace this with a measured curve (parity vs number of calibration stores, bootstrap-subsampled once ≥2 POS stores exist in one chain). Corollary already actioned in Module 6: **one receipt-level POS station at EuroOil calibrates the whole 50-station wave** — that single feed is worth more than the other 49 installs combined and is the highest-leverage ask in the company.

**The T5 unlock is bought, not waited for:** brand-worn fill (4–10% `[FACT 3.3]`) is an *extractor* limitation as much as a data one. A €600 pilot → €3,000 label-buy (≈1,000 consented, self-labeled photos) tunes the extractor; the entire 133k-session archive is then **re-inferred for ≈$890 of Google credits** `[EST — prior-work arithmetic; credits are free [FACT 3.1]]`, targeting upper-body fill ≥25–30% at ≤5% false-brand rate. Shoes (4%) and watches (3%) are not salvageable in this window — upper-body apparel only. Owner: CV/privacy engineer (Honza), Dima reviews; gate 1 Oct. This one experiment simultaneously feeds T5 (pooled), the Brand-Worn Index engine (Module 6), and raises the yield of every location ever added.

### 5.2 The experiment design

Protocol discipline first: **pre-register the evaluation** (targets, metrics, segment definitions, cell-merge rules, holdout splits) in a one-page doc *before* running anything — the artifact's sales value depends on it being methodologically unimpeachable, in the GymBeam-deck tradition (real match rates, p-values, honest nulls `[FACT — brain]`).

Metrics: **MAPE** on segment-share vectors (weighted by segment size); **Spearman rank correlation** on segment revenue ranking (the statistic brands actually act on: "which segments matter most"); **calibration curves** (predicted vs realized purchase probability, reliability diagrams). Parity% reported as 100−MAPE with bootstrap CIs; **k≥25 suppression** applied to every published cell `[FACT — canon]`; minors excluded end-to-end `[FACT — dev-actions]`.

| Phase | Weeks (Dima at 8–10 h/wk) | Work | Output |
|---|---|---|---|
| A — Freeze | Aug 25 – Sep 5 | Pre-registration doc; SKU→category mapping; pull SuperZoo POS exports; data QA | protocol v1 (½ page public, methodology annex internal) |
| B — D0 holdout | Sep 8 – Sep 19 | GymBeam: train weeks 1–2, predict week 3 (T1, T2, T4); same within SuperZoo | **parity v1** — first honest number, in time for the 15 Sep deck as "preliminary" and hardened by 19 Sep |
| C — D2 transfer | Sep 22 – Oct 10 | Calibrate visit→purchase on GymBeam, predict SuperZoo segment economics against its real POS; then reverse; T3 on SuperZoo only | **the decisive cross-category parity number** |
| D — Pooled + writeup | Oct 13 – Oct 24 | Pooled brand-worn analysis (T5, pooled only); persona-lift (T4); parity table + curve stub; **the artifact**: a 10-page methodology deck | **calibration artifact** for fundraise diligence + every brand pitch |

Capacity honesty: this is ~60–80 Dima-hours total `[EST]`, which is 7–9 weeks at his 8–10 h/wk `[FACT 3.6]` — the schedule above says exactly that, with zero slack. Anything added to Dima's plate (P&G free read, campaign measurement) pushes this right. Rule: the calibration artifact outranks everything on Dima's queue except the P&G free read (which reuses phase-B machinery).

### 5.3 What each outcome licenses (the claim ladder)

| Experimental outcome | The claim it licenses (external, forwardable) | What it unlocks |
|---|---|---|
| B: D0 parity ≥92% on T1/T2 | "In POS-linked stores, our visual segments predict the next weeks' purchase behavior at ≥92% parity — receipt-verified." | Fundraise deck slide; study sales; honest today+4 wks |
| C: D2 parity ≥92% | **"POS-grade segment economics from visual-only stores, validated across two retail categories at X% parity."** | The killer artifact: prices every visual-only estate (EuroOil, CPI, fleets) at data-grade value; the Module 2 mechanism-A pitch's spine; the fundraise's central claim |
| C: D2 parity 75–92% | "Visual-only stores deliver directional segment economics; POS-grade precision requires one linked store per chain — which our standard deployment includes." | Still strong: makes the POS-feed rider a *product requirement* in every rights deal (already drafted in) |
| C: D2 parity <75% | No cross-category claim. Honest position: per-chain calibration mandatory; visual-only estates sell audience/footfall products (CPI-style), not purchase analytics | Module 6's E2 restricted to POS-linked chains; CPI/landlord line unaffected |
| T5 any outcome | Pooled brand-worn claims only; **per-brand affinity claims are banned company-wide until matched volume grows ~10×** `[EST — §5.1]` | Prevents the one overclaim most likely to blow up a sophisticated-brand meeting |

One more consumer of this module: the calibration harness *is* the eval-set product for the AI-data line (§4.5) — the same protocol, packaged, is what a synthetic-consumer vendor would buy. Dima's phase-A pre-registration doc doubles as its spec. And a stretch test worth two Dima-hours in phase D: **predict a holdout store's persona mix from POS data alone** (the panel→census projection shape — cameras as the calibration panel, ubiquitous POS as the census); if it works even directionally, the addressable estate stops being "stores with cameras M&M can reach" and becomes "stores with receipts," which is all of them — the 2027 scaling thesis in one chart.

> **Decisions required from founders (M5):**
> 1. Approve the pre-registration discipline (public protocol; results reported even if unflattering — the credibility asset is the honesty).
> 2. Approve Dima's queue priority: calibration artifact > P&G free read > everything else.
> 3. Approve the company-wide ban on per-brand-worn claims until the volume gate clears.
>
> **Kill-tests scheduled (M5):**
> - Phase B parity v1 — Dima — by 19 Sep.
> - Phase C decisive transfer number — Dima — by 10 Oct.
> - SuperZoo POS export completeness check (is the pilot data sufficient for phase C?) — Dima — by 5 Sep (if insufficient, phase C needs the expansion's first POS-linked stores and slips ~4 weeks — flag immediately).

---

## Module 6 — The €5M ARR plan (by ~18 Feb 2027)

### 6.0 How this module is built

Firehose-first: the architecture follows the mechanisms Modules 1–4 crowned (chain-platform-for-rights as supply; syndicated brand reads as revenue; brands-only per Checkpoint 1), not the warmth of the current pipeline. Named counterparties are used where they serve the mechanism and replaced with archetypes where the mechanism needs counterparties that don't yet exist in the pipeline (most consequentially: a **second petrol chain**, without which tobacco can never price at T2 channel-currency level — canon rule: cross-chain claims and currency pricing require ≥2 chains `[FACT — canon ladder]`). Every line carries its gate. Prices anchor to: PMI ~8M / Nestlé ~18.5M CZK/yr demand-side `[FACT 3.8]`; the canon ladder (T1 1–3M, T2 3–8M CZK/yr/brand) `[FACT]`; NIQ enterprise subscriptions $100–500k/yr and NIQ's average client ~$173k/yr `[EST — S-1, annex]`; ÚZEI's €122k/yr net for an 11-SKU public feed `[EST — registry, annex]`; synthetic-research products $8.9–80k/yr `[EST — annex]`; Walmart's $0.75-CPM sales-lift measurement + $150k minimums `[EST — annex]`.

**Honesty up front — and an arithmetic finding that matters.** The named block below sums, **at band-top, to €4.40M — 12% short of €5M before a single deal is lost** `[EST — §6.1, arithmetic shown]`. That is not a drafting slip to paper over; it is the same structural result the prior red-team pack reached independently (their band-top sum: €4.71M), and it means the target is only reachable with an explicit **expansion block** (§6.1c, €0.81M of named-but-second-order lines) taking the ceiling to **€5.21M**. At *mid-band* prices the named stack is ~€2.8–3.0M `[EST]`. So: the plan of record is the €4.40M named block + the €0.81M expansion block, run as if €5M is the number, with §6.5 pricing the probability without softening anything.

### 6.1 Revenue architecture — every euro named

Run-rate targets at 18 Feb 2027. FX: 24.5 CZK/€. "Seat" = founding-seat syndication subscription (annual, auto-renew, 3 max per category year 1, density escrow — Module 1/C2).

**Engine E2 — syndicated category reads (P2). Named total: €2.62M**

| Category / channel | Payer (archetype where unnamed) | Contract | Price `[all ASSUME within FACT-anchored bands]` | Gate (date) |
|---|---|---|---|---|
| Tobacco @ petrol CZ | PMI CZ | T2 channel-currency seat | 8M CZK ≈ €327k (their own NIQ precedent `[FACT]`) | tobacco meeting ≤30 Sep; EuroOil direct rights ≤31 Oct; **≥1 EuroOil receipt-level POS station live ≤30 Nov** (without it the read is observational and honestly caps at ~€40–80k/yr/brand `[EST — prior-work §4.5 pricing-honesty check, adopted]`); **2nd petrol chain signed ≤31 Dec** (else T2→T1: −50%) |
| Tobacco @ petrol CZ | JTI CZ | T2 seat | 8M CZK ≈ €327k | same |
| Tobacco @ petrol CZ | BAT CZ | T2 seat | 6M CZK ≈ €245k | same |
| Tobacco @ petrol SK | Philip Morris Slovakia | T1 pilot seat (SK estate pending) | 2M CZK ≈ €82k | PM-SK meeting ≤15 Oct; any SK petrol estate ≤31 Jan |
| Pet @ Plaček CEE (CZ+SK, 250+ stores — chain ≈ channel `[FACT — brain]`) | Nestlé Purina | T2 seat | 5M CZK ≈ €204k (parent pays NIQ 18.5M `[FACT]`) | mandate ≤5 Sep; rights rider ≤15 Oct; ≥100 stores live ≤30 Nov |
| Pet | Mars / Royal Canin | T2 seat | 4M CZK ≈ €163k | same |
| Pet | Vafo / Brit | T1→T2 seat | 3M CZK ≈ €122k | same |
| Pet | 3 × mid-tier (Plaček suppliers) | T1 seats | 3 × 1.5M ≈ €184k | same |
| Drugstore @ Teta 511 | P&G | T2 seat (converted lighthouse) | 4M CZK ≈ €163k | free read shipped ≤15 Oct; Teta supply deal ≤30 Nov (caveat: Teta has a **substantial franchised share** `[EST — researched]` — the deal must cover company-operated stores first; verify the split in the first meeting); ≥30 stores ≤31 Jan; P&G renewal window |
| Drugstore | Henkel + L'Oréal | T1 seats | 2 × 2M ≈ €163k | same |
| FMCG @ COOP region + EuroOil shops | Asahi/Prazdroj | T1→T2 seat | 3M CZK ≈ €122k | 1 regional co-op live ≤31 Dec |
| FMCG | 2 × (Kofola/Mattoni-class) | T1 seats | 2 × 1.5M ≈ €122k | same |
| **Brand-Worn Penetration Index** (upper-body apparel, syndicated, NIQ/YouGov shape — promoted from the prior plan's "PR teaser" on its own arithmetic: €1,698 ARR/founder-hour, 6–10-week research-line-item cycle with **no IT/DPIA review**, needs only 13–35 locations `[EST — prior-work §3/P4, adopted]`) | 1 agency master agreement carrying ~4 end-subscriptions + 2 direct anchors (sportswear/fashion CEE subsidiaries) | annual index subscriptions | 6 subs × ~€67k ≈ **€400k** | `upper_brand` fill ≥25% by **1 Oct** (the €3k label-buy — Module 5); ≥16 locations live; index ships attached to the POS-grounded persona layer (the Heuritech trap: imagery without transaction grounding doesn't stay sold) |
| **E2 subtotal** | | | **≈ €2.62M** (tobacco 981k · pet 673k · drugstore 326k · FMCG 244k · index 400k) | |

**Engines E3–E6 + legacy. Named total: €1.78M**

| Line | Payer | Contract | Price | Gate |
|---|---|---|---|---|
| E3 closed-loop measurement retainers (P3) | 6 brands running ≥3 campaigns/yr on EuroOil/Moris + SuperZoo estates | annual retainer | 6 × €50k ≈ €300k (per-campaign 200–500k CZK `[FACT — canon]`; Walmart charges $0.75 CPM for sales-lift `[EST — annex]`) | screen estates live; ≥2 campaigns run by Dec |
| E4 Store Twin seats (P4) | 15 brand/agency seat bundles (sold inside E2 negotiations as add-ons, not stand-alone) | monthly SaaS, annual term | 15 × €40k ≈ €600k `[ASSUME — priced at top of synthetic-research band]` | P4 ships ≤15 Nov; price test ≤31 Oct passes at €1.5–4k/mo |
| E5 AI-data line | 4 × synthetic-consumer/AI-startup contracts (eval sets, Twin API, priors) | annual license | 4 × €125k ≈ €500k `[ASSUME — no market precedent; founder-conviction line]` | **kill-test: ≥2 paid responses ≥€20k by 15 Oct, else this line zeroes** `[DECIDED — Checkpoint 1]` |
| E6 CPI landlord portfolio | CPI asset management | portfolio analytics subscription | ~15 assets × ~€1.4k/mo ≈ €250k | portfolio rider ≤15 Oct (decision-log exception to brands-only) |
| Legacy + funded screens (P5) | Moris wholesale + tobacco-funded wave (50 stations × €120/device/mo `[FACT]`) | existing + wave | ≈ €130k | tobacco co-funding lands with seats |
| **Subtotal** | | | **≈ €1.78M** (300 + 600 + 500 + 250 + 130) | |

**Named block: €2.62M + €1.78M = €4.40M run-rate.** Every euro has a payer archetype, a contract shape, and a benchmark anchor; the two least-evidenced lines (E4 seat count, E5 existence) carry explicit kill-tests. **And it is 12% short of €5M at band-top.** The gap is closed — or not — by the expansion block:

**Expansion block (second-order lines: real payers, all contingent on a first-order line landing first). Total: €0.81M**

| Line | Payer archetype | Contract | Price `[ASSUME]` | Gate |
|---|---|---|---|---|
| CEE multi-country uplift on pet seats | Purina + Mars (CZ+SK+PL read instead of CZ+SK) | +50% on two T2 seats | +€184k | Plaček SK/PL stores instrumented ≤31 Jan; P&G's locality rule says CEE subsidiaries buy CEE-wide reads `[FACT 3.9]` |
| Fuel-convenience FMCG seats | energy/soft-drink majors (Red Bull, Coca-Cola HBC CZ) | 2 × T1 | +€122k | 2nd petrol chain live — same estate, second category off one deployment |
| Measurement retainers 6 → 10 | brands running ≥3 campaigns/yr on partner screen estates | +4 retainers | +€200k | ≥2 campaigns measured by Dec |
| Store Twin seats 15 → 20 | media/shopper agencies buying seat bundles | +5 seats | +€200k | P4 shipped + one agency master agreement |
| Second landlord portfolio | NEPI-class CEE landlord (CPI as the reference) | portfolio subscription | +€100k | CPI rider live and referenceable |

**Ceiling with both blocks: €5.21M run-rate.** Read this honestly: reaching €5M requires the entire named block at band-top *plus* most of the expansion block — i.e. essentially no losses anywhere. That is the arithmetic, stated before the probability discussion rather than after it.

**The four structural multipliers the €5M depends on** (say them, don't bury them): (1) **the second petrol chain** — Orlen/Benzina CZ (~400+ stations, corporate-owned `[EST — verify]`) or MOL CZ, approached ≤1 Nov with EuroOil proof in hand; without it, tobacco reprices to T1 (−€450k); (2) **the gold station** — one receipt-level POS feed at EuroOil, without which tobacco caps at observational pricing (−€900k across the tobacco block); (3) **band-top seat pricing**, defensible only with the D2 parity artifact ≥92% (Module 5) and density milestones hit; (4) **two product-led motions the founders have never run** (15 Twin seats; the 6-sub index) — mitigations: seats sold inside E2 negotiations, the index sold through one agency master agreement, and both carried by Dima's artifacts rather than founder meeting-hours.

### 6.2 Month-by-month roadmap (Sep 2026 → Feb 2027)

Format: **Deployment/data → Deals → Product**, each item owner-tagged (J=Josef, O=Ondřej, D=Dima, E=eng). Dependencies run left to right across rows.

**Sep** — *the paper month.* Deploy: 11 devices + SuperZoo 3-store PoC prep (incl. read-only RTSP access to 2–3 stores asked at the exec meeting — the RFI's technical validation and the S2 proof in one ask); rights-clean sessions: 0 → first mandate. Deals: SuperZoo exec meeting with mandate on the table (J, ≤5 Sep); RFI response submitted with €0-license platform bid (J, ≤12 Sep); Moris §II.7 letter sent (O, ≤25 Aug — Week 1); tobacco meetings via all three channels (J, ≤30 Sep — kill-test); **gold-station ask — one receipt-level POS feed at one EuroOil station, via Moris** (O, ≤30 Sep); CPI rider conversation (J, ≤15 Sep); Teta cycle opened (J); Dotykačka-class POS-vendor probe (O — qualified meeting ≤30 Sep or the channel dies like the passive partners); AI-data 10 emails (O, ≤15 Sep); fundraise deck locked with parity v1 (O+J, 15 Sep). Product: P0 GDPR purge done (E, Week 1); **Google-credit grant terms check — dollar-capped or time-boxed** (E, Week 1, one hour: at 1,000 devices, $20k/mo of inference is 1.7× total burn `[EST]`); S2 bench vs Hikvision NVR **and one non-Hikvision ONVIF source** (E, ≤5 Sep — the generic-ingest rule: ~3 extra days that turn one bid's adapter into every fleet's key); S1 MVP build starts (E); **label-buy pilot €600 → €3k** (Honza, verdict 1 Oct); LLM 10× load test (D+E, ≤5 Sep); parity v1 (D, 19 Sep).
**Oct** — *the conversion month.* Deploy: SuperZoo wave 1 — 30–60 stores live via S1/S2 (E); EuroOil 50-station wave install begins (Moris pays `[FACT — D1 §II.2]`), **gold station included if the Sep ask landed**. Deals: SuperZoo platform+rights contract signed (J, ≤15 Oct — **the plan's single most important signature**); tobacco founding seats negotiated inside budget window (J); first pet study sold 150–500k **off data already held** (J — Module 5: the coarse grid is already passed); E5 kill-test verdict (O, 15 Oct); P4 price test across 3 brand meetings (J, ≤31 Oct); index build starts if the fill gate passed (E+D, 1 Oct verdict); EuroOil direct data paper via Moris channel (O); raise partner meetings (J+O). Product: D2 parity number (D, 10 Oct); P4 productization sprint (E); export gate k≥25 live before external-estate data flows (E).
**Nov** — *the raise month.* Deploy: SuperZoo 100–150 stores; EuroOil wave live. Deals: **round closed ≤15 Nov (C4)** or bridge drawn; tobacco seats signed (J) — or line killed per 30 Sep test; Purina + Mars seats in negotiation (J); Orlen/Benzina approached with EuroOil proof (J, ≤1 Nov); CPI rider signed (J); Teta LOI (J); index sold via agency master agreement (J + bizdev); NIQ contact opened only if ≥1 rights + ≥1 paid brand contract (J — posture per §4.3). Product: P4 ships (E, ≤15 Nov); index factory build (E — the "one build, sold N times" line); calibration artifact final (D, ≤24 Oct, carried into diligence).
**Dec** — *the density month.* Deploy: SuperZoo 200+; first COOP co-op live; CPI portfolio live. Deals: pet seats 2–3 signed; 2nd petrol chain term sheet (J, ≤31 Dec — tobacco T2 gate); drugstore/Teta supply deal (J). Ops: hire #1 integration contractor + hire #2 bizdev/analyst (O — affordable only post-raise). *Cash floor: without the raise or bridge, this month is the survival variant (§6.3).*
**Jan** — *the replication month.* Deploy: Plaček SK extension (same rights deal, +SK stores); Orlen pilot stores. Deals: P&G converts at renewal (J); FMCG seats (Asahi+2) (J); Twin seats push to 20+ (J+bizdev); PM Slovakia seat (J). Product: Twin recalibration v2 from POS×visual joins (D).
**Feb** — *the tally month.* Deploy: 400–600 rights-clean stores target `[EST — SuperZoo 250 + EuroOil 50 + CPI + co-op + Orlen pilot]`. Deals: close remaining seats; re-price T1→T2 where 2nd chain went live. **18 Feb: run-rate audit against this table, line by line.**

### 6.3 Cash & fundraise plan

**Burn trajectory** `[EST]`: base €12k/mo `[FACT]` + DPO/counsel ~€1.5k/mo (Sep→) + free-platform inference: the barter architecture makes M&M carry ~€41/store/mo all-in `[FACT — <1,000 CZK]`, i.e. ~€2k/mo at 50 stores (Nov) → ~€10k/mo at 250 (Feb) — **the data-access burn is real opex and rises with success** (LLM inference rides free Google credits through this window `[FACT 3.1]`; the Week-1 grant-terms check verifies whether the grant is dollar-capped — post-credit economics are a 2027 problem priced at ~€43–59/store/mo `[EST — prior-work table]`) + contractors from Dec ~€7k/mo. Monthly: Sep 14 / Oct 15 / Nov 17 / Dec 22 / Jan 26 / Feb 28 ≈ **€122k total Sep–Feb** vs €50k cash `[FACT]` + €40–80k revenue-now (M1/C4-hack-3) + bridge option €60–100k. Spending discipline adopted verbatim from the red-team pack: **at €12k/mo, every €400 of speculative spend costs one day of corporate life** — everything expensive (paid rights at scale, panels, M&A, seller #2) sits behind the raise; the pre-raise Track-2 experiments (label-buy, tally kill-test, dev-program applications, Dotykačka probe) together cost ~€4k ≈ ten days of runway, spent to de-risk the round itself. Without the round, the company reaches Feb only on bridge + revenue-now **and** by freezing rollout at ~60 stores (inference cap) — the survival variant: keep SuperZoo contract alive at reduced wave pace, keep tobacco/pet seats (they're founder-time, not cash), drop hires, drop Orlen/COOP/SK. The plan degrades to ~€0.5–0.9M run-rate `[EST]`, not to zero.

**Raise strategy & timing:** €500k pre-seed at €6–7M post `[FACT]`, process started 1 Sep, **closed ≤15 Nov** (4 weeks before the wall). Artifacts that carry it: the RFI (inbound demand for the model), mandate #1 (rights are grantable), parity v1→D2 (the moat is measurable), founding-seat LOIs/contracts (brands pay), and the NIQ-spread economics (supply acquired at €0–marginal vs NIQ's $636M/yr data-cost line `[EST — S-1]`). Marek's €10–30k `[FACT]` goes into the standby bridge CLA regardless. **The €2–4M "data-infrastructure round" is deliberately NOT in this plan's math** `[FACT 3.2 — sluggish EU VC; prompt rule]`: its trigger conditions are ≥2 rights signatures + ≥€250k contracted ARR + D2 ≥92%, launch January, close Q1/Q2-27; if it lands early, it accelerates hires and the 2nd-chain build, nothing else changes shape.

**Market selection:** CZ is the lab; SK enters via counterparties already owned (Plaček SK stores, PM Slovakia) in Jan; PL only as Plaček-group rights extension (no cold-market entry with two founders); everything else waits. This is not timidity — P&G stated CEE-local data is what CEE subsidiaries can buy `[FACT 3.9]`, so CEE density outprices thin multi-country spread in this window. The *architecture* is geography-free (any ONVIF/Hikvision estate + the same paper), which is the 2027 expansion story for the bigger round.

### 6.4 Capacity plan

Selling capacity: ~1,000 founder-hours over 26 weeks `[EST — M1/C6]`. The €5M table needs ~15 brand contracts + 4–5 supply deals + ~30 seats. Load: brand contract ~40–80h incl. procurement; supply deal ~80–120h; seats ~8–15h when sold as add-ons inside E2 negotiations. Total demand ≈ 1,400–1,900h `[EST]` — **overcommitted by ~1.5–2× on founder time alone.** The plan closes the gap four ways: (1) **syndication-native selling** — founding-seat *cohorts* per category (one roundtable, three buyers) rather than serial 1:1 cycles; (2) Dima's artifacts (calibration, free reads) doing the pre-selling; (3) **hire #2 (bizdev/analyst contractor, Dec, ~€3–4k/mo)** taking seats + campaign measurement delivery; (4) the explicit deprioritizations already decided (O2, Vilgain, DOOH, COOP-at-large, new logos). Engineering: S1/S2/S3 + P4 + export gate ≈ 14–20 eng-weeks over the window `[EST]` — fits the existing team only if the dashboard/feature roadmap yields; hire #1 (integration contractor, Dec) absorbs per-chain integration so core eng stays on product. Dima: fully allocated by Module 5 + P&G read; nothing else lands on him before Nov.

### 6.5 Honest probability assessment — and the prior-work convergence check

*(completed after the independent derivation above; the prior strategy pack was read only at this point — see decision log)*

**P(€5M run-rate by 18 Feb 2027): ~5%** `[EST]`. The stack requires simultaneously: tobacco meetings materializing within 6 weeks after a summer of failing to get them; a cold second petrol chain signing in ~8 weeks; band-top pricing holding across 15 contracts; a product-led seat motion (30 seats) the company has never run; the AI-data line surviving a kill-test the public record says it should fail; and a raise closing on schedule in a sluggish market. Any one is plausible; the conjunction is not the modal world.

**The distribution that matters** `[EST]`: P(≥€1M run-rate) ≈ 35–45% — requires SuperZoo rights + pet seats + one more engine (tobacco *or* Twin seats *or* CPI+studies). P(≥€2.8M — the mid-band stack) ≈ 15–20%. **Base case if the hacks half-work: €0.8–1.4M run-rate, 150–300 rights-clean stores, 2 live categories, the calibration artifact, and 1–2 syndicated cohorts** — which is, notably, a strong seed-stage company even though it misses the target. Dominant failure modes, ranked: (1) tobacco access never materializes (kills ~€1.0–1.3M and the EuroOil expansion logic — mitigated only by the three-channel forcing + the pet/drugstore reweighting); (2) SuperZoo rights slip into a long procurement cycle (mitigated by mandate-first: the 60-day probe is signable without procurement); (3) raise slips past 15 Nov (survival variant, −60% on the deployment curve); (4) founding seats don't clear at T1/T2 prices — the complementary-data cap binding (reprices E2 to studies: lumpy, non-recurring, roughly −70% on E2); (5) D2 parity <92% (visual-only estates devalue; E2 restricted to POS-linked chains).

**Convergence check against the prior model's work** (the 12–13 Aug pack — God-Mode plan + firehose-correction — read in full only after this document's architecture was derived, per the re-derivation rule):

*Where the derivations converge independently:* (1) the €5M target is a **band-top conjunction that the named deals do not actually reach** — their every-named-deal-at-band-top summed to €4.71M; this document's independently-built table sums to €4.40M named (€5.21M with the expansion block). Two different architectures, built from different premises eleven days apart, both land ~10–12% short at perfection. That convergence is the strongest signal in this document; (2) the binding constraint is **signatures-per-founder-hour, not data volume** — their 873 selling hours → 4–8 signatures; this document's capacity math found the same 1.5–2× overcommitment; (3) honest Feb ceilings agree in order: their €38–91k MRR (central ~€52k ≈ €0.63M ARR) vs this base case €0.8–1.4M — slightly higher here because the €0-barter RFI architecture (which post-dates their assumptions) removes the retailer-payment gate they modeled, and because the index is promoted; (4) their P(target by Feb, any path) ≤3% vs this document's ~5% — same message; (5) COOP-as-one-signature is a myth, the gold-station feed outweighs the other 49 installs, and the coarse grid is already passed (their findings, independently re-verified here and adopted with attribution).

*What this document adopted from the pack on its merits* (recorded, not laundered): the Brand-Worn Index promotion with its €1,698-ARR/founder-hour arithmetic; the label-buy fill-rate unlock; the generic-ONVIF rule; the gold-station ask; the Dotykačka-class POS-vendor channel; the €400-per-day-of-life spending discipline; the asset scoreboard (below). *Where this document diverges:* the prior pack priced a SuperZoo SaaS line (€237–357k, their most certain revenue) — **Checkpoint 1's brands-only decision deliberately forgoes it**, trading that certain revenue for a frictionless rights ask; the founders should reconfirm that trade knowing the prior pack's number (flagged at Checkpoint 2). The pack's tobacco lines were priced observational (€60–150k trackers); this table prices T2 seats 3–5× higher, **gated explicitly on the gold station + D2 parity** — if either gate fails, this table degrades to their numbers. The pack moved €5M to Q4-2027 as its recommendation; this document keeps €5M/Feb as the operating target per the founders' mission brief and prices it honestly instead.

**The asset scoreboard, adopted as the parallel internal layer** (tracked weekly next to ARR; it is what the €2–4M round actually diligences): **≥200 permissioned locations · ≥50k POS-matched sessions · ≥3 gold stores · ≥3 signed rights instruments · upper-body brand-worn fill ≥25% · ≥1 fleet channel live.** A February that misses €5M but clears this scoreboard is a company that raises well; a February that chases €5M and clears neither is the failure mode this document exists to prevent.

> **Decisions required from founders (M6) — CHECKPOINT 2 outcomes (taken 19 Aug 2026):**
> 1. **DECIDED — adopted as-is:** the architecture is the plan of record (P≈5% acknowledged; base case €0.8–1.4M as the internal expectation; asset scoreboard tracked weekly in parallel). **Brands-only reconfirmed knowing the trade** — the pure €0 platform bid stands; the prior pack's €237–357k SuperZoo SaaS line is consciously forgone. **⚠ Correction after approval:** the table presented at Checkpoint 2 summed to €5.41M; on re-audit the named lines sum to **€4.40M** (arithmetic now shown per block), with an €0.81M expansion block taking the ceiling to €5.21M. Nothing was removed — the addition was wrong. **Re-confirm the plan of record on the corrected numbers**, and note that the correction *strengthens* the convergence finding in §6.5 rather than weakening the plan.
> 2. **DECIDED:** second petrol chain pursued from 1 Nov (Orlen/Benzina CZ first), term-sheet gate 31 Dec, automatic T2→T1 tobacco reprice if missed.
> 3. **DECIDED:** raise calendar approved — process 1 Sep, close ≤15 Nov, bridge standby papered by 30 Sep, survival variant pre-agreed; €2–4M round stays milestone-gated and outside the plan's math.
> 4. **DECIDED:** market scope CZ + SK via owned counterparties, PL only as Plaček-group extension, nothing else before March.
>
> **Kill-tests scheduled (M6):**
> - 18 Feb run-rate audit line-by-line against §6.1 — O.
> - Monthly gate review (each month's named gates from §6.2) — O — first Monday of each month.
> - 2nd-petrol-chain term sheet by 31 Dec — J — else tobacco reprices to T1 in the Feb tally.
> - Raise close by 15 Nov — O — else survival variant activates automatically (pre-agreed, no re-litigation in December).

---

## Module 7 — Constraint hacks & the data-velocity engine

### 7.1 The three binding constraints, re-derived

The founders' prior round of thinking named: (i) zero data-rights paper, (ii) unvalidated demand, (iii) deployment/data velocity (hardware-coupled pipeline, passive partners, two sellers). This document's Module 6 arithmetic re-ranks them:

**K1 — The paper (rights × demand, one coupled constraint).** Rights without demand are worthless paper; demand without rights is unservable interest; every euro in §6.1 sits behind both. The founders' (i)+(ii) are one constraint with one break-point: **the mandate letter**, which manufactures demand evidence *legally before* rights are owed (probe now, license later), plus the founding-seat escrow, which manufactures purchase commitment *legally before* density exists. The chicken-and-egg is not solved — it is contractually deferred on both ends at once.

**K2 — Signature capacity (not deployment velocity).** This is where this document diverges from the founders' trio: deployment velocity mostly *evaporated* when Checkpoint 1 committed to software-on-existing-estates (a 250-store chain deploys in remote waves; Moris pays EuroOil installs `[FACT — D1 §II.2]`). What did not evaporate is the ~1.5–2× overcommitment of founder selling-hours (§6.4), independently confirmed by the prior pack's 873-hours→4–8-signatures math. The binding resource is **signatures per founder-hour**.

**K3 — Cash × calendar.** Three immovable dates — brand budgets lock Oct–Nov `[FACT 3.4]`, cash out mid-Dec `[FACT 3.2]`, run-rate tally 18 Feb — and one soft one (SuperZoo's procurement clock, not M&M's). Everything in §6.2 is scheduled backwards from these.

### 7.2 The hacks, rebel-grade (owner · cost · time · kill-test · **legal exposure stated**)

**Against K1 (paper):**

1. **Sign it in the room.** Bring the notarized-clean mandate to the SuperZoo exec meeting and ask for the signature at the table — it is 60-day, revocable, veto-everything; there is nothing to "take away and review." — J · €0 · same day · refusal = live objection intelligence · *legal exposure: none; the instrument is designed to be harmless.*
2. **Rights-retrofit blitz.** One week, all six live pilots get the pooled-aggregate amendment offered (consideration: a free insight report or a free platform month). Every yes flips R>0 on months of already-captured sessions (Module 3.1's corollary — the archive becomes sellable inventory). — O · counsel ~€1k + concessions · 2 weeks · <2 of 6 sign = retrofits are hard, all rights must come through new contracts · *exposure: none if honestly framed; the ask itself reveals the doc's data ambitions to every pilot — intended, per disclosed-anchor doctrine.*
3. **The gold-station trade.** Offer ČEPRO the full station-level dashboard free forever in exchange for **one** station's receipt-level feed (Module 5: one gold station calibrates the 50-wave; worth more than the other 49 installs). Route via Moris per D1 §II.12 or under the requested waiver. — O · €0 · ask lands ≤30 Sep · POS vendor cannot export / ČEPRO refuses = tobacco stays observational-priced (§6.1 gate degrades gracefully) · *exposure: none; state-owned counterparty means paper any fee carefully (inverted shapes preferred).*
4. **Category roundtable ("founding cohort day").** Post-mandate, retailer-blessed: one afternoon, 4–6 brands of one category, one methodology presentation, three founding seats offered on the spot with the density escrow visible. Sells the cohort in one event instead of six serial cycles — syndication-native selling, the single biggest K2 lever applied to K1. — J · ~€1k event · first cohort ≤6 weeks post-mandate · zero seats from a full room = the complementary-cap kill-test fires (§4.1a) · *exposure: never show retailer data without the mandate; methodology + own-lab (GymBeam) data only until then — canon rule, non-negotiable.*
5. **LOI-for-early-access swap.** Brands that sign LOIs "subject to retailer data agreement" get a 3-month early-access window on custom cuts (the canon's maximum concession — never exclusivity). LOIs are then used exactly as designed: the forcing function shown to retailers. — J · €0 · continuous · *exposure: none; forwardability-safe by construction.*

**Against K2 (signature capacity):**

6. **The 8-account rule** (adopted from the prior pack's arithmetic, enforced here): at most 8 concurrent enterprise negotiations; no new enterprise logo opened after 15 Nov (a 3-month procurement floor cannot close in-window); everything else parked without guilt (O2, Vilgain, DOOH inbound, new pilots). — J+O · €0 · standing rule · *exposure: none.*
7. **Artifacts as the third seller.** The parity deck, the free mini-reads, the index sample — Dima's outputs pre-sell while founders sleep; every brand meeting opens with an artifact, not a pitch. This is why Module 5 outranks everything on Dima's queue. — D · already budgeted · continuous.
8. **Moris as commissioned sales force.** Moris already resells M&M hardware/screens; add a priced referral fee (10–15% of year-1) on introduced *data seats* (tobacco intros above all). Converts the passive channel into an agent with a number attached — while data contracts stay M&M-direct per doctrine and D1 §II.12. — O · margin · offer ≤15 Sep · Moris declines = the §II.7 clock (already running) is the only Moris mechanism left · *exposure: none contractually (D1 anticipates side agreements); optics with EuroOil managed by the disclosure-first rule.*
9. **Bizdev/analyst contractor (Dec, post-raise)** absorbs seats, index renewals, campaign measurement delivery — the only headcount the plan buys before Feb, besides the integration contractor. — O · ~€3–4k/mo · Dec.

**Against K3 (cash × calendar):**

10. **Budget-lock surfing.** Founding-seat paper is deliberately two documents: a 2026 study invoice (spendable from *this* year's marketing budget, signable now) + a 2027 subscription order (locked into the Oct–Nov planning cycle, protected by the density escrow). The brand's planner books both in one decision; M&M gets cash now and ARR at the tally. — J · €0 · with every seat · *exposure: the escrow must be real — refund/credit honored if density misses; anything else is the fabricated-number death (canon: one fake number ends a compliance-heavy buyer relationship).*
11. **Paid PoC inside the RFI** (procurement-normal), CPI expansion invoice, first pet study off held data — €40–80k of 2026 cash that requires no new strategy (M1/C4-3). — J · — · Sep–Oct.
12. **The €400 rule** (adopted verbatim): at €12k/mo burn, every €400 of speculative spend costs a day of corporate life; every pre-raise experiment above (label-buy €3k, tally test €800, cohort day €1k, counsel €2–3k) is priced in days-of-life and capped at ~€8k total ≈ 20 days — bought only because each one de-risks the raise itself. — O · standing rule.

### 7.3 Data-source requirements for the plan — and the exact paper each source needs

Feb-2027 requirements, derived from §6.1's gates and Module 5's ratios: **400–600 rights-clean locations** producing ~600–900k sessions/mo `[EST — 1,500/loc/mo]`; **≥3 gold stores** (SuperZoo has POS-native new-format stores; EuroOil needs the gold station; GymBeam continues as lab); **≥50k cumulative POS-matched sessions**; **upper-body brand-worn fill ≥25%**; category coverage: pet (100+ stores), tobacco/fuel (50+), drugstore (30+), FMCG/co-op (30+), landlord (10+ assets); geographies CZ+SK(+PL via Plaček).

| Source | Locations | The paper that makes its data sellable (specific instruments, specific signer) |
|---|---|---|
| SuperZoo / Plaček | 206→250+ | **Data Partner Agreement** signed by Plaček Pet Products s.r.o. management: Art. 28 DPA + Art. 26 joint-controller arrangement + perpetual k≥25 aggregate license + POS-feed rider + brand-outreach blessing + Art. 6(4) purpose-change analysis & two-layer signage (EDPB 3/2019 gate, §2.2) + chain DPIA. Preceded by the 60-day mandate letter (probe rights only) |
| EuroOil / ČEPRO | 50→200 | Mandate → **direct** M&M↔ČEPRO data agreement (same stack as above) + **gold-station POS rider**; communications via Moris per D1 §II.12 or the written waiver being requested; any fee to ČEPRO shaped as inverted/zero-cost-to-them (state procurement) |
| CPI | 10–30 assets | Portfolio rider on the existing contract+DPIA (the only counterparty with one `[FACT 3.5.d]`); common-area purpose already assessed; signer: CPI asset management |
| COOP regional co-op ×1 | 30–300 | Per-co-op DPA + JCA + license (central bodies cannot bind members — confirmed, §2.1); signer: the regional co-op's own board |
| Teta | 30+ (company-operated first) | Same stack; franchise share means the agreement must scope owned stores explicitly |
| Tobacco-funded screens | 50 stations | Brand co-funding letter (per brand) + retailer disclosure before any brand sees anything (canon sequencing rule) |
| AI-data buyers (E5) | n/a (derived products) | Eval-set/API license + **no-re-identification covenant** + provenance sheet (post-purge lineage: what was collected under which instrument) — nothing row-level leaves without the k≥25/coarse-time export gate `[FACT — dev-actions]` |
| Vending / own venues | 10–100 units | Site-Host agreement with explicit **EU Data Act User waiver** `[FACT — data-privacy.md §6]`; signer: venue owner |

Velocity plan in one line per quarter: **Sep** = paper month (mandate, retrofit blitz, gold-station ask, RFI response) + S2 ships; **Oct–Nov** = SuperZoo waves 1–2 + EuroOil wave + export gate live + seats close inside budget window; **Dec–Feb** = density month(s): 2nd chain, co-op, SK extension, index + Twin scale. The stream-ingest build (S2→S1→S3, Module 3.4) remains the single product dependency under all of it; its dates are owned in §6.2 and its kill-tests in M1/C3.

> **Decisions required from founders (M7):**
> 1. Approve the Moris referral-fee offer (hack 8) — it prices what has been free, and discloses the data-seat economics to a partner.
> 2. Approve the rights-retrofit blitz consideration budget (free reports/months to six pilots).
> 3. Ratify the 8-account rule and the parking list as standing policy (it will feel wrong in the room when a ninth logo knocks).
>
> **Kill-tests scheduled (M7):**
> - Retrofit blitz yield (≥2 of 6 amendments signed) — O — by 12 Sep.
> - Cohort-day conversion (≥1 seat from the first roundtable) — J — ≤6 weeks post-mandate.
> - Moris referral acceptance — O — by 30 Sep.
> - Gold-station answer — O — by 30 Sep (feeds §6.1 tobacco gate).

---

## Module 8 — The executable base-strategy layer

### 8.1 Phase 0 — readiness (Mon 24 Aug → Sun 6 Sep 2026)

Everything the plan needs true before it can run. Owners: J = Josef, O = Ondřej, D = Dima, H = Honza (CV/privacy eng), P = Petr (backend), M = Martin (cloud).

**Legal.** Counsel engaged Monday: mandate-letter čistopis (from `mm-business/templates/one-pager/mandate-letter-cz.md`), pooled-aggregate amendment template for the six live pilots, DPA + Art. 26 JCA pack skeleton, Art. 6(4) purpose-change memo template (the EDPB 3/2019 gate) — O, ~€2–3k. Moris letters sent: the §II.7 opportunity notice naming EuroOil/tobacco (starts the 6-month clock) and the §II.12 written-waiver request for direct data-contract communications — O, framed as help per the dossier playbook. External DPO retained part-time — O. **The raw-frame question (Fact 3.5.e) is resolved by execution, not debate:** the P0 purge (below) deletes the frames and the prohibited fields; retention TTLs and the k≥25 export gate follow within weeks per `mm-gdpr-dev-actions.md`.

**Tech.** P0 GDPR purge executed and confirmed in writing (prohibited fields deleted + purged from `visitors_normalized_v2`, 72h hard-delete on raw JPEGs, minor suppression) — H, by Fri 29 Aug. Google-credit grant terms checked (dollar-capped vs time-boxed — one hour that sizes the whole inference-cost runway) — P/M. S2 bench: RTSP sub-stream pull from a Hikvision NVR **and** one non-Hikvision ONVIF source (the generic-ingest rule) — P, by 5 Sep. S1 one-page spec (container on i5-14500-class recorder) — P. LLM 10× load replay on credits — D+M.

**Product.** RFI response v1 drafted: stores-first scope; €0-license platform bid with the rights rider as consideration; the compliance pack as a first-class section (their §3 is the invitation); the 250+-store licensing architecture (S1/S2 per store, no per-camera VMS licenses — the direct-RTSP finding); warehouse offered as phase-2 partner scope (M2C-friendly) — J, submit ≤12 Sep. P&G free-mini-read spec (NIQ-shaped Excel) — D, ≤10 Dima-hours, after calibration pre-registration.

**Business.** SuperZoo exec-meeting script: mandate signature in the room + read-only RTSP access to 2–3 stores + paid PoC + rights-rider preview — J. Tobacco three-channel forcing live: Moris letter (above) + PM Slovakia direct ping + two cold letters (JTI/BAT CZ trade marketing) carrying the anonymized sportstore report — J. CPI portfolio-rider meeting booked — J. Dotykačka-class POS-vendor probe email — O. AI-data 10-email list finalized (Rehearsals, Aaru, Listen Labs, Fairgen, Evidenza, Qualtrics Edge, +4) — O. Founding-seat one-pager with density escrow — O.

**Money.** Raise process opens 1 Sep: deck skeleton by 29 Aug (narrative below, §8.2-D), data room refreshed (DD folder is live; add the RFI, counsel letters, calibration pre-registration) — O. Bridge-standby CLA drafted; Marek ticket conversation (€10–30k `[FACT]`) — O. Invoices out: CPI expansion, SuperZoo PoC proposal — J.

**Energy.** The parking list enacted (O2, Vilgain, DOOH inbound, new logos — parked with two-line courtesy notes); asset scoreboard added to the Monday Pack (rights-clean locations · POS joins · gold stores · rights instruments · fill rate); Dima's calibration pre-registration frozen — D, by 5 Sep. Housekeeping: `mm-brain-bootstrap.md` still sits in the dashboard-backend repo against its own deletion instruction — move/delete per its header — O.

### 8.2 Workstream briefs (usable cold)

**WS-A — Sales & Partners** (owner: Josef)
*Context:* brands-only architecture (Checkpoint 1); retailers grant rights for a free platform; brands pay for syndicated reads, seats, measurement. Six accounts + two product-led motions; 8-account cap; no new enterprise logo after 15 Nov. *Objective:* the §6.1 table, gate by gate. *Key facts:* SuperZoo RFI live (206 CZ stores, HIKVISION estate, 250+ CZ/SK ask, no stated deadline — get one at the exec meeting); tobacco budgets lock Oct–Nov; PMI's 8M CZK NIQ precedent (INTERNAL-ONLY); pet targets Purina/Mars/Vafo post-mandate only; P&G bucket-hack via free NIQ-shaped read; EuroOil comms via Moris (D1 §II.12) until waiver; Pet Center = SuperZoo's rival — never mention cross-chain ambitions to SuperZoo yet. *Open questions:* RFI decision timeline + evaluators; ČEPRO POS-vendor export capability (V8); Orlen/Benzina CZ org chart + camera-estate ownership (research brief — the failed VSaaS section, annex); COOP regional co-op pick (which one first). *Definition of done (Feb 18):* signed instruments per §6.1 audited line-by-line; every miss carries its gate's name.

**WS-B — Product & Data** (owners: Josef + eng; Dima for data)
*Context:* the plan buys exactly one large build — stream-ingest (S2→S1→S3) — plus the export gate, P4 productization, and the index factory. Deployment default: software on existing estates. *Objective:* S2 live in a SuperZoo store ≤4 weeks after access; S1 by wave 1; export gate before any external-estate data flows; P4 ships ≤15 Nov; index ships ≤30 Nov if the fill gate passed. *Key facts:* new-format stores run i5-14500 recorders (S1 target); old stores i3 (S2 target); direct RTSP bypasses HikCentral licensing; ~3.2 Gbps cloud-pull math makes edge mandatory at scale; inference cost ~€41/store/mo all-in — verify at 10×; 72h/30-day/k≥25 regime is non-negotiable before third-party data. *Open questions:* i5 extraction throughput (C3 kill-test); VMS-API licensing economics (S3, deferred); Meraki MV Sense as a 2027 channel (annex). *DoD:* deployment counted in rights-clean stores live, not devices shipped.

**WS-C — Legal & Rights** (owner: Ondřej)
*Context:* rights paper = 0 at start; the entire revenue architecture sits behind instruments this workstream produces. The GDPR remediation is specified (`mm-gdpr-dev-actions.md`) and partially executed in Phase 0; counsel's Feb-2026 AIA letter becomes citable the day the purge completes. *Objective:* the §7.3 paper table — every source's instrument drafted, negotiated, signed. *Key facts:* EDPB 3/2019 purpose-change gate (one signature ≠ one legal basis; M&M must hold its own analysis); processor trap on third-party estates; Data-Act User flip via Site-Host waiver; mandate template exists; DPIA exists only with CPI; "age estimation with error bands," k≥25, no cross-visit — written promises. *Open questions:* Moris waiver (or route-through); ČEPRO inverted-fee shape vs procurement law; EDPB 02/2026 finalization status (watch the consultation). *DoD:* ≥3 signed rights instruments by Feb (asset scoreboard line); zero external claims that fail the forwardability litmus.

**WS-D — Fundraise** (owners: Ondřej process, Josef pitch)
*Context:* €500k pre-seed at €6–7M post; process 1 Sep → close ≤15 Nov; bridge standby by 30 Sep; survival variant pre-agreed; €2–4M round milestone-gated (≥2 rights + ≥€250k contracted ARR + D2 ≥92%), launch January at earliest. *Narrative:* "the who-layer measurement currency for physical retail — NIQ tells brands *what sold*; we tell them *who buys*, receipt-verified. Supply is acquired for free software on cameras retailers already own (inbound RFI as proof); demand is priced against reads brands already pay 8–18.5M CZK/yr for (external framing: 'incumbent syndicated spend', never the internal figures); the EU-compliance pack is the moat competitors keep dying on." *Artifacts calendar:* RFI (have), mandate #1 (5 Sep), parity v1 (19 Sep), deck locked (15 Sep), founding-seat LOIs/contracts (Oct), D2 parity (10 Oct), calibration artifact (24 Oct). *Key facts:* Marek €10–30k signaled; €80k CLA in at €3.5M cap; EU VC sluggish — no fast-mega-round dependency anywhere. *DoD:* money in the account ≤15 Nov, or the bridge drawn and the survival variant running without drama.

**WS-E — Team/Ops** (owner: Ondřej)
*Context:* 2 founders × 40h + Dima 8–10h; eng team exists but every large build competes with selling `[FACT 3.6]`. *Objective:* protect the capacity math (§6.4). *Moves:* integration contractor + bizdev/analyst contractor hired Dec (post-raise, ~€7k/mo combined); Dima's queue locked (calibration > P&G read > nothing else); label-buy is Honza's, index factory Martin's; weekly Monday Pack carries the asset scoreboard + the month's §6.2 gates; every external meeting same-day captured (existing ops protocol). *Key facts:* €400/day rule; install throughput is no longer the constraint — signatures are. *DoD:* no month ends with a gate silently missed; misses are named at the next Monday Pack.

### 8.3 Decision log

**Decided by the founders at checkpoints (18–19 Aug 2026):**
| # | Decision | Note |
|---|---|---|
| D1 | Brands-only architecture; retailers pure supply (€0 platform barter) | Overrode this document's dual-engine recommendation; forgoes ~€237–357k/yr SuperZoo SaaS (prior pack's most certain line) — reconfirmed at Checkpoint 2 knowing the number |
| D2 | Personalization demoted to brand-funded deployment subsidy | Confirms Fact 3.5.c's pending direction; funded waves honored |
| D3 | AI-data line stays in the revenue plan (€500k, gated on the 15 Oct kill-test) | Overrode negative research evidence (no market precedent); founder conviction recorded |
| D4 | Revenue architecture = plan of record; P≈5% acknowledged; asset scoreboard tracked in parallel | Approved at Checkpoint 2 as "€5.41M"; **corrected on re-audit to €4.40M named + €0.81M expansion = €5.21M ceiling** (§6.1) — needs re-confirmation on the corrected figures. Base case €0.8–1.4M remains the internal expectation |
| D5 | Second petrol chain pursued from 1 Nov; T2→T1 auto-reprice if no term sheet by 31 Dec | |
| D6 | Raise calendar + bridge standby + survival variant pre-agreed | |
| D7 | Market scope CZ+SK(+PL via Plaček) until March | |

**Decided by this document on the founders' behalf (flagged for explicit confirmation):**
| # | Decision | Where |
|---|---|---|
| D8 | Deployment default flips to software-on-existing-estates; own kit only where no estate exists | M1.3, M3.4 |
| D9 | Moris §II.7 clock triggered now + §II.12 waiver requested | M1/C2-1 — mildly adversarial toward a paying partner; draft framed as help |
| D10 | RFI bid scope: stores-first, warehouse as phase-2 partner scope (M2C as ally) | M2.2 |
| D11 | CPI remains a paying customer (landlord exception to brands-only) | M4.3 — needs founder yes/no |
| D12 | NIQ posture: coopetition-with-a-clock; no contact before 1 Nov, then only from strength | M4.3 |
| D13 | Per-brand-worn claims banned company-wide until matched volume ~10× (pooled claims only) | M5.3 |
| D14 | Prior-pack adoptions: index promotion, label-buy, gold-station ask, 8-account rule, generic-ONVIF rule, €400/day rule, asset scoreboard | M5–M7, attributed |
| D15 | O2, Vilgain, DOOH inbound, new logos parked for 90 days | M2.2, M8.1 |

**Open decisions (with what closes them):**
| # | Open | Closes when |
|---|---|---|
| O1 | Moris §II.12: waiver vs route-through for SuperZoo/EuroOil data contracts | Moris's written answer (ask sent Week 1) |
| O2 | Which COOP regional co-op first | one call with COOP Centrum for the map (it can't sign, but it can point) |
| O3 | ČEPRO fee shape (inverted site-license vs pure barter) | counsel's procurement memo + ČEPRO reaction ≤15 Oct |
| O4 | Index pricing final (€60–90k band) vs agency-master discount | first agency conversation (Nov) |
| O5 | Seller #2 / country lead for the 2027 expansion | post-raise, out of window |
| O6 | The failed VSaaS/cloud-VMS research section (Verkada/Eagle Eye/Milestone marketplaces as 2027 channels) | downstream research brief — the one gap the research pass left open |

> **Decisions required from founders (M8):**
> 1. Confirm D11 (CPI stays a paying customer — the landlord exception to brands-only).
> 2. Confirm D8–D10, D12–D15 (the calls this document made on your behalf — table above); silence is not consent on D9 (the Moris letters) or D10 (the RFI scope).
> 3. Close O1–O4 on their named triggers; O6 (the VSaaS-marketplace research gap) is the first brief to hand a downstream research agent.
>
> **Kill-tests scheduled (M8):**
> - Phase-0 completion audit (every §8.1 item done/failed, no third state) — Ondřej — Sun 6 Sep.
> - Week-1 list done-check at the first Monday Pack — Ondřej — Mon 31 Aug.
> - Workstream DoD audits — respective owners — 18 Feb 2027, alongside the §6.1 line-by-line tally.

### 8.4 Research annex (sources for downstream agents)

Three research passes (Aug 2026, Opus-class agents, sources embedded in each): (1) **competitor post-mortems** — Grabango, Raydiant/Sightcorp, Trax, Standard AI, Trigo, Cooler Screens, Placemeter, Prism Skylabs, Nomi/Brickstream lineage, Imagr, Euclid + survivors Placer.ai, RetailNext, Veesion, Quividi, V-Count, Xovis, Sensormatic; Rehearsals/Deep Prediction verification; the no-AI-lab-market-for-shopper-data negative finding. Founders to call per Marek's directive: **Will Glaser** (Grabango), **Michael Gabay** (Trigo→Gain), **Filip Matzner** (Iterait/Vividi, Prague — the only other CZ player). (2) **fleet access** — EDPB 3/2019 purpose-change gate; Hikvision RTSP/ISAPI/HikCentral OpenAPI specifics; M2C/NAM/Trade FIDES monitoring-centre structure; Quividi operator model; Cooler Screens tenancy lesson; COOP/franchise fragmentation; CPI/NEPI portfolio numbers; Meraki MV Sense; Sensormatic as slot-occupying competitor; Everseen/Kroger 1,700-store one-signature precedent. **VSaaS marketplaces section missing (O6).** (3) **pricing benchmarks** — NIQ S-1 economics ($3.97bn revenue, ~$173k avg client, 16% Cash Data Costs), enterprise syndication $40k–500k/yr tiers, ÚZEI–ACNielsen corrected to €122k net for 11 SKUs, Walmart Luminate/Nectar360/RelevanC retailer-arm benchmarks, Trade Desk leak (data fee 40–45% of CPM capped $3.50–4.00; Walmart $0.75-CPM sales-lift), in-store CPM $10–50, Placer.ai actual contracts $8–34k, AI-training-data rate cards, synthetic-consumer pricing ($8.9–80k/yr). Full agent outputs live in the session transcripts; load-bearing numbers are quoted inline where used.

---

## Week 1 — starting Monday 24 August 2026

| # | Action | Owner |
|---|---|---|
| 1 | Send the Moris §II.7 opportunity letter (EuroOil/tobacco — starts the 6-month clock) + the §II.12 waiver request for direct data-contract communications; framed as accelerating their deal too | Ondřej |
| 2 | Engage counsel: mandate čistopis + pooled-aggregate amendment + DPA/JCA skeleton + ČEPRO procurement memo (~€2–3k) | Ondřej |
| 3 | Execute the GDPR P0 purge (prohibited fields + 72h raw-JPEG deletion + minor suppression) and confirm completion in writing — counsel's AIA clean bill becomes citable | Honza (Ondřej confirms) |
| 4 | S2 bench: pull RTSP sub-streams from a Hikvision NVR **and** one non-Hikvision ONVIF source; write the 1-page S1 spec; check the Google-credit grant terms (1 hour) | Petr (+Martin) |
| 5 | Lock the SuperZoo exec-meeting script: mandate signature in the room, read-only RTSP access to 2–3 stores, paid PoC, rights-rider preview; set the RFI response deadline internally (≤12 Sep) | Josef |
| 6 | Freeze the calibration pre-registration + run the SuperZoo POS-export completeness check | Dima |
| 7 | Start the €600 label-buy pilot (200 consented, self-labeled photos → fill-rate run) | Honza |
| 8 | Tobacco parallel channels: PM Slovakia ping + two cold letters (JTI/BAT CZ trade marketing) with the anonymized sportstore report | Josef |
| 9 | Raise: deck skeleton + data-room refresh (add RFI, counsel letters, pre-registration); draft the bridge-standby CLA; open the Marek ticket conversation | Ondřej |
| 10 | Enact the parking list (O2, Vilgain, DOOH, new logos — courtesy notes) and add the asset scoreboard to the Monday Pack | Ondřej |

---
