# Model reconciliation — the financial model vs this strategy set

**Status:** open register, 2 Sep 2026. Nothing in the model or in these documents has been changed yet.
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
the 106% CAGR** in the previous model — credibility is worth more than steepness with funds who have
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
and check the existing €80k CLA (€3.5M cap) uses the same convention — an inconsistency here surfaces in DD."

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
