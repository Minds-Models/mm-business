# Financial plan walkthrough: for co-founder review

**Purpose:** what the model contains, how it works, and every place it deliberately departs from this
pack. Read this before approving the plan. Sixty-four months, Sep 2026 to Dec 2031, all figures EUR.
Rewritten from the live sheet on 17 Sep 2026 after the fourteenth pass, its profitability addendum and the slower-start addendum. Full finding register and
decision log: `18-model-reconciliation.md`. Every number below is read from the workbook; if the sheet
moves, this file is stale, not the sheet.

---

## 1. The plan in one table

Base case, seven European markets; the United States is scenario 3, not the base. Fourteen integrity
lines on CHECKS, all OK, zero formula errors, and the rollout engine, the seat vintages, the staffing
build and the cap table re-implemented independently from the inputs with zero difference.

| Year end | ARR | Revenue | Gross margin | EBITDA | Cash | Team |
|---|---|---|---|---|---|---|
| 2026 | 12k | 4k | n/a | (0.09M) | 0.47M | 8 |
| 2027 | 808k | 0.55M | 67.9% | (0.51M) | 2.74M | 21 |
| 2028 | 4.42M | 2.71M | 59.8% | (1.53M) | 4.55M | 35 |
| 2029 | 9.96M | 6.85M | 63.8% | (1.32M) | 4.52M | 56 |
| 2030 | 14.89M | 12.50M | 66.0% | (0.35M) | 5.32M | 75 |
| **2031** | **21.59M** | **18.61M** | **67.7%** | **+2.87M** | **9.76M** | **80** |

Exit at 10x ending ARR: **215.9M**, which is 11.6x recognised 2031 revenue. ARR grows **45%** in the
last year (14.89M to 21.59M) and ARR per chain deployed rises through the horizon (202k, 552k, 664k,
677k, 830k from 2027), which is the shape the twelfth and thirteenth passes did not have: the plan no
longer decelerates before the exit. The plan turns EBITDA positive in the second half of 2030 (August, one negative month in November)
and stays positive from month 52 (Dec 2030): 2030 closes at (0.35M) with the fourth quarter already
positive, and 2031 delivers +2.87M, a **15.4%** full-year margin, 19.9% in the fourth quarter and 20.7%
December annualised, with monthly EBITDA rising every quarter to about 370k in December. ARR per head
270k EUR at the end.

Two margin lines, both on SUMMARY. The headline gross margin treats the retailer share as a cost of
sales: 67.7% in 2031, with 5.2M paid to chains (28% of revenue). The platform convention nets that
share from revenue instead: **net revenue 13.4M in 2031 and a 94% gross margin on it**, inference
and hosting being the only cost of sales left. ARR and the exit stay on the gross basis; the net
lines exist so that a reader who recomputes them finds we already did.

Unit economics at the end of the plan: CAC per brand seat **75k** (country managers count as sales
cost), ARPU **136k**, LTV **462k** (gross margin, life capped at five years), LTV/CAC **6.2x**,
CAC payback **9.7 months**. The ratio falls from 17x in 2026 because the early years are founder-led
selling with almost no sales cost and the later years carry a real commercial organisation.

Net revenue retention is no longer reported. In this model expansion is the tier step-up of existing
seats (founding to T1 to T2) and fades once cohorts are repriced, so the ratio would only restate the
bridge: it would read 250% while the ladder reprices a small base and drift to about 100% by 2031 as
new business carries growth. The ARR bridge on SUMMARY shows the step-up and the churn directly, and
churn is shown as what it is, an assumption of 8% of seat ARR a year, to be replaced by measured
renewals.

