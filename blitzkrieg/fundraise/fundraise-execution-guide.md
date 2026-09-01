# Fundraise pillar — deep execution guide (v1.0, 26 Aug 2026)

Companion to `fundraise-plan.html`. **This is the working document.**
**Goal:** €400–600k wired at a €6M cap by **21 Nov**.
**Measurable targets for FOMO:** 50 investors contacted by end of W2 · 15 deep-dives by W4 · "Closing bridge on 15 Oct" communicated clearly to VCs.
**Dual-track Timeline:**
- **Angels:** Fast close (first-come, first-served), standard CLA, aiming to close by end of October.
- **VCs:** Milestone-driven (Mandate, Parity drops), strict term-sheet deadline on **16 Oct**. If DD lags, defer to Series A.

**Ruling C2 applied throughout:** convertible/CLA at cap for the whole round — no SPA/SHA, no
priced negotiation, and therefore a **rolling close**: first wires can land mid-October, five
weeks before the cash wall.

**Legend:** ⛔ prerequisite that blocks the task · 💡 operator tip · 🔍 research gap (what to find,
where, what to do with it) · ✅ definition of done · ⏱ estimated hours.
**Owners:** O = Ondřej (process owner) · J = Josef (pitch) · D = Dima (artifacts) · C = counsel.
**Note:** Ondřej is OOO Sep 21–28 — the process is his; W4's handoff pack (4.4) is what keeps the
round alive that week.

---

# WEEK 1 · Aug 24–30 — One number set, one instrument, one deck

## 1.1 Lock the number set — and the leaking artifact · O ⏱3h

⛔ **Prereq:** none. **Do this before any deck work** — every slide inherits from it.

**Steps**
1. `12-numbers-external.md` is the canonical external curve: **€0.8–1.4M at the Feb-27 checkpoint →
   €10–14M by 2031 → €80–168M at currency multiples.** Nothing else ever leaves the building.
2. **Lock the old exit artifact TODAY** — it is on an open share link and contains the cap table,
   dilution and founder proceeds, and it still shows superseded numbers (old 2027 line, old
   retailer split, €3M angel cap). Restrict it; re-publish later from the reconciled set if needed.
3. **Define the cap convention in writing:** the plan says €6.0M *pre-money*. State it explicitly
   in the CLA ("conversion price = cap ÷ fully-diluted pre-money share count") and check the
   existing €80k CLA (€3.5M cap) uses the same convention — an inconsistency here surfaces in DD.

💡 Two curves that differ by 9× in one data room loses the round — this was found and fixed once
already; the task here is making sure no stale artifact resurrects it.
💡 If an investor asks what the internal plan says, the honest scripted answer: *"we run against a
materially more aggressive internal target and underwrite the number you're seeing."* That answer
raises credibility; showing the internal table does not.

✅ **Done when:** exit artifact restricted · cap convention written · one-page "numbers card" (the
only figures anyone may quote) circulated internally.

## 1.2 Deck v2 — build FROM the spec, don't re-derive · J ⏱10h

⛔ **Prereq:** 1.1 numbers card.

**Steps**
1. Build the 10–12 slides from **`templates/investor-deck/SPEC.md`** — the spine already encodes
   the currency narrative, the exit maths and the velocity slide. Do not reinvent it.
2. The core narrative slides that answer objections and define our position:
   - **Slide 5 (velocity/mechanism):** answers *"why won't the next 8 months look like the last 8"* — the was/is table (retailer paid → pays nothing, our hardware → their cameras, etc.).
   - **Slide 6 (The Moat):** explicit argument that we are the first and only to connect visual human behavior with POS ground truth (receipts). We are building the most accurate behavioral model backed by real transactions, not just hardware.
   - **Slide 7 (The Capital Flywheel):** tells the exact story of the investors' money. **Step 1:** Invest €500k to cover "Store Ops" (€40/store) and build the network to acquire data. **Step 2:** Form a unified "Category Read" from this data. **Step 3 (20x return):** Sell this one dataset to 6 different brands at €30k each. Margins skyrocket because supply cost is fixed.
   - **Slide 8 (exit maths):** answers *"can't see the VC case"* — €8–12.5M ARR by 2031 → €100–150M strategic exit → 10–16× for this round.
