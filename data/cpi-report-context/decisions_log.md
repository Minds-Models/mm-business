# CPI Report — Working Decisions & Context Log

Internal working doc. NOT client-facing. Purpose: preserve every decision and
piece of context made during this analysis so nothing has to be
rediscovered mid-session later. Update this file as we go — every time a
decision is made or a section is finalized, log it here before moving on.

## RESUME HERE (written 2026-09-13, before a context compaction — read this
## block first, it's the fast path back into where things stand)

**Deliverable**: `report.html` in this folder, published as a Claude
Artifact at **https://claude.ai/code/artifact/8f315113-1f97-4ca5-823f-665e633ea32e**
(currently v21). Republish by calling Artifact with `file_path:
report.html` and `url:` that link (same conversation) — never omit `url`
or it creates a duplicate artifact.

**Section status right now**:
- Section 1 (Traffic & Timing): **LOCKED**. Includes a persona-lens
  closing subsection (8 personas, hour-shape sparklines + weekday/weekend
  lift diverging bar).
- Section 2 (Demographics & Appearance): built through v15, **pending
  your explicit sign-off** (never explicitly locked, just stopped getting
  edits once Section 3 started). Includes its own persona-demographics
  table.
- Section 3 (Garments/Brands/Spend Signal): built through v21 including
  its persona lens (just finished), **pending your sign-off**.
- Section 4 (Style/Subculture/Lifestyle) and Section 5 (Shopping
  Behavior & Intent): **not started**, still literally
  `<p class="pending">Not yet drafted.</p>` in report.html.
- Part 2 (cross-cutting persona lens over everything): **not started**
  as its own part — but each of Section 1/2/3 already ended with its own
  persona-lens subsection, per the established "general insights first,
  persona lens last" pattern per section. Whether Part 2 still needs to
  exist separately, or whether the per-section persona lenses already
  satisfy that original plan, is worth confirming with the user rather
  than assuming either way.

**Standing process rules — do not deviate without the user re-confirming**:
1. **Step by step, user approves each decision** — don't skip ahead to
   the next section's analysis until the current one is signed off in
   chat AND drafted into report.html (not just agreed in the abstract).
2. **Report-writing rules** (own section below, added after a real
   correction round on Section 3): no dev/model/pipeline language in
   report.html prose (no "model," "golden," "bd," methodology
   comparisons, agreement rates) — state the business finding directly,
   keep sourcing rationale in this log only. No absolute counts in
   report.html prose — %  only (scripts/lineage.md may keep counts for
   reproducibility). No editorializing about the dataset itself. Every
   bar chart must show a visible value label (fixed once in the shared
   `bar()` JS function — applies to all charts already built).
3. **Numbers lineage discipline**: no number reaches report.html without
   a corresponding block in a `queries/sectionN_*.py` script AND a row in
   `queries/lineage.md`. After every `report.html` change, run an audit
   (see below) before considering the change final.
