# Data brokers pillar — deep execution guide (v1.0, 26 Aug 2026)

Companion to `brokers-plan.md` / `brokers-plan.html`. **This is the working document.**
**Goal:** 2 pilot clients — **Tier B and/or Tier A** — signed by **31 Oct**, delivering by **21 Nov** ·
**Tier A active from Week 1** as the *alternative-outcome track* (strategic investment / acqui-hire
if the Blitzkrieg fails on 21 Nov — founder decision, 26 Aug: reaching the right person takes
months, so the conversation cannot start at the end) · distribution-economics memo into DD.
**What we are buying here:** distribution velocity — brokers already hold the budgets and the
relationships, so the B2B cycle collapses from months to weeks. **What we are never selling:**
position. Every design rule below exists so we pay in margin only, never in position.
**Cap: ≤30 founder-hours** — raised from 25 by the Tier-A-from-start decision; **Josef's share ≤5h**
so the Brands pillar stays protected (Ondřej runs the Tier-A path; Josef joins only the meetings
where a pilot or the alternative outcome is on the table). Engineering/Dima hours counted separately.

**Legend:** ⛔ prerequisite that blocks the task · 💡 operator tip · 🔍 research gap (what to find,
where, what to do with it) · ✅ definition of done · ⏱ hours — **F** = founder, **E** = eng/Dima.
**Owners:** O = Ondřej (pillar owner) · J = Josef · D = Dima · C = counsel.
**OOO note:** Ondřej is out Sep 21–28 — the Week-5 block is J-led or asynchronous by design.

---

# WEEK 1 · Aug 24–Sep 6 — Map the tier, price the floor, close the trap

## 1.1 The Tier-B map — 10 named organisations, tiered by speed · O ⏱F3h

⛔ **Prereq:** none.

**Steps**
1. Build by **type** first, then name: CZ/SK/PL market-research & shopper-insight agencies ·
   category-management / trade-marketing consultancies · retail-media data resellers ·
   POS-vendor analytics arms (merchant data, no shopper layer) · syndicated-data distributors with
   no in-store visual layer.
2. For each: who they sell to (client list overlap with *our* direct targets — see 💡) · what they
   lack (the field-based quantitative shopper-segment data they cannot afford to collect) · the
   named commercial lead · warm path · **speed signal** (have they ever bought a data licence in
   under 8 weeks?).
3. Score: speed × client reach × fit with one of our two shapes (white-label read / API).
4. Top 5 get the first conversations (3.1).

💡 **Agencies buy what plugs into a live client brief.** The fastest pilot is the one that answers
a question a client has already asked them and panel data cannot answer. Ask for that brief before
anything else.
💡 **Check their client lists against our direct target list before pitching.** A broker selling
our pet read into Purina while we pitch Purina a founding seat is the same product through two
doors at two prices — channel conflict that costs a seat. Mark overlaps; exclude or window them
in the contract (5.1).
💡 Tier B is where the *speed* is; Tier A is where the *exit* is. Do not confuse the two lists.
💡 **Agencies as alternative customers:** the Store Twin positioned as *the generalised CZ
shopper-behaviour model* (pooled, chain-masked, k≥25 — brands guide 7.3) is a planning tool
media/shopper/research agencies buy per project. Add 2–3 agencies to the map; they may be the
fastest pilot of all because they buy for pitches that are live this month.

🔍 **Research — BRK-1, the named map (O, ⏱F2h inside the 3h).** *What:* 10 named CEE orgs per the
types above with the commercial lead and client overlap. *Where:* the CZ market-research
association's member list (SIMAR), agency websites' client pages, LinkedIn for the roles, trade
press for who resells retail-media data; the advisor for who actually buys data. *Do what with it:*
the scored list is the outreach order; overlap flags become contract windows.

✅ **Done when:** 10 named orgs, scored, with overlap flags; top 5 with a named person and a path.

## 1.2 The offer one-pager + the pricing-floor memo · O ⏱F2h

