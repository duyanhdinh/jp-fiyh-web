[English](README.md) | [Tiếng Việt](README.vi.md)

# FIYH — Fate in Your Hands

Dự án frontend portfolio cho website về chiêm tinh và tarot. Sử dụng **Astro, Vue 3, TypeScript và Tailwind CSS**, dự án kết hợp các trang render phía server với component Vue tương tác để nhập thông tin sinh, xem kết quả cá nhân hóa và duyệt bài viết.

Repository này chứa frontend của website. Dữ liệu tính toán và nội dung được cung cấp bởi API bên ngoài.

## Chức năng

- **Form thông tin sinh:** chọn ngày, giờ, quốc gia và thành phố theo quốc gia; kiểm tra đủ thông tin và lưu lựa chọn trong phiên trình duyệt.
- **Kết quả cá nhân hóa:** hiển thị bảng điểm tổng hợp, thông tin chiêm tinh và diễn giải năng lượng theo tháng từ dữ liệu API.
- **Giao diện responsive:** bảng tổng hợp riêng cho desktop và mobile, form và bố cục bài viết thích ứng theo kích thước màn hình.
- **Duyệt bài viết:** route danh mục lồng nhau, breadcrumb và nội dung có cấu trúc được hiển thị qua các component Vue tái sử dụng.
- **Đa ngôn ngữ:** bộ từ điển tiếng Anh và tiếng Nhật được lựa chọn qua cấu hình môi trường.

## Tech stack

| Công nghệ | Vai trò trong dự án |
| --- | --- |
| Astro 2 | Routing theo cấu trúc file, layout dùng chung, server-side rendering và Vue islands |
| Vue 3 | Composition API, single-file components, form reactive và giao diện kết quả |
| TypeScript 5 | Khai báo props, store, hàm hỗ trợ và alias import |
| Tailwind CSS 3 | Utility responsive, breakpoint tùy chỉnh và bảng màu theo nội dung nghiệp vụ |
| Pinia + VueUse | Quản lý state dùng chung và lưu state reactive vào `sessionStorage` |
| Fetch + Axios | Gọi API phía server và tích hợp HTTP phía trình duyệt |
| Floating Vue + Vueper Slides | Dropdown menu và component carousel |
| Astro Sitemap | Tạo sitemap, bổ sung URL từ nguồn JSON bên ngoài |
| Cloudflare adapter | Môi trường triển khai được cấu hình cho Astro SSR |

Các phiên bản trên là phiên bản major được khai báo trong `package.json`.

## Điểm nổi bật về kỹ thuật frontend

### Trang Astro kết hợp Vue islands

Astro phụ trách route và layout của trang. Các phần tương tác sử dụng `client:load` hoặc `client:only="vue"`, xác định rõ cách hydrate ở từng component. Trang kết quả lấy dữ liệu phía server rồi truyền vào component Vue qua props.

### Form reactive và state dùng chung

Pinia store quản lý thông tin sinh, dữ liệu menu và state kết quả. Computed của Vue tính danh sách thành phố, trạng thái đủ thông tin và URL trang kết quả. VueUse giữ các giá trị đã chọn trong phiên trình duyệt; khi đổi quốc gia, thành phố và tọa độ được đặt lại.

### Component nội dung tái sử dụng

Component hiển thị bài viết ánh xạ loại khối nội dung sang component Vue tương ứng cho tiêu đề, ảnh, danh sách và văn bản định dạng. Giao diện kết quả được chia thành phần tổng hợp, chiêm tinh và năng lượng, với component bảng riêng cho desktop và mobile.

### Đa ngôn ngữ và metadata của trang

Bộ từ điển tiếng Anh và tiếng Nhật được dùng chung giữa trang Astro và Vue qua plugin dịch tùy chỉnh. `PUBLIC_LANG` chọn bộ từ điển; ngôn ngữ được cấu hình theo môi trường. Layout dùng chung cung cấp tiêu đề trang, metadata mô tả và liên kết sitemap.

## Cấu trúc dự án

