#!/usr/bin/env python3
"""Render a Blitzkrieg execution guide (.md) into the Blitzkrieg HTML design system.

Usage:  python3 scripts/build-execution-html.py blitzkrieg/brands/brands-execution-guide.md
Re-run after editing the markdown; the .html is generated, the .md is the source of truth.
"""
import re, html, sys, pathlib

SRC = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else
                   "blitzkrieg/brands/brands-execution-guide.md").resolve()
OUT = SRC.with_suffix(".html")
md = SRC.read_text(encoding="utf-8")

# ---------------------------------------------------------------- inline
def inline(t):
    t = html.escape(t, quote=False)
    t = re.sub(r'`([^`]+)`', r'<code>\1</code>', t)
    t = re.sub(r'\*\*([^*]+)\*\*', r'<strong>\1</strong>', t)
    t = re.sub(r'(?<![\*\w])\*([^*\n]+)\*(?!\*)', r'<em>\1</em>', t)
    t = re.sub(r'\[([^\]\[]+)\]\(([^)\s]+)\)', r'<a href="\2">\1</a>', t)
    return t

MARK = {'⛔': ('prereq', 'Prerequisite'), '💡': ('tip', 'Tip'),
        '🔍': ('res', 'Research needed'), '✅': ('done', 'Done when'),
        '⚡': ('now', 'Do now')}

def strip_mark(s):
    for m in MARK:
        if s.startswith(m):
            return MARK[m][0], MARK[m][1], s[len(m):].strip()
    return None, None, s

# ---------------------------------------------------------------- parse
lines = md.split("\n")
title = "Execution Guide"
meta, weeks, tail = [], [], []
cur_week = cur_task = None
i, n = 0, len(lines)
mode = "meta"

def new_week(num, dates, theme):
    return {"num": num, "dates": dates, "theme": theme, "tasks": []}

def new_task(num, t, owner, hours):
    return {"num": num, "title": t, "owner": owner, "hours": hours, "blocks": []}

def push(block):
    target = cur_task["blocks"] if cur_task else (
        cur_week["tasks"][-1]["blocks"] if cur_week and cur_week["tasks"] else
        (tail if mode == "tail" else meta))
    target.append(block)

while i < n:
    ln = lines[i]
    s = ln.strip()

    if s.startswith("# ") and not s.startswith("# WEEK"):
        t = s[2:].strip()
        if t.lower().startswith("brands pillar") or "execution guide" in t.lower():
            title = t
        else:
            mode = "tail"; cur_week = cur_task = None
            tail.append({"k": "h", "v": t})
        i += 1; continue

    m = re.match(r'^# WEEK (\d+)\s*·\s*([^—]+)—\s*(.*)$', s)
    if m:
        mode = "week"
        cur_week = new_week(m.group(1), m.group(2).strip(), m.group(3).strip())
        weeks.append(cur_week); cur_task = None
        i += 1; continue

    m = re.match(r'^## (\d+\.\d+)\s+(.+)$', s)
    if m and cur_week:
        rest, owner, hours = m.group(2), "", ""
        if '⏱' in rest:
            head, _, t2 = rest.rpartition('⏱')
            hours = "⏱ " + t2.strip()
            if '·' in head:
                ttl, _, owner = head.rpartition('·')
                ttl, owner = ttl.strip(), owner.strip()
            else:
                ttl = head.strip()
        else:
            ttl = rest.strip()
        cur_task = new_task(m.group(1), ttl, owner, hours)
        cur_week["tasks"].append(cur_task)
        i += 1; continue

    if s.startswith("## ") and mode == "tail":
        tail.append({"k": "h2", "v": s[3:].strip()}); i += 1; continue

    if re.match(r'^-{3,}$', s) or not s:
        i += 1; continue

    # tables
    if s.startswith("|"):
        rows = []
        while i < n and lines[i].strip().startswith("|"):
            rows.append(lines[i].strip()); i += 1
        if len(rows) >= 2:
            head = [c.strip() for c in rows[0].strip("|").split("|")]
            body = [[c.strip() for c in r.strip("|").split("|")] for r in rows[2:]]
            push({"k": "table", "head": head, "body": body})
        continue

    # blockquote
    if s.startswith(">"):
        buf = []
        while i < n and lines[i].strip().startswith(">"):
            buf.append(re.sub(r'^\s*>\s?', '', lines[i])); i += 1
        push({"k": "quote", "v": "\n".join(buf).strip()})
        continue

    # marker lines (⛔ 💡 🔍 ✅ ⚡)
    kind, label, body = strip_mark(s)
    if kind:
        buf = [body]
        i += 1
        while i < n and lines[i].strip() and not re.match(
                r'^\s*(#|##|\d+\.\s|\||>|-{3,}|\*\*Steps|\*\*Run of show)', lines[i].strip()) \
                and not strip_mark(lines[i].strip())[0]:
            buf.append(lines[i].strip()); i += 1
        push({"k": "mark", "kind": kind, "label": label, "v": " ".join(buf)})
        continue

    # steps / run-of-show heading
    if re.match(r'^\*\*(Steps|Run of show)', s):
        lbl = "Run of show" if "Run of show" in s else "Steps"
        extra = re.sub(r'^\*\*[^*]+\*\*\s*', '', s).strip(" —-")
        i += 1
        items = []
        while i < n:
            cs = lines[i].strip()
            mm = re.match(r'^\d+\.\s+(.*)$', cs)
            if mm:
                item = mm.group(1); i += 1
                while i < n and lines[i].startswith("   ") and lines[i].strip():
                    item += " " + lines[i].strip(); i += 1
                items.append(item)
            elif cs and not strip_mark(cs)[0] and not cs.startswith(("#", "|", ">", "**", "---")) and items:
                items[-1] += " " + cs; i += 1
            else:
                break
        push({"k": "steps", "label": lbl, "lead": extra, "items": items})
        continue

    # plain paragraph (may include bold-led notes)
    buf = [s]; i += 1
    while i < n and lines[i].strip() and not re.match(
            r'^\s*(#|\||>|-{3,}|\d+\.\s)', lines[i].strip()) and not strip_mark(lines[i].strip())[0]:
        buf.append(lines[i].strip()); i += 1
    push({"k": "p", "v": " ".join(buf)})

