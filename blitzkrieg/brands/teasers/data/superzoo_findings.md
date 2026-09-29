# Super zoo CS314: who buys which pet brand (real pilot data)

Source data: real receipts from one store matched to camera personas. Machine-readable companion: `superzoo_brand_profiles.json`.
Status: **internal only**. `facts.yaml` says "never approach pet brands with Super zoo aggregates before the mandate is signed". Any teaser card built from this must stay at methodology level, or go out only once Plaček has approved the aggregate scope in writing. See the VAFO conflict note in `targets/DECISION.md`.

---

## 1. Method

**Window and scope.** One store (CS314, Kozomín) out of about 200. POS runs 7 Jul to 4 Aug 2026: 28 daily files, with the 8 Jul file missing. That is peak tick and cottage season. From 27/28 Jul, Ontario and 3+1 treat creatives ran on in-store screens. **None of this is a chain-wide number.**

**Sources and join keys (verified):**

| Step | Key | Result |
|---|---|---|
| POS line → receipt | `(Work Station ID, POS Receipt No_)` | 13,153 lines → 4,738 receipts, 2,058,957 CZK. Each key has one timestamp and one file. |
| Receipt → visitor | `pos_link_export (workstation, receipt_no)` → `person_id` | No duplicate keys. `receipt_no` alone happens to be unique in this window, but **till 2's counter rolls over from 99999 to 20 on 28 Jul (14:09–15:19)**. Always key on workstation + receipt_no, and add the date for windows longer than one counter cycle. |
| Visitor → persona | `person_id` → `persona_scoring_full_export` | Unique. 3,150 "build" + 11,891 "recovered_local". |

- 26 refund or no-merchandise receipts are excluded, leaving **4,712 analysable receipts**. 4,555 of them (96.7%) are linked to a visitor, and 3,229 (68.5%) carry a persona.
- **`person_id` identifies a visit, not a person.** Each id claims exactly one receipt, so "distinct shoppers" means distinct shopper-visits. Repeat buyers can't be de-duplicated, and switching between visits can't be seen. "Mixers" below means same-basket co-purchase.

**Match threshold.**
- The primary threshold is **confidence ≥ 0.3**: 2,385 matched receipts, of which **1,298 are pet-food shoppers**. This keeps matches clearly above the roughly 0.25 chance level at the median of 3–4 candidates.
- Sensitivity check at **≥ 0.5**: 1,234 receipts, 679 pet-food. This is the delivered-report "high-confidence" convention, but it keeps only quiet-till moments (median 2 candidates).
- Sensitivity check at **≥ 0.0**: 3,229 receipts, 1,742 pet-food. This is every persona-tagged match.
- The three subsets are nested. Agreement across them shows a signal survives stricter matching, since mis-matching pulls persona differences toward 100. It is not independent replication.

**Brand attribution.**
- I found no existing script or roster in mm-business or analysis-api, so I rebuilt the facts.yaml controlled vocabulary. It covers:
  - the founder's own-brand roster with typo fixes, plus Mr. Dental, Let's Play and BeFUN;
  - the site brand index and Plaček wholesale catalogue;
  - Beaphar and Avicentra as third-party. `targets.yaml` still lists Avicentra as own; that conflict needs flagging.
- Validation against facts.yaml:
  - Exact matches: VAFO 276,237 CZK, Purina 13,520, Mars 1,754.
  - Own brands 897,684 vs 891,162 (+0.7%).
  - Ontario is 14.1% of gross.
- Item-number prefixes behave as supplier codes and agree with the lexicon: 294/293 = VAFO, 213/214 = Ontario.

**Statistics.**
- **Index** = persona share in the group ÷ persona share among matched pet-food shoppers × 100.
- Persona shares use a two-proportion z-test against all other matched receipts. Baskets use Mann–Whitney.
- **k ≥ 25:** every cell under 25 shopper-visits is suppressed ("<25"). That includes persona cells, raw basket counts and price cells.
- Basket, category, time and dog/cat measures use all 4,712 receipts, with no matching needed. Persona measures use matched receipts only.
- About 300 tests were run, so roughly 15 false positives at p < 0.05 are expected. Use the grades:

