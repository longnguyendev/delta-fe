/**
 * Dữ liệu dịch vụ tạm thời (mockup).
 *
 * Cùng khuôn với `lib/data/projects.ts`: nội dung sẽ được thay bằng GraphQL/Strapi
 * (fragment `Service` hiện chưa có field `slug` — bổ sung ở backend rồi `pnpm codegen`).
 * Khi đó chỉ cần thay `getServices` / `getService` bằng fetcher thật, phần component
 * giữ nguyên vì đã đọc qua type `Service` bên dưới.
 *
 * Nội dung entity chỉ có tiếng Việt (theo yêu cầu); phần chrome của giao diện
 * (nhãn, nút, tiêu đề mục) nằm trong dictionary `lib/i18n`.
 */

import { type Project, type ProjectImage } from "./projects";

/** Bốn slug dịch vụ — giữ đúng thứ tự để lưới đánh số 01–04 khớp thiết kế. */
export const serviceCategories = [
  "ket-cau-thep",
  "cau-kien-kim-loai",
  "ket-cau-phu-tro",
  "han-lap-rap",
] as const;

export type ServiceCategory = (typeof serviceCategories)[number];
export type ServiceImage = ProjectImage;

export type ServiceScopeItem = { title: string; body: string };

/** Một dòng trong kit-list — `<b>label</b>` + nội dung. */
export type ServiceKitItem = { label: string; body: string };

/** Năm ô meta dưới hero trang chi tiết. */
export type ServiceMeta = {
  group: string;
  scope: string;
  equipment: string;
  acceptance: string;
  handover: string;
};

export type ServiceTimelineItem = {
  /** Nhãn giai đoạn — "Giai đoạn 1". */
  stage: string;
  /** Chú thích nhỏ dưới nhãn — "Tiếp nhận", "Bàn giao"… */
  caption: string;
  title: string;
  body: string;
};

export type ServiceDetail = {
  meta: ServiceMeta;
  /** Tiêu đề cột trái mục "Phạm vi công việc" — đặc thù từng dịch vụ (entity VI). */
  contextTitle: string;
  /** Bối cảnh — hai đoạn văn xuôi ở cột phải. */
  context: string[];
  scope: ServiceScopeItem[];
  /** Tiêu đề mục vật tư — "Những hạng mục nằm trong phạm vi …" (entity VI). */
  systemTitle: string;
  kit: ServiceKitItem[];
  /** Sơ đồ nguyên lý kèm chú thích. */
  diagram: ServiceImage & { caption: string };
  timeline: ServiceTimelineItem[];
};

export type Service = {
  slug: ServiceCategory;
  name: string;
  description: string;
  /** Bốn bullet trên thẻ dịch vụ ở trang danh sách. */
  scope: string[];
  detail: ServiceDetail;
};

export type Product = {
  src: string;
  width: number;
  height: number;
  alt: string;
  /** Nhãn danh mục — "Khung nhà xưởng". */
  category: string;
  name: string;
};

