# Retailers pillar — deep execution guide (v1.1, 26 Aug 2026)

Companion to `retailers-plan.html`. **This is the working document.**
**Goal:** 2 DPA-level data mandates · stat-sig + seat depth in each category · by 21 Nov.
**Core Reframing:** In-Store Data Intelligence Platform (never "Retail Media" or "screens" — pure edge-AI data & analytics platform running on existing CCTV).
**Pipeline Streams:** (1) EuroOil (ČEPRO), (2) SuperZoo (de-risked, non-exclusive focus), (3) Teta (via Moris warm intro), (4) Planeo (via Moris warm intro), (5) Systematic Cold Outreach via scored retailer matrix.
**Why it outranks its own goal:** the brands pillar's calendar hangs on **Mandate #1 by ~5 Oct**.
Slip that date and the two paying seats fall out of the Oct–Nov budget window.

**Legend:** ⛔ prerequisite that blocks the task · 💡 operator tip · 🔍 research gap (what to find,
where, what to do with it) · ✅ definition of done · ⏱ estimated hours.
**Owners:** J = Josef · O = Ondřej (paper/legal/ops) · D = Dima · N = Natka (data pipeline) · H = Honza (CV/privacy) ·
P = Petr (backend/ingest) · M = Martin (cloud).

---

# WEEK 1 · Aug 24–30 — The paper that everything else needs

## 1.1 Assemble the Golden DPA & Legal Foundations — every clause, once · O + counsel ⏱8h

⛔ **Prereq:** C1 ruling understood (the share ladder, §1.2) — legal cannot draft a commercial
position that hasn't been decided.
⛔ **Prereq:** the **channel/reseller clause** from the brokers pillar must be in this draft **now**.
Retrofitting it after Mandate #1 signs means reopening a signed contract.

**Steps**
1. **Pre-drafting business requirements & precedent review:**
   - Review existing **Nielsen ↔ ČEPRO data supply agreements** to extract standard data-exchange clauses,
     category definitions, and confidential treatment terms already established in CEE retail and state procurement.
   - Formalize M&M's non-negotiable business requirements (perpetual k≥25 aggregate licence, trading-data firewall)
     before briefing external counsel.
2. Assemble the clause list in one document before counsel touches it:
   **Processing:** Art. 28 processor terms · Art. 26 joint-controller arrangement · purpose-change
   (Art. 6(4)) assessment · signage obligations · retention (72h images / 30d records) · k≥25 export gate.
   **Rights:** perpetual irrevocable licence to the de-identified k≥25 **aggregate** ·
   POS-feed rider · brand-outreach blessing · **channel/reseller clause** (may attributed data
   reach third-party resellers? per-channel written approval).
   **Protections for them:** trading-data firewall (no margins, wholesale prices, or COGS) · the toxic-cut prohibition (named retailer ×
   named brand vs named competitor) · chain-masking by default · publication lag · 90-day insight
   priority · category/brand embargo (incl. private label) · veto on every published output.
3. Mark each clause **NEGOTIABLE / NON-NEGOTIABLE**. Exactly one is non-negotiable: the perpetual
   aggregate licence. Everything else can be traded.
4. Build the **Zero-IT PoV** as a separate, much shorter paper: 3–5 stores, read-only access,
   60–90 days, no rights transferred, cancel-any-time. This is what gets signed when the DPA stalls.
5. CZ and EN versions of both.

💡 **Never send a DPA to their legal before the commercial terms are agreed with the business.**
Legal will negotiate terms the business never agreed to, and you will spend three weeks unwinding it.
💡 The one-page **mandate** (60-day, revocable) still exists and sits *below* the PoV. Three rungs:
mandate → PoV → DPA. Always ask for the smallest one that unlocks the next step.
💡 Write the non-negotiable clause so it reads as *protective*: "de-identified, k≥25, chain-masked,
nothing of yours is identifiable" — the word "perpetual" alarms people far less when it's attached
to something that visibly cannot hurt them.

✅ **Done when:** Nielsen/ČEPRO benchmark clauses reviewed, DPA + PoV drafted, clause list marked, both languages, counsel review booked ≤5 Sep.

## 1.2 Internalise the C1 share ladder — rehearse it out loud · J + O ⏱2h

⛔ **Prereq:** none, but do this **before** any retailer conversation this week.

**Steps** — four rungs, in order, never skipped ahead:
1. **Open:** 0% share + free platform. The value is **their own store insights & AI chatbot tool** — deliverable day
   one, needs no other retailer's data, so the "you can't benchmark me yet" objection never blocks
   the door.
2. **Rung 2:** ≤40% share on **retailer-attributed products only**. Aggregate and syndicated reads
   stay 100% ours.
3. **Rung 3 (door-opener of last resort):** time-boxed year-1 share on the first category read,
   with a written sunset.
4. **Never at any rung:** a share of the cross-retailer aggregate.

💡 Rehearse the exact sentence for rung 1: *"You pay nothing, ever. What we ask for is the right to
use anonymous aggregates — and you see every insight and visual attribute model from your own stores first, free, via your custom dashboard and AI chatbot, before any
brand sees a masked version."*
💡 **Do not volunteer rung 2.** Most retailers accept rung 1 if the own-store value lands. Opening
with revenue-share invites a negotiation about percentages you never needed to have.
💡 If they open with *"what's our cut?"*, answer with the asymmetry first, money second: *"the
first thing you get is knowing more about your shoppers than your suppliers do."*

