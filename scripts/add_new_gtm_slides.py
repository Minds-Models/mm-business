import re

with open('decks/marek-sacha-intro-deck-final.html', 'r') as f:
    content = f.read()

# We want to replace slides 09 (Unit Economics), 10 (Business Model), 11 (GTM & Execution Roadmap)
# with our new consolidated slides. The user asked to keep the old ones and mark them visibly.

# Let's find the sections to mark as "OLD"
def mark_old(match):
    return match.group(0).replace('class="slide"', 'class="slide" style="opacity: 0.5; filter: grayscale(1);"', 1).replace('<h1', '<h1 style="text-decoration: line-through;"', 1).replace('<h2', '<h2 style="text-decoration: line-through;"', 1)

content = re.sub(r'<!-- 3\. Unit Economics -->.*?</section>', mark_old, content, flags=re.DOTALL)
content = re.sub(r'<!-- Business Model \(3 phases\) -->.*?</section>', mark_old, content, flags=re.DOTALL)
content = re.sub(r'<!-- 4\. Business Plan -->.*?</section>', mark_old, content, flags=re.DOTALL)


new_slides = """
<!-- NEW 1. Dual Monetization Engine (Combines Unit Economics and Business Model) -->
<section class="slide center" style="padding-top:60px;">
  <div class="top" style="position:absolute; top:34px; left:54px; right:54px; margin:0">
    <span class="brand"><img src="../brand/logo/logo_mindsmodels-normal-black.png" alt="Minds&Models"></span>
    <span class="meta">Business Model &amp; Unit Economics</span>
  </div>
  <p class="label" style="text-align:center;">10 · Business Model</p>
  
  <h1 style="text-align:center; font-size:44px; font-weight:700; color:#1e293b; margin-bottom:40px;">The <span style="color:#3b82f6;">Dual Monetization</span> Engine</h1>
  
  <div style="display:flex; flex-direction:column; align-items:flex-start; gap:16px; width:100%; max-width:1040px; margin:0 auto;">
    
    <!-- Phase 3 -->
    <div class="card" style="width:1040px; padding:24px 32px; display:flex; gap:32px; align-items:center; border:1px solid var(--line); box-shadow:0 4px 12px rgba(15,23,42,0.02); border-radius:12px; background:var(--card);">
      <div style="width:280px; flex:none; text-align:left;">
        <div style="font-size:16px; font-weight:700; color:var(--ink-2); line-height:1.3;">Brands &amp; Data Brokers</div>
        <div style="font-size:14px; font-weight:600; color:var(--muted); margin-top:6px;">Data &amp; Measurement</div>
        <div style="font-size:18px; font-weight:800; color:var(--pos); margin-top:6px;">€40k–320k <span style="font-size:12px; font-weight:600; color:var(--muted);">/ yr / brand</span></div>
      </div>
      <div style="width:1px; height:60px; background:var(--line); flex:none;"></div>
      <div style="flex:1; text-align:left;">
        <div style="font-size:18px; color:var(--muted); margin-bottom:4px;"><i>Phase 2:</i> <b style="color:var(--ink); font-weight:800;">Store Intelligence</b></div>
        <p style="font-size:15px; color:var(--ink-2); line-height:1.5;">
          Selling closed-loop behavioral data to brands. Since the hardware is already paid for by Phase 1, this is <b>pure scalable margin</b>.
        </p>
      </div>
    </div>

    <!-- Phase 1 -->
    <div class="card" style="width:640px; padding:28px 40px; display:flex; gap:32px; align-items:center; border:2px solid var(--blue-100); background:linear-gradient(90deg, #f0f7ff 0%, #e0f2fe 100%); box-shadow:0 8px 24px rgba(37,99,235,0.08); border-radius:12px;">
      <div style="width:280px; flex:none; text-align:left;">
        <div style="font-size:18px; font-weight:800; color:var(--blue-d); line-height:1.3;">Retailers &amp; DOOH Operators</div>
        <div style="font-size:15px; font-weight:600; color:var(--blue); margin-top:6px;">In-Store Activation</div>
        <div style="font-size:15px; font-weight:800; color:var(--blue-d); margin-top:6px;">€150 <span style="font-size:13px; font-weight:600; opacity:0.8;">/ device / month</span></div>
      </div>
      <div style="width:2px; height:60px; background:var(--blue-100); flex:none;"></div>
      <div style="flex:1; text-align:left;">
        <div style="font-size:20px; color:var(--blue); margin-bottom:6px;"><i>Phase 1:</i> <b style="color:var(--blue-d); font-weight:800;">Physical Recommender</b> <span style="font-size:15px; font-weight:700;">(today)</span></div>
        <p style="font-size:15px; color:var(--blue-d); line-height:1.5; opacity:0.9;">
          Base price paid by advertisers for real-time personalization. <b>Covers device costs immediately.</b>
        </p>
      </div>
    </div>
    
  </div>

  <div class="tk mt18" style="width:100%; max-width:1040px;">
    <div class="box i" style="display:flex; justify-content:space-around; padding:18px 24px; align-items:center; background:#fff;">
      <div style="text-align:center;"><div style="font-size:11px; font-weight:800; text-transform:uppercase; color:var(--muted); letter-spacing:.05em;">COGS (Infrastructure)</div><div style="font-size:26px; font-weight:800; color:var(--slate); margin-top:4px;">~€20 <span style="font-size:14px; font-weight:600; color:var(--muted);">/ mo</span></div></div>
      <div style="width:1px; height:40px; background:var(--line);"></div>
      <div style="text-align:center;"><div style="font-size:11px; font-weight:800; text-transform:uppercase; color:var(--muted); letter-spacing:.05em;">Base Gross Profit (Phase 1)</div><div style="font-size:26px; font-weight:800; color:var(--ink); margin-top:4px;">~€130 <span style="font-size:14px; font-weight:600; color:var(--muted);">/ mo</span></div></div>
      <div style="width:1px; height:40px; background:var(--line);"></div>
      <div style="text-align:center;"><div style="font-size:11px; font-weight:800; text-transform:uppercase; color:var(--muted); letter-spacing:.05em;">Marginal Cost of Data (Phase 2)</div><div style="font-size:26px; font-weight:800; color:var(--pos); margin-top:4px;">Zero</div></div>
    </div>
  </div>
  
  <div class="flow">COVER → CUSTOMERS → TRACTION → <b>ECONOMICS</b> → GTM</div><div class="pageno">09 / 13</div>
</section>

<!-- NEW 2. H2 2026 Pipeline Projection -->
<section class="slide">
  <div class="top"><span class="brand"><img src="../brand/logo/logo_mindsmodels-normal-black.png" alt="Minds&Models"></span><span class="meta">GTM &amp; Roadmap</span></div>
  <p class="label">11 · H2 2026 Execution Pipeline</p>
  <h2>The Next 6 Months: <span class="accent">Tangible execution</span> of the dual monetization model.</h2>

  <div class="card mt18" style="padding:0; overflow:hidden;">
    <table style="width:100%; border-collapse:collapse; font-size:13px; text-align:left;">
      <thead>
        <tr style="background:#f8fafc; border-bottom:1px solid var(--line);">
          <th style="padding:16px 24px; font-size:10.5px; font-weight:800; text-transform:uppercase; letter-spacing:.05em; color:var(--muted);">Month</th>
          <th style="padding:16px 24px; font-size:10.5px; font-weight:800; text-transform:uppercase; letter-spacing:.05em; color:var(--muted); text-align:right;">Personalization</th>
          <th style="padding:16px 24px; font-size:10.5px; font-weight:800; text-transform:uppercase; letter-spacing:.05em; color:var(--muted); text-align:right;">Data One-off</th>
          <th style="padding:16px 24px; font-size:10.5px; font-weight:800; text-transform:uppercase; letter-spacing:.05em; color:var(--muted); text-align:right;">Data Recurring</th>
          <th style="padding:16px 24px; font-size:10.5px; font-weight:800; text-transform:uppercase; letter-spacing:.05em; color:var(--ink); text-align:right; background:var(--blue-soft);">Combined</th>
          <th style="padding:16px 24px; font-size:10.5px; font-weight:800; text-transform:uppercase; letter-spacing:.05em; color:var(--muted);">Key Milestones &amp; Deals</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid #eef2f6;">
          <td style="padding:16px 24px; font-weight:700; color:var(--ink);">Jul-26</td>
          <td style="padding:16px 24px; color:var(--muted); text-align:right;">€0</td>
          <td style="padding:16px 24px; color:var(--muted); text-align:right;">€0</td>
          <td style="padding:16px 24px; color:var(--muted); text-align:right;">€0</td>
          <td style="padding:16px 24px; font-weight:800; color:var(--ink); text-align:right; background:var(--blue-soft);">€0</td>
          <td style="padding:16px 24px; color:var(--ink-2);">—</td>
        </tr>
        <tr style="border-bottom:1px solid #eef2f6;">
          <td style="padding:16px 24px; font-weight:700; color:var(--ink);">Aug-26</td>
          <td style="padding:16px 24px; color:var(--muted); text-align:right;">€0</td>
          <td style="padding:16px 24px; font-weight:600; color:var(--ink-2); text-align:right;">€8,6k</td>
          <td style="padding:16px 24px; color:var(--muted); text-align:right;">€0</td>
          <td style="padding:16px 24px; font-weight:800; color:var(--ink); text-align:right; background:var(--blue-soft);">€8,6k</td>
          <td style="padding:16px 24px; color:var(--ink-2); font-weight:600;">JTI tobacco pilot</td>
        </tr>
        <tr style="border-bottom:1px solid #eef2f6;">
          <td style="padding:16px 24px; font-weight:700; color:var(--ink);">Sep-26</td>
          <td style="padding:16px 24px; font-weight:600; color:var(--ink-2); text-align:right;">€1,1k</td>
          <td style="padding:16px 24px; font-weight:600; color:var(--ink-2); text-align:right;">€10,1k</td>
          <td style="padding:16px 24px; color:var(--muted); text-align:right;">€0</td>
          <td style="padding:16px 24px; font-weight:800; color:var(--ink); text-align:right; background:var(--blue-soft);">€11,2k</td>
          <td style="padding:16px 24px; color:var(--ink-2); font-weight:600;">SuperZoo × Vafo/Brit pet study</td>
        </tr>
        <tr style="border-bottom:1px solid #eef2f6;">
          <td style="padding:16px 24px; font-weight:700; color:var(--ink);">Oct-26</td>
          <td style="padding:16px 24px; font-weight:600; color:var(--ink-2); text-align:right;">€3,2k</td>
          <td style="padding:16px 24px; font-weight:600; color:var(--ink-2); text-align:right;">€18,7k</td>
          <td style="padding:16px 24px; color:var(--muted); text-align:right;">€0</td>
          <td style="padding:16px 24px; font-weight:800; color:var(--blue); text-align:right; background:var(--blue-soft);">€22,0k</td>
          <td style="padding:16px 24px; color:var(--ink-2); font-weight:600;">PMI pilot + SuperZoo × Purina study</td>
        </tr>
        <tr style="border-bottom:1px solid #eef2f6;">
          <td style="padding:16px 24px; font-weight:700; color:var(--ink);">Nov-26</td>
          <td style="padding:16px 24px; font-weight:600; color:var(--ink-2); text-align:right;">€6,5k</td>
          <td style="padding:16px 24px; font-weight:600; color:var(--ink-2); text-align:right;">€8,6k</td>
          <td style="padding:16px 24px; color:var(--muted); text-align:right;">€0</td>
          <td style="padding:16px 24px; font-weight:800; color:var(--blue); text-align:right; background:var(--blue-soft);">€15,1k</td>
          <td style="padding:16px 24px; color:var(--ink-2); font-weight:600;">BAT tobacco pilot</td>
        </tr>
        <tr>
          <td style="padding:16px 24px; font-weight:700; color:var(--ink);">Dec-26</td>
          <td style="padding:16px 24px; font-weight:600; color:var(--ink-2); text-align:right;">€10,8k</td>
          <td style="padding:16px 24px; font-weight:600; color:var(--ink-2); text-align:right;">€13,7k</td>
          <td style="padding:16px 24px; color:var(--muted); text-align:right;">€0</td>
          <td style="padding:16px 24px; font-weight:800; color:var(--blue); text-align:right; background:var(--blue-soft);">€24,5k</td>
          <td style="padding:16px 24px; color:var(--ink-2); font-weight:600;">O2 footfall + GymBeam benchmark</td>
        </tr>
      </tbody>
    </table>
  </div>
  
  <div class="flow">COVER → CUSTOMERS → TRACTION → ECONOMICS → <b>GTM</b></div><div class="pageno">10 / 13</div>
</section>
"""

# Insert the new slides right before the first old slide
insertion_point = content.find('<!-- 3. Unit Economics -->')
if insertion_point != -1:
    content = content[:insertion_point] + new_slides + content[insertion_point:]
else:
    print("Could not find insertion point!")

# Update slide total count
content = re.sub(r'/ 12</div>', '/ 14</div>', content)
content = re.sub(r'/ 13</div>', '/ 14</div>', content)

with open('decks/marek-sacha-intro-deck-final.html', 'w') as f:
    f.write(content)

print("Done")
