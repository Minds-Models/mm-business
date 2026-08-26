import re

with open('decks/marek-sacha-intro-deck-final.html', 'r') as f:
    content = f.read()

ask_slide = """
<!-- 15. Investment -->
<section class="slide center">
  <div class="top" style="position:absolute; top:34px; left:54px; right:54px; margin:0">
    <span class="brand"><img src="../brand/logo/logo_mindsmodels-normal-black-trim.png" alt="Minds&Models"></span>
    <span class="meta">Investment</span>
  </div>
  <p class="label">12 · The Ask</p>
  <h1>Fueling the <span class="accent-co">measurement standard</span><br>for physical retail.</h1>
  <p class="lead mt14" style="max-width:70ch">We are raising capital to accelerate our chain deployments and lock in the data layer across Central Europe.</p>
  
  <div class="flow">COVER → PROBLEM → SOLUTION → <b>INVESTMENT</b></div><div class="pageno">12 / 12</div>
</section>
"""

# Insert before </div>\n</body>
content = content.replace('</div>\n</body>', ask_slide + '\n</div>\n</body>')

# Update slide total count
content = re.sub(r'/ 11</div>', '/ 12</div>', content)

with open('decks/marek-sacha-intro-deck-final.html', 'w') as f:
    f.write(content)

print("done")
