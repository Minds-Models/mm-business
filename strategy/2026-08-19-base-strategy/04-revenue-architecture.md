# Revenue architecture — the plan of record

> **INTERNAL OPERATING TARGET.** Nothing in this file is an external forecast. Every number shown
> to an investor, partner or data room comes from `12-numbers-external.md`.

Run-rate targets at 18 Feb 2027. FX 24.5 CZK/€. All prices are `[ASSUME]` inside `[FACT]`-anchored
bands; the anchors are in `11-research-annex.md`. **Before any of these figures appears in an
external document it must be added to `messaging/stats.yaml` with source and status.**

"Seat" = annual syndicated category-read subscription, auto-renew, with a **density escrow** —
if instrumented density misses the named threshold by Q2-27, fees are refunded or credited.
The escrow must be honoured; a fabricated number ends a compliance-heavy buyer relationship
permanently. Three price layers `[DECIDED — D17]`:

- **T0 study** — 150–500k CZK one-off. Not a seat.
- **Founding seat** — year 1 only, **max 3 per category**, 50% off list: **floor €40k / ask
  €40–60k**. Below €40k: take the money, do not count the seat, do not use it as the year-2
  reference.
- **List T1** — **€75–122k** (~1.8–3M CZK; 30–60 stores, 1 chain). T2 unchanged: €122–327k
  (3–8M CZK; 150–300 stores, ≥2 chains).

## E2 — syndicated category reads · named €2.62M

| Category | Payer | Contract | Price | Gate |
|---|---|---|---|---|
| Tobacco @ petrol CZ | PMI CZ | T2 channel-currency seat | 8M CZK ≈ €327k | tobacco meeting ≤30 Sep · EuroOil direct rights ≤31 Oct · **≥1 receipt-level POS station live ≤30 Nov** (without it the read is observational and honestly caps at ~€40–80k/brand) · **2nd petrol chain ≤31 Dec** (else T2→T1, −50%) |
| Tobacco @ petrol CZ | JTI CZ | T2 seat | 8M CZK ≈ €327k | same |
| Tobacco @ petrol CZ | BAT CZ | T2 seat | 6M CZK ≈ €245k | same |
| Tobacco @ petrol SK | Philip Morris Slovakia | T1 pilot seat | 2M CZK ≈ €82k | PM-SK meeting ≤15 Oct · any SK petrol estate ≤31 Jan |
| Pet @ Plaček CEE | Nestlé Purina | T2 seat → **reprice, repitch** | 5M CZK ≈ €204k | ⚠️ **PREMISE CHANGED 2 Sep 2026 — see note below** |
| Pet | Mars / Royal Canin | T2 seat → **reprice, repitch** | 4M CZK ≈ €163k | ⚠️ **PREMISE CHANGED — see note below** |
| Pet | Vafo / Brit | T1→T2 seat | 3M CZK ≈ €122k | same |
| Pet | 3 × mid-tier suppliers | T1 seats | 3 × 1.5M ≈ €184k | same |
| Drugstore @ Teta | P&G | T2 seat (converted lighthouse) | 4M CZK ≈ €163k | free read shipped ≤15 Oct · Teta supply deal ≤30 Nov (**Teta has a substantial franchised share — scope company-operated stores explicitly**) · ≥30 stores ≤31 Jan |
| Drugstore | Henkel + L'Oréal | T1 seats | 2 × 2M ≈ €163k | same |
| FMCG @ co-op + fuel shops | Asahi / Prazdroj | T1→T2 seat | 3M CZK ≈ €122k | 1 regional co-op live ≤31 Dec |
| FMCG | 2 × (Kofola/Mattoni-class) | T1 seats | 2 × 1.5M ≈ €122k | same |
| **Brand-Worn Penetration Index** (upper-body apparel only) | 1 agency master agreement carrying ~4 end-subs + 2 direct anchors | annual index subscriptions | 6 × ~€67k ≈ €400k | **`upper_brand` fill ≥25% by 1 Oct** (the €3k label-buy) · ≥16 locations · ships attached to the POS-grounded persona layer |

Subtotal: tobacco 981k + pet 673k + drugstore 326k + FMCG 244k + index 400k = **€2.62M**

