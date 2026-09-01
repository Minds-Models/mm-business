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
    ["Starting Monthly Payroll (€) - based on Jul actuals", 13000],
    ["Engineering Hires per €1M ARR added", 3],
    ["Sales/GTM Hires per €1M ARR added", 2],
    ["Avg New Hire Cost (€/mo fully loaded)", 5000],
    ["Base Professional Fees (€/mo)", 2000],
    ["Base Marketing & T&E (€/mo)", 1500]
  ];
  
  sheet.getRange(2, 1, assumptions.length, 2).setValues(assumptions);
  sheet.getRange("A2:A30").setFontWeight("bold");
  sheet.getRange("A2,A8,A12,A17,A23").setBackground("#f3f3f3");
  
  // Highlight inputs
  const inputRanges = ["B3:B6", "B9:B10", "B13:B15", "B18:B20", "B24:B29"];
  for (let r of inputRanges) {
    sheet.getRange(r).setBackground("#e8f0fe").setFontColor("#1155cc").setFontWeight("bold");
  }
  
  sheet.getRange("B3:B6").setNumberFormat("€#,##0");
  sheet.getRange("B9:B10").setNumberFormat("#,##0.00");
  sheet.getRange("B13").setNumberFormat("0.0%");
  sheet.getRange("B15").setNumberFormat("€#,##0");
  sheet.getRange("B18").setNumberFormat("0.0%");
  sheet.getRange("B20").setNumberFormat("€#,##0");
  sheet.getRange("B24,B27:B29").setNumberFormat("€#,##0");

  
  // --- SECTION 2: ROLLOUT SCHEDULE ---
  let rolloutRow = 32;
  sheet.getRange(rolloutRow, 1, 1, 62).setBackground("#1a1a1a");
  sheet.getRange(rolloutRow, 1).setValue("SECTION 2: ROLLOUT SCHEDULE").setTextStyle(headerStyle);
  
  let headers = ["Metric"];
  let yearsRow = ["Year Indicator"];
  let startDate = new Date(2026, 8, 1); // Sep 2026
  
  for (let m = 1; m <= 60; m++) {
    let d = new Date(startDate);
    d.setMonth(d.getMonth() + (m - 1));
    let monthName = d.toLocaleString('en-US', { month: 'short', year: '2-digit' });
    headers.push(monthName);
    yearsRow.push(Math.ceil(m / 12));
  }
  
  sheet.getRange(rolloutRow + 1, 1, 1, 61).setValues([yearsRow]).setFontColor("#888888");
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
    
    let newLabelled = 0;
    let newAggregated = 0;
    let newChains = 0;
    let penetration = 0;
    
    if (m === 2) { newLabelled = 1; newChains = 1; } 
    if (m === 4) { newLabelled = 1; } 
    if (m === 5) { newLabelled = 1; newChains = 1; } 
    if (m === 6) { newLabelled = 1; } 
    if (m > 6 && m % 3 === 0) newLabelled = 1; 
    if (m > 12 && m % 6 === 0) newAggregated = 1; 
    if (m > 6 && m % 4 === 0) newChains = 1; 
    
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


  // --- SECTION 3: MONTHLY P&L ---
  let plRow = rolloutRow + 11;
  sheet.getRange(plRow, 1, 1, 62).setBackground("#1a1a1a");
  sheet.getRange(plRow, 1).setValue("SECTION 3: 5-YEAR P&L").setTextStyle(headerStyle);
  sheet.getRange(plRow + 1, 1, 1, 61).setValues([headers]).setFontWeight("bold").setBackground("#f3f3f3");
  
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
  sheet.getRange(plRow + 2, 1).setFontColor("#3d6bfb"); 
  sheet.getRange(plRow + 8, 1).setFontColor("#c0504d"); 
  sheet.getRange(plRow + 16, 1).setFontColor("#A8621A"); 
  sheet.getRange(plRow + 23, 1).setFontColor("#1f6f4a"); 
  
  let ry = rolloutRow; 

  for(let c = 2; c <= 61; c++) {
    let col = colLetter(c);
    let prevCol = colLetter(c-1);
    let m = c - 1;
    
    // REVENUE
    sheet.getRange(plRow + 3, c).setFormula(`=${col}${ry + 6} * ($B$14 * ${col}${ry + 9}) * $B$15`);
    sheet.getRange(plRow + 4, c).setFormula(`=${col}${ry + 7} * ($B$19 * ${col}${ry + 9}) * $B$20`);
    sheet.getRange(plRow + 5, c).setFormula(`=(${col}${plRow + 3} + ${col}${plRow + 4}) / 12`);
    sheet.getRange(plRow + 6, c).setFormula(`=${col}${plRow + 5} * 12`);
    
    // COGS
    sheet.getRange(plRow + 9, c).setFormula(`=${col}${ry + 8} * $B$9`);
    sheet.getRange(plRow + 10, c).setFormula(`=${col}${plRow + 9} * $B$10`);
    sheet.getRange(plRow + 11, c).setFormula(`=(${col}${plRow + 3} / 12) * $B$13`);
    sheet.getRange(plRow + 12, c).setFormula(`=${col}${plRow + 10} + ${col}${plRow + 11}`);
    
    // GROSS PROFIT 
    sheet.getRange(plRow + 13, c).setFormula(`=${col}${plRow + 5} - ${col}${plRow + 12}`);
    sheet.getRange(plRow + 14, c).setFormula(`=IF(${col}${plRow + 5}>0, ${col}${plRow + 13}/${col}${plRow + 5}, 0)`);
    
    // OPEX
    let yr = Math.floor((m-1)/12);
    sheet.getRange(plRow + 17, c).setFormula(`=$B$24 * (1.05^${yr})`);
    sheet.getRange(plRow + 18, c).setFormula(`=MAX(0, FLOOR(${col}${plRow + 6}/1000000, 1) * ($B$25 + $B$26) * $B$27)`);
    sheet.getRange(plRow + 19, c).setFormula(`=$B$28 + (${col}${plRow + 6} * 0.005)`);
    sheet.getRange(plRow + 20, c).setFormula(`=$B$29 + (${col}${plRow + 6} * 0.01)`); 
    sheet.getRange(plRow + 21, c).setFormula(`=SUM(${col}${plRow + 17}:${col}${plRow + 20})`);
    
    // CASHFLOW
    sheet.getRange(plRow + 24, c).setFormula(`=${col}${plRow + 13} - ${col}${plRow + 21}`);
    
    let inflowFormula = "0";
    if (m === 1) inflowFormula = "$B$4"; 
    if (m === 15) inflowFormula = "$B$5"; 
    if (m === 36) inflowFormula = "$B$6"; 
    sheet.getRange(plRow + 25, c).setFormula(`=${inflowFormula}`);
    
    if (c === 2) {
      sheet.getRange(plRow + 26, c).setFormula(`=$B$3 + ${col}${plRow + 25} + ${col}${plRow + 24}`);
    } else {
      sheet.getRange(plRow + 26, c).setFormula(`=${prevCol}${plRow + 26} + ${col}${plRow + 25} + ${col}${plRow + 24}`);
    }
  }

  sheet.getRange(plRow + 3, 2, 4, 60).setNumberFormat("€#,##0"); 
  sheet.getRange(plRow + 9, 2, 1, 60).setNumberFormat("#,##0"); 
  sheet.getRange(plRow + 10, 2, 4, 60).setNumberFormat("€#,##0"); 
  sheet.getRange(plRow + 14, 2, 1, 60).setNumberFormat("0.0%"); 
  sheet.getRange(plRow + 17, 2, 5, 60).setNumberFormat("€#,##0"); 
  sheet.getRange(plRow + 24, 2, 3, 60).setNumberFormat("€#,##0"); 

  sheet.getRange(plRow + 6, 1, 1, 61).setFontWeight("bold"); 
  sheet.getRange(plRow + 12, 1, 1, 61).setFontWeight("bold"); 
  sheet.getRange(plRow + 13, 1, 1, 61).setFontWeight("bold"); 
  sheet.getRange(plRow + 21, 1, 1, 61).setFontWeight("bold"); 
  sheet.getRange(plRow + 24, 1, 1, 61).setFontWeight("bold"); 
  sheet.getRange(plRow + 26, 1, 1, 61).setFontWeight("bold"); 
  
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
  sheet.getRange(sumRow + 11, 1).setFontColor("#3d6bfb"); 
  
  for (let y = 1; y <= 5; y++) {
    let startCol = colLetter(1 + (y-1)*12 + 1); 
    let endCol = colLetter(1 + y*12); 
    let colIndex = y + 1; 
    
    sheet.getRange(sumRow + 2, colIndex).setFormula(`=${endCol}${plRow + 6}`);
    sheet.getRange(sumRow + 3, colIndex).setFormula(`=SUM(${startCol}${plRow + 5}:${endCol}${plRow + 5})`);
    sheet.getRange(sumRow + 4, colIndex).setFormula(`=SUM(${startCol}${plRow + 12}:${endCol}${plRow + 12})`);
    sheet.getRange(sumRow + 5, colIndex).setFormula(`=SUM(${startCol}${plRow + 13}:${endCol}${plRow + 13})`);
    sheet.getRange(sumRow + 6, colIndex).setFormula(`=IF(${colLetter(colIndex)}${sumRow + 3}>0, ${colLetter(colIndex)}${sumRow + 5}/${colLetter(colIndex)}${sumRow + 3}, 0)`);
    sheet.getRange(sumRow + 7, colIndex).setFormula(`=SUM(${startCol}${plRow + 21}:${endCol}${plRow + 21})`);
    sheet.getRange(sumRow + 8, colIndex).setFormula(`=SUM(${startCol}${plRow + 24}:${endCol}${plRow + 24})`);
    sheet.getRange(sumRow + 9, colIndex).setFormula(`=${endCol}${plRow + 26}`);
    
    sheet.getRange(sumRow + 12, colIndex).setValue(10).setBackground("#e8f0fe").setFontColor("#1155cc").setFontWeight("bold"); 
    sheet.getRange(sumRow + 13, colIndex).setFormula(`=${colLetter(colIndex)}${sumRow + 12} * ${colLetter(colIndex)}${sumRow + 2}`); 
    sheet.getRange(sumRow + 14, colIndex).setFormula(`=IF(${endCol}${plRow + 9}>0, ${colLetter(colIndex)}${sumRow + 3} / ${endCol}${plRow + 9}, 0)`);
  }
  
  sheet.getRange(sumRow + 2, 2, 4, 5).setNumberFormat("€#,##0");
  sheet.getRange(sumRow + 6, 2, 1, 5).setNumberFormat("0.0%");
  sheet.getRange(sumRow + 7, 2, 3, 5).setNumberFormat("€#,##0");
  sheet.getRange(sumRow + 12, 2, 1, 5).setNumberFormat("0.0\"x\"");
  sheet.getRange(sumRow + 13, 2, 2, 5).setNumberFormat("€#,##0");
  
  sheet.getRange(sumRow + 8, 1, 1, 6).setFontWeight("bold");
  sheet.getRange(sumRow + 9, 1, 1, 6).setFontWeight("bold");
  sheet.getRange(sumRow + 13, 1, 1, 6).setFontWeight("bold").setBackground("#d9ead3").setFontColor("#1f6f4a");
  
  // Clean up visual noise
  sheet.setFrozenColumns(1);
  sheet.hideRows(33); // Hides the 'Year Indicator' raw numeric row
}
