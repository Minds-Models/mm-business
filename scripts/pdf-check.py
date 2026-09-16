#!/usr/bin/env python3
"""Check a PDF for constructs that some viewers render wrong.

Fails (exit 1) on:
  - soft masks (/SMask in ExtGState): Mac Preview draws them as grey/black boxes
  - function-based shadings (ShadingType 1): pdf.js (Slack, web previews) draws them pink
Reports, without failing: other shading types, Type 3 fonts.
Usage: scripts/pdf-check.py file.pdf [more.pdf ...]
"""
import sys, warnings
warnings.filterwarnings("ignore")
from pypdf import PdfReader
from pypdf.generic import IndirectObject

def walk_resources(res, seen, acc):
    if res is None: return
    res = res.get_object()
    if id(res) in seen: return
    seen.add(id(res))
    for gs in (res.get('/ExtGState') or {}).values():
        if '/SMask' in gs.get_object() and gs.get_object()['/SMask'] != '/None':
            acc['smask'] += 1
    for sh in (res.get('/Shading') or {}).values():
        acc['shading'][sh.get_object().get('/ShadingType')] = acc['shading'].get(sh.get_object().get('/ShadingType'), 0) + 1
    for pat in (res.get('/Pattern') or {}).values():
        p = pat.get_object()
        if '/Shading' in p:
            t = p['/Shading'].get_object().get('/ShadingType')
            acc['shading'][t] = acc['shading'].get(t, 0) + 1
        if '/Resources' in p: walk_resources(p['/Resources'], seen, acc)
    for f in (res.get('/Font') or {}).values():
        if f.get_object().get('/Subtype') == '/Type3': acc['type3'] += 1
    for xo in (res.get('/XObject') or {}).values():
        x = xo.get_object()
        if x.get('/Group') is not None and '/SMask' in str(x.get('/Group')): acc['smask'] += 1
        if '/Resources' in x: walk_resources(x['/Resources'], seen, acc)

bad = False
for path in sys.argv[1:]:
    acc = {'smask': 0, 'shading': {}, 'type3': 0}
    r = PdfReader(path)
    seen = set()
    for page in r.pages:
        walk_resources(page.get('/Resources'), seen, acc)
    problems = []
    if acc['smask']: problems.append(f"{acc['smask']} soft masks (grey/black boxes in Mac Preview)")
    if acc['shading'].get(1): problems.append(f"{acc['shading'][1]} function shadings (pink in pdf.js / Slack)")
    status = 'FAIL' if problems else 'OK'
    bad |= bool(problems)
    print(f"{status}  {path}  pages={len(r.pages)} shadings={acc['shading'] or '{}'} type3_fonts={acc['type3']}")
    for p in problems: print('      -', p)
sys.exit(1 if bad else 0)
