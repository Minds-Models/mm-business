#!/usr/bin/env python3
"""Build print-ready HTML contracts from the paper-set markdown.

Source of truth: blitzkrieg/brands/paper/{cz,en}/*.md
Output:          blitzkrieg/brands/paper/pdf/{cz,en}-<slug>.html  (+ .pdf via render-pdf.sh)

Conventional legal-document layout: black on white, serif, justified, no brand colour.
The only brand element is the wordmark on page one.
Re-run after editing any source markdown. Never hand-edit the generated HTML.
"""
import base64, io, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PAPER = os.path.join(ROOT, 'blitzkrieg', 'brands', 'paper')
OUT = os.path.join(PAPER, 'pdf')
LOGO = os.path.join(ROOT, 'brand', 'logo', 'logo_mindsmodels-normal-black-trim.png')

PARTY_KEYS = ('Poskytovatel:', 'Objednatel:', 'Zájemce:',
              'Provider:', 'Customer:', 'Interested Party:')

STR = {
 'cz': dict(draft='NÁVRH PRO PRÁVNÍ ČISTOPIS', page='Strana', of='z'),
 'en': dict(draft='DRAFT FOR LEGAL REVIEW', page='Page', of='of'),
}

def esc(t):
    return t.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')

def inline(t):
    t = esc(t)
    t = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', t)
    t = re.sub(r'(?<!\*)\*([^*]+?)\*(?!\*)', r'<em>\1</em>', t)
    t = re.sub(r'`(.+?)`', r'\1', t)
    t = re.sub(r'(\{\{[^}]*\}\})', r'<span class="fill">\1</span>', t)
    return t

def clause(t):
    return re.sub(r'^((?:\d+\.)+\d+)\s+', r'<span class="cn">\1</span> ', t, count=1)

def parse(md):
    lines = md.split('\n')
    while lines and (lines[0].startswith('>') or not lines[0].strip()):
        lines.pop(0)

    title, subtitle, parties, blocks = '', '', [], []
    i = 0
    if i < len(lines) and lines[i].startswith('# '):
        title = lines[i][2:].strip(); i += 1

    buf = []
    def flush_pre():
        nonlocal buf, subtitle
        if not buf: return
        txt = ' '.join(buf).strip(); buf = []
        if not txt: return
        for k in PARTY_KEYS:
            if txt.startswith('**' + k):
                parties.append((k.rstrip(':'), txt[len('**' + k) + 2:].strip()))
                return
        subtitle = txt

    while i < len(lines) and not lines[i].startswith('## '):
        if lines[i].strip(): buf.append(lines[i].strip())
        else: flush_pre()
        i += 1
    flush_pre()

    cur, listbuf, listkind, table = None, [], None, []

    def flush_p():
        nonlocal cur
        if cur:
            txt = ' '.join(cur).strip(); cur = None
            if txt: blocks.append(('p', txt))
    def flush_list():
        nonlocal listbuf, listkind
        if listbuf:
            blocks.append(('list', (listkind, listbuf))); listbuf, listkind = [], None
    def flush_table():
        nonlocal table
        if table:
            blocks.append(('sig', table)); table = []

    while i < len(lines):
        s = lines[i].strip()
        if s.startswith('## '):
            flush_p(); flush_list(); flush_table()
            flush_list()
            m = re.match(r'##\s+(\d+)\.\s+(.*)$', s)
            blocks.append(('h2', (m.group(1), m.group(2)) if m else ('', s[3:])))
        elif s.startswith('|'):
            flush_p(); flush_list()
            if not re.match(r'^\|[\s\-|]+\|$', s):
                table.append([c.strip() for c in s.strip('|').split('|')])
        elif re.match(r'^[a-z]\)\s', s):
            flush_p()
            if listkind not in (None, 'a'): flush_list()
            listkind = 'a'; listbuf.append(s)
        elif s.startswith('- '):
            flush_p()
            if listkind not in (None, 'b'): flush_list()
            listkind = 'b'; listbuf.append(s[2:])
        elif not s:
            flush_p(); flush_table()
        else:
            flush_list(); flush_table()
            if cur is None: cur = []
            cur.append(s)
        i += 1
    flush_p(); flush_list(); flush_table()
    return title, subtitle, parties, blocks

