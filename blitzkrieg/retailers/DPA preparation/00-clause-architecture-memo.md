# Data Partnership Agreement: clause architecture memo

**Status:** v1.0, 4 Sep 2026. Internal. This is the brief the Czech draft is written from, and the
brief external counsel works from.
**Scope decided with founder, 4 Sep:** counterparty-neutral golden template · rights instrument is
the priority layer · labelled/aggregated share split · memo first, then Czech clean draft.
**Governing canon:** D1, D16, D17, C1 ruling (26 Aug), `07-ws-legal-rights.md`,
`14-retailer-data-objection.md`, retailers execution guide §1.1 and the ownership stack.

---

## 0. The one-paragraph statement of the deal

The Customer keeps its footage and its till data and never pays us anything. We install nothing new
and take title to nothing of theirs. We process their camera streams at the edge, hand them a free
platform over their own stores, and in exchange they grant us a perpetual, irrevocable,
non-exclusive licence to the de-identified k>=25 aggregate that comes out of the far end. That
aggregate is chain-masked by default and is ours to commercialise at 0% share. Anything published
with their name on it is a Labelled Output, requires their written per-cut approval, and carries a
30% revenue share to them.

Everything in this memo exists to make those five sentences enforceable.

---

## 1. Instrument architecture, deliberately lean

**Design constraint from the founder:** arriving with a brutal stack of agreements demotivates the
counterparty before the conversation starts. Correct, and it is also how you lose control of the
negotiation: every extra document is another reviewer with another veto.

**One agreement, one signature, three annexes.**

| Document | Length | Reader | Purpose |
|---|---|---|---|
| **Smlouva o datovém partnerství** (Data Partnership Agreement, "DPA") | 8–10 pp | Commercial lead + their counsel | Everything commercial and every right |
| **Příloha 1: Specifikace** | 2–3 pp | Their IT + ops | Sites, camera access, data specification, POS feed, delivery |
| **Příloha 2: Zpracování osobních údajů** | 3–4 pp | Their DPO | Art. 28 processor terms and Art. 26 joint-controller arrangement in one annex |
| **Příloha 3: Komerční podmínky** | 1 p | Commercial lead | Share %, Labelled Output list, embargoed categories, veto scope |

**Four documents, not six.** Art. 28 and Art. 26 go into a single annex because splitting them
doubles the DPO's reading without adding protection. The share sits alone in Příloha 3 so the
number can be changed per counterparty without reopening the body of the contract, which is exactly
the headroom the founder asked for.

**The compliance pack is not a contract annex.** DPIA, LIA, the Art. 6(4) purpose-change memo,
signage artwork and counsel's AI-Act letter are handed to their DPO as a **gift**, referenced in
the DPA by one sentence ("M&M will deliver the compliance pack within X days of signature"). This
is the single biggest simplification available: it turns four documents the retailer would have to
negotiate into four documents they receive for free. It also keeps us in control of their framing
of the legal basis, which is worth more than any clause.

**The rung below.** The 60-day mandate letter stays as the smallest yes, a separate one-pager, not
part of this stack. See §8 on the defect that must be fixed in it first.

---

## 2. The subject matter, defined precisely

Bad definitions are how rights leak. Four defined terms carry the whole agreement, and every other
clause refers back to them.

- **Camera Data.** Video and image streams from the Customer's cameras. Processed transiently at
  the edge. Never copied, never egressed, deleted after extraction, 72-hour hard cap. **The
  Customer's, always. M&M takes no title and receives no copy.**
- **POS Data.** Transaction-level receipt data licensed to M&M for matching only. **The
  Customer's, always.** Carries prices paid. Expressly excludes cost, margin, sell-through,
  wholesale price and elasticity (the trading-data firewall, §6).
- **Session Records.** Record-level derived rows produced by extraction. The Customer's data,
  processed by M&M. 30-day retention. Never sold, never leave M&M's environment as rows.
- **Aggregated Output.** De-identified statistical output with k>=25 suppression on every
  published cell and time coarsened to day-part, in which neither any individual nor the Customer
  is identifiable. **This is the only layer M&M commercialises, and the only layer the licence
  touches.**
- **Labelled Output.** Any output in which the Customer is named or reasonably identifiable.
  Requires written per-cut approval. Carries the share.

