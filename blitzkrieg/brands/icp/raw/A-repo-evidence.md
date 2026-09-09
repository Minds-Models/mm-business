# BRAND-SIDE HUMAN EVIDENCE — exhaustive extraction from `mm-business`

**Scope note before anything else:** the repo contains a great deal about *legal entities and signatures* and comparatively little about *people*. Every `clients/*/facts.yaml` ends with `contacts: []                # TODO fill` — **there is not one named brand-side buying contact recorded anywhere in the repo.** The named humans that do exist are statutory officers (pens), not the three-role buying team. The buying-team model exists only as a doctrine table, repeated near-verbatim in five files, all traceable to one advisor conversation. Treat that as the single most important structural finding for persona work: **the persona set is currently a hypothesis with one primary source underneath it.**

---

## 0. SOURCE MAP AND RECENCY ORDER (which document wins)

| Rank | File | Date | Status |
|---|---|---|---|
| 1 | `blitzkrieg/partners/2026-09-03-rodolph-crozier-briefing.md` + `...-crozier-leavebehind.md` | 3 Sep 2026 | **Newest, most complete synthesis of the persona doctrine.** Written to brief an external advisor; §7 is the canonical role page |
| 2 | `blitzkrieg/brands/targets/DECISION.md` (+ `targets/targets.yaml`, 7,224 lines) | 2 Sep 2026 | The 181-company screen; autonomy map; per-company "ask_in_meeting" questions |
| 3 | `blitzkrieg/brands/paper/00-paper-set.md` … `05-retailer-paper-dependencies.md` | 4 Sep 2026 | The signable instruments; contains hard claims about *what a category manager can sign without legal review* |
| 4 | `blitzkrieg/brands/tobacco-access-playbook.md` (status line 2 Sep) | 26 Aug, updated 2 Sep | The only live named-meeting track (JTI, week of 7 Sep) |
| 5 | `blitzkrieg/brands/brands-execution-guide.md` (679 lines) / `brands-plan.md` | 26 Aug, patched 4 Sep | The working operational doctrine |
| 6 | `strategy/2026-08-19-base-strategy/*` | 19 Aug – 1 Sep | Revenue architecture, retailer objection, decision log |
| 7 | `data/claude reports/Retailer Win-Win & GTM Reality — Minds & Models_files/saved_resource.html` | **22 Jul 2026** | **THE primary-evidence document.** Contains the only verbatim brand-person quotes in the repo |
| 8 | `data/notes.md` | 8–12 Aug 2026 | Marek Stacha meeting memory (investor, not brand) |
| 9 | `clients/lego/.../lego-one-pager-en.html` | 10 Aug 2026 | **Stale** — sells personalization, contradicted by D2 |

---

## (a) EVERY NAMED ROLE OR FUNCTION INSIDE A BRAND, AND WHAT IS CLAIMED ABOUT IT

### A1. The canonical three-role model (repeated in five files, wording drifts slightly)

**Newest and fullest version — `blitzkrieg/partners/2026-09-03-rodolph-crozier-briefing.md` §7 "Who inside the brand (never single-thread)":**

> "Three named people per company, always. One is not enough and the wrong one is fatal."

| Role | What they do | Their vocabulary |
|---|---|---|
| **Trade marketing / category / key account** | "**Holds the money.** Biggest wallet in the building. Uses it to negotiate with retailers and decide where and how to sell" | "trade spend", "listing", "channel" |
| **Insights / research** | "**Vetoes on method.** Owns the incumbent data relationship. Can kill us without ever writing a cheque" | "P&G calls it **CMK** (Consumer & Market Knowledge), Nestle calls it Market Intelligence, others Consumer Insights" |
| **Brand / marketing manager** | "The campaign use-case: create and test campaigns, find the market-moving segment. Agency-influenced" | "activation", "reach", "measurement" |

> "**Rule: trade marketing pays, insights vetoes. You need both. Never approach only one.**"

Same table in the leave-behind actually handed to the advisor, `blitzkrieg/partners/2026-09-03-crozier-leavebehind.md` §04 ("Inside a brand: three buyers, three budgets, three reasons"), with the framing line:

> "The one who loves it is rarely the one who signs. You need all three."
> "**Trade marketing pays. Insights vetoes. Never single-thread a brand.**"

### A2. The three-use-case / three-budget map (`blitzkrieg/brands/brands-plan.md` §1)

> | Use-case | What they do with who-buys | Budget it attaches to | Buyer |
> | **Sales / trade** | negotiate with retailers, choose where to sell & at what conditions | trade-marketing / sales ops (**the biggest wallet; P&G is sales-oriented**) | sales director, category/key-account mgmt |
> | **Marketing** | create & test campaigns; find the market-mover segment | brand marketing + media (agency-influenced) | brand/marketing manager (**Unilever-types lead here**) |
> | **Product development** | find the customer gap in the line; new product/packaging decisions | innovation/NPD + research | insights + NPD |

Note the two unexplained ethnographic assertions: "P&G is sales-oriented" and "Unilever-types lead here" (marketing). Neither is sourced anywhere in the repo.

### A3. The mapping instruction that defines what a persona must contain (`blitzkrieg/brands/brands-execution-guide.md` §1.1, "Budget-owner map — 15+ named humans")

> "For each company find **three** named people, not one:
> (a) **insights** — the methodology gatekeeper · (b) **trade marketing / category / key account** — usually holds the money · (c) **brand or marketing manager** — the campaign use-case.
> For each person log: name · exact title · LinkedIn URL · which of the three use-cases they own · **warm path** (who we know who knows them: Moris, advisor, angels, Šepek network, ex-colleagues)."

Operator tips attached to that task (all persona-load-bearing):

> "**Use their internal vocabulary** — P&G calls insights **CMK** (Consumer & Market Knowledge); Nestlé uses *Market Intelligence*; others *Consumer Insights*. Writing 'CMK' to a P&G person signals insider in one word."
> "**Trade marketing pays, insights vetoes.** You need both: trade to fund it, insights not to block it on method. Never approach only one."
> "**Hunt the ex-incumbent people.** Anyone who moved from NIQ/GfK/Kantar into a brand understands syndicated data instantly and converts fastest. LinkedIn: past company = NielsenIQ, current = brand."
> "A CZ title often has no CZ budget — regional clusters hold the pen. Never assume; ask explicitly."

Restated in the Crozier briefing §7 as: "**One shortcut worth telling him:** hunt people who moved from NielsenIQ, GfK or Kantar into a brand. They understand syndicated data instantly and they convert fastest."

### A4. A fourth and fifth buyer type that the three-role model omits

`blitzkrieg/fundraise/why-not-nielseniq.md` Part 2 §A ("Who buys the product") — **four rows, not three**:

> | Buyer inside the brand | Budget they hold | What makes them sign |
> | Shopper / consumer insights | research and measurement, annual, **renews on a fixed date** | "at what coverage would this augment or replace what you buy today" |
> | Category management, trade marketing | trade and **joint-business-planning** budgets | "a read they can carry into the retailer negotiation without it being a weapon against the retailer" |
> | **In-store / retail media** | **media budget, a different wallet, faster approval path** | "proof that a campaign moved a shopper, not just that it ran" |
> | **Private-label organisation (retailer side)** | "behaves like a brand and has no incumbent read on its own shoppers" | "the principled exception to 'brands only'" |

The media-wallet person gets its own task, `brands-execution-guide.md` §9.2 "Open the media wallet":

> "Start measurement-retainer conversations with brands running in-store campaigns on the funded screens — this is **media budget**, a different wallet in the same company, often with an easier approval path than research."
> "Ask the brand contact: *'who owns the in-store media budget?'* — it is frequently a different person from your seat buyer, and they can buy without touching the seat's approval chain."

The private-label buyer is developed at `strategy/2026-08-19-base-strategy/14-retailer-data-objection.md` §6(b):

> "a private-label team behaves like a brand — brand-like margins, brand-like need for shopper insight, and no incumbent read on their own shoppers. **A private-label organisation may be the one retailer-side buyer that should pay like a brand**, which is a genuine and principled exception to D1. Worth testing at the SuperZoo exec meeting: *'would your own-brand team buy this?'*"

