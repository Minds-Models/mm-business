# Brand sales deck — spec

**Rewritten 10 Sep 2026** from `blitzkrieg/brands/icp/` (icp-brands.md v1.1, corrections (a)–(t);
icp-one-pager-v1.md; raw/B-product-capability.md). The previous spec is superseded: it opened with
capability, led with measurement, used shelf-level language and never stated the residual. All four
are now known failure modes, evidenced below.

**Reference build:** `decks/2026-09-10-brand-sales-deck/` (EN, generic, 6 slides).

---

## 1. Who this deck is for

**One persona per deck. Write for the person in the room, not for the company.**

Default persona for a generic FMCG / consumer-brand deck, and for any multinational
(BAT / PMI / P&G tier) where the owner is unreachable:

| | |
|---|---|
| **Primary reader** | **Trade / Shopper Marketing Manager (CZ+SK)** — `MUST WIN`. Owns the largest discretionary in-store line, has no analyst, and buys the FIRST purchase out of an activation or test bucket. |
| **Secondary reader** | **Sales / Commercial Director** — the person the primary has to defend it to. His questions are *"co to nahrazuje?"* and *"kdyby to viděl náš nákupčí, vadilo by mu to?"* Both must be answered on the page, unprompted. |
| **Champion, never buyer** | KAM. He reads it, he does not sign it. |
| **Blocker** | Legal / DPO. One line in the deck, full pack held (see §6). |

Swap the persona only for a deliberate reason, and re-cut the whole deck when you do. The owner /
jednatel deck is a **different document**: he carries money risk, not career risk, so it leads with
being first in category and with leverage at the chain negotiation, never with measurement
(correction (j)) and never with safety framing.

**Targeting rule that outranks category fit (correction (n)):** sell to the person who *gains* from
a true number, never to the person whose last two years it re-grades. Honest measurement produces a
worse-looking number than what was sold to the budget owner, and his response is silent
non-adoption, not an objection you get to answer.

---

## 2. The doctrine, in order of how much damage it prevents

1. **Use-case first, data second (correction (o)).** The incumbent and the buyer state this rule
   independently, one selling and one buying. **The first content slide is three decisions the
   reader currently makes on assumption.** The observation layer is revealed *afterwards*, as the
   minimum data required to answer them. Never open with "here is a new signal".
2. **State the residual before any who-claim (correction (p), next action 9).** A brand is on record
   crediting the retailer's loyalty networks with answering the who-question, and nobody on the
   buying side complains it is unanswered. So we never claim the who-question is open. We define
   what a card-based product structurally cannot see: **the unidentified, non-loyalty-card shopper
   standing in the aisle who considered the category and left.** No brand-facing asset ships
   without this.
3. **Admit n=1 before he raises it.** *"Jedna prodejna. To přece nemůžu vydávat za trh."* He is
   right, he knows it, and he is testing whether we will admit it. Admitting it fast is the single
   fastest credibility move available in the whole process. Print the limit on the same page as the
   finding.
4. **Understate.** Across the corpus, operators' modest caveat-laden numbers read as credible and
   vendors' big claims read as less so. Match the register, not just the structure.
5. **Category evidence, not brand evidence (correction (l)).** Every output must be presentable by
   the brand to its own buyer as *category* evidence. A buyer is not interested in brand A taking
   share from brand B. Most CPGs still pitch brand-centrically, so this is a differentiator.
6. **Bounded proof, not a broad promise (correction (t)).** Buyers describe themselves as stuck in
   pilot purgatory. Shape the first sale as 8–12 weeks, one hard before-and-after number, one
   decision.
7. **Forwardability.** Every data slide carries its own scope footer: estate, store count, period,
   n, k≥25 gate, age as an estimate with error bands, "this store, not the chain". It will be
   forwarded without us.

---

## 3. Structure (6 slides, hard cap 7)