> ### ⚠️ Pet block — the premise under Purina and Mars has changed (updated 2 Sep 2026)
>
> **Measured on 28 days of actual Super zoo receipts** (one store, 1,972,249 CZK of brandable
> revenue — method, limits and all figures in
> [`clients/superzoo/facts.yaml`](../../clients/superzoo/facts.yaml)):
> **Nestlé Purina is 0.69% of revenue. Mars is 0.00%** — not one receipt line for Royal Canin,
> Whiskas, Pedigree, Sheba, Dreamies, Cesar, Kitekat, Friskies or Perfect Fit in 28 days. That is
> receipt-level proof, and it is *weaker* than the earlier SKU estimate suggested (2.1% / 3.8%).
> Their volume is in grocery; the CZ pet-specialist channel carries premium and super-premium.
>
> **These seats are NOT deleted — the pitch is.** An earlier version of this note called them
> evidence-contradicted. That was wrong, and the founder corrected it: it assumed the product is
> *"see your own shoppers"*, which is worthless to a brand that is not on the shelf. A **category
> read** is largely competitive intelligence — who shops this channel, what they buy instead, at
> what price tier, which competitor is winning them. For Purina and Mars that is a
> **channel-entry / share-recovery** question about the premiumising half of the market they are
> visibly losing, which is a bigger decision than optimising a shelf they already own. Mars buying
> Champion Petfoods (Acana/Orijen, and Acana appears in these receipts) is that strategy in public.
>
> **What must change in the plan:**
> - **Repitch:** *"You are 0.7% of this channel and it is the premiumising half of the market —
>   here is who shops it and what they buy instead of you."* Never *"here is how your brands do."*
> - **Reprice and re-time:** a channel-entry study is bought by a different function (channel
>   development / strategy) on a different cycle than a T2 measurement seat. Do not assume the
>   5M / 4M CZK T2 figures survive; they were priced as shelf-measurement seats.
> - **⚠️ Clear the rights question first.** This pitch collides with our own **toxic-cut
>   prohibition** (named retailer × named brand vs named competitor). Chain-masking is the
>   mitigation, but masking is thin at two chains and **in pet we have exactly one** — a "Czech
>   pet-specialist channel" read whose only instrumented chain is Super zoo is a Super zoo read
>   wearing a mask. Until that is cleared, promise no competitor-level cuts.
>
> **The wallets that need no repitch, because they are actually on the shelf:** **VAFO**
> (Brit / Brit Care / Brit Premium / Carnilove = **29.7% of ALL third-party revenue**, 14.0% of
> the store — Czech-owned with a local pen, the standout ICP in pet), **Trixie** (10.8% of
> third-party), then Heristo 6.4%, Versele-Laga 4.6%, Spectrum 4.5%.
>
> **The harder constraint is concentration, not share.** Below the top two, a €40k seat prices
> against ~3% of one store's revenue. **Pet realistically supports one or two brand seats, not the
> three-per-category founding cap.** Repricing this block is a founder decision; the numbers above
> are the input to it.

## E3–E6 + legacy · named €1.78M

| Line | Payer | Contract | Price | Gate |
|---|---|---|---|---|
| Closed-loop measurement retainers | 6 brands running ≥3 campaigns/yr on partner screen estates | annual retainer | 6 × €50k = €300k | screen estates live · ≥2 campaigns run by Dec |
| Store Twin seats | 15 brand/agency bundles, **sold inside E2 negotiations as add-ons** | monthly SaaS, annual term | 15 × €40k = €600k | ships ≤15 Nov · price test ≤31 Oct holds at €1.5–4k/mo |
| AI-data line | 4 × synthetic-consumer / AI-startup contracts (eval sets, Twin API, aggregate priors) | annual licence | 4 × €125k = €500k | **kill-test: ≥2 paid responses ≥€20k by 15 Oct, else this line zeroes** |
| CPI landlord portfolio | CPI asset management | portfolio subscription | ~15 assets ≈ €250k | portfolio rider ≤15 Oct (see D11) |
| Legacy + funded screens | Moris wholesale + tobacco-funded wave (50 stations × €120/device/mo) | existing + wave | ≈ €130k | tobacco co-funding lands with seats |

Subtotal: 300 + 600 + 500 + 250 + 130 = **€1.78M**

## Totals — state these exactly

- **Named block: €2.62M + €1.78M = €4.40M** — 12% short of €5M at band-top, before a single loss.
- **Expansion block: €0.81M** — CEE multi-country uplift on pet seats (+€184k, gate: Plaček SK/PL
  instrumented ≤31 Jan) · fuel-convenience FMCG seats (+€122k, gate: 2nd petrol chain) ·
  measurement retainers 6→10 (+€200k) · Twin seats 15→20 (+€200k) · second landlord portfolio
  (+€100k, gate: CPI referenceable).
- **Ceiling with both: €5.21M.** Reaching €5M requires the whole named block at band-top plus most
  of the expansion — essentially no losses anywhere.
- **P(€5M by 18 Feb) ≈ 5%. P(≥€1M) ≈ 35–45%. P(≥€2.8M mid-band) ≈ 15–20%.**
  **Base case: €0.8–1.4M** + the asset scoreboard.

## The four multipliers the target depends on

1. **Second petrol chain** (Orlen/Benzina CZ from 1 Nov) — without it tobacco reprices T2→T1, −€450k.
2. **The gold station** — one receipt-level POS feed at EuroOil; without it the tobacco block caps
   at observational pricing, −~€900k.
3. **Band-top seat pricing** — defensible only with cross-category parity ≥92% and density hit.
4. **Two product-led motions we have never run** (15 Twin seats; 6 index subs) — mitigated by
   selling seats inside E2 negotiations and the index through one agency master agreement.

## Dominant failure modes, ranked

1. Tobacco access never materialises → −€1.0–1.3M and the EuroOil expansion logic collapses.
2. SuperZoo rights slip into long procurement → mitigated by mandate-first (signable without procurement).
3. Raise slips past 15 Nov → survival variant, −60% on the deployment curve.
4. Seats do not clear at T1/T2 prices (the "complementary data" cap binds) → E2 reprices to
   one-off studies: lumpy, non-recurring, roughly −70% on E2.
5. Cross-category parity <92% → E2 restricted to POS-linked chains only.

## Pricing doctrine

- Price against incumbent syndication lines, never cost-plus. Externally: "incumbent syndicated
  spend" — never the internal benchmark figures.
- **No category exclusivity, ever.** Maximum concession is a 3-month early-access window on
  custom cuts. Syndication is the multiplier; exclusivity destroys it.
- A one-off study is a fallback, not a product. Every line must answer: *why do they pay again
  next month?*
- **Do not discount the seat into study territory.** Founding floor is €40k; list T1 starts at
  €75k. Named T1 lines at 1.5M CZK (~€61k) in the table above are year-1 founding, not list.
