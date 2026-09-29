// Teaser cards v2: one message, one chart, one CTA. Every number is real.
// data: 'pos' = receipts matched to visits (pokladní + vizuální data) · 'visual' = camera attributes only.
// Sources: data/superzoo_findings.md + clients/superzoo/delivered/personas/superzoo-campaign-effect.html (pet),
// prod DB visitors_v2 × visitors_normalized_v2, forecourt store, engaged ≥5 s, staff excluded, 28 May–25 Sep 2026
// (drinks, tobacco counter), prod DB mall store (make-up), clients/cpi/delivered/2026-09-13-data-report (malls).
// Retailers are never named on a card.
window.CARDS = [];
const add = (...cs) => window.CARDS.push(...cs);

/* ---------------------------------------------------------------- PET (POS + visual) */
add({
  id: 'pet-brit-same-shopper', track: 'pet', for: ['VAFO'], data: 'pos', n: '1 specializovaná prodejna, 28 dní, 4 712 účtenek',
  pill: 'Krmivo pro psy a kočky',
  headline: 'Brit a privátní značka mají stejného zákazníka.',
  sub: 'Podíl skupin mezi kupujícími se liší nejvýš o 3,5 procentního bodu.',
  stat: { v: '1 z 5', l: 'košíků s Brit obsahuje i privátní značku' },
  chart: { type: 'pairs', legend: ['Kupující Brit', 'Kupující privátní značky'], unit: ' %', rows: [
    { label: 'Ženy 30+', a: 30.1, b: 30.5 }, { label: 'Mladé ženy 20+', a: 22.0, b: 18.5 }, { label: 'Muži 40+', a: 22.0, b: 20.1 } ] },
});
add({
  id: 'pet-ontario-treat', track: 'pet', for: ['Plaček (vlastní značky)'], data: 'pos', n: '912 košíků s Ontario, 627 s Brit',
  pill: 'Vlastní značky · krmivo',
  headline: 'Ontario se u pokladny prodává jako pamlsek, ne jako levnější Brit.',
  sub: 'Podíl košíků, ve kterých je značka jen v podobě pamlsků.',
  stat: { v: '44 %', l: 'košíků s Ontario jsou jen pamlsky' },
  chart: { type: 'bars', unit: ' %', max: 50, rows: [ { label: 'Ontario', v: 44.1, hi: true }, { label: 'Brit', v: 16.1 } ] },
});
add({
  id: 'pet-trixie-small-pets', track: 'pet', for: ['Trixie'], data: 'pos', n: '564 košíků s Trixie',
  pill: 'Potřeby pro zvířata',
  headline: 'Trixie se nejčastěji kupuje k potřebám pro hlodavce a ptáky.',
  sub: 'Co je v košíku spolu s Trixie. Index, 100 = průměrný košík v prodejně.',
  stat: { v: '3×', l: 'častěji potřeby pro drobná zvířata' },
  chart: { type: 'bars', max: 330, rows: [ { label: 'Drobná zvířata', v: 315, hi: true }, { label: 'Ptáci', v: 304, hi: true }, { label: 'Suché krmivo pro psy', v: 32 } ] },
});
add({
  id: 'pet-tetra-men40', track: 'pet', for: ['Spectrum Brands'], data: 'pos', n: '190 košíků s Tetra',
  pill: 'Akvaristika',
  headline: 'Tetru kupují muži po čtyřicítce.',
  sub: 'Podíl mužů 40+ mezi kupujícími Tetra a mezi všemi kupujícími krmiva.',
  stat: { v: '1,6×', l: 'víc mužů 40+ než v průměru' },
  chart: { type: 'bars', unit: ' %', max: 35, rows: [ { label: 'Kupující Tetra', v: 31.7, hi: true }, { label: 'Průměr prodejny', v: 19.8 } ] },
});
add({
  id: 'pet-promo-3plus1', track: 'pet', for: ['VAFO', 'Trixie', 'Plaček (vlastní značky)', 'všechny pet značky'], data: 'pos', n: '8 dní před a 8 dní po spuštění akce',
  pill: 'Akce 3+1 · pamlsky',
  headline: 'Akce 3+1 prodala víc kusů stejným lidem.',
  sub: 'Kusů psích pamlsků na položku účtenky před a po spuštění akce. Nové kupující nepřivedla.',
  stat: { v: '+11 %', l: 'kusů na položku, ne kupujících' },
  chart: { type: 'bars', unit: ' ks', max: 2.3, rows: [ { label: 'Po spuštění akce', v: 2.04, hi: true }, { label: 'Před akcí', v: 1.83 } ] },
});