✅ **Done when:** both founders can deliver rungs 1–3 without notes, and agree the trigger for
dropping a rung.

## 1.3 Multi-threading playbook & Outreach Collaterals — three audiences, three pitches · J ⏱4h

⛔ **Prereq:** C4 ruling — the category-manager pitch is **never** titled or framed as anything
adversarial to suppliers. Our ICP *is* those suppliers, and one forwarded deck ends the seats.

**Steps**
1. **CMO / commercial director one-pager — "The In-Store Data Intelligence Platform":**
   Audience monetization, supplier-funded data intelligence revenue (rev-share), access to an AI chatbot over their own store traffic data. No screens, no hardware capex. One page.
2. **Category manager one-pager — "A sharper hand":**
   *"Our data strengthens your buying position — you'll know which shopper segments actually convert on each supplier's SKUs, in your own stores, before they do."*
   Focus on **hundreds of real-time visual attributes** (demographics, age bands, gender, clothing/style/presentation attributes, group/family dynamics, and derived shopper behavior patterns — *strictly NO shelf-interaction/biomechanics claims*). One page.
3. **IT/security one-pager — "Zero IT footprint & pure edge privacy":**
   Existing CCTV streams, read-only sub-streams, **no raw video or image egress**, edge processing, k≥25 aggregation export gate, ready-to-sign DPIA/compliance pack. One page.
4. Map which of the three exists at each target chain, by name.

💡 **Never single-thread a chain.** The person who loves it is rarely the person who signs, and the
person who signs will ask someone you haven't met. Three threads is the minimum for a 200-store deal.
💡 The category manager is usually the fastest internal champion — they feel the supplier asymmetry
daily — but they cannot sign alone. Use them to reach the CMO, not as the closer.

✅ **Done when:** three professional 1-page outreach collaterals exist; named roles mapped across EuroOil, SuperZoo, Teta, Planeo.

## 1.4 Moris letters — the two contractual prerequisites · O ⏱2h

⛔ **Prereq:** none. **Blocks:** any *direct* EuroOil data contract.

**Steps** Send (a) the **§II.7 opportunity notice** naming the EuroOil/tobacco opportunity — it
starts the six-month clock after which exclusivity toward that client lapses; and (b) the
**§II.12 waiver request** allowing direct M&M↔ČEPRO communication on the data agreement.

💡 Frame both as helping *their* deal, not as a manoeuvre: "brand money is arriving in your channel;
we need to paper the data side directly so it doesn't stall the media side."
💡 The §II.7 clock is insurance, not aggression. It costs nothing to start and it converts "Moris is
slow" from a complaint into a date.

✅ **Done when:** both letters sent with delivery confirmation; date logged for the 6-month expiry.

## 1.5 GymBeam retrofit + the pilot amendment blitz · O ⏱3h

