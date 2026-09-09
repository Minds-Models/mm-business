# Financial plan walkthrough: for co-founder review

**Purpose:** what the model contains, how it works, and every place it deliberately departs from this
pack. Read this before approving the plan. Sixty-four months, Sep 2026 to Dec 2031, all figures EUR.
Rewritten from the live sheet on 9 Sep 2026 after the eleventh pass. Full finding register and decision
log: `18-model-reconciliation.md`. Every number below is read from the workbook; if the sheet moves,
this file is stale, not the sheet.

---

## 1. The plan in one table

Base case. Thirteen integrity lines on CHECKS, all OK, zero formula errors.

| Year end | ARR | Revenue | Gross margin | EBITDA | Cash | Team |
|---|---|---|---|---|---|---|
| 2026 | 94k | 18k | 76.9% | (88k) | 489k | 8 |
| 2027 | 414k | 263k | 71.4% | (595k) | 1.52M | 12 |
| 2028 | 1.15M | 795k | 67.3% | (1.97M) | 5.72M | 24 |
| 2029 | 3.69M | 2.48M | 66.5% | (2.61M) | 3.70M | 45 |
| 2030 | 7.37M | 5.36M | 69.0% | (3.19M) | 1.37M | 66 |
| **2031** | **15.22M** | **11.28M** | **72.5%** | **(2.20M)** | **997k** | **83** |

Exit at 10x ending ARR: **152.2M**, which is 13.5x recognised 2031 revenue. The plan does not reach
EBITDA breakeven inside the horizon: the full-year 2031 margin is (19.5%), the fourth quarter (3.7%)
and December annualised (1.7%), so the company leaves the plan at a run-rate a hair below breakeven
with ARR growing 107%. Rule of 40 score 87. ARR per head 183k EUR, about 215k USD, against
Benchmarkit's 2025 figure of 200k USD per FTE at 50-100M ARR.

Unit economics at the end of the plan: CAC per brand seat **69k**, ARPU **125k**, LTV **452k**
(gross margin, life capped at five years), LTV/CAC **6.5x**, CAC payback **9.2 months**. The ratio falls
across the plan from 12.4x because the early years are founder-led selling with almost no sales cost
and the later years carry a real commercial organisation with an explicit ramp.

Net revenue retention ends the plan at **133%** and is measured rather than assumed: expansion is
computed from slots crossing the T1 and T2 gates, priced at the full gap between tiers, and churn is
the seat ARR that churned in the year. The seats held on MODEL are net of churn and sales re-wins the
churned seats, so churn is not deducted a second time from revenue.

Cash. Minimum across all 64 months is **12k in month 1**, before the grant and the pre-seed land.
After the pre-seed, cash bottoms at **232k in month 12** (4.8 months of cover, the month before the
seed) and at **540k in month 61** (9.6 months of cover, after the Series A). Cash net of unearned
prepayments, the cash the company would hold if every seat were billed monthly, turns negative in
month 50 and bottoms at **(3.57M) in month 64**: from mid-2030 the plan leans on annual billing in
advance, and CHECKS reports that low point.

Without the Series A. Set the scenario cell on MARKETS to 2: the round drops out, the United States
never opens, 2.17M is raised in total, 2031 ARR lands at **9.23M**, 2031 EBITDA is **positive at
1.14M**, cash never dips below 258k and founders hold 70.7% at exit. The Series A does not buy survival.
It buys the American half of the exit, and inside this horizon it also buys the burn the US adds
before its revenue arrives, which is why the base case exits near breakeven while the no-Series-A
case exits profitable.

## 2. How the workbook is organised

Seven tabs, in reading order.

| Tab | What it holds |
|---|---|
| **READ ME** | What the company does, the vocabulary, and what the model deliberately simplifies |
| **SUMMARY** | The plan on one page: six years, the ARR bridge, operating metrics, cap table, exit ladder, how we raise |
| **ASSUMPTIONS** | Every input that drives the P&L, in one vertical list, each one carrying a name (45 named ranges) |
| **MODEL** | The monthly engine: rollout, P&L, cashflow, and the seat vintages, 64 columns |
| **MARKETS** | How fast products appear: entry months, slot inventory, chains, tempo, the scenario switch, the T2 gate by market |
| **HEADCOUNT** | What the team costs, with the benchmark source printed beside every staffing ratio |
| **CHECKS** | Thirteen live integrity lines. If any says CHECK rather than OK, do not trust SUMMARY |

