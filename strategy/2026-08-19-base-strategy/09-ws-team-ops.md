# WS — Team & Ops

**Owner:** Ondřej
**Objective:** protect the capacity arithmetic and make sure no gate slips silently.

## The capacity arithmetic (this is the binding constraint, not data volume)

- Two founders × 40 h/week for 26 weeks ≈ 2,000 gross hours → **~1,000 genuinely sellable hours**
  after product, fundraise and operations.
- The revenue architecture needs ~15 brand contracts + 4–5 supply deals + ~15 seats. Honest load:
  ~1,400–1,900 hours. **We are overcommitted ~1.5–2× on founder time alone.**
- Independent confirmation from the earlier red-team analysis: ~873 revenue-directed selling hours
  buys **4–8 signatures, not 26**. That analysis and this one differ in architecture and agree on
  the constraint.

**Four ways the plan closes the gap — all four must hold:**
1. **Cohort selling** — one category roundtable, three founding seats, instead of serial 1:1 cycles.
2. **Artifacts as the third seller** — Dima's calibration deck and free mini-reads pre-sell.
3. **One bizdev/analyst contractor from December** (post-raise, ~€3–4k/mo) absorbing seats, index
   renewals and campaign delivery.
4. **The deprioritisations actually enforced** (8-account rule, no new logo after 15 Nov, parking list).

Engineering: the SKUs + export gate + Store Twin + index ≈ 14–20 engineering-weeks in the window —
fits only if the general roadmap yields. One integration contractor from December absorbs per-chain
integration so core engineering stays on product.

Dima: 8–10 h/week, **fully allocated** (calibration → P&G read). Anything added pushes the
calibration artifact right, which pushes the raise narrative right. Guard this queue.

## Hiring — the only two roles before February

| Role | When | Cost | Gate |
|---|---|---|---|
| Integration contractor | Dec | ~€3–4k/mo | Post-raise only |
| Bizdev / analyst contractor | Dec | ~€3–4k/mo | Post-raise **and** after the 15 Oct fork — it is the first spend that hard-codes which sales motion we build |

Explicitly rejected as the growth lever: hiring a sales team. Capacity is solved by cohort
selling and artifacts, not headcount we cannot fund.

## Spending discipline

**Every €400 of speculative spend costs one day of company life.** Pre-raise experiments capped at
~€8k total: label-buy (€3k), counsel (€2–3k), cohort day (~€1k), observer/tally checks (<€1k).
Each must de-risk the round itself. Everything else waits for the money.

## The two scoreboards — report both, weekly

**A · Revenue:** signed annual contracts only. No pipeline in the ARR line, ever.

**B · The asset** — this is what the next round diligences, and it is the reason a February that
misses €5M can still be a good February:

| Metric | Target by 18 Feb |
|---|---|
| Rights-clean locations live | ≥200 |
| Signed rights instruments | ≥3 |
| Gold stores (receipt-level POS) | ≥3 |
| Cumulative POS-matched sessions | ≥50k |
| Upper-body brand-worn fill | ≥25% |
| Fleet/marketplace channels live | ≥1 |

**Retire the vanity metrics**: raw datapoints, devices shipped, visitors captured. Track
*rights-clean sessions per month*, the POS-linked share of them, and category density (stores per
category per chain — density is what gates the sellable price tier).

Why this matters more than it looks: the old scoreboard counted only signed annuals, so only
activities producing signed annuals survived planning. **The measurement chose the plan.** Adding
the asset line is what stops that recurring at the next re-plan.

## Weekly cadence

- **Monday pack (before the all-hands):** funnel + **rights-instrument count** + both scoreboards
  + this month's gates from `10-calendar-gates.md` with pass/fail/slipped + commitments due +
  max three decisions needed, each with a recommendation.
- **Any gate that passed its date without a verdict is reported as a miss**, not carried silently.
- **Friday:** CRM and task hygiene — every open deal has a stage and a dated next action.
- Same-day capture after every external meeting (see `01-session-protocol.md` §7).

## Housekeeping

- Business content belongs in this repo. The long-form strategy document, its HTML rendering and
  the meeting deck currently also exist in the `dashboard-backend` code repo, which is where the
  artifact build script reads from. Consolidate paths when convenient; **this folder is canonical.**
- An earlier strategy pack (a €5M plan, a red-team correction set, six monthly plans) was deleted
  from `strategy/` and never committed to git — it is unrecoverable. Everything load-bearing from
  it is restated in this pack. **Commit this folder.**