Applied concretely to Plaček in `blitzkrieg/brands/targets/DECISION.md` §2: "Three separate buying centres sit inside one company — the retailer, the 3,389-SKU / 23-brand private-label team, and the CZ/SK wholesale arm carrying ~155 third-party brands."

### A5. Two more roles named only in the tobacco track

**The Key Account Manager for the retailer account** — `blitzkrieg/brands/tobacco-access-playbook.md` §3 "The precise target: the Key Account Manager for ČEPRO":

> "Not 'trade marketing' generically. **Every tobacco major has a named KAM who runs the ČEPRO/EuroOil account.** That person:
> - already knows ČEPRO and speaks to them monthly — so a ČEPRO-referred approach is unremarkable;
> - is measured on that account's performance — our data is directly about their KPI;
> - can pull in insights and category colleagues internally, which we cannot do from outside;
> - sits close to trade-marketing money — the biggest and least constrained wallet in a tobacco company.
> **ČEPRO's category manager knows all three names by heart.** That is the ask."

**Tobacco legal / compliance as the true gatekeeper** — same file §1.3 of `brands-execution-guide.md`:

> "**Lead with compliance, not with data.** Tobacco legal is the real gatekeeper. Paragraph one: no facial recognition, no identities, age estimation with error bands, aggregates of 25+ only. Get past legal and marketing will engage."
> "**Trade, never brand marketing** — tobacco advertising is legally constrained; trade/category carries both the budget and the freedom to act."

Repeated as a commercial fact in `blitzkrieg/brands/paper/00-paper-set.md` counsel brief Q6: "**Tobacco legal is the real gatekeeper on this track** (brands guide 1.3): a short written confirmation from counsel is itself a sales document."

### A6. Roles named as *channel-development / strategy*, distinct from the measurement buyer

`strategy/2026-08-19-base-strategy/04-revenue-architecture.md`, pet block note (2 Sep):

> "a channel-entry study is bought by a **different function (channel development / strategy)** on a different cycle than a T2 measurement seat. Do not assume the 5M / 4M CZK T2 figures survive; they were priced as shelf-measurement seats."

Echoed three times in `targets.yaml` (lines 3334, 3585, 3700): "Buyer is channel development / strategy, NOT the measurement-seat buyer — reprice accordingly."

And in `clients/superzoo/facts.yaml`: channel-development reads are "bought by category management, channel development and trade marketing."

### A7. The brand-side analyst who audits the numbers

`data/claude reports/Retailer Win-Win & GTM Reality…/saved_resource.html`, risk table:

> "**Credibility of small samples** — a brand's analyst tears apart a thin cut | Managed | Keep the GymBeam discipline everywhere: suppress cells < 10, publish match methodology, show p-values and honest nulls."

`brands-execution-guide.md` §2.1: "Put the method in the footnote, not the headline — **insights people will check it**, everyone will skip it, and both behaviours are fine."
`blitzkrieg/data-brokers/brokers-execution-guide.md` §8.2: "The definitions footer is **not** removable in white-label — it is what makes the read defensible when **their client's insights manager checks it**."

### A8. The agency of record as a quasi-internal role

`brands-plan.md` §3, `crozier-briefing` §7, `brands-execution-guide` §2.2/§3.1 and `paper/00-paper-set.md` all treat the AoR as a person in the room:

> "If a brand has an agency of record, do **not** route through the agency yet — go direct, and bring the agency in later as an ally." (`brands-execution-guide.md` §2.2)
> "**The agency-of-record play:** if they mention their agency, ask *'would it help if we briefed them alongside you?'* — that converts a potential blocker into a co-owner." (§3.1)
> Licence term, decided 4 Sep: "Brand's own staff **+ one named agency of record**, back-to-back terms" — and, from the negotiation-points list, "**The agency licence** will be pushed toward 'our agencies' plural. Hold at one named agency."
> `paper/05-retailer-paper-dependencies.md` RD-8: "brand may disclose to **one named agency of record**… A 'subscriber only' restriction breaches 10.1 and **closes the agency-master path (R5)**."

Agencies are separately modelled as a *buyer* in their own right — `brands-execution-guide.md` §7.3 (Store Twin for agencies): "Buyer: **media / shopper / research agencies** (a distinct buyer from brand seats)… Agencies buy for pitches. A Twin demo that answers *a pitch question they have this week* wins; a generic tour does not. Ask which pitches are live."

### A9. Named humans on file (all statutory officers / public commercial roles — NOT buying-team contacts)

From `targets.yaml` + `DECISION.md`. Flagged by whether the role is a *pen*, a *commercial role*, or *both*:

- **Štěpán Michlíček** — BAT CZ "General Director CZ & SK, **and a registered jednatel since 2014**"; SK runs as an *organizačná zložka* so "CZ+SK is one signature." *Both.*
- **Dimo Dimitrov Dimov** — Coca-Cola HBC ČR sole jednatel, country GM. *Both, but* "CCHBC group runs a strong central Business Insights function."
- **Martin Prokeš** — CCHBC, public role **"manažer prodeje pro čerpací stanice"** (petrol-station sales manager). Explicitly flagged: "a named public role, **not a pen**" — the single best example in the file of a channel-owning commercial persona.
- **Tomáš Kautský** — Mondelez CZ "sales director **CZ/SK-only**" and a jednatel; promoted over **Ivana Tůmová**, "whose own title is GM CZ/HU/SK — a three-country cluster reaching outside our target scope." Third jednatel: **Petr Fous**.
- **Cemal Berk Temuroglu** — PMI, "named as a board member and commercial director, **but not documented as a registered statutory officer**… Verify before addressing correspondence."
- **Mgr. Ladislav Koubek** (Praha, jednatel since 21 Jun 2018) and **Cormac O'Rourke** (**Stockholm**, since 5 Feb 2025) — JTI's two jednatelé. **Stephane Berset** held the CzHuSk GM role 2021–2024, moved to JTI UK Feb 2025; "the successor is unsourced." "**Assume the pen is not in the room.**"
- **Felix von Schwanewede** — Imperial Brands CR, "himself a registered jednatel — legal signing power is in Prague."
- **Lenka Škopová** — Nestlé Česko sole jednatel and GM for CZ+SK, "five years as the entity's CFO first."
- **Ján/Jano Hlaváč** — Unilever ČR jednatel, "runs CZ+SK as a country unit"; co-jednatelé **Petra Wojnarová**, **Zuzana Frenák** (Nitra), plus six Czech prokuristé.
- **Eva Kadlecová** — explicit do-not-contact: "**Do NOT contact Eva Kadlecová as a Unilever HPC lead** — she is General Director CZ/SK of The Magnum Ice Cream Company (the separated ice-cream business), per MAM, 20 Mar 2025. Wrong company, wrong category."
- **Lukáš Hradečný** — Haleon: "retains the CZ/SK country-manager title but now sits inside the RHCS cluster under GM **Wael Kaskas**."
- **Krzysztof Kamiński** — Sarantis, "has run Sarantis Czech Republic & Slovakia continuously since 2005"; Poland run separately under **Marek Modzelewski**.
- **Pavel Behenský** and **Petr Faltejsek** — Colgate CZ jednatelé who also sign at Hill's; "Swiss co-jednatelé sit in the Basel area."
- **Jiří Jízdný (b. 1994)** — AG Foods: "a member of the board AND, per the Jaro 2026 trade special, **marketing director** — so the marketing owner and a statutory signer are the same person." Father **Jiří Jízdný (b. 1967)** chairs. Supervisory-board unknown: **Orestes Zukowski** (ZUKOR Invest, 2024).
- Owner-pens with no separate buying team: **Dalibor Cicman** (GymBeam, 72%), **Dušan Plaček** / COO **Luboš Rejchrt** (Plaček), **Ing. Jaroslav Poul** + **Vladimír Grée** (CBI/DanCzek), **Ing. František Bouška / Jan Bouška / Pavel Bouška** (VAFO), **Martin Moravec** + prokurista **Radko Graclík** (Teta/Solvent), **Mgr. Vladimír Komár** (Dermacol), **Aleš Monteleone** (Gabriella Salvete), **Richard Zedník** (Nutrend), **Daniel Buryš** (Kofola CEO CZ/SK) with **Jannis Samaras** as override, **Jan Plšek b.1975** (JIP), **Libor Chrobok** (GECO), **Tomáš Kmotrík** (GGT, Bratislava), **Raid Namura / Ratib Nammura / Hana Namurová** (Big Shock, each alone), **Angelo Russo** (Farmina, Nola IT), **Tomáš Hůlek** (Traficon).

