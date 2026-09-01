# RMN pillar — deep execution guide (v1.0, 26 Aug 2026)

Companion to `rmn-plan.md` / `rmn-plan.html`. **This is the working document.**
**Goal:** prove or kill the **dual-monetization thesis** by the **7 Nov decision memo** — measurement
priced below the wall that killed every prior attempt, because the same visual data has a second
life. Two live threads (NANOVO media = operator · Vistar = SSP/programmatic). One decisive test:
a real campaign measured at cost.
**Hard cap: ≤20 founder-hours for the whole pillar** (engineering and Dima hours are counted
separately). The running tally is at the end — if it breaks 20, a task gets cut, not the cap.

**Legend:** ⛔ prerequisite that blocks the task · 💡 operator tip · 🔍 research gap (what to find,
where, what to do with it) · ✅ definition of done · ⏱ hours — **F** = founder, **E** = eng/Dima.
**Owners:** J = Josef · O = Ondřej · D = Dima · P = Petr · H = Honza.

---

# WEEK 1 · Aug 24–Sep 6 — The corridor, the map, the one-pager

## 1.1 Price-corridor memo — know the number before anyone asks · O + D ⏱F2h E1h

⛔ **Prereq:** none. Everything in this pillar prices off this memo.

**Steps**
1. Collect the external anchors (research annex, all external-safe): audience-data fees on media
   **40–45% of CPM, capped ~$3.50–4.00** (retailer data via programmatic) · **sales-lift measurement
   $0.75 CPM** with $150k minimums (US retail-media anchor) · place-based measurement onboarding
   **~$11 per venue** (Geopath) · sensor SaaS **$9–49 per unit per month** (V-Count) · in-store
   screen CPMs **$10–50**, DOOH **$5–20** · Czech DOOH ≈ **125 CZK per spot play ≈ €5 CPM**
   (trade estimate, verify).
2. Compute our **cost floor per capture point at 10× volume**: ~€41/store/mo all-in today (credits
   subsidised); post-credit ~€43–59. One screen ≈ one capture point unless a store's existing camera
   already covers the screen zone (then marginal ≈ €0).
3. Translate into **three price points**: (a) paid **measurement API** per screen per month
   (target band; compare V-Count's floor), (b) **per-campaign measurement fee** (€ per campaign or
   as % of media), (c) **SSP data-fee split** we would accept as a data provider.
4. State the dual-monetization discount rule: the measurement price may go **below** cost only when
   the second-market licence is signed; otherwise price ≥ cost.

💡 **Operators think in CPM and per-screen; brands think per-campaign.** Have both denominations on
one page so you never convert live in a meeting.
💡 The number that matters most is one you don't have yet: **the price that killed the Bluetouch /
NANOVO measurement asks.** Get it in 2.1 / 2.3 — it calibrates the whole corridor.
💡 Quividi's model is an **annual unlimited-network licence**, not per-screen — operators at scale
hate per-screen bills. Offer tiers by network size, never a naked per-screen rate.

🔍 **Research — RMN-4, CZ DOOH price anchors (O, ⏱F0.5h inside the 2h).** *What:* verified CZ
DOOH CPM / spot pricing and what CZ operators currently charge (or fail to charge) for audience
proof. *Where:* operator rate cards, admen.cz-type trade sources, one agency planner. *Do what
with it:* replaces the €5 CPM estimate with a real number and sets the ceiling for a measurement fee
(nobody pays 50% of media for measurement).

✅ **Done when:** one page — anchors, cost floor, three price points, the discount rule.

## 1.2 Map the two threads — and the third that's evidence · J ⏱F1h

**Steps**
1. **NANOVO media** (operator): who we're talking to, stage, what they asked for, estate size,
   player hardware, sensors present or not, current measurement provider (likely none).
2. **Vistar Media** (SSP/programmatic DOOH): contact, stage, what they said the data is interesting
   *for*, which CEE inventory they carry, how they key audience data (venue ID × daypart).
3. **Bluetouch media** (evidence, not a deal): the story of customers asking for measurement and
   price killing it — who asked, what price, when.