/* ---------------------------------------------------------------- DRINKS at the forecourt (visual) */
add({
  id: 'fc-monster-young', track: 'forecourt', for: ['Coca-Cola HBC (Monster)', 'Red Bull ČR', 'Maspex (Tiger)'], data: 'visual', n: '1 932 návštěv s energy drinkem v ruce',
  pill: 'Energetické nápoje · čerpací stanice',
  headline: 'Monster si z pumpy odnáší mladší zákazník než Red Bull.',
  sub: 'Podíl lidí do 30 let mezi těmi, kdo odcházejí se značkou v ruce.',
  stat: { v: '46 %', l: 'lidí s Monsterem je pod 30 let' },
  chart: { type: 'bars', unit: ' %', max: 50, rows: [ { label: 'Monster', v: 46.0, hi: true }, { label: 'Red Bull', v: 33.3 }, { label: 'Tiger', v: 32.9 } ] },
});
add({
  id: 'fc-tiger-morning', track: 'forecourt', for: ['Maspex (Tiger)', 'Red Bull ČR', 'Coca-Cola HBC (Monster)'], data: 'visual', n: '3 245 návštěv s nápojem v ruce',
  pill: 'Energetické nápoje · čerpací stanice',
  headline: 'Ráno před devátou vede na pumpě Tiger.',
  sub: 'Podíl lidí, kteří se značkou v ruce přijdou mezi 5. a 9. hodinou.',
  stat: { v: '30 %', l: 'lidí s Tigerem přijde před 9. hodinou' },
  chart: { type: 'bars', unit: ' %', max: 35, rows: [ { label: 'Tiger', v: 30.1, hi: true }, { label: 'Monster', v: 24.0 }, { label: 'Red Bull', v: 22.8 }, { label: 'Coca-Cola', v: 14.2 } ] },
});
add({
  id: 'fc-cola-night', track: 'forecourt', for: ['Coca-Cola HBC', 'Kofola', 'Mattoni 1873 (Pepsi)'], data: 'visual', n: '3 045 návštěv s nápojem v ruce',
  pill: 'Nealko nápoje · čerpací stanice',
  headline: 'Coca-Cola je na pumpě noční nápoj.',
  sub: 'Podíl lidí, kteří se značkou v ruce přijdou mezi 22. a 5. hodinou.',
  stat: { v: '18,5 %', l: 'lidí s Coca-Colou přijde po 22. hodině' },
  chart: { type: 'bars', unit: ' %', max: 20, rows: [ { label: 'Coca-Cola', v: 18.5, hi: true }, { label: 'Monster', v: 13.3 }, { label: 'Pepsi', v: 10.7 }, { label: 'Red Bull', v: 7.1 } ] },
});
add({
  id: 'fc-pepsi-older', track: 'forecourt', for: ['Mattoni 1873 (Pepsi)', 'Coca-Cola HBC'], data: 'visual', n: '1 472 návštěv s colou v ruce',
  pill: 'Cola · čerpací stanice',
  headline: 'Pepsi si z pumpy odnáší starší zákazník než Coca-Colu.',
  sub: 'Podíl lidí nad 40 let mezi těmi, kdo odcházejí se značkou v ruce.',
  stat: { v: '45 %', l: 'lidí s Pepsi je nad 40 let' },
  chart: { type: 'versus', title: 'Nad 40 let', a: { v: '45 %', k: 'Pepsi' }, b: { v: '38 %', k: 'Coca-Cola' } },
});

/* ---------------------------------------------------------------- TOBACCO counter at the forecourt (visual) */
add({
  id: 'tob-vape-women', track: 'tobacco', for: ['BAT ČR', 'Philip Morris ČR', 'JTI', 'Imperial Brands CR', 'CBI / DanCzek', 'distributoři'], data: 'visual', n: '390 návštěv s vapem nebo cigaretou v ruce',
  pill: 'Nikotin · čerpací stanice',
  headline: 'Vape na pumpě nedrží typický kuřák.',
  sub: 'Podíl žen mezi lidmi, které kamera vidí s vapem nebo s cigaretou v ruce.',
  stat: { v: '3×', l: 'víc žen s vapem než s cigaretou' },
  chart: { type: 'versus', title: 'Podíl žen', a: { v: '38 %', k: 'S vapem' }, b: { v: '13 %', k: 'S cigaretou' }, note: 'Do 30 let: 32 % s vapem, 12 % s cigaretou' },
});
add({
  id: 'tob-night-counter', track: 'tobacco', for: ['BAT ČR', 'Philip Morris ČR', 'JTI', 'Imperial Brands CR', 'CBI / DanCzek', 'PEAL / JIP / GGT'], data: 'visual', n: '313 094 návštěv',
  pill: 'Pokladna · čerpací stanice',
  headline: 'Po 22. hodině stojí u pokladny jiný zákazník.',
  sub: 'Podíl zákazníků do 30 let podle denní doby.',
  stat: { v: '36 %', l: 'zákazníků po 22. hodině je pod 30 let' },
  chart: { type: 'line', unit: ' %', min: 10, max: 42, points: [
    { x: '5–9 h', v: 19.3, pill: true }, { x: '9–17 h', v: 19.9 }, { x: '17–22 h', v: 28.0 }, { x: '22–5 h', v: 35.9, pill: true, hi: true } ] },
});

