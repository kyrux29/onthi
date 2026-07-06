# OS Exam Trainer

Trang web ôn thi trắc nghiệm Nguyên lý Hệ điều hành từ `bo_400_cau_trac_nghiem_OS.md`.

## Chạy ứng dụng

```bash
npm install
npm start
```

Nếu port `3000` đang bận:

```bash
PORT=3001 npm start
```

Mở `http://localhost:3000` hoặc port bạn chọn.

## Chạy bằng Docker

```bash
docker compose up --build -d
```

Mặc định web chạy ở `http://localhost:3001`. Docker Compose cũng chạy PostgreSQL và lưu dữ liệu trong volume `os_exam_db`.

Nếu muốn đổi port host:

```bash
HOST_PORT=3002 docker compose up --build -d
```

Dừng container:

```bash
docker compose down
```

Lệnh trên không xóa database. Nếu muốn xóa sạch toàn bộ dữ liệu đã lưu, dùng:

```bash
docker compose down -v
```

## Cấu hình AI

Tạo file `.env` từ mẫu:

```bash
cp .env.example .env
```

Điền:

```bash
OPENAI_API_KEY=sk-your-key-here
OPENAI_MODEL=gpt-5.4
OPENAI_BASE_URL=https://api.openai.com/v1
AUTH_SECRET=change-this-long-random-secret
DATABASE_URL=postgres://user:password@host:5432/database
```

Admin dùng API key ở server. User thường chỉ cần API key cá nhân khi dùng tab **AI tài liệu**; tab **Nạp câu hỏi** import JSON thủ công không cần API key.

Khi chạy bằng Docker Compose, file `.env` cũng được dùng để truyền `OPENAI_API_KEY`, `OPENAI_MODEL`, `OPENAI_BASE_URL` và `HOST_PORT`.

Màn hình **AI tài liệu** có ô **Khung prompt gửi AI**. Khi nhấn **Tạo câu hỏi**, backend gửi prompt theo khung bắt buộc gồm: câu hỏi, 4 đáp án A-D, đáp án đúng, giải thích rõ ràng, ví dụ trong môn, mẹo khi gặp dạng bài và phân tích từng lựa chọn.

Ứng dụng dùng model mặc định `gpt-5.4`. Mỗi lần tạo có thể yêu cầu tối đa 200 câu; backend tự chia thành các batch 20 câu để giảm lỗi JSON và sắp xếp lại theo môn, chương, chủ đề.

## Thêm môn hoặc bộ câu hỏi mới

Đặt file Markdown có cấu trúc câu hỏi tương tự vào:

```bash
subjects/<ten-mon>/<ten-bo-cau-hoi>.md
```

Khi mở web, phần **Môn / bộ câu hỏi** sẽ tự nhận các file này. File ở root workspace cũng được quét nếu có cấu trúc câu hỏi hợp lệ.

## Dữ liệu được lưu

Khi chạy bằng Docker Compose, PostgreSQL lưu:

- Lịch sử tạo câu hỏi AI, prompt request, summary, topics và bộ câu hỏi sinh ra.
- Nội dung tài liệu đã trích xuất từ file upload.
- Tài khoản, phân quyền admin/user.
- Tiến độ làm bài và câu đã đánh dấu theo từng user.

Sau khi restart Docker, vào tab **AI tài liệu** để nạp lại lịch sử trong phần **Đã lưu trong database**.

## Deploy bằng Vercel

Repo đã có `vercel.json` và entrypoint `api/index.js`. Vercel sẽ route request về Express app theo cấu hình rewrite.

Trên Vercel cần đặt Environment Variables:

```bash
DATABASE_URL=postgres://user:password@host:5432/database
AUTH_SECRET=<chuoi-random-dai>
OPENAI_API_KEY=<api-key-admin>
OPENAI_MODEL=gpt-5.4
OPENAI_BASE_URL=https://api.openai.com/v1
```

Nếu database provider yêu cầu SSL, đặt thêm:

```bash
DATABASE_SSL=true
```

Lưu ý: Vercel không chạy PostgreSQL nội bộ như Docker Compose. Hãy dùng một Postgres managed bên ngoài như Vercel Postgres, Neon, Supabase hoặc Railway rồi điền `DATABASE_URL`.

## Kiểm tra dữ liệu

```bash
npm test
```

Script này xác nhận parser đọc đủ 400 câu, mỗi câu có 4 lựa chọn, đáp án, giải thích và mẹo làm bài.
# onthi