# ---------------------------------------------------------------- render
def r_blocks(blocks):
    out = []
    for b in blocks:
        if b["k"] == "p":
            out.append(f'<p>{inline(b["v"])}</p>')
        elif b["k"] == "quote":
            out.append(f'<div class="quote">{inline(b["v"])}</div>')
        elif b["k"] == "mark":
            out.append(
                f'<div class="mk mk-{b["kind"]}"><span class="mkl">{b["label"]}</span>'
                f'<div class="mkb">{inline(b["v"])}</div></div>')
        elif b["k"] == "steps":
            lead = f'<div class="stepslead">{inline(b["lead"])}</div>' if b.get("lead") else ""
            its = "".join(f"<li>{inline(x)}</li>" for x in b["items"])
            out.append(f'<div class="steps"><span class="stepsl">{b["label"]}</span>{lead}<ol>{its}</ol></div>')
        elif b["k"] == "table":
            th = "".join(f"<th>{inline(c)}</th>" for c in b["head"])
            tb = "".join("<tr>" + "".join(f"<td>{inline(c)}</td>" for c in row) + "</tr>"
                         for row in b["body"])
            out.append(f'<div class="tw"><table><thead><tr>{th}</tr></thead><tbody>{tb}</tbody></table></div>')
        elif b["k"] == "h":
            out.append(f'<h2>{inline(b["v"])}</h2>')
        elif b["k"] == "h2":
            out.append(f'<h3>{inline(b["v"])}</h3>')
    return "".join(out)

total_tasks = sum(len(w["tasks"]) for w in weeks)
nav = "".join(f'<a href="#w{w["num"]}">W{w["num"]}</a>' for w in weeks)

wk_html = []
for w in weeks:
    tasks = []
    for t in w["tasks"]:
        tid = f'w{w["num"]}t{t["num"].replace(".", "-")}'
        chips = ""
        if t["owner"]:
            chips += f'<span class="chip own">{html.escape(t["owner"])}</span>'
        if t["hours"]:
            chips += f'<span class="chip hrs">{html.escape(t["hours"])}</span>'
        tasks.append(f'''<article class="task" id="{tid}">
<header><label class="cb"><input type="checkbox" data-k="{tid}"><span></span></label>
<h3><span class="tn">{t["num"]}</span>{inline(t["title"])}</h3><div class="chips">{chips}</div></header>
<div class="body">{r_blocks(t["blocks"])}</div></article>''')
    wk_html.append(f'''<section class="week" id="w{w["num"]}">
<div class="whead"><div><span class="wn">Week {w["num"]}</span><h2>{inline(w["theme"])}</h2></div>
<div class="wmeta"><span class="dates">{html.escape(w["dates"])}</span>
<span class="wprog" data-week="{w["num"]}"></span></div></div>
{"".join(tasks)}</section>''')

