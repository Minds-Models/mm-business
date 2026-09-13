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

---

## Eighth pass: the exit multiple gets a floor, and the sensitivity table gets a guard

### Why the sensitivity table is typed in, and what now stops it lying

The question was fair: why are those numbers hard-coded rather than computed. The answer is that they cannot be computed in place. Each row requires changing an input, recalculating the entire model, and reading the result, and a sheet cannot recalculate itself under a different assumption while also displaying the base case. Excel has a Data Table feature for exactly this; Google Sheets has no equivalent. Every serious model handles it the same way: the sensitivity block is pasted values from a scripted run.

The real risk is not that the values are typed, it is that they go stale silently when an assumption moves. That is now closed. A thirteenth integrity check compares the sensitivity table's own base-case ARR against the live model, and turns to CHECK the moment they diverge. The table cannot quietly misrepresent the plan any more; it can only be visibly out of date.

Also fixed there: a stray Verdict column sitting one row below its header with a leftover tenth case underneath it, and a base-case row that had lost its number formatting. The verdicts are now live formulas reading the min-cash column rather than typed words.

### The exit multiple now has a floor, not just an assertion

The plan prices the exit at 10x ending ARR, which is 12.4x recognised 2031 revenue. Against disclosed SaaS M&A that is high: across 543 transactions the median is about 4.5x revenue and the upper quartile 8.1x, and deal size is the strongest single predictor of where a deal lands. Asserting 10x without acknowledging that was a weak spot.

Two things were added. First, an honest paragraph: the multiple sits above general software comparables and stands only on the data argument, that an exclusive perpetually licensed panel matched to verified purchase is a scarce asset rather than a software subscription, bought by strategics rather than financial buyers. The category evidence is named rather than hinted at: Tesco built dunnhumby into a shopper data business it explored selling at close to 1bn USD, and Kroger bought the dunnhumbyUSA assets and built 84.51 around them. Retailers and measurement incumbents do buy these assets, and they buy them on the data.

Second, a live exit multiple ladder beside the cap table:

| Multiple on exit ARR | Exit value | On 2031 revenue | Pre-seed MOIC |
|---|---|---|---|
| 5x | 101.5M EUR | 6.2x | 11.6x |
| 8x | 162.3M EUR | 9.9x | 18.5x |
| 10x | 202.9M EUR | 12.4x | 23.1x |
| 12x | 243.5M EUR | 14.8x | 27.7x |

The useful line is the first one. Even at 5x, near the SaaS median rather than any data premium, the pre-seed still returns about 11.6x. The case does not depend on winning the multiple argument, which is a far stronger position than defending 10x to the death.

### Is breakeven too late

EBITDA turns positive in **month 57, May 2031**, and stays positive every month after. That is four and a half years from the pre-seed, at 20.3M EUR of ARR, on 6.4M EUR of total capital. For comparison, a venture-backed company at that ARR has typically raised ten times as much and is nowhere near profitable, so on capital efficiency this is not late at all.

The honest weakness is different: the plan ends eight months after crossover, so it never demonstrates *sustained* profitability inside the horizon, and the full-year 2031 margin of 8.7% averages six loss-making months with six profitable ones. That understates where the business actually is at the end.

Two rows were added next to EBITDA margin to show it properly, and neither is spin, both are the correct way to read a crossover year:

| | 2029 | 2030 | 2031 |
|---|---|---|---|
| EBITDA margin, full year | (59.3%) | (22.0%) | 8.7% |
| EBITDA margin, Q4 only | (48.0%) | (13.6%) | **16.2%** |
| EBITDA margin, December annualised | (51.2%) | (15.9%) | **17.9%** |

The company exits the plan at a 17.9% run-rate, not at 8.7%.

### Tempo, and market arithmetic verified

The tempo multiplier sat between the market entry columns as though it were another market. It has moved to the right of the US entry column, carries its own background and a divider, and is now explained: it multiplies every market's monthly opening rate, so at 1.25 a market that would take four months to open its next slot takes a little over three. It does not touch inventory, chain availability, entry months or price, only the speed at which live slots and chains accumulate once a market is open, and it is the only lever separating the accelerated scenario from the base case.

All seven markets were then reconciled independently against the model rather than trusted. Per-market slots sum to 37 against a sheet total of 37, chains to 18 against 18, active markets 7, local fixed cost 49,500 EUR a month against 49,500 expected, cumulative entry cost 985,000 EUR against 985,000 expected, and the seven per-market T2 rows sum to the T2 total. The MODEL tab picks up all of it unchanged.

---

## Ninth pass: the exit multiple was argued from the wrong comparables

### The mistake

The previous pass defended the 10x exit by benchmarking it against disclosed SaaS M&A: median 4.5x revenue, upper quartile 8.1x, therefore 10x needs justifying. That was wrong, and it was wrong in a way that undercut the entire thesis. This company is not being built as software. The whole point of the model rebuild, the perpetual licence, the chain masking, the k>=25 regime and the POS match is to be a measurement currency rather than an analytics subscription. Benchmarking it against SaaS concedes the argument before it starts, and SaaS multiples are depressed right now for reasons that have nothing to do with data assets.

The canon already had the derivation and it should have been used. From `why-not-nielseniq.md`: "a rented asset prices as a service at 3x to 4x, an owned rights portfolio prices as measurement at 8x to 12x." From `12-numbers-external.md`: the exit is stated at "a measurement-currency multiple of 8-12x". And the floor is in `11-research-annex.md`: a footfall incumbent was acquired at about 2.3x revenue, which the annex calls "the category's verdict on undifferentiated analytics".

So the band was never 4.5x to 8.1x. It is 2.3x to 12x, and where a given asset lands inside it is a rights question, not a technology question.

### What replaced it

The exit section no longer mentions software comparables at all. It states what is actually being bought, which per the canon is not the models and not the deployed stores but the licence portfolio plus the POS match that makes it a currency, and it ranks the buyer set by what each is short of: measurement incumbents pay most because they buy a currency, in-store retail technology pays less because it buys capability, retail media pays for closed-loop proof, and a single retailer group pays least because it caps the asset at one chain.

