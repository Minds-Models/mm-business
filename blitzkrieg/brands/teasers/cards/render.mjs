// Renders every card × format with headless Chrome.
// Usage: node render.mjs [cardIdFilter]   → out/<dir>/<id>__<fmt>.(png|pdf)
import { readFileSync, mkdirSync } from 'node:fs';
import { spawn } from 'node:child_process';
import vm from 'node:vm';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const CHROME = process.env.CHROME || `${process.env.HOME}/Library/Caches/ms-playwright/chromium_headless_shell-1243/chrome-headless-shell-mac-arm64/chrome-headless-shell`;
const SIZE = { sq: [540, 540], pt: [540, 675], slide: [960, 540] };
const PDF = new Set(['slide']);
const filter = process.argv[2];

function loadCards(files) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  for (const f of files) vm.runInContext(readFileSync(path.join(here, f), 'utf8'), ctx);
  return ctx.window.CARDS;
}

const sets = [
  { html: 'persona.html', dir: 'persona', cards: loadCards(['persona.js']) },
  { html: 'brands.html', dir: 'brands', cards: loadCards(['segments.js', 'brands.js']) }
];

const jobs = [];
for (const s of sets) {
  for (const c of s.cards) {
    if (filter && !c.id.includes(filter)) continue;
    for (const f of Object.keys(SIZE)) jobs.push({ html: s.html, dir: s.dir, c, f });
  }
}

const run = args => new Promise((res, rej) => {
  const ch = spawn(CHROME, args, { stdio: ['ignore', 'ignore', 'pipe'] });
  let err = ''; ch.stderr.on('data', d => (err += d));
  const t = setTimeout(() => ch.kill('SIGKILL'), 45000); ch.on('close', () => clearTimeout(t));
  ch.on('close', code => (code === 0 ? res() : rej(new Error(err.slice(-400)))));
});

async function one({ html, dir, c, f }) {
  const outDir = path.join(here, 'out', dir);
  mkdirSync(outDir, { recursive: true });
  const base = path.join(outDir, `${c.id}__${f}`);
  const url = pathToFileURL(path.join(here, html)).href + `?id=${encodeURIComponent(c.id)}&fmt=${f}`;
  const [w, h] = SIZE[f];
  const common = [
    '--disable-gpu',
    '--hide-scrollbars',
    '--allow-file-access-from-files',
    '--virtual-time-budget=4000',
    `--user-data-dir=/tmp/mm-teaser-chrome-${process.pid}-${Math.random().toString(36).slice(2, 8)}`
  ];
  await run([...common, `--window-size=${w},${h}`, '--force-device-scale-factor=2', `--screenshot=${base}.png`, url]);
  if (PDF.has(f)) await run([...common, '--no-pdf-header-footer', `--print-to-pdf=${base}.pdf`, url]);
}

const N = 6;
let i = 0, done = 0;
await Promise.all(Array.from({ length: N }, async () => {
  while (i < jobs.length) {
    const j = jobs[i++];
    try { await one(j); } catch (e) { console.error('FAIL', j.c.id, j.f, e.message); }
    if (++done % 15 === 0 || done === jobs.length) console.log(`${done}/${jobs.length}`);
  }
}));
console.log(`rendered ${done} jobs`);