CSS = """
:root{--paper:#fbfaf9;--surface:#fff;--surface-2:#f2efec;--line:#e3e0dc;--line-soft:#efece9;
--ink:#1a1a1a;--ink-2:#4a4a48;--muted:#8a8781;--accent:#3d6bfb;--accent-soft:#e8edfe;
--negative:#c0504d;--negative-soft:#f7eae8;--positive:#1f6f4a;--positive-soft:#e8f4ee;
--warn:#A8621A;--warn-soft:#F8EFE3;--purple:#7c3aed;--purple-soft:#f3e8fe;
--sans:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
--shadow-sm:0 1px 3px rgba(26,26,26,.04)}
*{box-sizing:border-box}
body{font-family:var(--sans);background:var(--paper);color:var(--ink);margin:0;padding:0 20px 80px;
line-height:1.55;-webkit-font-smoothing:antialiased}
.container{max-width:1000px;margin:0 auto}
header.top{padding:40px 0 8px}
.eyebrow{font-size:.75rem;letter-spacing:.12em;text-transform:uppercase;color:var(--accent);font-weight:700;margin-bottom:12px}
h1{font-size:clamp(30px,4.6vw,44px);margin:0 0 14px;line-height:1.1;letter-spacing:-.02em}
.intro{color:var(--ink-2);max-width:72ch}
.legend{display:flex;flex-wrap:wrap;gap:8px;margin:20px 0}
.legend span{font-size:.75rem;font-weight:600;border-radius:99px;padding:5px 12px;border:1px solid var(--line);background:var(--surface)}
.legend .l-prereq{color:var(--negative);border-color:#eccfcd}
.legend .l-tip{color:var(--accent);border-color:#cfd9fb}
.legend .l-res{color:var(--purple);border-color:#e0ccfa}
.legend .l-done{color:var(--positive);border-color:#c9e2d5}
nav.sticky{position:sticky;top:0;z-index:20;background:rgba(251,250,249,.94);backdrop-filter:blur(8px);
border-bottom:1px solid var(--line);padding:10px 0;margin-bottom:28px;display:flex;gap:6px;flex-wrap:wrap;align-items:center}
nav.sticky a{font-size:.76rem;font-weight:700;color:var(--ink-2);text-decoration:none;padding:5px 10px;border-radius:7px;border:1px solid var(--line);background:var(--surface)}
nav.sticky a:hover{color:var(--accent);border-color:var(--accent)}
.prog{margin-left:auto;font-size:.78rem;font-weight:700;color:var(--muted)}
.prog b{color:var(--positive)}
.week{margin:34px 0}
.whead{display:flex;justify-content:space-between;align-items:flex-end;gap:14px;flex-wrap:wrap;
padding-bottom:12px;border-bottom:2px solid var(--ink);margin-bottom:16px}
.wn{font-size:.72rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--accent)}
.whead h2{margin:2px 0 0;font-size:1.5rem;letter-spacing:-.01em;max-width:26ch}
.wmeta{text-align:right}
.dates{display:block;font-size:.85rem;font-weight:700;color:var(--muted)}
.wprog{font-size:.74rem;color:var(--muted);font-weight:600}
.task{background:var(--surface);border:1px solid var(--line);border-radius:14px;box-shadow:var(--shadow-sm);margin:12px 0;overflow:hidden}
.task header{display:flex;gap:12px;align-items:flex-start;padding:16px 20px;background:var(--surface-2);border-bottom:1px solid var(--line);flex-wrap:wrap}
.task h3{margin:0;font-size:1rem;flex:1;min-width:200px;line-height:1.35}
.tn{display:inline-block;font-size:.72rem;font-weight:800;color:var(--accent);margin-right:8px;font-variant-numeric:tabular-nums}
.chips{display:flex;gap:6px;flex-wrap:wrap}
.chip{font-size:.7rem;font-weight:700;padding:3px 9px;border-radius:6px;white-space:nowrap}
.chip.own{background:var(--accent-soft);color:var(--accent)}
.chip.hrs{background:var(--surface);color:var(--muted);border:1px solid var(--line)}
.cb{position:relative;display:inline-flex;cursor:pointer;padding-top:2px}
.cb input{position:absolute;opacity:0;width:0;height:0}
.cb span{width:20px;height:20px;border-radius:6px;border:2px solid var(--line);background:var(--surface);display:block}
.cb input:checked+span{background:var(--positive);border-color:var(--positive)}
.cb input:checked+span::after{content:"";position:absolute;left:7px;top:5px;width:5px;height:10px;border:solid #fff;border-width:0 2px 2px 0;transform:rotate(45deg)}
.task.done{opacity:.55}
.task.done h3{text-decoration:line-through}
.body{padding:16px 20px}
.body p{margin:0 0 12px;color:var(--ink-2)}
.body p:last-child{margin-bottom:0}
.mk{display:grid;grid-template-columns:112px 1fr;gap:12px;padding:11px 14px;border-radius:10px;margin:10px 0;font-size:.93rem}
.mkl{font-size:.66rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;padding-top:2px}
.mkb{color:var(--ink-2)}
.mk-prereq{background:var(--negative-soft);border-left:3px solid var(--negative)}
.mk-prereq .mkl{color:var(--negative)}
.mk-tip{background:var(--accent-soft);border-left:3px solid var(--accent)}
.mk-tip .mkl{color:var(--accent)}
.mk-res{background:var(--purple-soft);border-left:3px solid var(--purple)}
.mk-res .mkl{color:var(--purple)}
.mk-done{background:var(--positive-soft);border-left:3px solid var(--positive)}
.mk-done .mkl{color:var(--positive)}
.mk-now{background:var(--warn-soft);border-left:3px solid var(--warn)}
.mk-now .mkl{color:var(--warn)}
.steps{margin:12px 0}
.stepsl{font-size:.66rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
.stepslead{font-size:.9rem;color:var(--ink-2);margin-top:4px}
.steps ol{margin:8px 0 0;padding-left:22px}
.steps li{margin:7px 0;color:var(--ink-2)}
.quote{background:var(--surface-2);border-left:3px solid var(--muted);border-radius:0 10px 10px 0;
padding:12px 16px;margin:12px 0;font-size:.93rem;color:var(--ink-2)}
.tw{overflow-x:auto;margin:14px 0}
table{border-collapse:collapse;width:100%;font-size:.88rem;background:var(--surface);border:1px solid var(--line);border-radius:12px;overflow:hidden}
th{text-align:left;font-size:.68rem;text-transform:uppercase;letter-spacing:.07em;color:var(--muted);padding:11px 13px;background:var(--surface-2);border-bottom:1px solid var(--line)}
td{padding:11px 13px;border-bottom:1px solid var(--line-soft);color:var(--ink-2);vertical-align:top}
tr:last-child td{border-bottom:none}
.tail{margin-top:48px}
.tail h2{font-size:1.4rem;border-bottom:2px solid var(--ink);padding-bottom:10px;margin:36px 0 14px}
footer{margin-top:48px;padding-top:16px;border-top:1px solid var(--line);font-size:.78rem;color:var(--muted)}
@media print{nav.sticky{display:none}.task{break-inside:avoid}.cb{display:none}}
"""

