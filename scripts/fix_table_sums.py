import re

with open('decks/marek-sacha-intro-deck-final.html', 'r') as f:
    content = f.read()

# Update September
# Sep: €1,1k + €10,1k = €11,2k (already correct)

# Update October
# Oct: €3,2k + €18,7k = €21,9k (currently says 22,0k)
content = re.sub(
    r'(<td style="padding:16px 24px; font-weight:700; color:var\(--ink\);">Oct-26</td>.*?<td style="padding:16px 24px; font-weight:800; color:var\(--blue\); text-align:right; background:var\(--blue-soft\);">)€22,0k(</td>)',
    r'\g<1>€21,9k\g<2>',
    content,
    flags=re.DOTALL
)

# Update November
# Nov: €6,5k + €8,6k = €15,1k (already correct)

# Update December
# Dec: €10,8k + €13,7k = €24,5k (already correct)

with open('decks/marek-sacha-intro-deck-final.html', 'w') as f:
    f.write(content)
