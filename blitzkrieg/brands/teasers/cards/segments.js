// Shared segment registry: deck palette (.mn) + FE segment inks; pet personas use the mall avatar family.
const A = 'assets/seg/', M = 'assets/mall/';
window.SEGMENTS = { // deck palette (.mn) + FE segment inks
  dawn_trades: { label: 'Řemeslníci v montérkách', labelEn: 'Dawn Trades', img: A + 'remeslnici.png', ink: '#B45309', bg: '#FEF3C7', edge: '#FCD34D' },
  corridor_commuter: { bgs: '72%', label: 'Dojíždějící řidiči', labelEn: 'Corridor Commuter', img: A + 'corridor_commuter.webp', ink: '#1D4ED8', bg: '#DBEAFE', edge: '#93C5FD' },
  gym_regular: { label: 'Sportovci', labelEn: 'Gym Regular', img: A + 'gym_regular.webp', ink: '#047857', bg: '#D1FAE5', edge: '#6EE7B7' },
  suburban_parent: { label: 'Rodiče z předměstí', labelEn: 'Suburban Parent', img: A + 'suburban_parent.webp', ink: '#BE185D', bg: '#FCE7F3', edge: '#F9A8D4' },
  young_streetwear: { label: 'Mladí ve streetwearu', labelEn: 'Young Streetwear', img: A + 'young_streetwear.webp', ink: '#6D28D9', bg: '#EDE9FE', edge: '#C4B5FD' },
  office_professional: { label: 'Lidé z kanceláří', labelEn: 'Office Professional', img: A + 'office_professional.webp', ink: '#0E7490', bg: '#CFFAFE', edge: '#67E8F9' },
  value_senior: { label: 'Šetřiví senioři', labelEn: 'Value Senior', img: A + 'value_senior.webp', ink: '#4D7C0F', bg: '#ECFCCB', edge: '#BEF264' },
  everyday_mainstream: { label: 'Běžní zákazníci', labelEn: 'Everyday Mainstream', img: A + 'everyday_mainstream.webp', ink: '#475569', bg: '#E2E8F0', edge: '#CBD5E1' },
  long_haul_transit: { label: 'Dálkoví řidiči', labelEn: 'Long-Haul Transit', img: A + 'long_haul_transit.webp', ink: '#C2410C', bg: '#FFEDD5', edge: '#FDBA74' },
  city_break_tourist: { label: 'Turisté a výletníci', labelEn: 'City-Break Tourist', img: A + 'city_break_tourist.webp', ink: '#0284C7', bg: '#E0F2FE', edge: '#7DD3FC' },
  night_dorm: { label: 'Noční studenti', labelEn: 'Night Dorm', img: A + 'night_dorm.webp', ink: '#4338CA', bg: '#E0E7FF', edge: '#A5B4FC' },
  mall_main: { label: 'Běžní dospělí', labelEn: 'Mainstream adults', img: M + 'av-mainstream.png', ink: '#475569', bg: '#E2E8F0', edge: '#CBD5E1' },
  mall_moms: { label: 'Maminky s dětmi', labelEn: 'Parents with kids', img: M + 'av-parents.png', ink: '#BE185D', bg: '#FCE7F3', edge: '#F9A8D4' },
  mall_teens: { label: 'Mladí ve streetwearu', labelEn: 'Teens in streetwear', img: M + 'av-teens.png', ink: '#6D28D9', bg: '#EDE9FE', edge: '#C4B5FD' },
  mall_pros: { label: 'Upravení profesionálové', labelEn: 'Polished professionals', img: M + 'av-professionals.png', ink: '#1D4ED8', bg: '#DBEAFE', edge: '#93C5FD' },
  sz_sw30: { label: 'Ženy 30+ z předměstí', labelEn: 'Suburban women 30+', img: M + 'av-parents.png', ink: '#BE185D', bg: '#FCE7F3', edge: '#F9A8D4' },
  sz_yw20: { label: 'Mladé ženy 20+', labelEn: 'Young women 20+', img: M + 'av-young.png', ink: '#0E7490', bg: '#CFFAFE', edge: '#67E8F9' },
  sz_sm40: { label: 'Chlapi z předměstí', labelEn: 'Suburban men', img: M + 'av-mainstream.png', ink: '#475569', bg: '#E2E8F0', edge: '#CBD5E1' },
};
