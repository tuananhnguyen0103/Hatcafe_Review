// ================================================================
// GOOGLE APPS SCRIPT – dán toàn bộ code này vào Apps Script
// Hướng dẫn: xem file HUONG_DAN_DEPLOY.md
// ================================================================

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Tạo tiêu đề nếu sheet còn trống
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Thời gian",
        "Đồ uống (1-10)",
        "Không gian (1-10)",
        "Phục vụ (1-10)",
        "Giá cả (1-10)",
        "Điểm trung bình",
        "Nhận xét"
      ]);

      // Định dạng hàng tiêu đề
      var header = sheet.getRange(1, 1, 1, 7);
      header.setBackground("#7c3e0a");
      header.setFontColor("#ffffff");
      header.setFontWeight("bold");
      sheet.setFrozenRows(1);
    }

    // Parse dữ liệu gửi lên
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

// Hàm test – chạy thủ công để kiểm tra sheet
function testInsert() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.appendRow(["Test", 8, 9, 7, 8, 8.0, "Đây là dòng test"]);
}
