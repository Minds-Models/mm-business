import re

with open('decks/marek-sacha-intro-deck-final.html', 'r') as f:
    content = f.read()

# 1. Update headers
content = content.replace(
    '<th style="padding:16px 24px; font-size:10.5px; font-weight:800; text-transform:uppercase; letter-spacing:.05em; color:var(--muted); text-align:right;">Personalization</th>',
    '<th style="padding:16px 24px; font-size:10.5px; font-weight:800; text-transform:uppercase; letter-spacing:.05em; color:var(--muted); text-align:right;">Retailers</th>'
)

content = content.replace(
    '<th style="padding:16px 24px; font-size:10.5px; font-weight:800; text-transform:uppercase; letter-spacing:.05em; color:var(--muted); text-align:right;">Data One-off</th>',
    '<th style="padding:16px 24px; font-size:10.5px; font-weight:800; text-transform:uppercase; letter-spacing:.05em; color:var(--muted); text-align:right;">Brands / Data</th>'
)

# 2. Update July and August font-weight for "Retailers" column to match others (font-weight:600; color:var(--ink-2);)
# July
content = re.sub(
    r'(<td style="padding:16px 24px; font-weight:700; color:var\(--ink\);">Jul-26</td>\n\s*)<td style="padding:16px 24px; color:var\(--muted\); text-align:right;">(€300)</td>',
    r'\1<td style="padding:16px 24px; font-weight:600; color:var(--ink-2); text-align:right;">\2</td>',
    content
)
# And the Data column for Jul
content = re.sub(
    r'(<td style="padding:16px 24px; font-weight:600; color:var\(--ink-2\); text-align:right;">€300</td>\n\s*)<td style="padding:16px 24px; color:var\(--muted\); text-align:right;">(€0)</td>',
    r'\1<td style="padding:16px 24px; font-weight:600; color:var(--ink-2); text-align:right;">\2</td>',
    content
)

# August 
content = re.sub(
    r'(<td style="padding:16px 24px; font-weight:700; color:var\(--ink\);">Aug-26</td>\n\s*)<td style="padding:16px 24px; color:var\(--muted\); text-align:right;">(€500)</td>',
    r'\1<td style="padding:16px 24px; font-weight:600; color:var(--ink-2); text-align:right;">\2</td>',
    content
)

# 3. Update Aug data revenue to €5.1k and combined
content = re.sub(
    r'(<td style="padding:16px 24px; font-weight:700; color:var\(--ink\);">Aug-26</td>\n\s*<td style="padding:16px 24px; font-weight:600; color:var\(--ink-2\); text-align:right;">€500</td>\n\s*<td[^>]*>)€8,6k(</td>\n\s*<td[^>]*>)€9,1k(</td>)',
    r'\g<1>€5,1k\g<2>€5,6k\g<3>',
    content
)

with open('decks/marek-sacha-intro-deck-final.html', 'w') as f:
    f.write(content)
