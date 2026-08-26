import re

with open('decks/marek-sacha-intro-deck-final.html', 'r') as f:
    content = f.read()

start_marker = '<!-- NEW 1. Dual Monetization Engine (Combines Unit Economics and Business Model) -->'
end_marker = '<!-- NEW 2. H2 2026 Pipeline Projection -->'
start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

new_slide_9 = """<!-- NEW 1. Dual Monetization Engine (Combines Unit Economics and Business Model) -->
<section class="slide">
  <div class="top"><span class="brand"><img src="../brand/logo/logo_mindsmodels-normal-black.png" alt="Minds&Models"></span><span class="meta">Business Model &amp; Unit Economics</span></div>
  <p class="label">10 · Business Model</p>
  
  <h2>The <span class="accent">Dual Monetization</span> Engine</h2>
  
  <div style="display:flex; flex-direction:column; align-items:flex-start; gap:16px; width:100%; max-width:1040px; margin:40px auto 0;">
    
    <!-- Phase 3 -->
    <div class="card" style="width:1040px; padding:24px 32px; display:flex; gap:32px; align-items:center; border:1px solid var(--line); box-shadow:0 4px 12px rgba(15,23,42,0.02); border-radius:12px; background:var(--card);">
      <div style="width:280px; flex:none; text-align:left;">
        <div style="font-size:16px; font-weight:700; color:var(--ink-2); line-height:1.3;">Data Brokers</div>
        <div style="font-size:14px; font-weight:600; color:var(--muted); margin-top:6px;">Data &amp; Measurement</div>
        <div style="font-size:16px; font-weight:800; color:var(--ink); margin-top:6px;">€40k–320k <span style="font-size:12px; font-weight:600; color:var(--muted);">/ yr / customer</span></div>
      </div>
      <div style="width:1px; height:40px; background:var(--line); flex:none;"></div>
      <div style="flex:1; text-align:left;">
        <div style="font-size:18px; color:var(--muted); margin-bottom:4px;"><i>Phase 3:</i> <b style="color:var(--ink); font-weight:800;">Retail Intelligence Infra</b> <span style="font-size:14px; font-weight:600;">(future)</span></div>
        <p style="font-size:15px; color:var(--ink-2); line-height:1.5;">
          Scaling the technology into a new category of physical retail data infrastructure to provide industry-wide behavioral insights.
        </p>
      </div>
    </div>

    <!-- Phase 2 -->
    <div class="card" style="width:840px; padding:24px 32px; display:flex; gap:32px; align-items:center; border:1px solid var(--line); box-shadow:0 4px 16px rgba(15,23,42,0.03); border-radius:12px; background:var(--card);">
      <div style="width:280px; flex:none; text-align:left;">
        <div style="font-size:16px; font-weight:700; color:var(--ink-2); line-height:1.3;">Brands</div>
        <div style="font-size:14px; font-weight:600; color:var(--muted); margin-top:6px;">Service-based</div>
        <div style="font-size:16px; font-weight:800; color:var(--ink); margin-top:6px;">€40k–320k <span style="font-size:12px; font-weight:600; color:var(--muted);">/ yr / customer</span></div>
      </div>
      <div style="width:1px; height:40px; background:var(--line); flex:none;"></div>
      <div style="flex:1; text-align:left;">
        <div style="font-size:18px; color:var(--muted); margin-bottom:4px;"><i>Phase 2:</i> <b style="color:var(--ink); font-weight:800;">Store Intelligence</b></div>
        <p style="font-size:15px; color:var(--ink-2); line-height:1.5;">
          Shift the focus from content delivery to store intelligence by detecting physical shopper behavior data.
        </p>
      </div>
    </div>

    <!-- Phase 1 -->
    <div class="card" style="width:640px; padding:24px 32px; display:flex; flex-direction:column; gap:20px; border:1px solid var(--line); box-shadow:0 4px 16px rgba(15,23,42,0.03); border-radius:12px; background:var(--card);">
      <div style="display:flex; gap:32px; align-items:center; width:100%;">
        <div style="width:280px; flex:none; text-align:left;">
          <div style="font-size:16px; font-weight:700; color:var(--ink-2); line-height:1.3;">Retailers &amp; DOOH Operators</div>
          <div style="font-size:14px; font-weight:600; color:var(--muted); margin-top:6px;">Solution as a Service (SaaS &amp; HaaS)</div>
          <div style="margin-top:6px; display:flex; align-items:center; gap:8px;">
            <div style="font-size:16px; font-weight:800; color:var(--ink);">€120 <span style="font-size:12px; font-weight:600; color:var(--muted);">/ screen</span></div>
            <div style="font-size:9px; font-weight:700; text-transform:uppercase; color:var(--slate); background:#f1f5f9; padding:2px 6px; border-radius:4px; letter-spacing:0.05em;">COGS ~€20/mo</div>
          </div>
        </div>
        <div style="width:1px; height:40px; background:var(--line); flex:none;"></div>
        <div style="flex:1; text-align:left;">
          <div style="font-size:18px; color:var(--muted); margin-bottom:4px;"><i>Phase 1:</i> <b style="color:var(--ink); font-weight:800;">Physical Recommender</b> <span style="font-size:14px; font-weight:600;">(today)</span></div>
        </div>
      </div>
    </div>
    
  </div>

  <div class="flow">COVER → CUSTOMERS → TRACTION → <b>ECONOMICS</b> → GTM</div><div class="pageno">09 / 14</div>
</section>

"""

if start_idx != -1 and end_idx != -1:
    content = content[:start_idx] + new_slide_9 + content[end_idx:]

with open('decks/marek-sacha-intro-deck-final.html', 'w') as f:
    f.write(content)

