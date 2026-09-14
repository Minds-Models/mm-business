# Number lineage — report.html

Purpose: every number in `report.html` must be traceable back to a
runnable query against `joined.jsonl` (or a companion file), not just a
value someone remembers computing. If a client or colleague asks "where
does this come from," the answer is always: this file → a named block in
a script under `queries/` → re-run it against the data.

**Process, going forward:** before (or immediately after) a number goes
into `report.html`, it gets a row below and a corresponding block in a
`queries/sectionN_*.py` script. Never let a number reach the report
without both. Re-run the relevant script after any data refresh
(`joined.jsonl` update, new persona build, etc.) and diff the output
against this table before trusting the report's numbers again.

Source data: `joined.jsonl` (54,092 rows) unless noted. Column meanings:
see `../feature_dictionary.txt`. Scope/caveats: see `../README.md` and
`../decisions_log.md`.

**Source-system key** — every field name below is tagged with which of
three independent systems produced it, so "which source did this number
come from" is answerable at a glance without cross-checking
`feature_dictionary.txt` each time:

- **(golden)** — the general-purpose visual-analysis service. Covers
  every field with no `bd_` prefix used in this report: `hour`,
  `day_of_week`, `is_weekend`, `local_date` (all derived from golden's
  `entered_at`), `apparent_life_stage`, `group_size`, `group_gender_mix`,
  `group_activity`, `sex`, `age`, `grooming_state`, `makeup_visible`,
  `has_tattoos`, `skin_tone`, `apparent_spending_tier`, `logo_prominence`,
  `brand_tier_mix`, `brand_culture_alignment`, `tech_ecosystem`,
  `occupational_context`.
- **(brand detector)** — the specialized item/brand-detection tool.
  Covers every `bd_`-prefixed field (`bd_body_archetype`,
  `bd_companions`, `bd_spending_signal`, `bd_attire`,
  `bd_shopping_mission`), plus `bd_items[].brand` (the flattened brand
  list carried in the main dataset).
- **(brand detector — raw per-item files)** — the SAME tool as above,
  but read from its fuller, per-item output rather than the flattened
  version in the main dataset: `price_tier`, `brand_basis`, `brand`,
  and the `garments[]`/`accessories[]`/`carried_items[].type` arrays,
  all marked `RAW` in the tables below. This is where per-item detail
  (which array an item came from, its own price tier, whether its brand
  came from a logo or just design recognition) lives — the flattened
  version drops all of that.
- **(persona segmentation)** — a third, separate system: the clustering
  model that assigned each visitor to one of the 8 personas
  (`nmf_topic_id`). Independent of both systems above.

## Section 1 — Traffic & Timing

Script: `queries/section1_traffic_timing.py` — run with `python3
queries/section1_traffic_timing.py` (needs `pip install duckdb`, nothing
else). Last verified: 2026-09-13 (post-fix, see bug note below), output
matches report.html exactly.

