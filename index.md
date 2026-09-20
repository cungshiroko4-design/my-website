# Tài Liệu Kịch Bản & Quy Chuẩn Kỹ Thuật: Safety Choices 2026

**Safety Choices** là trò chơi mô phỏng tương tác giúp người dùng học và thực hành Luật Trật tự, an toàn giao thông đường bộ với **cấu trúc 2 giai đoạn rõ ràng**.

---

## 1. Cấu Hình Cơ Bản (Game Config)

* **Điểm GPLX ban đầu:** `12/12` điểm.
* **Số lượng tình huống hành trình:** `10` câu hỏi (trích xuất ngẫu nhiên từ ngân hàng 100 câu hỏi `scenarios`).
* **Quy tắc trừ điểm:** Trừ **3 điểm** cho mỗi câu trả lời sai.
* **Điều kiện Game Over:** Điểm GPLX về **0** (xe phát nổ và bị tước GPLX).

---

## 2. Kịch Bản Chi Tiết Hai Giai Đoạn Trò Chơi (Game Phases)
### 🏆 GIAI ĐOẠN 1: Khởi Động & Chuẩn Bị Xuất Phát
* **Trạng thái đồ họa:** 
  * Đường đứng yên, xe không rung xóc.
  * Kích hoạt hiệu ứng camera **Zoom in 1.8x** (`.zoom-in-car`) tập trung trực tiếp vào chiếc xe ô tô đang đỗ.
* **Câu hỏi khởi động:**
  > **GIAI ĐOẠN 1 - CHUẨN BỊ XUẤT PHÁT:** Để đảm bảo an toàn khi tham gia giao thông bằng xe ô tô, quy định bắt buộc đầu tiên bạn phải thực hiện trước khi khởi động xe là gì?

* **Danh sách lựa chọn:**
  * [ ] **A.** Khởi động xe và đạp ga hết số!!! *(Sai)*
  * [ ] **B.** Cài dây an toàn cho ghế phụ và đạp ga *(Sai)*
  * [x] **C.** Cài dây an toàn trước khi khởi động xe. *(Đúng)*

* **Phản hồi hệ thống (Feedback):**
  * **Chọn Đúng (C):** Hiển thị phản hồi thành công ➔ Nút bấm `[ Khởi động xe & Lăn bánh! ➔ ]`.
  * **Chuyển tiếp sang Giai đoạn 2:** Kích hoạt hiệu ứng **Zoom out** khung cảnh trở lại bình thường, sau đó cho xe lăn bánh.

---

### 🚦 GIAI ĐOẠN 2: Hành Trình Lái Xe & 10 Tình Huống Trắc Nghiệm
* **Trạng thái đồ họa:** Xe bắt đầu nhún rung (`.drive`), vạch đường và cây cối di chuyển sang trái (`.animate-road`).
* **Vòng lặp 10 câu hỏi (`runScenario` ➔ `stopAndShowQuestion`):**
  1. Biển báo di chuyển từ lề đường bên phải vào trung tâm.
  2. Xe dừng lại, hiển thị câu hỏi trắc nghiệm từ mảng ngẫu nhiên `activeQuestions[currentIdx]`.
  3. Người chơi chọn đáp án:
     * **Đúng:** Giữ nguyên điểm, hiển thị căn cứ pháp lý.
     * **Sai:** Trừ 3 điểm GPLX, hiển thị căn cứ pháp lý.
  4. Nhấn `[ Tiếp tục hành trình ➔ ]` để chuyển sang câu tiếp theo.

---

## 3. Quy Chuẩn Responsive Trên Điện Thoại (Mobile Spec)

* **Camera Zoom Target:** Điểm lấy nét camera (`transform-origin: 20% 75%`) trùng khớp với vị trí đỗ xe trên cả Desktop và Mobile.
* **Viewport Dynamic:** Sử dụng `100dvh` tối ưu trên trình duyệt Chrome/Safari mobile.
* **Touch Target Standard:**
  * Kích thước khu vực bấm của các nút lựa chọn (`.btn-option`) rộng rãi, dễ thao tác bằng ngón tay.
  * Nút chuyển giai đoạn/câu hỏi (`.btn-next`) tự động mở rộng `width: 100%` ở đáy màn hình điện thoại.
* **Tối ưu hiển thị bảng câu hỏi:** Chiều cao tối đa `max-height: 55dvh` đi kèm `overflow-y: auto` giúp bảng câu hỏi không đè mất hình ảnh xe trên màn hình nhỏ.