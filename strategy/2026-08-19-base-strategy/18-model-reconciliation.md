# Model reconciliation: the financial model vs this strategy set

**Status:** 2 Sep 2026, second pass. Founder decisions recorded against every finding, and the ones
marked DONE are already applied to the model. The remaining open items are the ones that require the
strategy pack to be edited, which is deliberately deferred until the model is final.

**Standing decision:** the financial model is the source of truth. Where this pack disagrees with it,
the pack gets updated, not the model.
**Scope:** the VC financial model (MODEL / MARKETS / HEADCOUNT tabs) line by line, cross-checked against
`12-numbers-external.md`, `13-revenue-model.md`, `17-signals-21nov.md`, `07-ws-legal-rights.md`,
`../../blitzkrieg/00-alignment.md`, `../../blitzkrieg/fundraise/fundraise-execution-guide.md`
and `../../messaging/stats.yaml`.

**Why this is a new file** (per CLAUDE.md rule 5): no existing file owns the reconciliation between the
model and the strategy set. Every individual correction below belongs in the file that owns that number,
and should be made there. Once they are, this file collapses to a short decision record or is deleted.

Base case as reviewed: 2031 ARR €16.09M · exit €160.9M at 10x · min cash €22,770 · 11 integrity checks passing.

---

## The one table that matters

Every investor will put the model next to the curve in `12-numbers-external.md` §4. They do not agree,
and the disagreement runs in opposite directions at the two ends.

| Year end | Doc curve | Model | Ratio | Verdict |
|---|---|---|---|---|
| Dec 2026 | €0.4–0.7M | €0.083M | 0.15× | 5–8× below |
| Dec 2027 | €2.0–3.0M | €0.651M | 0.26× | 3–4.6× below |
| Dec 2028 | €4.0–5.5M | €2.00M | 0.42× | 2–2.7× below |
| Dec 2029 | €6.0–8.0M | €5.13M | 0.73× | below |
| Dec 2030 | €8.0–10.5M | €9.54M | 1.03× | inside band |
| Dec 2031 | €10–14M | €16.09M | 1.34× | above band |

---

# A · Blockers

These cost credibility rather than accuracy. Each is a documented contradiction with a decision or a
number this repo already treats as settled.

## A1 · The model and the deck curve measure different things, and neither says so

`17-signals-21nov.md` defines the Feb-2027 base case as "2–3 paying + ≥4 banked 2027 orders/LOIs-with-numbers",
so the external curve counts **contracted** revenue including banked orders and LOIs. The model counts
**live run-rate ARR** only. That reconciles most of the gap above. It is written down nowhere.

**Fix:** pick one definition and label it in both places. If they stay different, add a second line to
Section 3 of the model, "contracted ARR including banked orders and signed LOIs", above run-rate ARR.
Without it, the first analyst who lays the two side by side concludes the deck is inflated 5x.

## A2 · The growth shape is steeper than the one this repo explicitly rejected

`12-numbers-external.md`: "~48%/yr compound from Dec-2027 to Dec-2031 ... deliberately **less heroic than
the 106% CAGR** in the previous model: credibility is worth more than steepness with funds who have
already passed twice."

The model runs €0.651M to €16.09M over four years. That is a **123% CAGR**, above the number that
paragraph was written to disown.

**Fix:** either bring the curve down (most plausibly by slowing the T2 reprice or the market cadence),
or keep it and rewrite that paragraph explaining what changed: the aggregated read and the six-market
rollout did not exist when the 48% shape was set. What cannot stand is a document in this repo arguing
against the model.

## A3 · The founding seat price is the reading D17 was written to overturn

`../../blitzkrieg/00-alignment.md` D17: combined contracted ARR at 21 Nov is **≥€80k (2 paying × €40k
founding floor)**, and verbatim: "the old ≥€70k / €25k-floor reading was a mix-up (2×€35k
reverse-engineered from the combined goal)."

`stats.yaml → pricing_ladder`: "founding seat floor EUR 40k / ask EUR 40-60k (year 1, max 3/category)".

The model uses `MODEL!J46 = 35,000` and produces exactly €70k in Nov 2026. It encodes the superseded reading.

**Fix:** set the founding tier to **€40,000**. Nov-2026 becomes €80k, which is the number already
committed to at the 21 Nov gate. Cheapest fix on this list.

## A4 · Retailer revenue share is 30% in the model, 40–50% in stats.yaml

`stats.yaml → rev_share_model`: "data/measurement products: retailer ~40-50%".
`07-ws-legal-rights.md`, mandate letter: "up to 40% of any future economics presumed theirs."
Model: `MODEL!J50 = 30%` labelled, 0% aggregated.

**Fix:** decide which is the negotiating position and make the other match. If 30% is the real target
because the aggregated read carries no share at all, say so explicitly in the model and amend stats.yaml.
Gross margin and therefore the exit valuation ride on this number. Moving labelled share 30% to 40% takes
roughly 3 points off blended gross margin at exit.

## A5 · Cap convention still undefined, already flagged as a DD trap

`fundraise-execution-guide.md` §1.1: "the plan says €6.0M **pre-money**. State it explicitly in the CLA ...
and check the existing €80k CLA (€3.5M cap) uses the same convention: an inconsistency here surfaces in DD."

The model labels `MODEL!G68 = 6,500,000` as **post-money**, and treats the €3.5M angel cap as post-money too.
€6.0M pre + €0.5M is €6.5M post, so the arithmetic agrees and the labels do not.

**Fix:** write the convention beside the cap in the model and confirm the signed €80k CLA matches. If the
angel cap is pre-money, that entry line is 2.23% not 2.29% and every downstream MOIC shifts marginally.
This is an open action item in the fundraise plan, not a new finding.

---

# B · Structural

Mechanisms that are wrong in principle. Most barely move the headline, which is why they are worth fixing
before someone else finds them.

## B1 · The T2 reprice ignores the two-chain condition that defines T2

