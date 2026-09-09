# Retailer paper: dependency map against the brand paper set

**Purpose.** The brand documents in this folder make promises that only a retailer instrument can
keep. This file lists every one of them, so that whoever drafts the retailer paper (mandate letter
→ study rights → chain licence / DPA) can make it fit: legally, commercially, and in wording.

**The one rule.** Every brand document is contingent on a defined term it does not control:
**Datová smlouva / Data Agreement**, meaning *the agreement between the Provider and the Chain
permitting the Provider to supply data within the scope of Schedule 1*. The retailer paper **is**
that instrument. If it cannot satisfy a row below, the matching brand clause has to change first,
not be quietly breached later.

**How to use this.** Work top down. Blockers first: three of them can void brand contracts we have
already signed. Then the calendar, then the shared definitions, then phrasing.

Severity: **BLOCKER** (a brand contract fails or we breach) · **HIGH** (a commercial device stops
working) · **MED** (friction, fixable later).

Brand-side references: `01` = study order, `02` = founding seat order, `03` = LOI,
`04` = conditional order. Article numbers are identical in the CZ and EN versions.

---

## A. Blockers, resolve before any retailer paper is signed

### RD-1 · The existing mandate template gives the retailer the majority of revenue · BLOCKER

`templates/one-pager/mandate-letter-cz.md` art. 5 reads: *"případná budoucí spolupráce předpokládá,
že **většina výnosů z datových produktů náleží Řetězci**"*.

The brand seat (`02` art. 9, 11) sells at 1,000,000 CZK year 1 and 1,500,000 CZK on renewal with
**no revenue share of any kind**. This is not a drafting slip on either side, it is two different
business models in two live documents:

- **D1** decided brands-only: retailers are pure supply, they are never asked for money and they
  get 0% of the brand euro.
- **C1 ruling (26 Aug)**: opening ask is 0% share, fallback 1 is ≤40% **on retailer-attributed
  products only**, and *the cross-retailer aggregate and syndicated channel reads are never shared
  at any rung*. A category read is exactly that syndicated aggregate.
- The mandate template predates both and still says the opposite.

**Required:** the retailer paper must classify the category read as a **syndicated aggregate
product, 100% M&M**, and any share language must be confined to retailer-attributed / RMN products.
Fix the mandate template in the same pass, or the first retailer who reads art. 5 has a written
claim on the brand revenue we are booking. **C1 is still formally open, so this needs a founder
ruling, not a drafting decision.**

### RD-2 · The mandate forbids selling; two of our four documents are sales · BLOCKER

Mandate template art. 3: *"M&M v rámci mandátu **nesmí uzavřít žádný prodej**. Výstupem jsou pouze
předběžné objednávky / vyjádření zájmu podmíněné uzavřením definitivní dohody s Řetězcem."*

Against the brand set:

| Doc | Is it a sale? | Signable during a mandate? |
|---|---|---|
| `03` LOI | No. Non-binding except naming + confidentiality. | **Yes**, this is what the mandate contemplates |
| `04` conditional order | Contract subject to a condition precedent; no fee until Activation | **Probably**, but confirm |
| `01` study order | **Yes.** A concluded contract with a price, merely contingent on delivery | **No, as the mandate is currently worded** |
| `02` seat order | **Yes.** Same. | **No, as currently worded** |

**Required:** either the mandate expressly permits **contingent orders** (recommended wording:
*"objednávky, jejichž účinnost je odložena do uzavření definitivní dohody"*), or the sequencing
rule is enforced: pre-DPA we sign LOIs only. This has direct revenue consequences, because the
2026 study invoice is the fallback that carries the €80k goal if the mandate slips
(`brands-plan.md` §0).

### RD-3 · Naming the chain to brands · BLOCKER

Every brand document names the Chain: `01` art. 1.1, `02` Schedule 1, `03` art. 1. The mandate
template art. 4 gives the retailer the choice of being named or described neutrally
(`{{approved_fallback}}`).

**Required:** explicit permission to name the Chain to brand subscribers and in brand contracts.
If the retailer refuses, Schedule 1 must switch to the approved fallback phrasing in all four
documents, and note that a masked Schedule 1 weakens `02` art. 10.5 (the channel-read caveat) and
makes the whole set harder to sell. Decide before the paper goes out, not after.

---

## B. Rights and scope