export const services: Service[] = [
  {
    slug: "ket-cau-thep",
    name: "Sản xuất kết cấu thép",
    description:
      "Sản xuất, chế tạo khung thép, dầm, cột, giàn thép và các cấu kiện kết cấu theo bản vẽ thiết kế cho công trình xây dựng và nhà xưởng công nghiệp.",
    scope: [
      "Chế tạo khung thép, dầm và cột theo bản vẽ thiết kế",
      "Sản xuất giàn thép và cấu kiện kết cấu cho nhà xưởng",
      "Gia công theo yêu cầu kỹ thuật của từng công trình",
      "Kiểm tra kích thước và chất lượng trước khi xuất xưởng",
    ],
    detail: {
      meta: {
        group: "Sản xuất kết cấu thép",
        scope: "Công trình xây dựng & nhà xưởng công nghiệp",
        equipment: "Thép hình & thép tấm theo bản vẽ",
        acceptance: "Theo bản vẽ và yêu cầu kỹ thuật",
        handover: "Sản phẩm & hồ sơ chế tạo",
      },
      contextTitle: "Một đầu mối từ bản vẽ đến sản phẩm kết cấu",
      context: [
        "Delta Energy nhận sản xuất, chế tạo kết cấu thép cho công trình xây dựng và nhà xưởng công nghiệp: khung thép, dầm, cột, giàn thép và các cấu kiện theo bản vẽ thiết kế. Công việc bắt đầu bằng việc tiếp nhận hồ sơ bản vẽ và thống nhất yêu cầu kỹ thuật với chủ đầu tư.",
        "Toàn bộ quá trình từ triển khai bản vẽ chế tạo, chuẩn bị vật tư đến gia công và kiểm tra chất lượng do một đội kỹ thuật chịu trách nhiệm xuyên suốt, giúp sản phẩm đáp ứng đúng yêu cầu của công trình và tiến độ bàn giao.",
      ],
      scope: [
        {
          title: "Tiếp nhận bản vẽ & thống nhất yêu cầu kỹ thuật",
          body: "Tiếp nhận hồ sơ thiết kế, đối chiếu thông số kỹ thuật và thống nhất phạm vi chế tạo với chủ đầu tư.",
        },
        {
          title: "Triển khai bản vẽ chế tạo & chuẩn bị vật tư",
          body: "Triển khai bản vẽ chế tạo, lập bảng vật tư thép hình, thép tấm và kiểm tra vật liệu đầu vào.",
        },
        {
          title: "Cắt, uốn, hàn & tổ hợp cấu kiện",
          body: "Gia công cắt, khoan, uốn, hàn và tổ hợp khung, dầm, cột, giàn thép theo bản vẽ đã chốt.",
        },
        {
          title: "Kiểm tra chất lượng & xuất xưởng",
          body: "Kiểm tra kích thước, mối hàn và tình trạng bề mặt theo yêu cầu kỹ thuật trước khi bàn giao sản phẩm.",
        },
      ],
      systemTitle: "Những hạng mục nằm trong phạm vi sản xuất",
      kit: [
        {
          label: "Khung & dầm cột",
          body: "Khung thép, dầm, cột và giàn thép cho công trình xây dựng và nhà xưởng công nghiệp",
        },
        {
          label: "Cấu kiện tổ hợp",
          body: "Các cấu kiện kết cấu được tổ hợp theo bản vẽ thiết kế và quy cách kỹ thuật",
        },
        {
          label: "Vật liệu đầu vào",
          body: "Thép hình, thép tấm được kiểm tra chủng loại, quy cách theo bảng vật tư",
        },
        {
          label: "Hoàn thiện bề mặt",
          body: "Làm sạch bề mặt và sơn phủ theo yêu cầu kỹ thuật của từng đơn hàng",
        },
      ],
      diagram: {
        src: "/imagery/service-steel-frame.svg",
        width: 480,
        height: 400,
        alt: "Sơ đồ khung thép nhà xưởng: dầm, cột và giàn mái",
        caption: "Sơ đồ khung thép nhà xưởng: dầm, cột và giàn mái.",
      },
      timeline: [
        {
          stage: "Giai đoạn 1",
          caption: "Tiếp nhận",
          title: "Tiếp nhận bản vẽ & thống nhất yêu cầu",
          body: "Tiếp nhận hồ sơ thiết kế, đối chiếu yêu cầu kỹ thuật và thống nhất phạm vi, tiến độ chế tạo.",
        },
        {
          stage: "Giai đoạn 2",
          caption: "Vật tư",
          title: "Triển khai bản vẽ chế tạo & chuẩn bị vật tư",
          body: "Triển khai bản vẽ chế tạo, lập bảng vật tư và kiểm tra thép hình, thép tấm đầu vào.",
        },
        {
          stage: "Giai đoạn 3",
          caption: "Gia công",
          title: "Cắt, uốn, hàn & tổ hợp cấu kiện",
          body: "Gia công cắt, khoan, uốn, hàn và tổ hợp khung, dầm, cột, giàn thép theo bản vẽ đã chốt.",
        },
        {
          stage: "Giai đoạn 4",
          caption: "Bàn giao",
          title: "Kiểm tra chất lượng & xuất xưởng",
          body: "Kiểm tra kích thước, mối hàn và tình trạng bề mặt, bàn giao sản phẩm và hồ sơ chế tạo.",
        },
      ],
    },
  },
  {
    slug: "cau-kien-kim-loai",
    name: "Gia công cấu kiện kim loại",
    description:
      "Gia công thép tấm, thép hình và các chi tiết kim loại theo kích thước, quy cách và bản vẽ kỹ thuật — từ cắt, khoan, hàn đến lắp ráp và hoàn thiện sản phẩm.",
    scope: [
      "Cắt thép tấm, thép hình theo kích thước và quy cách",
      "Khoan, hàn và lắp ráp chi tiết theo bản vẽ kỹ thuật",
      "Hoàn thiện bề mặt sản phẩm theo yêu cầu đơn hàng",
      "Kiểm tra kích thước và chất lượng từng lô sản phẩm",
    ],
    detail: {
      meta: {
        group: "Gia công cấu kiện kim loại",
        scope: "Nhà máy, nhà xưởng & công trình công nghiệp",
        equipment: "Thép tấm & thép hình theo bản vẽ",
        acceptance: "Theo kích thước và quy cách kỹ thuật",
        handover: "Sản phẩm gia công theo lô",
      },
      contextTitle: "Một đầu mối từ bản vẽ đến sản phẩm gia công",
      context: [
        "Delta Energy nhận gia công thép tấm, thép hình và các chi tiết kim loại theo bản vẽ kỹ thuật của khách hàng. Công việc bắt đầu bằng việc tiếp nhận bản vẽ, đối chiếu kích thước, quy cách và thống nhất yêu cầu hoàn thiện bề mặt.",
        "Các công đoạn cắt, khoan, hàn, lắp ráp và hoàn thiện được thực hiện theo một quy trình thống nhất, có kiểm tra kích thước theo từng lô sản phẩm trước khi bàn giao.",
      ],
      scope: [
        {
          title: "Tiếp nhận bản vẽ & lập phương án gia công",
          body: "Đối chiếu kích thước, quy cách và yêu cầu kỹ thuật để lập phương án gia công cho từng lô sản phẩm.",
        },
        {
          title: "Cắt & khoan theo bản vẽ",
          body: "Cắt thép tấm, thép hình và khoan lỗ theo kích thước, vị trí ghi trên bản vẽ kỹ thuật.",
        },
        {
          title: "Hàn & lắp ráp chi tiết",
          body: "Hàn liên kết và lắp ráp các chi tiết thành cụm sản phẩm theo đúng quy cách kỹ thuật.",
        },
        {
          title: "Hoàn thiện & kiểm tra xuất xưởng",
          body: "Làm sạch bề mặt, hoàn thiện sản phẩm và kiểm tra kích thước từng lô trước khi bàn giao.",
        },
      ],
      systemTitle: "Những hạng mục nằm trong phạm vi gia công",
      kit: [
        {
          label: "Cắt & khoan",
          body: "Cắt thép tấm, thép hình theo kích thước và khoan lỗ theo vị trí bản vẽ",
        },
        {
          label: "Hàn liên kết",
          body: "Hàn liên kết các chi tiết kim loại theo quy cách mối hàn ghi trên bản vẽ",
        },
        {
          label: "Lắp ráp",
          body: "Lắp ráp chi tiết thành cụm sản phẩm theo đúng trình tự kỹ thuật",
        },
        {
          label: "Hoàn thiện",
          body: "Làm sạch bề mặt, mài nhẵn và hoàn thiện theo yêu cầu của từng đơn hàng",
        },
      ],
      diagram: {
        src: "/imagery/service-metal-fabrication.svg",
        width: 480,
        height: 400,
        alt: "Sơ đồ gia công cấu kiện kim loại: thép tấm, cắt và khoan lỗ",
        caption:
          "Sơ đồ các công đoạn gia công cấu kiện kim loại: cắt, khoan và hàn.",
      },
      timeline: [
        {
          stage: "Giai đoạn 1",
          caption: "Tiếp nhận",
          title: "Tiếp nhận bản vẽ & chốt phương án",
          body: "Tiếp nhận bản vẽ kỹ thuật, đối chiếu kích thước, quy cách và thống nhất yêu cầu hoàn thiện.",
        },
        {
          stage: "Giai đoạn 2",
          caption: "Vật tư",
          title: "Chuẩn bị vật tư theo bảng kê",
          body: "Kiểm tra thép tấm, thép hình và vật tư theo bảng kê kỹ thuật của đơn hàng.",
        },
        {
          stage: "Giai đoạn 3",
          caption: "Gia công",
          title: "Cắt, khoan, hàn & lắp ráp",
          body: "Thực hiện cắt, khoan, hàn và lắp ráp chi tiết theo bản vẽ và quy cách kỹ thuật.",
        },
        {
          stage: "Giai đoạn 4",
          caption: "Bàn giao",
          title: "Hoàn thiện & bàn giao theo lô",
          body: "Hoàn thiện bề mặt, kiểm tra kích thước và bàn giao sản phẩm theo lô.",
        },
      ],
    },
  },
  {
    slug: "ket-cau-phu-tro",
    name: "Gia công kết cấu thép phụ trợ công nghiệp",
    description:
      "Gia công sàn thao tác, cầu thang thép, lan can, giá đỡ và các cấu kiện kim loại phụ trợ cho nhà máy, nhà xưởng và công trình công nghiệp.",
    scope: [
      "Sàn thao tác và cầu thang thép cho nhà xưởng",
      "Lan can, giá đỡ và kết cấu phụ trợ theo bản vẽ",
      "Gia công theo năng lực thực tế của từng đơn hàng",
      "Kiểm tra kích thước và chất lượng trước khi bàn giao",
    ],
    detail: {
      meta: {
        group: "Kết cấu thép phụ trợ",
        scope: "Nhà máy, nhà xưởng & công trình công nghiệp",
        equipment: "Thép hình & thép tấm theo bản vẽ",
        acceptance: "Theo bản vẽ và yêu cầu kỹ thuật",
        handover: "Sản phẩm & hồ sơ kỹ thuật",
      },
      contextTitle: "Một đầu mối cho các cấu kiện phụ trợ công nghiệp",
      context: [
        "Delta Energy nhận gia công sàn thao tác, cầu thang thép, lan can, giá đỡ và các cấu kiện kim loại phụ trợ phục vụ nhà máy, nhà xưởng và công trình công nghiệp. Phạm vi nhận việc được xác nhận theo năng lực thực tế của từng đơn hàng.",
        "Từng cấu kiện được gia công theo bản vẽ và yêu cầu kỹ thuật của công trình, có kiểm tra kích thước và mối hàn trước khi bàn giao cho công tác lắp đặt.",
      ],
      scope: [
        {
          title: "Tiếp nhận bản vẽ & đối chiếu hiện trạng",
          body: "Tiếp nhận bản vẽ, đối chiếu kích thước hiện trạng và thống nhất phạm vi gia công với chủ đầu tư.",
        },
        {
          title: "Chế tạo sàn thao tác & cầu thang thép",
          body: "Cắt, hàn và tổ hợp sàn thao tác, cầu thang thép theo bản vẽ và quy cách kỹ thuật.",
        },
        {
          title: "Gia công lan can, giá đỡ & cấu kiện phụ trợ",
          body: "Gia công lan can, giá đỡ và các cấu kiện kim loại phụ trợ theo bản vẽ của từng công trình.",
        },
        {
          title: "Kiểm tra & bàn giao",
          body: "Kiểm tra kích thước, mối hàn và tình trạng bề mặt, bàn giao sản phẩm theo tiến độ lắp đặt của công trình.",
        },
      ],
      systemTitle: "Những cấu kiện nằm trong phạm vi gia công",
      kit: [
        {
          label: "Sàn thao tác",
          body: "Sàn thao tác cho khu vực vận hành, bảo trì thiết bị trong nhà máy, nhà xưởng",
        },
        {
          label: "Cầu thang thép",
          body: "Cầu thang thép cho nhà xưởng và công trình công nghiệp theo bản vẽ",
        },
        {
          label: "Lan can & giá đỡ",
          body: "Lan can an toàn, giá đỡ thiết bị và đường ống theo yêu cầu kỹ thuật",
        },
        {
          label: "Cấu kiện phụ trợ",
          body: "Các cấu kiện kim loại phụ trợ khác theo năng lực thực tế của từng đơn hàng",
        },
      ],
      diagram: {
        src: "/imagery/service-platform-stairs.svg",
        width: 480,
        height: 400,
        alt: "Sơ đồ sàn thao tác, cầu thang thép và lan can",
        caption:
          "Sơ đồ sàn thao tác, cầu thang thép và lan can phục vụ nhà xưởng.",
      },
      timeline: [
        {
          stage: "Giai đoạn 1",
          caption: "Tiếp nhận",
          title: "Tiếp nhận bản vẽ & đối chiếu hiện trạng",
          body: "Tiếp nhận bản vẽ kỹ thuật, đối chiếu kích thước hiện trạng và thống nhất phạm vi gia công.",
        },
        {
          stage: "Giai đoạn 2",
          caption: "Vật tư",
          title: "Chuẩn bị vật tư theo bảng kê",
          body: "Kiểm tra thép hình, thép tấm và vật tư theo bảng kê kỹ thuật của từng đơn hàng.",
        },
        {
          stage: "Giai đoạn 3",
          caption: "Gia công",
          title: "Cắt, hàn & tổ hợp cấu kiện",
          body: "Cắt, khoan, hàn và tổ hợp sàn thao tác, cầu thang, lan can và giá đỡ theo bản vẽ.",
        },
        {
          stage: "Giai đoạn 4",
          caption: "Bàn giao",
          title: "Kiểm tra chất lượng & bàn giao",
          body: "Kiểm tra kích thước, mối hàn và tình trạng bề mặt, bàn giao sản phẩm theo tiến độ công trình.",
        },
      ],
    },
  },
  {
    slug: "han-lap-rap",
    name: "Hàn, lắp ráp và hoàn thiện sản phẩm",
    description:
      "Thực hiện hàn liên kết, lắp ráp và hoàn thiện cấu kiện thép theo yêu cầu kỹ thuật, đảm bảo chất lượng sản phẩm và tiến độ bàn giao.",
    scope: [
      "Hàn liên kết cấu kiện thép theo bản vẽ kỹ thuật",
      "Lắp ráp cụm cấu kiện theo đúng trình tự thiết kế",
      "Hoàn thiện bề mặt sản phẩm theo yêu cầu đơn hàng",
      "Kiểm tra mối hàn và chất lượng trước khi bàn giao",
    ],
    detail: {
      meta: {
        group: "Hàn, lắp ráp & hoàn thiện",
        scope: "Cấu kiện thép theo đơn hàng",
        equipment: "Vật liệu hàn theo quy cách kỹ thuật",
        acceptance: "Theo yêu cầu kỹ thuật đã thống nhất",
        handover: "Sản phẩm hoàn thiện theo tiến độ",
      },
      contextTitle: "Một đầu mối từ hàn liên kết đến hoàn thiện",
      context: [
        "Delta Energy thực hiện hàn liên kết, lắp ráp và hoàn thiện cấu kiện thép theo yêu cầu kỹ thuật của từng đơn hàng. Công việc bắt đầu bằng việc tiếp nhận bản vẽ và thống nhất quy cách mối hàn, trình tự lắp ráp và yêu cầu hoàn thiện bề mặt.",
        "Chất lượng mối hàn và kích thước sau lắp ráp được kiểm tra theo yêu cầu kỹ thuật đã thống nhất, giúp sản phẩm đáp ứng đúng tiến độ bàn giao của công trình.",
      ],
      scope: [
        {
          title: "Tiếp nhận bản vẽ & thống nhất quy cách hàn",
          body: "Đối chiếu bản vẽ kỹ thuật, thống nhất quy cách mối hàn và trình tự lắp ráp cho từng cụm cấu kiện.",
        },
        {
          title: "Hàn liên kết theo bản vẽ",
          body: "Hàn liên kết các chi tiết, cụm cấu kiện thép theo quy cách mối hàn ghi trên bản vẽ.",
        },
        {
          title: "Lắp ráp & kiểm tra kích thước",
          body: "Lắp ráp cấu kiện theo trình tự thiết kế và kiểm tra kích thước sau từng công đoạn.",
        },
        {
          title: "Hoàn thiện & bàn giao",
          body: "Làm sạch bề mặt, hoàn thiện sản phẩm và bàn giao theo tiến độ đã thống nhất.",
        },
      ],
      systemTitle: "Những hạng mục nằm trong phạm vi hàn và lắp ráp",
      kit: [
        {
          label: "Hàn liên kết",
          body: "Hàn liên kết cấu kiện thép theo quy cách mối hàn ghi trên bản vẽ kỹ thuật",
        },
        {
          label: "Lắp ráp",
          body: "Lắp ráp các chi tiết thành cụm cấu kiện theo trình tự thiết kế",
        },
        {
          label: "Hoàn thiện bề mặt",
          body: "Làm sạch, mài nhẵn và hoàn thiện bề mặt theo yêu cầu của từng đơn hàng",
        },
        {
          label: "Kiểm tra chất lượng",
          body: "Kiểm tra mối hàn, kích thước và tình trạng hoàn thiện trước khi bàn giao",
        },
      ],
      diagram: {
        src: "/imagery/service-welding.svg",
        width: 480,
        height: 400,
        alt: "Sơ đồ mối hàn liên kết và tia lửa hàn trên cấu kiện thép",
        caption:
          "Sơ đồ mối hàn liên kết và công đoạn hoàn thiện cấu kiện thép.",
      },
      timeline: [
        {
          stage: "Giai đoạn 1",
          caption: "Tiếp nhận",
          title: "Tiếp nhận bản vẽ & chốt quy cách hàn",
          body: "Tiếp nhận bản vẽ kỹ thuật, thống nhất quy cách mối hàn và yêu cầu hoàn thiện bề mặt.",
        },
        {
          stage: "Giai đoạn 2",
          caption: "Chuẩn bị",
          title: "Chuẩn bị vật tư & dụng cụ hàn",
          body: "Kiểm tra vật liệu hàn, dụng cụ và bề mặt chi tiết trước khi vào từng công đoạn.",
        },
        {
          stage: "Giai đoạn 3",
          caption: "Thi công",
          title: "Hàn, lắp ráp & hoàn thiện",
          body: "Thực hiện hàn liên kết, lắp ráp và hoàn thiện cấu kiện theo yêu cầu kỹ thuật.",
        },
        {
          stage: "Giai đoạn 4",
          caption: "Bàn giao",
          title: "Kiểm tra chất lượng & bàn giao",
          body: "Kiểm tra mối hàn, kích thước và tình trạng hoàn thiện, bàn giao sản phẩm theo tiến độ.",
        },
      ],
    },
  },
];

