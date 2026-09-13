# The external number set: one curve, one metric, one date convention

**Status: canonical for anything that leaves the building.** Investor deck, data room, partner
conversations. Where any other prose document disagrees, this file wins; where this file disagrees
with the live financial model, the model wins and this file is stale.

Written 20 Aug 2026 to resolve a contradiction that would have been caught in diligence: the then
exit model showed **€0.5M ARR in 2027** while the operating plan targeted **€4.40M by Feb 2027**, a
~9x gap between two documents that would sit in the same data room. Re-cast 13 Sep 2026 from the VC
financial model after its thirteenth pass (`18-model-reconciliation.md`,
`19-model-walkthrough.md`). Sections 1 and 2 are the history and the definitions; sections 3 to 5
are read from the model.

---

## 1. Why the two numbers disagreed in August (all three causes were real)

| Cause | Detail |
|---|---|
| **Different metrics** | The exit model counted *recurring data ARR only*. The operating plan counts every signed annual line: seats, index, Twin, retainers, AI-data, landlord, legacy screens |
| **Different dates** | The exit model's "2027" was a calendar-year figure and its monthly table ended mid-2027. The operating plan's €4.40M is a **run-rate on 18 Feb 2027** |
| **Different economics** | The exit model still assumed the **old up-to-40%-to-retailer split**. Decision **D1** replaced that: retailers pay €0 for the platform and take a revenue share only on the labelled read, none on the aggregated read |

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
- **Two curves, never more:** the **base case** is what we say externally and it is the model's base
  scenario; the **operating target** is what we run against internally and never appears as an
  external forecast.

---

## 3. What the model assumes, so the curve can be argued

Seven markets in the base case: Czechia from month 1 (Sep 2026), Slovakia from month 14, Poland from
month 16, DACH from month 18, the United States from month 28 (Dec 2028), France with Benelux from
month 31 and the Nordics with Iberia from month 41. A market's entry month is the month its first chain
is live and capturing. Categories follow chains: a chain goes live with two categories already sold in
and carries four within six months; when the next chain in a market goes live, three quarters of its
categories on average already run in a live chain and become cross-chain density, the rest are new.

Price ladder per brand seat per category per year: **€40k** founding (a six-month launch
subscription), **€80k** at T1 (one chain at depth), **€170k** at T2 (two or more chains in the same
market), plus an **€150k** market read (aggregated, chain-masked) sold into three quarters of the T2
categories, with no retailer share on it and a 30% share on the labelled read. Six payable brands per
category: three buy the labelled read at maturity, two of the remaining three buy the market read, no
brand holds both on the same category, ramp over 24 months, 8% gross seat churn, 60% of seats billed
annually in advance.
Supply is 60 capture stores per chain at €45 per store per month of inference, no hardware capex.

Where this lands: 40 live categories and 17 market reads on 24 chains and 1,400 capture stores by
Dec 2031, 143 brand seats (114 labelled, 29 market) at an average of €135k, 2.8 labelled seats per
category, 23 of 40 categories at T2. ARR per instrumented category €480k, inside the €300 to 600k band
the revenue model was built on; ARR per chain deployed €800k.

---

## 4. The external curve: this is the only one that goes in a deck

Read from SUMMARY section 1 of the model, base case, 13 Sep 2026.

| Year-end | Run-rate ARR (base case) | Revenue recognised | EBITDA | What has to be true |
|---|---|---|---|---|
| **Dec 2026** | **€175k** | €31k | (€108k) | One Czech chain live with three categories, four founding seats, pre-seed closed in November |
| **Dec 2027** | **€955k** | €589k | (€1.01M) | Four chains and eight categories in three markets, second Czech chain live, seed closed in September |
| **Dec 2028** | **€4.39M** | €2.82M | (€2.79M) | Seven chains, 19 categories, the first three at T2, first market reads sold, DACH live, Series A closed in November, US entered in December |
| **Dec 2029** | **€9.78M** | €6.37M | (€2.96M) | 11 chains, 28 categories, 12 at T2, France with Benelux live, expansion peaks as categories cross the gates |
| **Dec 2030** | **€15.10M** | €12.33M | (€915k) | 18 chains, 36 categories, Nordics with Iberia live, EBITDA positive from November and stays positive |
| **Dec 2031** | **€19.21M** | €17.19M | **+€1.70M** | The exit year: 24 chains, 57 sellable products, 82 people, 10% full-year margin, 12% in Q4 |

**Growth shape:** the curve is a rollout, not a compound rate. It steps with each chain deployed and
each category crossing a price gate: 4.39M to 9.78M to 15.10M to 19.21M over the last four years,
about 64% a year over 2028 to 2031 and 27% in the final year. ARR per head ends at €234k.

**Where this lands the exit:** €19.21M of ARR at the measurement-currency multiple of 10x is
**€192M**, which is 11.2x recognised 2031 revenue. The ladder beside the cap table prices the same
asset from 2.3x (undifferentiated analytics, €44M) through 4x (a rented asset, €77M) and 8x (owned
rights, low end of the band, €154M) to 12x (competitive process, €231M). Returns per round are not
restated here: the model carries the live cap table and the MOIC per round, and reconciles to 100%
of the company. For orientation only: the pre-seed returns 20x at 10x and 4.6x at the 2.3x floor.

**The Feb-2027 checkpoint** is not on this curve. The model shows about €220k of run-rate ARR that
month; the operating architecture targets €4.40M of contracted annuals across every engine on the
same date. Those are different quantities on different scopes and neither is an external forecast.
The pre-seed use-of-funds slide is built from the model's months 3 to 13 instead (`messaging/
stats.yaml`, `model_preseed_window`).

---

## 5. Round and cap-table conventions

Previous documents carried three drifting versions of the same facts. These are now fixed, and the
amounts of the later rounds are the model's, sized from the unfunded cash path.

| Item | Canonical |
|---|---|
| Angel money already in | **€80k convertible at a €3.5M cap** (not €3M), modelled as if priced at the cap |
| CzechInvest grant | €45k in total, €16.5k still to land in Oct 2026; non-dilutive |
| Current round, pre-seed | **€500k at €6.5M post-money** (state post, never pre). It reaches the seed with about €285k to spare; a seed one quarter late is what the standby bridge is for |
| Seed | **€2.6M at €12M post**, Sep 2027, 21.7%. Priced on about €755k of ARR: the round is priced on evidence, not on the plan |
| Series A | **€4.0M at €30M post**, Nov 2028, 13.3%. Priced at 7.1x current and 3.2x forward ARR. It buys the United States and the second European wave, not survival: with it switched off the plan still ends at €9.0M of ARR, 27% EBITDA margin and never runs out of cash |
| Ownership at exit | Founders 55.1%, ESOP 6.1%, investors 38.8%; a later pool top-up is not modelled |
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
   and it carries thirteen live integrity checks that say whether its figures can be trusted.
3. Any change to section 4 requires the same treatment as a decision: recompute in the model, date
   it, and note what moved in `18-model-reconciliation.md`. No silent edits to a number that has
   been shown to an investor.
4. Figures here are strategy-internal until they are added to `messaging/stats.yaml` with source
   and status; that gate still applies before anything reaches a deck. The `model_*` entries there
   were re-read from the workbook on 13 Sep 2026 and match this file.