Beside it sits a live ladder where each multiple is labelled with what it assumes the buyer thinks they are buying:

| Multiple | Exit value | Pre-seed MOIC | What it prices |
|---|---|---|---|
| 2.3x | 46.7M EUR | 5.3x | Undifferentiated store analytics, the footfall comparable |
| 4x | 81.2M EUR | 9.2x | A rented asset, a terminable licence, priced as a service |
| 8x | 162.3M EUR | 18.5x | An owned rights portfolio, low end of the measurement band |
| **10x** | **202.9M EUR** | **23.1x** | **The plan. Midpoint of the measurement-currency band** |
| 12x | 243.5M EUR | 27.7x | Competitive process, or more markets live |

The returns paragraph now leads with the downside rather than the plan: even if the rights work fails entirely and this prices as undifferentiated analytics at 2.3x, the pre-seed returns 5.3x. At 4x it returns 9.2x. The case does not require winning the multiple argument, and saying so is stronger than defending 10x.

This also makes the data-processing terms legible as what they are. The spread from 2.3x to 12x is roughly 200M EUR of exit value, and it turns on whether the licence is perpetual and cross-chain. That is why those terms sit in the model's assumptions rather than in a commercial annex.

### The sensitivity table now shows its own basis

The remaining objection to a typed sensitivity table was that a reader cannot see what it was computed on. Two things fixed that without pretending the table is live.

A basis line under the table reads every relevant input straight from ASSUMPTIONS and MARKETS: scenario, all four seat prices, seat depth, penetration at maturity, the three timing gates, aggregated attach, churn, billing share, US entry month, tempo and the exit multiple. If an assumption moves, that line changes immediately, and the CHECKS guard added in the previous pass turns red at the same moment. The reader sees both the current basis and the warning.

The row labels also carry their base values live now, so "seats per slot 0.5 lower" reads "2.8 at maturity, base 3.3" and recomputes if the depth or penetration inputs change, and "US entry slips 12 months" reads "month 40, base month 28" off the MARKETS preset rather than a typed number.

Worth noting what this immediately surfaced: the basis line reads "1 months to first sale", which is the input drift flagged two passes ago and still unresolved. The mechanism works.

---

## The sensitivity basis, rebuilt as a card grid

The live assumptions line under the sensitivity table worked but read as one long run-on sentence, which is the wrong shape for something a reader scans rather than reads. It is now a grid of sixteen cards under the table, four across and four down, each one a merged block carrying the assumption name in small grey type above its live value in bold:

| | | | |
|---|---|---|---|
| Scenario | Founding seat price | T1 seat price, one chain | T2 seat price, two chains or more |
| Aggregated seat price | Payable brands per category | Brand penetration at maturity | Aggregated attach rate |
| Months to first paying seat | Months to mature penetration | Months to T2 density | Annual gross seat churn |
| Billed annually in advance | United States entry | Tempo multiplier | Exit multiple |

Every value is a formula reading the named range on ASSUMPTIONS or the live cell on MARKETS, so the grid restates the basis the moment anything moves, and the CHECKS guard turns red at the same time. Splitting the name and the value onto their own sheet rows is what allows the two to be styled differently while both stay live; a single cell containing a formula cannot carry mixed formatting.

Small thing worth noting because it is the kind of detail that gets read as sloppiness: the month cards decline properly, so a value of one reads "1 month" rather than "1 months".

---

## The card grid was live, and that made it lie

The question was when the case table recomputes, and testing it properly exposed a flaw I had built in the previous pass rather than confirming the design worked.

The test: change the T2 seat price on ASSUMPTIONS from 170,000 to 200,000 and watch three things.

- Live 2031 ARR moved from 20,292,581 to 22,187,390. Correct.
- The case table stayed at 20,292,581. Correct, it is a pasted run.
- The CHECKS guard turned to CHECK. Correct.
- **And the assumption card showed 200,000**, under a header reading "THE ASSUMPTIONS THIS TABLE WAS COMPUTED AT".

That last one is the problem. The grid was built with live formulas, so the moment anything changed it displayed the *new* assumptions while claiming they were the ones the table below was computed at. It asserted something false, confidently, in the one place a reader goes to check the basis. That is worse than having no grid at all, and a guard on a separate tab does not fix it, because the contradiction sits right there on the page.

### What it is now

The sixteen cards are **frozen**. They are written as values when the sensitivity is run, so they are a record of that run rather than a mirror of the current state. They can no longer contradict the table they sit under.

Staleness is instead surfaced where it cannot be missed, by a live banner directly above the table that reads one of two things:

> CURRENT. This table was computed at the assumptions shown underneath it, and those still match the live model.

> OUT OF DATE. An assumption has changed since this table was computed, so every number below is from the previous basis. Live 2031 ARR is now X against the Y this run used. Re-run the sensitivity before quoting anything from it.

It names both numbers so the size of the drift is visible, not just its existence. Conditional formatting turns the banner green or red, the grid header changes to match, and the CHECKS guard still fires as a third signal.

Verified end to end: at baseline the banner reads CURRENT; with the T2 price changed it reads OUT OF DATE and quotes 22,187,390 against 20,292,581 while the frozen cards still correctly show 170,000; reverting returns everything to CURRENT.

### Answering the question directly

Nothing recomputes the case table automatically, and nothing can, because a sheet cannot recalculate itself under a different assumption while displaying the base case. What the workbook now guarantees is that it cannot be quietly wrong: the moment an assumption moves, the banner goes red and names the gap, the header says the frozen basis no longer matches, and CHECKS flags it. The table is re-run by script, and after this pass the re-run also rewrites the frozen cards so the record and the results always move together.

---

## Tenth pass: the sensitivity table is gone, and the model is better for it

Founder call, and the right one. The case table was the only non-live block in an otherwise fully live workbook, and defending that one inconsistency had accumulated four moving parts: frozen assumption cards, a staleness banner, a CHECKS guard, and a re-run script. Four mechanisms to maintain nine rows of typed numbers.

The argument that settled it: an analyst does not trust somebody else's precomputed cases anyway. They change the input and watch. The model now supports that properly, with every driver on one named ASSUMPTIONS sheet and the whole chain live through to the cap table and the exit.

