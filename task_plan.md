# Task Plan: Phần mềm quản lý công việc đội công tác
## Goal
1 file index.html + Firebase (Auth + Firestore), 10 người: 1 đội trưởng, 2 đội phó, 7 cán bộ.
## Phases
### Phase 1: Chốt yêu cầu
**Status:** complete
### Phase 2: Thiết kế dữ liệu, phân quyền
**Status:** complete
### Phase 3: Viết index.html bản đầu
**Status:** complete
### Phase 4: Firebase + đưa lên GitHub Pages
**Status:** complete
### Phase 5: Giao diện người dùng 3 tab (Chính, Thống kê, Cài đặt) phong cách xanh lục công nghệ
**Status:** in_progress
### Phase 5b: Form nhập việc dễ hơn: lịch, giọng nói, ảnh công văn nhiều trang -> Gemini, thẻ việc tách rõ trường
**Status:** in_progress
### Phase 5c: Menu đăng xuất ở tên tài khoản; ô Kết quả khi hoàn thành (nhập tay / đúng quy định / ảnh -> AI); báo cáo tuần Excel theo mẫu Đội
**Status:** in_progress
### Phase 5d: Bỏ xuất báo cáo công việc ở tab 3; báo cáo tuần chọn sẵn tuần (thứ Năm→thứ Tư); tab Thống kê: xuất Excel/Word + phân trang
**Status:** complete (chờ người dùng chạy thử)
### Phase 5f: Cài app lên màn hình điện thoại (tab Cài đặt); làm lại màn hình đăng nhập
**Status:** complete (chờ người dùng chạy thử)
### Phase 6: Vá lỗ hổng vai trò trong rules, giao diện admin
**Status:** pending
## Decisions Made
- Mọi thành viên tạo việc (giao cho bất kỳ ai, mặc định chính mình); người tạo hoặc người được giao đổi trạng thái; người tạo hoặc lãnh đạo xóa. Tạo tài khoản: chỉ đội trưởng/đội phó.
- Tên đăng nhập -> email giả tendangnhap@doi.local
## Next Step
Người dùng cập nhật rules mới, chép index.html lên GitHub, chạy thử 3 tab, phản hồi. Sau đó vá lỗ hổng vai trò và làm giao diện admin.
#Người dùng dán firebaseConfig, bật Auth + Firestore, chạy thử.
