# Bộ 400 câu hỏi trắc nghiệm ôn thi Nguyên lý Hệ điều hành

Tài liệu này được biên soạn để ôn thi môn OS/Nguyên lý Hệ điều hành, bám theo bộ slide Chương 1–6 và các dạng câu hỏi xuất hiện nhiều trong đề/ôn tập: khái niệm hệ điều hành, tiến trình, điều phối CPU, đồng bộ, bế tắc, quản lý bộ nhớ, hệ thống file, FAT, vào/ra và điều phối đĩa.

Mỗi câu có 4 lựa chọn A–D, một đáp án đúng và phần giải thích ngay dưới câu hỏi. Các câu tính toán đã ghi rõ cách tính hoặc ý chính cần kiểm tra.

## Phân bố câu hỏi

- **Chương 1 - Tổng quan hệ điều hành:** 50 câu
- **Chương 2 - Tiến trình, luồng, điều phối CPU và IPC:** 75 câu
- **Chương 3 - Tài nguyên găng, đồng bộ tiến trình và bế tắc:** 75 câu
- **Chương 4 - Quản lý bộ nhớ:** 80 câu
- **Chương 5 - Quản lý hệ thống file và FAT:** 75 câu
- **Chương 6 - Quản lý vào ra và điều phối đĩa:** 45 câu

## Cách sử dụng nhanh

Nên làm theo từng chương trước, sau đó dùng phần **Bảng đáp án nhanh** ở cuối file để tự chấm. Với các câu tính toán điều phối CPU, phân trang, thay trang, Banker, FAT và điều phối đĩa, cần tự lập bảng phụ để tránh nhầm bước trung gian.


---

## Chương 1 - Tổng quan hệ điều hành

### Câu 001. Trong môn Nguyên lý HĐH, Hệ điều hành được hiểu đúng nhất là gì?

A. Môi trường mô phỏng phần cứng/hệ thống cho phép chạy HĐH hoặc ứng dụng trong không gian cô lập.
B. Lớp phần mềm nằm giữa phần cứng và chương trình ứng dụng, điều khiển việc dùng phần cứng và cung cấp môi trường thực hiện chương trình.
C. Cấu trúc trong đó nhiều dịch vụ hệ thống cùng chạy trong không gian nhân.
D. Phần cứng, hệ điều hành, chương trình ứng dụng và người dùng.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Lớp phần mềm nằm giữa phần cứng và chương trình ứng dụng, điều khiển việc dùng phần cứng và cung cấp môi trường thực hiện chương trình.

**Giải thích:** Hệ điều hành: Lớp phần mềm nằm giữa phần cứng và chương trình ứng dụng, điều khiển việc dùng phần cứng và cung cấp môi trường thực hiện chương trình. Slide Chương 1 đặt HĐH giữa hardware và application programs.

</details>

### Câu 002. Trong môn Nguyên lý HĐH, Các thành phần hệ thống tính toán được hiểu đúng nhất là gì?

A. Phần cứng, hệ điều hành, chương trình ứng dụng và người dùng.
B. Lớp phần mềm nằm giữa phần cứng và chương trình ứng dụng, điều khiển việc dùng phần cứng và cung cấp môi trường thực hiện chương trình.
C. Tính chất yêu cầu hệ thống kiểm tra, phát hiện và xử lý lỗi để kết quả vận hành đáng tin.
D. Kỹ thuật chia CPU thành các lát thời gian nhỏ cho nhiều người dùng/tiến trình tương tác.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Phần cứng, hệ điều hành, chương trình ứng dụng và người dùng.

**Giải thích:** Các thành phần hệ thống tính toán: Phần cứng, hệ điều hành, chương trình ứng dụng và người dùng. Đây là mô hình phân lớp cơ bản trong slide.

</details>

### Câu 003. Trong môn Nguyên lý HĐH, Máy tính ảo được hiểu đúng nhất là gì?

A. Mã phần mềm cho phép HĐH giao tiếp với phần cứng thiết bị cụ thể thông qua giao diện chuẩn.
B. Cách thiết kế HĐH thành các lớp, lớp trên dùng dịch vụ lớp dưới.
C. Sự trừu tượng do HĐH cung cấp để che giấu chi tiết phần cứng và làm hệ thống dễ dùng hơn.
D. Ngắt do phần mềm hoặc hoạt động của chính tiến trình gây ra, thường dùng cho system call hoặc ngoại lệ.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Sự trừu tượng do HĐH cung cấp để che giấu chi tiết phần cứng và làm hệ thống dễ dùng hơn.

**Giải thích:** Máy tính ảo: Sự trừu tượng do HĐH cung cấp để che giấu chi tiết phần cứng và làm hệ thống dễ dùng hơn. Ví dụ: bộ nhớ ảo, máy in ảo, giao diện thiết bị thống nhất.

</details>

### Câu 004. Trong môn Nguyên lý HĐH, Quản lý tài nguyên được hiểu đúng nhất là gì?

A. Môi trường mô phỏng phần cứng/hệ thống cho phép chạy HĐH hoặc ứng dụng trong không gian cô lập.
B. Cấu trúc trong đó nhiều dịch vụ hệ thống cùng chạy trong không gian nhân.
C. Vai trò phân phối, thu hồi, bảo vệ và giải quyết tranh chấp các tài nguyên như CPU, bộ nhớ, file và thiết bị vào ra.
D. Môi trường giao tiếp giữa người dùng và hệ điều hành, nhận lệnh và yêu cầu HĐH thực hiện.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Vai trò phân phối, thu hồi, bảo vệ và giải quyết tranh chấp các tài nguyên như CPU, bộ nhớ, file và thiết bị vào ra.

**Giải thích:** Quản lý tài nguyên: Vai trò phân phối, thu hồi, bảo vệ và giải quyết tranh chấp các tài nguyên như CPU, bộ nhớ, file và thiết bị vào ra. Đây là chức năng trung tâm thứ hai của HĐH.

</details>

### Câu 005. Trong môn Nguyên lý HĐH, Tính thuận tiện được hiểu đúng nhất là gì?

A. Vai trò phân phối, thu hồi, bảo vệ và giải quyết tranh chấp các tài nguyên như CPU, bộ nhớ, file và thiết bị vào ra.
B. Tính chất làm cho người dùng và lập trình viên khai thác máy tính dễ dàng hơn thông qua giao diện chuẩn.
C. Sự trừu tượng do HĐH cung cấp để che giấu chi tiết phần cứng và làm hệ thống dễ dùng hơn.
D. Thành phần có thể nạp/tháo để mở rộng chức năng kernel như driver mà không thay toàn bộ nhân.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Tính chất làm cho người dùng và lập trình viên khai thác máy tính dễ dàng hơn thông qua giao diện chuẩn.

**Giải thích:** Tính thuận tiện: Tính chất làm cho người dùng và lập trình viên khai thác máy tính dễ dàng hơn thông qua giao diện chuẩn. Nó liên quan trực tiếp đến mục tiêu 'dễ sử dụng'.

</details>

### Câu 006. Trong môn Nguyên lý HĐH, Tính hiệu quả được hiểu đúng nhất là gì?

A. Phần lõi của HĐH chạy với quyền đặc biệt để quản lý tiến trình, bộ nhớ, file, thiết bị và bảo vệ.
B. Cách tổ chức gom nhiều công việc thành một lô để máy thực hiện lần lượt, giảm thời gian chuyển việc thủ công.
C. Phần cứng, hệ điều hành, chương trình ứng dụng và người dùng.
D. Tính chất yêu cầu HĐH sử dụng tài nguyên phần cứng với hiệu suất cao và giảm lãng phí.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Tính chất yêu cầu HĐH sử dụng tài nguyên phần cứng với hiệu suất cao và giảm lãng phí.

**Giải thích:** Tính hiệu quả: Tính chất yêu cầu HĐH sử dụng tài nguyên phần cứng với hiệu suất cao và giảm lãng phí. Ví dụ: chồng lấp CPU với I/O, giảm thời gian rỗi.

</details>

### Câu 007. Trong môn Nguyên lý HĐH, Tính tin cậy và chuẩn xác được hiểu đúng nhất là gì?

A. Kỹ thuật đặt nhiều chương trình trong bộ nhớ để khi một chương trình đợi I/O, CPU có thể chạy chương trình khác.
B. Phần cứng, hệ điều hành, chương trình ứng dụng và người dùng.
C. Tính chất yêu cầu hệ thống kiểm tra, phát hiện và xử lý lỗi để kết quả vận hành đáng tin.
D. Tính chất yêu cầu HĐH sử dụng tài nguyên phần cứng với hiệu suất cao và giảm lãng phí.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Tính chất yêu cầu hệ thống kiểm tra, phát hiện và xử lý lỗi để kết quả vận hành đáng tin.

**Giải thích:** Tính tin cậy và chuẩn xác: Tính chất yêu cầu hệ thống kiểm tra, phát hiện và xử lý lỗi để kết quả vận hành đáng tin. Các thao tác quan trọng cần kiểm soát lỗi.

</details>

### Câu 008. Trong môn Nguyên lý HĐH, Tính an toàn/bảo vệ được hiểu đúng nhất là gì?

A. Tính chất hạn chế truy nhập bất hợp lệ và giảm ảnh hưởng của lỗi vô tình hoặc cố ý.
B. Cấu trúc giữ trong kernel các cơ chế tối thiểu và đưa nhiều dịch vụ ra không gian người dùng.
C. Kỹ thuật chia CPU thành các lát thời gian nhỏ cho nhiều người dùng/tiến trình tương tác.
D. Phần cứng, hệ điều hành, chương trình ứng dụng và người dùng.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Tính chất hạn chế truy nhập bất hợp lệ và giảm ảnh hưởng của lỗi vô tình hoặc cố ý.

**Giải thích:** Tính an toàn/bảo vệ: Tính chất hạn chế truy nhập bất hợp lệ và giảm ảnh hưởng của lỗi vô tình hoặc cố ý. Cơ chế bảo vệ bộ nhớ, file và chế độ nhân/người dùng phục vụ mục tiêu này.

</details>

### Câu 009. Trong môn Nguyên lý HĐH, Tính tổng quát theo thời gian được hiểu đúng nhất là gì?

A. Giao diện để chương trình người dùng yêu cầu dịch vụ của hệ điều hành.
B. Vai trò phân phối, thu hồi, bảo vệ và giải quyết tranh chấp các tài nguyên như CPU, bộ nhớ, file và thiết bị vào ra.
C. Kỹ thuật đặt nhiều chương trình trong bộ nhớ để khi một chương trình đợi I/O, CPU có thể chạy chương trình khác.
D. Khả năng thích nghi với thiết bị và yêu cầu mới mà không cần xây dựng lại toàn bộ hệ điều hành.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Khả năng thích nghi với thiết bị và yêu cầu mới mà không cần xây dựng lại toàn bộ hệ điều hành.

**Giải thích:** Tính tổng quát theo thời gian: Khả năng thích nghi với thiết bị và yêu cầu mới mà không cần xây dựng lại toàn bộ hệ điều hành. Trình điều khiển thiết bị và cấu trúc mô-đun hỗ trợ tính này.

</details>

### Câu 010. Trong môn Nguyên lý HĐH, Xử lý theo lô được hiểu đúng nhất là gì?

A. Cách tổ chức gom nhiều công việc thành một lô để máy thực hiện lần lượt, giảm thời gian chuyển việc thủ công.
B. Tính chất yêu cầu hệ thống kiểm tra, phát hiện và xử lý lỗi để kết quả vận hành đáng tin.
C. Sự trừu tượng do HĐH cung cấp để che giấu chi tiết phần cứng và làm hệ thống dễ dùng hơn.
D. Kỹ thuật chia CPU thành các lát thời gian nhỏ cho nhiều người dùng/tiến trình tương tác.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Cách tổ chức gom nhiều công việc thành một lô để máy thực hiện lần lượt, giảm thời gian chuyển việc thủ công.

**Giải thích:** Xử lý theo lô: Cách tổ chức gom nhiều công việc thành một lô để máy thực hiện lần lượt, giảm thời gian chuyển việc thủ công. Đặc trưng giai đoạn phần cứng đắt.

</details>

### Câu 011. Trong môn Nguyên lý HĐH, Đa chương trình được hiểu đúng nhất là gì?

A. Kỹ thuật đặt nhiều chương trình trong bộ nhớ để khi một chương trình đợi I/O, CPU có thể chạy chương trình khác.
B. Hệ điều hành phải đáp ứng ràng buộc thời gian xác định, trong đó trễ hạn có thể là lỗi.
C. Cơ chế dừng luồng thực thi hiện tại để CPU chuyển sang xử lý một sự kiện.
D. Cấu trúc giữ trong kernel các cơ chế tối thiểu và đưa nhiều dịch vụ ra không gian người dùng.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Kỹ thuật đặt nhiều chương trình trong bộ nhớ để khi một chương trình đợi I/O, CPU có thể chạy chương trình khác.

**Giải thích:** Đa chương trình: Kỹ thuật đặt nhiều chương trình trong bộ nhớ để khi một chương trình đợi I/O, CPU có thể chạy chương trình khác. Mục tiêu là tăng hiệu suất CPU.

</details>

### Câu 012. Trong môn Nguyên lý HĐH, Chia sẻ thời gian được hiểu đúng nhất là gì?

A. Thiết bị/cơ chế tạo ngắt định kỳ để HĐH thu hồi CPU và điều phối.
B. Sự trừu tượng do HĐH cung cấp để che giấu chi tiết phần cứng và làm hệ thống dễ dùng hơn.
C. Kỹ thuật chia CPU thành các lát thời gian nhỏ cho nhiều người dùng/tiến trình tương tác.
D. Môi trường mô phỏng phần cứng/hệ thống cho phép chạy HĐH hoặc ứng dụng trong không gian cô lập.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Kỹ thuật chia CPU thành các lát thời gian nhỏ cho nhiều người dùng/tiến trình tương tác.

**Giải thích:** Chia sẻ thời gian: Kỹ thuật chia CPU thành các lát thời gian nhỏ cho nhiều người dùng/tiến trình tương tác. Nó cải thiện thời gian đáp ứng.

</details>

### Câu 013. Trong môn Nguyên lý HĐH, Lời gọi hệ thống được hiểu đúng nhất là gì?

A. Thành phần có thể nạp/tháo để mở rộng chức năng kernel như driver mà không thay toàn bộ nhân.
B. Hệ điều hành phải đáp ứng ràng buộc thời gian xác định, trong đó trễ hạn có thể là lỗi.
C. Giao diện để chương trình người dùng yêu cầu dịch vụ của hệ điều hành.
D. Phần cứng, hệ điều hành, chương trình ứng dụng và người dùng.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Giao diện để chương trình người dùng yêu cầu dịch vụ của hệ điều hành.

**Giải thích:** Lời gọi hệ thống: Giao diện để chương trình người dùng yêu cầu dịch vụ của hệ điều hành. System call là cửa vào có kiểm soát vào kernel.

</details>

### Câu 014. Trong môn Nguyên lý HĐH, Shell được hiểu đúng nhất là gì?

A. Ngắt do phần mềm hoặc hoạt động của chính tiến trình gây ra, thường dùng cho system call hoặc ngoại lệ.
B. Tính chất yêu cầu HĐH sử dụng tài nguyên phần cứng với hiệu suất cao và giảm lãng phí.
C. Hệ điều hành phải đáp ứng ràng buộc thời gian xác định, trong đó trễ hạn có thể là lỗi.
D. Môi trường giao tiếp giữa người dùng và hệ điều hành, nhận lệnh và yêu cầu HĐH thực hiện.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Môi trường giao tiếp giữa người dùng và hệ điều hành, nhận lệnh và yêu cầu HĐH thực hiện.

**Giải thích:** Shell: Môi trường giao tiếp giữa người dùng và hệ điều hành, nhận lệnh và yêu cầu HĐH thực hiện. Shell không phải kernel.

</details>

### Câu 015. Trong môn Nguyên lý HĐH, Kernel được hiểu đúng nhất là gì?

A. Giao diện để chương trình người dùng yêu cầu dịch vụ của hệ điều hành.
B. Phần lõi của HĐH chạy với quyền đặc biệt để quản lý tiến trình, bộ nhớ, file, thiết bị và bảo vệ.
C. Cơ chế dừng luồng thực thi hiện tại để CPU chuyển sang xử lý một sự kiện.
D. Cách tổ chức gom nhiều công việc thành một lô để máy thực hiện lần lượt, giảm thời gian chuyển việc thủ công.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Phần lõi của HĐH chạy với quyền đặc biệt để quản lý tiến trình, bộ nhớ, file, thiết bị và bảo vệ.

**Giải thích:** Kernel: Phần lõi của HĐH chạy với quyền đặc biệt để quản lý tiến trình, bộ nhớ, file, thiết bị và bảo vệ. Kernel xử lý system call và ngắt.

</details>

### Câu 016. Trong môn Nguyên lý HĐH, Chế độ người dùng và chế độ nhân được hiểu đúng nhất là gì?

A. Cơ chế phân quyền thực thi nhằm ngăn chương trình người dùng chạy trực tiếp lệnh đặc quyền.
B. Mã phần mềm cho phép HĐH giao tiếp với phần cứng thiết bị cụ thể thông qua giao diện chuẩn.
C. Cấu trúc giữ trong kernel các cơ chế tối thiểu và đưa nhiều dịch vụ ra không gian người dùng.
D. Khả năng thích nghi với thiết bị và yêu cầu mới mà không cần xây dựng lại toàn bộ hệ điều hành.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Cơ chế phân quyền thực thi nhằm ngăn chương trình người dùng chạy trực tiếp lệnh đặc quyền.

**Giải thích:** Chế độ người dùng và chế độ nhân: Cơ chế phân quyền thực thi nhằm ngăn chương trình người dùng chạy trực tiếp lệnh đặc quyền. Dual-mode hỗ trợ bảo vệ hệ thống.

</details>

### Câu 017. Trong môn Nguyên lý HĐH, Ngắt được hiểu đúng nhất là gì?

A. Khả năng thích nghi với thiết bị và yêu cầu mới mà không cần xây dựng lại toàn bộ hệ điều hành.
B. Tính chất làm cho người dùng và lập trình viên khai thác máy tính dễ dàng hơn thông qua giao diện chuẩn.
C. Cơ chế dừng luồng thực thi hiện tại để CPU chuyển sang xử lý một sự kiện.
D. Mã phần mềm cho phép HĐH giao tiếp với phần cứng thiết bị cụ thể thông qua giao diện chuẩn.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Cơ chế dừng luồng thực thi hiện tại để CPU chuyển sang xử lý một sự kiện.

**Giải thích:** Ngắt: Cơ chế dừng luồng thực thi hiện tại để CPU chuyển sang xử lý một sự kiện. Ngắt giúp HĐH phản ứng với thiết bị, lỗi hoặc system call.

</details>

### Câu 018. Trong môn Nguyên lý HĐH, Trap/ngắt mềm được hiểu đúng nhất là gì?

A. Ngắt do phần mềm hoặc hoạt động của chính tiến trình gây ra, thường dùng cho system call hoặc ngoại lệ.
B. Cách thiết kế HĐH thành các lớp, lớp trên dùng dịch vụ lớp dưới.
C. Cơ chế dừng luồng thực thi hiện tại để CPU chuyển sang xử lý một sự kiện.
D. Khả năng thích nghi với thiết bị và yêu cầu mới mà không cần xây dựng lại toàn bộ hệ điều hành.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Ngắt do phần mềm hoặc hoạt động của chính tiến trình gây ra, thường dùng cho system call hoặc ngoại lệ.

**Giải thích:** Trap/ngắt mềm: Ngắt do phần mềm hoặc hoạt động của chính tiến trình gây ra, thường dùng cho system call hoặc ngoại lệ. Khác với ngắt phần cứng từ thiết bị.

</details>

### Câu 019. Trong môn Nguyên lý HĐH, DMA được hiểu đúng nhất là gì?

A. Cơ chế cho phép thiết bị truyền dữ liệu trực tiếp với bộ nhớ, giảm việc CPU phải sao chép từng byte.
B. Tính chất yêu cầu HĐH sử dụng tài nguyên phần cứng với hiệu suất cao và giảm lãng phí.
C. Tính chất hạn chế truy nhập bất hợp lệ và giảm ảnh hưởng của lỗi vô tình hoặc cố ý.
D. Những đối tượng như CPU, bộ nhớ, thiết bị vào ra, bộ nhớ ngoài và file được chương trình dùng để thực hiện công việc.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Cơ chế cho phép thiết bị truyền dữ liệu trực tiếp với bộ nhớ, giảm việc CPU phải sao chép từng byte.

**Giải thích:** DMA: Cơ chế cho phép thiết bị truyền dữ liệu trực tiếp với bộ nhớ, giảm việc CPU phải sao chép từng byte. DMA giúp chồng lấp tính toán và vào ra.

</details>

### Câu 020. Trong môn Nguyên lý HĐH, HĐH mạng được hiểu đúng nhất là gì?

A. Giao diện để chương trình người dùng yêu cầu dịch vụ của hệ điều hành.
B. Tính chất yêu cầu HĐH sử dụng tài nguyên phần cứng với hiệu suất cao và giảm lãng phí.
C. Hệ điều hành hỗ trợ chia sẻ tài nguyên và truyền thông qua mạng giữa các máy.
D. Tính chất làm cho người dùng và lập trình viên khai thác máy tính dễ dàng hơn thông qua giao diện chuẩn.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Hệ điều hành hỗ trợ chia sẻ tài nguyên và truyền thông qua mạng giữa các máy.

**Giải thích:** HĐH mạng: Hệ điều hành hỗ trợ chia sẻ tài nguyên và truyền thông qua mạng giữa các máy. Ví dụ: chia sẻ file, máy in, dịch vụ mạng.

</details>

### Câu 021. Trong môn Nguyên lý HĐH, Hệ thống phân tán được hiểu đúng nhất là gì?

A. Tính chất yêu cầu HĐH sử dụng tài nguyên phần cứng với hiệu suất cao và giảm lãng phí.
B. Phần cứng, hệ điều hành, chương trình ứng dụng và người dùng.
C. Những đối tượng như CPU, bộ nhớ, thiết bị vào ra, bộ nhớ ngoài và file được chương trình dùng để thực hiện công việc.
D. Tập nhiều máy phối hợp qua mạng để người dùng thấy như một hệ thống thống nhất hơn.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Tập nhiều máy phối hợp qua mạng để người dùng thấy như một hệ thống thống nhất hơn.

**Giải thích:** Hệ thống phân tán: Tập nhiều máy phối hợp qua mạng để người dùng thấy như một hệ thống thống nhất hơn. Vấn đề gồm độ trễ, băng thông, tin cậy và bảo vệ.

</details>

### Câu 022. Trong môn Nguyên lý HĐH, HĐH thời gian thực được hiểu đúng nhất là gì?

A. Thiết bị/cơ chế tạo ngắt định kỳ để HĐH thu hồi CPU và điều phối.
B. Ngắt do phần mềm hoặc hoạt động của chính tiến trình gây ra, thường dùng cho system call hoặc ngoại lệ.
C. Phần cứng, hệ điều hành, chương trình ứng dụng và người dùng.
D. Hệ điều hành phải đáp ứng ràng buộc thời gian xác định, trong đó trễ hạn có thể là lỗi.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Hệ điều hành phải đáp ứng ràng buộc thời gian xác định, trong đó trễ hạn có thể là lỗi.

**Giải thích:** HĐH thời gian thực: Hệ điều hành phải đáp ứng ràng buộc thời gian xác định, trong đó trễ hạn có thể là lỗi. Tiêu chí deadline quan trọng hơn throughput thuần túy.

</details>

### Câu 023. Trong môn Nguyên lý HĐH, HĐH nguyên khối được hiểu đúng nhất là gì?

A. Cấu trúc trong đó nhiều dịch vụ hệ thống cùng chạy trong không gian nhân.
B. Tính chất làm cho người dùng và lập trình viên khai thác máy tính dễ dàng hơn thông qua giao diện chuẩn.
C. Kỹ thuật chia CPU thành các lát thời gian nhỏ cho nhiều người dùng/tiến trình tương tác.
D. Cấu trúc giữ trong kernel các cơ chế tối thiểu và đưa nhiều dịch vụ ra không gian người dùng.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Cấu trúc trong đó nhiều dịch vụ hệ thống cùng chạy trong không gian nhân.

**Giải thích:** HĐH nguyên khối: Cấu trúc trong đó nhiều dịch vụ hệ thống cùng chạy trong không gian nhân. Ưu điểm là hiệu năng; nhược điểm là lỗi trong kernel có thể ảnh hưởng lớn.

</details>

### Câu 024. Trong môn Nguyên lý HĐH, Vi nhân được hiểu đúng nhất là gì?

A. Cách thiết kế HĐH thành các lớp, lớp trên dùng dịch vụ lớp dưới.
B. Cấu trúc giữ trong kernel các cơ chế tối thiểu và đưa nhiều dịch vụ ra không gian người dùng.
C. Tính chất hạn chế truy nhập bất hợp lệ và giảm ảnh hưởng của lỗi vô tình hoặc cố ý.
D. Vai trò phân phối, thu hồi, bảo vệ và giải quyết tranh chấp các tài nguyên như CPU, bộ nhớ, file và thiết bị vào ra.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Cấu trúc giữ trong kernel các cơ chế tối thiểu và đưa nhiều dịch vụ ra không gian người dùng.

**Giải thích:** Vi nhân: Cấu trúc giữ trong kernel các cơ chế tối thiểu và đưa nhiều dịch vụ ra không gian người dùng. Microkernel thường dùng truyền thông thông điệp giữa dịch vụ.

</details>

### Câu 025. Trong môn Nguyên lý HĐH, Cấu trúc phân lớp được hiểu đúng nhất là gì?

A. Thành phần có thể nạp/tháo để mở rộng chức năng kernel như driver mà không thay toàn bộ nhân.
B. Môi trường giao tiếp giữa người dùng và hệ điều hành, nhận lệnh và yêu cầu HĐH thực hiện.
C. Cách thiết kế HĐH thành các lớp, lớp trên dùng dịch vụ lớp dưới.
D. Hệ điều hành phải đáp ứng ràng buộc thời gian xác định, trong đó trễ hạn có thể là lỗi.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Cách thiết kế HĐH thành các lớp, lớp trên dùng dịch vụ lớp dưới.

**Giải thích:** Cấu trúc phân lớp: Cách thiết kế HĐH thành các lớp, lớp trên dùng dịch vụ lớp dưới. Ưu điểm là dễ thiết kế và kiểm chứng hơn.

</details>

### Câu 026. Trong môn Nguyên lý HĐH, Mô-đun kernel được hiểu đúng nhất là gì?

A. Thành phần có thể nạp/tháo để mở rộng chức năng kernel như driver mà không thay toàn bộ nhân.
B. Cơ chế cho phép thiết bị truyền dữ liệu trực tiếp với bộ nhớ, giảm việc CPU phải sao chép từng byte.
C. Cách thiết kế HĐH thành các lớp, lớp trên dùng dịch vụ lớp dưới.
D. Cơ chế phân quyền thực thi nhằm ngăn chương trình người dùng chạy trực tiếp lệnh đặc quyền.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Thành phần có thể nạp/tháo để mở rộng chức năng kernel như driver mà không thay toàn bộ nhân.

**Giải thích:** Mô-đun kernel: Thành phần có thể nạp/tháo để mở rộng chức năng kernel như driver mà không thay toàn bộ nhân. Hỗ trợ mở rộng và thích nghi.

</details>

### Câu 027. Trong môn Nguyên lý HĐH, Máy ảo được hiểu đúng nhất là gì?

A. Thành phần có thể nạp/tháo để mở rộng chức năng kernel như driver mà không thay toàn bộ nhân.
B. Cách tổ chức gom nhiều công việc thành một lô để máy thực hiện lần lượt, giảm thời gian chuyển việc thủ công.
C. Môi trường mô phỏng phần cứng/hệ thống cho phép chạy HĐH hoặc ứng dụng trong không gian cô lập.
D. Cơ chế cho phép thiết bị truyền dữ liệu trực tiếp với bộ nhớ, giảm việc CPU phải sao chép từng byte.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Môi trường mô phỏng phần cứng/hệ thống cho phép chạy HĐH hoặc ứng dụng trong không gian cô lập.

**Giải thích:** Máy ảo: Môi trường mô phỏng phần cứng/hệ thống cho phép chạy HĐH hoặc ứng dụng trong không gian cô lập. Hữu ích khi thử nghiệm HĐH.

</details>

### Câu 028. Trong môn Nguyên lý HĐH, Bộ định thời được hiểu đúng nhất là gì?

A. Lớp phần mềm nằm giữa phần cứng và chương trình ứng dụng, điều khiển việc dùng phần cứng và cung cấp môi trường thực hiện chương trình.
B. Thiết bị/cơ chế tạo ngắt định kỳ để HĐH thu hồi CPU và điều phối.
C. Giao diện để chương trình người dùng yêu cầu dịch vụ của hệ điều hành.
D. Cơ chế phân quyền thực thi nhằm ngăn chương trình người dùng chạy trực tiếp lệnh đặc quyền.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Thiết bị/cơ chế tạo ngắt định kỳ để HĐH thu hồi CPU và điều phối.

**Giải thích:** Bộ định thời: Thiết bị/cơ chế tạo ngắt định kỳ để HĐH thu hồi CPU và điều phối. Timer là nền tảng của preemption.

</details>

### Câu 029. Trong môn Nguyên lý HĐH, Tài nguyên hệ thống được hiểu đúng nhất là gì?

A. Cấu trúc trong đó nhiều dịch vụ hệ thống cùng chạy trong không gian nhân.
B. Cách tổ chức gom nhiều công việc thành một lô để máy thực hiện lần lượt, giảm thời gian chuyển việc thủ công.
C. Phần lõi của HĐH chạy với quyền đặc biệt để quản lý tiến trình, bộ nhớ, file, thiết bị và bảo vệ.
D. Những đối tượng như CPU, bộ nhớ, thiết bị vào ra, bộ nhớ ngoài và file được chương trình dùng để thực hiện công việc.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Những đối tượng như CPU, bộ nhớ, thiết bị vào ra, bộ nhớ ngoài và file được chương trình dùng để thực hiện công việc.

**Giải thích:** Tài nguyên hệ thống: Những đối tượng như CPU, bộ nhớ, thiết bị vào ra, bộ nhớ ngoài và file được chương trình dùng để thực hiện công việc. HĐH phải phân phối theo thời gian và không gian.

</details>

### Câu 030. Trong môn Nguyên lý HĐH, Trình điều khiển thiết bị được hiểu đúng nhất là gì?

A. Tính chất yêu cầu HĐH sử dụng tài nguyên phần cứng với hiệu suất cao và giảm lãng phí.
B. Mã phần mềm cho phép HĐH giao tiếp với phần cứng thiết bị cụ thể thông qua giao diện chuẩn.
C. Thành phần có thể nạp/tháo để mở rộng chức năng kernel như driver mà không thay toàn bộ nhân.
D. Hệ điều hành hỗ trợ chia sẻ tài nguyên và truyền thông qua mạng giữa các máy.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Mã phần mềm cho phép HĐH giao tiếp với phần cứng thiết bị cụ thể thông qua giao diện chuẩn.

**Giải thích:** Trình điều khiển thiết bị: Mã phần mềm cho phép HĐH giao tiếp với phần cứng thiết bị cụ thể thông qua giao diện chuẩn. Thiết bị đa dạng nên cần driver.

</details>

### Câu 031. Phát biểu nào mô tả đúng nhất về Hệ điều hành?

A. Khả năng thích nghi với thiết bị và yêu cầu mới mà không cần xây dựng lại toàn bộ hệ điều hành.
B. Lớp phần mềm nằm giữa phần cứng và chương trình ứng dụng, điều khiển việc dùng phần cứng và cung cấp môi trường thực hiện chương trình.
C. Tính chất làm cho người dùng và lập trình viên khai thác máy tính dễ dàng hơn thông qua giao diện chuẩn.
D. Cách tổ chức gom nhiều công việc thành một lô để máy thực hiện lần lượt, giảm thời gian chuyển việc thủ công.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Lớp phần mềm nằm giữa phần cứng và chương trình ứng dụng, điều khiển việc dùng phần cứng và cung cấp môi trường thực hiện chương trình.

**Giải thích:** Khái niệm Hệ điều hành trong slide/đề ôn tập gắn với ý: Lớp phần mềm nằm giữa phần cứng và chương trình ứng dụng, điều khiển việc dùng phần cứng và cung cấp môi trường thực hiện chương trình. Slide Chương 1 đặt HĐH giữa hardware và application programs.

</details>

### Câu 032. Phát biểu nào mô tả đúng nhất về Các thành phần hệ thống tính toán?

A. Phần cứng, hệ điều hành, chương trình ứng dụng và người dùng.
B. Cách tổ chức gom nhiều công việc thành một lô để máy thực hiện lần lượt, giảm thời gian chuyển việc thủ công.
C. Tính chất làm cho người dùng và lập trình viên khai thác máy tính dễ dàng hơn thông qua giao diện chuẩn.
D. Hệ điều hành phải đáp ứng ràng buộc thời gian xác định, trong đó trễ hạn có thể là lỗi.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Phần cứng, hệ điều hành, chương trình ứng dụng và người dùng.

**Giải thích:** Khái niệm Các thành phần hệ thống tính toán trong slide/đề ôn tập gắn với ý: Phần cứng, hệ điều hành, chương trình ứng dụng và người dùng. Đây là mô hình phân lớp cơ bản trong slide.

</details>

### Câu 033. Phát biểu nào mô tả đúng nhất về Máy tính ảo?

A. Cấu trúc trong đó nhiều dịch vụ hệ thống cùng chạy trong không gian nhân.
B. Cơ chế dừng luồng thực thi hiện tại để CPU chuyển sang xử lý một sự kiện.
C. Sự trừu tượng do HĐH cung cấp để che giấu chi tiết phần cứng và làm hệ thống dễ dùng hơn.
D. Phần lõi của HĐH chạy với quyền đặc biệt để quản lý tiến trình, bộ nhớ, file, thiết bị và bảo vệ.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Sự trừu tượng do HĐH cung cấp để che giấu chi tiết phần cứng và làm hệ thống dễ dùng hơn.

**Giải thích:** Khái niệm Máy tính ảo trong slide/đề ôn tập gắn với ý: Sự trừu tượng do HĐH cung cấp để che giấu chi tiết phần cứng và làm hệ thống dễ dùng hơn. Ví dụ: bộ nhớ ảo, máy in ảo, giao diện thiết bị thống nhất.

</details>

### Câu 034. Phát biểu nào mô tả đúng nhất về Quản lý tài nguyên?

A. Môi trường mô phỏng phần cứng/hệ thống cho phép chạy HĐH hoặc ứng dụng trong không gian cô lập.
B. Vai trò phân phối, thu hồi, bảo vệ và giải quyết tranh chấp các tài nguyên như CPU, bộ nhớ, file và thiết bị vào ra.
C. Tính chất hạn chế truy nhập bất hợp lệ và giảm ảnh hưởng của lỗi vô tình hoặc cố ý.
D. Cách thiết kế HĐH thành các lớp, lớp trên dùng dịch vụ lớp dưới.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Vai trò phân phối, thu hồi, bảo vệ và giải quyết tranh chấp các tài nguyên như CPU, bộ nhớ, file và thiết bị vào ra.

**Giải thích:** Khái niệm Quản lý tài nguyên trong slide/đề ôn tập gắn với ý: Vai trò phân phối, thu hồi, bảo vệ và giải quyết tranh chấp các tài nguyên như CPU, bộ nhớ, file và thiết bị vào ra. Đây là chức năng trung tâm thứ hai của HĐH.

</details>

### Câu 035. Phát biểu nào mô tả đúng nhất về Tính thuận tiện?

A. Môi trường giao tiếp giữa người dùng và hệ điều hành, nhận lệnh và yêu cầu HĐH thực hiện.
B. Tính chất làm cho người dùng và lập trình viên khai thác máy tính dễ dàng hơn thông qua giao diện chuẩn.
C. Cách tổ chức gom nhiều công việc thành một lô để máy thực hiện lần lượt, giảm thời gian chuyển việc thủ công.
D. Cấu trúc giữ trong kernel các cơ chế tối thiểu và đưa nhiều dịch vụ ra không gian người dùng.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Tính chất làm cho người dùng và lập trình viên khai thác máy tính dễ dàng hơn thông qua giao diện chuẩn.

**Giải thích:** Khái niệm Tính thuận tiện trong slide/đề ôn tập gắn với ý: Tính chất làm cho người dùng và lập trình viên khai thác máy tính dễ dàng hơn thông qua giao diện chuẩn. Nó liên quan trực tiếp đến mục tiêu 'dễ sử dụng'.

</details>

### Câu 036. Phát biểu nào mô tả đúng nhất về Tính hiệu quả?

A. Tính chất yêu cầu hệ thống kiểm tra, phát hiện và xử lý lỗi để kết quả vận hành đáng tin.
B. Tính chất yêu cầu HĐH sử dụng tài nguyên phần cứng với hiệu suất cao và giảm lãng phí.
C. Thiết bị/cơ chế tạo ngắt định kỳ để HĐH thu hồi CPU và điều phối.
D. Tập nhiều máy phối hợp qua mạng để người dùng thấy như một hệ thống thống nhất hơn.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Tính chất yêu cầu HĐH sử dụng tài nguyên phần cứng với hiệu suất cao và giảm lãng phí.

**Giải thích:** Khái niệm Tính hiệu quả trong slide/đề ôn tập gắn với ý: Tính chất yêu cầu HĐH sử dụng tài nguyên phần cứng với hiệu suất cao và giảm lãng phí. Ví dụ: chồng lấp CPU với I/O, giảm thời gian rỗi.

</details>

### Câu 037. Phát biểu nào mô tả đúng nhất về Tính tin cậy và chuẩn xác?

A. Sự trừu tượng do HĐH cung cấp để che giấu chi tiết phần cứng và làm hệ thống dễ dùng hơn.
B. Giao diện để chương trình người dùng yêu cầu dịch vụ của hệ điều hành.
C. Tính chất yêu cầu hệ thống kiểm tra, phát hiện và xử lý lỗi để kết quả vận hành đáng tin.
D. Môi trường giao tiếp giữa người dùng và hệ điều hành, nhận lệnh và yêu cầu HĐH thực hiện.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Tính chất yêu cầu hệ thống kiểm tra, phát hiện và xử lý lỗi để kết quả vận hành đáng tin.

