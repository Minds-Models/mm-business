// Demo card for design iteration. Segment chips reuse the deck palette (.mn) and the memoji avatar family.
window.SEGMENTS = {
  yw20: { label: 'Mladé ženy 20+', img: 'assets/mall/av-young.png', ink: '#0E7490', bg: '#CFFAFE', edge: '#67E8F9' },
  sm40: { label: 'Muži 40+', img: 'assets/mall/av-mainstream.png', ink: '#475569', bg: '#E2E8F0', edge: '#CBD5E1' },
  sw30: { label: 'Ženy 30+ z předměstí', img: 'assets/mall/av-parents.png', ink: '#BE185D', bg: '#FCE7F3', edge: '#F9A8D4' },
};
window.CARDS = [{
  id: 'demo-brit-segments', track: 'pet', for: ['VAFO'], data: 'pos', n: '454 košíků s krmivy Brit pro psy',
  pill: 'Krmivo pro psy', faces: ['yw20', 'sm40', 'sw30'],
  headline: 'Krmiva Brit pro psy nekupuje typická zákaznice prodejny.',
  sub: 'Rozdělení zákazníků nakupujících krmiva Brit.',
  stat: { v: '1,3×', l: 'více mladých žen nad 20 let než v průměru' },
  chart: { type: 'segbars', max: 140, scale: 'index afinity · 100 = průměrný nákup krmiva', rows: [
    { seg: 'yw20', v: 129 }, { seg: 'sm40', v: 124 }, { label: 'Průměr', v: 100 }, { seg: 'sw30', v: 82 } ] },
}];
