# Tobacco access playbook — converting the ČEPRO greenlight into meetings

**Trigger:** 26 Aug 2026 — ČEPRO/EuroOil gave a greenlight to bring tobacco companies to the table.
Data rights are **not** yet agreed. **Gate this playbook serves:** tobacco meeting with a named
budget owner by **30 Sep** (`10-calendar-gates.md`), which gates ~€900k–1.3M of the plan.

> **⚡ STATUS 2 Sep 2026 — the reframe worked. The first meeting is JTI, week of 7 September,
> brokered by ČEPRO.** Three weeks ahead of the §8 schedule and ahead of the 30 Sep gate. What
> changes: §§2–4 (access) are **done** for JTI — stop working routes and work the room. §§5, 6
> and 9 (hook, rights boundary, what to walk out with) are now the live sections. Two items are
> still open and both are prerequisites for *this* meeting, not for a later one: the written
> confirmation to ČEPRO (§1) and the compliance-first one-pager. The competition-law flag applies
> to a room with several majors in it; a single-major meeting does not raise it. Still to confirm:
> exact date, attendees, whether ČEPRO chairs or only introduces, and which JTI role attends —
> **the ask remains the KAM who runs the ČEPRO/EuroOil account** (§3).

---

## 1. What the greenlight is — and is not

| It IS | It is NOT |
|---|---|
| Permission to approach tobacco brands about their channel | A data mandate |
| The end of the disclosure prerequisite (canon: retailer hears it from us first) | Permission to show EuroOil data |
| A warm path to people we cannot otherwise reach | Permission to sell a subscription that depends on rights we don't hold |
| The start of the forcing loop (brand demand → rights conversation) | A promise ČEPRO will sign anything |

### ⚡ ACTION TODAY — get it in writing (J, 15 minutes)

Send ČEPRO a short confirmation email. Not a contract — a record.

> *"Thanks for the go-ahead. To confirm how we'll proceed: we'll approach [PMI / JTI / BAT] about
> the shopper-insight opportunity in your channel, with your knowledge and support. We will not
> share any EuroOil data. What we're collecting are non-binding expressions of interest, explicitly
> subject to a future data agreement between us and ČEPRO. We'll bring you everything we hear."*

**Why this matters more than it looks:** a state-owned counterparty rotates people. A verbal
greenlight that later becomes *"we never agreed to that"* would be a serious breach of the canon
rule we are relying on. This email protects both sides and costs nothing. It also quietly reminds
them that a data agreement is the next step — planting the rights conversation without asking yet.

**Also today:** update `clients/eurooil/facts.yaml` → brand-approach greenlight: verbal 26 Aug,
written confirmation pending; rights: still `mandate_signed: false`.

---

## 2. The reframe that solves "they won't meet us"

> **Stop trying to get a meeting with tobacco. Get ČEPRO to convene one.**

Cold outreach to a tobacco major is close to hopeless: compliance-fortressed, vendor-besieged,
and their marketing function is legally constrained. But **a retailer asking its suppliers to
attend a session about that retailer's channel is a normal commercial event** — and suppliers
attend, because the retailer controls listings, shelf and visibility. The greenlight converts our
outreach from *vendor cold email* (ignorable) into *retailer-convened category conversation*
(attended). That is the entire unlock. Everything below is mechanics.

---

## 3. The precise target: the Key Account Manager for ČEPRO

Not "trade marketing" generically. **Every tobacco major has a named KAM who runs the ČEPRO/EuroOil
account.** That person:

- already knows ČEPRO and speaks to them monthly — so a ČEPRO-referred approach is unremarkable;
- is measured on that account's performance — our data is directly about their KPI;
- can pull in insights and category colleagues internally, which we cannot do from outside;
- sits close to trade-marketing money — the biggest and least constrained wallet in a tobacco company.

**ČEPRO's category manager knows all three names by heart.** That is the ask.

---

## 4. The four routes, ranked by conversion

**Route 1 — Get on an existing agenda (highest yield, lowest cost).** Retailers hold periodic
category reviews with tobacco suppliers. Ask ČEPRO for **20 minutes on the next one**. Getting
added to a scheduled meeting is vastly easier than creating a new one, and everybody is already
in the room.
💡 Ask ČEPRO's category manager: *"when is your next tobacco category review, and could we have
20 minutes at the end?"*

**Route 2 — ČEPRO-hosted supplier insight session (the cohort day, retailer-convened).** One room,
all three majors, 90 minutes, ČEPRO opens with one sentence. This is exactly the cohort mechanic
from the brands plan (task 7.1) — and retailer-hosted, it is dramatically more credible than
anything we could convene.
💡 Pitch it to ČEPRO as *their* event: "a session for your tobacco partners on who actually shops
your forecourts." It makes them look like a retailer investing in supplier partnership — which is
a real, self-interested reason for them to say yes.

