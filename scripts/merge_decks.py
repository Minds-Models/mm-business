import re

def main():
    with open('/Users/Ondroideus_1/mm-business/decks/marek-sacha-intro-deck.html', 'r') as f:
        marek = f.read()

    with open('/Users/Ondroideus_1/mm-business/decks/marek-sacha-intro-deck-ondra-part.html', 'r') as f:
        ondra = f.read()

    # Get the head from Marek's (we'll modify the logo css)
    head_match = re.search(r'(<head>.*?</head>)', marek, re.DOTALL)
    head = head_match.group(1)
    
    # Replace .brand img in head if it exists, otherwise add it
    if '.brand img' in head:
        head = re.sub(r'\.brand img\{[^}]+\}', '.brand img{display:block; height:38px; width:auto}', head)
    else:
        head = head.replace('</style>', '.brand img{display:block; height:38px; width:auto}\n</style>')
    
    # Change title
    head = re.sub(r'<title>.*?</title>', '<title>Minds&Models — Pitch Deck (Final)</title>', head)

    # Get the slides from Marek
    slides_marek_match = re.finditer(r'(<!-- .*?--><section class="slide.*?</section>)', marek, re.DOTALL)
    marek_slides = [m.group(1) for m in slides_marek_match]
    
    # If the comment parsing failed, fallback to just <section>
    if len(marek_slides) < 16:
        slides_marek_match = re.finditer(r'(<!--.*?-->\n)?(<section class="slide.*?</section>)', marek, re.DOTALL)
        marek_slides = [m.group(0) for m in slides_marek_match]

    # We want Cover (0) up to POS Connection (9) -> indices 0 to 9 (10 slides)
    keep_marek_slides = marek_slides[:10]
    
    # Get the slides from Ondra
    slides_ondra_match = re.finditer(r'(<!-- .*?--><section class="slide.*?</section>)', ondra, re.DOTALL)
    ondra_slides = [m.group(1) for m in slides_ondra_match]
    
    if len(ondra_slides) < 6:
        slides_ondra_match = re.finditer(r'(<!--.*?-->\n)?(<section class="slide.*?</section>)', ondra, re.DOTALL)
        ondra_slides = [m.group(0) for m in slides_ondra_match]

    # Ondra's slides: Cover (0), Customers (1), GTM (2), Economics (3), Plan (4), Traction (5)
    # We want 1 to 5
    keep_ondra_slides = ondra_slides[1:6]

    # Get the Investment slide from Marek (index 15)
    investment_slide = marek_slides[15]

    # Now we need to update the slide numbers and flow text for Ondra's slides and Investment slide
    # Total slides = 10 + 5 + 1 = 16
    
    all_slides = keep_marek_slides + keep_ondra_slides + [investment_slide]
    
    final_slides = []
    for i, slide in enumerate(all_slides):
        # Update page number
        slide = re.sub(r'<div class="pageno">\d+ / \d+</div>', f'<div class="pageno">{i+1:02d} / 16</div>', slide)
        # We also need to fix labels for Ondra's slides
        if i >= 10 and i <= 14:
            # Ondra's slides were labeled 01, 02, etc. We need to relabel them to 10, 11, etc.
            label_match = re.search(r'<p class="label">0\d · (.*?)</p>', slide)
            if label_match:
                slide = re.sub(r'<p class="label">0\d · .*?</p>', f'<p class="label">{i:02d} · {label_match.group(1)}</p>', slide)
        elif i == 15:
            # Investment slide
            label_match = re.search(r'<p class="label">\d\d · (.*?)</p>', slide)
            if label_match:
                slide = re.sub(r'<p class="label">\d\d · .*?</p>', f'<p class="label">{i:02d} · {label_match.group(1)}</p>', slide)

        # Update logos in all slides to actual image
        slide = re.sub(r'<span class="brand">Minds&Models</span>', r'<span class="brand"><img src="../brand/logo/logo_mindsmodels-normal-black.png" alt="Minds&Models"></span>', slide)
        
        final_slides.append(slide)

    # Build the final HTML
    final_html = f'''<!DOCTYPE html>
<html lang="en">
{head}
<body>
<div class="deck">

{chr(10).join(final_slides)}

</div>
</body>
</html>'''

    with open('/Users/Ondroideus_1/mm-business/decks/marek-sacha-intro-deck-final.html', 'w') as f:
        f.write(final_html)
    print("Merge complete")

if __name__ == '__main__':
    main()