💡 **These are three different conversations and must never be merged:** NANOVO = capture access +
measurement (barter shape) · Vistar = data *distribution* (we would be a data provider) · Bluetouch
= market evidence for the fundraise and for pricing.

🔍 **Research — RMN-1 / RMN-2 (J, ⏱F0.5h inside the 1h + desk research by D E1h).** *What:* NANOVO's
estate (screens, venue types, player spec, sensor presence, client list) · Vistar's CEE footprint
and **data-partner spec** (how third-party audience segments are ingested and paid). *Where:* their
sites, LinkedIn, prior meeting notes, Vistar's public data-partner pages. *Do what with it:* the
NANOVO facts decide S1/S2/S3 for screens (their player runs our software, or our edge box, or their
VMS); the Vistar spec decides whether our taxonomy is a week of mapping or a quarter (3.2).

✅ **Done when:** three thread cards in the CRM with stage, contact, ask, and known facts.

## 1.3 The operator one-pager — API + barter, licence clause visible · O ⏱F1.5h

⛔ **Prereq:** 1.1 corridor · rights clause from the retailers DPA template (1.4).

**Steps** One page for operators, two options side by side:
**Option A — paid measurement API** (per-network licence tiers; they report as they like,
white-label) · **Option B — measurement-for-access barter** (we provide the measurement layer;
they grant capture access + the **k≥25 aggregate-resale licence**). The licence clause is printed
on page one in both options — no surprises in legal.

💡 Vocabulary wins meetings: use their words — **OTS** (opportunity to see), **LTS** (likelihood to
see), impression multiplier, dwell, dayparts. Our deliverable is "OTS/LTS-grade audience by daypart
with demographics" — that is a sentence a media owner can resell tomorrow.
💡 **Claim discipline on "attention":** without gaze tracking, attention = *presence in the viewing
zone + dwell while the creative plays*. Define it on the page. Never say "viewed" or "looked at"
unless we measure gaze — a media buyer will ask, and the honest definition is still valuable.

✅ **Done when:** one-pager exists in CZ + EN, licence clause visible, definitions footnoted.

## 1.4 Reuse the rights clause — operators are controllers too · O ⏱F0.5h

⛔ **Prereq:** retailers guide 1.1 (Golden DPA) — the aggregate-licence and reseller clauses already
exist there.

**Steps** Lift the **aggregate-resale licence**, the k≥25 export gate language and the Data Act
"User" clarity into an operator addendum. Note the GDPR posture: the operator is controller of the
screen-side processing, we are processor → **without the explicit licence, the second-market leg
does not exist, and without the second market the whole price hack collapses.**

💡 Ephemeral, in-memory, no-image-storage processing is the established EU-compliant pattern for
camera-based DOOH audience measurement (the Quividi posture). Our compliance pack already says
this; attach the relevant page.

✅ **Done when:** operator addendum drafted, ready to attach to any Option-B conversation.

---

# WEEK 3 · Sep 7–20 — Two offers, two tables, one calibration call

## 3.1 The NANOVO conversation — the two-option offer · J ⏱F2h

⛔ **Prereq:** 1.3 one-pager · 1.4 addendum · 1.1 corridor memorised.

**Steps**
1. Open with their customers' problem, not ours: *"your advertisers have asked you for audience
   measurement; the price has never worked. We think we can change the price — because the same
   data has a second life."*
2. Put both options on the table; log which they reach for and why.
3. Walk out with **five facts**: screen count and venue types · player hardware (can it run our
   software?) · whether sensors already exist on players · **the price they were asked to pay and
   refused** · the names of the customers who asked (with permission to approach — they are the
   test-campaign brand in 4.1).

💡 **Their refused price is the most valuable single number in this pillar** — it is the wall we
claim to get under. Ask for it plainly: *"what did the measurement quote look like when your
customers asked?"*
💡 If they lean to barter: confirm the licence in the same breath — *"the way we make the price
work is that we can use the anonymous aggregates elsewhere; that's the clause on page one."*
If they resist the licence, price goes to Option A at ≥ cost. No licence, no discount.
💡 Ask for **one venue as a test site** before asking for the estate. Small yes first.

✅ **Done when:** offer made; five facts logged; test-site appetite known; option preference recorded.