**Giải thích:** Khái niệm Tính tin cậy và chuẩn xác trong slide/đề ôn tập gắn với ý: Tính chất yêu cầu hệ thống kiểm tra, phát hiện và xử lý lỗi để kết quả vận hành đáng tin. Các thao tác quan trọng cần kiểm soát lỗi.

</details>

### Câu 038. Phát biểu nào mô tả đúng nhất về Tính an toàn/bảo vệ?

A. Tính chất làm cho người dùng và lập trình viên khai thác máy tính dễ dàng hơn thông qua giao diện chuẩn.
B. Tính chất hạn chế truy nhập bất hợp lệ và giảm ảnh hưởng của lỗi vô tình hoặc cố ý.
C. Phần cứng, hệ điều hành, chương trình ứng dụng và người dùng.
D. Giao diện để chương trình người dùng yêu cầu dịch vụ của hệ điều hành.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Tính chất hạn chế truy nhập bất hợp lệ và giảm ảnh hưởng của lỗi vô tình hoặc cố ý.

**Giải thích:** Khái niệm Tính an toàn/bảo vệ trong slide/đề ôn tập gắn với ý: Tính chất hạn chế truy nhập bất hợp lệ và giảm ảnh hưởng của lỗi vô tình hoặc cố ý. Cơ chế bảo vệ bộ nhớ, file và chế độ nhân/người dùng phục vụ mục tiêu này.

</details>

### Câu 039. Phát biểu nào mô tả đúng nhất về Tính tổng quát theo thời gian?

A. Khả năng thích nghi với thiết bị và yêu cầu mới mà không cần xây dựng lại toàn bộ hệ điều hành.
B. Giao diện để chương trình người dùng yêu cầu dịch vụ của hệ điều hành.
C. Sự trừu tượng do HĐH cung cấp để che giấu chi tiết phần cứng và làm hệ thống dễ dùng hơn.
D. Cơ chế dừng luồng thực thi hiện tại để CPU chuyển sang xử lý một sự kiện.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Khả năng thích nghi với thiết bị và yêu cầu mới mà không cần xây dựng lại toàn bộ hệ điều hành.

**Giải thích:** Khái niệm Tính tổng quát theo thời gian trong slide/đề ôn tập gắn với ý: Khả năng thích nghi với thiết bị và yêu cầu mới mà không cần xây dựng lại toàn bộ hệ điều hành. Trình điều khiển thiết bị và cấu trúc mô-đun hỗ trợ tính này.

</details>

### Câu 040. Phát biểu nào mô tả đúng nhất về Xử lý theo lô?

A. Những đối tượng như CPU, bộ nhớ, thiết bị vào ra, bộ nhớ ngoài và file được chương trình dùng để thực hiện công việc.
B. Cách tổ chức gom nhiều công việc thành một lô để máy thực hiện lần lượt, giảm thời gian chuyển việc thủ công.
C. Tính chất yêu cầu hệ thống kiểm tra, phát hiện và xử lý lỗi để kết quả vận hành đáng tin.
D. Tính chất hạn chế truy nhập bất hợp lệ và giảm ảnh hưởng của lỗi vô tình hoặc cố ý.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Cách tổ chức gom nhiều công việc thành một lô để máy thực hiện lần lượt, giảm thời gian chuyển việc thủ công.

**Giải thích:** Khái niệm Xử lý theo lô trong slide/đề ôn tập gắn với ý: Cách tổ chức gom nhiều công việc thành một lô để máy thực hiện lần lượt, giảm thời gian chuyển việc thủ công. Đặc trưng giai đoạn phần cứng đắt.

</details>

### Câu 041. Phát biểu nào mô tả đúng nhất về Đa chương trình?

A. Kỹ thuật đặt nhiều chương trình trong bộ nhớ để khi một chương trình đợi I/O, CPU có thể chạy chương trình khác.
B. Giao diện để chương trình người dùng yêu cầu dịch vụ của hệ điều hành.
C. Vai trò phân phối, thu hồi, bảo vệ và giải quyết tranh chấp các tài nguyên như CPU, bộ nhớ, file và thiết bị vào ra.
D. Thiết bị/cơ chế tạo ngắt định kỳ để HĐH thu hồi CPU và điều phối.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Kỹ thuật đặt nhiều chương trình trong bộ nhớ để khi một chương trình đợi I/O, CPU có thể chạy chương trình khác.

**Giải thích:** Khái niệm Đa chương trình trong slide/đề ôn tập gắn với ý: Kỹ thuật đặt nhiều chương trình trong bộ nhớ để khi một chương trình đợi I/O, CPU có thể chạy chương trình khác. Mục tiêu là tăng hiệu suất CPU.

</details>

### Câu 042. Phát biểu nào mô tả đúng nhất về Chia sẻ thời gian?

A. Phần lõi của HĐH chạy với quyền đặc biệt để quản lý tiến trình, bộ nhớ, file, thiết bị và bảo vệ.
B. Vai trò phân phối, thu hồi, bảo vệ và giải quyết tranh chấp các tài nguyên như CPU, bộ nhớ, file và thiết bị vào ra.
C. Kỹ thuật chia CPU thành các lát thời gian nhỏ cho nhiều người dùng/tiến trình tương tác.
D. Ngắt do phần mềm hoặc hoạt động của chính tiến trình gây ra, thường dùng cho system call hoặc ngoại lệ.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Kỹ thuật chia CPU thành các lát thời gian nhỏ cho nhiều người dùng/tiến trình tương tác.

**Giải thích:** Khái niệm Chia sẻ thời gian trong slide/đề ôn tập gắn với ý: Kỹ thuật chia CPU thành các lát thời gian nhỏ cho nhiều người dùng/tiến trình tương tác. Nó cải thiện thời gian đáp ứng.

</details>

### Câu 043. Phát biểu nào mô tả đúng nhất về Lời gọi hệ thống?

A. Lớp phần mềm nằm giữa phần cứng và chương trình ứng dụng, điều khiển việc dùng phần cứng và cung cấp môi trường thực hiện chương trình.
B. Ngắt do phần mềm hoặc hoạt động của chính tiến trình gây ra, thường dùng cho system call hoặc ngoại lệ.
C. Giao diện để chương trình người dùng yêu cầu dịch vụ của hệ điều hành.
D. Tính chất hạn chế truy nhập bất hợp lệ và giảm ảnh hưởng của lỗi vô tình hoặc cố ý.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Giao diện để chương trình người dùng yêu cầu dịch vụ của hệ điều hành.

**Giải thích:** Khái niệm Lời gọi hệ thống trong slide/đề ôn tập gắn với ý: Giao diện để chương trình người dùng yêu cầu dịch vụ của hệ điều hành. System call là cửa vào có kiểm soát vào kernel.

</details>

### Câu 044. Phát biểu nào mô tả đúng nhất về Shell?

A. Môi trường giao tiếp giữa người dùng và hệ điều hành, nhận lệnh và yêu cầu HĐH thực hiện.
B. Sự trừu tượng do HĐH cung cấp để che giấu chi tiết phần cứng và làm hệ thống dễ dùng hơn.
C. Tính chất yêu cầu HĐH sử dụng tài nguyên phần cứng với hiệu suất cao và giảm lãng phí.
D. Lớp phần mềm nằm giữa phần cứng và chương trình ứng dụng, điều khiển việc dùng phần cứng và cung cấp môi trường thực hiện chương trình.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Môi trường giao tiếp giữa người dùng và hệ điều hành, nhận lệnh và yêu cầu HĐH thực hiện.

**Giải thích:** Khái niệm Shell trong slide/đề ôn tập gắn với ý: Môi trường giao tiếp giữa người dùng và hệ điều hành, nhận lệnh và yêu cầu HĐH thực hiện. Shell không phải kernel.

</details>

### Câu 045. Phát biểu nào mô tả đúng nhất về Kernel?

A. Phần lõi của HĐH chạy với quyền đặc biệt để quản lý tiến trình, bộ nhớ, file, thiết bị và bảo vệ.
B. Kỹ thuật đặt nhiều chương trình trong bộ nhớ để khi một chương trình đợi I/O, CPU có thể chạy chương trình khác.
C. Môi trường mô phỏng phần cứng/hệ thống cho phép chạy HĐH hoặc ứng dụng trong không gian cô lập.
D. Cách tổ chức gom nhiều công việc thành một lô để máy thực hiện lần lượt, giảm thời gian chuyển việc thủ công.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Phần lõi của HĐH chạy với quyền đặc biệt để quản lý tiến trình, bộ nhớ, file, thiết bị và bảo vệ.

**Giải thích:** Khái niệm Kernel trong slide/đề ôn tập gắn với ý: Phần lõi của HĐH chạy với quyền đặc biệt để quản lý tiến trình, bộ nhớ, file, thiết bị và bảo vệ. Kernel xử lý system call và ngắt.

</details>

### Câu 046. Phát biểu nào mô tả đúng nhất về Chế độ người dùng và chế độ nhân?

A. Cơ chế phân quyền thực thi nhằm ngăn chương trình người dùng chạy trực tiếp lệnh đặc quyền.
B. Cấu trúc giữ trong kernel các cơ chế tối thiểu và đưa nhiều dịch vụ ra không gian người dùng.
C. Hệ điều hành hỗ trợ chia sẻ tài nguyên và truyền thông qua mạng giữa các máy.
D. Khả năng thích nghi với thiết bị và yêu cầu mới mà không cần xây dựng lại toàn bộ hệ điều hành.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Cơ chế phân quyền thực thi nhằm ngăn chương trình người dùng chạy trực tiếp lệnh đặc quyền.

**Giải thích:** Khái niệm Chế độ người dùng và chế độ nhân trong slide/đề ôn tập gắn với ý: Cơ chế phân quyền thực thi nhằm ngăn chương trình người dùng chạy trực tiếp lệnh đặc quyền. Dual-mode hỗ trợ bảo vệ hệ thống.

</details>

### Câu 047. Phát biểu nào mô tả đúng nhất về Ngắt?

A. Kỹ thuật đặt nhiều chương trình trong bộ nhớ để khi một chương trình đợi I/O, CPU có thể chạy chương trình khác.
B. Tính chất làm cho người dùng và lập trình viên khai thác máy tính dễ dàng hơn thông qua giao diện chuẩn.
C. Cách thiết kế HĐH thành các lớp, lớp trên dùng dịch vụ lớp dưới.
D. Cơ chế dừng luồng thực thi hiện tại để CPU chuyển sang xử lý một sự kiện.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Cơ chế dừng luồng thực thi hiện tại để CPU chuyển sang xử lý một sự kiện.

**Giải thích:** Khái niệm Ngắt trong slide/đề ôn tập gắn với ý: Cơ chế dừng luồng thực thi hiện tại để CPU chuyển sang xử lý một sự kiện. Ngắt giúp HĐH phản ứng với thiết bị, lỗi hoặc system call.

</details>

### Câu 048. Phát biểu nào mô tả đúng nhất về Trap/ngắt mềm?

A. Hệ điều hành hỗ trợ chia sẻ tài nguyên và truyền thông qua mạng giữa các máy.
B. Ngắt do phần mềm hoặc hoạt động của chính tiến trình gây ra, thường dùng cho system call hoặc ngoại lệ.
C. Tập nhiều máy phối hợp qua mạng để người dùng thấy như một hệ thống thống nhất hơn.
D. Cơ chế cho phép thiết bị truyền dữ liệu trực tiếp với bộ nhớ, giảm việc CPU phải sao chép từng byte.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Ngắt do phần mềm hoặc hoạt động của chính tiến trình gây ra, thường dùng cho system call hoặc ngoại lệ.

**Giải thích:** Khái niệm Trap/ngắt mềm trong slide/đề ôn tập gắn với ý: Ngắt do phần mềm hoặc hoạt động của chính tiến trình gây ra, thường dùng cho system call hoặc ngoại lệ. Khác với ngắt phần cứng từ thiết bị.

</details>

### Câu 049. Phát biểu nào mô tả đúng nhất về DMA?

A. Phần cứng, hệ điều hành, chương trình ứng dụng và người dùng.
B. Môi trường mô phỏng phần cứng/hệ thống cho phép chạy HĐH hoặc ứng dụng trong không gian cô lập.
C. Phần lõi của HĐH chạy với quyền đặc biệt để quản lý tiến trình, bộ nhớ, file, thiết bị và bảo vệ.
D. Cơ chế cho phép thiết bị truyền dữ liệu trực tiếp với bộ nhớ, giảm việc CPU phải sao chép từng byte.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Cơ chế cho phép thiết bị truyền dữ liệu trực tiếp với bộ nhớ, giảm việc CPU phải sao chép từng byte.

**Giải thích:** Khái niệm DMA trong slide/đề ôn tập gắn với ý: Cơ chế cho phép thiết bị truyền dữ liệu trực tiếp với bộ nhớ, giảm việc CPU phải sao chép từng byte. DMA giúp chồng lấp tính toán và vào ra.

</details>

### Câu 050. Phát biểu nào mô tả đúng nhất về HĐH mạng?

A. Tập nhiều máy phối hợp qua mạng để người dùng thấy như một hệ thống thống nhất hơn.
B. Hệ điều hành hỗ trợ chia sẻ tài nguyên và truyền thông qua mạng giữa các máy.
C. Môi trường mô phỏng phần cứng/hệ thống cho phép chạy HĐH hoặc ứng dụng trong không gian cô lập.
D. Cơ chế dừng luồng thực thi hiện tại để CPU chuyển sang xử lý một sự kiện.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Hệ điều hành hỗ trợ chia sẻ tài nguyên và truyền thông qua mạng giữa các máy.

**Giải thích:** Khái niệm HĐH mạng trong slide/đề ôn tập gắn với ý: Hệ điều hành hỗ trợ chia sẻ tài nguyên và truyền thông qua mạng giữa các máy. Ví dụ: chia sẻ file, máy in, dịch vụ mạng.

</details>


---

## Chương 2 - Tiến trình, luồng, điều phối CPU và IPC

### Câu 051. Trong môn Nguyên lý HĐH, Tiến trình được hiểu đúng nhất là gì?

A. Điều phối tiến trình theo thứ tự đến trước phục vụ trước.
B. Kiểu message passing gọi tên tường minh tiến trình gửi/nhận.
C. Một chương trình đang được thực hiện và có trạng thái, tài nguyên, bộ đếm lệnh.
D. Thao tác gửi làm tiến trình gửi chờ cho đến khi thông điệp được nhận hoặc chấp nhận.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Một chương trình đang được thực hiện và có trạng thái, tài nguyên, bộ đếm lệnh.

**Giải thích:** Tiến trình: Một chương trình đang được thực hiện và có trạng thái, tài nguyên, bộ đếm lệnh. Process là thực thể chủ động.

</details>

### Câu 052. Trong môn Nguyên lý HĐH, Chương trình được hiểu đúng nhất là gì?

A. Trạng thái tiến trình đã hoàn thành hoặc bị kết thúc và tài nguyên sẽ được thu hồi.
B. Thực thể thụ động lưu trên đĩa, gồm mã lệnh và dữ liệu; khi chạy mới trở thành tiến trình.
C. Kỹ thuật tăng dần ưu tiên tiến trình chờ lâu để giảm starvation.
D. Phiên bản độc quyền của SJF, chọn tiến trình có thời gian còn lại ngắn nhất.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Thực thể thụ động lưu trên đĩa, gồm mã lệnh và dữ liệu; khi chạy mới trở thành tiến trình.

**Giải thích:** Chương trình: Thực thể thụ động lưu trên đĩa, gồm mã lệnh và dữ liệu; khi chạy mới trở thành tiến trình. Một chương trình có thể sinh nhiều tiến trình.

</details>

### Câu 053. Trong môn Nguyên lý HĐH, PCB được hiểu đúng nhất là gì?

A. Mô hình IPC dùng send/receive để trao đổi mà không cần biến dùng chung trực tiếp.
B. Khối điều khiển tiến trình lưu trạng thái, PC, thanh ghi, thông tin điều phối, bộ nhớ, file mở và thống kê.
C. Tiến trình có nhiều luồng thực thi trong cùng không gian địa chỉ.
D. Đơn vị thực thi cơ bản gồm PC, thanh ghi và stack riêng, chia sẻ mã/dữ liệu với luồng cùng tiến trình.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Khối điều khiển tiến trình lưu trạng thái, PC, thanh ghi, thông tin điều phối, bộ nhớ, file mở và thống kê.

**Giải thích:** PCB: Khối điều khiển tiến trình lưu trạng thái, PC, thanh ghi, thông tin điều phối, bộ nhớ, file mở và thống kê. PCB cho phép HĐH quản lý duy nhất một tiến trình.

</details>

### Câu 054. Trong môn Nguyên lý HĐH, New được hiểu đúng nhất là gì?

A. Việc kết thúc lan truyền từ tiến trình cha xuống các tiến trình con theo chính sách HĐH.
B. Hàng đợi các tiến trình đang chờ một thiết bị vào ra cụ thể.
C. Thao tác hoàn thành hoặc hủy tiến trình, trả tài nguyên về hệ thống.
D. Trạng thái tiến trình đang được khởi tạo.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Trạng thái tiến trình đang được khởi tạo.

**Giải thích:** New: Trạng thái tiến trình đang được khởi tạo. Sau đó tiến trình có thể được admitted vào Ready.

</details>

### Câu 055. Trong môn Nguyên lý HĐH, Ready được hiểu đúng nhất là gì?

A. Việc kết thúc lan truyền từ tiến trình cha xuống các tiến trình con theo chính sách HĐH.
B. Trạng thái tiến trình đã đủ tài nguyên trừ CPU và đang chờ được điều phối.
C. Phiên bản độc quyền của SJF, chọn tiến trình có thời gian còn lại ngắn nhất.
D. Tiến trình có nhiều luồng thực thi trong cùng không gian địa chỉ.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Trạng thái tiến trình đã đủ tài nguyên trừ CPU và đang chờ được điều phối.

**Giải thích:** Ready: Trạng thái tiến trình đã đủ tài nguyên trừ CPU và đang chờ được điều phối. Ready queue chứa các tiến trình này.

</details>

### Câu 056. Trong môn Nguyên lý HĐH, Running được hiểu đúng nhất là gì?

A. Trạng thái tiến trình đang chờ sự kiện như hoàn thành I/O hoặc tín hiệu đồng bộ.
B. Hàng đợi các tiến trình đang chờ một thiết bị vào ra cụ thể.
C. Trạng thái tiến trình đang được khởi tạo.
D. Trạng thái các lệnh của tiến trình đang được CPU thực hiện.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Trạng thái các lệnh của tiến trình đang được CPU thực hiện.

**Giải thích:** Running: Trạng thái các lệnh của tiến trình đang được CPU thực hiện. Hệ một CPU chỉ có tối đa một tiến trình running.

</details>

### Câu 057. Trong môn Nguyên lý HĐH, Waiting được hiểu đúng nhất là gì?

A. Kiểu message passing qua mailbox hoặc port.
B. Nhiều luồng người dùng ánh xạ vào một luồng nhân.
C. Trạng thái tiến trình đang chờ sự kiện như hoàn thành I/O hoặc tín hiệu đồng bộ.
D. Tổng thời gian tiến trình chờ trong ready queue.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Trạng thái tiến trình đang chờ sự kiện như hoàn thành I/O hoặc tín hiệu đồng bộ.

**Giải thích:** Waiting: Trạng thái tiến trình đang chờ sự kiện như hoàn thành I/O hoặc tín hiệu đồng bộ. Khi sự kiện xong, tiến trình về Ready.

</details>

### Câu 058. Trong môn Nguyên lý HĐH, Terminated được hiểu đúng nhất là gì?

A. Nhiều luồng người dùng được ghép lên nhiều luồng nhân.
B. Trạng thái tiến trình đã hoàn thành hoặc bị kết thúc và tài nguyên sẽ được thu hồi.
C. Thời gian từ khi tiến trình đến hệ thống đến khi hoàn thành.
D. Số tiến trình hoàn thành trong một đơn vị thời gian.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Trạng thái tiến trình đã hoàn thành hoặc bị kết thúc và tài nguyên sẽ được thu hồi.

**Giải thích:** Terminated: Trạng thái tiến trình đã hoàn thành hoặc bị kết thúc và tài nguyên sẽ được thu hồi. PCB và tài nguyên được giải phóng.

</details>

### Câu 059. Trong môn Nguyên lý HĐH, Ready queue được hiểu đúng nhất là gì?

A. Bộ điều phối dài hạn chọn job từ hàng đợi vào để đưa vào bộ nhớ.
B. Thực thể thụ động lưu trên đĩa, gồm mã lệnh và dữ liệu; khi chạy mới trở thành tiến trình.
C. Receive trả về ngay, hoặc thông điệp hợp lệ, hoặc giá trị rỗng/null.
D. Hàng đợi các tiến trình trong bộ nhớ đang sẵn sàng và chờ CPU.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Hàng đợi các tiến trình trong bộ nhớ đang sẵn sàng và chờ CPU.

**Giải thích:** Ready queue: Hàng đợi các tiến trình trong bộ nhớ đang sẵn sàng và chờ CPU. CPU scheduler chọn từ hàng đợi này.

</details>

### Câu 060. Trong môn Nguyên lý HĐH, Device queue được hiểu đúng nhất là gì?

A. Hàng đợi các tiến trình đang chờ một thiết bị vào ra cụ thể.
B. Thực thể thụ động lưu trên đĩa, gồm mã lệnh và dữ liệu; khi chạy mới trở thành tiến trình.
C. Receive trả về ngay, hoặc thông điệp hợp lệ, hoặc giá trị rỗng/null.
D. Mô hình IPC trong đó các tiến trình chia sẻ một vùng nhớ và tự đồng bộ truy cập.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Hàng đợi các tiến trình đang chờ một thiết bị vào ra cụ thể.

**Giải thích:** Device queue: Hàng đợi các tiến trình đang chờ một thiết bị vào ra cụ thể. Mỗi thiết bị có thể có queue riêng.

</details>

### Câu 061. Trong môn Nguyên lý HĐH, Job scheduler được hiểu đúng nhất là gì?

A. Bộ điều phối trung hạn đưa tiến trình ra/vào bộ nhớ bằng swapping.
B. Bộ điều phối dài hạn chọn job từ hàng đợi vào để đưa vào bộ nhớ.
C. Tiến trình có nhiều luồng thực thi trong cùng không gian địa chỉ.
D. Mô hình IPC dùng send/receive để trao đổi mà không cần biến dùng chung trực tiếp.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Bộ điều phối dài hạn chọn job từ hàng đợi vào để đưa vào bộ nhớ.

**Giải thích:** Job scheduler: Bộ điều phối dài hạn chọn job từ hàng đợi vào để đưa vào bộ nhớ. Nó điều khiển mức độ đa chương trình.

</details>

### Câu 062. Trong môn Nguyên lý HĐH, CPU scheduler được hiểu đúng nhất là gì?

A. Bộ điều phối ngắn hạn chọn một tiến trình sẵn sàng để cấp CPU.
B. Bộ điều phối dài hạn chọn job từ hàng đợi vào để đưa vào bộ nhớ.
C. Trạng thái tiến trình đã đủ tài nguyên trừ CPU và đang chờ được điều phối.
D. Một chương trình đang được thực hiện và có trạng thái, tài nguyên, bộ đếm lệnh.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Bộ điều phối ngắn hạn chọn một tiến trình sẵn sàng để cấp CPU.

**Giải thích:** CPU scheduler: Bộ điều phối ngắn hạn chọn một tiến trình sẵn sàng để cấp CPU. Nó chạy rất thường xuyên nên phải nhanh.

</details>

### Câu 063. Trong môn Nguyên lý HĐH, Medium-term scheduler được hiểu đúng nhất là gì?

A. Tiến trình có nhiều luồng thực thi trong cùng không gian địa chỉ.
B. Hàng đợi các tiến trình trong bộ nhớ đang sẵn sàng và chờ CPU.
C. Bộ điều phối trung hạn đưa tiến trình ra/vào bộ nhớ bằng swapping.
D. Mô hình IPC dùng send/receive để trao đổi mà không cần biến dùng chung trực tiếp.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Bộ điều phối trung hạn đưa tiến trình ra/vào bộ nhớ bằng swapping.

**Giải thích:** Medium-term scheduler: Bộ điều phối trung hạn đưa tiến trình ra/vào bộ nhớ bằng swapping. Mục tiêu là điều chỉnh tải và giải phóng bộ nhớ.

</details>

### Câu 064. Trong môn Nguyên lý HĐH, Context switch được hiểu đúng nhất là gì?

A. Mỗi luồng người dùng ánh xạ vào một luồng nhân.
B. Trạng thái tiến trình đang chờ sự kiện như hoàn thành I/O hoặc tín hiệu đồng bộ.
C. Trạng thái tiến trình đã đủ tài nguyên trừ CPU và đang chờ được điều phối.
D. Thao tác lưu ngữ cảnh tiến trình cũ và khôi phục ngữ cảnh tiến trình mới khi chuyển CPU.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Thao tác lưu ngữ cảnh tiến trình cũ và khôi phục ngữ cảnh tiến trình mới khi chuyển CPU.

**Giải thích:** Context switch: Thao tác lưu ngữ cảnh tiến trình cũ và khôi phục ngữ cảnh tiến trình mới khi chuyển CPU. Thời gian này là overhead.

</details>

### Câu 065. Trong môn Nguyên lý HĐH, Tạo tiến trình được hiểu đúng nhất là gì?

A. Việc kết thúc lan truyền từ tiến trình cha xuống các tiến trình con theo chính sách HĐH.
B. Hàng đợi các tiến trình đang chờ một thiết bị vào ra cụ thể.
C. Thao tác hệ thống tạo tiến trình con, ví dụ fork() hoặc CreateProcess().
D. Kỹ thuật tăng dần ưu tiên tiến trình chờ lâu để giảm starvation.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Thao tác hệ thống tạo tiến trình con, ví dụ fork() hoặc CreateProcess().

**Giải thích:** Tạo tiến trình: Thao tác hệ thống tạo tiến trình con, ví dụ fork() hoặc CreateProcess(). Tiến trình cha có thể tiếp tục chạy hoặc đợi con.

</details>

### Câu 066. Trong môn Nguyên lý HĐH, Kết thúc tiến trình được hiểu đúng nhất là gì?

A. Thao tác gửi làm tiến trình gửi chờ cho đến khi thông điệp được nhận hoặc chấp nhận.
B. Receive trả về ngay, hoặc thông điệp hợp lệ, hoặc giá trị rỗng/null.
C. Thao tác hoàn thành hoặc hủy tiến trình, trả tài nguyên về hệ thống.
D. Kiểu message passing gọi tên tường minh tiến trình gửi/nhận.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Thao tác hoàn thành hoặc hủy tiến trình, trả tài nguyên về hệ thống.

**Giải thích:** Kết thúc tiến trình: Thao tác hoàn thành hoặc hủy tiến trình, trả tài nguyên về hệ thống. Có thể kết thúc bình thường hoặc bị abort.

</details>

### Câu 067. Trong môn Nguyên lý HĐH, Cascading termination được hiểu đúng nhất là gì?

A. Thao tác gửi làm tiến trình gửi chờ cho đến khi thông điệp được nhận hoặc chấp nhận.
B. Việc kết thúc lan truyền từ tiến trình cha xuống các tiến trình con theo chính sách HĐH.
C. Tiến trình chỉ có một luồng thực thi.
D. Bộ điều phối ngắn hạn chọn một tiến trình sẵn sàng để cấp CPU.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Việc kết thúc lan truyền từ tiến trình cha xuống các tiến trình con theo chính sách HĐH.

**Giải thích:** Cascading termination: Việc kết thúc lan truyền từ tiến trình cha xuống các tiến trình con theo chính sách HĐH. Gặp khi HĐH không cho con tồn tại sau cha.

</details>

### Câu 068. Trong môn Nguyên lý HĐH, Tiến trình đơn luồng được hiểu đúng nhất là gì?

A. Tiến trình chỉ có một luồng thực thi.
B. Đơn vị thực thi cơ bản gồm PC, thanh ghi và stack riêng, chia sẻ mã/dữ liệu với luồng cùng tiến trình.
C. Thao tác lưu ngữ cảnh tiến trình cũ và khôi phục ngữ cảnh tiến trình mới khi chuyển CPU.
D. Trạng thái tiến trình đã hoàn thành hoặc bị kết thúc và tài nguyên sẽ được thu hồi.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Tiến trình chỉ có một luồng thực thi.

**Giải thích:** Tiến trình đơn luồng: Tiến trình chỉ có một luồng thực thi. Chỉ thực hiện một dòng điều khiển trong tiến trình.

</details>

### Câu 069. Trong môn Nguyên lý HĐH, Tiến trình đa luồng được hiểu đúng nhất là gì?

A. Trạng thái các lệnh của tiến trình đang được CPU thực hiện.
B. Bộ điều phối trung hạn đưa tiến trình ra/vào bộ nhớ bằng swapping.
C. Hàng đợi các tiến trình trong bộ nhớ đang sẵn sàng và chờ CPU.
D. Tiến trình có nhiều luồng thực thi trong cùng không gian địa chỉ.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Tiến trình có nhiều luồng thực thi trong cùng không gian địa chỉ.

**Giải thích:** Tiến trình đa luồng: Tiến trình có nhiều luồng thực thi trong cùng không gian địa chỉ. Cho phép nhiều nhiệm vụ đồng thời hơn.

</details>

### Câu 070. Trong môn Nguyên lý HĐH, Luồng được hiểu đúng nhất là gì?

A. Thao tác hoàn thành hoặc hủy tiến trình, trả tài nguyên về hệ thống.
B. Đơn vị thực thi cơ bản gồm PC, thanh ghi và stack riêng, chia sẻ mã/dữ liệu với luồng cùng tiến trình.
C. Điều phối tiến trình theo thứ tự đến trước phục vụ trước.
D. Kỹ thuật tăng dần ưu tiên tiến trình chờ lâu để giảm starvation.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Đơn vị thực thi cơ bản gồm PC, thanh ghi và stack riêng, chia sẻ mã/dữ liệu với luồng cùng tiến trình.

**Giải thích:** Luồng: Đơn vị thực thi cơ bản gồm PC, thanh ghi và stack riêng, chia sẻ mã/dữ liệu với luồng cùng tiến trình. Thread nhẹ hơn tiến trình.

</details>

### Câu 071. Trong môn Nguyên lý HĐH, Mô hình nhiều-một được hiểu đúng nhất là gì?

A. Nhiều luồng người dùng ánh xạ vào một luồng nhân.
B. Kỹ thuật tăng dần ưu tiên tiến trình chờ lâu để giảm starvation.
C. Tổng thời gian tiến trình chờ trong ready queue.
D. Phiên bản độc quyền của SJF, chọn tiến trình có thời gian còn lại ngắn nhất.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Nhiều luồng người dùng ánh xạ vào một luồng nhân.

**Giải thích:** Mô hình nhiều-một: Nhiều luồng người dùng ánh xạ vào một luồng nhân. Đơn giản nhưng khó khai thác đa xử lý.

</details>

### Câu 072. Trong môn Nguyên lý HĐH, Mô hình một-một được hiểu đúng nhất là gì?

A. Mô hình IPC trong đó các tiến trình chia sẻ một vùng nhớ và tự đồng bộ truy cập.
B. Điều phối dựa trên độ ưu tiên của tiến trình.
C. Mỗi luồng người dùng ánh xạ vào một luồng nhân.
D. Kỹ thuật tăng dần ưu tiên tiến trình chờ lâu để giảm starvation.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Mỗi luồng người dùng ánh xạ vào một luồng nhân.

**Giải thích:** Mô hình một-một: Mỗi luồng người dùng ánh xạ vào một luồng nhân. Khai thác đa xử lý tốt hơn nhưng tốn chi phí kernel thread.

</details>

### Câu 073. Trong môn Nguyên lý HĐH, Mô hình nhiều-nhiều được hiểu đúng nhất là gì?

A. Nhiều luồng người dùng được ghép lên nhiều luồng nhân.
B. Mô hình IPC dùng send/receive để trao đổi mà không cần biến dùng chung trực tiếp.
C. Thao tác hoàn thành hoặc hủy tiến trình, trả tài nguyên về hệ thống.
D. Kỹ thuật tăng dần ưu tiên tiến trình chờ lâu để giảm starvation.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Nhiều luồng người dùng được ghép lên nhiều luồng nhân.

**Giải thích:** Mô hình nhiều-nhiều: Nhiều luồng người dùng được ghép lên nhiều luồng nhân. Kết hợp tính linh hoạt và khả năng song song.

</details>

### Câu 074. Trong môn Nguyên lý HĐH, CPU utilization được hiểu đúng nhất là gì?

A. Thực thể thụ động lưu trên đĩa, gồm mã lệnh và dữ liệu; khi chạy mới trở thành tiến trình.
B. Kiểu message passing qua mailbox hoặc port.
C. Kiểu message passing gọi tên tường minh tiến trình gửi/nhận.
D. Tỷ lệ thời gian CPU bận làm việc.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Tỷ lệ thời gian CPU bận làm việc.

**Giải thích:** CPU utilization: Tỷ lệ thời gian CPU bận làm việc. Mục tiêu thường là càng cao càng tốt.

</details>

### Câu 075. Trong môn Nguyên lý HĐH, Throughput được hiểu đúng nhất là gì?

A. Bộ điều phối trung hạn đưa tiến trình ra/vào bộ nhớ bằng swapping.
B. Số tiến trình hoàn thành trong một đơn vị thời gian.
C. Chọn tiến trình sẵn sàng có CPU burst ngắn nhất.
D. Kỹ thuật tăng dần ưu tiên tiến trình chờ lâu để giảm starvation.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Số tiến trình hoàn thành trong một đơn vị thời gian.

**Giải thích:** Throughput: Số tiến trình hoàn thành trong một đơn vị thời gian. Đo năng suất hệ thống.

</details>

### Câu 076. Trong môn Nguyên lý HĐH, Turnaround time được hiểu đúng nhất là gì?

A. Thời gian từ khi tiến trình đến hệ thống đến khi hoàn thành.
B. Bộ điều phối dài hạn chọn job từ hàng đợi vào để đưa vào bộ nhớ.
C. Thao tác gửi làm tiến trình gửi chờ cho đến khi thông điệp được nhận hoặc chấp nhận.
D. Tiến trình chỉ có một luồng thực thi.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Thời gian từ khi tiến trình đến hệ thống đến khi hoàn thành.

**Giải thích:** Turnaround time: Thời gian từ khi tiến trình đến hệ thống đến khi hoàn thành. Turnaround = completion - arrival.

</details>

### Câu 077. Trong môn Nguyên lý HĐH, Waiting time được hiểu đúng nhất là gì?

A. Mô hình IPC trong đó các tiến trình chia sẻ một vùng nhớ và tự đồng bộ truy cập.
B. Thao tác gửi làm tiến trình gửi chờ cho đến khi thông điệp được nhận hoặc chấp nhận.
C. Tổng thời gian tiến trình chờ trong ready queue.
D. Mỗi luồng người dùng ánh xạ vào một luồng nhân.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Tổng thời gian tiến trình chờ trong ready queue.

**Giải thích:** Waiting time: Tổng thời gian tiến trình chờ trong ready queue. Không tính thời gian chạy trên CPU.

</details>

### Câu 078. Trong môn Nguyên lý HĐH, Response time được hiểu đúng nhất là gì?

A. Thao tác hoàn thành hoặc hủy tiến trình, trả tài nguyên về hệ thống.
B. Hàng đợi các tiến trình đang chờ một thiết bị vào ra cụ thể.
C. Điều phối quay vòng với lượng tử thời gian cố định.
D. Thời gian từ khi yêu cầu đến khi có phản hồi đầu tiên.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Thời gian từ khi yêu cầu đến khi có phản hồi đầu tiên.

**Giải thích:** Response time: Thời gian từ khi yêu cầu đến khi có phản hồi đầu tiên. Quan trọng với hệ tương tác.

</details>

### Câu 079. Trong môn Nguyên lý HĐH, FCFS được hiểu đúng nhất là gì?

A. Đơn vị thực thi cơ bản gồm PC, thanh ghi và stack riêng, chia sẻ mã/dữ liệu với luồng cùng tiến trình.
B. Thao tác hệ thống tạo tiến trình con, ví dụ fork() hoặc CreateProcess().
C. Tổng thời gian tiến trình chờ trong ready queue.
D. Điều phối tiến trình theo thứ tự đến trước phục vụ trước.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Điều phối tiến trình theo thứ tự đến trước phục vụ trước.

**Giải thích:** FCFS: Điều phối tiến trình theo thứ tự đến trước phục vụ trước. Đơn giản nhưng có thể gây convoy effect.

</details>

### Câu 080. Trong môn Nguyên lý HĐH, SJF được hiểu đúng nhất là gì?

A. Chọn tiến trình sẵn sàng có CPU burst ngắn nhất.
B. Trạng thái tiến trình đã đủ tài nguyên trừ CPU và đang chờ được điều phối.
C. Mô hình IPC dùng send/receive để trao đổi mà không cần biến dùng chung trực tiếp.
D. Trạng thái tiến trình đang chờ sự kiện như hoàn thành I/O hoặc tín hiệu đồng bộ.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Chọn tiến trình sẵn sàng có CPU burst ngắn nhất.

**Giải thích:** SJF: Chọn tiến trình sẵn sàng có CPU burst ngắn nhất. Tối ưu waiting trung bình nếu biết trước burst.

</details>

### Câu 081. Trong môn Nguyên lý HĐH, SRTF được hiểu đúng nhất là gì?

A. Khối điều khiển tiến trình lưu trạng thái, PC, thanh ghi, thông tin điều phối, bộ nhớ, file mở và thống kê.
B. Phiên bản độc quyền của SJF, chọn tiến trình có thời gian còn lại ngắn nhất.
C. Trạng thái tiến trình đã hoàn thành hoặc bị kết thúc và tài nguyên sẽ được thu hồi.
D. Đơn vị thực thi cơ bản gồm PC, thanh ghi và stack riêng, chia sẻ mã/dữ liệu với luồng cùng tiến trình.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Phiên bản độc quyền của SJF, chọn tiến trình có thời gian còn lại ngắn nhất.

**Giải thích:** SRTF: Phiên bản độc quyền của SJF, chọn tiến trình có thời gian còn lại ngắn nhất. Có thể preempt tiến trình đang chạy.

</details>