⛔ **Prereq:** 1.1 (which shape they reach for) · direct-sale pricing from the brands pillar's
seat-pricing memo (their 4.2) — the floor is defined *relative to it*.

**Steps**
1. **One-pager, two shapes side by side:** **white-label read** (our report factory, their brand,
   one category × one geography × 12 months) · **API** (derived outputs above the export gate).
   Both: **derived outputs only, per-slot pricing, non-exclusive, 12-month term, step-up at renewal.**
2. **Pricing-floor memo** (internal, never shown): the DM-trap arithmetic — incumbent-style supply
   pricing ≈ €141/store/yr ⇒ 250 stores = **€35k**, vs the same category sold direct **€120–180k**
   (founding) / **€300–600k** (mature); a buyer would generate ~€220k from our €35k (their own 6.25×
   ratio). **Rule:** price per derived product — slot / read / API — never per store, session or
   datapoint. Floor for any annual scope = **≥50% of what we'd realise direct** for that scope.
3. **Pilot pricing rule:** €10–15k is acceptable only for a *single deliverable* (one report, one
   quarter). An annual white-label read is wholesale at the floor (≈ €20–30k+ on founding seat
   economics, more at list). Never a full annual read at pilot price.

💡 **If a broker proposes per-store, per-record or per-datapoint pricing, that is the DM tell** —
they are pricing us as the supplier in their spread. The scripted response: *"we license
products, not supply — the unit is the category read."* Decline and reprice, or walk.
💡 The incumbent supply/demand figures behind the memo are **INTERNAL-ONLY** — the memo exists so
nobody improvises a per-store price in a room, not so anyone quotes the benchmark.
💡 Print the floor on the internal memo as a sentence: *"below €X for this scope we are
cannibalising, not distributing."* Founders negotiating late at night need the sentence, not the table.

✅ **Done when:** one-pager (CZ+EN) and the internal floor memo exist; floor per scope stated.

## 1.3 The channel/reseller clause — into the DPA template BEFORE Mandate #1 · O + C ⏱F0.5h

⛔ **Prereq:** retailers guide 1.1 (Golden DPA assembly) — this clause must be in *that* draft.
**Blocks:** any attributed data ever reaching a broker.

**Steps** Add to the DPA/mandate template: whether the retailer permits their attributed data to
reach third-party resellers, with **per-channel written approval**; default = aggregate, chain-
masked only. Confirm with counsel that outputs above the export gate (k≥25, coarsened time, no
identifiers) are anonymous under the EDPB three-part test — so a broker is a recipient of
*anonymous* data, not a processor (→ 🔍 BRK-6).

💡 **A broker knowing the retailer grants us nothing.** Attribution is governed solely by our
contract with that retailer. Retrofitting this clause after Mandate #1 signs means reopening a
signed contract — do it now while the template is open.

🔍 **Research — BRK-6, anonymity of broker-facing outputs (C, ⏱F0.5h + counsel).** *What:* confirm
export-gate outputs pass no-isolation / no-linkage / no-inference for a third-party recipient.
*Where:* counsel, the EDPB anonymisation guidance already summarised in the GDPR briefs. *Do what
with it:* determines whether brokers need only a licence + covenants (anonymous) or a full DPA
(personal). Plan assumes the former; verify before the first signature.

✅ **Done when:** clause in the template; counsel's anonymity view on file.

## 1.4 Eval-as-a-service — the pilot-#2 shape that never hands over rows · D + O ⏱F0.5h E3h

⛔ **Prereq:** the calibration pre-registration doc (Module 5 / brands-adjacent) — it *is* the spec.

**Steps**
1. Define the product: the vendor **submits predictions** (segment × behaviour distributions for a
   category/geography); we **score them against k≥25 ground truth** and return accuracy by cell.
   No rows leave. Quarterly re-scoring = recurring.
2. Packaging: a one-page spec (categories, cells, scoring metrics, turnaround), a sample scorecard
   built from a legal source (GymBeam with permission / pooled brand-worn), a price (anchor:
   synthetic-research products publish $8.9k–80k/yr — our eval seat starts **≥€20k/yr**).
