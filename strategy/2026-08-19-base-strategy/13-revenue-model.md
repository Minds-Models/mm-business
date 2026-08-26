# How to model revenue — units, averages, and the NIQ cross-check

**Purpose:** settle what M&M's revenue is actually a function of, so that planning, pricing,
deployment choices and investor material all use the same arithmetic. Companion to
`04-revenue-architecture.md` (internal target) and `12-numbers-external.md` (external curve).

---

## 1. The answer in one line

> **The atomic unit of revenue is the category × channel read — produced once, sold to every brand
> in that category. Stores are supply and gate; brand-seats are billing; devices and datapoints are
> cost-side only and must never denominate revenue.**

| Unit | What it actually is | Use it for |
|---|---|---|
| **Category × channel slot** | The **product**. Built once from the same capture, sold N times | **Revenue. This is the unit of account** |
| Brand-seat | The **contract** — one brand's annual subscription to a slot | Billing, pipeline, penetration |
| Store | **Supply + density gate.** Determines which tier a slot can be sold at | Deployment planning, cost |
| Retailer | **Rights + slot-unlock.** Generates €0 directly (decision D1) | Partner selection, scored not priced |
| Device | Cost line, and a legacy of the personalization model | Engineering capacity, COGS |
| Datapoint / session | Cost driver (inference) and a statistical input | Cost modelling, calibration — **never revenue** |

---

## 2. The revenue identity

```
ARR  =  Σ over live slots [ payable_brands × penetration × price(tier) ]  +  attach products

where   tier      = f(stores instrumented in that channel, number of chains covered)
        price(T1) = €41–122k per brand-seat/yr     [30–60 stores, 1 chain]
        price(T2) = €122–327k per brand-seat/yr    [150–300 stores, ≥2 chains]
```

Four drivers, in the order they bind: **(1)** stores per channel → **(2)** density tier →
**(3)** price per seat → **(4)** how many brands buy. Nothing else moves revenue.

**Attach products** ride on the same slots and are modelled as attach rates, not as separate
businesses: Store Twin seats (~30–50% of seat buyers), campaign-measurement retainers (brands
running in-store media), the Brand-Worn Index (its own category-agnostic slot), and landlord
subscriptions (a separate per-asset unit).

---

## 3. The non-linearity everyone gets wrong

**Yield per store is front-loaded within a category and resets with each new category.**

- The first ~30–60 stores in a channel unlock a €41–122k/brand product. Those stores carry the
  entire category read.
- Store #400 in that same category adds precision and almost no revenue.
- But store #1 in a **new** category-channel unlocks a whole new slot.

Worked: a T1 slot with 4 buyers at €80k = €320k/yr off ~40 stores ⇒ **€8,000/store/yr**. The same
category grown to T2 with 4 buyers at €200k = €800k/yr off ~200 stores ⇒ **€4,000/store/yr** —
higher total, lower yield per store.

**Consequence for deployment: optimise for category coverage breadth, not store count.** Adding the
50th store in pet is worth far less than the first store in drugstore. The exception is crossing a
density gate — stores that take a slot from T1 to T2 (which needs a *second chain*) roughly triple
the price per seat, which is exactly why the second petrol chain is a named multiplier.

---

## 4. The NIQ cross-check — three ratios from real data

**(a) Supply cost per store.** NIQ pays ~287 CZK/store/month (~**€11.7**) for a POS export. M&M
carries ~<1,000 CZK/store/month (~**€40.8**) of its own opex to generate visual data — **3.5×
more expensive supply**, in exchange for the one layer they structurally lack.

**(b) The 6.25× rule.** NIQ's S-1 puts data-acquisition cost at **16% of revenue** — i.e. every €1
of data cost supports **€6.25** of revenue in a mature syndicated business. Applied to us:
€490/store/yr × 6.25 ⇒ **≈ €3,060 of revenue per instrumented store per year** at industry-normal
efficiency. *This is the single most useful benchmark we have, because it converts our supply cost
directly into a revenue expectation.*

**(c) Price calibration per seat.** NIQ's average client pays ~$173k (**~€160k**) and its own
"mid-size client" floor is **$50k**. So:
- **T1 (€41–122k)** sits between NIQ's floor and its average client — *comfortably defensible*.
- **T2 (€122–327k)** means being worth as much as, or more than, a brand's entire NIQ relationship
  — *aggressive by construction*. It is only honest with the parity proof and ≥2-chain density,
  which is precisely why both are gates. The top of the band is not invented: PMI paid **8M CZK
  (€327k)** for a category read in exactly this channel.

---

## 5. The reality check this gives us — use it in every plan review

