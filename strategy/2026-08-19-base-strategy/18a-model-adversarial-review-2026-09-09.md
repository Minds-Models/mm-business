# Adversarial review of the VC financial model, 9 Sep 2026

**Scope:** the live Google Sheet (all seven tabs, formulas and values as of this morning), cross-read against CLAUDE.md, 11-research-annex, 13-revenue-model, 07-ws-legal-rights and why-not-nielseniq for reasoning only. Findings were formed before reading 18-model-reconciliation.md; Part 2 compares against it.

**Base case as reviewed:** 2031 ARR 20.29M, revenue 16.43M, EBITDA 1.42M, exit 202.9M at 10x, closing cash 7.15M, min cash 23,020 in month 1, eleven checks OK.

**One-line verdict:** the arithmetic ties, the semantics do not. Six mechanisms in the engine book money that does not exist yet, and the cash line is solvent only because of customer prepayments and rounds that land on the month.

---

## Part 1: Findings, in the order a partner would raise them

### A. Semantic errors in the engine

**1. Slots go live, sell seats and earn revenue in markets that have no instrumented chain.**
MARKETS builds slots (rate in column I) and chains (rate in column K) as two independent linear ramps from the entry month. At the rates given, the first slot appears about 9 months after entry and the first chain about 15 months after entry, so in every market except Czechia a category read is live and billing before a single store is capturing:

| Market | Slots live, chains = 0 | Slot-months |
|---|---|---|
| Slovakia | M20–M24 | 5 |
| Poland | M22–M27 | 6 |
| DACH | M26–M32 | 7 |
| France + Benelux | M44–M50 | 7 |
| Nordics + Iberia | M56–M61 | 6 |
| United States | M31–M41, up to 3 slots | 21 |

Roughly 1.1M of revenue is recognised over the plan on slots with no chain behind them, and those slots also trigger GTM spend, analyst hires and AE quota. The US case is the worst: the READ ME says the Series A carries "the twelve to eighteen month retailer cycle before any revenue arrives", and the model books US revenue in month 31, three months after entry. A slot is a category in a chain; it cannot exist before the chain. Fix: cap each market's live slots by its chains (slots ≤ chains × slots-per-chain input), or start the slot clock at the first chain rather than at entry.

**2. The T2 gate is per market, not per category, and it fires the month the second chain signs.**
MARKETS rows 55–61 reprice every slot older than 15 months to T2 as soon as the market has 2 chains of any kind. The repo's non-negotiable rule (CLAUDE.md, benchmark integrity) is that cross-chain claims require ≥2 chains **in that category**, and the READ ME's own definition of a slot is one category in one retail channel. Two chains in a market can be a petrol network and a pet-specialty chain; the model would reprice the tobacco slot to 170k on the strength of the pet chain. There is also no lag: T2 turns on in SK (M42), PL (M43), DACH (M48) and the US (M56, four slots at once) in the same month the second chain is signed, while row 11 is still ramping that chain's capture stores over three months and the cross-chain read has zero history. Founding to T1 requires six months of history; T1 to T2 requires none. At Dec-31, 22 of 37 categories are at T2 and the T2 premium is worth about 290k of ARR per slot (90k × 3.19 seats), so the exposure is large and the audit log's "one slot, 1.8%" figure for this family is stale. Fix: a per-market input for the share of categories that actually span two chains, and a lag of at least the store ramp plus a history period.

**3. Churn is deducted on top of a penetration curve that is already net, and three rows disagree about whether churned seats get replaced.**
Row 14 is seats held per slot, ramping to 55% of depth and capped there. That is a net position by construction. Row 28 then accumulates a permanent hole in ARR that is never backfilled (row 29 drifts 0.98 → 0.89 and would go to zero if gross ARR ever flattened). Meanwhile row 20 counts replacement seats as "new seats won" and HEADCOUNT row 47 staffs AEs to sell them, while row 44 charges no GTM cost for them. So revenue says churned seats are never replaced, payroll says they are, and GTM says they are replaced for free. Size: 2.5M of the 22.8M gross ARR at Dec-31 is in the hole, and the ARPU KPI (SUMMARY row 41) divides net ARR by gross seats, understating ARPU at 120k against 135k. Fix: choose one convention. Either the penetration curve is net and churn leaves the revenue line (staying in the bridge as a KPI), or churn is a seat-stock flow that AE capacity refills and GTM pays for.