The Aggregated / Labelled distinction is the spine of the whole document. It is what allows us to
concede generously on one side (veto, lag, embargo, share, approval) while conceding nothing on the
other. Draft every protection clause to attach to Labelled Output only, and check each one twice.

---

## 3. Roles under GDPR: the mapping, and why it is this way

Three operations, three roles. Recorded expressly in Příloha 2 so that nobody has to infer it later.

| # | Operation | Role | Why |
|---|---|---|---|
| 1 | Capture and edge extraction (Camera Data → Session Records) | **Joint controllers**, Art. 26 | Purpose change on existing CCTV is jointly determined: they consent to the new purpose, we design the means. **Never pure processor here.** Art. 28(10): a processor using output for its own purposes becomes controller by operation of law and is in breach. That single subsection would end the business model |
| 2 | Own-store platform, dashboard, chatbot, counting, ops reports | **Processor**, Art. 28 | We act on their documented instructions, for their purposes, over their data |
| 3 | Anonymisation and the Aggregated Output | **M&M independent controller** for the anonymisation step; the resulting Aggregated Output is outside GDPR entirely | The step is processing for our own purpose and must be authorised as such. What comes out, if genuinely anonymous, is not personal data, so the licence rests on contract, database right and confidentiality, not on data-protection law |

**The load-bearing consequence.** The perpetual licence is enforceable only if the Aggregated
Output is genuinely anonymous. If it is not, the licence is void, we are a processor
commercialising a controller's data, and the exposure is regulatory rather than contractual. This
is why the anonymity architecture (k>=25 in code, no cross-visit identification, coarsened
timestamps, TTLs that demonstrably run, no record-level egress) is not an annex to the rights
clause. It **is** the foundation of the rights clause. Verification checklist for engineering sits
in §9.

**Drafting note.** Never warrant end-to-end anonymity (`07-ws-legal-rights.md`). Warrant the
mechanism, not the outcome: transient processing, no facial recognition, no biometric templates,
no cross-visit identification, no retention of raw frames beyond 72 hours, k>=25 on every published
cell. Those are checkable and true. "Anonymous" as a bare adjective is neither.

---

## 4. The rights clause, the only non-negotiable

### 4.1 Belt, braces and a second belt

Three independent legal foundations, because any one of them can be attacked:

1. **Acknowledgement of authorship and database right.** The Aggregated Output is a database
   created by M&M through its own substantial investment in obtaining, verifying and presenting the
   contents. M&M is the maker for the purposes of the sui generis database right (CZ: §88 et seq.
   autorský zákon, implementing Directive 96/9/EC). The Customer acknowledges this and does not
   contest it.
2. **Perpetual, irrevocable, worldwide, non-exclusive, sub-licensable, royalty-free licence** from
   the Customer to M&M to use, reproduce, adapt, combine with other data, publish, distribute,
   licence and sell the Aggregated Output, and to authorise others to do so.
3. **Assignment in the alternative.** To the extent the Customer is ever held to hold any right in
   the Aggregated Output, it assigns that right to M&M, and where assignment is not permitted by
   law, grants the licence in (2) as a fallback.

Why all three: (1) makes the asset diligenceable in a raise without depending on the counterparty's
continued goodwill, (2) is what the retailer's counsel will actually negotiate, (3) closes the gap
if a court ever recharacterises the arrangement. Cost of including all three: about six lines.

### 4.2 What perpetuity does and does not mean, in the text

Write the limits into the clause itself, in the same paragraph as the word "perpetual". This is
the guide's own instinct and it is right: the word alarms people far less when it arrives already
caged.

- Applies **only** to Aggregated Output. Nothing else.
- **Survives termination for Aggregated Output already created.** New data stops flowing on the
  termination date. Outputs already published do not retroactively unwind.
- **Non-exclusive.** The Customer may grant the same right to anyone else tomorrow. Say this
  expressly: it is the cheapest reassurance in the document and it is what distinguishes us from an
  exclusivity grab.
- **Not a transfer of ownership** of Camera Data, POS Data or Session Records.
- Chain-masked by default, k>=25 on every published cell.

### 4.3 The fallback ladder if their counsel refuses perpetuity

Pre-authorised, in order. Never drop the clause to close the week; park and escalate.

1. Perpetual, but expressly chain-masked and k>=25, plus the aggregate audit right (§6.8) offered
   in the same breath.
