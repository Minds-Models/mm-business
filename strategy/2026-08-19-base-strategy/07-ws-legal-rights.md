# WS — Legal & Rights

**Owner:** Ondřej (+ external counsel, + part-time external DPO)
**Objective:** turn zero signed rights into ≥3 instruments, and turn compliance from a tax into
the thing competitors cannot match.

## Why this workstream outranks its apparent size

Every euro of data revenue sits behind paper that does not exist yet. Rights signed today: **0**.
~133k captured visitor sessions are currently unsellable for aggregate products. **One signature
flips months of already-captured data into sellable inventory** — the highest-leverage act
available, higher than any new camera.

## The rights ladder (never skip a rung)

1. **Mandate letter** — 60 days, revocable at will, retailer approves every artifact, nothing is
   sold, only named brands may be approached, outputs are anonymous aggregates (min. 25 people per
   segment), retailer's trading data never included, majority of any future economics presumed
   theirs. A Czech draft exists in `../../templates/one-pager/`. Designed to be unrefusable —
   **ask for it in the room.**
2. **Study rights** — one category, one chain. Enough to sell the first study.
3. **Chain licence** — perpetual, irrevocable licence to the de-identified k≥25 aggregate, plus
   the POS feed, inside the platform contract. **This clause is the difference between a vendor
   and a measurement currency. Concede economics, control, dashboards — never this clause.**
   If resisted: explain it is chain-masked and exposes nothing of theirs, offer named declining
   consideration, then park and escalate. Do not drop it.

## The legal gate across every "ride their cameras" deal

Existing retail CCTV is almost universally lawful for **property protection**. Turning those
cameras to audience analytics is a **purpose change**: it needs its own compatibility assessment,
fresh signage, a data-protection impact assessment, and — decisively — **the analytics vendor must
hold its own legal analysis; it cannot shelter under the retailer's basis.**

**One signature ≠ one legal basis.** The signature unlocks the estate; the compliance pack
manufactures the legal basis, per chain, as a repeatable product. That is why the pack is a moat:
every competitor riding CCTV owes the same homework and none arrive with it done.

Related trap: riding a retailer's cameras makes us a **processor** — "anonymous to us" is not a
defence when the data is personal for the controller. The architecture, not the contract, is what
makes the output genuinely anonymous.

## Remediation status — what must stay true

- **Prohibited extraction fields deleted and purged** (special-category inferences and any
  attribute inferring protected characteristics). This is what keeps counsel's "not prohibited,
  not high-risk" assessment true — and that letter is a **sales document** once the purge is done.
- Raw images deleted after extraction, 72h hard cap. Record-level rows 30 days. High-frequency
  body-position samples 7 days or aggregated at write.
- Minors: skip personalization and do not persist the row.
- Export gate: aggregates only, k≥25, day-part time coarsening.
- Re-identification code must never merge. "No cross-visit identification" is a written promise.
- Stop logging person identifiers and full payloads at info level.

## The compliance pack (productize it)

Impact assessment template + legitimate-interest assessment + two-layer signage + processor and
joint-controller agreements + counsel's AI-Act letter, bound as a deliverable **handed to the
retailer's DPO**. Lead with it — the SuperZoo RFI devotes a whole section to these questions and
explicitly worries about high-risk classification. Each DPO review hardens the pack.

## Sales language (changed — enforce it)

From "aggregated, anonymized audience data" (checkable and currently false end-to-end) to:
**"anonymous insights, built on momentary processing — no faces, no recognition, no retention,
raw footage never leaves the store."** Smaller claim, true, defensible in front of any DPO.
Never warrant end-to-end anonymity in a contract.

## Paper required per data source before its data is sellable

| Source | Instrument | Signer |
|---|---|---|
| SuperZoo / Plaček | Mandate → Data Partner Agreement: processor + joint-controller terms, perpetual k≥25 aggregate licence, POS-feed rider, brand-outreach blessing, purpose-change assessment, signage, chain impact assessment | Plaček management |
| EuroOil / ČEPRO | Mandate → **direct** M&M↔ČEPRO agreement (same stack) + gold-station POS rider; comms via Moris until waived; any fee shaped to avoid public-procurement friction | ČEPRO |
| CPI | Portfolio rider on the existing contract + impact assessment (the only counterparty with one); common areas only | CPI asset management |
| Regional co-op | Full stack per co-op — central cannot bind members | The co-op's own board |
| Teta | Full stack, scoped explicitly to company-operated stores | Teta / parent |
| Tobacco-funded screens | Brand co-funding letter + **retailer disclosure before any brand sees anything** | Each brand |
| AI-data buyers | Eval-set/API licence + no-re-identification covenant + provenance sheet (what was collected under which instrument). Nothing row-level ever leaves | Buyer |
| Own venues / vending | Site-host agreement with an explicit data-rights waiver — this is what makes us, not the venue, the party entitled to commercialise the output | Venue owner |

## The Data Act lever (decision-relevant, do not lose)

Where the **retailer pays** for the analytics, they are the statutory "User" of the connected
devices and may restrict how we monetise the output — even anonymised. Where **we pay** for site
access under a site-host agreement with an explicit waiver, we hold that position. This is the
legal engine behind inverted "we pay you" deals, and it is the hidden cost of charging retailers
(see `03-business-model-fork.md`). Either way: make it explicit in the contract, never implicit.

## Definition of done (18 Feb)

≥3 signed rights instruments · zero external claims that fail the forwardability litmus · the
compliance pack surviving at least one retailer DPO review unchanged.