**4. The ARR bridge books a T1 to T2 reprice at 50k per seat instead of 90k.**
SUMMARY row 22 computes expansion as ΔT1 × (P1 − PF) + ΔT2 × (P2 − P1). When a slot moves from T1 to T2, ΔT1 is −1 and ΔT2 is +1, so the formula nets −40k against +90k. Expansion is understated and, because new business is the plug, new business is overstated by the same amount:

| | 2027 | 2028 | 2029 | 2030 | 2031 |
|---|---|---|---|---|---|
| Expansion, sheet | 308k | 525k | 888k | 2.13M | 2.87M |
| Expansion, correct | 403k | 621k | 1.10M | 3.02M | 4.09M |

Correct NRR for 2031 is about 124%, not 113%. The direction is conservative, but a bridge that misallocates 1.2M in the exit year is a bridge a partner rebuilds. Fix: expansion = (ΔT1 + ΔT2) × (P1 − PF) + ΔT2 × (P2 − P1), all × seats per slot.

**5. Seats per slot is driven by the fleet's average age, so a slot opened in the last month of the plan sells 3.19 seats immediately.**
Row 12 averages slot age across the fleet and row 14 applies one penetration to every slot. The ramp is concave, so ramp(average age) is always ≥ average of ramp(age), and the input Seats_Founding_At_Launch = 2 does nothing after month 2. Vintage-tracked labelled seats at Dec-31 are 107 against the model's 118 (−9%), with the same bias on aggregated seats. Fix: a vintage triangle (slots opened by month × age), or at least per-market age.

**6. Deferred revenue is booked on the legacy business, and no receivables exist anywhere.**
Row 58 applies 60% × half a year to TOTAL ARR, which includes the 12k of legacy revenue, so month 1 shows 3.6k of prepayment on a business that is not sold annually. More important, the other 40% of seats and all COGS are collected and paid in the same month with no DSO; large FMCG brands pay at 60 to 90 days. The model takes the working-capital benefit of prepayment and ignores the working-capital cost of collection.

### B. The cash line

**7. Cash net of customer prepayments goes negative in 2030.**

| Dec | 2028 | 2029 | 2030 | 2031 |
|---|---|---|---|---|
| Closing cash | 4.19M | 2.92M | 3.08M | 7.15M |
| Deferred revenue held | 0.62M | 1.43M | 3.44M | 6.09M |
| Cash net of deferred | 3.57M | 1.48M | **−0.36M** | 1.07M |

The low point is −642k in month 56. Of the 7.15M closing cash, 6.09M is money owed to customers as service. The plan is solvent on the assumption that 60% of brands pay a year in advance from the first seat, and the Series A's "nine months of cover" is measured on cash that includes those prepayments. If the annual-in-advance share is 30% rather than 60%, the plan runs out of money in 2030 without any other assumption moving.

**8. Round timing was never stress-tested and it is the binding constraint.**
Cash bottoms at 260k in month 12, the month before the seed. From the live monthly line: seed 6 months late → −168k; Series A 6 months late → −120k; Series A 9 months late → −462k. The SUMMARY §7 stress list covers price, churn, seats and US timing, not the thing most likely to slip. The standby bridge row exists at zero and is never exercised. At the front end, cash is 23k at the end of September against 19 to 20k of monthly burn: the pre-seed has to close in November or the company is out of cash in December, which the sheet should say in words.

### C. Assumptions where the repo's own logic disagrees with the model

**9. The per-brand price stack is two times what the repo's calibration allows.**
13-revenue-model anchors T1 at the incumbent's enterprise cluster and calls T2 "aggressive by construction", to be sold only with the parity proof and two-chain density. The incumbent's average client, across every category and every retailer it covers, is about 160k. The model charges one brand 170k (T2) plus 150k (aggregated) = 320k a year for one category in one market, and sells that to 3.3 of the 6 brands in each. The aggregated read is the T2 read with the chain names removed: a strict information subset of a product the same buyer already holds. The READ ME asserts a brand holds both and gives no reason why the buyer of the named cross-chain read pays 150k more for the masked version. Aggregated revenue is 5.4M of 16.4M in 2031 (33%) at 100% gross margin, and the aggregated read was added after 13-revenue-model was written and never reconciled to it. The first question in the room will be "which Czech pet brand pays you 320k a year".