⛔ **Prereq:** 1.1 (the amendment is a two-page extract of the DPA's rights clause).

**Steps** Offer all live pilots (GymBeam, O2, Vilgain, CPI, SuperZoo, EuroOil) a **pooled-aggregate
amendment**: they get one free insight report or a free platform month; we get retroactive rights
over data already captured.

💡 This is the cheapest rights acquisition available — **it flips months of already-captured data
from unsellable to sellable without deploying a single new camera.** GymBeam first: it is the only
POS-matched lab asset and its data underpins every brand teaser.
💡 Ask for it as housekeeping, not as a negotiation: "we're standardising our pilot paperwork —
here's a two-pager, and here's a free report for the trouble."

✅ **Done when:** amendment offered to all 6; ≥2 signed by 12 Sep.

## 1.6 Seat-depth demand proof — map brand buyers per category · J ⏱4h

⛔ **Prereq:** brands pillar 1.1 (budget-owner map) — same research, shared output.

**Steps** For pet, fuel/convenience, drugstore, and consumer electronics: list ≥5 named brand buyers per category, with the budget
they'd buy from and any signal of interest. This is the artifact that answers the retailer's real
question — *"would anyone actually pay for this?"*
- **Pet (SuperZoo):** Purina, Mars (Royal Canin), Vafo (Brit), Hill's, Farmina.
- **Fuel / Convenience (EuroOil):** JTI, PMI, BAT, Red Bull, Mattoni/KMV.
- **Drugstore (Teta):** P&G, Henkel, Unilever, L'Oréal, Beiersdorf.
- **Consumer Electronics (Planeo):** Samsung, Philips, LG, DeLonghi, Bosch.

💡 A retailer does not want a data partner; they want proof of a market. **Bring the demand map to
the rights conversation** and the conversation changes from "why should we?" to "how much?"
💡 Post-greenlight, the EuroOil version of this matrix can name real tobacco conversations. That is
far stronger than a hypothetical list.

✅ **Done when:** 4 category matrices created, ≥5 named brand buyers each.

## 1.7 Retailer Suitability Matrix & FOMO Framing · J ⏱3h

⛔ **Prereq:** none.

**Steps**
1. **Design a flexible, non-disqualifying scoring matrix** to rank candidates across CEE without prematurely choking top-of-funnel:
   - **Sales Cycle Speed Score (1–5):** Company-operated central IT (5) vs. hybrid franchise (3) vs. fragmented co-op (1).
   - **Multibrand Depth (1–5):** High third-party SKU share (5) vs. heavy private label (2) vs. 100% own-brand (1).
   - **Footprint Sweet Spot (1–5):** 60–150 stores (5, quick decision + stat-sig) vs. 30–60 (4) vs. 200–500 (3) vs. 500+ giants (1, slow).
   - **Access Path (1–5):** Existing warm intro / Moris contact (5) vs. second-degree network (3) vs. cold outreach (2).
2. **Formulate the FOMO Scarcity Narrative:**
   *"Minds & Models is launching its Data Intelligence Platform across CEE. To ensure statistical integrity and category focus, we have exactly 2 founding data partner seats per retail category. Once a category's seats are committed, onboarding closes for 12 months."*

💡 Keep the scoring criteria open so unusual high-velocity prospects stay in the funnel, while letting the score determine whether they get a founder-led warm push or automated cold outbound.

✅ **Done when:** scoring matrix template live in Notion/Sheets; FOMO script agreed.

## 1.8 Moris Client Portfolio Sweep & Warm Routing · O + J ⏱2h

⛔ **Prereq:** none.

**Steps**
1. Audit Moris's current and historical retail fit-out client roster (specifically looking at Teta, Planeo, and adjacent retail chains).
2. Map existing operational contacts and relationship leads at each chain.
3. Prepare warm intro request scripts to route intro pings through Moris leadership.

💡 Moris already holds commercial trust with retail operations directors; leveraging this avoids cold gatekeepers entirely.

✅ **Done when:** Moris client list audited; warm intro targets identified for Teta and Planeo.

---

# WEEK 2 · Aug 31–Sep 6 — Funnel Activation: Dual-Stream Outreach & SuperZoo

## 2.1 Score the top-30 funnel & launch dual-stream outreach · J ⏱5h

⛔ **Prereq:** 1.7 scoring matrix · 1.3 outreach collaterals · 1.8 Moris client sweep.

**Steps**
1. Build and score the CEE candidate list (30+ chains across drugstore, sport, electro, convenience, fuel, specialist pet/multibrand).
2. **Score & Rank (open scoring, not hard disqualification):**
   `Sales Cycle Speed × Multibrand Depth × Location Sweet Spot (60–150) × Access Path`.
3. **Split into 2 Operational Outreach Streams:**
   - **Stream A — Warm / Moris Introductions:**
     - **SuperZoo:** Ongoing pilot/RFI conversion.
     - **EuroOil (ČEPRO):** Tobacco brand pull route.
     - **Teta:** Drogerie multibrand (P&G, Unilever) — route warm ping through Moris contact to company-operated store leadership.
     - **Planeo (FAST ČR):** Consumer electronics (Samsung, LG, Philips) — route warm ping through Moris contact to commercial/IT leadership.
   - **Stream B — Systematic Cold Outreach:**
     - Top 10 highest-scoring chains from the matrix receive personalized cold multi-threading outreach using the 1-page collaterals (CMO, Category Manager, IT) and the FOMO "2 seats per category" framing.

💡 Do not over-filter the funnel at this stage. Keep the top-of-funnel broad so high-interest candidates can emerge, but prioritize founder calendar hours on Stream A while running structured outreach on Stream B.
💡 A 90-store multibrand drugstore/electro chain outranks a 300-store own-brand chain on this maths — and the deployment dashboard will never tell you that.

🔍 **Research — the scored list (⏱3h, inside the 5h).** *What:* store counts, ownership model,
multibrand share, and the named commercial decision-maker for 30 CEE chains. *Where:* company
registries, chain websites, retail trade press, the advisor network, LinkedIn for the role map.
*Do what with it:* Stream A is actively worked via warm intros; Stream B gets cold outbound in W3; the remainder is logged for Q1 pipeline.

✅ **Done when:** 30 chains scored; Stream A warm intros requested via Moris; Stream B top-10 outreach queue prepared.

## 2.2 CPI portfolio rider — the fastest clean win in the pipeline · J ⏱2h

⛔ **Prereq:** none. CPI is the **only** counterparty that already pays *and* already has a DPIA.

**Steps** Ask for a portfolio rider on the existing contract: same terms, extended across their
CZ retail assets, common areas only.

💡 This is two hours of work for a real signature and it is missing from the current plan entirely.
It also creates the **third rights instrument** for the 21 Nov scoreboard almost for free.
💡 Landlord data never touches POS and never touches supplier rivalry — so it is the one rights
conversation with no data-leverage objection at all. Use it as the reference case: *"our landlord
partner extended across their portfolio"* is a proof point for every retailer conversation.

✅ **Done when:** rider requested with a date; signed by 15 Oct.

## 2.3 SuperZoo exec meeting — de-risked ask ladder · J ⏱6h

⛔ **Prereq:** 1.1 mandate + PoV printed and in the bag · 1.6 seat-depth matrix · compliance pack
· C7 private-label answer (offer the carve-out proactively).

**Steps — the ask ladder, in this order**
1. **Mandate on the table, signed in the room** (60 days, revocable, veto, nothing sold).
2. **Read-only RTSP access to 2–3 stores** — framed as technical validation for the RFI, not as a
   deployment. This is the cheapest yes in the meeting and it unblocks S2 testing.
3. **Paid PoC, 3–5 stores** — procurement-normal, and it converts them into a customer relationship
   with an invoice trail.
4. **RFI response preview** — show you understood their three benefit areas.
5. **DPA discussion opened** with a date, not a decision.

💡 **De-risk SuperZoo reliance:** SuperZoo is our fastest immediate pet data asset, but Blitzkrieg does NOT depend solely on them. Treat this as one of several parallel tracks (EuroOil, Teta, Planeo).
💡 **Lead with the private-label carve-out before they raise it.** For an own-brand-heavy chain it
is the most sensitive output we could produce, and volunteering the exclusion is the single most
trust-building move available. It costs us little: brands aren't buying private-label reads.
💡 Raise the compliance pack **first**, unprompted — their RFI devotes an entire section to
GDPR/AI-Act and explicitly worries about high-risk classification. Handing their DPO a finished
pack converts the most likely blocker into an internal advocate.
💡 If the mandate stalls, fall to the PoV. **Do not leave the room without one of the three rungs
signed or dated.**

✅ **Done when:** mandate signed, or PoV signed, or a dated DPA session in the calendar — plus
RTSP access to 2–3 stores agreed.

## 2.4 Compliance pack v1 — the moat, packaged · O + H ⏱6h

⛔ **Prereq:** GDPR P0 purge complete (deletes the prohibited fields; makes counsel's AI-Act letter
true and citable).

**Steps** Assemble as one bound deliverable handed to the retailer's DPO: DPIA template
(pre-filled for their format) · legitimate-interest assessment · **purpose-change (Art. 6(4))
memo** · two-layer signage artwork · Art. 28 + Art. 26 templates · counsel's AI-Act letter ·
retention and k≥25 architecture note · the **self-benchmark kit** (C8).

💡 **Offering to write their DPIA is a huge concession that costs us almost nothing and saves them
weeks.** It is also how we control the framing of the legal basis.
💡 The purpose-change memo is the differentiator: repurposing security cameras for analytics needs
its own legal basis, per chain, and the vendor must hold its own analysis. Competitors bidding this
RFI will not have it.

✅ **Done when:** pack v1 exists as a single PDF, reviewed by counsel.

---

# WEEK 3 · Sep 7–13 — EuroOil, Data Business Model & Pipeline Architecture

## 3.1 Apply brand pull to EuroOil — the greenlight loop closes here · J + O ⏱5h

⛔ **Prereq:** ČEPRO greenlight confirmed **in writing** (tobacco playbook §1) · tobacco
conversations underway.

**Steps**
1. Report back to ČEPRO on the tobacco conversations — as promised, and before asking for anything.
2. Convert interest into the ask: *"there is money forming in your channel. To convert it we need
   the data agreement papered directly with you."*
3. Table the DPA + the **gold-station rider** (§3.2) together.

💡 The sequence matters: **report first, ask second.** A retailer who feels informed cooperates; one
who feels used stalls. This is the single most fragile relationship in the pillar — state-owned,
Moris-intermediated, and now carrying our tobacco access.
💡 Conditional LOIs are the artifact here. *"Would tobacco even pay?"* has been ČEPRO's question
since summer — answer it with paper, not with argument.

✅ **Done when:** DPA formally tabled with ČEPRO and a legal-review date set.

## 3.2 The gold-station ask — one feed worth more than 49 installs · O ⏱3h

⛔ **Prereq:** 3.1 in motion · POS-vendor research (🔍 below).

**Steps** Ask for **one** station with a receipt-level POS feed, in exchange for the full station
dashboard free, forever. One gold store ≈ 750 receipt-joins/month; the coarse grid needs ~12.5k
joins ≈ 2–3 gold-store-months.

💡 Without it, the tobacco read is **observational only** and honestly prices at €40–80k/brand
instead of the T2 band. This one ask is worth roughly €900k across the tobacco block — treat it as
a revenue task, not an IT task.
💡 Ask for the *smallest* station, not the best one. "One site, any site, your choice" is far easier
to approve than a negotiation about which.

🔍 **Research — the POS vendor is the real bottleneck (O, ⏱3h). ⚠ THIS BLOCKS STAT-SIG.**
*What:* who supplies ČEPRO's till system, whether a receipt-level export exists, what it costs,
and their lead time. Same question for SuperZoo (their new-format stores already write camera counts
into the POS DB — so an integration path demonstrably exists). *Where:* ask the retailer's IT
directly; the POS vendor's docs; the store manager knows the brand name on the till.
*Do what with it:* if the vendor needs to build an export, that is a third party with its own
timeline and possibly its own fee — start it in week 3, not week 9, or "stat-sig live by 21 Nov"
fails on someone else's backlog.

✅ **Done when:** gold-station ask made; POS-vendor path known for both chains.

## 3.3 Parallelise the IT security review — the silent killer · O + P ⏱4h

⛔ **Prereq:** any live negotiation (SuperZoo, EuroOil).

**Steps**
1. Ask for their vendor security questionnaire **now**, while legal is still drafting.
2. Answer it once, properly, and reuse: architecture diagram · data-flow map · subprocessor list ·
    pen-test or SOC posture · retention · access control · incident process.
3. Book the IT call before the DPA is signed, not after.

💡 **IT security review adds 4–8 weeks when it starts after signature, and near-zero when it runs
in parallel.** It is the most common reason a signed retail deal still hasn't deployed 60 days later.
💡 The security answer that wins with camera estates: **no image egress.** Frames are processed at
the edge and never leave the store. Say it in the first sentence of the questionnaire.

✅ **Done when:** questionnaire answered and returned for both live chains.

## 3.4 Technical readiness per store — the checklist nobody remembers · P + M ⏱5h

⛔ **Prereq:** RTSP access to 2–3 SuperZoo stores (from 2.3).

**Steps** Per store, confirm: camera model + firmware · **ONVIF user created and enabled**
(off by default on modern Hikvision firmware) · sub-stream resolution/bitrate · recorder spec
(i5 → S1 on-prem; i3 → S2 edge box) · LAN access and firewall rules · upstream bandwidth ·
who physically lets us in, or whether deploy is fully remote.

💡 The ONVIF-user default is the single most common blocker in Hikvision estates and it is a
five-minute fix — **if you know to ask before the install day.**
💡 Direct RTSP from the recorders **bypasses the HikCentral 32-camera licence cap** they flagged in
the RFI. Name that in the response: it is a real cost saving that competitors will not offer.
💡 Site "surveys" can usually be done from photographs — ask the store manager for four pictures of
the IT rack and camera positions rather than travelling.

✅ **Done when:** readiness sheet complete for the pilot stores; blockers listed with owners.

## 3.5 Data Business Model: Aggregation vs. Non-Aggregation & Pipeline Architecture (Natka) · J + N + D ⏱5h

⛔ **Prereq:** 1.1 DPA clause structure · 1.2 share ladder.

**Steps**
1. **Formalize the Commercial Data Architecture:**
   - **Cross-Retailer Syndicated Aggregate (≥2 chains in category):** 100% M&M revenue. This is the core currency sold to brand insights teams (T1/T2 subscriptions). Retailer receives free access to the market benchmark view.
   - **Retailer-Attributed Data Intelligence (Single chain specific):** Monetized via supplier brand access or retail media targeting. Subject to C1 share ladder (≤40% share to retailer, ≥60% infra margin to M&M).
2. **Specify Natka's Ingest & Delivery Pipeline:**
   - Define data ingestion from edge camera processing and POS matching into the warehouse.
   - Apply strict k≥25 aggregation and firewall filters: **exclude all retail trading data (margins, wholesale pricing, COGS)**.
   - Structure output formats: automated weekly aggregate feeds + real-time API.
3. **AI-Native Delivery Moat (vs. Legacy Nielsen):**
   - Package data delivery around a **Conversational AI Chatbot** querying real-time store behavior data and **interactive custom intelligence dashboards** (drastically superior to static quarterly Nielsen spreadsheets).

💡 Emphasize the AI delivery layer in every retailer conversation: Nielsen takes 6 weeks to send a static Excel; M&M gives category managers an AI chatbot they can ask natural-language questions about yesterday's shopper demographics.

✅ **Done when:** aggregation vs non-aggregation data policy documented; Natka pipeline ingest-to-delivery workflow specified; AI chatbot & dashboard interface wireframe ready.

## 3.6 Retailer Value Proposition Packaging — "Their Data, Our Platform, Rev-Share" · J ⏱3h

⛔ **Prereq:** 3.5 data business model.

**Steps**
1. Package the standardized retailer value proposition deck & talk-track:
   - **Their Data, Free Forever:** Retailer gets full visibility into their own physical stores' traffic, demographic mix, dwell times, and conversion patterns via our platform and AI chatbot at zero subscription cost.
   - **Hundreds of Visual Attributes:** Granular shopper demographic profiling (age bands, gender, presentation style, group dynamics, shopping mission patterns — strictly no shelf-interaction tracking).
   - **New Bottom-Line Revenue:** We commercialize audience insights to FMCG/brand suppliers and share up to 40% of attributed revenues with the retailer.
   - **Zero IT Friction & Risk:** Runs on existing CCTV cameras, edge processing, no image egress, complete trading data firewall, full veto rights over published cuts.

💡 The strongest positioning is: *"We build your internal shopper intelligence capability for free, and create a brand-funded revenue stream where you keep the upside."*

✅ **Done when:** Retailer Value Proposition one-pager and presentation deck finalized.

---

# WEEK 4 · Sep 14–20 — Mandate #1

## 4.1 Close SuperZoo · J + O ⏱8h

⛔ **Prereq:** 2.3 rung achieved · commercial terms agreed with the business **before** legal ·
compliance pack delivered to their DPO · reseller clause present in the draft.

**Steps** Work the agreed terms through their legal; hold the perpetual aggregate licence; concede
in this order if pressed — publication lag → embargo scope → attribution opt-in → rung-2 share on
attributed products. **Never the aggregate.**

💡 If their legal proposes a term-limited licence, counter with **perpetual but chain-masked and
k≥25**, plus a right to audit our aggregates. Retailers accept perpetuity far more readily when it
is paired with visible controls and an audit right.
💡 Signature timing: the brands pillar needs this by **~5 Oct** to keep the two paying seats inside
the budget window. If it will visibly slip past that, tell the brands owner the same day so the
LOI-roundtable fallback triggers.

✅ **Done when:** Mandate #1 signed at DPA level, or explicitly downgraded to PoV with a DPA date.

## 4.2 Rollout plan for wave 1 · P + O ⏱4h

**Steps** Which 30–60 stores, in which order, S1 vs S2 per store, install sequence, who at the
retailer coordinates, and the **signage rollout** (print lead time — order it now).

💡 **Signage is a physical logistics task with a print lead time and it is always forgotten.**
Two-layer notices must be at store entrances *before* processing starts, not after. Order artwork
and print in week 4 even if signature slips.
💡 Sequence stores by *category-read value*, not by convenience — the first 30 stores should be the
ones that make the pet read statistically valid fastest.

✅ **Done when:** store list, sequence, SKU per store, signage ordered.

---

# WEEK 5 · Sep 21–28 — OOO: build, don't negotiate

## 5.1 Giant seeding — start the two-year clocks · J ⏱3h
**Steps** Intro letters to Billa, COOP central, Albert, plus dm/Rossmann. Pitch: the new profit
centre. Expect nothing this window; the point is that the clock starts now.
💡 Grocery unlocks 15–25 category slots — an order of magnitude more than pet. These conversations
cannot close in-window but they are the 2027 pipeline, and a famous estate being instrumented is
the FOMO trigger for the *brands* pillar (their answer to Q18).
✅ **Done when:** 5 intro letters sent, follow-ups dated.

## 5.2 EuroOil DPA package prepared · O ⏱4h
**Steps** Tailor the Golden DPA for a state-owned counterparty: procurement sensitivities, the
inverted-fee option if a fee is needed (Data Act "User" position), Moris routing per the waiver
answer.
💡 If money must flow *to* ČEPRO, the site-host/inverted shape avoids public-procurement friction
entirely — money flowing outward from a state enterprise is a very different approval path than
money flowing in.
✅ **Done when:** EuroOil-specific package ready for the post-OOO push.

---

# WEEK 6 · Sep 29–Oct 4 — Deploy and push

## 6.1 SuperZoo deployment kickoff — first 5 stores · P + M ⏱10h
⛔ **Prereq:** 4.1 signature · 3.4 readiness · signage delivered · DPIA signed off.
**Steps** Deploy S1/S2 to the first five, validate the data flow end-to-end, confirm sessions land
in the warehouse with the export gate applied.
💡 **Validate the k≥25 export gate before the first brand-facing output exists**, not after. It is
much cheaper to discover a leak in five stores than in fifty.
💡 Deploy the two easiest stores first to prove the runbook, then the two highest-value ones.
✅ **Done when:** 5 stores live, data validated, runbook written.

## 6.2 Push EuroOil to legal review · J + O ⏱5h
**Steps** Resume negotiation with the tobacco LOIs on the table; ensure the trading-data firewall
is explicitly understood — it is the objection behind every stall.
💡 Their real fear is being seen to hand supplier leverage to suppliers. Answer with the toxic-cut
prohibition **in writing** — the specific clause, not a reassurance.
✅ **Done when:** DPA in ČEPRO legal review with a named reviewer and a date.

## 6.3 Funnel follow-up · J ⏱4h
**Steps** Follow up the top-10 backchannel intros from W3; book 3 discovery calls.
💡 Use the **founding data-partner** scarcity honestly (C3): *"we need one or two chains per
category for statistical relevance — the category slot is what's limited, not our capacity."*
That is true, it creates real urgency, and it never implies exclusivity.
✅ **Done when:** 3 discovery calls booked.

---

# WEEK 7 · Oct 5–11 — Defend the position, widen the funnel

## 7.1 Negotiate EuroOil commercials — hold the line that matters · J + O ⏱6h

⛔ **Prereq:** 6.2 in legal review · tobacco LOIs in hand.

**Steps** Work the C1 ladder deliberately: open at rung 1 (free platform, 0% share); if the
state-owned economics require a flow of money, go to the **inverted shape** (we pay for site access
under a site-host agreement with an explicit Data Act waiver) rather than to a revenue share —
it is cleaner for their procurement *and* it puts us in the statutory "User" position.

💡 **The aggregate licence is the only thing you cannot trade.** Everything else — lag, embargo,
attribution, even money — is negotiable. If their legal will not accept perpetuity, park and
escalate; never drop the clause to close the week.
💡 A state-owned counterparty needs an internal justification memo more than a discount. Offer to
draft the one-pager their commercial lead uses to defend the deal internally.

✅ **Done when:** commercials agreed in principle, aggregate clause intact.

## 7.2 Mid-size discovery calls · J ⏱5h
**Steps** Run the three booked calls entirely on the win-win frame: their own-store insights first,
monetisation second, rights third. Qualify hard against the 60–100 multibrand criterion.
💡 Ask one question early that saves weeks: *"if you wanted to do a 5-store pilot next month, whose
signature would that need?"* The answer tells you whether this is a 6-week or a 6-month deal.
✅ **Done when:** 3 calls held, each qualified in or out with a reason.

## 7.3 Data ingestion validation — the first honest read · D + P ⏱4h
⛔ **Prereq:** 6.1 five stores live.
**Steps** Confirm session volumes against the 1,500/store/month planning rate, receipt-link yield
against the ~50% assumption, and attribute fill rates. Compare to the pilot baseline.
💡 **If the real rate is materially below plan, the stat-sig date moves and the brands pillar must
know within 24 hours** — the seat pricing and the density escrow both depend on this number.
🔍 **Research — validate the planning rate (D, ⏱2h).** *What:* actual sessions/store/month and
receipt-link yield in live SuperZoo stores. *Where:* the warehouse, first two weeks of data.
*Do what with it:* update the deployment curve and, if needed, the density milestones in the
brands' 2027 orders **before** they are signed in W11 — an over-promised escrow becomes a refund.
✅ **Done when:** measured rates documented; deviations flagged cross-pillar.

---

# WEEK 8 · Oct 12–18 — Mandate #2

## 8.1 Close EuroOil · J + O ⏱8h
⛔ **Prereq:** 7.1 commercials · Moris routing resolved (waiver or via-Moris) · procurement path clear.
**Steps** Execute the DPA. Confirm in the same signature: the gold-station rider, the wave-1 store
list, and the brand-outreach blessing in writing (upgrading the verbal greenlight).
💡 Get the greenlight **written into the contract** rather than left as an email. It is the
difference between a favour and a right, and it survives personnel changes at a state enterprise.
✅ **Done when:** Mandate #2 signed at DPA level.

## 8.2 Qualify the funnel down to 3 · J ⏱3h
**Steps** From the discovery calls, shortlist three candidates for Mandate #3 by *fastest time to
close*, not by size.
💡 Mandate #3 will not deliver stat-sig data before 21 Nov — its value is the **2027 pipeline** and
the "we have a repeatable model" claim in fundraise DD. Choose accordingly.
✅ **Done when:** top 3 shortlisted with next steps dated.

---

# WEEK 9 · Oct 19–25 — Deployment sprint

## 9.1 Scale to 50% of the wave · P + M ⏱12h
⛔ **Prereq:** runbook from 6.1 · signage delivered per store · contractor hired if throughput demands it.
**Steps** Push SuperZoo toward 30–60 live and begin EuroOil stations. Track **rights-clean stores
live**, never devices shipped.
💡 The integration contractor (Team/Ops, Dec in the original plan) may need to arrive **now** if
wave-1 throughput is the binding constraint. Deployment velocity is the one thing money can
genuinely buy in this window.
💡 Batch installs geographically; a two-store day is barely more expensive than a one-store day.
✅ **Done when:** ≥50% of wave 1 live with data validated.

## 9.2 Pitch Retailer #3 · J ⏱4h
**Steps** Present mandate + PoV to the top shortlisted candidate, using Mandates #1 and #2 as
reference cases (named only where `can_name_publicly` allows).
💡 Two signed chains change the conversation entirely: you are no longer proposing an experiment,
you are offering membership in something that exists. Say the sentence: *"two chains are already
instrumented; the category slot for yours is what's open."*
✅ **Done when:** pitch delivered, decision date agreed.

---

# WEEK 10 · Oct 26–Nov 1 — Prove stat-sig

## 10.1 Confirm statistical significance — and define it honestly · D ⏱6h

⛔ **Prereq:** pre-registered definition (from Week 1 of the calibration track): which cells, what
n, what threshold. Without it, "stat-sig confirmed" is an opinion.

**Steps**
1. **Pet (SuperZoo, POS-linked):** measure against the coarse grid — 8 personas × 12 categories,
   k≈130/cell ≈ 12.5k joins. The pilot already held ~7.3k usable joins, so wave-1 stores should
   cross it inside this window.
2. **Fuel (EuroOil):** ⚠ **without the gold station this is audience-significance only, not
   purchase-linked.** Report it as such.
3. Publish a one-page significance statement per category: what is proven, at what n, with what
   confidence, and what is explicitly *not* claimed.

💡 **"Stat-sig" means two different things across the two categories and conflating them is the
fastest way to lose a sophisticated brand.** Pet = purchase-behaviour significance. Fuel =
audience significance, unless the receipt feed landed. Say which, every time.
💡 Include an honest null in the statement. It is what makes the rest credible to an insights manager.

✅ **Done when:** significance statement published per category, with the claim ladder attached.

## 10.2 Lock the EuroOil 50 · J + D ⏱3h
**Steps** Choose the 50 stations that maximise audience reach **and** seat-depth relevance for
tobacco — not the operationally easiest ones.
💡 Ask ČEPRO for traffic and format data and select for category mix. A station list chosen for
convenience produces a read no brand wants to buy.
✅ **Done when:** 50 locations locked with the rationale documented.

---

# WEEK 11 · Nov 2–8 — Hand over to brands

## 11.1 Activate seat depth — the formal handover · D + J ⏱5h
⛔ **Prereq:** 10.1 significance statements.
**Steps** Package the live category reads for the brands pillar: what exists, at what density, what
claims are licensed, what is coming by when. Brands needs this to sign the three 2027 orders in
their W11.
💡 **The density numbers in this pack become escrow obligations in the brands' 2027 orders.** Do not
round up. An over-promised milestone converts to a refund in Q2 and destroys the account.
✅ **Done when:** handover pack delivered; brands owner confirms the density figures are signable.

## 11.2 Cross-retailer aggregate proof — the investor artifact · D ⏱4h
**Steps** Build a sanitised demo showing SuperZoo + EuroOil insights side by side, chain-masked —
the first visible instance of the cross-retailer aggregate that the entire valuation story rests on.
💡 This is the single most important artifact for fundraise DD: it is the moat made visible. But it
must be **chain-masked even internally-facing**, so the habit is unbreakable when it goes external.
✅ **Done when:** demo built and reviewed against the never-say list.

---

# WEEK 12 · Nov 9–15 — Pipeline for Q1

## 12.1 Teta + GymBeam full-mandate conversations · J ⏱5h
**Steps** With two mandates live, move both to full DPA discussions for Q1 2027.
💡 Teta's sharpest angle remains the counter-incumbent pitch — *own your shopper layer instead of
watching a competitor's data get monetised* — but verify their franchised share first and scope the
agreement to company-operated stores explicitly.
✅ **Done when:** 1 new DPA in draft.

## 12.2 Retailer case studies · J + D ⏱4h
**Steps** Two case studies (named where permitted, anonymised otherwise) for fundraise DD and future
retailer pitches.
💡 Lead each with what the retailer got in the first 30 days — the ops win, not the data ambition.
That is what the next retailer's CMO will actually read.
✅ **Done when:** 2 case studies approved by the retailers.

---

# WEEK 13 · Nov 16–21 — Review and hand off

## 13.1 Score the pillar · J + O ⏱4h
**Steps** Against the goal: 2 DPA-level mandates · stat-sig per category (honestly labelled) · seat
depth ≥5 named buyers each. Package the cross-retailer proof for the fundraise DD close.
💡 Report **rights-clean stores live** and **signed rights instruments** — the asset scoreboard
numbers — not devices deployed. The 21 Nov go/no-go reads those two lines first.
✅ **Done when:** pillar verdict recorded in `17-signals-21nov.md`.

## 13.2 Lock the Q1 retailer pipeline · J ⏱3h
**Steps** Next five targets from the scored list, with the sequence and the pitch angle per chain.
✅ **Done when:** Q1 pipeline documented and dated.

---

# Standing rules — check before every retailer artifact

| Rule | Why it exists |
|---|---|
| The perpetual k≥25 aggregate licence is the only non-negotiable | It is the difference between an enablement vendor (~4–8×) and a measurement currency (8–12×) |
| Trading data never ingested — cost, margin, sell-through, elasticity | We cannot leak what we never receive; it is a technical fact, not a promise |
| The toxic cut is named and prohibited in writing | Named retailer × named brand vs named competitor is the only output that can be carried into a trade negotiation |
| Chain-masking by default; attribution only by written per-cut opt-in | Masking is thin at two chains — say so rather than overselling it |
| Honest scarcity only: founding data-partner slots, 1–2 chains per category | Real (statistical relevance), urgent, and never implies exclusivity |
| Never adversarial framing toward suppliers | Our ICP is those suppliers; one forwarded deck ends the seats |
| Ask for the smallest rung that unlocks the next: mandate → PoV → DPA | Small yeses compound; a big ask early triggers procurement |
| Commercial terms agreed with the business *before* legal drafts | Otherwise legal negotiates terms nobody agreed to |
| Report rights-clean stores live, never devices shipped | The measurement chooses the plan |

# The research backlog in one place

| ID | What | Owner | By | Why it blocks money |
|---|---|---|---|---|
| ⚠ POS-1 | POS vendor + receipt-export capability, cost and lead time (ČEPRO and SuperZoo) | O | 13 Sep | **Blocks the gold station and therefore purchase-linked stat-sig.** A third party's backlog can fail the 21 Nov milestone |
| FUN-1 | Scored top-30 CEE list: slots, multibrand share, ownership model, named decision-maker | J | 6 Sep | Wrong targets = two years of pitching instead of two mandates |
| TECH-1 | Per-store readiness: firmware, ONVIF user, sub-streams, recorder spec, bandwidth | P | 13 Sep | The ONVIF default alone can lose an install day per store |
| RATE-1 | Measured sessions/store/month and receipt-link yield vs the 1,500 / 50% assumptions | D | 11 Oct | Sets the density milestones that become escrow refund obligations |
| C7 | SuperZoo third-party brand share (shared with brands pillar) | J/D | 30 Aug | Decides whether the pet category has sellable seat depth at all |
| SEC-1 | Vendor security questionnaires for both chains, answered once and reusable | O | 13 Sep | Unparallelised, this adds 4–8 weeks after signature |
| M2C-1 | M2C's scope, contract and appetite to be a delivery ally rather than a rival bidder | J | 20 Sep | They run part of the estate we are bidding to instrument |
| COOP-1 | Which regional co-op can actually sign, and who chairs it | J | Q1 | Central cannot bind members; the group store count is a mirage |