2. Perpetual, plus a named category embargo of their choosing, plus publication lag extended.
3. Perpetual for Aggregated Output created during the term, with new creation ceasing on
   termination. (This is already the drafted position, so it is a concession only in appearance.
   Use it as a closing gift.)
4. If still refused: **park and escalate.** A term-limited licence prices the company as an
   enablement vendor at roughly 4–8x rather than a measurement currency at 8–12x. It is the single
   line in the model that moves the exit number most.

### 4.4 Cross-conditioning: the clause nobody thinks of and everybody needs

The platform is provided at zero fee **expressly as consideration for the licence**. Write it that
way in the recitals and again in the fee clause. Then:

> If the licence in Article X terminates, is revoked, is held unenforceable, or the Customer
> asserts any right inconsistent with it, M&M may terminate the provision of the Platform with
> 30 days' notice and without liability.

Without this, the failure mode is not a dispute, it is silence: they take the free platform, the
free compliance pack and the free reporting, and simply never grant the rights. Cross-conditioning
is what makes the barter a barter rather than a gift.

---

## 5. Economics: the labelled / aggregated split

**Founder ruling, 4 Sep (closes C1):**

| Product class | Share to Customer |
|---|---|
| **Aggregated Output** (cross-retailer aggregate, syndicated channel reads, benchmarks) | **0%, always** |
| **Labelled Output** (Customer named or identifiable; attributed audience products; retail-media targeting) | **30%**, marked in Příloha 3 as subject to negotiation |
| Platform, dashboard, chatbot, ops reports, compliance pack | EUR 0 in both directions |

**Drafting mechanics.**

- The number lives **only in Příloha 3**, never in the body. One cell to change per counterparty,
  which is the headroom the founder asked for. Open lower than 30 where the room allows.
- Base is **net revenue actually received by M&M** attributable to Labelled Outputs featuring that
  Customer, less taxes, agency commissions, refunds and third-party channel fees. Never gross,
  never "revenue derived from their stores", which would silently pull the aggregate in.
- Where a Labelled Output features more than one retailer, the share is apportioned pro rata.
- Quarterly statement, payment 45 days after quarter end, self-reported. **No audit of our books**
  in the first instance (see §6.8 for what we do give instead).
- Express statement, in the same clause: *"For the avoidance of doubt, no share is payable in
  respect of Aggregated Output, irrespective of the extent to which data originating from the
  Customer's premises contributed to it."* This one sentence is worth more than the percentage.

**Do not volunteer the share.** Per the C1 ladder, rung 1 is 0% plus the free platform, and most
retailers accept it if the own-store value lands. Príloha 3 exists so the number is ready when it
is asked for, not so it is offered.

---

## 6. What we give them, drafted to protect us

Each of these is a real concession and each is drafted to attach to the narrowest possible object.
Offer them **in the same breath as perpetuity**, never after it.

**6.1 Trading-data firewall.** M&M does not request, receive or process cost prices, margins,
sell-through, wholesale prices or elasticity. Free to give, because we never ingest it, and it is a
technical fact rather than a promise. This is the answer to fear #1 and it should be in the
recitals as well as the operative text, because it is the sentence their commercial lead repeats
internally.

**6.2 The toxic cut, prohibited by name.** No output shall identify the Customer alongside a named
brand in comparison with that brand's named competitor. Define it exactly that tightly. Drafted
loosely ("no output that could harm the Customer's negotiating position") it swallows the entire
product.

**6.3 No competitor-ranking cuts.** No output ranks named retailers against each other. Ever.
Absolute, and cheap, because we would never publish it anyway.

**6.4 Chain-masking by default.** Brand-facing outputs report the channel, not the named chain.
Honest internal caveat: with two chains in a channel, masking is thin and a brand can infer. Do not
oversell it in the room.

**6.5 Veto, and the trap in the current language.** The execution guide says "veto on every
published output". **Written literally into a contract, that clause destroys the company.** A veto
over Aggregated Output means one retailer can block a syndicated cross-chain read, which is the
currency itself. The veto must be limited to **Labelled Outputs**, where it is genuinely
meaningful, and the aggregate is protected instead by masking and k>=25, which is what makes a
veto unnecessary there. Say this out loud in the room: *"you approve everything with your name on
it; the masked channel read has nothing of yours in it to approve."*

