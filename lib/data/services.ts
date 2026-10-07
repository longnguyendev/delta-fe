/**
 * Dữ liệu dịch vụ tạm thời (mockup).
 *
 * Cùng khuôn với `lib/data/projects.ts`: nội dung sẽ được thay bằng GraphQL/Strapi
 * (fragment `Service` hiện chưa có field `slug` — bổ sung ở backend rồi `pnpm codegen`).
 * Khi đó chỉ cần thay `getServices` / `getService` bằng fetcher thật, phần component
 * giữ nguyên vì đã đọc qua type `Service` bên dưới.
 *
 * Slug dịch vụ trùng đúng `projectCategories`, nhờ đó hạng mục cùng nhóm được lọc
 * trực tiếp từ `projects` mà không cần bảng ánh xạ riêng.
 *
 * Nội dung entity chỉ có tiếng Việt (theo yêu cầu); phần chrome của giao diện
 * (nhãn, nút, tiêu đề mục) nằm trong dictionary `lib/i18n`.
 */

import {
  projectCategories,
  projects,
  type Project,
  type ProjectCategory,
  type ProjectImage,
} from "./projects";

/** Bốn slug dịch vụ — giữ đúng thứ tự `projectCategories` để lưới đánh số 01–04 khớp thiết kế. */
export const serviceCategories = projectCategories;
export type ServiceCategory = ProjectCategory;
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
  /** Chú thích nhỏ dưới nhãn — "Khảo sát", "Bàn giao"… */
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
  /** Tiêu đề mục thiết bị — "Những hạng mục nằm trong gói …" (entity VI). */
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
  /** Nhãn danh mục — "Thiết bị bơm". */
  category: string;
  name: string;
};

