# Financial plan walkthrough: for co-founder review

**Purpose:** what the model contains, how it works, and every place it deliberately departs from this
pack. Read this before approving the plan. Sixty-four months, Sep 2026 to Dec 2031, all figures EUR.
Rewritten from the live sheet on 15 Sep 2026 after the fourteenth pass. Full finding register and
decision log: `18-model-reconciliation.md`. Every number below is read from the workbook; if the sheet
moves, this file is stale, not the sheet.

---

## 1. The plan in one table

Base case, seven European markets; the United States is scenario 3, not the base. Fourteen integrity
lines on CHECKS, all OK, zero formula errors, and the rollout engine, the seat vintages, the staffing
build and the cap table re-implemented independently from the inputs with zero difference.

| Year end | ARR | Revenue | Gross margin | EBITDA | Cash | Team |
|---|---|---|---|---|---|---|
| 2026 | 172k | 20k | 76.9% | (0.10M) | 0.49M | 8 |
| 2027 | 775k | 0.55M | 67.9% | (0.62M) | 2.61M | 23 |
| 2028 | 4.33M | 2.77M | 59.8% | (1.90M) | 6.04M | 41 |
| 2029 | 9.96M | 6.81M | 63.8% | (2.37M) | 4.99M | 70 |
| 2030 | 14.76M | 12.39M | 66.0% | (1.87M) | 4.24M | 86 |
| **2031** | **21.29M** | **18.41M** | **67.7%** | **+0.91M** | **6.67M** | **95** |

Exit at 10x ending ARR: **212.9M**, which is 11.6x recognised 2031 revenue. ARR grows **44%** in the
last year (14.76M to 21.29M) and ARR per chain deployed rises through the horizon (172k, 196k, 542k,
664k, 671k, 819k), which is the shape the twelfth and thirteenth passes did not have: the plan no
longer decelerates before the exit. The plan reaches sustained positive EBITDA in month 56 (Apr 2031).
The full-year 2031 margin is 4.9%, the fourth quarter 9.1% and December annualised 9.3%. ARR per head
224k EUR at the end.

Two margin lines, both on SUMMARY. The headline gross margin treats the retailer share as a cost of
sales: 67.7% in 2031, with 5.15M paid to chains (28% of revenue). The platform convention nets that
share from revenue instead: **net revenue 13.27M in 2031 and a 94.0% gross margin on it**, inference
and hosting being the only cost of sales left. ARR and the exit stay on the gross basis; the net
lines exist so that a reader who recomputes them finds we already did.

Unit economics at the end of the plan: CAC per brand seat **92k** (country managers now count as
sales cost), ARPU **136k**, LTV **462k** (gross margin, life capped at five years), LTV/CAC **5.0x**,
CAC payback **12.0 months**. The ratio falls from 17x in 2026 because the early years are founder-led
selling with almost no sales cost and the later years carry a real commercial organisation.

Net revenue retention is no longer reported. In this model expansion is the tier step-up of existing
seats (founding to T1 to T2) and fades once cohorts are repriced, so the ratio would only restate the
bridge: it would read 250% while the ladder reprices a small base and drift to about 100% by 2031 as
new business carries growth. The ARR bridge on SUMMARY shows the step-up and the churn directly, and
churn is shown as what it is, an assumption of 8% of seat ARR a year, to be replaced by measured
renewals.

Cash. Minimum across all 64 months is **25k in month 2**, the month before the pre-seed lands; no
scaling hire is made before month 4 (HEADCOUNT B23). After the pre-seed, cash bottoms at **446k in
month 6** and stands at 450k in month 12, the month before the seed, because hires now land two
months before their driver rather than six (HEADCOUNT B24) and the first paying seat arrives three
months after a category goes live rather than two. Before the Series A it bottoms at **1.75M in month
26**, after it at **4.18M in month 51**. Cash net of unearned prepayments turns negative in month 51
and bottoms at **(383k) in month 57**: only in the last year does the plan lean on annual billing
in advance, and CHECKS reports that low point.

Without the Series A. Set the scenario cell on MARKETS to 2: the round drops out, only Czechia,
Slovakia and Poland open, 3.22M is raised in total, 2031 ARR lands at **10.79M**, 2031 EBITDA is
**+2.23M (22.5%)** on 43 people, cash never dips below 446k after the pre-seed and founders hold
about 60% at exit. The Series A does not buy survival. It buys the second European wave and the
option on the United States, and inside this horizon it also buys the burn those markets add before
their revenue arrives, which is why the no-Series-A case shows a higher margin on a smaller base.