| Report element | Script block | Source column(s) | Notes |
|---|---|---|---|
| stat tile "11:00–16:00 peak hours" | `chartHour...` | `hour` (golden) | read off the shape of the hour histogram, not a separate query |
| stat tile "Sat / Thu busiest/quietest" | `chartDow...` | `day_of_week` (golden), `local_date` (golden, derived) | per-occurrence average, not raw total — see script comment |
| chartHour (bar) | `chartHour (relative, as used in report.html)` | `hour` (golden) | **2026-09-13: switched to %-of-all-visits** (was raw counts — user flagged raw counts as uninformative without sample-size context; every chart in the report is % now). Zero-filled for hours with no rows. Raw-count version kept in the script one block above, unused by report.html. |
| chartDow (bar) | `chartDow (relative, as used in report.html)` | `day_of_week` (golden), `local_date` (golden, derived) | **2026-09-13: switched to % share of a typical week** (was avg visitors/day — same reason as chartHour). Excludes 2026-07-29 and 2026-09-11 (partial-coverage edge days), by LOCAL date. Preserves the identical ranking/shape as the absolute version, just expressed relatively — Saturday still highest, Thursday still lowest. |
| "Weekly pattern" paragraph — "quietest day" + "roughly 12% more visitors" | `paragraph stat: weekend vs weekday avg visits/day` | `is_weekend` (golden), `local_date` (golden, derived) | visit-count-weighted method, LOCAL date — added 2026-09-13 after the audit below caught it missing |
| "Who shows up when" paragraph + chartLifeStage (4 lines) | `chartLifeStage: apparent_life_stage share...` | `hour` (golden), `apparent_life_stage` (golden) | % is share of *that hour's* pool, not share of all visitors; hours 6–21 only (outside that, n<80, too noisy) |
| "Solo vs. accompanied..." paragraph + chartSolo (2 lines) | `chartSolo: solo share...` | `hour` (golden), `group_size` (golden), `is_weekend` (golden) | solo = `group_size='1'`; hours 7–21. Weekday minimum is at 18:00 (66%), weekend minimum is at 12:00 (60%) — they do NOT share one location, the report text calls out both separately |
| "Child-accompanied traffic..." paragraph + chartChild (2 lines) | `chartChild: with_child share...` | `hour` (golden), `bd_companions` (brand detector), `is_weekend` (golden) | `with_child` = one parent + child, no other adult (see feature_dictionary.txt, bd_companions) |
| "(10.5% weekend vs 7.6% weekday)" inline stat | `paragraph stat: with_child / with_family totals` | `bd_companions` (brand detector), `is_weekend` (golden) | this is `with_child` + `with_family` combined, NOT `with_child` alone — double-check before reusing either figure alone elsewhere |
| footnote "gender-balanced...skews male from 19:00" | `footnote: male share of known-sex...` | `hour` (golden), `sex` (golden) | % of *known* sex only (`male`+`female`, excludes `unknown`); hours 19–22 have small n (2,709→60), flagged as thinning in the report text |

### Bug found & fixed, 2026-09-13 (via the lineage audit process)

An audit (general-purpose subagent, spawned per the standing process in
`decisions_log.md`) checked every report.html claim against this table
and re-ran the cited scripts. It found two real issues:

1. **"Roughly 30% more visitors" had no lineage row at all** — traced it
   to try to add one, and while doing so found the *reason* it hadn't
   been added: the number itself was wrong. `chartDow`'s original block
   counted calendar-day occurrences using `entered_at::date` (UTC), while
   `day_of_week` is a LOCAL (Europe/Prague) column — mixing the two
   overcounted some weekdays' occurrences (Thursday: 10 UTC-dates vs the
   true 7 local Thursdays) and changed the ranking. **Corrected**: the
   quietest day is Thursday (1,155.0/day), not Tuesday (1,197.3/day,
   actually second-quietest); weekend uplift is ~12% (1,352.1 vs
   1,210.3/day), not ~30%. Fixed in both `section1_traffic_timing.py`
   (now derives `local_date` explicitly, see file header) and
   `report.html` (stat tile, paragraph text, and the chartDow data
   array). All Saturday-related claims were already correct (Saturday's
   UTC-date and local-date counts happened to match) and needed no
   change.
2. **`chartSolo` paragraph overstated its own data**: it claimed one
   shared "least likely to be alone" window (11:00–16:00) for both
   weekday and weekend, but the weekday series' true minimum is at 18:00
   (66% alone), outside that window — only the weekend series bottoms
   out inside it (60% at 12:00). Fixed by stating both minima separately
   in report.html.

Neither issue affected `chartLifeStage`, `chartSolo`'s or `chartChild`'s
underlying data (those use the pre-localized `hour`/`is_weekend` columns
directly, no date-counting involved) — only `chartDow` and the new
weekend-ratio stat were affected, both of which explicitly count
calendar-day occurrences.

## Removed from the report — kept here so it isn't silently lost