/** Minh hoạ phẳng 200×150 — vẽ theo luật imagery của design system, mỗi ảnh một điểm lime. */
export const products: Product[] = [
  {
    src: "/imagery/product-beam-column.svg",
    width: 200,
    height: 150,
    alt: "Minh hoạ Khung nhà xưởng",
    category: "Khung nhà xưởng",
    name: "Khung thép nhà xưởng công nghiệp",
  },
  {
    src: "/imagery/product-steel-plate.svg",
    width: 200,
    height: 150,
    alt: "Minh hoạ Cấu kiện thép tấm",
    category: "Cấu kiện thép tấm",
    name: "Chi tiết thép tấm gia công theo bản vẽ",
  },
  {
    src: "/imagery/product-stairs-platform.svg",
    width: 200,
    height: 150,
    alt: "Minh hoạ Sàn & cầu thang thép",
    category: "Sàn & cầu thang thép",
    name: "Sàn thao tác & cầu thang thép nhà xưởng",
  },
  {
    src: "/imagery/product-support-bracket.svg",
    width: 200,
    height: 150,
    alt: "Minh hoạ Giá đỡ & kết cấu phụ trợ",
    category: "Giá đỡ & kết cấu phụ trợ",
    name: "Giá đỡ thiết bị & cấu kiện phụ trợ",
  },
];

