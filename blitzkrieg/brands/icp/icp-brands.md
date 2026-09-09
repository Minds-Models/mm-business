# Brands ICP: who inside a brand actually uses this (R7 / task 2.6)

**Status: v1.1, 8 Sep 2026. Complete. 25 personas across 4 role clusters, all adversarially audited.**
v1.1 folds in the second and third podcast passes (self-reported problems, incumbent deep read, AI)
in full, as corrections (m) to (t).
Companion to `../brands-execution-guide.md` §2.6. Raw research (full empathy maps, every use case,
sources) in [`raw/`](raw/): four cluster files, the three grounding files, and [`raw/audit.md`](raw/audit.md).

> **Read the audit before you use the personas.** Ten research agents produced the persona set;
> an eleventh was told to attack it. It found 31 defects, 6 of them critical, and the corrections
> below are more important than the personas themselves. The empathy maps in `raw/` are sound as
> descriptions of people. Their **use-case tables are not safe to quote without the corrections in §2.**

---

> **Talking to a persona? Go straight to [Part II, the persona playbook](#part-ii-the-persona-playbook).**
> Empathy map, value proposition, opening line, objection and answer for all 18.

## 1. The bottom line

**The persona set as first written promises a product we do not have, to buyers we may not legally
serve yet, at companies the target screen has already disqualified.** Corrected for all three, the
picture is much narrower and much more actionable than the raw research suggests.

Run the pack's own four filters (local pen, estate match, margin test, rights status) across all 25
personas and **the workable third-party brand set collapses to roughly two companies, VAFO and
BAT ČR, both blocked on an unsigned mandate.**

## 2. The corrections that change the plan, (a) to (t)

### Four from our own repo and our own product

**(a) Fixture-level and shelf-level attribution does not exist. Seven use cases assume it does.**
`attention_seconds` measures time facing **the camera on the ad screen**, not a product fixture (the
engaged predicate is literally `facing_camera_frame_count > 0`), and the conversion funnel groups at
store level. So "who looked at your product and put it back" is not something we can measure, and it
was the flagship promise of three of the four clusters. It also carries a documented outlier tail
with values exceeding physical presence time. **Ban the words shelf, facing, fixture and planogram
from brand materials.** Say "at the instrumented screen location, store level".

**(b) The conversion funnel does not measure conversion to purchase.** It reads only `visitors_v2`
and stages by attention thresholds, with **no POS join at all**. It is a screen impression to
engagement funnel. The only honest buyer versus non-buyer statement we own is the receipt-matched
visitors-against-orders gap at GymBeam (7,475 visitors, 2,622 matched orders, 21 days), which is
store level and cannot say which product was declined.

**(c) Capability is not permission, and roughly twenty use cases confused the two.** All four
researchers read the "deliverable today" ladder as a rights statement when it is a capability
statement. **Rights signed across the business are zero.** Super zoo has no disclosure greenlight at
all, ČEPRO's is verbal and tobacco-scoped and licenses no data, Teta and Sportisimo are
`stores_live: 0`. For a third-party brand, only three things are genuinely available today:
**methodology, the GymBeam case with permission, and pooled brand-worn observations.**
Fix at source: `raw/B-product-capability.md` needs a rights column, or this error recurs downstream.

**(d) The money is coming from the wrong side of the model, and nobody aggregated that.** Three of
the four highest-value payers the research identifies (the owner as estate-holder, the private-label
lead, and Plaček's distribution arm) all sit **inside the mandate partner**, and at Plaček all three
are one legal entity (IČO 28995911). If the 21 Nov goal is met by those buyers, it is met by
**retailers paying cash, which inverts the premise that retailers pay in rights and brands pay cash.**
That may be the right commercial answer. It has to be a decision taken in writing now, not a result
discovered in December.

### Eight more, from the podcast corpus (166h, 232 episodes, falsification pass)

**(e) We imported the same circularity from a new source, and nearly shipped it.** Every
articulation of our core gap (*who was in the aisle, and did they buy*) across 232 episodes resolves
to a **vendor selling in-store sensing** (STRATACACHE/Walkbase, Ailet, EyeSee, Barrows). **No
brand-side executive states it as their own felt pain.** Treat that corpus as supply-side category
evidence, never as demand-side proof, and never let a vendor quote stand in for a buyer quote.

**(f) The only convergent proof metric anyone names is case volume, and it is a vendor naming it.**
STRATACACHE's CEO on what he says all brands agree: *"there's one kind of universal point of data
capture that all brands agree with, which is the change in case volume... now I'm moving 10% more
product because I as the supplier know my volume of product going in... that's the true measurement
they're looking for."* Note the clause: it works because **the supplier already holds the volume
data.** This is a vendor's claim about buyers, not a buyer's claim, so it is internal re-basing
input and **never an outreach line**.
⚠ **It also collides with (b) in this same document:** the funnel has no POS join, so we cannot
produce case-volume lift today. Either sell-out lift becomes a rights requirement in the mandate,
or we knowingly lead with a metric the buyer does not converge on. **Decide that in writing**
alongside next action 2, and settle it in §3.1 with the direct question: *if you could prove one
number to your buyer at the next annual negotiation, what number would it be?*

**(g) The vendor closest to our position deliberately avoids cameras, and sells that avoidance.**
STRATACACHE's CEO: *"doing that without cameras, doing that fully GDPR or California Privacy
approved is quite easy to do."* Its Walkbase unit, through its VP of business development: *"we tend
to stay away from computer vision products"* because of biometric-capture risk and retailer
conservatism. **That is one corporate group speaking twice, so treat it as one witness, not two.**
Our core technology is what our nearest competitor routed around.

**(h) No vocabulary yet. That is not the same as no interest and no risk.** Verified by exact match
across 14,940 chunks: `"age and gender"` 0 hits, `surveillance` 0, `"creepy"` about AI 0, and
`"AI Act"` as the regulation 0 (the three raw hits are transcription noise: "AI actually", "Dubai
actually"). *Demographic* does appear in 29 episodes but exclusively as workforce diversity or
e-commerce cohorts, never as inference from observation. Operators use *personalization* to mean
loyalty-tied offers or personalised icons on shoes.
**But demand is not zero:** Superdrug's Head of Retail Media, explicitly relaying CPG asks, says
*"we can have sensors on screens and start to report back on dwell time or kind of like demographics
and then even potentially start to connect that to health and beauty cards... we're definitely
looking at that."* That is a retailer operator describing our exact product shape.
**And the risk half runs the other way from comfort:** our own source reads the camera-avoidance in
(g) as the market treating camera sensing as **the harder sell**, and predicts privacy is the first
thing an EU retailer or DPO raises. Compliance questions are asked seriously in this corpus (a
68-minute Mars episode on responsible AI and regulation) but **entirely about enterprise LLM
governance, never about cameras, biometrics, consent or demographic inference.** The risk officers
thinking hardest about AI have no frame for in-store CV, so we would be building it from scratch.
*Caveat on method:* a prior pass's "hallucination: 0" was overturned by exact match (10 chunks / 5
episodes), so treat zero-hit findings as a prompt to search harder, not as settled.

**(i) The one brand-side voice that survives is a confession, not a request.** Keurig Dr Pepper's
Marketing Director, Richard Rodgers: *"Not looking at a tactic by tactic because if we did it's
rarely going to be positive... we can't get the clear reporting and the KPIs that we are essentially
looking for."* This is **the only on-record statement by a brand-side operator that per-tactic
in-store proof does not exist and that he deliberately avoids looking.** Make it the lead evidence
line for the whole persona set and retire the vendor-sourced black-box quotes in its favour.

**(j) Our own ICP is the segment this corpus calls least moved by evidence.** ADM's Marketing,
Digital and eCommerce Director: gut-feel marketing *"is going to come more in those businesses that
are either challenger brands... or those kind of privately owned businesses. If you are backed by a
venture capitalist or if you have shareholders, I don't think you're going to be doing as much of
the really gut feel based marketing."* Seven of our eight 21 Nov targets are owner-managed. **A
measurement-led pitch may be aimed at the wrong motive there.** Lead with negotiating leverage
against the chain and being first in category; keep measurement as the delivery, not the hook.
One UK voice generalising, not Czech evidence, so test it rather than adopt it.

**(k) External corroboration for (d): the European in-store measurement buyer may be the retailer.**
Retailers are described as increasingly specifying measurement before rolling out in-store retail
media, and in Europe the retailer owns and funds the display estate where in the US the brand does.
The source calls this **the single question most capable of invalidating the whole brand ICP**.
Treat as a falsification test, not a finding, and make it question one in §3.1: *who signs for
in-aisle measurement in a Czech chain relationship?*

**(l) The clearest mechanism that survives translation to Czechia is category evidence.**
Ex-Chief Customer Officer Europe at Coca-Cola: *"if you are a customer you'll probably not be
interested in selling more of brand A if this is a zero sum game that results in selling less of
brand B... you want to look and see how this is going to grow the category."* **Every output must be
presentable by the brand to its buyer as category evidence, not only brand evidence.** The same
source notes most CPGs still pitch brand-centrically, so this is a differentiator rather than table
stakes.

### And eight more, once the self-reported-problems, incumbent and AI passes were read in full

**(m) The three pains brands do state in their own voice are mostly not ours to fix.** Narrowed to a
brand-side executive describing their own problem in their own words, the corpus supports exactly
three themes, repeated across Keurig Dr Pepper, PepsiCo, Henkel, L'Oreal, Kellanova,
Colgate-Palmolive and General Mills: **proving marketing and media ROI, fragmented data, and the
organisational strain of standing up a new capability.** PepsiCo's global marketing effectiveness
lead on the first: *"there's no clear solution. There's no like magic bullet that everybody uses."*
We do not fix that one (it is marketing mix modelling and cross-network attribution, a different
product category) and we cannot fix the third (headcount, hiring, supply-chain retooling). We touch
the second only inside our own slice. **So the opening line is not "we prove your ROI."** It is one
named decision, made differently.
The same source also explains part of (e): *"there's very little incentive for a brand to speak up
out there."* Brand silence in a public podcast is partly a property of the medium, so read (e) as
*no brand voice was recorded*, not as *no brand feels it*.

**(n) Honest measurement produces a worse-looking number, and the person it grades knows that.**
Pentaleap's CEO: *"You either get transparent numbers or you see amazing results... if you see fully
incrementality backed numbers they will not look as good as what was previously sold to you."*
Shalion's head of product, having run it for a client: *"we found something like 15% of the sales the
retailer reported from ads were actually incremental."* Put that beside (i), where Keurig's marketing
director avoids looking tactic by tactic precisely because the answer is *"rarely going to be
positive"*. **Our deliverable is commercially unwelcome to whoever owns the spend it re-grades.**
Sell it to the person who gains from a true number: the owner spending his own money, the
private-label lead with no incumbent to defend, the challenger buying its way into a category. Do
not sell it to the budget owner whose last two years it audits. This is the sharpest targeting rule
the corpus produced.

**(o) A data-first pitch is refused in advance by both sides of the table.** NIQ's SVP eCommerce
Sales and Henkel's global head of e-commerce reach the same rule independently, one selling and one
buying: *"I've seen a lot of manufacturers tackling the pyramid from the wrong side which is let me
buy some data"* and *"not to start with the data... start with the application what kind of insights
you want to look at."* Two consequences: the first three slides are three decisions the client
currently makes on assumption, with the observation layer revealed second as the minimum data
required; and what we publish is **a standard, not a dataset.** The incumbent's own concession is
the opening for it: *"what we lack in the industry is probably referential... I don't know who can
do that."*

**(p) A brand is on record believing the who-question is already answered, by the retailer.**
Kimberly-Clark's Adam Aldridge, speaking about his own company: *"I'm talking about the Dunnhumby's
and the Nectar 360s etc. They're really helping us to go the next step to actually really truly
understand our shoppers."* And the harder fact behind it: **across all three passes, no
brand, no retailer and not NIQ itself ever says a syndicated measurement company fails to tell them
who the shopper is.** The exact complaint our who-layer answers is voiced by nobody on the buying
side. **So we never claim the who-question is open.** We define the residual: the unidentified, non-loyalty-card shopper standing in front of the
fixture, whom a card-based product cannot see. The nearest buyer-voiced approach to our shape is
L'Oreal's global e-commerce tech and data analytics director naming a metric that does not exist: *"the next real
metric today we're not capable of measuring it, but we should consider measuring is the share of
trust."* She also asks that products be defined *"not only by what
they are, but what they solve, for whom, in which situations"*. That is a who-layer brief written by
a brand executive, but she frames it at AI mediation, not at the store, so the bridge is ours to
build and ours to defend.

**(q) On the retailer side our counterpart is a political minority with no spare hours.** Iceland's
head of retail media: *"the biggest challenge is the internal challenge... you actually spend 80% of
your time just keeping the thing going."* OBI's VP Media and Retail Media: *"We are 50 people in
retail media at OBI. OBI has over 40,000 employees... we are a minority in our company."* bol.com
says the same about making the transition. **What we hand that person must be internal legitimacy,
not another coordination task**, and the gate on a signature is their capacity, not their conviction.
Their own first objection is on record too, from REWE's Head of Retail Media Connect: *"what I'm
worried about especially with retail media is over expectation. Meaning yes, you can measure a lot.
Does that mean that you need to measure a lot?"* Note this is the one place in the corpus where
retailers speak richly in their own voice, which makes it unusually reliable.

**(r) Our category's sales cycle is long by structure, and the vendors say so themselves.**
Walkbase's VP of business development: *"I had to evangelize. I had to convince somebody to even take
a meeting. And then once I did, I had to convince them why they needed it. And then they had to go
get budget for it."* Koddi's MD Sales EMEA adds the gating after the yes: *"you've got buy-in from
above, but there are many competing questions for that resource... maybe the CRM also is a little
broken."* Ailet adds master-data readiness. **This is our own risk, not a problem we sell a fix
for**, and it lands on an eleven-week window (see §4).

**(s) The AI conversation is rising, is pointed away from us, and one branch of it is a threat.**
Episode-level AI prevalence rose from roughly 40 to 47% in 2024 to over 70% in 2026, with governance
rising alongside it, so the idea that AI interest peaked and faded is dead. But every
operator-proven use case is first-party work (content generation, forecasting and MMM, internal
copilots), and **not one operator anywhere describes a deployed camera-based shopper-observation
product.** The only operator confirmation of computer vision at all is Carlsberg using image
recognition for sales-rep shelf execution. So enter through measurement and execution framing, never
through personalisation, which operators use to mean loyalty-tied offers or physical product
customisation. Two things to carry out of this:
- **The baseline is sound.** Two operators, Iceland's retail-media head and Danone's global sales
  director, put 60 to 90% of sales still physical today with no near-term flip expected.
- **The threat is specific.** The category vendors name as most exposed to agentic reordering is
  routine, repeat FMCG grocery, which is the base a CZ in-store measurement business would serve.
  If staples migrate to agents first, what is left in the aisle is discovery and impulse. And
  **nobody in 232 episodes frames physical observation as becoming more or less valuable under AI
  mediation, in either direction**, so there is no wave to ride and no borrowed authority. That
  narrative is ours to build or to drop, and pitching it to a pragmatic buyer without our own
  evidence will read as speculation.

**(t) Shape the first sale as a bounded proof, and pitch governance rather than AI.** Operators
describe themselves as stuck in pilot purgatory (the Mars episode cites under 30% of leaders
trusting their own pilots are scalable), and the operator wins the corpus does record ran as short,
bounded proofs of eight to twelve weeks producing one hard before-and-after number. The blocker
operators name most is not the model, it is data governance. Two consequences: the 150 to 500k CZK
study already has roughly the right shape, and the document that sells it is a method and
anonymisation model, not AI sophistication. One warning attached: STRATACACHE and Walkbase already
market GDPR compliance as a feature (one corporate group, so one witness, as in (g)), so **"we are GDPR compliant" reads as parity, not
differentiation.** The k>=25 gate and the no-identification design have to be argued as going
beyond what the camera-avoiding vendors already claim.

## 3. The persona map, after audit

| Tier | Persona | Why |
|---|---|---|
| **Primary** | **Owner / jednatel as ESTATE-HOLDER** (Cicman, Plaček/Rejchrt, Moravec) | The only buyer for whom a store-level read is lawful today, because he owns the store and the data is his. Holds the pen, no procurement, clears the margin test. **But this is retailer money.** |
| **Primary** | **Apparel / sportswear owner or marketing director** (Brand-Worn Index) | The only 2026 revenue route needing **no retailer mandate**. Was missing from all four clusters. |
| **Primary** | **Retailer private-label / own-brand lead** (Plaček own-brand, Teta/Solvent, BENU) | Real P&L, genuine unmet need, no incumbent read on his own shopper, lawful today because the estate is his employer's. |
| **Must win** | **Owner / jednatel as BRAND PRINCIPAL** (Kofola, Mattoni, Nutrend, Big Shock, Dermacol, CBI/DanCzek, BAT ČR, VAFO) | Where the 2 paying seats must come from if they are to be brand revenue at all. Every use case is methodology-only until a mandate exists. |
| **Must win** | **Trade / shopper marketing manager** | Highest willingness in the set and the buyer of the FIRST purchase: the 150 to 500k CZK study from an activation or test bucket. The answer to "the hurdle is the budget bucket". |
| **Must win** | **Sales / commercial director** | Real economic buyer, but **only where he is himself a registered statutory officer.** At the eight Bin-A targets he is usually the same human as the owner. |
| **Blocker** | Legal / DPO, tobacco CORA, procurement, the commercial analyst, the agency | Neutralise first. Legal is the cheapest to pre-empt and unblocks procurement and the analyst too. |
| **Not an ICP** | CEE cluster insights lead · local NPD · field / Perfect Store · e-commerce manager · brand-side retail media buyer | See below. |

**Five personas were killed outright.** Local NPD has no research budget anywhere in CZ or SK (the
work is a *technolog* at 40 to 65k CZK in a factory; jobs.cz "innovation manager" returns 287 hits
of which effectively none is FMCG). Field/Perfect Store: not one of his KPIs is a metric we produce.
The CEE cluster lead is a 2027 buyer at the earliest and the goal ends 21 Nov. And **brand-side
retail media buyer does not exist in the CZ market at all**, which contradicts standing repo
doctrine that names it as a fourth wallet with an easier approval path.

## 4. Persona inflation versus your calendar

Twenty-five personas, a three-people-per-company rule and eight accounts at fifty hours each is
**24 relationships against 36 founder-hours a week for eleven weeks.** At Bin A the buying centre is
genuinely **two people**: the statutory officer and one commercial lead. The owner, sales director
and trade marketer personas are frequently **the same human, split three ways** by three researchers
each claiming him as their economic buyer. Collapse them or the outreach plan is arithmetically
undeliverable before it starts.

**And the cycle is long by structure, not by our incompetence.** Vendors in exactly our category
describe evangelising before they can get a meeting, then waiting on client IT capacity, master-data
readiness and budget competition that has nothing to do with product quality (correction r). Against
eleven weeks that argues for spending the calendar on buyers who already believe rather than buyers
who must be converted, and for treating any account that needs an IT conversation as a 2027 account.

## 5. The least-blocked revenue line is the least examined

The **Brand-Worn Index** appears in zero personas and zero use cases across four independent
researchers, yet `targets/DECISION.md` calls it the only track needing no retailer mandate, a
genuine structural advantage, and where a 2026 signature should be easiest, with 16 of 18 candidate
companies single- or dual-signature Czech/Slovak entities. It is gated on a EUR 3k label-buy raising
upper-body fill from 4 to 10% up to 25% or better **by 1 October**, with shoes and watches written
off in this window. That gate report, plus one afternoon in the Sbírka listin pricing the 16
companies with no current revenue figure, is probably the highest-value unspent day in the pillar.

## 6. Your three primary-research notes

| Note | Verdict |
|---|---|
| Brands want to be told what to do with the data | **True for trade and sales, false for insights**, where recommending is their status. Detail in `raw/C-claim-checks.md`. |
| At P&G any mistake with AI or bad data is on you | **Partly true, overstated.** Accurate about AI tools, inaccurate about data vendors: P&G's supplier policy pushes AI liability outward. The buyer is not asking "can I defend AI", they are asking "is there paper with someone else's name on it". Failure mode is silent non-adoption, not an objection you get to answer. Belongs to Bin B, and P&G CZ is already out of the target set. **Do not deploy "we can make you safe" on Bin-A owners: it manufactures a doubt they did not have.** |
| Retailers resist giving data to brand sales | **Overstated, but not inverted.** Five named brand-side executives in the corpus do say they cannot get retailer data (Beko, Mars United, Superdrug, L'Oreal, bol.com); Beko's is blunt: *"retailers will never help you."* One consultant voice, Coca-Cola's ex-CCO Europe, reframes what they *can* get: *"massive amounts of money today are being charged for the supplier to get access to relevant shopper data from the retailer. But in many cases the actual use of the data obtained is rather limited."* The source's own verdict is that this is **not a binary**: retailers monetise aggregate insight and audience segments expensively and with poor realised ROI, while record-level data stays in clean rooms. So our competitor is an expensive, low-yield retailer product **at the aggregate layer**, and a genuine wall **at the record layer**. The publication lag (§7) remains our own design choice. **One brand voice runs the other way and
it matters more for positioning than for this verdict:** Kimberly-Clark's Adam Aldridge credits the
retailer who-layer, *"the Dunnhumby's and the Nectar 360s... They're really helping us to go the next
step to actually really truly understand our shoppers."* Where a chain already sells a mature
loyalty-based who-product, the brand may believe the question is answered. See correction (p). |

## 7. The KAM question, resolved

The KAM is a **champion and a reader, never the buyer.** The cut he wants most (his share versus his
named competitor inside the named chain, this month) is exactly the toxic cut, and refusing it in
minute three is what makes everything else believable. ČEPRO pointing us at him is an **access**
decision, not a product spec. The reframe, which is the strongest honest line in the set:

> *"This is not ammunition your buyer will resent. It is evidence your buyer has already accepted."*

Because the retailer holds 90-day insight priority and a veto, anything the KAM receives has already
been seen and approved by his buyer. The publication lag stops being a concession and becomes the
credential.

## 8. Two blocking personas nobody modelled

- **The EuroOil station tenant and the Teta franchisee.** EuroOil stations are tenant-operated,
  rent is turnover-based. **Their per-site consent decides whether the density escrow can ever be
  satisfied.** They block the plan rather than fund it, and they are not in anyone's map.
- **The tobacco Corporate and Regulatory Affairs officer**, merged into legal/DPO by the research
  but a different human with opposed incentives: legal fears GDPR purpose-change and AI Act
  classification, CORA fears the advertising statute and being seen near a youth-adjacent method.

## 9. The evidence health warning

**Twenty-five personas rest on one real brand conversation**, and every `clients/*/facts.yaml` still
has `contacts: []`. The podcast corpus was meant to fix this and only partly does: it is 232
episodes of **Bin-B multinational** voices with **no Czech, Slovak or CEE voice on any of these
claims**, and its own critical finding is that we mistook vendor voices for buyer voices. It is a
good falsification surface and a poor demand signal. Read that vendor weighting beside correction
(m): brands have little incentive to discuss their own effectiveness in public, so a missing buyer
voice here is partly a property of the medium and not proof of a missing pain. Across all four clusters the top-severity pain is repeatedly evidenced by our
own dashboard endpoint, which is circular, and it is contradicted by the only primary brand voice on
file, who called the product complementary and said his employer already had better personas.
The insights-vacancy finding replicates on independent search (no brand-side FMCG consumer-insights
role on jobs.cz, zero shopper-insights roles in all of Slovakia) **but job ads measure hiring, not
headcount.** Run a LinkedIn title test before writing that reversal into the plan.

**Against the task's stated definition of done** ("ICP one-pager v1 exists; 'how they buy' field
live in the CRM"), the secondary half is complete and the one-pager exists at
[`icp-one-pager-v1.md`](icp-one-pager-v1.md). What remains is the CRM field itself, which is a
setup action, not research. The primary *answers* that fill it come from §3.1 meetings, which is a
separate task with its own definition of done. Secondary research told us the language; only
primary tells us the truth, and the guide weights it three to one.

## 10. Next actions

1. **Amend `raw/B-product-capability.md` with a rights column** so capability is never read as
   permission again. Half a day, prevents recurrence everywhere downstream.
2. **Founder decision, in writing: is retailer-side cash (estate-holder, private label, distributor)
   bookable against the 21 Nov goal?** This is the D1 question and it is now load-bearing.
3. **Get the 1 Oct brand-worn fill-rate gate result** and build the apparel persona. It is the only
   unmandated 2026 revenue line.
4. **Correct the never-say list**: no shelf, facing, fixture or planogram language; no "conversion"
   without the POS-join caveat; withdraw the energy-drink regulatory use case entirely (it breaches
   four rules at once).
5. **Collapse owner, sales director and trade marketer into one Bin-A buying centre of two people**
   before building the outreach list.
6. **Settle the headline-metric collision in writing** (correction f): case volume is what a vendor
   says buyers grade on, and (b) says we cannot produce it. Either sell-out lift becomes a rights
   requirement in the mandate, or we lead with a metric buyers may not converge on. This is a
   founder decision, not a copy decision.
7. **Decide where the compliance pack sits in the sequence.** Correction (h) says there is no
   articulated camera objection yet, but also that privacy is likely the first thing an EU retailer
   or DPO raises. Recommend: **lead with it for retailers, DPOs and regulated categories; hold it
   for a Bin-A owner**, where it manufactures a doubt he did not have.
8. **Do not approach NielsenIQ as a customer on current evidence.** Their instinct on hard data
   problems is a decade-long in-house build and their sales narrative is consolidation into one
   source, theirs. Their L'Oreal and Henkel relationships are multi-year and publicly warm, so
   there is no wedge. See `raw/podcast-problems-and-incumbents.md` for the partner-shaped opening
   that does exist: their own SVP names **shopper behaviour** as the next data layer they want.
9. **Write the residual-shopper paragraph before any brand-facing asset ships** (correction p). One
   paragraph saying exactly what a loyalty-card who-product cannot see. A brand is on record
   crediting the retailer networks with answering the who-question, and no buyer anywhere in the
   corpus complains that it is unanswered. Until that paragraph exists, "who was in the aisle" is
   not a safe headline claim.
10. **Re-cut the target list against correction (n).** The buyer we want is the one who gains from a
    true number, not the one whose spend it re-grades. Owner, private label and category challenger
    stay; anyone whose bonus rests on the media spend we would be auditing moves down.
11. **Rewrite every opening use-case-first** (correction o): three decisions currently made on
    assumption, observation layer second, never "here is a new signal". Half a day on the deck, and
    it is the one change both the incumbent and a buyer independently say decides the meeting.
12. **Decide in writing whether we carry the agentic-reorder risk** (correction s). If routine
    staples are the category most exposed to agent-driven reordering, an in-aisle measurement
    business built on staples has a five-year question to answer. Not urgent for 21 Nov, and a
    question any investor will ask before then.


---
---

# Part II. The persona playbook

**This is the file to open before writing anything to anyone.** One section per persona: the
empathy map, the pains to name, the gains to promise, the value proposition in their own terms,
the opening line, the first objection with its answer, what to give them, when their buying window
opens, their vocabulary, and the one thing never to say.

Source: the four research clusters in [`raw/`](raw/), audited. Empathy quadrants and objections are
research output. The value proposition and the "never" line are written from them.

**How to use it.** Pick the persona, take the value proposition as the spine of the message, open
with the line under "Open with", use their words from "Their words", and check the message against
"Never" before it goes. If the channel is short (email subject, LinkedIn DM, ad), use the value
proposition alone. If it is long (deck, one-pager, call), pain first, then gain, then proof.

| # | Persona | Status | Value proposition, in one line |
|---|---|---|---|
| 1 | [Owner / founder / country GM who is a registered statutory officer](#owner--founder--country-gm-who-is-a-registered-statutory-officer) | `PRIMARY / MUST WIN` | One number about your own shelf that you did not know, that you can act on this quarter, and that nobody else in your category has. |
| 2 | [Retailer private-label / own-brand lead buying like a brand](#retailer-private-label--own-brand-lead-buying-like-a-brand) | `PRIMARY` | The first read of your own shopper that anyone has ever offered you, and the answer to cannibalisation versus share-taking. |
| 3 | [Trade / Shopper Marketing Manager (CZ+SK)](#trade--shopper-marketing-manager-czsk) | `MUST WIN` | Independent proof of what your in-store money actually bought, from a source the chain did not hand you. |
| 4 | [Sales / Commercial Director (country P&L owner)](#sales--commercial-director-country-pl-owner) | `MUST WIN` | A read your competitors do not have, funded from trade, that changes where next year's investment goes. |
| 5 | [Distributor / importer commercial lead](#distributor--importer-commercial-lead) | `HIGH LEVERAGE` | Something to put in front of your principal that the principal does not have: the Czech shopper for brands with no Czech entity. |
| 6 | [Key Account Manager / National Account Manager (brand side)](#key-account-manager--national-account-manager-brand-side) | `CHAMPION, NOT BUYER` | An argument your buyer cannot answer with "our numbers say otherwise", because it came through them. |
| 7 | [Brand / Marketing Manager (CZ or CZ+SK)](#brand--marketing-manager-cz-or-czsk) | `SECONDARY USER` | Observed evidence for the target definition you inherited, in one sentence you can put straight into the brief. |
| 8 | [Category Manager / Category Development Manager (brand side)](#category-manager--category-development-manager-brand-side) | `BEST INTERNAL AUTHOR` | A category story built on the shopper, that the buyer cannot counter with their own data. |
| 9 | [The ex-NielsenIQ / GfK / Kantar / Ipsos person now inside a brand](#the-ex-nielseniq--gfk--kantar--ipsos-person-now-inside-a-brand) | `CONVERT TO CO-AUTHOR` | The limits table, unprompted, before any finding: the fastest way to turn the most dangerous reviewer in the market into a co-author. |
| 10 | [Legal / Privacy / DPO / Corporate & Regulatory Affairs](#legal--privacy--dpo--corporate--regulatory-affairs) | `BLOCKER, NEUTRALISE FIRST` | A bounded, documented, reviewable risk instead of an open-ended one, in a pack you can forward unedited to group. |
| 11 | [Country finance controller / CFO who opens the budget line](#country-finance-controller--cfo-who-opens-the-budget-line) | `BLOCKER / TIMING GATE` | Two budget years closed in one sitting, with a refund condition if the coverage is not there. |
| 12 | [Procurement / purchasing](#procurement--purchasing) | `BLOCKER` | A vendor file that is already complete, and a spend classification that keeps the decision in this country. |
| 13 | [Commercial / RGM analyst (the person who opens the file and rebuilds it)](#commercial--rgm-analyst-the-person-who-opens-the-file-and-rebuilds-it) | `BLOCKER` | A method annex complete enough that validating us costs you an hour instead of a week. |
| 14 | [Country Consumer Insights / CMK / Market Intelligence Manager, Czech Republic](#country-consumer-insights--cmk--market-intelligence-manager-czech-republic) | `BLOCKER, LARGELY A VACANCY` | A named methodology seat, so the read is presented internally as your find rather than as a vendor's. |
| 15 | [Agency of record](#agency-of-record) | `BLOCKER OR ALLY` | A proprietary audience read for your next pitch, and a named seat on your client's read rather than exclusion from it. |
| 16 | [CEE / Central-Europe cluster Consumer Insights lead](#cee--central-europe-cluster-consumer-insights-lead) | `NOT AN ICP` | Not a 2026 conversation. If engaged, ask them to define the coverage threshold rather than asking them to buy. |
| 17 | [Local NPD / innovation / product and pack](#local-npd--innovation--product-and-pack) | `NOT AN ICP` | No offer. Fold the NPD questions into the owner's conversation, where the decision actually sits. |
| 18 | [Field sales / merchandising / Perfect Store execution owner](#field-sales--merchandising--perfect-store-execution-owner) | `NOT AN ICP` | No offer. Availability, facings, share of shelf and planogram compliance are structurally outside the product. |

---

## Owner / founder / country GM who is a registered statutory officer

`PRIMARY / MUST WIN` &nbsp; The only signature that provably stays in the country. Primary as estate-holder (GymBeam, Placek, Teta), must-win as brand principal (Kofola, Mattoni, Nutrend, Big Shock, Dermacol, CBI/DanCzek, BAT CR, VAFO).

**CZ/SK titles:** jednatel; majitel; zakladatel; společník a jednatel; předseda představenstva; člen představenstva; generální ředitel (GŘ); Country General Manager CZ & SK; CEO; provozní ředitel / COO (kde je zároveň jednatel); prokurista (pozor: prokurista není statutár)

**In one sentence:** The one man who owns the shares and signs the contract, five corporate functions collapsed into him, who will decide a CZK 1m data purchase inside one meeting, or never.

**Buying role:** economic_buyer, champion, influencer, blocker &nbsp;|&nbsp; **Budget:** He does not have a 'budget line', he has a P&L and a signature. In practice the spend is booked to marketing, obchod/trade, or a one-off project line, and his accountant will ask whether it is náklad or investice. Realistic bands for a CZ/SK owner-managed fir


### The value proposition, in their terms

> One number about your own shelf that you did not know, that you can act on this quarter, and that nobody else in your category has.


### Empathy map


**Sees**

- His own daily sales sheet: obrat, marže, obrátka, per store or per line, in Excel
- The shelf in his own store or his customer's store, read with his own eyes, weekly
- A competitor's new facing or a private label sitting where his tier used to be
- A chain buyer across the table asking for another two points of zadní marže
- The Forbes Největší rodinné firmy 2026 table with his revenue printed next to a rival's

**Hears**

- From himself, out loud in the press: "Do konce kalendářního roku 2025 bychom chtěli mít pět set prodejen. Můj sen je, že do konce roku 2030 bychom mohli mít tisíc prodejen." (Dušan Plaček, Seznam Zprávy)
- "V minulém roce poprvé prodej naší superprémiové řady přesáhl prodej té prémiové." (Pavel Bouška, VAFO/Brit, HN)
- "Trendem je humanizace, zvířata jsou pro Čechy součástí rodiny a majitelé vědí o jejich výživě více informací než o své vlastní." (Bouška, HN)
- From the trade body: "ekonomika malých prodejen je nemilosrdná" and "chybí předvídatelné podnikatelské prostředí" (Pavel Březina, AČTO / Samoška 2026)
- From the incumbent, free, at his own conference: NielsenIQ's Samoška session is literally titled "Co se vyplatí mít v regálech"

**Says**

- "To si rozhodnu sám." / "Tohle je moje firma."
- "Kolik to stojí a co za to dostanu?", asked in minute two, not minute thirty
- "My nekupujeme data, my kupujeme růst."
- "Já jsem v té prodejně každý týden. Svého zákazníka znám." (the sentence he will not let go of, and the one that must never be contradicted head-on)
- "Finanční krize, která začala v roce 2007, byla nakonec jedna velká obchodní příležitost." (Plaček, the owner's instinct that a bad market is when you take share)

**Does**

- Signs alone; no procurement, no legal department, no vendor-onboarding portal, at most an external law firm brought in for a GDPR opinion, which adds two to four weeks
- Approves a new product by tasting it, holding the pack, and looking at the price ladder
- Walks stores; talks to shop staff; changes a planogram by instruction
- Runs the business off Excel plus his own memory, not off a BI tool
- Buys equipment, lines, buildings and companies without a business case a corporate would recognise (VAFO buying Kennelpakaste and PetCa; Al-Namura building the Tisová bottling line at 92 pallets per 8-hour shift)

**Thinks and feels**

- Fears being the generation that loses it, the CZ family-firm succession wave is live and only about a third of firms cross it
- Fears the chain: a de-listing, a lost facing, another two points
- Fears the foreign discounter private label eating his tier from below
- Wants the ranking, the award, the interview, and to be taken seriously outside Czechia
- Carries MONEY risk and OPPORTUNITY-COST risk, not career risk. Nobody can fire him. "We can make you safe" manufactures a doubt he did not have and reads as weakness
- Will not say aloud that he does not actually know who picks his product up and puts it back. He says "znám svého zákazníka" and half believes it

### Pains to name

- [critical] He has no measurement of who stands in front of his product and does not buy it. He has sell-out (his own or the chain's), he has a loyalty file if he is a retailer, and both only describe people who already bought :: Every current CZ data source in his world is transactional; the visitor-vs-buyer gap is exactly what the M&M conversion funnel measures (dashboard `conversion-funnel`, attention thresholds ≥1.5s/≥2.5s), and nothing he buys today produces it.
- [critical] Asymmetry at the chain negotiation: he arrives with numbers the chain gave him :: `14-retailer-data-objection.md` and the JBP literature both describe the negotiation as running on the retailer's data; "zadní marže" is a standing CZ trade-press war (ProfitOnline); AČTO's Březina says small operators "nejsou schopny levně nakoupit od dodavatelů".
- [high] Syndicated data is priced and shaped for multinationals, so his substitute is free trade-press headlines :: NielsenIQ presents "Co se vyplatí mít v regálech" free at Samoška and co-publishes with SOCR ČR; the CZ research market shrank 5.5% to CZK 3.96bn in 2025 with projects moving "do správy zahraničních entit" (SIMAR via MediaGuru). He is not an NIQ client and knows the price would not survive his own margin test.

### Gains to promise

- One number about his own shelf that he did not know and that contradicts something he believed :: it is the only currency that buys an owner's attention, and he will repeat it to his commercial director within the hour and to a journalist within the quarter
- Being the first in his category to have it :: three founding seats per channel × competitive set is scarcity he understands, and "first in Czech pet / forecourt / sports nutrition" is a Forbes sentence
- A decision he can make alone, this quarter, without procurement or a cluster :: his autonomy is the thing he is proudest of; a purchase that proves it is intrinsically satisfying

### Measured on

- Tržby and EBITDA growth, watched monthly, compared to last year and to the named rival he benchmarks against
- Marže, front and back, and cash conversion
- Obrátka / stock turns and, if he manufactures, line utilisation and pallets per shift
- Number of stores, number of countries, number of listings, the countable expansion metrics he quotes in interviews (Plaček: 500 stores by 2025, 1,000 by 2030)

### Talk track


**Open with:** Direct, from the founder's own address, Tuesday–Thursday around 07:45, ≤120 words, one question, no attachment, no link, no deck. Never "rádi bychom vám představili naše řešení", that is a vendor email and it dies. The opening line must be about HIS shelf and must contradict something he believes, e.g.: "Dobrý den, pane Zedníku, v kamenné prodejně sportovní výživy jsme 21 dní měřili, kdo stojí u regálu a kdo z něj 


**Never:** Never contradict *znam sveho zakaznika* head-on. Never lead with method, GDPR reassurance or any version of "we can make you safe": he carries money risk, not career risk, and safety framing invents a doubt he did not have.


**First objection, and the answer**

- *""Já jsem v té prodejně každý týden. Svého zákazníka znám.""*
  - Behind it: Status and identity, not scepticism about data. His authority in his own firm rests on being the one who understands the business from the floor up. A vendor who implies otherwise is attacking the thing he is proudest of. He is al
  - Answer: "Určitě znáte. Vy vidíte lidi, kteří u vás nakoupili, a ty znáte líp než kdokoliv jiný. My měříme ty, co si to vzali do ruky a vrátili to zpátky. Za 21 dní v jedné prodejně: 7 475 návštěvníků, 2 622 nákupů spárovaných s účtenkou, 92 %. Ten rozdíl mezi těmi dvěma čísly je jediné, co prodáváme. A jestli vám z toho vypad
- *""Kolik to stojí a co za to dostanu příští čtvrtletí? My nekupujeme data, my kupujeme růst.""*
  - Behind it: He is applying his real decision rule: is this náklad or investice, and against what return. He has no research budget line to route it to, so it competes directly with a machine, a store or a van. He is also testing whether we wi
  - Answer: Do not quote a price in meeting one; the honest answer is "to záleží na tom, jaké pokrytí byste potřeboval." Then be concrete about the return without inventing one: "Nekupujete růst, kupujete jedno rozhodnutí, které dneska děláte poslepu, jaká gramáž, jaký facing, na koho míří kampaň. Začínáme studií za 150 až 500 ti

**Give them:** One A4 decision page with the finding and two or three moves, plus a method annex (n, wind · One slide with its own scope statement printed in the footer so it survives being forwarde · A short written read plus a working session with him and whoever runs his product; not a d


**Trigger window:** Oct–Nov: he sets next year's numbers with his accountant and commercial director. First contact must land in S · January: Forbes publishes Největší rodinné firmy and Samoška convenes in Olomouc (27–28 Jan), status and peer · Účetní závěrka / Sbírka listin filing, the moment the whole market can see his numbers and he re-reads them h


**Their words:** - USE: jednatel, statutární orgán, tržby, obrat, marže, zadní marže, obrátka, EBITDA, cash flow, zalistování, řetězec, sortiment, facing, regál, privátní / vlastní značka, rodinná firma, vlastní výroba, export, kamenná prodejna, čerpací stanice, trafika, gastro - USE: "kdo to bere z regálu", "kdo přišel a nekoupil", "účtenkou ověřeno", "n


**Where they read:** Forbes Česko, and specifically the annual Největší rodinné firmy ranking (https: · Hospodářské noviny / byznys.hn.cz, Ekonom, E15, Seznam Zprávy Byznys, CzechCrunc · Zboží a Prodej (zboziaprodej.cz) and Retail News (retailnews.cz), the two CZ tr · Podcasts: Černá čísla (founders of Jablotron, Rohlík, Zásilkovna, Kofola), Czech


---

## Retailer private-label / own-brand lead buying like a brand

`PRIMARY` &nbsp; Real P&L, genuine unmet need, and the only persona in the set with no incumbent supplier to displace.

**CZ/SK titles:** ředitel privátních značek; business unit manager – privátní značky / vlastní značky; brand manager privátních značek; manažer vlastních značek; category manager pro vybrané kategorie; nákupní ředitel; produktový manažer privátní značky; vedoucí nákupu a rozvoje vlastních značek

**In one sentence:** The person inside a retailer who runs the own-brand range as a business unit with its own P&L, brand-like margins, brand-like need to understand a shopper, and no incumbent read on that shopper at all.

**Buying role:** user, champion, economic_buyer, influencer &nbsp;|&nbsp; **Budget:** Real, and structured as a business unit P&L where the role is senior (BENU explicitly; Plaček and Teta in substance). He touches the own-brand development, packaging and marketing lines and the category budget. Salary benchmark for the adjacent buying role: Te


### The value proposition, in their terms

> The first read of your own shopper that anyone has ever offered you, and the answer to cannibalisation versus share-taking.


### Empathy map


**Sees**

- Own-brand share, penetration and margin by category, next to the branded block in the same category
- Samples and packs from three candidate suppliers, and a kalkulace that decides which one wins
- His own facings, and the brand supplier whose facings he just took
- Loyalty-programme reporting (Super zoo family, Teta klub) that covers only members and only purchases
- The YouGov number everyone in his industry quotes: private labels in 61% of all CZ purchases in 2025, in ~90% of discounter baskets

**Hears**

- From his own leadership, in public: "Více než 60 procent sortimentu tvoří vlastní značky Super zoo", a claim he has to live up to and which our receipt measurement puts at 45.2% of brandable revenue and 28.5% of SKUs
- From the industry, flattering him: "obchodníci mají nejlepší přístup ke spotřebitelským preferencím a mohou je přímo přenášet do zadání k výrobě privátních značek" (BusinessInfo / Zboží a Prodej)
- From SOCR's president: "Privátní značky se stávají nejen nástrojem cenové konkurence, ale i platformou pro rozvoj lokální produkce a inovací" (Tomáš Prouza)
- From a peer at Košík: "Lokální dodavatelé jsou pro nás důležití a v našich privátních značkách se snažíme spolupracovat hlavně s nimi" (Václav Tringela)
- From his brand suppliers, in the annual negotiation, about the facings he took

**Says**

- "Privátní značka není levná alternativa, je to plnohodnotná značka."
- "Musí to projít kalkulací." / "Udělejme na to business case."
- "Kanibalizujeme se, nebo bereme podíl značce?", the question he cannot currently answer
- In his job ads: 'řídit privátní značku a její kategorie jako samostatnou jednotku'; 'práci s rozpočtem a tvorbu P&L berete jako součást své práce'; 'řízení uvedení nových produktů na český a slovenský trh a vyhodnocení jejich komerčních výsledků'

**Does**

- Runs supplier tenders, evaluates samples, signs manufacturing agreements
- Sets the tier architecture and the price ladder against the branded benchmark
- Owns pack design and the claim on the pack
- Decides facings and planogram share between own brand and brands
- Reads POS and loyalty reporting; has no observational data of any kind

**Thinks and feels**

- Believes, because his industry keeps telling him so, that the retailer has the best access to consumer preference, and privately knows his evidence is a spreadsheet of what already sold
- Cannot separate cannibalisation from share-taking, and it is the question his boss asks
- Feels the strategic weight: at Plaček the own brand is the business, not a hedge
- Is uncomfortable that our read would also be sold to the very brand suppliers whose facings he takes
- Wants proof that the pack, not just the price, is doing work
- Is the fastest internal champion in a chain and cannot sign alone, use him to reach the owner, not as the closer

### Pains to name

- [critical] He has no read on his own shopper. Nobody sells it to him :: NielsenIQ sells his category to his suppliers; there is no supplier-facing or own-brand-facing shopper product at Plaček, Teta, ČEPRO/EuroOil, GymBeam or Sportisimo at all, searches across mediaguru.cz, zboziaprodej.cz, retailnews.cz and mam.cz found retail-media/insight offerings only at Tesco ČR, Rohlík and Kaufland. He has no incumbent, which is why he has no defender and no veto to fight.
- [critical] He cannot tell cannibalisation from share-taking :: his loyalty programme (Super zoo family, Teta klub) sees members and purchases only; it cannot see the shopper who compared the own brand with the brand and chose the brand.
- [high] He never sees the non-buyer :: the person who stood in front of the Q-Power or the Dog Fantasy facing, considered it and put it back is invisible in every source he has. This is the exact gap our attention-threshold conversion funnel measures.

### Gains to promise

- The first read of his own shopper that anyone has ever offered him :: he has no incumbent supplier for this and therefore no internal rival to appease
- A defensible answer to cannibalisation-versus-share-taking :: it is the question his owner asks and the one he cannot currently answer
- Evidence that the pack and the tier are working, not just the price :: it upgrades private label from a price play to a brand play, which is the story his whole industry is telling

### Measured on

- Own-brand share of revenue and of SKUs, by category and total, the number quoted publicly and tracked internally
- Own-brand gross margin versus the branded block in the same category
- Penetration: share of baskets containing an own-brand item
- Number of ranges launched and their first-year commercial result ('vyhodnocení jejich komerčních výsledků' is literally in the job description)

### Talk track


**Open with:** Through the owner, and inside the mandate conversation, do not open a separate cold thread at a chain we are negotiating with. The opening is a question about the gap between his public claim and his measured shelf, put respectfully and with the number offered rather than brandished: "Za 28 dní účtenek v jedné prodejně vychází podíl vlastních značek na tržbách 45,2 %, a Ontario samo 14,1 % všech tržeb. Vy říkáte ve


**Never:** Never mention that the same read is sold to brand suppliers without naming the firewall in the same breath. Never use his public own-brand claim against him; put the measured number next to it and let him do the arithmetic.


**First objection, and the answer**

- *""Mám věrnostní kartu. O svém zákazníkovi vím všechno.""*
  - Behind it: Genuine pride in an asset that really is good, plus the industry line he hears constantly, that retailers have the best access to consumer preference and can translate it straight into a private-label brief. He is defending the p
  - Answer: "Věrnostní karta je nejlepší věc, kterou máte, a my ji nenahrazujeme. Vidí ale jenom členy a jenom nákupy. Neuvidí člověka, který nemá kartu, a hlavně neuvidí toho, kdo se zastavil u vašeho facingu, porovnal Dog Fantasy s Trixie a odešel s tou druhou. To je přesně ten člověk, kvůli kterému neplníte cíl podílu vlastních
- *""Vy tohle chcete prodávat i našim dodavatelům. Proč bych vám měl pouštět naše prodejny?""*
  - Behind it: The disintermediation fear, which the file identifies as one of only two genuinely real retailer fears, plus the specific worry that a private-label manufacturer who is also a shelf competitor (VAFO, which manufactures private lab
  - Answer: "Rovnou tři věci, které jsou v mandátu, ne v marketingu. Za prvé, obchodní data, marže, sell-through, elasticita, nikdy nedostaneme a nedostanou je ani značky, protože je vůbec nesbíráme. Za druhé, žádný řez značka versus jmenovaný konkurent u jednoho řetězce a nikdy žádný rozpad vaší privátní značky ve výstupu pro d

**Give them:** A written read plus the underlying Excel; one decision page for the owner. · One slide with its scope statement in the footer; it will be forwarded internally without  · One exhibit plus a short note, taken straight into the owner's meeting.


**Trigger window:** The annual own-brand range review and the next tender cycle, samples, kalkulace, supplier selection · A new own-brand range or tier being launched (Teta's Q- block, Plaček's Ontario and Elbeville, BENU's private- · The own-brand share target being missed, or the public claim being challenged (Plaček's '60%+ of assortment' a


**Their words:** - USE: privátní značka, vlastní značka, 'naše značky', podíl privátní značky, penetrace, cenová hladina (entry / standard / premium), kalkulace, business case, výběrové řízení, vzorky, dodavatel PL, obal a design, claim na obalu, facing, planogram, obrátka, kanibalizace, srovnávací značka / benchmark, zalistování - USE: "kdo se zastavil u


**Where they read:** Zboží a Prodej (zboziaprodej.cz), the annual private-label share features are h · Retail News (retailnews.cz), BusinessInfo.cz private-label features, Komora Plus · Retail Summit (Prague, early March, Blue Events, 2026 theme 'Zdravé vztahy jako · PLMA and international private-label trade shows for supplier sourcing


---

## Trade / Shopper Marketing Manager (CZ+SK)

`MUST WIN` &nbsp; Highest willingness in the set and the buyer of the FIRST purchase: the study out of an activation or test bucket.

**CZ/SK titles:** Trade Marketing Manager, Trade Marketing & Customer Strategy Lead CZSK, Trade marketing specialista/specialistka, Manažer podpory prodeje, Vedoucí trade marketingu, Head of Trade Marketing, Shopper Marketing Manager (rare in CZ, near-absent in SK), Channel & Category Development Manager, Trade Marke

**In one sentence:** The one person in a Czech FMCG organisation who owns real in-store money, has no analyst, and cannot prove that any of it worked beyond the chain's own sell-out curve.

**Buying role:** economic_buyer, champion, user &nbsp;|&nbsp; **Budget:** He touches the trade / activation / podpora prodeje line, not a research line. Structure of his money in a CZ or CZ+SK subsidiary: (a) trade terms and listing fees paid to the chains, the largest number, but contractually committed inside the annual negotiati


### The value proposition, in their terms

> Independent proof of what your in-store money actually bought, from a source the chain did not hand you.


### Empathy map


**Sees**

- The chain's sell-out report, arriving late, in the chain's own hierarchy, as the only external proof his activation worked
- His own Excel: promo calendar by chain, by mechanic, by week, with spend on one axis and sell-out on the other
- Photo reports from the field agency, shelves, displays, competitor placements, arriving as PDFs and phone pictures
- The leaflet (leták) calendar of every chain, which is the real master schedule of his year
- A KAM sitting between him and the buyer, owning the relationship he funds

**Hears**

- From the boss: 'a o kolik nám to zvedlo sell-out?', the only accepted proof of an activation
- From the retail buyer, inside the listing negotiation: the terms for in-store visibility, priced by the chain and not by a market, GroupM Nexus's Michaela Vejmelková writes it plainly: 'Podmínky bývají stanoveny maloobchodníkem v rámci vyjednávání o zalistování produktů... Cenové podmínky nejsou stanoveny tržně a možnost vyhodnocování účinnosti kampaní je minimální' (spir.cz)
- From the same source, the demand the market is making: 'Retailer musí umožňovat práci s daty, nabízet pokročilé analytiky kampaně' and 'Transparentnost – ideálně nezávislé měření výsledků kampaně'
- From the CZ retail-media consultant Matěj Novák: 'nejsou k dispozici data o výkonu', 'zadavatelé nemají informace o návratnosti a nemohou své investice optimalizovat', and on our exact territory 'Velkou výzvou tady bude měření v prostředí kamenných obchodů' (spir.cz)
- From the association research he half-believes and half-quotes: in-store takes 24% of all marketing investment; 67% now say evaluating that spend is 'určitě důležité' against 32% a decade earlier, but only 49% actually measure it (POPAI CE / Daniel Jesenský, zboziaprodej.cz)

**Says**

- 'Musím to obhájit před obchoďákem', I have to defend it to the sales director
- 'Dej mi to na jeden slide', put it on one slide
- 'Sell-out to neukázal' / 'v akci to jelo, mimo akci ne'
- 'Kolik nás stálo to vystavení a co to přineslo?'
- 'To si zalistujeme na jednání', we'll negotiate that at the annual talks

**Does**

- Builds and defends the annual promo/activation plan in Excel, against the chain's leaflet calendar
- Negotiates display slots, pallet islands and secondary placements inside the KAM's annual negotiation with the buyer
- Signs off POSM artwork and production runs; manages the POSM warehouse through the agency
- Briefs and rides the field agency (ppm factum, 4P&P, GHP CZ, A1 Team) and reads their photo reports
- Reads the chain's sell-out report and reconciles it against his own sell-in and spend

**Thinks and feels**

- Fear: that most of the display and POSM money is waste and that one day somebody with a model will prove it, after he has signed three more years of it
- Fear, sharper: that retail media becomes the chain's new tax, priced by the chain, unmeasurable by him, and that his budget migrates into it whether or not it works
- Ambition: to be the person who brought a genuinely new argument to the annual negotiation instead of re-arguing last year's terms
- Resentment, unspoken: the KAM owns the relationship, the brand manager owns the glamour, and he owns the invoice
- Loneliness: at a CZ or CZ+SK subsidiary he is frequently one person with no analyst; the job ad says he must turn shopper data into commercial plans and no one is hired to do the turning
- Pride in test-and-learn: he changes mechanics every quarter and is comfortable with a partial answer that arrives fast, his provenance bar is materially lower than an insights function's, and it drops further when a purchase is framed as a test rather than a source of record

### Pains to name

- [critical] He cannot prove an activation worked beyond a sell-out bump he did not measure and cannot audit :: POPAI CE finds 67% of Czech advertisers now consider evaluating in-store spend 'definitely important' (up from 32% a decade earlier) while only 49% actually measure it; and their information about effectiveness comes 83% from internal sources, 33% from the chains, 29% from research agencies (POPAI CE survey via zboziaprodej.cz)
- [critical] The chain sets the price and the terms of his in-store visibility inside a negotiation about listing, and he cannot evaluate what he bought :: 'Podmínky bývají stanoveny maloobchodníkem v rámci vyjednávání o zalistování produktů... Cenové podmínky nejsou stanoveny tržně a možnost vyhodnocování účinnosti kampaní je minimální', Michaela Vejmelková, GroupM Nexus, SPIR
- [high] Promotion has eaten the category and he is the person who administers it :: 58% of Czech food and drugstore spend goes through promotion; 64% for branded products against 43% for private label (SOCR ČR / NielsenIQ, Feb 2026). He is optimising discount depth, not building brands, and he knows it

### Gains to promise

- One slide he can carry into the Monday commercial meeting that nobody in the room has seen before :: status with the sales director, and the first time in years he brings a new argument rather than a defence
- A defensible reason to kill one activation format :: freed budget he can redeploy, which is how a trade marketer visibly earns his salary
- A finding that contradicts the brand team's assumption about the shopper :: internal authority; the trade function is usually the last to be believed on 'who the shopper is'

### Measured on

- Sell-out / sell-through by chain and by mechanic (the number his bonus is actually written on)
- Numeric and weighted distribution; secondary-display count executed vs planned
- Promo ROI as his company calculates it, usually incremental units over promo cost, using the chain's sell-out as the incremental measure
- Share of shelf / podíl na regále, where it is audited

### Talk track


**Open with:** Best route, by an order of magnitude: a retailer-convened introduction, the ČEPRO→JTI pattern. A CZ chain convening the supplier's commercial function is not taboo; Tesco ČR ran a Tesco Media Supplier Forum with dunnhumby in June 2024, and a chain-brokered intro converts a cold vendor into a peer in one step. Second route: the POPAI DAY / Czech Retail Days / Samoška floor, where this exact person spends three days a


**Never:** Never say "insight" or "research": those words route his spend to a budget he does not control. Never promise sell-out lift, which is the one thing we cannot measure.


**First objection, and the answer**

- *""Tohle mi ale neřekne, jestli se to prodalo." / "A o kolik nám to zvedlo prodej?", 'This doesn't tell me whether it sold. How much did it lift sales?'"*
  - Behind it: He is bonused on sell-out and on the JBP number, not on shopper understanding. He also knows that the one thing he currently CAN show his sales director is a sell-out bump from the chain's report, so any new source that does not c
  - Answer: Honest answer in two halves. Where the retailer has given us receipt-level POS, one store at GymBeam, 92% match, 2,622 matched orders, 1.29m CZK, we can show which shopper segment ended up in which basket, with the basket count printed on every cell. Where they have not, we measure who was in front of the fixture and
- *""Data z prodejen mi dává řetězec." / "Tesco nám nabízí Clubcard data, Teta má Knowinstore.", 'The chain already gives me store data; Tesco has Clubcard, Teta has Knowins"*
  - Behind it: He is not claiming the incumbent is good, he is signalling that in-store money is already contractually committed to the retailer inside the listing negotiation, and that adding a vendor means finding new money rather than reallo
  - Answer: Correct, and we are not asking for that money. Clubcard tells you what a card-holder bought; KNOWDATA tells the retailer how people moved. Neither tells you who was standing in front of your fixture, the age band with its error band, the spending tier, the group they came in with. That is the only thing we sell. And u

**Give them:** ONE SLIDE with the scope statement printed in its own footer (estate, store count, period, · Excel shaped like the incumbent report, one row per category pair, with lift, basket coun · One chart plus a written recommendation on visit windows; delivered as a slide he forwards


**Trigger window:** Late September to mid-November: next year's budget lock. A brand not in conversation by the end of November is · November to end of December: the annual price-and-terms negotiation with the chains, Czech trade press descri · A chain's category review window opening, or a lost/won listing, the single best discovery question remains '


**Their words:** - USE: sell-out, sell-in, zalistování, listing, obchodní podmínky, roční jednání, sekundární vystavení, paletový ostrov, POS/POP materiály, letáková akce, promo mechanika, multipack, aktivace, ochutnávka/sampling, hostesky, podpora prodeje, numerická a vážená distribuce, podíl na regále, moderní trh / tradiční trh (MT/TT), on-trade / off-


**Where they read:** Zboží a Prodej (zboziaprodej.cz), the CZ retail trade weekly this persona actua · Retail News (retailnews.cz) and Svět balení for packaging/POS crossover · POPAI Central Europe (popai.cz), the association that owns the in-store categor · mistoprodeje.cz, the CZ point-of-sale portal, interviews and POS news


---

## Sales / Commercial Director (country P&L owner)

`MUST WIN` &nbsp; Real economic buyer, but only where he is himself a registered statutory officer.

**CZ/SK titles:** Obchodní ředitel / obchodní ředitelka; Commercial Director; Sales Director CZ/SK; Ředitel obchodu; Country Commercial Manager; Ředitel prodeje; Head of Sales; Holdingový obchodní ředitel; jednatel (where the same person is a registered statutory officer)

**In one sentence:** The country P&L owner who signs, the only person in a CZ/SK FMCG entity who can commit €40k without the signature leaving the country, and only if the entity is Bin A.

**Buying role:** economic_buyer, champion, influencer &nbsp;|&nbsp; **Budget:** Owns the commercial budget: trade marketing / trade investment (the largest discretionary line in a CZ FMCG subsidiary), plus sales operations, plus whatever passes for shopper research locally. Discretionary signature at a Bin-A entity: routinely CZK 100k–1m 


### The value proposition, in their terms

> A read your competitors do not have, funded from trade, that changes where next year's investment goes.


### Empathy map


**Sees**

- A monthly P&L where net revenue is being defended with promotion depth: 64% of branded FMCG revenue in CZ sold on discount in 2025, against 43% for private label.
- Private label at 28% of Czech retail revenue and growing faster than his brands, SOCR ČR + NielsenIQ, Feb 2026.
- A trade-investment line that is the largest discretionary spend in his building and the least well-evidenced.
- A research/insight line that in a rump CZ subsidiary is either tiny or nonexistent; the Czech research market itself shrank 5.5% to 3.96bn CZK in 2025, with projects 'moving to the management of foreign entities'.
- The same NIQ and panel reads his competitors buy, which by definition give him no edge.

**Hears**

- From the owner or GM: 'Kolik nás to bude stát a co za to dostaneme?', the only two questions that matter.
- From his KAMs, weekly: 'nákupčí nám neuznal čísla' and 'potřebuju něco nového do vyjednávání'.
- From finance: 'jaká je návratnost té promo investice?', and he cannot fully answer it.
- From the market's own framing of his problem: Retail Summit 2026 built its whole programme on 'zdravé vztahy' between retailers and suppliers requiring 'vzájemný respekt, jasně nastavená pravidla a efektivní sdílení dat'.
- From recruiters describing his own role: 'Obchodní ředitel/ka pro český trh | FMCG', 140 000–180 000 Kč (jobs.cz, Aug 2026), he knows what he is worth and what the layer below costs.

**Says**

- 'Co to nahrazuje?', the first serious question. He does not have a spare line; something must move.
- 'Z jakého rozpočtu to jde?', and the honest answer must be trade/shopper marketing, never 'inovace' and never 'výzkum'.
- 'Kdyby to viděl náš nákupčí, vadilo by mu to?', the forwardability test, asked in his own words. He asks it because the relationship with the chain is the asset he is actually managing.
- 'Tohle je zajímavé, ale co s tím udělám v pondělí?', the prescription demand. In a CZ organisation with no analyst, the interpretation is the product.
- On a panel: he talks about partnership with retailers, category growth and Czech consumers trading up; he never talks about beating the chain, in public or in writing.

**Does**

- Sets the annual conditions strategy and the trade-investment envelope; personally escalates into the two or three hardest negotiations.
- Approves discretionary spend in the CZK 100k–1m range without ceremony at a Bin-A firm; above that, talks to the owner across the corridor.
- Reads the executive summary and the recommendation; reads the method annex only if someone challenges the number.
- Presents to the owner or the board with three slides and a number.
- Hires: he is the person who decides whether the company has a category person or an analyst at all, and in most CZ subsidiaries he has decided it does not.

**Thinks and feels**

- Fear: that the promo spiral is structural and his brands are being taught to be bought on price, with private label taking the difference.
- Fear he will not say aloud: that the chain understands his shopper better than he does, and is using that to build its own label against him.
- Ambition: to grow net revenue without buying it with discount, and to be the country that head office does not restructure.
- Pride: at a Bin-A firm, that decisions get made in this building. Ask him the autonomy question and a 'yes, that's me' is said with satisfaction.
- Suspicion: he has bought insight decks before that were 'interesting' and changed nothing. He will price this against that memory unless we make it decision-shaped.
- Career calculus: nobody was ever fired for buying NIQ. Buying a Czech startup's camera-based read is a personal risk, and it is on him, so the escrow, the retailer mandate and the method annex are not paperwork, they are his cover.

### Pains to name

- [critical] Net revenue defended by promotion depth: branded goods at 64% promo share versus private label's 43%, in a market where private label is 28% and rising :: SOCR ČR + NielsenIQ, Feb 2026.
- [critical] He is losing the shopper-knowledge argument to his own customers. Tesco already sells Czech suppliers Clubcard-backed insight off ~1.6m CZ households; his own estates' chains give him sell-out and nothing about people.
- [high] Trade investment, his largest discretionary line, is spent with weak proof of return, and finance asks him about it every quarter.

### Gains to promise

- A read no competitor of his has :: this is the only thing on his data shelf that is not commodity parity, and it is the argument that justifies a price above the 'complementary' cap.
- Evidence for the trade-investment conversation with finance :: it protects the largest line he controls.
- A decision-shaped deliverable, not a dashboard :: in an org with no analyst, a written 'so what' plus two or three moves is what he is actually buying, and he will pay materially more for it than for a feed.

### Measured on

- Net revenue / NSV for the country versus plan and versus prior year.
- Value and volume market share (the NIQ number), monthly.
- Gross-to-net: trade spend and promo investment as a percentage of gross sales, and the trend.
- Distribution and listings across the chain portfolio; number of accounts hitting JBP terms.

### Talk track


**Open with:** Warm introduction or a retailer-convened room, always first choice, and where our estate can convene it, that is the strongest asset we have. Otherwise: founder-to-director, Czech, one paragraph, one question, no attachment on first touch, Tue–Thu ~07:45. Do not offer a solution; offer a finding and ask for judgement. Opening that works: 'Máme z jedné české prodejny účtenkami ověřený pohled na to, kdo u regálu skute


**Never:** Never call it a research subscription. Never claim the market from one store: admit n=1 before he raises it, because he is testing whether you will.


**First objection, and the answer**

- *"'Co to nahrazuje? Nemám na to řádek. A z jakého rozpočtu to jde?'"*
  - Behind it: The budget-bucket problem, which is the recorded number-one obstacle from the one primary conversation on file: 'the hurdle is the budget bucket'. It is a classification problem, not an affordability problem, €40k is 0.03–0.7% of
  - Answer: 'Nenahrazuje nic. Jde to z trade/shopper marketingu, ne z výzkumu a ne z inovací.' Then make the size real against something he already spends: he is defending net revenue in a market where 64% of branded FMCG revenue moves on discount, the seat costs less than a mid-sized promo mechanic and is the only line on his da
- *"'Jedna prodejna. To přece nemůžu vydávat za trh.'"*
  - Behind it: He is right, he knows he is right, and he is checking whether we will admit it. This is the single fastest credibility test in the whole process, and most vendors fail it.
  - Answer: 'Máte pravdu a my to nikdy netvrdíme. Jedna prodejna znamená ta prodejna, ne ta síť a ne trh. Jeden řetězec v kategorii je pohled na kanál, nikdy tržní průměr ani benchmark.' Then convert the limit into the commercial structure, honestly: this is why year one carries a density escrow, if the agreed coverage is not li

**Give them:** A written PDF read: page one is the decision layer (one finding, one 'so what', two or thr · Quarterly Excel plus a written read plus a 60-minute review call. Quarterly Excel is what  · One slide. Literally one.


**Trigger window:** August–October: he sets next year's conditions strategy and trade-investment envelope. This is when a channel- · October–November: HIS OWN budget lock for the following year. This is the single hardest date in the whole cal · December: unspent current-year budget. A signed order plus a PO raised before year-end commits this year's mon


**Their words:** - CZ: obchodní ředitel, obchodní podmínky, trade investice, gross-to-net, podíl na trhu, hodnotový a objemový podíl, privátní značka, kategorie, kanál (moderní trh, tradiční trh, HoReCa, čerpací stanice), roční jednání, plán a skutečnost, marže, návratnost promo investice, zalistování. - EN, used untranslated: NSV, gross-to-net, trade spe


**Where they read:** Retail Summit, https://www.retailsummit.cz, 10–12 Mar, Congress Centre Prague; · Zboží a Prodej (https://www.zboziaprodej.cz), including the TOP 50 českého obcho · MediaGuru (https://www.mediaguru.cz) and Marketing & Media (https://mam.cz) for  · SOCR ČR, the retail and tourism association, and its annual analysis with Niel


---

## Distributor / importer commercial lead

`HIGH LEVERAGE` &nbsp; One door controlling dozens of brands that have no CZ entity at all.

**CZ/SK titles:** obchodní ředitel / obchodní ředitelka; ředitel velkoobchodu; jednatel / předseda představenstva (u menších distributorů je to tatáž osoba); nákupní ředitel; kategorie manažer / category manager; produktový manažer; brand manager portfolia zastupovaných značek; key account manager pro řetězce; vedouc

**In one sentence:** The commercial lead of a Czech wholesaler or exclusive importer who carries someone else's brands into the market, he owns the listing, the order guide and the CZ marketing money, and for dozens of 'brands' with no Czech entity he IS the buyer.

**Buying role:** economic_buyer, champion, user, influencer, blocker &nbsp;|&nbsp; **Budget:** Two wallets, and they behave differently. (1) His own commercial/marketing budget, funded partly by principals' marketing contributions, this is where a CZ 150–500k study fits comfortably and where a €40k seat is arguable at the larger houses. (2) A principal


### The value proposition, in their terms

> Something to put in front of your principal that the principal does not have: the Czech shopper for brands with no Czech entity.


### Empathy map


**Sees**

- An order guide of thousands of items with obrátka, marže and dead-stock flags
- A depot, a picking line, and a fleet running 2–3 deliveries per week per customer
- A brand owner's global deck that says nothing about Czechia
- A customer, a trafika, a forecourt tenant, a vet, a 400 m² grocer, whose whole assortment he sets
- A competitor wholesaler taking one of his accounts (PEAL vs GGT vs GECO vs JIP vs CTC, all fighting for the same forecourt and trafika accounts)

**Hears**

- From the principal: "what is your CZ plan, and what did you do with the marketing contribution?"
- From the customer: "tohle mi neprodáváš, tohle mi leží" / "dej mi lepší cenu, jinak to vezmu od JIPu"
- From the chain: the standing zadní-marže war, documented in CZ trade press
- From NielsenIQ, free, at his own congress: "Co se vyplatí mít v regálech"
- From the industry's flagship event, and it is aimed straight at him: Retail Summit 2026's theme is 'Zdravé vztahy jako motor růstu retailu' with 'efektivní sdílení dat' between supplier and retailer as the stated mechanism

**Says**

- "My to do trhu dostaneme.", his entire value proposition to a principal
- "Zastupujeme v ČR a na Slovensku…"
- "Zalistujeme to, ale musí to mít obrátku."
- "Tohle je moje značka na tomhle trhu, Německo mi do toho nemluví."
- "Vozíme jim to dvakrát třikrát týdně."

**Does**

- Decides what enters and leaves the book; that decision is the product
- Negotiates the annual agreement with each principal: exclusivity, targets, marketing contribution, bonus
- Negotiates listings, prices, bonuses and promo calendars downstream with chains, forecourt networks and independents
- Runs sell-out and obrátka reports out of his own ERP, his data is real, complete and entirely about transactions
- Publishes his own catalogue and brand book (brand.placek.cz), and markets his principals' brands with his own content

**Thinks and feels**

- Knows his principal could disintermediate him the day the market is big enough, and is quietly building his own brands as insurance (Plaček's 23 house brands; Al-Namura manufacturing while distributing)
- Is proud that he, not Germany, decides what Czechia stocks, and is irritated that he is treated as logistics
- Believes his obrátka data is the truth of the market and is half right: it is the truth about what left his warehouse
- Fears dead stock, a lost account, and a chain going direct
- Would love to walk into a principal meeting with something the principal does not have
- Will not say aloud that he cannot tell a principal WHY an item moves, only that it moves

### Pains to name

- [critical] He argues assortment with sell-out, which describes what left the warehouse and nothing about who took it off the shelf :: his ERP, his principals' decks and the free NIQ headlines are all transactional; the person standing in the aisle is invisible in all of them.
- [critical] He is judged by principals on a market he cannot describe :: dozens of the brands he carries have no CZ entity at all, so nobody upstream has ever seen a Czech shopper for them, Trixie, Tetra, Eukanuba/IAMS, Hagen, Versele-Laga are all routed through Plaček's book, and Spectrum's Czech entity is a CZK 200,000 wholesale agency with a single young jednatel.
- [high] Dead stock and obrátka across a book of thousands of items :: PEAL runs 5,000+ items, Plaček ~155 brands; every listing decision is a bet made without a who-layer.

### Gains to promise

- Something to put in front of a principal that the principal does not have :: it changes him from a logistics partner into the owner of the Czech consumer relationship, and it is the single most valuable political asset in his job
- A who-layer on his own order guide :: he can defend a listing, a delisting and a range recommendation with more than obrátka
- A reason for a customer to take his advice rather than the competing wholesaler's :: he sells assortment advice as a service and this is the first genuinely new input in years

### Measured on

- Revenue and gross margin per category and per principal
- Obrátka / stock turns and dead-stock percentage across the book
- Number of active customers, drop size, and delivery frequency retained
- Growth targets agreed with each principal, and the renewal of each distribution agreement

### Talk track


**Open with:** Go to the pen, not to the category buyer, landing on a junior buyer is the documented failure mode at JIP. Route in through the customer relationship he cares about most: a retailer-convened introduction is unremarkable to him and instantly credible (ČEPRO doing exactly this for JTI is the template, and PEAL and JIP are ČEPRO-adjacent by the same logic). Opening line, direct and about his own book: "Dobrý den, vozí


**Never:** Never suggest using it to negotiate against the brands he distributes. That is the asymmetry his principals did not consent to, and it is the fastest way to lose the whole book.


**First objection, and the answer**

- *""Moji dodavatelé mají Nielsena. Proč bych to platil já?""*
  - Behind it: Two things at once: he does not want to fund research on behalf of principals who already spend, and he suspects we are trying to sell him something his principals should buy. Underneath, there is a real question about whether he 
  - Answer: "Nielsen jim řekne, co se prodalo. Neřekne jim, a hlavně neřekne vám, kdo to v tom kanálu bere z regálu. A u velké části vašeho katalogu není v Česku vůbec nikdo, kdo by si to mohl koupit: Trixie, Tetra, Eukanuba, Versele-Laga, Hagen tady nemají entitu s rozpočtem. Vy jste jediný, kdo tenhle trh může popsat. Otázka n
- *""Můžu s tím jít do Albertu a zalistovat tam značku, kterou zastupuju?""*
  - Behind it: He is telling us what he would actually do with it, which is useful intelligence and also the exact use we must prohibit. Listing entry is a higher-stakes harm to a retailer than margin on existing SKUs, our own analysis of an ab
  - Answer: "Ne, a řeknu vám rovnou proč, protože je to i ve váš prospěch. Nikdy nedáváme čtení, které jde použít jako argument pro vstup do sortimentu u konkrétního řetězce, ani srovnání jednoho řetězce proti druhému, ani řez značka versus jmenovaný konkurent u jednoho řetězce. A brand-facing čtení schválně publikujeme se zpožděn

**Give them:** Quarterly Excel shaped like the reports he already circulates internally, plus a written r · A short deck he can present as his own work, with our methodology annex bound in and a nam · Excel, shaped like his own item report, with a one-paragraph 'so what' on top.


**Trigger window:** Annual agreement renewal with a principal, targets, exclusivity, marketing contribution. Ask directly when ea · A distribution contract won or lost, or a principal threatening to go direct · A new brand added to the book, or a category tender (ČEPRO explicitly excluded tobacco from its Nov-2025 centr


**Their words:** - USE: velkoobchod, distribuce, výhradní zastoupení, zastupujeme, objednávkový katalog, položka, skladová položka, obrátka / obrátkovost, ležák (dead stock), zalistování, delistace, sell-in / sell-out, rozvoz (2–3× týdně), cash & carry, trafika, gastro, čerpací stanice, nezávislý trh / tradiční trh, roční dohoda, bonus, marketingový přísp


**Where they read:** Kongres Samoška (samoska-kongres.cz), Olomouc, late January, the CZ traditional · Zboží a Prodej (zboziaprodej.cz) and Retail News (retailnews.cz), the two trade · Retail Summit (Prague, Blue Events) and New Retail Summit Bratislava; Czech Reta · POPAI Central Europe (popai.cz): POPAI DAY, 19 Nov 2026, O2 universum; POPAI AWA


---

## Key Account Manager / National Account Manager (brand side)

`CHAMPION, NOT BUYER` &nbsp; Best-evidenced commercial role in CZ/SK FMCG and the named target of the CEPRO-brokered JTI meeting. Wants the one cut we refuse.

**CZ/SK titles:** Key Account Manager (KAM); National Key Account Manager (NKAM); Key Account Manager – moderní trh; Key Account Manager FMCG; Manažer prodeje pro čerpací stanice; Obchodní manažer pro klíčové zákazníky; Senior Key Account Manager; Head of Key Accounts & Strategic Development; Key Account Manager – Sl

**In one sentence:** The person who sits across the table from one or two chain buyers all year, owns that account's volume, listings, promo plan and trade terms, and walks into every meeting needing an argument the buyer cannot dismiss.

**Buying role:** user, champion, influencer &nbsp;|&nbsp; **Budget:** Touches trade marketing / trade investment for HIS account, in a CZ FMCG subsidiary this is typically the largest discretionary commercial line in the building, and the Imperial Brands SK ad puts 'budgets and trade investments' explicitly in his hands. Realis


### The value proposition, in their terms

> An argument your buyer cannot answer with "our numbers say otherwise", because it came through them.


### Empathy map


**Sees**

- His buyer's screen across the table, showing the chain's own sell-out and a private-label line growing faster than his brand, private label reached 28% of Czech retail revenue in 2025 (SOCR ČR + NielsenIQ, Feb 2026).
- A promo-share number that will not go down: 58% of all Czech FMCG revenue was sold on discount in 2025, and for BRANDED products it was 64% versus 43% for private label, his category is being taught to buy on price.
- A NIQ scan extract in Excel that tells him what sold and never who bought it, and a GfK/YouGov panel read built on 2,000 Czech households standing in for 4.5 million.
- His own shelf, photographed on his phone, and a planogram that does not match the one the chain agreed.
- Competitor activity in the leták he did not know was coming.

**Hears**

- From his director: 'Kolik jsme udělali za měsíc a kde jsme proti plánu?', the monthly business review question, asked before anything else.
- From the buyer, the sentence that ends most meetings: 'Vaše čísla neodpovídají našim.' (Your numbers don't match ours.) The whole JBP method exists, in its own vendor literature, to remove 'the debate over whose data is right'.
- From his own JD, verbatim: 'Analyze customer performance, market trends and commercial data to identify opportunities' and lead 'ročných jednání a obchodného plánovania' (Imperial Brands Slovakia KAM ad, profesia.sk, Aug 2026).
- From a Czech agency ad for the same role: 'Péče o klíčové zákazníky v ČR… vyjednávání obchodních a cenových podmínek, realizace promo aktivit, monitoring trhu' (ACjobs, KAM FMCG, do 65 000 Kč).
- From the industry about itself: Retail Summit 2026's stated theme was 'zdravé vztahy' between retailers and suppliers built on 'vzájemný respekt, jasně nastavená pravidla a efektivní sdílení dat', data sharing is publicly named as the missing ingredient.

**Says**

- 'Potřebuju argument, který nákupčí nesmete ze stolu.' (I need an argument the buyer can't sweep off the table.) The single most useful sentence to be able to answer.
- 'Ukaž mi, že to roste kategorii, ne jen nás.', the actual test any listing or facing ask has to pass; the industry's own advice to suppliers is that 'the brands that win shelf space are those who show the buyer how adding their product grows the total category'.
- 'Máme to v Nielsenovi?', the reflex question about any claim, in one word.
- 'Kdo to u nás kupuje?', and he currently cannot answer it about his own SKUs in a specific store.
- In his own job ads, when he writes them for a junior: 'vynikajúce komunikačné a vyjednávacie zručnosti', 'dobré analytické schopnosti', 'pokročilá znalosť práce na PC (Excel, PowerPoint)' (Sarantis Slovakia KAM FMCG ad, from €2,500/mo).

**Does**

- Rebuilds the same reconciliation workbook weekly in Excel, chain sell-out, his shipments, a NIQ extract, and pastes the result into PowerPoint by hand.
- Prepares a 10–15 slide buyer deck per meeting: category trend, his brand versus that trend, distribution gaps, the promo plan, one ask.
- Builds the annual ceník and conditions ask from late August; negotiates September–December; signs for 1 January.
- Buys secondary placement, paletová místa, gondola ends and leták slots out of his account's trade budget.
- Walks stores and photographs planogram compliance on his phone; escalates OSA by email.

**Thinks and feels**

- Fear: losing a listing or a facing on his watch. A delisting is the one event that is visibly his fault.
- Fear he will not say aloud: that his buyer knows more about the shopper in that store than he does, and that the retailer's own private label is being armed with exactly that knowledge.
- Ambition: to be the director. In CZ/SK the KAM→obchodní ředitel path is the normal one, and the jump is roughly 86k to 140–180k CZK/month.
- Resentment: that head office measures him on share while giving him a panel of 2,000 households and a scan file, and that the answer to every request is 'ask the region'.
- Quiet suspicion of new vendors: the last three 'insight' pitches were decks he could not use in a buyer meeting.
- Genuine appetite for one contradicting fact about his own shopper, it is the only thing that makes a buyer put down their own printout.

### Pains to name

- [critical] He cannot answer 'who actually buys my SKUs in your store', his incumbent read is scan data (what sold) plus a 2,000-household claimed-purchase panel, neither of which describes a shopper standing at his shelf :: GfK CZ consumer panel is 2,000 households representing 4.5m Czech households; NIQ is retail measurement, not shopper observation.
- [critical] The whose-numbers-are-right argument eats his meeting. He and the buyer arrive with different figures and spend the first fifteen minutes reconciling :: the JBP method is explicitly marketed as 'eliminating misalignment and debate over whose data is right'.
- [high] Promotion dependency he cannot escape: 64% of branded FMCG revenue in CZ sold on discount in 2025 versus 43% for private label, and private label took 28% of the market :: SOCR ČR + NielsenIQ annual analysis, Feb 2026.

### Gains to promise

- One fact about his own shopper that his buyer has never heard :: it changes the temperature of a meeting and it is remembered as HIS find, which is career currency in a company where nobody else has a fact.
- An argument the buyer cannot contest on method :: a receipt-verified read from the buyer's own store, which the buyer has already seen and vetoed on, cannot be dismissed the way a 2,000-household panel can. He stops losing the first fifteen minutes.
- A category-growth argument rather than a share-grab argument :: it is the only kind of ask that gets granted, and it makes him look like a partner rather than a supplier pushing SKUs.

### Measured on

- Net revenue / net sales value on his account versus plan, monthly and annually.
- Volume and value share within the account (and this is the KPI our product legitimately cannot serve).
- Numeric and weighted distribution; number of active listings; new-listing wins per review cycle.
- Share of shelf / facings won versus agreed planogram, and planogram compliance in store.

### Talk track


**Open with:** Never cold, if it can be avoided, the ČEPRO/EuroOil route (retailer convenes, we are introduced) is worth ten cold emails, and the repo already has a verbal greenlight for exactly that on the tobacco track. Where cold is the only option: founder address, Tue–Thu around 07:45, ≤120 words, no attachment, one question-CTA, subject in Czech 'data o nakupujících v obchodě, dotaz na metodiku'. First line about HIS world,


**Never:** Never offer share against a named competitor inside a named chain. Never promise next-Tuesday freshness; lead with buyer-approved provenance instead of speed.


**First objection, and the answer**

- *"'Fajn, a můžete mi dát můj podíl proti [konkurentovi] v tomhle řetězci? To je to jediné, co potřebuju do vyjednávání.'"*
  - Behind it: His bonus is share within that account. He is asking the only question his KPI sheet asks. He is also testing, half-consciously, whether we are the kind of vendor who over-promises, because he has been burned by decks he could no
  - Answer: 'Ne, a nikdy. Ten řez, jmenovaný řetězec × vaše značka proti jmenovanému konkurentovi, je jediná věc, kterou jsme se zavázali nikdy nepostavit, protože je to podmínka mandátu od obchodníka. Bez toho mandátu neexistuje nic z toho ostatního.' Then give him the reframe immediately, because it is true and it is better th
- *"'Kvartálně a se zpožděním? Moje jednání je příští úterý. To je mi k ničemu.'"*
  - Behind it: He assumes the value of data is its freshness, because the only data he currently gets, sell-out, promo results, decays fast. He has never had a source whose value was structural.
  - Answer: 'Ano, se zpožděním, a to je záměr, ne kompromis. Ten lag je přesně to, co obchodníkovi umožnilo nám to vůbec dovolit.' Then the honest argument: what we deliver does not decay. The fact that the shoppers converting on his range at that forecourt skew a decade older than his campaign target, or that a given adjacency l

**Give them:** One slide plus a two-page PDF method annex, delivered quarterly. His KAM deck is PowerPoin · Two slides for the buyer deck plus the underlying counts in an Excel tab so his buyer's ow · One slide in the internal review pack; an alert-style short read if the placement underper


**Trigger window:** Late August to October: he builds and sends next year's ceník to the chains, Czech retailers publicly report  · September to December: the roční jednání itself; new commercial conditions signed for 1 January. First contact · October to November: his own company's budget lock for the following year, a brand not in conversation by the


**Their words:** - CZ, must be used correctly: řetězec, nákupčí, moderní trh vs tradiční trh, roční jednání / roční vyjednávání, obchodní podmínky, ceník na příští rok, zalistování / vylistování, kategorizace, leták / letáková akce, akční cena, podíl prodejů v akci, sekundární umístění, paletové místo, čelo regálu / gondola, obrátkovost, distribuce (numer


**Where they read:** Zboží a Prodej, https://www.zboziaprodej.cz, the CZ retail trade title he actu · Retail News, https://retailnews.cz, supplier-facing retail monthly. · MediaGuru, https://www.mediaguru.cz, and Marketing & Media, https://mam.cz. · Kongres Samoška, 27–28 Jan, Olomouc, ATOZ; suppliers get a 30% discount on admi


---

## Brand / Marketing Manager (CZ or CZ+SK)

`SECONDARY USER` &nbsp; Real and locally budgeted, but media-shaped and agency-executed.

**CZ/SK titles:** Brand Manager, Senior Brand Manager, Group Brand Manager / Senior Group Brand Manager, Junior Brand Manager, Marketingový manažer / marketingová manažerka, Marketing Manager CZ/SK, Značkový manažer, Brand Manager – portfolio CZ/SK

**In one sentence:** The person who owns the brief, the media plan and the launch, measured on share and awareness, working from claimed behaviour, and who has never seen observed evidence of who actually picks his brand off a Czech shelf.

**Buying role:** user, champion, influencer, economic_buyer &nbsp;|&nbsp; **Budget:** He touches the brand and media budget, the second wallet in the same company, and a different approval path from trade. Composition: media (TV still dominant in CZ; gross TV investment ~92bn CZK in 2025 against a ~160bn CZK gross market, with online at ~71bn 


### The value proposition, in their terms

> Observed evidence for the target definition you inherited, in one sentence you can put straight into the brief.


### Empathy map


**Sees**

- The brand plan and the media plan, both built with the agency, both locked in the autumn
- A brand tracker: awareness, consideration, penetration, image attributes, waves, not continuous
- Panel share data (NielsenIQ, formerly GfK, since the 2023 combination) telling him what sold and to which claimed household
- A campaign post-buy from the media agency: GRPs delivered, reach, frequency
- An agency 'so what' deck he did not write

**Hears**

- From the marketing director and the CFO: prove it. The Czech framing of MMM is explicit, it exists to give 'manažerům na úrovni finančních ředitelů... potřebné argumenty pro přínos reklamy' (MediaGuru)
- From Kantar's Czech spokesman on the same theme: MMM is used 'k propojení online a offline kanálů a k získání měřitelných výsledků'
- From the agency: reach, GRP, share of voice, post-buy, brand lift
- From trade marketing: 'to ti stejně nikdo v regálu nepozná'
- From the effectiveness industry that sets his status: Effie Awards Czech Republic, 29th edition, entries 28 June–18 August 2026, judged on 'měřitelné, prokazatelné výsledky kampaní ve vztahu k zadaným cílům'

**Says**

- 'Kdo je naše cílovka?', and then a demographic he inherited from a deck three years old
- 'Jaký to mělo dopad na značku?'
- 'To musíme přes agenturu'
- 'Do briefu potřebuju insight, ne data'
- 'Máme tracking', often meaning two waves a year with a small sample

**Does**

- Writes briefs; argues about the target audience definition
- Approves media plans built by the agency; reads post-buys and GRP delivery
- Commissions or reads a brand tracker; increasingly asks about marketing mix modelling
- Runs launches: pack, claim, listing timing, launch support with trade
- Fights trade marketing for budget, then co-funds a promo mechanic anyway because 58% of the category moves on promotion

**Thinks and feels**

- Fear of being the brand manager who spent the year's media budget on the wrong audience definition
- Ambition: an Effie, a share point, a launch that lands, visible, portable career currency in a small market
- Frustration that everything he measures is claimed behaviour, never observed behaviour: the tracker asks people, the panel asks households, nobody watched anyone choose
- Discomfort at being told what to do by a vendor, recommending is his own job description
- At a mid-tier or Czech-owned firm: genuine curiosity, because he has nothing like P&G's persona depth and knows it
- At a multinational subsidiary: quiet awareness that the interesting decisions happen in Warsaw or Vienna and his job is local adaptation

### Pains to name

- [critical] Everything he knows about his shopper is claimed, not observed :: his evidence base is a brand tracker (survey), a household panel (claimed purchases, NielsenIQ post-GfK combination) and the agency's segmentation. Nobody in his stack has watched anyone choose at the shelf
- [critical] He must defend the marketing budget to a CFO with instruments that were not built for it :: Czech coverage of MMM frames it explicitly as providing financial directors 'potřebné argumenty pro přínos reklamy', which is an admission that marketing arrives at that meeting under-armed
- [high] Offline is the black hole in his measurement :: TV and OOH are bought on panel currencies, and there is no in-store equivalent; the CZ retail-media panel description is blunt that the shift to digital in physical stores 'vyžaduje nový přístup v plánování, tvorbě obsahu a měření efektivity kampaní' (Czech Retail Days 2026)

### Gains to promise

- One evidence-backed contradiction of the current target definition :: it justifies the brief he wants to write anyway, and it is the kind of finding that gets remembered with his name on it
- Observed rather than claimed behaviour :: differentiates his next deck from every tracker deck in the building
- Effie-grade evidence of an offline effect :: Effie is the visible career currency in a small market

### Measured on

- Market share / value share in the category (panel-based)
- Penetration and, where tracked, repeat
- Brand health metrics from the tracker: awareness, consideration, image attributes
- Volume and revenue against plan; A&P spend to plan

### Talk track


**Open with:** He is a September–October conversation, aimed at NEXT YEAR'S BRIEF, not at this year's budget. Route one: the counterintuitive teaser, cold, Tue–Thu ~07:45, one question, no attachment, 'we measure who actually stops at the fixture in your category at a Czech store; one finding surprised us and it contradicts the target definition most brands in your category use. Nechci nic prodávat, zajímá mě váš názor na metodiku


**Never:** Never open with personas: he has personas and producing them is his own job. Never promise campaign lift, GRPs or anything that sounds like a media currency.


**First objection, and the answer**

- *""Persony máme. Máme brand tracking, máme panel.", 'We already have personas, brand tracking and a panel.'"*
  - Behind it: Status. Personas are the artefact their own function produces; a vendor arriving with personas is competing with their job description. At the mid-tier the real content is different, 'I don't have budget for another study and I w
  - Answer: Everyone has personas; the question is where they came from. Yours come from claimed behaviour in a survey or a household panel. Ours come from what was observed in the aisle and, where the retailer gave us receipts, matched to what actually got bought. We do not lead with personas for that reason, personas are the bo
- *""Jak to zapadne do měření kampaně? Nemám z toho GRP ani lift.", 'How does this fit campaign measurement? I get no GRP and no lift out of it.'"*
  - Behind it: Their measurement world is currency-shaped: GRPs, reach, brand tracking waves, increasingly MMM to defend the budget to the CFO. Anything that is not a currency is a nice-to-have, which is precisely the 'complementary' price cap.
  - Answer: It is not a currency and we will not pretend it is. At one store, with no cross-visit identity and a deliberate publication lag, we cannot produce campaign lift and anyone who offers you that at this footprint is selling you a model. What it is: a briefing input and a post-read on who was actually there. It sits upstre

**Give them:** One slide with the contradiction stated in a single sentence and the method in the footer, · A short PDF read: named clusters, demographic and behavioural signature, over-indexed cate · One slide plus method annex, delivered after the campaign has closed. The lag is stated up


**Trigger window:** October–November: the annual brand plan and budget lock. This is the decisive window and it is the same window · Brief-writing season for next year's campaigns, typically September–November · A launch or relaunch: new SKU, new pack, new claim, the moment a target definition is actually reopened


**Their words:** - USE: brief, cílová skupina / cílovka, insight, positioning, komunikační platforma, mediální plán, zásah/reach, GRP, frekvence, post-buy, penetrace, podíl na trhu, brand tracking, znalost značky, launch, TTL/ATL/BTL, kampaň, ROMI, marketing mix modeling (MMM), Effie - USE the incumbent names correctly: NielsenIQ (not 'Nielsen' if he mean


**Where they read:** MediaGuru (mediaguru.cz), the CZ media/marketing daily this persona reads, incl · Marketing & Media / mam.cz (mam.mam.cz), the weekly with the industry interview · Médiář (mediar.cz) · Effie Czech Republic (effie.cz) and AKA (aka.cz); ASMEA for the media-agency sid


---

## Category Manager / Category Development Manager (brand side)

`BEST INTERNAL AUTHOR` &nbsp; Methodologically literate, no budget, and the owner of the incumbent relationship.

**CZ/SK titles:** Category Development Manager CZ/SK; Category Manager; Category Management Specialist – Central Europe (CZ/SK/DE); Manažer rozvoje kategorie; Category & Trade Marketing Manager; Shopper & Category Manager; Trade Marketing & Customer Strategy Lead CZSK (the hybrid form)

**In one sentence:** The one person in the building who builds the category story the retailer's buyer will accept, range, planogram, space and promo logic, usually for two or three countries, with a Nielsen licence and no budget of his own.

**Buying role:** technical_gatekeeper, influencer, user, champion, blocker &nbsp;|&nbsp; **Budget:** NO BUDGET OF HIS OWN in almost every CZ/SK case. He specifies and recommends; the sales director or the trade marketing lead pays. He does typically hold or share the NIQ/space-tool licence relationship, which makes him the incumbent-relationship owner and the


### The value proposition, in their terms

> A category story built on the shopper, that the buyer cannot counter with their own data.


### Empathy map


**Sees**

- A NIQ scan extract in Excel, and the shape of the file he has rebuilt for five years.
- Spaceman / Shelf Architect planograms and the gap between the agreed planogram and the photo he took in store last week.
- A category with 58% of revenue moving on discount, and branded lines at 64%, his category story keeps being overwritten by price.
- Private label at 28% of the Czech market and structurally advantaged in the buyer's own P&L.
- A GfK/YouGov panel read built on 2,000 Czech households, used to make national claims about who buys his category.

**Hears**

- From the buyer: 'jak to poroste kategorii?', the one question his whole deck exists to answer. The industry's own advice to suppliers says it plainly: 'the brands that win shelf space are those who show the buyer how adding their product grows the total category… data that proves incrementality beats data that just shows the brand is popular.'
- From NIQ's coaching content aimed directly at him: a category review is 'a meeting between a supplier and the retailer to go over reporting on the performance of a category', usually bi-annual, and he should bring 'numbers that back your brand' plus 'graphs and any other visual aid'.
- From the incumbent's product copy that defines his tools: 'optimize product mix across retailers or the store to improve shelf productivity', 'increase your share of shelf', 'measure the impact of shelf scenarios'.
- From a Czech peer in his exact role, in the trade press: 'Category management je nástrojem, který všem zaručí dlouhodobý rozvoj', Zdeněk Sokol, category development manager CZ/SK, Nestlé Česko (Zboží a Prodej).
- From the Czech Nielsen consultant he works with: 'Prvním úkolem při změně sortimentu je zhodnocení jeho šířky', Ondřej Karmazín, Nielsen.

**Says**

- 'Jaká je definice kategorie?', the first question he asks anyone who brings him a number, and the one that decides whether he trusts it.
- 'Kolik je to případů? Z kolika prodejen?', sample and coverage, before conclusions. He is the person who reads the footnote.
- 'To musí být srovnatelné meziročně.', comparability is his professional religion, and it is the main thing that makes a novel source hard for him.
- 'To nemůžu dát do category review, to je jedna prodejna.', and he will be right.
- Publicly, in trade press and on ECR panels: cooperation, long-term category growth, shopper needs, on-shelf availability. He speaks the ECR language because it is the only language the buyer accepts.

**Does**

- Builds and maintains the category file in Excel from a NIQ extract; produces the same six charts every period.
- Builds planograms in Spaceman / Shelf Architect / the chain's tool; runs space and assortment scenarios; produces range recommendations per chain.
- Writes the category review deck and rehearses it with the KAM.
- Post-evaluates promotions and writes the incrementality slide nobody acts on.
- Checks anyone else's methodology, he is the person who will find the denominator problem in our deliverable, and he will find it in the meeting.

**Thinks and feels**

- Fear: being contradicted on method in front of the buyer. This is the specific humiliation his whole job is organised to avoid, and it is why he vetoes.
- Fear he will not say aloud: that the retailer's own loyalty data and the retailer's own private-label team now know things about his category that he cannot see or check.
- Ambition: to own the category story the chain adopts, to be, informally, category captain, which is the highest status available to him.
- Frustration: he covers two or three countries, has no analyst, and spends most of his week rebuilding files instead of thinking.
- Quiet resentment of vendors who arrive with a conclusion: producing the recommendation is HIS job and his status. A vendor-supplied recommendation competes with his job description, which is exactly why the doctrine says sell through him, not around him, and give him the credit line.
- Genuine intellectual curiosity: he is the one person in the building who will be interested in a new observational method for its own sake, and asking his opinion on our method is the highest-converting cold open we have in this market.

### Pains to name

- [critical] He describes shoppers he has never observed. His whole category logic, shopper tree, decision hierarchy, adjacency, rests on scan data plus a 2,000-household claimed-purchase panel, and no observation of anyone at his shelf.
- [critical] Comparability. Anything new must reconcile with the NIQ series he has run for years, or it cannot enter a category review at all. This is the single biggest barrier to our data, and it is legitimate.
- [high] Two or three countries, one person, no analyst, the STOCK ad is one seat for CZ/SK/DE; the Magnum ICC equivalent is one lead for CZ+SK at 75–90k CZK with nobody underneath.

### Gains to promise

- An observed input to the shopper tree that no competitor and no incumbent can supply :: it makes his category story original rather than a re-run of the panel, and originality is the whole of his professional status.
- Evidence for an adjacency proposal with a basket number attached :: an adjacency argument that grows the total basket is the safest and most acceptable thing a supplier can put in front of a buyer.
- Verification that the planogram he designed actually exists and gets looked at :: closes the loop between his design and reality, which nothing else in his toolkit does.

### Measured on

- Category value and volume growth in the chains he supports (not just his own brand's).
- Share of shelf / facings won versus the agreed planogram, and planogram compliance rate.
- Range recommendations accepted by the retailer; number of listings won in the review cycle.
- New-product listing success rate within the first two review windows.

### Talk track


**Open with:** Ask him for his opinion on the method, this is the highest-converting cold open available in this market, and with this specific persona it is not a tactic, it is the truth: we genuinely need his category definitions. Czech, short, no attachment, one question: 'Postavili jsme pozorovací metodu, která popisuje nakupujícího u regálu a páruje ji s účtenkou, 92% shoda na jedné české prodejně. Zajímal by mě váš pohled n


**Never:** Never present a recommendation as finished; he is the author and the credit is the payment. Never skip the method, he will ask first.


**First objection, and the answer**

- *"'Jak se to srovná s Nielsenem meziročně? Protože jestli se to nedá srovnat, do category review to nedám.'"*
  - Behind it: Comparability is his professional religion and the precondition of everything he does. It is also the honest core of the incumbent's moat. He is not being obstructive; he is describing his job.
  - Answer: 'Nesrovná se, a nemá se srovnávat, je to jiný jmenovatel.' Say it first and say it plainly: NIQ measures sales through tills; a panel measures claimed purchase in 2,000 households; we observe people at a fixture and match a subset to receipts at one store. Three different denominators, and pretending otherwise would f
- *"'Kolik případů je v té buňce? A jaký je interval spolehlivosti u toho věku?'"*
  - Behind it: He is protecting himself from being contradicted in front of a buyer, the specific humiliation his whole job is organised to avoid. He will find the weak cell, and if we have not found it first we lose him permanently.
  - Answer: Give him the annex before he asks, and make the discipline visible in the artifact itself rather than in a promise: every published cell suppressed below 25 persons; every lift figure carries its own basket count on the face of the chart; age is a decade bucket with 'unknown' as a first-class value, never a point estim

**Give them:** An annex to his own category deck: two or three slides he re-authors under his own name, p · Slides for the category review deck plus an Excel tab of counts so a retailer analyst can  · A short PDF read with photographs of nothing and numbers of everything; one chart.


**Trigger window:** The category review windows themselves, roughly bi-annual, spring and autumn, which are the only hard deadli · August–October, as the annual conditions and JBP arguments are built and he is asked for the category story. · A range reset / kategorizace announced by a chain, the highest-urgency event in his year.


**Their words:** - CZ: kategorie, rozvoj kategorie, sortiment, šířka a hloubka sortimentu, planogram, regál, čelo regálu, druhotné umístění, facing, obrátkovost, zalistování / vylistování, kategorizace, cenový žebříček, promo vyhodnocení, dostupnost na regále, privátní značka, nákupní chování, nakupující. - EN, used untranslated: category review, category


**Where they read:** ECR Česko-Slovensko, https://www.ecr.cz, with GS1 Czech Republic (https://www. · NIQ client learning: 'Introduction to Category Management', 'Practical Category  · Zboží a Prodej (https://www.zboziaprodej.cz), which runs category-management fea · Kongres Samoška (Jan, Olomouc) and Retail Summit (Mar, Prague).


---

## The ex-NielsenIQ / GfK / Kantar / Ipsos person now inside a brand

`CONVERT TO CO-AUTHOR` &nbsp; The most dangerous reviewer in the market, and the fastest to convert if handed the limits first.

**CZ/SK titles:** Insights Manager (ex-NielsenIQ / ex-GfK / ex-Kantar / ex-Ipsos); Head of Insight; Category & Insights Lead; Business Analyst – Insights & Reporting; Performance Insights Specialist (retailer-side); Group Insight Analyst; freelance výzkumník / konzultant

**In one sentence:** Someone who spent years selling or servicing syndicated data and now sits on the buying side, instantly fluent in what we are, and for exactly that reason the most rigorous method reviewer in the building rather than the easiest sale.

**Buying role:** technical_gatekeeper, champion, influencer, blocker &nbsp;|&nbsp; **Budget:** Generally none of their own. Their power is that a yes from them unblocks other people's budget and a no is final. Occasional exception: where they have landed as a head of insight at a mid-sized Czech firm they may control a few hundred thousand CZK of ad-hoc


### The value proposition, in their terms

> The limits table, unprompted, before any finding: the fastest way to turn the most dangerous reviewer in the market into a co-author.


### Empathy map


**Sees**

- Two sources that disagree, and a room that wants one number
- Vendor decks with no denominator on the chart
- Their former employer's rate card, from memory
- Colleagues using a percentage without knowing the base
- A CZ research market that has stopped growing, 3.96bn CZK, −5.5% in 2025, and an industry describing AI as "největší příležitost i hrozbu zároveň"

**Hears**

- From colleagues: "you used to work there, is this any good?"
- From vendors: claims they can price and discount in their head
- From their profession's own guidance: ESOMAR's 20 Questions frame vendor evaluation around company profile, AI capability and explainability, trust and ethics, human oversight and data governance
- From the incumbent they left, marketing an answer layer aimed at people without analysts, NIQ's Byzzer promises "recommended actions" for brands without "an army of analysts"
- From the buying side of the table, for the first time: "we do not have budget for a wave this year"

**Says**

- "What is the base?", the reflex, before anything else
- "Jaký je fill rate?" and "co když je v buňce devět lidí?"
- "Is that measured or modelled?"
- "That is a store, not a chain."
- "Show me the definitions."

**Does**

- Read the method annex first and the headline last
- Ask for the field registry, the null semantics and the suppression rule before asking about price
- Call an old colleague to check whether we are real
- Rewrite a vendor's chart with the denominator visible before showing it internally
- Sponsor a source they have personally verified, and only that one

**Thinks and feels**

- Pride in being the one person who can tell a good source from a plausible one
- Suspicion of anything that sounds like a panel but is not one
- Sympathy for a small vendor, they have been on that side, combined with zero tolerance for an overstated claim
- Fear of being the person who brought in a source that later embarrassed the company
- Will not say aloud: that they miss having proper data infrastructure and would enjoy being on our advisory board
- Genuinely delighted by an honest limits table; it is the single fastest trust-builder with this person

### Pains to name

- [critical] They are the only methodological check in a company that has no methodological function :: the CZ job market shows no brand-side insights team for them to belong to
- [high] Being the person blamed if a novel source turns out wrong, with no procurement or accreditation cover to hide behind
- [high] Their expertise is being commoditised by the incumbents' own chat and recommendation layers

### Gains to promise

- Being handed the honest limits table unprompted :: it is the thing no vendor does, and it converts them from auditor to sponsor faster than any finding
- A method they can reconstruct and defend to a former colleague :: professional credibility is their entire capital
- A paid or credited methodology-reviewer role :: it monetises exactly the expertise the market is otherwise devaluing

### Measured on

- Whatever their host function is measured on (category, trade, analytics), insight rigour is rarely a formal KPI
- Not being wrong in public
- Delivery of the recurring reporting cycle
- Supplier quality where they influence it

### Talk track


**Open with:** Send the method, not the finding, and send it first. "Nechci vám nic prodávat, chci, abyste tohle rozbil." A short note with the honest limits stated up front: one store, one chain, k≥25 suppression, age as a decade band with error, brand-worn fill 4–10% so no per-brand claims, 92% receipt match at one site, segments run-scoped not windowed. Ask which of those they would attack first. Then offer the paid or credited


**Never:** Never oversell and never round. They know the arithmetic better than we do, and a single soft claim ends it.


**First objection, and the answer**

- *""What is your fill rate on the brand fields, and what happens to a cell of nine people?""*
  - Behind it: They know exactly where computer-vision attribute data breaks, because they have audited vendors from the other side of the table. This is not hostility, it is the fastest possible competence check, and answering it honestly is t
  - Answer: 'Brand-worn fill is currently 4–10% on upper body, 4% on shoes, 3% on watches, which is why we make no per-brand-worn claims at all, only pooled distributions, and why there is a labelling re-tune targeting 25% fill before we would even discuss it. A cell of nine does not get published: k≥25 suppression, and where a l

**Give them:** One table, two pages, sent before the first meeting · A worked one-pager, or five minutes on a call · A one-page signed letter attached to the method annex


**Trigger window:** Their arrival in a new role, the first ninety days are when they rebuild the source stack and are most open · The incumbent contract renewal, where their old-employer knowledge is at its most valuable and their loyalty a · A public methodology failure elsewhere, the PwC AI-generated-report episode of 2026 is the current cautionary


**Their words:** - Universe, projection, weighting, fill rate, cell size, suppression, base, denominator, significance, coverage - Measured vs modelled, the single most important distinction to them, and the one place a careless deck dies - Panel, audit, census, passive measurement, ad-hoc vs continuous - ESOMAR, SIMAR, ICC/ESOMAR Code, certification - H


**Where they read:** ESOMAR and Research World, https://researchworld.com · SIMAR, https://simar.cz (including the annual report and the certification stan · MRS / GRBN maturity studies, https://www.mrs.org.uk · Their former employer's newsletters and product launches


---

## Legal / Privacy / DPO / Corporate & Regulatory Affairs

`BLOCKER, NEUTRALISE FIRST` &nbsp; Never funds anything, can kill everything quietly. Cheapest gate to pre-empt.

**CZ/SK titles:** Právník / Legal Counsel CZ & SK; Legal & Compliance Manager; Pověřenec pro ochranu osobních údajů (DPO); Data Privacy Lead / Specialista ochrany osobních údajů; Manažer korporátních a regulatorních záležitostí; Corporate & Regulatory Affairs (CORA) Manager; ředitel vnějších vztahů a komunikace; exte

**In one sentence:** The person whose entire job is that the company never appears in someone else's regulatory file, no budget, no upside, and an absolute veto over anything with a camera in it.

**Buying role:** blocker, technical_gatekeeper, influencer, saboteur &nbsp;|&nbsp; **Budget:** None, ever. They may control a small external-counsel budget (hundreds of thousands of CZK a year), which is a cost line, not a purchasing line. Cannot sign €40k and would not want to. Their currency is the ability to stop, and to unlock.


### The value proposition, in their terms

> A bounded, documented, reviewable risk instead of an open-ended one, in a pack you can forward unedited to group.


### Empathy map


**Sees**

- A contract queue and a marketing approval queue, neither of which they control
- ÚOOÚ's camera methodology of 8 February 2024, and its footnote conceding that conditions for AI in camera systems are not yet defined: "Nasazení kamerových systémů s využitím umělé inteligence například v bezobslužných prodejnách je v současné době v počátečních fázích přípravy... po získání dostatečných informací a zkušeností budou definovány a uveřejněny podmínky využití umělé inteligence v kamerových systémech"
- ÚOOÚ's 2025 inspection plan naming retail-chain loyalty programmes and consent quality
- ÚOOÚ's 2025 annual report: 5,284 complaints and submissions, up more than 68% year on year; 23 offence proceedings opened; fines over 26m CZK
- ČTÚ's press release marking 2 August 2026 as the date Article 50 transparency rules begin to apply, and confirming that in the Czech Republic the supervising body will "mj. Český telekomunikační úřad"

**Hears**

- From the business: "it's anonymous, right?"
- From the AI Act itself, Recital 16: biometric categorisation means assigning people to categories such as sex and age on the basis of biometric data, and the worked example is "a digital billboard that displays different advertisements depending on the viewer's perceived age or gender"
- From ČTÚ: deployers using AI for "rozpoznávání emocí nebo biometrickou kategorizaci fyzických osob" must "řádně informovat o jejich použití každou dotčenou fyzickou osobu"
- From ÚOOÚ's methodology: "balanční test ve většině případů prokáže neopodstatněnost pořizování biometrických charakteristik v porovnání s jinými variantami řešení"
- From a vendor in the same category, on the record: "Všechna analýza probíhá lokálně v kameře. Neukládají se žádné snímky obličejů, pouze anonymizovaná statistická data", which is the sentence they will expect from us too, and will not accept without paper

**Says**

- "Kdo je správce a kdo zpracovatel?"
- "Na jakém právním základu to běží? Máte balanční test?"
- "Je k tomu DPIA? A jak je splněna informační povinnost?"
- "Tohle je změna účelu." (the purpose-change objection, existing CCTV is lawful for property protection; analytics is a new purpose)
- "Jsou to zvláštní kategorie osobních údajů?"

**Does**

- Read the contract, not the deck. Then read the definitions in the contract
- Ask for the DPIA and the legitimate-interest assessment before asking anything about value
- Escalate anything novel to the regional or group privacy function, which is how a deal dies without a decision
- Redline the warranty and the liability cap
- Keep an AI-use register, newly, since August 2026

**Thinks and feels**

- Their upside is zero and their downside is a fine, an inspection, or a headline. Every incentive points at delay
- Acute discomfort at a live obligation with no adopted national law and no regulator guidance: Article 50 applies, ÚOOÚ has said the AI-in-cameras conditions will be published later, and the Czech adaptation act is not in force
- Fear of the word "biometric" appearing anywhere near their company's name
- Deeper fear, specific to tobacco: any sentence that can be quoted as targeting or verifying minors
- Will not say aloud: that they do not have time to become an AI Act expert and would be relieved if the vendor arrived with the analysis already done
- Will not say aloud: that a well-drafted vendor position paper makes their job easier and they will forward it verbatim

### Pains to name

- [critical] A live legal obligation with no national implementing law and no regulator guidance :: Article 50 transparency applies from 2 August 2026 and ČTÚ has publicly said so, while the Czech adaptation act designating ČTÚ, ČNB and ÚOOÚ was still unadopted as of mid-2026
- [critical] Camera analytics is a purpose change from property protection and needs its own basis, assessment and signage, per chain :: the repo's own retailer-paper dependency RD-25 states the vendor must hold its own legal analysis rather than shelter under the retailer's
- [high] The AI Act's own textbook example of biometric categorisation is an advertising display that adapts to perceived age or sex, the exact thing a Czech operator publicly demonstrated in May 2026

### Gains to promise

- A vendor that arrives with the legal analysis already written :: it converts a two-week internal project into a twenty-minute read, and they get the credit for speed
- A document they can forward unedited :: the highest form of vendor value to a lawyer is a paper with someone else's name at the bottom
- The sentence "no personal data of your company is processed, therefore no brand-side DPA is required" :: it removes an entire workstream from their desk

### Measured on

- Zero regulatory findings, zero fines, zero incidents attributable to the company
- Contracts closed within service-level turnaround
- Completeness of the records of processing and, from 2026, of the AI system inventory
- Training completion rates, AI Act Article 4 literacy obligations have applied since 2 February 2025

### Talk track


**Open with:** Never cold, and never first, reach them through the commercial sponsor, and reach them with a document rather than a meeting request. The opening line that works: "Než se budeme bavit o datech: tady je naše právní pozice, kdo je poskytovatel, kdo zavádějící subjekt, proč u vás nevzniká žádná zpracovatelská smlouva, a stanovisko advokáta k AI Actu. Šest stran. Řekněte mi, co v tom chybí." In tobacco, lead with compl


**Never:** Never say detection, recognition, verification, tracking, or biometric identification. Never ask them to rely on the retailer's legal basis: bring our own.


**First objection, and the answer**

- *""Tohle je biometrická kategorizace podle AI Actu. Nechci, aby nás někdo klasifikoval jako vysoké riziko.""*
  - Behind it: Since 2 August 2026 Article 50 transparency has been live, the Czech adaptation act naming ČTÚ is still not adopted, and ÚOOÚ's own camera methodology says in a footnote that conditions for AI in camera systems 'will be defined an
  - Answer: 'Your company is neither the provider nor the deployer here. The retailer operates the system in its own store and carries the Article 50(3) information duty; we are the provider and we carry the classification; you receive anonymous aggregates of 25 people or more and no personal data of yours is processed at any poin
- *""Kdo je správce a na jakém právním základu ty kamery vůbec běží? A co když ÚOOÚ přijde na kontrolu k tomu řetězci?""*
  - Behind it: The purpose-change problem: existing CCTV is lawful for property protection, and analytics is a new purpose needing its own compatibility assessment, DPIA and signage. The DPO does not want their brand named in someone else's insp
  - Answer: 'The retailer is the controller for the in-store processing and holds the legal basis; we hold our own legal analysis rather than shelter under theirs, because repurposing security cameras for analytics needs its own assessment per chain. We will hand you the same pack we hand the retailer's DPO, DPIA, legitimate-inte

**Give them:** One bound PDF, forwardable unedited to a regional or group privacy function · PDF pack; offered, not pushed · A one-page counsel letter, itself a sales document


**Trigger window:** 2 August 2026: Article 50 transparency obligations began to apply, one month old and top of mind · Adoption of the Czech AI Act adaptation act, whenever it lands, which creates a compliance review cycle and a  · ÚOOÚ publishing sector-specific camera recommendations, it issued Recommendation 1/2026 for healthcare after 


**Their words:** - Správce / zpracovatel / společní správci (controller / processor / joint controllers); zpracovatelská smlouva - Právní základ; oprávněný zájem; balanční test; změna účelu (Art. 6(4)); slučitelnost účelů - DPIA / posouzení vlivu na ochranu osobních údajů; informační povinnost; dvouvrstvé informování (two-layer signage) - Zvláštní kategor


**Where they read:** ÚOOÚ itself, https://uoou.gov.cz (methodology, recommendations, annual report,  · The camera methodology PDF, which they will have read, https://uoou.gov.cz/medi · ČTÚ's AI Act pages and press releases, https://ctu.gov.cz · EDPB Guidelines 3/2019 on video devices, in Czech


---

## Country finance controller / CFO who opens the budget line

`BLOCKER / TIMING GATE` &nbsp; Decides whether this is a 2026 transaction or a 2027 conversation.

**CZ/SK titles:** Finanční ředitel / CFO; Business Controller; Sales/Business Controller; Finance Business Partner; Finanční manažer CZ&SK; hlavní účetní (at smaller owner-managed firms)

**In one sentence:** The person who knows to the week when the plan closes, raises or refuses the purchase order, and at an owner-managed Czech firm is the actual vendor gate because nobody else is.

**Buying role:** economic_buyer, technical_gatekeeper, blocker &nbsp;|&nbsp; **Budget:** Owns the budget line mechanically even where they do not own the decision. At a Bin A owner-managed CZ firm, the controller plus the owner can and do sign €40k, but only against filed profitability: the file's own margin test kills accounts where €40k (CZK 98


### The value proposition, in their terms

> Two budget years closed in one sitting, with a refund condition if the coverage is not there.


### Empathy map


**Sees**

- The plan, the forecast and the variance between them
- Trade-spend accruals that are always wrong in one direction
- A PO queue and an invoice queue
- Cash conversion and payment terms
- A new supplier request in the last quarter of the year with nothing budgeted for it

**Hears**

- "Is it in the plan?"
- "What is the payment term?"
- "Can we book it this year?"
- From the owner or GM: "just make it work"
- From group finance: the capex/opex distinction, the accrual policy, and the audit trail

**Says**

- "Není to v plánu."
- "Na jaké nákladové středisko a jakou položku?"
- "Jednorázově, nebo se to bude opakovat?", the question that decides whether this is easy or hard
- "Vystavíme objednávku, fakturu pošlete až po dodání."
- "Splatnost 60."

**Does**

- Raise, approve or refuse the purchase order
- Decide whether spend is committed to this year or next, which is the single most consequential thing they do to us
- Set and defend the accrual
- Check the supplier's registry data and bank details before the first payment
- At Bin A firms: perform the entire vendor check personally, in a morning

**Thinks and feels**

- Allergic to recurring commitments entered outside the planning cycle
- Relaxed about a bounded one-off, especially with unspent budget in December
- Wants no surprises at audit, an unusual supplier with an unusual deliverable attracts questions
- At an owner-managed firm: carries money risk, not career risk, which changes the whole conversation. Buyer-safety framing is irrelevant to them and reads as a warning
- Will not say aloud: that they can find money in December far more easily than in March

### Pains to name

- [high] Unbudgeted requests arriving after the plan closes
- [high] Recurring commitments dressed as one-offs
- [medium] Cash and payment terms

### Gains to promise

- A signed order plus a PO raised before year end that legitimately commits unspent budget :: it converts a December problem into a December solution
- An escrow refund clause that makes the accrual easy to defend :: it is unusual enough to be memorable and simple enough to explain to an auditor
- Complete registry, VAT and bank documentation on day one :: it means the payment run does not break

### Measured on

- Deliver the plan; explain the variance
- Cash flow and working capital, including days payable
- Forecast accuracy
- Clean audit, no findings

### Talk track


**Open with:** Only via the commercial sponsor or, at owner-managed firms, alongside the owner in the same meeting. One page, no narrative: total cost, what is one-off versus recurring, invoice schedule (two equal invoices, net 30), the escrow refund condition and its accounting shape, the registry and bank documentation attached, and one sentence on which budget line it is proposed to sit in. Then the only question worth asking: "


**Never:** Never name a price before running the margin test against filed net profit. Above roughly 2% of net profit this is a study, not a seat.


**First objection, and the answer**

- *""We are in October. There is nothing in this year's plan for it, and next year's numbers are locked in November.""*
  - Behind it: Genuinely the calendar, not a brush-off. In a CZ subsidiary the controller knows to the week when the plan closes, and an unbudgeted new vendor line in Q4 is the single most annoying thing anyone can bring them.
  - Answer: 'That is why I am here in September rather than January. Two documents, one sitting: a study order against this year's budget, and a subscription order for next year signed at the same time so it enters the plan while the plan is open rather than after. What I need to know from you is the mechanic, does a signed order

**Give them:** Two one-page orders, plus a plain-language note on the invoicing and PO sequence · One clause, legible in a single read · Internal; changes what we walk in and say


**Trigger window:** Budget build, October–November, the only clean window for a recurring line · Year-end unspent budget, roughly mid-November to 31 December, which is a one-off study's best moment · Financial year start and the reset of approval thresholds


**Their words:** - Plán, rozpočet, forecast, výhled, odchylka, nákladové středisko - Objednávka, PO, akruál/dohadná položka, časové rozlišení, opex vs capex - Splatnost, DPP (days payable), cash flow, pracovní kapitál - Jednorázové plnění vs opakované plnění, this distinction is the whole negotiation - Dobropis (credit note) and DPH mechanics on a refund


**Where they read:** Auditors and tax advisers (the Big Four alerts, epravo.cz tax coverage) · Internal group finance policy · CFO peer networks and CZ finance conferences · Almost nothing sector-specific, they do not read retail trade press, which is w


---

## Procurement / purchasing

`BLOCKER` &nbsp; Absent at every Bin-A target; clustered abroad at Bin B.

**CZ/SK titles:** Nákupčí / Senior Buyer; Procurement Manager; Indirect Procurement Manager / nepřímý nákup; Category Buyer – Marketing Services; Procurement Director CEE; Group Procurement Specialist; Supplier Onboarding Specialist; Tender Specialist

**In one sentence:** The function that turns a decision to buy into a vendor record, a purchase order and a payment date, and that at most multinationals sits in Warsaw, Bratislava or Prague-for-nine-markets rather than beside the person who wants us.

**Buying role:** technical_gatekeeper, blocker, economic_buyer &nbsp;|&nbsp; **Budget:** Does not own budget; owns access to it. Controls thresholds, vendor creation, framework agreements and payment terms. At a multinational, a purchase of ~1,000,000 CZK (≈€40.8k) will almost always exceed a local threshold and require either a regional category 


### The value proposition, in their terms

> A vendor file that is already complete, and a spend classification that keeps the decision in this country.


### Empathy map


**Sees**

- A requisition queue and a supplier master with too many one-off vendors in it
- A savings number they are measured on, tracked monthly
- A preferred-supplier panel they are expected to route spend into
- Onboarding checklists: certificate of incorporation, IČO and VAT registration, verified bank details, sanctions screening, signed supplier code of conduct, GDPR data-processing agreement where personal data is involved, self-assessment questionnaire, EcoVadis or Sedex score
- Business stakeholders who describe an already-made decision as a request

**Hears**

- From the business: "we've already agreed it, we just need a PO"
- From above: the savings target, restated
- From their own job spec (Molson Coors, Procurement Director CEE, Prague, nine markets): ensure the team "delivers against key performance metrics and realizes aligned annual savings" and lead "commercial contracts for key suppliers across the region"
- From supplier policy documents they must enforce, P&G's supplier expectations state the company "does not accept, and our contract with your company would not permit, an approach that passes potential liabilities onto P&G because of the tools you have chosen", requires suppliers to inform their P&G counterparts when AI is used, and may demand specific due diligence
- From finance: "what is the payment term?"

**Says**

- "Do jaké nákupní kategorie to patří?", the first question, and the one that decides everything
- "Je to jednorázová objednávka nebo opakované plnění?"
- "Máme na tohle rámcovou smlouvu?"
- "Kolik nabídek máme?"
- "Splatnost 60 dní."

**Does**

- Classify the spend before anything else, research and market intelligence routes to a global panel; trade or shopper marketing services usually does not
- Create or refuse the vendor record in SAP Ariba, Coupa or the local ERP
- Run supplier risk screening and enforce the code of conduct
- Push payment terms outward and rate cards downward
- Consolidate suppliers, fewer vendors is itself a KPI

**Thinks and feels**

- Indifferent to whether the insight is good. Interested in whether the purchase is classifiable, comparable and low-risk
- Suspicious of a sole-source purchase with no competitive comparison
- Wary of small vendors: continuity risk, insurance, data security, and the administrative cost of a supplier who will bill once
- Newly nervous about AI in the supply chain, because their own supplier policies now require disclosure
- Will not say aloud: that a supplier who arrives with the onboarding file already complete jumps the queue
- Will not say aloud: that they can create a vendor record for a small first purchase far more easily than for a subscription

### Pains to name

- [critical] Being asked to onboard a sole-source, novel, small vendor at speed, with no comparable and no framework agreement
- [high] Savings targets that a genuinely new category cannot contribute to, there is nothing to save against
- [high] Supplier risk exposure: data protection, security, AI use, sanctions, continuity, and now AI Act provenance

### Gains to promise

- A supplier who arrives with the entire onboarding file assembled :: it removes three chase emails and shortens their cycle-time metric
- A first purchase small enough to clear a local threshold :: it lets them say yes without an exception
- An unambiguous spend classification proposed by the vendor :: it protects them from a governance finding

### Measured on

- Realised savings against target, the dominant KPI
- Payment-term extension and working-capital contribution
- Supplier consolidation and reduction of the vendor master
- Cycle time from requisition to PO

### Talk track


**Open with:** Never approach them first and never approach them cold. Ask the commercial sponsor for the name and then send a single email whose entire content is administrative: "Aby to u vás neuvázlo, posílám kompletní podklady pro založení dodavatele: IČO, DIČ, výpis z OR, potvrzení bankovního účtu, seznam subdodavatelů, prohlášení o využití AI, návrh objednávky a metodickou záruku. Splatnost navrhujeme 30 dnů. Do jaké nákupní


**Never:** Never let it be classified as market research: that routes it to a regional panel and turns a 2026 deal into a 2027 one.


**First objection, and the answer**

- *""Jaké je to nákupní kategorie? Máme preferované dodavatele na market research a nový dodavatel jde přes region.""*
  - Behind it: Exactly the banked P&G line, 'the hurdle is the budget bucket'. Research and market-intelligence spend at a multinational routes to a preferred-supplier panel governed abroad (Mondelez procurement hub in Warsaw, EBSC in Bratislav
  - Answer: 'Then do not classify it as research. What we are proposing first is a scoped one-off study out of trade or shopper-marketing budget, a test purchase, not a source of record, and not a panel subscription. It is a single order, one deliverable, no data feed and no recurring licence. We will arrive with the onboarding f
- *""Splatnost máme 60, u nových dodavatelů 90.""*
  - Behind it: Payment terms are a scored procurement KPI and the standard opening move against a small supplier. It is not personal and it is not usually a hard limit.
  - Answer: 'Net 30, and here is why it is not an unreasonable ask: under §1963 of the Czech civil code a B2B payment term beyond 60 days is only enforceable where expressly agreed and not grossly unfair, so 90 is outside the ordinary range for a Czech-law contract between a large buyer and a small supplier. We will take 45 to clo

**Give them:** A single email with attachments, addressed to their checklist rather than to their interes · Three lines in an email, plus the draft order · A revised one-page order


**Trigger window:** Annual category review and supplier-panel refresh · The savings-target reset at the start of the financial year · Year-end: unspent budget must be committed before it lapses, and a signed order with a PO raised before 31 Dec


**Their words:** - Nákupní kategorie, přímý vs nepřímý nákup, marketing services, market research category - Dodavatel, prověření dodavatele, onboarding, preferovaný dodavatel, panel - Objednávka (order) vs rámcová smlouva (framework agreement) vs faktura (invoice), and the distinction that matters: an invoice commits nothing; a signed order against whic


**Where they read:** Their own e-procurement platform documentation and internal category playbooks · Supplier portals they enforce, pgsupplier.com is the public example, including  · EcoVadis, Sedex and supplier-risk vendor content · CIPS and regional procurement communities; Sievo-style FMCG procurement benchmar


---

## Commercial / RGM analyst (the person who opens the file and rebuilds it)

`BLOCKER` &nbsp; Mostly a mirage at the companies that can sign, real at regional hubs. Never fail his check.

**CZ/SK titles:** Business Analyst – Insights & Reporting; Sales Data Analyst; Obchodní analytik; Analytik prodeje; Commercial Excellence Specialist / Data Analyst CZ&SK; Commercial Finance Expert; Sales Controller; Specialista datové analytiky obchodu; Business Analyst Team Leader – Central Europe

**In one sentence:** The person who actually opens the spreadsheet, finds the denominator problem, and decides in private whether anyone else in the building is allowed to believe our number, and in most Czech FMCG companies he does not exist.

**Buying role:** technical_gatekeeper, influencer, blocker, saboteur &nbsp;|&nbsp; **Budget:** NO BUDGET. He specifies, verifies and quietly vetoes. He may hold or administer the NIQ/Power BI licence relationship. His own pay in CZ sits roughly 55,000–105,000 CZK/month on live evidence (Commercial Excellence Specialist / Data Analyst CZ&SK at 63,000–73,


### The value proposition, in their terms

> A method annex complete enough that validating us costs you an hour instead of a week.


### Empathy map


**Sees**

- Three files that do not reconcile: chain sell-out, internal shipments, and the NIQ scan extract, each with a different SKU hierarchy.
- Power BI dashboards nobody opens, and the Excel workbook everybody actually uses.
- Promo baselines he does not fully believe, in a market where 64% of branded revenue moves on discount.
- A NIQ or panel read whose sample he cannot inspect and whose denominators he has to infer.
- Ad-hoc requests arriving in Teams with no lead time.

**Hears**

- From the director, at 4pm: 'potřebuju to na zítřek do devíti.'
- From the KAM: 'můžeš mi to dát v tomhle formátu?', meaning the format his predecessor's predecessor used.
- From finance: 'to nesedí s účetnictvím.'
- From the incumbents, aimed squarely at his employer over his head: NIQ shipped Ask Arthur Chat in April 2026 so users can get answers 'without requiring advanced analytics expertise or navigating complex tools'; Byzzer exists so brands 'don't have to mine for insights'; Circana's Complete Why sells 'the true drivers of sales performance'. Every one of these is marketed as a partial replacement for him.
- From the market: the Czech research market shrank 5.5% to 3.96bn CZK in 2025, with SIMAR noting projects moving 'z českého trhu do správy zahraničních entit'. His function is being centralised abroad and he knows it.

**Says**

- 'Jaký je jmenovatel?', the first question, always, and the one that decides everything.
- 'Kolik případů je v té buňce?', cell size, before any conclusion.
- 'Je to měřeno, nebo modelováno?', and this is the question our tobacco decks must be able to survive, because their POS layer is illustrative and must be labelled every time.
- 'Dá se to stáhnout?', he wants the file, not the picture.
- 'Meziročně to nesedí.', the comparability objection, delivered flatly.

**Does**

- Lives in Excel; uses Power BI for presentation and Excel for truth; occasionally SQL or SAP.
- Rebuilds the same reconciliation every week and automates none of it because there is no time.
- Checks any external number before it is allowed into a deck. He will read our method annex line by line.
- Produces the promo post-evaluation and the gross-to-net view for finance.
- Says no, quietly, by finding a flaw, he rarely blocks openly; he raises a question the director cannot answer, and the initiative dies.

**Thinks and feels**

- Fear: putting a number in front of the board that turns out to be wrong. This is the whole psychology of the role, and it is why an unexplained figure is rejected even by people with no capacity to check it.
- Frustration: he is a reporting factory, not an analyst, and he knows the difference.
- Quiet threat perception: every vendor arriving with a finished conclusion is implicitly saying his layer is unnecessary, which is exactly what NIQ's own prescriptive products say out loud.
- Genuine professional pleasure at a clean method. If our annex is honest, complete, and includes honest nulls, he flips from sceptic to advocate faster than anyone else in the building, because he has been handed the one thing he never gets from a vendor.
- He does not want to be told what to do. He wants to be able to reproduce it.

### Pains to name

- [critical] Reconciliation. Multiple non-matching sources, no single source of truth, and every meeting starts with an argument about which file is right.
- [critical] He is a reporting function, not an analytical one, the STOCK job architecture, which splits 'Insights & Reporting' from 'Data & Automation' across two seats and a team leader for three countries, is itself an admission of how much of this is plumbing.
- [high] No shopper dimension at all. Everything he has is transactions and shipments; nothing tells him anything about a person.

### Gains to promise

- A method annex he can reproduce :: it is the only thing that lets him say yes without owning someone else's mistake, and it converts him from gate to advocate.
- A dimension he has never had, an observed shopper attached to a receipt :: professionally novel, and the most interesting thing to cross his desk in years.
- Honest nulls and visible cell counts :: they make him trust the cells that ARE populated, which is the counterintuitive mechanic that wins this persona.

### Measured on

- Accuracy and timeliness of the commercial pack; number of restatements (ideally zero).
- Forecast accuracy versus actuals.
- Promo ROI / incrementality measurement quality.
- Gross-to-net reconciliation with finance.

### Talk track


**Open with:** Do not approach him first and do not approach him cold, he is reached THROUGH the director or the category manager, and the correct move is to ask for him: 'kdo u vás bude chtít vidět metodiku? Rád mu ji pošlu předem.' Asking for the sceptic by name, before he asks, is the strongest possible signal. Then send the method annex ahead of the meeting, not during it: n, window, store count, k≥25 suppression, decade-bucke


**Never:** Never send a headline without its n. Never say "directionally" or "roughly": he is looking for the flaw and vagueness hands it to him.


**First objection, and the answer**

- *"'Jaký je jmenovatel? Z kolika prodejen, za jaké období, a je to měřené nebo modelované?'"*
  - Behind it: Career self-protection. He personally owns any number that reaches a board deck, and he has been handed unverifiable vendor figures before, including by the incumbents, whose panel samples he also cannot inspect but is not permit
  - Answer: Answer with the full annex, unprompted, before the meeting rather than in it: store count, window, sample, suppression rule, error bands, and an explicit measured-versus-modelled label per layer. Volunteer the uncomfortable ones: the GymBeam join is real at 92% (2,622 matched orders from 7,475 visitors over 21 days); t
- *"'Dá se to stáhnout? Potřebuju surový soubor nebo API, ne PDF.'"*
  - Behind it: He needs to join our data to his existing files. He is also testing whether there is a product underneath the deck, or just a consultant.
  - Answer: 'Surová data ne, nikdy. Dostáváte agregáty, protože nic pod k=25 ani neopouští systém.' Then be honest about what exists today rather than describing a roadmap as a feature: there is no brand-facing portal, no self-serve export and no brand login, the export UI in the retailer dashboard is an explicitly labelled 'com

**Give them:** A PDF annex sent BEFORE the meeting, plus the underlying counts in Excel. · Excel/CSV shaped like the incumbent report he already ingests, not like a dashboard export · A short written note plus the two files. He defines the metric; we do not.


**Trigger window:** Annual planning and the conditions negotiation build (Aug–Oct), when he is asked to produce a fact base he doe · Monthly business review, when an unexplained share movement forces a question nobody can answer. · A promo post-evaluation that contradicts what the commercial team believed.


**Their words:** - CZ: jmenovatel, vzorek, počet případů, meziroční srovnání, baseline, inkrementalita, kanibalizace, sell-in / sell-out, obrátkovost, plán vs. skutečnost, hrubá a čistá tržba, gross-to-net, přesnost predikce, datová kvalita. - EN, used untranslated: denominator, sample size, cell size, suppression, confidence interval, error band, baselin


**Where they read:** NIQ product and client-learning pages, https://nielseniq.com, because his empl · Kantar CZ, YouGov (post-GfK Consumer Panel Services), Worldpanel by Numerator me · SIMAR, https://simar.cz, for the state of the Czech research market and its me · Power BI / Excel communities, and LinkedIn Learning-type material; he is more li


---

## Country Consumer Insights / CMK / Market Intelligence Manager, Czech Republic

`BLOCKER, LARGELY A VACANCY` &nbsp; No brand-side FMCG consumer-insights role listed anywhere in CZ; zero shopper-insights roles in all of SK.

**CZ/SK titles:** Consumer Insights Manager; Shopper Insights Manager; Market Intelligence Manager; Manažer znalosti trhu; Business Analyst – Insights & Reporting (CZ/SK/DE); Category Management Specialist; Trade Marketing & Customer Strategy Lead CZSK (the hybrid that actually holds the work); Perfect Store Manager 

**In one sentence:** In a Czech or Slovak FMCG subsidiary this is usually not a job but a slice of the trade-marketing or category person's week, and where a real title does exist it is a Central-Europe analyst role covering CZ+SK+DE, not a Czech insights function.

**Buying role:** technical_gatekeeper, blocker, influencer, user, champion &nbsp;|&nbsp; **Budget:** No budget line of their own in the overwhelming majority of CZ/SK subsidiaries. The syndicated contract (NIQ, Kantar, occasionally Ipsos/Nielsen Admosphere) is signed either by the CEE insights lead or by the country sales director. Realistic personal discreti


### The value proposition, in their terms

> A named methodology seat, so the read is presented internally as your find rather than as a vendor's.


### Empathy map


**Sees**

- A NIQ/Nielsen databook and a pivot table, the actual desktop, all day
- A category review deck where the shopper slide is decorative and the pricing slide is the argument
- The chain's category manager across the table, who has first-party loyalty or POS data the brand does not
- Tesco already selling suppliers Clubcard-backed insight through dunnhumby, and Rohlík and Kaufland running their own platforms, so the retailer looks better-armed than they are
- A shrinking research market: SIMAR put the Czech research market at 3.96bn CZK in 2025, down 5.5%

**Hears**

- From the sales director: "potřebuju to na category review, ne za tři týdny", the review date, not the method, is the deadline
- From the retailer buyer: some version of "my data says something different"
- From their own job description, verbatim from the closest live CZ posting (Magnum ICC ČR, jobs.cz, 28 Aug 2026): the holder must "turn consumer, shopper and customer data driven insights into winning commercial plans, growth opportunities and market execution priorities", for CZ and SK, alone
- From a Central-Europe posting at a Czech company (STOCK Plzeň-Božkov): the analyst role is scoped "Central Europe (CZ/SK/DE)", i.e. Czechia is a third of a job
- From NIQ's own marketing: Byzzer gives "recommended actions to take on price, promotion, assortment, and market expansion" so manufacturers "don't have to mine for insights", built for brands without "an army of analysts", a description of them, written by their supplier

**Says**

- "Jaká je metodika? Jaký je vzorek?", the first two questions, in that order
- "To nám neprojde na category review" (that will not survive the category review)
- "Máme na to Nielsena", said to close a conversation, not to defend NIQ
- "Personas už máme" / "segmentaci jsme dělali s Ipsosem", usually a two-to-four-year-old attitudinal study
- In job ads they write or inherit: "práce s interními i externími daty", "příprava analýz pro doporučení sortimentu", "účast na tvorbě a aktualizaci planogramů", "sledování změn v chování zákazníků" (Reed CZ, Category Specialist – FMCG)

**Does**

- Live in Excel and PowerPoint; NIQ/Nielsen Discover or a databook; occasionally Power BI
- Rebuild the same category story two or three times a year for different chains
- Commission nothing, or one small ad-hoc from Ipsos, Kantar, Nielsen Admosphere, NMS or STEM/MARK when a brand manager insists
- Forward a vendor's PDF to the sales director with three lines of their own on top
- Check the footnote. They are the only person in the building who reads the method annex

**Thinks and feels**

- Fear of being the single name on a number that turns out wrong in front of the chain, with no analyst to check it and no institutional cover
- Quiet resentment that the retailer knows more about their shopper than they do
- Awareness that their function is being exported: projects moving "do správy zahraničních entit" is their career, described by their trade association
- Ambition to be the person who brings the insight that changes a listing decision, not the person who refreshes a databook
- Will not say aloud: that they cannot evaluate a computer-vision methodology properly and are hoping not to be asked to
- Will not say aloud: that a new external source they did not select makes them look replaceable, which is precisely the 'quiet loser (a)' dynamic

### Pains to name

- [critical] No analyst capacity and no research line: they are contractually the interpreter with nobody to do the analysis :: the only comparable live CZ posting, Magnum ICC ČR's Trade Marketing & Customer Strategy Lead CZSK, is ONE person for two countries with no analyst attached (jobs.cz, 28 Aug 2026)
- [critical] The function is being centralised out of the country, and their budget with it :: SIMAR attributes the 5.5% 2025 market decline partly to "projekty se přesouvají z českého trhu do správy zahraničních entit" (MediaGuru/Médiář, Jun 2026)
- [high] Retail measurement tells them what sold, never who bought, and the retailer will not tell them :: the whole premise of the M&M pitch, and consistent with the banked brand-insider quote that retailers "absolutely do not want to share any information with the brands"

### Gains to promise

- A finding that contradicts something the business believes about its own shopper :: it is the only kind of slide that gets remembered in a review, and it makes them the person who found it
- Their name on the methodology review of a new source :: converts the threat of an unselected vendor into a credit line, which is the cheapest promotion mechanism they have
- A written "so what" they can present as their own :: they have no analyst; a two-layer deliverable (decision page + method annex) gives them a finished argument and a defensible footnote

### Measured on

- Category review outcomes: listings won or defended, share of shelf, must-stock adherence
- Share and value growth in modern trade (measured on NIQ/Nielsen, not on anything we produce)
- Promo effectiveness / ROI post-evaluation
- On-time delivery of the monthly business review pack

### Talk track


**Open with:** Cold email from the founder address, Tue–Thu around 07:45, ≤120 words, no attachment or link on the first touch, subject "in-store shopper data, methodology question". Open with their world, not ours, and ask their opinion rather than for a meeting: "Děláme receipt-matched pozorování u pokladny v jedné české prodejně, 92 % relací spárováno s účtenkou. Zajímá mě váš názor na metodiku, ne prodej: kde byste tuhle meto


**Never:** Never arrive with a recommendation: recommending is their status and a prescriptive vendor is a competitor. Never claim comparability with their source of record.


**First objection, and the answer**

- *""Co přesně to měří? Jaký je vzorek a reprezentativita?", 'What is the sample, and how is it projected? We already buy Nielsen.'"*
  - Behind it: Two things at once. (a) Status: they own the incumbent relationship and a source they did not bring in threatens their authority, the strategy pack's 'quiet loser (a)'. (b) Genuine competence: in a rump org they are the only pers
  - Answer: 'We are not a projected panel and we never will be. There is no universe, no weighting and no projection, it is a census of the people who walked past a camera in one store, and every cell is suppressed below 25 people. So it cannot tell you share and it cannot tell you the market; NIQ still does that. What it does is
- *""Personas už máme. Máme segmentaci od Ipsosu/Kantaru.""*
  - Behind it: Half-true and half-defensive. Declared segmentations in CZ are usually attitudinal, survey-built, two to four years old and not linked to any purchase. But saying so directly attacks a project they commissioned and defended intern
  - Answer: 'You almost certainly have better attitudinal segments than we could build. Ours are not a replacement, they are observed, in-aisle, per visit, and where the retailer gives receipts they are joined to a basket. The honest framing is that yours tell you who people say they are; ours tell you who walked in on a Tuesday 

**Give them:** One PDF, forwardable, no login, no demo · Quarterly Excel plus a one-page written read; method annex behind it. Not a dashboard, th · Two slides inside the quarterly read


**Trigger window:** Chain category review windows, the spring and autumn resets; the deck deadline, not the insight, sets the clo · JBP season with the key chains, from October · Budget lock, October–November: a brand not in conversation by then is buying out of a locked plan


**Their words:** - CMK (Consumer & Market Knowledge), P&G only. Using it signals insider in one word; using it at Nestlé signals the opposite - Market Intelligence, Nestlé. Consumer Insights, everyone else - Retail measurement / RMS / databook / Discover (NIQ's platform), the incumbent's furniture - Sell-out vs sell-in; odbyt; numerická a vážená distr


**Where they read:** MediaGuru, https://www.mediaguru.cz (the SIMAR annual-report coverage lands her · Zboží a Prodej, https://www.zboziaprodej.cz · Retail News CZ, https://retailnews.cz · Marketing & Media (mam.cz), https://www.mam.cz


---

## Agency of record

`BLOCKER OR ALLY` &nbsp; Structural loser (b) if measurement insources. A real route to brands, and a real saboteur.

**CZ/SK titles:** Media planner / Senior media planner, Strategy Director, Client Service Director, Account Director, Head of Retail Media, Ředitel nákupu médií, Shopper marketing manager (agency-side), Ředitel in-store komunikace, Managing Director (agentura), Go-to-Market Propositions Lead (dunnhumby Praha)

**In one sentence:** The planner or shopper-agency lead who publicly demands independent in-store measurement, would use it tomorrow to win a pitch, and who loses the interpretation layer, and sometimes the inventory sale, if that measurement ever becomes the client's own.

**Buying role:** influencer, blocker, champion, user, saboteur &nbsp;|&nbsp; **Budget:** He does not own a research budget; he owns CONTROL of client money and a small pitch/tools budget of his own. Market frame: Czech media agency billings were ~USD 1.33bn in 2025 (+5.8%), with Knowlimits at 13.7% share, and media agencies accounting for ~74% of 


### The value proposition, in their terms

> A proprietary audience read for your next pitch, and a named seat on your client's read rather than exclusion from it.


### Empathy map


**Sees**

- The pitch deck due Thursday, and the client's brief that asks for something proprietary
- Media plans and post-buys; panel currencies for TV and online; nothing comparable for in-store
- Retail-media rate cards priced by the retailer, sold with the retailer's own reporting attached
- The billings ranking they are measured by publicly: Knowlimits #1 at ~13.7% share, OMD, EssenceMediacom, PHD, Wavemaker; Omnicom the largest network, a market of ~USD 1.33bn in billings in 2025
- Clients asking why in-store money cannot be evaluated the way digital is

**Hears**

- From clients: 'a co nám to přineslo?' and 'proč to mám kupovat, když to neumíte změřit?'
- From their own association's published series, verbatim, as a demand list to retailers: 'Retailer musí umožňovat práci s daty, nabízet pokročilé analytiky kampaně, ideálně také cílení a optimalizaci v reálném čase' and 'Transparentnost – ideálně nezávislé měření výsledků kampaně', Michaela Vejmelková, GroupM Nexus (SPIR)
- From the same series: 'chybí pokročilejší možnosti cílení, reklama většinou prodává za pevnou cenu za týden, nejsou k dispozici data o výkonu' and 'měření pro to, aby byly porovnatelné výsledky mezi jednotlivými platformami', Matěj Novák, CRUXO
- From CitrusAd's Jaroslav Sodomka on client expectations: 'Globální inzerenti vyžadují úroveň služeb a měřitelnosti srovnatelnou se západními trhy'
- From Forrester via MediaGuru on retail-media networks generally: 'Nedokážou doručit, co slibují, ať už co se výkonu, či měření týče' and 'mnohým inzerentům tak vynaložené úsilí nestojí za námahu'

**Says**

- 'Bez nezávislého měření to klientovi neobhájím'
- 'Kolik prodejen? Jaké pokrytí?', coverage is the first and last question a planner asks
- 'Do plánu to nedostanu, když to není srovnatelné'
- 'Máme na to pitch, potřebuju něco, co konkurence nemá'
- 'Retail media plánujeme, ale měření si dělá retailer sám'

**Does**

- Plans and buys media across TV, digital, OOH and increasingly retail media
- Pitches. Constantly. And buys or borrows data specifically to win pitches
- Negotiates with media owners and now with retail-media sellers whose measurement they cannot audit
- Builds post-campaign reports and defends them to clients
- Runs or commissions segmentation studies to justify a plan

**Thinks and feels**

- Genuinely wants independent in-store measurement to exist, because it makes retail media plannable and therefore commissionable
- Simultaneously afraid of it, because independent measurement audits the agency's own recommendations and could insource the interpretation layer
- Pitch anxiety: the next three months of revenue depend on having something the competitor does not
- Coverage reflex: a source that covers one store in one chain is not a plan input and cannot be defended to a client
- Territorial about being briefed: nothing annoys an agency more than a vendor who went to the client first
- Aware that in-store is the last unmeasured medium and that whoever measures it credibly will take a position in the market

### Pains to name

- [critical] They are asked to recommend and defend in-store and retail-media spend that has no independent measurement :: their own industry association's series says it plainly, 'Cenové podmínky nejsou stanoveny tržně a možnost vyhodnocování účinnosti kampaní je minimální' and the explicit demand 'Transparentnost – ideálně nezávislé měření výsledků kampaně' (GroupM Nexus, SPIR)
- [critical] Retail-media platforms do not deliver what they promise :: Forrester via MediaGuru, 'Nedokážou doručit, co slibují, ať už co se výkonu, či měření týče', and 'mnohým inzerentům tak vynaložené úsilí nestojí za námahu'
- [high] No comparability across platforms, so nothing can be planned :: 'chybí pokročilejší možnosti cílení, reklama většinou prodává za pevnou cenu za týden, nejsou k dispozici data o výkonu' and the call for 'měření pro to, aby byly porovnatelné výsledky mezi jednotlivými platformami' (CRUXO, SPIR)

### Gains to promise

- Something proprietary for a live pitch :: pitches are how agency revenue is actually won, and a fresh audience read is the cheapest differentiator that exists
- Independent evidence for a retail-media recommendation :: lets them recommend in-store spend without being the seller's mouthpiece
- A methodology they can put their name next to :: agencies buy credibility as much as data

### Measured on

- Billings and client retention; the public billings ranking (Knowlimits, OMD, EssenceMediacom, PHD, Wavemaker)
- New business won: pitch conversion rate
- Media cost efficiency delivered to clients (CPT/CPP) and post-buy delivery against plan
- Effie and industry awards as new-business currency

### Talk track


**Open with:** Direct, and early, but with an explicit non-compete framing, the standing doctrine is go direct to the brand first and bring the agency in later as an ally, and the scripted line when a brand mentions its agency is 'would it help if we briefed them alongside you?'. For an agency-first approach, the opener that works is their own published demand quoted back: 'Ve vašem seriálu na SPIR stojí, že u retail médií chybí n


**Never:** Never route around them to the client, and never imply that measurement is insourcing. Both turn an influencer into a saboteur.


**First objection, and the answer**

- *""Zajímavé, máte to i pro Tesco, Albert, Lidl? Bez pokrytí to do plánu nedostanu.", 'Interesting. Do you have Tesco, Albert, Lidl? Without coverage I can't put it in a p"*
  - Behind it: Planners buy comparability and coverage, not depth. A single-store, single-chain source has no slot in a media plan and no line in a post-campaign report. They are also quietly checking whether we will become a competing currency 
  - Answer: We have one chain per channel and we say so on every chart. So no, this does not go into a media plan this year, and we are not asking it to. What it can do this year is answer one pitch question you have live: who actually stands in front of the fixture in this category, with error bands, in a format you can put on a
- *""A neberete nám tím kus práce?" / "To si klient pak udělá sám.", 'Aren't you taking work off us? The client will just do it themselves.'"*
  - Behind it: The structural-loser fear: if measurement insources to the brand, the agency loses both the interpretation layer and the retail-media commission. Said with a smile, meant seriously.
  - Answer: Named honestly: yes, an independent measurement layer takes something off whoever currently marks their own homework, and in in-store that is usually the retailer selling the media, not you. Our licence names one agency of record alongside the brand, so the read lands with you, not around you, and we would rather you 

**Give them:** Two or three pitch-ready slides with the scope statement in the footer of each, plus the m · Would have to be a syndicated report with a post-buy structure and comparable metrics acro · Contract language, not a data cut, plus their inclusion in the quarterly read and the rev


**Trigger window:** A live pitch or a media review at a client in one of our categories, the single highest-intent moment an agen · Annual client planning, October–December, when next year's plans and the in-store line are set · A client demanding independent measurement for retail-media spend, or refusing to renew it without proof


**Their words:** - USE: billings, tender/pitch, mediální mix, zásah a frekvence, CPT/CPP, post-buy, atribuce, inkrementalita, nezávislé měření, srovnatelnost, currency, retail media, on-site / off-site / in-store, programmatic, DSP, closed loop, AoR (agency of record), share of voice - USE the local map correctly: AKA is the communication-agency associati


**Where they read:** SPIR (spir.cz), the 'Trendy trhu: retail media' series is the single most usefu · MediaGuru (mediaguru.cz), Marketing & Media (mam.cz), Médiář (mediar.cz) · AKA (aka.cz) and ASMEA (asmea.cz); the annual billings ranking and the AKA/ASMEA · Effie Czech Republic (effie.cz), the effectiveness arena and a new-business mac


---

## CEE / Central-Europe cluster Consumer Insights lead

`NOT AN ICP` &nbsp; A 2027 buyer at the earliest, and the goal ends 21 November.

**CZ/SK titles:** Consumer Insight Manager CEE; Consumer & Market Insights Manager (Warsaw); Junior Consumer Insights Manager C&EE (Bucharest); Insight Specialist CEE; Regional Category & Insights Lead; CMK Manager CEE; Head of Market Intelligence CEE

**In one sentence:** A regional insights owner sitting in Warsaw, Bucharest, Budapest or occasionally Prague, who holds the syndicated contract for a basket of markets and for whom Czechia is a line in a nine-country tracker, not a country to be understood.

**Buying role:** economic_buyer, technical_gatekeeper, blocker, influencer &nbsp;|&nbsp; **Budget:** Holds the real regional research and measurement line, the syndicated contract for the cluster, plausibly tens of millions of CZK equivalent across markets, with a Czech share in the low single-digit millions. Can in principle sign €40k, but only inside an an


### The value proposition, in their terms

> Not a 2026 conversation. If engaged, ask them to define the coverage threshold rather than asking them to buy.


**Never:** Never pitch a single-market read as a regional instrument.


---

## Local NPD / innovation / product and pack

`NOT AN ICP` &nbsp; No research budget attached to this role anywhere in CZ or SK. Fold into the owner conversation.

**CZ/SK titles:** technolog / technoložka potravin; technolog v potravinářské výrobě; pracovník vývoje; specialista vývoje potravin a doplňků stravy; vývojový pracovník; produktový manažer (FMCG); brand manager značky [Rajec / Holba / Opavia]; manažer kvality; vedoucí vývoje. NOT commonly used in CZ FMCG: 'innovation

**In one sentence:** In a Czech FMCG firm the person who 'does NPD' is a 40–55k CZK factory technologist who develops a recipe on a brief he did not write, the brief is written by the owner, or by a retailer's buyer, and neither of them buys research.

**Buying role:** user, influencer &nbsp;|&nbsp; **Budget:** None. This role touches no budget line we could evidence in either country. Salary band 40,000–55,000 CZK for the technologist, 45,000–65,000 CZK for the FMCG product manager, ~€1,300–1,500/month in Slovakia. He CANNOT sign €40k and cannot sign CZK 300k. Any s


### The value proposition, in their terms

> No offer. Fold the NPD questions into the owner's conversation, where the decision actually sits.


**Never:** Never build a separate NPD outreach track.


---

## Field sales / merchandising / Perfect Store execution owner

`NOT AN ICP` &nbsp; Not one of his KPIs is a metric we produce.

**CZ/SK titles:** Obchodní zástupce (OZ), Regionální manažer prodeje, Area Sales Manager, Field Sales Manager CZ & SK, Merchandiser, Supervizor merchandisingu, Specialista pro merchandising (a codified Czech occupational qualification, NSK 66-039-N), Perfect Store Manager (rare, and normally multi-country: CZ-SK-HU),

**In one sentence:** The person who proves the display was built and the shelf was full, and whose every KPI is about the shelf, not the shopper, which is why he is the sub-persona most likely to be a mirage for us.

**Buying role:** user, influencer, technical_gatekeeper &nbsp;|&nbsp; **Budget:** Usually none of his own, or a thin one. In Czech FMCG the field function is bought as a service: the brand signs an annual contract with a BTL/field agency (ppm factum, the largest Czech BTL house, publicly listing Mondelez, Unilever, JDE, Henkel, Mattoni and


### The value proposition, in their terms

> No offer. Availability, facings, share of shelf and planogram compliance are structurally outside the product.


**Never:** Never imply we measure shelf compliance. Say no fast; it buys credibility for the daypart read that is ours.