### Câu 082. Trong môn Nguyên lý HĐH, Round Robin được hiểu đúng nhất là gì?

A. Receive trả về ngay, hoặc thông điệp hợp lệ, hoặc giá trị rỗng/null.
B. Số tiến trình hoàn thành trong một đơn vị thời gian.
C. Điều phối quay vòng với lượng tử thời gian cố định.
D. Kiểu message passing gọi tên tường minh tiến trình gửi/nhận.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Điều phối quay vòng với lượng tử thời gian cố định.

**Giải thích:** Round Robin: Điều phối quay vòng với lượng tử thời gian cố định. Phù hợp hệ chia sẻ thời gian.

</details>

### Câu 083. Trong môn Nguyên lý HĐH, Priority scheduling được hiểu đúng nhất là gì?

A. Trạng thái tiến trình đang được khởi tạo.
B. Điều phối dựa trên độ ưu tiên của tiến trình.
C. Thao tác hệ thống tạo tiến trình con, ví dụ fork() hoặc CreateProcess().
D. Trạng thái các lệnh của tiến trình đang được CPU thực hiện.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Điều phối dựa trên độ ưu tiên của tiến trình.

**Giải thích:** Priority scheduling: Điều phối dựa trên độ ưu tiên của tiến trình. Có thể gây starvation nếu không aging.

</details>

### Câu 084. Trong môn Nguyên lý HĐH, Aging được hiểu đúng nhất là gì?

A. Tiến trình chỉ có một luồng thực thi.
B. Kiểu message passing gọi tên tường minh tiến trình gửi/nhận.
C. Kỹ thuật tăng dần ưu tiên tiến trình chờ lâu để giảm starvation.
D. Hàng đợi các tiến trình đang chờ một thiết bị vào ra cụ thể.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Kỹ thuật tăng dần ưu tiên tiến trình chờ lâu để giảm starvation.

**Giải thích:** Aging: Kỹ thuật tăng dần ưu tiên tiến trình chờ lâu để giảm starvation. Thường dùng với priority scheduling.

</details>

### Câu 085. Trong môn Nguyên lý HĐH, Bộ nhớ dùng chung được hiểu đúng nhất là gì?

A. Mô hình IPC trong đó các tiến trình chia sẻ một vùng nhớ và tự đồng bộ truy cập.
B. Kỹ thuật tăng dần ưu tiên tiến trình chờ lâu để giảm starvation.
C. Thời gian từ khi yêu cầu đến khi có phản hồi đầu tiên.
D. Một chương trình đang được thực hiện và có trạng thái, tài nguyên, bộ đếm lệnh.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Mô hình IPC trong đó các tiến trình chia sẻ một vùng nhớ và tự đồng bộ truy cập.

**Giải thích:** Bộ nhớ dùng chung: Mô hình IPC trong đó các tiến trình chia sẻ một vùng nhớ và tự đồng bộ truy cập. Nhanh nhưng dễ race condition.

</details>

### Câu 086. Trong môn Nguyên lý HĐH, Truyền thông điệp được hiểu đúng nhất là gì?

A. Trạng thái các lệnh của tiến trình đang được CPU thực hiện.
B. Mô hình IPC dùng send/receive để trao đổi mà không cần biến dùng chung trực tiếp.
C. Điều phối dựa trên độ ưu tiên của tiến trình.
D. Tiến trình chỉ có một luồng thực thi.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Mô hình IPC dùng send/receive để trao đổi mà không cần biến dùng chung trực tiếp.

**Giải thích:** Truyền thông điệp: Mô hình IPC dùng send/receive để trao đổi mà không cần biến dùng chung trực tiếp. Phù hợp hệ phân tán.

</details>

### Câu 087. Trong môn Nguyên lý HĐH, Truyền thông trực tiếp được hiểu đúng nhất là gì?

A. Thực thể thụ động lưu trên đĩa, gồm mã lệnh và dữ liệu; khi chạy mới trở thành tiến trình.
B. Thao tác lưu ngữ cảnh tiến trình cũ và khôi phục ngữ cảnh tiến trình mới khi chuyển CPU.
C. Kiểu message passing gọi tên tường minh tiến trình gửi/nhận.
D. Kiểu message passing qua mailbox hoặc port.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Kiểu message passing gọi tên tường minh tiến trình gửi/nhận.

**Giải thích:** Truyền thông trực tiếp: Kiểu message passing gọi tên tường minh tiến trình gửi/nhận. Ví dụ send(P,msg).

</details>

### Câu 088. Trong môn Nguyên lý HĐH, Truyền thông gián tiếp được hiểu đúng nhất là gì?

A. Số tiến trình hoàn thành trong một đơn vị thời gian.
B. Mô hình IPC dùng send/receive để trao đổi mà không cần biến dùng chung trực tiếp.
C. Kiểu message passing gọi tên tường minh tiến trình gửi/nhận.
D. Kiểu message passing qua mailbox hoặc port.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Kiểu message passing qua mailbox hoặc port.

**Giải thích:** Truyền thông gián tiếp: Kiểu message passing qua mailbox hoặc port. Liên kết tồn tại khi tiến trình dùng chung mailbox.

</details>

### Câu 089. Trong môn Nguyên lý HĐH, Blocking send được hiểu đúng nhất là gì?

A. Thao tác gửi làm tiến trình gửi chờ cho đến khi thông điệp được nhận hoặc chấp nhận.
B. Bộ điều phối ngắn hạn chọn một tiến trình sẵn sàng để cấp CPU.
C. Điều phối tiến trình theo thứ tự đến trước phục vụ trước.
D. Receive trả về ngay, hoặc thông điệp hợp lệ, hoặc giá trị rỗng/null.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Thao tác gửi làm tiến trình gửi chờ cho đến khi thông điệp được nhận hoặc chấp nhận.

**Giải thích:** Blocking send: Thao tác gửi làm tiến trình gửi chờ cho đến khi thông điệp được nhận hoặc chấp nhận. Là truyền thông đồng bộ.

</details>

### Câu 090. Trong môn Nguyên lý HĐH, Non-blocking receive được hiểu đúng nhất là gì?

A. Điều phối quay vòng với lượng tử thời gian cố định.
B. Hàng đợi các tiến trình đang chờ một thiết bị vào ra cụ thể.
C. Trạng thái tiến trình đã hoàn thành hoặc bị kết thúc và tài nguyên sẽ được thu hồi.
D. Receive trả về ngay, hoặc thông điệp hợp lệ, hoặc giá trị rỗng/null.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Receive trả về ngay, hoặc thông điệp hợp lệ, hoặc giá trị rỗng/null.

**Giải thích:** Non-blocking receive: Receive trả về ngay, hoặc thông điệp hợp lệ, hoặc giá trị rỗng/null. Là truyền thông không đồng bộ.

</details>

### Câu 091. Phát biểu nào mô tả đúng nhất về Tiến trình?

A. Trạng thái tiến trình đang được khởi tạo.
B. Phiên bản độc quyền của SJF, chọn tiến trình có thời gian còn lại ngắn nhất.
C. Một chương trình đang được thực hiện và có trạng thái, tài nguyên, bộ đếm lệnh.
D. Điều phối quay vòng với lượng tử thời gian cố định.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Một chương trình đang được thực hiện và có trạng thái, tài nguyên, bộ đếm lệnh.

**Giải thích:** Khái niệm Tiến trình trong slide/đề ôn tập gắn với ý: Một chương trình đang được thực hiện và có trạng thái, tài nguyên, bộ đếm lệnh. Process là thực thể chủ động.

</details>

### Câu 092. Phát biểu nào mô tả đúng nhất về Chương trình?

A. Thực thể thụ động lưu trên đĩa, gồm mã lệnh và dữ liệu; khi chạy mới trở thành tiến trình.
B. Thao tác gửi làm tiến trình gửi chờ cho đến khi thông điệp được nhận hoặc chấp nhận.
C. Thời gian từ khi yêu cầu đến khi có phản hồi đầu tiên.
D. Receive trả về ngay, hoặc thông điệp hợp lệ, hoặc giá trị rỗng/null.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Thực thể thụ động lưu trên đĩa, gồm mã lệnh và dữ liệu; khi chạy mới trở thành tiến trình.

**Giải thích:** Khái niệm Chương trình trong slide/đề ôn tập gắn với ý: Thực thể thụ động lưu trên đĩa, gồm mã lệnh và dữ liệu; khi chạy mới trở thành tiến trình. Một chương trình có thể sinh nhiều tiến trình.

</details>

### Câu 093. Phát biểu nào mô tả đúng nhất về PCB?

A. Tổng thời gian tiến trình chờ trong ready queue.
B. Khối điều khiển tiến trình lưu trạng thái, PC, thanh ghi, thông tin điều phối, bộ nhớ, file mở và thống kê.
C. Nhiều luồng người dùng được ghép lên nhiều luồng nhân.
D. Thao tác lưu ngữ cảnh tiến trình cũ và khôi phục ngữ cảnh tiến trình mới khi chuyển CPU.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Khối điều khiển tiến trình lưu trạng thái, PC, thanh ghi, thông tin điều phối, bộ nhớ, file mở và thống kê.

**Giải thích:** Khái niệm PCB trong slide/đề ôn tập gắn với ý: Khối điều khiển tiến trình lưu trạng thái, PC, thanh ghi, thông tin điều phối, bộ nhớ, file mở và thống kê. PCB cho phép HĐH quản lý duy nhất một tiến trình.

</details>

### Câu 094. Phát biểu nào mô tả đúng nhất về New?

A. Số tiến trình hoàn thành trong một đơn vị thời gian.
B. Trạng thái tiến trình đang được khởi tạo.
C. Đơn vị thực thi cơ bản gồm PC, thanh ghi và stack riêng, chia sẻ mã/dữ liệu với luồng cùng tiến trình.
D. Điều phối quay vòng với lượng tử thời gian cố định.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Trạng thái tiến trình đang được khởi tạo.

**Giải thích:** Khái niệm New trong slide/đề ôn tập gắn với ý: Trạng thái tiến trình đang được khởi tạo. Sau đó tiến trình có thể được admitted vào Ready.

</details>

### Câu 095. Phát biểu nào mô tả đúng nhất về Ready?

A. Kiểu message passing gọi tên tường minh tiến trình gửi/nhận.
B. Thao tác lưu ngữ cảnh tiến trình cũ và khôi phục ngữ cảnh tiến trình mới khi chuyển CPU.
C. Mô hình IPC dùng send/receive để trao đổi mà không cần biến dùng chung trực tiếp.
D. Trạng thái tiến trình đã đủ tài nguyên trừ CPU và đang chờ được điều phối.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Trạng thái tiến trình đã đủ tài nguyên trừ CPU và đang chờ được điều phối.

**Giải thích:** Khái niệm Ready trong slide/đề ôn tập gắn với ý: Trạng thái tiến trình đã đủ tài nguyên trừ CPU và đang chờ được điều phối. Ready queue chứa các tiến trình này.

</details>

### Câu 096. Phát biểu nào mô tả đúng nhất về Running?

A. Trạng thái các lệnh của tiến trình đang được CPU thực hiện.
B. Nhiều luồng người dùng được ghép lên nhiều luồng nhân.
C. Tiến trình có nhiều luồng thực thi trong cùng không gian địa chỉ.
D. Một chương trình đang được thực hiện và có trạng thái, tài nguyên, bộ đếm lệnh.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Trạng thái các lệnh của tiến trình đang được CPU thực hiện.

**Giải thích:** Khái niệm Running trong slide/đề ôn tập gắn với ý: Trạng thái các lệnh của tiến trình đang được CPU thực hiện. Hệ một CPU chỉ có tối đa một tiến trình running.

</details>

### Câu 097. Phát biểu nào mô tả đúng nhất về Waiting?

A. Trạng thái tiến trình đang chờ sự kiện như hoàn thành I/O hoặc tín hiệu đồng bộ.
B. Bộ điều phối dài hạn chọn job từ hàng đợi vào để đưa vào bộ nhớ.
C. Trạng thái tiến trình đang được khởi tạo.
D. Phiên bản độc quyền của SJF, chọn tiến trình có thời gian còn lại ngắn nhất.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Trạng thái tiến trình đang chờ sự kiện như hoàn thành I/O hoặc tín hiệu đồng bộ.

**Giải thích:** Khái niệm Waiting trong slide/đề ôn tập gắn với ý: Trạng thái tiến trình đang chờ sự kiện như hoàn thành I/O hoặc tín hiệu đồng bộ. Khi sự kiện xong, tiến trình về Ready.

</details>

### Câu 098. Phát biểu nào mô tả đúng nhất về Terminated?

A. Thao tác hệ thống tạo tiến trình con, ví dụ fork() hoặc CreateProcess().
B. Trạng thái các lệnh của tiến trình đang được CPU thực hiện.
C. Kỹ thuật tăng dần ưu tiên tiến trình chờ lâu để giảm starvation.
D. Trạng thái tiến trình đã hoàn thành hoặc bị kết thúc và tài nguyên sẽ được thu hồi.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Trạng thái tiến trình đã hoàn thành hoặc bị kết thúc và tài nguyên sẽ được thu hồi.

**Giải thích:** Khái niệm Terminated trong slide/đề ôn tập gắn với ý: Trạng thái tiến trình đã hoàn thành hoặc bị kết thúc và tài nguyên sẽ được thu hồi. PCB và tài nguyên được giải phóng.

</details>

### Câu 099. Phát biểu nào mô tả đúng nhất về Ready queue?

A. Hàng đợi các tiến trình trong bộ nhớ đang sẵn sàng và chờ CPU.
B. Kiểu message passing qua mailbox hoặc port.
C. Đơn vị thực thi cơ bản gồm PC, thanh ghi và stack riêng, chia sẻ mã/dữ liệu với luồng cùng tiến trình.
D. Trạng thái tiến trình đang được khởi tạo.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Hàng đợi các tiến trình trong bộ nhớ đang sẵn sàng và chờ CPU.

**Giải thích:** Khái niệm Ready queue trong slide/đề ôn tập gắn với ý: Hàng đợi các tiến trình trong bộ nhớ đang sẵn sàng và chờ CPU. CPU scheduler chọn từ hàng đợi này.

</details>

### Câu 100. Phát biểu nào mô tả đúng nhất về Device queue?

A. Hàng đợi các tiến trình đang chờ một thiết bị vào ra cụ thể.
B. Kỹ thuật tăng dần ưu tiên tiến trình chờ lâu để giảm starvation.
C. Thao tác hoàn thành hoặc hủy tiến trình, trả tài nguyên về hệ thống.
D. Kiểu message passing qua mailbox hoặc port.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Hàng đợi các tiến trình đang chờ một thiết bị vào ra cụ thể.

**Giải thích:** Khái niệm Device queue trong slide/đề ôn tập gắn với ý: Hàng đợi các tiến trình đang chờ một thiết bị vào ra cụ thể. Mỗi thiết bị có thể có queue riêng.

</details>

### Câu 101. Phát biểu nào mô tả đúng nhất về Job scheduler?

A. Bộ điều phối dài hạn chọn job từ hàng đợi vào để đưa vào bộ nhớ.
B. Trạng thái tiến trình đang được khởi tạo.
C. Chọn tiến trình sẵn sàng có CPU burst ngắn nhất.
D. Kiểu message passing qua mailbox hoặc port.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Bộ điều phối dài hạn chọn job từ hàng đợi vào để đưa vào bộ nhớ.

**Giải thích:** Khái niệm Job scheduler trong slide/đề ôn tập gắn với ý: Bộ điều phối dài hạn chọn job từ hàng đợi vào để đưa vào bộ nhớ. Nó điều khiển mức độ đa chương trình.

</details>

### Câu 102. Phát biểu nào mô tả đúng nhất về CPU scheduler?

A. Trạng thái các lệnh của tiến trình đang được CPU thực hiện.
B. Kiểu message passing gọi tên tường minh tiến trình gửi/nhận.
C. Bộ điều phối ngắn hạn chọn một tiến trình sẵn sàng để cấp CPU.
D. Trạng thái tiến trình đang được khởi tạo.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Bộ điều phối ngắn hạn chọn một tiến trình sẵn sàng để cấp CPU.

**Giải thích:** Khái niệm CPU scheduler trong slide/đề ôn tập gắn với ý: Bộ điều phối ngắn hạn chọn một tiến trình sẵn sàng để cấp CPU. Nó chạy rất thường xuyên nên phải nhanh.

</details>

### Câu 103. Phát biểu nào mô tả đúng nhất về Medium-term scheduler?

A. Thao tác gửi làm tiến trình gửi chờ cho đến khi thông điệp được nhận hoặc chấp nhận.
B. Nhiều luồng người dùng ánh xạ vào một luồng nhân.
C. Thời gian từ khi tiến trình đến hệ thống đến khi hoàn thành.
D. Bộ điều phối trung hạn đưa tiến trình ra/vào bộ nhớ bằng swapping.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Bộ điều phối trung hạn đưa tiến trình ra/vào bộ nhớ bằng swapping.

**Giải thích:** Khái niệm Medium-term scheduler trong slide/đề ôn tập gắn với ý: Bộ điều phối trung hạn đưa tiến trình ra/vào bộ nhớ bằng swapping. Mục tiêu là điều chỉnh tải và giải phóng bộ nhớ.

</details>

### Câu 104. Phát biểu nào mô tả đúng nhất về Context switch?

A. Bộ điều phối ngắn hạn chọn một tiến trình sẵn sàng để cấp CPU.
B. Chọn tiến trình sẵn sàng có CPU burst ngắn nhất.
C. Điều phối dựa trên độ ưu tiên của tiến trình.
D. Thao tác lưu ngữ cảnh tiến trình cũ và khôi phục ngữ cảnh tiến trình mới khi chuyển CPU.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Thao tác lưu ngữ cảnh tiến trình cũ và khôi phục ngữ cảnh tiến trình mới khi chuyển CPU.

**Giải thích:** Khái niệm Context switch trong slide/đề ôn tập gắn với ý: Thao tác lưu ngữ cảnh tiến trình cũ và khôi phục ngữ cảnh tiến trình mới khi chuyển CPU. Thời gian này là overhead.

</details>

### Câu 105. Phát biểu nào mô tả đúng nhất về Tạo tiến trình?

A. Thao tác hệ thống tạo tiến trình con, ví dụ fork() hoặc CreateProcess().
B. Bộ điều phối ngắn hạn chọn một tiến trình sẵn sàng để cấp CPU.
C. Mỗi luồng người dùng ánh xạ vào một luồng nhân.
D. Khối điều khiển tiến trình lưu trạng thái, PC, thanh ghi, thông tin điều phối, bộ nhớ, file mở và thống kê.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Thao tác hệ thống tạo tiến trình con, ví dụ fork() hoặc CreateProcess().

**Giải thích:** Khái niệm Tạo tiến trình trong slide/đề ôn tập gắn với ý: Thao tác hệ thống tạo tiến trình con, ví dụ fork() hoặc CreateProcess(). Tiến trình cha có thể tiếp tục chạy hoặc đợi con.

</details>


---

## Chương 3 - Tài nguyên găng, đồng bộ tiến trình và bế tắc

### Câu 106. Trong môn Nguyên lý HĐH, Tài nguyên găng được hiểu đúng nhất là gì?

A. Trạng thái không tìm được dãy an toàn, có thể dẫn tới bế tắc.
B. Đồ thị mô hình tiến trình, tài nguyên, cung yêu cầu và cung cấp phát.
C. Đoạn chương trình truy cập hoặc thao tác trên tài nguyên găng/dữ liệu dùng chung.
D. Tài nguyên có khả năng phục vụ đồng thời hạn chế và được nhiều tiến trình cần dùng.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Tài nguyên có khả năng phục vụ đồng thời hạn chế và được nhiều tiến trình cần dùng.

**Giải thích:** Tài nguyên găng: Tài nguyên có khả năng phục vụ đồng thời hạn chế và được nhiều tiến trình cần dùng. Có thể là thiết bị vật lý hoặc dữ liệu.

</details>

### Câu 107. Trong môn Nguyên lý HĐH, Race condition được hiểu đúng nhất là gì?

A. Tài nguyên đã cấp không bị thu hồi cưỡng bức mà chỉ được tiến trình tự trả.
B. Tình trạng kết quả phụ thuộc vào thứ tự xen kẽ truy cập dữ liệu dùng chung.
C. Trạng thái không tìm được dãy an toàn, có thể dẫn tới bế tắc.
D. Bài toán triết gia ăn tối minh họa bế tắc khi các tiến trình giữ một tài nguyên và chờ tài nguyên khác.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Tình trạng kết quả phụ thuộc vào thứ tự xen kẽ truy cập dữ liệu dùng chung.

**Giải thích:** Race condition: Tình trạng kết quả phụ thuộc vào thứ tự xen kẽ truy cập dữ liệu dùng chung. Cần đồng bộ để tránh.

</details>

### Câu 108. Trong môn Nguyên lý HĐH, Đoạn găng được hiểu đúng nhất là gì?

A. Đoạn chương trình truy cập hoặc thao tác trên tài nguyên găng/dữ liệu dùng chung.
B. Thao tác giải phóng tài nguyên trên semaphore và có thể đánh thức tiến trình chờ.
C. Yêu cầu không có hơn một tiến trình vào đoạn găng của cùng tài nguyên tại một thời điểm.
D. Tập tiến trình chờ vô hạn vì mỗi tiến trình giữ tài nguyên và chờ tài nguyên do tiến trình khác giữ.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Đoạn chương trình truy cập hoặc thao tác trên tài nguyên găng/dữ liệu dùng chung.

**Giải thích:** Đoạn găng: Đoạn chương trình truy cập hoặc thao tác trên tài nguyên găng/dữ liệu dùng chung. Mục tiêu là không quá khả năng phục vụ.

</details>

### Câu 109. Trong môn Nguyên lý HĐH, Mutual exclusion được hiểu đúng nhất là gì?

A. Bài toán đồng bộ giữa tiến trình sản xuất và tiêu thụ qua buffer dùng chung.
B. Yêu cầu không có hơn một tiến trình vào đoạn găng của cùng tài nguyên tại một thời điểm.
C. Cung nét đứt biểu diễn tiến trình có thể yêu cầu tài nguyên trong tương lai.
D. Yêu cầu thời gian/số lượt chờ trước khi vào đoạn găng là hữu hạn.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Yêu cầu không có hơn một tiến trình vào đoạn găng của cùng tài nguyên tại một thời điểm.

**Giải thích:** Mutual exclusion: Yêu cầu không có hơn một tiến trình vào đoạn găng của cùng tài nguyên tại một thời điểm. Yêu cầu cơ bản của đồng bộ.

</details>

### Câu 110. Trong môn Nguyên lý HĐH, Progress được hiểu đúng nhất là gì?

A. Thao tác xin tài nguyên trên semaphore; nếu không có thì tiến trình phải chờ.
B. Yêu cầu nếu tài nguyên rỗi và có tiến trình muốn vào đoạn găng thì việc chọn không bị trì hoãn vô lý.
C. Primitive atomic trả giá trị cũ của biến khóa rồi đặt biến đó thành true.
D. Bốn điều kiện cần: mutual exclusion, hold-and-wait, no preemption, circular wait.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Yêu cầu nếu tài nguyên rỗi và có tiến trình muốn vào đoạn găng thì việc chọn không bị trì hoãn vô lý.

**Giải thích:** Progress: Yêu cầu nếu tài nguyên rỗi và có tiến trình muốn vào đoạn găng thì việc chọn không bị trì hoãn vô lý. Tránh tài nguyên rỗi nhưng không ai vào được.

</details>

### Câu 111. Trong môn Nguyên lý HĐH, Bounded waiting được hiểu đúng nhất là gì?

A. Primitive atomic trả giá trị cũ của biến khóa rồi đặt biến đó thành true.
B. Thuật toán tránh bế tắc dựa trên Max, Allocation, Need và Available để chỉ cấp phát nếu còn an toàn.
C. Yêu cầu thời gian/số lượt chờ trước khi vào đoạn găng là hữu hạn.
D. Chính sách bảo đảm ít nhất một điều kiện cần của bế tắc không thể xảy ra.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Yêu cầu thời gian/số lượt chờ trước khi vào đoạn găng là hữu hạn.

**Giải thích:** Bounded waiting: Yêu cầu thời gian/số lượt chờ trước khi vào đoạn găng là hữu hạn. Tránh starvation ở đoạn găng.

</details>

### Câu 112. Trong môn Nguyên lý HĐH, Phần vào được hiểu đúng nhất là gì?

A. Đoạn mã xin quyền trước khi vào đoạn găng.
B. Đoạn mã giải phóng quyền hoặc cập nhật trạng thái sau đoạn găng.
C. Chính sách bảo đảm ít nhất một điều kiện cần của bế tắc không thể xảy ra.
D. Thao tác xin tài nguyên trên semaphore; nếu không có thì tiến trình phải chờ.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Đoạn mã xin quyền trước khi vào đoạn găng.

**Giải thích:** Phần vào: Đoạn mã xin quyền trước khi vào đoạn găng. Entry section kiểm tra/giành quyền.

</details>

### Câu 113. Trong môn Nguyên lý HĐH, Phần ra được hiểu đúng nhất là gì?

A. Tình trạng kết quả phụ thuộc vào thứ tự xen kẽ truy cập dữ liệu dùng chung.
B. Đoạn mã giải phóng quyền hoặc cập nhật trạng thái sau đoạn găng.
C. Trạng thái chờ mà tiến trình vẫn lặp kiểm tra điều kiện và tiêu tốn CPU.
D. Cơ chế dừng tiến trình chờ và đánh thức nó để bỏ busy waiting.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Đoạn mã giải phóng quyền hoặc cập nhật trạng thái sau đoạn găng.

**Giải thích:** Phần ra: Đoạn mã giải phóng quyền hoặc cập nhật trạng thái sau đoạn găng. Exit section đánh thức/cấp quyền tiếp theo nếu cần.

</details>

### Câu 114. Trong môn Nguyên lý HĐH, Khóa trong được hiểu đúng nhất là gì?

A. Tập tiến trình chờ vô hạn vì mỗi tiến trình giữ tài nguyên và chờ tài nguyên do tiến trình khác giữ.
B. Phương pháp dùng biến khóa trong vùng nhớ chung để điều độ đoạn găng.
C. Tài nguyên đã cấp không bị thu hồi cưỡng bức mà chỉ được tiến trình tự trả.
D. Tiến trình giữ ít nhất một tài nguyên trong khi chờ thêm tài nguyên khác.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Phương pháp dùng biến khóa trong vùng nhớ chung để điều độ đoạn găng.

**Giải thích:** Khóa trong: Phương pháp dùng biến khóa trong vùng nhớ chung để điều độ đoạn găng. Đơn giản nhưng dễ sai nếu kiểm tra và đặt khóa tách rời.

</details>

### Câu 115. Trong môn Nguyên lý HĐH, Dekker được hiểu đúng nhất là gì?

A. Tiến trình giữ ít nhất một tài nguyên trong khi chờ thêm tài nguyên khác.
B. Trạng thái chờ mà tiến trình vẫn lặp kiểm tra điều kiện và tiêu tốn CPU.
C. Trạng thái không tìm được dãy an toàn, có thể dẫn tới bế tắc.
D. Thuật toán dùng cờ quan tâm và biến turn để giải quyết đoạn găng cho hai tiến trình.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Thuật toán dùng cờ quan tâm và biến turn để giải quyết đoạn găng cho hai tiến trình.

**Giải thích:** Dekker: Thuật toán dùng cờ quan tâm và biến turn để giải quyết đoạn găng cho hai tiến trình. Không cần lệnh phần cứng đặc biệt nhưng busy waiting.

</details>

### Câu 116. Trong môn Nguyên lý HĐH, Busy waiting được hiểu đúng nhất là gì?

A. Thao tác giải phóng tài nguyên trên semaphore và có thể đánh thức tiến trình chờ.
B. Trạng thái chờ mà tiến trình vẫn lặp kiểm tra điều kiện và tiêu tốn CPU.
C. Tiến trình giữ ít nhất một tài nguyên trong khi chờ thêm tài nguyên khác.
D. Công cụ đồng bộ cấp cao đóng gói dữ liệu chung và thủ tục, bảo đảm loại trừ lẫn nhau bên trong.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Trạng thái chờ mà tiến trình vẫn lặp kiểm tra điều kiện và tiêu tốn CPU.

**Giải thích:** Busy waiting: Trạng thái chờ mà tiến trình vẫn lặp kiểm tra điều kiện và tiêu tốn CPU. Lãng phí processor khi chờ lâu.

</details>

### Câu 117. Trong môn Nguyên lý HĐH, TestAndSet được hiểu đúng nhất là gì?

A. Tiến trình giữ ít nhất một tài nguyên trong khi chờ thêm tài nguyên khác.
B. Phương pháp dùng biến khóa trong vùng nhớ chung để điều độ đoạn găng.
C. Thuật toán tránh bế tắc dựa trên Max, Allocation, Need và Available để chỉ cấp phát nếu còn an toàn.
D. Primitive atomic trả giá trị cũ của biến khóa rồi đặt biến đó thành true.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Primitive atomic trả giá trị cũ của biến khóa rồi đặt biến đó thành true.

**Giải thích:** TestAndSet: Primitive atomic trả giá trị cũ của biến khóa rồi đặt biến đó thành true. Dùng xây dựng khóa mutual exclusion.

</details>

### Câu 118. Trong môn Nguyên lý HĐH, Swap atomic được hiểu đúng nhất là gì?

A. Cho phép bế tắc xảy ra, sau đó phát hiện và phục hồi bằng kết thúc tiến trình hoặc thu hồi tài nguyên.
B. Primitive atomic trả giá trị cũ của biến khóa rồi đặt biến đó thành true.
C. Thuật toán tránh bế tắc dựa trên Max, Allocation, Need và Available để chỉ cấp phát nếu còn an toàn.
D. Primitive hoán đổi không tách rời hai biến, có thể dùng để cài khóa.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Primitive hoán đổi không tách rời hai biến, có thể dùng để cài khóa.

**Giải thích:** Swap atomic: Primitive hoán đổi không tách rời hai biến, có thể dùng để cài khóa. Cần hỗ trợ phần cứng.

</details>

### Câu 119. Trong môn Nguyên lý HĐH, Semaphore được hiểu đúng nhất là gì?

A. Yêu cầu nếu tài nguyên rỗi và có tiến trình muốn vào đoạn găng thì việc chọn không bị trì hoãn vô lý.
B. Đoạn mã xin quyền trước khi vào đoạn găng.
C. Biến nguyên chỉ được thay đổi bởi wait/P và signal/V nguyên tử.
D. Cung nét đứt biểu diễn tiến trình có thể yêu cầu tài nguyên trong tương lai.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Biến nguyên chỉ được thay đổi bởi wait/P và signal/V nguyên tử.

**Giải thích:** Semaphore: Biến nguyên chỉ được thay đổi bởi wait/P và signal/V nguyên tử. Khởi tạo theo khả năng phục vụ của tài nguyên.

</details>

### Câu 120. Trong môn Nguyên lý HĐH, wait/P được hiểu đúng nhất là gì?

A. Thao tác xin tài nguyên trên semaphore; nếu không có thì tiến trình phải chờ.
B. Đồ thị mô hình tiến trình, tài nguyên, cung yêu cầu và cung cấp phát.
C. Thuật toán tránh bế tắc dựa trên Max, Allocation, Need và Available để chỉ cấp phát nếu còn an toàn.
D. Trạng thái tồn tại dãy an toàn để mọi tiến trình có thể hoàn thành.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Thao tác xin tài nguyên trên semaphore; nếu không có thì tiến trình phải chờ.

**Giải thích:** wait/P: Thao tác xin tài nguyên trên semaphore; nếu không có thì tiến trình phải chờ. Có thể cài bằng busy waiting hoặc block.

</details>

### Câu 121. Trong môn Nguyên lý HĐH, signal/V được hiểu đúng nhất là gì?

A. Tồn tại vòng tiến trình-tài nguyên chờ nhau.
B. Chỉ chấp nhận cấp phát nếu trạng thái sau cấp phát vẫn an toàn.
C. Thao tác xin tài nguyên trên semaphore; nếu không có thì tiến trình phải chờ.
D. Thao tác giải phóng tài nguyên trên semaphore và có thể đánh thức tiến trình chờ.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Thao tác giải phóng tài nguyên trên semaphore và có thể đánh thức tiến trình chờ.

**Giải thích:** signal/V: Thao tác giải phóng tài nguyên trên semaphore và có thể đánh thức tiến trình chờ. Tăng khả năng phục vụ logic.

</details>

### Câu 122. Trong môn Nguyên lý HĐH, block/wakeup được hiểu đúng nhất là gì?

A. Cơ chế dừng tiến trình chờ và đánh thức nó để bỏ busy waiting.
B. Primitive atomic trả giá trị cũ của biến khóa rồi đặt biến đó thành true.
C. Cho phép bế tắc xảy ra, sau đó phát hiện và phục hồi bằng kết thúc tiến trình hoặc thu hồi tài nguyên.
D. Thuật toán dùng cờ quan tâm và biến turn để giải quyết đoạn găng cho hai tiến trình.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Cơ chế dừng tiến trình chờ và đánh thức nó để bỏ busy waiting.

**Giải thích:** block/wakeup: Cơ chế dừng tiến trình chờ và đánh thức nó để bỏ busy waiting. Block đưa tiến trình vào waiting queue.

</details>

### Câu 123. Trong môn Nguyên lý HĐH, Mutex semaphore được hiểu đúng nhất là gì?

A. Semaphore nhị phân thường khởi tạo 1 để bảo vệ đoạn găng một tài nguyên đơn.
B. Primitive hoán đổi không tách rời hai biến, có thể dùng để cài khóa.
C. Chính sách bảo đảm ít nhất một điều kiện cần của bế tắc không thể xảy ra.
D. Thao tác xin tài nguyên trên semaphore; nếu không có thì tiến trình phải chờ.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Semaphore nhị phân thường khởi tạo 1 để bảo vệ đoạn găng một tài nguyên đơn.

**Giải thích:** Mutex semaphore: Semaphore nhị phân thường khởi tạo 1 để bảo vệ đoạn găng một tài nguyên đơn. wait trước đoạn găng, signal sau đoạn găng.

</details>

### Câu 124. Trong môn Nguyên lý HĐH, Semaphore đếm được hiểu đúng nhất là gì?

A. Bốn điều kiện cần: mutual exclusion, hold-and-wait, no preemption, circular wait.
B. Semaphore có giá trị biểu diễn nhiều đơn vị tài nguyên sẵn có.
C. Công cụ đồng bộ cấp cao đóng gói dữ liệu chung và thủ tục, bảo đảm loại trừ lẫn nhau bên trong.
D. Biến điều kiện trong monitor cho phép wait/signal theo điều kiện logic.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Semaphore có giá trị biểu diễn nhiều đơn vị tài nguyên sẵn có.

**Giải thích:** Semaphore đếm: Semaphore có giá trị biểu diễn nhiều đơn vị tài nguyên sẵn có. Ví dụ nhiều máy in hoặc nhiều ô trống buffer.

</details>

### Câu 125. Trong môn Nguyên lý HĐH, Monitor được hiểu đúng nhất là gì?

A. Công cụ đồng bộ cấp cao đóng gói dữ liệu chung và thủ tục, bảo đảm loại trừ lẫn nhau bên trong.
B. Primitive atomic trả giá trị cũ của biến khóa rồi đặt biến đó thành true.
C. Bốn điều kiện cần: mutual exclusion, hold-and-wait, no preemption, circular wait.
D. Cung nét đứt biểu diễn tiến trình có thể yêu cầu tài nguyên trong tương lai.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Công cụ đồng bộ cấp cao đóng gói dữ liệu chung và thủ tục, bảo đảm loại trừ lẫn nhau bên trong.

**Giải thích:** Monitor: Công cụ đồng bộ cấp cao đóng gói dữ liệu chung và thủ tục, bảo đảm loại trừ lẫn nhau bên trong. Dễ lập trình hơn semaphore thô.

</details>

### Câu 126. Trong môn Nguyên lý HĐH, Condition variable được hiểu đúng nhất là gì?

A. Cung nét đứt biểu diễn tiến trình có thể yêu cầu tài nguyên trong tương lai.
B. Biến điều kiện trong monitor cho phép wait/signal theo điều kiện logic.
C. Tiến trình giữ ít nhất một tài nguyên trong khi chờ thêm tài nguyên khác.
D. Yêu cầu không có hơn một tiến trình vào đoạn găng của cùng tài nguyên tại một thời điểm.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Biến điều kiện trong monitor cho phép wait/signal theo điều kiện logic.

**Giải thích:** Condition variable: Biến điều kiện trong monitor cho phép wait/signal theo điều kiện logic. Dùng khi tiến trình phải chờ điều kiện.

</details>

### Câu 127. Trong môn Nguyên lý HĐH, Producer-consumer được hiểu đúng nhất là gì?

A. Chính sách bảo đảm ít nhất một điều kiện cần của bế tắc không thể xảy ra.
B. Semaphore có giá trị biểu diễn nhiều đơn vị tài nguyên sẵn có.
C. Bài toán đồng bộ giữa tiến trình sản xuất và tiêu thụ qua buffer dùng chung.
D. Phương pháp dùng biến khóa trong vùng nhớ chung để điều độ đoạn găng.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Bài toán đồng bộ giữa tiến trình sản xuất và tiêu thụ qua buffer dùng chung.

**Giải thích:** Producer-consumer: Bài toán đồng bộ giữa tiến trình sản xuất và tiêu thụ qua buffer dùng chung. Cần mutex, empty, full.

</details>

### Câu 128. Trong môn Nguyên lý HĐH, Dining philosophers được hiểu đúng nhất là gì?

A. Bài toán triết gia ăn tối minh họa bế tắc khi các tiến trình giữ một tài nguyên và chờ tài nguyên khác.
B. Đoạn chương trình truy cập hoặc thao tác trên tài nguyên găng/dữ liệu dùng chung.
C. Đoạn mã xin quyền trước khi vào đoạn găng.
D. Thuật toán tránh bế tắc dựa trên Max, Allocation, Need và Available để chỉ cấp phát nếu còn an toàn.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Bài toán triết gia ăn tối minh họa bế tắc khi các tiến trình giữ một tài nguyên và chờ tài nguyên khác.

**Giải thích:** Dining philosophers: Bài toán triết gia ăn tối minh họa bế tắc khi các tiến trình giữ một tài nguyên và chờ tài nguyên khác. Giải bằng phá vỡ chờ vòng tròn hoặc giới hạn cạnh tranh.