T2 means "the category runs in two or more chains". The model gates it on **time only**, 15 months after a
slot opens, and counts slots globally rather than per market. The reprice therefore fires in markets that
have one chain:

| Market | T2 fires | Chains at that point |
|---|---|---|
| Czechia | M16 | 2 (legitimate) |
| Slovakia | M35 | 1 |
| Poland | M37 | 1 |
| DACH | M48 | 1 |
| France + Benelux | M59 | 1 |

**Fix:** gate T2 per market on `chains >= 2` as well as slot age. The aggregated read derives from T2 slots
so it inherits the same flaw and the same fix.

**Exposure is small**: one slot at month 64, about €290k of ARR, 1.8% of the exit number. Chains arrive fast
enough that the correct mechanism gives almost the same answer, which is exactly why to fix it now.

## B2 · The store-density gate in the price ladder is not implemented at all

`stats.yaml → pricing_ladder`: T1 needs **30–60 stores, 1 chain**; T2 needs **150–300 stores across ≥2 chains**.
The model uses 60 capture stores per chain, so a two-chain T2 category has 120 stores. Below the stated
requirement, and nothing in the model enforces either threshold.

**Fix:** the more defensible direction is to amend the ladder rather than the model. The sample-size
derivation now written into the sheet supports 30–60 stores per chain and explains why more stores add
precision and no revenue. If 150–300 stays in the ladder, capture stores per chain has to rise and
inference cost with it.

## B3 · "ARR per live slot" uses a denominator that flatters it

The KPI counts labelled plus aggregated slots as separate products, giving **€402k** at exit, comfortably
inside the €300–600k band the label cites. Per instrumented **category**, the canonical definition of a slot
in `13-revenue-model.md` §6, it is **€673k**, above the band.

**Fix:** report both. "ARR per sellable product" and "ARR per instrumented category". The €673k is not a
problem, it is the operating-leverage story, but a KPI measuring itself against a published band on a
different denominator reads as gaming once someone works it out.

## B4 · Yield per capture store is 5.8x the benchmark §4b calls the most useful one we have

`13-revenue-model.md` §4b derives €3,060 of revenue per instrumented store per year from NIQ's S-1 and calls
it "the single most useful benchmark we have". Its own scenario table tops out at 2.9x for the stretch target.
The model reaches **€17,881 per capture store** in 2031.

The model's answer is coherent and now written into the sheet: capture stores are deliberately capped because
statistical precision saturates, so revenue per store is not a constraint. That argument is sound, but it is
not in this doc, which still frames yield per store as the key check.

**Fix:** update §4–5 of `13-revenue-model.md` to record why the metric was retired.

## B5 · Employer overhead of 1.05 assumes contractors forever, in six countries

`HEADCOUNT!B16 = 1.05`, and the cell's own label says 1.05 is IČO and **1.34 is HPP**. By 2031 the plan
carries 70 people across CZ, SK, PL, DACH, France/Benelux and the Nordics. Germany and France effectively
require employment.

**Fix:** step the multiplier up as the team internationalises, or blend by market. 1.05 to ~1.25 on the
non-CZ share is realistic. Payroll is 57% of total opex over the plan, so this is the largest soft spot on
the cost side.

## B6 · Salaries are Czech-calibrated for a pan-European plan

Brand Seat Sales at €45k gross selling €170k seats. Data/ML at €70k. Customer Success at €42k. Defensible
in Prague, not in Munich or Paris, where the model has people from month 25 and 37.

**Fix:** add a cost-of-labour multiplier per market, or state plainly that scaling roles are hired in CEE and
travel, with only compliance and retailer BD hired locally. The second is cheaper and may be the real plan.
It has to be a stated choice either way.

---

# C · Gaps

Not wrong, but an investor will ask and the model does not contain them.

## C1 · No bridge line, though the plan calls for one
`../../blitzkrieg/00-alignment.md` C9: "Money lands 21 Nov; cash wall is mid-Dec ... keep the pack's standby
bridge (€60–100k CLA incl. Marek) papered ≤30 Sep." The model has no bridge row and shows minimum cash of
€22,770 in month 2. **Add** a bridge line set to zero by default, so "what if the round slips six weeks" is
answered inside the model.

## C2 · No sensitivity table
The scenario switch covers speed. Nothing covers price realisation, seats per slot, or churn. **Add** one
block: exit ARR and exit valuation across ±20% on realised price, ±0.5 on seats per slot, and 8% / 15% / 25%
annual churn. A VC will build this in ten minutes; better they read ours.

## C3 · No retention view, and the expansion story is hidden
Churn is a single blended 8% annual figure. **Add** net revenue retention. A slot repricing T1 €80k to T2
€170k *is* expansion revenue and is currently buried inside the ARR line. Surfaced properly it is one of the
strongest numbers in the model.

## C4 · No revenue concentration line
2027 ends with 3 slots and roughly 7 seats, so top-customer concentration will be well above 20%. **Add** a
concentration row to the KPI block. Early concentration is normal and only looks like a problem when it is
discovered rather than disclosed.

## C5 · The deck's unit economics do not match the model
`fundraise-execution-guide.md` slide 7 "Capital Flywheel": €500k covers "Store Ops (€40/store)", then "sell
this one dataset to 6 brands at €30k each", for a "20x return". The model has no store-ops line, prices at
€40k / €80k / €170k, and returns 16.9x on the pre-seed. **Rewrite the slide from the model.** The flywheel
argument is right; the three numbers on it are from an earlier version.

## C6 · Romania and the Balkans are out of the model but may still be elsewhere
The rollout is now Czechia + Slovakia as home market, then Poland (M13), DACH (M25), France + Benelux (M37),
Nordics + Iberia (M49). **Sweep** decks, one-pagers and pillar plans for the old CZ → SK → PL → DACH → RO
sequence.

---

# D · Minor but visible