export const services: Service[] = [
  {
    slug: "tu-van",
    name: "Tư vấn giải pháp kỹ thuật",
    description:
      "Khảo sát hiện trạng, đề xuất giải pháp tối ưu về kỹ thuật và chi phí đầu tư cho từng dự án.",
    scope: [
      "Khảo sát hiện trạng hệ thống tại nhà máy",
      "Đối chiếu sơ đồ công nghệ và thông số vận hành",
      "Đề xuất phương án theo tiêu chí kỹ thuật và chi phí",
      "Lập hồ sơ kỹ thuật phục vụ đấu thầu và nghiệm thu",
    ],
    detail: {
      meta: {
        group: "Tư vấn giải pháp kỹ thuật",
        scope: "Nhà máy & công trình công nghiệp",
        equipment: "Theo phương án đề xuất",
        acceptance: "Theo tiêu chuẩn kỹ thuật",
        handover: "Báo cáo & hồ sơ kỹ thuật",
      },
      contextTitle: "Một đầu mối từ khảo sát đến hồ sơ kỹ thuật",
      context: [
        "Delta Energy nhận khảo sát và tư vấn giải pháp cho các hệ thống kỹ thuật trong nhà máy: từ cụm bơm, đường ống công nghệ, van và thiết bị đo đến tủ điện điều khiển. Công việc bắt đầu bằng việc đo đạc hiện trạng và làm rõ yêu cầu vận hành của chủ đầu tư.",
        "Toàn bộ quá trình khảo sát, phân tích và lập hồ sơ kỹ thuật do một đội kỹ thuật chịu trách nhiệm xuyên suốt, giúp chủ đầu tư có đủ cơ sở để so sánh phương án và ra quyết định đầu tư.",
      ],
      scope: [
        {
          title: "Khảo sát hiện trạng hệ thống",
          body: "Đo đạc mặt bằng, đối chiếu sơ đồ công nghệ và ghi nhận thông số vận hành của từng cụm thiết bị.",
        },
        {
          title: "Phân tích nhu cầu vận hành mục tiêu",
          body: "Làm rõ yêu cầu vận hành sau đầu tư để xác định các điểm nghẽn cần xử lý trước.",
        },
        {
          title: "Đề xuất phương án theo từng hạng mục",
          body: "Đề xuất giải pháp kỹ thuật cho từng hạng mục, kèm ước tính chi phí đầu tư và thứ tự ưu tiên.",
        },
        {
          title: "Lập hồ sơ kỹ thuật & báo cáo tư vấn",
          body: "Hoàn thiện hồ sơ kỹ thuật phục vụ đấu thầu, nghiệm thu và bàn giao báo cáo khảo sát cho chủ đầu tư.",
        },
      ],
      systemTitle: "Những hạng mục nằm trong gói tư vấn",
      kit: [
        {
          label: "Hồ sơ khảo sát",
          body: "Biên bản đo đạc hiện trạng, số liệu vận hành và ảnh chụp tại từng cụm thiết bị",
        },
        {
          label: "Phương án kỹ thuật",
          body: "Đề xuất giải pháp cho từng hạng mục, kèm ước tính chi phí đầu tư và thứ tự ưu tiên",
        },
        {
          label: "Hồ sơ đấu thầu",
          body: "Thuyết minh kỹ thuật, bản vẽ sơ bộ và bảng khối lượng phục vụ mời thầu",
        },
        {
          label: "Hồ sơ nghiệm thu",
          body: "Tiêu chuẩn kỹ thuật, checklist nghiệm thu và biên bản bàn giao",
        },
      ],
      diagram: {
        src: "/imagery/about-factory-blocks.svg",
        width: 400,
        height: 320,
        alt: "Sơ đồ khối nhà máy và các cụm thiết bị trong phạm vi khảo sát",
        caption: "Sơ đồ khối nhà máy và phạm vi khảo sát hiện trạng.",
      },
      timeline: [
        {
          stage: "Giai đoạn 1",
          caption: "Khảo sát",
          title: "Khảo sát hiện trạng & ghi nhận số liệu",
          body: "Đo đạc mặt bằng, đối chiếu sơ đồ công nghệ và ghi nhận thông số vận hành của từng cụm thiết bị.",
        },
        {
          stage: "Giai đoạn 2",
          caption: "Phân tích",
          title: "Phân tích nhu cầu vận hành mục tiêu",
          body: "Đối chiếu hiện trạng với yêu cầu vận hành để xác định các điểm nghẽn cần xử lý trước.",
        },
        {
          stage: "Giai đoạn 3",
          caption: "Đề xuất",
          title: "Đề xuất phương án & ước tính chi phí",
          body: "Lập phương án kỹ thuật cho từng hạng mục kèm ước tính chi phí đầu tư tương ứng.",
        },
        {
          stage: "Giai đoạn 4",
          caption: "Bàn giao",
          title: "Bàn giao hồ sơ kỹ thuật & tư vấn",
          body: "Bàn giao báo cáo khảo sát, so sánh phương án và khuyến nghị lộ trình đầu tư theo giai đoạn.",
        },
      ],
    },
  },

  {
    slug: "thiet-bi",
    name: "Thiết bị & vật tư kỹ thuật",
    description:
      "Cung cấp thiết bị, phụ tùng và vật tư kỹ thuật chính hãng, đúng thông số cho từng hệ thống.",
    scope: [
      "Thiết bị bơm, van điều khiển, thiết bị đo lường",
      "Tủ điện điều khiển và phụ kiện điện công nghiệp",
      "Phụ tùng thay thế theo đúng chủng loại thiết bị",
      "Chứng từ và tài liệu kỹ thuật kèm theo",
    ],
    detail: {
      meta: {
        group: "Thiết bị & vật tư",
        scope: "Nhà máy & công trình công nghiệp",
        equipment: "Chính hãng, đúng thông số",
        acceptance: "Theo hồ sơ kỹ thuật",
        handover: "Chứng từ & tài liệu kỹ thuật",
      },
      contextTitle: "Một đầu mối từ rà soát đến giao nhận thiết bị",
      context: [
        "Delta Energy cung cấp thiết bị, phụ tùng và vật tư kỹ thuật cho các hệ thống công nghiệp: máy bơm, van điều khiển, thiết bị đo lường, tủ điện và phụ kiện. Danh mục được lập theo từng vị trí lắp đặt thay vì theo mã hàng chung.",
        "Toàn bộ thiết bị do Delta Energy cung cấp có nguồn gốc rõ ràng, kèm chứng từ xuất xứ và tài liệu kỹ thuật. Quá trình rà soát, đối chiếu thông số và giao nhận do một đội kỹ thuật chịu trách nhiệm xuyên suốt.",
      ],
      scope: [
        {
          title: "Rà soát danh mục thiết bị cần cung cấp",
          body: "Đối chiếu hồ sơ kỹ thuật và tình trạng thực tế để xác định danh mục thiết bị, vật tư cần thay thế.",
        },
        {
          title: "Đối chiếu thông số từng vị trí lắp đặt",
          body: "Kiểm tra dải đo, cấp chịu áp và kiểu kết nối của từng vị trí trước khi chốt chủng loại.",
        },
        {
          title: "Cung cấp thiết bị chính hãng",
          body: "Cung cấp thiết bị, phụ tùng và vật tư chính hãng, đúng thông số, kèm chứng từ xuất xứ.",
        },
        {
          title: "Giao nhận & hướng dẫn lắp đặt",
          body: "Giao nhận theo tiến độ nhà máy yêu cầu, kèm tài liệu kỹ thuật và hướng dẫn lắp đặt, hiệu chỉnh.",
        },
      ],
      systemTitle: "Những hạng mục nằm trong gói cung cấp",
      kit: [
        {
          label: "Thiết bị bơm",
          body: "Máy bơm công nghiệp, cụm bơm và phụ kiện đi kèm theo thông số hệ thống",
        },
        {
          label: "Van điều khiển",
          body: "Van điều khiển khí nén, van điện và phụ kiện theo cấp chịu áp của từng vị trí",
        },
        {
          label: "Thiết bị đo lường",
          body: "Đồng hồ đo áp suất, lưu lượng và thiết bị đo tại các vị trí vận hành",
        },
        {
          label: "Điện & điều khiển",
          body: "Tủ điện điều khiển, thiết bị đóng cắt và phụ kiện điện công nghiệp",
        },
      ],
      diagram: {
        src: "/imagery/news-valve-line.svg",
        width: 300,
        height: 190,
        alt: "Sơ đồ van điều khiển và đồng hồ đo lường trong danh mục cung cấp",
        caption: "Sơ đồ vị trí van điều khiển và thiết bị đo trong danh mục cung cấp.",
      },
      timeline: [
        {
          stage: "Giai đoạn 1",
          caption: "Rà soát",
          title: "Rà soát danh mục thiết bị cần cung cấp",
          body: "Đối chiếu hồ sơ kỹ thuật và tình trạng thực tế để xác định danh mục thiết bị, vật tư.",
        },
        {
          stage: "Giai đoạn 2",
          caption: "Chốt thông số",
          title: "Đối chiếu thông số từng vị trí lắp đặt",
          body: "Xác nhận dải đo, cấp chịu áp và kiểu kết nối trước khi chốt chủng loại thay thế.",
        },
        {
          stage: "Giai đoạn 3",
          caption: "Cung cấp",
          title: "Cung cấp thiết bị theo tiến độ",
          body: "Giao thiết bị chính hãng theo tiến độ nhà máy yêu cầu, kèm chứng từ và tài liệu kỹ thuật.",
        },
        {
          stage: "Giai đoạn 4",
          caption: "Bàn giao",
          title: "Giao nhận & hướng dẫn lắp đặt",
          body: "Giao nhận đầy đủ, hướng dẫn lắp đặt và hiệu chỉnh cho đội bảo trì của nhà máy.",
        },
      ],
    },
  },

  {
    slug: "lap-dat",
    name: "Lắp đặt & vận hành hệ thống",
    description:
      "Thi công lắp đặt, chạy thử và bàn giao hệ thống theo đúng tiêu chuẩn kỹ thuật đề ra.",
    scope: [
      "Thi công lắp đặt theo bản vẽ đã chốt",
      "Chạy thử có tải và hiệu chỉnh thông số",
      "Nghiệm thu theo tiêu chuẩn kỹ thuật",
      "Bàn giao hồ sơ và hướng dẫn vận hành",
    ],
    detail: {
      meta: {
        group: "Lắp đặt & vận hành",
        scope: "Nhà máy & công trình công nghiệp",
        equipment: "Chính hãng, đúng thông số",
        acceptance: "Theo tiêu chuẩn kỹ thuật",
        handover: "Hồ sơ & hướng dẫn vận hành",
      },
      contextTitle: "Một đầu mối từ thi công đến bàn giao",
      context: [
        "Delta Energy nhận thi công lắp đặt trọn gói cho các hệ thống kỹ thuật trong nhà máy: từ cụm bơm, đường ống công nghệ, van và thiết bị đo đến tủ điện điều khiển. Công việc bắt đầu từ khảo sát hiện trạng và chốt phương án với chủ đầu tư.",
        "Toàn bộ quá trình thi công, chạy thử và nghiệm thu do một đội kỹ thuật chịu trách nhiệm xuyên suốt, hạn chế việc phải phối hợp nhiều nhà thầu và rút ngắn thời gian đưa hệ thống vào vận hành.",
      ],
      scope: [
        {
          title: "Thi công theo bản vẽ đã chốt",
          body: "Lắp đặt thiết bị, đường ống, tủ điện và hệ thống điều khiển theo bản vẽ kỹ thuật đã thống nhất với chủ đầu tư.",
        },
        {
          title: "Chạy thử có tải & hiệu chỉnh",
          body: "Chạy thử hệ thống có tải, hiệu chỉnh thông số vận hành và kiểm tra từng cụm thiết bị trước khi nghiệm thu.",
        },
        {
          title: "Nghiệm thu theo tiêu chuẩn kỹ thuật",
          body: "Nghiệm thu theo đúng tiêu chuẩn kỹ thuật đề ra, có biên bản và hồ sơ hoàn công đầy đủ.",
        },
        {
          title: "Bàn giao & hướng dẫn vận hành",
          body: "Bàn giao hồ sơ, tài liệu thiết bị và hướng dẫn vận hành — bảo trì cho đội ngũ nhà máy.",
        },
      ],
      systemTitle: "Những hạng mục nằm trong gói lắp đặt",
      kit: [
        {
          label: "Bơm & đường ống",
          body: "Cụm bơm công nghiệp, đường ống công nghệ và phụ kiện theo thông số hệ thống",
        },
        {
          label: "Van & thiết bị đo",
          body: "Van điều khiển, đồng hồ đo áp suất và thiết bị đo lường tại các vị trí vận hành",
        },
        {
          label: "Điện & điều khiển",
          body: "Tủ điện điều khiển, thiết bị đóng cắt và hệ thống giám sát vận hành",
        },
        {
          label: "Kết cấu đỡ & phụ kiện",
          body: "Giá đỡ, bệ móng thiết bị và phụ kiện lắp đặt đi kèm",
        },
      ],
      diagram: {
        src: "/imagery/hero-system-diagram.svg",
        width: 480,
        height: 400,
        alt: "Sơ đồ hệ thống kỹ thuật: cụm bơm, đường ống, van và đồng hồ đo áp suất",
        caption:
          "Sơ đồ nguyên lý hệ thống Delta Energy thi công, chạy thử và bàn giao cho nhà máy.",
      },
      timeline: [
        {
          stage: "Giai đoạn 1",
          caption: "Khảo sát",
          title: "Khảo sát hiện trạng & chốt phương án",
          body: "Đo đạc mặt bằng, đối chiếu sơ đồ công nghệ và thống nhất phương án lắp đặt với chủ đầu tư.",
        },
        {
          stage: "Giai đoạn 2",
          caption: "Thiết bị",
          title: "Cung cấp thiết bị & vật tư",
          body: "Cung cấp thiết bị chính hãng, đúng thông số theo hồ sơ kỹ thuật của từng hệ thống.",
        },
        {
          stage: "Giai đoạn 3",
          caption: "Lắp đặt",
          title: "Thi công, chạy thử & hiệu chỉnh",
          body: "Lắp đặt theo bản vẽ đã chốt, chạy thử có tải và hiệu chỉnh thông số vận hành.",
        },
        {
          stage: "Giai đoạn 4",
          caption: "Bàn giao",
          title: "Nghiệm thu & bàn giao hệ thống",
          body: "Nghiệm thu theo tiêu chuẩn kỹ thuật đề ra, bàn giao hồ sơ và hướng dẫn vận hành.",
        },
      ],
    },
  },

  {
    slug: "bao-tri",
    name: "Bảo trì & sửa chữa hệ thống",
    description:
      "Bảo trì định kỳ, xử lý sự cố và sửa chữa thiết bị công nghiệp, giảm thiểu thời gian ngừng máy.",
    scope: [
      "Bảo trì định kỳ theo kế hoạch bảo dưỡng",
      "Hiệu chuẩn thiết bị đo lường và van điều khiển",
      "Xử lý sự cố và sửa chữa thiết bị tại nhà máy",
      "Theo dõi tình trạng vận hành sau bảo trì",
    ],
    detail: {
      meta: {
        group: "Bảo trì & sửa chữa",
        scope: "Nhà máy & công trình công nghiệp",
        equipment: "Chính hãng, đúng chủng loại",
        acceptance: "Theo tiêu chuẩn kỹ thuật",
        handover: "Biên bản & đề xuất kỳ tới",
      },
      contextTitle: "Một đầu mối từ bảo dưỡng đến theo dõi vận hành",
      context: [
        "Delta Energy thực hiện bảo trì định kỳ, hiệu chuẩn và sửa chữa cho các hệ thống kỹ thuật trong nhà máy: cụm bơm, đường ống, van điều khiển, thiết bị đo và tủ điện. Lịch bảo trì được xây dựng theo khuyến nghị nhà sản xuất kết hợp điều kiện vận hành thực tế.",
        "Công việc được bố trí theo từng cụm thiết bị trong các khung thời gian nhà máy cho phép, nhờ đó hệ thống vẫn vận hành theo đúng kế hoạch. Sau mỗi kỳ bảo trì, tình trạng thiết bị được ghi nhận làm cơ sở cho kế hoạch thay thế tiếp theo.",
      ],
      scope: [
        {
          title: "Lập kế hoạch bảo trì theo cụm",
          body: "Xây dựng lịch bảo trì theo khuyến nghị nhà sản xuất và điều kiện vận hành thực tế của từng cụm thiết bị.",
        },
        {
          title: "Bảo dưỡng & hiệu chuẩn định kỳ",
          body: "Bảo dưỡng van điều khiển, hiệu chuẩn đồng hồ đo lường và đối chiếu sai số với tiêu chuẩn kỹ thuật.",
        },
        {
          title: "Xử lý sự cố & sửa chữa tại nhà máy",
          body: "Tiếp nhận sự cố, xử lý và sửa chữa thiết bị tại chỗ bằng phụ tùng đúng chủng loại theo hồ sơ thiết bị.",
        },
        {
          title: "Báo cáo tình trạng & theo dõi sau bảo trì",
          body: "Bàn giao biên bản bảo trì, ghi nhận tình trạng thiết bị và theo dõi vận hành sau mỗi kỳ bảo dưỡng.",
        },
      ],
      systemTitle: "Những hạng mục nằm trong gói bảo trì",
      kit: [
        {
          label: "Bơm & đường ống",
          body: "Kiểm tra, bảo dưỡng cụm bơm, đường ống công nghệ và phụ kiện theo kế hoạch",
        },
        {
          label: "Van & thiết bị đo",
          body: "Bảo dưỡng van điều khiển, hiệu chuẩn đồng hồ đo và thiết bị đo lường tại vị trí vận hành",
        },
        {
          label: "Điện & điều khiển",
          body: "Kiểm tra tủ điện điều khiển, thiết bị đóng cắt và hệ thống giám sát vận hành",
        },
        {
          label: "Kết cấu đỡ & phụ kiện",
          body: "Kiểm tra giá đỡ, bệ móng thiết bị và phụ kiện lắp đặt đi kèm",
        },
      ],
      diagram: {
        src: "/imagery/project-maintenance-rig.svg",
        width: 300,
        height: 190,
        alt: "Sơ đồ cụm van và thiết bị đo thuộc phạm vi bảo trì định kỳ",
        caption: "Sơ đồ cụm van và thiết bị đo thuộc phạm vi bảo trì định kỳ.",
      },
      timeline: [
        {
          stage: "Giai đoạn 1",
          caption: "Khảo sát",
          title: "Thống kê thiết bị & lịch bảo dưỡng",
          body: "Kiểm tra danh mục thiết bị và đối chiếu lịch bảo dưỡng hiện hành của nhà máy.",
        },
        {
          stage: "Giai đoạn 2",
          caption: "Lập kế hoạch",
          title: "Chốt kế hoạch bảo trì theo cụm",
          body: "Thống nhất thứ tự và khung thời gian thực hiện cho từng cụm để không ảnh hưởng vận hành.",
        },
        {
          stage: "Giai đoạn 3",
          caption: "Thực hiện",
          title: "Bảo dưỡng, hiệu chuẩn theo kế hoạch",
          body: "Thực hiện bảo dưỡng, hiệu chuẩn và ghi nhận kết quả của từng hạng mục.",
        },
        {
          stage: "Giai đoạn 4",
          caption: "Bàn giao",
          title: "Bàn giao biên bản & đề xuất kỳ tới",
          body: "Bàn giao biên bản bảo trì, ghi nhận tình trạng thiết bị và đề xuất hạng mục cần thay thế.",
        },
      ],
    },
  },
];

