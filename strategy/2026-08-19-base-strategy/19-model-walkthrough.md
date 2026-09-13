# Financial plan walkthrough: for co-founder review

**Purpose:** what the model contains, how it works, and every place it deliberately departs from this
pack. Read this before approving the plan. Sixty-four months, Sep 2026 to Dec 2031, all figures EUR.
Rewritten from the live sheet on 13 Sep 2026 after the thirteenth pass. Full finding register and
decision log: `18-model-reconciliation.md`. Every number below is read from the workbook; if the sheet
moves, this file is stale, not the sheet.

---

## 1. The plan in one table

Base case, seven markets. Thirteen integrity lines on CHECKS, all OK, zero formula errors, and the
rollout engine and seat vintages re-implemented independently from the inputs with zero difference.

| Year end | ARR | Revenue | Gross margin | EBITDA | Cash | Team |
|---|---|---|---|---|---|---|
| 2026 | 175k | 31k | 73.9% | (108k) | 488k | 9 |
| 2027 | 955k | 589k | 70.6% | (1.01M) | 2.26M | 29 |
| 2028 | 4.39M | 2.82M | 68.5% | (2.79M) | 4.28M | 45 |
| 2029 | 9.78M | 6.37M | 68.2% | (2.96M) | 2.57M | 67 |
| 2030 | 15.10M | 12.33M | 71.6% | (915k) | 2.90M | 78 |
| **2031** | **19.21M** | **17.19M** | **72.6%** | **+1.70M** | **5.56M** | **82** |

Exit at 10x ending ARR: **192.1M**, which is 11.2x recognised 2031 revenue. The plan reaches sustained
positive EBITDA in month 51 (Nov 2030). The full-year 2031 margin is 9.9%, the fourth quarter 12.2%
and December annualised 12.9%, with ARR growing 27% in the last year. ARR per head 234k EUR at the end.

Unit economics at the end of the plan: CAC per brand seat **79k**, ARPU **135k**, LTV **490k**
(gross margin, life capped at five years), LTV/CAC **6.2x**, CAC payback **9.7 months**. The ratio
falls from 16.9x in 2026 because the early years are founder-led selling with almost no sales cost and
the later years carry a real commercial organisation with an explicit ramp.

Net revenue retention is measured, not assumed: expansion is computed from categories crossing the
T1 and T2 gates at the full gap between tiers, churn is the seat ARR that churned in the year. It reads
259% in 2027 and 238% in 2028 while the ladder reprices a small base, 154% in 2029 when expansion peaks
at 2.87M, and **102%** in 2031 when most repricing has already happened and new business carries growth.

Cash. Minimum across all 64 months is **2.5k in month 2**, the month before the pre-seed lands, because
two live categories at month 1 pull the first analyst hire forward (decision 10 in section 6). After the
pre-seed, cash bottoms at **285k in month 12**, the month before the seed, at **1.19M in month 26**, the
month before the Series A, and at **2.24M in month 47** after it. Cash net of unearned prepayments, the
cash the company would hold if every seat were billed monthly, turns negative in month 26 and bottoms
at **(1.66M) in month 51**: from the Series A onward the plan leans on annual billing in advance, and
CHECKS reports that low point.

Without the Series A. Set the scenario cell on MARKETS to 2: the round drops out, the United States,
France with Benelux and the Nordics with Iberia never open, 3.22M is raised in total, 2031 ARR lands at
**9.03M**, 2031 EBITDA is **+2.29M (27%)**, cash never dips below 381k after the pre-seed and founders
hold about 64% at exit. The Series A does not buy survival. It buys the American half of the exit and
the pan-European rights portfolio, and inside this horizon it also buys the burn those markets add
before their revenue arrives, which is why the no-Series-A case shows a higher margin on a smaller base.

## 2. How the workbook is organised

Seven tabs, in reading order.

| Tab | What it holds |
|---|---|
| **READ ME** | What the company does, the vocabulary, what one brand pays for, a worked example on named archetypes, and what the model deliberately simplifies |
| **SUMMARY** | The plan on one page: the financial summary, the business summary (section 1b, with a worked-example explanation beside each line and a deployments-versus-ARR chart), the ARR bridge, cap table, exit ladder, how we raise. Detail rows and the operating metrics are collapsed under plus signs |
| **ASSUMPTIONS** | Every input that drives the P&L, in one vertical list, each one carrying a name (47 named ranges) |
| **MODEL** | The monthly engine: rollout, P&L, cashflow, and the seat vintages, 64 columns |
| **MARKETS** | How fast chains are signed, how categories follow them, entry months, category inventory, tempo, the scenario switch, the T2 gate by market |
| **HEADCOUNT** | What the team costs, with the benchmark source or the internal reasoning printed beside every staffing ratio |
| **CHECKS** | Thirteen live integrity lines. If any says CHECK rather than OK, do not trust SUMMARY |

