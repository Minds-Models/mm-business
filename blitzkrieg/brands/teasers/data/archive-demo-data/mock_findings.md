# Mock brand-vs-rival shopper contrasts (SYNTHETIC data)

**Source:** `analytics-assistant-be/demo_mock/out/`, a synthetic June-2026 month across 10 CZ/SK sites: 179,336 visits, 172,292 receipts and 484,120 lines.
**Machine-readable companion:** `mock_brand_profiles.json` (100 brand groups, the residual, promo uplift and spot checks). Every number below comes from that file.
**Warning:** every figure is the output of a hand-written generator. Use them as illustrative teaser material only, never as a market fact about a real brand.

## How to read this

- **Tuned** means `spec_pos.py` or `generate.py` gives the brand an explicit per-segment bias, so the contrast is a deliberate "story". **Untuned** means only tier appetite, listing (convenience vs drugstore) or random noise can separate the brand. When an untuned contrast is real, its structural driver is named.
- **n** is the number of distinct buyers in the base the percentage uses. For segment shares that is classified buyers (Low-Signal excluded). For age it is buyers of known age. For dayparts and sites it is all buyers.
- **Suppression:** any cell with fewer than 25 shoppers shows as "<25" and is never quoted as a number.
- **Every contrast below passes a two-proportion z-test at |z| ≥ 3**, unless it is explicitly marked *null* or *weak*.
- **Promo** means a unit price at least 3% below list. In June only Monster, Big Shock, Semtex, Nivea, Dove, Lay's and own label ever carry a promo. Tobacco is never discounted, so every other brand shows 0% by construction.

## Read first: what the mock can and cannot say

