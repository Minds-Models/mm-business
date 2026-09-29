# Persona → number-one pain → the card that answers it · v1 · 25 Sep 2026

Sources: `icp/bdr-target-personas.md`, `icp/icp-one-pager-v1.md`, `icp/bdr-icp.md`, the landing page's
three brand questions (`analytics-assistant-fe/src/data/audiences.ts`), and the deck segments.
Cards: `cards/persona.js` → `cards/out/persona/<id>__{sq,pt,slide}.png` + `<id>__slide.pdf` (clickable button). The exact card wording lives in `persona.js`; the table below is the reasoning.

**The rule for every card:** the headline answers a question the persona asks *about money or a
decision this quarter*, and the answer only exists because we join **the receipt to the shopper**
(POS × segment). "Your buyers are older" is not a card; "your promo discount goes to people who'd
buy anyway" is.

| Persona | Number-one pain (from the ICP research) | Their question | Why only we can answer it | Card |
|---|---|---|---|---|
| **Owner / jednatel** | The discounter's private label eating his tier from below, and he only knows the people who *did* buy him | *„Komu mi privátní značka bere zákazníky?"* | Sell-out shows the loss; it can't show **which shopper** went to private label | `p-owner`: Privátní značka vám bere jen Value Senior a rodiče (46 % / 34 % útraty) |
| **Trade / shopper marketing** | Can't prove what in-store money bought; 58 % of the category moves on promo and he suspects most of it is waste | *„Které akce jsou vyhozené peníze?"* | Promo flag on the receipt × the segment who bought it: who moves on a deal and who'd buy anyway | `p-trade`: Dawn Trades kupují Monster i bez akce, slevu dostávají stejně (×1,10; 49,5 % útraty přes slevu) |
| **Sales director / KAM** | Losing the shopper argument to his own customers at the annual negotiation; trade investment with no proof | *„S čím přijdu do ročních jednání, co řetězec nemá?"* | Visits that end *without* the category, by segment: the growth pool the chain's sell-out never shows | `p-sales`: Dva ze tří dojíždějících odejdou bez energy drinku |
| **Brand / marketing manager** | The target definition in the brief is years old; the agency builds media from it | *„Pro koho vlastně píšu brief?"* | Who actually buys, described in the language agencies buy in (segments, not demographics) | `p-brand`: Monster kupuje student v tričku s kapelou a motorkář s helmou v ruce (student 2,3×, kapela 1,9×, helma 1,9× proti průměru; Nike, adidas, H&M, Zara na sobě). Real stores also show specific bands (AC/DC, Metallica, Sabaton, Rammstein), Czech team jerseys (Sparta, Slavia, Bohemians), moto gear (Alpinestars, Dainese, Harley), workwear logos (DHL, DPD, Engelbert Strauss) and wristbands: the sub-line says so |
| **Private-label lead (retailer)** | Can't separate cannibalisation from share-taking; nobody sells him a read of his own shopper | *„Bere moje značka zákazníky značkám, nebo jen sama sobě?"* | Private-label share of spend by segment: where it wins, and where brands are safe | `p-privatelabel`: Vaše privátní značka má jen dva zákazníky |
| **Distributor / importer** | Argues assortment with sell-out; can't tell the principal *why* an item moves | *„Proč se ta položka hýbe, a komu ji prodávám?"* | Segment × daypart × receipt at one address | `p-distributor`: Jedna pumpa, dva obchody (ráno 75 % Dawn Trades, v noci 58 % Night Dorm) |
| **Tobacco trade / category** | The smoke-free transition is restructuring the category and nobody sees who is switching at the point of purchase | *„Kdo na pumpě opravdu přechází na smoke-free?"* | Nicotine format on the receipt × segment | `p-tobacco`: Gym Regular už přešel (85 %), Value Senior ani nezačal (12 %) |
| **Consumer insights / CMK** | "We kept adding data sources without governance"; will veto anything they can't validate | *„Jak víte, že je to pravda?"* | Receipt-to-visit match rate, no identities | `p-insights`: 92 % účtenek spárováno, 0 jmen a tváří (real pilot) |
| **Mall asset / leasing** | Assets valued and let on footfall volume; can't show a tenant who buys | *„Co mi footfall neřekne?"* | Share of visits ending with a purchase, per audience | `p-mall`: Dospělí nakupují dvakrát častěji než teenageři (real pilot) |

## Data on these cards

- **7 cards** show the answer the live chat gives on its anonymised sample (chat.mindsmodels.ai);
  the footer says *Ukázka odpovědi z chat.mindsmodels.ai*, and the button takes them to the same
  answer. That is the "we can do this" message without claiming it was measured in their stores.
- **`p-insights` and `p-mall`** are real pilot numbers (footer: *Reálná data z prodejen v Česku*).

## What never goes on a card

Shelf behaviour (picked up / put back / compared), a retailer's name, a brand's share against a
named competitor in a named chain.
