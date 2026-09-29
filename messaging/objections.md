# Objection & Q&A bank

Standard answers — reuse verbatim, adapt tone to audience. CZ versions for retailer/brand
meetings, EN for investors/partners.

## "Is this GDPR-legal? Isn't this surveillance?" (everyone, always)

EN: "By design, we cannot identify anyone. No facial recognition, no biometric templates,
no re-identification, no cross-visit tracking — sessions are opaque one-time observations.
Everything leaves the system as aggregates of 25+ people. We describe audiences, not
persons. This is also why the EU is our moat: the compliant version of this data can only
be built the way we built it."
CZ: "Ze své podstaty nedokážeme nikoho identifikovat. Žádné rozpoznávání obličejů, žádné
biometrické šablony, žádné sledování mezi návštěvami. Vše opouští systém jen jako agregáty
25+ osob. Popisujeme publika, ne osoby."

## "Footfall counters / heatmaps / camera analytics already exist" (investors, retailers)

"Counters track bodies — a number at the door. We describe shoppers (88 attributes: age
band, style, brands worn, basket) and match them to actual transactions (92% at our pilot).
Counting is solved and cheap; understanding who buys is neither. Nobody else occupies
depth × transaction-link."

## "We don't want brands to have our data" (retailers — THE core fear)

CZ: "Souhlasíme, a proto to stavíme obráceně. Vaše obchodní data (marže, prodejnost,
elasticita) značky nikdy neuvidí, to je smluvní firewall. Kontrolu máte Vy: každý výstup,
ve kterém jste jmenováni, schvalujete a náleží Vám z něj podíl na výnosech. Anonymní
agregát, ve kterém identifikovatelní nejste, slouží jako měření celého kanálu. My jsme
infrastruktura. Neprodáváme Vaše data, budujeme Vám nový příjem."

> Interní pozn.: nikdy neslibovat "většinový podíl" ani "právo veta na každý výstup".
> Veto se váže výhradně na výstupy, ve kterých je Řetězec jmenován (Labelled Output).
> Viz `blitzkrieg/retailers/DPA preparation/00-clause-architecture-memo.md`.

## "Proč je to zdarma? Kde je háček?" (retailers — hlavní námitka bezplatného rámce)

Odpovězte doslova a bez okolků: "Háček je v tom, že potřebujeme Vaše svolení používat anonymní
agregát z Vašich prodejen. To je celá cena. Surová data zůstávají Vaše, každý výstup, kde jste
jmenovaní, schvalujete Vy, a z toho, co za přehledy zaplatí značky, Vám jde podíl."

## "A co s tím máme dělat? Nemáme na to lidi." (retailers — stone 7)

"Nic s tím dělat nemusíte. Neděláme Vám doporučení, co změnit na prodejně, a nechceme za to nést
odpovědnost. Dostanete data a dostanete peníze. Jestli a jak to použijete, je jenom Vaše věc.
Žádný projekt, žádný tým, žádná změna provozu, žádné KPI, které by někdo musel obhajovat."

> Interní pozn.: tohle je nejsilnější argument pro top management a v žádném artefaktu zatím není.
> Měsíční "action brief" (tři změny + očekávaný dopad v Kč) je od 22. 9. 2026 zrušený.

## "Kolik je ten podíl?" (retailers)

"Podíl z toho, co zaplatí značky za výstupy, kde jste jmenovaní, plus platforma zdarma. Číslo patří
do smlouvy a odvíjí se od počtu prodejen."

> Interní pozn.: **nikdy neříkat procento** (rozhodnutí zakladatele, 22. 9. 2026), a podíl nikdy
> nenabízet sám. Číslo existuje jen v DPA clause memu a v Příloze 3.

## "Chtěl by to vůbec někdo? Kdo to zaplatí?" (retailers)

"Vy ne, platí značky. S velkými značkami ve Vaší kategorii jsme v aktivním kontaktu a přímo nám
řekly, že o ta data zájem mají. Podepsané zatím není nic. A že se za tenhle typ dat na trhu platí,
si můžete ověřit sám: stát dává skoro 4 mil. Kč ročně za jeden odběr dat o tom, co se v obchodech
prodává, a je to ve veřejném registru zakázek."

> Interní pozn.: zájem značek říct smíte, **zaplacené peníze ani committnuté rozpočty ne** (nula LOI,
> nula podepsaných práv). Značky v tomhle kontextu nejmenujte a neříkejte, kdo schůzky zprostředkoval.

## "P&G/big brands already have deep personas" (sophisticated brands)

"True — which is why we don't lead with personas. What no one has, including P&G, is
closed-loop in-store measurement: which shopper segment bought which SKU, at the shelf,
matched to the receipt, in near-real-time. Personas are the bonus; measurement is the product."

## "Why won't NIQ just do this?" (investors)

"NIQ's business is POS feeds and panels — they have no in-store visual layer and no legal
path to build one quickly in the EU. We're complementary ('who' on top of their 'what'),
which makes them a distribution partner or acquirer, not a competitor. And the rights we
sign with retailers are perpetual — the portfolio compounds."

## "Is the EuroOil POS data real?" (diligence)

"The tobacco materials use a modeled/illustrative POS layer, clearly labeled. Real
receipt-level matching is live at GymBeam (92% of orders) and SuperZoo; the EuroOil feed
integration is scoped. We never present modeled data as measured."

## "What about the retailer sales cycle? These are 2-year deals" (investors)

"Tier-1 grocery, yes — which is why we don't start there. Our pipeline is founder-led and
mid-size chains where one person can say yes: our first 8 chains took 3.5 months to engage.
Giants come later, approached with a proven multi-chain product and brand demand in hand."
