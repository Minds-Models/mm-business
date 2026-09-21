const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewportSize: { width: 1520, height: 950 } });
  await p.goto('file://' + process.argv[2], { waitUntil: 'networkidle' });
  await p.waitForTimeout(900);
  console.log(JSON.stringify(await p.evaluate(() => {
    const e = document.querySelector('.ask10');
    const r = e.getBoundingClientRect();
    const g = c => { const x = e.querySelector(c).getBoundingClientRect();
      return { top: Math.round(x.top - r.top), bottom: Math.round(x.bottom - r.top) }; };
    return { slideH: Math.round(r.height), grid: g('.proofgrid'), angels: g('.angels'),
             strip: g('.askstrip'), padBottom: getComputedStyle(e).paddingBottom };
  }), null, 1));
  await b.close();
})();