```text
src/
  pages/              Route Astro: trang chủ, kết quả, bài viết và 404
  layouts/            Layout dùng chung cho trang và bài viết
  components/
    astro/            Khung trang và component kết hợp nội dung trong Astro
    vue/              Form, điều hướng, kết quả và các khối nội dung bài viết
  vue/
    stores/           Pinia stores
    plugins/          Plugin dịch nội dung và HTTP
    main.ts           Khởi tạo ứng dụng Vue
  api/                Module API cho kết quả, bài viết và dữ liệu website
  locales/            Bộ từ điển tiếng Anh và tiếng Nhật
  helpers/            Xử lý ngày, dịch, sắp xếp và chuyển đổi dữ liệu
  _content/           Danh sách quốc gia và dữ liệu tham chiếu nghiệp vụ
public/               Tài nguyên tĩnh
sitemap/              Module lấy danh sách URL sitemap từ nguồn bên ngoài
```

## Chạy trên máy local

Cài đặt dependencies tại thư mục gốc repository:

```sh
npm ci
```

Tạo file `.env` với giá trị phù hợp cho môi trường của bạn:

```dotenv
PUBLIC_LANG=en
PUBLIC_HOST=http://localhost:4321
PUBLIC_API_HOST=https://your-api.example.com
FETCH_API_HOST=https://your-api.example.com
SITEMAP_SOURCE=your-sitemap.json
```

| Biến môi trường | Mục đích |
| --- | --- |
| `PUBLIC_LANG` | Khóa bộ từ điển: `en` hoặc `jp` |
| `PUBLIC_HOST` | Origin website dùng trong metadata và cấu hình sitemap |
| `PUBLIC_API_HOST` | Origin API mà trình duyệt có thể truy cập |
| `FETCH_API_HOST` | Origin API cho request phía server; dùng `PUBLIC_API_HOST` khi không được đặt |
| `SITEMAP_SOURCE` | Khóa object JSON tại URL S3 cấu hình trong `sitemap/genera-sitemap-ssr.ts`; nội dung phải là một mảng URL trang |

API được cấu hình cần cung cấp kết quả, bài viết, menu và dữ liệu thành phố theo cấu trúc response mà `src/api/` và các component sử dụng. Request từ trình duyệt cũng yêu cầu API cho phép origin của website local qua CORS.

Cấu hình Astro tải sitemap bên ngoài khi được nạp, nên cả môi trường phát triển và build đều cần nguồn sitemap có thể truy cập. Repository không bao gồm backend hoặc chế độ chạy độc lập bằng dữ liệu giả lập. Các giá trị `PUBLIC_*` được đưa ra trình duyệt; chỉ dùng chúng cho cấu hình công khai.

Khởi động server phát triển:

```sh
npm run dev -- --port 4321
```

Truy cập `http://localhost:4321`.

## Các lệnh hỗ trợ

| Lệnh | Mục đích |
| --- | --- |
| `npm run dev` | Khởi động server phát triển Astro |
| `npm run build` | Tạo bản build SSR trong `dist/` bằng Cloudflare adapter |
| `npm run preview` | Gọi lệnh preview của Astro; khả năng sử dụng phụ thuộc hỗ trợ của adapter |
| `npm run astro -- --help` | Xem các tùy chọn Astro CLI |

## Gợi ý đọc code

1. [Trang kết quả](src/pages/result/index.astro) — lấy dữ liệu phía server và cách hydrate component Vue.
2. [Birth store](src/vue/stores/birth.ts) — quan hệ giữa các giá trị reactive, lưu state theo phiên và tính trạng thái form.
3. [Form thông tin sinh](src/components/vue/common/DateDataForm.vue) — Composition API và component chọn dữ liệu tái sử dụng.
4. [Component hiển thị bài viết](src/components/vue/pages/article/VueArticleContent.vue) — chọn component theo cấu trúc nội dung API.
5. [Vue entrypoint](src/vue/main.ts) — Pinia instance dùng chung, plugin dịch và đăng ký component giao diện.
