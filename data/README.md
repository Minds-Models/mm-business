# Data bridge — how report numbers are produced

Source DB: dashboard Postgres (see dashboard-backend / datalayer for connection details —
credentials NEVER in this repo, use env vars locally).

Key source: `visitors_v2.llm_analysis` (per-visitor visual attributes, 12 groups) +
sessions/POS matching tables (see datalayer docs).

## Rules
- Only k>=25 aggregates may leave the database into snapshots/ or any deliverable.
- Raw per-visitor rows NEVER enter this repo (GDPR + git history is forever).
- Every delivered report references the dated snapshot it was built from
  (`data/snapshots/<client>-<date>/` — gitignored content, committed MANIFEST.md).

## Queries (stubs — fill with real SQL as reports are productized)
- `queries/persona-distribution.sql` — persona shares per store/period
- `queries/category-basket.sql` — persona x category/basket matrix (POS-matched tenants)
- `queries/daypart-profile.sql` — persona shares by daypart/weekday
- `queries/pos-match-rate.sql` — matching funnel (visitors -> matched orders)
