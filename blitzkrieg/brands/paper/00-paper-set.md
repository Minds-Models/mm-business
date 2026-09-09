# Brands paper set: commercial spec + counsel engagement (task 1.4)

**Status:** drafts complete 4 Sep 2026, not yet reviewed by counsel (no firm retained).
**Owner:** Ondřej (paper/process) · commercial terms decided by founders 4 Sep 2026.
**Forcing date:** JTI meeting, week of 7 Sep 2026, ČEPRO-brokered
(`clients/eurooil/facts.yaml` → `deal.next_step`). These documents exist for that meeting.

Four documents, each in its own file with three parts: a **counsel brief** (what is load-bearing,
what must not be touched), a **Czech draft**, and an **English draft**. Only one language version
is signed; the signed one prevails.

| # | File | Instrument |
|---|---|---|
| 1 | [`01-study-order.md`](01-study-order.md) | 2026 study order (objednávka studie) |
| 2 | [`02-founding-seat-order.md`](02-founding-seat-order.md) | 2027 founding seat order with density escrow |
| 3 | [`03-loi.md`](03-loi.md) | Letter of intent (prohlášení o záměru) |
| 4 | [`04-conditional-order.md`](04-conditional-order.md) | Conditional 2027 order (activates at 2 chains) |

Cross-pillar: **[`05-retailer-paper-dependencies.md`](05-retailer-paper-dependencies.md)** lists every
promise in these four documents that only a retailer instrument can keep. Read it before drafting
the mandate letter, study rights or chain licence. It currently flags three blockers.

**Clean Czech versions for signature and PDF render live in [`cz/`](cz/)**, one file per
instrument, briefs stripped, proper Czech typography. **Edit the Part B drafts here first**, then
mirror into `cz/`; the combined files stay canonical.

**Naming note.** Task 1.4 calls document 1 a "2026 study **invoice**". An invoice is not a signed
instrument and commits nothing. The thing that commits a brand's 2026 budget is a signed **order**
against which a purchase order is raised; the invoice follows. Drafted accordingly.

---

## The decided commercial spec

Every number below is a founder decision of 4 Sep 2026. Counsel implements, does not revisit.

| Term | Decision | Authority |
|---|---|---|
| **Scope unit** | Channel × **competitive set**, named in Schedule 1 | founder, 4 Sep |
| **Cap** | 3 subscribers per competitive set. **No subdivision of a named set during the term.** | D17, C3 |
| **Exclusivity** | Never, at any rung. Stated affirmatively in the document. | C3, C11 |
| **2026 study** | **300,000 CZK** (mid-band of 150–500k). Not a seat. Not refundable once delivered. | D17 |
| **2027 founding seat** | **1,000,000 CZK** year 1 (≈ €40.8k, above the €40k counting floor) | D17 |
| **Study credit** | **100%** of the study fee credits against the seat, if the 2027 order is signed alongside | founder, 4 Sep |
| **Invoicing** | Two equal invoices, net 30. Second issued only after the density test passes. | founder, 4 Sep |
| **Delivery** | Quarterly read (Excel + written interpretation + review call) **+ dashboard access** | founder, 4 Sep |
| **Licence** | Brand's own staff **+ one named agency of record**, back-to-back terms | founder, 4 Sep |
| **Density escrow** | <30 rights-clean stations carrying the set on **30 Jun 2027** → second invoice never issued, first refunded in full | founder, 4 Sep |
| **Density figure** | **Confirmed at activation**, not fixed at signature | founder, 4 Sep |
| **Rights failure** | 90 days to substitute an equivalent chain in the same set; failing that, pro-rata refund at the brand's election | founder, 4 Sep |
| **Renewal** | **1,500,000 CZK/yr**, named in the document, held while continuously subscribed, **for the read they bought**. 60 days' notice. | founder, 4 Sep |
| **Scope expansion** | More chains, more stations, receipt-level data = a different product, priced as an upgrade | founder, 4 Sep |
| **Conditional trigger** | Activates when **≥2 instrumented chains** carry the set | founder, 4 Sep |
| **LOI extracts** | Naming permission (retailer + investors under NDA), indicative 2027 budget band, reservation of 1 of 3 seats + 3-month early access | founder, 4 Sep |
| **Governing law** | Czech law, courts of Prague | default |
| **Payment terms** | Net 30 (expect a push to 60) | default |
| **Liability cap** | Fees paid in the preceding 12 months | default |

### Worked example (JTI at EuroOil)

