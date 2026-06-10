# 🚀 Hướng dẫn deploy Hatcafe Review – Hoàn toàn miễn phí

## Tổng quan hệ thống

```
Khách quét QR → GitHub Pages (index.html) → Google Apps Script → Google Sheets
```

---

## BƯỚC 1 – Tạo Google Sheet để nhận dữ liệu

1. Truy cập [sheets.google.com](https://sheets.google.com) → tạo sheet mới
2. Đặt tên tùy ý, ví dụ: **"Hatcafe Reviews"**
3. Để trống – script sẽ tự tạo tiêu đề khi có đánh giá đầu tiên

---

## BƯỚC 2 – Tạo Google Apps Script (backend miễn phí)

1. Trong Google Sheet vừa tạo, vào menu **Extensions → Apps Script**
2. Xóa hết code mặc định trong editor
3. Mở file `google-apps-script.js` và **copy toàn bộ nội dung**, dán vào editor
4. Nhấn **Save** (Ctrl+S)
5. Nhấn **Deploy → New deployment**
   - Type: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
6. Nhấn **Deploy** → Google yêu cầu cấp quyền → nhấn **Authorize access** → chọn tài khoản Google của bạn → nhấn **Allow**
7. Sau khi deploy xong, copy **Web app URL** (dạng `https://script.google.com/macros/s/...../exec`)

---

## BƯỚC 3 – Gắn URL vào trang web

1. Mở file `index.html` bằng Notepad hoặc VS Code
2. Tìm dòng:
   ```js
   const SCRIPT_URL = "YOUR_SCRIPT_URL";
   ```
3. Thay `YOUR_SCRIPT_URL` bằng URL vừa copy ở Bước 2, ví dụ:
   ```js
   const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxXXXXXX/exec";
   ```
4. Lưu file

---

## BƯỚC 4 – Đưa lên GitHub Pages (hosting miễn phí)

1. Tạo tài khoản tại [github.com](https://github.com) nếu chưa có (miễn phí)
2. Nhấn **New repository**
   - Tên repo: `hatcafe-review` (hoặc tùy ý)
   - Chọn **Public**
   - Nhấn **Create repository**
3. Upload file `index.html` vào repo:
   - Nhấn **Add file → Upload files**
   - Kéo thả file `index.html` vào
   - Nhấn **Commit changes**
4. Vào **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: **main**, folder: **/ (root)**
   - Nhấn **Save**
5. Sau 1–2 phút, website sẽ live tại:
   ```
   https://<tên-github-của-bạn>.github.io/hatcafe-review/
   ```

---

## BƯỚC 5 – Tạo QR Code

1. Truy cập [qr-code-generator.com](https://www.qr-code-generator.com) hoặc [qrcode-monkey.com](https://www.qrcode-monkey.com)
2. Nhập URL GitHub Pages vào ô nhập
3. Tùy chỉnh màu sắc nếu muốn (màu nâu của Hatcafe: #7c3e0a)
4. Tải QR code về → in và đặt tại quán

---

## Kiểm tra dữ liệu

- Mở Google Sheet → dữ liệu từng đánh giá sẽ hiện theo hàng
- Mỗi hàng gồm: Thời gian | Đồ uống | Không gian | Phục vụ | Giá cả | TB | Nhận xét

---

## Chi phí: **$0** 🎉

| Thành phần | Dịch vụ | Giới hạn miễn phí |
|---|---|---|
| Hosting web | GitHub Pages | Không giới hạn |
| Backend | Google Apps Script | 90 phút/ngày (= ~5,400 lượt/ngày) |
| Lưu trữ data | Google Sheets | 10 triệu ô |

---

## Cần hỗ trợ?

Liên hệ: tuananh010320@gmail.com
