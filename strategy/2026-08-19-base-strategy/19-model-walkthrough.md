# Financial plan walkthrough: for co-founder review

**Purpose:** what the model contains, how it works, and every place it deliberately departs from this
pack. Read this before approving the plan. Sixty-four months, Sep 2026 to Dec 2031, all figures EUR.
Rewritten from the live sheet on 9 Sep 2026 after the twelfth pass and two full audits. Full finding
register and decision log: `18-model-reconciliation.md`. Every number below is read from the workbook;
if the sheet moves, this file is stale, not the sheet.

---

## 1. The plan in one table

Base case. Thirteen integrity lines on CHECKS, all OK, zero formula errors, and the whole engine
re-implemented independently from the inputs with zero difference on every monthly line.

| Year end | ARR | Revenue | Gross margin | EBITDA | Cash | Team |
|---|---|---|---|---|---|---|
| 2026 | 94k | 18k | 76.9% | (87k) | 491k | 8 |
| 2027 | 494k | 270k | 71.3% | (842k) | 2.24M | 17 |
| 2028 | 1.99M | 1.23M | 61.4% | (2.73M) | 3.86M | 34 |
| 2029 | 5.58M | 3.60M | 64.4% | (2.63M) | 2.07M | 48 |
| 2030 | 11.51M | 8.34M | 70.5% | (1.48M) | 1.97M | 64 |
| **2031** | **18.12M** | **15.20M** | **74.5%** | **+2.31M** | **5.82M** | **74** |

Exit at 10x ending ARR: **181.2M**, which is 11.9x recognised 2031 revenue. The plan reaches sustained
positive EBITDA in month 52 (Dec 2030). The full-year 2031 margin is 15.2%, the fourth quarter 21.7%
and December annualised 22.7%, so the company leaves the plan profitable with ARR growing 57% in its
last year. ARR per head 245k EUR at the end.

Unit economics at the end of the plan: CAC per brand seat **59k**, ARPU **133k**, LTV **494k**
(gross margin, life capped at five years), LTV/CAC **8.4x**, CAC payback **7.2 months**. The ratio
falls from 12.9x in 2026 because the early years are founder-led selling with almost no sales cost and
the later years carry a real commercial organisation with an explicit ramp.

Net revenue retention ends the plan at **110%** and is measured rather than assumed: expansion is
computed from slots crossing the T1 and T2 gates, priced at the full gap between tiers, and churn is
the seat ARR that churned in the year. The early years read 260% and 214% because the ladder reprices a
small base; that is the price mechanism, not an assumption about upsell.

Cash. Minimum across all 64 months is **12k in month 2**, before the grant and the pre-seed land. After
the pre-seed, cash bottoms at **204k in month 12**, the month before the seed, at **873k in month 26**,
the month before the Series A, and at **1.39M in month 48** after it. Cash net of unearned prepayments,
the cash the company would hold if every seat were billed monthly, turns negative in month 42 and
bottoms at **(1.49M) in month 53**: from mid-2030 the plan leans on annual billing in advance, and
CHECKS reports that low point.

Without the Series A. Set the scenario cell on MARKETS to 2: the round drops out, the United States
never opens, 3.12M is raised in total, 2031 ARR lands at **10.78M**, 2031 EBITDA is **+2.20M (24%)**,
cash never dips below 296k after the pre-seed. The Series A does not buy survival. It buys the American
half of the exit, and inside this horizon it also buys the burn the US adds before its revenue arrives,
which is why the no-Series-A case shows a higher margin on a smaller base.

## 2. How the workbook is organised

Seven tabs, in reading order.

| Tab | What it holds |
|---|---|
| **READ ME** | What the company does, the vocabulary, and what the model deliberately simplifies |
| **SUMMARY** | The plan on one page: six years, the ARR bridge, operating metrics, cap table, exit ladder, how we raise |
| **ASSUMPTIONS** | Every input that drives the P&L, in one vertical list, each one carrying a name (45 named ranges) |
| **MODEL** | The monthly engine: rollout, P&L, cashflow, and the seat vintages, 64 columns |
| **MARKETS** | How fast products appear: entry months, slot inventory, chains, tempo, the scenario switch, the T2 gate by market |
| **HEADCOUNT** | What the team costs, with the benchmark source or the internal reasoning printed beside every staffing ratio |
| **CHECKS** | Thirteen live integrity lines. If any says CHECK rather than OK, do not trust SUMMARY |