**Do not confuse with shopper personas.** `clients/*/delivered/personas/*.html` (gymbeam, eurooil, o2, superzoo) are *end-shopper* personas built from camera data ("20S Normcore Budget Conscious", "Suburban driver 40+", "Field tradesmen"), not buyer personas.

---

## (b) PRIMARY EVIDENCE — what actually came from a real conversation with a real brand person

This is the section where the repo is thinnest, and where the record has drifted. **Read the provenance carefully.**

### B1. THE single primary source: an ex-P&G brand insider, interviewed 22 July 2026

`data/claude reports/Retailer Win-Win & GTM Reality — Minds & Models_files/saved_resource.html` — header block:

> "Built on a **15-year brand insider's read** of how retailers and brands actually behave — which forced a real correction to the earlier plan.
> **Source** insider · 15+ yrs at brands, 10 at P&G
> **Date** 22 Jul 2026"

**Verbatim quote 1 (retailer data-fear, told by a brand person):**
> "*Data is extremely valuable to retailers. They absolutely do not want to share any information with the brands under any circumstances — it would weaken their negotiating position during purchasing. Finding a win-win with retailers is the biggest challenge.*"
> — brand insider, 15+ years

**Verbatim quote 2 (the personas-vs-measurement correction, and the "bottomless budget"):**
> "*At P&G we already had very well-developed buyer personas — I wouldn't see that much value in visual shopper data. On the other hand, P&G has enormous money and was willing to pay for almost anything — hundreds of millions of CZK on market research.*"
> — brand insider, 10 yrs at P&G

The report's own gloss on quote 2:
> "To a sophisticated brand, **'here are demographic personas' is commoditized** — they have better ones… **The budget is bottomless — you just have to be in the right line item.** 'Pays for almost anything' is the real signal: sell into the **measurement / currency** budget, not the **research / panel** budget."
> "Segment the brand pitch: **giants buy currency & measurement; mid-tier buys insight & personas.**"

**Verbatim quote 3 (sales-cycle and decision level — retailer-side but from the same person):**
> "*A large retailer like Billa won't even talk unless there's at least 10M CZK of upside for them. Decisions are made at CEO level. Our sales cycle with large retailers averaged two years — even with contacts.*"
> — brand insider

Same report also records a **self-correction about a misread of this person's own words**:
> "Was (a brief detour): Charge the retailer for the insight dashboard — 'they pay millions for data anyway.' **Now — reverted.** That rested on a misread (the '500k–1M CZK/month' figure was the insider's **own** product, not retailer data spend)."

### B2. How that single conversation became "P&G told us" across the plan — a provenance drift you must carry

The operational documents cite this material as if it came from a live P&G buyer:

- `strategy/2026-08-19-base-strategy/mm-base-strategy.md` §0: "**P&G told us where the money is**: brands hold the margins and the data teams, want CEE-local data, quarterly Excel, and stated they'd pay — the hurdle is the budget bucket `[FACT 3.9]`."
- `brands-execution-guide.md` §3.1: "P&G already told us '**complementary**' is the price cap."
- `brands-execution-guide.md` §2.4 title: "Chat demo with mocked, brand-specific data — **the interface P&G asked for**"; §2.4 tip: "The chat is the interface **P&G explicitly wanted**."
- `brands-execution-guide.md` §3.4: "P&G already answered: **quarterly Excel is enough; real-time is not needed; chat is wanted for insight.**"
- `strategy/…/06-ws-product-data.md`: "Store Twin (chat + simulation over the aggregates) ships ≤15 Nov — **P&G explicitly asked for this interface.**"
- `strategy/…/mm-base-strategy.md` §4.1(a): "P&G's 'nice to have' describes **persona/insight decks**: interesting, unbudgeted, bought once `[FACT 3.9]`… delivered quarterly in Excel exactly as P&G asked `[FACT 3.9]`… **P&G is already drifting from NIQ toward direct retailer data** `[FACT 3.9]`."
- `strategy/…/mm-base-strategy.md` §4.1(b): "As a *customer for insights*, the retailer is a bad buyer: ~4% margins, **~1 analyst per 2–3 categories** `[FACT 3.9]`, no budget line."
- `strategy/…/02-decisions.md` D7 rationale: "CEE density beats thin multi-country spread (**P&G's data-locality requirement**)."

**Assessment for persona researchers: `FACT 3.9` is, on the evidence in this repo, the 22 Jul 2026 conversation with the ex-P&G insider — not a meeting with a serving P&G CZ budget holder.** The label "P&G said" should be read as "a 10-year P&G veteran said, describing how P&G behaves." Nothing in the repo contradicts the substance; but "they explicitly asked for a chat interface" is an inference from an advisor debrief, not a logged customer request. The `12-numbers-external` / `stats.yaml` discipline ("a number not in this file may not appear in any material") has no equivalent provenance register for qualitative claims, which is how this drifted.

### B3. Second primary-ish datapoint: the incumbent price points (founder intel, INTERNAL ONLY)

`messaging/stats.yaml`:
> ```
> brand_demand_side_prices:
>   value: "PMI ~8M CZK/yr (2021, tobacco petrol/convenience); Nestle ~18.5M CZK/yr (2023, broad food retail)"
>   source: "founder intel"
>   status: internal-estimate
>   internal_only: true
> ```
> and `niq_dm_supply_price: "NIQ pays DM drugstore (261 stores) ~900k CZK/yr for raw POS (~287 CZK/store/mo)" · source: "founder intel" · internal_only: true`

Interpretation in `mm-base-strategy.md` §4.1(a): "PMI's 8M CZK bought a **channel measurement currency**: the tobacco read in petrol/convenience, plugged into KPIs, **bought annually because share is managed on it**." The `13-revenue-model.md` version: "The top of the band is not invented: PMI paid **8M CZK (€327k)** for a category read in exactly this channel." The GTM report labels the same figures "founder-provided NielsenIQ benchmarks… treat as directional, **possibly barter-adjusted**."

### B4. Live/booked brand meetings on record (as of 4 Sep 2026)

- **JTI — the only booked meeting with a tobacco major.** `clients/eurooil/facts.yaml`: `next_step: "JTI meeting, week of 7 Sep 2026 (CEPRO-brokered) — first of the tobacco majors"`; `first_meeting: counterparty: "JTI (JT International spol. s r.o., ICO 17047587)" · route: "brokered by CEPRO" · to_confirm: "exact date · attendees on both sides · whether CEPRO chairs or only introduces · **which JTI role attends (target: the KAM who runs the CEPRO/EuroOil account)**"`.
  Objective, verbatim: "(1) their density requirement on record — at what station coverage does this become decision-grade; (2) the named budget owner and their 2027 planning date — **for JTI that means the CzHuSk cluster General Manager, unnamed in our file**; (3) agreement to receive a conditional LOI; (4) **a second meeting with insights or category present**. Do NOT try to close money in meeting one."