**10. Zero retailer share on the aggregated read is the bigger revenue-share exposure, not 30 vs 40.**
stats.yaml says 40 to 50% for data products; the mandate letter in 07-ws-legal-rights presumes "up to 40% of any future economics", any, not labelled only. The model pays 0% on a product built entirely from retailer data. If retailers take 30% of aggregated revenue, 2031 COGS rises by 1.63M; at 40% on both products it rises by 3.3M (20% of revenue) and 2031 EBITDA goes negative. The exit is priced on ARR so it does not move, but the crossover-year story and the Q4 margin rows die.

**11. The repo says edge inference is mandatory; the model says no hardware exists.**
11-research-annex §3: bandwidth arithmetic makes cloud pull infeasible at chain scale, edge inference is mandatory, and managed VMS access is licensed per camera. The model runs inference on a Gemini credit pool (cloud), states "there is no hardware capex anywhere in this model", and covers 1,040 capture stores by 2031 with a 20k per-chain integration fee that mentions "test hardware". No edge device, no replacement cycle, no connectivity, no per-camera licence. Even 500 EUR per store is 520k of capex plus refresh, and the 45 EUR per store per month inference figure is, by the audit log's own admission, unchecked. This is a logic contradiction between the repo and the sheet, not a stale number.

**12. T2 is priced on 120 stores; the ladder says 150 to 300.**
stats.yaml pricing_ladder and 13-revenue-model both gate T2 on 150–300 stores across ≥2 chains. The model has 60 stores per chain, so a two-chain T2 category runs on 120. Either inference cost is understated by 1.25 to 2.5x on T2 categories or the T2 price is not earned. Related: revenue per capture store reaches 19.5k in 2031 (CHECKS row 7), 6.4x the 3,060 EUR benchmark that 13-revenue-model calls "the single most useful benchmark we have" and whose own stretch case was 2.9x. The sheet labels the KPI "internal sanity only" and moves on.

**13. Revenue starts four months before the repo's own rights milestone.**
07-ws-legal-rights: rights signed today = 0; the mandate letter says nothing is sold during its term; definition of done is ≥3 signed instruments by 18 Feb 2027. The model starts with one chain live, sells two founding seats in October 2026 (Months_To_First_Sale = 1, the input drift the audit log flagged and never resolved), and has T1 pricing by March 2027. The chain that is "live now" is live without the licence the whole exit multiple rests on.

**14. The United States is the least-constrained market in the model and it carries the Series A thesis.**
600k of entry cost buys slots at 0.25 per month, the fastest rate of any market and twice Czechia's, from a standing start; 9 slots on 2 chains by 2031 (4.5 per chain against Czechia's 1.8); all four T2 slots switch on in the month the second chain signs; prices are Czech list in EUR; and there is revenue at month 31. The SUMMARY narrative that "the Series A buys one thing: the United States" is being defended by the softest rollout row on the sheet.

**15. Cap table: the ESOP top-up that every Series A term sheet requires is missing.**
The pre-round 10% pool is diluted to 6.7% at exit and the READ ME says a later top-up is not modelled. A 10% post-money pool at the A is standard, which takes founders from 60.1% to roughly 55% and moves every MOIC. Separately, the seed prices at 42x current ARR (12M post on 286k) and the A at 16.3x (30M on 1.84M); the sheet states the A multiple and is silent on the seed's.

### D. Presentation defects a partner reads as carelessness

**16.** SUMMARY D65 reads "the United States, entered in month 1": the formula points at MARKETS!I11 (the tempo cell) instead of H11 (US entry, 28).
**17.** HEADCOUNT column G prose contradicts its own table: "one CSM per 5.5 slots" (table: 2.5M ARR), "G&A per 15 people" (10), "deployment per 4 chains" (3), "marketer per 8" (6), and "52 people carrying 39 products and roughly 125 seats" against 88, 53 and 169 on the sheet.
**18.** MARKETS O18 says "DACH: month 25, funded by the Series A"; the preset opens DACH at month 18 on seed money, nine months before the A.
**19.** READ ME says "twelve live integrity tests" (there are eleven) and repeats the "Blue cells are inputs" sentence.
**20.** Hard-codes that contradict "nothing is hard-coded": SUMMARY row 24 (−12000 for legacy ARR), ASSUMPTIONS B55 (4,000,000 inside a formula), MODEL row 44 (month < 4), row 58 (0.5 half-year), HEADCOUNT column G (1.338), and the angel round's amount and cap typed on SUMMARY D48:E48 rather than on ASSUMPTIONS.
**21.** GTM charges the 10k slot-opening cost on aggregated slots (160k over the plan) after the audit log's own conclusion that an aggregated slot is "the same instrumented category resold, not a second thing to build".
**22.** Minor and immaterial inside the horizon: row 56 pays a negative tax (refund) in any loss month after cumulative EBITDA turns positive; recruiting is recharged whenever a FLOOR-driven headcount dips and recovers.