| Scenario | ARR | Stores | Yield/store/yr | vs industry (€3,060) |
|---|---|---|---|---|
| Base case, Feb-27 | €1.1M | 250 | €4,400 | **1.4×** |
| Base case, Feb-27 | €1.1M | 400 | €2,750 | **0.9×** |
| Operating target, Feb-27 | €4.40M | 500 | €8,800 | **2.9×** |
| External curve, Dec-31 | €12M | 2,000 | €6,000 | **2.0×** |
| External curve, Dec-31 | €12M | 3,000 | €4,000 | **1.3×** |

**Read it plainly: the base case needs roughly industry-normal monetisation of each store. The
€4.40M operating target needs ~3× industry-normal yield.** That is the honest statement of what
the stretch actually assumes — and it is a far better way to express plan risk than a probability,
because it is checkable against a public filing.

Where the 2–3× could legitimately come from: our data has no substitute (they cannot buy the
who-layer elsewhere), we sell the same read to every brand in the category, and early slots are
carried by very few stores. Where it cannot: wishful pricing without the density gate cleared.

---

## 6. The average logic — for planning and for the deck

Do **not** model "average revenue per store". Model slots:

```
ARR ≈ live_slots × avg_seats_per_slot × avg_price_per_seat
```

Calibrated from the plan and the CZ market structure:

| Parameter | Planning value | Basis |
|---|---|---|
| Payable brands per category (CZ) | **3–6** | tobacco 3–4 · pet 4–6 · drugstore/HPC 5–8 · beverages 4–6 |
| Penetration (share that buys) | **50–75%** | year 1 lower; syndication compounds as the read becomes a standard |
| **Avg seats per live slot** | **≈ 3** | ≈ payable × penetration |
| **Avg price per seat** | **€100–200k** | T1/T2 blend |
| **⇒ Avg slot value** | **€300–600k/yr** | |
| Stores needed to open a slot | **30–60** (T1) → **150–300 across ≥2 chains** (T2) | density ladder |

**Cross-check against the plan:** its five live slots (tobacco CZ, pet CEE, drugstore, FMCG, index)
sum to €2.62M ⇒ **€525k per slot** — inside the €300–600k band, at the top. Consistent, and the
tightness of the fit is the reason the plan is a stretch rather than a fantasy.

So the whole business, in one sentence of arithmetic: **get to ~10 live slots at ~€500k each and
you are at €5M ARR** — which is a far more tractable statement of the goal than "sign 26 contracts".

---

## 7. Retailer selection — score by slots unlocked, not by store count

Under D1 a retailer produces €0 directly. Its value is: **how many category slots it opens × the
density tier it can support.**

```
retailer_value ≈ slots_unlocked × avg_slot_value × tier_reachable(their store count & format)
```

Rough CZ slot-unlock counts: pet specialty **1–2** · petrol/convenience **2–4** (tobacco is the
prize) · drugstore/HPC **5–8** · grocery **15–25** · electro/sport **1–3** · mall landlord **0**
(different product entirely).

**Implication worth acting on:** a 200-store pet chain and a 200-store grocery chain look identical
on a deployment dashboard and differ by an order of magnitude in slot value. Grocery is the
strategic prize *because of category breadth*, not store count — and that is the real argument for
starting the long grocery cycles early. Conversely, the landlord line is a genuinely separate
product and should never be compared on this metric.

---

## 8. What to retire, and why it matters beyond the model

- **Revenue per device (€120/device/mo).** This is the metric that made the company look linear,
  capex-bound and small — arithmetic in which growth requires proportional installs. Retiring it as
  a unit of account is part of the answer to *"we can't see the VC case"*: the same company
  denominated in **slots** (produced once, sold N times, marginal cost ≈ 0) has completely
  different growth arithmetic. Change the unit, and the business model becomes legible.
- **Datapoints / sessions / visitors captured.** Cost drivers and statistical inputs. Never revenue.

---

## 9. The dashboard — one headline, three supports

| | Metric | Why |
|---|---|---|
| **Headline** | **ARR per live slot** (target €300–600k) | Are we building products that syndicate, or collecting data? |
| Support 1 | **Stores per channel vs its density gate** | Which slots are sellable, which are one store short of a re-price |
| Support 2 | **Seats per slot** (target ≥3) | Are we syndicating or one-shotting? A slot with one buyer is a study, not a currency |
| Support 3 | **ARR ÷ instrumented stores, as a ratio to €3,060** | Capital efficiency against a public benchmark. Below 1× means we are deploying faster than we are monetising |

---

## 10. Open inconsistency found while building this — needs a founder ruling

`04-revenue-architecture.md` caps founding seats at **3 per category in year 1**, but the pet line
models **6 buyers** (Purina, Mars, Vafo/Brit + 3 mid-tier). Proposed resolution: **the cap applies
to discounted *founding* seats (3 max); additional buyers are welcome at list price.** That keeps
the scarcity mechanic, keeps the plan's arithmetic intact, and is what the penetration model above
assumes. Confirm or overturn.