**6.6 Category and brand embargo.** The Customer may exclude named categories or named brands
(private label being the usual one) on written notice, effective within 30 days, **prospective
only**, and expressly not unwinding outputs already published. Offer the private-label carve-out
proactively for any own-brand-heavy chain: it is the most trust-building move available and it
costs us little, because brands are not buying private-label reads.

**6.7 Publication lag and insight priority.** Labelled Outputs run on a quarterly cadence with a
lag. The Customer gets 90 days of exclusive access to any read from its own stores before it is
syndicated. Both cost us nothing and change the felt power balance more than the money does.

**6.8 The two audits, kept apart.**

- *Compliance audit.* (Art. 28(3)(h), statutorily mandatory, cannot be drafted out): once per
  12 months, 30 days' written notice, business hours, at the Customer's cost, by an independent
  auditor under NDA who is not a competitor of M&M, expressly excluding source code, model weights,
  training data and any other customer's data, and **satisfied in the first instance by M&M's
  written compliance report or third-party certification**. That last limb is what turns an audit
  right into a document exchange in practice.
- *Aggregate audit.* a right to verify that k>=25 suppression and masking are applied to outputs
  featuring their data. **Offer this proactively.** It is the cage that buys perpetuity, and it
  exposes nothing: it inspects the gate, not the kitchen.

**6.9 Data-subject rights and signage.** Handled in Příloha 2. M&M provides two-layer signage
artwork and drafts the DPIA. Because sessions are not re-identifiable, most data-subject requests
are answered by the architecture rather than by a lookup, and Příloha 2 should say so plainly, with
a cooperation obligation for the residual cases.

---

## 7. Structural clauses

**7.1 Term.** Initial three years, then rolling annual periods, terminable on 180 days' written
notice before the end of a period. **This mirrors the NIQ / ČEPRO agreement exactly** (cl. 1 of
`058702_NN.pdf`). Tactically this is worth a lot: it is their own precedent's shape, so there is
nothing to argue about, and it moves the entire negotiation onto the licence, which is where we
want it.

**7.2 Survival.** On termination: the licence over Aggregated Output already created survives
perpetually and irrevocably; new Session Records cease; the Platform ends; confidentiality and the
firewall survive; Session Records are deleted per the retention schedule.

**7.3 Sites and binding.** Per founder instruction, drafted so that **one signature binds the whole
estate**: the Customer represents that it is authorised to grant access and rights in respect of
all sites listed in Příloha 1, and that it will procure the same from any operator, tenant,
franchisee or group company operating a listed site. Two consequences to hold in mind: (a) it puts
the risk of tenant refusal on the Customer, which is correct and normal, and (b) at EuroOil the
stations are tenant-operated (`clients/eurooil/facts.yaml`), so this representation may be one they
cannot honestly give. If they push back, the fallback is a per-site joinder schedule rather than a
renegotiation of the body. Flag, not blocker.

**7.4 Density and volume.** Never commit to a number of sites or sessions in the body. If a
commitment is needed, write it against **instrumentable sites** (company-controllable, carrying a
shop, not mid-rebrand), never against a headline network count. An over-promised milestone becomes
a refund obligation.

**7.5 Channel and reseller clause.** Decided: M&M may supply **Aggregated Output** to any third
party, including resellers, data brokers, agencies and AI-data buyers, without approval. That is
the business. **Labelled Output** reaching any third-party reseller requires the Customer's prior
written approval, per channel. Every recipient is bound by flow-down covenants: no
re-identification, no back-engineering, no row-level redistribution, non-circumvention. Treating
AI-data buyers as just another channel inside this clause avoids a separate negotiation later.

**7.6 Data Act.** An express acknowledgement, in every variant including pure barter, that the
Customer does not restrict and will not restrict M&M's use or commercialisation of Aggregated
Output, and waives any right to do so arising under Regulation (EU) 2023/2854 or otherwise. Where
money flows from M&M to the Customer for site access, add the site-host waiver language that puts
M&M in the statutory "User" position. Never leave this implicit.

**7.7 Warranties, and the one to be careful with.** M&M warrants the mechanism (transient
processing, no facial recognition, no biometric templates, no biometric categorisation, no
special-category inference, no cross-visit identification, retention caps, k>=25). M&M does **not**
warrant end-to-end anonymity, and does not warrant regulatory outcomes. The Customer warrants it is
authorised to grant access and rights, and that the POS Data it supplies contains no personal data,
or that it has obtained what is needed (this mirrors the warranty ČEPRO already gave NIQ, so it is
familiar paper to them).