---

## Part 2: What 18-model-reconciliation.md missed or got wrong

**Claims in the log that the live sheet does not support.**

- **B1 "DONE" and fifth pass "per-market T2 gate found sound".** The gate is per market, not per category, and has no lag (finding 2). The seventh-pass discussion "chains, not parent companies" argued ownership and never channel, which is the axis the repo's hard rule is written on. The "one slot, 1.8% of exit" exposure quoted for this family is from the old mechanic.
- **"Checked and found sound: average slot age."** Fleet-average age is a systematic overstatement and kills the founding-seat input (finding 5).
- **Sixth pass: "the bridge ties to ending ARR in every year".** The total ties because new business is the plug; the expansion row is wrong and NRR is understated (finding 4). Presenting a derived NRR as the model's strength while the derivation is broken is worse than not reporting it.
- **Fifth pass: "seat count was gross, ARR was net" fix.** It added replacement seats to the AE driver without adding them to revenue or to GTM, turning a two-row inconsistency into a three-row one (finding 3). The sixth-pass observation that NRR "converges on 92%" once the ladder is exhausted is the same fact seen from the other side: the model assumes churned seats are never re-sold, while staffing a sales team to re-sell them.
- **Seventh pass: "all seven markets reconciled independently against the model".** Totals were reconciled to the euro; nobody asked whether a slot can exist before a chain (finding 1). The same pass wrote the "twelve to eighteen month retailer cycle before any revenue" sentence that the US row contradicts.
- **Sixth pass, annual billing: "the plan needs less capital than the burn alone suggests, which is worth being able to say".** Not without also saying that cash net of prepayments is negative in 2030 (finding 7), that the deferred balance is computed on legacy revenue, and that no receivables exist (finding 6). The round-sizing rule "six months of cover at the seed, nine at the A" is measured on customer money.
- **Tenth pass and SUMMARY §7: "it stayed funded in every one".** Funding timing was never a case (finding 8). C1 added the bridge row and no pass ever drew it.
- **"Narrative figures are now live, not typed; nothing in the prose can now contradict the numbers."** Findings 16, 17, 18, 19.
- **"Every rate, price and threshold lives on ASSUMPTIONS, never hard-coded."** Finding 20.
- **B2 "resolved by B1 plus the sample-size derivation".** Not resolved, deferred: stats.yaml and 13-revenue-model still gate T2 on 150–300 stores (finding 12), and B4's 5.8x yield is now 6.4x.
- **A4 compared 30% against 40–50% on labelled only.** The mandate letter's "any future economics" makes the 0% on aggregated the larger exposure (finding 10). Aggregated is a third of 2031 revenue.
- **Fifth pass removed aggregated slots from the staffing driver as "not a second thing to build"** and left the 10k slot-opening cost on them (finding 21).

**Never raised anywhere in the log.** Findings 1, 4, 6, 7, 8, 9, 11, 13, 14 and 15. The pricing stack (9) and the edge-inference contradiction (11) are the two a partner who has read the repo will lead with, because the repo supplies the attack.

**Open by the log's own admission and still open.** Sales ramp (AE quota without the ramp from the same source); inference cost never checked against real pricing at frame rate; A1 (run-rate vs contracted ARR, which is exactly the October-2026 revenue question in finding 13); the Months_To_First_Sale drift to 1, now baked into every number on the sheet.

---

## Suggested order

1. Findings 1 and 2 together: the slot-chain coupling and the category-level T2 gate with a lag. They move exit ARR and they are the ones a partner finds by reading the MARKETS tab for ten minutes.
2. Finding 3: one churn convention. Then finding 4, a one-formula fix on the bridge.
3. Findings 7 and 8: report cash net of deferred revenue as a row, add DSO on the non-prepaid share, and put round-slip cases in words in SUMMARY §7.
4. Findings 9 to 12 are founder decisions, not edits: the aggregated price and attach, the retailer share on aggregated, an edge-device line, and either raising stores per chain or amending the ladder in the repo.
5. Findings 16 to 21 are an hour of cleanup and should be done before anyone external opens the file.
