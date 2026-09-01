function onOpen() {
  SpreadsheetApp.getUi().createMenu('M&M Tools')
      .addItem('Fix Column Layout', 'fixColumns')
      .addToUi();
}

function fixColumns() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName("VC Financial Model");
  
  if (!sheet) return;
  
  // Clean column layout for VC Dashboard
  sheet.setColumnWidth(1, 350); // Column A - Labels
  sheet.setColumnWidth(2, 130); // Column B - Inputs
  sheet.setColumnWidth(3, 30);  // Column C - Spacer
  
  // Set all timeline columns to a uniform readable size
  for (let i = 4; i <= 65; i++) {
    sheet.setColumnWidth(i, 100); 
  }
  
  // Hide the messy year indicator row completely
  sheet.hideRows(40);
  
  // Hide empty grid lines for a cleaner look
  sheet.setHiddenGridlines(true);
  
  // Freeze panes so labels and headers stay visible when scrolling
  sheet.setFrozenColumns(1);
  sheet.setFrozenRows(41);
}