```
Scope        CZ petrol & convenience channel · nicotine competitive set · EuroOil estate
Seats        3 of 4 candidate houses (PMI, JTI, BAT, Imperial)
2026         300,000 CZK study, signed and PO-raised in 2026
2027         1,000,000 CZK seat, less 300,000 credit = 700,000
             invoiced 350,000 + 350,000
30 Jun 27    <30 rights-clean stations -> second 350,000 never issued,
             first 350,000 refunded in full
2028+        1,500,000 CZK/yr, held
```

### Why the renewal number is scoped, not absolute

"Founding members never pay list" would otherwise cap PMI, JTI and BAT at 1.5M CZK forever against
the 8M CZK T2 channel-currency line in `../../strategy/2026-08-19-base-strategy/04-revenue-architecture.md`
(≈ €327k per brand, the largest block in the plan). The price is held **for the read named in
Schedule 1** (one chain, ~50 stations). A T2 currency across ≥2 chains and 150–300 stations is a
different product. The Schedule 1 scope definition is what protects that line: **if counsel
loosens the scope definition, the plan loses ~€265k per tobacco brand.**

---

## Parties block

**Minds & Models, s.r.o.**
IČO 22265252 · DIČ CZ22265252 · základní kapitál 1 000 Kč
Sídlo: Hlubočepská 85/64, Hlubočepy, 152 00 Praha
Datová schránka: cy5s884

⚠ **Still needed before signature** (do not invent, ask the founders):- Registration court and file number (spisová značka, Městský soud v Praze, oddíl C, vložka …)
- Name of the jednatel signing
- Bank account (CZK) and IBAN
- Counterparty legal entity per brand: verify each from the commercial register, never from memory

---

## Terms shared by all four documents

1. **Anonymous aggregates only**, minimum 25 persons per reported segment (k≥25).
2. **No personal data of the brand is processed**, therefore **no brand-side DPA is required.**
   State this affirmatively: it is what makes their legal review fast, and it is the thing
   competitors riding CCTV cannot say (`../../strategy/2026-08-19-base-strategy/07-ws-legal-rights.md`).
3. **No facial recognition, no identities, no biometric templates.** Age is estimated with error
   bands; never "age detection".
4. **No competitor-level cuts** are promised in any set where only one chain is instrumented.
5. **Not exclusive.** Other brands in the set may subscribe. Said out loud, in the document.
6. **Method and delivery are warranted. Anonymity end-to-end is not**, and business outcomes are not.
7. Czech law, courts of Prague. Both language versions produced, one signed, the signed one prevails.
8. **Long stops:** the study and seat orders lapse if the Data Agreement is not in force by
   **31 March 2027**; the conditional order by **31 December 2027**. Lapse leaves nothing owed.

---

## Counsel engagement brief (overall)

### What counsel is being hired to do

Dress four drafts that already carry their commercial substance. Per 1.4: *counsel dresses the
drafts; they do not invent them.* Drafting from a blank page costs roughly 3× and takes ~2 weeks;
this batch should take days.

### Seven questions we actually need answered

1. **Structure.** Is a standalone `objednávka` sufficient under Czech law for documents 1, 2 and 4,
   or do we need a `rámcová smlouva` with orders underneath? We prefer the shortest instrument a
   category manager can sign without legal review.
2. **Conditional order enforceability.** Document 4 activates automatically on a future uncertain
   event (≥2 instrumented chains). Confirm this works as an `odkládací podmínka` and that the
   trigger as drafted is objectively determinable.
3. **Partial-binding LOI.** Document 3 is non-binding **except** confidentiality and the naming
   permission, which must bind. Confirm that structure survives Czech law.
4. **Escrow mechanics.** The refund is of an invoice already paid. Confirm the credit-note and
   VAT mechanics, and that the refund does not create a revenue-recognition problem for us.
5. **Data protection.** Confirm the "no brand-side DPA required" position, given the output is
   anonymous aggregates at k≥25 and we process no personal data on the brand's behalf.
6. **⚠ Tobacco advertising law.** For the JTI/PMI/BAT worked example: confirm that nothing in the
   seat order constitutes tobacco advertising, promotion or sponsorship. The governing statute is
   **zákon č. 40/1995 Sb., o regulaci reklamy (§ 3)**; zák. č. 65/2017 Sb. is secondary (sales and
   point-of-sale restrictions). We are selling measurement to the brand, not communicating to
   consumers. **Tobacco legal is the real gatekeeper on this track** (brands guide 1.3): a short
   written confirmation from counsel is itself a sales document.
7. **Naming permission.** Confirm the LOI's naming permission is sufficient for us to name the
   brand to a retailer and to investors under NDA.
8. **Competition law.** The same read is sold to up to three competing houses per set. Confirm the
   syndicated model complies with the information-exchange rules (§ 3 zák. č. 143/2001 Sb. /
   Art. 101 TFEU); Nielsen-type retail panels are the precedent. Detail in the document 2 brief.

### What counsel must NOT change

