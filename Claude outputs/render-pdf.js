#!/usr/bin/env node
// Render an HTML deliverable (.page A4 sheets or .slide 16:9 slides) to a PDF that looks the
// same in every viewer: Chrome, Mac Preview, pdf.js (Slack, web previews), Poppler.
//
//   node scripts/render-pdf.js path/to/file.html [out.pdf] [--scale 3]
//
// How it works ("baked" render, see templates/deck-style/STYLE.md#pdf-export):
//   Pass 1  screenshot every .page/.slide at N x with text, images and SVG hidden. The JPEG holds
//           the whole decorative layer exactly as on screen: paper, glow, dot grid, shadows,
//           card faces, borders, bars.
//   Pass 2  print the document with all backgrounds, borders and shadows removed, the JPEG as the
//           sheet background, and only text, images and SVG as vectors on top.
// Text stays selectable and searchable. Instrument Sans is always served from brand/fonts in
// static weights, so it embeds as a real font (never Type 3) and output does not depend on network.

const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const args = process.argv.slice(2);
const flag = (name, dflt) => { const i = args.indexOf(name); if (i < 0) return dflt; const v = args[i + 1]; args.splice(i, 2); return v; };
const scale = +flag('--scale', '3');
const [input, outArg] = args;
if (!input) { console.error('usage: node scripts/render-pdf.js file.html [out.pdf] [--scale 3]'); process.exit(2); }
const output = outArg || input.replace(/\.html?$/i, '.pdf');

const ROOT = path.resolve(__dirname, '..');
const FONT_DIR = path.join(ROOT, 'brand', 'fonts', 'instrument-sans');
const RANGES = {
  'latin-ext': 'U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF',
  latin: 'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD',
};
function fontCss() {
  let css = '';
  for (const style of ['normal', 'italic'])
    for (const w of [400, 500, 600, 700])
      for (const sub of ['latin-ext', 'latin']) {
        const f = path.join(FONT_DIR, `instrument-sans-${sub}-${w}-${style}.woff2`);
        if (!fs.existsSync(f)) continue;
        css += `@font-face{font-family:'Instrument Sans';font-style:${style};font-weight:${w};font-display:block;` +
          `src:url(data:font/woff2;base64,${fs.readFileSync(f).toString('base64')}) format('woff2');unicode-range:${RANGES[sub]}}\n`;
      }
  return css;
}

const SHEET = '.page, .slide';
const RASTER = `
  html,body{background:#fbfbfa !important}
  .doc,.deck{padding:0 !important; gap:0 !important}
  .page,.slide{box-shadow:none !important; border-radius:0 !important; margin:0 !important}
  :is(.page,.slide) *{color:transparent !important; -webkit-text-fill-color:transparent !important; text-shadow:none !important; caret-color:transparent !important}
  :is(.page,.slide) :is(img,svg){visibility:hidden !important}
  :is(.page,.slide) .wm{color:#14161b !important}`;
const VECTOR = `
  :is(.page,.slide):is(.page,.slide):is(.page,.slide){background-color:#fbfbfa !important; box-shadow:none !important}
  :is(.page,.slide):is(.page,.slide):is(.page,.slide)::before,
  :is(.page,.slide):is(.page,.slide):is(.page,.slide)::after,
  :is(.page,.slide):is(.page,.slide):is(.page,.slide) :is(*,*::before,*::after){
    background:transparent !important; border-color:transparent !important; box-shadow:none !important;
    outline-color:transparent !important; -webkit-mask:none !important; mask:none !important;
    filter:none !important; backdrop-filter:none !important}`;

async function launch() {
  try { return await chromium.launch({ channel: 'chrome' }); } // installed Google Chrome (Mac)
  catch { return chromium.launch(); }                          // Playwright's bundled Chromium
}

(async () => {
  const browser = await launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: scale });
  const fonts = fs.existsSync(FONT_DIR) ? fontCss() : null;
  if (fonts) await page.route(/fonts\.googleapis\.com\/css2?\?family=Instrument\+Sans/, r => r.fulfill({ status: 200, contentType: 'text/css', body: fonts }));
  else console.warn('warning: brand/fonts/instrument-sans missing, using whatever the page loads');

  await page.goto('file://' + path.resolve(input), { waitUntil: 'load' });
  await page.evaluate(async () => { await document.fonts.ready; await Promise.all([...document.images].map(i => i.decode().catch(() => {}))); });

  // Pass 1: decorative layer as images
  const raster = await page.addStyleTag({ content: RASTER });
  await page.waitForTimeout(250);
  const sheets = await page.$$(SHEET);
  if (!sheets.length) throw new Error('no .page or .slide elements found');
  const shots = [];
  for (const el of sheets) shots.push((await el.screenshot({ type: 'jpeg', quality: 95 })).toString('base64'));
  await raster.evaluate(n => n.remove());

  // Pass 2: vectors on top of the baked layer
  await page.addStyleTag({ content: VECTOR });
  await page.evaluate(([sel, shots]) => {
    document.documentElement.classList.add('baked'); // switches off the fallback print layer
    document.querySelectorAll(sel).forEach((el, i) =>
      el.style.setProperty('background', `url(data:image/jpeg;base64,${shots[i]}) 0 0 / 100% 100% no-repeat`, 'important'));
  }, [SHEET, shots]);
  await page.emulateMedia({ media: 'print' });
  await page.pdf({ path: output, printBackground: true, preferCSSPageSize: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
  await browser.close();
  console.log(`PDF: ${output} (${sheets.length} pages, ${(fs.statSync(output).size / 1048576).toFixed(1)} MB)`);
})().catch(e => { console.error(e.message || e); process.exit(1); });
