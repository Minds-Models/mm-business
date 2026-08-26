# Base Strategy Pack — 19 Aug 2026

**What this is.** The company's operating strategy layer, converted into instructions a future
session (human or agent) can execute from cold. It replaces every earlier strategy document in
this directory — those files are no longer on disk and were never committed, so **nothing here
links to them**; anything load-bearing from that work is restated inline and attributed.

**Canonical long-form source:** [`mm-base-strategy.md`](mm-base-strategy.md) in this folder —
8 modules, full derivation, every number tagged. The files below are its executable form.
(Two rendered artifacts exist: a navigable HTML version of the document and a 19-slide meeting
deck. Both are generated from copies currently living in the `dashboard-backend` repo — business
content parked in a code repo. Consolidate when convenient; this folder is canonical.)

---

> **⚡ ACTIVE OPERATION: Blitzkrieg (21 Aug → 21 Nov 2026).** All-in data-BM sprint, D16.
> Plans + contradiction rulings: `../../blitzkrieg/` (start at `00-alignment.md`). This pack
> remains the doctrine layer; blitzkrieg is the execution layer.

## Load order — read only what the task needs

| Task | Load |
|---|---|
| Any session, first 60 seconds | `00-INDEX.md` (this file) + `01-session-protocol.md` |
| **The whole strategy in one picture (orientation / meetings)** | **`15-mental-model.md`** |
| "What do I push this week?" — per-market action menus | `16-three-market-pushes.md` |
| "What did we decide / can I change X?" | `02-decisions.md` |
| **The live question: pricing, breakeven, raise-vs-revenue** | `03-business-model-fork.md` |
| **How to model revenue at all (units, averages, benchmarks)** | **`13-revenue-model.md`** |
| Pricing a deal, forecasting, board/investor numbers | `04-revenue-architecture.md` |
| Deal work, meeting prep, partner strategy | `05-ws-sales-partners.md` |
| **Retailer says "brands will use our data against us"** | **`14-retailer-data-objection.md`** |
| Build priorities, deployment, data products | `06-ws-product-data.md` |
| Contracts, rights, GDPR/AI Act | `07-ws-legal-rights.md` |
| **Any number going to an investor, partner or data room** | **`12-numbers-external.md`** (canonical external curve) |
| Round, bridge, investor materials | `08-ws-fundraise.md` (deck spine: `../../templates/investor-deck/SPEC.md`) |
| Capacity, hiring, cadence, scoreboard | `09-ws-team-ops.md` |
| "What's due when?" | `10-calendar-gates.md` |
| **"Is it working?" — the 21 Nov signals scoreboard** | **`17-signals-21nov.md`** |
| Market facts, competitors, benchmarks | `11-research-annex.md` |

---

## State of play — one screen

| | |
|---|---|
| **Cash** | €50k bank · €12k/mo base burn · out **mid-Dec 2026** without new money |
| **Rights signed** | **0** — the binding constraint on every euro of data revenue |
| **Brand LOIs / contracts** | **0** |
| **Fleet** | 11 devices · ~133k unique visitors captured · all currently unsellable (no rights) |
| **POS ground truth** | GymBeam 2,622 matched orders / 92% / 21 days · SuperZoo real matching |
| **Live procurement** | SuperZoo (Plaček) RFI — 206 CZ stores, existing HIKVISION estate, 250+ CZ/SK horizon |
| **Raise** | €500k pre-seed at €6–7M post; €80k CLA already in at €3.5M cap; must close **≤15 Nov** |
| **Target** | €5M ARR run-rate by 18 Feb 2027 · named architecture €4.40M + €0.81M expansion · **P ≈ 5%** |
| **Base case** | €0.8–1.4M run-rate + the asset scoreboard (`09-ws-team-ops.md`) |

## The three clocks

1. **SuperZoo exec meeting — end Aug.** First rights signature or not.
2. **Brand budgets lock — Oct–Nov.** Miss it and 2027 brand revenue slips ~12 months.
3. **Cash-out — mid-Dec.** Round closes ≤15 Nov or the bridge draws.

## The one live strategic question

**A (revenue/breakeven first) vs B (raise on the data-source thesis).** Not yet decided.
Tests, gates and the pre-written decision rule are in `03-business-model-fork.md`.
Decision deadline: **15 Oct 2026**. Do not let any session quietly pick a side before then —
the fork is resolved by evidence on a date, not by argument in a meeting.

## Relationship to the older brain

A separate knowledge base exists at `~/Desktop/Aug 2026 Fundraise Re-think/brain/` (and a duplicate
copy in `… Re-think 2/`). It is `as_of 2026-08-04`, predates this pack, is **not in any git repo**,
and its canon still describes the business model as an open exploration with no deadline. Its index
and canon files now carry a stamp pointing here.

| This pack owns | The brain still owns |
|---|---|
| Strategic decisions and the decision log · revenue architecture and pricing gates · the business-model fork · workstream execution · the calendar and gate register · external research with sources | The never-say list · counterparty dossiers · playbooks (retailer / brand pitch, meeting prep) · ops rituals and cadence · canonical numbers not restated here |

**Where they conflict, this pack wins.** Two clean-ups worth doing deliberately: fold the brain's
still-good parts into this repo so business knowledge lives in one version-controlled place, and
delete the duplicate copy.

## The numbers law (inherited from `../../CLAUDE.md`, still binding)

Client facts come only from `clients/<x>/facts.yaml`. Market numbers come only from
`messaging/stats.yaml`. **Numbers in this pack are strategy-internal.** Before any of them
appears in a client-, brand- or investor-facing deliverable it must first be added to
`stats.yaml` with its source and status. Nothing here overrides the never-say list.