> These are the commercial devices. Altering them destroys the deal, not just the wording.

- **Do not soften the escrow.** No "commercially reasonable efforts", no force-majeure carve-out,
  no conditions precedent, no notice hurdles. Its entire value is that it is unconditional and
  legible in one read. *If a brand's lawyer needs 20 minutes to understand the remedy, it stops
  being reassuring* (1.4).
- **Do not add exclusivity**, in any form, including as an option or a right of first refusal.
  Category exclusivity is banned company-wide (C3, C11); it is the foundation of the syndication
  model and threatening it in writing will be remembered by compliance-heavy tobacco buyers.
- **Do not warrant anonymity end to end.** Never in a contract. The licensed claim is
  "anonymous insights, built on momentary processing".
- **Do not loosen the Schedule 1 scope definition** (see the renewal note above).
- **Do not add price indexation or escalation** to the renewal. The named number is the device.
- **Do not make the naming permission mutual.** We need theirs; they do not need ours.
- **Do not lengthen.** Each document must fit what a category manager reads in one sitting.
  Length is not protection here; it is a delay.

### Known negotiation points, flagged in advance

- **Net 30 will be pushed to 60 or 90** by a multinational subsidiary. Fallback: 45.
- **Document 4 auto-activates** rather than giving the brand a confirmation window. This is the
  harder ask and the most likely clause to be resisted. Do not concede it without a founder call:  a 30-day confirmation window turns the order into an option and it counts for materially less
  in fundraise DD.
- **The agency licence** will be pushed toward "our agencies" plural. Hold at one named agency.

---

## Open items that are not counsel's problem

- **⚠ EuroOil stations are tenant-operated.** `clients/eurooil/facts.yaml` warns in terms:  *"verify before any escrow language is signed."* Tenants sell their own dry goods and camera
  installation may need per-tenant consent rather than one central ČEPRO signature. This is why
  the density figure is **confirmed at activation** rather than fixed at signature. Verify the
  consent path before activation, not before signature.
- **ČEPRO tender 205/25/OCN explicitly excludes tobacco**, so we do not yet know who controls the
  tobacco planogram at these sites. Relevant to the JTI conversation, not to the paper.
- **Brand-approach greenlight is verbal only** (26 Aug 2026), written confirmation pending. Canon
  rule: the retailer hears it from us first. Send the confirmation email **before** the JTI meeting.
- **R4 (19 Sep)**: how a brand commits unspent 2026 budget. Document 1 is drafted on the
  assumption that a signed order plus a PO raised in 2026 commits the 2026 budget even where the
  invoice lands later. Confirm with the advisor.
- **RATE-1 (11 Oct)**: measured sessions/store/month and receipt-link yield. The 30-station
  escrow figure is a forecast until this lands. Do not round up
  (`../retailers/retailers-execution-guide.md` 11.1).
- **C5 labelling.** A signed conditional order (document 4) is SIGNED but contingent. It is not
  active contracted ARR. Label it distinctly in any deck or data room.

---

## Review log

**4 Sep 2026, second pass (legality, reasoning, wording).** Fixes applied to all language versions:

1. **Missing long stop in the seat order.** The study and conditional orders lapsed if the Data
   Agreement never arrived; the seat order floated forever. Added art. 2.4 (31 March 2027), and
   art. 6.2 of the conditional order disapplies it there in favour of its own 31 December 2027.
2. **Invoice-timing bug (seat art. 9.2).** The first invoice was tied to the expiry of the art. 6.2
   window, but that window only exists when the density statement forecasts under 30 outlets; with
   a healthy forecast no invoice was ever due. Now: upon Activation, or after the window where one
   runs.
3. **Wrong statute in the tobacco brief.** Tobacco advertising, promotion and sponsorship are
   governed by zákon č. 40/1995 Sb., o regulaci reklamy (§ 3), not zák. č. 65/2017 Sb. (that one is
   sales and smoking restrictions, secondary here). Corrected in both briefs.
4. **Competition-law question added.** Selling one read to three competing houses is an
   information-exchange fact pattern (§ 3 zák. č. 143/2001 Sb. / Art. 101 TFEU); aggregated
   anonymised historic panels are the established precedent, but tobacco legal will ask.
5. **Liability caps got a savings clause** (study 7.1, seat 10.6): the cap yields where the law
   does not permit contractual limitation (cf. § 2898 NOZ), which keeps the whole clause from
   being attacked as invalid.
6. **LOI price-window mismatch.** The founding price expired 31 Dec 2026 while the seat
   reservation ran to 31 Mar 2027, making the reservation's last three months worthless. Founding
   price now follows the reservation; the 31 Dec date stays only where it belongs, on the study
   credit (2026 budget logic).
