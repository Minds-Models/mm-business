// Persona cards: one ICP persona, its number-one pain as a question, one answer built on the deck segments.
// Numbers: chat.mindsmodels.ai dataset (reproducible live), except `insights` (real pilot) and `mall` (real pilot).
window.CARDS = [];
const add = c => window.CARDS.push(c);

add({ id: 'p-owner', persona: 'Majitel / jednatel', data: 'sample',
  pill: 'Pro majitele a vedení', faces: ['value_senior', 'suburban_parent', 'office_professional'],
  q: '„Které zákazníky mi bere privátní značka?“',
  headline: 'Privátní značka vám bere šetřivé seniory a rodiče. <em>Ostatní zůstávají u vás.</em>',
  sub: 'Braňte dvě skupiny, ne celý regál.',
  stat: { v: '46 %', l: 'útraty šetřivých seniorů směřuje do privátní značky' },
  chart: { type: 'split', left: '0 %', right: '100 % útraty', avg: 9.3, avgLabel: 'průměr prodejny 9 %', rows: [
    { seg: 'value_senior', v: 46.0, hi: true }, { seg: 'suburban_parent', v: 33.8, hi: true }, { seg: 'office_professional', v: 0.1 } ] } });

add({ id: 'p-trade', persona: 'Trade marketing', data: 'sample',
  pill: 'Pro trade marketing', faces: ['dawn_trades', 'night_dorm', 'young_streetwear'],
  q: '„Které akce jsou vyhozené peníze?“',
  headline: 'Řemeslníci kupují Monster i bez akce. <em>Slevu dostávají zbytečně.</em>',
  sub: 'Akce přiláká studenty a mladé zákazníky. Řemeslníkům jen zlevníte jejich ranní zvyk.',
  stat: { v: '49,5 %', l: 'tržeb od řemeslníků za Monster proběhlo ve slevě' },
  chart: { type: 'dumbbell', legend: ['bez akce', 'v akci'], max: 80, unit: ' %', ticks: [0, 20, 40, 60, 80], scale: 'podíl kupujících energy drinku, kteří vezmou Monster', rows: [
    { seg: 'night_dorm', a: 42.4, b: 67.5 }, { seg: 'young_streetwear', a: 47.0, b: 72.8 }, { seg: 'dawn_trades', a: 37.8, b: 41.4 } ] } });

add({ id: 'p-sales', persona: 'Obchodní ředitel / KAM', data: 'sample',
  pill: 'Pro obchodní ředitele a KAM', faces: ['corridor_commuter', 'dawn_trades', 'everyday_mainstream'],
  q: '„S čím přijdu do ročních jednání, co řetězec nemá?“',
  headline: 'Dva ze tří dojíždějících řidičů odejdou <em>bez energetického nápoje.</em>',
  sub: 'Dojíždějící řidiči tvoří 14 % návštěv. Chladicí box u vchodu je prodejní argument, který z čísel řetězce nevyčtete.',
  stat: { v: '65 %', l: 'dojíždějících řidičů odejde bez energy drinku' },
  chart: { type: 'figures', scale: 'z 10 návštěv segmentu jich tolik odchází s energetickým nápojem', rows: [
    { seg: 'dawn_trades', v: 65.4 }, { seg: 'young_streetwear', v: 54.2 }, { seg: 'corridor_commuter', v: 34.6, hi: true } ] } });

add({ id: 'p-brand', persona: 'Vedení značky / marketing', data: 'sample',
  pill: 'Pro vedení značky a marketing',
  q: '„Pro koho vlastně tvoříme zadání kampaně?“',
  headline: 'Řemeslníci: ranní zákazník, kterého akce nepohne. <em>Kupuje zvykem.</em>',
  chart: { type: 'persona', seg: 'dawn_trades', share: '5,2 %', shareLabel: 'všech návštěv',
    role: 'Reflexní vesta, montérky s logem firmy, pracovní boty, opálené ruce',
    cols: [
      { title: 'Co kupují', items: ['<b>65 %</b> návštěv končí s energy drinkem', 'Monster 2×, pečivo, Rexona', 'akce na Monster: jen <b>+10 %</b>'] },
      { title: 'Kdy a co kouří', items: ['<b>75 %</b> ranních návštěv pumpy (5–8 h)', '<b>32 %</b> kupujících Imperial', '<b>26 %</b> kupujících Winston'] } ] } });

