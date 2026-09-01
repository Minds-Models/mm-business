function onOpen() {
  SpreadsheetApp.getUi().createMenu('M&M Tools')
      .addItem('Build VC Financial Model', 'buildVCFinancialModel')
      .addToUi();
}

function buildVCFinancialModel() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName("VC Financial Model");
  if (sheet) ss.deleteSheet(sheet);
  sheet = ss.insertSheet("VC Financial Model");
  
  sheet.setColumnWidth(1, 280);
  sheet.setColumnWidth(2, 120);
  const headerStyle = SpreadsheetApp.newTextStyle().setBold(true).setForeground("white").build();
  
  sheet.getRange("A1:B1").merge().setValue("SECTION 1: DRIVERS & ASSUMPTIONS").setTextStyle(headerStyle).setBackground("#1a1a1a");
  
  const assumptions = [
    ["1. CAPITAL & RUNWAY", ""],
    ["Starting Cash Balance (€)", 42000],
    ["Legacy / Current Monthly Revenue (€)", 1000],
    ["", ""],
    
    ["2. SUPPLY COGS (The Network)", ""],
    ["Avg Stores per Chain/Retailer", 200],
    ["Store Ops Cost (€/store/month)", 40.80], 
    ["", ""],

    ["3. UNIT ECONOMICS: LABELLED (Single Retailer)", "e.g. EuroOil"],
    ["Retailer Revenue Share (%)", 0.20],
    ["Max Brands per Category (Seat Depth)", 6],
    ["Avg Price per Brand Seat (€/yr)", 30000],
    ["", ""],
    
    ["4. UNIT ECONOMICS: AGGREGATED (Cross-Market)", "e.g. Market Benchmark"],
    ["Retailer Revenue Share (%)", 0.00], 
    ["Max Brands per Category (Seat Depth)", 6],
    ["Avg Price per Brand Seat (€/yr)", 50000], 
    ["", ""],
    
    ["5. OPEX SCALING", ""],
    ["Starting Monthly Payroll (€) - based on Jul actuals", 13000],
    ["Engineering Hires per €1M ARR added", 3],
    ["Sales/GTM Hires per €1M ARR added", 2],
    ["Avg New Hire Cost (€/mo fully loaded)", 5000],
    ["Base Professional Fees (€/mo)", 2000],
    ["Base Marketing & T&E (€/mo)", 1500],
    ["", ""],
    
    ["6. FUNDRAISING SCHEME", ""],
    ["Bridge / Grant (Oct-26) - Amount (€)", 16500],
    ["Pre-Seed (Nov-26) - Amount (€)", 500000],
    ["Pre-Seed (Nov-26) - Pre-Money Cap (€)", 6000000],
    ["Seed (Month 15) - Amount (€)", 2000000],
    ["Seed (Month 15) - Post-Money (€)", 18000000],
    ["Series A (Month 36) - Amount (€)", 5000000],
    ["Series A (Month 36) - Pre-Money (€)", 40000000]
  ];
  
  sheet.getRange(2, 1, assumptions.length, 2).setValues(assumptions);
  sheet.getRange("A2:A36").setFontWeight("bold");
  sheet.getRange("A2,A6,A10,A15,A21,A29").setBackground("#f3f3f3");
  
  const inputRanges = ["B3:B4", "B7:B8", "B11:B13", "B16:B18", "B22:B27", "B30:B36"];
  for (let r of inputRanges) {
    sheet.getRange(r).setBackground("#e8f0fe").setFontColor("#1155cc").setFontWeight("bold");
  }
  
  sheet.getRange("B3:B4").setNumberFormat("€#,##0");
  sheet.getRange("B7").setNumberFormat("#,##0");
  sheet.getRange("B8").setNumberFormat("€#,##0.00");
  sheet.getRange("B11").setNumberFormat("0.0%");
  sheet.getRange("B12").setNumberFormat("#,##0");
  sheet.getRange("B13").setNumberFormat("€#,##0");
  sheet.getRange("B16").setNumberFormat("0.0%");
  sheet.getRange("B17").setNumberFormat("#,##0");
  sheet.getRange("B18").setNumberFormat("€#,##0");
  sheet.getRange("B22").setNumberFormat("€#,##0");
  sheet.getRange("B23:B24").setNumberFormat("#,##0");
  sheet.getRange("B25:B27").setNumberFormat("€#,##0");
  sheet.getRange("B30:B36").setNumberFormat("€#,##0");

  // SECTION 2
  let rolloutRow = 38;
  sheet.getRange(rolloutRow, 1, 1, 62).setBackground("#1a1a1a");
  sheet.getRange(rolloutRow, 1).setValue("SECTION 2: ROLLOUT SCHEDULE").setTextStyle(headerStyle);
  
  let headers = ["Metric"];
  let yearsRow = ["Year Indicator"];
  let startDate = new Date(2026, 8, 1); 
  
  for (let m = 1; m <= 60; m++) {
    let d = new Date(startDate);
    d.setMonth(d.getMonth() + (m - 1));
    headers.push(d.toLocaleString('en-US', { month: 'short', year: '2-digit' }));
    yearsRow.push(Math.ceil(m / 12));
  }
  
  sheet.getRange(rolloutRow + 1, 1, 1, 61).setValues([yearsRow]).setFontColor("#ffffff").setBackground("#ffffff").setFontSize(6);
  sheet.getRange(rolloutRow + 2, 1, 1, 61).setValues([headers]).setFontWeight("bold").setBackground("#f3f3f3");
  
  const rolloutMetrics = [
    "New Labelled Categories Launched",
    "New Aggregated Categories Launched",
    "New Chains/Retailers Instrumented",
    "Cumulative Labelled Categories",
    "Cumulative Aggregated Categories",
    "Cumulative Chains Instrumented",
    "Active Brands Penetration (%)" 
  ];
  
  let rolloutData = [];
  for(let i=0; i<rolloutMetrics.length; i++) rolloutData.push([rolloutMetrics[i]]);
  sheet.getRange(rolloutRow + 3, 1, rolloutMetrics.length, 1).setValues(rolloutData).setFontWeight("bold");
  sheet.getRange(rolloutRow + 9, 1).setFontStyle("italic");
  
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
    
    let newLabelled = 0, newAggregated = 0, newChains = 0, penetration = 0;
    
    if (m === 2 || m === 4 || m === 5 || m === 6 || (m > 6 && m % 3 === 0)) newLabelled = 1; 
    if (m > 12 && m % 6 === 0) newAggregated = 1; 
    if (m === 2 || m === 5 || (m > 6 && m % 4 === 0)) newChains = 1; 
    
    if (m <= 6) penetration = 0.33; 
    else if (m <= 12) penetration = 0.50; 
    else if (m <= 24) penetration = 0.66; 
    else if (m <= 36) penetration = 0.75; 
    else penetration = 0.85; 
    
    sheet.getRange(rolloutRow + 3, c).setValue(newLabelled).setBackground("#e8f0fe").setFontColor("#1155cc").setFontWeight("bold");
    sheet.getRange(rolloutRow + 4, c).setValue(newAggregated).setBackground("#e8f0fe").setFontColor("#1155cc").setFontWeight("bold");
    sheet.getRange(rolloutRow + 5, c).setValue(newChains).setBackground("#e8f0fe").setFontColor("#1155cc").setFontWeight("bold");
    sheet.getRange(rolloutRow + 9, c).setValue(penetration).setNumberFormat("0.0%").setBackground("#e8f0fe").setFontColor("#1155cc").setFontWeight("bold");
    
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

  // SECTION 3
  let plRow = rolloutRow + 11;
  sheet.getRange(plRow, 1, 1, 62).setBackground("#1a1a1a");
  sheet.getRange(plRow, 1).setValue("SECTION 3: 5-YEAR P&L").setTextStyle(headerStyle);
  sheet.getRange(plRow + 1, 1, 1, 61).setValues([headers]).setFontWeight("bold").setBackground("#f3f3f3");
  
  const plMetrics = [
    "1. REVENUE",
    "Legacy / Current Revenue (Run-Rate)",
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
  sheet.getRange(plRow + 2, 1).setFontColor("#3d6bfb"); 
  sheet.getRange(plRow + 9, 1).setFontColor("#c0504d"); 
  sheet.getRange(plRow + 17, 1).setFontColor("#A8621A"); 
  sheet.getRange(plRow + 24, 1).setFontColor("#1f6f4a"); 
  
  let ry = rolloutRow; 

  for(let c = 2; c <= 61; c++) {
    let col = colLetter(c);
    let prevCol = colLetter(c-1);
    let m = c - 1;
    
    // REVENUE
    sheet.getRange(plRow + 3, c).setFormula(`=$B$4*12`);
    sheet.getRange(plRow + 4, c).setFormula(`=${col}${ry + 6} * ($B$12 * ${col}${ry + 9}) * $B$13`);
    sheet.getRange(plRow + 5, c).setFormula(`=${col}${ry + 7} * ($B$17 * ${col}${ry + 9}) * $B$18`);
    sheet.getRange(plRow + 6, c).setFormula(`=(${col}${plRow + 3} + ${col}${plRow + 4} + ${col}${plRow + 5}) / 12`);
    sheet.getRange(plRow + 7, c).setFormula(`=${col}${plRow + 6} * 12`);
    
    // COGS
    sheet.getRange(plRow + 10, c).setFormula(`=${col}${ry + 8} * $B$7`);
    sheet.getRange(plRow + 11, c).setFormula(`=${col}${plRow + 10} * $B$8`);
    sheet.getRange(plRow + 12, c).setFormula(`=(${col}${plRow + 4} / 12) * $B$11`);
    sheet.getRange(plRow + 13, c).setFormula(`=${col}${plRow + 11} + ${col}${plRow + 12}`);
    
    // GP 
    sheet.getRange(plRow + 14, c).setFormula(`=${col}${plRow + 6} - ${col}${plRow + 13}`);
    sheet.getRange(plRow + 15, c).setFormula(`=IF(${col}${plRow + 6}>0, ${col}${plRow + 14}/${col}${plRow + 6}, 0)`);
    
    // OPEX
    let yr = Math.floor((m-1)/12);
    sheet.getRange(plRow + 18, c).setFormula(`=$B$22 * (1.05^${yr})`);
    sheet.getRange(plRow + 19, c).setFormula(`=MAX(0, FLOOR(${col}${plRow + 7}/1000000, 1) * ($B$23 + $B$24) * $B$25)`);
    sheet.getRange(plRow + 20, c).setFormula(`=$B$26 + (${col}${plRow + 7} * 0.005)`);
    sheet.getRange(plRow + 21, c).setFormula(`=$B$27 + (${col}${plRow + 7} * 0.01)`); 
    sheet.getRange(plRow + 22, c).setFormula(`=SUM(${col}${plRow + 18}:${col}${plRow + 21})`);
    
    // CASHFLOW
    sheet.getRange(plRow + 25, c).setFormula(`=${col}${plRow + 14} - ${col}${plRow + 22}`);
    
    let inflowFormula = "0";
    if (m === 2) inflowFormula = "16500"; 
    if (m === 3) inflowFormula = "$B$31"; 
    if (m === 15) inflowFormula = "$B$33"; 
    if (m === 36) inflowFormula = "$B$35"; 
    sheet.getRange(plRow + 26, c).setFormula(`=${inflowFormula}`);
    
    if (c === 2) {
      sheet.getRange(plRow + 27, c).setFormula(`=$B$2 + ${col}${plRow + 26} + ${col}${plRow + 25}`);
    } else {
      sheet.getRange(plRow + 27, c).setFormula(`=${prevCol}${plRow + 27} + ${col}${plRow + 26} + ${col}${plRow + 25}`);
    }
  }

  sheet.getRange(plRow + 3, 2, 5, 60).setNumberFormat("€#,##0"); 
  sheet.getRange(plRow + 10, 2, 1, 60).setNumberFormat("#,##0"); 
  sheet.getRange(plRow + 11, 2, 4, 60).setNumberFormat("€#,##0"); 
  sheet.getRange(plRow + 15, 2, 1, 60).setNumberFormat("0.0%"); 
  sheet.getRange(plRow + 18, 2, 5, 60).setNumberFormat("€#,##0"); 
  sheet.getRange(plRow + 25, 2, 3, 60).setNumberFormat("€#,##0"); 

  sheet.getRange(plRow + 6, 1, 1, 61).setFontWeight("bold"); 
  sheet.getRange(plRow + 7, 1, 1, 61).setFontWeight("bold"); 
  sheet.getRange(plRow + 13, 1, 1, 61).setFontWeight("bold"); 
  sheet.getRange(plRow + 14, 1, 1, 61).setFontWeight("bold"); 
  sheet.getRange(plRow + 22, 1, 1, 61).setFontWeight("bold"); 
  sheet.getRange(plRow + 25, 1, 1, 61).setFontWeight("bold"); 
  sheet.getRange(plRow + 27, 1, 1, 61).setFontWeight("bold"); 
  
  let cashRule = SpreadsheetApp.newConditionalFormatRule()
    .whenNumberLessThan(0)
    .setFontColor("#c0504d")
    .setBackground("#f7eae8")
    .setRanges([sheet.getRange(plRow + 27, 2, 1, 60)])
    .build();
  let rules = sheet.getConditionalFormatRules();
  rules.push(cashRule);
  sheet.setConditionalFormatRules(rules);

  // SECTION 4
  let sumRow = plRow + 30;
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
  sheet.getRange(sumRow + 11, 1).setFontColor("#3d6bfb"); 
  
  for (let y = 1; y <= 5; y++) {
    let startCol = colLetter(1 + (y-1)*12 + 1); 
    let endCol = colLetter(1 + y*12); 
    let colIndex = y + 1; 
    let letIndex = colLetter(colIndex);
    
    sheet.getRange(sumRow + 2, colIndex).setFormula(`=${endCol}${plRow + 7}`);
    sheet.getRange(sumRow + 3, colIndex).setFormula(`=SUM(${startCol}${plRow + 6}:${endCol}${plRow + 6})`);
    sheet.getRange(sumRow + 4, colIndex).setFormula(`=SUM(${startCol}${plRow + 13}:${endCol}${plRow + 13})`);
    sheet.getRange(sumRow + 5, colIndex).setFormula(`=SUM(${startCol}${plRow + 14}:${endCol}${plRow + 14})`);
    sheet.getRange(sumRow + 6, colIndex).setFormula(`=IF(${letIndex}${sumRow + 3}>0, ${letIndex}${sumRow + 5}/${letIndex}${sumRow + 3}, 0)`);
    sheet.getRange(sumRow + 7, colIndex).setFormula(`=SUM(${startCol}${plRow + 22}:${endCol}${plRow + 22})`);
    sheet.getRange(sumRow + 8, colIndex).setFormula(`=SUM(${startCol}${plRow + 25}:${endCol}${plRow + 25})`);
    sheet.getRange(sumRow + 9, colIndex).setFormula(`=${endCol}${plRow + 27}`);
    
    sheet.getRange(sumRow + 12, colIndex).setValue(10).setBackground("#e8f0fe").setFontColor("#1155cc").setFontWeight("bold"); 
    sheet.getRange(sumRow + 13, colIndex).setFormula(`=${letIndex}${sumRow + 12} * ${letIndex}${sumRow + 2}`); 
    sheet.getRange(sumRow + 14, colIndex).setFormula(`=IF(${endCol}${plRow + 10}>0, ${letIndex}${sumRow + 3} / ${endCol}${plRow + 10}, 0)`);
  }
  
  sheet.getRange(sumRow + 2, 2, 4, 5).setNumberFormat("€#,##0");
  sheet.getRange(sumRow + 6, 2, 1, 5).setNumberFormat("0.0%");
  sheet.getRange(sumRow + 7, 2, 3, 5).setNumberFormat("€#,##0");
  sheet.getRange(sumRow + 12, 2, 1, 5).setNumberFormat("0.0\"x\"");
  sheet.getRange(sumRow + 13, 2, 2, 5).setNumberFormat("€#,##0");
  
  sheet.getRange(sumRow + 8, 1, 1, 6).setFontWeight("bold");
  sheet.getRange(sumRow + 9, 1, 1, 6).setFontWeight("bold");
  sheet.getRange(sumRow + 13, 1, 1, 6).setFontWeight("bold").setBackground("#d9ead3").setFontColor("#1f6f4a");
  
  sheet.setFrozenColumns(1);
}