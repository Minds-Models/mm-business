# The external number set: one curve, one metric, one date convention

**Status: canonical for anything that leaves the building.** Investor deck, data room, partner
conversations. Where any other prose document disagrees, this file wins; where this file disagrees
with the live financial model, the model wins and this file is stale.

Written 20 Aug 2026 to resolve a contradiction that would have been caught in diligence: the then
exit model showed **€0.5M ARR in 2027** while the operating plan targeted **€4.40M by Feb 2027**, a
~9x gap between two documents that would sit in the same data room. Re-cast 17 Sep 2026 from the VC
financial model after its fourteenth pass and the profitability addendum (`18-model-reconciliation.md`,
`19-model-walkthrough.md`). Sections 1 and 2 are the history and the definitions; sections 3 to 5
are read from the model.

---

## 1. Why the two numbers disagreed in August (all three causes were real)

| Cause | Detail |
|---|---|
| **Different metrics** | The exit model counted *recurring data ARR only*. The operating plan counts every signed annual line: seats, index, Twin, retainers, AI-data, landlord, legacy screens |
| **Different dates** | The exit model's "2027" was a calendar-year figure and its monthly table ended mid-2027. The operating plan's €4.40M is a **run-rate on 18 Feb 2027** |
| **Different economics** | The exit model still assumed the **old up-to-40%-to-retailer split**. Decision **D1** replaced that: retailers pay €0 for the platform and take a 30% share on the labelled read and a 20% pool on the market read |

The third cause mattered most, and it moved the number **up**, not down. The financial model now
carries all three conventions explicitly, so the disagreement cannot recur.

---

## 2. The definitions everything must now use

- **Metric: run-rate ARR of seats held**, as the model computes it: brand seats live on category
  reads times their current price on the ladder, plus the flat legacy line. For actuals we report
  **contracted ARR**, signed annuals only, and it excludes one-off studies, pipeline, letters of
  intent, pass-through hardware and anything unsigned. The model's curve and the contracted actuals
  are the same quantity once a seat is signed and live.
- **Scope: the category-read business only.** The model carries the syndicated category read
  (labelled and aggregated) and 1k a month of legacy revenue. The other engines in the operating
  architecture (index, Twin, retainers, AI-data, landlord) are not in the model and do not appear in
  the external curve. That is decision D16: all in on the data business.
- **Date convention: 31 December year-end**, with **18 Feb 2027** carried separately as the
  operating checkpoint because that is the date the six-month plan is judged on. It is an internal
  gate, not an external forecast point.
- **Currency:** EUR. FX 24.5 CZK/€.
- **Gross and net.** ARR, revenue and the exit are stated gross, with the retailer share as a cost
  of sales. The model also shows net revenue after the retailer share and the margin on it, the
  platform convention; quote the net lines only beside the gross ones, never instead of them.
- **Two curves, never more:** the **base case** is what we say externally and it is the model's base
  scenario; the **operating target** is what we run against internally and never appears as an
  external forecast.

---

## 3. What the model assumes, so the curve can be argued

Seven European markets in the base case: Czechia from month 1 (Sep 2026), Slovakia from month 14,
Poland from month 16, DACH from month 18, France with Benelux from month 31, the United Kingdom from
month 36 and the Nordics with Iberia from month 41. The United States is the eighth market row and is
not in the base: it opens only in scenario 3 (base plus the US from month 33), the upside the Series A
buys once the European wave is on plan. A market's entry month is the month its first chain is live
and capturing. Chains are signed at one uniform rate per open market, a chain roughly every eleven
months, the rate of one chain-facing person per market; the chains column on MARKETS caps how many a
market holds. Categories follow chains: a chain goes live with two categories already sold in and
carries four within six months; when the next chain in a market goes live, three quarters of its
categories on average already run in a live chain and become cross-chain density, the rest are new.
What a market can sell in total is an inventory by retail channel (petrol and convenience 5
categories, grocery and discount 9, drugstore 3, 17 per market), with a worked Czech example on the
MARKETS tab.

Price ladder per brand seat per category per year: **€40k** founding (a six-month launch
subscription), **€80k** at T1 (one chain at depth), **€170k** at T2 (two or more chains in the same
market), plus an **€150k** market read (aggregated, chain-masked) sold into three quarters of the T2
categories, with a 20% pooled retailer share on it (split between the contributing chains by the data
each supplies) and a 30% share on the labelled read. Six payable brands per category: three buy the
labelled read at maturity, two of the remaining three buy the market read, no brand holds both on the
same category, first paying seat three months after a category goes live, ramp over 24 months, 8%
gross seat churn (an assumption, shown as such), 60% of seats billed annually in advance.
Supply is 60 capture stores per chain with two of the retailer's cameras each, inference at €45 per
camera-month at today's list price falling 15% a year from 2028 (the evidence is on READ ME), no
hardware capex.

Where this lands: 45 live categories and 19 market reads on 26 chains and 1,500 capture stores by
Dec 2031, 156 brand seats (125 labelled, 32 market) at an average of €136k, 2.8 labelled seats per
category, 26 of 45 categories at T2. ARR per instrumented category €473k, inside the €300 to 600k band
the revenue model was built on; ARR per chain deployed €819k, rising through the horizon.

---

## 4. The external curve: this is the only one that goes in a deck

Read from SUMMARY section 1 of the model, base case, 17 Sep 2026.

