// ================================================================
// GOOGLE APPS SCRIPT – dán toàn bộ code này vào Apps Script
// Sau khi thay code mới: Deploy → Manage deployments → chọn bản hiện tại → Edit → New version → Deploy
// ================================================================

var HEADERS = ["Thời gian", "Đồ uống (1-10)", "Không gian (1-10)", "Phục vụ (1-10)", "Giá cả (1-10)", "Điểm TB", "Nhận xét"];

function ensureHeaders(sheet) {
  // Luôn kiểm tra hàng 1 — nếu chưa đúng thì ghi lại
  var firstCell = sheet.getRange(1, 1).getValue();
  if (firstCell !== HEADERS[0]) {
    // Chèn 1 hàng trống lên đầu nếu đã có dữ liệu
    if (sheet.getLastRow() > 0) {
      sheet.insertRowBefore(1);
    }
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);

    // Định dạng tiêu đề
    var header = sheet.getRange(1, 1, 1, HEADERS.length);
    header.setBackground("#7c3e0a");
    header.setFontColor("#ffffff");
    header.setFontWeight("bold");
    sheet.setFrozenRows(1);

    // Điều chỉnh độ rộng cột
    sheet.setColumnWidth(1, 160); // Thời gian
    sheet.setColumnWidth(7, 280); // Nhận xét
  }
}

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    ensureHeaders(sheet);

    var data = JSON.parse(e.postData.contents);

    var drink   = Number(data.drink)   || 0;
    var space   = Number(data.space)   || 0;
    var service = Number(data.service) || 0;
    var price   = Number(data.price)   || 0;
    var avg     = ((drink + space + service + price) / 4).toFixed(1);
    var comment = data.comment || "";
    var ts      = data.timestamp || new Date().toLocaleString("vi-VN");

    sheet.appendRow([ts, drink, space, service, price, avg, comment]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "ok" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Chạy hàm này thủ công để tạo/sửa tiêu đề ngay lập tức
function setupHeaders() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  ensureHeaders(sheet);
  Logger.log("Done: headers set on sheet " + sheet.getName());
}

// Hàm test gửi 1 dòng mẫu
function testInsert() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  ensureHeaders(sheet);
  sheet.appendRow(["Test " + new Date().toLocaleString("vi-VN"), 8, 9, 7, 8, "8.0", "Đây là dòng test"]);
}
