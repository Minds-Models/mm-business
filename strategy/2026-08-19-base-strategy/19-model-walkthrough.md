# Financial plan walkthrough: for co-founder review

**Purpose:** what the model contains, how it works, and every place it deliberately departs from this
pack. Read this before approving the plan. Sixty-four months, Sep 2026 to Dec 2031, all figures EUR.
Full finding register and decision log: `18-model-reconciliation.md`.

---

## 1. The plan in one table

Base case. Twelve integrity checks pass, zero formula errors, every P&L line reconciles to an
independent rebuild.

| Year end | ARR | Revenue | Gross margin | EBITDA | Cash | Team |
|---|---|---|---|---|---|---|
| 2026 | 93k | 17k | 76.9% | (83k) | 503k | 8 |
| 2027 | 662k | 290k | 71.2% | (522k) | 2.65M | 14 |
| 2028 | 2.00M | 1.24M | 72.5% | (913k) | 2.14M | 24 |
| 2029 | 4.28M | 3.23M | 72.8% | (595k) | 7.23M | 38 |
| 2030 | 8.95M | 6.97M | 75.0% | 266k | 8.90M | 60 |
| **2031** | **15.44M** | **12.40M** | **76.7%** | **2.73M** | **13.39M** | **69** |

Exit at a 10x revenue multiple: **154.4M**. Exit-year EBITDA margin **22.0%**, Rule of 40 score **94**,
first profitable year **2030**. ARR per head **224k**, which sits between Benchmarkit's 2025 figures of
200k USD per FTE at 50-100M ARR and 300k USD above 100M, so the plan claims efficiency without
claiming the impossible.

Unit economics at the end of the plan: CAC per brand seat **47,810**, LTV **471k**, LTV/CAC **9.9x**,
CAC payback **6.1 months**. LTV/CAC falls across the plan, from 14.9x to 9.9x, because the early years
are founder-led selling with almost no sales cost and the later years carry a real commercial
organisation. That is the normalisation you want to see, not a deterioration.

Net revenue retention ends the plan at **113%**, and it is measured rather than assumed: the only
mechanism that raises revenue on a seat already sold is the price ladder, so expansion is computed
from slots crossing the T1 and T2 gates. The ARR bridge under the annual summary shows the four
moving parts. Benchmarkit's 2025 median NRR is 101%.

Two cash facts. Minimum across all 64 months is **18,350**, which is month 2, today, before the
pre-seed lands. After the pre-seed, cash bottoms at **297,130 in month 12**, which is 9.0 months of
cover, and it holds between 262k and 333k across all eight sensitivity cases. Seats are billed
annually in advance, so deferred revenue funds a meaningful part of the business at no cost.

The stronger statement is what happens without the Series A. Set the scenario cell on MARKETS to 2 and
the Series A is not raised at all: 3.02M of total funding instead of 8.02M. Expansion slows, 2031 ARR
lands at **11.15M instead of 15.44M**, and the company still never dips below 225k of cash and closes
2031 with 6.58M. **The Series A does not buy survival. It buys four years of European coverage.** That
is the single most useful thing in the plan to be able to say in a room.

## 2. How the engine works

Three tabs. MARKETS decides how fast products appear, HEADCOUNT decides what the team costs, MODEL
holds the assumptions, the monthly P&L and the exit math.

- **Slot = the product.** One category in one retail channel that we have instrumented. Built once.
  27 of them by 2031, plus 13 aggregated reads derived from them.
- **Seat = the contract.** One brand's annual subscription to one slot. Six brands per category are
  large enough to buy; we model selling 55% of that, so 3.2 seats per slot at maturity.
- **Price rises with density.** 40k founding, 80k once one chain is at depth, 170k once the category
  runs in two or more chains. 63% of categories reach the top tier by 2031.
- **Cost scales with slots, not seats.** The second seat in a slot costs almost nothing to serve.
  That gap is the thesis, and it is why gross margin climbs from 71% to 77%.