4. **Audit process**: dispatch a `general-purpose` subagent, **in the
   background** (`run_in_background: true` — foreground blocking wastes
   the user's time, learned this the hard way mid-session), to verify
   report.html claims against lineage.md + the scripts, after every
   `report.html` publish. Read-only, never let it edit files. For small,
   obviously-low-risk edits (a caption tweak, a label rename), self-check
   directly instead of spawning an agent — don't over-audit trivial
   changes either. One audit subagent independently opened a temporary
   local static server + Playwright to visually verify chart layout on
   its own initiative (general-purpose agents have access to all tools
   including MCP browser tools) — surprised the user once; not a bug,
   but worth knowing this can happen when an audit prompt asks it to
   "confirm nothing overlaps visually."
5. **Personas are fixed, given, not ours to question in the report.** Do
   not add reliability/coverage caveats about personas to report.html
   text, even when real (see the topic 0/1 finding below) — log findings
   here only. This was an explicit, firm user correction after an
   earlier caveat paragraph "destroyed trust for no reason."
6. **Audience switch**: report.html prose is written for CPI's
   management (a business reader) in plain, normal English — never in
   caveman/terse style even though this chat conversation runs in
   caveman mode throughout. Don't let chat terseness leak into the
   report text.

**Key facts that took real digging to establish — don't rediscover these**:
- The composite `joined.jsonl` (54,092 rows) undercounts the true
  eligible population (75,609 as of a 2026-09-13 live check) — validated
  as a snapshot-timing gap, not a filtering bug; day-of-week/hour shape
  is preserved proportionally, safe to trust.
- A real pipeline/schema event hit on **2026-08-25** (evening UTC):
  `keywords_json` schema cut over (13-dim+confidence → 9-dim), raw
  session volume ~3x'd overnight, golden/bd completion rate crashed in
  lockstep. `keywords_json` is excluded from analysis entirely as a
  result (plus it was redundant signal anyway). This same date boundary
  is why NMF personas 0 ("Practical Men in Workwear") and 1 ("Mainstream
  Adult Shoppers") are populated from disjoint, non-overlapping <4-week
  windows (0 = almost entirely post-boundary, 1 = almost entirely
  pre-boundary) — likely a scoring-schema artifact affecting BOTH their
  timing AND (per a later audit) their logo-loudness/premium figures.
  Never surfaced in the report per rule 5 above; fully logged in the
  "Major finding" section below.
- A day-of-week averaging bug (mixed UTC-date with local-weekday
  grouping) was caught by the FIRST audit run ever performed on this
  project — corrected Section 1's "quietest day" from Tuesday to
  Thursday, and the weekend-uplift figure from ~30% to ~12%. Always
  derive calendar dates via `(entered_at::timestamp AT TIME ZONE 'UTC'
  AT TIME ZONE 'Europe/Prague')::date`, never raw `entered_at::date`.
- `body_shape` (golden) turned out to have real, unexplained
  out-of-schema values ("apple", "inverted_triangle") not matching the
  live production schema.py in any version checked — traced as far as
  possible, not worth chasing further. **Section 2 uses
  `bd_body_archetype` instead**, deliberately, not a fix to body_shape.
- The composite's `bd_items` field flattens brand-detector's real
  `garments[]`/`accessories[]`/`carried_items[]` arrays into one list,
  dropping the array-source tag AND per-item `price_tier`/`brand_detail`/
  `brand_basis`/`evidence` — confirmed a join oversight, not by design.
  **The raw per-visitor files with full detail exist locally** at
  `/home/honey-badger104/Desktop/MnM/full-context/ops/cpi-brand-score-full/results/<person_id>.json`
  — 100% coverage (54,092/54,092) verified. `queries/section3_garments_brands.py`
  depends on this external path (outside the project folder) — flagged
  in its own docstring. If Section 4/5 need similar item-level detail,
  this is the place to get it, not `bd_items`.
- Official NMF persona names exist in `nmf_persona_names.json`
  (delivered on request) — always use these, never invent working
  labels again (this happened once early on and had to be walked back).

**Files that matter, all in this folder unless noted**:
- `report.html` — the deliverable (Artifact, see URL above).
- `decisions_log.md` — this file.
- `queries/lineage.md` — maps every report.html claim to the script
  block that produces it. Read this + the scripts before trusting or
  reusing any number.
- `queries/section1_traffic_timing.py`, `section1_persona_timing.py`,
  `section2_demographics.py`, `section3_garments_brands.py` — runnable,
  verified scripts (need only `pip install duckdb`).
- `joined.jsonl`, `feature_dictionary.txt`, `README.md`,
  `nmf_topic_assignment.csv`, `nmf_topics_raw.json`, `nmf_persona_names.json`
  — the handover data itself, all described in detail elsewhere in this
  log and in README.md/feature_dictionary.txt directly.
- `validation/` — the raw-traffic pull used to sanity-check Section 1
  (not client-facing, internal QA only).
- `report_draft.md` — retired, superseded by report.html, kept only as
  a pointer file.

**Immediate next step when resuming**: either get explicit sign-off on
Sections 2/3 as they stand, or proceed to Section 4 (Style, Subculture &
Lifestyle Identity) following the same pattern as 1-3 (EDA → propose
views → build with lineage → background audit → fix → lock), or clarify
the Part 2 question above. Don't assume — ask which.

**UPDATE 2026-09-13 (later same day) — superseded**: Section 3 is now
**LOCKED**. User also made the scope decision below: Style/Subculture &
Part 2 are cut entirely, not deferred. **Shopping Behavior & Intent is now
the report's 4th and final section**, renumbered "04" in report.html (was
"05"). See "Scope cut" entry further down for the field list going
out of scope and the reasoning.

## Report writing rules (user-set, 2026-09-13, apply to every section from here on)

- No dev/pipeline/internal context in report.html prose — no "model,"
  "golden," "bd," "brand-detection model," pipeline/methodology
  comparisons, agreement rates between sources. State the business
  finding directly; keep the sourcing decision (which field, why) in
  decisions_log.md/lineage.md only.
- No absolute counts in report.html prose (item counts, visitor counts
  as raw numbers) — %  only. Counts are sample-size-dependent and not
  durable; %s are what's comparable. Scripts/lineage.md keep the counts
  for reproducibility; report.html prose doesn't repeat them.
- No subjective/editorializing framing about the dataset itself (e.g.
  "the richest feature group") — state findings, not our own assessment
  of the data.
- Every bar chart must show its value visibly (not hover-only) — fixed
  once in the shared `bar()` JS function, applies to all charts.

## Modus operandi (user-set, do not deviate)

- User is in the loop at every decision, step by step.
- A Part-1 section is NOT complete when merely agreed in chat — it is
  complete only once written into `report_draft.md` in business language
  and the user has signed off on that written text.
- Do not begin analysis/EDA for the next section until the current
  section is finalized in the report doc.
- Persona set (Part 2) is fixed: the existing NMF build, used as-is. No
  redefining, no custom clustering, no tweaking cluster membership.
  Naming was originally left to us (deliberately withheld upstream) —
  **update 2026-09-13: official names delivered on request, see
  `nmf_persona_names.json` and "Persona cross-tab summary" below. Use
  those names now, not self-invented ones.**
- **Update 2026-09-13: personas are a given, fixed input — do not
  surface doubts about their validity/reliability in report text.** The
  topic 0/1 data-coverage finding stays logged in full internally
  (below, and in `queries/lineage.md`'s removed-items notes) for our own
  reference, but the caveat paragraphs surfacing it in report.html
  (Section 1's persona-lens intro, and a cross-reference in Section 2's
  persona table) were both removed at the user's request — re-litigating
  persona reliability in client-facing text erodes trust for no
  operational benefit, since we can't act on the finding anyway (no
  redefining allowed). Don't re-add this kind of caveat going forward.

## Report goal / audience

- Client: CPI, store_id 16, "Olympia Mladá Boleslav" (shopping mall,
  single tenant/store dataset).
- Audience: mall management — a business reader. Report language must
  read as commercial insight, not data science.
- Internal-only goal (never phrase the report this way): demonstrate the
  actionable commercial value-add of these rich visual features vs. what
  plain sensor/counter data could ever tell CPI. Never say this in the
  report itself.

## Dataset facts (from README.md + feature_dictionary.txt, project root)

- `joined.jsonl`: 54,092 rows, one row per visitor, single store, one
  stored (face-pre-anonymized) photo per visitor.
- Two independent computer-vision reads per photo, joined by `person_id`:
  - **golden** (analysis-api, production service): ~95 closed-enum/typed
    fields + a 15-dim open keyword sweep (`keywords_json`).
  - **bd_** (brand-extractor, standalone tool): unbounded per-item arrays
    (`bd_items`) with brand ID, plus person/trip-level fields.
- Population = intersection of 5 inclusion filters: not staff, faced
  camera ≥28% of frames, valid visit (≥2s AND >10 judged frames),
  completed golden analysis, completed brand-detector result.
- Date range 2026-07-29 to 2026-09-11, tz Europe/Prague for
  `hour`/`day_of_week`/`is_weekend`.
- Golden booleans: `1`/`0`/`null`, but this JSONL export renders null as
  `""` (empty string), not JSON null — check for `""` not just absence.
  BD booleans: native `true`/`false`/`null`.
  "unknown" (golden) vs "unclear" (bd) = same concept, different spelling
  — do not silently merge.
- **Coverage gap, explained & validated (2026-09-13):** a live raw pull
  (see Validation section below) shows 75,609 truly-eligible
  (pass-all-5-filters) sessions exist as of query time vs. our composite's
  54,092 — 71.5% capture. Handover's own hypothesis: `build_joined.py`
  read from a fixed-point-in-time local CSV snapshot, not a live query,
  so some now-complete rows weren't in the snapshot yet. **Validated**:
  day-of-week ranking and hour-of-day shape are preserved almost exactly
  proportionally across this gap (each weekday captured at ~68–72%) — the
  composite's distributional shape is trustworthy.
- `keywords_json` has an undocumented schema cutover at **2026-08-25
  16:03 UTC**: rows before (32,505 / 60.1%) carry 13 dims + a
  `confidence` score per dim, including 4 dims never mentioned in
  `feature_dictionary.txt` (`behavioral_cue`, `emotional_affect`,
  `psychographic_traits`, and `commercial_persona` — a free-text
  one-liner, 73% unique values). Rows after (21,587 / 39.9%) carry only
  the 9 documented dims, no confidence.
  **DECISION: `keywords_json` excluded entirely from analysis/report.**
  Independent sweep showed its signal (mainstream/budget-skew/
  low-visibility) is redundant with golden enums + NMF clusters; the
  undocumented dims only cover 60% of rows and were never part of our
  scoped handover.
- Same date, 2026-08-25 (evening UTC), a real pipeline/system event also
  shows up independently in the raw traffic pull: raw session volume
  nearly triples overnight (5,038→14,166/day), golden+bd completion rate
  crashes in lockstep (~41%/35% → ~14%/14%). Two unrelated signals on the
  same date = a real deployment/config change that day, not footfall.
  **Internal QA fact only — never mentioned in the report.**
- NMF persona segmentation (k=8, run_id
  `f421ab1d-7a48-492d-af8b-7d29ae17df60`) is real, persisted, unpublished.
  Companion files: `nmf_topic_assignment.csv` (person_id→topic_id, 0-7,
  77,226 rows), `nmf_topics_raw.json` (raw term/weight loadings, no
  names). **Verified independently**: join to composite on `person_id`
  is exact equality (v.person_id is UUID-typed, t.person_id is
  VARCHAR-typed from the untyped CSV — implicit cast, re-verified via
  explicit cast, 54,092/54,092 matched, both files uniquely keyed, 0
  unmatched, 0 fan-out risk).

## Persona cross-tab summary (NMF topic_id, from composite, n=54,092)

**Official names delivered 2026-09-13**, file `nmf_persona_names.json`
(source: prod `nmf_persona_card_v2`, same run_id as the topic build).
This is the interpreted layer the original handover deliberately
withheld ("form your own read"), delivered now on our explicit request.
**Our earlier working labels (visible in prior chat/report text — e.g.
topic 0 as "fast passerby") were entirely self-invented, never pulled
from any real source, and are now superseded below.** Only topic 0's
name changed meaningfully in emphasis (behavior-based "passerby" ->
appearance-based "Workwear"); topics 1-7 our labels already lined up
closely with the official ones.

| topic | official name (confidence) | n (%) | life_stage | age | sex skew | dwell avg | weekend lift |
|---|---|---|---|---|---|---|---|
| 0 | **Practical Men in Workwear** (solid) | 4,418 (8.2%) | established/young_adult | 40s/30s | 96.6% male | 7.0s | +3.0% |
| 1 | **Mainstream Adult Shoppers** (solid) | 21,120 (39.0%) | established_adult | 40s/50s | 59% male | 185.0s | +10.7% |
| 2 | **Young Adults in their 20s** (ok) | 6,899 (12.8%) | young_adult | 20s | 76.8% female | 91.1s | +19.0% |
| 3 | **Parents with a Natural Look** (solid) | 4,134 (7.6%) | established_adult+parent | 30s/40s | 98.3% female | 25.4s | +15.5% |
| 4 | **Teenagers in Youth Culture** (solid) | 3,873 (7.2%) | student | 10s | 59.6% male | 75.6s | +35.1% |
| 5 | **Retirees in their 60s and Above** (solid) | 5,119 (9.5%) | mature_adult | 60s+ | 55% male | 87.2s | −18.6% |
| 6 | **Active Adults in Athleisure** (ok) | 4,645 (8.6%) | young_adult | 20s/30s | 81.2% male | 87.8s | +42.7% |
| 7 | **Polished Professionals in Smart Casual** (solid) | 3,884 (7.2%) | established/young_adult | 30s/20s | 75.3% female | 51.9s | −34.0% |

("dwell avg" kept here only as an internal engagement-diagnostic — never
used in the report itself, per the Section 1 scope correction; "weekend
lift" = corrected local_date method, see queries/section1_traffic_timing.py.)

Topic 0's 7.0s dwell verified NOT an artifact: whole distribution is
short (median 5s, p90=9s), not floor-clipped (4.4% at the 2s minimum, in
line with other topics), and holds even within `individual_activity=
'passing'` only (6.1s vs 16.7–183.4s for every other topic in the same
slice). Real, nameable persona — now confirmed "Practical Men in
Workwear" per the official card, "solid" confidence.

## Part 1 taxonomy — LOCKED (5 sections; every field assigned exactly once; no keyword-sweep section)

1. **Traffic & timing** — hour, day_of_week, is_weekend, entered_at,
   left_at (dwell)
2. **Demographics & appearance** — age, sex, apparent_life_stage,
   group_size, group_gender_mix, body_shape, height, chest_size,
   skin_tone, hair_colour/length/texture/style, facial_hair,
   skin_condition, skin_weathering, has_tattoos/piercings/
   visible_marks/notable_nails, makeup_visible, grooming_state,
   bd_body_archetype, bd_visible_pregnancy
3. **Garments, accessories, carried items, brands & economic/spend
   signal** — bd_items, bd_attire, occupational_context,
   apparent_spending_tier, bd_spending_signal, brand_tier_mix,
   brand_culture_alignment, logo_prominence, tech_ecosystem,
   visible_luxury_item, bd_outfit_condition, smoking_type,
   other_visible_items
4. **Style, subculture & lifestyle identity** — gender_expression,
   subcultural_alignment, outfit_formality, outfit_functionality,
   outfit_coordination, signal_richness, occupational_signal,
   supplementary_context_tags, store_context_congruence,
   apparent_lifestyle_orientation, physical_activity_level,
   physical_activity_orientation
5. **Shopping behavior & intent** — individual_activity,
   apparent_engagement_state, group_activity, bd_companions,
   bd_shopping_mission, shopping_tool_fill, merchandise_items/
   quantity/location, merchandise_context_fit

Design principle applied throughout: static trait → demographics (2);
evidenced directly by garments/brands/items → bucket 3 (this is why
tech_ecosystem, occupational_context and bd_attire live in 3, not with
"lifestyle"); aggregated aesthetic/behavioral identity, not tied to a
specific item → bucket 4; real-time action/intent → bucket 5 (this is
why individual_activity and apparent_engagement_state moved out of
"demographics" into bucket 5, and group_activity/bd_companions moved out
of "demographics" into bucket 5 while group_size/group_gender_mix stayed
in bucket 2).

Part 2 (separate, cross-cutting): same 5 feature groups, sliced by the 8
NMF personas above, once each persona's write-up is developed.

`keywords_json`: excluded from both parts (see decision above).

## Validation exercise — raw traffic pull (2026-09-13)

- Files: `validation/raw_traffic_rowlevel.csv` (347,344 rows),
  `validation/raw_traffic_aggregates.json`, `validation/README.md`.
- Source: `visitors_v2` prod Postgres, live query, store_id 16, same date
  range, upstream of all 5 filters.
- Findings:
  - Day-of-week ranking and hour-of-day shape: validated, matches
    composite closely (see coverage-gap note above).
  - Weekly "+32% growth, real not noise" claim (originally drafted for
    Section 1): **RETRACTED**. Confounded by the 2026-08-25 system event
    (raw sessions ~3x overnight) + processing backlog. True validated
    shape: real rise W32→W34 (10,548→13,290 pass-all-5/week, +26%,
    pre-dating the event) then plateau W34→W36 (13,290→13,904→13,853,
    within noise, holds in both composite and live pass-all-5 counts).
  - Minor: evening hours (18–21h) show modestly lower faced-camera
    qualification (~42–53%) than morning (~61–69%) — evening traffic
    slightly under-represented in composite vs. its true share. Small,
    not corrected for, not currently used to adjust any figure.
- **DECISION: none of this appears in the report.** No mention of
  sampling, filters, validation methodology, or the Aug-25 pipeline
  event anywhere in client-facing text. We privately trust the
  composite's distributional shape (validated above) and report from it
  directly. The growth-trend claim is dropped from Section 1 entirely
  (not even softened) — could not be stated with enough confidence even
  qualitatively without the underlying caveats.

## Section 1 — scope correction (2026-09-13)

`entered_at`/`left_at` (and the derived dwell metric) measure time in the
**entrance camera's frame**, not overall mall-visit length. The dwell
bimodal-distribution finding was **dropped entirely** (not reframed) —
user judged it not commercially meaningful even narrowed to entrance
behavior. Same caveat likely applies to `individual_activity` values
(waiting/browsing/paying/queueing) if we ever want to describe them as
"in-mall" behavior — they're plausibly also entrance-camera-scoped.
Revisit this framing when Section 5 (Shopping Behavior & Intent) comes
up.

## Section 1 — additional findings added, from a brainstorm on traffic × composition (2026-09-13)

Seed idea (user's): does companion/group composition vary by day-of-week
or time-of-day (e.g. more families on weekends, more parents with young
kids on weekdays)? Explored 5 angles, all now in the report:

- **Life-stage timing fingerprints** (new headline chart): mature_adult
  share peaks 9:00 (22%) then declines all day; parent share holds flat
  ~5-7% from 9:00-18:00 (not a spike); student share builds to a
  17:00-18:00 peak (after-school); young_adult share dips at midday
  (~26-28%) and rises into evening (36-47% by 18:00-21:00).
- **Solo vs. grouped by hour**: clean U-shape, solo share lowest exactly
  during the 11:00-16:00 peak. At *every* hour, weekend is more grouped
  than weekday at that same hour (not just a volume effect).
- **Child-accompanied traffic**: both `with_child` and `with_family` are
  *higher* on weekends (not a lone-parent/family swap as originally
  hypothesized) — total child-accompanied share 7.6% weekday -> 10.5%
  weekend. Weekday `with_child` share is a flat plateau 9:00-19:00 (no
  school-hours double-peak) — fits pre-school-age caregivers better than
  a school-run errand pattern. Minor unexplained oddity: Monday's
  with_child share (6.78%) is above the other weekdays (4.5-5.7%) — not
  investigated further, small base.
- **Sex mix by hour**: near-balanced 8:00-18:00, skews increasingly male
  from 19:00 on (thinning samples past 21:00) — kept as a one-line
  footnote in the report, not charted (effect size + confidence too
  modest for a full chart).

All 5 angles were kept (user chose not to trim) and are now in
`report.html` with 3 line charts (life-stage-by-hour, solo-by-hour,
child-by-hour) plus the sex-mix footnote.

## Spend-tier source decision — bd_spending_signal over golden apparent_spending_tier (2026-09-13)

User asked us to decide which source is "more expressive and appropriate"
for Section 3's flagship spend-tier view, rather than presenting both as
a flat cross-check. Decided: **bd_spending_signal**, for two reasons.
(1) Golden's `apparent_spending_tier` collapses 82% of visitors into
"mid_range" and almost never uses "unknown" (0.16%) despite its own field
instructions saying to prefer unknown over guessing — it reads as
overconfident. bd's version spreads further at the commercially
interesting end (5.8% premium + 0.6% luxury vs golden's 2.0% + 0.01%) and
uses "unclear" honestly (20.5% of the time). (2) bd's own field
description anchors the read to concrete evidence ("a single item at
price_tier luxury or premium is enough on its own to set this") rather
than a purely holistic impression — confirmed via the raw per-item files
that bd_spending_signal is in fact ~97% identical to the visitor's own
best (highest-ranked) item-level `price_tier` reading. Golden's
independent read is kept as a one-line cross-check (60% exact agreement)
for corroboration, not as a second parallel chart.

## Raw per-visitor brand-detector files — found locally, used for Section 3 (2026-09-13)

User confirmed the garments[]/accessories[]/carried_items[] array split
(dropped by the join for `bd_items`) was a join oversight, not a
deliberate exclusion — the raw files retain full detail. Located at
`/home/honey-badger104/Desktop/MnM/full-context/ops/cpi-brand-score-full/results/<person_id>.json`
(outside this project folder). Verified: 54,092/54,092 composite
person_ids have a matching file, 0 missing. (Two other local sample
folders — `brand_detector/results/cpi_10k`, `cpi_500_newschema`,
`cpi_500_mece_audit` under `~/Projects/work/mm/` — are different/smaller
sample runs, only ~4% overlap with our composite; NOT used, the results
dir above has full 100% coverage so there was no need for an external
data-pull request this time.)

Per-item fields these files add, not present in `joined.jsonl`'s
`bd_items`: `price_tier`, `brand_detail`, `brand_basis`, `evidence`. Used
`price_tier` and `brand_basis` in Section 3 (see lineage.md). Not yet
used: `brand_detail`, `evidence` (illustrative quotes only, not charted),
person-level `style` (golden's `outfit_formality`/`subcultural_alignment`
already cover this ground with closed enums, per feature_dictionary.txt),
`trip_evidence` (a scratch field). `queries/section3_garments_brands.py`
depends on this external path — flagged clearly in that script's own
docstring and in lineage.md so it isn't mistaken for a joined.jsonl-only
script later.

## Section status

**UPDATE 2026-09-13 (later same day) — scope cut, table below superseded.**
User locked Section 3 and cut Style/Subculture & Lifestyle Identity (was
"Section 4") and Part 2 (cross-cutting persona lens) from scope entirely —
not deferred, dropped. Reasoning given: each of Sections 1-3 already
closes with its own persona-lens subsection, satisfying the original
intent behind a separate Part 2; Style/Subculture/Lifestyle wasn't
started and no longer will be. **Fields now permanently out of scope for
this report**: `gender_expression`, `subcultural_alignment`,
`outfit_formality`, `outfit_functionality`, `outfit_coordination`,
`signal_richness`, `occupational_signal`, `supplementary_context_tags`,
`store_context_congruence`, `apparent_lifestyle_orientation`,
`physical_activity_level`, `physical_activity_orientation` (the full
former bucket-4 field list from "Part 1 taxonomy" above — that taxonomy
note is now itself superseded, kept only for the historical record of how
the other 3 sections' field assignments were decided).

Shopping Behavior & Intent (former bucket 5) is now the report's 4th and
**final** section, renumbered "04" in report.html (was "05").

| section | analysis | drafted in report | user sign-off |
|---|---|---|---|
| 1. Traffic & timing | done (incl. persona lens) | done (v13, caveat removed per standing rule) | **LOCKED 2026-09-13** |
| 2. Demographics & appearance | done | done (v14, incl. group composition) | pending your sign-off |
| 3. Garments/brands/economic signal | done (incl. raw-file dig, premium/luxury brand table, persona accessory/carried-item columns) | done (v24) | **LOCKED 2026-09-13** |
| ~~4. Style/subculture/lifestyle~~ | **CUT FROM SCOPE 2026-09-13** — not started, not starting |
| ~~4. Shopping behavior & intent~~ | **CUT FROM SCOPE 2026-09-13 (later same day)** — EDA showed it was mostly default-dominated fields restating one fact ("most visits are just passing through") 4 different ways; user judged too thin for a standalone section. Not built as a section at all. |
| ~~Part 2 — persona lens~~ | **CUT FROM SCOPE 2026-09-13** — each section's own persona-lens subsection covers this |

**UPDATE 2026-09-13 (later still) — final scope**: the report is **3
sections total** (Traffic & Timing / Demographics & Appearance /
Garments, Brands & Spending Signal), not 5. One single field from the cut
Shopping Behavior & Intent section, `bd_shopping_mission`, carried real
signal (a genuine, if small, long tail of visit purpose) and was folded
into Section 3 next to `chartOccupational` — same rhetorical treatment
(state the majority default explicitly — 94.04% "passing_through" — then
show the tail). Every other field considered for that section
(`individual_activity`, `apparent_engagement_state`, `group_activity`,
`shopping_tool_fill`, `merchandise_items`/`merchandise_quantity`/
`merchandise_location`, `merchandise_context_fit`) is now permanently out
of scope. `bd_companions` was already in use in Section 1, unaffected.
Section 3 reopened briefly for this one addition (v26) despite having
just been locked at v25 — re-audit after publishing, same as any other
content change to a "locked" section.

| section | analysis | drafted in report | user sign-off |
|---|---|---|---|
| 1. Traffic & timing | done | done | **LOCKED** |
| 2. Demographics & appearance | done | done (v14/15) | pending your sign-off |
| 3. Garments/brands/economic signal (incl. the folded-in shopping-purpose long tail) | done | done (v26) | **LOCKED**, reopened once for this addition |

### Section 2 findings — STALE header, kept for history only; all drafted into report.html v14 except where noted

(This block predates several rounds of edits — see "Section 1 — persona lens" and the audit-driven fixes above for the current, accurate state. Everything below was drafted into report.html except: the nails-by-age finding, dropped at user request; the specific 73%/64% weekday/weekend solo split, which lives in Section 1 not here.)

- Sex 52% male / 47% female / 1% unknown. Age skews 20s(28%)/30s(21%)/
  40s(19%)/50s(17%)/60s+(8%)/10s(7%). Life-stage: established_adult 40%,
  young_adult 34%, mature_adult 13%, student 8%, parent 6%.
- Companions: 70% solo. Of the 30% grouped, 60% mixed-gender, 21%
  all-female, 15% all-male. Solo share drops on weekends: 73% weekday
  solo vs 64% weekend solo — weekend visits more likely to involve a
  companion.
- Appearance-detail fields (grooming_state 95% "standard", makeup_visible
  "none" as top/near-top answer at every female age bracket, average
  height/build dominant) — 4th independent signal (after golden gestalt
  enums, NMF cluster terms, and the now-excluded keyword sweep) landing
  on "mainstream, low-effort, low-flash" as the population's dominant
  character. Strong candidate anchor claim for the report given 4
  independent reads agree.
- Minor color: visible tattoos 11% of men vs 7% of women (where skin was
  visible enough to judge); notable nails decline cleanly with age (7% in
  20s → 1% in 60s+); skin tone 71% light / 29% medium / <0.1% dark
  (expected for this market).
- **`body_shape` investigated 2026-09-13, resolved by switching fields
  (not by fixing body_shape).** User asked whether body_shape/body_type
  should be bd-sourced — checked: no. Per feature_dictionary.txt's
  "fields intentionally absent" list, `body_type` (build/muscle-tone) is
  the one dropped in favor of `bd_body_archetype`; `body_shape`
  (silhouette: hourglass/pear/rectangle/triangle) has no bd equivalent at
  all — bd doesn't read silhouette shape, only build. Confirmed against
  the LIVE production schema, not just the handover doc: checked out
  `analysis-api/libs/analyzer/schema.py` (`class Body`, field `shape`) at
  `~/Projects/work/mm/analysis-api` on this machine, plus its full git
  history (`git log --follow -p`) — the real Literal has ALWAYS been
  exactly `["hourglass", "pear", "rectangle", "triangle", "unknown"]` (5
  values), in every version found. **So "triangle" (1,986 rows) is the
  genuinely correct, always-valid value** — not the anomaly. The real
  puzzle is the other way around: our joined.jsonl also contains "apple"
  (1,941 rows) and "inverted_triangle" (1,102 rows), which appear
  NOWHERE in the live schema, its git history, or `config/registry.yaml`
  (grepped the whole analysis-api/aapi/mm-dev tree — zero hits besides
  unrelated "premium_apple"/fruit mentions). feature_dictionary.txt's
  documented enum (hourglass|pear|inverted_triangle|apple|rectangle|
  unknown) matches neither the current nor any historical code version
  found — the **handover doc appears to be wrong/drifted for this one
  field**, and where "apple"/"inverted_triangle" actually come from in
  the real data is unresolved (possibly an even-older schema version not
  in this git history, or an undiscovered mapping layer). Not chased
  further — not worth the time given the fix below.
  **DECISION: use `bd_body_archetype` (lean/athletic/average/soft/
  plus_size/unclear) for Section 2's build/shape dimension instead of
  golden's `body_shape`.** Clean, closed enum, no anomalies, already
  profiled: average 43,950 / athletic 6,258 / soft 1,924 / lean 1,714 /
  unclear 170 / plus_size 76. `body_shape` itself is simply dropped from
  Section 2's content — not fixed, not remapped, just not used.

## Report deliverable format — DECIDED (2026-09-13)

HTML5 doc with real charts, published as a Claude Artifact:
`report.html` → https://claude.ai/code/artifact/8f315113-1f97-4ca5-823f-665e633ea32e
Kept deliberately simple (system font, minimal CSS, plain SVG bar
charts) — colleagues restyle/translate before client presentation, so no
time spent on visual polish. `report_draft.md` (plain text) is no longer
the deliverable; `report.html` is. Update `report.html` directly each
time a section is signed off, republish same file path.

## First audit run — caught a real bug (2026-09-13)

Spawned the audit subagent per the process below for the first time.
Result: found (1) an undocumented derived stat ("~30% weekend uplift")
with no lineage.md row, and (2) while backfilling that row, found the
number itself was **wrong** — a UTC-vs-local-date mixing bug in the
per-weekday averaging (mixed `entered_at::date` (UTC) with
`day_of_week` (local Europe/Prague)). Corrected: quietest day is
**Thursday** (not Tuesday as originally published), weekend uplift is
**~12%** (not ~30%). Saturday-busiest was already correct and unchanged.
Also fixed a narrative overstatement in the solo-share paragraph (claimed
one shared "least likely to be alone" window for both weekday and
weekend; the weekday minimum is actually at a different hour). Both
fixes are live in report.html v4+ and documented in full in
`queries/lineage.md`'s "Bug found & fixed" note. This is exactly the
failure mode the audit process exists to catch — worth remembering it
found something real on its very first run, not a false-positive
exercise.

## Major finding: topics 0 & 1 may be a schema-change artifact, not two real personas (2026-09-13)

Caught by the standing audit process on the persona-lens addition to
Section 1. Investigated further — this is serious enough to log fully
before deciding what to do about it.

**The data**: topic 0 ("Practical Men in Workwear", 4,418 visits) has
1-2 noise visits/day from the start of the period through 2026-08-25,
then jumps to 200-370/day from 2026-08-26 onward (25 distinct days total,
negligible until 08-25/26). Topic 1 ("Mainstream Adult Shoppers", 21,120
visits) is the exact mirror image: 600-990/day from 2026-07-30 through
2026-08-25, then collapses to 1-4/day noise from 2026-08-26 on (39
distinct days, but negligible after 08-25). Every other persona
(2,3,4,5,6,7) has full 43/43-day coverage across the whole window, no
such split.

**This is the same date as two things already found and logged**:
(1) the `keywords_json` schema cutover (13-dim+confidence -> 9-dim,
no confidence, dims dropped) and (2) the raw-traffic pipeline event
(session volume ~3x overnight, golden/bd completion rate crashed). Per
`feature_dictionary.txt`, the NMF segmentation clusters golden's
section-12 *keyword* fields specifically — so a structural change to
exactly those fields on exactly this date is a highly plausible
mechanism for the topic model's scoring to shift wholesale right at that
boundary, independent of any real change in visitor behavior.

**Working hypothesis, not confirmed**: topics 0 and 1 may not be two
real, distinct personas at all — they may be the *same* underlying
population, scored into different topic_ids purely because the
keyword-feature schema it's scored against changed structurally on
2026-08-25. If true, "Practical Men in Workwear" isn't a real segment of
the customer base — it's "Mainstream Adult Shoppers, post-schema-change."
Not proven: the daily rate isn't a perfect population match (topic1's
pre-08/25 rate ~750/day vs topic0's post-08/25 rate ~260/day, roughly
1/3, not equal), so it could be a partial split rather than a clean 1:1
relabeling. Cannot resolve this further from data alone — would need to
ask whoever built the NMF model whether/how the `keywords_json` schema
change affects topic scoring.

**Impact on this report**: any *time-based* figure for topic 0 or topic
1 specifically (weekend lift, hour-of-day shape) is unreliable — each is
built from a <4-week window, not the full ~6-week period, so it cannot
be validly compared to the other 6 personas' full-period figures the way
the persona-lens charts currently present them. This is also why the
per-persona weekday/weekend sums didn't reconcile against the aggregate
"+12%" figure when the audit checked (persona sums ran ~12.5%/~9.4% too
high — root cause, not a separate bug). Topics 2-7's time-based figures
are NOT affected (full 43-day coverage each) — confined to the 0/1 pair.
This casts doubt on topic 0/1 generally, not just their timing — Part 2
(full persona treatment) needs to know about this before relying on
either persona for anything, not only timing.

**Extended 2026-09-13** by the Section 3 persona-lens audit, with direct
empirical support (not just the timing hypothesis): aggregate
logo-loud% is 10.99% pre-2026-08-25/26 vs 6.97% post — a ~1.6x
population-wide drop right at the same boundary, independent of
persona. Topic 1 (pre-heavy)'s logo-loud% (9.53%) vs topic 0 (post-heavy,
5.39%) is a ~1.77x gap in the same direction and similar magnitude —
consistent with the 0-vs-1 "logo loudness" difference being substantially
this same time-window artifact, not a real behavioral difference.
Premium% is murkier — the aggregate moves the *other* direction
pre-to-post (6.1%→6.95%) while topic 0<topic 1, so it doesn't reduce to
the same mechanism as cleanly — but both figures are still built from
disjoint <4-week slices, so neither should be treated as more trustworthy
than the timing figures. Per the standing rule above, none of this goes
into report.html — logged here only.

**Not yet decided**: whether to (a) drop topic 0 from all time-based
persona charts and flag topic 1's time-based figures as unreliable too,
reducing the persona-lens view to 6 personas, (b) keep all 8 with a
heavy caveat on 0/1 specifically, or (c) draft a question for whoever
maintains the NMF pipeline before deciding. Also, independent of the
above: the "Practical Men in Workwear...almost flat, no real peak, the
one persona whose day doesn't have a shape" prose claim in report.html
is simply wrong regardless of the coverage issue — the audit computed
hour-by-hour variance across all 8 personas and topic 1 is measurably
flatter (std-dev 1.25 vs topic 0's 1.94, hours 8-19); topic 0 also has a
visible local bump at 11:00. That claim needs fixing or dropping either
way.

## Lineage.md source-system tagging — added (2026-09-13)

Every field name in every `queries/lineage.md` table row now carries an
explicit `(golden)` / `(brand detector)` / `(brand detector — raw
per-item files)` / `(persona segmentation)` tag, plus a short key
explaining the three (really four) systems near the top of the file.
Answers "which source did this number come from" at a glance, without
needing to know the `bd_` prefix convention or cross-check
`feature_dictionary.txt`. No report.html change, no republish needed —
pure internal documentation.

## Numbers lineage audit process — DECIDED (2026-09-13)

Scope is **every claim in report.html**, not just chart data — stat
tiles, inline paragraph numbers, captions, legend text, everything.
After every change to `report.html`, spawn a fresh general-purpose
subagent to audit: (1) every numeric/factual claim in report.html has a
matching row in `queries/lineage.md`, (2) each cited `queries/
section*.py` script, when actually re-run, reproduces the number
currently in report.html exactly (catches drift after an edit to either
side), (3) no lineage.md row points at a script block that no longer
exists, (4) removed claims are logged under lineage.md's "Removed from
the report" section, not just deleted silently. Audit is read-only —
never let the audit agent edit files itself; findings come back to this
conversation and get fixed here. This is a standing process, not a
one-off — do it after every `report.html` publish from now on.

## Numbers lineage — DECIDED (2026-09-13)

Every number in `report.html` must trace back to a runnable script
against `joined.jsonl`, not just a value sitting in this log or in chat
history. Canonical, up-to-date source: `queries/lineage.md` (mapping
table) + `queries/section1_traffic_timing.py` (runnable, verified to
reproduce report.html's Section 1 numbers exactly, last checked
2026-09-13). This log's inline number blocks below are kept as a quick
read-reference only — `queries/` is the source of truth if the two ever
disagree. **Process from here on: no number reaches report.html without
a corresponding block in a `queries/sectionN_*.py` script and a row in
`queries/lineage.md`.**

## Section 1 chart data (validated numbers, for reuse — avoid recomputing; see queries/ for the canonical, runnable version)

- **Hour-of-day counts** (0-23, zero-filled): 0:0,1:16,2:4,3:12,4:0,5:14,
  6:73,7:1324,8:2814,9:3885,10:4460,11:4915,12:4721,13:4598,14:4601,
  15:4919,16:4863,17:4562,18:3909,19:2709,20:1170,21:463,22:60,23:0
- ~~Avg visits/day by weekday: Mon 911.0, Tue 798.2, Wed 1205.7, Thu
  898.2, Fri 1103.9, Sat 1418.0, Sun 1102.4~~ — **STALE, was the
  pre-bug-fix set** (UTC/local-date mismatch, see "First audit run"
  above). Correct values are in `queries/lineage.md` / `report.html`:
  Mon 1214.7, Tue 1197.3, Wed 1205.7, Thu 1155.0, Fri 1287.8, Sat 1418.0,
  Sun 1286.2. Struck through rather than deleted so this exact mistake
  (caught by the 2nd audit run, 2026-09-13) isn't repeated.
- ~~Dwell-time buckets / dwell avg weekday vs weekend~~ — **OBSOLETE,
  not in report.** Dwell = entrance-camera frame time, not visit length;
  dropped entirely (see "Section 1 — scope correction" above). Kept
  struck-through here only so it isn't recomputed by mistake later.
- **Life-stage share by hour** (hours 6-21): mature_adult
  [8.22,12.24,18.98,22.21,19.15,17.21,13.54,12.79,13.11,10.04,8.90,7.54,7.04,5.39,7.18,5.83];
  parent [0.0,0.38,2.74,5.33,6.66,6.16,6.16,6.05,5.37,5.81,6.91,6.38,6.04,4.87,3.08,1.51];
  student [1.37,4.91,4.23,4.92,6.10,7.08,6.95,8.39,7.82,8.70,9.03,9.64,10.41,8.05,6.84,6.05];
  young_adult [41.10,40.63,33.44,25.33,26.97,27.71,31.67,32.73,33.64,36.02,35.78,34.57,36.68,44.85,46.50,50.54]
- **Solo share by hour, weekday vs weekend** (hours 7-21): weekday
  [89.87,84.42,77.00,73.65,71.64,73.87,73.05,72.99,71.08,69.45,68.00,65.91,68.61,74.91,82.09];
  weekend [87.38,83.67,72.83,62.72,60.27,60.04,60.55,60.62,61.75,60.40,62.44,63.18,64.59,73.09,75.78]
- **with_child share by hour, weekday vs weekend** (hours 7-21): weekday
  [0.30,2.66,5.47,5.93,5.79,5.51,6.08,5.30,6.18,6.80,7.03,6.71,5.31,3.06,1.49];
  weekend [0.95,2.41,6.79,9.29,8.63,9.34,8.37,7.45,8.42,7.49,8.24,6.14,6.09,5.38,2.34]
- **with_child / with_family totals**: weekday 5.58%/2.00%, weekend
  7.48%/3.01%

## Open items not yet decided

- `body_shape` "triangle" bucket — see above.
