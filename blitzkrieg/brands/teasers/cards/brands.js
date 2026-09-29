// Brand cards: one per target brand. Named brand vs its rival, split by deck segments (receipt × segment).
// data 'sample' = numbers reproducible in chat.mindsmodels.ai (see data/archive-demo-data/mock_findings.md);
// data 'pos' = real pet-store receipts × store personas (data/superzoo_findings.md); 'visual' = real mall pilot.
window.CARDS = [];
const add = c => window.CARDS.push(c);
const P = (a, b) => ({ type: 'butterfly', unit: ' %', legend: [a, b] });

/* ---------------- TOBACCO · trade / category */
add({ id: 'b-pmi-zyn', track: 'tobacco', for: ['Philip Morris ČR'], data: 'sample',
  pill: 'Pro Philip Morris · obchod a kategorie', faces: ['gym_regular', 'corridor_commuter', 'young_streetwear'],
  q: '„Kdo na pumpách rozhoduje o bezdýmných alternativách?“',
  headline: 'ZYN vítězí u sportovců a dojíždějících. <em>Mladé kuřáky získává VELO.</em>',
  stat: { v: '3,8×', l: 'více sportovců volí ZYN než VELO' },
  chart: { ...P('ZYN', 'VELO'), max: 55, scale: 'podíl na zákaznících dané značky', rows: [
    { seg: 'gym_regular', a: 24.0, b: 6.3 }, { seg: 'corridor_commuter', a: 17.7, b: 5.2 }, { seg: 'young_streetwear', a: 26.5, b: 53.2 } ] } });

add({ id: 'b-bat-velo', track: 'tobacco', for: ['BAT ČR'], data: 'sample',
  pill: 'Pro BAT · obchod a kategorie', faces: ['young_streetwear', 'night_dorm', 'gym_regular'],
  q: '„Kdo na pumpách přechází z cigaret na nikotinové sáčky?“',
  headline: 'VELO oslovuje kuřáky, kteří právě přecházejí. <em>Sportovci volí spíše ZYN.</em>',
  stat: { v: '34 %', l: 'kupujících VELO má na účtence i cigarety' },
  chart: { ...P('VELO', 'ZYN'), max: 55, scale: 'podíl na zákaznících dané značky', rows: [
    { seg: 'young_streetwear', a: 53.2, b: 26.5 }, { seg: 'night_dorm', a: 8.0, b: 3.2 }, { seg: 'gym_regular', a: 6.3, b: 24.0 } ] } });

add({ id: 'b-jti-ploom', track: 'tobacco', for: ['JTI'], data: 'sample',
  pill: 'Pro JTI · obchod a kategorie', faces: ['dawn_trades', 'night_dorm', 'corridor_commuter'],
  q: '„Kdy a kterým zákazníkům na pumpách prodáváte zahřívaný tabák?“',
  headline: 'Ploom boduje u řemeslníků. <em>U dojíždějících řidičů vede IQOS.</em>',
  stat: { v: '2,6×', l: 'více řemeslníků volí Ploom než IQOS' },
  chart: { ...P('Ploom / EVO', 'IQOS / TEREA'), max: 25, scale: 'podíl na kupujících zahřívaného tabáku', rows: [
    { seg: 'dawn_trades', a: 11.5, b: 4.4 }, { seg: 'night_dorm', a: 4.7, b: 1.7 }, { seg: 'corridor_commuter', a: 9.5, b: 23.4 } ] } });

add({ id: 'b-imperial', track: 'tobacco', for: ['Imperial Brands CR'], data: 'sample',
  pill: 'Pro vedení Imperial Brands', faces: ['dawn_trades'],
  q: '„Kde na pumpách najdete zákazníky, které velcí hráči neoslovují?“',
  headline: 'Značky Imperialu táhnou řemeslníci. <em>Máte u nich třikrát větší podíl než PMI.</em>',
  stat: { v: '17 %', l: 'účtenek se značkou Imperial obsahuje i Big Shock' },
  chart: { type: 'bars', unit: ' %', max: 35, rows: [ { label: 'Imperial', note: 'podíl řemeslníků mezi zákazníky', v: 32.0, hi: true }, { label: 'JTI', v: 19.6 }, { label: 'PMI', v: 9.7 } ] } });