MARKETS and HEADCOUNT keep their own inputs, because those are rollout and staffing rather than
economics. The one structural constant not on ASSUMPTIONS is the three-month store deployment ramp on
MODEL row 11.

## 3. How the engine works

- **Slot = the product.** One category in one retail channel that we have instrumented. Built once.
  35 of them by Dec 2031 on 19 chains across five markets, plus 13 aggregated reads derived from them.
  A slot cannot exist before its chain: each market's live slots are capped at four per chain
  deployed, counted two months after the chain goes live so the capture stores are fully ramped.
- **Entry month = first chain live.** A market is entered the month its first chain is capturing with
  its launch category as the first slot, as the Czech row already read. The signing and integration
  work before it is paid through the entry cost, the 20k chain integration and the retailer BD team
  hired six months ahead. This is the twelfth-pass fix; before it every market outside Czechia waited
  fourteen to seventeen months for a first chain while paying full local cost.
- **Seat = the contract.** One brand's annual subscription to one slot. Six brands per category are
  large enough to buy; each slot sells two founding seats at launch and ramps to 55% of depth over
  24 months from its own launch, tracked by vintage at the foot of MODEL. Fleet average at the end of
  the plan is 2.9 seats per slot, 137 seats in total.
- **Price rises with density.** 40k founding as a six-month launch subscription, 80k after it, 170k
  once the category runs in two or more chains of the same market. The T2 reprice needs the slot to
  be 15 months old, the market's second chain to have six months of history, and applies to 75% of
  mature categories, the share judged to run in two of a market's chains. 18 of 35 categories, 51%,
  are at T2 by Dec 2031. Repricing lands in the month a gate is passed, not at each seat's renewal;
  READ ME lists that as a simplification.
- **Churn is a flow of seats, not a hole in revenue.** 8% gross seat churn a year. The churned seats
  are counted as gross wins, staffed on HEADCOUNT and paid for in go-to-market, and the seats held
  are the net result.
- **Cost scales with slots, not seats.** COGS is inference at 45 per capture store per month plus the
  30% retailer share on labelled reads. Gross margin runs 61% to 77%, lowest in 2028 when new chains
  are capturing ahead of their categories selling.
- **Supply is capped.** Sixty capture stores per chain, 1,100 by 2031. No hardware capex in the model;
  the cameras are the retailer's. This is decision 3 in section 6.
- **Team scales with products.** Every role is driven by slots, chains, markets, new ARR won or ARR
  under management, never by a calendar. Account executives carry the Bridge Group quota and ramp.
  Seventy-four people at the end: 8 analysts, 5 data engineers, 4 platform, 5 deployment, 10 account
  executives plus 1 of ramp cover, 5 SDRs, 5 retailer BD, 7 customer success, 2 legal, 3 country
  managers (Poland, DACH, US; Czechia and Slovakia run from Prague), 2 product managers, 3 marketing,
  5 finance and operations, 2 people, and the current team of 7.
- **Working capital both ways.** 60% of seats are billed annually in advance and the unearned half
  year sits as deferred revenue; the other 40% are billed monthly and collected at 60 days.

## 4. The raise

| Round | When | Amount | Post-money | Entry | At exit | MOIC at 10x |
|---|---|---|---|---|---|---|
| Angel | Q2 2026, done | 80k | 3.5M | 2.3% | 1.4% | 32.8x |
| CzechInvest grant | 2026, part received | 45k | n/a | n/a | n/a | n/a |
| Pre-seed | Nov 2026, month 3 | 500k | 6.5M | 7.7% | 5.3% | 19.1x |
| Seed | Sep 2027, month 13 | 2.5M | 12M | 20.8% | 18.1% | 13.1x |
| Series A | Nov 2028, month 27 | 4.0M | 30M | 13.3% | 13.3% | 6.0x |

Total raised across all sources including pre-model money: **7.12M**. Founders hold **55.7%** at exit,
the pool **6.2%**; a Series A pool top-up is not modelled (decision 7 in section 6). Both later rounds
are sized from the unfunded cash path: about six months of the period's average burn at the trough
before the Series A, and a floor of 1.39M after it. The seed prices at 40x current ARR (302k in month
13); the Series A at 16.7x current (1.80M) and 6.2x forward (4.83M).

Exit multiple ladder, live beside the cap table:

