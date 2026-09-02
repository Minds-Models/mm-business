import re

with open("blitzkrieg/fundraise/fundraise-plan.html", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update 10-16x return text
content = content.replace(
    "10-16x return for this €6M cap Pre-Seed round).",
    "10-16x return for this €6M cap Pre-Seed round, accounting for future Series A and ESOP dilution)."
)

# 2. Add Pre-Raise Checklist and Investor Timeline before The Rolling Close Strategy
new_sections = """        <details class="vc-case">
            <summary>Pre-Raise Checklist: What we need to get started</summary>
            <div class="vc-case-content">
                <ul>
                    <li><strong>1. Target List (CRM):</strong> 150+ qualified VC and angel targets mapped and loaded.</li>
                    <li><strong>2. Pitch Deck vFinal:</strong> The "Measurement Currency" narrative locked.</li>
                    <li><strong>3. Data Room Populated:</strong> Cap table modeling, Financials, DPA templates, and existing LOIs.</li>
                    <li><strong>4. Website Redesign:</strong> Website updated to reflect the new "Currency" and "Win-Win Retailer" positioning before outreach begins.</li>
                    <li><strong>5. LinkedIn Presence:</strong> Series of posts drafted for founders to build public momentum concurrently with the outreach.</li>
                </ul>
            </div>
        </details>

        <details class="vc-case">
            <summary>The Investor Timeline (What We Communicate)</summary>
            <div class="vc-case-content">
                <p style="margin-top: 0; color: var(--ink-2); font-size: 15px;"><strong>To drive FOMO and enforce the rolling close, we explicitly communicate these dates to VCs:</strong></p>
                <ul>
                    <li><strong>Now:</strong> "We are filling the remaining €350k allocation at a €6M Pre-Money Cap."</li>
                    <li><strong>Late September:</strong> "Data Room is open. We are taking final first-round meetings."</li>
                    <li><strong>Mid-October (Oct 16th):</strong> "Soft Deadline for Lead Term Sheets. Post-deadline, depending on EuroOil signature, the valuation cap may re-rate to €8M."</li>
                    <li><strong>Early November (Nov 8th):</strong> "Due Diligence closes. Hard commitments required from the syndicate."</li>
                    <li><strong>Nov 21st:</strong> "Target closing date. Funds wired."</li>
                </ul>
            </div>
        </details>

        <details class="vc-case" open>"""

content = content.replace('<details class="vc-case" open>', new_sections)


# 3. Add Website and LinkedIn to Week 1
week1_task = """                <li class="task-item">
                    <div class="checkbox-wrapper"><input type="checkbox" class="checkbox"></div>
                    <div class="task-content">
                        <span class="category-tag tag-collateral">Collateral</span>
                        <p class="task-desc"><strong>Website Redesign & LinkedIn Strategy:</strong> Update the company website to reflect the "Measurement Currency" narrative. Draft 4-6 foundational LinkedIn posts to be scheduled during the active outreach phase. <span class="metric">Goal: Website Live</span></p>
                    </div>
                </li>
            </ul>"""

content = re.sub(r"</ul>\s*</div>\s*<!-- W2 -->", week1_task + "\n        </div>\n\n        <!-- W2 -->", content)


# 4. Replace Week 10 "Deploy High-Fidelity Mockup in DD"
week10_old = """<p class="task-desc"><strong>Deploy High-Fidelity Mockup in DD:</strong> Use the interactive mockup (created in W1) and any initial data samples from SuperZoo to pass the technical/product due diligence, proving the currency vision works without waiting for full hardware rollout. <span class="metric">Goal: Pass Tech DD</span></p>"""
week10_new = """<p class="task-desc"><strong>Tech DD Sandbox & API Access:</strong> Provide the lead investor's tech team with access to a live data sandbox (using early SuperZoo data) or API documentation to tangibly prove the underlying data architecture and scale readiness. <span class="metric">Goal: Pass Tech DD</span></p>"""

content = content.replace(week10_old, week10_new)


with open("blitzkrieg/fundraise/fundraise-plan.html", "w", encoding="utf-8") as f:
    f.write(content)

print("Updated fundraise-plan.html successfully.")
