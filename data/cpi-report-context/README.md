# CPI composite visitor dataset — handover note

Written for: a new analyst/agent doing a from-scratch commercial analysis
of this dataset. Purely descriptive — no findings, no prior conclusions,
no recommendations.

**Correction (2026-09-13):** an earlier version of this note claimed no
NMF/segmentation output existed for CPI. Wrong — a real build (unpublished,
but persisted) exists and covers 100% of this composite's population. Fixed
below and in `feature_dictionary.txt` Section D. It was missed the first
time by trusting a stale prior brief instead of checking prod directly.

## Where the three handover artifacts are

| Artifact | Path |
|---|---|
| **Dataset** | `.../full-context/ops/cpi-combined/data/joined.jsonl` |
| **Feature dictionary** (exact field meanings) | `feature_dictionary.txt`, this folder |
| **Segmentation topic assignment** (person_id → topic_id, companion, not merged into the dataset) | `nmf_topic_assignment.csv`, this folder |
| **Raw topic definitions** (term loadings, no names) | `nmf_topics_raw.json`, this folder |
| **This note** | `README.md`, this folder |

The dataset file was left in place rather than copied here — it's 179 MB.
The other files live alongside this note in `ops/cpi-combined/handover/`.
(Project root moved under `full-context/` since this was first written —
paths below are relative to that root.)

## What this dataset is

One JSON object per line (JSONL), one line per visitor, 54,092 lines. Each
line combines, for one visitor's single stored photo, two independent
computer-vision reads of that photo:

1. **"golden" fields** — from `analysis-api`, this company's production
   visitor-analysis service. Two Gemini structured-output calls per photo
   ("perception" + "gestalt"), ~95 closed-enum/typed fields plus a
   15-field open keyword sweep, one fixed slot per body/item category.
2. **"bd_" fields** — from `brand-extractor` (a leaner, standalone tool,
   not the production service), one Gemini structured-output call per
   photo, built around unbounded per-item arrays (garments, worn
   accessories, carried objects) each carrying its own brand read.

Both were run against the *same* stored, face-pre-anonymized photos for
the same visitors. They are not sequential stages of one pipeline — they
are two separately-run, separately-schemaed tools pointed at the same
images, later joined by person_id.