| Year-end | Run-rate ARR (base case) | Revenue recognised | EBITDA | What has to be true |
|---|---|---|---|---|
| **Dec 2026** | **€172k** | €20k | (€0.10M) | One Czech chain live with three categories, four founding seats sold in December, pre-seed closed in November |
| **Dec 2027** | **€775k** | €0.55M | (€0.49M) | Four chains and eight categories in three markets, second Czech chain live, seed closed in September |
| **Dec 2028** | **€4.33M** | €2.77M | (€1.50M) | Eight chains, 17 categories, the first three at T2, first market reads sold, DACH live, Series A closed in November |
| **Dec 2029** | **€9.96M** | €6.81M | (€1.35M) | 15 chains, 29 categories, 12 at T2, France with Benelux and the United Kingdom live, expansion peaks as categories cross the gates |
| **Dec 2030** | **€14.76M** | €12.39M | (€0.41M) | 22 chains, 39 categories, Nordics with Iberia live, seven markets open, EBITDA positive from the fourth quarter |
| **Dec 2031** | **€21.29M** | €18.41M | **+€2.75M** | The exit year: 26 chains, 64 sellable products, 80 people, 15% full-year margin and 20% in Q4 |

**Growth shape:** the curve is a rollout, not a compound rate. It steps with each chain deployed and
each category crossing a price gate: 4.33M to 9.96M to 14.76M to 21.29M over the last four years,
about 70% a year over 2028 to 2031 and **44% in the final year**, with ARR per chain still rising
into the exit. ARR per head ends at €266k. Net revenue after the retailer share is €13.27M in 2031 with
a 94% gross margin on it; the headline gross margin, retailer share as cost of sales, is 67.7%.

**Where this lands the exit:** €21.29M of ARR at the measurement-currency multiple of 10x is
**€213M**, which is 11.6x recognised 2031 revenue. The ladder beside the cap table prices the same
asset from 2.3x (undifferentiated analytics, €49M) through 4x (a rented asset, €85M) and 8x (owned
rights, low end of the band, €170M) to 12x (competitive process, €256M). Returns per round are not
restated here: the model carries the live cap table and the MOIC per round, and reconciles to 100%
of the company. For orientation only: the pre-seed returns 21.5x at 10x and 5.0x at the 2.3x floor.

**With the United States** (scenario 3, the upside the Series A buys): 2031 ARR €23.98M, EBITDA
+€2.4M, 93 people, funded on the same rounds. Say it as the upside, never as the curve.

**The Feb-2027 checkpoint** is not on this curve. The model shows about €170k of run-rate ARR that
month, the four founding seats of the first chain; the operating architecture targets €4.40M of contracted annuals across every engine on the
same date. Those are different quantities on different scopes and neither is an external forecast.
The pre-seed use-of-funds slide is built from the model's months 3 to 13 instead (`messaging/
stats.yaml`, `model_preseed_window`).

---

## 5. Round and cap-table conventions

Previous documents carried three drifting versions of the same facts. These are now fixed, and the
amounts of the later rounds are the model's: the seed carries the company to profitability, the
Series A is a reserve and the option on the United States.

| Item | Canonical |
|---|---|
| Angel money already in | **€80k convertible at a €3.5M cap** (not €3M), modelled as if priced at the cap |
| CzechInvest grant | €45k in total, €16.5k still to land in Oct 2026; non-dilutive |
| Current round, pre-seed | **€500k at €6.5M post-money** (state post, never pre). It reaches the seed with about €450k to spare and absorbs a seed one quarter late; two quarters late is what the standby bridge is for |
| Seed | **€2.6M at €12M post**, Sep 2027, 21.7%. Priced on about €740k of ARR: the round is priced on evidence, not on the plan |
| Series A | **€2.5M at €25M post**, Nov 2028, 10%. Priced at 6.0x current and 2.6x forward ARR. Set its amount to zero and the base case still reaches full-year profitability in 2031 with cash never below €1.7M; the round is what keeps pricing 20% below plan funded (€2.3M of headroom) and what enters the United States (scenario 3) with €2.8M of headroom |
| Option pool | 10% granted before the first round, topped up to 12% of the post-round company before the Series A, created pre-money |
| Ownership at exit | Founders 53.4%, ESOP 12.0%, investors 34.6% |
| Instrument | A term-sheet question, not named in the model. Do not state the cap or the instrument in the deck unless asked |

The two fundraise strategies in `08-ws-fundraise.md` §6 (bridge and convert versus re-rate and
raise) describe how the pre-seed is papered; they do not change the amounts above.

---

## 6. Standing rules

1. **One curve leaves the building, section 4.** The operating target (`04-revenue-architecture.md`)
   is internal and is never shown as a forecast. If an investor asks what the internal plan says,
   the honest answer is: *"we run against a materially more aggressive internal target and
   underwrite the number you're seeing."*
2. **The financial model is the exit artifact.** The old exit model with the unreconciled 2027
   line, the old split and the €3M angel cap must not be in any data room; the workbook replaces it,
   and it carries fourteen live integrity checks that say whether its figures can be trusted.
3. Any change to section 4 requires the same treatment as a decision: recompute in the model, date
   it, and note what moved in `18-model-reconciliation.md`. No silent edits to a number that has
   been shown to an investor.
4. Figures here are strategy-internal until they are added to `messaging/stats.yaml` with source
   and status; that gate still applies before anything reaches a deck. The `model_*` entries there
   were re-read from the workbook on 17 Sep 2026 and match this file.