Cash. Minimum across all 64 months is **25k in month 2**, the month before the pre-seed lands; no
scaling hire is made before month 4 (HEADCOUNT B23). After the pre-seed, cash bottoms at **451k in
month 6** and stands at 482k in month 12, the month before the seed, because hires land two months
before their driver rather than six (HEADCOUNT B24) and the first paying seat arrives four months
after a category goes live, in January 2027. Before the Series A it bottoms at **2.14M in month 26**,
after it at **4.21M in month 34**. Cash net of unearned prepayments never turns negative after the
pre-seed (low 289k in month 12): the plan does not lean on annual billing in advance anywhere, and
CHECKS reports that. Set the Series A to zero and the plan still reaches full-year profitability in
2031 with cash never below 1.7M; the seed carries the company to profitability, the Series A is a
reserve and the option on the United States.

Without the Series A. Set the scenario cell on MARKETS to 2: the round drops out, only Czechia,
Slovakia and Poland open, 3.22M is raised in total, 2031 ARR lands at **10.88M**, 2031 EBITDA is
**+3.01M (27%)** on 37 people, cash never dips below 451k after the pre-seed and founders hold
about 59% at exit. The Series A does not buy survival. It buys the second European wave and the
option on the United States, and inside this horizon it also buys the burn those markets add before
their revenue arrives, which is why the no-Series-A case shows a higher margin on a smaller base.

With the United States. Scenario 3 is the base plus the US from month 33 (May 2029), funded by the
same Series A: 2031 ARR **24.04M**, EBITDA +2.54M (2030 (1.09M)), 94 people, and the plan stays funded
with cash never below 2.9M after the round. That is
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
| **HEADCOUNT** | What the team costs, with the benchmark source or the internal reasoning printed beside every staffing ratio (the ratios are the mature ones: five categories per analyst, seven per data engineer, 4.5 chains per deployment or retailer-BD person, 3M EUR of ARR per customer-success manager, an 800k quota per account executive), the hiring gate and the hiring lead; the monthly role build is collapsed, totals stay visible |
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
  the sixth buys nothing. 158 seats at the end, 126 labelled and 32 on market reads; 2.8 labelled
  seats per category. The first paying seat arrives four months after a category goes live (the
  pilot quarter: brands buy once the first read exists), so 2026 ends with the legacy 12k of ARR and
  the first four founding seats land in January 2027; penetration then matures in 18 months rather
  than 24, because the six payable brands per category are known by name. 2027 ends at 808k, 2028
  at 4.42M.
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
- **Team scales with products, at mature ratios, and two rules govern timing.** Every role is driven
  by categories, chains, markets, new ARR won or ARR under management, never by a calendar, and the
  ratios are the ones a third-year operation runs at: a category read is a tooled product with a
  release cadence, so one analyst carries five of them; a category that runs in one market is re-used
  when it opens in the next, so one data engineer carries seven; the second chain in a market repeats
  the first, so deployment and retailer BD carry 4.5 chains each; customer success holds 3M EUR of ARR
  per person, the middle of the Gainsight range; an account executive carries the Bridge Group median
  quota of 800k with half an SDR, because the six brands per category are known by name. Salaries
  inflate 3.5% a year. Hires land two months
  before their driver needs them and never before the pre-seed lands, and no role count ever falls:
  the plan is at times slightly under-staffed rather than ever letting people go because a driver
  dipped. Eighty people at the end: 9 analysts, 6 data engineers, 5 platform, 5 deployment,
  8 account executives and 2 ramp cover, 4 SDRs, 5 retailer BD, 7 customer success, 4 legal,
  5 country managers (Poland, DACH, France with Benelux, the United Kingdom, Nordics with Iberia),
  3 product managers, 3 marketing, 5 finance and operations, 2 people, and the current team of 7.
  Hiring steps in the months markets open; the largest step is nine people in month 17, when Poland
  and DACH open within two months of each other.
- **Working capital both ways.** 60% of seats are billed annually in advance and the unearned half
  year sits as deferred revenue; the other 40% are billed monthly and collected at 60 days.

## 4. The raise

