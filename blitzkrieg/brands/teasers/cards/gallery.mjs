// Builds index.html from persona.js + brands.js (renders in out/persona, out/brands).
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import vm from 'node:vm';
const load = files => { const ctx = { window: {} }; vm.createContext(ctx); for (const f of files) vm.runInContext(readFileSync(f, 'utf8'), ctx); return ctx.window.CARDS; };
const sets = [['Persona karty (jedna na roli)', 'persona', load(['segments.js', 'persona.js'])], ['Karty značek', 'brands', load(['segments.js', 'brands.js'])]];
const strip = s => s.replace(/<[^>]+>/g, '');
let body = '';
for (const [name, dir, cards] of sets) {
  body += `<h2>${name} <span>${cards.length}</span></h2><div class="grid">`;
  for (const c of cards) {
    const f = x => `out/${dir}/${c.id}__${x}`;
    const links = ['sq', 'pt', 'slide'].map(x => existsSync(f(x) + '.png') ? `<a href="${f(x)}.png">${x}</a>` : '').join('') + (existsSync(f('slide') + '.pdf') ? `<a class="pdf" href="${f('slide')}.pdf">pdf</a>` : '');
    body += `<article><a href="${f('sq')}.png"><img loading="lazy" src="${f('sq')}.png" alt=""></a>
      <div class="for">${c.persona || (c.for || []).join(' · ')}</div><h3>${strip(c.q || '')}</h3><p>${strip(c.headline)}</p>
      <div class="meta"><code>${c.id}</code><span class="src">${{ sample: 'ukázka z chatu', pos: 'reálná POS + vizuální', visual: 'reálná vizuální' }[c.data]}</span></div><div class="p">${links}</div></article>`;
  }
  body += '</div>';
}
writeFileSync('index.html', `<!doctype html><html lang="cs"><head><meta charset="utf-8"><title>Teaser cards</title>
<meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="assets/fonts/fonts.css">
<style>
:root{--paper:#fbfbfa;--ink:#14161b;--ink-2:#565d6b;--ink-3:#8d94a2;--accent:#6f9ae8;--hair:rgba(16,24,40,.08);--dot:rgba(17,24,39,.085)}
body{margin:0;background:var(--paper);background-image:radial-gradient(circle at 1px 1px,var(--dot) 1px,transparent 0);background-size:22px 22px;color:var(--ink);font-family:'Instrument Sans',system-ui,sans-serif;padding:32px 16px 80px}
main{max-width:1240px;margin:0 auto} h1{font-size:30px;letter-spacing:-.02em;margin:0 0 6px} .lead{color:var(--ink-2);max-width:70ch;margin:0 0 28px;line-height:1.5}
h2{font-size:18px;margin:40px 0 14px;display:flex;gap:10px;align-items:center} h2 span{font-size:12px;color:var(--ink-3);font-weight:600}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:18px}
article{border:1px solid var(--hair);border-radius:18px;padding:12px;background:#fff} article img{width:100%;border-radius:12px;display:block}
.for{font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-3);margin-top:10px}
h3{font-size:13px;margin:4px 0 2px;font-weight:600;color:var(--ink-2)} p{font-size:13.5px;margin:0;line-height:1.35;font-weight:600}
.meta{display:flex;justify-content:space-between;align-items:center;margin-top:8px}code{font-size:11px;color:var(--ink-3)}
.src{font-size:11px;font-weight:600;color:#1e40af;background:#eef4ff;border-radius:6px;padding:1px 7px}
.p{display:flex;gap:6px;margin-top:8px}.p a{font-size:12px;color:#1e40af;text-decoration:none;border:1px solid var(--hair);border-radius:6px;padding:1px 6px}.p a.pdf{color:var(--ink-3)}
</style></head><body><main><h1>Teaser cards</h1>
<p class="lead">Otázka persony → odpověď v segmentech → „Vyzkoušejte si to živě“ (chat.mindsmodels.ai). Formáty: sq 1080×1080 (LinkedIn), pt 1080×1350, slide 16:9 + PDF s klikatelným tlačítkem.</p>
${body}</main></body></html>`);
console.log('gallery ok');