| Grade | Meaning |
|---|---|
| **A** | p < 0.01, or holds at a second threshold, or is receipt-level |
| **B** | p < 0.05 at ≥ 0.3, same direction elsewhere |
| **C** | Directional only |

**Base persona mix** (matched pet-food shoppers, ≥ 0.3, n = 1,298):

| Persona | Share |
|---|---|
| Suburban Women 30s | 33.6% |
| Suburban Men 40s | 19.8% |
| Young Women 20s | 18.3% |
| Budget Conscious Local Adults | 9.9% |
| Retirees 60+ | 6.2% |
| Active Young Adults | 5.9% |
| Young Men in Bright Casuals | 3.9% |
| Students in their Teens | 2.4% |

## 2. Personas (camera clusters, tags from the Super zoo segment screen)

- **Suburban Women in their 30s (SW30):** "homemaker / soccer mom / dress". The store's largest segment.
- **Young Women in their 20s (YW20):** urban dweller, minimalist casual, young professional.
- **Suburban Men in their 40s (SM40):** "dad style", trimmed facial hair.
- **Budget Conscious Local Adults (BCLA):** budget, low-visibility, very casual clothing.
- **Retirees Aged 60 and Over (RET):** retiree or suburban retiree, trousers.
- **Active Young Adults (AYA):** post-workout stop, gym-goer.
- **Young Men in Bright Casuals (YMBC):** polo shirt, paw-print graphic, bright fabric.
- **Students in their Teens (STU):** after-school errand, youth casual.

## 3. Brand-group contrasts (ranked by surprise, focused on WHO buys)

### VAFO: Brit / Brit Care / Brit Premium / Carnilove
746 receipts (15.8%), 381 matched. Baskets average 651 CZK against 508 for other pet-food baskets (p < 0.001).

1. **(A, robust null) Brit's shopper is Ontario's shopper.** Brit vs Ontario buyers (n = 322 vs 482) show no significant persona difference; every p is ≥ 0.21, and it is the same at both other thresholds.

   | Persona | Brit | Ontario |
   |---|---|---|
   | SW30 | 30.1% | 30.5% |
   | YW20 | 22.0% | 18.5% |
   | SM40 | 22.0% | 20.1% |
   | BCLA | 9.6% | 11.6% |

   The two brands are fighting over the same people, not over segments.
2. **(A, receipt-level) One in five Brit baskets also holds Ontario, as the treat and not the meal.**
   - 130 of 627 Brit baskets (20.7%) contain Ontario.
   - In 60 of those 130 (46%), Ontario appears only as treats; 39 are "Brit meal + Ontario treat".
   - Brit dry and Ontario dry almost never share a basket (<25 of 203 Brit-dry baskets).
   - These co-baskets are multi-pet homes (25.4% dog + cat vs 9.5%, index 268) and the store's big tickets (761 CZK vs 540).
3. **(B) Brit's dog-food buyer is not the store's core shopper.** Among 233 matched Brit dog-food buyers:
   - YW20 are 23.6% (index 129, p = 0.038). Across all Brit buyers the YW20 index is 135 (p = 0.013) in the pre-campaign window, 7–27 Jul.
   - SM40 are 24.5% (index 124; 142, p = 0.041 at ≥ 0.5).
   - SW30, a third of all pet-food shoppers, are only 27.5% (index 82).

**Carnilove, separately (thin):**
- Carnilove baskets are the deepest of any brand: 733 CZK, 7.3 units and 4.9 lines, n = 148 receipts (p < 0.001).
- 20.3% of them contain cat treats (index 179), even though Carnilove is sold mostly as a dog brand here.
- Persona: only SW30 clears the floor, at 39.2% of 74 (index 117, **C**). It is suppressed at ≥ 0.5, so **a Carnilove persona card needs mock top-up**.

### Plaček own brands (total) and Ontario
Own brands: 2,674 receipts (57% of all baskets), 1,377 matched. Ontario: 912 receipts, 482 matched.

1. **(A) Own brand is a store-wide habit, not a segment, and the July "young → house brand" story does not replicate.**
   - Every persona index for own-brand buyers sits between 94 and 117.
   - Own-brand share of attributed spend runs from 47% (YW20, 95% CI 41–54) to 58% (RET, CI 46–71). The intervals overlap.
   - The 10-day July pilot's gradient (young → own brand, old → VAFO) should not be quoted again.