/** Minh hoạ phẳng 200×150 — vẽ theo luật imagery của design system, mỗi ảnh một điểm lime. */
export const products: Product[] = [
  {
    src: "/imagery/product-pump.svg",
    width: 200,
    height: 150,
    alt: "Minh hoạ Thiết bị bơm",
    category: "Thiết bị bơm",
    name: "Máy bơm công nghiệp DE-P200",
  },
  {
    src: "/imagery/product-valve.svg",
    width: 200,
    height: 150,
    alt: "Minh hoạ Van điều khiển",
    category: "Van điều khiển",
    name: "Van điều khiển khí nén VC-40",
  },
  {
    src: "/imagery/product-instrument.svg",
    width: 200,
    height: 150,
    alt: "Minh hoạ Thiết bị đo lường",
    category: "Thiết bị đo lường",
    name: "Đồng hồ đo áp suất DE-M10",
  },
  {
    src: "/imagery/product-control.svg",
    width: 200,
    height: 150,
    alt: "Minh hoạ Điện & điều khiển",
    category: "Điện & điều khiển",
    name: "Tủ điện điều khiển DE-C05",
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
 * Hạng mục cùng nhóm dịch vụ — lọc từ `projects` theo slug trùng `projectCategories`.
 * Nhóm nào chưa có đủ 2 dự án trong dữ liệu mock thì trả về ít hơn.
 */
export function getServiceProjects(service: Service): Project[] {
  return projects.filter((project) => project.category === service.slug).slice(0, 2);
}

/** Số thứ tự canonical của dịch vụ trong lưới 01–04. */
export function getServiceNumber(service: Service): string {
  return String(
    services.findIndex((item) => item.slug === service.slug) + 1,
  ).padStart(2, "0");
}
