import re

with open('decks/marek-sacha-intro-deck-final.html', 'r') as f:
    content = f.read()

# Let's find the slide that has <div class="pageno">12 / 13</div>
# It starts with <section class="slide"> and ends with </section>
# But wait, there's a comment before it.
# Let's just find the section containing <div class="pageno">12 / 13</div>
pattern = re.compile(r'<!--[^>]*-->\n?<section class="slide"[^>]*>.*?<div class="pageno">12 / 13</div>\n?</section>\n?', re.DOTALL)

content = re.sub(pattern, '', content)

# Now renumber the slides
slides_match = list(re.finditer(r'<div class="pageno">\d+ / \d+</div>', content))
total_slides = len(slides_match)

def replace_pageno(m):
    replace_pageno.counter += 1
    return f'<div class="pageno">{replace_pageno.counter:02d} / {total_slides:02d}</div>'
replace_pageno.counter = 0

content = re.sub(r'<div class="pageno">\d+ / \d+</div>', replace_pageno, content)

with open('decks/marek-sacha-intro-deck-final.html', 'w') as f:
    f.write(content)
