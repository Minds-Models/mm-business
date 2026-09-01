function onOpen() {
  SpreadsheetApp.getUi().createMenu('M&M Tools')
      .addItem('Build FINAL TIER-1 VC MODEL', 'buildTier1Model')
      .addToUi();
}

function buildTier1Model() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheetName = "TIER-1 VC MODEL";
  let sheet = ss.getSheetByName(sheetName);
  if (sheet) ss.deleteSheet(sheet);
  sheet = ss.insertSheet(sheetName);
  
  // Clean Canvas
  sheet.setHiddenGridlines(true);
  
  // Set explicit column widths to guarantee the timeline months are perfectly identical
  sheet.setColumnWidth(1, 320); // Column A: Labels Left
  sheet.setColumnWidth(2, 130); // Column B: Inputs Left
  sheet.setColumnWidth(3, 40);  // Column C: Spacer
  sheet.setColumnWidth(4, 300); // Column D: Labels Right
  sheet.setColumnWidth(5, 130); // Column E: Inputs Right
  
  // Timeline columns (F onwards: M1 to M60)
  for (let i = 6; i <= 66; i++) {
    sheet.setColumnWidth(i, 90); 
  }

  // --- STYLING DEFS ---
  const colorHeaderBg = "#f8f9fa";
  const colorHeaderFg = "#202124";
  const colorInputBg = "#e8f0fe";
  const colorInputFg = "#1967d2";
  const colorGreenBg = "#e6f4ea";
  const colorGreenFg = "#137333";
  const colorRedBg = "#fce8e6";
  const colorRedFg = "#c5221f";
  
  const styleHeader = SpreadsheetApp.newTextStyle().setBold(true).setForeground(colorHeaderFg).build();
  
  // ==========================================
  // SECTION 1: ASSUMPTIONS (2-Column Layout)
  // ==========================================
  sheet.getRange("A1:E1").merge().setValue("SECTION 1: ASSUMPTIONS & DRIVERS")
       .setTextStyle(styleHeader).setBackground(colorHeaderBg);
  
  const assumptionsLeft = [
    ["1. CAPITAL & CURRENT TRACTION", ""],
    ["Starting Cash Balance (€)", 42000],
    ["Current Monthly Revenue (€) [Grows 5% MoM]", 1000],
    ["", ""],
    ["2. SUPPLY & INFRASTRUCTURE", ""],
    ["Avg Stores per Chain/Retailer", 200],
    ["Store Ops Cost (€/store/month)", 40.80], 
    ["", ""],
    ["5. OPEX SCALING", ""],
    ["Starting Monthly Payroll (€) - Jul Actuals", 13000],
    ["Engineering Hires per €1M ARR added", 3],
    ["Sales/GTM Hires per €1M ARR added", 2],
    ["Avg New Hire Cost (€/mo fully loaded)", 5000],
    ["Base Professional Fees (€/mo)", 2000],
    ["Base Marketing & T&E (€/mo)", 1500]
  ];

  const assumptionsRight = [
    ["3. UNIT ECONOMICS: LABELLED (Single Retailer)", ""],
    ["Retailer Revenue Share (%)", 0.20],
    ["Max Brands per Category (Seat Depth)", 6],
    ["Avg Price per Brand Seat (€/yr)", 30000],
    ["", ""],
    ["4. UNIT ECONOMICS: AGGREGATED (Cross-Market)", ""],
    ["Retailer Revenue Share (%)", 0.00], 
    ["Max Brands per Category (Seat Depth)", 6],
    ["Avg Price per Brand Seat (€/yr)", 50000]
  ];
  
  // Write Left
  sheet.getRange(2, 1, assumptionsLeft.length, 2).setValues(assumptionsLeft);
  
  // Write Right
  sheet.getRange(2, 4, assumptionsRight.length, 2).setValues(assumptionsRight);
  
  sheet.getRange("A2:A16").setFontWeight("bold");
  sheet.getRange("D2:D10").setFontWeight("bold");
  
  // Sub-headers
  const sectionRowsLeft = [2, 6, 10];
  const sectionRowsRight = [2, 7];
  for (let r of sectionRowsLeft) {
    sheet.getRange(`A${r}:B${r}`).setBackground(colorHeaderBg).setFontWeight("bold");
  }
  for (let r of sectionRowsRight) {
    sheet.getRange(`D${r}:E${r}`).setBackground(colorHeaderBg).setFontWeight("bold");
  }
  
  // Inputs styling
  const inputsL = [3,4, 7,8, 11,12,13,14,15,16];
  for (let r of inputsL) {
    sheet.getRange(`B${r}`).setBackground(colorInputBg).setFontColor(colorInputFg).setFontWeight("bold");
  }
  const inputsR = [3,4,5, 8,9,10];
  for (let r of inputsR) {
    sheet.getRange(`E${r}`).setBackground(colorInputBg).setFontColor(colorInputFg).setFontWeight("bold");
  }
  
  sheet.getRange("B3:B4").setNumberFormat("€#,##0");
  sheet.getRange("B7").setNumberFormat("#,##0");
  sheet.getRange("B8").setNumberFormat("€#,##0.00");
  sheet.getRange("B11").setNumberFormat("€#,##0");
  sheet.getRange("B12:B13").setNumberFormat("#,##0");
  sheet.getRange("B14:B16").setNumberFormat("€#,##0");
  
  sheet.getRange("E3").setNumberFormat("0.0%");
  sheet.getRange("E4").setNumberFormat("#,##0");
  sheet.getRange("E5").setNumberFormat("€#,##0");
  sheet.getRange("E8").setNumberFormat("0.0%");
  sheet.getRange("E9").setNumberFormat("#,##0");
  sheet.getRange("E10").setNumberFormat("€#,##0");

  // ==========================================
  // SECTION 2: ROLLOUT SCHEDULE
  // ==========================================
  let rRollout = 19;
  sheet.getRange(rRollout, 1, 1, 65).setBackground(colorHeaderBg);
  sheet.getRange(rRollout, 1).setValue("SECTION 2: ROLLOUT SCHEDULE").setTextStyle(styleHeader);
  
  let headers = ["Metric", "", "", "", ""]; // A to E
  let startDate = new Date(2026, 8, 1); 
  
  for (let m = 1; m <= 60; m++) {
    let d = new Date(startDate);
    d.setMonth(d.getMonth() + (m - 1));
    headers.push(d.toLocaleString('en-US', { month: 'short', year: '2-digit' }));
  }
  
  sheet.getRange(rRollout + 1, 1, 1, 65).setValues([headers]).setFontWeight("bold").setBackground(colorHeaderBg).setHorizontalAlignment("right");
  sheet.getRange(rRollout + 1, 1).setHorizontalAlignment("left");
  
  const rolloutMetrics = [
    "New Labelled Categories Launched",
    "New Aggregated Categories Launched",
    "New Chains/Retailers Instrumented",
    "Cumulative Labelled Categories",
    "Cumulative Aggregated Categories",
    "Cumulative Chains Instrumented",
    "Active Brands Penetration (%)" 
  ];
  
  let rData = [];
  for(let i=0; i<rolloutMetrics.length; i++) {
    let row = [rolloutMetrics[i], "", "", "", ""];
    rData.push(row);
  }
  sheet.getRange(rRollout + 2, 1, rolloutMetrics.length, 5).setValues(rData).setFontWeight("bold");
  sheet.getRange(rRollout + 8, 1).setFontStyle("italic");
  
  const colLetter = (colIndex) => {
    let temp, letter = '';
    while (colIndex > 0) {
      temp = (colIndex - 1) % 26;
      letter = String.fromCharCode(temp + 65) + letter;
      colIndex = Math.floor((colIndex - temp - 1) / 26);
    }
    return letter;
  };

  for(let c = 6; c <= 65; c++) { // M1 starts at F (index 6)
    let m = c - 5;
    let col = colLetter(c);
    let prevCol = colLetter(c-1);
    
    let nLab = 0, nAgg = 0, nCh = 0, pen = 0;
    
    if (m === 2 || m === 4 || m === 5 || m === 6 || (m > 6 && m % 3 === 0)) nLab = 1; 
    if (m > 12 && m % 6 === 0) nAgg = 1; 
    if (m === 2 || m === 5 || (m > 6 && m % 4 === 0)) nCh = 1; 
    
    if (m <= 6) pen = 0.33; 
    else if (m <= 12) pen = 0.50; 
    else if (m <= 24) pen = 0.66; 
    else if (m <= 36) pen = 0.75; 
    else pen = 0.85; 
    
    sheet.getRange(rRollout + 2, c).setValue(nLab).setBackground(colorInputBg).setFontColor(colorInputFg).setFontWeight("bold").setNumberFormat("#,##0");
    sheet.getRange(rRollout + 3, c).setValue(nAgg).setBackground(colorInputBg).setFontColor(colorInputFg).setFontWeight("bold").setNumberFormat("#,##0");
    sheet.getRange(rRollout + 4, c).setValue(nCh).setBackground(colorInputBg).setFontColor(colorInputFg).setFontWeight("bold").setNumberFormat("#,##0");
    sheet.getRange(rRollout + 8, c).setValue(pen).setNumberFormat("0.0%").setBackground(colorInputBg).setFontColor(colorInputFg).setFontWeight("bold");
    
    if (m === 1) {
      sheet.getRange(rRollout + 5, c).setFormula(`=${col}${rRollout + 2}`);
      sheet.getRange(rRollout + 6, c).setFormula(`=${col}${rRollout + 3}`);
      sheet.getRange(rRollout + 7, c).setFormula(`=${col}${rRollout + 4}`);
    } else {
      sheet.getRange(rRollout + 5, c).setFormula(`=${prevCol}${rRollout + 5} + ${col}${rRollout + 2}`);
      sheet.getRange(rRollout + 6, c).setFormula(`=${prevCol}${rRollout + 6} + ${col}${rRollout + 3}`);
      sheet.getRange(rRollout + 7, c).setFormula(`=${prevCol}${rRollout + 7} + ${col}${rRollout + 4}`);
    }
  }

  // ==========================================
  // SECTION 3: MONTHLY P&L
  // ==========================================
  let rPl = rRollout + 10;
  sheet.getRange(rPl, 1, 1, 65).setBackground(colorHeaderBg);
  sheet.getRange(rPl, 1).setValue("SECTION 3: 5-YEAR MONTHLY P&L").setTextStyle(styleHeader);
  sheet.getRange(rPl + 1, 1, 1, 65).setValues([headers]).setFontWeight("bold").setBackground(colorHeaderBg).setHorizontalAlignment("right");
  sheet.getRange(rPl + 1, 1).setHorizontalAlignment("left");
  
  const plMetrics = [
    "1. REVENUE",
    "Legacy / Current Revenue",
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
  
  let pData = [];
  for(let i=0; i<plMetrics.length; i++) pData.push([plMetrics[i], "", "", "", ""]);
  sheet.getRange(rPl + 2, 1, plMetrics.length, 5).setValues(pData).setFontWeight("bold");
  
  for(let c = 6; c <= 65; c++) {
    let col = colLetter(c);
    let prevCol = colLetter(c-1);
    let m = c - 5; // Month index
    
    // REVENUE
    if (m === 1) sheet.getRange(rPl + 3, c).setFormula(`=$B$4`);
    else sheet.getRange(rPl + 3, c).setFormula(`=${prevCol}${rPl + 3} * 1.05`); // Deterministic 5% MoM
    
    // Labelled ARR = Cumul Labelled * (Max Brands * Penetration) * Price
    sheet.getRange(rPl + 4, c).setFormula(`=${col}${rRollout + 5} * ($E$4 * ${col}${rRollout + 8}) * $E$5`);
    // Aggregated ARR = Cumul Aggregated * (Max Brands * Penetration) * Price
    sheet.getRange(rPl + 5, c).setFormula(`=${col}${rRollout + 6} * ($E$9 * ${col}${rRollout + 8}) * $E$10`);
    sheet.getRange(rPl + 6, c).setFormula(`=${col}${rPl + 3} + (${col}${rPl + 4} + ${col}${rPl + 5}) / 12`);
    sheet.getRange(rPl + 7, c).setFormula(`=${col}${rPl + 6} * 12`);
    
    // COGS
    sheet.getRange(rPl + 10, c).setFormula(`=${col}${rRollout + 7} * $B$7`);
    sheet.getRange(rPl + 11, c).setFormula(`=${col}${rPl + 10} * $B$8`);
    sheet.getRange(rPl + 12, c).setFormula(`=(${col}${rPl + 4} / 12) * $E$3`);
    sheet.getRange(rPl + 13, c).setFormula(`=${col}${rPl + 11} + ${col}${rPl + 12}`);
    
    // GP 
    sheet.getRange(rPl + 14, c).setFormula(`=${col}${rPl + 6} - ${col}${rPl + 13}`);
    sheet.getRange(rPl + 15, c).setFormula(`=IF(${col}${rPl + 6}>0, ${col}${rPl + 14}/${col}${rPl + 6}, 0)`);
    
    // OPEX
    let yr = Math.floor((m-1)/12);
    sheet.getRange(rPl + 18, c).setFormula(`=$B$11 * (1.05^${yr})`);
    sheet.getRange(rPl + 19, c).setFormula(`=MAX(0, FLOOR(${col}${rPl + 7}/1000000, 1) * ($B$12 + $B$13) * $B$14)`);
    sheet.getRange(rPl + 20, c).setFormula(`=$B$15 + (${col}${rPl + 7} * 0.005)`);
    sheet.getRange(rPl + 21, c).setFormula(`=$B$16 + (${col}${rPl + 7} * 0.01)`); 
    sheet.getRange(rPl + 22, c).setFormula(`=SUM(${col}${rPl + 18}:${col}${rPl + 21})`);
    
    // CASHFLOW
    sheet.getRange(rPl + 25, c).setFormula(`=${col}${rPl + 14} - ${col}${rPl + 22}`);
    
    // Connect to fundraising inputs in Section 4 below
    let sumRy = rPl + 30;
    let inflowFormula = "0";
    if (m === 2) inflowFormula = `$I$${sumRy + 3}`; // Bridge
    if (m === 3) inflowFormula = `$I$${sumRy + 4}`; // PreSeed
    if (m === 15) inflowFormula = `$I$${sumRy + 6}`; // Seed
    if (m === 36) inflowFormula = `$I$${sumRy + 8}`; // Series A
    sheet.getRange(rPl + 26, c).setFormula(`=${inflowFormula}`);
    
    if (m === 1) {
      sheet.getRange(rPl + 27, c).setFormula(`=$B$3 + ${col}${rPl + 26} + ${col}${rPl + 25}`);
    } else {
      sheet.getRange(rPl + 27, c).setFormula(`=${prevCol}${rPl + 27} + ${col}${rPl + 26} + ${col}${rPl + 25}`);
    }
  }

  // Formatting P&L
  sheet.getRange(rPl + 3, 6, 5, 60).setNumberFormat("€#,##0"); 
  sheet.getRange(rPl + 10, 6, 1, 60).setNumberFormat("#,##0"); 
  sheet.getRange(rPl + 11, 6, 4, 60).setNumberFormat("€#,##0"); 
  sheet.getRange(rPl + 15, 6, 1, 60).setNumberFormat("0.0%"); 
  sheet.getRange(rPl + 18, 6, 5, 60).setNumberFormat("€#,##0"); 
  sheet.getRange(rPl + 25, 6, 3, 60).setNumberFormat("€#,##0"); 

  // Clean grey subheaders
  sheet.getRange(`A${rPl + 2}:E${rPl + 2}`).setBackground(colorHeaderBg);
  sheet.getRange(`A${rPl + 9}:E${rPl + 9}`).setBackground(colorHeaderBg);
  sheet.getRange(`A${rPl + 17}:E${rPl + 17}`).setBackground(colorHeaderBg);
  sheet.getRange(`A${rPl + 24}:E${rPl + 24}`).setBackground(colorHeaderBg);

  let cashRule = SpreadsheetApp.newConditionalFormatRule()
    .whenNumberLessThan(0)
    .setFontColor(colorRedFg)
    .setBackground(colorRedBg)
    .setRanges([sheet.getRange(rPl + 27, 6, 1, 60)])
    .build();
  let rules = sheet.getConditionalFormatRules();
  rules.push(cashRule);
  sheet.setConditionalFormatRules(rules);

  // ==========================================
  // SECTION 4: ANNUAL SUMMARY & VALUATION & FUNDRAISING
  // ==========================================
  let rSum = rPl + 30;
  sheet.getRange(rSum, 1, 1, 65).setBackground(colorHeaderBg);
  sheet.getRange(rSum, 1).setValue("SECTION 4: ANNUAL SUMMARY, VALUATION & FUNDRAISING").setTextStyle(styleHeader);
  
  const sumHeaders = ["Metric"];
  for(let y=1; y<=5; y++) sumHeaders.push("Year " + y);
  
  sheet.getRange(rSum + 1, 1, 1, 6).setValues([sumHeaders]).setFontWeight("bold").setBackground(colorHeaderBg).setHorizontalAlignment("right");
  sheet.getRange(rSum + 1, 1).setHorizontalAlignment("left");
  
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
    "Projected Exit Valuation (€)",
    "Yield per Store (€/yr)"
  ];
  
  let sData = [];
  for(let i=0; i<sumMetrics.length; i++) sData.push([sumMetrics[i]]);
  sheet.getRange(rSum + 2, 1, sumMetrics.length, 1).setValues(sData).setFontWeight("bold");
  
  for (let y = 1; y <= 5; y++) {
    let startCol = colLetter(5 + (y-1)*12 + 1); // Year 1 starts at Month 1 (Col F -> index 6)
    let endCol = colLetter(5 + y*12);           
    let col = colLetter(y + 1);                 // Outputs to Col B, C, D, E, F
    
    sheet.getRange(rSum + 2, y + 1).setFormula(`=${endCol}${rPl + 7}`); 
    sheet.getRange(rSum + 3, y + 1).setFormula(`=SUM(${startCol}${rPl + 6}:${endCol}${rPl + 6})`); 
    sheet.getRange(rSum + 4, y + 1).setFormula(`=SUM(${startCol}${rPl + 13}:${endCol}${rPl + 13})`); 
    sheet.getRange(rSum + 5, y + 1).setFormula(`=SUM(${startCol}${rPl + 14}:${endCol}${rPl + 14})`); 
    sheet.getRange(rSum + 6, y + 1).setFormula(`=IF(${col}${rSum + 3}>0, ${col}${rSum + 5}/${col}${rSum + 3}, 0)`); 
    sheet.getRange(rSum + 7, y + 1).setFormula(`=SUM(${startCol}${rPl + 22}:${endCol}${rPl + 22})`); 
    sheet.getRange(rSum + 8, y + 1).setFormula(`=SUM(${startCol}${rPl + 25}:${endCol}${rPl + 25})`); 
    sheet.getRange(rSum + 9, y + 1).setFormula(`=${endCol}${rPl + 27}`); 
    
    // Valuation = ARR * Target Multiple (Assumptions)
    sheet.getRange(rSum + 11, y + 1).setFormula(`=${col}${rSum + 2} * $I$12`); 
    sheet.getRange(rSum + 12, y + 1).setFormula(`=IF(${endCol}${rPl + 10}>0, ${col}${rSum + 3} / ${endCol}${rPl + 10}, 0)`); 
  }
  
  sheet.getRange(rSum + 2, 2, 4, 5).setNumberFormat("€#,##0");
  sheet.getRange(rSum + 6, 2, 1, 5).setNumberFormat("0.0%");
  sheet.getRange(rSum + 7, 2, 3, 5).setNumberFormat("€#,##0");
  sheet.getRange(rSum + 11, 2, 2, 5).setNumberFormat("€#,##0");
  
  // Highlight Valuation Line
  sheet.getRange(`A${rSum + 11}:F${rSum + 11}`).setBackground(colorGreenBg).setFontColor(colorGreenFg);

  // FUNDRAISING SCHEME (Placed right next to Section 4)
  sheet.getRange(rSum, 8, 1, 2).mergeAcross().setValue("6. FUNDRAISING SCHEME (CASH INFUSIONS)").setBackground(colorHeaderBg).setFontWeight("bold");
  
  const fundData = [
    ["Bridge / Grant (Oct-26) - Amount (€)", 16500],
    ["Pre-Seed (Nov-26) - Amount (€)", 500000],
    ["Pre-Seed Pre-Money Cap (€)", 6000000],
    ["", ""],
    ["Seed (Month 15) - Amount (€)", 2000000],
    ["Seed Post-Money Val (€)", 12000000],
    ["", ""],
    ["Series A (Month 36) - Amount (€)", 5000000],
    ["Series A Pre-Money Val (€)", 40000000],
    ["", ""],
    ["Target Exit Revenue Multiple", 10]
  ];
  
  sheet.getRange(rSum + 1, 8, fundData.length, 2).setValues(fundData).setFontWeight("bold");
  
  const fundInputRanges = [`I${rSum + 2}`, `I${rSum + 3}`, `I${rSum + 4}`, `I${rSum + 6}`, `I${rSum + 7}`, `I${rSum + 9}`, `I${rSum + 10}`];
  for (let r of fundInputRanges) {
    sheet.getRange(r).setBackground(colorInputBg).setFontColor(colorInputFg).setNumberFormat("€#,##0");
  }
  sheet.getRange(`I${rSum + 12}`).setBackground(colorInputBg).setFontColor(colorInputFg).setNumberFormat("0.0\"x\"");

  // MOIC Calculations
  sheet.getRange(rSum + 14, 8).setValue("Estimated MOIC (Multiple on Invested Capital)").setFontWeight("bold").setBackground(colorHeaderBg);
  sheet.getRange(rSum + 15, 8).setValue("Pre-Seed Investors").setFontWeight("bold");
  sheet.getRange(rSum + 16, 8).setValue("Seed Investors").setFontWeight("bold");
  sheet.getRange(rSum + 17, 8).setValue("Series A Investors").setFontWeight("bold");
  
  // MOIC = (Exit Valuation / Post-Money Valuation of that round)
  // Pre-seed Post-Money = Pre-Money Cap + Amount = I(rSum+4) + I(rSum+3)
  sheet.getRange(rSum + 15, 9).setFormula(`=$F$${rSum + 11} / ($I$${rSum + 4} + $I$${rSum + 3})`).setNumberFormat("0.0\"x\"").setFontWeight("bold");
  // Seed Post-Money = I(rSum+7)
  sheet.getRange(rSum + 16, 9).setFormula(`=$F$${rSum + 11} / $I$${rSum + 7}`).setNumberFormat("0.0\"x\"").setFontWeight("bold");
  // Series A Post-Money = Pre-Money + Amount = I(rSum+10) + I(rSum+9)
  sheet.getRange(rSum + 17, 9).setFormula(`=$F$${rSum + 11} / ($I$${rSum + 10} + $I$${rSum + 9})`).setNumberFormat("0.0\"x\"").setFontWeight("bold");

  // Freeze panes so scrolling timeline leaves labels intact
  sheet.setFrozenColumns(5);
  sheet.setFrozenRows(rPl + 1); 
  
  SpreadsheetApp.getUi().alert("TIER-1 VC MODEL generated perfectly!");
}