| # | Slide | Job | Non-negotiables |
|---|---|---|---|
| 1 | **Cover** | Name the pain in the reader's own economics, in one sentence. | Founder-signed line: *"You are spending on a shopper you have never seen."* No capability, no method, no product name in the headline. |
| 2 | **Three decisions you make on assumption** | Use-case first. Three decisions, in his vocabulary, with a real person attached to each. **Each card names the role that owns that decision** (trade / shopper marketing, KAM inside the commercial director's conditions strategy, brand manager with the agency), so the reader finds himself or a colleague on the page. Card runs **decision &rarr; who owns it &rarr; what it is decided on today**, and stops there: **no answer panel**. The slide is pure problem, no shopper group appears on it, and the answer arrives on slide 4. | No mention of cameras, data, attributes or method anywhere on this slide. Lead evidence line is the Keurig Dr Pepper confession (§5), the only on-record brand-side voice. |
| 3 | **The blind spot** | Describe each source fairly, then land its blind spot as the consequence. | Order per card is **name &rarr; what it is genuinely good at &rarr; blind spot** in a visibly negative panel. Headline must contain the turn ("your data is good, **but**"), never praise alone. The residual is stated once, as the **subline under the headline**; it does not get a closing panel of its own, because the blind spots already carry it. |
| 4 | **What the data is made of** | Make the composition obvious at a glance, then show the collected volume so onboarding reads as a cut of a running dataset. | The two inputs **stack in a left column** (who was in the store, what they bought) and feed one dark node through a short arrow plate. The node stays **small**: title, one sentence, and **a single joined row drawn literally**. Live volumes sit in their own light card **directly beneath the dark node**, in compact units (K / M), so they read as its caption. Guard labels reduce to **one privacy shield tag**. Scope footer carries the privacy detail, the n=1 admission and the sell-out-lift refusal. |
| 5 | **What you actually get** | Delivery shape and product surfaces. | One slide with its own scope footer / Excel shaped like the report he already circulates / a written read. Privacy disarm line. Category-evidence line. KAM reframe. |
| 6 | **The ask** | Bounded proof + scarcity. Open the door. | Founding seats, three per category. **No price on the slide.** Ask is 30 minutes and the method annex sent *before* the meeting. |

The method annex is a **separate file, sent before the meeting**, never a slide. Where a commercial
analyst exists, his verification decides whether our number is allowed into any internal deck at all.

---

## 4. The ask, and what may appear about money

- **No number on any slide** unless the deck is 1:1 with a named account that has already had the
  methodology call. The owner talk track is explicit: do not quote a price in meeting one.
- **Scarcity is the lever, not price:** three founding seats per category. It is true, it is
  checkable, and it answers "why now" without a discount.
- The ladder (study → founding seat → list → channel subscription) may be described **as a shape**.
  Its numbers live in `stats.yaml` under `pricing_ladder`, which is `internal_only: true` and
  therefore **blocked** from any brand-facing slide.
- Name the budget line for him, because he will be asked: **trade / shopper marketing / podpora
  prodeje**. Never "research", never "innovation" — those words route his spend to a budget he does
  not control, and there is usually no research line in a CZ subsidiary at all.

---

## 5. Approved evidence for this deck

| Use | Fact | Status |
|---|---|---|
| The proof | 7,475 visitors → 2,622 receipt-matched orders, **92%**, 1.29m CZK, 21 days, **1 store** | `stats.yaml: pilot_gymbeam`, verified |
| Depth | 450+ detectable visual attributes, ~88 captured per shopper | `stats.yaml: pilot_attributes_detectable`, verified. Never state 450+ as per-shopper. |
| Privacy | k≥25 aggregates only, no facial recognition, no biometric templates | `stats.yaml: anonymity_threshold`, verified |
| Live volume | **491,897 shoppers modelled · 57,655,222 visual data points read · 500,041 receipt lines matched**, across four instrumented estates | the running dashboard, Sep 2026. This is the "we can onboard you now" number. **Not** the landing-page demo strip. |
| Lead evidence line | Keurig Dr Pepper's Marketing Director: *"Not looking at a tactic by tactic because if we did it's rarely going to be positive… we can't get the clear reporting and the KPIs that we are essentially looking for."* | correction (i) — the only on-record brand-side statement that per-tactic in-store proof does not exist |
| Category evidence | Ex-CCO Europe, Coca-Cola, on why a buyer refuses brand-share arguments | correction (l) |
| KAM reframe | *"This is not ammunition your buyer will resent. It is evidence your buyer has already accepted."* | `narrative.md`, approved |

> ⚠ **Do not confuse the two volume sets.** The analytics-assistant landing strip
> (179,336 visits / 484,120 receipt lines / 18,830,280 attribute readings / 10 sites) is the
> **synthetic demo dataset** and may never be quoted as ours. The live figures are the row above.

**Blocked:** the 87% / 70% / 71% pillar stats are all `status: needs-source` and may not appear in a
brand deck until sourced. `pricing_ladder`, `brand_demand_side_prices`, `niq_dm_supply_price` and
`our_cost_structure` are `internal_only`. The Store Twin demo dataset (179,336 visits / 484,120
receipt lines / 10 sites) is **entirely synthetic** — its numbers may never be presented as measured.

**Naming:** every `clients/*/facts.yaml` carries `can_name_publicly: false`. A generic brand deck
names **categories, never chains**: forecourt & convenience, food retail, health & nutrition, pet
specialist. Naming by logo is approved only for a 1:1 deck handed to a named counterparty
(founder, 2026-09-09).

---

## 6. The never-list

- **Never** the words *shelf, facing, fixture, planogram* (correction (a)). `attention_seconds`
  measures time facing the camera at the ad screen, not a product fixture. Say **"at the
  instrumented screen location, store level"**.
- **Never** "conversion" without the POS-join caveat (correction (b)). The funnel is a screen
  impression-to-engagement funnel with no POS join.
- **Never** promise sell-out lift or case-volume lift. We cannot produce it today, and it is the one
  thing this reader most wants to be promised. Refusing it on the page is what makes the rest
  believable.
- **Never** the words *insight* or *research* to a trade marketer.
- **Never** lead with personas to a brand manager, or with a recommendation to an insights/analyst
  reader. Recommending is their status.
- **Never** "age detection". Always **"age estimation with error bands"**, decade buckets.
- **Never** a market or benchmark claim from one chain. One chain in a category is a **channel
  read**. Cross-chain claims need ≥2 chains in that category.
- **Never** lead with GDPR reassurance. Two competing in-store vendors already market GDPR
  compliance as a feature, so it reads as parity, not differentiation. One line in the deck; the
  six-page AI Act / GDPR / DPIA / k≥25 pack is **held and offered on request** for a brand, and
  **led with** only for retailers, DPOs and regulated categories (next action 7).
- **Never** the word *till*, and no insider shorthand generally. This reader is not a data person:
  say **checkout**, **payment**, **the receipt**, **shopper group**. Every noun on a slide must be one
  he would use himself. Plain beats precise-sounding.
- **Never** a block of guard labels on the data slide. It reads as defensiveness and competes with the
  thing you want looked at. **One privacy shield tag**, with the detail in the scope footer.
- **Never** a stand-alone "what we will not claim" panel. It reads as defensiveness and eats a third of
  a slide. The limits go where they are load-bearing: the guard labels as chips beside the data, the
  n=1 admission and the lift refusal in the scope footer.
- **Never** show a shopper group before the reader knows where it came from. If personas appear ahead
  of the product, label them on the same slide as **output of the read**, in the footer.
- **Never** offer the toxic cut: a KAM's share against his named competitor inside a named chain.
  Refusing it is a credential.
- **Never** promise anything the capability inventory does not support: no cross-visit identity, no
  repeat-visit rate, no frequency, no loyalty measurement, no per-brand-worn claim (fill rate is
  4–10%, pooled only), no self-serve brand portal or export (the export UI is a labelled stub), no
  live-data chat (the assistant runs on synthetic data and has not shipped).

---

## 7. Visual system

**Canonical system: `templates/deck-style/STYLE.md`. Start from
`templates/deck-style/skeleton.html`** (self-contained: tokens, component vocabulary, embedded
wordmark, print block). It is the port of the new frontend (`analytics-assistant-fe/src/styles.css`,
`frontend/src/styles/landing.css`): paper not chrome, depth by shadow not border, colour is
identity, typography carries the emphasis. Do not use the older report tokens (`brand/tokens.css`).

Brand-deck specifics on top of the shared system: segment avatars from
`analytics-assistant-fe/src/assets/segments/*.webp`; the pilot-estate avatars from
`datalayer/avatars/*.png` (crop to the alpha bbox, square from the top, 320px). Copy whichever you
use into the deliverable so the HTML is self-contained. `decks/avatars/men40.png` is **not** for
brand decks. The reference build (`decks/2026-09-10-brand-sales-deck/`) shows the system applied
to this spec's six slides.

---

## 8. Output

`decks/YYYY-MM-DD-brand-sales-deck/` for a generic deck (company-level), or
`clients/<slug>/delivered/YYYY-MM-DD-sales-deck-brand/` for a 1:1 deck against a named account.
`index.html` + assets + PDF via `scripts/render-pdf.sh`.

**Final check, in this order:** every data slide has its scope footer · the residual paragraph is
present · n=1 is admitted on the page · no word from the never-list survives · the forwardability
litmus from CLAUDE.md (safe if forwarded tonight to the retailer, a competitor, or a journalist).
