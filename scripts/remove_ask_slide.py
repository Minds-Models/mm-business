import re

with open('decks/marek-sacha-intro-deck-final.html', 'r') as f:
    content = f.read()

# The Ask slide
# <!-- 15. Investment -->
# <section class="slide center"> ... </section>

s1 = content.find('<!-- 15. Investment -->')
if s1 != -1:
    content = content[:s1]
else:
    print("Could not find the exact marker for the Ask slide.")

# Because we removed the last slide, we must ensure we close the deck and body
if "</div>\n</body>\n</html>" not in content:
    content += "\n</div>\n</body>\n</html>"

# Now we need to fix the slide numbers (pageno)
slides_match = list(re.finditer(r'<div class="pageno">\d+ / \d+</div>', content))
total_slides = len(slides_match)

def replace_pageno(m):
    replace_pageno.counter += 1
    return f'<div class="pageno">{replace_pageno.counter:02d} / {total_slides:02d}</div>'
replace_pageno.counter = 0

content = re.sub(r'<div class="pageno">\d+ / \d+</div>', replace_pageno, content)

with open('decks/marek-sacha-intro-deck-final.html', 'w') as f:
    f.write(content)

print("done")
