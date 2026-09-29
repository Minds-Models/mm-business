import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { execFileSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';

const HS = `${process.env.HOME}/Library/Caches/ms-playwright/chromium_headless_shell-1243/chrome-headless-shell-mac-arm64/chrome-headless-shell`;
const SIZE = { sq: [540, 540], pt: [540, 675], slide: [960, 540] };

function checkSet(htmlFile, jsFiles) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  for (const f of jsFiles) {
    vm.runInContext(readFileSync(f, 'utf8'), ctx);
  }
  let errs = 0;
  for (const c of ctx.window.CARDS) {
    for (const [f, [w, h]] of Object.entries(SIZE)) {
      const url = pathToFileURL(process.cwd() + '/' + htmlFile).href + `?id=${c.id}&fmt=${f}&check=1`;
      const dom = execFileSync(HS, [
        '--disable-gpu',
        '--allow-file-access-from-files',
        `--window-size=${w},${h}`,
        '--virtual-time-budget=2000',
        '--dump-dom',
        url
      ], { stdio: ['ignore', 'pipe', 'ignore'] }).toString();
      const m = dom.match(/data-check="([^"]+)"/);
      const r = m ? JSON.parse(m[1].replace(/&quot;/g, '"')) : null;
      const bad = !r || r.overflow.length || r.h1Lines > 3 || (r.vizFree !== null && r.vizFree < 0);
      if (bad) {
        console.log('CHECK', htmlFile, c.id, f, JSON.stringify(r));
        errs++;
      }
    }
  }
  return errs;
}

const pErrs = checkSet('persona.html', ['persona.js']);
const bErrs = checkSet('brands.html', ['segments.js', 'brands.js']);
if (pErrs === 0 && bErrs === 0) {
  console.log('all cards checked: 0 issues');
} else {
  console.error(`check failed: ${pErrs + bErrs} issues`);
  process.exit(1);
}