- **Stat tile "9:00 / when retiree share of traffic peaks"** — removed
  2026-09-13. Reason: not an editorial/data-integrity issue, a "why does
  this one fact get a headline card" call — user pointed out it was one
  arbitrary slice of one chart-line among several equally-valid findings
  in this section, not a top-line fact like the other two tiles. The
  data itself was correct (mature_adult series max = 22.21% at hour 9,
  `chartLifeStage` block) — nothing here contradicts that, it's still
  visible in the chart itself. Section 1 now has 2 stat tiles, not 3.

- **Dwell time (bimodal distribution, weekday-vs-weekend dwell)** — was in
  report.html v1, removed in v2. Reason: `entered_at`/`left_at` measure
  time in the entrance camera's frame, not visit length inside the mall;
  judged not commercially meaningful even reframed to that narrower
  scope. Numbers are preserved (struck through) in `../decisions_log.md`
  under "Section 1 chart data" in case this gets revisited.
- **Weekly growth trend ("+32%")** — never made it into report.html.
  Retracted during validation (confounded by a 2026-08-25 pipeline event
  — see `../decisions_log.md`, "Validation exercise" section, and
  `../validation/`).

## Section 1 — persona lens (final view)

Script: `queries/section1_persona_timing.py` — needs `joined.jsonl`,
`nmf_topic_assignment.csv`, `nmf_persona_names.json` (all in project
root). Persona names are the official ones from `nmf_persona_names.json`
(source: prod `nmf_persona_card_v2`, delivered 2026-09-13 — NOT
self-invented; see decisions_log.md's persona table). Last verified:
2026-09-13, output matches report.html exactly.

| Report element | Script block | Source column(s) | Notes |
|---|---|---|---|
| "Retirees...47%...4-hour morning window" prose | `chartPersonaHours...` | `hour` (golden), `nmf_topic_id` (persona segmentation) | 47% = sum of hours 8-11 in topic 5's own row (8.45+13.10+13.08+12.33=46.96%). Topic 5 has full 43-day coverage, claim is solid. |
| `persona-grid` 8 sparkline tiles | `chartPersonaHours: each persona's own hour-of-day distribution` | `hour` (golden), `nmf_topic_id` (persona segmentation) | % of THAT PERSONA's own visits, hours 6-21 only (same range as chartLifeStage); shared y-scale 0-14% across all 8 tiles, set in JS as `SPARK_MAX` — must stay >= the true max (13.10, topic 5) if data changes |
| `chartPersonaWeekend` (diverging bar) | `chartPersonaWeekend: weekday vs weekend avg/day and % lift` | `is_weekend` (golden), `local_date` (golden, derived), `nmf_topic_id` (persona segmentation) | same corrected local_date method as the aggregate "+12%" figure (see Section 1 bug-fix note above) — NOT the buggy UTC-date method |
| Callout: "+43% and +35%...Active Adults/Teenagers...Retirees/Polished Professionals...weekday audience" | `chartPersonaWeekend...` | (same as above) | direct restatement of the two most extreme rows |

### Removed from the persona-lens content

- **Data-coverage caveat paragraph on topics 0 & 1** ("Two of the eight — Practical Men in Workwear and Mainstream Adult Shoppers — are drawn from different, non-overlapping slices...") — removed 2026-09-13, user call: personas are a fixed, given input to this report, not ours to keep re-litigating in client-facing text. The underlying data fact (topic 0/1's non-overlapping date coverage, likely tied to the 2026-08-25 pipeline event) is unchanged and stays logged in full in `decisions_log.md`'s "Major finding: topics 0 & 1..." section for internal reference — it's just no longer surfaced as a report caveat.

- **"Practical Men in Workwear...almost flat, no real peak anywhere...the one persona whose day doesn't have a shape"** — removed 2026-09-13. Reason: factually wrong. Topic 1 (Mainstream Adult Shoppers) is measurably flatter (hour-by-hour std-dev 1.25 vs topic 0's 1.94, hours 8-19), and topic 0 has a real local bump at 11:00. Caught by the standing audit. Replaced with the caveat paragraph documented above — no flatness/shape comparison claim is made about either persona now.

## Section 2 — Demographics & Appearance

Script: `queries/section2_demographics.py`. Last verified: 2026-09-13.

| Report element | Script block | Source column(s) | Notes |
|---|---|---|---|
| Stat tiles (52%/47%, "20s") | `chartSex...`, `chartAge` | `sex` (golden), `age` (golden) | |
| `chartAge` | `chartAge` | `age` (golden) | includes the 1.3% `unknown` bucket, not hidden |
| `chartLifeStageDist` | `chartLifeStageDist` | `apparent_life_stage` (golden) | |
| Anchor-claim paragraph + `chartBodyArchetype` | `chartBodyArchetype`, `anchor-claim support: grooming_state`, `anchor-claim support: makeup_visible BY AGE` | `bd_body_archetype` (brand detector), `grooming_state` (golden), `makeup_visible` (golden), `age` (golden) | uses `bd_body_archetype`, NOT golden `body_shape` — see decisions_log.md's "body_shape investigated" note for why. "everything else...low single digits each" = per-category, NOT a combined sum (soft 3.6+lean 3.2+unclear 0.3+plus_size 0.1 = 7.2% combined — fixed 2026-09-13 after audit caught the original wording claiming "under 4% combined", which was wrong). Makeup "none largest at every age bracket" is TRUE only excluding `unknown` (in the 20s/30s brackets, `unknown` outnumbers `none` if included) — wording now says so explicitly, and the age-broken-out query exists to prove it, added 2026-09-13. |
| Footnote (tattoos 11%/7%, skin tone 71%/29%) | `footnote: tattoos by sex`, `footnote: skin_tone` | `has_tattoos` (golden), `sex` (golden), `skin_tone` (golden) | tattoo % excludes rows where skin wasn't visible enough to judge |
| "70% solo...mixed-gender" paragraph + `chartGroupComposition` | `chartGroupComposition support: group_size`, `chartGroupComposition: gender mix` | `group_size` (golden), `group_gender_mix` (golden) | % is of GROUPED (non-solo) visits only, not all visits — 59.5/21.1/14.7/4.7 sums to 100 over the 30% who aren't solo, added 2026-09-13 (was a real gap — companions' timing was in Section 1, but this static gender-composition fact had never been drafted anywhere until now) |
| Persona-demographics table | `persona lens: dominant sex/age/life stage per persona`, `persona lens: sizes` | `nmf_topic_id` (persona segmentation), `sex` (golden), `age` (golden), `apparent_life_stage` (golden) | each %  = (dominant-value count) / (that persona's own total n), computed by hand from the two script blocks — not itself a script output column, reproduce via: dominant_n / size |

### Removed from Section 2

- **Nails-by-age chart + paragraph** (`chartNailsByAge` block still in `queries/section2_demographics.py`, data no longer used) — removed 2026-09-13, user call, no data-quality issue.
- **Methodology asides in 3 captions** — removed 2026-09-13, user call: these leaked internal pipeline/dev context (which field, which model, which upstream construct feeds what) into business-facing captions. Removed: life-stage caption's "age, context, and carried items combined" (this WAS accurate — verbatim from the field's own official description, verified against the live production schema.py — but still inappropriate detail for a business caption regardless of accuracy); bd_body_archetype caption's "from the brand-detection model's own read, not the general-purpose model's..."; persona-table caption's cross-reference to Section 1's data-coverage caveat. The underlying facts these referenced are unchanged and still hold — only the exposition was cut.

## Report-wide chart fix (2026-09-13): bars now show their value

`bar()` (shared by every bar chart in the report, all sections) previously
showed a value only on hover (SVG `<title>`); user flagged this as
unreadable at a glance. Fixed once, in the shared function — every bar in
every section now carries a visible value label above it. Percentage
charts pass `suffix:'%'` in `opts`; chartHour/chartDow (raw counts, not
%) don't. No data changed, purely a rendering fix.

## Business-language pass on Section 3 (2026-09-13)

User flagged: (1) editorializing ("richest feature group in this
dataset" — dropped, no replacement needed), (2) the spending-signal
paragraph read as a methodology comparison (golden vs bd, "two
independent models," agreement rates) rather than a business finding —
rewritten to state the chartSpendBd distribution as fact, no model
language; (3) absolute item-instance counts in prose (232,611 items;
211,359 unbranded items; the 5,311/2,441/1,626 crossbody-bag counts) —
all replaced with the equivalent %, since counts are sample-size-
dependent and %s are what's comparable/durable. The underlying script
(`section3_garments_brands.py`) and this lineage doc keep the absolute
counts for reproducibility — only report.html's client-facing prose was
scrubbed of them. Applies going forward to Sections 4/5/Part 2 too: no
"model"/"golden"/"bd"/pipeline language and no raw counts in report.html
prose, %-only, business-meaning-first.

## Section 3 — Garments, Accessories, Carried Items, Brands & Spending Signal

Script: `queries/section3_garments_brands.py`. Last verified: 2026-09-13.
**Depends on an external path** outside this project folder:
`/home/honey-badger104/Desktop/MnM/full-context/ops/cpi-brand-score-full/results/<person_id>.json`
(the raw per-visitor brand-detector files — confirmed 54,092/54,092 present,
0 missing, 2026-09-13). If that path moves, the script's RAW-tagged blocks
break; the joined.jsonl-only blocks are unaffected.

| Report element | Script block | Source | Notes |
|---|---|---|---|
| Stat tiles (67%, 6.4%) | `chartSpendBd`, RAW `visitors with >=1 premium/luxury-tier item` | `bd_spending_signal` (brand detector); RAW `price_tier` (brand detector — raw per-item files) | |
| Spending-signal paragraph + `chartSpendBd` | `chartSpendBd`, `golden apparent_spending_tier`, `exact agreement count` | `bd_spending_signal` (brand detector), `apparent_spending_tier` (golden) | bd chosen as primary — see decisions_log.md "spend-tier source decision" for the reasoning |
| Branding paragraph + `chartLogoProminence` + `chartBrandTierMix` | `logo_prominence`, `brand_tier_mix`, RAW `price_tier x branded/unbranded`, RAW `brand_basis distribution` | `logo_prominence` (golden), `brand_tier_mix` (golden); RAW `price_tier`, `brand`, `brand_basis` (all brand detector — raw per-item files) | "17 of 211,359 unbranded items read premium, 0 luxury" (budget 18,302 + mid_range 110,047 + premium 17 + unclear 82,993 = 211,359 — fixed 2026-09-13 after audit caught a 211,342 miscount that had silently dropped the 17 premium items from their own denominator) and "5.4% design_signature vs 5.7% logo_text+logo_illegible" both come from the RAW files, not joined.jsonl's `bd_items` (which drops `price_tier`/`brand_basis`) |
| Garments paragraph + `chartGarments` | RAW `chartGarments: top types` | RAW `detection.garments[].type` (brand detector — raw per-item files) | % of visitors, not % of item-instances; NOT `joined.jsonl`'s flattened `bd_items` |
| Accessories/carried-items paragraph + both charts | RAW `chartAccessories/chartCarriedItems: top types`, RAW total item-instances+visitor coverage | RAW `detection.accessories[]/.carried_items[].type` (brand detector — raw per-item files) | 49.93%/38.35% visitor-coverage stats; the "crossbody_bag appears in all 3 arrays" claim is a direct read of the RAW per-array counts (5,311/2,441/1,626) |
| Top brands + `chartTopBrands` | RAW `chartTopBrands: top brands` | RAW `.brand` (brand detector — raw per-item files) across all 3 arrays | visitor-%, cross-checked against an independent duckdb-on-`bd_items` computation same session — matched exactly |
| Brand culture/tech ecosystem paragraph + 2 charts | `chartBrandCulture`, `chartTechEcosystem` | `brand_culture_alignment` (golden), `tech_ecosystem` (golden) | |
| Non-shopper long-tail paragraph + `chartOccupational` | `chartOccupational`, `bd_attire top 12` | `occupational_context` (golden), `bd_attire` (brand detector) | chart excludes the 98.28% "none" bucket on purpose so the tail is visible — see caption |
| "Through the lens of visitor personas" paragraph + `chartPersonaPremium`/`chartPersonaLogo` + prose | `chartPersonaPremium / chartPersonaLogo` | `nmf_topic_id` (persona segmentation), `bd_spending_signal` (brand detector), `logo_prominence` (golden) | **corrected 2026-09-13, audit caught the original wording overstating this**: Polished Professionals = highest premium (13.18%, rank 1/8), near-lowest logo (2.88%, rank 7/8 — NOT lowest; Parents with a Natural Look is lowest at 2.25%). Teenagers in Youth Culture = the genuine "loud but not high-spend" contrast (premium rank 6/8 at 4.21%, logo rank 2/8 at 20.48%). Active Adults in Athleisure is NOT part of the contrast — it's high on BOTH (premium rank 2/8 at 10.46%, logo rank 1/8 at 25.27%), consistent not inverse. Report text now names all three correctly instead of lumping Active Adults in with Teenagers. |
| Brand table | `persona brand table: top brand per persona` | `nmf_topic_id` (persona segmentation), `bd_items[].brand` (brand detector) | uses joined.jsonl's own `bd_items`, not the RAW files — brand identity doesn't depend on which array an item came from, unlike the type-split work above |
| Closing callout | (restates above) | | |
| (internal, not report-facing) decisions_log.md's "~97% identical" bd_spending_signal rationale | `bd_spending_signal == visitor's best RAW item price_tier` | `bd_spending_signal` (brand detector); RAW `price_tier` (brand detector — raw per-item files) | added 2026-09-13, was previously an unbacked number — now 96.74% (52,331/54,092), reproducible |

## Section 3 caption fix — premium/luxury disambiguation (2026-09-13)

An audit was dispatched specifically to check an accusation that every
"premium or luxury-tier item" claim in Section 3 was actually derived from
`logo_prominence` (deemed commercially irrelevant to spend-tier). **Result:
refuted.** Full grep of `section3_garments_brands.py` shows `logo_prominence`
occurs exactly twice, feeding only `chartLogoProminence` and
`chartPersonaLogo`'s `pct_logo_loud` — never any premium/luxury computation.
Live re-run of the script matched every Section 3 number in report.html
exactly, including all premium/luxury figures. No hallucination found.

The audit did surface one real, separate wording gap: report.html carries
TWO independently-correct pairs of numbers both labeled "Premium"/"Luxury" —
`bd_spending_signal`'s whole-outfit read (5.84%/0.6% overall, stat tile +
chartSpendBd) and `brand_tier_mix`'s brand-specific read (0.66%/0.02%,
chartBrandTierMix — only counts outfits with an identifiable brand, hence
~9x smaller). `chartBrandTierMix`'s caption already disambiguated itself
from `logo_prominence` but not from `chartSpendBd`'s premium/luxury numbers
a few paragraphs up — a real skim-confusion risk. **Fixed**: added one
sentence to `chartBrandTierMix`'s caption in report.html stating this chart
answers a narrower question (brand must be identifiable) and that's why its
Premium/Luxury shares are much smaller than the spend-tier chart above. No
data changed — wording-only fix.

## Section 3 persona-lens intro — removed cross-section comparison (2026-09-13, v23)

"...split the 8 personas far more sharply than anything in Sections 1-2
did" — cut. User call: unnecessarily devalues Sections 1/2, adds no
business meaning. Sentence now states the Section 3 finding on its own
terms only. No data changed, wording-only fix.

## Section 3 additions (2026-09-13, v24): premium/luxury brand table + persona accessory/carried-item columns

| Report element | Script block | Source | Notes |
|---|---|---|---|
| "Premium and luxury draw on almost entirely different brands" paragraph + 2-col table (Premium-tier brand / Luxury-tier brand) | `chartPremiumBrands / chartLuxuryBrands` | RAW `.brand` × RAW `.price_tier` (both brand detector — raw per-item files), all 3 arrays | visitor-%, top 8 each tier, ranked independently — NOT two halves of one list. `section3_garments_brands.py` extended: new `brand_tier_pids` dict built in the same RAW loop as `brand_pids` |
| Persona table's new "Most-associated accessory" / "Most-associated carried item" columns | `persona lens: most-associated accessory / carried item per persona` | RAW `detection.accessories[]/.carried_items[].type` (brand detector — raw per-item files), joined to `nmf_topic_id` (persona segmentation) via `nmf_topic_assignment.csv` | top type by visitor count within that persona only (not all visitors) — script extended with a `topic_map` (pid→topic_id) and `persona_item_pids` dict, built in the same RAW loop; NOT derivable from joined.jsonl's `bd_items` (drops the array-source tag, so accessory vs. carried-item can't be told apart there) |

Both additions requested directly by the user (asked "which brands are most commonly marked as premium and luxury, separately" as EDA, then asked for it as a report table; separately asked for the two new persona columns). Script re-run 2026-09-13, output verified against report.html before publishing v24.

**Script-only bug found by the v24 audit, fixed same day**: the persona-lens accessory/carried-item block's printed `pct` divided by `topic_sizes` built from ALL 77,226 rows of `nmf_topic_assignment.csv`, not the 54,092-visitor composite population — understated that console figure by ~30-40% relative (e.g. Practical Men in Workwear/digital_watch printed 11.77%, should be 16.82%). Never reached report.html (the table shows only item names, never this %, and the winning item per persona is chosen by raw-count comparison within the correctly-scoped population, so no ranking flipped). Fixed: `topic_sizes = collections.Counter(topic_map[p] for p in pid_meta if p in topic_map)`. Re-run confirms sane percentages now; no report.html or table-cell change required.

One data-quality note, NOT surfaced in the report (no editorializing about the dataset per standing rule): "Dior" (15 visitors) and "Christian Dior" (7 visitors) appear as two separate, unmerged brand strings in the RAW files — same house, likely a brand-detector naming inconsistency. Neither makes the top-8 luxury cutoff as a merged entity would (22 combined vs. 8th place Balenciaga's 12), so it doesn't change the published table, but flagging here in case it matters for any future brand-level work.

## Section 3 addition (2026-09-13, v26): shopping-purpose long tail, folded in from the dropped "Shopping Behavior & Intent" section

| Report element | Script block | Source | Notes |
|---|---|---|---|
| "A small, genuine long tail of visit purpose..." paragraph + `chartShoppingMission` | `chartShoppingMission` | `bd_shopping_mission` (brand detector) | User decided to drop the standalone "Shopping Behavior & Intent" section entirely (it was mostly default-dominated fields restating "most visits are just passing through" — see decisions_log.md, 2026-09-13). Only `bd_shopping_mission` survived, folded into Section 3 next to `chartOccupational` (same long-tail treatment, same "state the majority default explicitly, then show the tail" pattern). Chart excludes `passing_through` (94.04%) on purpose, same as `chartOccupational` excludes "none" (98.3%). |

Every other field that had been under consideration for the dropped section
— `individual_activity`, `apparent_engagement_state`, `group_activity`,
`shopping_tool_fill`, `merchandise_items`/`merchandise_quantity`/
`merchandise_location`, `merchandise_context_fit` — is now out of scope,
not used anywhere in the report. (`bd_companions` was already in scope,
used in Section 1's child/family-timing content — unaffected by this cut.)

## Section 2+ (renumbered: Section 4+) — not started

Add a new `## Section N — ...` block here, plus a
`queries/sectionN_*.py` script, before any Section 2+ number reaches
`report.html`.