| # | Detail | Fix |
|---|---|---|
| D1 | `12-numbers-external.md` centres the outcome on a "€100–150M target band"; the model produces €160.9M | Widen the band or note that the base case runs slightly above it |
| D2 | The doc reasons from "~5.4% seed"; the model's seed holds 16.2% at exit on a €2.5M round | Drop the illustrative figure and point at the model's cap table, which reconciles to 100% |
| D3 | Legacy revenue is €1,000/month flat for 64 months with no note on what it is | One line: legacy screens, held flat deliberately, not part of the thesis |
| D4 | Four stats still marked `needs-source`: 87% after payment · 70% of marketers · 71% personalisation · ~90% FMCG offline | Source or remove. If any is on a slide it is a DD finding waiting to happen |
| D5 | Three per-store cost figures in circulation: model €45/capture store/mo (inference only), `our_cost_structure` <1,000 CZK/store/mo (~€40) all-in, `17-signals-21nov.md` target ≤€30/store/mo | Pick one and define whether it is all-in or inference-only |

---

# What is already solid

Do not spend effort re-checking these.

- Every P&L line reconciles exactly to an independent rebuild, across all 64 months and all six years.
- Eleven integrity checks pass, including ones that catch silently-zero driver rows and hard-coded scenario inputs.
- Customer acquisition cost is derived bottom-up, not assumed to hit a target ratio.
- Sample size and the k≥25 regime are derived from first principles and anchored to the GymBeam pilot.
- Cash never goes negative, and the company still reaches break-even with the Series A money removed.
- The cap table reconciles to 100% with the pre-CLA ESOP carved out correctly.
- Tax is the correct Czech rate (21%) with loss carryforward.
- Gross margin rises monotonically from 71% to 77% for a structural reason, not by construction.

---

# Suggested order

1. **A3** first. One cell, removes a documented contradiction.
2. **A1 and A2** together. They are the same argument about what the curve means.
3. **A4 and A5** are decisions to make, not edits.
4. **B1 and B2** are an afternoon.
5. Everything in **C** is additive and can wait until the model is internally settled.

---

# Decision log and status, 2 Sep 2026

| # | Decision | Status |
|---|---|---|
| A1 | Metric mismatch stands for now. The model reports live run-rate ARR; the pack's curve will be re-cut from the model once it is final | open, deferred |
| A2 | Same. The growth-shape paragraph in `12-numbers-external.md` gets rewritten from the finished model | open, deferred |
| A3 | Founding seat set to **€40,000**. Nov-2026 now produces €80k, matching the 21 Nov gate | **DONE** |
| A4 | Revenue share stays at 30% in the model; `stats.yaml` will be aligned to it later | open, deferred |
| A5 | The model no longer names instruments. Rounds are "Pre-seed", "Seed", "Series A" and the angel line is "Angel round". Instrument choice is a term-sheet question, not a model input | **DONE** |
| B1 | T2 is now gated per market on **slot age AND chains >= 2**. Six new per-market rows on MARKETS (51-58) carry the gate; MODEL reads the total | **DONE** |
| B2 | Resolved by B1 plus the sample-size derivation already in the model. The ladder in `stats.yaml` will be amended to 30-60 stores per chain when the pack is updated | open, deferred |
| B3 | Two KPIs added: **ARR per instrumented category** and **categories at T2 density**. The old KPI is renamed "ARR per sellable product" so the denominator is explicit | **DONE** |
| B4 | Deferred with the rest of the pack | open, deferred |
| B5 | The IČO / HPP overhead coefficient is **removed**. All role costs are now stated as fully loaded annual cost, so there is one number per role instead of two | **DONE** |
| B6 | **Labour cost multiplier added**: 1.00 in the home market rising to 1.35 at the full six-market footprint, scaling with active markets. Applies to scaling roles only | **DONE** |
| C1 | **Standby bridge row added** to the funding block, zero unless drawn, wired into the funding inflow | **DONE** |
| C2 | **Sensitivity block added** at the foot of MODEL, computed by re-running the model one variable at a time | **DONE** |
| C3 | Net revenue retention: not now | closed, not doing |
| C4 | Revenue concentration: not now | closed, not doing |
| C5 | The model is the source of truth once final. Deck and pack get re-cut from it | accepted |
| C6 | Swept. No Romania or Balkans rollout reference survives anywhere in the repo (the only hits are unrelated brand-target org structures) | **DONE** |
| D1 | Exit above the €100-150M band: does not matter | closed |
| D2 | The illustrative "~5.4% seed" figure is **removed** from `12-numbers-external.md` and replaced with a pointer to the model's live cap table | **DONE** |
| D3 | Legacy revenue relabelled **"Existing business revenue"** | **DONE** |
| D4 | `needs-source` stats: ignore for now | closed |
| D5 | Per-store cost figures: ignore for now | closed |

## What the applied changes did to the base case

| | before | after corrections | after headcount pass |
|---|---|---|---|
| 2031 ARR | €16.09M | €15.44M | **€15.44M** |
| Exit at 10x | €160.9M | €154.4M | **€154.4M** |
| 2031 EBITDA | €2.24M | €0.54M | **€1.88M** |
| 2031 EBITDA margin | 17.5% | 4.4% | **15.2%** |
| 2031 headcount | 70 | 69 | **52** |
| 2031 revenue per FTE | €177k | €180k | **€238k** |
| Rule of 40, 2031 | | | **88%** |
| ARR per instrumented category, 2031 | €673k (above the €300-600k band) | €572k | **€572k (inside it)** |
| Minimum cash | €22,770 | €22,770 | €22,770 |
| Integrity checks | 11 passing | 11 passing | 11 passing, 0 errors |

Two corrections drove it. The per-market T2 gate removed roughly 4% of exit ARR by delaying the
reprice until a second chain is actually live. The labour multiplier added cost from month 25 onward,
as the team moves into DACH and then Western Europe.

**Resolved, third pass.** The 1.35 multiplier stays, because salary levels are the easiest thing in a
plan for an investor to check and a low one invites the question. The margin was recovered on the
other side instead, by slowing team growth rather than by understating pay.