| Round | When | Amount | Post-money | Entry | At exit | MOIC at 10x |
|---|---|---|---|---|---|---|
| Angel | Q2 2026, done | 80k | 3.5M | 2.3% | 1.4% | 37.4x |
| CzechInvest grant | 2026, part received | 45k | n/a | n/a | n/a | n/a |
| Pre-seed | Nov 2026, month 3 | 500k | 6.5M | 7.7% | 5.1% | 21.8x |
| Seed | Sep 2027, month 13 | 2.6M | 12M | 21.7% | 18.2% | 15.1x |
| Series A | Nov 2028, month 27 | 2.5M | 25M | 10.0% | 10.0% | 8.6x |

Total raised across all sources including pre-model money: **5.72M**. Founders hold **53.4%** at exit,
the pool **12.0%**: the 10% pool granted before the first round is topped up to 12% of the post-round
company before the Series A prices, created pre-money so that it dilutes every earlier holder (6.1%
of the post-A company) and not the incoming investor. The seed prices at 16x current ARR (754k in
month 13); the Series A at 6.0x current (4.18M) and 2.7x forward (9.42M), 10% for 2.5M. The Series A
is sized as a reserve, not as survival money: without it the plan still reaches full-year
profitability in 2031 with cash never below 1.7M, but it would run 192k short in month 51 if prices
came in 20% below plan and it would enter the United States with 300k of headroom. With 2.5M the
price case keeps 2.3M, scenario 3 keeps 2.8M, and cash net of prepayments stays positive throughout.
A smaller round at a lower post-money is the founder's call; the model prices it at 25M.

Exit multiple ladder, live beside the cap table:

| Multiple on exit ARR | Exit value | On 2031 revenue | Pre-seed MOIC | What it prices |
|---|---|---|---|---|
| 2.3x | 49.6M | 2.7x | 5.0x | Undifferentiated store analytics, the footfall comparable |
| 4x | 86.3M | 4.6x | 8.7x | A rented asset, a terminable licence, priced as a service |
| 8x | 172.7M | 9.3x | 17.5x | An owned rights portfolio, low end of the measurement band |
| **10x** | **215.9M** | **11.6x** | **21.8x** | The plan, midpoint of the measurement-currency band |
| 12x | 259.0M | 13.9x | 26.2x | Competitive process, or more markets live |

## 5. Stress, measured on the live model

The base case is funded with the standby bridge undrawn. The stresses below are measured one at a
time against the base case; "cash low" is the low point after the pre-seed lands. The round-slip
cases are also computed live on SUMMARY section 7.

| Case | 2031 ARR | 2030 / 2031 EBITDA | Cash low | Funded |
|---|---|---|---|---|
| Base | 21.59M | (0.35M) / +2.87M | 451k, month 6 | yes |
| Seed lands 3 months late | | | 390k, month 15 | yes |
| Seed lands 6 months late | | | (185k), month 18 | bridge |
| Series A lands 6 months late | | | 1.73M, month 31 | yes |
| Series A never raised, base case kept | 21.59M | (0.35M) / +2.87M | 1.71M, month 34 | yes |
| Pricing 20% below plan | 17.27M | (1.56M) / +0.98M | 415k, month 12; 2.38M after the A | yes |
| Gross churn 24%, three times plan | 21.59M | (0.82M) / +2.15M | 450k, month 6 | yes |
| Labelled seats 2.5 instead of 3 | 19.26M | (0.77M) / +2.02M | 450k, month 6 | yes |
| Categories 1 at launch, 4 in 12 months | 19.37M | (1.06M) / +1.65M | 352k, month 12 | yes |
| Market-read attach 35% instead of 75% | 18.93M | (0.96M) / +1.80M | 451k, month 6 | yes |
| Market-read share 0% instead of 20% | 21.59M | +0.11M / +3.61M | 451k, month 6 | yes |
| Market-read share 40% | 21.59M | (0.80M) / +2.13M | 451k, month 6 | yes |
| 150 capture stores per chain | 21.59M | (1.43M) / +1.68M | 429k, month 12 | yes |
| Inference price never falls | 21.59M | (0.80M) / +2.14M | 451k, month 6 | yes |
| Chains signed every 13 months instead of 11 (rate 0.075) | 20.00M | (0.20M) / +2.27M | 451k, month 6 | yes |
| Chains signed every 10 months (rate 0.10) | 22.16M | (0.33M) / +3.49M | 451k, month 6 | yes |
| UK entry slips 12 months | 19.74M | +0.11M / +2.43M | 451k, month 6 | yes |
| Second European wave never opens | 14.35M | +2.24M / +3.51M | 451k, month 6 | yes |
| Scenario 2, no Series A | 10.88M | +1.98M / +3.01M | 451k, month 6 | yes |
| Scenario 3, base plus the United States | 24.04M | (1.09M) / +2.54M | 451k, month 6; 2.9M after the A | yes |