| # | Brand clause | What the retailer paper must do | Sev |
|---|---|---|---|
| **RD-4** | `02` definitions, `01` 5.1: "Data Agreement" must have a determinable **in-force date** | Give a clean effective date. Activation, the invoice trigger and both long stops all hang off it. Avoid "effective on completion of rollout" style wording. | HIGH |
| **RD-5** | `02` 2.1 + Schedule 1 scope (channel × competitive set × chain) | Licence data **at least as wide** as the widest brand Schedule 1 sold on that chain. Retailer scope narrower than brand scope is an immediate breach. Use a scope annex the brand Schedule 1 can be a strict subset of. | BLOCKER |
| **RD-6** | `02` 11.1 to 11.2: subscription auto-renews at 1.5M CZK, held **indefinitely** while continuous | The chain licence must be **perpetual and irrevocable** for the de-identified k≥25 aggregate. `07-ws-legal-rights.md` is explicit: concede economics, control and dashboards, never this clause. A terminable licence cannot support an auto-renewing brand subscription, and it also reprices the company (a rented licence values at ~3 to 4× revenue). | BLOCKER |
| **RD-7** | `02` 8.1: 90 days to substitute an equivalent chain, plus 5 business days to notify | Retailer termination notice must be **≥ 95 days**, ideally 6 months. Shorter notice makes art. 8 impossible to perform and converts every retailer exit into a brand refund. | HIGH |
| **RD-8** | `02` 10.1: brand may disclose to **one named agency of record** | Permit onward disclosure to a subscriber's named agency on back-to-back terms. A "subscriber only" restriction breaches 10.1 and closes the agency-master path (R5). | HIGH |
| **RD-9** | `01` 6.2, `02` 10.1: publication needs **our** written consent | Define a publication approval path on the retailer side too, with a deadline. Without it we can never say yes to a brand, and the clause is decorative. | MED |
| **RD-10** | `02` 4: brand-facing **portal** access | Permit a brand-facing portal and define what it may display per chain. Currently unaddressed anywhere on the retailer side. | HIGH |
| **RD-11** | `02` 10.5: no competitor-level cuts where only one chain is instrumented | Mirror the toxic-cut prohibition. The two documents must agree on exactly when named-competitor comparison becomes permitted (our rule: ≥2 chains in the set). | HIGH |
| **RD-12** | `02` 10.3, `01` 3.1: **k≥25** minimum reported segment | Retailer must accept k≥25. If a DPO demands k≥50, the brand deliverable spec and every density calculation change. Agree the number once, in both papers. | HIGH |

---

## C. Density, the escrow, and the store estate

The density escrow (`02` art. 7) is the trust device of the entire brand pillar. It is also the
clause most exposed to the retailer paper.

| # | Brand clause | What the retailer paper must do | Sev |
|---|---|---|---|
| **RD-13** | `02` 7.1: **30 Rights-Clean Outlets** on 30 Jun 2027, else full refund | Commit to a **store list with dated installation milestones** reaching ≥30 outlets carrying the relevant competitive set. Retailer delay converts directly into our refund. `retailers-execution-guide.md` 11.1: do not round up. | BLOCKER |
| **RD-14** | `02` definitions: "Rights-Clean Outlet" needs rights valid **45 consecutive days** | Rights must be in force per outlet by **~16 May 2027** for that outlet to count on 30 Jun. This is the real deadline, not 30 June. | HIGH |
| **RD-15** | `02` 6.1, 6.3: density statement at Activation, **monthly** thereafter | Carve out of confidentiality the right to disclose **instrumented outlet counts** to subscribers. Identity of stores is not needed; the count is. | HIGH |
| **RD-16** | Same | **EuroOil stations are tenant-operated** (`clients/eurooil/facts.yaml`). Tenants sell their own dry goods and camera installation may need per-tenant consent. The retailer paper must say **who obtains tenant consent, by when, and what happens if a tenant refuses**. The facts file warns: verify before any escrow language is signed. | BLOCKER |
| **RD-17** | Same | **Teta has a substantial franchised share**; scope explicitly to company-operated stores. Same problem, different chain. | HIGH |
| **RD-18** | `04` 2.2: a chain counts as instrumented at **≥10 Rights-Clean Outlets** | Every retailer instrument must make this measurable the same way. This argues strongly for **one standard retailer instrument** rather than bespoke drafting per chain. | HIGH |
| **RD-19** | `02` 3.2: quarterly delivery within 30 days of quarter end | Limit the retailer's right to suspend the data flow. An unrestricted suspension right triggers our art. 8 and, through it, refunds. | HIGH |
| **RD-20** | Signage | Two-layer signage is a condition of lawful processing. Recommend making **signage in place** an explicit element of "rights-clean" in both papers, so the definitions cannot drift apart. | MED |

---

## D. Data protection and regulatory

| # | Brand clause | What the retailer paper must do | Sev |
|---|---|---|---|
| **RD-21** | `02` 10.4, `01` 3.3: *"we process no personal data on the Customer's behalf, no brand-side DPA required"* | This is a **selling point** and it must stay true. It holds only if the retailer paper keeps the architecture anonymous at output. Riding retailer cameras makes us a **processor for the retailer**; the retailer paper must then carve out, expressly, our right to commercialise the de-identified aggregate. | BLOCKER |
| **RD-22** | Whole set | **Data Act:** where the retailer **pays** for the analytics they are the statutory User and may restrict how we monetise the output, even anonymised. D1 (retailers never pay) preserves our position. If any retailer paper has the retailer paying us, that position is lost and the brand papers may become unsellable. Keep the barter shape, or take an explicit waiver. | BLOCKER |
| **RD-23** | `02` 10.3: no facial recognition, no biometric templates, age estimated with error bands | Identical wording in the retailer paper. Two different formulations of the same promise is what a DPO finds and pulls on. | HIGH |
| **RD-24** | Prohibited fields | Special-category inferences are deleted and purged. The retailer DPIA and our brand warranty must describe the same field set. | HIGH |
| **RD-25** | Purpose change | Existing CCTV is lawful for property protection; analytics is a **purpose change** needing its own compatibility assessment, DPIA and signage, and **we must hold our own legal analysis** rather than shelter under the retailer's. The compliance pack is the deliverable that makes this true per chain. | HIGH |
| **RD-26** | `01` 3.4, `02` 10.5 | POS-derived purchase data feeds the brand deliverable. Mandate art. 2 excludes the retailer's **trading data** (margins, sell-through, price sensitivity) from any material. The retailer paper must list **exactly which POS fields may reach a brand deliverable**, or we cannot safely ship "segment × engagement × purchase". | BLOCKER |

