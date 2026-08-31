import re

with open("blitzkrieg/fundraise/fundraise-plan.html", "r", encoding="utf-8") as f:
    content = f.read()

replacement = """        <!-- W1 -->
        <div class="week-card">
            <div class="week-header">
                <span class="week-title">Week 1: Decoupling Ops, Angel Prep & Funnel Expansion</span>
                <span class="week-date">Aug 24 - Aug 30</span>
            </div>
            <ul class="task-list">
                <li class="task-item">
                    <div class="checkbox-wrapper"><input type="checkbox" class="checkbox"></div>
                    <div class="task-content">
                        <span class="category-tag tag-angel" style="background: var(--gold); color: white;">Angel Syndicate</span>
                        <p class="task-desc"><strong>Prepare Angel Paperwork:</strong> Draft the "Early Bird" SAFE/Convertible note documentation. Define the specific discount or valuation cap (€4.5M - €5M) to incentivize fast capital from the insider syndicate. <span class="metric">Goal: Angel Deal Structured</span></p>
                    </div>
                </li>
                <li class="task-item">
                    <div class="checkbox-wrapper"><input type="checkbox" class="checkbox"></div>
                    <div class="task-content">
                        <span class="category-tag tag-collateral">Collateral</span>
                        <p class="task-desc"><strong>High-Fidelity Product Mockup:</strong> Build a highly realistic, clickable Figma or Web mockup showing the final "Currency" dashboard. This decouples fundraising from the physical hardware deployment delays. <span class="metric">Goal: Sell the Vision, Not the Hardware</span></p>
                    </div>
                </li>
                <li class="task-item">
                    <div class="checkbox-wrapper"><input type="checkbox" class="checkbox"></div>
                    <div class="task-content">
                        <span class="category-tag tag-investor">Investor Outreach</span>
                        <p class="task-desc"><strong>Massive Top-of-Funnel Build:</strong> Expand the CRM target list drastically. To get 1 Lead Term Sheet, you need 3-5 offers, from 15-20 Deep Dives, from 50 First-Rounds. <span class="metric">Goal: 150+ Qualified VC/Angel Targets</span></p>
                    </div>
                </li>
                <li class="task-item">
                    <div class="checkbox-wrapper"><input type="checkbox" class="checkbox"></div>
                    <div class="task-content">
                        <span class="category-tag tag-collateral">Collateral</span>
                        <p class="task-desc"><strong>Pitch Deck Rewrite:</strong> Finalize 10-12 slides shifting the narrative from "mixed SaaS" to "measurement currency". <strong>Crucial:</strong> Explicitly detail the Brand Pricing Model (e.g., €5k-10k pilots converting to €30k+ ARR) based on Josef's Brand strategy, as "How much do brands pay?" will be the #1 investor question. <span class="metric">Goal: Deck Locked by Friday</span></p>
                    </div>
                </li>
            </ul>
        </div>

        <!-- W2 -->
        <div class="week-card">
            <div class="week-header">
                <span class="week-title">Week 2: Securing Angels & VC Outreach Kickoff</span>
                <span class="week-date">Aug 31 - Sep 6</span>
            </div>
            <ul class="task-list">
                <li class="task-item">
                    <div class="checkbox-wrapper"><input type="checkbox" class="checkbox"></div>
                    <div class="task-content">
                        <span class="category-tag tag-angel" style="background: var(--gold); color: white;">Angel Syndicate</span>
                        <p class="task-desc"><strong>Close the "Insider" Angels:</strong> Pitch the "Early Bird" terms to the existing €80k commitments and select high-conviction angels. Push for immediate signatures to fund initial hardware. <span class="metric">Goal: €150k+ Soft-Committed</span></p>
                    </div>
                </li>
                <li class="task-item">
                    <div class="checkbox-wrapper"><input type="checkbox" class="checkbox"></div>
                    <div class="task-content">
                        <span class="category-tag tag-investor">Investor Outreach</span>
                        <p class="task-desc"><strong>Launch Outreach & "Fast Fail" Strategy:</strong> Execute automated cold/warm email sequences to the 150+ target list. During initial calls, strictly apply "Fast Fail" – if the VC doesn't understand Retail Media within 10 minutes, move on quickly. Do not waste time educating the market. <span class="metric">Goal: Book 8-10 Initial Meetings</span></p>
                    </div>
                </li>
                <li class="task-item">
                    <div class="checkbox-wrapper"><input type="checkbox" class="checkbox"></div>
                    <div class="task-content">
                        <span class="category-tag tag-investor">Investor Outreach</span>
                        <p class="task-desc"><strong>Re-engage Warm Leads:</strong> Send the newly updated Pitch Deck and the "Pivot Narrative" to all previously engaged investors to spark renewed interest. <span class="metric">Goal: Book 3-5 Follow-up Meetings</span></p>
                    </div>
                </li>
            </ul>
        </div>

        <!-- W3 -->
        <div class="week-card">
            <div class="week-header">
                <span class="week-title">Week 3: Closing Tranche 1 & Strategic Introductions</span>
                <span class="week-date">Sep 7 - Sep 13</span>
            </div>
            <ul class="task-list">
                <li class="task-item">
                    <div class="checkbox-wrapper"><input type="checkbox" class="checkbox"></div>
                    <div class="task-content">
                        <span class="category-tag tag-angel" style="background: var(--gold); color: white;">Angel Syndicate</span>
                        <p class="task-desc"><strong>Execute First Tranche:</strong> Convert soft-commits into signed SAFE/Convertibles and ensure the first €150k+ hits the bank account. <span class="metric">Goal: €150k+ Secured</span></p>
                    </div>
                </li>
                <li class="task-item">
                    <div class="checkbox-wrapper"><input type="checkbox" class="checkbox"></div>
                    <div class="task-content">
                        <span class="category-tag tag-investor">Investor Outreach</span>
                        <p class="task-desc"><strong>Execute First-Round VC Meetings:</strong> Conduct 8-10 high-quality introductory pitches. Leverage the "We already have €150k+ secured" narrative to build social proof. <span class="metric">Goal: 30% Conversion to Deep-Dive</span></p>
                    </div>
                </li>
                <li class="task-item">
                    <div class="checkbox-wrapper"><input type="checkbox" class="checkbox"></div>
                    <div class="task-content">
                        <span class="category-tag tag-investor">Investor Outreach</span>
                        <p class="task-desc"><strong>Leverage Intro Networks:</strong> Activate existing angels, advisors, and mentors to provide warm introductions to the highest-priority funds from the 150+ target list. Quality of intro > cold email. <span class="metric">Goal: Secure 5-8 Warm Intros</span></p>
                    </div>
                </li>
                <li class="task-item">
                    <div class="checkbox-wrapper"><input type="checkbox" class="checkbox"></div>
                    <div class="task-content">
                        <span class="category-tag tag-traction">Traction Input</span>
                        <p class="task-desc"><strong>"Exploding" Brand LOIs:</strong> Ensure the tobacco LOIs (JTI/PMI) are structured as Exploding Offers (e.g., Q4 budget expires if sensors aren't deployed by late Oct). Use this intense FOMO during VC pitches. <span class="metric">Goal: 2 "Exploding" LOIs Added to Data Room</span></p>
                    </div>
                </li>
            </ul>
        </div>"""

pattern = re.compile(r"<!-- W1 -->\s*<div class=\"week-card\">.*?</ul>\s*</div>\s*<!-- W4 -->", re.DOTALL)
new_content = pattern.sub(replacement + "\n\n        <!-- W4 -->", content)

with open("blitzkrieg/fundraise/fundraise-plan.html", "w", encoding="utf-8") as f:
    f.write(new_content)

print("Updated timeline W1-W3 in fundraise-plan.html")
