# "Why hasn't NielsenIQ done this?" and "who actually buys?"

**Status:** fundraise-facing answer pack, v1.0, 2 Sep 2026
**Use it for:** the two questions that decide an investor meeting, plus the same two questions
when a brand or a retailer asks them. Companion to `08-ws-fundraise.md` and
`strategy/2026-08-19-base-strategy/14-retailer-data-objection.md`.

Both questions are asked in a sceptical tone and both have a real answer. The failure mode is not
being wrong, it is being vague. An investor who hears "they are slow" writes "no moat" in the
notes. An investor who hears the structural answer writes "asymmetric, checkable".

---

# PART 1 · Why hasn't NielsenIQ done this?

## The one-sentence answer

NielsenIQ measures **what sold**. We measure **who was standing there** when it sold, and when it
did not. Those are two different data-acquisition problems, and the second one breaks the three
things NIQ's business is built on: national panel economics, one legal framework across many
markets, and a retailer supply relationship it cannot afford to reopen.

## The two-sentence version, for a room

> "NIQ owns the receipt. Nobody owns the shopper in physical retail, because getting it means a
> per-chain camera rights deal and a per-country purpose-change assessment, which is exactly the
> work a global incumbent is worst at and a local specialist is best at. We are not competing with
> their data. We are producing the layer they have to buy or partner for."

---

## What NIQ is actually doing with cameras today (say this, it is checkable)

This matters because the sceptical investor assumes NIQ already has it. They do not, and the
evidence is public:

| What exists | What it looks at | What it is not |
|---|---|---|
| **NIQ In-Store Vision** | image recognition over photographs taken by field auditors, plus manual audits and surveys, to score on-shelf availability, planogram compliance and retail execution | shelf-facing, campaign-based, no shopper, no continuous capture |
| **NIQ x VusionGroup alliance** (announced 6 May 2025, US / FR / IT first) | joins NIQ POS and consumer data with Vusion's electronic shelf labels, retail IoT and computer vision for merchandising, pricing and supply chain | still the shelf and the price tag, not the person in front of it |
| **Captana (VusionGroup) acquires Belive.ai** (Feb 2023) | real-time computer vision for on-shelf availability, queue length and planogram compliance | store operations, not shopper measurement, and not linked to receipts |

The pattern is consistent across the whole incumbent set: **every camera in retail today is
pointed at the shelf.** It answers "is the product there and priced right". Nobody has
commercialised the camera pointed at the shopper, aggregated, and matched to the receipt.

That is the gap, and it is not an oversight. It is the five reasons below.

---

## The five structural reasons

### 1. It is a different asset, and the one they have is the one they must defend

NIQ's asset is retailer sales data licensed at national scale plus a household panel. Adding a
shopper-behaviour layer does not make that asset more valuable; it creates a **second** asset with
a different rights regime, a different regulator conversation, and no reuse of the existing supply
contracts. Incumbents extend the asset they own. They do not open a second one with a worse
risk profile while a listed company is watching the margin.

### 2. The unit economics are inverted for them and correct for us

NIQ buys supply once, nationally, and sells the same read to many clients. Camera-derived
behaviour is bought **per chain, per category, per store**, and it only becomes a currency after
cross-chain density exists. For the first two to three years, the product looks like a low-margin
services business with a legal tail. Inside a company with a public-market EBITDA line, that
project does not survive its second budget cycle. NIQ was taken private by Advent in 2021, merged
with GfK in 2023 and listed on the NYSE in 2025. That ownership history is the opposite of the
balance sheet you need to spend three years assembling per-chain rights.

For us the same shape is correct: our whole cost base is the thing they would have to add.

### 3. Purpose change on CCTV is a product you build per country, not an opinion you write once

Existing store cameras are lawful for property protection. Turning them to audience analytics is a
**purpose change**: it needs its own compatibility assessment, a DPIA, fresh signage, and,
decisively, the analytics vendor must hold **its own** legal basis. It cannot shelter under the
retailer's.

