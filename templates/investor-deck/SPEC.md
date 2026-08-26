# Investor deck — spec & locked narrative

**Revision:** 2026-08-20. Supersedes the 2026-07 spine (kept as `SPEC.md.bak-2026-07`).
**Language:** EN. **Audience:** pre-seed/seed funds and strategic angels.
**Strategy source:** `strategy/2026-08-19-base-strategy/` — deck logic comes from
`08-ws-fundraise.md`; numbers from `04-revenue-architecture.md`; guardrails from
`01-session-protocol.md`.

## What changed from the July spine, and why

The old deck sold **personalization revenue today, insights tomorrow**, with the mechanism
(cameras → attributes → personas) as the story and a Czech market sizing as the ceiling. Three
things broke it:

1. Funds could not get from those numbers to a fund-returning outcome ("can't see the VC case").
2. Per-store hardware plus enterprise sales read as linear and slow ("issue with scale").
3. Personalization has been **demoted** to a brand-funded deployment subsidy (decision D2), and
   retailers are now **supply, not customers** (D1) — so a deck whose business-model slide leads
   with €120/screen/mo describes a company we are no longer building.

The new spine sells **the re-rating**: we are the "who" layer of retail measurement, we acquire
supply for free, and the exit is governed by the multiple more than the revenue.

## The one-line narrative

> **"We changed the payer, not the product."** Same engine, same data asset — but retailers give
> us supply for free and brands pay for the read.

Never use the word "pivot" in the deck or the room. Never present the old model as a failure —
present the pilots as how we learned where the money is.

## Slide spine (12 slides — each is one sentence; together they read as one argument)

1. **Cover** — "The who-layer of retail measurement." Descriptor: *Minds & Models — we tell brands
   who actually bought, matched to the receipt.*
2. **Problem** — Incumbent syndicated measurement tells brands **what sold**. It is structurally
   blind to **who bought**. E-commerce has known this for twenty years; physical retail — ~90% of
   FMCG — still runs on receipts alone.
3. **What we do** — In-store vision → shopper attributes → matched to actual purchases (92% of
   orders at the pilot, no loyalty card, no survey). Privacy disarm in small print, always.
4. **The proof it works** — The calibration artifact: receipt-verified parity, pre-registered
   method, honest nulls. *This slide is what separates a data company from a camera company.*
5. **Why now / why us — the mechanism change** ⭐ *the velocity slide; see below.*
6. **Supply: free, and inbound** — A 206-store chain sent us an RFI asking us to run on the
   cameras they already own. Retailers pay nothing; they grant perpetual rights to anonymous
   aggregates. Supply cost per store ≈ €0.
7. **Demand: who pays and why they re-buy** — Brands buy the category read as an annual syndicated
   subscription, priced against the incumbent line they already fund. Same read sold to every brand
   in the category — syndication is the multiplier. Never exclusivity.
8. **The exit maths** ⭐ *the VC-case slide — numbers from `12-numbers-external.md`* — Buyers are the incumbents whose blind spot we fill.
   The same ARR is worth ~2.4× more as a measurement currency than as a mixed vendor. Target:
   €8–12.5M ARR by 2031 at a currency multiple → €100–150M outcome. **We do not grow our way there;
   we re-rate our way there** — and this round buys exactly the four things that earn the multiple:
   rights breadth, recurring revenue, multi-country coverage, the cross-retailer aggregate.
9. **Traction & the next six months** — Rights-clean locations, signed rights instruments, gold
   stores, POS-matched sessions — plus the **dated gate list**. Invite them to check us on dates.
10. **Competition** — 2×2: depth of shopper understanding × link to transactions. Counters and
    heatmaps bottom-left, loyalty bottom-right, web analytics top-left, us alone top-right. Add the
    graveyard line: the companies that died here died of hardware capex and of selling
    "interesting insights"; the survivors ride existing cameras and bill against a P&L line —
    which is precisely our architecture.
11. **Moat** — Rights portfolio (perpetual, cross-retailer, compounding) + the POS×visual
    calibration asset + an EU compliance pack that competitors keep failing. Note the legal gate:
    repurposing a retailer's cameras needs the vendor's own legal basis, per chain — we arrive with
    it done.
12. **The ask & use of funds** — Derived from slide 8: what this round buys, the milestones it
    buys, and the named date each is verifiable.

### Slide 5 in detail — the velocity slide (the most important new slide)

It exists to answer the objection we actually get: *"why won't the next eight months look like the
last eight?"* Answer with mechanism, never with a promise. Two columns:

| Was | Is |
|---|---|
| Retailer had to fund it → CFO → procurement → capex | **They pay nothing** — no budget line, no CFO, no procurement |
| Our hardware in every store, mounted and maintained | Software on cameras they already own; remote waves |
| First signature was a commercial contract | First signature is a **60-day revocable mandate** |
| We sold to the side of the market with no budget for us | We sell to brands, on measurement budgets that **lock in October** |
| Outbound cold chains | **Inbound** — the RFI |

Close the slide with: *"Don't take our word for the speed — here are the dated gates."*

## Rules

- **Numbers:** `messaging/stats.yaml` only. `internal_only` figures (incumbent contract values,
  our unit costs, counterparty terms) **never** appear. New figures used here — exit multiples,
  the ARR curve, the cap table — must be added to `stats.yaml` with source and status **before**
  the deck ships.
- **One number set.** Every figure in this deck comes from
  `strategy/2026-08-19-base-strategy/12-numbers-external.md` — the canonical external curve
  (€0.8–1.4M at the Feb-2027 checkpoint → €10–14M by 2031 → €80–168M at currency multiples). The
  internal operating target never appears as an external forecast. Do not reuse the old exit
  model's figures: its 2027 line, its retailer-split economics and its €3M angel cap are all
  superseded.
- **Honesty as a weapon:** state the probability of the stretch target before they derive it, and
  pair it with the asset scoreboard — what we own in February even if revenue misses.
- **Modeled vs real POS:** the tobacco materials' POS layer is modeled and labeled as such. Real
  matching exists at two chains. Never blur this in a data room.
- **Privacy language:** no facial recognition, no identities, no biometric templates, aggregates
  only (k≥25); "age estimation with error bands". Do **not** claim the whole pipeline is anonymous
  — claim anonymous outputs from momentary processing.
- **Client naming:** check `can_name_publicly` in `clients/<x>/facts.yaml` before naming anyone;
  otherwise use the approved fallback phrasing.
- **Q&A prep:** `messaging/objections.md`, plus the four fundraise-specific objections and their
  answers in `strategy/2026-08-19-base-strategy/08-ws-fundraise.md` §1.
- **Test for every slide:** does it sell **measurement and rights**, or does it sell a camera
  product? It must be the former (slide 3 is the only place mechanism appears).

## Companion documents

The deck never travels alone. Send with: the one-page **milestone contract**, the **calibration
artifact**, the **redacted RFI**, and the **compliance pack summary**. See `08-ws-fundraise.md` §8.