def render_blocks(blocks):
    out = []
    for kind, payload in blocks:
        if kind == 'h2':
            num, txt = payload
            out.append(f'<h2><span class="an">{esc(num)}.</span> {inline(txt)}</h2>')
        elif kind == 'p':
            t = payload
            m = re.match(r'^\*\*(.+?)\*\*:\s*(.*)$', t)
            if m and not re.match(r'^(Příloha|Schedule|Annex)', m.group(1)):
                out.append(f'<p class="def"><strong>{inline(m.group(1))}</strong>: {inline(m.group(2))}</p>')
            elif re.match(r'^\*\*(Příloha|Schedule|Annex)', t):
                out.append(f'<p class="sched">{inline(t)}</p>')
            elif re.match(r'^(V |In )\{\{', t):
                out.append(f'<p class="sigdate">{inline(t)}</p>')
            else:
                out.append(f'<p>{clause(inline(t))}</p>')
        elif kind == 'list':
            lk, items = payload
            def li(it):
                if lk == 'a':
                    it = re.sub(r'^[a-z]\)\s+', '', it)
                return '<li>' + inline(it) + '</li>'
            lis = ''.join(li(it) for it in items)
            out.append(f'<ol class="alpha">{lis}</ol>' if lk == 'a' else f'<ul>{lis}</ul>')
        elif kind == 'sig':
            rows = payload
            heads = rows[0] if rows else []
            names = rows[-1] if len(rows) > 1 else ['', '']
            cells = ''.join(
                f'<div class="sc"><div class="sl">{inline(h)}</div>'
                f'<div class="sline"></div><div class="sn">{inline(n)}</div></div>'
                for h, n in zip(heads, names))
            out.append(f'<div class="sig">{cells}</div>')
    return out

