function onOpen() {
  SpreadsheetApp.getUi().createMenu('M&M Tools')
      .addItem('Build FINAL VC MODEL', 'buildFinalVCModel')
      .addToUi();
}

function buildFinalVCModel() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheetName = "FINAL VC MODEL";
  let sheet = ss.getSheetByName(sheetName);
  if (sheet) ss.deleteSheet(sheet);
  sheet = ss.insertSheet(sheetName);
  
  // Clean Canvas
  sheet.setHiddenGridlines(true);
  
  // ==========================================
  // PERFECT COLUMN ALIGNMENT
  // A: Labels (350px)
  // B onwards: 95px. 
  // We use merged cells for the top section so it doesn't stretch the months below!
  // ==========================================
  sheet.setColumnWidth(1, 350); 
  for (let i = 2; i <= 70; i++) {
    sheet.setColumnWidth(i, 95); 
  }

  const styleHeader = SpreadsheetApp.newTextStyle().setBold(true).setForeground("white").build();
  
  sheet.getRange("A1:I1").merge().setValue("SECTION 1: ASSUMPTIONS & DRIVERS")
       .setTextStyle(styleHeader).setBackground("#1a1a1a");
  
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
  for(let i=0; i<assumptionsLeft.length; i++) {
    let r = i + 2;
    sheet.getRange(r, 1).setValue(assumptionsLeft[i][0]).setFontWeight("bold");
    sheet.getRange(r, 2, 1, 2).merge().setValue(assumptionsLeft[i][1]); // Merge B+C for inputs
  }
  
  // Write Right
  for(let i=0; i<assumptionsRight.length; i++) {
    let r = i + 2;
    sheet.getRange(r, 5, 1, 3).merge().setValue(assumptionsRight[i][0]).setFontWeight("bold"); // E+F+G
    sheet.getRange(r, 8, 1, 2).merge().setValue(assumptionsRight[i][1]); // H+I for inputs
  }
  
  // Format Section sub-headers
  const sectionRowsLeft = [2, 6, 10];
  const sectionRowsRight = [2, 7];
  for (let r of sectionRowsLeft) {
    sheet.getRange(`A${r}:C${r}`).setBackground("#f3f3f3").setFontColor("#000000");
  }
  for (let r of sectionRowsRight) {
    sheet.getRange(`E${r}:I${r}`).setBackground("#f3f3f3").setFontColor("#000000");
  }
  
  // Format Inputs (Blue)
  const inputsL = [3,4, 7,8, 11,12,13,14,15,16];
  for (let r of inputsL) {
    sheet.getRange(`B${r}:C${r}`).setBackground("#e8f0fe").setFontColor("#1155cc").setFontWeight("bold");
  }
  const inputsR = [3,4,5, 8,9,10];
  for (let r of inputsR) {
    sheet.getRange(`H${r}:I${r}`).setBackground("#e8f0fe").setFontColor("#1155cc").setFontWeight("bold");
  }
  
  sheet.getRange("B3:C4").setNumberFormat("€#,##0");
  sheet.getRange("B7:C7").setNumberFormat("#,##0");
  sheet.getRange("B8:C8").setNumberFormat("€#,##0.00");
  sheet.getRange("B11:C11").setNumberFormat("€#,##0");
  sheet.getRange("B12:C13").setNumberFormat("#,##0");
  sheet.getRange("B14:C16").setNumberFormat("€#,##0");
  
  sheet.getRange("H3:I3").setNumberFormat("0.0%");
  sheet.getRange("H4:I4").setNumberFormat("#,##0");
  sheet.getRange("H5:I5").setNumberFormat("€#,##0");
  sheet.getRange("H8:I8").setNumberFormat("0.0%");
  sheet.getRange("H9:I9").setNumberFormat("#,##0");
  sheet.getRange("H10:I10").setNumberFormat("€#,##0");

  // ==========================================
  // SECTION 2: ROLLOUT SCHEDULE
  // ==========================================
  let rRollout = 19;
  sheet.getRange(rRollout, 1, 1, 62).mergeAcross().setBackground("#1a1a1a");
  sheet.getRange(rRollout, 1).setValue("SECTION 2: ROLLOUT SCHEDULE").setTextStyle(styleHeader);
  
  let headers = ["Metric"];
  let startDate = new Date(2026, 8, 1); 
  
  for (let m = 1; m <= 60; m++) {
    let d = new Date(startDate);
    d.setMonth(d.getMonth() + (m - 1));
    headers.push(d.toLocaleString('en-US', { month: 'short', year: '2-digit' }));
  }
  
  sheet.getRange(rRollout + 1, 1, 1, 61).setValues([headers]).setFontWeight("bold").setBackground("#f3f3f3").setHorizontalAlignment("right");
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
  for(let i=0; i<rolloutMetrics.length; i++) rData.push([rolloutMetrics[i]]);
  sheet.getRange(rRollout + 2, 1, rolloutMetrics.length, 1).setValues(rData).setFontWeight("bold");
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

  for(let c = 2; c <= 61; c++) {
    let m = c - 1;
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
    
    sheet.getRange(rRollout + 2, c).setValue(nLab).setBackground("#e8f0fe").setFontColor("#1155cc").setFontWeight("bold").setNumberFormat("#,##0");
    sheet.getRange(rRollout + 3, c).setValue(nAgg).setBackground("#e8f0fe").setFontColor("#1155cc").setFontWeight("bold").setNumberFormat("#,##0");
    sheet.getRange(rRollout + 4, c).setValue(nCh).setBackground("#e8f0fe").setFontColor("#1155cc").setFontWeight("bold").setNumberFormat("#,##0");
    sheet.getRange(rRollout + 8, c).setValue(pen).setNumberFormat("0.0%").setBackground("#e8f0fe").setFontColor("#1155cc").setFontWeight("bold");
    
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
  sheet.getRange(rPl, 1, 1, 62).mergeAcross().setBackground("#1a1a1a");
  sheet.getRange(rPl, 1).setValue("SECTION 3: 5-YEAR MONTHLY P&L").setTextStyle(styleHeader);
  sheet.getRange(rPl + 1, 1, 1, 61).setValues([headers]).setFontWeight("bold").setBackground("#f3f3f3").setHorizontalAlignment("right");
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
  for(let i=0; i<plMetrics.length; i++) pData.push([plMetrics[i]]);
  sheet.getRange(rPl + 2, 1, plMetrics.length, 1).setValues(pData).setFontWeight("bold");
  sheet.getRange(rPl + 2, 1).setFontColor("#3d6bfb"); 
  sheet.getRange(rPl + 9, 1).setFontColor("#c0504d"); 
  sheet.getRange(rPl + 17, 1).setFontColor("#A8621A"); 
  sheet.getRange(rPl + 24, 1).setFontColor("#1f6f4a"); 
  
  for(let c = 2; c <= 61; c++) {
    let col = colLetter(c);
    let prevCol = colLetter(c-1);
    let m = c - 1;
    
    // REVENUE
    if (m === 1) sheet.getRange(rPl + 3, c).setFormula(`=$B$4`);
    else sheet.getRange(rPl + 3, c).setFormula(`=${prevCol}${rPl + 3} * 1.05`);
    
    sheet.getRange(rPl + 4, c).setFormula(`=${col}${rRollout + 5} * ($H$4 * ${col}${rRollout + 8}) * $H$5`);
    sheet.getRange(rPl + 5, c).setFormula(`=${col}${rRollout + 6} * ($H$9 * ${col}${rRollout + 8}) * $H$10`);
    sheet.getRange(rPl + 6, c).setFormula(`=${col}${rPl + 3} + (${col}${rPl + 4} + ${col}${rPl + 5}) / 12`);
    sheet.getRange(rPl + 7, c).setFormula(`=${col}${rPl + 6} * 12`);
    
    // COGS
    sheet.getRange(rPl + 10, c).setFormula(`=${col}${rRollout + 7} * $B$7`);
    sheet.getRange(rPl + 11, c).setFormula(`=${col}${rPl + 10} * $B$8`);
    sheet.getRange(rPl + 12, c).setFormula(`=(${col}${rPl + 4} / 12) * $H$3`);
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
    
    // Fundraising 
    let sumRy = rPl + 30;
    let inflowFormula = "0";
    if (m === 2) inflowFormula = `$G$${sumRy + 2}`; 
    if (m === 3) inflowFormula = `$G$${sumRy + 3}`; 
    if (m === 15) inflowFormula = `$G$${sumRy + 5}`; 
    if (m === 36) inflowFormula = `$G$${sumRy + 7}`; 
    sheet.getRange(rPl + 26, c).setFormula(`=${inflowFormula}`);
    
    if (m === 1) {
      sheet.getRange(rPl + 27, c).setFormula(`=$B$3 + ${col}${rPl + 26} + ${col}${rPl + 25}`);
    } else {
      sheet.getRange(rPl + 27, c).setFormula(`=${prevCol}${rPl + 27} + ${col}${rPl + 26} + ${col}${rPl + 25}`);
    }
  }

  // Formatting P&L
  sheet.getRange(rPl + 3, 2, 5, 60).setNumberFormat("€#,##0"); 
  sheet.getRange(rPl + 10, 2, 1, 60).setNumberFormat("#,##0"); 
  sheet.getRange(rPl + 11, 2, 4, 60).setNumberFormat("€#,##0"); 
  sheet.getRange(rPl + 15, 2, 1, 60).setNumberFormat("0.0%"); 
  sheet.getRange(rPl + 18, 2, 5, 60).setNumberFormat("€#,##0"); 
  sheet.getRange(rPl + 25, 2, 3, 60).setNumberFormat("€#,##0"); 

  // Bold Totals
  sheet.getRange(`A${rPl + 6}:BJ${rPl + 7}`).setFontWeight("bold"); 
  sheet.getRange(`A${rPl + 13}:BJ${rPl + 15}`).setFontWeight("bold"); 
  sheet.getRange(`A${rPl + 22}:BJ${rPl + 22}`).setFontWeight("bold"); 
  sheet.getRange(`A${rPl + 25}:BJ${rPl + 27}`).setFontWeight("bold"); 
  
  let cashRule = SpreadsheetApp.newConditionalFormatRule()
    .whenNumberLessThan(0)
    .setFontColor("#c0504d")
    .setBackground("#f7eae8")
    .setRanges([sheet.getRange(rPl + 27, 2, 1, 60)])
    .build();
  let rules = sheet.getConditionalFormatRules();
  rules.push(cashRule);
  sheet.setConditionalFormatRules(rules);

  // ==========================================
  // SECTION 4: ANNUAL SUMMARY & VALUATION
  // ==========================================
  let rSum = rPl + 30;
  sheet.getRange(rSum, 1, 1, 4).mergeAcross().setBackground("#1a1a1a");
  sheet.getRange(rSum, 1).setValue("SECTION 4: ANNUAL SUMMARY & EXIT MATH").setTextStyle(styleHeader);
  
  const sumHeaders = ["Metric"];
  for(let y=1; y<=5; y++) sumHeaders.push("Year " + y);
  
  sheet.getRange(rSum + 1, 1, 1, 6).setValues([sumHeaders]).setFontWeight("bold").setBackground("#f3f3f3").setHorizontalAlignment("right");
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
    let startCol = colLetter(1 + (y-1)*12 + 1); // e.g. Year 1 starts at Month 1 (Col B -> index 2)
    let endCol = colLetter(1 + y*12);           // ends at Month 12 (Col M -> index 13)
    let col = colLetter(y + 1);                 // output col B, C, D, E, F
    
    sheet.getRange(rSum + 2, y + 1).setFormula(`=${endCol}${rPl + 7}`); // ARR
    sheet.getRange(rSum + 3, y + 1).setFormula(`=SUM(${startCol}${rPl + 6}:${endCol}${rPl + 6})`); // Rev
    sheet.getRange(rSum + 4, y + 1).setFormula(`=SUM(${startCol}${rPl + 13}:${endCol}${rPl + 13})`); // COGS
    sheet.getRange(rSum + 5, y + 1).setFormula(`=SUM(${startCol}${rPl + 14}:${endCol}${rPl + 14})`); // GP
    sheet.getRange(rSum + 6, y + 1).setFormula(`=IF(${col}${rSum + 3}>0, ${col}${rSum + 5}/${col}${rSum + 3}, 0)`); // GM%
    sheet.getRange(rSum + 7, y + 1).setFormula(`=SUM(${startCol}${rPl + 22}:${endCol}${rPl + 22})`); // OPEX
    sheet.getRange(rSum + 8, y + 1).setFormula(`=SUM(${startCol}${rPl + 25}:${endCol}${rPl + 25})`); // EBITDA
    sheet.getRange(rSum + 9, y + 1).setFormula(`=${endCol}${rPl + 27}`); // Ending Cash
    
    // Valuation = ARR * Target Multiple
    sheet.getRange(rSum + 11, y + 1).setFormula(`=${col}${rSum + 2} * $G$10`); 
    sheet.getRange(rSum + 12, y + 1).setFormula(`=IF(${endCol}${rPl + 10}>0, ${col}${rSum + 3} / ${endCol}${rPl + 10}, 0)`); // Yield
  }
  
  sheet.getRange(rSum + 2, 2, 4, 5).setNumberFormat("€#,##0");
  sheet.getRange(rSum + 6, 2, 1, 5).setNumberFormat("0.0%");
  sheet.getRange(rSum + 7, 2, 3, 5).setNumberFormat("€#,##0");
  sheet.getRange(rSum + 11, 2, 2, 5).setNumberFormat("€#,##0");
  
  sheet.getRange(`A${rSum + 8}:F${rSum + 9}`).setFontWeight("bold");
  sheet.getRange(`A${rSum + 11}:F${rSum + 11}`).setFontWeight("bold").setBackground("#d9ead3").setFontColor("#1f6f4a");

  // ==========================================
  // FUNDRAISING SCHEME (Placed right next to Section 4)
  // ==========================================
  sheet.getRange(rSum, 6, 1, 2).mergeAcross().setValue("6. FUNDRAISING SCHEME").setBackground("#1a1a1a").setTextStyle(styleHeader);
  
  const fundData = [
    ["Bridge (Oct-26) - Amount (€)", 16500],
    ["Pre-Seed (Nov-26) - Amount (€)", 500000],
    ["Pre-Seed Pre-Money Cap (€)", 6000000],
    ["", ""],
    ["Seed (Month 15) - Amount (€)", 2000000],
    ["Seed Post-Money Val (€)", 12000000],
    ["", ""],
    ["Series A (Month 36) - Amount (€)", 5000000],
    ["Series A Pre-Money Val (€)", 40000000],
    ["Target Exit Revenue Multiple", 10]
  ];
  
  sheet.getRange(rSum + 1, 6, fundData.length, 1).setFontWeight("bold").setBackground("#f3f3f3");
  sheet.getRange(rSum + 1, 7, fundData.length, 1).setBackground("#e8f0fe").setFontColor("#1155cc").setFontWeight("bold").setNumberFormat("€#,##0");
  sheet.getRange(rSum + 10, 7).setNumberFormat("0.0\"x\"");
  sheet.getRange(rSum + 1, 6, fundData.length, 2).setValues(fundData);

  // Freeze column A so scrolling timeline leaves labels intact
  sheet.setFrozenColumns(1);
  sheet.setFrozenRows(rRollout + 1); 
  
  SpreadsheetApp.getUi().alert("FINAL VC MODEL generated flawlessly from First Principles!");
}