add({ id: 'b-cbi-strong', track: 'tobacco', for: ['CBI / DanCzek (DOPE, SNATCH)'], data: 'sample',
  pill: 'Pro vedení DanCzek · nikotinové sáčky', faces: ['night_dorm', 'young_streetwear'],
  q: '„Kdo na pumpách kupuje extra silné nikotinové sáčky?“',
  headline: 'Silné nikotinové sáčky kupují studenti v noci. <em>ZYN volí lidé z kanceláří a posiloven.</em>',
  stat: { v: '76 %', l: 'zákazníků kupujících silné sáčky má pod 30 let' },
  chart: { ...P('Silné sáčky', 'ZYN'), max: 62, scale: 'podíl na zákaznících', rows: [
    { seg: 'young_streetwear', a: 60.3, b: 26.5 }, { seg: 'night_dorm', a: 20.3, b: 3.2 }, { seg: 'everyday_mainstream', a: 7.2, b: 11.9 } ] } });

/* ---------------- FORECOURT & BEVERAGES */
add({ id: 'b-cchbc-monster', track: 'forecourt', for: ['Coca-Cola HBC (Monster)'], data: 'sample',
  pill: 'Pro Coca-Cola HBC · trade marketing', faces: ['dawn_trades', 'night_dorm', 'young_streetwear'],
  q: '„Které slevové akce na Monster jsou zbytečně vyhozené peníze?“',
  headline: 'Řemeslníci berou Monster i bez akce. <em>Slevu přitom dostávají zbytečně.</em>',
  stat: { v: '49,5 %', l: 'tržeb od řemeslníků za Monster proběhlo ve slevě' },
  chart: { type: 'dumbbell', legend: ['bez akce', 'v akci'], max: 80, unit: ' %', ticks: [0, 20, 40, 60, 80], scale: 'podíl kupujících energy drinku, kteří vezmou Monster', rows: [
    { seg: 'night_dorm', a: 42.4, b: 67.5 }, { seg: 'young_streetwear', a: 47.0, b: 72.8 }, { seg: 'dawn_trades', a: 37.8, b: 41.4 } ] } });

add({ id: 'b-redbull', track: 'forecourt', for: ['Red Bull ČR'], data: 'sample',
  pill: 'Pro Red Bull · vedení značky a marketing', faces: ['corridor_commuter', 'long_haul_transit', 'young_streetwear'],
  q: '„Pro koho vlastně chystáte kampaňové zadání?“',
  headline: 'Red Bull na pumpách nepijí teenageři, <em>ale dojíždějící řidiči.</em>',
  stat: { v: '38 %', l: 'kupujících Red Bullu tvoří dojíždějící řidiči' },
  chart: { type: 'segbars', unit: ' %', max: 40, scale: 'podíl na zákaznících Red Bullu', rows: [
    { seg: 'corridor_commuter', v: 38.1, hi: true }, { seg: 'long_haul_transit', v: 11.6 }, { seg: 'young_streetwear', v: 9.0 } ] } });

add({ id: 'b-bigshock', track: 'forecourt', for: ['Big Shock'], data: 'sample',
  pill: 'Pro vedení Big Shock', faces: ['dawn_trades', 'night_dorm', 'young_streetwear'],
  q: '„Kde máte zákazníky, které Red Bull nedokáže oslovit?“',
  headline: 'Big Shock drží řemeslníky i noční zákazníky. <em>U nich Red Bull výrazně zaostává.</em>',
  stat: { v: '5,6×', l: 'více řemeslníků volí Big Shock než Red Bull' },
  chart: { ...P('Big Shock', 'Red Bull'), max: 40, scale: 'podíl na zákaznících dané značky', rows: [
    { seg: 'dawn_trades', a: 20.1, b: 3.6 }, { seg: 'night_dorm', a: 9.3, b: 1.8 }, { seg: 'corridor_commuter', a: 1.8, b: 38.1 } ] } });

add({ id: 'b-kofola', track: 'beverages', for: ['Kofola'], data: 'sample',
  pill: 'Pro vedení Kofoly', faces: ['suburban_parent', 'long_haul_transit', 'city_break_tourist'],
  q: '„Které zákazníky vám na cestách přetahuje Coca-Cola?“',
  headline: 'Coca-Cola láká hlavně turisty. <em>Kofola spolehlivě drží rodiče i dálkové řidiče.</em>',
  stat: { v: '1,5×', l: 'více turistů sahá po Coca-Cole než po Kofole' },
  chart: { ...P('Kofola', 'Coca-Cola'), max: 15, scale: 'podíl na zákaznících dané značky', rows: [
    { seg: 'suburban_parent', a: 11.8, b: 9.5 }, { seg: 'long_haul_transit', a: 4.4, b: 2.3 }, { seg: 'city_break_tourist', a: 9.2, b: 13.9 } ] } });

