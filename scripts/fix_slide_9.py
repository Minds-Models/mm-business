import re

with open('decks/marek-sacha-intro-deck-final.html', 'r') as f:
    content = f.read()

# We need to replace the content of the "NEW 1. Dual Monetization Engine" section
# Let's find it.
start_marker = '<!-- NEW 1. Dual Monetization Engine (Combines Unit Economics and Business Model) -->'
end_marker = '<!-- NEW 2. H2 2026 Pipeline Projection -->'
start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx != -1 and end_idx != -1:
    new_slide_9 = """<!-- NEW 1. Dual Monetization Engine (Combines Unit Economics and Business Model) -->
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
    <div class="card" style="width:640px; padding:24px 32px; display:flex; gap:32px; align-items:center; border:1px solid var(--line); box-shadow:0 4px 16px rgba(15,23,42,0.03); border-radius:12px; background:var(--card);">
      <div style="width:280px; flex:none; text-align:left;">
        <div style="font-size:16px; font-weight:700; color:var(--ink-2); line-height:1.3;">Retailers &amp; DOOH Operators</div>
        <div style="font-size:14px; font-weight:600; color:var(--muted); margin-top:6px;">In-Store Activation</div>
        <div style="font-size:14px; font-weight:800; color:var(--ink); margin-top:6px;">€150 <span style="font-size:12px; font-weight:600; color:var(--muted);">/ device / month</span></div>
      </div>
      <div style="width:1px; height:60px; background:var(--line); flex:none;"></div>
      <div style="flex:1; text-align:left;">
        <div style="font-size:18px; color:var(--muted); margin-bottom:4px;"><i>Phase 1:</i> <b style="color:var(--ink); font-weight:800;">Physical Recommender</b> <span style="font-size:14px; font-weight:600;">(today)</span></div>
        <p style="font-size:15px; color:var(--ink-2); line-height:1.5;">
          Base price paid by advertisers for real-time personalization. <b>Covers device costs immediately.</b>
        </p>
      </div>
    </div>
    
  </div>

  <div class="tk mt18" style="width:100%; max-width:1040px; margin-left:auto; margin-right:auto;">
    <div class="box i" style="display:flex; justify-content:space-around; padding:18px 24px; align-items:center; background:#fff;">
      <div style="text-align:center;"><div style="font-size:11px; font-weight:800; text-transform:uppercase; color:var(--muted); letter-spacing:.05em;">COGS (Infrastructure)</div><div style="font-size:26px; font-weight:800; color:var(--slate); margin-top:4px;">~€20 <span style="font-size:14px; font-weight:600; color:var(--muted);">/ mo</span></div></div>
      <div style="width:1px; height:40px; background:var(--line);"></div>
      <div style="text-align:center;"><div style="font-size:11px; font-weight:800; text-transform:uppercase; color:var(--muted); letter-spacing:.05em;">Base Gross Profit (Phase 1)</div><div style="font-size:26px; font-weight:800; color:var(--ink); margin-top:4px;">~€130 <span style="font-size:14px; font-weight:600; color:var(--muted);">/ mo</span></div></div>
      <div style="width:1px; height:40px; background:var(--line);"></div>
      <div style="text-align:center;"><div style="font-size:11px; font-weight:800; text-transform:uppercase; color:var(--muted); letter-spacing:.05em;">Marginal Cost of Data (Phase 2)</div><div style="font-size:26px; font-weight:800; color:var(--pos); margin-top:4px;">Zero</div></div>
    </div>
  </div>
  
  <div class="flow">COVER → CUSTOMERS → TRACTION → <b>ECONOMICS</b> → GTM</div><div class="pageno">09 / 14</div>
</section>

"""
    content = content[:start_idx] + new_slide_9 + content[end_idx:]

with open('decks/marek-sacha-intro-deck-final.html', 'w') as f:
    f.write(content)

