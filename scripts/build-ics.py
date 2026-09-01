#!/usr/bin/env python3
"""Export Blitzkrieg execution-guide tasks as Google-Calendar placeholders (.ics, Europe/Prague).

Usage: python3 scripts/build-ics.py            → blitzkrieg/josef-blitzkrieg.ics
Events are TRANSPARENT (show as Free) so they never block real meetings. UIDs are deterministic,
so re-importing into the SAME Google calendar updates events instead of duplicating them.
"""
import re, pathlib, datetime as dt, hashlib, sys

ROOT = pathlib.Path(__file__).resolve().parents[1] / "blitzkrieg"
OUT = ROOT / "josef-blitzkrieg.ics"
YEAR = 2026
PILLARS = [  # (label, file, emoji, priority)
    ("BRANDS",  ROOT / "brands/brands-execution-guide.md",        "🎯", 0),
    ("BROKERS", ROOT / "data-brokers/brokers-execution-guide.md", "🤝", 1),
    ("RMN",     ROOT / "rmn/rmn-execution-guide.md",              "📺", 2),
]
MON = {m: i+1 for i, m in enumerate("Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split())}
DAY_BLOCKS = [(9.0, 12.5), (13.5, 18.0)]   # 3.5h + 4.5h = 8h/day capacity
MAX_SESSION = 3.5

def parse_range(s):
    s = s.replace("—", "–").replace("-", "–")
    a, b = [x.strip() for x in s.split("–", 1)]
    m1, d1 = a.split(); m1 = MON[m1[:3]]
    if b.split()[0][:3] in MON: m2, d2 = b.split(); m2 = MON[m2[:3]]
    else: m2, d2 = m1, b
    return dt.date(YEAR, m1, int(d1)), dt.date(YEAR, m2, int(d2))

def parse_guide(label, path, emoji, prio):
    tasks, week = [], None
    text = path.read_text(encoding="utf-8")
    blocks = re.split(r'^(?=## \d+\.\d+ |# WEEK )', text, flags=re.M)
    for b in blocks:
        h = b.split("\n", 1)[0]
        m = re.match(r'^# WEEK (\d+) · (.+?) — (.*)$', h)
        if m:
            week = {"n": int(m.group(1)), "range": parse_range(m.group(2)), "theme": m.group(3).strip()}
            continue
        m = re.match(r'^## (\d+\.\d+) (.+)$', h)
        if not m or not week: continue
        rest = m.group(2)
        owner, hours_txt = "", ""
        if "⏱" in rest:
            head, _, hours_txt = rest.rpartition("⏱")
            title, _, owner = head.rpartition("·") if "·" in head else (head, "", "")
        else:
            title, _, owner = rest.rpartition("·") if "·" in rest else (rest, "", "")
        title, owner = title.strip(), owner.strip()
        f = re.search(r'F(\d+(?:\.\d+)?)h', hours_txt)
        if f: hours = float(f.group(1))
        else:
            g = re.search(r'(\d+(?:\.\d+)?)h', hours_txt)
            hours = float(g.group(1)) if g else 1.0
        body = b.split("\n", 1)[1] if "\n" in b else ""
        pre = re.search(r'⛔\s*(.+?)(?:\n\n|\n(?=[💡🔍✅⛔\*#]))', body, re.S)
        done = re.search(r'✅\s*\*\*Done when:\*\*\s*(.+?)(?:\n\n|\Z)', body, re.S)
        clean = lambda x: re.sub(r'\s+', ' ', re.sub(r'\*\*|`', '', x or '')).strip()
        # non-founder tasks (Dima/eng only) become 30-min review placeholders
        owners = set(re.findall(r'\b[JODHPMC]\b', owner))
        founder = bool(owners & {"J", "O"})
        if not founder: hours = 0.5
        tasks.append(dict(pillar=label, emoji=emoji, prio=prio, id=m.group(1), title=title, owner=owner or "—",
                          hours=hours, week=week, pre=clean(pre.group(1))[:240] if pre else "",
                          done=clean(done.group(1))[:240] if done else "", founder=founder))
    return tasks

tasks = [t for lab, p, e, pr in PILLARS for t in parse_guide(lab, p, e, pr)]
tasks.sort(key=lambda t: (t["week"]["range"][0], t["prio"], [int(x) for x in t["id"].split(".")]))

# ---------------- scheduler: fill weekday blocks, overflow to weekend flagged ----------------
used = {}   # date -> [used_h_block0, used_h_block1]
def place(task):
    start, end = task["week"]["range"]
    remaining, sessions, day = task["hours"], [], start
    while remaining > 0.01 and day <= end:
        if day.weekday() < 5:
            u = used.setdefault(day, [0.0, 0.0])
            for bi, (bs, be) in enumerate(DAY_BLOCKS):
                free = (be - bs) - u[bi]
                if free < 0.5 or remaining < 0.01: continue
                dur = min(MAX_SESSION, remaining, free)
                st = bs + u[bi]; u[bi] += dur; remaining -= dur
                sessions.append((day, st, dur, False))
        day += dt.timedelta(days=1)
    # overflow → weekend of the window, flagged
    day = start
    while remaining > 0.01:
        if day.weekday() >= 5 or day > end:
            dur = min(MAX_SESSION, remaining); sessions.append((day, 9.0, dur, True)); remaining -= dur
        day += dt.timedelta(days=1)
        if day > end + dt.timedelta(days=14): break
    return sessions

def esc(s): return (s.replace(chr(92), chr(92)*2).replace(";", chr(92)+";").replace(",", chr(92)+",").replace(chr(10), chr(92)+"n"))
def fold(line):
    b = line.encode("utf-8"); out = []
    while len(b) > 75:
        cut = 75
        while cut > 0 and (b[cut] & 0xC0) == 0x80: cut -= 1
        out.append(b[:cut]); b = b" " + b[cut:]
    out.append(b); return b"\r\n".join(out).decode("utf-8")
def dtl(d, h):
    hh, mm = int(h), int(round((h - int(h)) * 60))
    return dt.datetime(d.year, d.month, d.day, hh, mm).strftime("%Y%m%dT%H%M%S")
stamp = dt.datetime.now(dt.timezone.utc).strftime("%Y%m%dT%H%M%SZ")
GUIDE_URL = "file:///Users/josefnemecek/Desktop/Minds%26Models/mm-business/blitzkrieg/"

ev = []
def vevent(uid, summary, desc, cats, start=None, end=None, date=None, rrule=None, transparent=True):
    L = ["BEGIN:VEVENT", f"UID:{uid}@mm-blitzkrieg", f"DTSTAMP:{stamp}"]
    if date: L += [f"DTSTART;VALUE=DATE:{date.strftime('%Y%m%d')}",
                   f"DTEND;VALUE=DATE:{(date+dt.timedelta(days=1)).strftime('%Y%m%d')}"]
    else: L += [f"DTSTART;TZID=Europe/Prague:{start}", f"DTEND;TZID=Europe/Prague:{end}"]
    if rrule: L.append(f"RRULE:{rrule}")
    L += [f"SUMMARY:{esc(summary)}", f"DESCRIPTION:{esc(desc)}", f"CATEGORIES:{cats}",
          "TRANSP:TRANSPARENT" if transparent else "TRANSP:OPAQUE",
          "X-MICROSOFT-CDO-BUSYSTATUS:FREE" if transparent else "X-MICROSOFT-CDO-BUSYSTATUS:BUSY",
          "END:VEVENT"]
    ev.extend(L)

overflow_weeks, per_week = {}, {}
for t in tasks:
    sess = place(t)
    n = len(sess)
    for i, (d, st, dur, ovf) in enumerate(sess, 1):
        part = f" ({i}/{n})" if n > 1 else ""
        was_o = "" if "J" in t["owner"] else (" [was: " + t["owner"] + "]" if t["founder"] else " [review — " + t["owner"] + "]")
        summ = f"{'⚠ OVERFLOW ' if ovf else ''}{t['emoji']} {t['pillar']} {t['id']} {t['title']}{part}{was_o}"
        desc = (f"{t['pillar']} · task {t['id']} · owner {t['owner']} · est {t['hours']:g}h founder time"
                f"\nWeek {t['week']['n']} — {t['week']['theme']}"
                + (f"\n⛔ Prereq: {t['pre']}" if t['pre'] else "")
                + (f"\n✅ Done when: {t['done']}" if t['done'] else "")
                + ("\n⚠ This session is OVERFLOW: the week is over capacity. Treat as a cut list." if ovf else "")
                + f"\nGuide: {GUIDE_URL}{ {'BRANDS':'brands/brands','BROKERS':'data-brokers/brokers','RMN':'rmn/rmn'}[t['pillar']] }-execution-guide.html")
        uid = hashlib.md5(f"{t['pillar']}-{t['id']}-{i}".encode()).hexdigest()[:16]
        vevent(uid, summ, desc, f"Blitzkrieg,{t['pillar']}", dtl(d, st), dtl(d, st + dur))
        wk = d - dt.timedelta(days=d.weekday()); per_week[wk] = per_week.get(wk, 0) + dur
        if ovf: overflow_weeks[wk] = overflow_weeks.get(wk, 0) + dur

# ---------------- milestones & gates (all-day) ----------------
MS = [
 ("2026-09-05","🚩 GATE 0 — Mandate #1 signed? (brands calendar hangs on this) · real MRR known","cross"),
 ("2026-09-06","🎯 BRANDS M1 — ICP + budget-owner map, paper set, teasers ready","BRANDS"),
 ("2026-09-06","📺 RMN M1 — price-corridor memo + operator one-pager","RMN"),
 ("2026-09-13","🤝 BROKERS M1 — Tier-B map (10) + offer + floor memo","BROKERS"),
 ("2026-09-19","🔬 Parity v1 (evidence drop #2)","cross"),
 ("2026-09-20","📺 RMN M2 — NANOVO offer made · Vistar appetite probed","RMN"),
 ("2026-09-21","🏝 Ondřej OOO until Sep 28 — no new negotiations, artifacts only","cross"),
 ("2026-09-30","🚩 GATE 1 — Tobacco verdict (meeting w/ budget owner or line CUT) · bridge papered · brokers 5 convos + Tier-A intro","cross"),
 ("2026-10-01","🔬 Index fill gate — upper_brand ≥25% or index killed","cross"),
 ("2026-10-10","🔬 D2 cross-category parity — the decisive number (evidence drop #3)","cross"),
 ("2026-10-15","🚩 GATE 2 — AI-data kill-test verdict · SuperZoo platform+rights target · bridge trigger check","cross"),
 ("2026-10-18","🎯 BRANDS M3 — Cohort day #1 → ≥2 verbal commitments","BRANDS"),
 ("2026-10-31","🎯 BRANDS M4 — 2 seats invoiced (inside the budget window)","BRANDS"),
 ("2026-10-31","🤝 BROKERS M4 — 2 pilot agreements signed","BROKERS"),
 ("2026-10-31","📺 RMN M4 — one campaign measured at cost · price reaction logged","RMN"),
 ("2026-11-07","📺 RMN M5 — DECISION MEMO: 2027 line item or KILL","RMN"),
 ("2026-11-15","🚩 GATE 3 — round closed or bridge drawn · no new enterprise logo after today","cross"),
 ("2026-11-21","🏁 BLITZKRIEG VERDICT — 2+3 seats ≥€70k · 2 mandates · €400–600k · 2 pilots · rule of one","cross"),
]
for i, (d, s, c) in enumerate(MS):
    vevent(hashlib.md5(f"ms-{d}-{i}".encode()).hexdigest()[:16], s,
           "Milestone / gate from the Blitzkrieg plans. Verdict must be recorded in strategy/…/10-calendar-gates.md the same day.",
           f"Blitzkrieg,{c}", date=dt.date.fromisoformat(d))

# ---------------- rituals (weekly, transparent) ----------------
vevent("ritual-monday", "🧭 Monday protocol — 1 bottleneck · this week's evidence object · nearest clock",
       "Name exactly ONE bottleneck node (rights / data / proof / revenue / pull). All selling hours go there. "
       "Then: what evidence object does this week produce, for whom? Which clock is nearest? "
       "The calendar placeholders below are a MENU for the week — delete what the bottleneck doesn't need.",
       "Blitzkrieg,ritual", "20260824T090000", "20260824T093000", rrule="FREQ=WEEKLY;BYDAY=MO;UNTIL=20261121T000000Z")
vevent("ritual-friday", "📋 Friday — funnel counts · CRM hygiene · next evidence drop · hours-per-account check",
       "Stage counts + conversion (tripwire: first→deep-dive <20% = fix the story, not the volume). Every open deal has a "
       "dated next action. Log hours per account: any seat past 50h without a signature date is downgraded. "
       "Draft next week's evidence drop.", "Blitzkrieg,ritual", "20260828T160000", "20260828T164500",
       rrule="FREQ=WEEKLY;BYDAY=FR;UNTIL=20261121T000000Z")
vevent("ritual-discovery", "🔬 Discovery afternoon — RMN + BROKERS only (cap: this slot, nothing else)",
       "The only hours RMN and Brokers may consume each week. If their tasks don't fit here, they wait or die — "
       "Brands is the revenue pillar and this slot is what protects it.", "Blitzkrieg,ritual",
       "20260826T140000", "20260826T170000", rrule="FREQ=WEEKLY;BYDAY=WE;UNTIL=20261121T000000Z")

VTZ = """BEGIN:VTIMEZONE
TZID:Europe/Prague
X-LIC-LOCATION:Europe/Prague
BEGIN:DAYLIGHT
TZOFFSETFROM:+0100
TZOFFSETTO:+0200
TZNAME:CEST
DTSTART:19700329T020000
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU
END:DAYLIGHT
BEGIN:STANDARD
TZOFFSETFROM:+0200
TZOFFSETTO:+0100
TZNAME:CET
DTSTART:19701025T030000
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU
END:STANDARD
END:VTIMEZONE""".split("\n")

lines = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Minds & Models//Blitzkrieg planner//EN", "CALSCALE:GREGORIAN",
         "METHOD:PUBLISH", "X-WR-CALNAME:Blitzkrieg — Josef", "X-WR-TIMEZONE:Europe/Prague"] + VTZ + ev + ["END:VCALENDAR"]
OUT.write_text("\r\n".join(fold(l) for l in lines) + "\r\n", encoding="utf-8")

n_task = sum(1 for t in tasks); n_ev = sum(1 for l in ev if l == "BEGIN:VEVENT")
print(f"wrote {OUT}  — {n_task} tasks → {n_ev} events (incl. {len(MS)} milestones + 3 rituals)")
print("\nFounder-hours placed per week (Mon):")
for wk in sorted(per_week):
    flag = f"  ⚠ OVERFLOW {overflow_weeks[wk]:.1f}h" if wk in overflow_weeks else ""
    print(f"  {wk.isoformat()}  {per_week[wk]:5.1f}h{flag}")