A global firm cannot ship one framework across ninety markets. It would have to build the
compliance pack country by country, and one bad headline costs it more than the entire revenue
line is worth. **Asymmetric downside is the reason large incumbents stay away from shopper-facing
cameras**, and it is why our compliance pack is a moat rather than a cost. Every competitor riding
CCTV owes the same homework and none arrive with it done.

### 4. Asking retailers for camera rights reopens the contract NIQ cannot risk

NIQ's supply comes from those same retailers, under long negotiated sales-data contracts. Walking
back in to ask for camera rights puts the renewal of the core asset on the table. We arrive with
nothing to lose and one narrow ask, and we are asking for something the retailer currently earns
zero from.

### 5. It is an edge-inference engineering problem, not a panel problem

The competence required is video pipelines at a low cost per store, plus receipt matching. That is
not survey design and data operations. It is a different team, and inside a measurement incumbent
it would be a cost centre reporting to people who do not evaluate it well.

---

## What incumbents do instead: they buy

This is the part that turns the answer into a returns argument rather than a defence.

- Captana / VusionGroup **bought** Belive.ai rather than building shelf vision.
- VusionGroup **partnered** with NIQ rather than either party building the other's half.
- Circana **bought** Nielsen's marketing-mix-modelling business rather than rebuilding measurement.

So the honest forecast is not "NIQ will never do this". It is: **on the day NIQ decides physical
shopper behaviour matters, the binding constraint is rights and density, not model quality.**
Perpetual, cross-chain, k>=25 aggregate rights already granted cannot be bought at speed. That is
18 to 30 months of chain-by-chain paper and DPO reviews that capital compresses only slightly.

**Which is why the moat sentence is a rights sentence, not a technology sentence.**

---

## The honest counter-case (state it before they do)

1. **A bundled renewal.** A chain could grant camera rights to NIQ as a line item inside its
   existing sales-data renewal, at near-zero incremental negotiation. This is the single fastest
   path for an incumbent. Mitigation: reach the perpetual aggregate licence first in the
   categories that matter, and keep the product cross-chain, so a single-chain incumbent read is
   not a substitute for it.
2. **Vusion's estate.** Vusion already has hardware inside thousands of European stores and a NIQ
   data alliance. If they turn one camera around, they have distribution we do not.
   Mitigation: their cameras are shelf-mounted and shelf-facing, their contracts are operational,
   and neither is a shopper rights instrument. Turning them around is a new purpose change and a
   new negotiation, which is precisely the 18 to 30 months.
3. **A retailer builds it alone.** Possible for the top five European groups, and it is why the
   pitch to a retailer is "we build your audience revenue" rather than "sell us your data". A
   chain that builds it alone still cannot produce a cross-chain benchmark, which is the product
   brands actually pay T2 prices for.

## What not to say

- "They are slow" or "they are dinosaurs." Every founder says it. It is not a moat and it reads as
  unserious.
- "Nobody has thought of this." Several companies have tried shopper-facing vision. Name the
  category (Standard AI, Trax adjacent efforts, the smart-cart wave) and say why they stalled:
  they sold **operations** to retailers rather than **measurement** to brands, so they never
  reached the buyer with the recurring budget.
- Any head-to-head cost comparison against NIQ list prices. It invites the question "so you are
  the cheap version" and puts us on a price axis we do not want.
- Anything from `stats.yaml` marked `internal_only: true`. Competitor contract values and their
  supply-side cost structure never leave the building.

## The 60-second spoken version

> "Every camera in retail today points at the shelf. NIQ's vision product scores on-shelf
> availability from auditor photographs; their in-store alliance with Vusion is shelf labels and
> store IoT; Vusion's own AI acquisition was queue length and planogram compliance. All of it
> answers 'is the product there'. None of it answers 'who was standing in front of it and did they
> buy'.
>
> That gap is not an oversight. To close it you need a per-chain camera rights deal and a
> per-country purpose-change assessment where the vendor holds its own legal basis. A global
> incumbent cannot do that ninety times, and the headline risk is larger than the revenue. So they
> will buy it. And what they will have to buy is not our model, it is our rights: perpetual,
> chain-masked, k>=25, cross-chain. That is what money cannot compress."