</details>

### Câu 129. Trong môn Nguyên lý HĐH, Bế tắc được hiểu đúng nhất là gì?

A. Tập tiến trình chờ vô hạn vì mỗi tiến trình giữ tài nguyên và chờ tài nguyên do tiến trình khác giữ.
B. Thao tác xin tài nguyên trên semaphore; nếu không có thì tiến trình phải chờ.
C. Đồ thị mô hình tiến trình, tài nguyên, cung yêu cầu và cung cấp phát.
D. Cho phép bế tắc xảy ra, sau đó phát hiện và phục hồi bằng kết thúc tiến trình hoặc thu hồi tài nguyên.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Tập tiến trình chờ vô hạn vì mỗi tiến trình giữ tài nguyên và chờ tài nguyên do tiến trình khác giữ.

**Giải thích:** Bế tắc: Tập tiến trình chờ vô hạn vì mỗi tiến trình giữ tài nguyên và chờ tài nguyên do tiến trình khác giữ. Deadlock cần xử lý bằng prevention, avoidance, detection/recovery.

</details>

### Câu 130. Trong môn Nguyên lý HĐH, Điều kiện bế tắc được hiểu đúng nhất là gì?

A. Bốn điều kiện cần: mutual exclusion, hold-and-wait, no preemption, circular wait.
B. Tiến trình giữ ít nhất một tài nguyên trong khi chờ thêm tài nguyên khác.
C. Biến điều kiện trong monitor cho phép wait/signal theo điều kiện logic.
D. Primitive atomic trả giá trị cũ của biến khóa rồi đặt biến đó thành true.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Bốn điều kiện cần: mutual exclusion, hold-and-wait, no preemption, circular wait.

**Giải thích:** Điều kiện bế tắc: Bốn điều kiện cần: mutual exclusion, hold-and-wait, no preemption, circular wait. Phá một điều kiện có thể phòng ngừa.

</details>

### Câu 131. Trong môn Nguyên lý HĐH, Hold and wait được hiểu đúng nhất là gì?

A. Semaphore nhị phân thường khởi tạo 1 để bảo vệ đoạn găng một tài nguyên đơn.
B. Cho phép bế tắc xảy ra, sau đó phát hiện và phục hồi bằng kết thúc tiến trình hoặc thu hồi tài nguyên.
C. Tiến trình giữ ít nhất một tài nguyên trong khi chờ thêm tài nguyên khác.
D. Trạng thái tồn tại dãy an toàn để mọi tiến trình có thể hoàn thành.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Tiến trình giữ ít nhất một tài nguyên trong khi chờ thêm tài nguyên khác.

**Giải thích:** Hold and wait: Tiến trình giữ ít nhất một tài nguyên trong khi chờ thêm tài nguyên khác. Một điều kiện cần của deadlock.

</details>

### Câu 132. Trong môn Nguyên lý HĐH, No preemption được hiểu đúng nhất là gì?

A. Tài nguyên đã cấp không bị thu hồi cưỡng bức mà chỉ được tiến trình tự trả.
B. Công cụ đồng bộ cấp cao đóng gói dữ liệu chung và thủ tục, bảo đảm loại trừ lẫn nhau bên trong.
C. Đoạn chương trình truy cập hoặc thao tác trên tài nguyên găng/dữ liệu dùng chung.
D. Cho phép bế tắc xảy ra, sau đó phát hiện và phục hồi bằng kết thúc tiến trình hoặc thu hồi tài nguyên.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Tài nguyên đã cấp không bị thu hồi cưỡng bức mà chỉ được tiến trình tự trả.

**Giải thích:** No preemption: Tài nguyên đã cấp không bị thu hồi cưỡng bức mà chỉ được tiến trình tự trả. Nếu thu hồi được an toàn có thể phá bế tắc.

</details>

### Câu 133. Trong môn Nguyên lý HĐH, Circular wait được hiểu đúng nhất là gì?

A. Đoạn chương trình truy cập hoặc thao tác trên tài nguyên găng/dữ liệu dùng chung.
B. Tồn tại vòng tiến trình-tài nguyên chờ nhau.
C. Bài toán đồng bộ giữa tiến trình sản xuất và tiêu thụ qua buffer dùng chung.
D. Phương pháp dùng biến khóa trong vùng nhớ chung để điều độ đoạn găng.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Tồn tại vòng tiến trình-tài nguyên chờ nhau.

**Giải thích:** Circular wait: Tồn tại vòng tiến trình-tài nguyên chờ nhau. Điều kiện cần của deadlock.

</details>

### Câu 134. Trong môn Nguyên lý HĐH, Resource allocation graph được hiểu đúng nhất là gì?

A. Đồ thị mô hình tiến trình, tài nguyên, cung yêu cầu và cung cấp phát.
B. Phương pháp dùng biến khóa trong vùng nhớ chung để điều độ đoạn găng.
C. Trạng thái tồn tại dãy an toàn để mọi tiến trình có thể hoàn thành.
D. Đoạn chương trình truy cập hoặc thao tác trên tài nguyên găng/dữ liệu dùng chung.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Đồ thị mô hình tiến trình, tài nguyên, cung yêu cầu và cung cấp phát.

**Giải thích:** Resource allocation graph: Đồ thị mô hình tiến trình, tài nguyên, cung yêu cầu và cung cấp phát. Chu trình có ý nghĩa quan trọng.

</details>

### Câu 135. Trong môn Nguyên lý HĐH, Claim edge được hiểu đúng nhất là gì?

A. Đoạn chương trình truy cập hoặc thao tác trên tài nguyên găng/dữ liệu dùng chung.
B. Semaphore nhị phân thường khởi tạo 1 để bảo vệ đoạn găng một tài nguyên đơn.
C. Cung nét đứt biểu diễn tiến trình có thể yêu cầu tài nguyên trong tương lai.
D. Trạng thái chờ mà tiến trình vẫn lặp kiểm tra điều kiện và tiêu tốn CPU.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Cung nét đứt biểu diễn tiến trình có thể yêu cầu tài nguyên trong tương lai.

**Giải thích:** Claim edge: Cung nét đứt biểu diễn tiến trình có thể yêu cầu tài nguyên trong tương lai. Dùng trong tránh bế tắc với single instance.

</details>

### Câu 136. Trong môn Nguyên lý HĐH, Trạng thái an toàn được hiểu đúng nhất là gì?

A. Thuật toán dùng cờ quan tâm và biến turn để giải quyết đoạn găng cho hai tiến trình.
B. Cho phép bế tắc xảy ra, sau đó phát hiện và phục hồi bằng kết thúc tiến trình hoặc thu hồi tài nguyên.
C. Trạng thái tồn tại dãy an toàn để mọi tiến trình có thể hoàn thành.
D. Cung nét đứt biểu diễn tiến trình có thể yêu cầu tài nguyên trong tương lai.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Trạng thái tồn tại dãy an toàn để mọi tiến trình có thể hoàn thành.

**Giải thích:** Trạng thái an toàn: Trạng thái tồn tại dãy an toàn để mọi tiến trình có thể hoàn thành. Safe không dẫn tới deadlock nếu cấp phát theo dãy.

</details>

### Câu 137. Trong môn Nguyên lý HĐH, Trạng thái không an toàn được hiểu đúng nhất là gì?

A. Semaphore có giá trị biểu diễn nhiều đơn vị tài nguyên sẵn có.
B. Yêu cầu không có hơn một tiến trình vào đoạn găng của cùng tài nguyên tại một thời điểm.
C. Đoạn mã xin quyền trước khi vào đoạn găng.
D. Trạng thái không tìm được dãy an toàn, có thể dẫn tới bế tắc.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Trạng thái không tìm được dãy an toàn, có thể dẫn tới bế tắc.

**Giải thích:** Trạng thái không an toàn: Trạng thái không tìm được dãy an toàn, có thể dẫn tới bế tắc. Unsafe chưa chắc đã deadlock ngay.

</details>

### Câu 138. Trong môn Nguyên lý HĐH, Banker's algorithm được hiểu đúng nhất là gì?

A. Yêu cầu nếu tài nguyên rỗi và có tiến trình muốn vào đoạn găng thì việc chọn không bị trì hoãn vô lý.
B. Chính sách bảo đảm ít nhất một điều kiện cần của bế tắc không thể xảy ra.
C. Yêu cầu không có hơn một tiến trình vào đoạn găng của cùng tài nguyên tại một thời điểm.
D. Thuật toán tránh bế tắc dựa trên Max, Allocation, Need và Available để chỉ cấp phát nếu còn an toàn.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Thuật toán tránh bế tắc dựa trên Max, Allocation, Need và Available để chỉ cấp phát nếu còn an toàn.

**Giải thích:** Banker's algorithm: Thuật toán tránh bế tắc dựa trên Max, Allocation, Need và Available để chỉ cấp phát nếu còn an toàn. Thuộc lớp dự báo và tránh.

</details>

### Câu 139. Trong môn Nguyên lý HĐH, Phòng ngừa bế tắc được hiểu đúng nhất là gì?

A. Chính sách bảo đảm ít nhất một điều kiện cần của bế tắc không thể xảy ra.
B. Đoạn chương trình truy cập hoặc thao tác trên tài nguyên găng/dữ liệu dùng chung.
C. Công cụ đồng bộ cấp cao đóng gói dữ liệu chung và thủ tục, bảo đảm loại trừ lẫn nhau bên trong.
D. Yêu cầu không có hơn một tiến trình vào đoạn găng của cùng tài nguyên tại một thời điểm.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Chính sách bảo đảm ít nhất một điều kiện cần của bế tắc không thể xảy ra.

**Giải thích:** Phòng ngừa bế tắc: Chính sách bảo đảm ít nhất một điều kiện cần của bế tắc không thể xảy ra. Ví dụ đánh số tài nguyên để phá circular wait.

</details>

### Câu 140. Trong môn Nguyên lý HĐH, Tránh bế tắc được hiểu đúng nhất là gì?

A. Biến điều kiện trong monitor cho phép wait/signal theo điều kiện logic.
B. Đoạn chương trình truy cập hoặc thao tác trên tài nguyên găng/dữ liệu dùng chung.
C. Biến nguyên chỉ được thay đổi bởi wait/P và signal/V nguyên tử.
D. Chỉ chấp nhận cấp phát nếu trạng thái sau cấp phát vẫn an toàn.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Chỉ chấp nhận cấp phát nếu trạng thái sau cấp phát vẫn an toàn.

**Giải thích:** Tránh bế tắc: Chỉ chấp nhận cấp phát nếu trạng thái sau cấp phát vẫn an toàn. Cần biết nhu cầu cực đại.

</details>

### Câu 141. Trong môn Nguyên lý HĐH, Phát hiện và khắc phục được hiểu đúng nhất là gì?

A. Thuật toán dùng cờ quan tâm và biến turn để giải quyết đoạn găng cho hai tiến trình.
B. Đoạn mã giải phóng quyền hoặc cập nhật trạng thái sau đoạn găng.
C. Cho phép bế tắc xảy ra, sau đó phát hiện và phục hồi bằng kết thúc tiến trình hoặc thu hồi tài nguyên.
D. Yêu cầu thời gian/số lượt chờ trước khi vào đoạn găng là hữu hạn.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Cho phép bế tắc xảy ra, sau đó phát hiện và phục hồi bằng kết thúc tiến trình hoặc thu hồi tài nguyên.

**Giải thích:** Phát hiện và khắc phục: Cho phép bế tắc xảy ra, sau đó phát hiện và phục hồi bằng kết thúc tiến trình hoặc thu hồi tài nguyên. Phù hợp khi deadlock ít hoặc có thể phục hồi.

</details>

### Câu 142. Phát biểu nào mô tả đúng nhất về Tài nguyên găng?

A. Đồ thị mô hình tiến trình, tài nguyên, cung yêu cầu và cung cấp phát.
B. Trạng thái không tìm được dãy an toàn, có thể dẫn tới bế tắc.
C. Primitive hoán đổi không tách rời hai biến, có thể dùng để cài khóa.
D. Tài nguyên có khả năng phục vụ đồng thời hạn chế và được nhiều tiến trình cần dùng.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Tài nguyên có khả năng phục vụ đồng thời hạn chế và được nhiều tiến trình cần dùng.

**Giải thích:** Khái niệm Tài nguyên găng trong slide/đề ôn tập gắn với ý: Tài nguyên có khả năng phục vụ đồng thời hạn chế và được nhiều tiến trình cần dùng. Có thể là thiết bị vật lý hoặc dữ liệu.

</details>

### Câu 143. Phát biểu nào mô tả đúng nhất về Race condition?

A. Phương pháp dùng biến khóa trong vùng nhớ chung để điều độ đoạn găng.
B. Chỉ chấp nhận cấp phát nếu trạng thái sau cấp phát vẫn an toàn.
C. Bài toán đồng bộ giữa tiến trình sản xuất và tiêu thụ qua buffer dùng chung.
D. Tình trạng kết quả phụ thuộc vào thứ tự xen kẽ truy cập dữ liệu dùng chung.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Tình trạng kết quả phụ thuộc vào thứ tự xen kẽ truy cập dữ liệu dùng chung.

**Giải thích:** Khái niệm Race condition trong slide/đề ôn tập gắn với ý: Tình trạng kết quả phụ thuộc vào thứ tự xen kẽ truy cập dữ liệu dùng chung. Cần đồng bộ để tránh.

</details>

### Câu 144. Phát biểu nào mô tả đúng nhất về Đoạn găng?

A. Đoạn mã giải phóng quyền hoặc cập nhật trạng thái sau đoạn găng.
B. Đồ thị mô hình tiến trình, tài nguyên, cung yêu cầu và cung cấp phát.
C. Cung nét đứt biểu diễn tiến trình có thể yêu cầu tài nguyên trong tương lai.
D. Đoạn chương trình truy cập hoặc thao tác trên tài nguyên găng/dữ liệu dùng chung.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Đoạn chương trình truy cập hoặc thao tác trên tài nguyên găng/dữ liệu dùng chung.

**Giải thích:** Khái niệm Đoạn găng trong slide/đề ôn tập gắn với ý: Đoạn chương trình truy cập hoặc thao tác trên tài nguyên găng/dữ liệu dùng chung. Mục tiêu là không quá khả năng phục vụ.

</details>

### Câu 145. Phát biểu nào mô tả đúng nhất về Mutual exclusion?

A. Tiến trình giữ ít nhất một tài nguyên trong khi chờ thêm tài nguyên khác.
B. Yêu cầu không có hơn một tiến trình vào đoạn găng của cùng tài nguyên tại một thời điểm.
C. Primitive hoán đổi không tách rời hai biến, có thể dùng để cài khóa.
D. Semaphore có giá trị biểu diễn nhiều đơn vị tài nguyên sẵn có.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Yêu cầu không có hơn một tiến trình vào đoạn găng của cùng tài nguyên tại một thời điểm.

**Giải thích:** Khái niệm Mutual exclusion trong slide/đề ôn tập gắn với ý: Yêu cầu không có hơn một tiến trình vào đoạn găng của cùng tài nguyên tại một thời điểm. Yêu cầu cơ bản của đồng bộ.

</details>

### Câu 146. Phát biểu nào mô tả đúng nhất về Progress?

A. Bài toán đồng bộ giữa tiến trình sản xuất và tiêu thụ qua buffer dùng chung.
B. Trạng thái tồn tại dãy an toàn để mọi tiến trình có thể hoàn thành.
C. Tập tiến trình chờ vô hạn vì mỗi tiến trình giữ tài nguyên và chờ tài nguyên do tiến trình khác giữ.
D. Yêu cầu nếu tài nguyên rỗi và có tiến trình muốn vào đoạn găng thì việc chọn không bị trì hoãn vô lý.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Yêu cầu nếu tài nguyên rỗi và có tiến trình muốn vào đoạn găng thì việc chọn không bị trì hoãn vô lý.

**Giải thích:** Khái niệm Progress trong slide/đề ôn tập gắn với ý: Yêu cầu nếu tài nguyên rỗi và có tiến trình muốn vào đoạn găng thì việc chọn không bị trì hoãn vô lý. Tránh tài nguyên rỗi nhưng không ai vào được.

</details>

### Câu 147. Phát biểu nào mô tả đúng nhất về Bounded waiting?

A. Yêu cầu thời gian/số lượt chờ trước khi vào đoạn găng là hữu hạn.
B. Cung nét đứt biểu diễn tiến trình có thể yêu cầu tài nguyên trong tương lai.
C. Tập tiến trình chờ vô hạn vì mỗi tiến trình giữ tài nguyên và chờ tài nguyên do tiến trình khác giữ.
D. Bài toán triết gia ăn tối minh họa bế tắc khi các tiến trình giữ một tài nguyên và chờ tài nguyên khác.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Yêu cầu thời gian/số lượt chờ trước khi vào đoạn găng là hữu hạn.

**Giải thích:** Khái niệm Bounded waiting trong slide/đề ôn tập gắn với ý: Yêu cầu thời gian/số lượt chờ trước khi vào đoạn găng là hữu hạn. Tránh starvation ở đoạn găng.

</details>

### Câu 148. Phát biểu nào mô tả đúng nhất về Phần vào?

A. Đoạn mã xin quyền trước khi vào đoạn găng.
B. Tập tiến trình chờ vô hạn vì mỗi tiến trình giữ tài nguyên và chờ tài nguyên do tiến trình khác giữ.
C. Thao tác giải phóng tài nguyên trên semaphore và có thể đánh thức tiến trình chờ.
D. Yêu cầu nếu tài nguyên rỗi và có tiến trình muốn vào đoạn găng thì việc chọn không bị trì hoãn vô lý.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Đoạn mã xin quyền trước khi vào đoạn găng.

**Giải thích:** Khái niệm Phần vào trong slide/đề ôn tập gắn với ý: Đoạn mã xin quyền trước khi vào đoạn găng. Entry section kiểm tra/giành quyền.

</details>

### Câu 149. Phát biểu nào mô tả đúng nhất về Phần ra?

A. Trạng thái chờ mà tiến trình vẫn lặp kiểm tra điều kiện và tiêu tốn CPU.
B. Đoạn mã giải phóng quyền hoặc cập nhật trạng thái sau đoạn găng.
C. Đoạn mã xin quyền trước khi vào đoạn găng.
D. Trạng thái không tìm được dãy an toàn, có thể dẫn tới bế tắc.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Đoạn mã giải phóng quyền hoặc cập nhật trạng thái sau đoạn găng.

**Giải thích:** Khái niệm Phần ra trong slide/đề ôn tập gắn với ý: Đoạn mã giải phóng quyền hoặc cập nhật trạng thái sau đoạn găng. Exit section đánh thức/cấp quyền tiếp theo nếu cần.

</details>

### Câu 150. Phát biểu nào mô tả đúng nhất về Khóa trong?

A. Semaphore nhị phân thường khởi tạo 1 để bảo vệ đoạn găng một tài nguyên đơn.
B. Phương pháp dùng biến khóa trong vùng nhớ chung để điều độ đoạn găng.
C. Tiến trình giữ ít nhất một tài nguyên trong khi chờ thêm tài nguyên khác.
D. Chính sách bảo đảm ít nhất một điều kiện cần của bế tắc không thể xảy ra.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Phương pháp dùng biến khóa trong vùng nhớ chung để điều độ đoạn găng.

**Giải thích:** Khái niệm Khóa trong trong slide/đề ôn tập gắn với ý: Phương pháp dùng biến khóa trong vùng nhớ chung để điều độ đoạn găng. Đơn giản nhưng dễ sai nếu kiểm tra và đặt khóa tách rời.

</details>

### Câu 151. Phát biểu nào mô tả đúng nhất về Dekker?

A. Thuật toán tránh bế tắc dựa trên Max, Allocation, Need và Available để chỉ cấp phát nếu còn an toàn.
B. Thuật toán dùng cờ quan tâm và biến turn để giải quyết đoạn găng cho hai tiến trình.
C. Tài nguyên có khả năng phục vụ đồng thời hạn chế và được nhiều tiến trình cần dùng.
D. Semaphore nhị phân thường khởi tạo 1 để bảo vệ đoạn găng một tài nguyên đơn.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Thuật toán dùng cờ quan tâm và biến turn để giải quyết đoạn găng cho hai tiến trình.

**Giải thích:** Khái niệm Dekker trong slide/đề ôn tập gắn với ý: Thuật toán dùng cờ quan tâm và biến turn để giải quyết đoạn găng cho hai tiến trình. Không cần lệnh phần cứng đặc biệt nhưng busy waiting.

</details>

### Câu 152. Phát biểu nào mô tả đúng nhất về Busy waiting?

A. Bài toán triết gia ăn tối minh họa bế tắc khi các tiến trình giữ một tài nguyên và chờ tài nguyên khác.
B. Tài nguyên đã cấp không bị thu hồi cưỡng bức mà chỉ được tiến trình tự trả.
C. Trạng thái chờ mà tiến trình vẫn lặp kiểm tra điều kiện và tiêu tốn CPU.
D. Tình trạng kết quả phụ thuộc vào thứ tự xen kẽ truy cập dữ liệu dùng chung.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Trạng thái chờ mà tiến trình vẫn lặp kiểm tra điều kiện và tiêu tốn CPU.

**Giải thích:** Khái niệm Busy waiting trong slide/đề ôn tập gắn với ý: Trạng thái chờ mà tiến trình vẫn lặp kiểm tra điều kiện và tiêu tốn CPU. Lãng phí processor khi chờ lâu.

</details>

### Câu 153. Phát biểu nào mô tả đúng nhất về TestAndSet?

A. Thuật toán dùng cờ quan tâm và biến turn để giải quyết đoạn găng cho hai tiến trình.
B. Chính sách bảo đảm ít nhất một điều kiện cần của bế tắc không thể xảy ra.
C. Trạng thái tồn tại dãy an toàn để mọi tiến trình có thể hoàn thành.
D. Primitive atomic trả giá trị cũ của biến khóa rồi đặt biến đó thành true.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Primitive atomic trả giá trị cũ của biến khóa rồi đặt biến đó thành true.

**Giải thích:** Khái niệm TestAndSet trong slide/đề ôn tập gắn với ý: Primitive atomic trả giá trị cũ của biến khóa rồi đặt biến đó thành true. Dùng xây dựng khóa mutual exclusion.

</details>

### Câu 154. Phát biểu nào mô tả đúng nhất về Swap atomic?

A. Trạng thái không tìm được dãy an toàn, có thể dẫn tới bế tắc.
B. Đoạn chương trình truy cập hoặc thao tác trên tài nguyên găng/dữ liệu dùng chung.
C. Primitive hoán đổi không tách rời hai biến, có thể dùng để cài khóa.
D. Yêu cầu không có hơn một tiến trình vào đoạn găng của cùng tài nguyên tại một thời điểm.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Primitive hoán đổi không tách rời hai biến, có thể dùng để cài khóa.

**Giải thích:** Khái niệm Swap atomic trong slide/đề ôn tập gắn với ý: Primitive hoán đổi không tách rời hai biến, có thể dùng để cài khóa. Cần hỗ trợ phần cứng.

</details>

### Câu 155. Phát biểu nào mô tả đúng nhất về Semaphore?

A. Phương pháp dùng biến khóa trong vùng nhớ chung để điều độ đoạn găng.
B. Yêu cầu không có hơn một tiến trình vào đoạn găng của cùng tài nguyên tại một thời điểm.
C. Đoạn mã xin quyền trước khi vào đoạn găng.
D. Biến nguyên chỉ được thay đổi bởi wait/P và signal/V nguyên tử.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Biến nguyên chỉ được thay đổi bởi wait/P và signal/V nguyên tử.

**Giải thích:** Khái niệm Semaphore trong slide/đề ôn tập gắn với ý: Biến nguyên chỉ được thay đổi bởi wait/P và signal/V nguyên tử. Khởi tạo theo khả năng phục vụ của tài nguyên.

</details>

### Câu 156. Phát biểu nào mô tả đúng nhất về wait/P?

A. Tài nguyên có khả năng phục vụ đồng thời hạn chế và được nhiều tiến trình cần dùng.
B. Thao tác xin tài nguyên trên semaphore; nếu không có thì tiến trình phải chờ.
C. Trạng thái chờ mà tiến trình vẫn lặp kiểm tra điều kiện và tiêu tốn CPU.
D. Biến điều kiện trong monitor cho phép wait/signal theo điều kiện logic.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Thao tác xin tài nguyên trên semaphore; nếu không có thì tiến trình phải chờ.

**Giải thích:** Khái niệm wait/P trong slide/đề ôn tập gắn với ý: Thao tác xin tài nguyên trên semaphore; nếu không có thì tiến trình phải chờ. Có thể cài bằng busy waiting hoặc block.

</details>

### Câu 157. Phát biểu nào mô tả đúng nhất về signal/V?

A. Bài toán đồng bộ giữa tiến trình sản xuất và tiêu thụ qua buffer dùng chung.
B. Thuật toán tránh bế tắc dựa trên Max, Allocation, Need và Available để chỉ cấp phát nếu còn an toàn.
C. Thao tác giải phóng tài nguyên trên semaphore và có thể đánh thức tiến trình chờ.
D. Tài nguyên đã cấp không bị thu hồi cưỡng bức mà chỉ được tiến trình tự trả.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Thao tác giải phóng tài nguyên trên semaphore và có thể đánh thức tiến trình chờ.

**Giải thích:** Khái niệm signal/V trong slide/đề ôn tập gắn với ý: Thao tác giải phóng tài nguyên trên semaphore và có thể đánh thức tiến trình chờ. Tăng khả năng phục vụ logic.

</details>

### Câu 158. Phát biểu nào mô tả đúng nhất về block/wakeup?

A. Semaphore có giá trị biểu diễn nhiều đơn vị tài nguyên sẵn có.
B. Trạng thái không tìm được dãy an toàn, có thể dẫn tới bế tắc.
C. Cơ chế dừng tiến trình chờ và đánh thức nó để bỏ busy waiting.
D. Bài toán đồng bộ giữa tiến trình sản xuất và tiêu thụ qua buffer dùng chung.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Cơ chế dừng tiến trình chờ và đánh thức nó để bỏ busy waiting.

**Giải thích:** Khái niệm block/wakeup trong slide/đề ôn tập gắn với ý: Cơ chế dừng tiến trình chờ và đánh thức nó để bỏ busy waiting. Block đưa tiến trình vào waiting queue.

</details>

### Câu 159. Phát biểu nào mô tả đúng nhất về Mutex semaphore?

A. Chính sách bảo đảm ít nhất một điều kiện cần của bế tắc không thể xảy ra.
B. Thuật toán tránh bế tắc dựa trên Max, Allocation, Need và Available để chỉ cấp phát nếu còn an toàn.
C. Semaphore nhị phân thường khởi tạo 1 để bảo vệ đoạn găng một tài nguyên đơn.
D. Cơ chế dừng tiến trình chờ và đánh thức nó để bỏ busy waiting.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Semaphore nhị phân thường khởi tạo 1 để bảo vệ đoạn găng một tài nguyên đơn.

**Giải thích:** Khái niệm Mutex semaphore trong slide/đề ôn tập gắn với ý: Semaphore nhị phân thường khởi tạo 1 để bảo vệ đoạn găng một tài nguyên đơn. wait trước đoạn găng, signal sau đoạn găng.

</details>

### Câu 160. Phát biểu nào mô tả đúng nhất về Semaphore đếm?

A. Semaphore có giá trị biểu diễn nhiều đơn vị tài nguyên sẵn có.
B. Đồ thị mô hình tiến trình, tài nguyên, cung yêu cầu và cung cấp phát.
C. Thuật toán dùng cờ quan tâm và biến turn để giải quyết đoạn găng cho hai tiến trình.
D. Tài nguyên đã cấp không bị thu hồi cưỡng bức mà chỉ được tiến trình tự trả.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Semaphore có giá trị biểu diễn nhiều đơn vị tài nguyên sẵn có.

**Giải thích:** Khái niệm Semaphore đếm trong slide/đề ôn tập gắn với ý: Semaphore có giá trị biểu diễn nhiều đơn vị tài nguyên sẵn có. Ví dụ nhiều máy in hoặc nhiều ô trống buffer.

</details>

### Câu 161. Phát biểu nào mô tả đúng nhất về Monitor?

A. Phương pháp dùng biến khóa trong vùng nhớ chung để điều độ đoạn găng.
B. Cho phép bế tắc xảy ra, sau đó phát hiện và phục hồi bằng kết thúc tiến trình hoặc thu hồi tài nguyên.
C. Công cụ đồng bộ cấp cao đóng gói dữ liệu chung và thủ tục, bảo đảm loại trừ lẫn nhau bên trong.
D. Thuật toán dùng cờ quan tâm và biến turn để giải quyết đoạn găng cho hai tiến trình.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Công cụ đồng bộ cấp cao đóng gói dữ liệu chung và thủ tục, bảo đảm loại trừ lẫn nhau bên trong.

**Giải thích:** Khái niệm Monitor trong slide/đề ôn tập gắn với ý: Công cụ đồng bộ cấp cao đóng gói dữ liệu chung và thủ tục, bảo đảm loại trừ lẫn nhau bên trong. Dễ lập trình hơn semaphore thô.

</details>

### Câu 162. Phát biểu nào mô tả đúng nhất về Condition variable?

A. Semaphore nhị phân thường khởi tạo 1 để bảo vệ đoạn găng một tài nguyên đơn.
B. Tài nguyên đã cấp không bị thu hồi cưỡng bức mà chỉ được tiến trình tự trả.
C. Biến điều kiện trong monitor cho phép wait/signal theo điều kiện logic.
D. Tập tiến trình chờ vô hạn vì mỗi tiến trình giữ tài nguyên và chờ tài nguyên do tiến trình khác giữ.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Biến điều kiện trong monitor cho phép wait/signal theo điều kiện logic.

**Giải thích:** Khái niệm Condition variable trong slide/đề ôn tập gắn với ý: Biến điều kiện trong monitor cho phép wait/signal theo điều kiện logic. Dùng khi tiến trình phải chờ điều kiện.

</details>

### Câu 163. Phát biểu nào mô tả đúng nhất về Producer-consumer?

A. Cho phép bế tắc xảy ra, sau đó phát hiện và phục hồi bằng kết thúc tiến trình hoặc thu hồi tài nguyên.
B. Đoạn chương trình truy cập hoặc thao tác trên tài nguyên găng/dữ liệu dùng chung.
C. Bài toán đồng bộ giữa tiến trình sản xuất và tiêu thụ qua buffer dùng chung.
D. Yêu cầu nếu tài nguyên rỗi và có tiến trình muốn vào đoạn găng thì việc chọn không bị trì hoãn vô lý.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Bài toán đồng bộ giữa tiến trình sản xuất và tiêu thụ qua buffer dùng chung.

**Giải thích:** Khái niệm Producer-consumer trong slide/đề ôn tập gắn với ý: Bài toán đồng bộ giữa tiến trình sản xuất và tiêu thụ qua buffer dùng chung. Cần mutex, empty, full.

</details>

### Câu 164. Phát biểu nào mô tả đúng nhất về Dining philosophers?

A. Bài toán triết gia ăn tối minh họa bế tắc khi các tiến trình giữ một tài nguyên và chờ tài nguyên khác.
B. Tồn tại vòng tiến trình-tài nguyên chờ nhau.
C. Công cụ đồng bộ cấp cao đóng gói dữ liệu chung và thủ tục, bảo đảm loại trừ lẫn nhau bên trong.
D. Phương pháp dùng biến khóa trong vùng nhớ chung để điều độ đoạn găng.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Bài toán triết gia ăn tối minh họa bế tắc khi các tiến trình giữ một tài nguyên và chờ tài nguyên khác.

**Giải thích:** Khái niệm Dining philosophers trong slide/đề ôn tập gắn với ý: Bài toán triết gia ăn tối minh họa bế tắc khi các tiến trình giữ một tài nguyên và chờ tài nguyên khác. Giải bằng phá vỡ chờ vòng tròn hoặc giới hạn cạnh tranh.

</details>

### Câu 165. Phát biểu nào mô tả đúng nhất về Bế tắc?

A. Bài toán triết gia ăn tối minh họa bế tắc khi các tiến trình giữ một tài nguyên và chờ tài nguyên khác.
B. Đoạn chương trình truy cập hoặc thao tác trên tài nguyên găng/dữ liệu dùng chung.
C. Thao tác xin tài nguyên trên semaphore; nếu không có thì tiến trình phải chờ.
D. Tập tiến trình chờ vô hạn vì mỗi tiến trình giữ tài nguyên và chờ tài nguyên do tiến trình khác giữ.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Tập tiến trình chờ vô hạn vì mỗi tiến trình giữ tài nguyên và chờ tài nguyên do tiến trình khác giữ.

**Giải thích:** Khái niệm Bế tắc trong slide/đề ôn tập gắn với ý: Tập tiến trình chờ vô hạn vì mỗi tiến trình giữ tài nguyên và chờ tài nguyên do tiến trình khác giữ. Deadlock cần xử lý bằng prevention, avoidance, detection/recovery.

</details>


---

## Chương 4 - Quản lý bộ nhớ

### Câu 166. Trong môn Nguyên lý HĐH, Bộ nhớ chính được hiểu đúng nhất là gì?

A. Thay trang sẽ được dùng lại xa nhất trong tương lai.
B. Mảng các ô nhớ byte/word nơi chương trình và dữ liệu phải có mặt khi CPU thực hiện.
C. Phần bộ nhớ đã cấp nhưng không được dùng bên trong đơn vị cấp phát.
D. Chia không gian logic thành trang và RAM thành khung trang cùng kích thước.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Mảng các ô nhớ byte/word nơi chương trình và dữ liệu phải có mặt khi CPU thực hiện.

**Giải thích:** Bộ nhớ chính: Mảng các ô nhớ byte/word nơi chương trình và dữ liệu phải có mặt khi CPU thực hiện. CPU truy cập trực tiếp RAM.

</details>

### Câu 167. Trong môn Nguyên lý HĐH, Phân cấp bộ nhớ được hiểu đúng nhất là gì?

A. Địa chỉ do CPU/tiến trình sinh ra trước khi ánh xạ sang vật lý.
B. Chọn vùng trống lớn nhất.
C. Khung trang vật lý trong RAM có kích thước bằng page.
D. Tổ chức bộ nhớ theo tốc độ, kích thước và chi phí từ thanh ghi, cache, RAM đến đĩa.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Tổ chức bộ nhớ theo tốc độ, kích thước và chi phí từ thanh ghi, cache, RAM đến đĩa.

**Giải thích:** Phân cấp bộ nhớ: Tổ chức bộ nhớ theo tốc độ, kích thước và chi phí từ thanh ghi, cache, RAM đến đĩa. Nhanh thường nhỏ và đắt.

</details>

### Câu 168. Trong môn Nguyên lý HĐH, Địa chỉ logic được hiểu đúng nhất là gì?

A. Hiện tượng hệ thống mất phần lớn thời gian cho page fault và thay trang thay vì chạy tiến trình.
B. Dồn các vùng đã cấp để gom lỗ trống rời rạc thành vùng lớn.
C. Địa chỉ do CPU/tiến trình sinh ra trước khi ánh xạ sang vật lý.
D. Cơ chế tách không gian địa chỉ logic khỏi bộ nhớ vật lý, dùng bộ nhớ phụ chứa phần chưa nạp.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Địa chỉ do CPU/tiến trình sinh ra trước khi ánh xạ sang vật lý.

**Giải thích:** Địa chỉ logic: Địa chỉ do CPU/tiến trình sinh ra trước khi ánh xạ sang vật lý. Còn gọi là địa chỉ ảo.

</details>

### Câu 169. Trong môn Nguyên lý HĐH, Địa chỉ vật lý được hiểu đúng nhất là gì?

A. Địa chỉ thực của ô nhớ trong bộ nhớ chính.
B. Phần địa chỉ chỉ vị trí bên trong page/frame.
C. Chia không gian logic thành trang và RAM thành khung trang cùng kích thước.
D. Chia RAM thành các phân vùng cố định kích thước trước.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Địa chỉ thực của ô nhớ trong bộ nhớ chính.

**Giải thích:** Địa chỉ vật lý: Địa chỉ thực của ô nhớ trong bộ nhớ chính. Là địa chỉ trên bus/bộ nhớ.

</details>

### Câu 170. Trong môn Nguyên lý HĐH, MMU được hiểu đúng nhất là gì?

A. Tên đối tượng trong chương trình nguồn như biến hoặc nhãn.
B. Thay trang được nạp vào sớm nhất.
C. Chỉ nạp trang khi trang được tham chiếu.
D. Phần cứng chuyển địa chỉ logic sang địa chỉ vật lý và hỗ trợ bảo vệ.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Phần cứng chuyển địa chỉ logic sang địa chỉ vật lý và hỗ trợ bảo vệ.

**Giải thích:** MMU: Phần cứng chuyển địa chỉ logic sang địa chỉ vật lý và hỗ trợ bảo vệ. Memory Management Unit.

</details>

### Câu 171. Trong môn Nguyên lý HĐH, Địa chỉ biểu tượng được hiểu đúng nhất là gì?

A. Địa chỉ thực của ô nhớ trong bộ nhớ chính.
B. Thay trang sẽ được dùng lại xa nhất trong tương lai.
C. Chọn vùng trống nhỏ nhất đủ lớn.
D. Tên đối tượng trong chương trình nguồn như biến hoặc nhãn.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Tên đối tượng trong chương trình nguồn như biến hoặc nhãn.

**Giải thích:** Địa chỉ biểu tượng: Tên đối tượng trong chương trình nguồn như biến hoặc nhãn. Compiler xử lý thành địa chỉ tương đối.

</details>

### Câu 172. Trong môn Nguyên lý HĐH, Địa chỉ tương đối được hiểu đúng nhất là gì?

A. Vị trí của đối tượng so với đầu module hoặc chương trình.
B. Xu hướng chương trình truy cập tập nhỏ địa chỉ/trang gần nhau trong thời gian ngắn.
C. Chia RAM thành các phân vùng cố định kích thước trước.
D. Bảng chứa base, limit và quyền của mỗi đoạn.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Vị trí của đối tượng so với đầu module hoặc chương trình.

**Giải thích:** Địa chỉ tương đối: Vị trí của đối tượng so với đầu module hoặc chương trình. Loader/MMU có thể relocation.

</details>

### Câu 173. Trong môn Nguyên lý HĐH, Liên kết địa chỉ khi dịch được hiểu đúng nhất là gì?