MARKETS and HEADCOUNT keep their own inputs, because those are rollout and staffing rather than
economics. The one structural constant not on ASSUMPTIONS is the three-month store deployment ramp on
MODEL row 11.

## 3. How the engine works

- **Slot = the product.** One category in one retail channel that we have instrumented. Built once.
  36 of them by Dec 2031 on 18 chains across seven markets, plus 11 aggregated reads derived from them.
  A slot cannot exist before its chain: each market's live slots are capped at four per chain
  deployed, counted two months after signing so the capture stores are fully ramped.
- **Seat = the contract.** One brand's annual subscription to one slot. Six brands per category are
  large enough to buy; each slot sells two founding seats at launch and ramps to 55% of depth over
  24 months from its own launch, tracked by vintage at the foot of MODEL. Fleet average at the end of
  the plan is 2.7 seats per slot, 122 seats in total.
- **Price rises with density.** 40k founding, 80k after six months, 170k once the category runs in
  two or more chains of the same market. The T2 reprice needs the slot to be 15 months old, the
  market's second chain to have six months of history, and applies to 75% of mature categories, the
  share judged to run in two of a market's chains. 15 of 36 categories, 42%, are at T2 by Dec 2031.
- **Churn is a flow of seats, not a hole in revenue.** 8% gross seat churn a year. The churned seats
  are counted as gross wins, staffed on HEADCOUNT and paid for in go-to-market, and the seats held
  are the net result.
- **Cost scales with slots, not seats.** COGS is inference at 45 per capture store per month plus the
  30% retailer share on labelled reads. Gross margin runs 67% to 77%, lowest in the years when
  T1-priced slots dominate.
- **Supply is capped.** Sixty capture stores per chain, 1,040 by 2031. No hardware capex in the model;
  the cameras are the retailer's. This is decision 3 in section 5.
- **Team scales with products.** Every role is driven by slots, chains, markets, new ARR won or ARR
  under management, never by a calendar. Account executives carry the Bridge Group quota and the
  Bridge Group ramp. Eighty-three people at the end: 12 analysts, 6 data engineers, 3 platform,
  6 deployment, 10 account executives plus 2 of ramp cover, 5 SDRs, 7 retailer BD, 6 customer
  success, 4 legal, 6 marketing, 7 finance and operations, 2 people, and the current team of 7.
- **Working capital both ways.** 60% of seats are billed annually in advance and the unearned half
  year sits as deferred revenue; the other 40% are billed monthly and collected at 60 days.

## 4. The raise

| Round | When | Amount | Post-money | Entry | At exit | MOIC at 10x |
|---|---|---|---|---|---|---|
| Angel | Q2 2026, done | 80k | 3.5M | 2.3% | 1.5% | 28.0x |
| CzechInvest grant | 2026, part received | 45k | n/a | n/a | n/a | n/a |
| Pre-seed | Nov 2026, month 3 | 500k | 6.5M | 7.7% | 5.4% | 16.3x |
| Seed | Sep 2027, month 13 | 1.55M | 12M | 12.9% | 10.3% | 10.1x |
| Series A | Nov 2028, month 27 | 6.0M | 30M | 20.0% | 20.0% | 5.1x |

Total raised across all sources including pre-model money: **8.17M**. Founders hold **56.6%** at exit,
the pool **6.3%**; a Series A pool top-up is not modelled (decision 7 in section 5). Both later rounds
are sized from the unfunded cash path: roughly six months of cover at the trough before the Series A
and nine months of cover at the trough after it. The Series A prices at 28x current ARR and 8.3x
forward.

Exit multiple ladder, live beside the cap table:

| Multiple on exit ARR | Exit value | On 2031 revenue | Pre-seed MOIC | What it prices |
|---|---|---|---|---|
| 2.3x | 35.0M | 3.1x | 3.8x | Undifferentiated store analytics, the footfall comparable |
| 4x | 60.9M | 5.4x | 6.5x | A rented asset, a terminable licence, priced as a service |
| 8x | 121.8M | 10.8x | 13.1x | An owned rights portfolio, low end of the measurement band |
| **10x** | **152.2M** | **13.5x** | **16.3x** | The plan, midpoint of the measurement-currency band |
| 12x | 182.7M | 16.2x | 19.6x | Competitive process, or more markets live |

## 5. Stress, measured on the live model

The base case is funded with the standby bridge undrawn. The stresses below are measured one at a
time against the base case; "short" means the low point of cash after the pre-seed lands.

