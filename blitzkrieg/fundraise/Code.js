function onOpen() {
  SpreadsheetApp.getUi().createMenu('M&M Tools')
      .addItem('Build VC Financial Model', 'buildVCFinancialModel')
      .addToUi();
}

function buildVCFinancialModel() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName("VC Financial Model");
  if (sheet) {
    ss.deleteSheet(sheet);
  }
  sheet = ss.insertSheet("VC Financial Model");
  
  // Base constants
  const EXCHANGE_RATE = 24.5; // Fixed based on strategy docs
  
  // Current Burn based on screenshot (approx €12,897.85 for core team, we'll round to €13k for base)
  const STARTING_PAYROLL_EUR = 13000;
  
  // Format columns
  sheet.setColumnWidth(1, 280);
  sheet.setColumnWidth(2, 120);
  
  const headerStyle = SpreadsheetApp.newTextStyle().setBold(true).setForeground("white").build();
  
  // --- SECTION 1: ASSUMPTIONS ---
  sheet.getRange("A1:B1").merge().setValue("SECTION 1: DRIVERS & ASSUMPTIONS").setTextStyle(headerStyle).setBackground("#1a1a1a");
  
  const assumptions = [
    ["1. CAPITAL & RUNWAY", ""],
    ["Starting Cash Balance (€)", 50000],
    ["Pre-Seed Fundraise (€) - Month 1", 500000],
    ["Seed Fundraise (€) - Month 15", 2000000],
    ["Series A Fundraise (€) - Month 36", 5000000],
    ["", ""],
    
    ["2. SUPPLY COGS (The Network)", ""],
    ["Avg Stores per Chain/Retailer", 200],
    ["Store Ops Cost (€/store/month)", 40.80], // Cloud inference, processing
    ["", ""],

    ["3. UNIT ECONOMICS: LABELLED (Single Retailer)", "e.g. EuroOil"],
    ["Retailer Revenue Share (%)", 0.20],
    ["Max Brands per Category (Seat Depth)", 6],
    ["Avg Price per Brand Seat (€/yr)", 30000],
    ["", ""],
    
    ["4. UNIT ECONOMICS: AGGREGATED (Cross-Market)", "e.g. Market Benchmark"],
    ["Retailer Revenue Share (%)", 0.00], // Aggregated = 0% rev share
    ["Max Brands per Category (Seat Depth)", 6],
    ["Avg Price per Brand Seat (€/yr)", 50000], // Premium for market view
    ["", ""],
    
    ["5. OPEX SCALING", ""],
    ["Starting Monthly Payroll (€) - based on Jul actuals", STARTING_PAYROLL_EUR],
    ["Engineering Hires per €1M ARR added", 3],
    ["Sales/GTM Hires per €1M ARR added", 2],
    ["Avg New Hire Cost (€/mo fully loaded)", 5000],
    ["Base Professional Fees (€/mo)", 2000],
    ["Base Marketing & T&E (€/mo)", 1500]
  ];
  
  sheet.getRange(2, 1, assumptions.length, 2).setValues(assumptions);
  sheet.getRange("A2:A30").setFontWeight("bold");
  sheet.getRange("A2,A8,A12,A17,A23").setBackground("#f3f3f3");
  
  // Formatting Assumptions
  sheet.getRange("B3:B5").setNumberFormat("€#,##0");
  sheet.getRange("B9:B10").setNumberFormat("#,##0.00");
  sheet.getRange("B13").setNumberFormat("0%");
  sheet.getRange("B15").setNumberFormat("€#,##0");
  sheet.getRange("B18").setNumberFormat("0%");
  sheet.getRange("B20").setNumberFormat("€#,##0");
  sheet.getRange("B24,B27:B29").setNumberFormat("€#,##0");

  
  // --- SECTION 2: ROLLOUT SCHEDULE ---
  let rolloutRow = 32;
  sheet.getRange(rolloutRow, 1, 1, 62).setBackground("#1a1a1a");
  sheet.getRange(rolloutRow, 1).setValue("SECTION 2: ROLLOUT SCHEDULE").setTextStyle(headerStyle);
  
  let headers = ["Metric"];
  let yearsRow = ["Year Indicator"];
  for (let m = 1; m <= 60; m++) {
    headers.push("M" + m);
    yearsRow.push(Math.ceil(m / 12));
  }
  
  sheet.getRange(rolloutRow + 1, 1, 1, 61).setValues([yearsRow]).setFontColor("#aaaaaa");
  sheet.getRange(rolloutRow + 2, 1, 1, 61).setValues([headers]).setFontWeight("bold").setBackground("#f3f3f3");
  
  // Hardcoded Rollout Schedule to match "Exit-First" Plan
  // Target: €4.4M run-rate by Feb-27 (Month ~6). We need aggressive scaling.
  // We'll define new launches per month.
  const rolloutMetrics = [
    "New Labelled Categories Launched",
    "New Aggregated Categories Launched",
    "New Chains/Retailers Instrumented",
    "Cumulative Labelled Categories",
    "Cumulative Aggregated Categories",
    "Cumulative Chains Instrumented",
    "Active Brands Penetration (%)" // How full the seats are
  ];
  
  let rolloutData = [];
  for(let i=0; i<rolloutMetrics.length; i++) rolloutData.push([rolloutMetrics[i]]);
  sheet.getRange(rolloutRow + 3, 1, rolloutMetrics.length, 1).setValues(rolloutData).setFontWeight("bold");
  
  const colLetter = (colIndex) => {
    let temp, letter = '';
    while (colIndex > 0) {
      temp = (colIndex - 1) % 26;
      letter = String.fromCharCode(temp + 65) + letter;
      colIndex = Math.floor((colIndex - temp - 1) / 26);
    }
    return letter;
  };

  // Populate rollout schedule
  for(let c = 2; c <= 61; c++) {
    let m = c - 1;
    let col = colLetter(c);
    let prevCol = colLetter(c-1);
    
    let newLabelled = 0;
    let newAggregated = 0;
    let newChains = 0;
    let penetration = 0;
    
    // RAMP UP LOGIC (Mimicking the Blitzkrieg plan)
    if (m === 2) { newLabelled = 1; newChains = 1; } // Tobacco / Petrol
    if (m === 4) { newLabelled = 1; } // Pet
    if (m === 5) { newLabelled = 1; newChains = 1; } // Drugstore
    if (m === 6) { newLabelled = 1; } // FMCG
    
    if (m > 6 && m % 3 === 0) newLabelled = 1; // 1 every quarter
    if (m > 12 && m % 6 === 0) newAggregated = 1; // 1 aggregate every 6 months
    if (m > 6 && m % 4 === 0) newChains = 1; // 1 new chain every 4 months
    
    // Penetration (S-Curve from 15% to 85%)
    if (m <= 6) penetration = 0.33; // ~2 out of 6 brands
    else if (m <= 12) penetration = 0.50; // 3 out of 6
    else if (m <= 24) penetration = 0.66; // 4 out of 6
    else if (m <= 36) penetration = 0.75; // 4.5 out of 6
    else penetration = 0.85; // ~5 out of 6
    
    // Set static inputs
    sheet.getRange(rolloutRow + 3, c).setValue(newLabelled);
    sheet.getRange(rolloutRow + 4, c).setValue(newAggregated);
    sheet.getRange(rolloutRow + 5, c).setValue(newChains);
    sheet.getRange(rolloutRow + 9, c).setValue(penetration).setNumberFormat("0%");
    
    // Cumulative formulas
    if (c === 2) {
      sheet.getRange(rolloutRow + 6, c).setFormula(`=${col}${rolloutRow + 3}`);
      sheet.getRange(rolloutRow + 7, c).setFormula(`=${col}${rolloutRow + 4}`);
      sheet.getRange(rolloutRow + 8, c).setFormula(`=${col}${rolloutRow + 5}`);
    } else {
      sheet.getRange(rolloutRow + 6, c).setFormula(`=${prevCol}${rolloutRow + 6} + ${col}${rolloutRow + 3}`);
      sheet.getRange(rolloutRow + 7, c).setFormula(`=${prevCol}${rolloutRow + 7} + ${col}${rolloutRow + 4}`);
      sheet.getRange(rolloutRow + 8, c).setFormula(`=${prevCol}${rolloutRow + 8} + ${col}${rolloutRow + 5}`);
    }
  }


  // --- SECTION 3: MONTHLY P&L ---
  let plRow = rolloutRow + 11;
  sheet.getRange(plRow, 1, 1, 62).setBackground("#1a1a1a");
  sheet.getRange(plRow, 1).setValue("SECTION 3: 5-YEAR P&L").setTextStyle(headerStyle);
  
  const plMetrics = [
    "1. REVENUE",
    "Labelled ARR (Run-Rate)",
    "Aggregated ARR (Run-Rate)",
    "TOTAL MRR",
    "TOTAL ARR",
    "",
    "2. COGS & GROSS PROFIT",
    "Cumulative Stores Instrumented",
    "Store Operations Cost (€)",
    "Labelled Revenue Share (€)",
    "TOTAL COGS (€)",
    "GROSS PROFIT (€)",
    "GROSS MARGIN %",
    "",
    "3. OPEX",
    "Core Payroll (€)",
    "Scaling Hires (€) [Sales + Eng]",
    "Professional Fees (€)",
    "Marketing & T&E (€)",
    "TOTAL OPEX (€)",
    "",
    "4. CASHFLOW",
    "EBITDA / Net Burn (€)",
    "Funding Inflow (€)",
    "CASH BALANCE (€)"
  ];
  
  let plData = [];
  for(let i=0; i<plMetrics.length; i++) plData.push([plMetrics[i]]);
  sheet.getRange(plRow + 2, 1, plMetrics.length, 1).setValues(plData).setFontWeight("bold");
  sheet.getRange(plRow + 2, 1).setFontColor("#3d6bfb"); // Rev header
  sheet.getRange(plRow + 8, 1).setFontColor("#c0504d"); // COGS header
  sheet.getRange(plRow + 16, 1).setFontColor("#A8621A"); // OPEX header
  sheet.getRange(plRow + 23, 1).setFontColor("#1f6f4a"); // Cashflow header
  
  let ry = rolloutRow; 

  for(let c = 2; c <= 61; c++) {
    let col = colLetter(c);
    let prevCol = colLetter(c-1);
    let m = c - 1;
    
    // REVENUE
    // Labelled ARR = (Cumul Categories) * (Seat Depth * Penetration) * (Avg Price)
    sheet.getRange(plRow + 3, c).setFormula(`=${col}${ry + 6} * ($B$14 * ${col}${ry + 9}) * $B$15`);
    // Aggregated ARR
    sheet.getRange(plRow + 4, c).setFormula(`=${col}${ry + 7} * ($B$19 * ${col}${ry + 9}) * $B$20`);
    
    // TOTAL MRR = (Labelled ARR + Aggregated ARR) / 12
    sheet.getRange(plRow + 5, c).setFormula(`=(${col}${plRow + 3} + ${col}${plRow + 4}) / 12`);
    // TOTAL ARR
    sheet.getRange(plRow + 6, c).setFormula(`=${col}${plRow + 5} * 12`);
    
    // COGS
    // Cumul Stores = Cumul Chains * Avg Stores per Chain
    sheet.getRange(plRow + 9, c).setFormula(`=${col}${ry + 8} * $B$9`);
    // Store Ops Cost = Stores * €40.80
    sheet.getRange(plRow + 10, c).setFormula(`=${col}${plRow + 9} * $B$10`);
    // Labelled Rev Share = (Labelled ARR / 12) * Rev Share %
    sheet.getRange(plRow + 11, c).setFormula(`=(${col}${plRow + 3} / 12) * $B$13`);
    
    // TOTAL COGS
    sheet.getRange(plRow + 12, c).setFormula(`=${col}${plRow + 10} + ${col}${plRow + 11}`);
    
    // GROSS PROFIT (MRR - COGS)
    sheet.getRange(plRow + 13, c).setFormula(`=${col}${plRow + 5} - ${col}${plRow + 12}`);
    // GROSS MARGIN
    sheet.getRange(plRow + 14, c).setFormula(`=IF(${col}${plRow + 5}>0, ${col}${plRow + 13}/${col}${plRow + 5}, 0)`);
    
    // OPEX
    // Core Payroll (flat based on current run-rate, assumed growing 5% annually for raises)
    let yr = Math.floor((m-1)/12);
    sheet.getRange(plRow + 17, c).setFormula(`=$B$24 * (1.05^${yr})`);
    
    // Scaling Hires = (Current ARR in Millions) * (Eng Hires + Sales Hires) * Hire Cost
    sheet.getRange(plRow + 18, c).setFormula(`=MAX(0, FLOOR(${col}${plRow + 6}/1000000) * ($B$25 + $B$26) * $B$27)`);
    
    // Prof Fees & Marketing (Scale slightly with revenue)
    sheet.getRange(plRow + 19, c).setFormula(`=$B$28 + (${col}${plRow + 6} * 0.005)`); // 0.5% of ARR added to base
    sheet.getRange(plRow + 20, c).setFormula(`=$B$29 + (${col}${plRow + 6} * 0.01)`);  // 1.0% of ARR added to base
    
    // TOTAL OPEX
    sheet.getRange(plRow + 21, c).setFormula(`=SUM(${col}${plRow + 17}:${col}${plRow + 20})`);
    
    // CASHFLOW
    // EBITDA = Gross Profit - OPEX
    sheet.getRange(plRow + 24, c).setFormula(`=${col}${plRow + 13} - ${col}${plRow + 21}`);
    
    // Funding Inflows
    let inflowFormula = "0";
    if (m === 1) inflowFormula = "$B$4"; // Pre-Seed
    if (m === 15) inflowFormula = "$B$5"; // Seed
    if (m === 36) inflowFormula = "$B$6"; // Series A
    sheet.getRange(plRow + 25, c).setFormula(`=${inflowFormula}`);
    
    // Cash Balance
    if (c === 2) {
      sheet.getRange(plRow + 26, c).setFormula(`=$B$3 + ${col}${plRow + 25} + ${col}${plRow + 24}`);
    } else {
      sheet.getRange(plRow + 26, c).setFormula(`=${prevCol}${plRow + 26} + ${col}${plRow + 25} + ${col}${plRow + 24}`);
    }
  }

  // Formatting P&L
  sheet.getRange(plRow + 3, 2, 4, 60).setNumberFormat("€#,##0"); // Rev
  sheet.getRange(plRow + 9, 2, 1, 60).setNumberFormat("#,##0"); // Stores
  sheet.getRange(plRow + 10, 2, 4, 60).setNumberFormat("€#,##0"); // COGS
  sheet.getRange(plRow + 14, 2, 1, 60).setNumberFormat("0.0%"); // Margin
  sheet.getRange(plRow + 17, 2, 5, 60).setNumberFormat("€#,##0"); // Opex
  sheet.getRange(plRow + 24, 2, 3, 60).setNumberFormat("€#,##0"); // Cash

  // Bold important lines
  sheet.getRange(plRow + 6, 1, 1, 61).setFontWeight("bold"); // ARR
  sheet.getRange(plRow + 13, 1, 1, 61).setFontWeight("bold"); // Gross Profit
  sheet.getRange(plRow + 21, 1, 1, 61).setFontWeight("bold"); // Total Opex
  sheet.getRange(plRow + 24, 1, 1, 61).setFontWeight("bold"); // EBITDA
  sheet.getRange(plRow + 26, 1, 1, 61).setFontWeight("bold"); // Cash Balance
  
  // Conditional formatting for Cash Balance
  let cashRule = SpreadsheetApp.newConditionalFormatRule()
    .whenNumberLessThan(0)
    .setFontColor("#c0504d")
    .setBackground("#f7eae8")
    .setRanges([sheet.getRange(plRow + 26, 2, 1, 60)])
    .build();
  let rules = sheet.getConditionalFormatRules();
  rules.push(cashRule);
  sheet.setConditionalFormatRules(rules);


  // --- SECTION 4: ANNUAL SUMMARY & VALUATION ---
  let sumRow = plRow + 29;
  sheet.getRange(sumRow, 1, 1, 7).setBackground("#1a1a1a");
  sheet.getRange(sumRow, 1).setValue("SECTION 4: ANNUAL SUMMARY & VALUATION").setTextStyle(headerStyle);
  
  const sumHeaders = ["Metric", "Year 1", "Year 2", "Year 3", "Year 4", "Year 5"];
  sheet.getRange(sumRow + 1, 1, 1, 6).setValues([sumHeaders]).setFontWeight("bold").setBackground("#f3f3f3");
  
  const sumMetrics = [
    "Ending ARR (€)",
    "Annual Revenue (Recognized) (€)",
    "Annual COGS (€)",
    "Annual Gross Profit (€)",
    "Blended Gross Margin (%)",
    "Annual OPEX (€)",
    "Annual EBITDA (€)",
    "Ending Cash Balance (€)",
    "",
    "VALUATION & MULTIPLES",
    "Revenue Multiple (Target)",
    "Projected Exit Valuation (€)",
    "Yield per Store (€/yr)"
  ];
  
  let sumData = [];
  for(let i=0; i<sumMetrics.length; i++) sumData.push([sumMetrics[i]]);
  sheet.getRange(sumRow + 2, 1, sumMetrics.length, 1).setValues(sumData).setFontWeight("bold");
  
  for (let y = 1; y <= 5; y++) {
    let startCol = colLetter(1 + (y-1)*12 + 1); // M1, M13, M25...
    let endCol = colLetter(1 + y*12); // M12, M24, M36...
    let colIndex = y + 1; // Col B, C, D...
    
    // Ending ARR (Take the ARR of the 12th month of that year)
    sheet.getRange(sumRow + 2, colIndex).setFormula(`=${endCol}${plRow + 6}`);
    // Recognized Rev (Sum of MRR for 12 months)
    sheet.getRange(sumRow + 3, colIndex).setFormula(`=SUM(${startCol}${plRow + 5}:${endCol}${plRow + 5})`);
    // Annual COGS
    sheet.getRange(sumRow + 4, colIndex).setFormula(`=SUM(${startCol}${plRow + 12}:${endCol}${plRow + 12})`);
    // Annual Gross Profit
    sheet.getRange(sumRow + 5, colIndex).setFormula(`=SUM(${startCol}${plRow + 13}:${endCol}${plRow + 13})`);
    // Margin
    sheet.getRange(sumRow + 6, colIndex).setFormula(`=IF(B${sumRow + 3}>0, B${sumRow + 5}/B${sumRow + 3}, 0)`);
    // Annual Opex
    sheet.getRange(sumRow + 7, colIndex).setFormula(`=SUM(${startCol}${plRow + 21}:${endCol}${plRow + 21})`);
    // Annual EBITDA
    sheet.getRange(sumRow + 8, colIndex).setFormula(`=SUM(${startCol}${plRow + 24}:${endCol}${plRow + 24})`);
    // Ending Cash
    sheet.getRange(sumRow + 9, colIndex).setFormula(`=${endCol}${plRow + 26}`);
    
    // Multiples
    sheet.getRange(sumRow + 12, colIndex).setValue(10); // Target multiple
    sheet.getRange(sumRow + 13, colIndex).setFormula(`=R[-1]C * R[-11]C`); // Valuation = ARR * Multiple
    
    // Yield per store (Total Annual Rev / Stores at end of year)
    sheet.getRange(sumRow + 14, colIndex).setFormula(`=IF(${endCol}${plRow + 9}>0, R[-11]C / ${endCol}${plRow + 9}, 0)`);
  }
  
  // Formatting Summary
  sheet.getRange(sumRow + 2, 2, 4, 5).setNumberFormat("€#,##0");
  sheet.getRange(sumRow + 6, 2, 1, 5).setNumberFormat("0.0%");
  sheet.getRange(sumRow + 7, 2, 3, 5).setNumberFormat("€#,##0");
  sheet.getRange(sumRow + 12, 2, 1, 5).setNumberFormat("0.0\"x\"");
  sheet.getRange(sumRow + 13, 2, 2, 5).setNumberFormat("€#,##0");
  sheet.getRange(sumRow + 13, 2, 1, 5).setFontWeight("bold").setBackground("#e8f4ee").setFontColor("#1f6f4a");
  
  // Freeze panes
  sheet.setFrozenColumns(1);
  sheet.setFrozenRows(2);
}