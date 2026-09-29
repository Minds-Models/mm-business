// One demo card per chart type (numbers: chat.mindsmodels.ai dataset; insights card: real pilot).
window.CARDS = [];
const add = c => window.CARDS.push(c);

add({ id: 'v1-dumbbell', data: 'sample', pill: 'Pro trade marketing · promo', faces: ['night_dorm', 'young_streetwear', 'dawn_trades', 'gym_regular', 'value_senior'],
  q: '„Které akce na Monster jsou vyhozené peníze?“',
  headline: 'Řemeslníci kupují Monster i bez akce. <em>Slevu dostávají stejně.</em>',
  stat: { v: '49,5 %', l: 'útraty řemeslníků za Monster šlo přes slevu' },
  chart: { type: 'dumbbell', legend: ['bez akce', 'v akci'], max: 80, unit: ' %', ticks: [0, 20, 40, 60, 80], scale: 'podíl kupujících energy drinku, kteří vezmou Monster', rows: [
    { seg: 'night_dorm', a: 42.4, b: 67.5 }, { seg: 'young_streetwear', a: 47.0, b: 72.8 }, { seg: 'dawn_trades', a: 37.8, b: 41.4 } ] } });

add({ id: 'v2-butterfly', data: 'sample', pill: 'Pro Philip Morris · trade a category', faces: ['gym_regular', 'corridor_commuter', 'young_streetwear'],
  q: '„Kde se na pumpě vyhrává smoke-free?“',
  headline: 'ZYN vyhrál posilovnu a cestu do práce. <em>Mladé kuřáky si bere VELO.</em>',
  stat: { v: '3,8×', l: 'víc sportovců u ZYN než u VELO' },
  chart: { type: 'butterfly', legend: ['ZYN', 'VELO'], unit: ' %', max: 55, scale: 'podíl na kupujících značky', rows: [
    { seg: 'gym_regular', a: 24.0, b: 6.3 }, { seg: 'corridor_commuter', a: 17.7, b: 5.2 }, { seg: 'young_streetwear', a: 26.5, b: 53.2 } ] } });

add({ id: 'v3-split', data: 'sample', pill: 'Pro majitele a vedení', faces: ['value_senior', 'suburban_parent', 'office_professional'],
  q: '„Komu mi privátní značka bere zákazníky?“',
  headline: 'Privátní značka vám bere dva segmenty. <em>Ostatní zůstávají u vás.</em>',
  stat: { v: '46 %', l: 'útraty seniorů jde do privátní značky' },
  chart: { type: 'split', left: '0 %', right: '100 % útraty', avg: 9.3, avgLabel: 'průměr prodejny 9 %', rows: [
    { seg: 'value_senior', v: 46.0, hi: true }, { seg: 'suburban_parent', v: 33.8, hi: true }, { seg: 'office_professional', v: 0.1 } ] } });

add({ id: 'v4-figures', data: 'sample', pill: 'Pro obchodní ředitele a KAM', faces: ['corridor_commuter', 'dawn_trades', 'everyday_mainstream'],
  q: '„S čím přijdu do ročních jednání, co řetězec nemá?“',
  headline: 'Dojíždějící řidiči: dva ze tří odejdou <em>bez energy drinku.</em>',
  stat: { v: '14 %', l: 'všech návštěv jsou řidiči' },
  chart: { type: 'figures', scale: 'z 10 návštěv segmentu jich tolik odchází s energy drinkem', rows: [
    { seg: 'dawn_trades', v: 65.4 }, { seg: 'young_streetwear', v: 54.2 }, { seg: 'corridor_commuter', v: 34.6, hi: true } ] } });

add({ id: 'v5-daystrip', data: 'sample', pill: 'Pro distribuci', faces: ['dawn_trades', 'night_dorm'],
  q: '„Proč se ta položka hýbe, a komu ji prodávám?“',
  headline: 'Jedna pumpa, dva obchody. <em>Ráno jiný zákazník než v noci.</em>',
  chart: { type: 'daystrip', max: 80, series: [
    { seg: 'dawn_trades', note: '5–8 h', pts: [8, 11, 11, 6, 10, 75, 73, 76, 37, 36, 40, 16, 18, 20, 16, 19, 17, 8, 9, 9, 9, 10, 10, 6] },
    { seg: 'night_dorm', note: 'po 21 h', pts: [58, 59, 52, 59, 56, 1, 1, 0, 0, 1, 1, 2, 2, 4, 5, 6, 4, 21, 20, 22, 20, 58, 55, 63] } ] } });

add({ id: 'v6-profile', data: 'sample', pill: 'Pro brand management', faces: ['dawn_trades'],
  q: '„Pro koho vlastně píšu brief?“',
  headline: 'Řemeslníci: ranní zákazník, kterého akce nepohne. <em>Kupuje zvykem.</em>',
  chart: { type: 'persona', seg: 'dawn_trades', share: '5,2 %', shareLabel: 'všech návštěv',
    role: 'Reflexní vesta, montérky s logem firmy, pracovní boty, opálené ruce',
    cols: [
      { title: 'Co kupují', items: ['<b>65 %</b> návštěv končí s energy drinkem', 'Monster 2×, pečivo, Rexona', 'akce na Monster: jen <b>+10 %</b>'] },
      { title: 'Kdy a co kouří', items: ['<b>75 %</b> ranních návštěv pumpy (5–8 h)', '<b>32 %</b> kupujících Imperial', '<b>26 %</b> kupujících Winston'] } ] } });

add({ id: 'v7-grid', data: 'pos', pill: 'Pro consumer insights', faces: ['dawn_trades', 'office_professional', 'gym_regular'],
  q: '„Jak víte, že je to pravda?“',
  headline: 'Každý nákup má svého zákazníka. <em>Bez jména, bez tváře.</em>',
  chart: { type: 'grid100', on: 92, caps: [ { v: '92 ze 100', l: 'účtenek spárováno s konkrétní návštěvou' }, { v: '0', l: 'jmen, tváří a identit' } ] } });