3. Traction slide: three labels only — **SIGNED / IN NEGOTIATION / TARGET** — merciless.
4. One appendix slide: the **survival variant** ("if you all say no, here is the company that still
   exists"). It removes the desperation discount.
5. Close with the ask derived from the exit: what €500k buys = rights breadth, recurring seats,
   the cross-retailer aggregate v1 — each with its named date.

💡 Never use the word "pivot". The one-liner is **"we changed the payer, not the product."** The
pilots are how you learned where the money is — eight months of bought answers, not lost time.
💡 State P(stretch) yourself before they derive it, paired with the asset scoreboard. Investors
discount claimed certainty and pay for calibrated honesty.
💡 12 slides, ≤15 words a slide where possible. The deck gets 3 minutes solo before any meeting —
it must survive being read without you.

✅ **Done when:** deck v2 exists · both objection-slides pass a cold read-aloud test · never-say
lint passed (no internal benchmarks, no unlabelled pipeline).

## 1.3 High-fidelity product mockup — sell the vision, not the hardware · J + D ⏱8h

⛔ **Prereq:** 1.1 (mockup numbers must come from the external set or be clearly synthetic).

**Steps**
1. Scope: the **currency dashboard** as it will look at scale — a category read (who buys, segment
   × conversion), the chat interface answering a brand question, the cross-retailer aggregate view
   (chain-masked), and the quarterly Excel export a brand receives.
2. Build clickable (Figma or plain web) — 5–6 screens, real interactions, **synthetic data
   labelled as illustrative** in a footer on every screen.
3. This artifact carries tech DD in W10 — build it once, well.

💡 The mockup's job is to decouple the raise from deployment delays: investors fund what the
product *becomes*, and the live pilots prove the data underneath is real. Pair the mockup with the
self-benchmark kit — vision + proof, never vision alone.
💡 Use the GymBeam/sportstore real numbers in one screen (labelled real) and synthetic everywhere
else (labelled illustrative). Mixing unlabelled real and synthetic in one artifact is the
credibility mistake DD remembers.

✅ **Done when:** clickable mockup live on a private link; every screen labelled real vs illustrative.

## 1.4 The CLA instrument — rolling close by design · O + C ⏱4h

⛔ **Prereq:** 1.1 cap convention.

**Steps**
1. Counsel drafts ONE CLA template: €6M pre-money cap · no discount needed at this stage (or a
   small one — decide once, applies to all) · qualified-financing conversion trigger · maturity ·
   **identical terms for every investor** · MFN clause so early signers aren't disadvantaged later.
2. Design the rolling close mechanics: signatures collected continuously, wires accepted as they
   come, no "closing date" dependency between investors.
3. DocuSign-ready with a one-page term summary (investors decide on the summary; lawyers check
   the CLA).

💡 **One price for everyone, no negotiation** — that is the entire point of the instrument. The
moment one investor gets a different cap, every conversation reopens. The scripted answer:
*"the terms are identical for everyone in this round; what's negotiable is allocation."*
💡 MFN costs you nothing now and removes the early-signer's fear of being the sucker — it is the
clause that makes "sign this week" a safe decision.
💡 Ask counsel now about **KYC/AML on incoming investment wires at your bank** — CZ banks can hold
first-time investment wires for days. Pre-clear the process in week 1, not week 13 (→ 🔍 BANK-1).

🔍 **Research — BANK-1 (O, ⏱1h).** *What:* your bank's requirements and lead time for incoming
CLA investment wires (documentation, source-of-funds, limits). *Where:* one call to the bank's
business desk. *Do what with it:* build the wire checklist investors receive with their signed CLA,
so week 13 is confirmation, not discovery.

✅ **Done when:** CLA template + term summary at counsel with delivery ≤3 Sep; bank process known.

## 1.5 Build the 150+ target list — four tiers, four jobs · O ⏱6h

**Steps**
1. **Tier 1 — warm Czech re-entry (~30):** the ~80% approached Dec-2025 + current follow-ups.
   Their job: convert or **clear**. They get the milestone contract (2.1), never a re-pitch.
2. **Tier 2 — operator angels & strategics (15–25):** ex-NIQ/GfK/Kantar CZ execs, retail-media
   operators, FMCG data leaders, Marek's circle, Tomáš Šepek (uLékaře), and Czech angel syndicates like Depo Ventures and Garage Angels. Their job: **manufacture the anchor** and validate the thesis.
3. **Tier 3 — CEE regional funds (40–60):** PL/DACH/Baltics/Nordics with commerce/data theses.
   No old anchor — for them this is a first impression, not a pivot.
4. **Tier 4 — Western EU/UK data & retail-tech specialists (30–50):** the ones who price
   measurement multiples. Opened now, closed in the Q1 round — placed meetings, not this round's
   money.
5. Every row: fund · named partner (the person, not info@) · thesis fit · check size · stage ·
   warm path · tier · CRM stage.
6. **Data-driven Outreach Rule:** Every email to a VC must include a specific parallel to a data-infra/B2B SaaS company from their own portfolio (e.g., *"We saw how you scaled [Portfolio Company] via data aggregation; our model works identically in retail."*).

💡 **Qualify on four axes before anyone gets an email:** stage fit (writes €100–300k pre-seed) ·
thesis fit (data/B2B/infra — not consumer) · geography (invests in CZ/CEE) · speed (has closed a
deal in <8 weeks ever). A perfect-thesis fund that takes 6 months is a Tier-4 row, whatever its
website says.
💡 The named partner matters more than the fund. Find who led their data-adjacent deals — that
partner is your reader.

🔍 **Research — TARGET-1 (O, ⏱4h inside the 6h).** *What:* the actual named list — funds that did
pre-seed data-infra/retail-tech deals in CEE in the last ~3 years, with the partner who led each.
*Where:* Dealroom/Crunchbase portfolio scans, fund sites, CZ/SK startup press, other founders
(ask two portfolio founders per fund how the fund behaved — reference-check investors the way they
reference-check you). *Do what with it:* fills Tiers 3–4; the two-founder reference notes decide
who gets priority when you have more interest than bandwidth.

✅ **Done when:** 150+ rows, every row with a named partner and a tier; top-50 send order agreed.

## 1.6 Data room refresh — labelled, indexed, red-flags pre-empted · O ⏱5h

⛔ **Prereq:** 1.1.

**Steps**
1. Structure on the existing DD folder: corporate · financial (model v1 on brands-only economics +
   actuals + burn) · legal (IP assignments, Moris D1, ROPA, counsel letters) · commercial
   (redacted RFI, mandate template, LOIs as they land — labelled) · tech (self-benchmark kit,
   architecture note, purge confirmation, AIA letter) · the numbers card.
2. **Write the Moris memo now** (→ 🔍 MOR-1): DD *will* read the exclusive-partnership contract.
   One page: scope limited to Moris's clients' fit-out projects · data contracts explicitly direct ·
   the §II.7 six-month clock · the waiver request status. A pre-written explanation reads as
   governance; a scrambled answer reads as a red flag.
3. Access: view-only, per-fund links, watermarked, access-logged. Granted at deep-dive stage,
   never at first meeting.

💡 A data room that anticipates the awkward question (Moris exclusivity, the modeled-vs-real POS
distinction, the GDPR remediation history) converts DD from interrogation into confirmation.
💡 Financial model discipline: the model's revenue tab must reconcile to the external curve **to
the euro**. DD runs the cross-check even when partners don't.

✅ **Done when:** indexed data room live · Moris memo in it · model reconciles to the numbers card.

## 1.7 Financial Model Mechanics — Labelled vs. Aggregated · O ⏱4h

⛔ **Prereq:** 1.1 numbers card and data room structure.

**Steps**
1. Refine the financial model (linked from Google Sheets) to explicitly define unit economics and cost of supply.
2. Emphasize the distinction between **Labelled Dataset** (e.g., named retailer, applying a Revenue Share, e.g., 20%) and **Aggregated Dataset** (anonymized/cross-market where Data Supply is Free and we keep 100% margin).
3. Connect the model back to the Capital Flywheel: the initial €500k buys the "Store Ops" required to build the network; the datasets produced become the 20x return multiplier.

💡 Investors need to see you understand acquisition costs for different data products. The variable revenue share on labelled data proves you know the market dynamics, while the 100% margin on aggregated data shows the VC return profile.

✅ **Done when:** Financial model is updated with Labelled vs. Aggregated distinction · Model is added to the data room.

---

# WEEK 2 · Aug 31–Sep 6 — Milestone contracts and first sends

## 2.1 Milestone contracts to every warm fund · O + J ⏱4h

⛔ **Prereq:** deck v2 (they'll re-open it) · evidence calendar fixed (3.3).

**Steps** One page to every Tier-1 fund:
> *"You said too early. By 15 Oct we will have: (1) a signed data-rights mandate with a national
> chain, (2) receipt-verified parity across two retail categories, (3) the outcome of an inbound
> 200+ store RFI, (4) first paying brand commitments. If we deliver these four, what specifically
> would you do?"*

💡 **The answer is the product.** A named gate ("we'd move to partner meeting") = a conditional
commitment you can hold them to, against a standard they set. A vague answer = qualified OUT,
same day — stop spending hours. Both outcomes are wins; the loop of polite passes is the only loss.
💡 Log every stated gate in the CRM verbatim. In week 8 you will quote it back: *"you said X — X
happened on the 10th."* That sentence closes fence-sitters.

✅ **Done when:** sent to every Tier-1 fund; answers (or non-answers) logged; ≥3 named gates on record.

## 2.2 Launch outreach — batched, fast-fail, measured · O ⏱6h

⛔ **Prereq:** 1.5 list · deck teaser (3-slide version for cold sends).

**Steps**
1. Batches of 15–20, Tue–Thu, personalised first line per named partner (their portfolio company
   or thesis note — one sentence, real).
2. **Fast-fail rule in the first call:** if the partner doesn't grasp the retail-media/measurement
   context inside 10 minutes, thank them and move on. You cannot educate a market and close a round
   in the same 13 weeks.
3. Funnel accounting from day one: 150 targets → ~50 first calls → 15–20 deep dives → 3–5 committed
   → close. Every Friday: stage counts + conversion vs these ratios.

💡 Send the teaser, not the deck, to cold funds — the deck is the reward for a booked call.
💡 The fast-fail rule needs discipline precisely with friendly partners: a warm 45-minute call with
a fund that will never do this deal costs the same as a term-sheet conversation.

✅ **Done when:** first two batches out · funnel dashboard live · 8–10 first meetings booked.

## 2.3 The two-cohort narrative test · J ⏱2h + meetings

**Steps** Split Tier-3 sends into two disjoint cohorts: **A — data-currency story** (measurement
currency, exit maths first) · **B — floor + upside** (revenue floor from the platform-for-rights
motion + currency upside). Track first→second-meeting conversion per cohort; read the result in W4
and let the winner lead from then on.

💡 Never split-test the same investor, and never tell either cohort a different *fact* — the test
is emphasis and lead, not content. Pre-seed investors do not punish a revenue floor; the question
is which story earns the second meeting.

✅ **Done when:** cohorts assigned before sending; tracking column in the CRM.

## 2.4 The anchor ask — Marek, for more than money · J ⏱3h

⛔ **Prereq:** deck v2 + numbers card (he will stress-test the maths — that is his value).

**Steps** One meeting, three asks, in order: (1) **anchor the round** — €50–100k as the first
named money, not the €10–30k courtesy ticket; (2) **lend the name** — "Marek Stacha is anchoring"
changes every subsequent conversation; (3) **five introductions** from his investor circle.

💡 Frame it on his own thesis: this plan is his firehose critique, executed — the data business
model, the exit-first math, the speed mechanics. He argued for it; invite him to underwrite it.
💡 If he anchors: every Tier-1 milestone contract gets a one-line update the same week. If he
declines: ask what evidence would change that, and log it as one more gate.

✅ **Done when:** meeting held; anchor yes/no/conditions logged; intro list started.

## 2.5 Angel mechanics — one line on the cap table · O + C ⏱2h

**Steps** All small tickets sign the identical CLA (MFN makes this safe); collect them continuously.
At >10 signatories consider a simple aggregation vehicle, otherwise identical CLAs suffice at this
size. Board-observer offer reserved for the anchor only.

💡 Ten angels on identical paper is fine; ten angels on negotiated variations is a Q1-round
diligence nightmare. The instrument discipline (1.4) is what makes angel volume cheap.

✅ **Done when:** angel onboarding flow exists (summary → CLA → DocuSign → wire checklist).

---

# WEEK 3 · Sep 7–13 — Warm paths and the first evidence drop

## 3.1 Activate the intro network · J + O ⏱4h
⛔ **Prereq:** 1.5 named-partner list (intros are asked *to a name*, never "to the fund").
**Steps** Ask every angel, advisor and friendly founder for specific intros to named partners;
Šepek's network explicitly (he produced Marek). **Ask every pass for exactly two names:** *"who
does invest in data infrastructure at this stage?"*
💡 A double-opt-in intro from a founder the partner backed converts ~5× a cold email. Priority:
founder intros > angel intros > advisor intros > cold.
✅ **Done when:** 5–8 warm intros in flight, each to a named partner.

## 3.2 Run the first-round meetings · J ⏱10h
**Steps** 8–10 calls. Fixed shape: 3 min problem/thesis · 5 min the two proof artifacts (RFI +
self-benchmark) · exit maths · velocity slide · ask + timeline. Then questions — and **log their
first question verbatim** (it reveals the objection class: scale, team, market, or timing).
💡 End every call with a named next step and a date, or downgrade the fund the same day. "Send me
the deck and let's stay in touch" without a date IS a pass — treat it as one, politely.
💡 The "you didn't grow for 8 months" question gets the mechanism answer, never a defensive one:
*"correct — and that's why we changed the payer. Here's what's structurally different"* → velocity
slide.
✅ **Done when:** 8–10 held · every fund staged · first-question log reviewed for pattern.

## 3.3 Evidence drop #1 — the mandate · O ⏱2h
⛔ **Prereq:** retailers pillar delivers Mandate/PoV (~5–12 Sep). **If it slips:** drop the RFI
story + counsel letters instead — never skip a drop; the cadence itself is the message.
**Steps** One short email to every engaged + loop fund: what happened, what it proves, what's next
(dated). Three sentences, one artifact link.
💡 Subject line = the fact itself ("First data-rights mandate signed — national chain"), not
"Update #1". Funds skim; the subject is the message.
✅ **Done when:** drop sent to the full engaged list; opens/replies logged.

---

# WEEK 4 · Sep 14–20 — Velocity, the tripwire, and the OOO handoff

## 4.1 Max-velocity pitching · J ⏱12h
**Steps** Complete all remaining scheduled first-rounds before Ondřej's OOO — 10+ this week.
Calendar density beats spread: same-day blocks keep the story sharp.
✅ **Done when:** 10+ pitches done; cumulative ≥20 first meetings.

## 4.2 ⚠ The funnel tripwire — measure, then obey it · O + J ⏱2h
**Steps** Compute first→deep-dive conversion. **If <20%: STOP adding volume.** Run the diagnosis on
the first-question log (3.2): which objection class dominates? Fix the narrative (with the
two-cohort read from 2.3), then resume sends.
💡 A top-of-funnel narrative problem cannot be outworked at the bottom. Twenty more sends of a
story that converts at 10% is a week of wasted founder-hours; one narrative fix doubles every
later batch.
✅ **Done when:** conversion computed · verdict recorded (proceed / fix-story) · cohort winner named.

## 4.3 Data-room access for engaged funds · O ⏱2h
**Steps** Per-fund links for everyone at deep-dive stage; access log reviewed weekly (what they
open tells you what they doubt).
💡 A fund that opens the financial model five times has a numbers question they haven't asked —
pre-empt it in the next touch.
✅ **Done when:** 8+ active reviewers with logged access.

## 4.4 The OOO handoff pack · O ⏱4h
⛔ **Prereq — this week, non-negotiable:** without it, week 5 kills the round's momentum.
**Steps** (1) 10-minute pre-recorded product/DD walkthrough (Loom-style: mockup + self-benchmark +
architecture); (2) written FAQ covering the 15 likeliest DD questions; (3) SLA assignment — J owns
investor replies (<12h), P/M own tech questions, D owns data questions; (4) auto-reply that routes,
not apologises.
💡 Record the walkthrough *before* the last pitch week ends while the answers are fresh. An async
video answering 80% of questions is the difference between "momentum paused" and "momentum died".
✅ **Done when:** video + FAQ live in the data room; SLA owners confirmed.

---

# WEEK 5 · Sep 21–28 — OOO: the round runs on artifacts

## 5.1 Async DD support · J + team ⏱ongoing
**Steps** <12h response on every investor question, routed per the SLA map. No new pitches.
💡 Speed of response during a founder's absence is itself a diligence signal — funds notice
operational maturity more than they notice the absence.
✅ **Done when:** zero questions older than 12h all week.

## 5.2 Evidence drop #2 — parity v1 · J ⏱1h
⛔ **Prereq:** calibration delivers parity v1 (19 Sep).
**Steps** Same three-sentence format: the number, what it licenses ("receipt-verified"), what's
next (D2 cross-category, 10 Oct — pre-announce it: a dated promise you then keep is worth two
delivered artifacts).
✅ **Done when:** drop sent; D2 date pre-announced.

---

# WEEK 6 · Sep 29–Oct 4 — Deep dives and first commits

## 6.1 Deep-dive meetings — 5–8 · J + O ⏱12h
⛔ **Prereq:** unit-economics prep: the **slot model** (~10 slots × ~€500k = €5M legibility),
cost-to-serve, the 6.25× supply-cost benchmark framing (external-safe version), CAC-free supply
argument (inbound RFI).
**Steps** 60–90 min sessions: GTM math · unit economics · data-room walkthrough · the honest
probability conversation (P(stretch) stated first, base case + asset scoreboard as the floor).
💡 Pitch the slot math, never contract counts — "ten slots at €500k" is legible arithmetic;
"26 contracts" reads as a capacity fantasy (a fund did that math on you once already).
💡 In deep dives, volunteer the three known risks before being asked (mandate timing, tobacco
gate, deployment curve) — each with its kill-test date. Pre-empted risks read as management;
discovered risks read as concealment.
✅ **Done when:** 5–8 deep dives held; ≥3 funds signalling allocation interest.

## 6.2 Revive the stalled · O ⏱2h
**Steps** Post-OOO check-in to every quiet lead — the touch is the evidence drops they've
received, not "checking in": *"since we spoke: mandate signed, parity at X% — deep-dive slots
open next week."*
✅ **Done when:** every stalled lead touched once; 2–3 revived.

## 6.3 Convert the anchor + strategics to signatures · J + O ⏱4h
⛔ **Prereq:** CLA + DocuSign flow live (1.4, 2.5).
**Steps** Marek and the warmest operator-angels sign **now** — the rolling close starts here, not
at a ceremony. Moris-as-investor probe happens this week if at all (alignment beats the
disintermediation risk).
💡 First signatures are the hardest and the MFN clause is your tool: *"identical terms for
everyone, and if anything ever improves, you get it automatically."*
✅ **Done when:** first €50–150k signed (wires may follow); "first money in" is now a true sentence.

---

# WEEK 7 · Oct 5–11 — The rolling close becomes public momentum

## 7.1 Announce real momentum — never artificial urgency · O ⏱3h
⛔ **Prereq:** 6.3 signatures real. **Ruling C3 applies to investors too: real scarcity only.**
**Steps** To every fence-sitting fund: *"first close is signed — €XXXk in. We're allocating the
remainder on identical terms; our target full-subscription date is Oct 31."* All true, all
verifiable.
💡 The original plan's tranching script ("may re-rate to €8M after the EuroOil DPA") is usable
ONLY if you would actually do it. An urgency bluff discovered mid-DD unwinds the round. Real
version: the cap re-rates for the *Q1 round*, which is simply true.
✅ **Done when:** momentum note sent; 2–3 funds ask about remaining allocation.

## 7.2 Partner meetings at the engaged funds · J ⏱6h
**Steps** Full-partnership pitches at the 1–3 funds past deep-dive. Prep per fund: which partner
is the skeptic, what did they open in the data room, their portfolio's nearest analogue.
💡 In partner meetings the champion presents you internally before you enter — arm them: send the
champion a 5-slide internal-memo version the day before. Make their job easy and they do your
selling.
✅ **Done when:** 1–3 partner pitches held.

## 7.3 Evidence drop #3 — D2 parity (10 Oct) · J ⏱1h
**Steps** The decisive cross-category number, sent same-day to everyone including passed funds
(two names asked of each, remember). Pre-announced in W5 — now delivered on the promised date.
✅ **Done when:** sent; at least one passed fund re-engages or refers.

---

# WEEK 8 · Oct 12–18 — The anchor commitment (Oct 16)

## 8.1 Secure the anchor/lead commitment · J + O ⏱8h
⛔ **Prereq:** partner meetings done; milestone-contract gates now quotable (*"you named X; X
happened"*).
**Steps** Convert the strongest fund to a **€200–300k committed allocation on the CLA**. Quote
their own milestone contract back. If no fund commits but angels + strategics reach €250k+,
**the syndicate IS the anchor** — proceed without a fund lead; the CLA was chosen precisely so
this works.
💡 Walk-away discipline: any fund still "processing" past Oct 25 without a committed number gets
a polite deadline — your runway math cannot finance their indecision, and saying so (calmly)
is itself a strength signal.
✅ **Done when:** €200–300k hard-committed beyond the first close, or the no-lead path explicitly
adopted.

## 8.2 Fill the syndicate on momentum · O ⏱4h
**Steps** Every soft-committed angel/fund gets the anchor news + allocation remaining + a
sign-by date (real one). Weekly wire tally against the €400–600k goal.
✅ **Done when:** ≥€100k additional soft commits converted to signatures.

---

# WEEK 9 · Oct 19–25 — DD at full speed

## 9.1 Open structured DD · O ⏱6h
⛔ **Prereq:** data room complete (1.6) incl. Moris memo · KYC/AML checklist (BANK-1).
**Steps** Grant the committed lead full DD access; schedule the three calls (tech / legal /
financial) inside one week; 24h SLA on every query; every answer logged into the FAQ so it's
answered once.
💡 DD speed is set by whoever is slowest to schedule — book all three calls in the kickoff email
with proposed times, not "let us know availability".
✅ **Done when:** DD commenced; all three calls calendared.

## 9.2 Pre-empt the red flags · O ⏱3h
**Steps** Volunteer the memos before they ask: Moris exclusivity (the memo) · modeled-vs-real POS
(the labelling doctrine) · GDPR remediation history (purge done, counsel letter, the compliance
pack as a moat) · the two-numbers history (found, fixed, one canonical set).
💡 Each pre-empted flag converts a DD risk into a governance proof point. The story "we found this
ourselves and fixed it" is a *positive* signal — but only if you tell it first.
✅ **Done when:** four memos delivered proactively; zero flags raised that we raised first.

---

# WEEK 10 · Oct 26–Nov 1 — Tech DD and full subscription

## 10.1 Pass tech DD with the artifact pair · J + D + P ⏱5h
**Steps** The walkthrough: mockup (the vision) + self-benchmark kit (the proof) + live SuperZoo
wave-1 data (the reality) + architecture note (edge processing, no image egress, k≥25 gate).
💡 Tech DD for a data company is really *data-credibility* DD: the receipt-parity number and the
honest-null discipline do more here than any architecture diagram.
✅ **Done when:** tech DD signed off.

## 10.2 Fully subscribe the round · O ⏱4h
**Steps** Convert remaining softs to signed CLAs against the real deadline (legal + wire timing
now set it). Oversubscription: take up to €600k, then stop — scope discipline beats €50k more.
✅ **Done when:** ≥€400k signed; target €500–600k.

---

# WEEK 11 · Nov 2–8 — Close DD, start the wires

## 11.1 Close DD (Nov 8 milestone) · O ⏱4h
**Steps** Resolve every open item; get the written DD-clear from the lead.
✅ **Done when:** DD approved in writing.

## 11.2 Execution set + KYC · O + C ⏱3h
**Steps** Final CLA versions to all signatories (no SPA/SHA — C2); KYC/AML documentation collected
per the bank checklist; wire instructions issued with each countersigned CLA.
💡 Collect KYC docs *with* signatures, not after — the second round-trip to a busy angel costs a
week you don't have.
✅ **Done when:** 100% of docs in circulation; first wires instructed.

---

# WEEK 12 · Nov 9–15 — Signatures complete

## 12.1 Chase to 100% · O ⏱4h
**Steps** DocuSign completion tracking daily; personal call to anyone >3 days pending. Bank
pre-notified of expected wires (BANK-1 checklist).
💡 The last 10% of signatures take 50% of the chasing — schedule it, don't resent it.
✅ **Done when:** 100% signatures by Friday; majority of wires in flight.

---

# WEEK 13 · Nov 16–21 — Money in the bank

## 13.1 Confirm the wires · O ⏱2h
**Steps** Daily reconciliation; same-day confirmation email to each investor as their wire lands;
escalate stragglers with the bank checklist.
✅ **Done when:** **€400–600k confirmed in the account by Nov 21.**

## 13.2 Close the loop · O + J ⏱3h
**Steps** (1) Post-raise note to all investors + every fund that engaged: round closed, Q1 goals,
the evidence cadence continues (the Q1 round's pipeline starts today). (2) Pillar verdict into
`17-signals-21nov.md`. (3) Tier-4 partner meetings for Q1 confirmed against the named artifacts.
💡 The funds that passed are the Q1 round's warm list — the monthly update they keep receiving is
what makes January's process start at deep-dive instead of at zero.
✅ **Done when:** verdict recorded; Q1 investor pipeline live with ≥5 placed meetings.

---

# Standing rules — check before every investor touch

| Rule | Why it exists |
|---|---|
| One number set (`12-numbers-external.md`) — internal targets never shown | Two curves in one data room loses the round |
| Internal benchmarks (incumbent supply/demand prices, unit costs) never appear | Never-say list applies to investors in full |
| SIGNED / IN NEGOTIATION / TARGET labels on every pipeline mention | The reality-vs-plan critique started this whole strategy |
| State P(stretch) first, paired with the asset scoreboard | Calibrated honesty prices better than claimed certainty |
| Real scarcity and real deadlines only — momentum is manufactured by actual closes | An urgency bluff discovered mid-DD unwinds everything |
| Identical CLA terms for all; MFN; allocation is the only negotiation | One exception reopens every closed conversation |
| Every meeting ends with a named next step and a date, or the fund is downgraded same day | Hours are the scarce asset, not funds |
| Evidence drops every ~3 weeks; never re-pitch the same deck to the same fund | News converts; nagging qualifies you out |
| The survival variant is disclosed, once, in the appendix | Removes the desperation discount |

# The research backlog in one place

| ID | What | Owner | By | Why it blocks money |
|---|---|---|---|---|
| TARGET-1 | Named-partner list: CEE/EU funds with pre-seed data-infra deals + founder references | O | 5 Sep | Wrong list = 150 sends into a void |
| ANGEL-1 | 15–25 operator angels (ex-NIQ/GfK/Kantar, retail media, FMCG data) with warm paths | O | 5 Sep | The anchor is manufactured here if Marek declines |
| BANK-1 | Bank KYC/AML process + lead time for investment wires | O | 30 Aug | Discovered in W13, it costs the deadline |
| CAP-1 | Cap convention consistency (€6M pre vs the €80k CLA at €3.5M) | O + C | 30 Aug | An inconsistency here surfaces in DD |
| MOR-1 | Moris-contract explanation memo | O | 6 Sep | DD will read D1; scrambled answers read as red flags |
| NARR-1 | Two-cohort test read: which story earns the second meeting | J | 20 Sep | Decides the narrative for the whole mid-funnel |
| MOCK-1 | Mockup scope: what the currency dashboard shows (use the P&G Excel + chat + masked aggregate) | J + D | 30 Aug | Carries tech DD in W10 |