- **PM Slovakia — a pre-existing personal contact, not a logged meeting.** `brands-execution-guide.md` §1.3: "**PM Slovakia (J):** reactivate the existing contact — shortest path to a meeting." Route 4 in the tobacco playbook: "Ask the PM-SK contact directly: *'who runs the petrol & convenience channel for PMI in Czechia — would you introduce us?'*" No content from any PM-SK conversation is recorded anywhere.
- **ČEPRO verbal greenlight, 26 Aug 2026** — retailer-side but it is what makes brand meetings legal: `brand_approach_greenlight: granted: "verbal, 26 Aug 2026" · written_confirmation: pending`.
- **The earlier planned tobacco+Asahi room** (GTM report §9, 22 Jul): "The meeting's stated agenda is personalization and who pays the €120/store." Superseded by the ČEPRO-brokered route and by D2 (personalization demoted).
- **SuperZoo/Plaček RFI** — retailer-side inbound, but the only documented "they asked us" event: `05-ws-sales-partners.md`: "They asked for safety, operational efficiency and compliance — **no audience analytics was requested**; that is our attach, not their ask."
- **Marek Stacha, 8 Aug 2026** (`data/notes.md`) — investor/serial founder, **not a brand person**. Do not use his critique as brand-side voice.
- **Rodolph Crozier, 3 Sep 2026** — external commercial advisor, ex-Altavia. Not a brand buyer; but the briefing asks him for the missing primary data: "**The 2022 debrief:** who bought or blocked in-store analytics in CZ retail, at what price, **in which job title**" — i.e. the repo itself acknowledges the job-title evidence base is empty.

### B5. Everything else in the persona doctrine is founder hypothesis — explicitly

`brands-plan.md` §8 lists the persona-relevant unknowns as open research items, all still open:

> "**R1** budgets per use-case (see §1) — 12 Sep · **R2** subsidiary spend autonomy… — 19 Sep · **R3** renewal calendars: discovery phrasing 'when do you plan next year's data & measurement budgets?' — rolling · **R4** Q4-budget mechanics… — 19 Sep · **R5** agency masters… — 26 Sep · **R6** tobacco compliance artifact…"
> Plus **R7** "ICP synthesis — primary (meetings) + secondary (podcasts, blogs, job posts) | J | 13 Sep | Rewrites outreach, site, invite and the 8-account filter" and **R8** "Consumption-format map per brand".

`brands-execution-guide.md` §2.6 states the intended method and its weighting:
> "**Secondary:** what CZ/CEE brand insights and trade-marketing people actually read and listen to — industry podcasts, trade blogs, the incumbents' thought-leadership pages, **job postings** (what insights teams hire for reveals the tools and budgets they run), LinkedIn posts by named CZ trade marketers. Log recurring pains verbatim."
> "Secondary research tells you the language; primary tells you the truth. **Weight primary 3:1.**"
> "The best ICP signal is a *trigger event* — a lost listing, a failed launch, a new category manager. Ask in every meeting: '**what changed recently?**'"

---

## (c) OBJECTIONS, FEARS, VETOES AND POLITICS ATTRIBUTED TO BRAND-SIDE PEOPLE

### C1. The two structural losers (the core political model)

`blitzkrieg/brands/brands-plan.md` §3 "Inside the brand — who loses":
> "Two quiet losers exist: **(a) the insights/category manager who owns the incumbent-data relationship** — a new source they didn't bring in threatens their authority; **(b) the agency of record** if measurement insources. Mitigation is structural, not hopeful: **sell through them, not around them** — co-design credit (Q5: confirmed attractive), advisory micro-board seat, they present the read internally as THEIR find. **The champion IS the gatekeeper, flipped.**"

Crozier briefing §7 restatement: "Two quiet losers he must plan around, not hope past… **sell through them, not around them.** Co-design credit, a seat on a brand advisory micro-board, and they present the read internally as their own find."
`brands-execution-guide.md` §11.2: "**People promote what they co-authored.** Give the insights manager the credit line and they will present it internally for you, which is the cheapest expansion motion that exists."

Company-specific instance, `targets.yaml` (PMI record, ~line 1443):
> "PMI is the largest buyer of syndicated data in the category; **the insights function's authority is tied to that relationship** (brands-plan §3 'quiet loser'). **Sell through the insights owner, not around them.**"

### C2. "Complementary / nice-to-have" — the price cap

`mm-base-strategy.md` §4.1(a): "P&G's 'nice to have' describes **persona/insight decks**: interesting, unbudgeted, bought once."
Failure mode #4 in `04-revenue-architecture.md`: "Seats do not clear at T1/T2 prices (**the 'complementary data' cap binds**) → E2 reprices to one-off studies: lumpy, non-recurring, roughly −70% on E2."
Kill-test, `mm-base-strategy.md`: "zero seats sold at ≥€40k across ≥6 qualified brand conversations → P&G's 'complementary, nice-to-have' classification is binding at CZ scale too."
Counter-move, `brands-execution-guide.md` §3.1: "Add a fourth question when the room is warm: *'what would make this a must-have rather than a nice-to-have?'* — P&G already told us 'complementary' is the price cap; this question finds the path over it."
D17 rationale, `brands-execution-guide.md` standing rules: "Founding floor €40k — below that it's a study, don't count the seat | D17; **€25k sat in study territory and trained the complementary cap**."

### C3. "We already have personas"

`messaging/objections.md`, "P&G/big brands already have deep personas" (sophisticated brands):
> "True — which is why we don't lead with personas. What no one has, including P&G, is closed-loop in-store measurement: which shopper segment bought which SKU, at the shelf, matched to the receipt, in near-real-time. **Personas are the bonus; measurement is the product.**"
`templates/sales-deck-brand/SPEC.md`: "**Big brands (P&G-tier): never lead with personas — they have them; lead with closed-loop.**"

### C4. The incumbent-currency objection, and where it fires

`targets.yaml` P&G record: "P&G is a NielsenIQ-heavy buyer globally; **expect the incumbent-currency objection at CMK level, not at sales level. Lead with sales/trade, not CMK.**"
`targets.yaml` PMI record: "**NIQ is inside our own retailer:** ČEPRO expanded its ACNielsen/NIQ contract in Jun 2025 — the incumbent measurement supplier sits in the parent company of the estate we are selling a read on. **Never frame this as replacing NIQ.**"
`messaging/objections.md`: "We're complementary ('who' on top of their 'what'), which makes them a distribution partner or acquirer, not a competitor."
`why-not-nielseniq.md`: the insights buyer signs on "at what coverage would this augment or replace what you buy today."

### C5. Vendor-onboarding / preferred-supplier blocks (a procurement veto distinct from budget)

`targets.yaml`, Nestlé record: "**NESTLÉ IS A MAJOR SYNDICATED-DATA BUYER and operates global research procurement with preferred-supplier panels. A Czech startup may find the spend approved and the vendor blocked** — clarify the procurement path."
Mars records (×2): "Mars is one of the largest syndicated-data buyers in the world with global procurement; vendor onboarding…"; "a Czech startup will face a global procurement function."
Covetrus/Henry Schein record: "US corporate procurement norms (vendor onboarding, security…)."
PMI record: "still route new-vendor and market-research procurement through corporate. PMI specifically runs…"
BAT: "Given BAT's global Marketing/Insights procurement discipline, would a new Czech-only research vendor like us clear through your desk alone, or does anything camera-based need a privacy/legal sign-off above Prague first?"
Countermove — the vendor-record hack, `brands-execution-guide.md` §3.2: "**Invoice it at €0 anyway.** A zero-value PO creates a **vendor record** in their system — which is 80% of next year's procurement battle already won, and it is the direct answer to P&G's stated 'the hurdle is the budget bucket.'"
Kill-test, `17-signals-21nov.md`: "P&G free read | 15 Oct | 🔴 = **procurement can't book even €0 → giants only via channel**."

### C6. Privacy / camera-method veto above the country

Explicit per-company asks, `DECISION.md` §5C:
> **Philip Morris ČR** — "would that be your signature, or would **corporate affairs and global insights** need to clear it first, **given the camera-based method**?"
> **BAT CZ/SK** — "does anything **camera-based** need a privacy or legal sign-off above Prague?"
> **Nestlé Česko** — "does anything **privacy-adjacent** route to a **group data-protection function** first?"
CCHBC regulatory landmine (`targets.yaml`): "**REGULATORY SENSITIVITY, handle carefully:** the under-16 energy bill means any age-related output we give CCHBC could end up in a **lobbying submission**. Our estimates carry error bands and are k>=25 aggregates and can **NEVER** be presented as individual age verification. Get the founder's sign-off…"

### C7. The banned-sentence list for pet giants (an objection engineered in advance)