- **Supply is cheap and capped.** Sixty capture stores per chain at 45 a month. No hardware capex;
  the cameras are the retailer's. More stores add statistical precision, not revenue.
- **Team scales with products.** Every role is driven by slots, chains or markets, never by a
  calendar. Fifty-two people carry 39 sellable products and about 125 brand seats.

## 3. The raise

| Round | When | Amount | Post-money | Entry | At exit | MOIC |
|---|---|---|---|---|---|---|
| Angel | Q2 2026, done | 80k | 3.5M | 2.3% | 1.4% | 27.7x |
| CzechInvest grant | 2026, part received | 45k | n/a | n/a | n/a | n/a |
| Pre-seed | Nov 2026 | 500k | 6.5M | 7.7% | 5.2% | 16.2x |
| Seed | Oct 2027 | 2.5M | 13M | 19.2% | 16.2% | 10.0x |
| Series A | Mar 2029 | 5.0M | 32M | 15.6% | 15.6% | 4.8x |

Total raised across all sources including pre-model money: **8.12M**. Founders hold **55.3%** at exit,
the pool **6.1%**. A standby bridge row sits in the funding block at zero, so "what if the round slips"
is answered inside the model rather than in conversation.

---

# 4. Where we departed from the pack, and why

## Corrections back to canon

**Founding seat at 40k, not 35k.** Decision D17 set the founding floor at 40k and the 21 Nov goal at
>=80k of contracted ARR, and explicitly called the 35k reading a mix-up. The model had the mix-up. It
now produces exactly 80k in Nov 2026.

**Czech corporate tax at 21%.** The model carried 19%, the rate until 2023. Corrected, with loss
carryforward.

## Deliberate changes

**Slovakia is home market, not expansion. Romania is out, two Western markets are in.**
The old sequence was CZ, SK, PL, DACH, Romania. Slovakia reads badly to an investor as "our first
expansion is a smaller country", but it is the same chains under the same buying organisations, so it
is the cheapest density in Europe at 15k of entry cost rather than 80k+. Now: Czechia and Slovakia as
one home market, Poland at month 13 funded by the seed, DACH at month 25 funded by the Series A,
France and Benelux at 37, Nordics and Iberia at 49.

**The T2 price gate now requires two chains in that market.** T2 means the category runs in two or
more chains, but the model was gating on time alone, so Slovakia, Poland, DACH and France were all
repricing to 170k while they had one chain. Now gated per market on age AND chains >= 2. Costs about
4% of exit ARR. In exchange, ARR per instrumented category lands at 572k, inside the canonical
300-600k band, instead of 673k above it.

**Store density is 60 per chain, not the 150-300 the ladder asks for.** `stats.yaml` says T2 needs
150-300 stores. The sample-size derivation now written into the model supports 30-60 per chain and
explains why: precision improves with the square root of the count while cost rises in line with it,
so store 400 adds no revenue. We are choosing the derivation over the older figure; the ladder gets
amended when the pack is updated.

**Yield per capture store is retired as a metric.** `13-revenue-model.md` calls 3,060 of revenue per
instrumented store "the single most useful benchmark we have". The model reaches 17,152, which is 5.6x
that. The reason is the same as above: we cap stores deliberately, so revenue per store is an output
of that choice rather than a constraint on it. The metric is marked internal-only and is not reported.

**Payroll is one fully loaded number per role, plus a market multiplier.** The IČO / HPP overhead
coefficient is gone. A labour multiplier rises from 1.00 in the home market to 1.35 at the full
six-market footprint, because Germany and France are not Prague. Team ratios were then loosened on the
six slot-driven and overhead roles and left untouched on the three chain-driven ones and on legal,
because integrating a chain is the hard part and understating it would be the wrong place to be
optimistic.