Six slot-driven and overhead ratios were loosened, and the three chain-driven ratios plus the
market-driven legal ratio were left untouched:

| Role | Driver | Was | Now |
|---|---|---|---|
| Category Analyst | live slots | 1 per 3 | **1 per 5** |
| Data / ML Engineer | live slots | 1 per 6 | **1 per 8** |
| Brand Seat Sales | live slots | 1 per 3 | **1 per 4** |
| Customer Success | live slots | 1 per 5.5 | **1 per 7** |
| Marketing | live slots | 1 per 8 | **1 per 12** |
| Finance / Ops / G&A | total headcount | 1 per 15 | **1 per 18** |
| Backend / Platform | chains | 1 per 5 | unchanged |
| Deployment | chains | 1 per 4 | unchanged |
| Retailer BD | chains | 1 per 2.5 | unchanged |
| Legal / DPO | markets beyond first | 1 per 1.5 | unchanged |

The reasoning is written into the HEADCOUNT tab beside the ratio table: the team scales with the
number of PRODUCTS, not the number of CUSTOMERS, which is the operating expression of "produced once,
sold N times". What scales with chains is deliberately not thinned, because integrating a chain is the
genuinely hard part and understating it would be the wrong place to be optimistic.

## Sensitivity, as recorded in the model

| Case | 2031 ARR | Exit at 10x | Minimum cash |
|---|---|---|---|
| Base | €15.44M | €154.4M | €22,770 |
| Realised price 20% below plan | €12.35M | €123.5M | €22,770 |
| Realised price 20% above plan | €18.52M | €185.2M | €22,770 |
| Seats per slot 0.5 lower | €13.14M | €131.4M | €22,770 |
| Seats per slot 0.5 higher | €17.74M | €177.4M | €22,770 |
| Annual churn 15% | €13.85M | €138.5M | €22,770 |
| Annual churn 25% | €11.82M | €118.2M | €22,770 |

On this cost base the plan stays funded in every case tested. A 20% price miss, half a seat less per
slot, or churn at three times the plan all reduce the exit; none of them creates a funding gap. The
minimum cash figure is month 2 in every run, which is today, before the pre-seed lands.

Note for the next pass: the sensitivity is computed by re-running the model one variable at a time.
It was re-run after the headcount change. If the cost base moves again, re-run it again, because a
stale sensitivity table is worse than none.


---

# Fourth pass, 2 Sep 2026: cost-overlap audit

The go-to-market double count was found by the founder, not by the audit. Worth recording why, because
it changes how this model should be reviewed from now on.

**Why it was missed.** Every audit so far tested whether the arithmetic ties: an independent rebuild in
Python reproduced all 64 months of every P&L line to the cent. But an independent rebuild of the *same
wrong specification* reproduces the same wrong answer. Nobody had asked the different question:
**what real-world money is this row, and is that money also sitting in another row?** That is a
semantic check, not a numerical one, and it is now a standing item.

**Running that check found three more of the same family.**

| # | Overlap | Size | Action |
|---|---|---|---|
| 1 | Go-to-market inputs were built as "six months of a salesperson's loaded time plus expenses". Those salespeople are in payroll via the HEADCOUNT ratios | 5.80M over the plan, of which roughly 4.4M was duplicated salary | Fixed. Inputs now hold only the direct non-payroll cost: 10k to open a slot, 5k per seat |
| 2 | Market entry cost explicitly included "the ramp of the first local commercial hire before that person carries quota". That person is also in payroll | 515k over the plan | Fixed. Entry costs cut to cover only local counsel, entity, DPO retainer, translation and signage: SK 15k, PL 60k, DACH 110k, FR+BNL 110k, Nordics 90k |
| 3 | Chain integration lists DPIA work; professional fees carry 2% of MRR; the Legal/DPO role is in payroll | 280k and 611k, overlap partial and small | Not changed. Wording tightened to external-only. Flagged as generous rather than duplicated |

**And one wrong driver, which is what made the unit economics look like they were deteriorating.**

Brand seat sales headcount was driven by **live slots**, the installed base. That means the sales team
keeps growing even when no new slots open, so cost per new seat rose 2.7x across the plan and LTV/CAC
fell from 20.9x to 10.7x. Read as a business fact that says unit economics get worse with scale, which
is the opposite of the thesis and would have been a serious question in a room.

Account executives are quota carriers and are sized to **new business**, not to the base. Renewals and
expansion are customer success, which is correctly driven by slots. Sales is now driven by new seats
won on a trailing twelve month basis, at 10 seats per AE per year, floored at one AE while any slot is
live. CAC is now flat and LTV/CAC is stable.

| | 2027 | 2028 | 2029 | 2030 | 2031 |
|---|---|---|---|---|---|
| CAC before | 16.2k | 30.8k | 33.8k | 37.4k | 43.8k |
| **CAC after** | **24.3k** | **27.6k** | **28.5k** | **30.6k** | **35.4k** |
| LTV/CAC before | 20.9x | 12.9x | 11.1x | 11.4x | 10.7x |
| **LTV/CAC after** | **13.9x** | **14.4x** | **13.2x** | **13.9x** | **13.3x** |
| Payback months after | 4.3 | 4.2 | 4.5 | 4.3 | 4.5 |

## Base case after the fourth pass

| Year | 2026 | 2027 | 2028 | 2029 | 2030 | 2031 |
|---|---|---|---|---|---|---|
| ARR | 93k | 662k | 2.00M | 4.28M | 8.95M | **15.44M** |
| Revenue | 17k | 290k | 1.24M | 3.23M | 6.97M | **12.40M** |
| EBITDA | (83k) | (415k) | (632k) | (232k) | 1.09M | **3.98M** |
| Margin | | | | (7.2%) | 15.6% | **32.1%** |
| Headcount | 8 | 10 | 20 | 29 | 45 | **47** |