**7.8 Liability.** Mutual cap at fees paid or, in a zero-fee barter, at a stated figure. Carve-outs
for wilful misconduct, breach of confidentiality, breach of the firewall and IP indemnity. No
indirect or consequential loss either way. One-year limitation on claims, following the NIQ
precedent.

**7.9 Confidentiality, assignment, law.** Czech law, Czech courts. Assignment permitted to an
affiliate or a successor on reorganisation without consent (**this matters: it is what allows the
licence to travel in an acquisition**, which is the exit). Otherwise written consent.

**7.10 Deliberately omitted.** Registr smluv obligations, public-procurement mechanics and any
tenant joinder are **not** in the generic template. They go into a short state-owned rider drafted
only if and when ČEPRO is the counterparty. Keeping them out is what keeps the template lean for
everyone else.

---

## 8. Defects in existing material that must be fixed before anything is sent

1. **`templates/one-pager/mandate-letter-cz.md`, clause 5** promises that "většina výnosů z
   datových produktů náleží Řetězci". This contradicts D1 and the 4 Sep ruling. Rewrite to the
   labelled/aggregated split. If any retailer has already seen this letter, we have an anchoring
   problem to manage, not just a drafting one.
2. **`messaging/objections.md`, the retailer fear answer** contains the same "s většinovým podílem"
   promise. Same fix.
3. **"Veto on every published output"** in `retailers-execution-guide.md` and
   `14-retailer-data-objection.md`: correct as a talking point, fatal as contract language. Limit
   to Labelled Output (§6.5).
4. **P0 purge confirmation** must be in hand in writing before the warranties in §7.7 can be
   signed truthfully.
5. **"GDPR certification"**: establish what we actually hold before referencing anything of the
   sort in a contract. There is no general GDPR certification.

---

## 9. Engineering verification checklist (prerequisite to the warranties)

Run before signature, confirm in writing, keep the confirmation on file.

1. No re-identification path exists across visits, in code, and none is planned.
2. k>=25 suppression is enforced **in code at the export gate**, not by policy or review.
3. Timestamps are coarsened to day-part at export. Precise timestamps are the linkage key.
4. Raw frames delete on a hard TTL of 72 hours, and the TTL is evidenced by logs, not by intent.
5. Session Records delete at 30 days. High-frequency body-position samples at 7 days or aggregated
   at write.
6. Special-category and AI-Act-prohibited fields are deleted and the columns purged (P0).
7. Minors: no personalisation, row not persisted.
8. **No record-level row reaches any third-party API.** Test the claim that what does reach one is
   anonymous, against singling out, linkability and inference (WP29 05/2014), not against the
   absence of a name field. This is the highest-risk assumption in the architecture.
9. A data map exists assigning every table to one of the three operations in §3.

---

## 10. Negotiation ladder

| Clause | Status | Concede in this order |
|---|---|---|
| Perpetual licence to Aggregated Output | **NON-NEGOTIABLE** | Never. Park and escalate |
| 0% share on Aggregated Output | **NON-NEGOTIABLE** | Never |
| Veto limited to Labelled Output | **NON-NEGOTIABLE** in substance | Rename it, never widen it |
| Trading-data firewall | Give freely, first | Costs nothing, buys the most |
| Publication lag | Concede 1st | Extend the lag |
| Embargo scope | Concede 2nd | Widen the categories they may exclude |
| Attribution opt-in | Concede 3rd | Tighten to per-cut written approval |
| Aggregate audit right | Offer proactively | It is what buys perpetuity |
| Labelled share % | Concede 4th | Open below 30, move to 30, stop |
| Term-limited licence | **Refuse** | Park and escalate instead |

---

## 11. What happens next

1. Founder review of this memo, in particular §5 (share mechanics), §6.5 (the veto trap) and §6.8
   (the audit pushback).
2. Czech clean draft of the DPA body plus Přílohy 1–3, formal "Vy", counterparty-neutral.
3. English mirror for investor DD and international counterparties.
4. Fixes to the mandate letter and `objections.md` per §8.
5. Engineering confirmation per §9.
6. External counsel čistopis, then the state-owned rider for ČEPRO if and when needed.
