const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewportSize: { width: 1520, height: 950 }, deviceScaleFactor: 2 });
  await p.goto('file://' + process.argv[2], { waitUntil: 'networkidle' });
  await p.waitForTimeout(1500);
  await (await p.$('.ask10')).screenshot({ path: process.argv[3] + '/s10.png' });
  console.log(JSON.stringify(await p.evaluate(() => { const e = document.querySelector('.ask10');
    return { scrollH: e.scrollHeight, clientH: e.clientHeight, slides: document.querySelectorAll('.slide').length }; })));
  await b.close();
})();