A. Tiến trình chỉ thay frame thuộc phần cấp phát của chính nó.
B. Chỉ nạp trang khi trang được tham chiếu.
C. Chia chương trình thành các đoạn logic kích thước biến thiên như code, data, stack.
D. Sinh địa chỉ tuyệt đối trong lúc biên dịch khi biết trước vị trí nạp.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Sinh địa chỉ tuyệt đối trong lúc biên dịch khi biết trước vị trí nạp.

**Giải thích:** Liên kết địa chỉ khi dịch: Sinh địa chỉ tuyệt đối trong lúc biên dịch khi biết trước vị trí nạp. Nếu vị trí thay đổi phải dịch lại.

</details>

### Câu 174. Trong môn Nguyên lý HĐH, Liên kết địa chỉ khi nạp được hiểu đúng nhất là gì?

A. Cấu trúc dùng page directory và page table để giảm kích thước bảng trang phải hiện diện.
B. Tên đối tượng trong chương trình nguồn như biến hoặc nhãn.
C. Thay trang lâu nhất chưa được sử dụng.
D. Hoãn xác định địa chỉ tuyệt đối đến lúc loader nạp chương trình vào bộ nhớ.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Hoãn xác định địa chỉ tuyệt đối đến lúc loader nạp chương trình vào bộ nhớ.

**Giải thích:** Liên kết địa chỉ khi nạp: Hoãn xác định địa chỉ tuyệt đối đến lúc loader nạp chương trình vào bộ nhớ. Dùng mã tương đối.

</details>

### Câu 175. Trong môn Nguyên lý HĐH, Liên kết địa chỉ khi chạy được hiểu đúng nhất là gì?

A. Tổ chức bộ nhớ theo tốc độ, kích thước và chi phí từ thanh ghi, cache, RAM đến đĩa.
B. Hoãn ánh xạ địa chỉ đến lúc thực thi bằng hỗ trợ phần cứng.
C. Cache phần cứng chứa các ánh xạ trang gần đây.
D. Địa chỉ thực của ô nhớ trong bộ nhớ chính.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Hoãn ánh xạ địa chỉ đến lúc thực thi bằng hỗ trợ phần cứng.

**Giải thích:** Liên kết địa chỉ khi chạy: Hoãn ánh xạ địa chỉ đến lúc thực thi bằng hỗ trợ phần cứng. Cho phép tiến trình di chuyển trong khi chạy.

</details>

### Câu 176. Trong môn Nguyên lý HĐH, Nạp động được hiểu đúng nhất là gì?

A. Thanh ghi x86 chứa địa chỉ cơ sở page directory hiện hành.
B. Tổng bộ nhớ trống đủ nhưng bị chia thành lỗ nhỏ không liên tục nên không cấp phát được.
C. Chọn vùng trống nhỏ nhất đủ lớn.
D. Chỉ nạp module/thủ tục khi nó được gọi.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Chỉ nạp module/thủ tục khi nó được gọi.

**Giải thích:** Nạp động: Chỉ nạp module/thủ tục khi nó được gọi. Tiết kiệm bộ nhớ.

</details>

### Câu 177. Trong môn Nguyên lý HĐH, Liên kết động được hiểu đúng nhất là gì?

A. Chia RAM thành các phân vùng cố định kích thước trước.
B. Liên kết thư viện khi nạp hoặc khi chạy thay vì gắn toàn bộ vào executable.
C. Tên đối tượng trong chương trình nguồn như biến hoặc nhãn.
D. Chỉ nạp module/thủ tục khi nó được gọi.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Liên kết thư viện khi nạp hoặc khi chạy thay vì gắn toàn bộ vào executable.

**Giải thích:** Liên kết động: Liên kết thư viện khi nạp hoặc khi chạy thay vì gắn toàn bộ vào executable. DLL/shared library.

</details>

### Câu 178. Trong môn Nguyên lý HĐH, Overlay được hiểu đúng nhất là gì?

A. Cấu trúc dùng page directory và page table để giảm kích thước bảng trang phải hiện diện.
B. Liên kết thư viện khi nạp hoặc khi chạy thay vì gắn toàn bộ vào executable.
C. Xu hướng chương trình truy cập tập nhỏ địa chỉ/trang gần nhau trong thời gian ngắn.
D. Chia chương trình thành các module thay thế nhau trong bộ nhớ để chạy chương trình lớn hơn RAM.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Chia chương trình thành các module thay thế nhau trong bộ nhớ để chạy chương trình lớn hơn RAM.

**Giải thích:** Overlay: Chia chương trình thành các module thay thế nhau trong bộ nhớ để chạy chương trình lớn hơn RAM. Cần tổ chức overlay tree.

</details>

### Câu 179. Trong môn Nguyên lý HĐH, Swapping được hiểu đúng nhất là gì?

A. Dùng reference bit để cho trang cơ hội thứ hai trước khi thay.
B. Đưa tiến trình ra bộ nhớ phụ và đưa lại RAM khi cần.
C. Phần địa chỉ chỉ vị trí bên trong page/frame.
D. Khung trang vật lý trong RAM có kích thước bằng page.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Đưa tiến trình ra bộ nhớ phụ và đưa lại RAM khi cần.

**Giải thích:** Swapping: Đưa tiến trình ra bộ nhớ phụ và đưa lại RAM khi cần. Do medium-term scheduler dùng.

</details>

### Câu 180. Trong môn Nguyên lý HĐH, Cấp phát liên tục được hiểu đúng nhất là gì?

A. Cơ chế tách không gian địa chỉ logic khỏi bộ nhớ vật lý, dùng bộ nhớ phụ chứa phần chưa nạp.
B. Xu hướng chương trình truy cập tập nhỏ địa chỉ/trang gần nhau trong thời gian ngắn.
C. Chia chương trình thành các đoạn logic kích thước biến thiên như code, data, stack.
D. Mỗi tiến trình chiếm một vùng nhớ vật lý liên tục.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Mỗi tiến trình chiếm một vùng nhớ vật lý liên tục.

**Giải thích:** Cấp phát liên tục: Mỗi tiến trình chiếm một vùng nhớ vật lý liên tục. Đơn giản nhưng có external fragmentation.

</details>

### Câu 181. Trong môn Nguyên lý HĐH, Phân chương cố định được hiểu đúng nhất là gì?

A. Thanh ghi x86 chứa địa chỉ cơ sở page directory hiện hành.
B. Sự kiện xảy ra khi tiến trình truy cập trang hợp lệ nhưng trang chưa có trong bộ nhớ vật lý.
C. Chia RAM thành các phân vùng cố định kích thước trước.
D. Hoãn xác định địa chỉ tuyệt đối đến lúc loader nạp chương trình vào bộ nhớ.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Chia RAM thành các phân vùng cố định kích thước trước.

**Giải thích:** Phân chương cố định: Chia RAM thành các phân vùng cố định kích thước trước. Dễ internal fragmentation.

</details>

### Câu 182. Trong môn Nguyên lý HĐH, Phân chương động được hiểu đúng nhất là gì?

A. Dồn các vùng đã cấp để gom lỗ trống rời rạc thành vùng lớn.
B. Cơ chế tách không gian địa chỉ logic khỏi bộ nhớ vật lý, dùng bộ nhớ phụ chứa phần chưa nạp.
C. Tạo vùng cấp phát theo kích thước tiến trình khi nạp.
D. Dùng reference bit để cho trang cơ hội thứ hai trước khi thay.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Tạo vùng cấp phát theo kích thước tiến trình khi nạp.

**Giải thích:** Phân chương động: Tạo vùng cấp phát theo kích thước tiến trình khi nạp. Dễ external fragmentation.

</details>

### Câu 183. Trong môn Nguyên lý HĐH, First Fit được hiểu đúng nhất là gì?

A. Hiện tượng tăng số frame nhưng số page fault tăng trong một số thuật toán như FIFO.
B. Cache phần cứng chứa các ánh xạ trang gần đây.
C. Chia chương trình thành các đoạn logic kích thước biến thiên như code, data, stack.
D. Chọn vùng trống đầu tiên đủ lớn theo thứ tự duyệt.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Chọn vùng trống đầu tiên đủ lớn theo thứ tự duyệt.

**Giải thích:** First Fit: Chọn vùng trống đầu tiên đủ lớn theo thứ tự duyệt. Nhanh và đơn giản.

</details>

### Câu 184. Trong môn Nguyên lý HĐH, Best Fit được hiểu đúng nhất là gì?

A. Chọn vùng trống nhỏ nhất đủ lớn.
B. Mảng các ô nhớ byte/word nơi chương trình và dữ liệu phải có mặt khi CPU thực hiện.
C. Khung trang vật lý trong RAM có kích thước bằng page.
D. Tổ chức bộ nhớ theo tốc độ, kích thước và chi phí từ thanh ghi, cache, RAM đến đĩa.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Chọn vùng trống nhỏ nhất đủ lớn.

**Giải thích:** Best Fit: Chọn vùng trống nhỏ nhất đủ lớn. Có thể tạo nhiều lỗ rất nhỏ.

</details>

### Câu 185. Trong môn Nguyên lý HĐH, Worst Fit được hiểu đúng nhất là gì?

A. Bảng ánh xạ số trang logic sang số frame vật lý cùng các bit trạng thái.
B. Bảng chứa base, limit và quyền của mỗi đoạn.
C. Chọn vùng trống lớn nhất.
D. Chỉ nạp module/thủ tục khi nó được gọi.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Chọn vùng trống lớn nhất.

**Giải thích:** Worst Fit: Chọn vùng trống lớn nhất. Để lại phần dư lớn hơn.

</details>

### Câu 186. Trong môn Nguyên lý HĐH, Phân mảnh ngoài được hiểu đúng nhất là gì?

A. Tiến trình chỉ thay frame thuộc phần cấp phát của chính nó.
B. Phần cứng chuyển địa chỉ logic sang địa chỉ vật lý và hỗ trợ bảo vệ.
C. Cấu trúc dùng page directory và page table để giảm kích thước bảng trang phải hiện diện.
D. Tổng bộ nhớ trống đủ nhưng bị chia thành lỗ nhỏ không liên tục nên không cấp phát được.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Tổng bộ nhớ trống đủ nhưng bị chia thành lỗ nhỏ không liên tục nên không cấp phát được.

**Giải thích:** Phân mảnh ngoài: Tổng bộ nhớ trống đủ nhưng bị chia thành lỗ nhỏ không liên tục nên không cấp phát được. Gặp trong cấp phát biến kích thước.

</details>

### Câu 187. Trong môn Nguyên lý HĐH, Phân mảnh trong được hiểu đúng nhất là gì?

A. Phần bộ nhớ đã cấp nhưng không được dùng bên trong đơn vị cấp phát.
B. Cơ chế tách không gian địa chỉ logic khỏi bộ nhớ vật lý, dùng bộ nhớ phụ chứa phần chưa nạp.
C. Chọn vùng trống nhỏ nhất đủ lớn.
D. Hiện tượng hệ thống mất phần lớn thời gian cho page fault và thay trang thay vì chạy tiến trình.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Phần bộ nhớ đã cấp nhưng không được dùng bên trong đơn vị cấp phát.

**Giải thích:** Phân mảnh trong: Phần bộ nhớ đã cấp nhưng không được dùng bên trong đơn vị cấp phát. Gặp với partition cố định hoặc paging.

</details>

### Câu 188. Trong môn Nguyên lý HĐH, Compaction được hiểu đúng nhất là gì?

A. Chia không gian logic thành trang và RAM thành khung trang cùng kích thước.
B. Đưa tiến trình ra bộ nhớ phụ và đưa lại RAM khi cần.
C. Tên đối tượng trong chương trình nguồn như biến hoặc nhãn.
D. Dồn các vùng đã cấp để gom lỗ trống rời rạc thành vùng lớn.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Dồn các vùng đã cấp để gom lỗ trống rời rạc thành vùng lớn.

**Giải thích:** Compaction: Dồn các vùng đã cấp để gom lỗ trống rời rạc thành vùng lớn. Cần relocation động và tốn chi phí.

</details>

### Câu 189. Trong môn Nguyên lý HĐH, Paging được hiểu đúng nhất là gì?

A. Chia chương trình thành các đoạn logic kích thước biến thiên như code, data, stack.
B. Chia không gian logic thành trang và RAM thành khung trang cùng kích thước.
C. Cache phần cứng chứa các ánh xạ trang gần đây.
D. Địa chỉ thực của ô nhớ trong bộ nhớ chính.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Chia không gian logic thành trang và RAM thành khung trang cùng kích thước.

**Giải thích:** Paging: Chia không gian logic thành trang và RAM thành khung trang cùng kích thước. Loại bỏ external fragmentation.

</details>

### Câu 190. Trong môn Nguyên lý HĐH, Page được hiểu đúng nhất là gì?

A. Chọn vùng trống lớn nhất.
B. Dồn các vùng đã cấp để gom lỗ trống rời rạc thành vùng lớn.
C. Đơn vị cố định của không gian địa chỉ logic trong paging.
D. Cache phần cứng chứa các ánh xạ trang gần đây.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Đơn vị cố định của không gian địa chỉ logic trong paging.

**Giải thích:** Page: Đơn vị cố định của không gian địa chỉ logic trong paging. Được ánh xạ vào frame.

</details>

### Câu 191. Trong môn Nguyên lý HĐH, Frame được hiểu đúng nhất là gì?

A. Hiện tượng tăng số frame nhưng số page fault tăng trong một số thuật toán như FIFO.
B. Cache phần cứng chứa các ánh xạ trang gần đây.
C. Tiến trình có thể lấy frame từ tập frame toàn hệ thống.
D. Khung trang vật lý trong RAM có kích thước bằng page.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Khung trang vật lý trong RAM có kích thước bằng page.

**Giải thích:** Frame: Khung trang vật lý trong RAM có kích thước bằng page. Chứa một page.

</details>

### Câu 192. Trong môn Nguyên lý HĐH, Offset được hiểu đúng nhất là gì?

A. Thay trang sẽ được dùng lại xa nhất trong tương lai.
B. Hiện tượng hệ thống mất phần lớn thời gian cho page fault và thay trang thay vì chạy tiến trình.
C. Chia RAM thành các phân vùng cố định kích thước trước.
D. Phần địa chỉ chỉ vị trí bên trong page/frame.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Phần địa chỉ chỉ vị trí bên trong page/frame.

**Giải thích:** Offset: Phần địa chỉ chỉ vị trí bên trong page/frame. Không đổi khi ánh xạ page -> frame.

</details>

### Câu 193. Trong môn Nguyên lý HĐH, Page table được hiểu đúng nhất là gì?

A. Chia chương trình thành các đoạn logic kích thước biến thiên như code, data, stack.
B. Liên kết thư viện khi nạp hoặc khi chạy thay vì gắn toàn bộ vào executable.
C. Bảng ánh xạ số trang logic sang số frame vật lý cùng các bit trạng thái.
D. Phần bộ nhớ đã cấp nhưng không được dùng bên trong đơn vị cấp phát.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Bảng ánh xạ số trang logic sang số frame vật lý cùng các bit trạng thái.

**Giải thích:** Page table: Bảng ánh xạ số trang logic sang số frame vật lý cùng các bit trạng thái. Mỗi tiến trình thường có bảng trang.

</details>

### Câu 194. Trong môn Nguyên lý HĐH, TLB được hiểu đúng nhất là gì?

A. Phần địa chỉ chỉ vị trí bên trong page/frame.
B. Tiến trình có thể lấy frame từ tập frame toàn hệ thống.
C. Chỉ nạp module/thủ tục khi nó được gọi.
D. Cache phần cứng chứa các ánh xạ trang gần đây.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Cache phần cứng chứa các ánh xạ trang gần đây.

**Giải thích:** TLB: Cache phần cứng chứa các ánh xạ trang gần đây. Giảm số lần truy cập page table.

</details>

### Câu 195. Trong môn Nguyên lý HĐH, Segmentation được hiểu đúng nhất là gì?

A. Chia chương trình thành các đoạn logic kích thước biến thiên như code, data, stack.
B. Cơ chế tách không gian địa chỉ logic khỏi bộ nhớ vật lý, dùng bộ nhớ phụ chứa phần chưa nạp.
C. Hiện tượng tăng số frame nhưng số page fault tăng trong một số thuật toán như FIFO.
D. Thay trang sẽ được dùng lại xa nhất trong tương lai.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Chia chương trình thành các đoạn logic kích thước biến thiên như code, data, stack.

**Giải thích:** Segmentation: Chia chương trình thành các đoạn logic kích thước biến thiên như code, data, stack. Phản ánh cách lập trình viên nhìn chương trình.

</details>

### Câu 196. Trong môn Nguyên lý HĐH, Bảng đoạn được hiểu đúng nhất là gì?

A. Bảng chứa base, limit và quyền của mỗi đoạn.
B. Chọn vùng trống lớn nhất.
C. Mỗi đoạn logic được chia thành các trang để vừa bảo toàn cấu trúc đoạn vừa giảm external fragmentation.
D. Dồn các vùng đã cấp để gom lỗ trống rời rạc thành vùng lớn.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Bảng chứa base, limit và quyền của mỗi đoạn.

**Giải thích:** Bảng đoạn: Bảng chứa base, limit và quyền của mỗi đoạn. MMU kiểm tra offset với limit.

</details>

### Câu 197. Trong môn Nguyên lý HĐH, Phân đoạn kết hợp phân trang được hiểu đúng nhất là gì?

A. Mỗi đoạn logic được chia thành các trang để vừa bảo toàn cấu trúc đoạn vừa giảm external fragmentation.
B. Cache phần cứng chứa các ánh xạ trang gần đây.
C. Liên kết thư viện khi nạp hoặc khi chạy thay vì gắn toàn bộ vào executable.
D. Xu hướng chương trình truy cập tập nhỏ địa chỉ/trang gần nhau trong thời gian ngắn.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Mỗi đoạn logic được chia thành các trang để vừa bảo toàn cấu trúc đoạn vừa giảm external fragmentation.

**Giải thích:** Phân đoạn kết hợp phân trang: Mỗi đoạn logic được chia thành các trang để vừa bảo toàn cấu trúc đoạn vừa giảm external fragmentation. Địa chỉ đi qua segment rồi page.

</details>

### Câu 198. Trong môn Nguyên lý HĐH, Bộ nhớ ảo được hiểu đúng nhất là gì?

A. Hoãn ánh xạ địa chỉ đến lúc thực thi bằng hỗ trợ phần cứng.
B. Tổng bộ nhớ trống đủ nhưng bị chia thành lỗ nhỏ không liên tục nên không cấp phát được.
C. Cơ chế tách không gian địa chỉ logic khỏi bộ nhớ vật lý, dùng bộ nhớ phụ chứa phần chưa nạp.
D. Hiện tượng tăng số frame nhưng số page fault tăng trong một số thuật toán như FIFO.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Cơ chế tách không gian địa chỉ logic khỏi bộ nhớ vật lý, dùng bộ nhớ phụ chứa phần chưa nạp.

**Giải thích:** Bộ nhớ ảo: Cơ chế tách không gian địa chỉ logic khỏi bộ nhớ vật lý, dùng bộ nhớ phụ chứa phần chưa nạp. Cho phép chương trình lớn hơn RAM.

</details>

### Câu 199. Trong môn Nguyên lý HĐH, Demand paging được hiểu đúng nhất là gì?

A. Địa chỉ do CPU/tiến trình sinh ra trước khi ánh xạ sang vật lý.
B. Khung trang vật lý trong RAM có kích thước bằng page.
C. Mảng các ô nhớ byte/word nơi chương trình và dữ liệu phải có mặt khi CPU thực hiện.
D. Chỉ nạp trang khi trang được tham chiếu.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Chỉ nạp trang khi trang được tham chiếu.

**Giải thích:** Demand paging: Chỉ nạp trang khi trang được tham chiếu. Gây page fault khi trang chưa ở RAM.

</details>

### Câu 200. Trong môn Nguyên lý HĐH, Page fault được hiểu đúng nhất là gì?

A. Chia không gian logic thành trang và RAM thành khung trang cùng kích thước.
B. Mỗi đoạn logic được chia thành các trang để vừa bảo toàn cấu trúc đoạn vừa giảm external fragmentation.
C. Sự kiện xảy ra khi tiến trình truy cập trang hợp lệ nhưng trang chưa có trong bộ nhớ vật lý.
D. Cơ chế tách không gian địa chỉ logic khỏi bộ nhớ vật lý, dùng bộ nhớ phụ chứa phần chưa nạp.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Sự kiện xảy ra khi tiến trình truy cập trang hợp lệ nhưng trang chưa có trong bộ nhớ vật lý.

**Giải thích:** Page fault: Sự kiện xảy ra khi tiến trình truy cập trang hợp lệ nhưng trang chưa có trong bộ nhớ vật lý. HĐH nạp trang rồi chạy lại lệnh.

</details>

### Câu 201. Trong môn Nguyên lý HĐH, Locality được hiểu đúng nhất là gì?

A. Xu hướng chương trình truy cập tập nhỏ địa chỉ/trang gần nhau trong thời gian ngắn.
B. Phần địa chỉ chỉ vị trí bên trong page/frame.
C. Chọn vùng trống lớn nhất.
D. Chỉ nạp trang khi trang được tham chiếu.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Xu hướng chương trình truy cập tập nhỏ địa chỉ/trang gần nhau trong thời gian ngắn.

**Giải thích:** Locality: Xu hướng chương trình truy cập tập nhỏ địa chỉ/trang gần nhau trong thời gian ngắn. Làm cache và paging hiệu quả.

</details>

### Câu 202. Trong môn Nguyên lý HĐH, Working set được hiểu đúng nhất là gì?

A. Sinh địa chỉ tuyệt đối trong lúc biên dịch khi biết trước vị trí nạp.
B. Tập trang mà tiến trình đang dùng tích cực trong một cửa sổ thời gian.
C. Tiến trình chỉ thay frame thuộc phần cấp phát của chính nó.
D. Liên kết thư viện khi nạp hoặc khi chạy thay vì gắn toàn bộ vào executable.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Tập trang mà tiến trình đang dùng tích cực trong một cửa sổ thời gian.

**Giải thích:** Working set: Tập trang mà tiến trình đang dùng tích cực trong một cửa sổ thời gian. Dùng để tránh thrashing.

</details>

### Câu 203. Trong môn Nguyên lý HĐH, Thrashing được hiểu đúng nhất là gì?

A. Cache phần cứng chứa các ánh xạ trang gần đây.
B. Tiến trình chỉ thay frame thuộc phần cấp phát của chính nó.
C. Hiện tượng hệ thống mất phần lớn thời gian cho page fault và thay trang thay vì chạy tiến trình.
D. Phần địa chỉ chỉ vị trí bên trong page/frame.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Hiện tượng hệ thống mất phần lớn thời gian cho page fault và thay trang thay vì chạy tiến trình.

**Giải thích:** Thrashing: Hiện tượng hệ thống mất phần lớn thời gian cho page fault và thay trang thay vì chạy tiến trình. Do thiếu frame cho working set.

</details>

### Câu 204. Trong môn Nguyên lý HĐH, FIFO replacement được hiểu đúng nhất là gì?

A. Thay trang sẽ được dùng lại xa nhất trong tương lai.
B. Thay trang được nạp vào sớm nhất.
C. Dồn các vùng đã cấp để gom lỗ trống rời rạc thành vùng lớn.
D. Chỉ nạp trang khi trang được tham chiếu.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Thay trang được nạp vào sớm nhất.

**Giải thích:** FIFO replacement: Thay trang được nạp vào sớm nhất. Có thể gặp Belady anomaly.

</details>

### Câu 205. Trong môn Nguyên lý HĐH, OPT replacement được hiểu đúng nhất là gì?

A. Bảng ánh xạ số trang logic sang số frame vật lý cùng các bit trạng thái.
B. Tổng bộ nhớ trống đủ nhưng bị chia thành lỗ nhỏ không liên tục nên không cấp phát được.
C. Thay trang sẽ được dùng lại xa nhất trong tương lai.
D. Phần cứng chuyển địa chỉ logic sang địa chỉ vật lý và hỗ trợ bảo vệ.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Thay trang sẽ được dùng lại xa nhất trong tương lai.

**Giải thích:** OPT replacement: Thay trang sẽ được dùng lại xa nhất trong tương lai. Tối ưu lý thuyết, dùng để so sánh.

</details>

### Câu 206. Trong môn Nguyên lý HĐH, LRU replacement được hiểu đúng nhất là gì?

A. Dùng reference bit để cho trang cơ hội thứ hai trước khi thay.
B. Thay trang lâu nhất chưa được sử dụng.
C. Phần địa chỉ chỉ vị trí bên trong page/frame.
D. Chỉ nạp trang khi trang được tham chiếu.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Thay trang lâu nhất chưa được sử dụng.

**Giải thích:** LRU replacement: Thay trang lâu nhất chưa được sử dụng. Xấp xỉ OPT bằng quá khứ gần.

</details>

### Câu 207. Trong môn Nguyên lý HĐH, Clock replacement được hiểu đúng nhất là gì?

A. Dùng reference bit để cho trang cơ hội thứ hai trước khi thay.
B. Khung trang vật lý trong RAM có kích thước bằng page.
C. Sinh địa chỉ tuyệt đối trong lúc biên dịch khi biết trước vị trí nạp.
D. Hoãn xác định địa chỉ tuyệt đối đến lúc loader nạp chương trình vào bộ nhớ.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Dùng reference bit để cho trang cơ hội thứ hai trước khi thay.

**Giải thích:** Clock replacement: Dùng reference bit để cho trang cơ hội thứ hai trước khi thay. Cài đặt gần LRU hơn FIFO thuần.

</details>

### Câu 208. Trong môn Nguyên lý HĐH, Belady anomaly được hiểu đúng nhất là gì?

A. Hiện tượng hệ thống mất phần lớn thời gian cho page fault và thay trang thay vì chạy tiến trình.
B. Mảng các ô nhớ byte/word nơi chương trình và dữ liệu phải có mặt khi CPU thực hiện.
C. Hiện tượng tăng số frame nhưng số page fault tăng trong một số thuật toán như FIFO.
D. Phần bộ nhớ đã cấp nhưng không được dùng bên trong đơn vị cấp phát.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Hiện tượng tăng số frame nhưng số page fault tăng trong một số thuật toán như FIFO.

**Giải thích:** Belady anomaly: Hiện tượng tăng số frame nhưng số page fault tăng trong một số thuật toán như FIFO. LRU/OPT không gặp do tính stack.

</details>

### Câu 209. Trong môn Nguyên lý HĐH, Local replacement được hiểu đúng nhất là gì?

A. Chia chương trình thành các đoạn logic kích thước biến thiên như code, data, stack.
B. Tiến trình chỉ thay frame thuộc phần cấp phát của chính nó.
C. Mỗi đoạn logic được chia thành các trang để vừa bảo toàn cấu trúc đoạn vừa giảm external fragmentation.
D. Bảng chứa base, limit và quyền của mỗi đoạn.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Tiến trình chỉ thay frame thuộc phần cấp phát của chính nó.

**Giải thích:** Local replacement: Tiến trình chỉ thay frame thuộc phần cấp phát của chính nó. Cô lập ảnh hưởng giữa tiến trình.

</details>

### Câu 210. Trong môn Nguyên lý HĐH, Global replacement được hiểu đúng nhất là gì?

A. Phần bộ nhớ đã cấp nhưng không được dùng bên trong đơn vị cấp phát.
B. Tiến trình có thể lấy frame từ tập frame toàn hệ thống.
C. Thanh ghi x86 chứa địa chỉ cơ sở page directory hiện hành.
D. Thay trang sẽ được dùng lại xa nhất trong tương lai.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Tiến trình có thể lấy frame từ tập frame toàn hệ thống.

**Giải thích:** Global replacement: Tiến trình có thể lấy frame từ tập frame toàn hệ thống. Linh hoạt nhưng có thể ảnh hưởng tiến trình khác.

</details>

### Câu 211. Trong môn Nguyên lý HĐH, CR3 được hiểu đúng nhất là gì?

A. Chỉ nạp module/thủ tục khi nó được gọi.
B. Thanh ghi x86 chứa địa chỉ cơ sở page directory hiện hành.
C. Cache phần cứng chứa các ánh xạ trang gần đây.
D. Bảng chứa base, limit và quyền của mỗi đoạn.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Thanh ghi x86 chứa địa chỉ cơ sở page directory hiện hành.

**Giải thích:** CR3: Thanh ghi x86 chứa địa chỉ cơ sở page directory hiện hành. Dùng trong phân trang x86.

</details>

### Câu 212. Trong môn Nguyên lý HĐH, Phân trang hai mức được hiểu đúng nhất là gì?

A. Xu hướng chương trình truy cập tập nhỏ địa chỉ/trang gần nhau trong thời gian ngắn.
B. Chia RAM thành các phân vùng cố định kích thước trước.
C. Cấu trúc dùng page directory và page table để giảm kích thước bảng trang phải hiện diện.
D. Mảng các ô nhớ byte/word nơi chương trình và dữ liệu phải có mặt khi CPU thực hiện.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Cấu trúc dùng page directory và page table để giảm kích thước bảng trang phải hiện diện.

**Giải thích:** Phân trang hai mức: Cấu trúc dùng page directory và page table để giảm kích thước bảng trang phải hiện diện. Địa chỉ tách thành directory index, table index, offset.

</details>

### Câu 213. Phát biểu nào mô tả đúng nhất về Bộ nhớ chính?

A. Phần địa chỉ chỉ vị trí bên trong page/frame.
B. Vị trí của đối tượng so với đầu module hoặc chương trình.
C. Cache phần cứng chứa các ánh xạ trang gần đây.
D. Mảng các ô nhớ byte/word nơi chương trình và dữ liệu phải có mặt khi CPU thực hiện.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Mảng các ô nhớ byte/word nơi chương trình và dữ liệu phải có mặt khi CPU thực hiện.

**Giải thích:** Khái niệm Bộ nhớ chính trong slide/đề ôn tập gắn với ý: Mảng các ô nhớ byte/word nơi chương trình và dữ liệu phải có mặt khi CPU thực hiện. CPU truy cập trực tiếp RAM.

</details>

### Câu 214. Phát biểu nào mô tả đúng nhất về Phân cấp bộ nhớ?

A. Tổ chức bộ nhớ theo tốc độ, kích thước và chi phí từ thanh ghi, cache, RAM đến đĩa.
B. Khung trang vật lý trong RAM có kích thước bằng page.
C. Thanh ghi x86 chứa địa chỉ cơ sở page directory hiện hành.
D. Thay trang lâu nhất chưa được sử dụng.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Tổ chức bộ nhớ theo tốc độ, kích thước và chi phí từ thanh ghi, cache, RAM đến đĩa.

**Giải thích:** Khái niệm Phân cấp bộ nhớ trong slide/đề ôn tập gắn với ý: Tổ chức bộ nhớ theo tốc độ, kích thước và chi phí từ thanh ghi, cache, RAM đến đĩa. Nhanh thường nhỏ và đắt.

</details>

### Câu 215. Phát biểu nào mô tả đúng nhất về Địa chỉ logic?

A. Địa chỉ do CPU/tiến trình sinh ra trước khi ánh xạ sang vật lý.
B. Mảng các ô nhớ byte/word nơi chương trình và dữ liệu phải có mặt khi CPU thực hiện.
C. Tổng bộ nhớ trống đủ nhưng bị chia thành lỗ nhỏ không liên tục nên không cấp phát được.
D. Phần địa chỉ chỉ vị trí bên trong page/frame.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Địa chỉ do CPU/tiến trình sinh ra trước khi ánh xạ sang vật lý.

**Giải thích:** Khái niệm Địa chỉ logic trong slide/đề ôn tập gắn với ý: Địa chỉ do CPU/tiến trình sinh ra trước khi ánh xạ sang vật lý. Còn gọi là địa chỉ ảo.

</details>

### Câu 216. Phát biểu nào mô tả đúng nhất về Địa chỉ vật lý?

A. Tiến trình chỉ thay frame thuộc phần cấp phát của chính nó.
B. Phần địa chỉ chỉ vị trí bên trong page/frame.
C. Địa chỉ thực của ô nhớ trong bộ nhớ chính.
D. Sự kiện xảy ra khi tiến trình truy cập trang hợp lệ nhưng trang chưa có trong bộ nhớ vật lý.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Địa chỉ thực của ô nhớ trong bộ nhớ chính.

**Giải thích:** Khái niệm Địa chỉ vật lý trong slide/đề ôn tập gắn với ý: Địa chỉ thực của ô nhớ trong bộ nhớ chính. Là địa chỉ trên bus/bộ nhớ.

</details>

### Câu 217. Phát biểu nào mô tả đúng nhất về MMU?

A. Mỗi đoạn logic được chia thành các trang để vừa bảo toàn cấu trúc đoạn vừa giảm external fragmentation.
B. Sự kiện xảy ra khi tiến trình truy cập trang hợp lệ nhưng trang chưa có trong bộ nhớ vật lý.
C. Phần cứng chuyển địa chỉ logic sang địa chỉ vật lý và hỗ trợ bảo vệ.
D. Đưa tiến trình ra bộ nhớ phụ và đưa lại RAM khi cần.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Phần cứng chuyển địa chỉ logic sang địa chỉ vật lý và hỗ trợ bảo vệ.

**Giải thích:** Khái niệm MMU trong slide/đề ôn tập gắn với ý: Phần cứng chuyển địa chỉ logic sang địa chỉ vật lý và hỗ trợ bảo vệ. Memory Management Unit.

</details>

### Câu 218. Phát biểu nào mô tả đúng nhất về Địa chỉ biểu tượng?

A. Chỉ nạp trang khi trang được tham chiếu.
B. Chia chương trình thành các module thay thế nhau trong bộ nhớ để chạy chương trình lớn hơn RAM.
C. Phần cứng chuyển địa chỉ logic sang địa chỉ vật lý và hỗ trợ bảo vệ.
D. Tên đối tượng trong chương trình nguồn như biến hoặc nhãn.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Tên đối tượng trong chương trình nguồn như biến hoặc nhãn.

**Giải thích:** Khái niệm Địa chỉ biểu tượng trong slide/đề ôn tập gắn với ý: Tên đối tượng trong chương trình nguồn như biến hoặc nhãn. Compiler xử lý thành địa chỉ tương đối.

</details>

### Câu 219. Phát biểu nào mô tả đúng nhất về Địa chỉ tương đối?

A. Hoãn ánh xạ địa chỉ đến lúc thực thi bằng hỗ trợ phần cứng.
B. Vị trí của đối tượng so với đầu module hoặc chương trình.
C. Đơn vị cố định của không gian địa chỉ logic trong paging.
D. Sự kiện xảy ra khi tiến trình truy cập trang hợp lệ nhưng trang chưa có trong bộ nhớ vật lý.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Vị trí của đối tượng so với đầu module hoặc chương trình.

**Giải thích:** Khái niệm Địa chỉ tương đối trong slide/đề ôn tập gắn với ý: Vị trí của đối tượng so với đầu module hoặc chương trình. Loader/MMU có thể relocation.

</details>

### Câu 220. Phát biểu nào mô tả đúng nhất về Liên kết địa chỉ khi dịch?

A. Tổng bộ nhớ trống đủ nhưng bị chia thành lỗ nhỏ không liên tục nên không cấp phát được.
B. Hoãn ánh xạ địa chỉ đến lúc thực thi bằng hỗ trợ phần cứng.
C. Mảng các ô nhớ byte/word nơi chương trình và dữ liệu phải có mặt khi CPU thực hiện.
D. Sinh địa chỉ tuyệt đối trong lúc biên dịch khi biết trước vị trí nạp.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Sinh địa chỉ tuyệt đối trong lúc biên dịch khi biết trước vị trí nạp.

**Giải thích:** Khái niệm Liên kết địa chỉ khi dịch trong slide/đề ôn tập gắn với ý: Sinh địa chỉ tuyệt đối trong lúc biên dịch khi biết trước vị trí nạp. Nếu vị trí thay đổi phải dịch lại.

</details>


---

## Chương 5 - Quản lý hệ thống file và FAT

### Câu 221. Trong môn Nguyên lý HĐH, File được hiểu đúng nhất là gì?

A. Đường dẫn bắt đầu từ thư mục hiện thời.
B. Đơn vị lưu trữ thông tin trên bộ nhớ ngoài do HĐH quản lý.
C. Kích thước file tối đa xấp xỉ 4GB trừ 1 byte do trường size 32 bit.
D. Thư mục tổ chức phân cấp từ gốc đến các thư mục con.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Đơn vị lưu trữ thông tin trên bộ nhớ ngoài do HĐH quản lý.

**Giải thích:** File: Đơn vị lưu trữ thông tin trên bộ nhớ ngoài do HĐH quản lý. File có thể chứa dữ liệu hoặc chương trình.

</details>

### Câu 222. Trong môn Nguyên lý HĐH, Hệ thống file được hiểu đúng nhất là gì?

A. Tập cơ chế quản lý file và thư mục trên bộ nhớ ngoài.
B. Gắn một hệ thống file vào cây thư mục tại một điểm gắn.
C. Trường thời gian FAT mã hóa giờ, phút và giây/2 trong một word 16 bit.
D. Đọc dữ liệu từ file vào vùng đệm của tiến trình.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Tập cơ chế quản lý file và thư mục trên bộ nhớ ngoài.

**Giải thích:** Hệ thống file: Tập cơ chế quản lý file và thư mục trên bộ nhớ ngoài. Gồm file và cấu trúc thư mục.

</details>

### Câu 223. Trong môn Nguyên lý HĐH, Tên file được hiểu đúng nhất là gì?

A. Mỗi block file chứa con trỏ tới block tiếp theo.
B. Bit thuộc tính FAT 0x01 biểu diễn file chỉ đọc.
C. Chuỗi ký tự người dùng đọc được để định danh file.
D. Dùng block chỉ mục chứa danh sách con trỏ tới các block dữ liệu của file.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Chuỗi ký tự người dùng đọc được để định danh file.

**Giải thích:** Tên file: Chuỗi ký tự người dùng đọc được để định danh file. Ví dụ hello.c.

</details>

### Câu 224. Trong môn Nguyên lý HĐH, Định danh file được hiểu đúng nhất là gì?

A. Bit thuộc tính FAT 0x01 biểu diễn file chỉ đọc.
B. Thẻ xác định duy nhất một file trong hệ thống.
C. Entry 16 byte mô tả một phân vùng trong bảng phân vùng MBR.
D. Kích thước file tối đa xấp xỉ 4GB trừ 1 byte do trường size 32 bit.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Thẻ xác định duy nhất một file trong hệ thống.