Every field's exact meaning — the literal instruction text given to the
model that produced it — is in `feature_dictionary.txt`. That file also
lists, at the end, every upstream field that was deliberately left out of
this join (e.g. golden's per-category brand/fit/color fields, superseded
by bd's item list) so their absence isn't mistaken for missing data.

## How it came to be

```
in-store camera → dashboard-be (device photo, face pre-anonymized)
        │
        ▼
  analysis-api "golden" pipeline (2 Gemini calls: perception + gestalt)
        │                                    brand-extractor (1 Gemini call,
        ▼                                     run separately over the same
  visitors_normalized_v2                       stored photos, full tenant
  (Postgres, one wide row/visitor)              population)
        │                                              │
        │                                              ▼
        │                                   ops/cpi-brand-score-full/results/
        │                                   <person_id>.json (one file/visitor)
        └───────────────────┬──────────────────────────┘
                             ▼
              ops/cpi-combined/build_joined.py
                             ▼
              ops/cpi-combined/data/joined.jsonl   ← this dataset
```

`build_joined.py` is a straight field-level join keyed on `person_id`: for
every visitor kept in the population (below), it copies the surviving
golden columns from `visitors_normalized_v2.csv`, copies 8 fields out of
that visitor's brand-detector result file, adds a few derived
timing fields (`hour`, `day_of_week`, `is_weekend`, local Europe/Prague
time), and writes one JSON line. No values are recomputed, reconciled, or
scored against each other by the join itself — both sources' values are
carried through as-is, side by side, exactly as each tool produced them.

Which golden columns survive vs. get dropped (in favour of the
corresponding `bd_` field, or dropped outright as out of scope) was
decided ahead of the join and is recorded in
`briefs/12-combined-feature-source-map.md` (source-of-truth table) and
`briefs/11-golden-vs-brand-detector-feature-map.md` (full field-by-field
inventory/rationale). Those are schema/engineering decisions about which
tool's read of a given *concept* to keep — not commercial findings — and
are reproduced structurally in `feature_dictionary.txt`; read the briefs
directly only if you need the full rationale behind a specific drop.

## Population / scope — read before analyzing

- **Single tenant, single store**: company "CPI", store_id 16, "Olympia
  Mladá Boleslav" (a shopping mall). Every row is from this one store's
  camera(s). Do not generalize findings beyond this store without saying
  so.
- **Timezone**: Europe/Prague (`hour`/`day_of_week`/`is_weekend` are
  already localized to it).
- **Date range**: visitors entered between 2026-07-29 and 2026-09-11
  (see `entered_at` for exact per-row values; the range is a fact, not
  claim about coverage evenness across it — check the actual distribution
  yourself).
- **Row = one visitor session that passed all of**:
  1. Not flagged as staff (`visitor_exclusions` table, checked upstream of
     this join).
  2. "Faced camera": at least 28% of the session's frames were classified
     facing-camera (frame-count ratio ≥ 0.28).
  3. "Valid visit": session lasted ≥ 2 seconds and had > 10 total judged
     frames (facing + not-facing).
  4. Has a completed golden analysis row in `visitors_normalized_v2`.
  5. Has a completed brand-detector result file.
  Visitors failing any of these criteria are simply not in this file —
  there is no partial/null row for them.
- **54,092** is the count of visitors meeting all five conditions
  simultaneously, out of a larger population that passed some but not all
  of them (e.g. more visitors have a golden analysis than have both a
  golden analysis *and* a brand-detector result — the two tools were run
  over overlapping but not identical visitor sets, with brand-detector run
  later, over the full available population at that later time).

## Segmentation (NMF) topic assignment — real, but a separate file

A per-tenant NMF segmentation build ran for CPI (k=8, 77,226 sessions,
completed 2026-09-11, run_id `f421ab1d-7a48-492d-af8b-7d29ae17df60`). It's
persisted in prod Postgres but not published/live for serving. Every
visitor in this composite has a row in it (100% coverage checked).

It is **not merged into `joined.jsonl`** — it's a different system's output,
joined the same way you'd join anything else, on `person_id`:

- `nmf_topic_assignment.csv` — `person_id, nmf_topic_id` (0-7), the
  dominant topic only (no soft loadings/confidence in this export).
- `nmf_topics_raw.json` — each topic's raw top-15 weighted terms and a
  dominant-session count. No names, no descriptions — see
  `feature_dictionary.txt` Section D for exactly what's included and what
  (persona names, share%, narrative traits — see `report.html`) is
  deliberately left out.

## Format specifics worth knowing before writing analysis code

- One JSON object per line, UTF-8, no header row, no trailing comma/
  wrapping array — read as JSONL (`json.loads` per line), not as one JSON
  document.
- Nested fields: `keywords_json` (object of arrays) and `bd_items` (array
  of objects) — both need flattening/explosion before most tabular
  analysis; there is no pre-flattened CSV of this dataset today. Every
  other field is a flat scalar (string, int, bool, or null).
- Golden booleans are `1`/`0`/`null` (Postgres-integer convention, carried
  through as-is). BD booleans are native JSON `true`/`false`/`null`. Don't
  assume they behave identically — check each field's null semantics in
  `feature_dictionary.txt` (some nulls mean "not applicable", others mean
  "not visible in frame").
- `age`/`sex` etc. from golden use the literal string `"unknown"` for "the
  model couldn't tell"; the equivalent bd fields use `"unclear"`. Two
  different spellings of the same idea — don't merge them into one
  sentinel without deciding how you want to treat that difference.
- Two fields — `ageOnEdgeGenerated`, `sexOnEdgeGenerated` — are hard-coded
  `False` for every row in the current pipeline (see feature dictionary);
  they carry no variation in this dataset.

## What is NOT in this dataset

- Raw images (both tools' outputs are text/JSON only; images live
  elsewhere on disk if you need to spot-check).
- Other tenants/stores — this is CPI/Olympia Mladá Boleslav only.
- **Persona names/descriptions/shares.** A segmentation build DOES exist
  for this exact population (see below) — but the LLM-generated names,
  narrative traits, and share% for each cluster are a finished analysis
  product (visible in `ops/cpi-value-report/report.html` and in prod's
  `nmf_persona_card_v2`) and are withheld on purpose, so you form your own
  read of what each cluster is, rather than starting from someone else's.
- Per-item `evidence`, `brand_detail`, `brand_basis`, `price_tier` from
  brand-detector, and `style`/`lifestage`/`trip_evidence` from its
  Person/Trip blocks — present in the raw per-visitor result files
  (`ops/cpi-brand-score-full/results/<person_id>.json`) but not carried
  into this join.
- Any pre-computed commercial metrics, segments, scores, or analysis of
  any kind — this file is raw joined observations only.

## Source code, for reference

| What | Path |
|---|---|
| Join script that built this dataset | `ops/cpi-combined/build_joined.py` |
| Golden output schema ("registry") | `analysis-api/libs/analyzer/schema.py` |
| Golden schema → column-name mapping | `analysis-api/libs/datalayer/transforms/normalize.py` |
| Brand-detector output schema | `brand-extractor/brand_detector/schema.py` |
| Field source-of-truth decisions | `briefs/12-combined-feature-source-map.md` |
| Full field inventory/rationale | `briefs/11-golden-vs-brand-detector-feature-map.md` |
| System/pipeline architecture | `briefs/01-analysis-api-architecture.md` |
| This tenant's raw counts/config | `briefs/03-cpi-tenant-state.md` |