**The model does not name financing instruments.** Rounds are Pre-seed, Seed and Series A. Whether
each is a convertible or a priced round is a term-sheet question. Note that the fundraise plan states
the pre-seed cap as 6.0M **pre-money** while the model shows 6.5M **post**. Same arithmetic, and the
convention still needs stating once in the paper.

---

# 4b. Go-to-market, CAC and LTV

**How the money is counted, and why there is no double count.** The sales, retailer BD and marketing
team sits in **payroll**, driven by slots and chains like every other role. The go-to-market line in
the P&L carries **only the direct, non-payroll cost** of opening a slot and winning a seat: travel,
sample reads, pilot support, proof-of-value work. Nothing else.

This was wrong until 2 Sep. The go-to-market inputs were built as "six months of a salesperson's
loaded time plus expenses", which charged the same salary twice, once in payroll and once per slot
opened. Corrected: the two inputs now hold only the non-payroll cost. The line fell from 5.80M to
about 0.5M across the plan, and the exit-year EBITDA margin rose from 15.2% to **28.9%**.

**CAC and LTV are now in the model**, in the KPI block:

| | 2027 | 2029 | 2031 |
|---|---|---|---|
| Sales & marketing cost (payroll + programs) | 80k | 781k | 2.05M |
| New brand seats won | 4.9 | 23.1 | 46.7 |
| **CAC per new seat** | 16.2k | 33.8k | **43.8k** |
| ARPU per seat | 94.9k | 103.4k | **122.8k** |
| LTV per seat (gross margin, life capped at 5 years) | 338k | 376k | **471k** |
| **LTV / CAC** | 20.9x | 11.1x | **10.7x** |
| Months to recover CAC | 2.9 | 5.4 | **5.6** |

CAC counts the whole sales, retailer BD and marketing payroll plus the programs line, over seats won
in the year, so it is a fully loaded figure rather than a marketing-spend ratio. The LTV side uses a
five-year life cap; at the modelled 8% churn the uncapped life would be 12.5 years, so the cap is the
conservative choice. **The ratio is high because churn is low, not because CAC is understated.** A
reader who doubts it should test the churn assumption, and the sensitivity block does exactly that at
15% and 25%.

---

# 5. What we need to decide

1. **Retailer revenue share: 30% or 40%.** `stats.yaml` says 40-50% for data products and the mandate
   letter presumes "up to 40%". The model uses 30% on labelled reads and 0% on aggregated. Gross
   margin and therefore the exit valuation ride on this; moving to 40% costs roughly 3 points of
   blended margin. **This one moves the valuation.**

2. **Which curve goes in the deck.** The external curve promises 0.4-0.7M by Dec 2026 and 10-14M by
   Dec 2031; the model produces 93k and 15.4M. Most of the near-term gap is a definition: the curve
   counts contracted ARR including banked orders and LOIs, the model counts live run-rate ARR. Nobody
   wrote that down. We either write it down, or we show both lines.

3. **The growth shape.** From 2027 the model compounds at **120% a year**. `12-numbers-external.md`
   sets a ~48% shape and says it is "deliberately less heroic than the 106% CAGR in the previous
   model, credibility is worth more than steepness with funds who have already passed twice". The
   model is now steeper than the number that paragraph was written to disown. It is defensible,
   because the aggregated read and the six-market rollout did not exist when the 48% shape was set.
   But we cannot leave a document in the repo arguing against our own model.

4. **Series A at 5M @ 32M post**, against 2-4M @ 18M in the pack. The bigger round funds DACH and then
   France and Benelux. Without it the plan still reaches break-even but ends 2031 around 12.5M of ARR
   instead of 15.4M. It prices at 11.9x current and 5.4x forward ARR.

5. **The team ratios.** Read them as an operator: 14 seats per salesperson, 25 accounts per customer
   success manager, 6 categories per analyst. If any of those is fantasy, say so now.

6. **The labour multiplier at 1.35.** It assumes roles localise in every market. If we plan to hire in
   CEE and travel, it is closer to 1.20 and the exit margin moves accordingly.
