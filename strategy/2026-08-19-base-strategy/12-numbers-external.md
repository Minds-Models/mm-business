# The external number set — one curve, one metric, one date convention

**Status: canonical for anything that leaves the building.** Investor deck, data room, exit model,
partner conversations. Where any other document disagrees, this file wins.

Written 20 Aug 2026 to resolve a contradiction that would have been caught in diligence: the
exit model showed **€0.5M ARR in 2027** while the operating plan targeted **€4.40M by Feb 2027** —
a ~9× gap between two documents that would sit in the same data room.

---

## 1. Why the two numbers disagreed (all three causes are real)

| Cause | Detail |
|---|---|
| **Different metrics** | The exit model counted *recurring data ARR only*. The operating plan counts every signed annual line — seats, index, Twin, retainers, AI-data, landlord, legacy screens |
| **Different dates** | The exit model's "2027" is a calendar-year figure and its monthly table ends mid-2027. The operating plan's €4.40M is a **run-rate on 18 Feb 2027** |
| **Different economics** | The exit model still assumed the **old up-to-40%-to-retailer split** (retailer kept 40–50% of each data euro). Decision **D1** replaced that: retailers pay €0 and receive no revenue share; we keep the whole brand euro and carry platform opex instead |

The third cause matters most, and it moves the number **up**, not down.

---

## 2. The definitions everything must now use

- **Metric: Contracted ARR.** Signed annual contracts, at run-rate. Excludes: one-off studies,
  pipeline, letters of intent, pass-through hardware, and anything unsigned. (Consistent with the
  standing rule "ARR = signed annuals only".)
- **Date convention: 31 December year-end**, with **18 Feb 2027** carried separately as the
  operating checkpoint because that is the date the six-month plan is judged on.
- **Currency:** EUR. FX 24.5 CZK/€.
- **Two curves, never more:** the **base case** is what we say externally; the **operating target**
  is what we run against internally and never appears as an external forecast.

---

## 3. Re-casting the exit curve under brands-only `[EST — arithmetic shown]`

Under the old split, a data euro was shared roughly 50/50 with the retailer, so M&M netted ~50–60%
of gross. Under D1 we keep ~100% of the brand euro and instead carry platform opex of
~€41/store/month (<1,000 CZK all-in).

Worked example at 1,000 instrumented stores: platform opex ≈ 1,000 × €41 × 12 ≈ **€0.49M/yr**.
Against a gross data book of €4M, the old model netted ~€2.0M; brands-only nets €4M − €0.49M ≈
**€3.5M**. Net effect ≈ **1.8×** on the same gross book.

**Consequence, stated plainly: brands-only pulls the old exit curve forward by roughly twelve
months.** The year that used to produce €2.0M now produces ~€3.4M on the same commercial activity.
Second consequence: the old model's "Czech pipeline tops out at €4–6M by 2031" becomes
**~€7–11M** — which means the exit threshold is reachable on a CZ+SK(+PL) footprint alone, and
**Europe becomes the upside case rather than a precondition.** That materially de-risks the story
we tell investors: the big geographic expansion is acceleration, not survival.

---

## 4. The external curve — this is the only one that goes in a deck

| Year-end | Contracted ARR (base case) | What has to be true |
|---|---|---|
| **Dec 2026** | **€0.4–0.7M** | First category seats signed · CPI portfolio · legacy screens · one chain under rights |
| **18 Feb 2027** *(checkpoint)* | **€0.8–1.4M** | The six-month plan's base case. Internal operating target for the same date: €4.40M |
| **Dec 2027** | **€2.0–3.0M** | Full year of syndication in 2 categories · second petrol chain · SK live |
| **Dec 2028** | **€4.0–5.5M** | Drugstore + FMCG categories · first market beyond CZ/SK |
| **Dec 2029** | **€6.0–8.0M** | Cross-retailer aggregate product live and sold |
| **Dec 2030** | **€8.0–10.5M** | Multi-country coverage |
| **Dec 2031** | **€10–14M** | The exit year |

**Growth shape:** ~48%/yr compound from Dec-2027 to Dec-2031 `[EST: (12.0/2.5)^(1/4)−1 = 0.48, midpoints]`. Strong
for a data business, and deliberately **less heroic than the 106% CAGR** in the previous model —
credibility is worth more than steepness with funds who have already passed twice.

**Where this lands the exit:** €10–14M ARR at a measurement-currency multiple of 8–12× →
**€80–168M**, centred on the **€100–150M target band**. At the illustrative post-Series-A cap
table (~5.4% seed), a €115M outcome returns roughly **12× on money invested at today's terms** —
inside the 10–16× band a seed investor underwrites.

**The Feb-2027 slide writes itself:** the base case (€0.8–1.4M) sits **ahead of** the re-cast curve
for that point in time. We are pitching a number we expect to beat, and saying so.

---

## 5. Corrected round and cap-table conventions

Previous documents carried three drifting versions of the same facts. These are now fixed:

| Item | Canonical |
|---|---|
| Angel money already in | **€80k convertible at a €3.5M cap** (not €3M) |
| Current round | **€500k at €6–7M post-money** (state post, never pre — the old doc mixed both) |
| Series A assumption for modelling | **€2–4M**, milestone-gated; model illustratively at €3M @ €18M post + ~10% ESOP |
| Illustrative ownership at exit | seed ~5.4% · angel ~1.9% · founders ~68% |

Dilution under the two fundraise strategies (`08-ws-fundraise.md` §6), for comparison only:

| Path | This round | Founders after this round | Note |
|---|---|---|---|
| **A — Bridge & Convert** | €500–700k on a cap (convertible) | ~89% | Conversion price set later; lighter now, a second raise still required |
| **B — Re-rate & Raise** | €1.5–2.5M at €8–12M post | ~78% | More dilution now, but may remove the need for a separate small A |

---

## 6. Standing rules

1. **One curve leaves the building — §4.** The operating target (`04-revenue-architecture.md`)
   is internal and is never shown as a forecast. If an investor asks what the internal plan says,
   the honest answer is: *"we run against a materially more aggressive internal target and
   underwrite the number you're seeing."*
2. **Never place the old exit model and this file in the same data room.** The published exit
   artifact still shows the unreconciled 2027 line, the old split, and the €3M angel cap — it must
   be re-published from these numbers, or removed from circulation, before diligence.
   *(It is also currently on an open share link while containing the cap table.)*
3. Any change to §4 requires the same treatment as a decision: recompute, date it, and note what
   moved. No silent edits to a number that has been shown to an investor.
4. Figures here are strategy-internal until they are added to `messaging/stats.yaml` with source
   and status — that gate still applies before anything reaches a deck.
