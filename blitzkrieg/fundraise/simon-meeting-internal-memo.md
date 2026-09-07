# Internal memo: Šimon meeting prep (not for Šimon)

**Purpose:** align Ondrej and Josef on what we say, how we say it, and what we hold back, before
we walk Šimon through `investor-presentation.html`. This file never leaves the two of us.

**Who Šimon is, and what this meeting is actually for.** Šimon Šebek is an existing investor, and
he's also the connector who introduced us to Marek Stacha. Marek's original critique of our old
pitch (didn't separate reality from plan, couldn't see the VC case, questioned scale) is a big part
of why this shift looks the way it does. **The primary purpose of this meeting is to update Šimon
as someone who already has money in, not to pitch him or fish for favors.** He should walk out
feeling well informed and more confident in the company, full stop. If a natural opening for
introductions comes up, take it, but don't build the meeting around asking for one, and don't treat
it as the point of sending him this update. This is also not the anchor ask (that's a separate,
later conversation with Marek himself: anchor with real money, lend his name, five introductions).
Don't blur the two.

## 1. The words we use and don't use

- Never say **"pivot."** Never say "the old model didn't work" or "we're changing direction."
- Do say: **"we changed the payer, not the product."** Same engine, same data asset, different
  buyer. If either of us slips and says "pivot" out loud in the meeting, don't correct it
  mid-sentence, just don't repeat it.
- Frame personalization as **demoted, not killed.** It's a real, working product where a brand
  funds it directly (tobacco screens, EUR 120/device/month, unchanged). It stops being something
  we sell as the company, or lead with.
- Frame the cost changes as **reallocation, not survival.** We're deliberately shifting engineering
  hours away from personalization work and into business-facing execution (rights conversations,
  brand meetings, the proof artifacts the raise needs), roughly cost-neutral, time-boxed to 21 Nov,
  reverts automatically if we don't have a term sheet by 16 Oct. Keep this qualitative in the room;
  don't quote specific FTE percentages, since we haven't actually pinned down a precise split. This
  is a founders' call under the EUR 400/day discipline, not a cash-emergency measure. If Šimon asks
  "are you running out of money," the honest answer is: the wall is mid-December without new money,
  the round is designed to land before that, and the standby bridge exists specifically so December
  is never a surprise.

## 2. What's in the deck vs. what's true underneath (read this before the meeting)

The deck is honest, but it necessarily simplifies. Know the fuller picture so a follow-up question
doesn't catch either of us off guard.