With the United States. Scenario 3 is the base plus the US from month 33 (May 2029), funded by the
same Series A: 2031 ARR **23.98M**, EBITDA +0.30M, 107 people, and the plan stays funded. That is
the shape of an upside, not of a different company, and it is what the Series A investor is paying
for once the European wave is on plan.

## 2. How the workbook is organised

Seven tabs, in reading order.

| Tab | What it holds |
|---|---|
| **READ ME** | What the company does, the vocabulary, what one brand pays for, a worked example on named archetypes, why inference gets cheaper, the two hiring rules, and what the model deliberately simplifies |
| **SUMMARY** | The plan on one page: the financial summary with the net-revenue lines, the business summary (section 1b, with a worked-example explanation beside each line and a deployments-versus-ARR chart in its own space), the ARR bridge, cap table with the pool top-up, exit ladder, how we raise. Detail rows and the operating metrics are collapsed under plus signs |
| **ASSUMPTIONS** | Every input that drives the P&L, in one vertical list, each one carrying a name (52 named ranges, five new: cameras per store, inference cost per camera, its yearly decline, the uniform chain-signing rate, the pool target after the Series A) |
| **MODEL** | The monthly engine: rollout, P&L, cashflow, and the seat vintages, 64 columns; detail rows collapsed under plus signs in every section |
| **MARKETS** | Eight market rows (the US is the eighth and opens only in scenario 3), how categories follow chains, entry months, the scenario switch, the T2 gate by market, and at the foot the category inventory by channel with a worked Czech example; the per-market monthly rows are collapsed |
| **HEADCOUNT** | What the team costs, with the benchmark source or the internal reasoning printed beside every staffing ratio, the hiring gate and the hiring lead; the monthly role build is collapsed, totals stay visible |
| **CHECKS** | Fourteen live integrity lines. If any says CHECK rather than OK, do not trust SUMMARY |

MARKETS and HEADCOUNT keep their own inputs, because those are rollout and staffing rather than
economics. The one structural constant not on ASSUMPTIONS is the three-month store deployment ramp on
MODEL row 11.

## 3. How the engine works

- **Chain = the deployment.** One retail banner with its own contract, data-processing agreement and
  revenue share; about 60 capture stores per chain run the visual model. 26 chains and 1,500 capture
  stores by Dec 2031 across seven markets. Chains are signed at one uniform rate per open market,
  0.09 a month, a chain roughly every eleven months per market: the rate is a property of our
  chain-facing capacity (one person per open market, which CHECKS confirms every month), not of the
  country; the chains column on MARKETS caps how many a market holds.
- **Category = the product, and a market has an inventory of them.** One shelf on one channel in
  one market: soft drinks in Czech petrol is one, soft drinks in Czech grocery another. MARKETS now
  carries the inventory by channel: petrol and convenience 5 sellable categories, grocery and
  discount 9, drugstore 3, 17 per market in total, with the categories one chain of each channel
  carries (4, 5, 3) and the chains a market typically holds (2, 3, 1). Categories follow chains: a
  chain goes live with 2 categories already sold in and carries 4 within six months. When the next
  chain in a market goes live, 75% of its categories on average already run in a live chain and
  become the cross-chain density that T2 and the market read are built on; the rest are new to the
  market. The worked Czech example on MARKETS (EuroOil, Orlen, Albert, Lidl, Kaufland) shows the
  overlap running 0, 90, 0, 90, 90 percent across five chains, about 70 on average, with 75 kept as
  the conservative side. 45 categories by Dec 2031, 26 of them at T2 density, plus 19 market reads.
- **Seat = the contract, and no brand pays twice.** Six brands per category are large enough to buy.
  Three of them, at maturity, buy the labelled read; two of the remaining three buy the market read;
  the sixth buys nothing. 156 seats at the end, 125 labelled and 32 on market reads; 2.8 labelled
  seats per category. The first paying seat arrives three months after a category goes live, not
  two: Dec 2026 ARR is 172k on four founding seats, and 2027 ends at 775k rather than 955k.
- **Price rises with density.** 40k founding as a six-month launch subscription, 80k after it, 170k
  once the category runs in two or more chains of the same market. The market read is 150k with a
  20% pooled retailer share, paid to the contributing chains in proportion to the data each
  supplies.
- **Churn is a flow of seats, not a hole in revenue.** 8% gross seat churn a year, an assumption
  shown as such on SUMMARY.