def build(md_path, lang, slug):
    md = io.open(md_path, encoding='utf-8').read()
    title, subtitle, parties, blocks = parse(md)
    S = STR[lang]
    logo = base64.b64encode(open(LOGO, 'rb').read()).decode()

    head = [f'<h1>{inline(title)}</h1>']
    if subtitle:
        head.append(f'<p class="sub">{inline(subtitle)}</p>')
    for lbl, txt in parties:
        head.append(f'<p class="party"><strong>{esc(lbl)}:</strong> {inline(txt)}</p>')

    flow = '\n'.join(head + render_blocks(blocks))
    running = f'{title} · {S["draft"]}'
    q = lambda v: '"' + v.replace('\\', '\\\\').replace('"', '\\"') + '"'
    draft_js, run_js = q(S['draft']), q(running)
    page_js, of_js = q(S['page']), q(S['of'])

    html = f'''<!DOCTYPE html>
<html lang="{lang}">
<head>
<meta charset="utf-8">
<title>{esc(title)} · Minds &amp; Models</title>
<style>
@page {{ size:A4; margin:0; }}
*{{box-sizing:border-box; margin:0; padding:0;}}
html,body{{background:#fff;}}
body{{font-family:'Inter',-apple-system,BlinkMacSystemFont,'Helvetica Neue',Arial,sans-serif;
  color:#16181d; font-size:10pt; line-height:1.55; letter-spacing:-.003em;
  font-feature-settings:'kern' 1,'liga' 1; -webkit-font-smoothing:antialiased;
  -webkit-print-color-adjust:exact; print-color-adjust:exact;}}
.page{{width:210mm; height:297mm; margin:0 auto; background:#fff;
  padding:21mm 23mm 15mm; display:flex; flex-direction:column; overflow:hidden;}}
@media print{{ .page{{break-after:page;}} .page:last-child{{break-after:auto;}} }}
@media screen{{ html,body{{background:#e9e9ea;}} .page{{margin:12px auto; box-shadow:0 1px 6px rgba(0,0,0,.16);}} }}

.ph{{display:flex; justify-content:space-between; align-items:flex-end; flex:none;
  padding-bottom:9px; border-bottom:1px solid #16181d;}}
.ph img{{height:21px; display:block;}}
.ph .meta{{font-size:7pt; letter-spacing:.11em; text-transform:uppercase; color:#8b8d93; font-weight:500;}}
.ph.cont{{border-bottom:1px solid #e2e3e6;}}

.pb{{flex:1; overflow:hidden;}}
.pbi{{display:flow-root; padding-top:14px;}}
.pf{{flex:none; padding-top:6px; border-top:1px solid #e2e3e6; display:flex;
  justify-content:space-between; font-size:7.2pt; color:#9a9ca1; letter-spacing:.04em;}}

h1{{font-size:15pt; font-weight:650; text-align:center; letter-spacing:-.017em;
  line-height:1.25; margin:8px 0 0;}}
.sub{{text-align:center; font-size:9.5pt; margin-top:6px; color:#6c6f76;}}
.party{{margin-top:11px;}}
.party strong{{font-weight:600;}}

h2{{font-size:10.5pt; font-weight:650; letter-spacing:-.012em; margin:19px 0 1px; page-break-after:avoid;}}
h2 .an{{font-weight:650;}}
p{{margin-top:7px;}}
.cn{{font-weight:650;}}
strong{{font-weight:600;}}
p.def{{margin-top:7px;}}
p.sched{{margin-top:7px;}}

ol,ul{{margin:6px 0 0 0; padding-left:22px;}}
li{{margin-top:5px;}}
li::marker{{color:#8b8d93;}}
ol.alpha{{list-style:lower-alpha;}}
ul{{list-style:disc;}}

.fill{{background:#f2f3f5; border-radius:2.5px; padding:.5px 2px; white-space:nowrap; color:#5c5f66;}}

.sigdate{{margin-top:24px;}}
.sig{{display:grid; grid-template-columns:1fr 1fr; gap:34px; margin-top:8px;}}
.sc .sl{{font-size:7pt; letter-spacing:.11em; text-transform:uppercase; color:#8b8d93; font-weight:500;}}
.sc .sline{{margin-top:19mm; border-bottom:1px solid #16181d;}}
.sc .sn{{margin-top:5px; font-size:8.5pt; color:#6c6f76;}}
</style>
</head>
<body>
<div id="doc"></div>
<div id="flow" style="display:none">
{flow}
</div>
<script>
(function(){{
  var LOGO='data:image/png;base64,{logo}';
  var DRAFT={draft_js}, RUN={run_js}, PAGE={page_js}, OF={of_js};
  var doc=document.getElementById('doc'), flow=document.getElementById('flow');
  var blocks=Array.prototype.slice.call(flow.children);
  flow.parentNode.removeChild(flow);

  function newPage(first){{
    var p=document.createElement('section'); p.className='page';
    var h=document.createElement('div'); h.className='ph'+(first?'':' cont');
    h.innerHTML=(first?'<img src="'+LOGO+'" alt="Minds &amp; Models">':'<span class="meta">'+RUN+'</span>')+
      '<div class="meta">'+(first?DRAFT:'')+'</div>';
    var b=document.createElement('div'); b.className='pb';
    var inner=document.createElement('div'); inner.className='pbi'; b.appendChild(inner);
    var f=document.createElement('div'); f.className='pf';
    f.innerHTML='<span></span><span class="pn"></span>';
    p.appendChild(h); p.appendChild(b); p.appendChild(f); doc.appendChild(p);
    return {{box:b, inner:inner}};
  }}
  var pg=newPage(true);
  function room(){{ return pg.box.clientHeight - pg.inner.offsetHeight; }}
  for(var i=0;i<blocks.length;i++){{
    var el=blocks[i];
    pg.inner.appendChild(el);
    if(room()<4){{
      pg.inner.removeChild(el); pg=newPage(false); pg.inner.appendChild(el);
    }} else if(el.tagName==='H2' && room()<48){{
      pg.inner.removeChild(el); pg=newPage(false); pg.inner.appendChild(el);
    }}
  }}
  var pages=doc.querySelectorAll('.page');
  for(var j=0;j<pages.length;j++)
    pages[j].querySelector('.pn').textContent=PAGE+' '+(j+1)+' '+OF+' '+pages.length;
}})();
</script>
</body>
</html>
'''
    os.makedirs(OUT, exist_ok=True)
    dst = os.path.join(OUT, f'{lang}-{slug}.html')
    io.open(dst, 'w', encoding='utf-8').write(html)
    return dst

if __name__ == '__main__':
    for lang in ('cz', 'en'):
        d = os.path.join(PAPER, lang)
        for fn in sorted(os.listdir(d)):
            if fn.endswith('.md'):
                print(os.path.relpath(build(os.path.join(d, fn), lang, fn[:-3]), ROOT))