| Case | 2031 ARR | 2031 EBITDA | Cash low point | Funded |
|---|---|---|---|---|
| Base | 15.22M | (2.20M) | 232k, month 12 | yes |
| Seed lands 3 months late | | | 16k, month 15 | barely |
| Seed lands 6 months late | | | (229k), month 18 | no |
| Series A lands 3 months late | | | (437k), month 29 | no |
| Series A lands 6 months late | | | (910k), month 32 | no |
| Pricing 20% below plan | 12.18M | (3.20M) | (1.48M), month 63 | no |
| Gross churn 24%, three times plan | 15.22M | (3.22M) | (814k), month 63 | no |
| Half a seat less per slot | 13.57M | (2.76M) | (317k), month 63 | no |
| US entry slips 12 months | 12.99M | (2.12M) | 232k, month 12 | yes |
| US never opens, Series A kept | 12.35M | (677k) | 232k, month 12 | yes |
| Scenario 2, no Series A, no US | 9.23M | +1.14M | 258k, month 12 | yes |
| Scenario 3, Series A deployed | 22.24M | +393k | (701k), month 26 | no |

Round timing is the stress that bites first, and the revenue stresses break the plan on this cost base
because the team ratios do not respond to a revenue miss. Either is answered by a larger Series A, a
drawn bridge, or a cost response, and none of those is in the base case.

---

## 6. What we need to decide

Seven founder decisions the eleventh pass deliberately did not take. Each is measured against the
base case above; every number is a one-cell change on ASSUMPTIONS or MARKETS.

1. **The per-brand price stack: T2 plus the aggregated read.** A brand holding both pays 320k a year
   for one category in one market, twice the incumbent's average client value across everything it
   covers, and the aggregated read is the T2 read with the chain names removed. Aggregated revenue is
   22% of seat revenue in 2031 at 100% gross margin. Attach at 35% instead of 75%: 2031 ARR 12.96M,
   EBITDA (2.98M), cash low (685k). Aggregated price at 75k instead of 150k: 13.33M, (3.08M), (707k).

2. **Retailer share on the aggregated read.** The mandate letter presumes up to 40% of any future
   economics; the model pays 0% on aggregated and 30% on labelled. 30% on aggregated: 2031 COGS up
   742k, EBITDA (2.95M), cash low (298k). 40% on both: COGS up 1.87M, EBITDA (4.07M), cash low (2.16M).

3. **Edge hardware.** The research annex says cloud pull is infeasible at chain scale and edge
   inference is mandatory; the model has no hardware line. As a proxy, chain integration at 50k
   instead of 20k, about 500 per store: 2031 EBITDA (2.38M), cash low 90k. A per-store device line
   with a refresh cycle would be the honest version.

4. **Stores per chain.** The ladder in stats.yaml gates T2 on 150-300 stores across two chains; the
   model prices T2 on 120. At 150 per chain: 2031 COGS up 702k, EBITDA (2.91M), cash low (873k).
   Either the ladder is amended or inference cost rises with it.

5. **Rights timing.** The legal workstream's definition of done is three signed instruments by
   18 Feb 2027 and today's count is zero; the model's first slot is live now and sells in Nov 2026.
   Czech entry at month 5 (first slot Jan 2027, first seat Mar 2027): 2031 ARR 15.0M, EBITDA (2.80M),
   cash low (379k).

6. **The United States.** It is the Series A thesis and the softest rollout row: 600k of entry, slots
   at the fastest rate of any market, 8 slots on 2 chains by 2031, two categories at T2, Czech list
   prices. With the US never opening and the Series A kept: 2031 ARR 12.35M, EBITDA (677k), cash
   never below 232k, and the plan never leans on prepayments. The US costs about 1.5M of 2031 EBITDA
   inside the horizon for about 2.9M of 2031 ARR.

7. **ESOP top-up at the Series A.** A 10% post-money pool at the A, which every A term sheet asks
   for, takes founders from 56.6% to about 50.9% at exit and every investor's stake and MOIC down by
   a tenth: pre-seed 16.3x becomes about 14.7x.

Two calibrations from the eleventh pass are also yours to overrule, both on ASSUMPTIONS section 5:
the share of mature categories that run in two chains of a market (0.75; at 0.6 the plan ends at
12.5M of ARR, at 1.0 at 18.8M) and the months of second-chain history before the T2 reprice (6; at 0
the exit ARR moves by about 0.2M).