/** Toàn bộ dịch vụ — mock, sẽ thay bằng GraphQL. */
export function getServices(): Service[] {
  return services;
}

/** Một dịch vụ theo slug, `undefined` nếu không có. */
export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

/** Các dịch vụ khác — dùng cho mục "Các nhóm dịch vụ khác" ở trang chi tiết. */
export function getOtherServices(service: Service): Service[] {
  return services.filter((item) => item.slug !== service.slug);
}

/** Toàn bộ sản phẩm — mock. */
export function getProducts(): Product[] {
  return products;
}

/**
 * Hạng mục cùng nhóm dịch vụ.
 *
 * Chưa nối được với Strapi: slug dịch vụ ở đây (`ket-cau-thep`, `han-lap-rap`…)
 * không trùng giá trị của `project_category` bên BE ("Sản xuất kết cấu thép"…),
 * nên không có khoá nào để lọc. Trả rỗng — `ServiceDetailProjects` tự ẩn mục
 * khi không có dự án, thay vì hiển thị dự án không liên quan.
 */
export function getServiceProjects(): Project[] {
  return [];
}

/** Số thứ tự canonical của dịch vụ trong lưới 01–04. */
export function getServiceNumber(service: Service): string {
  return String(
    services.findIndex((item) => item.slug === service.slug) + 1,
  ).padStart(2, "0");
}