| Multiple on exit ARR | Exit value | On 2031 revenue | Pre-seed MOIC | What it prices |
|---|---|---|---|---|
| 2.3x | 41.7M | 2.7x | 4.4x | Undifferentiated store analytics, the footfall comparable |
| 4x | 72.5M | 4.8x | 7.7x | A rented asset, a terminable licence, priced as a service |
| 8x | 145.0M | 9.5x | 15.3x | An owned rights portfolio, low end of the measurement band |
| **10x** | **181.2M** | **11.9x** | **19.1x** | The plan, midpoint of the measurement-currency band |
| 12x | 217.4M | 14.3x | 23.0x | Competitive process, or more markets live |

## 5. Stress, measured on the live model

The base case is funded with the standby bridge undrawn. The stresses below are measured one at a
time against the base case; "cash low" is the low point after the pre-seed lands. The round-slip
cases are also computed live on SUMMARY section 7.

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
| Scenario 2, no Series A, no US | 10.78M | +2.20M | 296k, month 12 | yes |
| Scenario 3, Series A deployed | 26.95M | +2.76M | (877k), month 46 | no |

The revenue stresses stay funded because the team ratios respond to a revenue miss and the rounds
carry a buffer. Round timing is the stress that bites, and the reason is the pre-seed: 500k reaches
month 13 with 204k to spare, so a seed that lands a quarter late is answered by the standby bridge on
ASSUMPTIONS, not by the plan.

---

## 6. What we need to decide

Founder decisions the twelfth pass deliberately did not take. Each is measured against the base case
above; every number is a one-cell change on ASSUMPTIONS or MARKETS.

1. **The per-brand price stack: T2 plus the aggregated read.** A brand holding both pays 320k a year
   for one category in one market, and the aggregated read is the T2 read with the chain names
   removed. Aggregated revenue is 27% of seat revenue in 2031 at 100% gross margin. Attach at 35%
   instead of 75%: 2031 ARR 15.27M, EBITDA +0.70M. Aggregated price at 75k instead of 150k: 15.50M,
   +0.79M. Both stay funded.

2. **Retailer share on the aggregated read.** The mandate letter presumes up to 40% of any future
   economics; the model pays 0% on aggregated and 30% on labelled. 30% on aggregated: 2031 EBITDA
   +1.10M. 40% on both: (0.42M), cash touches 1k in month 50.

3. **Edge hardware.** The research annex says cloud pull is infeasible at chain scale and edge
   inference is mandatory; the model has no hardware line. As a proxy, chain integration at 50k
   instead of 20k: 2031 EBITDA +2.19M. A per-store device line with a refresh cycle would be the
   honest version.

4. **Stores per chain.** The ladder in stats.yaml gates T2 on 150-300 stores across two chains; the
   model prices T2 on 120. At 150 per chain: 2031 EBITDA +1.51M. Either the ladder is amended or
   inference cost rises with it.

5. **Rights timing.** The legal workstream's definition of done is three signed instruments by
   18 Feb 2027 and today's count is zero; the model's first slot is live now and sells in Nov 2026.
   Czech entry at month 5: 2031 ARR 17.92M, EBITDA +1.92M, pre-seed low point 152k.

6. **The United States.** It is the Series A thesis: 600k of entry, slots at the fastest rate of any
   market, 10 slots on 3 chains by 2031, 3 categories at T2, Czech list prices. With the US never
   opening and the Series A kept: 2031 ARR 13.93M, EBITDA +2.20M. Inside the horizon the US adds
   about 4.2M of 2031 ARR, 17 people and roughly 0.1M of 2031 EBITDA; what it costs is the Series A's
   dilution and the burn of 2029 and 2030 before its revenue arrives.

7. **ESOP top-up at the Series A.** A 10% post-money pool at the A, which every A term sheet asks
   for, takes founders from 55.7% to about 50% at exit and every investor's stake and MOIC down by a
   tenth: pre-seed 19.1x becomes about 17.2x.

8. **Pre-seed size.** 500k reaches the seed with 204k to spare and no room for a late seed. 600k at
   the same post-money moves the low point to 304k and absorbs a seed one quarter late; it costs 1.5
   points of founder ownership.

9. **Series A ownership.** 4.0M at 30M post is 13.3%; a lead fund usually wants 15 to 20%. 4.5M is
   15% and adds cover; the alternative is a lower post-money.

10. **US salaries.** In-market roles carry 1.37x Czech rates at five markets open (1.55x at all
    seven rows). That is thin for US enterprise sales. 1.7 costs 0.33M of 2031 EBITDA.

Two calibrations from the eleventh pass are also yours to overrule, both on ASSUMPTIONS section 5:
the share of mature categories that run in two chains of a market (0.75) and the months of
second-chain history before the T2 reprice (6).
