# Hatcafe_Review

Trang đánh giá trải nghiệm của khách Hạt Cafe: https://tuananhnguyen0103.github.io/Hatcafe_Review/

- Mã QR của mỗi cơ sở trỏ tới `?cs=1` hoặc `?cs=2`, trang tự hiện cơ sở.
- Khách nhập 4 số cuối của số hóa đơn, chọn đúng hóa đơn, chấm 5 mục từ 1 đến 10, để lại nhận xét và (không bắt buộc) tên, SĐT.
- Chọn hóa đơn xong, trang hiện bill tổng quan lấy từ CukCuk: giờ vào → giờ thanh toán, số phút, từng món (SL × giá), tổng tiền. Khách bấm **Ổn / Chưa ổn** cho từng món (chọn thêm lý do nếu chưa ổn). Hàng đóng gói (gói, lon, hộp, túi) chỉ hiện, không chấm. Không lấy được món thì khách tự gõ "Món đã dùng".
- Máy chủ: web app Apps Script `50_DanhGia.js` của project HatCafe_HeThong (mã nguồn ở `D:\MyFolder\Hatcafe\HatCafe_HeThong`). Máy chủ tra hóa đơn từ CukCuk, ghi phiếu vào tab `DanhGia`, món đã chấm vào tab `DanhGia_Mon` (tổng hợp theo món ở tab `TongHop_Mon`) của Google Sheet `00_DuLieu_HeThong`.
- `google-apps-script.js` và `HUONG_DAN_DEPLOY.md` là bản cũ (ghi vào sheet "Hạt cafe reviews"), không còn dùng.