## 3.2 The Vistar probe — what would they list, at what split · J ⏱F1.5h

⛔ **Prereq:** RMN-2 (their data-partner spec).

**Steps**
1. Frame us as a **data provider**, not a media seller: on-site actual audience by venue and
   daypart, versus the mobile-location panels their current data partners use.
2. Ask three things: what **segment spec** they'd list (keyed by venue ID × daypart, tied to the
   physical location per founder answer #12) · their standard **data-partner fee split** · whether a
   CEE segment pilot is possible in Q1 with one operator's venues.
3. Log the answers against the corridor (1.1).

💡 Programmatic DOOH buys **venue-level audience packages** — our advantage is that our numbers
come from *the venue itself*, not from a phone panel that guesses who was nearby. Say that
sentence; it is the whole differentiation.
💡 Do not promise venues we don't have access to. The Vistar thread is only real once an operator
(3.1) grants capture — sequence the promise after that yes.

✅ **Done when:** segment spec + fee split + pilot appetite logged.

## 3.3 Bluetouch — the evidence call · J ⏱F1h

**Steps** One call, no pitch: reconstruct the history — which customers asked for measurement,
what was quoted, why it died. Ask if they'd want to be a second operator conversation later.

💡 This is a **fundraise artifact and a pricing artifact in one**: "operators were asked and the
price killed it" is the validated-demand line in the RMN slide, and the refused price calibrates
1.1. Fifteen minutes of listening; log verbatim.

✅ **Done when:** history logged; refused price known (or known unknown).

---

# WEEK 5 · Sep 21–Oct 4 — The proof wedge and the engineering answer

## 5.1 Scope the tobacco-wave campaign measurement — P3, no RMN partner needed · J + D ⏱F1h E3h