`blitzkrieg/brands/targets/DECISION.md` §4 and `clients/superzoo/facts.yaml`:
> "**Two sentences are therefore banned in any Purina or Mars conversation, and both would be unrecoverable:** never tell them they are 'absent from the premium specialist channel' (**false, and their category team knows their own numbers**), and never promise competitor-level cuts from a single chain."
> "(1) THE PREMISE IS FACTUALLY WRONG AT GROUP LEVEL… Saying 'you are absent from this channel' to their category team would be wrong in the first minute of the meeting."
> "(3) '**ABSENT = SAFER' IS BACKWARDS.** Mars would use this to negotiate **LISTING entry** against Super zoo — the same class of harm the clause exists to prevent."

### C8. Landing on the wrong (junior) person

`targets.yaml` JIP record: "tobacco is a minority of JIP's business… so a tobacco-only pitch **may be routed to a junior category manager with no budget**. Consider pitching JIP on the wider forecourt basket… the risk is landing on a junior buyer, not the pen."
`brands-execution-guide.md` §2.2: "Never write 'we'd like to present our solution.' **That is a vendor email and it dies.**"
Crozier §8 on posture: "Two founders in a room read as a startup. Two founders plus a man who ran a multi-country retail services business for 20 years read as **a vendor a category director can buy from without career risk.**"

### C9. Objections we engineer *for* the buyer

`brands-execution-guide.md` §6.2 / §7.1: "send the escrow one-pager **with the invitation** so the risk objection is pre-answered"; "Put the escrow on the wall: *'if density misses, you get refunded.'* It converts the biggest objection (**buying data that doesn't fully exist yet**) into evidence of confidence."
§7.1: "**Never let them negotiate in front of each other.** Present the offer to the room; close in the 1:1s. Public negotiation collapses your price to the most skeptical person present."
§4.1: "Never invent a deadline, and never threaten an exclusive (ruling C3). **Fabricated urgency is remembered by compliance-heavy buyers and it is the one thing that makes a tobacco legal team stop returning calls.**"
§10.1, the honest closing line for a stalled brand: "*'your 2027 planning closes in a few weeks — if this isn't going to make that cycle, tell me now and I'll come back in January rather than chase you.'*"

---

## (d) RULES CONSTRAINING WHAT WE MAY SAY OR SELL TO A BRAND PERSON

### D1. The standing-rules table (`brands-execution-guide.md`, "check before every outbound artifact")

> | **Methodology-only before that retailer's mandate** | Rights doctrine; breaking it costs the mandate, not just the meeting |
> | **No exclusivity, ever** (max 3-month early access on custom cuts) | Syndication is the multiplier; exclusivity kills the currency |
> | **Honest nulls in every deliverable** | One inflated number ends the whole compliance-heavy buyer class |
> | **"Age estimation with error bands"** | Never "age detection" — it is the phrase that survives legal review |
> | **Pooled brand-worn claims only** | Fill is 4–10%; per-brand claims are indefensible until volume grows ~10× |
> | SIGNED / IN NEGOTIATION / TARGET labels | The reality-vs-plan discipline |
> | **Internal benchmark figures never leave** | Incumbent supply/demand prices are INTERNAL-ONLY |
> | Founding floor €40k — below that it's a study | D17 |
> | **Forwardability litmus** | Every artifact must survive being forwarded to the retailer, a competitor, or a journalist |

### D2. The licensed sentence and the banned superlative

`brands-plan.md` §7: "Internally: '100× better than NIQ.' **Externally, NEVER** — unfalsifiable puffery that also wakes the incumbent. The licensed sentence: **'Syndicated data tells you what sold. We show you who buys it — in the aisle, receipt-verified.'** Depth claim: 'hundreds of attributes per shopper, zero identities.'"
Crozier §4, "Words that stay out of his mouth": "**'Personalization', 'screens', 'digital signage'** as our offer in a retailer or brand conversation. They put us back in the AV category and kill the data pitch… **'Tracking', 'collect data about individuals', 'deep visual analysis of individuals'**… **'100x better than NIQ'**… **Any promise of exclusivity.**"
Disarm line: "no facial recognition, no identities, no biometric templates, aggregated outputs only (minimum 25 people per segment)."

### D3. The rights boundary for tobacco conversations (`tobacco-access-playbook.md` §6)

> | ✅ May | ⛔ May not |
> | Describe the methodology in full | **Show EuroOil data, in any form** |
> | Show the anonymized sportstore report and (with permission) the GymBeam case | **Present modeled numbers as measured — the tobacco decks' POS layer is modeled and must be labelled every time** |
> | Say we work with a Czech fuel & convenience network — **and name EuroOil inside a ČEPRO-convened conversation** | **Name EuroOil in decks, investor materials or to other brands** (`can_name_publicly: false`; fallback "a Czech fuel & convenience network") |
> | Describe what a channel read would contain and ask what coverage they'd need | **Promise delivery dates or sell a subscription dependent on unsigned rights** |
> | Collect **LOIs "subject to a data agreement with the retailer"** | **Imply exclusivity, ever** |

And §5's banned framing: "⛔ **Banned framing:** anything that sounds like **age verification, targeting minors, or identifying individuals**. Use only *'age estimation with error bands.'* **One careless phrase ends the category.**"

### D4. Rules that shape the *hook* rather than the claim

`tobacco-access-playbook.md` §5: "Do **not** open with 'shopper analytics.' Open with what their leadership is measured on: **the conversion of combustible smokers to reduced-risk products** (heated tobacco, nicotine pouches). That transition is where their growth, budget and internal attention sit."
`brands-execution-guide.md` §2.1: "**Counterintuitive beats impressive.** 'We capture 88 attributes' impresses nobody. *'Your premium buyer is on average 12 years older than your campaign targets'* gets a meeting." / "The best teaser **contradicts something the brand believes about its own shopper**."
§2.2: "Cold email formula: subject *'in-store shopper data — methodology question'*… **ask for their opinion on the method** · 20 minutes." / "**Asking an insights manager for their opinion is the highest-converting cold open in this market.** It is flattering, genuinely useful to us, and it establishes peer posture instead of vendor posture."
§1.3: "**Ask for 20 minutes, not 'a meeting.'** Named duration converts materially better." / "**Attach the artifact, don't describe it.** One PDF beats three paragraphs."
`templates/email/outreach-library.md` global rules: "≤120 words, ONE question-CTA, **no attachments/links on first cold touch**, 92% stat as hook, first line about THEIR world, **send Tue–Thu ~7:45 from founder address**." T1's P.S. is a role-routing device: "*P.S. Pokud tohle u vás řeší spíš kolega z insights nebo trade marketingu, komu to mám přeposlat?*" T3 event invite caps attendance "**pro trade marketing a insights — z každé firmy max. dva**."
§3.1: "**Do not pitch.** The moment you pitch you lose both the methodology-only legal protection and the peer posture. If they ask for a proposal, say: *'I'd rather show you the method first — the commercial part only makes sense once you've told me what coverage you'd need.'*"
Crozier §8: "**He opens, we close.**… **He never quotes a price.** If asked, the answer is 'that depends on the coverage you would need.'" Leave-behind §09: "**Do not quote a price in a first meeting.**"

### D5. Rules built into the paper (what a brand person is actually asked to sign)

`blitzkrieg/brands/paper/00-paper-set.md`, "Terms shared by all four documents":
> "1. **Anonymous aggregates only**, minimum 25 persons per reported segment (k≥25).
> 2. **No personal data of the brand is processed**, therefore **no brand-side DPA is required.** State this affirmatively: it is what makes their legal review fast…
> 3. **No facial recognition, no identities, no biometric templates.** Age is estimated with error bands; never 'age detection'.
> 4. **No competitor-level cuts** are promised in any set where only one chain is instrumented.
> 5. **Not exclusive.** Other brands in the set may subscribe. Said out loud, in the document.
> 6. **Method and delivery are warranted. Anonymity end-to-end is not**, and business outcomes are not."
"What counsel must NOT change": "**Do not warrant anonymity end to end.** Never in a contract. The licensed claim is 'anonymous insights, built on momentary processing'." / "**Do not lengthen.** Each document must fit **what a category manager reads in one sitting.**"