---

# PART 2 · Who buys?

Two different questions get asked with the same three words. Answer both, in this order.

## A. Who buys the product

The buyer is the **brand**, not the retailer. Retailers are supply and rights; they receive a
share of what their data earns and never write us a cheque.

| Buyer inside the brand | Budget they hold | What makes them sign |
|---|---|---|
| Shopper / consumer insights | research and measurement, annual, renews on a fixed date | "at what coverage would this augment or replace what you buy today" |
| Category management, trade marketing | trade and joint-business-planning budgets | a read they can carry into the retailer negotiation without it being a weapon against the retailer |
| In-store / retail media | media budget, a different wallet, faster approval path | proof that a campaign moved a shopper, not just that it ran |
| Private-label organisation (retailer side) | behaves like a brand and has no incumbent read on its own shoppers | the principled exception to "brands only" |

Named demand today sits in tobacco (channel access via EuroOil), pet (Purina, Mars class of buyer,
subject to the third-party assortment check), and drugstore / FMCG. The unit sold is a **seat**:
one brand's annual subscription to one category slot, at the founding, T1 or T2 tier depending on
data density.

Second and third buyer types, which matter for the exit story rather than for 2027 revenue:
data brokers and AI-training buyers (eval-set / API licence, nothing row-level ever leaves), and
retail media networks that need audience proof they currently cannot produce.

## B. Who buys the company

Rank the acquirer set by what they are actually short of.

**1. Measurement incumbents (the highest multiple, because they buy a currency)**
NIQ, Circana, Kantar, Ipsos. They already sell the "what sold" half to exactly our buyers. They
are short the "who" half and they cannot assemble the rights quickly. This is the buyer that pays
a revenue multiple rather than an earnings multiple, and it is the buyer the 10x exit assumption
is priced against.

**2. In-store retail technology and shelf infrastructure**
VusionGroup / SES-imagotag (already both a NIQ partner and an acquirer of computer-vision teams),
Trax, and the store-operations vendors. They have estate and hardware and are short measurement
and rights. Strategically obvious, typically a lower multiple, because they buy capability rather
than a currency.

**3. Retail media and commerce media**
Criteo, dunnhumby (Tesco), Publicis (Epsilon / CitrusAd), LiveRamp. Retail media's structural
problem is proving in-store effect. We are the missing measurement layer for the ~80 to 90% of
FMCG that is still bought physically. They pay for closed-loop proof.

**4. Retailer groups buying their own audience layer**
A large European group that decides its audience business is strategic. Rarer, slower, and it
caps the asset at one chain, so it is the least attractive of the four and should be treated as a
floor rather than a target.

**What every one of them is really buying:** not the models, and not the deployed stores. The
perpetual, chain-masked, k>=25 cross-chain aggregate licence portfolio, plus the POS matching that
makes it a currency. That is the sentence that connects "who buys us" back to "why the multiple is
10x": a rented asset prices as a service at 3x to 4x, an owned rights portfolio prices as
measurement at 8x to 12x.

---

## Sources

- NIQ In-Store Vision product page, nielseniq.com (image recognition over auditor photographs, shelf execution)
- "NielsenIQ and VusionGroup Launch Strategic Alliance", nielseniq.com, 6 May 2025
- "Captana finalizes an agreement for the acquisition of Belive.ai", vusion.com, Feb 2023
- "Circana Completes Acquisition of Nielsen's Marketing Mix Modeling Business", circana.com
- NIQ ownership history: Advent International acquisition of Nielsen Global Connect (2021), GfK merger (2023), NYSE listing (2025)

Numbers used in any external version of this document must first exist in `messaging/stats.yaml`
with a source and a status.