What made deletion safe rather than lossy is that the two cases that actually mattered were already live somewhere else:

- **No Series A, US never opens.** Scenario cell on MARKETS set to 2. One cell, fully live.
- **The exit at any multiple.** The ladder beside the cap table, live from 2.3x to 12x.

So the table was mostly carrying tests an analyst can run in a minute, plus two it could not run better than the model already does.

Removed: the nine-row case table, the sixteen frozen assumption cards, the staleness banner, the thirteenth CHECKS guard, and the narrative that read its ranges from the table. Also cleaned up while in there: a duplicate RETURNS paragraph left behind by an earlier row insert, and the rights-durability paragraph which had drifted out of order below it.

In its place, a short section 7 that does three things. It says there is no pre-baked sensitivity table and why. It points at the two one-cell structural cases. And it states, as a claim we stand behind rather than a table that needs maintaining, what the plan was stress-tested against: pricing 20% below plan, gross churn at three times plan, half a seat less per slot, US entry slipping a year, and the US never opening. It stayed funded in all of them, and churn was the case that came closest, which is what sized the Series A at 4.0M rather than 3.5M.

The ASSUMPTIONS header now carries the same instruction, since that is where someone will be sitting when they want to test something.

Eleven integrity checks, zero formula errors, and SUMMARY is 76 rows instead of 96.


---

# Eleventh pass, 9 Sep 2026: the adversarial review applied

Source: `18a-model-adversarial-review-2026-09-09.md`, findings 1 to 8 and 16 to 22 applied, 9 to 15
left as founder decisions with their impact measured. Method as instructed: every value on every tab
snapshotted unformatted before the first edit, the workbook diffed cell by cell after each block with
inserted rows mapped, zero unintended formula changes at either checkpoint, thirteen lines on CHECKS
all OK at the end with zero error cells on any tab.

Base case as reviewed: 2031 ARR 20.29M, EBITDA 1.42M, exit 202.9M, raised 6.37M.
Base case after this pass: **2031 ARR 15.22M, EBITDA (2.20M), exit 152.2M at 10x, raised 8.17M.**

## What was wrong, in the order it was fixed

**Slots existed before their chains (finding 1).** MARKETS built slots and chains as two independent
linear ramps from the entry month, and at the rates in the table the first slot appeared about nine
months after entry and the first chain about fifteen. Every market except Czechia was billing a
category read with no store capturing, the United States for eleven months on up to three slots. The
seven slot rows now cap live slots at `Slots_Per_Chain_Max` (new input, 4) times the chains deployed
two months earlier, the month the capture-store ramp on MODEL completes. Categories keep being opened
commercially from entry, nothing goes live until a chain is capturing.