2. **(A, receipt-level) At the till, Ontario is mostly a treat brand.**
   - 44.1% of Ontario baskets (402/912) contain only Ontario treats. For Brit the figure is 16.1% (101/627).
   - Ontario dog food under-indexes after 18:00: 14.2% vs 18.1% (p = 0.029, n = 591).
3. **(A, price paid) Ontario doesn't undercut Brit. It is priced at Brit Care.**
   - In ≥ 10 kg sacks, shoppers paid 107.6 CZK/kg for Ontario (52 lines) against 103.3 for Brit Care (26).
   - The own brand shadowing Brit Premium by Nature (56.4 CZK/kg, 40 lines) is Rasco Premium (58.2, 41 lines).
   - Directional (**C**): Ontario cat food over-indexes BCLA (13.6% of 191, index 137, p = 0.13). BCLA put Ontario in 43.4% of their food baskets against 36.4% for everyone else (p = 0.12).
   - Pre-campaign check: Ontario's persona mix before the 27 Jul creatives is the same (SW30 29.4%, YW20 18.2%, SM40 20.7%).

**Other own brands:**
- **Dog Fantasy (A):**
  - YW20 are 25.4% of 232 buyers (index 139, p = 0.005; 144 at ≥ 0.5; 131 at ≥ 0.0).
  - SM40 are only 13.8% (index 70, p = 0.008).
  - The midday 12–15h slot is over-represented: 30.8% vs 25.7% (p = 0.022).
- **Magic Litter / Magic Pearls (B+):** YW20 are 26.7% of 135 buyers (index 145, p = 0.013; 144, p = 0.004 at ≥ 0.0). SW30 are only 25.2% (index 75). The own-brand litter is a young-women brand.
- **Rasco / Rasco Premium (B):** SM40 are 14.1% of 192 buyers (index 71, p = 0.023). Rasco is a morning buy: 32.3% before noon vs 27.0% (p = 0.038).
- **Elbeville (thin):**
  - 982 CZK baskets (n = 61), 44.3% at the weekend vs 31.2% (p = 0.030).
  - At 173.5 CZK/kg it is the priciest own-brand dog food.
  - All persona cells are <25, so **a persona card needs mock**.

### Trixie
564 receipts, 301 matched.

1. **(B) Trixie is persona-neutral where its own-brand rival isn't.**
   - Every Trixie persona index is between 94 and 111, and none is significant.
   - SM40 are 19.9% of Trixie buyers (index 101) but 13.8% of Dog Fantasy buyers (p = 0.063 head-to-head).
   - Men 40s shop Trixie normally and avoid Dog Fantasy.
2. **(B) Trixie leans female.** SW30 + YW20 make up 56.8% of Trixie buyers (index 109, p = 0.029). The budget, active, retiree and student personas together are 19.9% (index 82, p = 0.048).
3. **(A, receipt-level) Trixie is as much the small-pet and bird brand as a dog brand.**
   - 22.5% of Trixie baskets hold small-pet items (index 315) and 8.3% hold bird items (index 304).
   - Only 7.6% hold dry dog food (index 32).
   - Baskets average 606 CZK, not significantly different from other pet-food baskets (p = 0.86; median 358 vs 379).

### Spectrum Brands (in this store: Tetra / aquarium)
190 receipts, 87 matched. Eukanuba sold 2,059 CZK and IAMS nothing, so there is no pet-food read.

1. **(B) The Spectrum buyer is a man in his 40s.** SM40 are 31.0% of buyers (index 157, p = 0.012; 138, p = 0.048 at ≥ 0.0). Tetra alone: 31.7%, index 160, p = 0.010.
2. **(C) The store's largest persona is under-represented.** SW30 are 27.2% at ≥ 0.0 (index 83). The cell is <25 at ≥ 0.3.
3. **(A, receipt-level) Tetra is bought with livestock.**
   - 19.5% of Spectrum baskets include live fish or feeder insects (index 767).
   - Spectrum baskets aren't bigger: 535 vs 545 CZK (n.s.).
   - At ≥ 0.5 every persona cell is <25. **A strict-threshold persona card needs mock.**

