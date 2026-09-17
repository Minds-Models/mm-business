import re, sys, io
p=sys.argv[1]; s=io.open(p,encoding='utf-8').read()
def rb(key,new):
    global s
    m=re.compile(r'^'+re.escape(key)+r':\n(?:  .*\n|\n(?=  ))*',re.M).search(s)
    if not m: raise SystemExit('missing '+key)
    s=s[:m.start()]+new+s[m.end():]
SRC='"VC financial model, SUMMARY, read 2026-09-17 after the fourteenth pass and its addenda"'
rb('model_arr_curve', f'''model_arr_curve:
  value: "Ending ARR: 12k (2026, legacy line only) · 808k (2027) · 4.42M (2028) · 9.96M (2029) · 14.89M (2030) · 21.59M (2031), EUR"
  source: {SRC}
  status: internal-estimate
  note: "Live run-rate ARR, not contracted ARR including LOIs. The first four founding seats land in January 2027, four months after the first chain goes live (the pilot quarter). Seven European markets in the base case (UK from month 36); the United States is scenario 3, the upside, not the curve. Growth 45% in the final year, ARR per chain rising into the exit. Revenue recognised 2031: 18.61M; net revenue after the retailer share 13.4M."
''')
rb('model_margins', f'''model_margins:
  value: "Gross margin 67.7% (2031) with the retailer share as cost of sales; 94% on net revenue after the share; EBITDA (0.35M) in 2030 with the fourth quarter positive, +2.87M and 15.4% full-year 2031, 19.9% Q4 2031, 20.7% December 2031 annualised; EBITDA positive and stays positive from month 52 (Dec 2030)"
  source: {SRC}
  status: internal-estimate
  note: "Quote the net-revenue margin only beside the gross one. Staffing ratios are the mature ones (five categories per analyst, seven per data engineer, 4.5 chains per deployment or retailer-BD person, 3M EUR ARR per CSM, 800k AE quota), salary inflation 3.5%."
''')
rb('model_operating_metrics', f'''model_operating_metrics:
  value: "2031: 45 live categories plus 19 market reads (64 sellable products) on 26 chains and 1,500 capture stores in 7 markets · 158 brand seats (126 labelled, 32 market reads) · 2.8 labelled seats per category · LTV/CAC 6.2x · CAC payback 9.7 months · ARR per instrumented category 480k · ARR per chain deployed 830k · headcount 80, ARR per head 270k"
  source: {SRC}
  status: internal-estimate
  note: "NRR is no longer reported (it restated the tier step-up); churn is an 8% assumption shown as such. Rule of 40 is not in the model; do not quote it. No brand holds both the labelled and the market read on the same category. Country managers count as sales cost in CAC."
''')
rb('model_exit_ladder', f'''model_exit_ladder:
  value: "Exit ARR 21.59M EUR. 2.3x = 49.6M (pre-seed 5.0x) · 4x = 86.3M (8.7x) · 8x = 172.7M (17.5x) · 10x = 215.9M (21.8x) · 12x = 259.0M (26.2x)"
  source: {SRC}
  status: internal-estimate
  note: "Lead with the downside. The 2.3x floor is the footfall-incumbent comparable in 11-research-annex.md. Seed 15.1x and Series A 8.6x at 10x."
''')
rb('model_series_a_test', f'''model_series_a_test:
  value: "With the Series A switched off (MARKETS scenario 2) only Czechia, Slovakia and Poland open, 2031 ARR lands at 10.88M, about half of the base case, 2031 EBITDA margin 27%, 37 people, and the company never runs out of cash. With the United States added (scenario 3, from month 33) 2031 ARR is 24.0M and 2031 EBITDA +2.5M on the same rounds"
  source: {SRC}
  status: internal-estimate
  note: "The Series A buys the second European wave and the option on the US, not survival: the base case is funded on the seed alone."
''')
rb('model_stress', f'''model_stress:
  value: "Measured one cell at a time on the base case: pricing 20% below plan, churn at three times plan, half a seat less per category, a slower category ramp, the market-read attach rate at 35%, the UK a year late, the second European wave never opening and the Series A never raised all stay funded and all are EBITDA positive in 2031; a seed one quarter late leaves 390k in month 15 (funded), two quarters late (185k) in month 18, which is what the standby bridge is for; a Series A two quarters late still leaves 1.7M"
  source: "VC financial model, SUMMARY section 7 (live) and 19-model-walkthrough.md section 5, read 2026-09-17"
  status: internal-estimate
  note: "Price and the market-read attach rate are the commercial inputs that hurt most; the chain-signing rate (one uniform rate, a chain every eleven months per open market) is the growth lever. The pre-seed reaches month 13 with 482k to spare."
''')
rb('model_preseed_window', f'''model_preseed_window:
  value: "Between the pre-seed (Nov 2026) and the seed (Sep 2027) the plan goes from 1 chain, 2 categories and 12k of legacy ARR to 2 chains, 4 categories, 9 brand seats and 754k of ARR in Czechia, with the first four founding seats sold in January 2027 (month 5, after the pilot quarter), the second Czech chain live in month 12 and Slovakia and Poland opening in the two quarters after the seed"
  source: "VC financial model, MODEL tab months 3 to 13, read 2026-09-17"
  status: internal-estimate
  note: "This is the use-of-funds basis for the pre-seed ask slide. The first paying seat lands four months after a category goes live; penetration matures in 18 months."
''')
rb('model_arr_curve_v2', f'''model_arr_curve_v2:
  value: "Ending ARR: 12k (2026) · 808k (2027) · 4.42M (2028) · 9.96M (2029) · 14.89M (2030) · 21.59M (2031), EUR"
  source: {SRC}
  status: internal-estimate
  note: "Same figures as model_arr_curve; both re-read 2026-09-17. Earlier values (19.21M and 21.29M in 2031, 172k in 2026) are superseded."
''')
rb('model_margins_v2', f'''model_margins_v2:
  value: "Gross margin 67.7% (2031), 94% on net revenue after the retailer share; EBITDA (0.35M) 2030, +2.87M and 15.4% full-year 2031, 19.9% Q4 2031; EBITDA positive and stays positive from month 52 (Dec 2030)"
  source: {SRC}
  status: internal-estimate
''')
rb('model_operating_metrics_v2', f'''model_operating_metrics_v2:
  value: "2031: 45 live categories plus 19 market reads (64 sellable products) on 26 chains and 1,500 capture stores in 7 markets · 158 brand seats (126 labelled, 32 market reads) · 2.8 labelled seats per category · LTV/CAC 6.2x · CAC payback 9.7 months · ARR per instrumented category 480k · ARR per chain deployed 830k · headcount 80, ARR per head 270k"
  source: {SRC}
  status: internal-estimate
''')
rb('model_exit_ladder_v2', f'''model_exit_ladder_v2:
  value: "Exit ARR 21.59M EUR. 2.3x = 49.6M (pre-seed 5.0x) · 4x = 86.3M (8.7x) · 8x = 172.7M (17.5x) · 10x = 215.9M (21.8x) · 12x = 259.0M (26.2x)"
  source: {SRC}
  status: internal-estimate
''')
s=s.replace('value: "The 2031 plan is 156 brand seats, 0.7% of the incumbent\'s ~23,000 client companies"\n  source: "seats from the model, read 2026-09-15;','value: "The 2031 plan is 158 brand seats, 0.7% of the incumbent\'s ~23,000 client companies"\n  source: "seats from the model, read 2026-09-17;')
s=s.replace('the fourteenth pass (21.29M, seed 2.6M, Series A 2.5M at 25M, UK in, US as the upside\n# scenario, EBITDA +2.75M in 2031) is not in the deck yet.','the fourteenth pass (21.59M, seed 2.6M, Series A 2.5M at 25M, UK in, US as the upside\n# scenario, EBITDA +2.87M in 2031, first seats in January 2027) is not in the deck yet.')
io.open(p,'w',encoding='utf-8').write(s); print('patched')