add({ id: 'b-mattoni', track: 'beverages', for: ['Mattoni 1873'], data: 'sample',
  pill: 'Pro Mattoni 1873 · obchod a marketing', faces: ['office_professional', 'gym_regular', 'city_break_tourist'],
  q: '„Čím se liší váš zákazník od kupujících Bonaquy?“',
  headline: 'Mattoni volí lidé z kanceláří. <em>Bonaquu kupují spíše sportovci a turisté.</em>',
  stat: { v: '50 %', l: 'z jejich další útraty směřuje do prémiových značek' },
  chart: { ...P('Mattoni + Aquila', 'Bonaqua'), max: 16, scale: 'podíl na zákaznících dané značky', rows: [
    { seg: 'office_professional', a: 9.8, b: 5.2 }, { seg: 'gym_regular', a: 11.4, b: 15.4 }, { seg: 'city_break_tourist', a: 11.0, b: 14.8 } ] } });

add({ id: 'b-prazdroj', track: 'beverages', for: ['Plzeňský Prazdroj'], data: 'sample',
  pill: 'Pro Plzeňský Prazdroj · trade marketing', faces: ['corridor_commuter', 'young_streetwear', 'city_break_tourist'],
  q: '„Kdo vybírá které pivo z vašeho portfolia?“',
  headline: 'Plzeň kupují dojíždějící řidiči na cestách. <em>Gambrinus volí mladí zákazníci.</em>',
  stat: { v: '6×', l: 'více dojíždějících řidičů volí Plzeň oproti Gambrinusu' },
  chart: { ...P('Pilsner Urquell', 'Gambrinus'), max: 42, scale: 'podíl na zákaznících dané značky', rows: [
    { seg: 'corridor_commuter', a: 31.7, b: 5.3 }, { seg: 'city_break_tourist', a: 15.2, b: 6.7 }, { seg: 'young_streetwear', a: 23.4, b: 41.3 } ] } });

add({ id: 'b-intersnack', track: 'forecourt', for: ['Intersnack (Bohemia)'], data: 'sample',
  pill: 'Pro Intersnack · trade marketing', faces: ['everyday_mainstream', 'young_streetwear', 'long_haul_transit'],
  q: '„Potřebujete slevovou akci k udržení věrných zákazníků?“',
  headline: 'Lay’s láká mladé jen slevou. <em>Bohemia prodává i za plnou cenu.</em>',
  stat: { v: '22,5 %', l: 'tržeb značky Lay’s pochází ze slevových akcí' },
  chart: { ...P('Bohemia', 'Lay’s'), max: 36, scale: 'podíl na zákaznících dané značky', rows: [
    { seg: 'everyday_mainstream', a: 34.1, b: 26.1 }, { seg: 'long_haul_transit', a: 9.2, b: 7.7 }, { seg: 'young_streetwear', a: 27.8, b: 32.9 } ] } });

/* ---------------- DRUGSTORE & HPC */
add({ id: 'b-unilever-dove', track: 'hpc', for: ['Unilever ČR'], data: 'sample',
  pill: 'Pro Unilever · trade marketing', faces: ['young_streetwear', 'value_senior', 'office_professional'],
  q: '„Které zákazníky slevová akce na Dove skutečně přivedla?“',
  headline: 'Sleva na Dove přilákala mladé lidi. <em>Se zákazníky z kanceláří ani nepohnula.</em>',
  stat: { v: '2,3×', l: 'vyšší nákupy u mladých lidí ve dny akcí' },
  chart: { type: 'segbars', unit: '×', max: 2.4, scale: 'nárůst zájmu o značku Dove v akčních dnech', rows: [
    { seg: 'young_streetwear', v: 2.29, hi: true }, { seg: 'value_senior', v: 1.95, hi: true }, { seg: 'office_professional', v: 0.94 } ] } });