3. Fallback shape only if a vendor insists on data: **aggregate distributions** above the export
   gate under licence — still never record-level.

💡 This is the cleanest object in the whole pillar: it **cannot** fall into the DM trap (nothing to
back-engineer), it sits outside GDPR scope (nothing personal transferred), and it recurs by design
(re-scoring). Make it the default, not the fallback.
💡 The research annex says there is **no verified precedent** of shopper/CCTV data licensed to AI
labs — so target the synthetic-consumer vendors who publish prices, not the labs. They need
validation of their simulators against reality; we are the reality.

✅ **Done when:** spec + sample scorecard + price on one page.

## 1.5 AI-data outreach — the 10 emails that double as pilot-#2 prospecting · O ⏱F2h

⛔ **Prereq:** 1.4 spec (the email offers the eval product, not "data").

**Steps**
1. List (refresh contacts): Rehearsals/Deep Prediction, Aaru, Listen Labs, Fairgen, Evidenza,
   Qualtrics Edge Audiences, Synthetic Users, Yabble, + 2 (→ 🔍 BRK-3). Target the **research /
   ML lead**, not sales.
2. Email shape: *"you simulate consumers; we measure the real ones at the shelf, receipt-verified.
   Would a quarterly ground-truth eval of your CEE outputs be useful, and at what price?"* One
   scorecard attached.
3. Log responses against the **15 Oct kill-test**: ≥2 paid responses ≥€20k/yr keeps the AI-data
   line; otherwise it zeroes and pilot #2 goes to the reserve type (retail-media data reseller /
   syndicated distributor).

💡 Ask for a **price reaction, not a meeting** — a number in a reply is a datapoint for the
kill-test; a meeting is 90 minutes that may produce nothing.
💡 Frame it as research collaboration. These teams answer researchers; they filter vendors.

🔍 **Research — BRK-3 (O, ⏱F0.5h inside the 2h).** *What:* current contacts + published pricing
for the synthetic-consumer vendors; any new entrants since Aug. *Where:* their sites/pricing pages,
LinkedIn, the annex. *Do what with it:* sets the eval price anchor and the send list.

✅ **Done when:** 10 sent, dated follow-ups, replies logged against the kill-test.

## 1.6 Tier A — start now, as the alternative-outcome track · O ⏱F1.5h

⛔ **Prereq:** never-say list re-read · the **content ladder** below agreed by both founders
(it replaces the old hard gate).

**Why from Week 1 (founder decision):** reaching corp-dev or insights leadership at an incumbent
takes months of hops. If Tier A is the fallback outcome on 21 Nov — strategic investment,
partnership, or acqui-hire — a relationship that starts in November is worthless. It must exist
before the verdict.

