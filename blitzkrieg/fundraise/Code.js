function onOpen() {
  SpreadsheetApp.getUi().createMenu('M&M Tools')
      .addItem('1. Format the V4 Clean Model Layout', 'formatV4Model')
      .addToUi();
}

function formatV4Model() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName("V4 Absolute Final Model");
  if (!sheet) {
    SpreadsheetApp.getUi().alert("Sheet 'V4 Absolute Final Model' not found.");
    return;
  }
  
  // Set explicit column widths to prevent squishing
  sheet.setColumnWidth(1, 350); // Column A: Labels
  sheet.setColumnWidth(2, 140); // Column B: Inputs
  sheet.setColumnWidth(3, 40);  // Column C: Spacer
  
  // Timeline columns (Months/Years)
  for (let i = 4; i <= 65; i++) {
    sheet.setColumnWidth(i, 95); 
  }
  
  // Hide gridlines and freeze columns to make it feel like software
  sheet.setHiddenGridlines(true);
  sheet.setFrozenColumns(1);
  sheet.setFrozenRows(41); // Freeze below P&L header so months stay visible
  
  // Hide the messy year indicator row completely
  sheet.hideRows(40);
  
  SpreadsheetApp.getUi().alert("Layout perfectly aligned.");
}