**Giải thích:** Định danh file: Thẻ xác định duy nhất một file trong hệ thống. Có thể trỏ đến metadata còn lại.

</details>

### Câu 225. Trong môn Nguyên lý HĐH, Kiểu file được hiểu đúng nhất là gì?

A. Gắn một hệ thống file vào cây thư mục tại một điểm gắn.
B. Sector đầu tiên của đĩa chứa mã khởi động và bảng phân vùng chính.
C. Thông tin giúp HĐH/ứng dụng xử lý file đúng cách.
D. Tạo file bằng cách cấp vùng lưu trữ và thêm bản ghi thư mục.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Thông tin giúp HĐH/ứng dụng xử lý file đúng cách.

**Giải thích:** Kiểu file: Thông tin giúp HĐH/ứng dụng xử lý file đúng cách. Có thể suy ra từ phần mở rộng.

</details>

### Câu 226. Trong môn Nguyên lý HĐH, Vị trí file được hiểu đúng nhất là gì?

A. Thông tin trỏ tới thiết bị và vị trí lưu trữ file.
B. Truy cập khối/vị trí bất kỳ trong file bằng chỉ số hoặc offset.
C. Bit thuộc tính FAT 0x10 biểu diễn thư mục.
D. Thu gọn file, giải phóng phần dữ liệu sau kích thước mới.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Thông tin trỏ tới thiết bị và vị trí lưu trữ file.

**Giải thích:** Vị trí file: Thông tin trỏ tới thiết bị và vị trí lưu trữ file. Dùng để tìm dữ liệu trên đĩa.

</details>

### Câu 227. Trong môn Nguyên lý HĐH, Kích thước file được hiểu đúng nhất là gì?

A. Kích thước hiện thời hoặc tối đa của file.
B. Lưu file trong các block liên tiếp trên đĩa.
C. Thư mục tổ chức phân cấp từ gốc đến các thư mục con.
D. Ghi dữ liệu vào file tại vị trí do con trỏ file/ghi xác định.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Kích thước hiện thời hoặc tối đa của file.

**Giải thích:** Kích thước file: Kích thước hiện thời hoặc tối đa của file. Được lưu trong metadata.

</details>

### Câu 228. Trong môn Nguyên lý HĐH, Bảo vệ file được hiểu đúng nhất là gì?

A. Thư mục tổ chức phân cấp từ gốc đến các thư mục con.
B. Trường thời gian FAT mã hóa giờ, phút và giây/2 trong một word 16 bit.
C. Thông tin quyền truy nhập như đọc, ghi, thực thi.
D. Bit thuộc tính FAT 0x01 biểu diễn file chỉ đọc.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Thông tin quyền truy nhập như đọc, ghi, thực thi.

**Giải thích:** Bảo vệ file: Thông tin quyền truy nhập như đọc, ghi, thực thi. Ngăn truy nhập bất hợp lệ.

</details>

### Câu 229. Trong môn Nguyên lý HĐH, Thời gian file được hiểu đúng nhất là gì?

A. Các mốc tạo, sửa đổi và truy cập cuối của file.
B. Hai byte cuối sector MBR có giá trị 55 AA để nhận diện MBR hợp lệ.
C. Giá trị FAT bằng 0 biểu diễn cluster tự do.
D. Thông tin trỏ tới thiết bị và vị trí lưu trữ file.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Các mốc tạo, sửa đổi và truy cập cuối của file.

**Giải thích:** Thời gian file: Các mốc tạo, sửa đổi và truy cập cuối của file. Hỗ trợ quản lý và sao lưu.

</details>

### Câu 230. Trong môn Nguyên lý HĐH, Bản ghi file được hiểu đúng nhất là gì?

A. Cấu trúc dữ liệu trong thư mục lưu thuộc tính và thông tin định vị file.
B. Các block tự do được nối bằng con trỏ.
C. Thẻ xác định duy nhất một file trong hệ thống.
D. Dùng block chỉ mục chứa danh sách con trỏ tới các block dữ liệu của file.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Cấu trúc dữ liệu trong thư mục lưu thuộc tính và thông tin định vị file.

**Giải thích:** Bản ghi file: Cấu trúc dữ liệu trong thư mục lưu thuộc tính và thông tin định vị file. Directory entry là ví dụ.

</details>

### Câu 231. Trong môn Nguyên lý HĐH, Create file được hiểu đúng nhất là gì?

A. Tất cả file nằm trong một thư mục duy nhất.
B. Tạo file bằng cách cấp vùng lưu trữ và thêm bản ghi thư mục.
C. Giá trị FAT32 0x0FFFFFF7 biểu diễn cluster bị hỏng.
D. Thông tin giúp HĐH/ứng dụng xử lý file đúng cách.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Tạo file bằng cách cấp vùng lưu trữ và thêm bản ghi thư mục.

**Giải thích:** Create file: Tạo file bằng cách cấp vùng lưu trữ và thêm bản ghi thư mục. Cần tìm vùng tự do.

</details>

### Câu 232. Trong môn Nguyên lý HĐH, Write file được hiểu đúng nhất là gì?

A. Ghi dữ liệu vào file tại vị trí do con trỏ file/ghi xác định.
B. Entry 16 byte mô tả một phân vùng trong bảng phân vùng MBR.
C. Đọc/ghi file theo thứ tự từ đầu đến cuối hoặc theo con trỏ hiện tại.
D. Đường dẫn bắt đầu từ thư mục hiện thời.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Ghi dữ liệu vào file tại vị trí do con trỏ file/ghi xác định.

**Giải thích:** Write file: Ghi dữ liệu vào file tại vị trí do con trỏ file/ghi xác định. Có thể làm tăng kích thước file.

</details>

### Câu 233. Trong môn Nguyên lý HĐH, Read file được hiểu đúng nhất là gì?

A. Đọc dữ liệu từ file vào vùng đệm của tiến trình.
B. Đơn vị cấp phát của FAT gồm một hoặc nhiều sector.
C. Entry 16 byte mô tả một phân vùng trong bảng phân vùng MBR.
D. Truy cập khối/vị trí bất kỳ trong file bằng chỉ số hoặc offset.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Đọc dữ liệu từ file vào vùng đệm của tiến trình.

**Giải thích:** Read file: Đọc dữ liệu từ file vào vùng đệm của tiến trình. Dùng con trỏ đọc/file pointer.

</details>

### Câu 234. Trong môn Nguyên lý HĐH, Seek file được hiểu đúng nhất là gì?

A. Xóa bản ghi thư mục và giải phóng vùng lưu trữ của file.
B. Trường ngày FAT mã hóa năm từ 1980, tháng và ngày trong một word 16 bit.
C. Hai byte cuối sector MBR có giá trị 55 AA để nhận diện MBR hợp lệ.
D. Thay đổi vị trí hiện thời trong file.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Thay đổi vị trí hiện thời trong file.

**Giải thích:** Seek file: Thay đổi vị trí hiện thời trong file. Hỗ trợ truy nhập trực tiếp.

</details>

### Câu 235. Trong môn Nguyên lý HĐH, Delete file được hiểu đúng nhất là gì?

A. Ghi dữ liệu vào file tại vị trí do con trỏ file/ghi xác định.
B. Xóa bản ghi thư mục và giải phóng vùng lưu trữ của file.
C. Tên ngắn gồm tối đa 8 ký tự tên và 3 ký tự phần mở rộng.
D. Sector đầu tiên của đĩa chứa mã khởi động và bảng phân vùng chính.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Xóa bản ghi thư mục và giải phóng vùng lưu trữ của file.

**Giải thích:** Delete file: Xóa bản ghi thư mục và giải phóng vùng lưu trữ của file. Có thể là xóa logic hoặc vật lý.

</details>

### Câu 236. Trong môn Nguyên lý HĐH, Truncate file được hiểu đúng nhất là gì?

A. Đường dẫn bắt đầu từ thư mục gốc.
B. Kết thúc phiên mở file, cập nhật metadata/buffer và giải phóng entry mở.
C. Thu gọn file, giải phóng phần dữ liệu sau kích thước mới.
D. Lưu file trong các block liên tiếp trên đĩa.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Thu gọn file, giải phóng phần dữ liệu sau kích thước mới.

**Giải thích:** Truncate file: Thu gọn file, giải phóng phần dữ liệu sau kích thước mới. Giữ file nhưng giảm nội dung.

</details>

### Câu 237. Trong môn Nguyên lý HĐH, Open file được hiểu đúng nhất là gì?

A. Đường dẫn bắt đầu từ thư mục gốc.
B. Cách đánh số tuyến tính các sector logic bắt đầu từ 0.
C. Mở file để tạo trạng thái làm việc và tránh duyệt thư mục lặp lại.
D. Dùng block chỉ mục chứa danh sách con trỏ tới các block dữ liệu của file.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Mở file để tạo trạng thái làm việc và tránh duyệt thư mục lặp lại.

**Giải thích:** Open file: Mở file để tạo trạng thái làm việc và tránh duyệt thư mục lặp lại. Trả về handle/descriptor.

</details>

### Câu 238. Trong môn Nguyên lý HĐH, Close file được hiểu đúng nhất là gì?

A. Tất cả file nằm trong một thư mục duy nhất.
B. Ghi dữ liệu vào file tại vị trí do con trỏ file/ghi xác định.
C. Kết thúc phiên mở file, cập nhật metadata/buffer và giải phóng entry mở.
D. Mỗi bit biểu diễn trạng thái rỗi/bận của một block.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Kết thúc phiên mở file, cập nhật metadata/buffer và giải phóng entry mở.

**Giải thích:** Close file: Kết thúc phiên mở file, cập nhật metadata/buffer và giải phóng entry mở. Quan trọng khi có buffer ghi.

</details>

### Câu 239. Trong môn Nguyên lý HĐH, Truy nhập tuần tự được hiểu đúng nhất là gì?

A. Thu gọn file, giải phóng phần dữ liệu sau kích thước mới.
B. Đọc dữ liệu từ file vào vùng đệm của tiến trình.
C. Đọc/ghi file theo thứ tự từ đầu đến cuối hoặc theo con trỏ hiện tại.
D. Đường dẫn bắt đầu từ thư mục hiện thời.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Đọc/ghi file theo thứ tự từ đầu đến cuối hoặc theo con trỏ hiện tại.

**Giải thích:** Truy nhập tuần tự: Đọc/ghi file theo thứ tự từ đầu đến cuối hoặc theo con trỏ hiện tại. Phù hợp log, text.

</details>

### Câu 240. Trong môn Nguyên lý HĐH, Truy nhập trực tiếp được hiểu đúng nhất là gì?

A. Bit thuộc tính FAT 0x02 biểu diễn file ẩn.
B. Truy cập khối/vị trí bất kỳ trong file bằng chỉ số hoặc offset.
C. Thẻ xác định duy nhất một file trong hệ thống.
D. Kết thúc phiên mở file, cập nhật metadata/buffer và giải phóng entry mở.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Truy cập khối/vị trí bất kỳ trong file bằng chỉ số hoặc offset.

**Giải thích:** Truy nhập trực tiếp: Truy cập khối/vị trí bất kỳ trong file bằng chỉ số hoặc offset. Phù hợp database.

</details>

### Câu 241. Trong môn Nguyên lý HĐH, Thư mục một mức được hiểu đúng nhất là gì?

A. Đường dẫn bắt đầu từ thư mục hiện thời.
B. Trường ngày FAT mã hóa năm từ 1980, tháng và ngày trong một word 16 bit.
C. Tập cơ chế quản lý file và thư mục trên bộ nhớ ngoài.
D. Tất cả file nằm trong một thư mục duy nhất.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Tất cả file nằm trong một thư mục duy nhất.

**Giải thích:** Thư mục một mức: Tất cả file nằm trong một thư mục duy nhất. Đơn giản nhưng dễ trùng tên.

</details>

### Câu 242. Trong môn Nguyên lý HĐH, Thư mục cây được hiểu đúng nhất là gì?

A. Thư mục tổ chức phân cấp từ gốc đến các thư mục con.
B. Mỗi bit biểu diễn trạng thái rỗi/bận của một block.
C. Thông tin quyền truy nhập như đọc, ghi, thực thi.
D. Kết thúc phiên mở file, cập nhật metadata/buffer và giải phóng entry mở.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Thư mục tổ chức phân cấp từ gốc đến các thư mục con.

**Giải thích:** Thư mục cây: Thư mục tổ chức phân cấp từ gốc đến các thư mục con. Hỗ trợ absolute/relative path.

</details>

### Câu 243. Trong môn Nguyên lý HĐH, Đường dẫn tuyệt đối được hiểu đúng nhất là gì?

A. Đường dẫn bắt đầu từ thư mục gốc.
B. Giá trị FAT32 từ 0x0FFFFFF8 đến 0x0FFFFFFF biểu diễn cuối chuỗi cluster.
C. Các block tự do được nối bằng con trỏ.
D. Thu gọn file, giải phóng phần dữ liệu sau kích thước mới.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Đường dẫn bắt đầu từ thư mục gốc.

**Giải thích:** Đường dẫn tuyệt đối: Đường dẫn bắt đầu từ thư mục gốc. Xác định độc lập thư mục hiện hành.

</details>

### Câu 244. Trong môn Nguyên lý HĐH, Đường dẫn tương đối được hiểu đúng nhất là gì?

A. Thông tin trỏ tới thiết bị và vị trí lưu trữ file.
B. Kích thước hiện thời hoặc tối đa của file.
C. Đường dẫn bắt đầu từ thư mục hiện thời.
D. Đọc dữ liệu từ file vào vùng đệm của tiến trình.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Đường dẫn bắt đầu từ thư mục hiện thời.

**Giải thích:** Đường dẫn tương đối: Đường dẫn bắt đầu từ thư mục hiện thời. Phụ thuộc context.

</details>

### Câu 245. Trong môn Nguyên lý HĐH, Mount được hiểu đúng nhất là gì?

A. Thu gọn file, giải phóng phần dữ liệu sau kích thước mới.
B. Kích thước hiện thời hoặc tối đa của file.
C. Các block tự do được nối bằng con trỏ.
D. Gắn một hệ thống file vào cây thư mục tại một điểm gắn.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Gắn một hệ thống file vào cây thư mục tại một điểm gắn.

**Giải thích:** Mount: Gắn một hệ thống file vào cây thư mục tại một điểm gắn. Hợp nhất namespace.

</details>

### Câu 246. Trong môn Nguyên lý HĐH, Cấp phát liên tục cho file được hiểu đúng nhất là gì?

A. Thay đổi vị trí hiện thời trong file.
B. Tên ngắn gồm tối đa 8 ký tự tên và 3 ký tự phần mở rộng.
C. Sector đầu tiên của đĩa chứa mã khởi động và bảng phân vùng chính.
D. Lưu file trong các block liên tiếp trên đĩa.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Lưu file trong các block liên tiếp trên đĩa.

**Giải thích:** Cấp phát liên tục cho file: Lưu file trong các block liên tiếp trên đĩa. Nhanh nhưng có external fragmentation và khó mở rộng.

</details>

### Câu 247. Trong môn Nguyên lý HĐH, Cấp phát liên kết cho file được hiểu đúng nhất là gì?

A. Chuỗi ký tự người dùng đọc được để định danh file.
B. Đơn vị cấp phát của FAT gồm một hoặc nhiều sector.
C. Bit thuộc tính FAT 0x02 biểu diễn file ẩn.
D. Mỗi block file chứa con trỏ tới block tiếp theo.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Mỗi block file chứa con trỏ tới block tiếp theo.

**Giải thích:** Cấp phát liên kết cho file: Mỗi block file chứa con trỏ tới block tiếp theo. Không external fragmentation nhưng truy nhập trực tiếp kém.

</details>

### Câu 248. Trong môn Nguyên lý HĐH, Cấp phát chỉ mục được hiểu đúng nhất là gì?

A. Đơn vị cấp phát của FAT gồm một hoặc nhiều sector.
B. Trường thời gian FAT mã hóa giờ, phút và giây/2 trong một word 16 bit.
C. Dùng block chỉ mục chứa danh sách con trỏ tới các block dữ liệu của file.
D. Thẻ xác định duy nhất một file trong hệ thống.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Dùng block chỉ mục chứa danh sách con trỏ tới các block dữ liệu của file.

**Giải thích:** Cấp phát chỉ mục: Dùng block chỉ mục chứa danh sách con trỏ tới các block dữ liệu của file. Hỗ trợ direct access với overhead index.

</details>

### Câu 249. Trong môn Nguyên lý HĐH, Bitmap vùng trống được hiểu đúng nhất là gì?

A. Thông tin giúp HĐH/ứng dụng xử lý file đúng cách.
B. Mỗi bit biểu diễn trạng thái rỗi/bận của một block.
C. Đường dẫn bắt đầu từ thư mục gốc.
D. Thay đổi vị trí hiện thời trong file.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Mỗi bit biểu diễn trạng thái rỗi/bận của một block.

**Giải thích:** Bitmap vùng trống: Mỗi bit biểu diễn trạng thái rỗi/bận của một block. Tìm vùng liên tiếp khá thuận tiện.

</details>

### Câu 250. Trong môn Nguyên lý HĐH, Danh sách vùng trống được hiểu đúng nhất là gì?

A. Chuỗi ký tự người dùng đọc được để định danh file.
B. Các block tự do được nối bằng con trỏ.
C. Hai byte cuối sector MBR có giá trị 55 AA để nhận diện MBR hợp lệ.
D. Đơn vị cấp phát của FAT gồm một hoặc nhiều sector.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Các block tự do được nối bằng con trỏ.

**Giải thích:** Danh sách vùng trống: Các block tự do được nối bằng con trỏ. Đơn giản nhưng khó tìm nhiều block liên tiếp nhanh.

</details>

### Câu 251. Trong môn Nguyên lý HĐH, MBR được hiểu đúng nhất là gì?

A. Tên ngắn gồm tối đa 8 ký tự tên và 3 ký tự phần mở rộng.
B. Chuỗi ký tự người dùng đọc được để định danh file.
C. BIOS Parameter Block trong boot sector chứa tham số như bytes/sector, sectors/cluster, số FAT.
D. Sector đầu tiên của đĩa chứa mã khởi động và bảng phân vùng chính.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Sector đầu tiên của đĩa chứa mã khởi động và bảng phân vùng chính.

**Giải thích:** MBR: Sector đầu tiên của đĩa chứa mã khởi động và bảng phân vùng chính. Có chữ ký 0x55AA.

</details>

### Câu 252. Trong môn Nguyên lý HĐH, Chữ ký MBR được hiểu đúng nhất là gì?

A. Hai byte cuối sector MBR có giá trị 55 AA để nhận diện MBR hợp lệ.
B. Cách đánh số tuyến tính các sector logic bắt đầu từ 0.
C. Dùng block chỉ mục chứa danh sách con trỏ tới các block dữ liệu của file.
D. Gắn một hệ thống file vào cây thư mục tại một điểm gắn.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Hai byte cuối sector MBR có giá trị 55 AA để nhận diện MBR hợp lệ.

**Giải thích:** Chữ ký MBR: Hai byte cuối sector MBR có giá trị 55 AA để nhận diện MBR hợp lệ. Thường viết là 0x55AA.

</details>

### Câu 253. Trong môn Nguyên lý HĐH, Bản ghi phân vùng MBR được hiểu đúng nhất là gì?

A. Cách đánh số tuyến tính các sector logic bắt đầu từ 0.
B. Entry 16 byte mô tả một phân vùng trong bảng phân vùng MBR.
C. Bit thuộc tính FAT 0x10 biểu diễn thư mục.
D. Giá trị FAT32 0x0FFFFFF7 biểu diễn cluster bị hỏng.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Entry 16 byte mô tả một phân vùng trong bảng phân vùng MBR.

**Giải thích:** Bản ghi phân vùng MBR: Entry 16 byte mô tả một phân vùng trong bảng phân vùng MBR. MBR truyền thống có 4 entry.

</details>

### Câu 254. Trong môn Nguyên lý HĐH, CHS được hiểu đúng nhất là gì?

A. Cách định vị sector bằng Cylinder, Head và Sector.
B. Trường thời gian FAT mã hóa giờ, phút và giây/2 trong một word 16 bit.
C. Đọc/ghi file theo thứ tự từ đầu đến cuối hoặc theo con trỏ hiện tại.
D. Bảng quản lý chuỗi cluster của file, cluster tự do và cluster hỏng.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Cách định vị sector bằng Cylinder, Head và Sector.

**Giải thích:** CHS: Cách định vị sector bằng Cylinder, Head và Sector. Sector thường đánh số từ 1 trong CHS.

</details>

### Câu 255. Trong môn Nguyên lý HĐH, LBA được hiểu đúng nhất là gì?

A. Đơn vị cấp phát của FAT gồm một hoặc nhiều sector.
B. Bit thuộc tính FAT 0x02 biểu diễn file ẩn.
C. Cách đánh số tuyến tính các sector logic bắt đầu từ 0.
D. Tập cơ chế quản lý file và thư mục trên bộ nhớ ngoài.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Cách đánh số tuyến tính các sector logic bắt đầu từ 0.

**Giải thích:** LBA: Cách đánh số tuyến tính các sector logic bắt đầu từ 0. Dễ tính toán hơn CHS.

</details>

### Câu 256. Trong môn Nguyên lý HĐH, FAT được hiểu đúng nhất là gì?

A. Bảng quản lý chuỗi cluster của file, cluster tự do và cluster hỏng.
B. Kích thước hiện thời hoặc tối đa của file.
C. Các biến thể FAT khác nhau ở số bit của mỗi phần tử FAT.
D. Thư mục tổ chức phân cấp từ gốc đến các thư mục con.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Bảng quản lý chuỗi cluster của file, cluster tự do và cluster hỏng.

**Giải thích:** FAT: Bảng quản lý chuỗi cluster của file, cluster tự do và cluster hỏng. File Allocation Table.

</details>

### Câu 257. Trong môn Nguyên lý HĐH, Cluster được hiểu đúng nhất là gì?

A. Tạo file bằng cách cấp vùng lưu trữ và thêm bản ghi thư mục.
B. Đơn vị cấp phát của FAT gồm một hoặc nhiều sector.
C. Trường thời gian FAT mã hóa giờ, phút và giây/2 trong một word 16 bit.
D. Mỗi block file chứa con trỏ tới block tiếp theo.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Đơn vị cấp phát của FAT gồm một hoặc nhiều sector.

**Giải thích:** Cluster: Đơn vị cấp phát của FAT gồm một hoặc nhiều sector. File chiếm số nguyên cluster.

</details>

### Câu 258. Trong môn Nguyên lý HĐH, FAT12/16/32 được hiểu đúng nhất là gì?

A. Đường dẫn bắt đầu từ thư mục gốc.
B. Các biến thể FAT khác nhau ở số bit của mỗi phần tử FAT.
C. Kích thước file tối đa xấp xỉ 4GB trừ 1 byte do trường size 32 bit.
D. Bit thuộc tính FAT 0x01 biểu diễn file chỉ đọc.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Các biến thể FAT khác nhau ở số bit của mỗi phần tử FAT.

**Giải thích:** FAT12/16/32: Các biến thể FAT khác nhau ở số bit của mỗi phần tử FAT. FAT32 dùng entry 32 bit.

</details>

### Câu 259. Trong môn Nguyên lý HĐH, FAT free cluster được hiểu đúng nhất là gì?

A. Giá trị FAT bằng 0 biểu diễn cluster tự do.
B. Chuỗi ký tự người dùng đọc được để định danh file.
C. Sector đầu tiên của đĩa chứa mã khởi động và bảng phân vùng chính.
D. Đơn vị lưu trữ thông tin trên bộ nhớ ngoài do HĐH quản lý.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Giá trị FAT bằng 0 biểu diễn cluster tự do.

**Giải thích:** FAT free cluster: Giá trị FAT bằng 0 biểu diễn cluster tự do. Có thể cấp cho file mới.

</details>

### Câu 260. Trong môn Nguyên lý HĐH, FAT bad cluster được hiểu đúng nhất là gì?

A. Ghi dữ liệu vào file tại vị trí do con trỏ file/ghi xác định.
B. Xóa bản ghi thư mục và giải phóng vùng lưu trữ của file.
C. Giá trị FAT32 0x0FFFFFF7 biểu diễn cluster bị hỏng.
D. Trường thời gian FAT mã hóa giờ, phút và giây/2 trong một word 16 bit.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Giá trị FAT32 0x0FFFFFF7 biểu diễn cluster bị hỏng.

**Giải thích:** FAT bad cluster: Giá trị FAT32 0x0FFFFFF7 biểu diễn cluster bị hỏng. Không cấp phát cho file.

</details>

### Câu 261. Trong môn Nguyên lý HĐH, FAT EOC được hiểu đúng nhất là gì?

A. Tất cả file nằm trong một thư mục duy nhất.
B. Giá trị FAT32 từ 0x0FFFFFF8 đến 0x0FFFFFFF biểu diễn cuối chuỗi cluster.
C. Đơn vị cấp phát của FAT gồm một hoặc nhiều sector.
D. Thay đổi vị trí hiện thời trong file.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Giá trị FAT32 từ 0x0FFFFFF8 đến 0x0FFFFFFF biểu diễn cuối chuỗi cluster.

**Giải thích:** FAT EOC: Giá trị FAT32 từ 0x0FFFFFF8 đến 0x0FFFFFFF biểu diễn cuối chuỗi cluster. Thường dùng 0x0FFFFFFF.

</details>

### Câu 262. Trong môn Nguyên lý HĐH, FAT32 max file size được hiểu đúng nhất là gì?

A. Đường dẫn bắt đầu từ thư mục hiện thời.
B. Cách đánh số tuyến tính các sector logic bắt đầu từ 0.
C. Thông tin quyền truy nhập như đọc, ghi, thực thi.
D. Kích thước file tối đa xấp xỉ 4GB trừ 1 byte do trường size 32 bit.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Kích thước file tối đa xấp xỉ 4GB trừ 1 byte do trường size 32 bit.

**Giải thích:** FAT32 max file size: Kích thước file tối đa xấp xỉ 4GB trừ 1 byte do trường size 32 bit. Đây là câu hay gặp.

</details>

### Câu 263. Trong môn Nguyên lý HĐH, Tên FAT 8.3 được hiểu đúng nhất là gì?

A. BIOS Parameter Block trong boot sector chứa tham số như bytes/sector, sectors/cluster, số FAT.
B. Tên ngắn gồm tối đa 8 ký tự tên và 3 ký tự phần mở rộng.
C. Sector đầu tiên của đĩa chứa mã khởi động và bảng phân vùng chính.
D. Tạo file bằng cách cấp vùng lưu trữ và thêm bản ghi thư mục.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Tên ngắn gồm tối đa 8 ký tự tên và 3 ký tự phần mở rộng.

**Giải thích:** Tên FAT 8.3: Tên ngắn gồm tối đa 8 ký tự tên và 3 ký tự phần mở rộng. Lưu trong directory entry cổ điển.

</details>

### Câu 264. Trong môn Nguyên lý HĐH, Thuộc tính Read-only được hiểu đúng nhất là gì?

A. Tập cơ chế quản lý file và thư mục trên bộ nhớ ngoài.
B. Thông tin giúp HĐH/ứng dụng xử lý file đúng cách.
C. Gắn một hệ thống file vào cây thư mục tại một điểm gắn.
D. Bit thuộc tính FAT 0x01 biểu diễn file chỉ đọc.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Bit thuộc tính FAT 0x01 biểu diễn file chỉ đọc.

**Giải thích:** Thuộc tính Read-only: Bit thuộc tính FAT 0x01 biểu diễn file chỉ đọc. Không cho ghi nếu tôn trọng thuộc tính.

</details>

### Câu 265. Trong môn Nguyên lý HĐH, Thuộc tính Hidden được hiểu đúng nhất là gì?

A. Thông tin trỏ tới thiết bị và vị trí lưu trữ file.
B. Truy cập khối/vị trí bất kỳ trong file bằng chỉ số hoặc offset.
C. Bit thuộc tính FAT 0x02 biểu diễn file ẩn.
D. Giá trị FAT32 0x0FFFFFF7 biểu diễn cluster bị hỏng.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Bit thuộc tính FAT 0x02 biểu diễn file ẩn.

**Giải thích:** Thuộc tính Hidden: Bit thuộc tính FAT 0x02 biểu diễn file ẩn. File explorer có thể không hiển thị.

</details>

### Câu 266. Trong môn Nguyên lý HĐH, Thuộc tính Directory được hiểu đúng nhất là gì?

A. Các mốc tạo, sửa đổi và truy cập cuối của file.
B. Đọc/ghi file theo thứ tự từ đầu đến cuối hoặc theo con trỏ hiện tại.
C. Kích thước file tối đa xấp xỉ 4GB trừ 1 byte do trường size 32 bit.
D. Bit thuộc tính FAT 0x10 biểu diễn thư mục.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Bit thuộc tính FAT 0x10 biểu diễn thư mục.

**Giải thích:** Thuộc tính Directory: Bit thuộc tính FAT 0x10 biểu diễn thư mục. Hidden directory có 0x02|0x10=0x12.

</details>

### Câu 267. Trong môn Nguyên lý HĐH, FAT date được hiểu đúng nhất là gì?

A. Trường ngày FAT mã hóa năm từ 1980, tháng và ngày trong một word 16 bit.
B. BIOS Parameter Block trong boot sector chứa tham số như bytes/sector, sectors/cluster, số FAT.
C. Ghi dữ liệu vào file tại vị trí do con trỏ file/ghi xác định.
D. Đường dẫn bắt đầu từ thư mục hiện thời.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Trường ngày FAT mã hóa năm từ 1980, tháng và ngày trong một word 16 bit.

**Giải thích:** FAT date: Trường ngày FAT mã hóa năm từ 1980, tháng và ngày trong một word 16 bit. Bits 15-9 year-1980, 8-5 month, 4-0 day.

</details>

### Câu 268. Trong môn Nguyên lý HĐH, FAT time được hiểu đúng nhất là gì?

A. Sector đầu tiên của đĩa chứa mã khởi động và bảng phân vùng chính.
B. Đơn vị lưu trữ thông tin trên bộ nhớ ngoài do HĐH quản lý.
C. Đơn vị cấp phát của FAT gồm một hoặc nhiều sector.
D. Trường thời gian FAT mã hóa giờ, phút và giây/2 trong một word 16 bit.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Trường thời gian FAT mã hóa giờ, phút và giây/2 trong một word 16 bit.

**Giải thích:** FAT time: Trường thời gian FAT mã hóa giờ, phút và giây/2 trong một word 16 bit. Bits 15-11 hour, 10-5 minute, 4-0 second/2.

</details>

### Câu 269. Trong môn Nguyên lý HĐH, BPB được hiểu đúng nhất là gì?

A. BIOS Parameter Block trong boot sector chứa tham số như bytes/sector, sectors/cluster, số FAT.
B. Truy cập khối/vị trí bất kỳ trong file bằng chỉ số hoặc offset.
C. Thẻ xác định duy nhất một file trong hệ thống.
D. Ghi dữ liệu vào file tại vị trí do con trỏ file/ghi xác định.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** BIOS Parameter Block trong boot sector chứa tham số như bytes/sector, sectors/cluster, số FAT.

**Giải thích:** BPB: BIOS Parameter Block trong boot sector chứa tham số như bytes/sector, sectors/cluster, số FAT. Dùng để tính vùng dữ liệu.

</details>

### Câu 270. Phát biểu nào mô tả đúng nhất về File?

A. Mở file để tạo trạng thái làm việc và tránh duyệt thư mục lặp lại.
B. Đường dẫn bắt đầu từ thư mục gốc.
C. Tên ngắn gồm tối đa 8 ký tự tên và 3 ký tự phần mở rộng.
D. Đơn vị lưu trữ thông tin trên bộ nhớ ngoài do HĐH quản lý.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Đơn vị lưu trữ thông tin trên bộ nhớ ngoài do HĐH quản lý.

**Giải thích:** Khái niệm File trong slide/đề ôn tập gắn với ý: Đơn vị lưu trữ thông tin trên bộ nhớ ngoài do HĐH quản lý. File có thể chứa dữ liệu hoặc chương trình.

</details>

### Câu 271. Phát biểu nào mô tả đúng nhất về Hệ thống file?

A. Trường ngày FAT mã hóa năm từ 1980, tháng và ngày trong một word 16 bit.
B. Hai byte cuối sector MBR có giá trị 55 AA để nhận diện MBR hợp lệ.
C. Tập cơ chế quản lý file và thư mục trên bộ nhớ ngoài.
D. Thẻ xác định duy nhất một file trong hệ thống.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Tập cơ chế quản lý file và thư mục trên bộ nhớ ngoài.

**Giải thích:** Khái niệm Hệ thống file trong slide/đề ôn tập gắn với ý: Tập cơ chế quản lý file và thư mục trên bộ nhớ ngoài. Gồm file và cấu trúc thư mục.

</details>

### Câu 272. Phát biểu nào mô tả đúng nhất về Tên file?

A. Mở file để tạo trạng thái làm việc và tránh duyệt thư mục lặp lại.
B. Đường dẫn bắt đầu từ thư mục gốc.
C. Chuỗi ký tự người dùng đọc được để định danh file.
D. Tên ngắn gồm tối đa 8 ký tự tên và 3 ký tự phần mở rộng.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Chuỗi ký tự người dùng đọc được để định danh file.

**Giải thích:** Khái niệm Tên file trong slide/đề ôn tập gắn với ý: Chuỗi ký tự người dùng đọc được để định danh file. Ví dụ hello.c.

</details>

### Câu 273. Phát biểu nào mô tả đúng nhất về Định danh file?

A. Thẻ xác định duy nhất một file trong hệ thống.
B. Thay đổi vị trí hiện thời trong file.
C. Ghi dữ liệu vào file tại vị trí do con trỏ file/ghi xác định.
D. Đường dẫn bắt đầu từ thư mục gốc.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Thẻ xác định duy nhất một file trong hệ thống.

**Giải thích:** Khái niệm Định danh file trong slide/đề ôn tập gắn với ý: Thẻ xác định duy nhất một file trong hệ thống. Có thể trỏ đến metadata còn lại.

</details>

### Câu 274. Phát biểu nào mô tả đúng nhất về Kiểu file?

A. Thông tin giúp HĐH/ứng dụng xử lý file đúng cách.
B. Giá trị FAT bằng 0 biểu diễn cluster tự do.
C. Đường dẫn bắt đầu từ thư mục gốc.
D. Dùng block chỉ mục chứa danh sách con trỏ tới các block dữ liệu của file.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Thông tin giúp HĐH/ứng dụng xử lý file đúng cách.

**Giải thích:** Khái niệm Kiểu file trong slide/đề ôn tập gắn với ý: Thông tin giúp HĐH/ứng dụng xử lý file đúng cách. Có thể suy ra từ phần mở rộng.

</details>

### Câu 275. Phát biểu nào mô tả đúng nhất về Vị trí file?

A. Truy cập khối/vị trí bất kỳ trong file bằng chỉ số hoặc offset.
B. Tạo file bằng cách cấp vùng lưu trữ và thêm bản ghi thư mục.
C. Thông tin trỏ tới thiết bị và vị trí lưu trữ file.
D. Ghi dữ liệu vào file tại vị trí do con trỏ file/ghi xác định.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Thông tin trỏ tới thiết bị và vị trí lưu trữ file.

**Giải thích:** Khái niệm Vị trí file trong slide/đề ôn tập gắn với ý: Thông tin trỏ tới thiết bị và vị trí lưu trữ file. Dùng để tìm dữ liệu trên đĩa.

</details>


---

## Chương 6 - Quản lý vào ra và điều phối đĩa

### Câu 276. Trong môn Nguyên lý HĐH, Thiết bị khối được hiểu đúng nhất là gì?

A. Thời gian di chuyển đầu đọc đến cylinder cần truy cập.
B. Thiết bị lưu trữ dữ liệu theo khối có địa chỉ và có thể đọc/ghi khối độc lập.
C. Mục xác định chương trình xử lý ngắt tương ứng.
D. Buffer chứa dữ liệu đã đọc sẵn để tiến trình có thể lấy nhanh.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Thiết bị lưu trữ dữ liệu theo khối có địa chỉ và có thể đọc/ghi khối độc lập.

**Giải thích:** Thiết bị khối: Thiết bị lưu trữ dữ liệu theo khối có địa chỉ và có thể đọc/ghi khối độc lập. Ví dụ đĩa.

</details>

### Câu 277. Trong môn Nguyên lý HĐH, Thiết bị ký tự được hiểu đúng nhất là gì?

A. Giống C-SCAN nhưng chỉ quay giữa yêu cầu lớn nhất và nhỏ nhất đang có.
B. Buffer gom dữ liệu xuất trước khi ghi ra thiết bị.
C. Buffer chứa dữ liệu đã đọc sẵn để tiến trình có thể lấy nhanh.
D. Thiết bị trao đổi luồng ký tự, thường không có cấu trúc khối và không seek.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Thiết bị trao đổi luồng ký tự, thường không có cấu trúc khối và không seek.

**Giải thích:** Thiết bị ký tự: Thiết bị trao đổi luồng ký tự, thường không có cấu trúc khối và không seek. Ví dụ bàn phím, chuột, máy in.

</details>

### Câu 278. Trong môn Nguyên lý HĐH, Device controller được hiểu đúng nhất là gì?

A. Thiết bị trao đổi luồng ký tự, thường không có cấu trúc khối và không seek.
B. Thời gian di chuyển đầu đọc đến cylinder cần truy cập.
C. Bộ điều khiển thiết bị nhận lệnh từ CPU/HĐH, điều khiển thiết bị và báo trạng thái.
D. Vùng đệm tạo khi khởi tạo hệ thống, dùng chung và được cấp phát cho file/thiết bị khi cần.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Bộ điều khiển thiết bị nhận lệnh từ CPU/HĐH, điều khiển thiết bị và báo trạng thái.

**Giải thích:** Device controller: Bộ điều khiển thiết bị nhận lệnh từ CPU/HĐH, điều khiển thiết bị và báo trạng thái. CPU không điều khiển trực tiếp mọi thiết bị.

</details>

### Câu 279. Trong môn Nguyên lý HĐH, Thanh ghi điều khiển thiết bị được hiểu đúng nhất là gì?