add({ id: 'b-beiersdorf-nivea', track: 'hpc', for: ['Beiersdorf'], data: 'sample',
  pill: 'Pro Beiersdorf · trade marketing', faces: ['young_streetwear', 'office_professional'],
  q: '„Proč téměř třetina tržeb za značku Nivea pochází ze slev?“',
  headline: 'Sleva na Niveu přiláká mladé zákazníky. <em>S věrnou zákaznicí však ani nepohne.</em>',
  stat: { v: '32 %', l: 'tržeb za produkty Nivea pochází ze slev' },
  chart: { type: 'segbars', unit: '×', max: 2.2, scale: 'nárůst nákupů značky Nivea v akčních dnech', rows: [
    { seg: 'young_streetwear', v: 2.01, hi: true }, { seg: 'office_professional', v: 0.85 } ] } });

add({ id: 'b-pg-oldspice', track: 'hpc', for: ['Procter & Gamble'], data: 'sample',
  pill: 'Pro P&G · marketing a spotřebitelský výzkum', faces: ['young_streetwear', 'office_professional', 'gym_regular'],
  q: '„Kdo ve skutečnosti kupuje Old Spice a pro koho je Rexona?“',
  headline: 'Old Spice oslovuje hlavně mladé lidi. <em>K zákazníkům z kanceláří se nedostane.</em>',
  stat: { v: '156', l: 'index nákupu nápoje Monster v jejich košíku' },
  chart: { ...P('Old Spice', 'Rexona'), max: 30, scale: 'podíl na zákaznících kupujících deodorant', rows: [
    { seg: 'young_streetwear', a: 27.5, b: 12.6 }, { seg: 'office_professional', a: 1.9, b: 9.2 }, { seg: 'gym_regular', a: 3.9, b: 7.1 } ] } });

add({ id: 'b-loreal', track: 'hpc', for: ['L’Oréal'], data: 'sample',
  pill: 'Pro L’Oréal · trade marketing', faces: ['office_professional', 'everyday_mainstream', 'corridor_commuter'],
  q: '„Kdo a kdy u vás nejčastěji nakupuje dermokosmetiku?“',
  headline: 'Zákaznice L’Oréal je z kanceláře. <em>Nakupuje v úterý, ne o víkendu.</em>',
  stat: { v: '814 Kč', l: 'průměrná hodnota nákupu (Beiersdorf 510 Kč)' },
  chart: { type: 'segbars', unit: ' %', max: 45, scale: 'podíl na zákaznících značky L’Oréal', rows: [
    { seg: 'office_professional', v: 41.7, hi: true }, { seg: 'everyday_mainstream', v: 21.5 }, { seg: 'corridor_commuter', v: 11.0 } ] } });

add({ id: 'b-henkel-syoss', track: 'hpc', for: ['Henkel ČR'], data: 'sample',
  pill: 'Pro Henkel · trade marketing', faces: ['value_senior'],
  q: '„S kým značka Syoss u regálu doopravdy soupeří?“',
  headline: 'Syoss nesoupeří s Elseve. <em>Skutečným soupeřem je privátní značka.</em>',
  sub: 'Syoss, Elseve i Head & Shoulders mají téměř stejné zákazníky. Hlavní rozdíl dělají šetřiví senioři.',
  chart: { type: 'versus', title: 'Šetřiví senioři mezi kupujícími', a: { v: '27 %', k: 'privátní značka' }, b: { v: '5 %', k: 'Syoss' }, note: 'šampony a vlasová péče' } });

add({ id: 'b-coty-adidas', track: 'hpc', for: ['Coty ČR'], data: 'sample',
  pill: 'Pro Coty · vedení značky', faces: ['gym_regular', 'young_streetwear'],
  q: '„Kde najdete zákazníky pro deodoranty adidas?“',
  headline: 'Deodoranty adidas kralují v posilovnách. <em>Old Spice vítězí u mladých ve streetwearu.</em>',
  stat: { v: '152', l: 'index nákupu výživy Vilgain v jejich košíku' },
  chart: { ...P('adidas', 'Old Spice'), max: 30, scale: 'podíl na zákaznících kupujících deodorant', rows: [
    { seg: 'gym_regular', a: 10.5, b: 3.9 }, { seg: 'corridor_commuter', a: 8.7, b: 7.4 }, { seg: 'young_streetwear', a: 15.1, b: 27.5 } ] } });

