function onOpen() {
  SpreadsheetApp.getUi().createMenu('M&M Tools')
      .addItem('Build Financial Model', 'buildFinancialModel')
      .addToUi();
}

function buildFinancialModel() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName("Financial Model");
  if (!sheet) {
    sheet = ss.insertSheet("Financial Model");
  }
  sheet.clear();
  
  // Format column A
  sheet.setColumnWidth(1, 300);
  
  const headerStyle = SpreadsheetApp.newTextStyle().setBold(true).build();
  sheet.getRange("A1").setValue("SECTION 1: ASSUMPTIONS (The Engine)").setTextStyle(headerStyle);
  
  const assumptions = [
    ["1. Capital", ""],
    ["Starting Cash", 50000],
    ["Fundraise Amount", 500000],
    ["", ""],
    ["2. Unit Economics (Revenue)", ""],
    ["Seat Depth (Max Brands)", 6],
    ["Avg Active Brands Y1", 2],
    ["Avg Active Brands Y2", 3],
    ["Avg Active Brands Y3", 4],
    ["Avg Active Brands Y4", 5],
    ["Avg Active Brands Y5", 6],
    ["Avg Price per Brand Seat (€/yr)", 30000],
    ["Avg Price per Brand Seat (€/mo)", "=B12/12"],
    ["", ""],
    ["3. Rollout (New Categories Added)", ""],
    ["New Categories Y1", 2],
    ["New Categories Y2", 4],
    ["New Categories Y3", 8],
    ["New Categories Y4", 12],
    ["New Categories Y5", 20],
    ["", ""],
    ["4. Unit Economics (COGS)", ""],
    ["Avg Stores per Category", 150],
    ["Store Ops Cost (€/store/mo)", 40.80],
    ["Rev Share Y1", 0.00],
    ["Rev Share Y2", 0.00],
    ["Rev Share Y3", 0.10],
    ["Rev Share Y4", 0.15],
    ["Rev Share Y5", 0.20],
    ["", ""],
    ["5. OPEX", ""],
    ["Payroll Y1 (€/mo)", 15000],
    ["Payroll Y5 (€/mo)", 80000],
    ["Professional Fees (€/mo)", 3000],
    ["Marketing & T&E (€/mo)", 2000]
  ];
  
  sheet.getRange(2, 1, assumptions.length, 2).setValues(assumptions);
  sheet.getRange("A2:A36").setFontWeight("bold");
  
  // Number formatting
  sheet.getRange("B3:B4").setNumberFormat("€#,##0");
  sheet.getRange("B12:B13").setNumberFormat("€#,##0");
  sheet.getRange("B24").setNumberFormat("€#,##0.00");
  sheet.getRange("B25:B29").setNumberFormat("0%");
  sheet.getRange("B32:B35").setNumberFormat("€#,##0");

  // --- SECTION 2: P&L ---
  let startRow = 38;
  sheet.getRange(startRow, 1).setValue("SECTION 2: 5-YEAR P&L").setTextStyle(headerStyle);
  
  let headers = ["Metric"];
  let yearsRow = ["Year Indicator"];
  for (let m = 1; m <= 60; m++) {
    headers.push("M" + m);
    yearsRow.push(Math.ceil(m / 12)); // Year 1, 2, 3...
  }
  
  sheet.getRange(startRow + 1, 1, 1, 61).setValues([yearsRow]).setFontColor("#aaaaaa");
  sheet.getRange(startRow + 2, 1, 1, 61).setValues([headers]).setFontWeight("bold").setBackground("#f3f3f3");
  
  const metricNames = [
    "New Categories in Month",
    "Total Live Categories",
    "Active Brands per Category",
    "Total Active Subscriptions",
    "REVENUE (€)",
    "",
    "Cumulative Stores Instrumented",
    "COGS 1: Store Ops (€)",
    "COGS 2: Rev Share (€)",
    "TOTAL COGS (€)",
    "GROSS PROFIT (€)",
    "GROSS MARGIN %",
    "",
    "Payroll (€)",
    "Professional Fees (€)",
    "Marketing & T&E (€)",
    "TOTAL OPEX (€)",
    "",
    "EBITDA / Net Cashflow (€)",
    "CASH BALANCE (€)"
  ];
  
  let metricCol = [];
  for(let i=0; i<metricNames.length; i++) {
    metricCol.push([metricNames[i]]);
  }
  sheet.getRange(startRow + 3, 1, metricNames.length, 1).setValues(metricCol).setFontWeight("bold");

  const colLetter = (colIndex) => {
    let temp, letter = '';
    while (colIndex > 0) {
      temp = (colIndex - 1) % 26;
      letter = String.fromCharCode(temp + 65) + letter;
      colIndex = Math.floor((colIndex - temp - 1) / 26);
    }
    return letter;
  };

  let r_y = startRow + 1; // row 39: year indicator
  for(let c = 2; c <= 61; c++) { // cols B to BI
    let col = colLetter(c);
    let prevCol = colLetter(c-1);
    
    // New Categories (Divide year total by 12)
    sheet.getRange(startRow + 3, c).setFormula(`=CHOOSE(${col}$${r_y}, $B$16, $B$17, $B$18, $B$19, $B$20)/12`);
    
    // Total Live Categories
    if (c === 2) {
      sheet.getRange(startRow + 4, c).setFormula(`=${col}${startRow + 3}`);
    } else {
      sheet.getRange(startRow + 4, c).setFormula(`=${prevCol}${startRow + 4} + ${col}${startRow + 3}`);
    }
    
    // Active Brands per Category
    sheet.getRange(startRow + 5, c).setFormula(`=CHOOSE(${col}$${r_y}, $B$7, $B$8, $B$9, $B$10, $B$11)`);
    
    // Total Active Subscriptions
    sheet.getRange(startRow + 6, c).setFormula(`=${col}${startRow + 4} * ${col}${startRow + 5}`);
    
    // REVENUE
    sheet.getRange(startRow + 7, c).setFormula(`=${col}${startRow + 6} * $B$13`);
    
    // Cumulative Stores
    sheet.getRange(startRow + 9, c).setFormula(`=${col}${startRow + 4} * $B$23`);
    
    // COGS 1: Store Ops
    sheet.getRange(startRow + 10, c).setFormula(`=${col}${startRow + 9} * $B$24`);
    
    // COGS 2: Rev Share
    sheet.getRange(startRow + 11, c).setFormula(`=${col}${startRow + 7} * CHOOSE(${col}$${r_y}, $B$25, $B$26, $B$27, $B$28, $B$29)`);
    
    // TOTAL COGS
    sheet.getRange(startRow + 12, c).setFormula(`=${col}${startRow + 10} + ${col}${startRow + 11}`);
    
    // GROSS PROFIT
    sheet.getRange(startRow + 13, c).setFormula(`=${col}${startRow + 7} - ${col}${startRow + 12}`);
    
    // GROSS MARGIN %
    sheet.getRange(startRow + 14, c).setFormula(`=IF(${col}${startRow + 7}>0, ${col}${startRow + 13} / ${col}${startRow + 7}, 0)`);
    
    // Payroll (Linear scale from Y1 to Y5)
    let m = c - 1;
    sheet.getRange(startRow + 16, c).setFormula(`=$B$32 + (${m}-1)*(($B$33-$B$32)/59)`);
    
    // Prof Fees
    sheet.getRange(startRow + 17, c).setFormula(`=$B$34`);
    
    // Marketing
    sheet.getRange(startRow + 18, c).setFormula(`=$B$35`);
    
    // TOTAL OPEX
    sheet.getRange(startRow + 19, c).setFormula(`=SUM(${col}${startRow + 16}:${col}${startRow + 18})`);
    
    // EBITDA
    sheet.getRange(startRow + 21, c).setFormula(`=${col}${startRow + 13} - ${col}${startRow + 19}`);
    
    // CASH BALANCE
    if (c === 2) {
      sheet.getRange(startRow + 22, c).setFormula(`=$B$2 + $B$3 + ${col}${startRow + 21}`);
    } else {
      sheet.getRange(startRow + 22, c).setFormula(`=${prevCol}${startRow + 22} + ${col}${startRow + 21}`);
    }
  }
  
  // Formatting the P&L numbers
  let plRange = sheet.getRange(startRow + 3, 2, 20, 60);
  plRange.setNumberFormat("#,##0");
  
  sheet.getRange(startRow + 7, 2, 1, 60).setNumberFormat("€#,##0"); // Rev
  sheet.getRange(startRow + 10, 2, 4, 60).setNumberFormat("€#,##0"); // COGS & GP
  sheet.getRange(startRow + 16, 2, 4, 60).setNumberFormat("€#,##0"); // OPEX
  sheet.getRange(startRow + 21, 2, 2, 60).setNumberFormat("€#,##0"); // EBITDA & CASH
  sheet.getRange(startRow + 14, 2, 1, 60).setNumberFormat("0%"); // Margin %
  
  // --- SECTION 3: EXIT & VC METRICS ---
  let exitRow = startRow + 25;
  sheet.getRange(exitRow, 1).setValue("SECTION 3: EXIT & VC METRICS (Year 5 End)").setTextStyle(headerStyle);
  
  const exitData = [
    ["Total ARR at Year 5 End (€)", "=BI" + (startRow + 7) + " * 12"],
    ["Target Exit Multiple", 10],
    ["Projected Exit Valuation (€)", "=B" + (exitRow + 1) + " * B" + (exitRow + 2)],
    ["Total Stores at Year 5 End", "=BI" + (startRow + 9)],
    ["Yield per Store (€)", "=B" + (exitRow + 1) + " / B" + (exitRow + 4)]
  ];
  
  sheet.getRange(exitRow + 1, 1, exitData.length, 2).setValues(exitData);
  sheet.getRange(exitRow + 1, 1, 5, 1).setFontWeight("bold");
  
  sheet.getRange(exitRow + 1, 2).setNumberFormat("€#,##0");
  sheet.getRange(exitRow + 2, 2).setNumberFormat("0.0\"x\"");
  sheet.getRange(exitRow + 3, 2).setNumberFormat("€#,##0").setFontWeight("bold");
  sheet.getRange(exitRow + 4, 2).setNumberFormat("#,##0");
  sheet.getRange(exitRow + 5, 2).setNumberFormat("€#,##0");
  
  // Freeze first column and rows
  sheet.setFrozenColumns(1);
  sheet.setFrozenRows(startRow + 2);
}