**The T2 gate was per market, not per category, and it fired the month the second chain signed
(finding 2).** The B1 fix of the second pass gated on chains anywhere in the market, which is not what
CLAUDE.md's benchmark-integrity rule says and not what a slot is. Two new inputs: `T2_Cross_Chain_Share`
(0.75, the share of a market's mature categories that run in two of its chains) and `Months_T2_History`
(6, second-chain history before the reprice, covering the store ramp). The seven T2 rows read both.
Categories at T2 in Dec 2031 fall from 22 of 37 to 15 of 36.

**Churn was deducted twice in substance (finding 3).** The penetration curve is seats held, a net
position, and row 28 accumulated a permanent hole on top of it that was never backfilled, while row 20
counted replacement seats as wins, HEADCOUNT staffed AEs to sell them and row 44 charged nothing for
them. One convention now: churn is a flow of seats that sales re-wins. Row 28 is seat ARR churned in
the month, row 29 its trailing twelve months, row 30 is legacy plus the two seat ARR lines with no
retained-share factor, revenue share in row 37 follows, and row 44 pays the per-seat cost on gross wins.
The bridge's churn line reads row 28 by year.

**Seats per slot used the fleet's average age (finding 5).** Section 5 was added at the foot of MODEL:
slots opened per month, seats on slots inside the Founding window, seats on slots past it, the same for
aggregated slots, each a SUMPRODUCT over the vintage of every slot opened so far against the ramp on
ASSUMPTIONS. Row 14 is now the derived fleet average, row 19 reads the vintages, row 26 prices the
Founding-window seats at the founding price and the rest at T1, with the T2 premium applied to the
post-founding average on the T2 slot count, and row 27 prices aggregated seats from their own launch.

**Re-measure after that block, cross-chain share at 0.6, old rounds in place:** 2031 ARR 12.64M,
EBITDA (2.58M), 2031 headcount 76, cash net of prepayments (4.64M). Findings 1 and 2 carried 7.5M of
the 7.7M; findings 3 and 5 net to (0.2M), because removing the double churn deduction adds about 1.4M
and the vintages remove about 1.6M. Slot and chain counts barely moved, so the ratio-driven team did
not, and the plan stopped reaching breakeven. The sensitivity on the two inputs I had set:

| Cross-chain share / history months | 2031 ARR | 2031 EBITDA |
|---|---|---|
| 0.6 / 6 | 12.48M | (2.83M) |
| 0.6 / 0 | 12.55M | (2.62M) |
| 0.8 / 3 | 15.37M | (1.73M) |
| 1.0 / 6 | 18.76M | (757k) |
| 1.0 / 0 | 18.98M | +111k |

The share is the whole story; the history lag is worth 0.2M. Share 1.0 is the old assumption that
every category spans two chains, which is what the finding said was wrong. I reset the default to
0.75, on the reading of `13-revenue-model.md` §7 that once a grocery chain is in a market most
categories overlap and before that few do. It is the founder's number and it is on ASSUMPTIONS.

**The rest of the register.** The ARR bridge priced a T1 to T2 move at 50k per seat instead of 90k
(finding 4): expansion now counts the founding-to-T1 step for slots entering T1 or T2 and the T1-to-T2
step for slots entering T2, and 2031 NRR reads 133% rather than 113%. Deferred revenue no longer
includes the legacy business, and receivables on the monthly-billed share at `DSO_Days` (60) sit in two
new rows with the change flowing to cash (finding 6). Row 63 is cash net of unearned prepayments and
CHECKS row 17 reports its low point (finding 7). SUMMARY section 7 now states the round-slip cases in
words from measured numbers (finding 8). SUMMARY D65 read the tempo cell for the US entry month and
said "month 1" (16). HEADCOUNT column G and MARKETS column O were rewritten from the live tables as
formulas, so the ratios, the team size, the seat count and the phase months cannot drift again (17, 18).
READ ME says thirteen lines and CHECKS has thirteen (19). Hard-codes moved to named inputs:
`Angel_Amount`, `Angel_Post_Money`, `Series_A_If_Raised`, `GTM_Start_Month`, `Prepaid_Unearned_Share`,
the employer-contribution rate on HEADCOUNT, and the bridge's legacy deduction (20). The slot-opening
cost no longer charges aggregated slots (21). Tax never refunds and recruiting charges only hires above
the previous peak (22). `Months_To_First_Sale` is set to 2, which puts the first paying seats in Nov
2026 as the 21 Nov gate expects. The Bridge Group ramp is in: an AE ramp-cover role carries half an AE
for every AE hired in the trailing twelve months, two people at the end of the plan. A twelfth true
check tests the physical limits the earlier findings broke: seats per slot never above depth, T2 never
above the slots old enough, aggregated never above T2, no slot where no chain is deployed.

## Rounds re-sized from the unfunded path

With the funding line at zero the cash trough is (7.51M) in month 61 on a cash basis and (11.6M) in
month 64 net of prepayments. Sized on cash, pre-seed held at 500k: seed **1.55M** (was 1.75M; the
trough before the Series A is 661k in month 26, 6.3 months of cover) and Series A **6.0M** (was 4.0M;
trough 540k in month 61, 9.6 months). Total raised 8.17M. Founders 56.6% at exit, pre-seed 16.3x at
10x and 3.8x at the 2.3x floor, Series A 5.1x. Headcount ratios were left as they are and checked
against column F: 83 people, 183k EUR of ARR per head, 10 seats per salesperson, 20 accounts per CSM,
3 categories per analyst.

Stress, measured: the seed three months late leaves 16k of cash, six months late (229k); the Series A
three months late (437k), six months late (910k). Pricing 20% below plan (1.48M), churn at 24%
(814k), half a seat less (317k), all in the last two years, because the ratios do not respond to a
revenue miss. US slipping a year and US never opening both stay funded. Scenario 3 dips to (701k) in
month 26. The previous section 7 claim that the plan stayed funded in every case is gone.

## What it did to the plan

| | Reviewed | After block A (share 0.6) | Final (share 0.75, rounds re-sized) |
|---|---|---|---|
| 2031 ARR | 20.29M | 12.64M | **15.22M** |
| 2031 revenue | 16.43M | 9.82M | 11.28M |
| 2031 EBITDA | 1.42M | (2.58M) | **(2.20M)** |
| December 2031 annualised margin | 17.9% | | (1.7%) |
| Exit at 10x | 202.9M | | 152.2M |
| Raised | 6.37M | | 8.17M |
| Founders at exit | 60.1% | | 56.6% |
| Headcount Dec 2031 | 88 | 76 | 83 |
| Categories at T2, Dec 2031 | 22 of 37 | 10 of 36 | 15 of 36 |
| ARR per instrumented category | 548k | | 423k |
| Cash low after the pre-seed | 260k, month 12 | | 232k, month 12 |
| Cash net of prepayments, low | (642k), month 56 | (4.64M) | (3.57M), month 64 |

The scenario-2 result is the one to sit with: no Series A, no US, 2.17M raised, 2031 ARR 9.23M, 2031
EBITDA +1.14M, founders 70.7%. Inside this horizon the United States costs about 1.5M of 2031 EBITDA
for about 2.9M of 2031 ARR and 6.0M of dilution. That is a rights-portfolio argument about the exit,
not a P&L argument, and the sheet now says so in section 5.

## Founder decisions, measured, not taken

| # | Decision | One-cell test | 2031 ARR | 2031 EBITDA | Cash low after pre-seed |
|---|---|---|---|---|---|
| 9a | Aggregated attach 0.75 to 0.35 | `Attach_Rate_Aggregated` | 12.96M | (2.98M) | (685k) |
| 9b | Aggregated price 150k to 75k | `Price_Aggregated` | 13.33M | (3.08M) | (707k) |
| 10a | 30% retailer share on aggregated | `Rev_Share_Aggregated` | 15.22M | (2.95M) | (298k) |
| 10b | 40% on both reads | both share inputs | 15.22M | (4.07M) | (2.16M) |
| 11 | Edge hardware, proxy: chain integration 50k | MARKETS!B7 | 15.22M | (2.38M) | 90k |
| 12 | 150 capture stores per chain | `Stores_Per_Chain` | 15.22M | (2.91M) | (873k) |
| 13 | First slot live Jan 2027, first seat Mar 2027 | MARKETS!B11 = 5 | 15.00M | (2.80M) | (379k) |
| 14 | US never opens, Series A kept | MARKETS!H11 = 99 | 12.35M | (677k) | 232k |
| 15 | 10% post-money pool at the Series A | not a model input | founders 56.6% to about 50.9%, every MOIC times 0.9 | | |

## What I chose not to do

- No change to the team ratios, the prices, the retailer share, the store count or the US row. The
  plan not breaking even is the consequence of the corrections on an unchanged cost base, and the
  cost base is the founder's to move.
- Rounds sized on cash including prepayments, as the seventh pass did. Sizing on cash net of
  prepayments would mean raising about 13M, which is the venture costume the seventh pass took off.
  The net-of-prepayments low point is reported instead, on MODEL and on CHECKS.
- Inference cost still unchecked against list pricing at the intended frame rate. The empirical
  anchor is the current all-in cost under 1,000 CZK per store per month in `13-revenue-model.md` §4a,
  which supports 45 EUR only at today's sampling.
- The three-month store deployment ramp on MODEL row 11 stays as the one structural constant; it is
  named as such on ASSUMPTIONS and READ ME.
- `18a-model-adversarial-review-2026-09-09.md` stays as the finding register for this pass. Per
  CLAUDE.md rule 5 it should fold into this file once the decisions above are taken.

# Twelfth pass, 9 Sep 2026: the plan re-sized, a rollout defect found, and the final audit

Context. The eleventh pass corrected the revenue engine and left the cost base untouched, which produced
a plan that did not break even and needed 8.17M of capital. The founder read that as a half-done job,
and it was: the corrections were right, the plan around them had not been re-derived. This pass
re-derives it, finds one more implementation defect on the way, and closes with two full audits of the
workbook. Method as before: values snapshotted before each block, the engine re-implemented
independently in Python from the inputs on ASSUMPTIONS and MARKETS and compared month by month, zero
difference on every line, thirteen lines on CHECKS all OK at the end.

Base case at the start: 2031 ARR 15.22M, EBITDA (2.20M), 83 people, raised 8.17M, founders 56.6%.
Base case at the end: **2031 ARR 18.12M, EBITDA +2.31M (15.2%), Q4 2031 21.7%, 74 people, raised
7.12M, founders 55.7%, exit 181.2M at 10x.**

## Step 1: fewer markets, deeper, and a lighter raise

Per-market attribution on the eleventh-pass model, each market switched off in turn, showed France with
Benelux (entry month 31) and the Nordics with Iberia (entry month 49) both dilutive inside the horizon:
0.44M and 0 of 2031 ARR against (1.17M) and (0.99M) of 2031 EBITDA. Both were taken out of the base
preset (entry 99), left in the table and in the Series A deployed scenario. Founder decision, recorded
in MARKETS column O: fewer markets at depth are worth more than more flags on the map, and the capital
efficiency of the later rounds is what leaves room to open them later. Rule of 40 was removed from
SUMMARY entirely: below 10M of ARR both of its terms swing with discrete market openings, so it said
nothing about this company and read as noise. The row and every reference to it are gone.

## Step 2: the defect behind "Nordics returns zero"

The founder did not accept a market that costs a million and returns nothing as a result, and he was
right. The eleventh pass added the rule that a slot cannot exist before its chain, capped at
`Slots_Per_Chain_Max` times the chains deployed two months earlier. It left the market table as it was:
every market outside Czechia started with **zero** chains live at entry and grew chains at 0.06 to
0.075 a month, so the first chain appeared fourteen to seventeen months after entry, and until then the
slot cap was zero times four. Slovakia (entry month 9) got its first chain in month 25, Poland in month
28, DACH in month 33, the United States in month 42, and the Nordics never. Meanwhile local fixed cost,
inference and the in-market team were charged from the entry month. That is not a rollout, it is
fourteen months of pure cost per market.

Fix: the entry month is defined as the month the first chain in that market is live and capturing,
with its launch category as the first labelled slot, exactly as the Czech row already read (one chain,
one slot live at month 1). MARKETS columns C and E now carry 1 for every market, headed "live at
entry", and column O explains what the entry month means and what the entry cost, the integration cost
and the retailer BD team pay for before it. Further chains and categories open at the monthly rates in
the table from there. Effect on the base case with everything else unchanged: 2031 ARR 14.78M to
18.36M, EBITDA +1.07M to +4.23M. Slovakia moved from month 9 to month 14 and Poland from 13 to 16 so
that the hires they trigger, staffed six months ahead, land after the seed rather than on the
pre-seed; before that move the pre-seed low point was 170k.

## Step 3: ARR per head, and two roles the plan did not have

At 18.4M of ARR on 60 people the plan showed 306k of ARR per head, which is above the top quartile for
B2B software at that scale and invites the question "who is actually doing the work". The only honest
way to move that number is to add people the plan needs and did not carry. Two roles were missing:
a **country manager** for every market outside the home base (Czechia and Slovakia are run from
Prague), hired at entry, 95k, in-market, and a **product manager** per twelve live category products,
75k, home base. Both are new rows in the HEADCOUNT role table and the monthly build, with their
reasoning in column F, and the delivery ratios were brought back toward the benchmarked values the
seventh pass had used before the eleventh-pass cost squeeze: analyst 1 per 4 slots (was 5), data or ML
engineer 1 per 6 (was 9), backend 1 per 4.5 (was 5), deployment 1 per 3.5 (was 4.5). GTM and G&A ratios
stayed as they were. Three configurations were measured before choosing:

| | People 2031 | ARR per head | 2031 EBITDA | Raise (seed + A) |
|---|---|---|---|---|
| Lean, eleventh-pass ratios plus the two roles | 65 | 281k | 23% | 2.1M + 2.75M |
| **Chosen: delivery ratios tightened, GTM and G&A left** | **74** | **245k** | **15%** | **2.5M + 4.0M** |
| Full benchmark ratios | 78 | 234k | 15% | 2.75M + 4.3M |

An error of my own is on the record here. After inserting the two role rows I wrote the ratio changes
to the old row numbers, which set the country manager to one per nine markets (zero people) and put
the marketing and finance ratios into the wrong rows. The second audit caught it through the role-by-
role re-derivation, the corrected ratios added three country managers and moved the raise from
2.4M + 3.65M to 2.5M + 4.0M.

## Rounds re-sized from the unfunded path

With the funding line at zero, the trough before the Series A is (1.80M) and the overall trough
(4.16M) in month 47. Sized on cash, pre-seed held at 500k: seed **2.5M at 12M post** (20.8%; cash
bottoms at 873k in month 26, about six months of the period's average burn) and Series A **4.0M at
30M post** (13.3%; cash never below 1.39M after it lands, month 48). Raised 7.12M across all sources.
Founders 55.7% at exit, pool 6.2%. Pre-seed 19.1x at 10x and 4.4x at the 2.3x floor, seed 13.1x,
Series A 6.0x. The Series A prices at 16.7x current ARR (1.80M in month 27) and 6.2x forward.

## The audit, twice

The founder asked for a final check, then for the whole thing again from the beginning. First pass:
every formula on every tab read, every prose cell in every column read, an independent Python
re-implementation of MARKETS and MODEL compared month by month (exact, except the 20k the sheet
correctly does not charge for the Czech chain that is already integrated). Second pass, done
differently on purpose: sheet metadata (frozen panes, hidden rows, merges, protections, all 45 named
ranges checked against their target cells, number format of every input and output cell), then the
re-derivation extended to every HEADCOUNT role from its driver and to every SUMMARY line, the ARR
bridge, all sixteen KPIs, the cap table and the exit ladder. All exact.

What the two audits found and fixed, beyond the ratio error above:

- MARKETS O18: my own prose edit had overwritten the live "PHASE 3, DACH" formula with text. Restored;
  the entry-month explanation moved to O23.
- MARKETS O19 named France and the Nordics "at month 99". Rewritten as a live formula that explains
  why they are outside the base plan.
- Scenario 2's preset had Slovakia at month 9 and Poland at 15, earlier than the base case it is meant
  to fall short of. Now 14 and 18, description corrected. Scenario 2: 2031 ARR 10.78M, EBITDA 24%,
  never runs out of cash.
- ASSUMPTIONS F62 still showed the eleventh pass's 6,000,000 in an unreferenced cell. The Series A now
  reads `Series_A_If_Raised` from that cell, one place of truth.
- SUMMARY section 5 still said the base case exits near breakeven (it exits at 15% with a 22% fourth
  quarter), "roughly 200M" of ladder spread was hard-coded (live: 176M), the seed text claimed it
  "produces the first aggregated read" (that arrives in month 30, after the Series A), and section 7
  carried a block of stress numbers from a previous state of the model. All rewritten as live
  formulas. The round-slip stresses are now computed in-cell from the cash line: a late round is the
  same plan with that cash missing until it arrives, so seed three months late is cash in month 15
  less the seed, and so on.
- SUMMARY B74 claimed scenario 3 goes negative before the Series A lands; it now goes negative in
  month 46 after it. Sentence made general and true.
- DSO_Days displayed as 6000.0% (inherited percent format). MODEL row 29, the trailing churn, displayed
  as a percentage (values in the millions of percent). HEADCOUNT row 71 had no number format. Seat rows
  on MODEL displayed as integers although seats are fractional. The AE ramp-cover ratio cell said
  "see B20:B21" in a numeric column; it now carries the derived value 0.5. The three "(not used)"
  columns in the market table are now entry date, slots live at end and chains live at end, all live.
- "Seven markets" and "seventh market" wording on HEADCOUNT, MARKETS and READ ME rephrased as "the
  market rows in the table"; one en dash removed; the Founding tier labelled as a launch subscription
  of the founding-window length that renews at list, because a VC will ask how a 40k annual seat bills
  80k six months later.
- READ ME updated last, after the model was frozen: the entry-month definition, the headline KPI name,
  the worked example tied to the inputs rather than to bare numbers, the two new roles, and two
  simplifications added to the list (repricing at the gate month rather than at each seat's renewal;
  the launch subscription).

## What it did to the plan

| | Eleventh pass | Twelfth pass |
|---|---|---|
| 2031 ARR | 15.22M | **18.12M** |
| 2031 revenue | 11.28M | 15.20M |
| 2031 EBITDA | (2.20M) | **+2.31M (15.2%)** |
| Q4 2031 margin, December annualised | (3.7%), (1.7%) | 21.7%, 22.7% |
| First month of sustained positive EBITDA | none | 52 |
| Exit at 10x | 152.2M | 181.2M |
| Raised, all sources | 8.17M | 7.12M |
| Founders at exit | 56.6% | 55.7% |
| Headcount Dec 2031, ARR per head | 83, 183k | 74, 245k |
| Live categories, chains, capture stores | 36, 18, 1,040 | 35 labelled + 13 aggregated, 19, 1,100 |
| Categories at T2, Dec 2031 | 15 of 36 | 18 of 35 |
| Cash low after the pre-seed | 232k, month 12 | 204k, month 12 |
| Cash net of prepayments, low | (3.57M), month 64 | (1.49M), month 53 |
| 2031 NRR | 133% | 110% |

## Stress, measured on the final model

Every case is one cell. Cash low is the minimum after the pre-seed lands.

| Case | 2031 ARR | 2031 EBITDA | Cash low | Funded |
|---|---|---|---|---|
| Base | 18.12M | +2.31M | 204k, month 12 | yes |
| Seed lands 3 months late | | | (84k), month 15 | bridge |
| Seed lands 6 months late | | | (569k), month 18 | bridge |
| Series A lands 3 months late | | | (361k), month 29 | bridge |
| Series A lands 6 months late | | | (840k), month 32 | bridge |
| Pricing 20% below plan | 14.50M | +0.60M | 172k, month 12 | yes |
| Gross churn 24%, three times plan | 18.12M | +1.34M | 202k, month 12 | yes |
| Half a seat less per slot | 15.90M | +1.43M | 198k, month 12 | yes |
| US entry slips 12 months | 16.22M | +0.99M | 204k, month 12 | yes |
| US never opens, Series A kept | 13.93M | +2.20M | 204k, month 12 | yes |
| Labour multiplier 1.7 instead of 1.55 | 18.12M | +1.98M | 200k, month 12 | yes |
| Scenario 2, no Series A, no US | 10.78M | +2.20M | 296k, month 12 | yes |
| Scenario 3, Series A deployed | 26.95M | +2.76M | (877k), month 46 | no |

The revenue stresses no longer break the plan, for two reasons that are both on the sheet: the rounds
carry a real buffer, and the team ratios respond to a revenue miss because every role is driven by
slots, chains, ARR or seats rather than by a calendar. Round timing is the stress that bites, and the
pre-seed is the reason: 500k reaches month 13 with 204k to spare, so a seed a quarter late needs the
standby bridge.

## Founder decisions, measured, not taken

| # | Decision | One-cell test | 2031 ARR | 2031 EBITDA | Cash low after pre-seed |
|---|---|---|---|---|---|
| 9a | Aggregated attach 0.75 to 0.35 | `Attach_Rate_Aggregated` | 15.27M | +0.70M | 204k |
| 9b | Aggregated price 150k to 75k | `Price_Aggregated` | 15.50M | +0.79M | 204k |
| 10a | 30% retailer share on aggregated | `Rev_Share_Aggregated` | 18.12M | +1.10M | 204k |
| 10b | 40% on both reads | both share inputs | 18.12M | (0.42M) | 1k, month 50 |
| 11 | Edge hardware, proxy: chain integration 50k | MARKETS!B7 | 18.12M | +2.19M | 204k |
| 12 | 150 capture stores per chain | `Stores_Per_Chain` | 18.12M | +1.51M | 204k |
| 13 | First slot live Jan 2027, first seat Mar 2027 | MARKETS!B11 = 5 | 17.92M | +1.92M | 152k |
| 14 | US never opens, Series A kept | MARKETS!H11 = 99 | 13.93M | +2.20M | 204k |
| 15 | 10% post-money pool at the Series A | not a model input | founders 55.7% to about 50%, every MOIC times 0.9 | | |
| 16 | Pre-seed 600k instead of 500k | ASSUMPTIONS!B60 | 18.12M | +2.31M | 304k; seed a quarter late still (−84k + 100k) |
| 17 | Series A ownership 13.3% | ASSUMPTIONS!F62 | a lead fund usually wants 15 to 20%; 4.5M at 30M post is 15% and adds cover | | |
| 18 | Labour multiplier 1.55 at all seven rows | HEADCOUNT!B16 | 1.7 costs 0.33M of 2031 EBITDA; US in-market roles at 1.37x Czech rates are thin for US sales | | |

## What I chose not to do

- No change to prices, retailer share, store count, inference cost or the US row. Same reasons as the
  eleventh pass; these are the founder's numbers and they are on ASSUMPTIONS.
- Repricing happens in the month a slot passes a gate, not at each seat's renewal. Stated on READ ME
  as a simplification rather than modelled contract by contract.
- France with Benelux and the Nordics with Iberia stay in the table and in scenario 3. Opening them
  is a Series B question and the sheet says so.
- The `18a` review file stays as the finding register for the eleventh pass; nothing from it is
  reopened here.

# Thirteenth pass, 13 Sep 2026: categories follow chains, buyers are disjoint, and the business summary

Three founder decisions taken in one sitting, all of them about what a seat actually is, and one
presentation change so that a reader sees the business before the P&L. Method as before: baseline
snapshot before the first edit, the rollout engine and the seat vintages re-implemented in Python from
the inputs and compared month by month (zero difference on slots, chains, T2, aggregated slots and all
four seat lines), zero error cells on any tab, thirteen lines on CHECKS all OK.

Base case at the start: 2031 ARR 18.12M, EBITDA +2.31M, 74 people, five markets, raised 7.12M.
Base case at the end: **2031 ARR 19.21M, EBITDA +1.70M (9.9%), Q4 2031 12.2%, 82 people, seven
markets, raised 7.22M, founders 55.1%, exit 192.1M at 10x.**

## Decision 1: no brand pays for the same read twice (3 + 2)

The founder asked whether the same brands pay for the T2 labelled read and the aggregated read. On the
labelled ladder the answer was already no: founding, T1 and T2 are three prices of one seat, and the
vintage rows partition seats by slot age, so a seat is in exactly one tier at any time. On the aggregated
read the answer was yes: it was a second vintage on the same six-brand depth at the same penetration, so
3.3 of 6 brands bought labelled and 3.3 of 6 bought aggregated, and READ ME said a brand could hold
both at 320k. That is the same two chains sold twice to the same brand, once named and once masked.

Fix: the six payable brands are split into disjoint buyers. `Seats_Labelled_Mature` (3, replaces
`Penetration_Mature`) and `Seats_Agg_Mature` (2 of the remaining 3, replaces `Seat_Depth_Agg`) are the
inputs; the sixth brand buys nothing. The labelled ramp goes from two founding seats to three, the
aggregated ramp is the labelled ramp scaled by two thirds. READ ME carries a new block, WHAT ONE BRAND
PAYS FOR: one seat is one category on one channel in one market; a brand never holds two seats on the
same read; a brand present in two channels or two markets holds two seats and that is real. Measured
alone on the old engine: 2031 ARR 18.12M to 15.15M, EBITDA +2.31M to +0.88M. The founder chose the
split over the alternatives that were measured (aggregated as a 50k add-on for the same brands, a
three-step 40/80/150 ladder with no separate aggregated product, both in `19-model-walkthrough.md`).

## Decision 2: categories follow chains, and a chain is harvested in six months

The founder asked what `Slots_Per_Chain_Max` meant and whether two petrol networks give four categories
or eight. The answer exposed the last piece of the old engine: categories opened at a rate per market
(Czechia one every seven months) that had nothing to do with chains, and the chain cap never bound. That
is the opposite of how the business runs: once a chain is deployed, the commercial energy goes into
selling as many categories on it as fast as possible, and brand demand is pre-sold while the retailer
deal is being negotiated.

New engine. A chain goes live with `Categories_At_Launch` (2) categories and carries its full set of
`Slots_Per_Chain_Max` (4) within `Months_To_Full_Categories` (6), linearly. A category is a shelf on a
channel in a market, not a shelf per chain, so when the next chain in a market goes live, the existing
input `T2_Cross_Chain_Share` (0.75) is the share of its categories that already run in a live chain
(two petrol networks share tobacco, drinks and snacks) and only the rest are new to the market (a petrol
network and a supermarket share almost nothing). The seven slot rows on MARKETS are now a per-cell
convolution of new chains against that ramp with the overlap weight, capped at the market's category
inventory. The "labelled slots per month" column is retired; tempo now applies to chain signing only.
Column I of the market table shows categories live one year after entry as a diagnostic.

Effect: ARR is pulled forward hard (2028 ending ARR 4.39M against 1.99M) and the T2 and aggregated
products arrive sooner, but a market saturates once its chains are in, because each further chain adds
one new category on average. On five markets the plan flattened in 2030 and 2031 (12.95M to 14.65M,
+13%) and the Series A shrank to 1.3M with nothing to buy. The two markets dropped in the twelfth pass
because they returned nothing inside the horizon on the old engine now return within a year of entry.
Founder decision: **seven markets in the base case**, France with Benelux from month 31 and the Nordics
with Iberia from month 41, the accelerated scenario's timing. Alternatives measured: five markets
(14.65M, +2.87M, 59 people, seed 2.5M and Series A 1.3M) and seven markets later (months 36 and 42:
18.89M, +1.25M).

## Rounds re-sized from the unfunded path

Seed **2.6M at 12M post** (21.7%; trough before the Series A 1.19M in month 26, about seven months
of the period's average burn), Series A **4.0M at 30M post** (13.3%; cash never below 2.24M after it
lands, month 47). Raised 7.22M. Founders 55.1%, pool 6.1%. Pre-seed 20.1x at 10x and 4.6x at the 2.3x
floor, seed 13.9x, Series A 6.4x. The Series A now prices at 7.1x current ARR (4.24M in month 27) and
3.2x forward. Minimum cash across the horizon is 2.5k in month 2, the month before the pre-seed lands,
because two live categories at month 1 pull the first analyst hire forward; that is a founder decision
about hiring before the round closes, not a modelling defect, and it is flagged in the walkthrough.

## Presentation: SUMMARY section 1b and the chart

SUMMARY has a new block between the financial summary and the ARR bridge, SECTION 1b · HOW THE
BUSINESS SCALES: ten December lines read from MODEL (markets, chains, capture stores, categories,
market reads, labelled seats, market-read seats, seats per category, ARR per chain, retailer share
paid), each with a one-sentence explanation in column J on a worked example with illustrative names
(EuroOil, Orlen, Albert, Lidl, Kaufland; Coca-Cola HBC, Kofola, Mattoni, PepsiCo, Red Bull, Maspex),
headed by a line that says they are archetypes and not signed relationships. Five detail lines and a
seats-versus-companies note sit in a collapsed row group beneath; section 3, the operating metrics,
is collapsed too. An embedded combo chart beside the block plots capture stores (columns, left axis)
against ARR (area, right axis) by month, base case, with a caption: the same stores, more paying
brands. READ ME's slot, seat, market read, worked example and simplification texts were rewritten
to match, with the worked example now on the named archetypes.

## What it did to the plan

| | Twelfth pass | Thirteenth pass |
|---|---|---|
| Markets in the base case | 5 | 7 |
| 2031 ARR | 18.12M | **19.21M** |
| ARR 2027 / 2028 / 2029 | 0.49M / 1.99M / 5.58M | 0.96M / 4.39M / 9.78M |
| 2031 revenue | 15.20M | 17.19M |
| 2031 EBITDA | +2.31M (15.2%) | **+1.70M (9.9%)** |
| First month of sustained positive EBITDA | 52 | 51 |
| Exit at 10x | 181.2M | 192.1M |
| Raised, all sources | 7.12M | 7.22M |
| Founders at exit | 55.7% | 55.1% |
| Headcount Dec 2031, ARR per head | 74, 245k | 82, 234k |
| Chains, capture stores | 19, 1,100 | 24, 1,400 |
| Categories, market reads | 35, 13 | 40, 17 |
| Brand seats (labelled + market) | 137 | 143 (114 + 29) |
| Categories at T2, Dec 2031 | 18 of 35 | 23 of 40 |
| Cash low after the pre-seed | 204k, month 12 | 285k, month 12 |
| Cash net of prepayments, low | (1.49M), month 53 | (1.66M), month 51 |
| 2031 NRR | 110% | 102% |

NRR ends near 100% because by 2031 most repricing has already happened; the bridge shows expansion
peaking in 2029 (2.87M) as categories cross the gates, then new business carrying growth.

## Stress and founder decisions, measured on this engine

| Case | 2031 ARR | 2031 EBITDA | Cash low after pre-seed | Funded |
|---|---|---|---|---|
| Base | 19.21M | +1.70M (9.9%) | 285k, month 12 | yes |
| Seed lands 3 months late | | | (85k), month 15 | bridge |
| Seed lands 6 months late | | | (814k), month 18 | bridge |
| Series A lands 3 months late | | | 131k, month 29 | yes |
| Series A lands 6 months late | | | (588k), month 32 | bridge |
| Pricing 20% below plan | 15.37M | (0.33M) | 93k, month 50 | yes |
| Gross churn 24% | 19.21M | +0.59M | 281k | yes |
| Labelled seats 2.5 instead of 3 | 17.12M | +1.00M | 268k | yes |
| Categories 1 at launch, 4 in 12 months | 17.70M | +0.65M | 216k | yes |
| US entry slips 12 months | 18.83M | +0.80M | 285k | yes |
| US never opens, Series A kept | 16.66M | +2.04M | 285k | yes |
| Second European wave never opens | 14.65M | +2.87M | 285k | yes |
| Aggregated attach 0.35 | 16.77M | +0.14M | 285k | yes |
| 30% retailer share on the market read | 19.21M | +0.57M | 285k | yes |
| 150 capture stores per chain | 19.21M | +0.69M | 285k | yes |
| Scenario 2, no Series A | 9.03M | +2.29M (27%) | 381k | yes |
| Scenario 3, Series A deployed | 21.11M | +2.20M | (292k), month 12 | no |

The plan is now thinner on margin than the twelfth pass and more robust on growth: every revenue
stress stays funded, the two that hurt most are price and the market-read attach rate, and scenario 3
fails on the pre-seed rather than on the Series A because it signs chains faster before the seed.

## Open with the founder

- Retailer share on the market read is 0%. The founder's own reading is that a retailer whose share
  goes to zero as the product matures will use the data feed as leverage at renewal; the model measures
  a 30% share at (1.13M) of 2031 EBITDA. A pooled 10 to 15% share and a free own-performance benchmark
  for the retailer is the likely landing and is not yet modelled.
- The chain-read plus market-read architecture (a brand buys named chains one by one, priced by chain
  weight, plus the market read) was discussed and deferred; the 3 + 2 split is the interim.
- The aggregated gate stays at two chains; three would be safer for both k-anonymity and leverage.
- Hiring runs six months ahead of slots and now starts before the pre-seed lands (month 2 low point).