MARKETS and HEADCOUNT keep their own inputs, because those are rollout and staffing rather than
economics. The one structural constant not on ASSUMPTIONS is the three-month store deployment ramp on
MODEL row 11.

## 3. How the engine works

- **Chain = the deployment.** One retail banner with its own contract, data-processing agreement and
  revenue share; about 60 capture stores per chain run the visual model. 24 chains and 1,400 capture
  stores by Dec 2031 across seven markets. Chains are signed at the monthly rate in the market table.
- **Category = the product.** One shelf on one channel in one market: soft drinks in Czech petrol is
  one, soft drinks in Czech grocery another. Categories follow chains: a chain goes live with 2
  categories already sold in (brand demand is pre-sold alongside the retailer deal) and carries 4
  within six months. When the next chain in a market goes live, 75% of its categories on average
  already run in a live chain (two petrol networks share tobacco, drinks, snacks) and become the
  cross-chain density that T2 and the market read are built on; the rest are new to the market.
  40 categories by Dec 2031, 23 of them at T2 density, plus 17 market reads derived from them.
- **Seat = the contract, and no brand pays twice.** Six brands per category are large enough to buy.
  Three of them, at maturity, buy the labelled read (named chains, key-account agenda); two of the
  remaining three buy the market read (chain-masked, insights agenda); the sixth buys nothing. A seat
  is one category on one channel in one market, so a brand present in two channels holds two seats and
  that is real. 143 seats at the end, 114 labelled and 29 on market reads; 2.8 labelled seats per
  category. Seats are contracts, not companies: two to three seats per company is the rule of thumb.
- **Price rises with density.** 40k founding as a six-month launch subscription, 80k after it, 170k
  once the category runs in two or more chains of the same market (slot 15 months old, second chain
  with six months of history). The market read is 150k with no retailer share. Repricing lands in the
  month a gate is passed, not at each seat's renewal; READ ME lists that as a simplification.
- **Churn is a flow of seats, not a hole in revenue.** 8% gross seat churn a year. The churned seats
  are counted as gross wins, staffed on HEADCOUNT and paid for in go-to-market, and the seats held
  are the net result.
- **Cost scales with chains and categories, not seats.** COGS is inference at 45 per capture store per
  month plus the 30% retailer share on labelled reads (4.0M paid to chains in 2031). Gross margin runs
  68% to 74%.
- **Team scales with products.** Every role is driven by categories, chains, markets, new ARR won or
  ARR under management, never by a calendar. Eighty-two people at the end: 10 analysts, 6 data
  engineers, 5 platform, 6 deployment, 7 account executives, 4 SDRs, 6 retailer BD, 7 customer
  success, 4 legal, 5 country managers (Poland, DACH, US, France with Benelux, Nordics with Iberia),
  3 product managers, 4 marketing, 6 finance and operations, 2 people, and the current team of 7.
- **Working capital both ways.** 60% of seats are billed annually in advance and the unearned half
  year sits as deferred revenue; the other 40% are billed monthly and collected at 60 days.

## 4. The raise

| Round | When | Amount | Post-money | Entry | At exit | MOIC at 10x |
|---|---|---|---|---|---|---|
| Angel | Q2 2026, done | 80k | 3.5M | 2.3% | 1.4% | 34.4x |
| CzechInvest grant | 2026, part received | 45k | n/a | n/a | n/a | n/a |
| Pre-seed | Nov 2026, month 3 | 500k | 6.5M | 7.7% | 5.2% | 20.1x |
| Seed | Sep 2027, month 13 | 2.6M | 12M | 21.7% | 18.8% | 13.9x |
| Series A | Nov 2028, month 27 | 4.0M | 30M | 13.3% | 13.3% | 6.4x |

Total raised across all sources including pre-model money: **7.22M**. Founders hold **55.1%** at exit,
the pool **6.1%**; a Series A pool top-up is not modelled (decision 7 in section 6). Both later rounds
are sized from the unfunded cash path: about seven months of the period's average burn at the trough
before the Series A, and a floor of 2.24M after it. The seed prices at 16x current ARR (755k in month
13); the Series A at 7.1x current (4.24M) and 3.2x forward (9.46M).

Exit multiple ladder, live beside the cap table:

| Multiple on exit ARR | Exit value | On 2031 revenue | Pre-seed MOIC | What it prices |
|---|---|---|---|---|
| 2.3x | 44.2M | 2.6x | 4.6x | Undifferentiated store analytics, the footfall comparable |
| 4x | 76.9M | 4.5x | 8.0x | A rented asset, a terminable licence, priced as a service |
| 8x | 153.7M | 8.9x | 16.1x | An owned rights portfolio, low end of the measurement band |
| **10x** | **192.1M** | **11.2x** | **20.1x** | The plan, midpoint of the measurement-currency band |
| 12x | 230.6M | 13.4x | 24.1x | Competitive process, or more markets live |