---

## E. Calendar dependencies

Brand paper long stops are already signed dates. The retailer paper has to beat them.

| Date | What must be true | Which brand clause fails otherwise |
|---|---|---|
| **~16 May 2027** | Rights in force at ≥30 outlets (45-day rule) | `02` 7.1 refund fires |
| **30 Jun 2027** | ≥30 Rights-Clean Outlets carrying the set | `02` 7.1, the escrow |
| **31 Mar 2027** | Data Agreement in force | `01` 5.2 and `02` 2.4: both orders lapse, nothing owed |
| **31 Dec 2027** | ≥2 instrumented chains | `04` 6.1: conditional order lapses, seat reservation falls away |
| **31 Dec 2026** | Study order signed (for the 100% credit) | `01` 4.3 credit is lost, `03` 4.3 founding price logic weakens |
| Activation | Density statement delivered | `02` 6.1, 6.2: no invoice may issue before this |

Also gating, and outside the paper: **ČEPRO public procurement** (O3, fee shape must avoid
procurement friction, else timing blows every date above), **Moris routing** (O1, waiver versus
route-through determines who can sign the EuroOil paper at all), and the **written confirmation of
the brand-approach greenlight**, still verbal as of 4 Sep 2026.

---

## F. Shared definitions: keep these character-identical

Drift here is how two correct documents produce a breach. Recommend a **single definitions annex
referenced by both papers** rather than parallel drafting.

| Term (CZ / EN) | Defined in | Note |
|---|---|---|
| Datová smlouva / Data Agreement | `02` art. 1 | The retailer instrument is this term. It must self-identify as such. |
| Čistá provozovna / Rights-Clean Outlet | `02` art. 1 | Device functioning + valid rights + 45 consecutive days. Consider adding signage (RD-20). |
| Konkurenční skupina / Competitive Set | `02` art. 1, Schedule 1 | Channel × competitive set. The retailer scope annex must use the same carving. |
| Síť / Chain | `02` art. 1 | Naming permission per RD-3. |
| Aktivace / Activation | `02` art. 1 | First day of the month after the Data Agreement is in force. |
| Den měření hustoty / Density Test Date | `02` art. 1, `04` 5.1 | 30 Jun 2027 for seats; Activation + 6 months for conditional orders. |
| k≥25 | `02` 10.3 | One number, both papers. |

---

## G. Phrasing and consistency

The brand papers will be read by a retailer eventually (a brand's legal team forwards things), and
the retailer paper will be read by brands. Both must survive the forwardability litmus.

1. **Channel read, never benchmark or market average**, wherever only one chain is instrumented.
   `02` 10.5 is the brand-side statement of this; the retailer paper should not contradict it by
   promising the retailer "market benchmarks" it cannot have until ≥2 chains exist.
2. **"Anonymous insights, built on momentary processing"** is the licensed phrasing. Never warrant
   end-to-end anonymity in either contract (`02` 10.2, `01` 7.2).
3. **Retailer-as-monetizer** in retailer materials versus **no revenue share** in the brand
   contract. These coexist only under the C1 split (RD-1). Until C1 is ruled, keep retailer share
   language frozen.
4. **No exclusivity, either side.** `02` 5.3 says so out loud to brands. The retailer paper uses
   founding data-partner slots (1 to 2 chains per category) as its honest scarcity, per C3. Never
   1-brand or 1-retailer exclusivity in writing.
5. **Formal "Vy"** and the same defined-term capitalisation convention in both Czech papers.
6. **Czech law, courts of Prague, signed version prevails** (`02` 12). Match it, especially for
   ČEPRO, to avoid a conflict-of-law tangle across two linked instruments.
7. **Modeled versus measured.** Anything not measured is labelled modelled in every output
   (`01` 3.4). The EuroOil tobacco decks currently use modelled POS; the retailer paper should not
   imply those were measured.

---

## H. What this file needs next

- **C1 founder ruling** (RD-1) is the single biggest unlock. Everything about share language waits on it.
- **Mandate template rewrite** (RD-1, RD-2, RD-3) — three conflicts in a template that is
  currently the thing we hand a retailer in the room.
- **Tenant-consent mechanism for EuroOil** (RD-16) before the escrow number is confirmed at Activation.
- **POS field list** (RD-26) before any category read ships.
- Once the retailer paper exists, walk this file top to bottom and mark each row satisfied,
  amended, or accepted as a known gap. Do not leave a row unmarked.