### D6. The naming permission is deliberately narrow — because of who it would drag in

`paper/03-loi.md`: "We ask to name the Customer **to retailer counterparties, and to investors and their advisers under written confidentiality**. We do **not** ask for public, press or marketing use. That is not timidity… asking for public use would put a **tobacco company's communications team** in the conversation, which would cost weeks."

### D7. Mock-data discipline (the chat demo)

`brands-execution-guide.md` §2.4: "mock data must be **synthetic and labelled illustrative on every screen**… **mock numbers must never migrate into a deck or a data room**; keep the mock dataset in a folder named MOCK and nowhere else." / "Prompt the chat with the brand's *vocabulary* (their category names, their segment labels) — **insights people notice when a tool speaks their language.**"

---

## (e) BUDGETS, BUDGET LINES, APPROVAL CHAINS, RENEWAL CALENDARS, SIGNATURE POWER

### E1. The pricing ladder every persona must be sized against (D17, 1 Sep 2026)

`strategy/…/02-decisions.md` D17 and `04-revenue-architecture.md`:
> "(1) T0 study **150–500k CZK**, not a seat; (2) founding seat **floor €40k / ask €40–60k** (50% off year 1, max 3/category, density escrow) — below €40k take the money, do not count the seat; (3) **list T1 €75–122k** (~1.8–3M CZK)." T2: "**€122–327k** (3–8M CZK; 150–300 stores, ≥2 chains)."
Closed commercial spec (`paper/00-paper-set.md`, founder decisions 4 Sep): study **300,000 CZK**; 2027 founding seat **1,000,000 CZK** (≈ €40.8k) with **100% study credit**; renewal **1,500,000 CZK/yr** held; **two equal invoices, net 30** ("expect a push to 60"; "**Net 30 will be pushed to 60 or 90** by a multinational subsidiary. Fallback: 45"); density escrow **<30 rights-clean stations on 30 Jun 2027 → second invoice never issued, first refunded in full**.

### E2. Which budget the product attaches to (three, sometimes four wallets)

