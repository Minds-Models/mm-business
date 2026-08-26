import re

with open('decks/marek-sacha-intro-deck-final.html', 'r') as f:
    content = f.read()

# Make sure all fonts in Personalization (now Retailers) column are unified
# They should all be: font-weight:600; color:var(--ink-2);
months = ['Sep-26', 'Oct-26', 'Nov-26', 'Dec-26']
for month in months:
    # Need to match the row for this month and update the first data cell after it
    # Currently it's like:
    # <td style="padding:16px 24px; font-weight:700; color:var(--ink);">Sep-26</td>
    # <td style="padding:16px 24px; font-weight:600; color:var(--ink-2); text-align:right;">€1,1k</td>
    # Actually they are already unified for Sep-Dec! (font-weight:600; color:var(--ink-2); text-align:right;)
    pass