A. Các thanh ghi của controller để CPU/HĐH ghi lệnh, tham số và đọc trạng thái.
B. Luồng từ user program qua system call, kernel I/O subsystem, driver, controller, phần cứng rồi ngắt trả kết quả.
C. Giống SCAN nhưng chỉ đi đến yêu cầu xa nhất theo hướng hiện tại rồi đảo chiều.
D. Tập các track cùng bán kính trên các mặt đĩa.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Các thanh ghi của controller để CPU/HĐH ghi lệnh, tham số và đọc trạng thái.

**Giải thích:** Thanh ghi điều khiển thiết bị: Các thanh ghi của controller để CPU/HĐH ghi lệnh, tham số và đọc trạng thái. Có thể ánh xạ qua cổng I/O hoặc memory-mapped I/O.

</details>

### Câu 280. Trong môn Nguyên lý HĐH, Device driver được hiểu đúng nhất là gì?

A. Tập các track cùng bán kính trên các mặt đĩa.
B. Giống C-SCAN nhưng chỉ quay giữa yêu cầu lớn nhất và nhỏ nhất đang có.
C. Mã trong kernel cho phép tương tác trực tiếp với phần cứng thiết bị qua giao diện chuẩn.
D. Giống SCAN nhưng chỉ đi đến yêu cầu xa nhất theo hướng hiện tại rồi đảo chiều.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Mã trong kernel cho phép tương tác trực tiếp với phần cứng thiết bị qua giao diện chuẩn.

**Giải thích:** Device driver: Mã trong kernel cho phép tương tác trực tiếp với phần cứng thiết bị qua giao diện chuẩn. Driver thường có phần top half/bottom half.

</details>

### Câu 281. Trong môn Nguyên lý HĐH, Top half driver được hiểu đúng nhất là gì?

A. Điều phối đĩa phục vụ yêu cầu theo thứ tự đến.
B. Buffer chứa dữ liệu đã đọc sẵn để tiến trình có thể lấy nhanh.
C. Phát hiện lỗi, thử lại, kiểm tra checksum/chẵn lẻ và báo mã lỗi cho hệ thống.
D. Phần driver mức cao nhận yêu cầu qua system call, chuẩn bị I/O và có thể cho tiến trình chờ.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Phần driver mức cao nhận yêu cầu qua system call, chuẩn bị I/O và có thể cho tiến trình chờ.

**Giải thích:** Top half driver: Phần driver mức cao nhận yêu cầu qua system call, chuẩn bị I/O và có thể cho tiến trình chờ. Gắn với open/read/write.

</details>

### Câu 282. Trong môn Nguyên lý HĐH, Bottom half driver được hiểu đúng nhất là gì?

A. Vòng tròn lưu trữ trên một mặt đĩa.
B. Luồng từ user program qua system call, kernel I/O subsystem, driver, controller, phần cứng rồi ngắt trả kết quả.
C. Phần driver mức thấp/interrupt handler xử lý khi thiết bị phát ngắt.
D. Các thanh ghi của controller để CPU/HĐH ghi lệnh, tham số và đọc trạng thái.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Phần driver mức thấp/interrupt handler xử lý khi thiết bị phát ngắt.

**Giải thích:** Bottom half driver: Phần driver mức thấp/interrupt handler xử lý khi thiết bị phát ngắt. Nhận trạng thái và đánh thức tiến trình.

</details>

### Câu 283. Trong môn Nguyên lý HĐH, Chu kỳ yêu cầu I/O được hiểu đúng nhất là gì?

A. Luồng từ user program qua system call, kernel I/O subsystem, driver, controller, phần cứng rồi ngắt trả kết quả.
B. Thời gian chờ đĩa quay để sector cần đọc đến dưới đầu đọc.
C. Phần driver mức cao nhận yêu cầu qua system call, chuẩn bị I/O và có thể cho tiến trình chờ.
D. Giống SCAN nhưng chỉ đi đến yêu cầu xa nhất theo hướng hiện tại rồi đảo chiều.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Luồng từ user program qua system call, kernel I/O subsystem, driver, controller, phần cứng rồi ngắt trả kết quả.

**Giải thích:** Chu kỳ yêu cầu I/O: Luồng từ user program qua system call, kernel I/O subsystem, driver, controller, phần cứng rồi ngắt trả kết quả. Slide Chương 6 có sơ đồ chu kỳ này.

</details>

### Câu 284. Trong môn Nguyên lý HĐH, Ngắt I/O được hiểu đúng nhất là gì?

A. Chọn yêu cầu có seek distance ngắn nhất từ vị trí đầu đọc hiện tại.
B. Đường/tín hiệu yêu cầu ngắt vật lý tới bộ quản lý ngắt.
C. Tín hiệu thiết bị gửi CPU để báo hoàn thành hoặc lỗi.
D. Giống SCAN nhưng chỉ đi đến yêu cầu xa nhất theo hướng hiện tại rồi đảo chiều.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Tín hiệu thiết bị gửi CPU để báo hoàn thành hoặc lỗi.

**Giải thích:** Ngắt I/O: Tín hiệu thiết bị gửi CPU để báo hoàn thành hoặc lỗi. Giảm nhu cầu polling liên tục.

</details>

### Câu 285. Trong môn Nguyên lý HĐH, Polling được hiểu đúng nhất là gì?

A. Mã trong kernel cho phép tương tác trực tiếp với phần cứng thiết bị qua giao diện chuẩn.
B. CPU/HĐH định kỳ kiểm tra thanh ghi trạng thái thiết bị.
C. Mã trạng thái thiết bị trả về để HĐH biết thành công hay lỗi.
D. Mục xác định chương trình xử lý ngắt tương ứng.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** CPU/HĐH định kỳ kiểm tra thanh ghi trạng thái thiết bị.

**Giải thích:** Polling: CPU/HĐH định kỳ kiểm tra thanh ghi trạng thái thiết bị. Lãng phí nếu sự kiện ít.

</details>

### Câu 286. Trong môn Nguyên lý HĐH, IRQ được hiểu đúng nhất là gì?

A. Phát hiện lỗi, thử lại, kiểm tra checksum/chẵn lẻ và báo mã lỗi cho hệ thống.
B. Giống SCAN nhưng chỉ đi đến yêu cầu xa nhất theo hướng hiện tại rồi đảo chiều.
C. Đường/tín hiệu yêu cầu ngắt vật lý tới bộ quản lý ngắt.
D. Các thanh ghi của controller để CPU/HĐH ghi lệnh, tham số và đọc trạng thái.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Đường/tín hiệu yêu cầu ngắt vật lý tới bộ quản lý ngắt.

**Giải thích:** IRQ: Đường/tín hiệu yêu cầu ngắt vật lý tới bộ quản lý ngắt. Được ánh xạ thành vector ngắt.

</details>

### Câu 287. Trong môn Nguyên lý HĐH, Vector ngắt được hiểu đúng nhất là gì?

A. Thời gian truyền dữ liệu sau khi đầu đọc đã ở đúng vị trí.
B. Vùng đệm tạo khi mở file/thiết bị và phục vụ riêng thiết bị đó.
C. Mục xác định chương trình xử lý ngắt tương ứng.
D. Kỹ thuật dùng phần mềm/vùng lưu trữ để mô phỏng và điều phối thiết bị tuần tự như máy in.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Mục xác định chương trình xử lý ngắt tương ứng.

**Giải thích:** Vector ngắt: Mục xác định chương trình xử lý ngắt tương ứng. CPU dùng để nhảy đến handler.

</details>

### Câu 288. Trong môn Nguyên lý HĐH, Xử lý ngắt được hiểu đúng nhất là gì?

A. Ghi nhận sự kiện, lưu trạng thái, chuyển tới handler, xử lý, rồi khôi phục tiến trình bị ngắt.
B. CPU/HĐH định kỳ kiểm tra thanh ghi trạng thái thiết bị.
C. Thời gian di chuyển đầu đọc đến cylinder cần truy cập.
D. Mã trong kernel cho phép tương tác trực tiếp với phần cứng thiết bị qua giao diện chuẩn.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Ghi nhận sự kiện, lưu trạng thái, chuyển tới handler, xử lý, rồi khôi phục tiến trình bị ngắt.

**Giải thích:** Xử lý ngắt: Ghi nhận sự kiện, lưu trạng thái, chuyển tới handler, xử lý, rồi khôi phục tiến trình bị ngắt. Các bước này xuất hiện trong slide.

</details>

### Câu 289. Trong môn Nguyên lý HĐH, Ngắt che được được hiểu đúng nhất là gì?

A. Vùng đệm tạo khi mở file/thiết bị và phục vụ riêng thiết bị đó.
B. Vùng đệm tạo khi khởi tạo hệ thống, dùng chung và được cấp phát cho file/thiết bị khi cần.
C. CPU/HĐH định kỳ kiểm tra thanh ghi trạng thái thiết bị.
D. Ngắt có thể bị CPU/HĐH tạm thời bỏ qua hoặc trì hoãn.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Ngắt có thể bị CPU/HĐH tạm thời bỏ qua hoặc trì hoãn.

**Giải thích:** Ngắt che được: Ngắt có thể bị CPU/HĐH tạm thời bỏ qua hoặc trì hoãn. Maskable interrupt.

</details>

### Câu 290. Trong môn Nguyên lý HĐH, Ngắt không che được được hiểu đúng nhất là gì?

A. Mã trạng thái thiết bị trả về để HĐH biết thành công hay lỗi.
B. Tiến trình nền lấy job từ hàng đợi spool và gửi tuần tự tới máy in thật.
C. Ngắt không được bỏ qua, thường dùng cho lỗi nghiêm trọng.
D. Chọn yêu cầu có seek distance ngắn nhất từ vị trí đầu đọc hiện tại.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Ngắt không được bỏ qua, thường dùng cho lỗi nghiêm trọng.

**Giải thích:** Ngắt không che được: Ngắt không được bỏ qua, thường dùng cho lỗi nghiêm trọng. Non-maskable interrupt.

</details>

### Câu 291. Trong môn Nguyên lý HĐH, Buffer được hiểu đúng nhất là gì?

A. Tập các track cùng bán kính trên các mặt đĩa.
B. Thời gian chờ đĩa quay để sector cần đọc đến dưới đầu đọc.
C. Vùng nhớ trung gian lưu dữ liệu trong thao tác vào ra.
D. Điều phối đĩa phục vụ yêu cầu theo thứ tự đến.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Vùng nhớ trung gian lưu dữ liệu trong thao tác vào ra.

**Giải thích:** Buffer: Vùng nhớ trung gian lưu dữ liệu trong thao tác vào ra. Giúp giảm số I/O và chồng lấp xử lý.

</details>

### Câu 292. Trong môn Nguyên lý HĐH, Vùng đệm vào được hiểu đúng nhất là gì?

A. Đơn vị vật lý nhỏ trên track; slide nêu ví dụ sector 512 byte = 4096 bit.
B. Buffer chứa dữ liệu đã đọc sẵn để tiến trình có thể lấy nhanh.
C. Đầu đọc phục vụ một chiều, đến mép thì quay về đầu kia không phục vụ trên đường quay.
D. Ghi nhận sự kiện, lưu trạng thái, chuyển tới handler, xử lý, rồi khôi phục tiến trình bị ngắt.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Buffer chứa dữ liệu đã đọc sẵn để tiến trình có thể lấy nhanh.

**Giải thích:** Vùng đệm vào: Buffer chứa dữ liệu đã đọc sẵn để tiến trình có thể lấy nhanh. Input buffering/read ahead.

</details>

### Câu 293. Trong môn Nguyên lý HĐH, Vùng đệm ra được hiểu đúng nhất là gì?

A. Điều phối đĩa phục vụ yêu cầu theo thứ tự đến.
B. Buffer gom dữ liệu xuất trước khi ghi ra thiết bị.
C. Ngắt không được bỏ qua, thường dùng cho lỗi nghiêm trọng.
D. Vùng nhớ trung gian lưu dữ liệu trong thao tác vào ra.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Buffer gom dữ liệu xuất trước khi ghi ra thiết bị.

**Giải thích:** Vùng đệm ra: Buffer gom dữ liệu xuất trước khi ghi ra thiết bị. Output buffering/write behind.

</details>

### Câu 294. Trong môn Nguyên lý HĐH, Buffer gắn thiết bị được hiểu đúng nhất là gì?

A. Vùng đệm tạo khi mở file/thiết bị và phục vụ riêng thiết bị đó.
B. Thời gian chờ đĩa quay để sector cần đọc đến dưới đầu đọc.
C. Thời gian truyền dữ liệu sau khi đầu đọc đã ở đúng vị trí.
D. Luồng từ user program qua system call, kernel I/O subsystem, driver, controller, phần cứng rồi ngắt trả kết quả.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Vùng đệm tạo khi mở file/thiết bị và phục vụ riêng thiết bị đó.

**Giải thích:** Buffer gắn thiết bị: Vùng đệm tạo khi mở file/thiết bị và phục vụ riêng thiết bị đó. Bị trả khi đóng.

</details>

### Câu 295. Trong môn Nguyên lý HĐH, Buffer gắn hệ thống được hiểu đúng nhất là gì?

A. Vùng đệm tạo khi khởi tạo hệ thống, dùng chung và được cấp phát cho file/thiết bị khi cần.
B. Ngắt có thể bị CPU/HĐH tạm thời bỏ qua hoặc trì hoãn.
C. Giống SCAN nhưng chỉ đi đến yêu cầu xa nhất theo hướng hiện tại rồi đảo chiều.
D. Vùng đệm tạo khi mở file/thiết bị và phục vụ riêng thiết bị đó.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Vùng đệm tạo khi khởi tạo hệ thống, dùng chung và được cấp phát cho file/thiết bị khi cần.

**Giải thích:** Buffer gắn hệ thống: Vùng đệm tạo khi khởi tạo hệ thống, dùng chung và được cấp phát cho file/thiết bị khi cần. Có thể trở thành tài nguyên găng.

</details>

### Câu 296. Trong môn Nguyên lý HĐH, Quản lý lỗi I/O được hiểu đúng nhất là gì?

A. Điều phối đĩa phục vụ yêu cầu theo thứ tự đến.
B. Phát hiện lỗi, thử lại, kiểm tra checksum/chẵn lẻ và báo mã lỗi cho hệ thống.
C. Ngắt có thể bị CPU/HĐH tạm thời bỏ qua hoặc trì hoãn.
D. Các thanh ghi của controller để CPU/HĐH ghi lệnh, tham số và đọc trạng thái.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Phát hiện lỗi, thử lại, kiểm tra checksum/chẵn lẻ và báo mã lỗi cho hệ thống.

**Giải thích:** Quản lý lỗi I/O: Phát hiện lỗi, thử lại, kiểm tra checksum/chẵn lẻ và báo mã lỗi cho hệ thống. Thiết bị thường có return code.

</details>

### Câu 297. Trong môn Nguyên lý HĐH, Return code được hiểu đúng nhất là gì?

A. Tín hiệu thiết bị gửi CPU để báo hoàn thành hoặc lỗi.
B. Thời gian di chuyển đầu đọc đến cylinder cần truy cập.
C. Vùng đệm tạo khi mở file/thiết bị và phục vụ riêng thiết bị đó.
D. Mã trạng thái thiết bị trả về để HĐH biết thành công hay lỗi.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Mã trạng thái thiết bị trả về để HĐH biết thành công hay lỗi.

**Giải thích:** Return code: Mã trạng thái thiết bị trả về để HĐH biết thành công hay lỗi. Driver phân tích mã này.

</details>

### Câu 298. Trong môn Nguyên lý HĐH, SPOOL được hiểu đúng nhất là gì?

A. Đầu đọc di chuyển như thang máy, phục vụ theo một hướng đến mép rồi đảo chiều.
B. Kỹ thuật dùng phần mềm/vùng lưu trữ để mô phỏng và điều phối thiết bị tuần tự như máy in.
C. Buffer chứa dữ liệu đã đọc sẵn để tiến trình có thể lấy nhanh.
D. Ngắt không được bỏ qua, thường dùng cho lỗi nghiêm trọng.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Kỹ thuật dùng phần mềm/vùng lưu trữ để mô phỏng và điều phối thiết bị tuần tự như máy in.

**Giải thích:** SPOOL: Kỹ thuật dùng phần mềm/vùng lưu trữ để mô phỏng và điều phối thiết bị tuần tự như máy in. Simultaneous Peripheral Operation On-Line.

</details>

### Câu 299. Trong môn Nguyên lý HĐH, Printer daemon được hiểu đúng nhất là gì?

A. Đầu đọc phục vụ một chiều, đến mép thì quay về đầu kia không phục vụ trên đường quay.
B. Mã trạng thái thiết bị trả về để HĐH biết thành công hay lỗi.
C. Vòng tròn lưu trữ trên một mặt đĩa.
D. Tiến trình nền lấy job từ hàng đợi spool và gửi tuần tự tới máy in thật.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Tiến trình nền lấy job từ hàng đợi spool và gửi tuần tự tới máy in thật.

**Giải thích:** Printer daemon: Tiến trình nền lấy job từ hàng đợi spool và gửi tuần tự tới máy in thật. Tạo máy in ảo cho nhiều tiến trình.

</details>

### Câu 300. Trong môn Nguyên lý HĐH, Sector được hiểu đúng nhất là gì?

A. Giống C-SCAN nhưng chỉ quay giữa yêu cầu lớn nhất và nhỏ nhất đang có.
B. Phát hiện lỗi, thử lại, kiểm tra checksum/chẵn lẻ và báo mã lỗi cho hệ thống.
C. Ngắt không được bỏ qua, thường dùng cho lỗi nghiêm trọng.
D. Đơn vị vật lý nhỏ trên track; slide nêu ví dụ sector 512 byte = 4096 bit.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Đơn vị vật lý nhỏ trên track; slide nêu ví dụ sector 512 byte = 4096 bit.

**Giải thích:** Sector: Đơn vị vật lý nhỏ trên track; slide nêu ví dụ sector 512 byte = 4096 bit. Đĩa đọc/ghi theo sector/block.

</details>


---

## Chương 2 - Tiến trình, luồng, điều phối CPU và IPC

### Câu 301. Cho các tiến trình P1(đến=0, CPU=24), P2(đến=1, CPU=3), P3(đến=2, CPU=4). Tính thời gian chờ trung bình theo FCFS.

A. 18
B. 17
C. 15
D. 16

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** 16

**Giải thích:** Lịch Gantt: P1[0-24], P2[24-27], P3[27-31]. Các giá trị: P1: W=0, T=24; P2: W=23, T=26; P3: W=25, T=29. Trung bình = 16.

</details>

### Câu 302. Cho các tiến trình P1(đến=0, CPU=5), P2(đến=2, CPU=3), P3(đến=4, CPU=1), P4(đến=6, CPU=2). Tính turnaround trung bình theo FCFS.

A. 7.25
B. 6.25
C. 5.25
D. 4.25

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** 5.25

**Giải thích:** Lịch Gantt: P1[0-5], P2[5-8], P3[8-9], P4[9-11]. Các giá trị: P1: W=0, T=5; P2: W=3, T=6; P3: W=4, T=5; P4: W=3, T=5. Trung bình = 5.25.

</details>

### Câu 303. Cho các tiến trình P1(đến=0, CPU=7), P2(đến=2, CPU=4), P3(đến=4, CPU=1), P4(đến=5, CPU=4). Tính thời gian chờ trung bình theo SJF.

A. 5
B. 6
C. 4
D. 3

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** 4

**Giải thích:** Lịch Gantt: P1[0-7], P3[7-8], P2[8-12], P4[12-16]. Các giá trị: P1: W=0, T=7; P2: W=6, T=10; P3: W=3, T=4; P4: W=7, T=11. Trung bình = 4.

</details>

### Câu 304. Cho các tiến trình P1(đến=0, CPU=8), P2(đến=1, CPU=4), P3(đến=2, CPU=9), P4(đến=3, CPU=5). Tính thời gian chờ trung bình theo SJF.

A. 6.75
B. 9.75
C. 7.75
D. 8.75

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** 7.75

**Giải thích:** Lịch Gantt: P1[0-8], P2[8-12], P4[12-17], P3[17-26]. Các giá trị: P1: W=0, T=8; P2: W=7, T=11; P3: W=15, T=24; P4: W=9, T=14. Trung bình = 7.75.

</details>

### Câu 305. Cho các tiến trình P1(đến=0, CPU=8), P2(đến=1, CPU=4), P3(đến=2, CPU=9), P4(đến=3, CPU=5). Tính thời gian chờ trung bình theo SRTF.

A. 7.5
B. 8.5
C. 6.5
D. 5.5

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** 6.5

**Giải thích:** Lịch Gantt: P1[0-1], P2[1-5], P4[5-10], P1[10-17], P3[17-26]. Các giá trị: P1: W=9, T=17; P2: W=0, T=4; P3: W=15, T=24; P4: W=2, T=7. Trung bình = 6.5.

</details>

### Câu 306. Cho các tiến trình P1(đến=0, CPU=7), P2(đến=2, CPU=4), P3(đến=4, CPU=1), P4(đến=5, CPU=4). Tính turnaround trung bình theo SRTF.

A. 8
B. 7
C. 9
D. 6

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** 7

**Giải thích:** Lịch Gantt: P1[0-2], P2[2-4], P3[4-5], P2[5-7], P4[7-11], P1[11-16]. Các giá trị: P1: W=9, T=16; P2: W=1, T=5; P3: W=0, T=1; P4: W=2, T=6. Trung bình = 7.

</details>

### Câu 307. Cho các tiến trình P1(đến=0, CPU=7), P2(đến=1, CPU=3), P3(đến=2, CPU=4), P4(đến=3, CPU=2). Tính thời gian chờ trung bình theo RR(q=3).

A. 8.5
B. 7.5
C. 5.5
D. 6.5

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** 6.5

**Giải thích:** Lịch Gantt: P1[0-3], P2[3-6], P3[6-9], P4[9-11], P1[11-14], P3[14-15], P1[15-16]. Các giá trị: P1: W=9, T=16; P2: W=2, T=5; P3: W=9, T=13; P4: W=6, T=8. Trung bình = 6.5.

</details>

### Câu 308. Cho các tiến trình P1(đến=0, CPU=5), P2(đến=1, CPU=4), P3(đến=2, CPU=2). Tính turnaround trung bình theo RR(q=2).

A. 7
B. 9
C. 8
D. 10

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** 8

**Giải thích:** Lịch Gantt: P1[0-2], P2[2-4], P3[4-6], P1[6-8], P2[8-10], P1[10-11]. Các giá trị: P1: W=6, T=11; P2: W=5, T=9; P3: W=2, T=4. Trung bình = 8.

</details>

### Câu 309. Cho các tiến trình P1(đến=0, CPU=6), P2(đến=0, CPU=2), P3(đến=0, CPU=8), P4(đến=0, CPU=3). Tính thời gian chờ trung bình theo FCFS.

A. 9.5
B. 8.5
C. 7.5
D. 6.5

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** 7.5

**Giải thích:** Lịch Gantt: P1[0-6], P2[6-8], P3[8-16], P4[16-19]. Các giá trị: P1: W=0, T=6; P2: W=6, T=8; P3: W=8, T=16; P4: W=16, T=19. Trung bình = 7.5.

</details>

### Câu 310. Cho các tiến trình P1(đến=0, CPU=6), P2(đến=0, CPU=2), P3(đến=0, CPU=8), P4(đến=0, CPU=3). Tính thời gian chờ trung bình theo SJF.

A. 4.5
B. 6.5
C. 3.5
D. 5.5

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** 4.5

**Giải thích:** Lịch Gantt: P2[0-2], P4[2-5], P1[5-11], P3[11-19]. Các giá trị: P1: W=5, T=11; P2: W=0, T=2; P3: W=11, T=19; P4: W=2, T=5. Trung bình = 4.5.

</details>

### Câu 311. Cho các tiến trình P1(đến=0, CPU=6), P2(đến=0, CPU=2), P3(đến=0, CPU=8), P4(đến=0, CPU=3). Tính thời gian chờ trung bình theo RR(q=3).

A. 8.5
B. 7.5
C. 6.5
D. 9.5

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** 7.5

**Giải thích:** Lịch Gantt: P1[0-3], P2[3-5], P3[5-8], P4[8-11], P1[11-14], P3[14-17], P3[17-19]. Các giá trị: P1: W=8, T=14; P2: W=3, T=5; P3: W=11, T=19; P4: W=8, T=11. Trung bình = 7.5.

</details>

### Câu 312. Cho các tiến trình P1(đến=0, CPU=10), P2(đến=3, CPU=1), P3(đến=4, CPU=2), P4(đến=6, CPU=1). Tính thời gian chờ trung bình theo SRTF.

A. 2
B. 0
C. 3
D. 1

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** 1

**Giải thích:** Lịch Gantt: P1[0-3], P2[3-4], P3[4-6], P4[6-7], P1[7-14]. Các giá trị: P1: W=4, T=14; P2: W=0, T=1; P3: W=0, T=2; P4: W=0, T=1. Trung bình = 1.

</details>

### Câu 313. Cho các tiến trình P1(đến=0, CPU=4), P2(đến=1, CPU=5), P3(đến=2, CPU=2), P4(đến=3, CPU=1). Tính turnaround trung bình theo FCFS.

A. 6.5
B. 8.5
C. 9.5
D. 7.5

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** 7.5

**Giải thích:** Lịch Gantt: P1[0-4], P2[4-9], P3[9-11], P4[11-12]. Các giá trị: P1: W=0, T=4; P2: W=3, T=8; P3: W=7, T=9; P4: W=8, T=9. Trung bình = 7.5.

</details>

### Câu 314. Cho các tiến trình P1(đến=0, CPU=4), P2(đến=1, CPU=5), P3(đến=2, CPU=2), P4(đến=3, CPU=1). Tính turnaround trung bình theo SJF.

A. 7.5
B. 6.5
C. 5.5
D. 4.5

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** 5.5

**Giải thích:** Lịch Gantt: P1[0-4], P4[4-5], P3[5-7], P2[7-12]. Các giá trị: P1: W=0, T=4; P2: W=6, T=11; P3: W=3, T=5; P4: W=1, T=2. Trung bình = 5.5.

</details>

### Câu 315. Cho các tiến trình P1(đến=0, CPU=4), P2(đến=1, CPU=5), P3(đến=2, CPU=2), P4(đến=3, CPU=1). Tính thời gian chờ trung bình theo RR(q=2).

A. 4.25
B. 5.25
C. 3.25
D. 6.25

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** 4.25

**Giải thích:** Lịch Gantt: P1[0-2], P2[2-4], P3[4-6], P1[6-8], P4[8-9], P2[9-11], P2[11-12]. Các giá trị: P1: W=4, T=8; P2: W=6, T=11; P3: W=2, T=4; P4: W=5, T=6. Trung bình = 4.25.

</details>

### Câu 316. Cho các tiến trình P1(đến=0, CPU=5), P2(đến=1, CPU=3), P3(đến=2, CPU=1), P4(đến=3, CPU=2). Tính thời gian chờ trung bình theo SRTF.

A. 3.25
B. 2.25
C. 4.25
D. 1.25

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** 2.25

**Giải thích:** Lịch Gantt: P1[0-1], P2[1-2], P3[2-3], P2[3-5], P4[5-7], P1[7-11]. Các giá trị: P1: W=6, T=11; P2: W=1, T=4; P3: W=0, T=1; P4: W=2, T=4. Trung bình = 2.25.

</details>

### Câu 317. Cho các tiến trình P1(đến=1, CPU=3), P2(đến=2, CPU=6), P3(đến=4, CPU=4). Tính thời gian chờ trung bình theo FCFS.

A. 1.67
B. 4.67
C. 2.67
D. 3.67

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** 2.67

**Giải thích:** Lịch Gantt: P1[1-4], P2[4-10], P3[10-14]. Các giá trị: P1: W=0, T=3; P2: W=2, T=8; P3: W=6, T=10. Trung bình = 2.67.

</details>

### Câu 318. Cho các tiến trình P1(đến=1, CPU=3), P2(đến=2, CPU=6), P3(đến=4, CPU=4). Tính thời gian chờ trung bình theo SJF.

A. 2
B. 1
C. 3
D. 4

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** 2

**Giải thích:** Lịch Gantt: P1[1-4], P3[4-8], P2[8-14]. Các giá trị: P1: W=0, T=3; P2: W=6, T=12; P3: W=0, T=4. Trung bình = 2.

</details>

### Câu 319. Cho các tiến trình P1(đến=0, CPU=3), P2(đến=2, CPU=6), P3(đến=4, CPU=4). Tính turnaround trung bình theo RR(q=4).

A. 9
B. 7
C. 8
D. 6

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** 7

**Giải thích:** Lịch Gantt: P1[0-3], P2[3-7], P3[7-11], P2[11-13]. Các giá trị: P1: W=0, T=3; P2: W=5, T=11; P3: W=3, T=7. Trung bình = 7.

</details>

### Câu 320. Cho các tiến trình P1(đến=0, CPU=3), P2(đến=2, CPU=6), P3(đến=4, CPU=4). Tính turnaround trung bình theo SRTF.

A. 6
B. 7
C. 5
D. 8

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** 6

**Giải thích:** Lịch Gantt: P1[0-3], P2[3-4], P3[4-8], P2[8-13]. Các giá trị: P1: W=0, T=3; P2: W=5, T=11; P3: W=0, T=4. Trung bình = 6.

</details>


---

## Chương 3 - Tài nguyên găng, đồng bộ tiến trình và bế tắc

### Câu 321. Semaphore S khởi tạo 1. Chuỗi thao tác P(S), P(S), V(S), P(S) làm S.value cuối cùng bằng bao nhiêu theo cài đặt giảm trước/block khi âm?

A. 1
B. -1
C. 0
D. -2

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** -1

**Giải thích:** Bắt đầu 1: P ->0, P -> -1 (một tiến trình chờ), V ->0 (đánh thức), P -> -1. Giá trị âm biểu diễn tiến trình đang chờ.

</details>

### Câu 322. Semaphore S khởi tạo 2. Chuỗi P, P, P, V làm S.value cuối cùng bằng bao nhiêu?

A. 2
B. 1
C. -1
D. 0

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** 0

**Giải thích:** Bắt đầu 2; ba P làm 1,0,-1; V làm 0 và đánh thức một tiến trình nếu có.

</details>

### Câu 323. Để bảo đảm lệnh S2 chỉ thực hiện sau S1 ở tiến trình khác, semaphore đồng bộ nên khởi tạo giá trị nào?

A. 0
B. -1
C. 1
D. Số CPU

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** 0

**Giải thích:** Tiến trình chứa S2 gọi wait(S) trước S2; tiến trình chứa S1 gọi signal(S) sau S1. S=0 bắt S2 chờ.

</details>

### Câu 324. Nếu mutex=1 và hai tiến trình cùng gọi wait(mutex) atomic trước đoạn găng, điều gì đúng?

A. mutex tăng thành 2
B. Cả hai vào cùng lúc
C. Chỉ một tiến trình vào đoạn găng, tiến trình còn lại chờ
D. Không tiến trình nào vào được

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Chỉ một tiến trình vào đoạn găng, tiến trình còn lại chờ

**Giải thích:** Atomic wait đảm bảo kiểm tra và giảm semaphore không bị xen kẽ sai.

</details>

### Câu 325. Nếu quên signal(mutex) sau đoạn găng, lỗi nào dễ xảy ra?

A. Không còn trạng thái waiting
B. Mọi tiến trình vào cùng lúc
C. Các tiến trình khác có thể chờ vô hạn
D. Mutual exclusion bị phá ngay

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Các tiến trình khác có thể chờ vô hạn

**Giải thích:** Không signal nghĩa là mutex không được trả, các wait sau bị kẹt.

</details>

### Câu 326. Áp dụng Banker với Available=(3, 3, 2), Allocation={'P0': (0, 1, 0), 'P1': (2, 0, 0), 'P2': (3, 0, 2), 'P3': (2, 1, 1), 'P4': (0, 0, 2)}, Max={'P0': (7, 5, 3), 'P1': (3, 2, 2), 'P2': (9, 0, 2), 'P3': (2, 2, 2), 'P4': (4, 3, 3)}. Kết luận nào đúng?

A. An toàn, dãy an toàn: P1 -> P3 -> P4 -> P0 -> P2
B. Không an toàn
C. Bế tắc chắc chắn chỉ vì Available có phần tử 0
D. An toàn mà không cần xét Need

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** An toàn, dãy an toàn: P1 -> P3 -> P4 -> P0 -> P2

**Giải thích:** Need=Max-Allocation={'P0': (7, 4, 3), 'P1': (1, 2, 2), 'P2': (6, 0, 0), 'P3': (0, 1, 1), 'P4': (4, 3, 1)}. Chạy safety algorithm thu được dãy ['P1', 'P3', 'P4', 'P0', 'P2'], vì vậy kết luận là An toàn, dãy an toàn: P1 -> P3 -> P4 -> P0 -> P2.

</details>

### Câu 327. Áp dụng Banker với Available=(1, 5, 2), Allocation={'P1': (1, 1, 0), 'P2': (2, 1, 1), 'P3': (3, 0, 1)}, Max={'P1': (3, 2, 2), 'P2': (3, 3, 2), 'P3': (6, 1, 3)}. Kết luận nào đúng?

A. Không an toàn
B. Bế tắc chắc chắn chỉ vì Available có phần tử 0
C. An toàn mà không cần xét Need
D. An toàn, dãy an toàn: P2 -> P3 -> P1

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** An toàn, dãy an toàn: P2 -> P3 -> P1

**Giải thích:** Need=Max-Allocation={'P1': (2, 1, 2), 'P2': (1, 2, 1), 'P3': (3, 1, 2)}. Chạy safety algorithm thu được dãy ['P2', 'P3', 'P1'], vì vậy kết luận là An toàn, dãy an toàn: P2 -> P3 -> P1.

</details>

### Câu 328. Áp dụng Banker với Available=(0, 2, 0), Allocation={'P1': (1, 0, 1), 'P2': (1, 1, 0), 'P3': (0, 1, 1)}, Max={'P1': (2, 1, 1), 'P2': (2, 2, 2), 'P3': (1, 2, 1)}. Kết luận nào đúng?

A. An toàn mà không cần xét Need
B. Không an toàn
C. Bế tắc chắc chắn chỉ vì Available có phần tử 0
D. An toàn, dãy an toàn: P1 -> P2 -> P3

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** Không an toàn

**Giải thích:** Need=Max-Allocation={'P1': (1, 1, 0), 'P2': (1, 1, 2), 'P3': (1, 1, 0)}. Chạy safety algorithm thu được dãy không đầy đủ, vì vậy kết luận là Không an toàn.

</details>

### Câu 329. Có 3 tiến trình dùng chung một loại tài nguyên, nhu cầu cực đại lần lượt (4, 3, 5). Số đơn vị tài nguyên tối thiểu để không bao giờ bế tắc là bao nhiêu?

A. 5
B. 12
C. 9
D. 10

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** 10

**Giải thích:** Công thức đủ: Σ(max_i-1)+1 = 9+1=10. Khi đó không thể mọi tiến trình cùng giữ thiếu một đơn vị mà không còn tài nguyên.

</details>

### Câu 330. Có 3 tiến trình dùng chung một loại tài nguyên, nhu cầu cực đại lần lượt (3, 3, 3). Số đơn vị tài nguyên tối thiểu để không bao giờ bế tắc là bao nhiêu?

A. 6
B. 7
C. 3
D. 9

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** 7

**Giải thích:** Công thức đủ: Σ(max_i-1)+1 = 6+1=7. Khi đó không thể mọi tiến trình cùng giữ thiếu một đơn vị mà không còn tài nguyên.

</details>

### Câu 331. Có 3 tiến trình dùng chung một loại tài nguyên, nhu cầu cực đại lần lượt (2, 4, 6). Số đơn vị tài nguyên tối thiểu để không bao giờ bế tắc là bao nhiêu?

A. 9
B. 12
C. 6
D. 10

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** 10

**Giải thích:** Công thức đủ: Σ(max_i-1)+1 = 9+1=10. Khi đó không thể mọi tiến trình cùng giữ thiếu một đơn vị mà không còn tài nguyên.

</details>

### Câu 332. Có 3 tiến trình dùng chung một loại tài nguyên, nhu cầu cực đại lần lượt (5, 5, 2). Số đơn vị tài nguyên tối thiểu để không bao giờ bế tắc là bao nhiêu?

A. 5
B. 12
C. 10
D. 9

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** 10

**Giải thích:** Công thức đủ: Σ(max_i-1)+1 = 9+1=10. Khi đó không thể mọi tiến trình cùng giữ thiếu một đơn vị mà không còn tài nguyên.

</details>

### Câu 333. Đồ thị tài nguyên single-instance có chu trình P1 -> R1 -> P2 -> R2 -> P1. Kết luận đúng là gì?

A. Không có tiến trình nào chờ
B. Chỉ có page fault
C. Hệ thống chắc chắn an toàn
D. Hệ thống đang bế tắc

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** Hệ thống đang bế tắc

**Giải thích:** Với mỗi loại tài nguyên một đơn vị, chu trình trong graph là điều kiện cần và đủ cho deadlock.

</details>

### Câu 334. Phòng ngừa bế tắc bằng cách đánh số thứ tự tài nguyên và bắt tiến trình yêu cầu theo thứ tự tăng nhằm phá điều kiện nào?

A. Mutual exclusion
B. Tài nguyên găng
C. Chờ vòng tròn
D. Không thu hồi cưỡng bức

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** Chờ vòng tròn

**Giải thích:** Thứ tự toàn phần trên tài nguyên làm circular wait không thể hình thành.

</details>

### Câu 335. Nếu trạng thái là unsafe theo Banker, phát biểu nào chuẩn nhất?

A. Chưa chắc đã bế tắc ngay, nhưng không bảo đảm tránh bế tắc
B. Chắc chắn bế tắc ngay
C. Chắc chắn an toàn
D. Không cần xét yêu cầu tương lai

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** Chưa chắc đã bế tắc ngay, nhưng không bảo đảm tránh bế tắc

**Giải thích:** Unsafe nghĩa là không tìm được dãy an toàn; deadlock có thể xảy ra nếu yêu cầu tiếp tục bất lợi.

</details>


---

## Chương 4 - Quản lý bộ nhớ

### Câu 336. Các vùng trống theo thứ tự là (100, 500, 200, 300, 600)K. Các yêu cầu lần lượt là (128, 280)K. Theo Worst Fit, vùng ban đầu được chọn lần lượt là gì?

