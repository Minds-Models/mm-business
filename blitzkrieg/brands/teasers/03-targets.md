# Targets & audiences for LinkedIn scraping · v1 · 23 Sep 2026

What to scrape, per company: **which people** (persona) and **which titles** to search. The
machine-readable version is [`03-targets.csv`](03-targets.csv): one row per company, with the
card to send and the known warm path. Bring back per person: name · title · LinkedIn URL ·
(email/phone if visible). I'll import them into Attio, attach them to the company, and pick the
card variant from the title.

**Per company, find 2 people, max 3** (ICP: the buying centre is two people). At an owner-managed
firm that's the jednatel + one commercial lead; at a multinational it's the channel/trade lead + the
KAM for our retailer (+ insights, only for the methodology track).

---

## Persona → LinkedIn search keywords

| Code | Persona | Title keywords (Sales Navigator / LinkedIn search, CZ + EN) | Card variant |
|---|---|---|---|
| `OWN` | Owner / jednatel / country GM | `jednatel` · `majitel` · `generální ředitel` · `CEO` · `country manager` · `general manager` · `předseda představenstva` | `owner` |
| `TRD` | Trade / shopper marketing | `trade marketing` · `shopper marketing` · `podpora prodeje` · `customer marketing` · `channel marketing` · `category development` | `trade` |
| `SAL` | Sales / commercial director | `obchodní ředitel` · `sales director` · `commercial director` · `head of sales` · `ředitel obchodu` | `sales` |
| `KAM` | Key account for OUR retailer / channel | `key account` / `national account` **+** `EuroOil` · `ČEPRO` · `COOP` · `Super zoo` · `čerpací stanice` · `forecourt` · `convenience` · `impulse` · `traditional trade` | `kam` |
| `CAT` | Category manager | `category manager` · `category development manager` | `kam` |
| `BRD` | Brand / marketing manager | `brand manager` · `marketing manager` · `head of marketing` | `brand` |
| `INS` | Insights (multinationals only) | `consumer insights` · `market intelligence` · `CMK` (P&G) · `shopper insights` · `market research` | `insights` |
| `PL` | Private-label lead | `private label` · `vlastní značky` · `own brand` · `privátní značky` | `pl` |
| `DIS` | Distributor commercial lead | `obchodní ředitel` · `nákupní ředitel` · `category manager` · `ředitel velkoobchodu` | `distributor` |
| `M-AM` | Mall asset manager / head of retail | `asset manager` + `retail` · `head of retail` · `portfolio manager` · `head of shopping centres` | `mall_asset` |
| `M-MK` | Mall / centre marketing | `marketing manager` + `nákupní centrum` / `shopping centre` / `OC` · `marketingová manažerka` | `mall_marketing` |
| `M-LS` | Leasing | `leasing manager` · `leasing director` · `pronájem obchodních prostor` | `mall_leasing` |
| `M-CM` | Centre / property manager | `centre manager` · `shopping centre manager` · `property manager` · `facility` ✗ (skip facility) | `mall_asset` |

**Skip** (ICP: researched and rejected): NPD/innovation, field sales/merchandising, e-commerce
managers, CEE cluster insights leads (2027 at the earliest), retail-media buyers.

---

## Companies, by track and priority

`P1` = wave 1 now · `P2` = wave 1 if time / wave 2 · `P3` = wave 2. Estate / wallet / decision
location / cycle as in Attio. **Bold** = warm path exists.

### Tobacco (EuroOil forecourt; COOP later)

| P | Company | Estate · wallet · decision | Find | Warm path / known people |
|---|---|---|---|---|
| P1 | **Philip Morris ČR** | PRESENT · T1 · Prague / Kutná Hora · 3–6m | TRD, KAM (forecourt), SAL | **Samuel Šulc (met 18 Sep, follow-up due 25 Sep), Patricia Wohlenberg** |
| P1 | BAT ČR (CZ+SK one signature) | PRESENT · T1 · Prague · 3–6m | OWN (Štěpán Michlíček, GM + jednatel), TRD, KAM | ČEPRO room |
| P1 | JTI | PRESENT · T1 · CzHuSk hub · 6–12m | TRD, KAM | Björn Abrahamsson (Commercial Planning); ČEPRO-brokered meeting |
| P1 | Consumer Brands Intl / DanCzek (DOPE, SNATCH) | THIN · €40k · Košťany · weeks | OWN (Jaroslav Poul / Vladimír Grée) | cold, but DOPE census opener |
| P2 | Imperial Brands CR | THIN · €40k · Prague · 1–3m | OWN (Felix von Schwanewede, jednatel), TRD | ČEPRO room |
| P1 | PEAL (distributor) | CORE · €40k · Prague | DIS, OWN | — |
| P2 | JIP východočeská (distributor) | CORE · €40k · Pardubice | OWN (Jan Plšek, chairman), DIS | cold |
| P3 | GGT CZ, Nico distribution, TTI (Pöschl), Czech Tobacco Corp | mixed | DIS / OWN | — |