Every revenue stress stays funded and every one of them is EBITDA positive in 2031; the plan no
longer needs the Series A to survive, only to carry the price case and the United States with a
buffer. The two inputs that hurt most are price and the market-read attach rate; the chain-signing
rate is the growth lever (each month off the signing interval is worth about 0.9M of 2031 ARR).
Round timing still bites at the seed: 500k reaches month 13 with 497k to spare, a seed one quarter
late is absorbed, two quarters late is what the standby bridge on ASSUMPTIONS exists for.

---

## 6. What we need to decide

Founder decisions the fourteenth pass took, and the ones it deliberately left open. Each is measured
against the base case above; every number is a one-cell change on ASSUMPTIONS or MARKETS.

Taken on 17 Sep 2026, second sitting: the first paying seat four months after a category goes live
(the pilot quarter, so 2026 carries only the legacy line and the first founding seats land in January
2027) and penetration maturing in 18 months rather than 24 (the six payable brands per category are
known by name). Effect: Dec 2026 ARR 12k instead of 172k, 2027 808k instead of 775k, 2031 +0.3M.

Taken on 17 Sep 2026: the staffing ratios moved to their mature values (five categories per
analyst, seven per data engineer, 4.5 chains per deployment and per retailer-BD person, 3M EUR of ARR
per customer-success manager, an 800k quota with half an SDR per account executive, marketing per
twelve categories, one finance or operations person per fourteen), salary inflation 3.5% instead of
5%, and the Series A cut from 4.5M to 2.5M at the same 25M post, sized so that the price case and the
US scenario keep a buffer and the plan never leans on prepayments. Effect: 2030 EBITDA from (1.87M)
to (0.41M), 2031 from +0.91M to +2.75M, 80 people instead of 95, founders 53.4% instead of 47.9%
(figures before the slower start above).

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

8. **Pre-seed size.** 500k reaches the seed with 482k to spare and absorbs a seed one quarter late.
   A seed two quarters late needs the bridge or a larger pre-seed; 0.65M at the same post-money
   absorbs it and costs about two points of founder ownership.

10. **The Series A itself.** At 2.5M for 10% it is small for the name. The plan supports two honest
    framings: a Series A that buys the United States (scenario 3) and a reserve, or no Series A at all
    with the seed carrying the company to profitability and the US left to a later, larger round. The
    model runs either; the pitch has to pick one.

11. **The month-17 hiring step.** Nine hires land in one month when Poland and DACH open two months
    apart; staggering DACH by a quarter smooths it at no cost to 2031.

12. **Slovakia and Poland before the seed.** Opening Slovakia in month 12 and Poland in month 15
    (two months earlier each) lifts 2027 ARR to 968k and 2031 EBITDA to +2.99M at a cost of 60k of
    pre-seed headroom; month 11 and 14 give 972k and +3.18M with the low point at 370k. Both put a
    market entry ahead of the seed closing, which is a founder call, not a modelling one.

9. **In-market salaries.** In-market roles carry 1.55x Czech rates with all eight rows open (1.47x
   with the seven European rows); thin for US enterprise sales if scenario 3 is run.
