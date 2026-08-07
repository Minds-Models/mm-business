# Data report (pilot / persona report) — spec

**Reference implementation:** `reference.html` (GymBeam pilot deck — best current example).
Anonymized EN example: `reference-anonymized-en.pdf` (Sportisimo "sportstore" report).

**Audience:** the client retailer (exec team). Language: CZ (EN on request).
**Job:** prove the pilot worked and make the value menu concrete → drives the
post-pilot direction choice / mandate ask.

## Required inputs (block if missing)

From `clients/<x>/facts.yaml`: name, segment, pilot dates, `pos_matching` (real/modeled —
labels differ!), key_metrics (visitors, matched_orders, match_rate, revenue).
From `data/queries/`: persona distribution, category×persona matrix, daypart profile,
(if POS real) basket×persona, conversion by segment.
From `messaging/`: privacy paragraph (boilerplate.md), narrative lines as needed.

## Structure (sections in order)

1. **Cover** — client logo + M&M logo, period, store(s)
2. **Executive summary** — 3-5 numbers max (visitors, match rate, top finding)
3. **Methodology + privacy** — 1 page, the disarm content (no faces, k>=25, error bands)
4. **Who visits** — personas with distribution (NMF clusters, named, with % and traits)
5. **Who buys what** — persona × category/basket (ONLY if pos_matching: real; else omit
   or clearly label modeled)
6. **When** — daypart/weekday patterns per persona
7. **What to do about it** — 3-5 concrete recommended actions with expected impact
   (this section is what retailers remember — never ship without it)
8. **Next steps** — the menu (per current deal stage in facts.yaml)

## Rules

- Charts follow `brand/tokens.css`; per-client accent allowed, warm-paper base fixed.
- Every % must trace to a query in `data/queries/` or a snapshot in `data/snapshots/`.
- n=1 store => "this store", never "the chain" or "the market".
- Output: `clients/<x>/delivered/YYYY-MM-DD-data-report/report.html` + PDF via
  `scripts/render-pdf.sh`.