## 5. Stress, measured on the live model

The base case is funded with the standby bridge undrawn. The stresses below are measured one at a
time against the base case; "cash low" is the low point after the pre-seed lands. The round-slip
cases are also computed live on SUMMARY section 7.

| Case | 2031 ARR | 2031 EBITDA | Cash low | Funded |
|---|---|---|---|---|
| Base | 19.21M | +1.70M | 285k, month 12 | yes |
| Seed lands 3 months late | | | (85k), month 15 | bridge |
| Seed lands 6 months late | | | (814k), month 18 | bridge |
| Series A lands 3 months late | | | 131k, month 29 | yes |
| Series A lands 6 months late | | | (588k), month 32 | bridge |
| Pricing 20% below plan | 15.37M | (0.33M) | 93k, month 50 | yes |
| Gross churn 24%, three times plan | 19.21M | +0.59M | 281k, month 12 | yes |
| Labelled seats 2.5 instead of 3 | 17.12M | +1.00M | 268k, month 12 | yes |
| Categories 1 at launch, 4 in 12 months | 17.70M | +0.65M | 216k, month 12 | yes |
| US entry slips 12 months | 18.83M | +0.80M | 285k, month 12 | yes |
| US never opens, Series A kept | 16.66M | +2.04M | 285k, month 12 | yes |
| Second European wave never opens | 14.65M | +2.87M | 285k, month 12 | yes |
| Scenario 2, no Series A | 9.03M | +2.29M | 381k, month 12 | yes |
| Scenario 3, Series A deployed | 21.11M | +2.20M | (292k), month 12 | no |

Every revenue stress stays funded. The two that hurt most are price and the market-read attach rate
(decision 1 below); a slower category ramp costs 1.5M of ARR but not the plan. Round timing is the
stress that bites, and the reason is the pre-seed: 500k reaches month 13 with 285k to spare, so a seed
that lands a quarter late is answered by the standby bridge on ASSUMPTIONS, not by the plan.

---

## 6. What we need to decide

Founder decisions the thirteenth pass deliberately did not take. Each is measured against the base
case above; every number is a one-cell change on ASSUMPTIONS or MARKETS.

1. **The market-read attach rate.** 75% of T2 categories are packaged and sold as a market read.
   At 35%: 2031 ARR 16.77M, EBITDA +0.14M. This is now the single most sensitive commercial input.

2. **Retailer share on the market read.** The mandate letter presumes up to 40% of any future
   economics; the model pays 0% on the market read and 30% on labelled. Your own reading is that a
   retailer whose share goes to zero as the product matures will use the data feed as leverage at
   renewal. 30% on the market read: 2031 EBITDA +0.57M. A pooled 10 to 15% plus a free own-performance
   benchmark for the retailer is the likely landing; it is not yet modelled.

3. **Edge hardware and stores per chain.** No hardware line; 60 capture stores per chain. At 150 per
   chain: 2031 EBITDA +0.69M.

4. **Chain read plus market read.** The architecture discussed on 11 Sep (a brand buys named chains
   one by one, priced by chain weight, plus the market read) aligns the retailer with growth and
   removes the T2 gate. It was deferred; the 3 + 2 split is the interim and READ ME says how it works.

5. **The aggregated gate.** Two chains today; three would be safer for k-anonymity and for leverage,
   at the cost of later market reads.

6. **The United States and the second European wave.** With the US never opening and the Series A
   kept: 2031 ARR 16.66M, EBITDA +2.04M. With France, Benelux, the Nordics and Iberia never opening:
   14.65M, +2.87M, 59 people, and a plan that flattens in 2030. The Series A is what buys both.

7. **ESOP top-up at the Series A.** A 10% post-money pool at the A takes founders from 55.1% to
   about 50% at exit and every investor's MOIC down by a tenth: pre-seed 20.1x becomes about 18x.

8. **Pre-seed size.** 500k reaches the seed with 285k to spare and no room for a late seed. 600k at
   the same post-money absorbs a seed one quarter late; it costs 1.5 points of founder ownership.

9. **Series A ownership.** 4.0M at 30M post is 13.3%; a lead fund usually wants 15 to 20%.

10. **Hiring before the pre-seed lands.** Staffing runs six months ahead of categories, and with two
    categories live at month 1 the first analyst is hired in month 2, which takes cash to 2.5k the
    month before the round closes. Either the hire waits for the money or the pre-seed lands in month 2.

11. **US salaries.** In-market roles carry 1.55x Czech rates at all seven rows open, thin for US
    enterprise sales; 1.7 costs about 0.3M of 2031 EBITDA.