A. 600K và 500K
B. Không cấp phát đủ
C. 100K và 200K
D. 100K và 500K

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** 600K và 500K

**Giải thích:** Worst Fit xét từng yêu cầu và cập nhật phần còn lại sau mỗi lần cấp phát. Kết quả chọn theo kích thước vùng ban đầu: 600K và 500K.

</details>

### Câu 337. Các vùng trống theo thứ tự là (50, 150, 160, 100, 120)K. Các yêu cầu lần lượt là (130,)K. Theo First Fit, vùng ban đầu được chọn lần lượt là gì?

A. 50K
B. 150K
C. Không cấp phát đủ
D. 160K

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** 150K

**Giải thích:** First Fit xét từng yêu cầu và cập nhật phần còn lại sau mỗi lần cấp phát. Kết quả chọn theo kích thước vùng ban đầu: 150K.

</details>

### Câu 338. Các vùng trống theo thứ tự là (50, 150, 160, 100, 120)K. Các yêu cầu lần lượt là (130,)K. Theo Best Fit, vùng ban đầu được chọn lần lượt là gì?

A. 150K
B. 50K
C. Không cấp phát đủ
D. 160K

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** 150K

**Giải thích:** Best Fit xét từng yêu cầu và cập nhật phần còn lại sau mỗi lần cấp phát. Kết quả chọn theo kích thước vùng ban đầu: 150K.

</details>

### Câu 339. Các vùng trống theo thứ tự là (100, 500, 200, 300, 600)K. Các yêu cầu lần lượt là (212, 417, 112)K. Theo First Fit, vùng ban đầu được chọn lần lượt là gì?

A. 500K và 600K và 288K
B. 100K và 500K và 200K
C. 100K và 200K và 300K
D. Không cấp phát đủ

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** 500K và 600K và 288K

**Giải thích:** First Fit xét từng yêu cầu và cập nhật phần còn lại sau mỗi lần cấp phát. Kết quả chọn theo kích thước vùng ban đầu: 500K và 600K và 288K.

</details>

### Câu 340. Các vùng trống theo thứ tự là (100, 500, 200, 300, 600)K. Các yêu cầu lần lượt là (212, 417, 112)K. Theo Best Fit, vùng ban đầu được chọn lần lượt là gì?

A. 300K và 500K và 200K
B. 100K và 200K và 300K
C. Không cấp phát đủ
D. 100K và 500K và 200K

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** 300K và 500K và 200K

**Giải thích:** Best Fit xét từng yêu cầu và cập nhật phần còn lại sau mỗi lần cấp phát. Kết quả chọn theo kích thước vùng ban đầu: 300K và 500K và 200K.

</details>

### Câu 341. Các vùng trống theo thứ tự là (100, 500, 200, 300, 600)K. Các yêu cầu lần lượt là (212, 417, 112)K. Theo Worst Fit, vùng ban đầu được chọn lần lượt là gì?

A. 100K và 500K và 200K
B. Không cấp phát đủ
C. 600K và 500K và 388K
D. 100K và 200K và 300K

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** 600K và 500K và 388K

**Giải thích:** Worst Fit xét từng yêu cầu và cập nhật phần còn lại sau mỗi lần cấp phát. Kết quả chọn theo kích thước vùng ban đầu: 600K và 500K và 388K.

</details>

### Câu 342. Các vùng trống theo thứ tự là (90, 180, 70, 250, 120)K. Các yêu cầu lần lượt là (80, 110)K. Theo Best Fit, vùng ban đầu được chọn lần lượt là gì?

A. 70K và 90K
B. 90K và 180K
C. Không cấp phát đủ
D. 90K và 120K

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** 90K và 120K

**Giải thích:** Best Fit xét từng yêu cầu và cập nhật phần còn lại sau mỗi lần cấp phát. Kết quả chọn theo kích thước vùng ban đầu: 90K và 120K.

</details>

### Câu 343. Các vùng trống theo thứ tự là (90, 180, 70, 250, 120)K. Các yêu cầu lần lượt là (80, 110)K. Theo First Fit, vùng ban đầu được chọn lần lượt là gì?

A. 70K và 90K
B. 90K và 180K
C. 250K và 180K
D. Không cấp phát đủ

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** 90K và 180K

**Giải thích:** First Fit xét từng yêu cầu và cập nhật phần còn lại sau mỗi lần cấp phát. Kết quả chọn theo kích thước vùng ban đầu: 90K và 180K.

</details>

### Câu 344. Với 3 khung trang và chuỗi tham chiếu 1 2 3 4 1 2 5 1 2 3 4 5, số lỗi trang theo FIFO là bao nhiêu?

A. 11
B. 8
C. 9
D. 10

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** 9

**Giải thích:** Mô phỏng FIFO: mỗi tham chiếu chưa có trong bộ nhớ gây lỗi trang; khi đầy thì chọn trang nạn nhân theo quy tắc FIFO. Tổng lỗi trang = 9.

</details>

### Câu 345. Với 3 khung trang và chuỗi tham chiếu 1 2 3 4 1 2 5 1 2 3 4 5, số lỗi trang theo LRU là bao nhiêu?

A. 11
B. 9
C. 10
D. 12

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** 10

**Giải thích:** Mô phỏng LRU: mỗi tham chiếu chưa có trong bộ nhớ gây lỗi trang; khi đầy thì chọn trang nạn nhân theo quy tắc LRU. Tổng lỗi trang = 10.

</details>

### Câu 346. Với 3 khung trang và chuỗi tham chiếu 1 2 3 4 1 2 5 1 2 3 4 5, số lỗi trang theo OPT là bao nhiêu?

A. 9
B. 6
C. 8
D. 7

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** 7

**Giải thích:** Mô phỏng OPT: mỗi tham chiếu chưa có trong bộ nhớ gây lỗi trang; khi đầy thì chọn trang nạn nhân theo quy tắc OPT. Tổng lỗi trang = 7.

</details>

### Câu 347. Với 3 khung trang và chuỗi tham chiếu 7 0 1 2 0 3 0 4 2 3 0 3 2, số lỗi trang theo FIFO là bao nhiêu?

A. 11
B. 12
C. 9
D. 10

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** 10

**Giải thích:** Mô phỏng FIFO: mỗi tham chiếu chưa có trong bộ nhớ gây lỗi trang; khi đầy thì chọn trang nạn nhân theo quy tắc FIFO. Tổng lỗi trang = 10.

</details>

### Câu 348. Với 3 khung trang và chuỗi tham chiếu 7 0 1 2 0 3 0 4 2 3 0 3 2, số lỗi trang theo LRU là bao nhiêu?

A. 9
B. 11
C. 8
D. 10

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** 9

**Giải thích:** Mô phỏng LRU: mỗi tham chiếu chưa có trong bộ nhớ gây lỗi trang; khi đầy thì chọn trang nạn nhân theo quy tắc LRU. Tổng lỗi trang = 9.

</details>

### Câu 349. Với 3 khung trang và chuỗi tham chiếu 7 0 1 2 0 3 0 4 2 3 0 3 2, số lỗi trang theo OPT là bao nhiêu?

A. 9
B. 7
C. 6
D. 8

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** 7

**Giải thích:** Mô phỏng OPT: mỗi tham chiếu chưa có trong bộ nhớ gây lỗi trang; khi đầy thì chọn trang nạn nhân theo quy tắc OPT. Tổng lỗi trang = 7.

</details>

### Câu 350. Với 4 khung trang và chuỗi tham chiếu 1 2 1 3 4 1 2 5 1 2 3 4 5, số lỗi trang theo LRU là bao nhiêu?

A. 7
B. 9
C. 8
D. 10

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** 8

**Giải thích:** Mô phỏng LRU: mỗi tham chiếu chưa có trong bộ nhớ gây lỗi trang; khi đầy thì chọn trang nạn nhân theo quy tắc LRU. Tổng lỗi trang = 8.

</details>

### Câu 351. Với 4 khung trang và chuỗi tham chiếu 1 2 1 3 4 1 2 5 1 2 3 4 5, số lỗi trang theo FIFO là bao nhiêu?

A. 9
B. 10
C. 11
D. 12

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** 10

**Giải thích:** Mô phỏng FIFO: mỗi tham chiếu chưa có trong bộ nhớ gây lỗi trang; khi đầy thì chọn trang nạn nhân theo quy tắc FIFO. Tổng lỗi trang = 10.

</details>

### Câu 352. TLB có hit ratio 80%, thời gian tra TLB 10 ns, truy nhập RAM 100 ns. EAT là bao nhiêu?

A. 130.0 ns
B. 210.0 ns
C. 120.0 ns
D. 110.0 ns

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** 130.0 ns

**Giải thích:** Hit cần 10+100; miss cần 10+2*100. EAT=0.8*110+0.20*210=130.0 ns.

</details>

### Câu 353. TLB có hit ratio 90%, thời gian tra TLB 20 ns, truy nhập RAM 100 ns. EAT là bao nhiêu?

A. 120.0 ns
B. 130.0 ns
C. 220.0 ns
D. 110.0 ns

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** 130.0 ns

**Giải thích:** Hit cần 20+100; miss cần 20+2*100. EAT=0.9*120+0.10*220=130.0 ns.

</details>

### Câu 354. TLB có hit ratio 75%, thời gian tra TLB 5 ns, truy nhập RAM 80 ns. EAT là bao nhiêu?

A. 105.0 ns
B. 165.0 ns
C. 100.0 ns
D. 85.0 ns

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** 105.0 ns

**Giải thích:** Hit cần 5+80; miss cần 5+2*80. EAT=0.75*85+0.25*165=105.0 ns.

</details>

### Câu 355. Địa chỉ logic 74565 với kích thước trang 4096 byte được tách thành gì?

A. page=18, offset=838
B. page=19, offset=837
C. page=837, offset=18
D. page=18, offset=837

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** page=18, offset=837

**Giải thích:** Số trang = floor(74565/4096) = 18; offset = 74565 mod 4096 = 837.

</details>

### Câu 356. Địa chỉ logic 54321 với kích thước trang 1024 byte được tách thành gì?

A. page=54, offset=49
B. page=53, offset=50
C. page=49, offset=53
D. page=53, offset=49

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** page=53, offset=49

**Giải thích:** Số trang = floor(54321/1024) = 53; offset = 54321 mod 1024 = 49.

</details>

### Câu 357. Địa chỉ logic 65535 với kích thước trang 2048 byte được tách thành gì?

A. page=31, offset=2047
B. page=32, offset=2047
C. page=31, offset=2048
D. page=2047, offset=31

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** page=31, offset=2047

**Giải thích:** Số trang = floor(65535/2048) = 31; offset = 65535 mod 2048 = 2047.

</details>

### Câu 358. Chương trình overlay có mức 0: (80,); mức 1: (50, 70, 40); mức 2: (80, 60); mức 3: (60, 50). Bộ nhớ nhỏ nhất cần để chạy là bao nhiêu?

A. 80 KB
B. 490 KB
C. 350 KB
D. 290 KB

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** 290 KB

**Giải thích:** Tại một thời điểm cần module lớn nhất trên mỗi mức của một đường overlay. Tổng các mức lớn nhất = 290 KB.

</details>

### Câu 359. Chương trình overlay có mức 0: (100,); mức 1: (40, 90); mức 2: (30, 70, 80). Bộ nhớ nhỏ nhất cần để chạy là bao nhiêu?

A. 100 KB
B. 410 KB
C. 270 KB
D. 350 KB

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** 270 KB

**Giải thích:** Tại một thời điểm cần module lớn nhất trên mỗi mức của một đường overlay. Tổng các mức lớn nhất = 270 KB.

</details>

### Câu 360. Chương trình overlay có mức 0: (60,); mức 1: (20, 50, 40); mức 2: (100, 30). Bộ nhớ nhỏ nhất cần để chạy là bao nhiêu?

A. 310 KB
B. 210 KB
C. 300 KB
D. 100 KB

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** 210 KB

**Giải thích:** Tại một thời điểm cần module lớn nhất trên mỗi mức của một đường overlay. Tổng các mức lớn nhất = 210 KB.

</details>


---

## Chương 5 - Quản lý hệ thống file và FAT

### Câu 361. Hệ thống file dùng chỉ mục 3 mức, block 1024 byte, con trỏ 32 bit. Kích thước file lớn nhất là bao nhiêu?

A. 16 GB
B. 256 KB
C. 4 TB
D. 64 MB

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** 16 GB

**Giải thích:** Mỗi block chỉ mục chứa 1024/4=256 con trỏ. 3 mức trỏ được 256^3 block dữ liệu, nên tối đa 16 GB.

</details>

### Câu 362. Hệ thống file dùng chỉ mục 2 mức, block 4096 byte, con trỏ 32 bit. Kích thước file lớn nhất là bao nhiêu?

A. 4 GB
B. Một thuật toán điều phối đĩa chuyên chọn cylinder xa nhất.
C. 4 MB
D. 4 TB

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** 4 GB

**Giải thích:** Mỗi block chỉ mục chứa 4096/4=1024 con trỏ. 2 mức trỏ được 1024^2 block dữ liệu, nên tối đa 4 GB.

</details>

### Câu 363. Hệ thống file dùng chỉ mục 2 mức, block 1024 byte, con trỏ 32 bit. Kích thước file lớn nhất là bao nhiêu?

A. 64 MB
B. 16 GB
C. Một thuật toán điều phối đĩa chuyên chọn cylinder xa nhất.
D. 256 KB

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** 64 MB

**Giải thích:** Mỗi block chỉ mục chứa 1024/4=256 con trỏ. 2 mức trỏ được 256^2 block dữ liệu, nên tối đa 64 MB.

</details>

### Câu 364. Hệ thống file dùng chỉ mục 3 mức, block 2048 byte, con trỏ 64 bit. Kích thước file lớn nhất là bao nhiêu?

A. 32 GB
B. 8 TB
C. 512 KB
D. 128 MB

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** 32 GB

**Giải thích:** Mỗi block chỉ mục chứa 2048/8=256 con trỏ. 3 mức trỏ được 256^3 block dữ liệu, nên tối đa 32 GB.

</details>

### Câu 365. Đĩa có 10 head và 63 sector/track. Sector CHS(C=1, H=2, S=32) có LBA bằng bao nhiêu, nếu LBA bắt đầu từ 0?

A. 788
B. 786
C. 664
D. 787

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** 787

**Giải thích:** Công thức LBA=((C*heads+H)*sectors_per_track)+(S-1)=((1*10+2)*63)+31=787.

</details>

### Câu 366. Đĩa có 16 head và 63 sector/track. Sector CHS(C=0, H=0, S=1) có LBA bằng bao nhiêu, nếu LBA bắt đầu từ 0?

A. Một thuật toán điều phối đĩa chuyên chọn cylinder xa nhất.
B. Một trường chỉ dùng để lưu màu giao diện người dùng.
C. 0
D. 1

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** 0

**Giải thích:** Công thức LBA=((C*heads+H)*sectors_per_track)+(S-1)=((0*16+0)*63)+0=0.

</details>

### Câu 367. Đĩa có 4 head và 20 sector/track. Sector CHS(C=2, H=3, S=10) có LBA bằng bao nhiêu, nếu LBA bắt đầu từ 0?

A. 229
B. 173
C. 228
D. 230

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** 229

**Giải thích:** Công thức LBA=((C*heads+H)*sectors_per_track)+(S-1)=((2*4+3)*20)+9=229.

</details>

### Câu 368. Đĩa có 2 head và 18 sector/track. Sector CHS(C=5, H=1, S=7) có LBA bằng bao nhiêu, nếu LBA bắt đầu từ 0?

A. 205
B. 204
C. 188
D. 203

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** 204

**Giải thích:** Công thức LBA=((C*heads+H)*sectors_per_track)+(S-1)=((5*2+1)*18)+6=204.

</details>

### Câu 369. Ngày 13/01/2021 mã hóa theo FAT date có giá trị hexa nào?

A. 0x1A29
B. 0x522E
C. 0x52D2
D. 0x522D

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** 0x522D

**Giải thích:** FAT date: year-1980=41 ở bits 15-9, month=1 ở bits 8-5, day=13 ở bits 4-0. Giá trị = 0x522D.

</details>

### Câu 370. Ngày 07/02/2017 mã hóa theo FAT date có giá trị hexa nào?

A. 0x0E65
B. 0x4A47
C. 0x4AB8
D. 0x4A48

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** 0x4A47

**Giải thích:** FAT date: year-1980=37 ở bits 15-9, month=2 ở bits 8-5, day=7 ở bits 4-0. Giá trị = 0x4A47.

</details>

### Câu 371. Ngày 21/09/2014 mã hóa theo FAT date có giá trị hexa nào?

A. 0x2B22
B. 0x45CA
C. 0x4536
D. 0x4535

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** 0x4535

**Giải thích:** FAT date: year-1980=34 ở bits 15-9, month=9 ở bits 8-5, day=21 ở bits 4-0. Giá trị = 0x4535.

</details>

### Câu 372. Thời điểm 09:13:00 mã hóa theo FAT time có giá trị hexa nào?

A. 0x6920
B. 0x49A0
C. 0x49A1
D. 0x46AF

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** 0x49A0

**Giải thích:** FAT time: hour=9 ở bits 15-11, minute=13 ở bits 10-5, second/2=0 ở bits 4-0. Giá trị = 0x49A0.

</details>

### Câu 373. Thời điểm 20:18:04 mã hóa theo FAT time có giá trị hexa nào?

A. 0xA242
B. 0x9282
C. 0xAD4D
D. 0xA243

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** 0xA242

**Giải thích:** FAT time: hour=20 ở bits 15-11, minute=18 ở bits 10-5, second/2=2 ở bits 4-0. Giá trị = 0xA242.

</details>

### Câu 374. Thời điểm 00:47:02 mã hóa theo FAT time có giá trị hexa nào?

A. 0x17801
B. 0x05E2
C. 0x0AEE
D. 0x05E1

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** 0x05E1

**Giải thích:** FAT time: hour=0 ở bits 15-11, minute=47 ở bits 10-5, second/2=1 ở bits 4-0. Giá trị = 0x05E1.

</details>

### Câu 375. Trong FAT32, file bắt đầu ở cluster 5; các entry liên quan là {5: 7, 7: 9, 9: 12, 12: 268435455}. File chiếm bao nhiêu cluster?

A. Một thuật toán điều phối đĩa chuyên chọn cylinder xa nhất.
B. 3
C. 5
D. 4

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** 4

**Giải thích:** Lần theo chuỗi cluster: 5 -> 7 -> 9 -> 12 -> EOC. Số cluster dữ liệu = 4.

</details>

### Câu 376. Trong FAT32, file bắt đầu ở cluster 2; các entry liên quan là {2: 3, 3: 4, 4: 5, 5: 268435455}. File chiếm bao nhiêu cluster?

A. 4
B. 3
C. 5
D. Một thuật toán điều phối đĩa chuyên chọn cylinder xa nhất.

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** 4

**Giải thích:** Lần theo chuỗi cluster: 2 -> 3 -> 4 -> 5 -> EOC. Số cluster dữ liệu = 4.

</details>

### Câu 377. Trong FAT32, file bắt đầu ở cluster 8; các entry liên quan là {8: 10, 10: 11, 11: 15, 15: 20, 20: 268435455}. File chiếm bao nhiêu cluster?

A. 5
B. Một thuật toán điều phối đĩa chuyên chọn cylinder xa nhất.
C. 4
D. 6

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** 5

**Giải thích:** Lần theo chuỗi cluster: 8 -> 10 -> 11 -> 15 -> 20 -> EOC. Số cluster dữ liệu = 5.

</details>

### Câu 378. Trong FAT, byte thuộc tính của file/thư mục có thuộc tính ẩn và thư mục là bao nhiêu?

A. 0x32
B. 0x13
C. Một thuật toán điều phối đĩa chuyên chọn cylinder xa nhất.
D. 0x12

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** 0x12

**Giải thích:** Các bit thuộc tính: read-only=0x01, hidden=0x02, system=0x04, directory=0x10, archive=0x20. OR các bit cần thiết.

</details>

### Câu 379. Trong FAT, byte thuộc tính của file/thư mục có thuộc tính chỉ đọc và ẩn là bao nhiêu?

A. 0x03
B. 0x13
C. 0x02
D. 0x04

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** 0x03

**Giải thích:** Các bit thuộc tính: read-only=0x01, hidden=0x02, system=0x04, directory=0x10, archive=0x20. OR các bit cần thiết.

</details>

### Câu 380. Trong FAT, byte thuộc tính của file/thư mục có thuộc tính hệ thống và archive là bao nhiêu?

A. Một thuật toán điều phối đĩa chuyên chọn cylinder xa nhất.
B. 0x34
C. 0x25
D. 0x24

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** 0x24

**Giải thích:** Các bit thuộc tính: read-only=0x01, hidden=0x02, system=0x04, directory=0x10, archive=0x20. OR các bit cần thiết.

</details>


---

## Chương 6 - Quản lý vào ra và điều phối đĩa

### Câu 381. Hàng đợi cylinder [15, 4, 12, 7, 19], đầu đọc ở 8. Theo FCFS, tổng quãng đường dịch chuyển là bao nhiêu?

A. 42
B. 44
C. 58
D. 43

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** 43

**Giải thích:** Thứ tự phục vụ: 8 -> 15 -> 4 -> 12 -> 7 -> 19. Tổng quãng đường = 43 cylinder.

</details>

### Câu 382. Hàng đợi cylinder [15, 4, 12, 7, 19], đầu đọc ở 8. Theo SSTF, tổng quãng đường dịch chuyển là bao nhiêu?

A. 18
B. 20
C. 34
D. 19

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** 19

**Giải thích:** Thứ tự phục vụ: 8 -> 7 -> 4 -> 12 -> 15 -> 19. Tổng quãng đường = 19 cylinder.

</details>

### Câu 383. Hàng đợi cylinder [15, 4, 12, 7, 19], đầu đọc ở 8. Theo LOOK hướng giảm, thứ tự phục vụ đúng là gì?

A. 8 -> 7 -> 4 -> 12 -> 15 -> 19
B. 8 -> 19 -> 15 -> 12 -> 7 -> 4
C. 8 -> 19 -> 15 -> 12 -> 4 -> 7
D. 8 -> 4 -> 7 -> 12 -> 15 -> 19

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** 8 -> 7 -> 4 -> 12 -> 15 -> 19

**Giải thích:** Áp dụng quy tắc LOOK, thứ tự phục vụ là 8 -> 7 -> 4 -> 12 -> 15 -> 19.

</details>

### Câu 384. Hàng đợi cylinder [15, 4, 12, 7, 19], đầu đọc ở 8. Theo C-LOOK hướng giảm, thứ tự phục vụ đúng là gì?

A. 8 -> 4 -> 7 -> 12 -> 15 -> 19
B. 8 -> 7 -> 4 -> 19 -> 15 -> 12
C. 8 -> 12 -> 15 -> 19 -> 4 -> 7
D. 8 -> 19 -> 15 -> 12 -> 7 -> 4

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** 8 -> 7 -> 4 -> 19 -> 15 -> 12

**Giải thích:** Áp dụng quy tắc C-LOOK, thứ tự phục vụ là 8 -> 7 -> 4 -> 19 -> 15 -> 12.

</details>

### Câu 385. Hàng đợi cylinder [15, 4, 12, 7, 19], đầu đọc ở 8, đĩa có cylinder 0..29. Theo SCAN hướng giảm, thứ tự phục vụ đúng là gì?

A. 8 -> 19 -> 15 -> 12 -> 7 -> 4
B. 8 -> 19 -> 15 -> 12 -> 4 -> 7
C. 8 -> 4 -> 7 -> 12 -> 15 -> 19
D. 8 -> 7 -> 4 -> 12 -> 15 -> 19

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** 8 -> 7 -> 4 -> 12 -> 15 -> 19

**Giải thích:** SCAN hướng giảm phục vụ các yêu cầu nhỏ hơn đầu đọc trước: 7, 4; đầu đọc tiếp tục đến mép 0 rồi đảo chiều và phục vụ 12, 15, 19. Mép đĩa không phải yêu cầu nên thứ tự phục vụ là 8 -> 7 -> 4 -> 12 -> 15 -> 19.

</details>

### Câu 386. Hàng đợi cylinder [9, 19, 13, 25, 6, 18], đầu đọc ở 15, đĩa có cylinder 0..29. Theo SCAN hướng tăng, thứ tự phục vụ đúng là gì?

A. 15 -> 25 -> 19 -> 18 -> 13 -> 9 -> 6
B. 15 -> 6 -> 9 -> 13 -> 25 -> 19 -> 18
C. 15 -> 6 -> 9 -> 13 -> 18 -> 19 -> 25
D. 15 -> 18 -> 19 -> 25 -> 13 -> 9 -> 6

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** 15 -> 18 -> 19 -> 25 -> 13 -> 9 -> 6

**Giải thích:** SCAN hướng tăng phục vụ 18, 19, 25; đầu đọc tiếp tục đến mép 29 rồi đảo chiều phục vụ 13, 9, 6. Mép đĩa không phải yêu cầu nên thứ tự phục vụ là 15 -> 18 -> 19 -> 25 -> 13 -> 9 -> 6.

</details>

### Câu 387. Hàng đợi cylinder [9, 19, 13, 25, 6, 18], đầu đọc ở 15. Theo C-LOOK hướng tăng, thứ tự phục vụ đúng là gì?

A. 15 -> 13 -> 9 -> 6 -> 25 -> 19 -> 18
B. 15 -> 6 -> 9 -> 13 -> 18 -> 19 -> 25
C. 15 -> 18 -> 19 -> 25 -> 6 -> 9 -> 13
D. 15 -> 25 -> 19 -> 18 -> 13 -> 9 -> 6

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** 15 -> 18 -> 19 -> 25 -> 6 -> 9 -> 13

**Giải thích:** Áp dụng quy tắc C-LOOK, thứ tự phục vụ là 15 -> 18 -> 19 -> 25 -> 6 -> 9 -> 13.

</details>

### Câu 388. Hàng đợi cylinder [9, 19, 13, 25, 6, 18], đầu đọc ở 15. Theo SSTF, thứ tự phục vụ đúng là gì?

A. 15 -> 25 -> 19 -> 18 -> 6 -> 9 -> 13
B. 15 -> 25 -> 19 -> 18 -> 13 -> 9 -> 6
C. 15 -> 6 -> 9 -> 13 -> 18 -> 19 -> 25
D. 15 -> 13 -> 9 -> 6 -> 18 -> 19 -> 25

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** 15 -> 13 -> 9 -> 6 -> 18 -> 19 -> 25

**Giải thích:** Áp dụng quy tắc SSTF, thứ tự phục vụ là 15 -> 13 -> 9 -> 6 -> 18 -> 19 -> 25.

</details>

### Câu 389. Hàng đợi cylinder [98, 183, 37, 122, 14, 124, 65, 67], đầu đọc ở 53. Theo FCFS, tổng quãng đường dịch chuyển là bao nhiêu?

A. 641
B. 639
C. 640
D. 809

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** 640

**Giải thích:** Thứ tự phục vụ: 53 -> 98 -> 183 -> 37 -> 122 -> 14 -> 124 -> 65 -> 67. Tổng quãng đường = 640 cylinder.

</details>

### Câu 390. Hàng đợi cylinder [98, 183, 37, 122, 14, 124, 65, 67], đầu đọc ở 53. Theo SSTF, tổng quãng đường dịch chuyển là bao nhiêu?

A. 235
B. 237
C. 236
D. 405

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** 236

**Giải thích:** Thứ tự phục vụ: 53 -> 65 -> 67 -> 37 -> 14 -> 98 -> 122 -> 124 -> 183. Tổng quãng đường = 236 cylinder.

</details>

### Câu 391. Hàng đợi cylinder [98, 183, 37, 122, 14, 124, 65, 67], đầu đọc ở 53, đĩa có cylinder 0..199. Theo SCAN hướng tăng, tổng quãng đường dịch chuyển là bao nhiêu?

A. 332
B. 331
C. 500
D. 330

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** 331

**Giải thích:** SCAN hướng tăng: phục vụ 65, 67, 98, 122, 124, 183, tiếp tục tới mép 199 rồi đảo chiều phục vụ 37, 14. Quãng đường = (199 - 53) + (199 - 14) = 146 + 185 = 331 cylinder.

</details>

### Câu 392. Hàng đợi cylinder [98, 183, 37, 122, 14, 124, 65, 67], đầu đọc ở 53. Theo LOOK hướng tăng, tổng quãng đường dịch chuyển là bao nhiêu?

A. 298
B. 300
C. 299
D. 468

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: C.** 299

**Giải thích:** Thứ tự phục vụ: 53 -> 65 -> 67 -> 98 -> 122 -> 124 -> 183 -> 37 -> 14. Tổng quãng đường = 299 cylinder.

</details>

### Câu 393. Hàng đợi cylinder [30, 70, 15, 90, 45], đầu đọc ở 50. Theo SSTF, tổng quãng đường dịch chuyển là bao nhiêu?

A. 110
B. 111
C. 109
D. 185

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** 110

**Giải thích:** Thứ tự phục vụ: 50 -> 45 -> 30 -> 15 -> 70 -> 90. Tổng quãng đường = 110 cylinder.

</details>

### Câu 394. Hàng đợi cylinder [30, 70, 15, 90, 45], đầu đọc ở 50. Theo LOOK hướng tăng, thứ tự phục vụ đúng là gì?

A. 50 -> 90 -> 70 -> 45 -> 30 -> 15
B. 50 -> 70 -> 90 -> 45 -> 30 -> 15
C. 50 -> 15 -> 30 -> 45 -> 90 -> 70
D. 50 -> 15 -> 30 -> 45 -> 70 -> 90

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** 50 -> 70 -> 90 -> 45 -> 30 -> 15

**Giải thích:** Áp dụng quy tắc LOOK, thứ tự phục vụ là 50 -> 70 -> 90 -> 45 -> 30 -> 15.

</details>

### Câu 395. Hàng đợi cylinder [30, 70, 15, 90, 45], đầu đọc ở 50, đĩa có cylinder 0..99. Theo SCAN hướng giảm, tổng quãng đường dịch chuyển là bao nhiêu?

A. 139
B. 140
C. 215
D. 141

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** 140

**Giải thích:** SCAN hướng giảm: phục vụ 45, 30, 15, tiếp tục tới mép 0 rồi đảo chiều phục vụ 70, 90. Quãng đường = 50 + 90 = 140 cylinder.

</details>

### Câu 396. Hàng đợi cylinder [5, 40, 10, 35, 20], đầu đọc ở 18. Theo FCFS, tổng quãng đường dịch chuyển là bao nhiêu?

A. 118
B. 119
C. 153
D. 117

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: A.** 118

**Giải thích:** Thứ tự phục vụ: 18 -> 5 -> 40 -> 10 -> 35 -> 20. Tổng quãng đường = 118 cylinder.

</details>

### Câu 397. Hàng đợi cylinder [5, 40, 10, 35, 20], đầu đọc ở 18. Theo SSTF, thứ tự phục vụ đúng là gì?

A. 18 -> 40 -> 35 -> 20 -> 10 -> 5
B. 18 -> 40 -> 35 -> 5 -> 10 -> 20
C. 18 -> 5 -> 10 -> 20 -> 35 -> 40
D. 18 -> 20 -> 10 -> 5 -> 35 -> 40

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** 18 -> 20 -> 10 -> 5 -> 35 -> 40

**Giải thích:** Áp dụng quy tắc SSTF, thứ tự phục vụ là 18 -> 20 -> 10 -> 5 -> 35 -> 40.

</details>

### Câu 398. Hàng đợi cylinder [5, 40, 10, 35, 20], đầu đọc ở 18. Theo LOOK hướng giảm, tổng quãng đường dịch chuyển là bao nhiêu?

A. 83
B. 48
C. 49
D. 47

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** 48

**Giải thích:** Thứ tự phục vụ: 18 -> 10 -> 5 -> 20 -> 35 -> 40. Tổng quãng đường = 48 cylinder.

</details>

### Câu 399. Hàng đợi cylinder [5, 40, 10, 35, 20], đầu đọc ở 18. Theo C-LOOK hướng giảm, thứ tự phục vụ đúng là gì?

A. 18 -> 5 -> 10 -> 20 -> 35 -> 40
B. 18 -> 20 -> 35 -> 40 -> 5 -> 10
C. 18 -> 40 -> 35 -> 20 -> 10 -> 5
D. 18 -> 10 -> 5 -> 40 -> 35 -> 20

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: D.** 18 -> 10 -> 5 -> 40 -> 35 -> 20

**Giải thích:** Áp dụng quy tắc C-LOOK, thứ tự phục vụ là 18 -> 10 -> 5 -> 40 -> 35 -> 20.

</details>

### Câu 400. Hàng đợi cylinder [5, 40, 10, 35, 20], đầu đọc ở 18, đĩa có cylinder 0..49. Theo SCAN hướng tăng, tổng quãng đường dịch chuyển là bao nhiêu?

A. 76
B. 75
C. 74
D. 110

<details>
<summary>Đáp án và giải thích</summary>

**Đáp án: B.** 75

**Giải thích:** SCAN hướng tăng: phục vụ 20, 35, 40, tiếp tục tới mép 49 rồi đảo chiều phục vụ 10, 5. Quãng đường = (49 - 18) + (49 - 5) = 31 + 44 = 75 cylinder.

</details>


---

## Bảng đáp án nhanh

- Câu 001–020: `001:B 002:A 003:C 004:C 005:B 006:D 007:C 008:A 009:D 010:A 011:A 012:C 013:C 014:D 015:B 016:A 017:C 018:A 019:A 020:C`
- Câu 021–040: `021:D 022:D 023:A 024:B 025:C 026:A 027:C 028:B 029:D 030:B 031:B 032:A 033:C 034:B 035:B 036:B 037:C 038:B 039:A 040:B`
- Câu 041–060: `041:A 042:C 043:C 044:A 045:A 046:A 047:D 048:B 049:D 050:B 051:C 052:B 053:B 054:D 055:B 056:D 057:C 058:B 059:D 060:A`
- Câu 061–080: `061:B 062:A 063:C 064:D 065:C 066:C 067:B 068:A 069:D 070:B 071:A 072:C 073:A 074:D 075:B 076:A 077:C 078:D 079:D 080:A`
- Câu 081–100: `081:B 082:C 083:B 084:C 085:A 086:B 087:C 088:D 089:A 090:D 091:C 092:A 093:B 094:B 095:D 096:A 097:A 098:D 099:A 100:A`
- Câu 101–120: `101:A 102:C 103:D 104:D 105:A 106:D 107:B 108:A 109:B 110:B 111:C 112:A 113:B 114:B 115:D 116:B 117:D 118:D 119:C 120:A`
- Câu 121–140: `121:D 122:A 123:A 124:B 125:A 126:B 127:C 128:A 129:A 130:A 131:C 132:A 133:B 134:A 135:C 136:C 137:D 138:D 139:A 140:D`
- Câu 141–160: `141:C 142:D 143:D 144:D 145:B 146:D 147:A 148:A 149:B 150:B 151:B 152:C 153:D 154:C 155:D 156:B 157:C 158:C 159:C 160:A`
- Câu 161–180: `161:C 162:C 163:C 164:A 165:D 166:B 167:D 168:C 169:A 170:D 171:D 172:A 173:D 174:D 175:B 176:D 177:B 178:D 179:B 180:D`
- Câu 181–200: `181:C 182:C 183:D 184:A 185:C 186:D 187:A 188:D 189:B 190:C 191:D 192:D 193:C 194:D 195:A 196:A 197:A 198:C 199:D 200:C`
- Câu 201–220: `201:A 202:B 203:C 204:B 205:C 206:B 207:A 208:C 209:B 210:B 211:B 212:C 213:D 214:A 215:A 216:C 217:C 218:D 219:B 220:D`
- Câu 221–240: `221:B 222:A 223:C 224:B 225:C 226:A 227:A 228:C 229:A 230:A 231:B 232:A 233:A 234:D 235:B 236:C 237:C 238:C 239:C 240:B`
- Câu 241–260: `241:D 242:A 243:A 244:C 245:D 246:D 247:D 248:C 249:B 250:B 251:D 252:A 253:B 254:A 255:C 256:A 257:B 258:B 259:A 260:C`
- Câu 261–280: `261:B 262:D 263:B 264:D 265:C 266:D 267:A 268:D 269:A 270:D 271:C 272:C 273:A 274:A 275:C 276:B 277:D 278:C 279:A 280:C`
- Câu 281–300: `281:D 282:C 283:A 284:C 285:B 286:C 287:C 288:A 289:D 290:C 291:C 292:B 293:B 294:A 295:A 296:B 297:D 298:B 299:D 300:D`
- Câu 301–320: `301:D 302:C 303:C 304:C 305:C 306:B 307:D 308:C 309:C 310:A 311:B 312:D 313:D 314:C 315:A 316:B 317:C 318:A 319:B 320:A`
- Câu 321–340: `321:B 322:D 323:A 324:C 325:C 326:A 327:D 328:B 329:D 330:B 331:D 332:C 333:D 334:C 335:A 336:A 337:B 338:A 339:A 340:A`
- Câu 341–360: `341:C 342:D 343:B 344:C 345:C 346:D 347:D 348:A 349:B 350:C 351:B 352:A 353:B 354:A 355:D 356:D 357:A 358:D 359:C 360:B`
- Câu 361–380: `361:A 362:A 363:A 364:A 365:D 366:C 367:A 368:B 369:D 370:B 371:D 372:B 373:A 374:D 375:D 376:A 377:A 378:D 379:A 380:D`
- Câu 381–400: `381:D 382:D 383:A 384:B 385:D 386:D 387:C 388:D 389:C 390:C 391:B 392:C 393:A 394:B 395:B 396:A 397:D 398:B 399:D 400:B`

## Ghi chú rà soát nội dung

- Các câu hỏi bao phủ đủ 6 mảng chính của học phần: tổng quan HĐH, tiến trình/luồng/điều phối/IPC, đồng bộ/bế tắc, quản lý bộ nhớ, hệ thống file/FAT, và quản lý vào ra/đĩa.
- Một số câu được biến đổi từ dạng đề thi để kiểm tra cùng bản chất nhưng tránh học vẹt đúng đáp án theo thứ tự lựa chọn.
- Với những công thức hay dùng: địa chỉ phân trang `page = address // page_size`, `offset = address % page_size`; FAT date/time; thời gian truy cập đĩa `seek + rotational latency + transfer`; và các độ đo điều phối CPU `turnaround = finish - arrival`, `waiting = turnaround - burst`.