1. **The residual ("picked it up, put it back") exists for only 22 brands.**
   - `merchandise_brand` is filled for 27.3% of visitors, but it only contains:
     - 6 energy brands
     - 8 bodycare brands (nivea, dove, rexona, adidas, old spice, vichy, la roche-posay, own brand)
     - 8 "other FMCG" brands drawn uniformly at random (coca-cola, pepsi, kofola, snickers, lay's, kinder, milka, mattoni)
   - **No tobacco, beer, ice cream, haircare, oral-care or sports-nutrition brand is ever carried.** The residual cannot be computed for those.
2. **The put-back mechanic is a flat 18% coin-flip with no substitution logic.**
   - "What they bought instead" is just the carrier's normal segment basket.
   - Put-back rates differ between brands for only two reasons: (a) whether the person holding the pack would have bought that brand anyway, and (b) listing. Vichy and La Roche-Posay are not stocked in convenience stores, so 100% of those carriers "don't buy" there.
   - Only 12.7–50.6% of put-back shoppers buy anything else in the same category. The typical outcome is **no replacement at all**.
   - The reverse view is also small: the share of a rival's buyers who were seen holding brand X is below 2% for every pair.
3. **Gender is driven by segment, never by brand.** Old Spice buyers are 46.0% women and adidas buyers 46.8%, simply because drugstore shoppers are. Never use a gender contrast for a gendered brand.
4. **Some categories only exist for certain segments.**
   - Sports nutrition is bought only by Gym Regulars (100% of classified buyers).
   - Ice cream is bought only by Suburban Parents, Young Streetwear and City-Break Tourists.
   - Beer is never in the Long-Haul Transit basket.
   - Corridor Commuters and Office Professionals buy crisps and soft drinks only when a carried pack is forced to the till.
5. **Tobacco sells only at the 6 convenience sites.** Fanta, Bonaqua, Twix and beer are also convenience-only. Elseve, Syoss, Sensodyne, Kérastase and Vichy/LRP are drugstore-only.
6. **HTP and vape devices are drawn independently of the consumable brand on the receipt**, so `device_on_receipt_pct` is not a clean "starter" metric.

---

## 1. Heated tobacco: PMI (IQOS/TEREA/HEETS) vs BAT (glo/neo) vs JTI (Ploom/EVO)
*PMI is tuned. BAT and JTI are untuned: their profiles come from tier appetite (TEREA premium vs neo/EVO mainstream). No residual is possible.*

1. **[untuned, tier-driven] Ploom/EVO is the night-shift heated stick.**
   - 21.6% of Ploom/EVO buyers buy at night vs 15.1% of PMI heated buyers (n=1,058 vs 4,097).
   - 16.0% of them shop at the Ostrava industrial/dorm site vs 9.4% for PMI.
   - Night Dorm index 185, Dawn Trades index 174.
   - Their median dwell is 45.7s vs 38.0s for PMI heated.
2. **[tuned] IQOS/TEREA is the commuter's device.** 23.4% of PMI heated buyers are Corridor Commuters, vs 9.5% for Ploom/EVO and 10.6% for glo/neo (n=3,826 / 988 / 614 classified).
3. **[untuned, tier-driven] glo/neo buyers look the most budget-conscious.**
   - 29.0% are read as "budget" by the camera, vs 20.8% of PMI heated buyers (n=632 vs 3,937).
   - 11.9% are Dawn Trades vs 4.4% for PMI (n=614 vs 3,826).

## 2. Nicotine pouches: ZYN vs VELO vs Nordic Spirit vs strong (Killa/Pablo; Thunder)
*All tuned except LYFT and Thunder. No residual is possible, but the camera does see what shoppers are smoking.*

1. **[tuned, emergent + camera] VELO is the dual user's and vaper's pouch.**
   - 34.0% of VELO buyers had combustible tobacco on the same receipt vs 26.0% of ZYN buyers (n=1,613 vs 1,264).
   - 12.1% of VELO buyers were seen on camera holding a vape vs 6.3% of ZYN buyers.
2. **[tuned] ZYN is the gym pouch.**
   - 24.0% of ZYN buyers are Gym Regulars vs 6.3% for VELO (n=1,212 vs 1,566 classified).
   - 8.7% of ZYN buyers also bought sports nutrition (index 188), and Vilgain co-purchase indexes 198.
3. **[tuned] Killa/Pablo is a one-site, after-dark product.**
   - 28.0% of Killa/Pablo buyers shop at the Ostrava site vs 8.6% of ZYN buyers (n=471 vs 1,264).
   - 75.8% are under 30 and 35.0% buy at night, vs 50.6% and 16.3% for ZYN.

- *Also:*
  - Nordic Spirit is spec-tuned toward gym-goers, yet fewer than 25 of its 202 classified buyers are Gym Regulars, against 24.0% for ZYN. ZYN's stronger bias wins the gym. Nordic Spirit's Plzeň tourist-site index of 135 is *weak* (z<3).
  - ZYN buyers are 36.3% women vs 27.5% for Killa/Pablo.
  - Thunder is catalogued as chewing tobacco (n=63). Only its headline stats are reportable: 41.3% of Thunder buyers also bought cigarettes.

## 3. Cigarettes: PMI vs JTI vs BAT vs Imperial (plus brand level)
*Tuned (tob_brand) for Marlboro, L&M, Petra, Start, Camel, Winston, Lucky Strike, Rothmans, Davidoff and Sparta. Philip Morris, Chesterfield, Red & White, Pall Mall, Viceroy, West and Gauloises are untuned.*

1. **[tuned] Marlboro barely reaches the dawn shift.**
   - Only 2.9% of Marlboro buyers are Dawn Trades, vs 26.0% of Winston and 34.0% of Petra buyers (n=2,230 / 2,605 / 653 classified).
   - At manufacturer level: JTI cigarettes 20.4% Dawn Trades vs PMI 13.9% (n=4,549 vs 6,047).
2. **[tuned] Marlboro's most over-represented buyer is the chain's biggest own-label shopper.**
   - Value Seniors index 230 among Marlboro buyers, and the Marlboro-buying Value Seniors put 34.7% of their non-tobacco spend into private label (n=267). The same figure for Everyday Mainstream Marlboro buyers is 8.0% (n=625).
   - Marlboro buyers' mean age is 40.2 vs 34.9 for Petra. 27.0% are 50+ vs 15.5% (n=2,395 vs 686 known age).
3. **[tuned, emergent via segment mix] Premium cigarettes skew female.**
   - Marlboro buyers are 38.4% women and Camel 38.5%, vs 23.6% for Start and 24.6% for Petra (n=2,512 / 1,501 / 797 / 715 buyers).

- *Also:*
  - Start over-indexes Night Dorm at 340, and 24.5% of Start buyers buy at night vs 12.7% for Marlboro.
  - Camel is the only cigarette Gym Regulars show up for (2.7%, index 202, n=1,326). For Marlboro that cell is "<25".
  - Lucky Strike is a tourist brand: City-Break Tourist index 203, Dawn Trades index 38.

## 4. Vapes: Vuse vs Elf Bar vs VEEV vs Logic (+IVG)
*Vuse, Elf Bar and IVG are tuned. VEEV and Logic are untuned (tier-driven).*

1. **[tuned] Elf Bar is younger and later than Vuse.**
   - 80.7% of Elf Bar buyers are under 30 vs 68.0% for Vuse (n=574 vs 784).
   - 35.7% buy at night vs 24.7% (n=577 vs 796).
   - Night Dorm is 12.6% of Elf Bar buyers vs 4.1% of Vuse buyers.
2. **[tuned, emergent] Vuse is the motorway and gym vape.**
   - The D1 forecourt accounts for 10.8% of Vuse buyers (index 123) vs 6.1% of Elf Bar buyers (index 69).
   - 8.5% of Vuse buyers are in their 40s; for Elf Bar the 40s cell is "<25".
   - Gym Regular index 147.
3. **[untuned, tier-driven] Logic is the tourist's vape.**
   - 18.4% of Logic buyers shop at the Plzeň tourist site vs 7.3% of Elf Bar buyers (n=158 vs 577). Tourists shun value-tier Elf Bar and IVG.
   - VEEV over-indexes Everyday Mainstream (11.0%, index 141, n=300).

## 5. Rolling tobacco: Golden Virginia and Drum vs others (Winston, Marlboro, Chesterfield, Pall Mall)
*Golden Virginia and Drum are untuned. Winston rolling is tuned (Dawn 2.2). This is a small category, so many cells are suppressed.*

1. **[untuned, tier-driven] Golden Virginia is the older roller's pouch.** 31.5% of GV buyers are 50+ vs 16.2% for Winston rolling (n=89 vs 346). Against Drum (17.8%, n=135) the gap is *weak* (z≈2.3).
2. **[tuned] Winston rolling is the shift worker's pouch.**
   - 54.9% of Winston rolling buyers are Dawn Trades and 34.6% buy in the early daypart (n=335 / 350).
   - For Golden Virginia, both cells are "<25" (out of 82 classified and 90 buyers).
   - Winston rolling buyers are 16.7% women vs 30.3% for GV. This one is weak (z≈2.9).
3. **[untuned] Drum is the Ostrava roll.**
   - 36.7% of Drum buyers shop at Site 05 (index 138, n=139); the GV cell is "<25" out of 90.
   - Young Streetwear index 126 for Drum.

## 6. Nicotine manufacturer level: PMI vs BAT vs JTI vs Imperial
*Tuned in aggregate.*

1. **[tuned] BAT's nicotine shopper is the youngest.**
   - 48.7% of BAT buyers are under 30 vs 39.6% for PMI and 38.9% for JTI (n=5,844 / 11,226 / 6,321).
   - Young Streetwear is 34.6% of BAT's classified buyers vs 21.0% of PMI's.
2. **[tuned] Imperial is the dawn-shift manufacturer.**
   - 32.0% of Imperial nicotine buyers are Dawn Trades vs 9.7% for PMI and 19.6% for JTI (n=1,352 / 10,692 / 6,015).
   - 20.0% buy in the early daypart vs 13.2% for PMI.
   - Big Shock appears on 17.2% of their receipts (index 151).
3. **[camera] BAT buyers are more often seen holding a vape.** 7.4% vs 5.0% for PMI and 5.3% for JTI (n=6,042 / 11,659 / 6,564).
   - PMI buyers also spend 20.0% of their non-tobacco basket on premium tiers vs 12.2% for Imperial buyers.

## 7. Energy: Big Shock vs Red Bull vs Monster vs Semtex vs NOCCO+Celsius
*All tuned. The residual is available.*

1. **[tuned, promo] Monster's discount mostly subsidises habit.**
   - Monster was on deal 16 of 30 days and 54.4% of its spend rang up discounted.
   - Dawn Trades, a core Monster segment, bought it at almost the same rate either way: 37.8% of Dawn Trades energy buyers picked Monster on non-deal days vs 41.4% on deal days, an uplift of ×1.10 (n=996 / 1,194 buyers).
   - That still put 49.5% of Dawn Trades' Monster spend on promo.
   - Young Streetwear moved ×1.55 and Night Dorm ×1.59.
2. **[tuned, residual] Monster put-backs trade down, not across.**
   - 16.3% of shoppers seen holding a Monster didn't buy one (n=6,342).
   - Among those who then bought another energy drink (n≈457): Big Shock 40.5% (index 211), Semtex 29.1% (index 194), Red Bull only 26.0%.
   - Red Bull put-backs also drift down: Monster 45.0%, Big Shock 29.0% (index 151).
3. **[tuned] Red Bull is a grab-and-go purchase, and not the youngest buyer.**
   - Red Bull buyers' median dwell is 25.7s vs 50.0s for Monster (n=13,385 vs 20,201).
   - 34.5% of Red Bull buyers are under 30 vs 48.5% of Big Shock buyers (n=12,980 vs 11,211).

- *Also:*
  - The put-back rate depends on who holds the can. NOCCO is put back by 13.5% of Gym Regulars vs 27.1% of Suburban Parents (n=423 vs 140). Monster: 13.6% of Young Streetwear vs 25.6% of Suburban Parents (n=1,841 vs 320).
  - Red Bull buyers are 36.6% women vs 30.2% for Monster and 29.0% for Big Shock.
  - Semtex buyers co-buy Start cigarettes at index 199. NOCCO+Celsius buyers co-buy sports nutrition at index 409.

## 8. Soft drinks: Kofola vs Coca-Cola vs Pepsi vs Fanta
*Coca-Cola is tuned (Tourist only). Kofola, Pepsi and Fanta are untuned, and Fanta is listed only in convenience. The residual exists but is uniform noise.*

1. **[tuned] Coca-Cola is the tourist's cola.**
   - City-Break Tourists are 13.9% of Coca-Cola buyers vs 9.2% for Kofola and 9.4% for Pepsi (n=11,976 / 5,418 / 5,377).
   - 22.0% of Coca-Cola buyers shop at the Plzeň tourist site vs 16.9% of Kofola buyers.
2. **[untuned, structural listing] Fanta is the youngest.** 45.2% of Fanta buyers are under 30 vs 36.7% for Pepsi (n=3,283 vs 5,667). Young Streetwear is 23.2% vs 15.2%.
3. **[null] Kofola and Pepsi cannot be told apart.**
   - Mean age 37.1 vs 37.1, women 39.9% vs 40.3%, dwell 49.6s vs 47.9s (n=5,958 vs 5,909).
   - Any Kofola-vs-Pepsi "insight" here is generator noise.

- *Residual (untuned):* 18.5–18.9% of Coca-Cola, Pepsi and Kofola carriers put the pack back. Only 12.7–15.5% of them bought another soft drink. Of Kofola put-backs who switched (n≈85), 57.6% took Coca-Cola.

## 9. Water: Mattoni+Aquila vs Bonaqua
*Untuned. Bonaqua is convenience-only; Mattoni+Aquila is listed everywhere.*

1. **[structural listing] Bonaqua is the tourist and gym water.**
   - City-Break Tourists are 14.8% of Bonaqua buyers vs 11.0% for Mattoni+Aquila, and Gym Regulars 15.4% vs 11.4% (n=8,034 vs 29,151).
   - Bonaqua buyers' receipts average 174 CZK vs 236.
2. **[structural] Mattoni+Aquila buyers are premium shoppers elsewhere in the store.**
   - 50.3% of their other spend is premium-tier vs 32.5% for Bonaqua buyers.
   - They co-buy Kérastase (index 133) and La Roche-Posay (index 131).
3. **[residual, untuned] Mattoni put-backs stay in the portfolio.** Of shoppers who put Mattoni back and bought other water (n≈122), 41.0% took Aquila (index 195, same owner) and 44.3% took own label (index 167).

- *Also:* own-label water buyers are 49.0% women vs 41.3% for Mattoni+Aquila. 33.2% of them are 50+, and 43.3% of their water spend is on promo.

## 10. Beer: Pilsner Urquell vs Kozel vs Gambrinus vs Birell
*Untuned. Pilsner Urquell differs only through its premium tier; Gambrinus through its 4-pack. Beer is sold only in convenience.*

1. **[untuned, tier-driven] Pilsner Urquell is the commuter's beer.**
   - 31.7% of PU buyers are Corridor Commuters vs 5.3% for Gambrinus (index 353; n=1,389 vs 4,656).
   - 16.3% of PU buyers buy it in the morning vs 9.6%.
2. **[untuned, tier/multipack] Gambrinus is the late-night beer.**
   - 25.0% of Gambrinus buyers buy at night vs 14.1% for PU. Night Dorm index 131.
   - PU buyers put only 4.6% of their other spend into private label vs 8.3% for Gambrinus buyers, and co-buy NOCCO at index 214.
3. **[artifact] Birell never reaches drivers.**
   - None of Birell's 2,346 buyers is Long-Haul Transit, and Birell under-indexes at the D1 forecourt (index 82).
   - The cause: the generator leaves beer out of the drivers' basket. Do not use this externally.

## 11. Salty snacks: Bohemia vs Lay's vs Pringles
*Lay's is tuned (Streetwear, Night Dorm, promo). Bohemia and Pringles are untuned.*

1. **[tuned, promo] Lay's promo buys very little extra volume.**
   - 22.5% of Lay's spend is on promo.
   - Deal days lift its pick rate among crisp buyers only ×1.10 (42.9% → 47.2%); even Young Streetwear only moves ×1.21 (n=3,278 / 1,436).
2. **[tuned, via Lay's] Bohemia is the mainstream shopper's crisp.** Everyday Mainstream is 34.1% of Bohemia buyers vs 26.1% of Lay's buyers (n=4,734 vs 14,317).
3. **[residual] Lay's put-backs rarely switch, and when they do it's to own label.** Only 16.0% of shoppers who put Lay's back bought any crisps. Of those (n≈83), 61.4% took own label (index 175).

- *Artifact:* Lay's is the only crisp any Corridor Commuter or Office Professional bought (n=359 and 163). This is a side-effect of the carry mechanic; do not use it.
- *Null:* Bohemia and Pringles are indistinguishable: 45.6% vs 43.8% under 30, 35.3% vs 35.2% women.

## 12. Confectionery: Milka vs Kinder vs Lindt vs Snickers+Twix
*Lindt is tuned (Office Pro + premium tier). The others are untuned.*

1. **[tuned] The Lindt shopper is the derma shopper.** 8.8% of Lindt buyers also bought La Roche-Posay (index 345) and 9.2% Vichy (index 338) (n=5,055).
2. **[tuned] Lindt is bought by professional women on weekdays.**
   - 32.4% of Lindt buyers are Office Professionals vs 3.9% for Snickers/Twix (n=4,466 vs 15,732). They are 50.0% women vs 41.7%.
   - Lindt buyers' receipts average 401 CZK vs 272, and only 20.1% buy at weekends vs 28.1%.
3. **[null / contradiction, untuned] Kinder is not a family brand here.**
   - Suburban Parents are 13.4% of Kinder buyers vs 13.3% of Milka buyers (n=7,215 vs 7,361). Mean age 37.1 vs 37.0.

- *Residual (untuned):* among Snickers put-backs who bought other chocolate (n≈113), 31.0% took Milka (index 165) and 29.2% Kinder (index 158).

## 13. Ice cream: Magnum vs Cornetto vs Ben & Jerry's
*Magnum is tuned (Tourist + premium). Cornetto is untuned; Ben & Jerry's is tier-only. Only three segments ever buy ice cream.*

1. **[tuned] Magnum is a tourist product.**
   - 70.0% of Magnum buyers are City-Break Tourists vs 40.7% for Cornetto (n=1,481 vs 1,898).
   - 73.4% of Magnum buyers shop at the Plzeň site.
2. **[untuned, tier-driven] Cornetto is the young local's cone.**
   - Young Streetwear is 44.3% of Cornetto buyers vs 21.9% of Magnum buyers. 55.0% are under 30 vs 45.3%.
   - Cornetto buyers co-buy Gambrinus and Birell at index 135.
3. **[tier-driven] Magnum's buyer looks premium.**
   - 21.6% of Magnum buyers are read as premium vs 11.9% for Cornetto, and they co-buy Pilsner Urquell at index 176.
   - Ben & Jerry's receipts average 381 CZK vs 209 for Magnum.

## 14. HPC manufacturers: Unilever, Beiersdorf, P&G, Coty, L'Oréal, Henkel, Colgate, Haleon
*Tuned via Dove, Rexona, Nivea, Old Spice, Pampers, adidas, Vichy/LRP, Kérastase and Sensodyne. Henkel and Colgate are untuned.*

1. **[tuned] L'Oréal's HPC shopper is a weekday, high-basket professional.**
   - 41.7% of L'Oréal buyers are Office Professionals. Their receipts average 814 CZK vs 510 for Beiersdorf and 542 for P&G.
   - Only 17.3% buy at weekends vs 29.9% for Beiersdorf and 31.2% for P&G (n=17,416 / 11,600 / 9,427).
2. **[structural promo] Nivea is the only HPC brand priced by the calendar.** 32.1% of Beiersdorf spend is on promo, 18.2% of Unilever's (Dove), and 0% for P&G, L'Oréal, Henkel, Colgate, Haleon and Coty.
3. **[tuned] Beiersdorf and P&G share the family shopper; L'Oréal does not.**
   - Suburban Parents are 40.0% of Beiersdorf buyers and 39.9% of P&G buyers vs 9.5% of L'Oréal buyers.
   - Beiersdorf buyers put 36.9% of their other spend into own label vs 21.0% for L'Oréal.

## 15. Dove vs Nivea
*Tuned. The residual is available.*

1. **[tuned, residual] A Dove put-back trades up; a Nivea put-back trades down.**
   - Among shoppers who put Dove back but bought other bodycare (n≈252), 25.4% took Vichy (index 147) and 24.6% La Roche-Posay (index 146).
   - Among Nivea put-backs who did the same (n≈269), 42.4% took own label (index 176).
2. **[tuned, promo] Dove's deal moved the wrong shopper.**
   - Dove's days 22–30 promo lifted Young Streetwear's Dove pick rate ×2.29 (17.8% → 40.6%) and Value Senior ×1.95.
   - Office Professionals moved ×0.94 (n=641 / 286) and Commuters ×0.87.
   - Nivea's promo (days 8–14, overlapping the heatwave) shows the same pattern: Streetwear ×2.01, Office Pros ×0.85.
3. **[tuned] Dove has twice Nivea's professional reach.** Office Professionals are 14.8% of Dove deodorant buyers vs 7.7% for Nivea (n=6,282 vs 6,094). 40.1% of Dove buyers' other spend is premium vs 31.7% for Nivea buyers.

- *Also:*
  - Put-back rates: Dove 18.8% (n=2,865) vs Nivea 16.8% (n=3,668). This one is *weak* (z≈2.1).
  - Nivea is put back more in convenience stores than in drugstores (19.5% vs 14.9%).
  - Gender is identical (51.1% vs 50.9% women) because it is not modelled at brand level.

## 16. Old Spice vs Rexona vs adidas (deodorant)
*Tuned. adidas is rarely carried (n=177), so its residual is suppressed.*

1. **[tuned] Old Spice is the streetwear deodorant.**
   - Young Streetwear is 27.5% of Old Spice buyers (index 232) vs 12.6% for Rexona and 15.1% for adidas (n=3,352 / 4,783 / 2,536).
   - Office Professionals are just 1.9% (index 11).
   - Old Spice buyers co-buy Monster at index 156.
2. **[tuned] adidas is the gym deodorant.**
   - Gym Regulars are 10.5% of adidas buyers (index 209) vs 7.1% for Rexona and 3.9% for Old Spice.
   - adidas buyers co-buy Vilgain (index 152) and NOCCO (index 147).
3. **[tuned, residual] Rexona is the most-abandoned named deodorant.**
   - 20.7% of shoppers seen holding Rexona didn't buy it (n=1,645), vs 16.8% for Nivea.
   - Among those who bought other bodycare, 38.3% took own label (index 160).

- *Artifact:* Old Spice buyers are 46.0% women. Gender is not brand-modelled; do not use.

## 17. Head & Shoulders vs L'Oréal Elseve vs Syoss (haircare)
*All three are untuned. H&S is also listed in convenience, but no convenience segment buys haircare.*

1. **[null] The generator treats the three brands identically.**
   - Women 47.5% / 47.8% / 48.8%; mean age 37.3 / 37.2 / 37.2.
   - Office Professionals 6.0% / 6.9% / 7.2%; Young Streetwear 16.9% / 16.5% / 16.2% (n=2,104 / 4,189 / 2,169 buyers).
   - There is no defensible H&S vs Elseve vs Syoss contrast.
2. **[tuned] The real split in the aisle is Kérastase vs everyone.**
   - 59.9% of Kérastase buyers are Office Professionals (n=2,290). Their receipts average 1,338 CZK.
   - 27.7% of them also bought Vichy (index 293).
3. **[tuned] Own-label haircare is the Value Senior's.** 27.3% of own-label buyers are Value Seniors (index 209), and their median dwell is 119s vs 58–64s for the three mass brands.

## 18. Colgate vs Sensodyne vs Oral-B
*Sensodyne is tuned (Office Pro + premium, drugstore-only). Colgate and Oral-B are untuned.*

1. **[tuned, contradiction] Sensodyne buyers are younger than Colgate buyers.** 12.1% of Sensodyne buyers are 50+ vs 21.6% for Colgate and 21.4% for Oral-B (n=2,898 / 2,317 / 2,321). Mean age 36.9 vs 40.3.
2. **[tuned] Sensodyne is an office-worker, weekday, derma-basket purchase.**
   - 50.9% of Sensodyne buyers are Office Professionals vs 8.3% for Colgate and 9.6% for Oral-B.
   - Only 14.9% buy at weekends vs 26.0% for Colgate.
   - 24.6% also bought Vichy (index 254).
3. **[null] Colgate and Oral-B are indistinguishable.** Women 50.4% vs 52.3%, mean age 40.3 vs 39.8, Everyday Mainstream 41.2% vs 40.0%.

## 19. Sports nutrition: Nutrend vs GymBeam vs Vilgain (+Isostar)
*Vilgain, GymBeam and Isostar are tuned (Gym). Nutrend is untuned. Every classified buyer of every brand is a Gym Regular.*

1. **[structural] No segment contrast is possible.** 100% of classified buyers of every brand are Gym Regulars (n=2,634 Vilgain, 1,602 GymBeam, 495 Nutrend).
2. **[tier-driven] Vilgain's buyer looks wealthier.** 35.6% of Vilgain buyers are read as premium vs 26.6% for GymBeam and 27.7% for Nutrend.
3. **[structural listing] GymBeam barely reaches the suburban drugstore.** 2.3% of GymBeam buyers shop at the Brno suburban drugstore (index 53) vs 5.0% for Vilgain (index 114). GymBeam's shake is listed only in convenience.

---

## Contrasts that contradict a plausible brand belief

- **"Premium cigarette = affluent smoker."** Marlboro's most over-represented segment is the Value Senior (index 230). Those buyers put 34.7% of non-tobacco spend into own label (n=267). Across the whole segment, Value Seniors buy 66.1% premium in cigarettes vs 2.5% premium in the rest of the store. *(tuned)*
- **"Red Bull owns the young."** Big Shock buyers are younger: 48.5% under 30 vs 34.5% (n=11,211 vs 12,980). *(tuned)*
- **"Sensitive-teeth toothpaste is for older shoppers."** Sensodyne buyers are younger than Colgate buyers: 12.1% vs 21.6% aged 50+. *(tuned, emergent)*
- **"Promo grows the core."** Monster's deal barely moved its Dawn Trades core (×1.10), yet 49.5% of that segment's Monster spend was discounted. Dove's and Nivea's deals moved Young Streetwear (×2.0–2.3) and not Office Professionals (×0.85–0.94). *(tuned)*
- **"A lost sale goes to the competitor."** Most put-backs are not replaced at all: 49–87% of put-back shoppers bought nothing else in that category. Mattoni put-backs who did switch mostly stayed inside the Mattoni portfolio (Aquila, index 195). *(the replacement share is generator-driven; untuned for Mattoni)*
- **"Non-alcoholic beer sells to drivers."** No Birell buyer is Long-Haul Transit (n=2,346), and Birell under-indexes at the D1 forecourt. *(artifact — beer is excluded from the drivers' basket)*
- **"Kinder is a family brand."** Kinder and Milka have the same parent share (13.4% vs 13.3%). *(untuned — the generator doesn't encode it)*
- **"Old Spice and adidas are male brands."** Their buyers are about 46% women. *(artifact — gender is not brand-modelled)*

---

## Top 15 across everything (most likely to get "how do you know that?")

1. **Monster × Dawn Trades.** Dawn Trades picked Monster 37.8% of the time without a deal and 41.4% with one (×1.10, n=996 / 1,194), yet 49.5% of their Monster spend was discounted. Young Streetwear moved ×1.55. *(tuned)*
2. **Dove vs Nivea put-backs.** Shoppers who put Dove back and bought other bodycare took Vichy or La Roche-Posay (25.4% / 24.6%, index 147 / 146, n≈252). Nivea put-backs took own label (42.4%, index 176, n≈269). *(tuned, residual)*
3. **Monster put-backs trade down.** Of shoppers who put Monster back and bought another energy drink (n≈457), 40.5% took Big Shock (index 211) and 29.1% Semtex (index 194). Only 26.0% took Red Bull. *(tuned, residual)*
4. **The put-back rate depends on who holds the can.** NOCCO: 13.5% of Gym Regulars vs 27.1% of Suburban Parents (n=423 vs 140). Monster: 13.6% of Young Streetwear vs 25.6% of Suburban Parents (n=1,841 vs 320). *(tuned, residual)*
5. **VELO is the vaper's pouch.** 12.1% of VELO buyers were seen on camera holding a vape vs 6.3% of ZYN buyers. 34.0% had combustibles on the same receipt vs 26.0% (n=1,613 vs 1,264). *(tuned, camera + receipt)*
6. **ZYN is the gym pouch.** 24.0% of ZYN buyers are Gym Regulars vs 6.3% for VELO (n=1,212 vs 1,566). Sports nutrition is on 8.7% of ZYN receipts (index 188). *(tuned)*
7. **Marlboro's over-represented buyer is the own-label senior.** Value Senior index 230. Those buyers put 34.7% of their other spend into private label (n=267), vs 8.0% for mainstream Marlboro buyers (n=625). *(tuned)*
8. **Sensodyne is younger than Colgate.** 12.1% vs 21.6% of buyers aged 50+ (n=2,898 vs 2,317). 50.9% of Sensodyne buyers are Office Professionals. *(tuned)*
9. **Red Bull is a sub-30-second purchase.** Median dwell is 25.7s vs 50.0s for Monster (n=13,385 vs 20,201). *(tuned)*
10. **Big Shock's buyers are younger than Red Bull's.** 48.5% vs 34.5% under 30 (n=11,211 vs 12,980). *(tuned)*
11. **The Lindt shopper is the derma shopper.** La Roche-Posay co-purchase index 345 and Vichy 338 (n=5,055). 32.4% Office Professionals vs 3.9% for Snickers/Twix. *(tuned)*
12. **Ploom/EVO is the night-shift heated stick.**
    - 21.6% bought at night vs 15.1% for IQOS/TEREA.
    - 16.0% at the Ostrava industrial site vs 9.4%.
    - Only 9.5% Corridor Commuters vs 23.4% (n=988 vs 3,826 classified; the night and site figures use n=1,058 vs 4,097).
    - *(untuned brand; tier-driven)*
13. **Killa/Pablo is a one-site product.** 28.0% of its buyers shop at Ostrava vs 8.6% of ZYN's (n=471 vs 1,264). 75.8% are under 30 and 35.0% buy at night. *(tuned)*
14. **Dove's promo moved the wrong shopper.** Young Streetwear ×2.29 and Office Professionals ×0.94. Nivea's promo: Streetwear ×2.01, Office Professionals ×0.85. *(tuned)*
15. **Magnum is a tourist product.** 70.0% of Magnum buyers are City-Break Tourists vs 40.7% for Cornetto (n=1,481 vs 1,898). *(tuned)*

*Honourable mentions:*
- Pilsner Urquell is the commuter's beer: 31.7% of its buyers vs 5.3% for Gambrinus, and 16.3% buy it in the morning. *(tier-driven)*
- BAT has the youngest nicotine shopper: 48.7% under 30 vs 39.6% for PMI.
- 314 shoppers were seen holding Vichy at convenience sites that don't stock it, which suggests cross-channel carry-in. *(structural)* In drugstores only 8.8% of Vichy carriers leave without it (n=627).