- **Cost scales with chains and categories, not seats.** COGS is inference plus the retailer share.
  Inference is now two cameras per capture store at 45 EUR per camera-month at today's list price,
  falling 15% a year from 2028; READ ME carries the evidence (constant-capability inference prices
  fell 9x to 900x a year 2022 to 2025 per Epoch AI, H100 rental fell from about 8 to about 3 USD an
  hour during 2025, long-run GPU price-performance improves 25 to 30% a year) and the four levers
  that are ours (distilled models, frame sampling and batching, reserved or owned capacity, volume
  pricing). Inference costs 0.79M in 2031; with no decline at all it would cost 0.73M more.
- **Team scales with products, two rules govern timing.** Every role is driven by categories,
  chains, markets, new ARR won or ARR under management, never by a calendar. Hires land two months
  before their driver needs them and never before the pre-seed lands, and no role count ever falls:
  the plan is at times slightly under-staffed rather than ever letting people go because a driver
  dipped. Ninety-five people at the end: 11 analysts, 7 data engineers, 5 platform, 7 deployment,
  9 account executives and 2 ramp cover, 5 SDRs, 7 retailer BD, 8 customer success, 4 legal,
  5 country managers (Poland, DACH, France with Benelux, the United Kingdom, Nordics with Iberia),
  3 product managers, 5 marketing, 7 finance and operations, 3 people, and the current team of 7.
  The largest single month of hiring is six people, in the months a market opens.
- **Working capital both ways.** 60% of seats are billed annually in advance and the unearned half
  year sits as deferred revenue; the other 40% are billed monthly and collected at 60 days.

## 4. The raise

| Round | When | Amount | Post-money | Entry | At exit | MOIC at 10x |
|---|---|---|---|---|---|---|
| Angel | Q2 2026, done | 80k | 3.5M | 2.3% | 1.2% | 33.1x |
| CzechInvest grant | 2026, part received | 45k | n/a | n/a | n/a | n/a |
| Pre-seed | Nov 2026, month 3 | 500k | 6.5M | 7.7% | 4.5% | 19.3x |
| Seed | Sep 2027, month 13 | 2.6M | 12M | 21.7% | 16.3% | 13.4x |
| Series A | Nov 2028, month 27 | 4.5M | 25M | 18.0% | 18.0% | 8.5x |

Total raised across all sources including pre-model money: **7.72M**. Founders hold **47.9%** at exit,
the pool **12.0%**: the 10% pool granted before the first round is topped up to 12% of the post-round
company before the Series A prices, created pre-money so that it dilutes every earlier holder (6.7%
of the post-A company) and not the incoming investor. The seed prices at 16x current ARR (742k in
month 13); the Series A at 6.0x current (4.18M) and 2.6x forward (9.49M), 18% for 4.5M, which is
where a lead fund usually lands. The Series A carries a reserve on purpose: pricing 20% below plan
stays funded on it (section 5), and the United States (scenario 3) is what the same round buys if the
European wave is on plan.

Exit multiple ladder, live beside the cap table:

| Multiple on exit ARR | Exit value | On 2031 revenue | Pre-seed MOIC | What it prices |
|---|---|---|---|---|
| 2.3x | 49.0M | 2.7x | 4.4x | Undifferentiated store analytics, the footfall comparable |
| 4x | 85.2M | 4.6x | 7.7x | A rented asset, a terminable licence, priced as a service |
| 8x | 170.4M | 9.3x | 15.5x | An owned rights portfolio, low end of the measurement band |
| **10x** | **212.9M** | **11.6x** | **19.3x** | The plan, midpoint of the measurement-currency band |
| 12x | 255.5M | 13.9x | 23.2x | Competitive process, or more markets live |

## 5. Stress, measured on the live model

The base case is funded with the standby bridge undrawn. The stresses below are measured one at a
time against the base case; "cash low" is the low point after the pre-seed lands. The round-slip
cases are also computed live on SUMMARY section 7.