**Route 3 — Named intro email from ČEPRO to each KAM.** We write the draft; ČEPRO sends it. Three
emails, three separate conversations, no room to coordinate.
💡 Always write the intro for them. A busy category manager will send a good draft and will never
compose one.

**Route 4 — PM Slovakia as an internal referral into PMI CZ.** Internal referrals inside a
multinational travel far better than external ones. Ask the PM-SK contact directly: *"who runs the
petrol & convenience channel for PMI in Czechia — would you introduce us?"*
💡 This route is independent of ČEPRO and can run in parallel this week.

**Fallback if all four stall by ~15 Sep:** retain a **tobacco-trade advisor** — someone who worked
CZ tobacco trade marketing. They know the names, the calendar and the internal politics, and this
single hire may be worth more for this pillar than the ex-incumbent-data advisor.

---

## 5. The hook: lead with their actual strategic problem

Do **not** open with "shopper analytics." Open with what their leadership is measured on:
**the conversion of combustible smokers to reduced-risk products** (heated tobacco, nicotine
pouches). That transition is where their growth, budget and internal attention sit — and
**petrol & convenience is the decisive channel for it.**

What we can uniquely say about that problem: *who is actually in the store, how the reduced-risk
shopper differs from the combustible shopper, and — once POS is connected — what converts.*
That is a question their existing measurement cannot answer, because it only sees what sold.

💡 Second-best hook if the first doesn't land: **channel benchmarking they don't have.** They know
their own sell-through; they do not know who walks the forecourt and doesn't buy.
⛔ **Banned framing:** anything that sounds like age verification, targeting minors, or identifying
individuals. Use only *"age estimation with error bands."* One careless phrase ends the category.

---

## 6. The rights boundary — what we may and may not say

| ✅ May | ⛔ May not |
|---|---|
| Describe the methodology in full | Show EuroOil data, in any form |
| Show the anonymized sportstore report and (with permission) the GymBeam case | Present modeled numbers as measured — the tobacco decks' POS layer is **modeled** and must be labelled every time |
| Say we work with a Czech fuel & convenience network — **and name EuroOil inside a ČEPRO-convened conversation**, where naming is the point | Name EuroOil in decks, investor materials or to other brands (`can_name_publicly: false`; fallback "a Czech fuel & convenience network") |
| Describe what a channel read would contain and ask what coverage they'd need | Promise delivery dates or sell a subscription dependent on unsigned rights |
| Collect **LOIs "subject to a data agreement with the retailer"** | Imply exclusivity, ever |

---

## 7. The loop this starts — and why the sequence is now in our favour

```
ČEPRO greenlight  →  KAM meetings  →  conditional LOIs ("subject to the data agreement")
        ↑                                          │
        └──────  rights conversation, with money visible on the table  ←──┘
```

The LOI is the instrument built exactly for this state: costless for the brand, non-binding, and
it converts *"would tobacco even pay?"* — the question ČEPRO has been asking since summer — into a
document. **Take the LOIs back to ČEPRO and the rights conversation stops being a favour we're
asking and becomes revenue they're leaving on the table.**

💡 Tell ČEPRO this is the plan, out loud, when you send the confirmation email. Retailers who
understand they're being handed demand cooperate faster than retailers who feel processed.

---

## 8. Two-week execution

| When | Move | Owner |
|---|---|---|
| **Today** | Written confirmation email to ČEPRO (§1); facts.yaml updated | J |
| **Today** | PM Slovakia referral ask (Route 4 — independent of everything else) | J |
| **By 28 Aug** | Ask ČEPRO category manager for: the three KAM names · the next category-review date · appetite for a supplier insight session | J |
| **By 30 Aug** | Draft the intro email **for** ČEPRO to send (Route 3) | J |
| **By 30 Aug** | Compliance-first one-pager built (paragraph one = no facial recognition, no identities, age estimation with error bands, k≥25, edge processing) | O |
| **By 5 Sep** | Reduced-risk hook deck: 5 slides, method + what a channel read contains + the sportstore artifact | J + D |
| **By 8 Sep** | Route 1 or 2 confirmed with a date, or escalate to the advisor hire | J |
| ~~**By 15 Sep**~~ **week of 7 Sep** | First meeting held — **JTI, ČEPRO-brokered** (booked 2 Sep, 3 weeks early) | J |
| **By 30 Sep** | **GATE:** meeting with a named budget owner, or the tobacco line is cut for 2026 and hours reallocate to pet + drugstore | J |

---

## 9. What "success" looks like in the first meeting

Walk out with **four things**, in this order of value:
1. Their **density requirement** on record — *"at what station coverage would this be decision-grade
   for you?"* (this prices the entire tobacco block);
2. The **named budget owner** and their 2027 planning date;
3. Agreement to receive a **conditional LOI**;
4. A second meeting with insights or category present.

💡 Do not try to close money in meeting one. The goal is to convert a cold category into a
documented, dated pipeline — which is what both the rights conversation and the 30 Sep gate
actually need.