JS = """
(function(){
 var boxes=[].slice.call(document.querySelectorAll('.cb input'));
 function load(){try{return JSON.parse(localStorage.getItem('mm-exec-brands')||'{}')}catch(e){return {}}}
 function save(s){try{localStorage.setItem('mm-exec-brands',JSON.stringify(s))}catch(e){}}
 var st=load();
 function paint(){
  var done=0;
  boxes.forEach(function(b){var t=b.closest('.task');if(b.checked){t.classList.add('done');done++}else{t.classList.remove('done')}});
  document.getElementById('prog').innerHTML='<b>'+done+'</b> / '+boxes.length+' done';
  [].slice.call(document.querySelectorAll('.wprog')).forEach(function(el){
    var wk=el.getAttribute('data-week');
    var inW=[].slice.call(document.querySelectorAll('#w'+wk+' .cb input'));
    var d=inW.filter(function(x){return x.checked}).length;
    el.textContent=d+' / '+inW.length+' complete';
  });
 }
 boxes.forEach(function(b){
  b.checked=!!st[b.dataset.k];
  b.addEventListener('change',function(){st[b.dataset.k]=b.checked;save(st);paint()});
 });
 paint();
})();
"""

page = f"""<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{html.escape(title)} | Minds &amp; Models</title>
<style>{CSS}</style></head><body><div class="container">
<header class="top">
<div class="eyebrow">Operation Blitzkrieg · working document</div>
<h1>Brands — Deep Execution Guide</h1>
<div class="intro">{r_blocks(meta)}</div>
<div class="legend"><span class="l-prereq">⛔ Prerequisite — blocks the task</span>
<span class="l-tip">💡 Operator tip</span><span class="l-res">🔍 Research gap</span>
<span class="l-done">✅ Done when</span><span>⏱ Estimated hours</span></div>
</header>
<nav class="sticky">{nav}<a href="#tail">Rules &amp; research</a><span class="prog" id="prog"></span></nav>
{"".join(wk_html)}
<div class="tail" id="tail">{r_blocks(tail)}</div>
<footer>Generated from <code>{html.escape(SRC.name)}</code> — the markdown is the source of truth.
Re-render: <code>python3 scripts/build-execution-html.py {html.escape(str(SRC.relative_to(SRC.parents[2])) if len(SRC.parents)>2 else SRC.name)}</code> ·
Checkbox progress is stored in this browser only. Minds &amp; Models internal.</footer>
</div><script>{JS}</script></body></html>"""

OUT.write_text(page, encoding="utf-8")
print(f"wrote {OUT}  ({len(page)/1024:.0f} KB) — {len(weeks)} weeks, {total_tasks} tasks")