Exit 154.4M at 10x. Minimum cash 14,895, which is month 2. Eleven integrity checks passing.

## The open problem this creates

**A 32.1% EBITDA margin in the exit year, on 72% ARR growth, is too clean.** Three cost overlaps and
one wrong driver have been removed and nothing has replaced them. The remaining cost base is missing
categories that a real company at 12.4M of revenue and 47 people across six countries would carry:

- **Software, cloud and tooling** beyond model inference: warehouse, BI, CRM, security, observability.
  A data business this size runs 200 to 400 EUR per head per month. Roughly 150 to 250k a year by 2031.
- **Engineering depth.** Ten engineers (4 ML, 3 backend, 3 deployment) for a real-time vision platform
  across 15 chains, 900 stores and six jurisdictions is thin. Two to four more would be normal.
- **Finance and administration for a six-country group** with local entities: two people is thin once
  there are entities to consolidate and audit.
- **Recruiting cost**, which for a plan that hires roughly 40 people is not zero.
- **Product and category R&D**: the model funds delivery of existing categories, not the work of
  opening new ones.

The margin is not high because the team ratios are aggressive. It is high because those lines do not
exist. Adding them honestly lands the exit-year margin somewhere near 15 to 20%, which is the shape a
company still growing 72% should have. **Founder decision needed on which to add.**

---

## Fifth pass: full-model semantics, and staffing the plan against published benchmarks

Two questions drove this pass. First, are there more errors of the family found in passes three and four, where a row's label and the money it actually represents had drifted apart. Second, is the team big enough to be believed.

### Semantic findings

**Seat count was gross, ARR was net.** Total brand seats never fell, because churn was applied to ARR and not to the seat stock. So "new brand seats won" measured net growth only, and nobody was staffed to re-win the seats that churned. New seats are now gross: net growth plus the seats lost in the month. This raises seats won in 2031 from 46.7 to 55.1 and raises CAC honestly.

**Aggregated slots were inflating the staffing driver.** HEADCOUNT was staffed against labelled slots plus aggregated slots, 39 at the end of 2031, when there are only 27 real category-market slots. The aggregated read is the same instrumented category resold, not a second thing to build. The driver is now labelled slots only, and the per-role ratios were reset against that honest denominator.

**One labour cost multiplier for everyone.** The 1.35x multiplier at the full European footprint was applied to every role including analysts, data engineers and finance, who are hired at the home base regardless of how many markets are live. The role table now carries a flag for whether a role is paid at in-market or home-base rates, and the payroll formula reads it. This is more accurate and it is cheaper, which is the rare case where the two agree.

**Data acquisition cost KPI was measuring compute.** The row was labelled "data acquisition cost" and pointed at the inference line. What a brand-side investor wants to know is what the retailers take. It now reports the retailer revenue share, 20.0% of revenue in 2031.

**A duplicate corporate tax rate.** Two adjacent input cells, 21% and 19%. The P&L used the 21%; the 19% was a leftover from before the rate was checked. Removed, and the cell reused for one of the new cost inputs.

**Two whole cost categories were missing.** Nothing in the model paid for software, cloud and tooling, and nothing paid to recruit the people it hires. Both are now a line: 120 EUR per FTE per month, and 4,000 EUR per external hire.

**Sensitivity minimum cash was not a stress test.** Every case reported the same minimum cash to the euro, because the low point was month 2, before any of the varied assumptions can bite. It now reports the low point after the pre-seed lands, which is the number that actually tests solvency. See the runway finding below.

**Checked and found sound:** average slot age, the T1 and T2 slot split, the per-market T2 gate, the credit drawdown (it does deplete cumulatively), tax loss carryforward, the three-month capture ramp, chain integration reconciliation, the cap table, and the absence of double counting between pre-model funding and the cash line.

### Staffing, and where each ratio comes from

The team was 47 at the end of 2031 against 15.4M EUR of ARR. That is 328k EUR of ARR per employee. Benchmarkit's 2025 B2B SaaS benchmarks put ARR per FTE at 200k USD for companies at 50-100M ARR and 300k USD for companies above 100M. A 15M EUR company claiming better than a 100M USD company is not a defence of efficiency, it is a hole in the cost base.

Every commercial ratio is now sourced, and the source sits beside the ratio on the HEADCOUNT tab:

| Role | Ratio | Source |
|---|---|---|
| Account Executive | 700k EUR new ARR per AE per year | Bridge Group 2024 SaaS AE Metrics Report: median enterprise quota 800k USD at 50-60% attainment, about 440k USD realised. We assume 1.6x, because inside a live slot the target list is six named brands the retailer has already endorsed. |
| Sales Development | 1 SDR per 1.7 AEs | Bridge Group 2025 (n=414): median 1.8 SDRs per AE at 100-500k USD ACV. We staff at a third of that. |
| Customer Success | 2.5M EUR ARR per CSM | Gainsight CS survey via Tomasz Tunguz: 2-5M USD per CSM, enterprise reference 3.5M USD over 25 accounts at 140k USD ACV. Our seat ACV is about 123k EUR. |
| Marketing | 1 per 6 slots | Holds marketing near 3% of ARR against SaaS Capital's 8% median. |
| Finance / Ops / G&A | 1 per 10 headcount | Six legal entities. Holds G&A near 5% of ARR against SaaS Capital's 15% median. |

Engineering stays deliberately small, per the founder decision that the team is efficient with Claude: 12 of the 62 scaling roles at the end of 2031 are engineering.

### What it does to the plan

| | Before | After |
|---|---|---|
| Headcount, Dec 2031 | 47 | 69 |
| ARR per FTE | 328k EUR | 224k EUR |
| 2031 EBITDA | 4.01M EUR | 2.73M EUR |
| 2031 EBITDA margin | 32.3% | 22.0% |
| Rule of 40, 2031 | not reported | 94 |
| S&M as % of revenue | 13.2% | 21.3% |
| CAC per seat, 2031 | 35,152 EUR | 47,810 EUR |
| LTV / CAC, 2031 | 13.4x | 9.9x |
| CAC payback | 4.5 months | 6.1 months |
| Exit ARR | unchanged at 15.44M EUR | unchanged |

