import re

with open('decks/marek-sacha-intro-deck-final.html', 'r') as f:
    content = f.read()

# 1. Remove Data Recurring header
content = re.sub(r'<th[^>]*>Data Recurring</th>\n\s*', '', content)

# 2. Update Jul-26 row
jul_regex = r'(<td[^>]*>Jul-26</td>\n\s*<td[^>]*>)€0(</td>\n\s*<td[^>]*>)€0(</td>\n\s*)<td[^>]*>€0</td>\n\s*(<td[^>]*>)€0(</td>)'
content = re.sub(jul_regex, r'\g<1>€300\g<2>€0\g<3>\g<4>€300\g<5>', content)

# 3. Update Aug-26 row
aug_regex = r'(<td[^>]*>Aug-26</td>\n\s*<td[^>]*>)€0(</td>\n\s*<td[^>]*>)€8,6k(</td>\n\s*)<td[^>]*>€0</td>\n\s*(<td[^>]*>)€8,6k(</td>)'
content = re.sub(aug_regex, r'\g<1>€500\g<2>€8,6k\g<3>\g<4>€9,1k\g<5>', content)

# 4. Remove Data Recurring columns for other rows
for month in ['Sep-26', 'Oct-26', 'Nov-26', 'Dec-26']:
    row_regex = r'(<td[^>]*>' + month + r'</td>\n\s*<td[^>]*>[^<]+</td>\n\s*<td[^>]*>[^<]+</td>\n\s*)<td[^>]*>€0</td>\n\s*(<td[^>]*>)'
    content = re.sub(row_regex, r'\g<1>\g<2>', content)

with open('decks/marek-sacha-intro-deck-final.html', 'w') as f:
    f.write(content)