add({ id: 'p-privatelabel', persona: 'Vlastní značky řetězců', data: 'sample',
  pill: 'Pro vlastní značky', faces: ['corridor_commuter', 'gym_regular', 'city_break_tourist'],
  q: '„Bere moje značka zákazníky konkurenci, nebo kanibalizuje samu sebe?“',
  headline: 'Pět zákaznických skupin vaši značku míjí. <em>Tam je prostor pro růst.</em>',
  sub: 'Dnes stojíte na seniorech a rodičích. Dojíždějící, sportovci i turisté volí zavedené značky.',
  stat: { v: '0,2 %', l: 'útraty dojíždějících řidičů směřuje do privátních značek' },
  chart: { type: 'split', left: '0 %', right: '100 % útraty', rows: [
    { seg: 'value_senior', v: 46.0 }, { seg: 'suburban_parent', v: 33.8 }, { seg: 'corridor_commuter', v: 0.2, hi: true } ] } });

add({ id: 'p-distributor', persona: 'Distributor / dovozce', data: 'sample',
  pill: 'Pro distribuci a dovozce', faces: ['dawn_trades', 'night_dorm'],
  q: '„Proč se dané zboží prodává a kdo přesně ho kupuje?“',
  headline: 'Jedna pumpa, dva různé světy. <em>Ráno nakupuje jiný zákazník než v noci.</em>',
  sub: 'Skladba sortimentu podle denní doby, ne podle průměru. Tyto informace vaši dodavatelé nemají.',
  chart: { type: 'daystrip', max: 80, series: [
    { seg: 'dawn_trades', note: '5–8 h', pts: [8, 11, 11, 6, 10, 75, 73, 76, 37, 36, 40, 16, 18, 20, 16, 19, 17, 8, 9, 9, 9, 10, 10, 6] },
    { seg: 'night_dorm', note: 'po 21 h', pts: [58, 59, 52, 59, 56, 1, 1, 0, 0, 1, 1, 2, 2, 4, 5, 6, 4, 21, 20, 22, 20, 58, 55, 63] } ] } });

add({ id: 'p-tobacco', persona: 'Tabákové značky · obchod a kategorie', data: 'sample',
  pill: 'Pro tabákové značky · obchod a kategorie', faces: ['gym_regular', 'value_senior', 'young_streetwear'],
  q: '„Kdo na pumpách skutečně přechází na alternativy bez kouře?“',
  headline: 'Sportovci už přešli na alternativy. <em>Šetřiví senioři ještě ani nezačali.</em>',
  sub: 'Každá šestá účtenka s nikotinem nese cigarety i sáčky zároveň. Přechod se odehrává přímo u pokladny.',
  stat: { v: '85 %', l: 'útraty sportovců za nikotin tvoří produkty bez kouře' },
  chart: { type: 'split', left: '0 %', right: '100 % útraty za nikotin bez kouře', rows: [
    { seg: 'gym_regular', v: 85.3, hi: true }, { seg: 'value_senior', v: 12.0 } ] } });

add({ id: 'p-insights', persona: 'Zákaznický výzkum a data', data: 'pos',
  pill: 'Pro zákaznický výzkum a data', faces: ['dawn_trades', 'office_professional', 'gym_regular'],
  q: '„Jak víte, že je to pravda?“',
  headline: 'Každý nákup má svého zákazníka. <em>Bez jména, bez tváře.</em>',
  sub: 'Účtenka se páruje s konkrétní návštěvou, ne s osobou. Všechny výstupy vyhodnocujeme pouze ve skupinách od 25 lidí.',
  stat: { v: '2 622', l: 'nákupů spárovaných za 21 dní' },
  chart: { type: 'grid100', on: 92, caps: [ { v: '92 ze 100', l: 'účtenek spárováno s konkrétní návštěvou' }, { v: '0', l: 'jmen, tváří a identit' } ] } });

add({ id: 'p-mall', persona: 'Nákupní centra · pronájem a správa', data: 'visual',
  pill: 'Pro vedení nákupních center', faces: ['mall_main', 'mall_moms', 'mall_teens'],
  q: '„Co vám běžná návštěvnost neprozradí?“',
  headline: 'Kdo z návštěvníků nakupuje. <em>Dospělí dvakrát častěji než mladí.</em>',
  sub: 'Nájemci platí za nakupující zákazníky, ne za pouhé průchody chodbou.',
  stat: { v: '32 %', l: 'návštěv končí skutečným nákupem' },
  chart: { type: 'figures', scale: 'z 10 návštěv jich tolik odchází s nákupem v ruce', rows: [
    { seg: 'mall_main', v: 38, hi: true }, { seg: 'mall_moms', v: 37 }, { seg: 'mall_teens', v: 19 } ] } });