Nothing on the revenue side moved. The whole delta is cost, which is the point: the revenue engine was never the weak part of the story, the cost base was.

LTV/CAC now declines across the plan, from 14.9x to 9.9x, and that is correct rather than a defect. The early years are founder-led selling with almost no sales cost. As a real commercial organisation is built the ratio normalises toward benchmark. Ending at 9.9x with a six-month payback is still roughly three times the 3x that is considered healthy.

### Resolved: month 13, and a scenario that was not testing itself

The stress test that now works surfaced something the old one hid. Cash bottoms at 113,739 EUR in month 13, September 2027, the month before the seed lands. That is 1.1 months of cover. If pricing lands 20% below plan it is 91k EUR.

Founder decision taken: the seed moves to month 13. The trough becomes 214,510 EUR in month 12, which is 6.5 months of cover, and it holds between 195k EUR and 234k EUR across all eight sensitivity cases.

Re-running the scenarios against the new cost base then found one more of the same family. Scenario 2 is labelled "No Series A", but the funding line paid the Series A out regardless of the scenario, so the scenario only slowed market entry and never tested the thing its name claims. The Series A amount is now conditional on the scenario. With it genuinely removed, total funding falls from 8.02M EUR to 3.02M EUR, 2031 ARR lands at 11.15M EUR instead of 15.44M EUR, cash never dips below 225,460 EUR and the company closes 2031 with 6.58M EUR. The Series A does not buy survival, it buys coverage.

Scenario 3, the accelerated case, is the tight one: faster entry burns ahead of revenue and cash bottoms at 55,982 EUR. Worth knowing before anyone proposes running faster.

---

## Sixth pass: annual billing, and an ARR bridge instead of an assumed expansion rate

### Annual billing in advance

The model billed monthly in arrears with no working capital at all. That is not how syndicated measurement is sold: Nielsen, Circana and Kantar all take annual subscriptions in advance, and so do we. A new input sets the share of seats billed that way (60% in the base case). The unearned portion sits as deferred revenue and funds the business at no cost, held at half a year of the prepaid base on the assumption that renewals fall evenly through the year.

The effect is on cash, not on the P&L. Closing cash at the end of 2031 rises from 8.76M EUR to 13.39M EUR, and the month-12 trough rises from 214,510 EUR to 297,130 EUR, which is nine months of cover rather than six and a half. The plan needs less capital than the burn alone suggests, which is worth being able to say.

### Expansion: what I did not do, and why

The instruction was to add expansion revenue and report NRR. I did not add an expansion rate, because it would have been a double count. The price ladder already delivers expansion: a seat sold into a slot at the founding tier is repriced to T1 after six months and to T2 once the category runs in two chains. That is expansion on an existing contract, and it is already in the revenue build. Layering an assumed growth rate on top of it would have counted the same money twice, which is the exact error this whole audit has been unwinding.

So instead of assuming expansion, the model now measures it. A six-line ARR bridge sits under the annual summary:

| | 2027 | 2028 | 2029 | 2030 | 2031 |
|---|---|---|---|---|---|
| Opening seat ARR | 81k | 650k | 1.99M | 4.26M | 8.94M |
| + New business | 291k | 919k | 1.85M | 3.73M | 5.32M |
| + Expansion (price ladder) | 301k | 524k | 695k | 1.52M | 2.20M |
| - Churn | 23k | 103k | 269k | 582k | 1.04M |
| = Closing seat ARR | 650k | 1.99M | 4.26M | 8.94M | 15.43M |
| **NRR** | 443% | 165% | 121% | 122% | **113%** |

Expansion is computed directly from slots crossing the T1 and T2 gates, priced at the gap between tiers. New business is then the balancing item. The bridge ties to ending ARR in every year.

Two cautions belong with that 113%, and both are on the sheet. The 2027 and 2028 figures sit on a base of one to three slots, where a single slot repricing moves the percentage enormously: arithmetically right, comparatively meaningless. And the ladder is a one-time uplift per slot, not a perpetual engine. Once every slot has reached T2, NRR converges on 92%, which is one minus gross churn. Holding 113% past this horizon needs a real cross-sell motion into new categories and markets, and that is not modelled.

Against a Benchmarkit 2025 median NRR of 101%, ending the plan at 113% on a derived rather than an assumed number is a good place to be.

### Still open, not done

Two items from the recommendation list were deferred by founder decision:

- **Sales ramp.** The AE count uses the Bridge Group quota but not the Bridge Group ramp, which is 10 to 12 months to full productivity at 30 to 70% during ramp. Using half of a source is the same class of problem this audit keeps finding, and a partner who knows the benchmark will notice.
- **Inference cost.** 45 EUR per capture store per month is 0.06 EUR per hour of continuous visual inference. It is the COGS input most likely to be challenged, and it has not been checked against real Gemini pricing at our frame rate.

---

## Layout rebuild: one sheet became seven

The workbook was one 227-row MODEL sheet holding the README, the assumptions, the monthly engine, the annual summary, the KPIs, the cap table, the checks and the sensitivity table, plus MARKETS and HEADCOUNT. Anyone opening it landed in the middle of a wall of text with the numbers that matter sixty columns to the right and a hundred rows down.

It is now seven tabs in reading order: READ ME, SUMMARY, ASSUMPTIONS, MODEL, MARKETS, HEADCOUNT, CHECKS. MODEL is only the monthly engine. SUMMARY is the landing page and carries the annual view, the ARR bridge, the operating metrics, the cap table, the exit math and the sensitivity table. MARKETS and HEADCOUNT keep their own inputs, by founder decision, because those are rollout and staffing rather than economics.