**Steps**
1. **Person map** (→ 🔍 BRK-4): corp-dev / M&A and insights leadership at the incumbents' CZ/CEE
   entities (the measurement incumbent's local entity and the two others) — **not sales**.
2. **Warm intro** via the ex-incumbent advisor or an operator-angel with measurement history.
3. First meeting target **W3–5**; second meeting **W8–10**; objective by 21 Nov: a live relationship,
   their **who-layer gap statements on record**, a defined shape for the alternative outcome
   (what a strategic ticket or partnership would need to look like), and — if it comes — a Tier-A
   pilot (licensed derived read, see 5.1).
4. **Content ladder** (what may be shown, by stage):
   **Stage 1 — any time:** methodology at objections-bank depth · the schema · aggregate samples
   from legal sources · the self-benchmark kit.
   **Stage 2 — post-mandate:** retailer-attributed reads *only* under the DPA reseller clause and
   the retailer's written approval of this channel.
   **Never, at any stage:** the retailer pipeline, counterparty names, internal benchmarks, our
   rights ambitions, per-store pricing, taxonomy internals ("the kitchen").

💡 Being seen early is now accepted (founder answer #9) — so the protection moves to **timing of
the rights**: sign the perpetual aggregate licences as early as the retailers pillar allows.
Rights they cannot unwind are what make "buy" cheaper than "build" — and that is the whole logic
of the alternative outcome.
💡 **Fundraise interplay — tell the lead investor.** A strategic conversation during a raise can
help (validation) or chill it ("if the incumbent might buy you, why should we?"). Frame it once,
consistently: *"the incumbent is a customer and partner conversation; the exit is 2031."* Never
let Tier A become a reason for a fund to wait.
💡 Two discovery questions do the real work: *"what would you need to see to consider a who-layer
partner?"* and *"where does your current data stop?"* Their answers are fundraise artifacts.

✅ **Done when:** person named, intro requested, first-meeting slot pencilled W3–5, content ladder
on file.

---

# WEEK 3 · Sep 7–20 — Five conversations, one access path

## 3.1 Five Tier-B conversations · O + J ⏱F4h

⛔ **Prereq:** 1.1 top-5 · 1.2 one-pager · overlap flags in hand.

**Steps** Each call has one structure: their **live client brief** first (what can't panel data
answer?) → which shape they reach for (white-label vs API) → per-slot pricing stated plainly →
**the DM tell check** (do they try to reframe to per-store/record?) → next step dated.

💡 **Never send the methodology deck.** Send the schema (field list + definitions) and one sample
output. *"Schema yes, kitchen no."* A broker who insists on the kitchen is telling you what they
intend to build.
💡 Number and watermark every sample. The audit right in the contract is only credible if the
paper trail exists from the first PDF.
💡 Log which shape each reaches for — five answers design the 2027 channel product better than any
internal debate.

✅ **Done when:** 5 held · shape preference and DM-tell result logged each · ≥2 warm enough to scope.

## 3.2 Tier-A first meeting — Stage-1 content only · O (+ J if a pilot is on the table) ⏱F3h

⛔ **Prereq:** 1.6 intro landed · Stage-1 pack ready (methodology, schema, legal-source sample,
self-benchmark kit) · nothing from the "never" list in the bag.

**Steps** Listen more than present. Sequence: their world first (what their data cannot say) →
our method at objections-bank depth → the schema → one aggregate sample → the two discovery
questions → **what an alternative outcome would need to look like** (asked lightly: *"if this
ever became a partnership rather than a vendor relationship, what would that require on your
side?"*). Log verbatim.

💡 The purpose is to be *seen becoming a threat they'd rather buy* — not to sell. If they ask for
a pilot, the shape is fixed (5.1 Tier-A variant): licensed derived read, per slot, non-exclusive,
no sublicensing, no incorporation into their syndicated deliverables without a named fee.
💡 If they ask about retailers by name, the answer is the category, never the chain.

🔍 **Research — BRK-4 (O, ⏱F0.5h, done in W1 for 1.6; refresh here).** *What:* confirm the person
and their remit before the meeting. *Do what with it:* tailor the two questions to their actual
gap.

✅ **Done when:** meeting held; gap statements and alternative-outcome requirements logged.

---

# WEEK 5 · Sep 21–Oct 4 — Scoping (J-led / async — Ondřej OOO)

## 5.1 Scope two pilots with the two warmest · J ⏱F2h

⛔ **Prereq:** 3.1 · **rights check:** what can we legally white-label *now*? Pre-mandate content =
GymBeam (with written permission), sportstore, pooled brand-worn / index — the pet coarse-grid read
requires the SuperZoo mandate (retailers ~Sep 20 / ≤5 Oct). Sequence delivery accordingly.

**Steps** Per pilot, fix: category · geography · deliverable (one report type or API scope) · term
(12 months, pilot phase = one deliverable) · price (pilot €10–15k single deliverable; annual at
floor) · renewal step-up · non-exclusive · the contract terms list (5.1 in W8) · **delivery date
that respects the mandate date** — never promise a read the rights don't yet cover.

💡 If the warmest broker wants a read we cannot yet deliver, sell the **index** or a GymBeam-based
read as the pilot deliverable and put the mandated category in the annual — pilots are for proving
the channel works, not for proving the category.
💡 Scoping is where scope creep starts: write the deliverable as one noun ("the Q4 pet-specialty
segment read, CZ, one PDF") and price that noun.

**Tier-A pilot variant (if one of the two pilots is an incumbent):** a **licensed derived read per
slot**, 12 months, non-exclusive, **no sublicensing**, **no incorporation into their syndicated
deliverables without a named per-use fee**, aggregate-only unless the retailer approved the channel.
The DM-trap rules apply *hardest* here — the incumbent is the one buyer most able to price us as
supply; if the conversation drifts to per-store or per-record economics, that is the tell, and the
scripted line applies unchanged. A Tier-A pilot counts toward the "2 pilots" goal only if it clears
the floor.

✅ **Done when:** two pilot scopes drafted (any A/B mix) with delivery dates the rights calendar can
honour.

## 5.2 AI-data follow-ups (async) · O ⏱F1h

**Steps** Second-touch on the 10 (same eval offer, plus the parity v1 number from Sep 19 as
evidence). Log every price reaction. Team covers replies during OOO per the fundraise SLA map.

✅ **Done when:** all 10 touched twice; replies logged for the 15 Oct verdict.

---

# WEEK 7 · Oct 5–18 — The verdict

## 7.1 Rule the AI-data kill-test (15 Oct) · O ⏱F0.5h

⛔ **Prereq:** 1.5 + 5.2 logs.

**Steps** ≥2 paid responses ≥€20k/yr → the AI-data line lives and the best responder becomes
**pilot #2** (eval-as-a-service). Fewer → the line **zeroes in the plan** (`04-revenue-architecture.md`),
and pilot #2 goes to the reserve type. Record the verdict in `10-calendar-gates.md`.

💡 A zeroed line with a verdict is the system working. Do not extend the test because "two more
replies are coming" — the date is the discipline.

✅ **Done when:** verdict written; pilot #2 identity fixed.

---

# WEEK 8 · Oct 19–Nov 1 — Two signatures

## 8.1 Sign the two pilots · O + J + C ⏱F3h

⛔ **Prereq:** 5.1 scopes · 1.3 anonymity view · 1.2 floor · counsel's contract set.

**Steps** — every pilot contract carries, no exceptions:
1. **Non-circumvention** — no approaching our retailers/brands with a competing read built on our
   outputs (carve-out for their pre-existing clients is fine *only if* they cannot use our outputs
   to build their own read there).
2. **No back-engineering / no re-identification** covenant, with an **audit right**.
3. **12-month term**, renewal repricing, never perpetual on our side.
4. **No exclusivity** — scripted no on file: *"we don't do exclusivity — it's what makes the read a
   currency rather than a private asset. What we can do: a category-limited, 12-month first-look
   window at a premium, against a volume commitment."*
5. **Per-slot pricing** ≥ floor; pilot deliverable priced as one noun.
6. **Attribution:** aggregate, chain-masked by default; attributed only where our retailer
   contract's reseller clause permits and the retailer has approved this channel in writing.
7. **Channel windows** for any client overlap flagged in 1.1 (a founding-seat early-access window
   is honoured before the broker may sell into that account).
8. Reference/testimonial permission asked at signing.

💡 Ask for the testimonial permission **now** — a broker is happiest at signature and busiest at
delivery.
💡 Paid wholesale beats revenue-share for a pilot: cash now, and it proves the price. Accept
rev-share only with a floor payment.

✅ **Done when:** 2 pilot agreements signed with all eight terms present.

## 8.2 Delivery setup — their brand on our factory · D + O ⏱F0.5h E4h

**Steps** White-label template in the report factory (their logo, our footnotes and definitions
intact — including the k≥25 suppression note) · API keys and usage logging via the export gate ·
sample numbering/watermarking · delivery calendar tied to the rights calendar.

💡 The definitions footer is **not** removable in white-label — it is what makes the read
defensible when their client's insights manager checks it.

✅ **Done when:** delivery pipeline tested end-to-end with a dummy deliverable.

---

# WEEK 10 · Nov 2–15 — Deliver, meet from strength, write the economics

## 10.1 Pilots delivering · D + O ⏱F0.5h E6h

**Steps** First deliverable per pilot on the promised date; log broker feedback and their client's
reaction verbatim; usage logs reviewed weekly.

💡 Deliver early rather than fully. A channel partner who gets something ahead of schedule
resells; one who gets more than promised, late, does not.

✅ **Done when:** both pilots have delivered at least one deliverable; feedback logged.

## 10.2 Tier-A second meeting — the alternative outcome takes shape · J + O ⏱F2.5h

⛔ **Prereq:** 3.2 held · **Stage-2 content only if** ≥1 signed mandate and the retailer approved
this channel; otherwise Stage 1 again with the new evidence objects (parity, RFI outcome, seats).
The meeting is **held either way** — it is the alternative-outcome track, not a sales call.

**Steps** Bring the evidence drops since the first meeting · ask directly what a strategic ticket,
partnership or acqui-hire would need to look like from their side and on what timeline · log it as
the **alternative-outcome memo** (what they'd value, what they'd pay for, what they'd need to see
by when) · if a Tier-A pilot is live, review it here.

💡 Their most useful sentence is about what they cannot do — write it down exactly; it goes in the
fundraise memo, the 21 Nov go/no-go, and the 2027 acquirer plan.
💡 Bring nothing that could be photographed into a "build" brief: no taxonomy internals, no
counterparty names, no pricing.
💡 If the Blitzkrieg verdict on 21 Nov is 🔴, this memo is the plan. That is why it exists now.

✅ **Done when:** meeting held; alternative-outcome memo drafted with their stated requirements
and timeline.

## 10.3 The distribution-economics memo · O ⏱F2h

⛔ **Prereq:** 10.1 first deliveries · 8.1 prices.

**Steps** One page for DD and for the 2027 decision: their margin vs our realised floor · cost to
serve (E hours per deliverable) · channel-conflict rules and how they held · the honest test —
**did two broker pilots prove more than one more direct seat would have?** — answered with the
numbers · and the two watch items ruled: does the channel **strengthen** the acquirer story
(founder view: yes, while early) and was the incumbent-awareness risk worth it.

💡 Write the honest test as a comparison of founder-hours per euro: broker pilots (this ledger) vs
one direct seat (~50h). If the direct seat wins, say so — the pillar's 2027 hours move to Brands.

🔍 **Research — BRK-7 (O, ⏱F0.5h inside the 2h).** *What:* do measurement incumbents partner with
or acquire data providers, and at what shape (reuse the RMN-7 acquirer-lens research). *Where:*
recent M&A in audience/shopper measurement; the annex. *Do what with it:* rules "strengthens vs
muddies" with evidence.

✅ **Done when:** memo in the data room; honest test answered numerically.

---

# WEEK 13 · Nov 16–21 — Verdict and the 2027 channel decision

## 13.1 Score the pillar and decide the channel · O + J ⏱F1h

**Steps** Against the goal: 2 pilots signed and delivering · Tier-A path opened (met or dated) ·
memo delivered. Rule the 2027 channel question: scale Tier-B (and how many), keep it opportunistic,
or fold the hours into Brands. Record in `17-signals-21nov.md`.

💡 Report **realised price vs floor** and **hours per euro** — not "pilots signed." A pilot below
floor is a distribution loss wearing a signature.

✅ **Done when:** pillar verdict recorded; 2027 hours allocated by the honest test.

---

# Founder-hour budget — the cap that keeps this pillar from eating Brands

| Task | F hours | Running |
|---|---|---|
| 1.1 Tier-B map | 3.0 | 3.0 |
| 1.2 one-pager + floor memo | 2.0 | 5.0 |
| 1.3 reseller clause | 0.5 | 5.5 |
| 1.4 eval-as-a-service (founder share) | 0.5 | 6.0 |
| 1.5 AI-data outreach | 2.0 | 8.0 |
| 1.6 Tier A from Week 1 — person map + intro (O) | 1.5 | 9.5 |
| 3.1 five Tier-B conversations | 4.0 | 13.5 |
| 3.2 Tier-A first meeting (O 2.0 + J 1.0) | 3.0 | 16.5 |
| 5.1 scope two pilots (A/B mix) | 2.0 | 18.5 |
| 5.2 AI-data follow-ups | 1.0 | 19.5 |
| 7.1 kill-test verdict | 0.5 | 20.0 |
| 8.1 sign two pilots | 3.0 | 23.0 |
| 8.2 delivery setup (founder share) | 0.5 | 23.5 |
| 10.1 pilots delivering (founder share) | 0.5 | 24.0 |
| 10.2 Tier-A second meeting (J 2.0 + O 0.5) | 2.5 | 26.5 |
| 10.3 economics memo | 2.0 | 28.5 |
| 13.1 verdict + channel decision | 1.0 | **29.5** |

**Rule:** the cap is now 30 (raised by the Tier-A decision). Josef's share across 3.1/3.2/8.1/10.2/
13.1 stays ≤5h — if it creeps, Ondřej takes the meeting alone. Pre-agreed cut if the ledger breaks
30: 3.1 drops to four conversations. Engineering/Dima hours (~E13h) are separate and clear against
calibration and S1/S2 first.

# Standing rules — check before every broker touch

| Rule | Why it exists |
|---|---|
| Price per derived product — slot / read / API — never per store, session or datapoint | Per-store pricing is the DM position: supply economics inside someone else's 20–60× spread |
| Derived outputs only; "schema yes, kitchen no" | Nothing back-engineerable ever leaves |
| Floor = ≥50% of direct-sale value for the scope; pilot price only for a single deliverable | Below the floor the channel cannibalises instead of distributing |
| Attribution only where OUR retailer contract permits and the retailer approved the channel | A broker's relationship with a retailer grants us nothing |
| Non-circumvention + no-back-engineering + audit right + 12-month term, every contract | The risk is their connections, not their focus |
| No exclusivity, ever — the scripted first-look counter | The read is a currency, not a private asset |
| Tier A: active from Week 1 as the alternative-outcome track; **content ladder** (Stage 1 = method/schema/legal samples any time; Stage 2 = attributed reads post-mandate + retailer approval); never pipeline, benchmarks, rights ambitions, the kitchen | The fallback outcome needs a relationship that takes months to build — but the build brief still never leaves |
| Tell the lead investor about Tier-A conversations; frame once: "customer/partner conversation; the exit is 2031" | A strategic conversation must validate the raise, never give a fund a reason to wait |
| Internal benchmark figures never revealed | Never-say list applies in full |
| Report realised price vs floor and hours per euro, not pilot counts | A below-floor pilot is a loss wearing a signature |

# The research backlog in one place

| ID | What | Owner | By | Why it blocks money |
|---|---|---|---|---|
| BRK-1 | Named Tier-B map with client overlap and speed signal | O | 6 Sep | Wrong targets = slow pilots; overlaps = channel conflict with our own seats |
| BRK-2 | Direct-sale equivalent price per scope (from the brands seat-pricing memo) | O + J | 20 Sep | Defines the floor; without it the DM trap is unpriceable |
| BRK-3 | Synthetic-consumer vendor contacts + published pricing | O | 30 Aug | Sets the eval price anchor and the send list |
| BRK-4 | Named corp-dev / insights leaders at the incumbents' CEE entities + warm path | O | 20 Sep | The Tier-A meeting cannot be booked without a person |
| BRK-5 | Broker client lists vs our direct targets (overlap check) | O | 6 Sep | Prevents selling the same read through two doors at two prices |
| BRK-6 | Counsel view: export-gate outputs anonymous for third-party recipients | C | 13 Sep | Decides licence-only vs full DPA for brokers |
| BRK-7 | Acquirer lens: do incumbents partner with / acquire data providers, and how valued | O | 8 Nov | Rules "strengthens vs muddies" with evidence |
