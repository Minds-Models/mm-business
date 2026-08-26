import re

with open('decks/marek-sacha-intro-deck-final.html', 'r') as f:
    content = f.read()

s1 = content.find('<!-- 3. Unit Economics -->')
e3 = content.find('<!-- 15. Investment -->')

if s1 != -1 and e3 != -1:
    content = content[:s1] + content[e3:]
else:
    print("Could not find the exact markers for the old slides.")

# Now we need to fix the slide numbers (pageno) and the labels.
slides_match = list(re.finditer(r'<div class="pageno">\d+ / \d+</div>', content))
total_slides = len(slides_match)

def replace_pageno(m):
    replace_pageno.counter += 1
    return f'<div class="pageno">{replace_pageno.counter:02d} / {total_slides:02d}</div>'
replace_pageno.counter = 0

content = re.sub(r'<div class="pageno">\d+ / \d+</div>', replace_pageno, content)

def replace_label(m):
    replace_label.counter += 1
    return f'<p class="label">{replace_label.counter:02d} · {m.group(1)}</p>'
replace_label.counter = 0

content = re.sub(r'<p class="label">\d+ · (.*?)</p>', replace_label, content)

with open('decks/marek-sacha-intro-deck-final.html', 'w') as f:
    f.write(content)
print("done")