Thirty-six named ranges replace the old cell coordinates. `Price_Founding` rather than `$J$46`, `Months_To_T2` rather than `$J$63`. Formulas now read as sentences, and the ASSUMPTIONS sheet prints each input's name beside it so an auditor can follow the maths without chasing references.

### How it was verified

The point of the exercise was that no number changes, so asserting it was not good enough. Before touching anything, every value on every sheet was snapshotted unformatted. The old MODEL was renamed ARCHIVE rather than deleted, the new sheets were built from its formulas through a mechanical rewriter, and afterwards **17,219 cells were compared one by one against the snapshot. Two differed, both being check labels that were deliberately reworded.** ARCHIVE was only dropped after that diff came back clean and a scan confirmed nothing referenced it.

The rewriter did get one thing wrong on the first pass and it is worth recording, because it is the same failure mode as the rest of this register. The regex remapped the left end of a qualified range and left the right end alone, turning `MODEL!J95:BO95` into `MODEL!J8:BO95`. That produced 143 error cells and four broken checks. It was caught within a minute because the CHECKS sheet went red, which is exactly what the checks are for, and repaired from the snapshot rather than by hand.

Acceptance tests after the rebuild: all twelve checks OK, zero formula errors, the scenario switch still moves 2031 ARR from 15.44M EUR to 11.15M EUR, and editing a price on ASSUMPTIONS moves the exit, so the new sheet genuinely drives the model rather than merely documenting it.

---

## Self-standing pass: the model stops citing anything outside itself

The workbook referenced internal strategy documents by filename in two places and named a competitor as a pricing anchor in two more. Both are wrong in an artifact that goes to investors: the first makes the model unreadable without a repo the reader does not have, and the second hands a reader a name to argue with instead of a mechanism to assess. All four are gone. A scan across all seven sheets now returns zero references to internal documents, zero named competitors and zero em dashes.

The pricing anchors are now stated as what they are: T1 sits just above the price at which a mid-size brand already buys syndicated measurement, and T2 on the average client value of the established providers. The claim survives without the name attached, and the name can go in the deck where it belongs.

Two wording fixes worth recording. The product description said the output was "who stops at a category, what they pick up, what they put back", which describes the mechanism and undersells the result. It now says what the thing actually delivers: who buys what. And the capture-store note explained precision improving with the square root of store count, which is true and belongs in a technical annex, not in a financial model. It now says the thing a financial reader needs: past a few dozen stores per chain the cost of instrumenting another store rises in a straight line while the value it adds does not, so the model holds the count where the marginal store still pays for itself.

### Narrative figures are now live, not typed

The fundraising story and the exit-multiple argument sat on READ ME with roughly fifteen figures typed into the prose: round sizes, caps, ARR at each round, entry multiples, MOIC. Every one of them would have gone stale the first time anyone touched an assumption, and several already had.

Both sections moved to SUMMARY, directly under the cap table where a reader is already looking at those numbers, and every figure is now a formula. The Series A paragraph reads its ARR by matching the round's month against the monthly ARR row, computes the entry multiple from the post-money on ASSUMPTIONS and the forward multiple from ARR twelve months later. The returns line divides modelled exit proceeds by the amount invested. The sensitivity narrative reads its exit range and its cash range from the sensitivity table above it. Nothing in the prose can now contradict the numbers beside it.

Claims that genuinely cannot be made live, such as what happens under the no-Series-A scenario, are stated qualitatively ("the exit shrinks by roughly a quarter") rather than with a figure that would rot.

### Scenario presets are explained on the sheet

MARKETS carried three scenario presets and a tempo multiplier with no explanation of what any of them assumed, including entry month 99, which means "never inside the horizon" and reads like a typo. Each preset now carries its own description beside it, and the scenario cell has a line above the table saying it drives every entry month and the tempo at once.

### Salaries: are they realistic

The column was labelled "fully loaded cost", which overclaims. Fully loaded normally means salary plus employer taxes plus benefits, equipment and workspace. This number is salary plus the 33.8% Czech employer social and health contributions, and nothing else, because workspace, software, tooling, travel and recruiting are separate lines in the P&L and folding them in here would have double counted them. The column is now "Employer cost" and the note under the table says exactly what is and is not in it.

To make the number checkable rather than assertable, the table now shows each role's implied gross monthly salary in EUR and in CZK, computed from the employer cost. Against a 2026 Czech benchmark of roughly CZK 90,000 a month gross for a mid-level software engineer:

| Role | Implied CZK / month | Read |
|---|---|---|
| Data / ML and Backend Engineer | 114,500 | Above mid-level, right for senior. Sound. |
| Account Executive | 98,100 | This is OTE, base plus commission. Sound. |
| Deployment, Retailer BD, Marketing | 89,900 | At the mid-level engineering benchmark. Sound for manager-level commercial roles. |
| Legal / DPO | 81,800 | Reasonable for a DPO carrying six markets. |
| Category Analyst, Finance / Ops | 73,600 | Fair for an analyst; light for a group finance lead, but this is a blended rate over six people. |
| Customer Success | 68,700 | Well above a support benchmark, which is correct: CS on 123k EUR accounts is not support. |
| SDR | 57,200 | Sound. |
| People / Talent | 65,400 | **Light.** An HR manager benchmarks near CZK 95,000. Founder decision. |

On top of these, in-market roles carry the labour multiplier to 1.35x at the full European footprint and everything carries 5% salary inflation, so a senior engineer costs about 94k EUR by 2031 and an account executive about 109k EUR. The overall answer is that the salaries are realistic and slightly conservative, with People / Talent the one line worth raising.

### One input moved and it was not me

`Months_To_First_Sale` reads 1. It was 2 when the ASSUMPTIONS sheet was built, and 2 is the value the whole Sep-2026 revenue correction depended on. Nothing in this session wrote to it. It is flagged rather than reverted, because it is an input cell and the founder owns it. At 1 the plan ends 2031 at 15.69M EUR of ARR rather than 15.44M EUR. Every number in the workbook, the sensitivity table included, has been recomputed at the current setting so the sheet is internally consistent either way.