### Hill's (Colgate)
**Fully suppressed:** fewer than 25 shoppers in 28 days (2,020 CZK). No persona, basket or time figure can be shown, so **any Hill's card would be 100% illustrative**.

### Farmina N&D
62 receipts, 34 matched.
- Real: baskets average 751 CZK vs 546 (p < 0.001), and 41.9% contain cat items (index 131).
- **Every persona and time cell is <25.** A Farmina "who buys" card needs mock top-up.

### Dry dog food: premium third-party vs own brand
605 dry-dog baskets: 258 third-party-only, 338 own-only.

1. **(A, receipt-level) Dry dog food is a one-brand trip; cat food is assembled.**
   - Fewer than 25 of 605 dry-dog baskets (<4.1%) hold more than one dry-food brand, own + third-party mixes included.
   - Cat meals are the opposite: 160 of 546 (29.3%) hold more than one brand, and 89 (16.3%) mix own + third-party.
   - Dog-food share is won or lost between visits, not inside the basket.
2. **(A) Men 40s over-index on dry dog food whatever the brand, but don't buy bigger sacks.**
   - SM40 are 29.0% of third-party-only dry-dog buyers (index 146, p = 0.010) and 26.8% of own-only buyers (index 135, p = 0.026). Both hold at ≥ 0.0.
   - Their mean pack is 5.4 kg, with 28% of lines ≥ 10 kg. SW30 average 5.9 kg with 32% ≥ 10 kg.
3. **(A/B) Women stay away from own-brand dry dog food, and third-party dry food is an evening buy.**
   - SW30 + YW20 are 39.9% of own-only dry-dog buyers (index 77, p = 0.002). Among third-party-only buyers they are 44.9% (index 87, n.s.).
   - Third-party-only baskets over-index after 18:00: 21.7% vs 16.7% (p = 0.042).
   - Own-only baskets under-index before noon: 23.1% vs 28.5% (p = 0.039).
   - Directional (**C**): SW30 pay 83.6 CZK/kg for third-party dry food, with 42.5% of lines ≥ 10 kg, against 107.4 CZK/kg for own brand at 24.1%.

### Cat food (dry + wet meals): premium third-party vs own brand
546 cat-meal baskets.

1. **(B) Men 40s avoid third-party cat food.** SM40 are 14.5% of third-party cat-meal buyers (index 73, p = 0.043; 71, p = 0.016 at ≥ 0.0). The men roll-up (SM40 + YMBC) is 17.9% (index 76, p = 0.036).
2. **(A, receipt-level) Cat baskets that mix own + third-party are the deepest food baskets in the store.** 89 baskets average 12.5 units, 7.3 lines and 711 CZK. 95.5% contain wet food.
3. **(C) SW30 lean toward own-brand-only cat meals** (37.5% of 112, index 112, p = 0.23). The budget/active/retiree/student roll-up leans third-party (30.1%, index 123, p = 0.079). Most cat persona cells are suppressed at ≥ 0.5.

### Mixers and basket depth by persona
1. **(A−) Retirees are the brand-mixers.** 33.3% of retiree food baskets hold both own and third-party food, against 21.6% for everyone else (p = 0.014; index 149 among mixers, 143 at ≥ 0.0). The cell is n = 27, just over the floor.
2. **(B) Men 40s mix least.** Only 17.1% of their food baskets mix, vs 23.6% (p = 0.025). They lean own-brand-only: 40.5% vs 34.7% (p = 0.083).
3. **(A−) The biggest persona spends least.** SW30 baskets average 483 CZK vs 539 (p = 0.011; 457 at ≥ 0.5, p = 0.036; 500 at ≥ 0.0, p = 0.028). SM40 buy the fewest lines (3.11 vs 3.37) but have the highest average basket among the large personas (596 CZK, n.s.).

---

## 4. Top 8 findings that would prompt "how do you know that?"