### Forecourt impulse + beverages (EuroOil; COOP-tied for Czech-signed)

| P | Company | Estate · wallet · decision | Find | Warm path / known people |
|---|---|---|---|---|
| P1 | Kofola | CORE · T1 · Ostrava/Krnov · 1–3m | OWN/SAL (Daniel Buryš, CEO CZ/SK), TRD, KAM (forecourt / COOP) | — |
| P1 | **Mattoni 1873** (incl. Pepsi bottling, Aquila) | PRESENT · T1 · Karlovy Vary · 1–3m | SAL, TRD, KAM | **via Adam Vološin (P&G)** |
| P1 | Coca-Cola HBC CZ/SK (incl. Monster distribution) | PRESENT · T1 · Prague · 1–3m | KAM (Martin Prokeš, *manažer prodeje pro čerpací stanice*), TRD | — |
| P1 | Big Shock | PRESENT · study/€40k · Prague · weeks | OWN | — |
| P1 | **Nestlé Česko** | PRESENT · T1 · Prague · 3–6m | BRD, TRD, KAM | **Dominika Rajnohová (friend), Barbora Sulovská, Lucie Klusáková** |
| P2 | Red Bull ČR | PRESENT · €40k · nominal Prague · 3–6m | TRD, KAM | — |
| P2 | Intersnack (Bohemia) | PRESENT · €40k · Choustník · 1–3m | SAL, TRD | — |
| P2 | Mondelez CZ (Milka) | PRESENT · T1 · contested · 3–6m | SAL (Tomáš Kautský, CZ/SK), TRD | — |
| P2 | Plzeňský Prazdroj (PU, Kozel, Gambrinus, Birell) | PRESENT · €40k · Plzeň → Asahi · 3–6m | TRD, KAM | — |
| P3 | Bernard, Svijany, Emco, AG Foods (COOP-tied Czech-signed) | THIN/PRESENT · €40k/study · local | OWN | COOP meeting ask (copy §F) |

### Pet (Super zoo, real data)

| P | Company | Estate · wallet · decision | Find | Warm path / known people |
|---|---|---|---|---|
| P1 | VAFO Group / VAFO Praha (Brit, Carnilove) | CORE · T1 · Chrášťany · 1–3m | OWN (František / Pavel Bouška), BRD/TRD | — |
| P1 | Plaček private label (Super zoo own brands) | CORE · €40k · Poděbrady · weeks | PL, OWN (Dušan Plaček / Luboš Rejchrt) | the Super zoo relationship |
| P2 | Trixie (CZ SE / GmbH) | CORE · €40k · Střelice / Tarp | OWN (CZ), TRD | — |
| P2 | Spectrum Brands (Tetra, Eukanuba, IAMS) | CORE · €40k · Melle DE | TRD, KAM | — |
| P2 | Colgate-Palmolive (Hill's) | PRESENT · €40k · CE hub | TRD, BRD | Jennifer Vasold-Singh (LinkedIn, 20 May) |
| P3 | Farmina, Vitakraft, Canvit, Mars/Royal Canin, Nestlé Purina | mixed | TRD | methodology only |

### Drugstore & HPC (Teta/COOP pipeline; cards from drugstore data)

| P | Company | Estate · wallet · decision | Find | Warm path / known people |
|---|---|---|---|---|
| P1 | Dermacol | CORE · €40k · Prague · 1–3m | OWN (Vladimír Komár), TRD | — |
| P1 | Gabriella Salvete | CORE · €40k · Prague · 1–3m | OWN (Aleš Monteleone), TRD | — |
| P1 | Sarantis CZ | CORE · €40k · Prague · 1–3m | OWN (Krzysztof Kamiński, GM), TRD | **named by Vološin as an easier entry** |
| P1 | **Procter & Gamble** | CORE · T1 · Bucharest hub · 3–6m | INS (CMK), TRD, KAM | **Adam Vološin (KAM), First Meeting 18 Aug** |
| P1 | **L'Oréal** | CORE · T1 · Poznań/Paris · 1–12m | TRD, INS, KAM | **Petra Ivančáková (friend), Fred Orsita** |
| P2 | Unilever ČR | PRESENT · T1 · Prague · 3–6m | TRD, KAM, INS | — |
| P2 | Henkel ČR | CORE · T1 · Vienna · 1–12m | TRD, KAM | — |
| P2 | Beiersdorf | CORE · T1 · Vienna · 3–6m | TRD, KAM | — |
| P2 | Coty ČR (adidas body care) | CORE · €40k · Warsaw/Amsterdam | TRD | named by Vološin |
| P3 | Colgate (oral care), Haleon, Reckitt, S.C. Johnson, Tomil | mixed | TRD | Tomil named by Vološin |

### Shopping centres

See [`data/malls_targets.md`](data/malls_targets.md) for the researched list (owners, operators,
asset managers, property managers, with centres and named people where public). Find per company:
M-AM + M-MK, and M-LS where leasing is in-house.