---

## Seventh pass: the raise was three times the need, and the fix was a bigger plan

### The finding

Running the model with the funding line switched off entirely showed what the business actually consumes. The worst point on that path was **minus 901,256 EUR in month 29**, so the true peak capital requirement was about **1.1M EUR**. The plan was raising **8,016,500 EUR** and finishing 2031 with **13.6M EUR of unspent cash**.

Round by round it was worse than the total suggests. The pre-seed consumed 40% of itself before the seed. The seed consumed 17% of itself before the Series A. **The Series A consumed nothing at all**: after it landed, cash never fell again. Founders were giving away 38.5% of the company for capital that was 85% idle.

That is not a modelling error. It is a capital-efficient European rollout wearing a venture costume, and any partner would have found it in ten minutes.

### The fix: make the plan worth the money

Rather than shrink the story to fit the burn, the plan now does more with the capital, and each round buys something specific that cannot happen without it.

**The United States is a seventh market**, entering in month 28 with the Series A landing in month 27 to pay for it. Its cost is modelled as a one-off entry fee of 600,000 EUR plus 18,000 EUR a month of local fixed cost, roughly twice the DACH rate. The fee is deliberately a single number rather than a build-up: it covers a US entity, multi-state privacy counsel including the biometric-privacy regimes that govern camera-based systems in several states, a commercial beachhead, and a twelve to eighteen month retailer cycle carried before any revenue. A build-up would look more precise and be less honest.

**The seed now pulls DACH forward** from month 25 to month 18, so it buys European proof rather than sitting on deposit.

**Every round is sized to the runway it needs**, roughly six months of cover at the seed and nine at the Series A, rather than to a round number.

### What it does

| | Before | After |
|---|---|---|
| Total raised | 8,124,898 EUR | 6,374,898 EUR |
| Capital actually consumed | ~1.1M of 8.0M | all of it |
| 2031 ARR | 15.69M EUR | **20.29M EUR** |
| Exit at 10x | 156.9M EUR | **202.9M EUR** |
| **Founders at exit** | 55.3% | **60.1%** |
| Pre-seed MOIC | 16x | **23x** |
| 2031 EBITDA margin | 22.8% | 8.7% |
| Headcount 2031 | 69 | 88 |

Founders keep five points more of a company worth 46M EUR more, and the investors do better too because the pre-seed now returns 23x rather than 16x. Raising less and building more is not a trade here, it is strictly better on both sides of the table.

The cost is the exit-year margin, down to 8.7%, because the US is still ramping in the final year of the horizon. With ARR growing 77% that is a Rule of 40 score in the mid eighties, which is the number that matters at this stage.

### Salaries

Raised to the Czech ninetieth percentile for the two scarce engineering roles, 107,000 EUR of employer cost, which implies about CZK 167,000 a month gross and matches the platy.cz upper decile for software engineers. Everything else sits near the seventy-fifth percentile. Applying the ninetieth percentile to all twelve roles was tested and lands the exit year at 1.9%, which is not a fundable plan and is not what any company does: the ninetieth percentile is what you pay a scarce ML engineer, not an SDR. The split is the defensible position and every rate is now checkable on the sheet in both EUR and CZK.

### Two things flagged, not hidden

**Scenario 3 no longer funds itself.** The accelerated case ends at 31.1M EUR of ARR but dips to minus 81,565 EUR of cash. Deploying harder than the base case needs more than a 4.0M Series A. That is worth knowing before anyone proposes it in a room.

**Churn at 25% was the case that broke the plan** at the first sizing of the Series A. That is what moved it from 3.5M to 4.0M. At 4.0M every one of the nine tested cases stays funded, with the low point in month 12 in all of them, between 223k and 298k EUR.

### Still open

The T2 gate and the aggregated read both count chains rather than retailer groups. Two banners owned by one group satisfy the gate today. The T2 price rests on cross-chain coverage being a channel benchmark, and the aggregated read's 0% revenue share and 100% gross margin rest on no single retailer being able to claim it. Both weaken if the two chains are one group. Founder decision was to keep the chain mechanic and document it rather than re-gate on groups.

---

## Definition fix: the labelled read was described as single-chain

The README defined the labelled read as "data from one named chain", and that was wrong at T2. The tier ladder does not sell a second seat when a second chain goes live; it reprices the same seat, because the read now spans both chains with each still named. The step from 80k to 170k buys a cross-retailer comparison, not extra volume. A brand can hold that labelled seat and the aggregated seat at the same time, so its ceiling in one category and one market is the T2 price plus the aggregated price.

The distinction that matters is whether the retailer is NAMED, not how many chains feed the read. Labelled means named, aggregated means masked. Both can span several chains. The README now carries a worked example spelling this out month by month, written with neutral chain descriptions rather than real banner names, because naming real chains in a fundraising model implies partnerships that are not yet signed.

## Chains, not parent companies, and why that is right

Earlier passes flagged that the T2 gate and the aggregated read count chains rather than retail groups, and treated it as a weakness. On reflection and after founder input, it is the correct mechanic and the flag was overcautious.

Two banners under one owner are two different shopping environments: different assortment, different buyer, different shopper mission. A brand comparing its conversion across them is getting real information, not an artefact of the data model. And the commercial point that the revenue-share waiver depends on rests on the contract rather than on the org chart: each chain is signed as its own counterparty with its own data-processing agreement, so an aggregate spanning two of them spans two counterparties regardless of who owns the shares above them. This is now stated on the README rather than left as an open item.

## Formatting

The scenario preset table on MARKETS had header and input styling that stopped at column F, so the three columns added since, Nordics entry, tempo and US entry, rendered as unstyled plain numbers next to styled ones, and integer entry months displayed with a trailing decimal point. Styling was extended by copying the existing formats rather than re-specifying colours, entry months now format as integers, the tempo multiplier as two decimals, and the scenario description column is widened and wrapped.