| # | Finding (exact numbers, n) | For | Grade and thin-n flag |
|---|---|---|---|
| 1 | **Ontario rides in Brit's basket as the treat, not the meal.** 20.7% of Brit baskets (130/627) contain Ontario; in 46% of those it is treats only. Brit dry and Ontario dry almost never share a basket (<25 of 203). | VAFO, Plaček PL | A, receipt-level. Real. |
| 2 | **Brit's shopper and Ontario's shopper are the same person.** No persona differs by more than 3.5 pp (n = 322 vs 482, all p ≥ 0.21). The contest is at the shelf, not over the audience. | VAFO, Plaček PL | A, robust null. Real. |
| 3 | **Dog owners pick one dry food per trip; cat owners assemble a menu.** <4.1% of 605 dry-dog baskets hold 2+ brands, vs 29.3% of 546 cat-meal baskets (16.3% own + third-party). | VAFO, Plaček PL, Farmina | A, receipt-level. Real. |
| 4 | **Dog Fantasy is a young-women brand that men 40s avoid; Trixie gets men 40s at par.** YW20 index 139 (p = 0.005, 131–144 across thresholds); SM40 index 70 vs Trixie 101. | Plaček PL, Trixie | A. The Trixie head-to-head is p = 0.063, **directional**. |
| 5 | **Men 40s drive dry dog food whatever the brand (index 135–146) but buy no bigger sacks than women 30s (5.4 vs 5.9 kg), mix least, and avoid third-party cat food (index 73).** | VAFO, Plaček PL | A/B. The strict threshold (≥ 0.5) suppresses the SM40 cells; **top-up needed for a strict-threshold version**. |
| 6 | **Brit's dog-food buyer over-indexes young women 20s (129; 135 pre-campaign) and men 40s (124; 142 strict), not the store's core suburban women 30s (82).** | VAFO | B. YW20 is n.s. at ≥ 0.5. Present as a lean, not a law. |
| 7 | **Retirees are the store's brand-mixers.** 33% of their food baskets carry own + third-party food, vs 22% for everyone else (p = 0.014). | Plaček PL, VAFO | A−. The cell is n = 27 and suppressed at ≥ 0.5. **A card breaking retirees down further needs mock.** |
| 8 | **The house cat-litter brand belongs to young women.** Magic Litter/Pearls: YW20 index 145 (p = 0.013); SW30 index 75. | Plaček PL | B+. n = 36 at ≥ 0.3 and suppressed at ≥ 0.5. **Thin.** |

**Reserves:**
- Ontario is priced at Brit Care in ≥ 10 kg sacks (108 vs 103 CZK/kg), while Rasco Premium shadows Brit Premium by Nature (58 vs 56).
- Third-party dry dog food is an after-18:00 purchase (p = 0.042), and Ontario dog food avoids the evening (p = 0.029).
- Spectrum's buyer is SM40 (index 157).

## 5. Where n is too thin: mock top-up needed for a card

- **Hill's:** the whole group is suppressed.
- **Farmina N&D, Elbeville:** personas suppressed.
- **Carnilove:** only one persona cell survives.
- **Let's Play / BeFUN, Aqua Excellent, Active Dog, Mr. Dental, Repti Planet, Prospera Plus:** persona cells <25.
- **Students, Young Men in Bright Casuals and Active Young Adults × any single brand:** below the floor almost everywhere. So are **Retirees**, except for food-mixing, Ontario and own-brand total.
- **At the strict ≥ 0.5 threshold,** only the big groups keep persona cells: Brit dog food, Ontario, Dog Fantasy, Trixie and own-brand total.
- **Price-per-kg by persona:** every cell is under 55 lines, so directional at best.
- **Switching between visits** can't be measured (visit-level IDs). A "switcher" card would have to be mock, or wait for a loyalty or face-re-ID key.
- **Caveats on every card:** one store, 28 days, peak season, and the Ontario/3+1 creatives from 27 Jul. Mars and Purina are near zero here; that reflects Plaček's listing decisions, not a demand signal. See facts.yaml.

**Not computed (marked as such):**
- **A separate "premium" tier within third-party.** "Premium third-party" here means every attributed third-party brand in that category. The CZ pet-specialist channel carries only premium and super-premium, and the mass brands are absent. No SKU-level price-tier classification was built.
- **Brand switching between visits.** Visit-level IDs make this impossible.
- **Per-weekday profiles.** Only weekend vs weekday and four time-of-day bands were computed.
- **Hill's anything.** Suppressed.
- **Significance tests for price-per-kg differences.** Those figures are descriptive, from actual paid line amounts.