- Trade marketing / sales ops — "**the biggest wallet**" (brands-plan §1; Crozier §3, §7).
- Research / insights — "research and measurement, annual, **renews on a fixed date**" (`why-not-nielseniq.md`).
- Brand + media — "Budget: brand and media" (`decks/brand-pitch-deck.html`, slide 03).
- Innovation / NPD — "Budget: research and NPD" (same deck).
- In-store retail media — "**a different wallet, faster approval path**" (`why-not-nielseniq.md`; `16-three-market-pushes.md` #16: "Campaign measurement (P3) sold from **MEDIA budget, not research budget** — a second wallet in the same company").
- Seat pitch rule: "**Seat pitch then names the budget, never 'innovation.'**" (`brands-plan.md` §1, R1).

### E3. The calendar: the Oct–Nov budget lock and the renewal date

`brands-plan.md` header: "**Oct–Nov budget lock is the calendar.**"
Crozier §10 — the *only* pacing message the advisor is given:
> "Brand budgets for next year lock in **October and November**. A brand not already in conversation by then is buying out of a locked budget, which usually means waiting a full cycle. So **first contact has to happen in September.** The next few weeks matter more than the following six months."
`brands-execution-guide.md` §3.1 Q3: "*Who owns that budget, and when do you plan next year's data & measurement spend?*" — "(**R3 — the renewal date is that account's calendar**)."
§10.3: "Every engaged brand's data/measurement renewal month, in one table… **This table is the 2027 account calendar** — cohort #2 timing, re-approach dates, and which brands can only ever be won in a specific month."
Crozier §8: "**Budget cartography.** Which budget funds this, whose signature clears it, what band, and when their planning cycle runs. This is research task R2 in the plan and **it is currently unfilled.** The renewal date **is** the account's calendar."

### E4. The two-budget-year mechanic (the actual close)

`brands-execution-guide.md` §8.1: "Convert the warmest verbal with the **two-document close**: 2026 study invoice + 2027 subscription order signed in one sitting… **One signature, two budget years** — this is the mechanic that makes the window reachable. Do not let them split it into 'let's do the study now and talk subscription in spring': that is how the seat becomes a study and the ARR goal dies." / "If procurement stalls the subscription, get the **study invoice** signed anyway."
Open dependency: "**R4 (19 Sep)**: how a brand commits unspent 2026 budget. Document 1 is drafted on the assumption that **a signed order plus a PO raised in 2026 commits the 2026 budget even where the invoice lands later.** Confirm with the advisor." (`paper/00-paper-set.md`)
Naming correction, same file: "Task 1.4 calls document 1 a '2026 study **invoice**'. **An invoice is not a signed instrument and commits nothing.** The thing that commits a brand's 2026 budget is a signed **order** against which a purchase order is raised."

### E5. THE ICP filter — signature power, not category or size

`blitzkrieg/brands/targets/DECISION.md` §5:
> "The filter is not size. It is: ***can this entity sign ~EUR 40k without the signature leaving the country?*** Applied to 43 unique legal entities, it sorts them cleanly into three bins, and the third bin is where the founder's hours get burned if the question is not asked."
Crozier §6 adds three secondary filters: "**Wallet, measured against filed net profit, not revenue.** EUR 40k = CZK 980,000. If that is a material fraction of net profit, the account prices at the floor and not above it." · "**Estate presence.**" · "**Speed.** Weeks to three months = a possible 2026 seat. Three to six months = a 2027 order."
Leave-behind §05 adds a fifth: "**Sits in a category with depth.** Roughly five payable brands in a category for the read to syndicate. One buyer is a study. Three or more is a currency."
The margin test that killed two accounts (`DECISION.md` §7d): Dallmayr Vending & Office k.s. net profit **CZK 1,139,000**, EUR 40k = **86%** → "Not a seat. Study only." AG FOODS CZK 3,956,000 → **25%** → study only. Comfortable: BAT 0.33%, Nestlé 0.64%, Intersnack 0.73%, CCHBC 0.24%, PMI **0.032%**.

### E6. The autonomy question — the exact wording, and where it goes in the call

Crozier §6, Bin C:
> "The question goes at the **end** of a methodology call, after the method has been explained and **before any price is named**:
> *'If you wanted to commission a Czech-only shopper-data study, roughly CZK 1m, from a new vendor, would that be your signature, or would it need to clear insights or procurement above Prague?'*
> A 'yes, that's me' moves the account up a tier. **A hesitation is worth more than another week of desk research.**"
`brands-execution-guide.md` §2.3 variant: "*'If you wanted to buy a €40k annual data subscription just for the Czech market, would that be your signature or would it go to the region?'*" — with: "**Ask it at the *end*, conversationally. Asked early it reads as qualification and closes people up.**" and "This may be **the real ICP filter — above category.**"

**Per-company variants (`DECISION.md` §5C) — the richest single source of approval-chain hypotheses:**
- **Philip Morris ČR** — "would that be your signature, or would **corporate affairs and global insights** need to clear it first, given the camera-based method?"
- **Mondelez CZ** — "does it route through the **CZ/HU/SK insights or procurement function**?"
- **Imperial Brands CR** — "How long after taking the country manager role would a new-vendor data purchase like this need to **escalate to Europe region**?"
- **BAT CZ/SK** — "does anything camera-based need a **privacy or legal sign-off above Prague**?"
- **Nestlé Česko** — "does anything privacy-adjacent route to a **group data-protection function** first?"
- **Coca-Cola HBC** — "or does **group Business Insights** have to approve a new measurement vendor?"
- **Unilever ČR** — "*Would this be funded out of **Customer Development** here, or does it have to come from a **CMI budget sitting at cluster level**?*" plus the note: "**Customer Development roles are physically staffed in Prague; CMI postings are Warsaw-based. CD is the money, so this question decides the account.**"
- **Intersnack a.s.** — "Does the **supervisory board in Belgium** need visibility on new external research spend?"
- **GGT CZ** — "does it need **Bratislava's sign-off under the Grafobal structure**?"
- **Traficon** — "or does **DT-holding's investment committee** need to see it first?"
- **AG Foods Group** — "is a purchase like this still entirely your and your father's call, or does the **board** have to sign off?"
- **Pivovar Svijany** — "Would this stay at the brewery, or would it go up to **LIF**?" (an *investiční fond* → "raises a real possibility of formal **investment-committee gating**").
- **Dallmayr CZ** — "would this be your decision or **Munich's**?"
- **Colgate-Palmolive / P&G** — "would it need **Warsaw CEE Hub / Bucharest CMK sign-off**?"
- **Haleon** — "would a Czech-only study still be something you sign, or does that now go through **Wael Kaskas' team**?"
- **S.C. Johnson** — "or would that go back to **Amsterdam or Racine**?"
- **Reckitt** — "Post-carve-out, is the remaining book still run out of Prague, or has category leadership moved with the **Essential Home separation**?"
- **Partner in Pet Food CZ** — "**For a market-research line specifically — not supply or manufacturing** — does the Czech entity sign, or does that go through **group commercial in France**?"
- **Farmina** — "If we invoice the Brno entity, does that get paid out of a Czech P&L, or does it route back to **Nola**?"
- **Big Shock** — "is that still inside the **Al-Namura family directly**, or has that moved to a **hired commercial director**?"

### E7. Bin A / Bin B verdicts, as the persona pacing instruction

Crozier §6:
> "**Bin A, genuine local pen (work these).** Owner-managed Czech or Slovak firms, or a country GM who is personally a registered statutory officer. Examples: CBI/DanCzek…, BAT CZ (**one signature covers CZ and SK**), Kofola…, Mattoni, VAFO, Plaček, Teta, GymBeam, Dermacol, Nutrend, Big Shock."
> "**Bin B, escalates to a cluster (do not pace these as founding-speed).** P&G (**Bucharest CEE intelligence hub, 20 years, a structural pattern rather than a fresh reorg**), Colgate (**Warsaw CEE hub owns budgeting**), Haleon (**RHCS cluster stood up July 2025**), L'Oreal / Coty / Henkel / Beiersdorf / Mars CZ (**sole officers resident in Poland, Warsaw or Vienna**), Farmina (**capitalised at exactly CZK 20,000, the textbook rep-office signal**), GGT (Bratislava holding)."
> "**the parent's nationality is not the filter, the budget's location is.** Sportisimo's private-label cluster is 100% Czech-owned and still fails, because the decision sits in **central merchandising** rather than in a discrete brand-marketing budget."
JTI pacing (`DECISION.md` §4): "**Assume the pen is not in the room.** The JTI objective is therefore a density requirement on record, the cluster GM's name, and a conditional LOI — **not a 2026 invoice**."
Colgate nuance worth carrying: "The Prague signature may exist; **the budget approval likely does not.**"

### E8. Capacity constraints that shape how many personas can be worked

Crozier §6 / `DECISION.md` §2: "**8 live enterprise negotiations maximum, about 50 founder-hours each**, which is 36 hours a week for 11 weeks. **Slot 9 does not exist.** And **no new enterprise logo after 15 Nov**, so the last useful first meeting is the week of 3 November."
`brands-plan.md` §4: "Seat cost budget: ≤50 founder-hours incl. procurement; **kill or downgrade any seat negotiation past 50h without a signature date.**"

---

## (f) THE RETAILER SIDE — what it forbids being given to brand-side people

### F1. The five retailer fears, two of which are real (`14-retailer-data-objection.md` §1)

> **The objection, verbatim:** "*We don't want brands to have our data — they'll use it to negotiate margins against us.*"
> | 1 Trading data leaks | **No** | "We never receive it… *We cannot leak what we never ingest*" |
> | 2 Brands see their category share inside this retailer | **Partly** | "Only if we publish named-retailer × brand-vs-competitor cuts. That is a **product design choice**" |
> | 3 Brands benchmark this retailer against a rival | **YES — and our syndication model creates it** | "This is the honest one" |
> | 4 The retailer's own data business is devalued | Partly | |
> | 5 **Disintermediation** — brands buy shopper insight without them | **YES, structurally** | "Under brands-only, brands pay us and not them" |

### F2. The toxic cut — the single named prohibition

> "**The toxic cut, named precisely:** *named retailer × named brand versus its named competitor.* **That single cut is what can be carried into a trade negotiation. Everything else is safe.**"
Contract controls the brand persona will therefore never get: trading-data firewall; **chain masking by default** ("brand-facing outputs report the *channel* ('Czech pet specialty'), never the named chain. Retailer-attributed cuts require **written, per-cut opt-in**"; honest caveat: "with only two chains in a channel, **masking is thin** — a brand can infer"); **no competitor-ranking cuts, ever**; **category and brand embargo** ("Private label is the usual one"); **publication lag** ("brand-facing reads run on a quarterly cadence with a lag… useless as ammunition in a live negotiation cycle"); **veto on every output**; **k≥25 suppression**; **90-day insight priority** ("the retailer has exclusive access to any read from their stores before it is syndicated").

### F3. n=1 chain — the claim ceiling

Crozier §9: "**One chain in a category is a channel read, never a market average or a benchmark.** Cross-chain claims require 2+ chains. This is the claim that would fail diligence."
`clients/superzoo/facts.yaml`: "masking is admitted 'thin' at two chains and in pet we have ONE, so '**the channel' is a synonym for Super zoo**, not an aggregate. Worse: the competitor beating them here is **PLAČEK'S OWN PRIVATE LABEL**, the single most sensitive cut in the entire framework."
`04-revenue-architecture.md` pet note: "a 'Czech pet-specialist channel' read whose only instrumented chain is Super zoo is **a Super zoo read wearing a mask**. Until that is cleared, **promise no competitor-level cuts**."

### F4. Rights status as of 4 Sep 2026 — the hard gate on every brand conversation

`DECISION.md` §8: "**Rights signed today: zero.** Super zoo has no disclosure greenlight at all. ČEPRO's is verbal, dated 26 August, and covers convening tobacco companies — not licensing data, and **not non-tobacco brands**. Teta and Sportisimo are pipeline. Every conversation this week is methodology-only, and the only legally usable evidence is **GymBeam, the anonymised sportstore report and pooled brand-worn observations**."
`clients/superzoo/facts.yaml`: "**NEVER approach pet brands with SuperZoo aggregates before the mandate is signed** (methodology-only talk allowed). Competitor chain = Pet Center — do not mention cross-chain benchmarking ambitions yet."
`brands-plan.md` §2 (rights trap): "pre-mandate, that teaser may **NOT** come from SuperZoo/EuroOil pilot data."

### F5. "Receipt-verified" is not universally deliverable

`DECISION.md` §8: "**'Receipt-verified' is not currently deliverable outside GymBeam.** EuroOil POS is modeled… until it exists the promise in the pitch line has to be scoped to the observation layer for every EuroOil-anchored account."
`messaging/objections.md`: "The tobacco materials use a modeled/illustrative POS layer, clearly labeled… **We never present modeled data as measured.**"
`clients/eurooil/facts.yaml` sensitivity 7: "no EuroOil shelf audit exists for any tobacco major. Every brand-level presence claim we make in these meetings… is an **ESTIMATE BUILT ON VERIFIED INPUTS** and must be labelled as such in the room."

### F6. Never adversarial-to-retailer in writing (C4)

`blitzkrieg/00-alignment.md`: "**C4 — 'Destroy Your Suppliers' playbook.** Fails the forwardability litmus catastrophically: **our ICP is those suppliers. One leaked deck kills the seats.** → Same content, canon language: 'a sharper hand in negotiations — our data strengthens your buying position.' **Verbal framing allowed; never a written artifact with that title.**"
`blitzkrieg/retailers/retailers-execution-guide.md` §1.3 (the retailer-facing category-manager one-pager, "A sharper hand"): "*'Our data strengthens your buying position — you'll know which shopper segments actually convert on each supplier's SKUs, in your own stores, before they do.'*" — with the same multi-threading doctrine mirrored on the retailer side: "**Never single-thread a chain.** The person who loves it is rarely the person who signs… **The category manager is usually the fastest internal champion** — they feel the supplier asymmetry daily — **but they cannot sign alone. Use them to reach the CMO, not as the closer.**"

### F7. Approach sequencing that limits who we may talk to at all

`05-ws-sales-partners.md`: "**Never approach a brand about a retailer's data before that retailer's mandate is signed.**" · Pet brands: "Only after the SuperZoo mandate, and *with* SuperZoo — **retailer-blessed, never over their head**."
`DECISION.md` §2 (Kofola): "The 26 Aug greenlight is **tobacco-scoped**; a Kofola approach needs its own disclosure step, and skipping it breaches the rule that earned us the greenlight in the first place."
Competition-law flag (unresolved): "a ČEPRO-hosted room containing PMI, BAT and JTI simultaneously is a **hub-and-spoke exposure**. Needs 30 minutes of counsel before it is proposed. UNVERIFIED." — "a single-major meeting convened by the retailer does not raise it."

---

## (g) CONTRADICTIONS AND STALE CLAIMS — which document should win

1. **"P&G told us" vs "a 10-year P&G alumnus told us" (the big one).** `brands-execution-guide.md` §2.4/§3.1/§3.4, `mm-base-strategy.md` §0/§4.1 and `06-ws-product-data.md` all present the "complementary" cap, quarterly-Excel preference, chat-interface request and CEE-locality rule as statements by P&G. The only underlying evidence is the 22 Jul 2026 advisor debrief in `data/claude reports/Retailer Win-Win…` attributed to "insider · 15+ yrs at brands, **10 at P&G**." **The report should win on provenance; the operational files win on the substance being actionable.** Persona work must not assert an existing P&G relationship.

2. **P&G's status: lighthouse account vs Bin B "do not pace as founding-speed."** `04-revenue-architecture.md` still carries "Drugstore @ Teta | **P&G** | T2 seat (converted lighthouse) | **4M CZK ≈ €163k**", and `05-ws-sales-partners.md` still runs the P&G budget-bucket hack with a "free read ≤15 Oct" gate. `DECISION.md` (2 Sep) §7b overrides: "**HPC should carry zero 2026 seat revenue in the plan**… P&G's intelligence function in Bucharest for two decades… **Do not let a single drugstore name be counted toward paying seats.**" **DECISION.md is newer and should win.** The revenue table has not been updated.

3. **Purina/Mars: "delete" vs "reprice and repitch" vs "2027 methodology-only."** Three successive positions inside three days. Newest (`DECISION.md` 2 Sep + `clients/superzoo/facts.yaml` "UPDATED 2026-09-02 (supersedes the 09-01 line, which said flatly 'do not pitch Purina or Mars')"): they stay on the list as **2027, methodology-only**, with the two banned sentences. `04-revenue-architecture.md`'s note ("These seats are NOT deleted — the pitch is") is the intermediate step and is itself overridden by DECISION.md's four-reason test. **DECISION.md + facts.yaml win.**

4. **Persona depth as a selling point.** `messaging/objections.md`, `templates/sales-deck-brand/SPEC.md` and the GTM report all say lead with measurement, not personas — but the GTM report §06 adds the segmentation that the other files drop: "**giants buy currency & measurement; mid-tier buys insight & personas**" and "most brands aren't P&G — your actual pipeline (tobacco, pet, beer, mid-tier) has nothing like P&G's persona depth and will value the raw insight." **Carry the segmented version; the flat "never lead with personas" over-corrects for the mid-tier ICP that the DECISION.md screen actually selected.**

5. **The LEGO one-pager is stale doctrine.** `clients/lego/delivered/2026-08-10-one-pager/lego-one-pager-en.html` sells "Real-time personalization… Each shopper sees the LEGO set they're **most likely to buy**" to a brand marketing audience — directly contradicted by **D2** (`02-decisions.md`, 19 Aug): "**Personalization demoted** to brand-funded deployment subsidy. Never the pitch, never sold standalone." And by Crozier §4's banned-words list. **D2 wins; the LEGO artifact is a historical document.**

6. **Founding-seat floor: €25k vs €40k.** `00-alignment.md` (1 Sep ruling) and D17: "The old ≥€70k / €25k-floor reading was a mix-up (2×€35k reverse-engineered from the combined goal)… **€25k sat in study territory and trained the complementary cap.**" **D17 wins everywhere.** Any older €25k/€35k figure is dead.

7. **Founding-seat cap: 3 per category vs 6 modelled pet buyers.** `13-revenue-model.md` §10 flags it: "`04-revenue-architecture.md` caps founding seats at **3 per category** in year 1, but the pet line models **6 buyers**… Proposed resolution: the cap applies to discounted *founding* seats (3 max); additional buyers are welcome at list price. **Confirm or overturn.**" Then `paper/00-paper-set.md` (4 Sep) re-cuts the scope unit entirely: "Scope unit is **channel x competitive set** (not a fixed taxonomy level): **3 seats per competitive set**, so petrol yields ~5 sets and pet yields 2." **The paper set is newest and is the contractual definition.**

8. **Pet seat depth: 3-per-category cap vs "one or two seats."** `clients/superzoo/facts.yaml` + `DECISION.md`: "**Pet realistically supports one or two brand seats, not the three-per-category founding cap.**" **Wins over the revenue table's six pet lines.**

9. **Retailer revenue share: 0% vs ≤40% vs 40–50%.** C1 in `00-alignment.md` is explicitly still **OPEN** ("C1 remains the open alignment item", 1 Sep). Crozier (3 Sep) presents a settled-sounding ladder: "0% share, free platform" opening, "**up to 40% on retailer-attributed products**", "**Never, at any rung:** a share of the cross-retailer aggregate." The older `stats.yaml` `rev_share_model` says "data/measurement products: retailer ~40-50%; retail-media revenue: retailer ~60-70%" (internal_only). **Crozier's ladder is the newest external-facing version; C1 is formally unruled.** Do not build persona economics on a fixed share.

10. **Who is present in a CZ organisation at all.** `targets.yaml` Unilever record carries a live warning that the org chart itself may be gone: "Unilever's global restructuring (ice-cream separation…, ~7,500 role reductions, EUR 800m cost programme, announced Mar 2025) **may have thinned CZ insights headcount. Verify who is left before pitching heavy co-design.**" This is the strongest in-repo support for the "rump org chart" instruction.

11. **Two Crozier-briefing internal tensions worth flagging.** §7 says never single-thread and always find three people; §6 says only 8 accounts × 50 hours exist. Three named people × 8 accounts = 24 relationships against 36 founder-hours/week. And §12 asks the advisor for "**who bought or blocked in-store analytics in CZ retail, at what price, in which job title**" — i.e. the persona set's job-title evidence base is, as of 3 Sep 2026, an outstanding ask to an advisor rather than banked research.

---

## H. THE GAPS A PERSONA RESEARCHER SHOULD NOT PAPER OVER

- **Zero named brand-side buyers on file.** Every `clients/*/facts.yaml` has `contacts: []`. Task 1.1 ("15+ named humans in CRM, each with role, use-case and a warm path") is not evidenced as done anywhere in the repo.
- **R1 (budget bands per use-case, due 12 Sep), R2 (autonomy, 19 Sep), R3 (renewal calendars, rolling), R4 (Q4 mechanics, 19 Sep), R5 (agency masters, 26 Sep), R7 (ICP one-pager, due 13 Sep), R8 (consumption format)** — all open. R2 is partially answered by `DECISION.md` §5 at *entity* level, not at *person* level.
- **The consumption-format answer exists for exactly one (proxy) brand:** "quarterly Excel is enough; real-time is not needed; chat is wanted for insight."
- **JTI role is unknown as of the meeting week:** "which JTI role attends (target: the KAM who runs the CEPRO/EuroOil account)" is listed under `to_confirm`.
- **Three named signers rest on titles, not registry positions** (`DECISION.md` §8): Cemal Berk Temuroglu (PMI), Martin Prokeš (CCHBC), and the "private-label director signs and Rejchrt approves" inference at Plaček. "**Verify before addressing correspondence to any of them.**"
- **Apparel giants were never researched at all** — "The founder deprioritised them, so they are absent from all 181 records."