- **The financial model is the live Google Sheet, pulled the morning of this memo.** It already
  has the D17 fix applied (founding seat at EUR 40k, not the old EUR 35k mix-up) and states the
  pre-seed cap as EUR 6.5M post-money cleanly. It supersedes the older `12-numbers-external.md`
  curve in the strategy pack, which is more conservative in the near term (EUR 0.4-0.7M by end
  2026 vs. the model's EUR 93k), and that older doc has not been reconciled to this model yet. If
  Šimon has seen an older number from us, that's why it looks different; the model in the deck is
  the current, corrected one.
- **Retailer revenue share is still an open internal question (C1).** The model runs 30% on the
  single-chain labelled read and 0% on the cross-retailer aggregate. The mandate letter language
  still says "up to 40%." We haven't fully closed this. Don't state a revenue-share number to
  Šimon as final if he pushes on it; say it's a negotiating range we're still tuning per retailer
  and per product, and that the aggregate (the part that actually drives the multiple) is never
  shared, full stop.
- **The tobacco / EuroOil POS numbers in the pilot table are modelled, not receipt-verified.**
  Only GymBeam and SuperZoo have real receipt-level matching today. The deck already labels this,
  but if either of us talks through the pilot table live, don't let the tobacco numbers sound as
  solid as the SuperZoo/GymBeam ones in conversation, even though they're both in the same row
  format on the page.
- **21 Nov is a floor test, not a revenue milestone.** Internally we're using the "rule of one"
  (one retailer paid in rights, one brand paid in cash, one investor paid in money, one
  receipt-verified proof, one inbound we didn't chase) as the bar. If all we have by 21 Nov is a
  small ARR number, that is not a bad outcome by our own design, and we should say that to Šimon
  now so we're not explaining it defensively in December.
- **The honest weak point in the model (month 13, ~Sep 2027, ~EUR 114k cash, about a month of
  cover) is disclosed in the deck on purpose.** We found it, we're not hiding it, and we have two
  named fixes (seed a month earlier, or ~EUR 250k more at pre-seed). If Šimon zeroes in on this,
  that's a good sign he's actually testing the model rather than skimming it. Treat it as the
  moment to show rigor, not a moment to get defensive.
- **Team costs and vendor line items are exact, per your call to keep full detail.** Note for the
  record: our own numbers file marks unit-cost and cost-structure detail as never-external
  material, written with brand- and retailer-facing documents in mind, not an existing trusted
  investor relationship. We're treating Šimon as the exception that rule was never meant to cover.
  Keep it that way deliberately, not by default. If this deck's audience ever widens beyond
  Šimon, that table should come out first.
- **Client names (EuroOil, SuperZoo, GymBeam, CPI, etc.) are shown in full.** None of them currently
  have written sign-off to be named publicly (`can_name_publicly: false` across the board in
  `clients/*/facts.yaml`). That's fine for an existing relationship update, but it's the reason the
  deck carries a "please don't forward externally" footer, and it's worth saying to Šimon out loud,
  not just in a footnote: this is for him, not for wider circulation yet.

## 3. Likely questions, and who takes them

- **"Why should I believe the next eight months look different?"** Lead with the mechanism
  table (no CFO/procurement, software on existing cameras, mandate not a commercial contract,
  inbound RFI), not a promise. Whoever is asked this should point at dates on the gate timeline
  and invite him to check us against them.
- **"Why does the model start so slow (EUR 93k this year) if the exit story is EUR 150M+?"**
  Because it's bottom-up from unit economics (seats per slot, price ladder, churn), not a growth
  curve we picked to look good. The shape is deliberately unglamorous near-term and the payoff is
  in the compounding once the aggregate read exists. Don't oversell the near-term number; let the
  stress-test table (still funded at -20% price, still funded at 25% churn) do the reassuring.
- **"What if the retailer mandate gets refused?"** That's Gate 0/Gate 2 territory in the
  strategy pack's own decision rule: mandate refused + pilots wouldn't pay is the scenario where we
  go back to a paid-rights model instead. We don't need to volunteer the full fork logic to Šimon,
  but whoever fields this should not improvise a new answer live; the answer is "we have a
  pre-written decision rule for exactly that, tied to the 15 Oct gate."
- **"What's Marek's role in this?"** He's still expected to lead/anchor a later conversation.
  Don't ask Šimon to make that ask on our behalf, and don't let him think this meeting is
  softening him up for a pitch to invest more himself. If he offers, take it warmly, but that's his
  call to raise, not ours to angle for.

## 4. How the meeting should feel, and the one soft opening if it comes up naturally

This is an update, not a pitch and not an ask. The measure of success is that Šimon leaves better
informed and more confident, and feels like we came to him with the honest picture, weak points
included, before he had to go looking for it.

Two things worth doing, in this order of priority:

1. **Ask for his honest read.** Where does the multiple argument, the model, or the timeline look
   thinner than it should from where he sits? He's earned candor, and getting it now beats getting
   it in October.
2. **Only if it comes up naturally,** mention that if anyone in his circle would find this specific
   thesis, data and rights rather than cameras and hardware, worth a conversation, we'd welcome an
   introduction. This is a "by the way," not a numbered ask, and the meeting should not feel
   incomplete if it never comes up.

Do not ask him for money in this meeting. If he offers, that's his initiative, not something either
of us steered toward.

## 5. One-line alignment check before you walk in

Say it out loud to each other once, in these words, so you both open with the same frame:
**"This is an update for someone who's already with us, not a pitch. We changed the payer, not the
product, and we owe him the honest version of why, weak points included."**