⛔ **Prereq:** the funded screens exist (EuroOil wave — **Moris's media estate**) and our capture
device is at the screen location · **Moris in the loop** (they sell that media; measurement makes
their media more sellable — this is an upsell for them, frame it so) · EuroOil consent for campaign
measurement (check the pilot/mandate scope; if unclear, it is a one-line addendum, not a new deal).

**Steps**
1. Pick a campaign with a **creative comparison** — an A/B or a creative swap mid-flight. A
   single-creative campaign yields a number with nothing to compare it to.
2. Define the measurement precisely (per 1.3): presence in viewing zone × dwell × daypart ×
   demographic, per creative. Write the definition into the scope.
3. **Mirror the buyer's existing post-campaign report** — ask the brand/agency for one and match its
   structure. Familiar shape, new numbers.
4. Confirm signage at the screen location covers measurement (two-layer notice).

💡 The proof wedge needs no operator deal because **we already have capture at those screens.**
It is the cheapest real test in the pillar — and its output is the artifact that makes 4.1 and the
Vistar pilot sellable.
💡 Moris alignment: measurement turns their media into *proven* media. Position it as their upgrade,
not our project — it also quietly makes Moris the first "operator" partner, which is a cleaner
story than a cold one.

🔍 **Research — the buyer's report template (J, ⏱F0.5h inside the 1h).** *What:* the post-campaign
report a CZ media buyer / tobacco trade marketer currently receives for in-store or DOOH. *Where:*
ask the brand contact or Moris. *Do what with it:* our deliverable copies its structure exactly —
adoption is about not having to learn a new format.

✅ **Done when:** scope doc with definitions, campaign chosen, consent path confirmed, report
template in hand.

## 5.2 Segment-taxonomy alignment — a week or a quarter? · P + D ⏱F0.5h E4h

⛔ **Prereq:** RMN-2 (Vistar's ingestion spec) — without a target schema the estimate is fiction.

**Steps** Engineering maps our ~80 attributes / personas onto the audience taxonomy the SSP
consumes (IAB-style audience taxonomy, keyed venue × daypart). Deliverable: an estimate —
**mapping only (days)**, **mapping + aggregation service (weeks)**, or **new modelling (quarter)** —
with the one thing that decides it: does the SSP need segments we do not observe?

💡 Ask for the estimate in three buckets, not in days. The decision memo only needs to know which
bucket; precision here is wasted engineering time.
💡 If the answer is "quarter", the SSP thread becomes a 2027 line item automatically — that is
useful information, not a failure.

✅ **Done when:** estimate in one of three buckets, with the deciding factor named.

---

# WEEK 7 · Oct 5–25 — The one decisive test

## 7.1 Measure one real campaign at cost · J + D + P ⏱F2h E8h

⛔ **Prereq:** 5.1 scope · campaign live · capture validated at the screen location · brand agreed
to receive the report (free / at cost) and to **give a price reaction**.

**Steps**
1. Run the measurement for the campaign's flight (2–4 weeks).
2. Produce the report in the buyer's own template (5.1) — OTS/LTS-grade audience by daypart ×
   demographic × creative, with the definitions footnoted and **one honest null**.
3. Deliver in person or on a call, never by email alone — the price reaction (7.2) is the point.

💡 "At cost" must be literal and stated: *"we're charging you our cost, €X, because we want your
honest read on what it's worth."* A free report yields a polite thank-you; a cost-priced one yields
a real willingness-to-pay conversation.
💡 The k≥25 export gate applies to campaign reports too — small-venue dayparts will suppress. Say so
up front; it is a credibility feature, not a bug.

✅ **Done when:** report delivered; measurement cost logged.

## 7.2 Log the price reaction — the memo's decisive datapoint · J ⏱F0.5h

**Steps** Ask three questions and log verbatim: *what would you pay for this per campaign? · would
you pay it as a % of media instead? · would your operator paying for it (Option A) change what you
buy from them?*

💡 The third question is the dual-monetization thesis, tested in one sentence: if measured media is
worth more to the buyer, the operator can pay for measurement out of the uplift — and our
second-market licence closes the rest of the gap.

✅ **Done when:** three answers logged against the corridor; delta vs cost computed.

---

# WEEK 10 · Oct 26–Nov 7 — The decision

## 10.1 Write the decision memo — rule it by the pre-written criterion · J + O ⏱F3h

⛔ **Prereq:** 7.2 price reaction · 3.1 / 3.2 option preferences · 5.2 engineering bucket ·
second-market signals from the index fill gate (1 Oct), the AI-data kill-test (15 Oct), and the
Vistar appetite.

**Steps**
1. Two-legged kill test, exactly as written in `rmn-plan.md` §5: **(a)** does a second-market
   path for non-POS visual data validate (index buyer interest / SSP segment appetite / eval-set
   demand — any one)? **(b)** does an operator accept barter or a paid API at ≥ our marginal cost?
   **Kill only if both fail.**
2. If alive: define the **2027 line item** — product (API tier / campaign fee / SSP data provider),
   first operator, price, engineering bucket, dependency on the index fill gate.
3. Rule the watch item: does the partnership read as **measurement currency** (strengthens the
   acquirer story) or **adtech** (muddies the multiple)? Framing rule: measurement language leads,
   always.
4. One page. Verdict on line one.

💡 A kill *with a verdict* is a green outcome for the operating system. The only red is a pillar
that limps past 7 Nov unruled and keeps quietly consuming hours.

🔍 **Research — RMN-7, the acquirer lens (O, ⏱F0.5h inside the 3h).** *What:* do the likely
acquirers (measurement incumbents, retailer data arms) own or buy DOOH/in-store audience-measurement
assets, and how are such assets valued vs adtech? *Where:* recent M&A in audience measurement,
the research annex's exit multiples. *Do what with it:* answers "strengthen or muddy" with evidence
rather than instinct.

✅ **Done when:** memo ruled on 7 Nov, verdict recorded in `../../strategy/…/10-calendar-gates.md`.

---

# WEEK 11 · Nov 7–21 — Only if alive

## 11.1 Operator term-sheet shape · O ⏱F1.5h
⛔ **Prereq:** 10.1 verdict = alive.
**Steps** One-page term shape for the first operator: access + licence + price tier + test-venue
→ estate ramp + measurement SLA + the toxic-cut and k≥25 rules carried over. Not a negotiation —
a shape for Q1.
💡 Keep the retailer doctrine intact: **no exclusivity**, chain/venue masking by default, the
aggregate is ours. Operators will ask for exclusivity more often than retailers do; the scripted
no is the same.
✅ **Done when:** term shape drafted for Q1 use.

## 11.2 Index-feed assessment — is RMN the index's best supply? · D + J ⏱F0.5h E2h
⛔ **Prereq:** index fill gate passed (1 Oct); operator capture access exists or is dated.
**Steps** Estimate sessions/month the operator estate would add to the Brand-Worn Index (thousands
of screens vs the index's ~16-location requirement), and whether venue mix skews the index.
💡 If the fill gate passed, RMN estates may be the index's cheapest and largest supply — a
visual-only product that never needed POS. That is the strongest expression of "RMN as data source"
and it belongs on one slide in the Q1 round.
✅ **Done when:** one-paragraph assessment feeds the Q1 plan.

---

# Founder-hour budget — the cap that protects the Brands pillar

| Task | F hours | Running |
|---|---|---|
| 1.1 corridor memo | 2.0 | 2.0 |
| 1.2 thread map | 1.0 | 3.0 |
| 1.3 operator one-pager | 1.5 | 4.5 |
| 1.4 rights clause reuse | 0.5 | 5.0 |
| 3.1 NANOVO conversation | 2.0 | 7.0 |
| 3.2 Vistar probe | 1.5 | 8.5 |
| 3.3 Bluetouch evidence call | 1.0 | 9.5 |
| 5.1 proof-wedge scoping | 1.0 | 10.5 |
| 5.2 taxonomy estimate (founder share) | 0.5 | 11.0 |
| 7.1 the one campaign | 2.0 | 13.0 |
| 7.2 price reaction | 0.5 | 13.5 |
| 10.1 decision memo | 3.0 | 16.5 |
| 11.1 term shape (if alive) | 1.5 | 18.0 |
| 11.2 index-feed assessment (founder share) | 0.5 | **18.5** |

**Rule:** the cap is 20. If any task overruns, the next task shrinks or dies — the cap never moves.
Engineering/Dima hours (~E19h total) are separate and must be cleared against the calibration and
S1/S2 priorities first; RMN never pre-empts either.

# Standing rules — check before every RMN touch

| Rule | Why it exists |
|---|---|
| No measurement discount without the signed aggregate-resale licence | Without the second market the price hack collapses into the same wall that killed the predecessors |
| Attention = presence in viewing zone + dwell; never "viewed" without gaze measurement | A media buyer will ask; the honest definition still sells |
| NANOVO ≠ Vistar ≠ Bluetouch — three conversations, never merged | Operator access, data distribution and market evidence are different deals |
| Measurement-currency framing leads; adtech framing never does | Protects the acquirer story and the multiple |
| k≥25 applies to campaign reports; small dayparts suppress | Credibility feature — say it first |
| Founder-hour cap 20; RMN never pre-empts Brands, calibration or S1/S2 | A discovery pillar must not eat a selling pillar |
| Kill on 7 Nov only if both legs fail; either leg alive = 2027 line | The pre-written criterion beats November optimism or fatigue |

# The research backlog in one place

| ID | What | Owner | By | Why it blocks the decision |
|---|---|---|---|---|
| RMN-1 | NANOVO estate: screens, venues, player spec, sensors, clients who asked | J/D | 6 Sep | Decides the deployment SKU for screens and the test venue |
| RMN-2 | Vistar data-partner spec: segment keys, formats, fee split, CEE inventory | D | 6 Sep | Decides whether taxonomy work is days or a quarter |
| RMN-3 | Bluetouch history: who asked, what price killed it | J | 20 Sep | The refused price calibrates the whole corridor |
| RMN-4 | Verified CZ DOOH CPM / spot pricing and current audience-proof charges | O | 6 Sep | Sets the measurement-fee ceiling |
| RMN-5 | Buyer's post-campaign report template | J | 4 Oct | Our report copies its structure — adoption depends on it |
| RMN-6 | Who really has "thousands of screens" reachable by one signature in CEE | D | 20 Sep | Scale reality for the 2027 line item |
| RMN-7 | Acquirer lens: are DOOH/in-store measurement assets valued as measurement or adtech | O | 31 Oct | Rules the strengthen-vs-muddy watch item with evidence |