/* ---------------- PET (real receipts × store personas) */
add({ id: 'b-vafo-brit', track: 'pet', for: ['VAFO'], data: 'pos',
  pill: 'Pro vedení VAFO', faces: ['sz_yw20', 'sz_sm40', 'sz_sw30'],
  q: '„Kdo krmiva Brit kupuje a které zákazníky zatím míjíte?“',
  headline: 'Brit kupují mladé ženy a muži 40+. <em>Hlavní zákazníky prodejny míjíte.</em>',
  stat: { v: '+25 %', l: 'vyšší hodnota nákupního košíku u zákazníků Britu' },
  chart: { type: 'segbars', max: 140, scale: 'index afinity · 100 = průměrný nákup krmiva', rows: [
    { seg: 'sz_yw20', v: 129, hi: true }, { seg: 'sz_sm40', v: 124, hi: true }, { label: 'Průměr', v: 100 }, { seg: 'sz_sw30', v: 82 } ] } });

add({ id: 'b-placek-ontario', track: 'pet', for: ['Plaček (vlastní značky)'], data: 'pos',
  pill: 'Pro vlastní značky chovatelských potřeb', faces: ['sz_sw30', 'sz_yw20', 'sz_sm40'],
  q: '„Přebírá Ontario zákazníky značce Brit, nebo kanibalizuje samo sebe?“',
  headline: 'Ontario i Brit nakupují titíž lidé. <em>Ontario jim však prodává především pamlsky.</em>',
  stat: { v: '44 %', l: 'košíků se značkou Ontario tvoří pouze pamlsky' },
  chart: { ...P('Ontario', 'Brit'), max: 32, scale: 'podíl na zákaznících dané značky', rows: [
    { seg: 'sz_sw30', a: 30.5, b: 30.1 }, { seg: 'sz_yw20', a: 18.5, b: 22.0 }, { seg: 'sz_sm40', a: 20.1, b: 22.0 } ] } });

add({ id: 'b-trixie', track: 'pet', for: ['Trixie'], data: 'pos',
  pill: 'Pro obchodní zastoupení Trixie', faces: ['sz_sm40', 'sz_yw20', 'sz_sw30'],
  q: '„Kde najdete zákazníky, které privátní značka řetězce míjí?“',
  headline: 'Muži nad 40 let volí Trixie. <em>Privátní značku nechávají bez povšimnutí.</em>',
  stat: { v: '3×', l: 'častější nákup potřeb pro hlodavce a ptáky' },
  chart: { ...P('Trixie', 'Dog Fantasy (privátní)'), max: 38, scale: 'podíl na zákaznících dané značky', rows: [
    { seg: 'sz_sm40', a: 19.9, b: 13.8 }, { seg: 'sz_yw20', a: 20.3, b: 25.4 }, { seg: 'sz_sw30', a: 36.5, b: 34.5 } ] } });

add({ id: 'b-spectrum-tetra', track: 'pet', for: ['Spectrum Brands'], data: 'pos',
  pill: 'Pro Spectrum Brands · obchod', faces: ['sz_sm40'],
  q: '„Kdo kupuje akvaristiku a jak ho nejlépe oslovit?“',
  headline: 'Tetru kupují muži po čtyřicítce. <em>Nejčastěji spolu s živými rybami.</em>',
  stat: { v: '19,5 %', l: 'nákupů s krmivy Tetra obsahuje i živé ryby' },
  chart: { type: 'segbars', unit: ' %', max: 35, scale: 'podíl mužů 40+ mezi kupujícími značky', rows: [ { seg: 'sz_sm40', v: 31.7, hi: true }, { label: 'Průměr prodejny', v: 19.8 } ] } });

/* ---------------- SHOPPING CENTRES · English (international list) */
add({ id: 'b-mall-en', lang: 'en', track: 'mall', for: ['International mall operators'], data: 'visual',
  pill: 'For shopping-centre owners', faces: ['mall_main', 'mall_moms', 'mall_teens'],
  q: '“What does footfall not tell me?”',
  headline: 'Who actually buys. <em>Adults twice as often as teens.</em>',
  sub: 'Tenants pay for shoppers, not for entries.',
  stat: { v: '32%', l: 'of visits end with a purchase' },
  chart: { type: 'figures', scale: 'out of 10 visits, this many leave with a purchase', rows: [
    { seg: 'mall_main', v: 38, hi: true }, { seg: 'mall_moms', v: 37 }, { seg: 'mall_teens', v: 19 } ] } });