/* ---------------------------------------------------------------- COSMETICS (visual, shopping centre) */
add({
  id: 'hpc-makeup-50', track: 'hpc', for: ['Dermacol', 'Gabriella Salvete', 'Sarantis', 'L\u2019Oréal', 'Beiersdorf', 'Coty'], data: 'visual', n: '22 788 návštěv žen',
  pill: 'Kosmetika · nákupní centrum',
  headline: 'Zlom v make-upu nepřichází ve čtyřiceti. Přichází po padesátce.',
  sub: 'Ženy s viditelným make-upem podle věku.',
  stat: { v: '15 %', l: 'žen 50+ nosí make-up (40+: 24 %)' },
  chart: { type: 'bars', unit: ' %', max: 30, rows: [ { label: '20–29 let', v: 28.3 }, { label: '30–39 let', v: 26.5 }, { label: '40–49 let', v: 23.7 }, { label: '50–59 let', v: 15.3, hi: true }, { label: '60+ let', v: 5.3 } ] },
});

/* ---------------------------------------------------------------- SHOPPING CENTRES (visual) */
add({
  id: 'mall-who-buys', track: 'mall', data: 'visual', n: '92 456 vstupů za 14 dní',
  pill: 'Nákupní centrum',
  headline: 'Dospělí odchází s nákupem dvakrát častěji než teenageři.',
  sub: 'Podíl návštěv, které končí s nákupem v ruce.',
  stat: { v: '32 %', l: 'návštěv končí s nákupem' },
  chart: { type: 'bars', unit: ' %', max: 42, rows: [ { label: 'Mainstreamoví dospělí', v: 38, hi: true }, { label: 'Maminky s dětmi', v: 37, hi: true }, { label: 'Teenageři ve streetwearu', v: 19 } ] },
});
add({
  id: 'mall-weekend', track: 'mall', data: 'visual', n: '92 456 vstupů za 14 dní',
  pill: 'Nákupní centrum · víkend',
  headline: 'Víkend nepřivádí jen víc lidí. Přivádí jiné lidi.',
  sub: 'Změna počtu návštěv o víkendu proti všednímu dni.',
  stat: { v: '+43 %', l: 'sportovně oblečených o víkendu' },
  chart: { type: 'versus', title: 'Víkend proti všednímu dni', a: { v: '+43 %', k: 'Sportovně oblečení' }, b: { v: '−34 %', k: 'Upravení profesionálové' } },
});
add({
  id: 'mall-logos', track: 'mall', data: 'visual', n: '92 456 vstupů za 14 dní',
  pill: 'Nákupní centrum · útrata',
  headline: 'Prémiový zákazník loga nenosí.',
  sub: 'Upravení profesionálové: podíl s prémiovým signálem a podíl s výrazným logem.',
  stat: { v: '4,5×', l: 'víc prémiových než s logem' },
  chart: { type: 'versus', title: 'Upravení profesionálové', a: { v: '13,2 %', k: 'Prémiový signál' }, b: { v: '2,9 %', k: 'Výrazné logo' } },
});
add({
  id: 'mall-who-buys-en', lang: 'en', track: 'mall', data: 'visual', n: '92,456 entries in 14 days',
  pill: 'Shopping centre',
  headline: 'Adults leave with a purchase twice as often as teens.',
  sub: 'Share of visits that end with a purchase in hand.',
  stat: { v: '32%', l: 'of visits end with a purchase' },
  chart: { type: 'bars', unit: '%', max: 42, rows: [ { label: 'Mainstream adults', v: 38, hi: true }, { label: 'Moms with kids', v: 37, hi: true }, { label: 'Teens in streetwear', v: 19 } ] },
});
add({
  id: 'mall-weekend-en', lang: 'en', track: 'mall', data: 'visual', n: '92,456 entries in 14 days',
  pill: 'Shopping centre · weekend',
  headline: 'Weekends don’t just bring more people. They bring different people.',
  sub: 'Change in visits at weekends versus weekdays.',
  stat: { v: '+43%', l: 'shoppers in sportswear at weekends' },
  chart: { type: 'versus', title: 'Weekend vs weekday', a: { v: '+43%', k: 'In sportswear' }, b: { v: '−34%', k: 'Polished professionals' } },
});
add({
  id: 'mall-logos-en', lang: 'en', track: 'mall', data: 'visual', n: '92,456 entries in 14 days',
  pill: 'Shopping centre · spend',
  headline: 'The premium shopper doesn’t wear logos.',
  sub: 'Polished professionals: share with a premium signal vs share with a loud logo.',
  stat: { v: '4.5×', l: 'more premium than logo' },
  chart: { type: 'versus', title: 'Polished professionals', a: { v: '13.2%', k: 'Premium signal' }, b: { v: '2.9%', k: 'Loud logo' } },
});
