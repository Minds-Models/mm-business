import re

with open('decks/marek-sacha-intro-deck-final.html', 'r') as f:
    content = f.read()

# Pattern to find slides marked with opacity: 0.5; filter: grayscale(1);
# Including the preceding comments if any.
# Let's match from <!-- \d+\. .*? --> or <!-- .*? --> to the end of the section
# We can just match <section class="slide" style="opacity: 0.5; filter: grayscale\(1\);"> to </section>
# and also any preceding comment.

pattern = re.compile(r'<!--[^>]*-->\n<section class="slide" style="opacity: 0.5; filter: grayscale\(1\);">.*?</section>\n?', re.DOTALL)

content = re.sub(pattern, '', content)

# Update slide numbers
slides_match = list(re.finditer(r'<div class="pageno">\d+ / \d+</div>', content))
total_slides = len(slides_match)
for i, match in enumerate(slides_match):
    # This might match the inner content. Let's just do a simpler replace.
    pass

# We can replace <div class="pageno">XX / YY</div> with <div class="pageno">{i+1:02d} / {total_slides}</div>
def replace_pageno(m):
    replace_pageno.counter += 1
    return f'<div class="pageno">{replace_pageno.counter:02d} / {total_slides:02d}</div>'
replace_pageno.counter = 0

content = re.sub(r'<div class="pageno">\d+ / \d+</div>', replace_pageno, content)

with open('decks/marek-sacha-intro-deck-final.html', 'w') as f:
    f.write(content)

