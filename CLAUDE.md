# mm-business — business content & deliverables repo

This repo is the single source of truth for **business content**: data reports, sales decks,
investor materials, outreach, and client facts. Code lives elsewhere (datalayer = ETL/analysis,
dashboard-backend = product). This repo consumes their *outputs* and turns them into deliverables.

## Strategy — load before any strategic, sales, pricing or fundraise task

The operating strategy layer lives in **`strategy/2026-08-19-base-strategy/`**. Start at its
`00-INDEX.md`, which carries the load-order table (which file to open for which task).

- **`00-INDEX.md`** — state of play, the three clocks, load order. Read first, always.
- **`01-session-protocol.md`** — tag discipline, guardrails, capacity limits, update triggers.
- **`02-decisions.md`** — what is decided (cite IDs like `D1`), what is open. **Check before
  proposing anything strategic**; never reverse a decision silently.
- **`03-business-model-fork.md`** — the one live strategic question (revenue-first vs raise on the
  data thesis). **Decision deadline 15 Oct 2026.** Treat as open until then.
- **`04-revenue-architecture.md`** — pricing, gates and the numbers behind any forecast.
- **`05`–`09-ws-*.md`** — one brief per workstream (sales, product/data, legal/rights, fundraise,
  team/ops). Load only the one your task belongs to.
- **`10-calendar-gates.md`** — every date and its gate register.
- **`11-research-annex.md`** — external market facts with sources; consult before re-researching.

This pack supersedes every earlier strategy document. Its numbers are **strategy-internal**: before
any of them appears in a client-, brand- or investor-facing deliverable, add it to
`messaging/stats.yaml` with its source and status.

## How to produce any deliverable

1. **Never invent facts or numbers.** Client facts come ONLY from `clients/<x>/facts.yaml`.
   Market/benchmark numbers come ONLY from `messaging/stats.yaml`. A number that isn't in
   either file is **blocked** — add it to the right file (with source) first, then use it.
2. **Template + spec + facts.** Before building, read `templates/<type>/SPEC.md`. If a
   required input is missing from `facts.yaml`, STOP and ask — do not improvise client data.
3. **Approved copy first.** Slogans, problem statements, one-liners, and boilerplate live in
   `messaging/narrative.md` and `messaging/boilerplate.md`. Reuse them verbatim before
   writing new copy. New strategic copy needs founder sign-off before entering the library.
4. **Language:** retailer- and brand-facing deliverables in **Czech**; investor and
   international-partner materials in **English**. Formal "Vy" in Czech business writing.
5. **Output location:** `clients/<x>/delivered/YYYY-MM-DD-<type>/` — dated, never overwrite.
   Company-level decks go to `decks/`. Render PDFs with `scripts/render-pdf.sh`.

## Hard rules (non-negotiable, encode in every deliverable)

- **Benchmark integrity:** data from 1 chain per category = a "channel read", NEVER a
  "market average" or "benchmark". Cross-chain claims require ≥2 chains in that category.
- **Modeled vs real POS:** EuroOil POS in tobacco decks is modeled/illustrative — it must
  always be labeled as such. Never present modeled data as measured. GymBeam & SuperZoo POS
  matching is real and citable.
- **Privacy language:** always pair depth claims with the disarm line: no facial
  recognition, no identities, no biometric templates, aggregates only (k≥25).
  "Age estimation with error bands", never "age detection".
- **Naming clients:** check `can_name_publicly` in `facts.yaml` before naming any client
  in any external material. Use the approved fallback phrasing from `approved_claims`.
- **The forwardability litmus:** every artifact must be safe if forwarded tonight to the
  client's retailer, a competitor, or a journalist. If not, rewrite it.
- **One stage per audience (the menu rule):** retailers hear operational actions + new
  revenue; brands hear measurement first (never lead with personas to big brands);
  brokers hear the who-layer schema (never methodology); investors hear the measurement
  layer + rights portfolio. Do not mix narratives in one deliverable.
- **Internal-only numbers:** entries in `stats.yaml` marked `internal_only: true`
  (e.g. competitor contract values, our cost structure) must NEVER appear in any
  external material.

## Strategic vocabulary (use consistently)

- **"behavior"** is the owned word: "E-commerce runs on behavior. Physical retail got left
  behind — with receipts."
- The wedge: we connect **who buys** (visual behavior) with **what sold** (POS).
- Value chain doctrine: **collect at 1, sell at 2–3, partner at 4**
  (1 collect data → 2 insights → 3 actionable steps → 4 execution/personalization).
- Retailer positioning: **retailer-as-monetizer** — we never "sell their data";
  we build THEIR audience revenue, they keep the majority and full veto.

## Quick reference

- **Strategy pack (start here for strategy work): `strategy/2026-08-19-base-strategy/00-INDEX.md`**
- Brand tokens: `brand/tokens.css` (report palette; per-client accent variables)
- Stats with sources: `messaging/stats.yaml`
- Objection answers (GDPR, footfall counters, NIQ…): `messaging/objections.md`
- Outreach templates (email/LinkedIn/WhatsApp, CZ+EN): `templates/email/outreach-library.md`
- DB queries for report data: `data/queries/` (read `data/README.md` for k≥25 rules)