| Case | 2031 ARR | 2031 EBITDA | Cash low | Funded |
|---|---|---|---|---|
| Base | 21.29M | +0.91M | 446k, month 6 | yes |
| Seed lands 3 months late | | | 268k, month 15 | yes |
| Seed lands 6 months late | | | (332k), month 18 | bridge |
| Series A lands 3 months late | | | 1.33M, month 29 | yes |
| Series A lands 6 months late | | | 0.90M, month 32 | yes |
| Pricing 20% below plan | 17.04M | (0.90M) | 379k, month 12 | yes |
| Gross churn 24%, three times plan | 21.29M | (0.25M) | 445k, month 6 | yes |
| Labelled seats 2.5 instead of 3 | 19.11M | +0.09M | 436k, month 12 | yes |
| Categories 1 at launch, 4 in 12 months | 19.13M | (0.34M) | 368k, month 12 | yes |
| Market-read attach 35% instead of 75% | 18.66M | (0.29M) | 446k, month 6 | yes |
| Market-read share 0% instead of 20% | 21.29M | +1.66M | 446k, month 6 | yes |
| Market-read share 40% | 21.29M | +0.16M | 446k, month 6 | yes |
| 150 capture stores per chain | 21.29M | (0.28M) | 397k, month 12 | yes |
| Inference price never falls | 21.29M | +0.18M | 446k, month 6 | yes |
| Chains signed every 13 months instead of 11 (rate 0.075) | 20.23M | +0.42M | 446k, month 6 | yes |
| Chains signed every 10 months (rate 0.10) | 22.12M | +1.39M | 446k, month 6 | yes |
| UK entry slips 12 months | 19.65M | +0.40M | 446k, month 6 | yes |
| Second European wave never opens | 14.24M | +2.22M | 446k, month 6 | yes |
| Scenario 2, no Series A | 10.79M | +2.23M | 446k, month 6 | yes |
| Scenario 3, base plus the United States | 23.98M | +0.30M | 446k, month 6 | yes |

Every revenue stress stays funded, including the price case that broke the thirteenth pass, because
the Series A now carries a reserve and hiring no longer runs ahead of the plan. The two inputs that
hurt most are price and the market-read attach rate; the chain-signing rate is the growth lever
(each month off the signing interval is worth about 0.9M of 2031 ARR). Round timing still bites at
the seed: 500k reaches month 13 with 450k to spare, a seed one quarter late is absorbed, two quarters
late is what the standby bridge on ASSUMPTIONS exists for. The Series A can slip two quarters without
a bridge.

---

## 6. What we need to decide

Founder decisions the fourteenth pass took, and the ones it deliberately left open. Each is measured
against the base case above; every number is a one-cell change on ASSUMPTIONS or MARKETS.

Taken on 14 and 15 Sep 2026: the United Kingdom as the eighth market row from month 36; the United
States out of the base and into scenario 3; one uniform chain-signing rate; first paying seat three
months after launch; hiring two months ahead of its driver and never reversed; inference per camera
with a yearly decline and the evidence for it; Series A 4.5M at 25M post; pool topped up to 12% before
the Series A; net revenue and the margin on it shown beside the headline lines; net revenue retention
removed and churn shown as the assumption it is; country managers counted as sales cost; category
inventory defined by channel with a worked example.

Open:

1. **The chain-signing rate.** 0.09 a month per market is the single most powerful input on growth
   and the one the pre-seed pilots will calibrate first. At 0.075 the plan ends at 20.23M and +0.42M;
   at 0.10 at 22.12M and +1.39M. The CHECKS line ties it to one chain-facing person per market; the
   honest answer to "what does 2M more of sales buy" is still an assertion until the second Czech
   chain is signed.

2. **The market-read attach rate.** 75% of T2 categories are packaged and sold as a market read. At
   35%: 2031 ARR 18.66M, EBITDA (0.29M).

3. **Retailer share on the market read, 20% and pooled.** At 0% the 2031 EBITDA is +1.66M, at 40%
   +0.16M. The free own-performance benchmark for the retailer is not modelled and costs nothing.

4. **Cameras per store and the inference decline.** Two cameras and 15% a year are the base. A third
   camera costs about 0.4M of 2031 EBITDA; no decline at all costs 0.73M. The pilot invoice replaces
   both numbers.

5. **Chain caps per market.** With the uniform rate the caps (Czechia 5, Slovakia 3, Poland 4, DACH 4,
   France with Benelux 4, Nordics with Iberia 3, UK 6) bind in the last year of the horizon for the
   early markets. Raising them to what the channel inventory supports (6 to 8) adds chains that cost
   integration and deployment before they return ARR inside the horizon: measured, 2031 ARR unchanged,
   EBITDA 0.47M lower. They matter for 2032, not for 2031.

6. **Chain read plus market read.** The architecture discussed on 11 Sep (a brand buys named chains
   one by one, priced by chain weight, plus the market read) was deferred; the 3 + 2 split is the
   interim and READ ME says how it works.

7. **The aggregated gate.** Two chains today; three would be safer for k-anonymity and for leverage,
   at the cost of later market reads.

8. **Pre-seed size.** 500k reaches the seed with 450k to spare and absorbs a seed one quarter late.
   A seed two quarters late needs the bridge or a larger pre-seed; 0.65M at the same post-money
   absorbs it and costs about two points of founder ownership.

9. **In-market salaries.** In-market roles carry 1.55x Czech rates with all eight rows open (1.47x
   with the seven European rows); thin for US enterprise sales if scenario 3 is run.
