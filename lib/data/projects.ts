/**
 * Dữ liệu dự án tạm thời (mockup).
 *
 * Nội dung ở đây sẽ được thay bằng GraphQL/Strapi — các hook đã codegen sẵn
 * trong `generates.ts` (`useProjectsQuery`, `useProjectsDetailQuery`). Khi đó
 * chỉ cần thay `getProjects` / `getProject` bằng fetcher thật, phần component
 * giữ nguyên vì đã đọc qua type `Project` bên dưới.
 *
 * Nội dung entity chỉ có tiếng Việt (theo yêu cầu); phần chrome của giao diện
 * (nhãn, nút, tiêu đề mục) nằm trong dictionary `lib/i18n`.
 */

export const projectCategories = [
  "tu-van",
  "thiet-bi",
  "lap-dat",
  "bao-tri",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type ProjectImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type ProjectScopeItem = { title: string; body: string };

export type ProjectTimelineItem = {
  /** Nhãn giai đoạn — "Giai đoạn 1" hoặc ngày bàn giao. */
  stage: string;
  /** Chú thích nhỏ dưới nhãn — "Khảo sát", "Bàn giao"… */
  caption: string;
  title: string;
  body: string;
  /** Mốc đã hoàn tất — gạch lime thay cho số giai đoạn. */
  done?: boolean;
};

export type ProjectOutcome = { title: string; body: string };

export type ProjectMeta = {
  scope: string;
  location: string;
  sector: string;
  status: string;
  handover: string;
};

export type ProjectDetail = {
  meta: ProjectMeta;
  /** Bối cảnh — đoạn văn xuôi ở cột phải. */
  context: string[];
  scope: ProjectScopeItem[];
  solution: string[];
  /** Sơ đồ nguyên lý kèm chú thích. */
  diagram: ProjectImage & { caption: string };
  timeline: ProjectTimelineItem[];
  outcomes: ProjectOutcome[];
  /** Slug của 2 hạng mục liên quan. */
  related: [string, string];
};

export type Project = {
  slug: string;
  title: string;
  /** Nhãn nhỏ phía trên tiêu đề — "Nhà máy sản xuất — KCN Bình Dương". */
  tag: string;
  description: string;
  image: ProjectImage;
  category: ProjectCategory;
  detail: ProjectDetail;
};

export const projects: Project[] = [
  {
    slug: "lap-dat-he-thong-bom-duong-ong-binh-duong",
    title: "Lắp đặt hệ thống bơm & đường ống công nghệ",
    tag: "Nhà máy sản xuất — KCN Bình Dương",
    description:
      "Thiết kế và lắp đặt hệ thống bơm, đường ống cho dây chuyền sản xuất, đảm bảo vận hành liên tục 24/7.",
    category: "lap-dat",
    image: {
      src: "/imagery/project-pump-pipeline.svg",
      width: 300,
      height: 190,
      alt: "Sơ đồ bơm và đường ống công nghệ",
    },
    detail: {
      meta: {
        scope: "Lắp đặt & vận hành hệ thống",
        location: "Khu công nghiệp Bình Dương",
        sector: "Nhà máy sản xuất",
        status: "Đã bàn giao",
        handover: "12/09/2026",
      },
      context: [
        "Nhà máy sản xuất tại Khu công nghiệp Bình Dương cần hoàn thiện hệ thống bơm và đường ống công nghệ phục vụ dây chuyền sản xuất. Hạng mục nằm trong giai đoạn mở rộng năng lực sản xuất, yêu cầu hệ thống chạy ổn định và hạn chế tối đa thời gian dừng dây chuyền để bảo trì.",
        "Delta Energy tham gia từ bước khảo sát hiện trạng: đối chiếu sơ đồ công nghệ, lưu lượng và thông số vận hành của từng cụm thiết bị, từ đó đề xuất cấu hình bơm, đường ống và phụ kiện phù hợp với mặt bằng hiện hữu.",
      ],
      scope: [
        {
          title: "Khảo sát hiện trạng & tư vấn giải pháp",
          body: "Đo đạc hiện trạng, đối chiếu sơ đồ công nghệ và đề xuất giải pháp tối ưu về kỹ thuật và chi phí đầu tư.",
        },
        {
          title: "Thiết kế hệ thống bơm & đường ống",
          body: "Lựa chọn cấu hình bơm, đường kính và vật liệu đường ống, bố trí van và thiết bị đo theo thông số vận hành.",
        },
        {
          title: "Lắp đặt, chạy thử & hiệu chỉnh",
          body: "Thi công lắp đặt, chạy thử có tải và hiệu chỉnh thông số hệ thống theo đúng tiêu chuẩn kỹ thuật đề ra.",
        },
        {
          title: "Bàn giao, hướng dẫn & bảo trì định kỳ",
          body: "Bàn giao hồ sơ nghiệm thu, hướng dẫn vận hành và đưa hệ thống vào kế hoạch bảo trì định kỳ.",
        },
      ],
      solution: [
        "Cụm bơm được bố trí theo nguyên tắc dự phòng, đường ống công nghệ đi nổi trên giá đỡ để thuận tiện kiểm tra và bảo trì. Van điều khiển và đồng hồ đo áp suất được đặt tại các vị trí quan sát trực tiếp từ lối vận hành.",
        "Toàn bộ thiết bị do Delta Energy cung cấp là thiết bị chính hãng, đúng thông số theo hồ sơ kỹ thuật của từng hệ thống, kèm chứng từ và tài liệu kỹ thuật khi bàn giao.",
      ],
      diagram: {
        src: "/imagery/hero-system-diagram.svg",
        width: 480,
        height: 400,
        alt: "Sơ đồ hệ thống kỹ thuật: cụm bơm, đường ống, đồng hồ đo áp suất và các khối thiết bị nhà máy",
        caption:
          "Sơ đồ nguyên lý hệ thống bơm & đường ống công nghệ bàn giao cho nhà máy.",
      },
      timeline: [
        {
          stage: "Giai đoạn 1",
          caption: "Khảo sát",
          title: "Khảo sát hiện trạng tại nhà máy",
          body: "Đo đạc mặt bằng, đối chiếu sơ đồ công nghệ và xác nhận thông số vận hành của từng cụm thiết bị.",
        },
        {
          stage: "Giai đoạn 2",
          caption: "Thiết kế & cung cấp",
          title: "Chốt phương án và cung cấp thiết bị",
          body: "Thống nhất cấu hình bơm, đường ống, van và thiết bị đo; cung cấp thiết bị chính hãng đúng thông số.",
        },
        {
          stage: "Giai đoạn 3",
          caption: "Lắp đặt",
          title: "Thi công lắp đặt và chạy thử",
          body: "Lắp đặt theo bản vẽ đã chốt, chạy thử có tải và hiệu chỉnh thông số hệ thống.",
        },
        {
          stage: "12/09/2026",
          caption: "Bàn giao",
          title: "Nghiệm thu và bàn giao hệ thống",
          body: "Nghiệm thu theo tiêu chuẩn kỹ thuật đề ra, bàn giao hồ sơ và hướng dẫn vận hành, đưa vào kế hoạch bảo trì định kỳ.",
          done: true,
        },
      ],
      outcomes: [
        {
          title: "Đúng tiêu chuẩn kỹ thuật",
          body: "Hệ thống bơm và đường ống được thi công, chạy thử và nghiệm thu theo đúng tiêu chuẩn kỹ thuật đề ra.",
        },
        {
          title: "Vận hành liên tục",
          body: "Dây chuyền sản xuất vận hành liên tục, giảm thiểu thời gian ngừng máy nhờ nguyên tắc bố trí dự phòng.",
        },
        {
          title: "Hồ sơ đầy đủ",
          body: "Hồ sơ nghiệm thu, tài liệu thiết bị và hướng dẫn vận hành — bảo trì được bàn giao đầy đủ cho nhà máy.",
        },
      ],
      related: [
        "nang-cap-tu-dien-he-thong-dieu-khien-long-an",
        "bao-tri-dinh-ky-van-thiet-bi-do-mien-trung",
      ],
    },
  },

  {
    slug: "nang-cap-tu-dien-he-thong-dieu-khien-long-an",
    title: "Nâng cấp tủ điện & hệ thống điều khiển",
    tag: "Nhà máy chế biến — KCN Long An",
    description:
      "Cải tạo hệ thống điện điều khiển, tích hợp giám sát vận hành theo thời gian thực cho toàn nhà máy.",
    category: "lap-dat",
    image: {
      src: "/imagery/project-electrical-upgrade.svg",
      width: 300,
      height: 190,
      alt: "Sơ đồ tủ điện và hệ thống điều khiển",
    },
    detail: {
      meta: {
        scope: "Lắp đặt & vận hành hệ thống",
        location: "Khu công nghiệp Long An",
        sector: "Nhà máy chế biến",
        status: "Đã bàn giao",
        handover: "28/07/2026",
      },
      context: [
        "Hệ thống điện điều khiển của nhà máy đã vận hành nhiều năm, tủ điện xuống cấp và không còn đáp ứng nhu cầu giám sát vận hành. Nhà máy cần cải tạo nhưng không được dừng sản xuất quá lâu.",
        "Delta Energy khảo sát toàn bộ sơ đồ điện hiện hữu, đối chiếu với nhu cầu vận hành thực tế và chia hạng mục thành nhiều đợt thi công để dây chuyền vẫn chạy trong suốt quá trình cải tạo.",
      ],
      scope: [
        {
          title: "Khảo sát sơ đồ điện & hiện trạng tủ",
          body: "Kiểm tra hiện trạng tủ điện, đối chiếu bản vẽ hoàn công và xác định các hạng mục cần thay thế.",
        },
        {
          title: "Thiết kế phương án cải tạo theo đợt",
          body: "Phân chia thi công thành từng đợt để hạn chế thời gian dừng dây chuyền, bố trí phương án đấu nối tạm.",
        },
        {
          title: "Thay thế tủ điện & đấu nối điều khiển",
          body: "Thay thế tủ điều khiển, đấu nối lại hệ thống điện và tích hợp tín hiệu giám sát về trung tâm vận hành.",
        },
        {
          title: "Chạy thử, nghiệm thu & bàn giao",
          body: "Chạy thử từng đợt cải tạo, nghiệm thu theo tiêu chuẩn và bàn giao hồ sơ điện hoàn công cho nhà máy.",
        },
      ],
      solution: [
        "Tủ điện được thay thế theo từng khu vực thay vì thay toàn bộ cùng lúc, nhờ đó nhà máy giữ được sản xuất trong suốt thời gian thi công. Tín hiệu vận hành được đưa về màn hình giám sát đặt tại phòng điều khiển trung tâm.",
        "Các thiết bị điện và phụ kiện đều là hàng chính hãng, đúng thông số theo hồ sơ kỹ thuật, kèm chứng từ và tài liệu kỹ thuật khi bàn giao.",
      ],
      diagram: {
        src: "/imagery/project-electrical-upgrade.svg",
        width: 300,
        height: 190,
        alt: "Sơ đồ tủ điện và hệ thống điều khiển sau nâng cấp",
        caption: "Sơ đồ nguyên lý tủ điện điều khiển bàn giao cho nhà máy.",
      },
      timeline: [
        {
          stage: "Giai đoạn 1",
          caption: "Khảo sát",
          title: "Khảo sát hiện trạng điện điều khiển",
          body: "Đo đạc, kiểm tra tủ điện và đối chiếu bản vẽ hoàn công của hệ thống hiện hữu.",
        },
        {
          stage: "Giai đoạn 2",
          caption: "Thiết kế & cung cấp",
          title: "Chốt phương án cải tạo theo đợt",
          body: "Thống nhất lịch thi công từng đợt và cung cấp tủ điện, thiết bị điều khiển đúng thông số.",
        },
        {
          stage: "Giai đoạn 3",
          caption: "Thi công",
          title: "Thay thế tủ và đấu nối hệ thống",
          body: "Thi công theo từng đợt đã chốt, đấu nối lại mạch điều khiển và tích hợp tín hiệu giám sát.",
        },
        {
          stage: "28/07/2026",
          caption: "Bàn giao",
          title: "Chạy thử, nghiệm thu và bàn giao",
          body: "Chạy thử có tải, nghiệm thu theo tiêu chuẩn kỹ thuật và bàn giao hồ sơ điện hoàn công.",
          done: true,
        },
      ],
      outcomes: [
        {
          title: "Không dừng sản xuất",
          body: "Nhà máy duy trì sản xuất trong suốt quá trình cải tạo nhờ phương án thi công chia thành nhiều đợt.",
        },
        {
          title: "Giám sát theo thời gian thực",
          body: "Thông số vận hành được đưa về phòng điều khiển trung tâm, giúp phát hiện bất thường sớm hơn.",
        },
        {
          title: "Hồ sơ hoàn công đầy đủ",
          body: "Bản vẽ hoàn công, tài liệu thiết bị và hướng dẫn vận hành được bàn giao đầy đủ cho nhà máy.",
        },
      ],
      related: [
        "lap-dat-he-thong-bom-duong-ong-binh-duong",
        "chay-thu-nghiem-thu-ban-giao-mien-bac",
      ],
    },
  },

  {
    slug: "bao-tri-dinh-ky-van-thiet-bi-do-mien-trung",
    title: "Bảo trì định kỳ hệ thống van & thiết bị đo",
    tag: "Nhà máy nhiệt điện — Miền Trung",
    description:
      "Thực hiện bảo trì, hiệu chuẩn thiết bị đo lường và van điều khiển theo kế hoạch bảo dưỡng định kỳ.",
    category: "bao-tri",
    image: {
      src: "/imagery/project-maintenance-rig.svg",
      width: 300,
      height: 190,
      alt: "Sơ đồ van và thiết bị đo trong bảo trì định kỳ",
    },
    detail: {
      meta: {
        scope: "Bảo trì & sửa chữa hệ thống",
        location: "Nhà máy nhiệt điện — Miền Trung",
        sector: "Năng lượng",
        status: "Đã bàn giao",
        handover: "15/05/2026",
      },
      context: [
        "Nhà máy nhiệt điện cần duy trì độ chính xác của hệ thống van điều khiển và thiết bị đo lường theo kế hoạch bảo dưỡng định kỳ. Sai số đo lường ảnh hưởng trực tiếp đến hiệu suất vận hành của tổ máy.",
        "Delta Energy xây dựng lịch bảo trì theo khuyến nghị nhà sản xuất kết hợp điều kiện vận hành thực tế, bố trí thực hiện theo từng cụm để không ảnh hưởng tiến độ vận hành.",
      ],
      scope: [
        {
          title: "Lập kế hoạch bảo trì theo cụm",
          body: "Xây dựng lịch bảo trì theo khuyến nghị nhà sản xuất và điều kiện vận hành thực tế của từng cụm thiết bị.",
        },
        {
          title: "Kiểm tra, hiệu chuẩn thiết bị đo",
          body: "Kiểm tra và hiệu chuẩn đồng hồ đo lường, đối chiếu sai số với tiêu chuẩn kỹ thuật của nhà máy.",
        },
        {
          title: "Bảo dưỡng van điều khiển",
          body: "Vệ sinh, thay thế phụ tùng hao mòn và kiểm tra hành trình đóng — mở của van điều khiển.",
        },
        {
          title: "Báo cáo tình trạng & đề xuất thay thế",
          body: "Bàn giao biên bản bảo trì, ghi nhận tình trạng thiết bị và đề xuất hạng mục cần thay thế trong kỳ tới.",
        },
      ],
      solution: [
        "Công việc được chia theo từng cụm thiết bị và thực hiện trong các khung thời gian nhà máy cho phép, nhờ đó tổ máy vẫn vận hành theo đúng kế hoạch huy động.",
        "Phụ tùng thay thế là hàng chính hãng, đúng chủng loại theo hồ sơ thiết bị, kèm chứng từ và được ghi rõ trong biên bản bàn giao.",
      ],
      diagram: {
        src: "/imagery/project-maintenance-rig.svg",
        width: 300,
        height: 190,
        alt: "Sơ đồ van điều khiển và thiết bị đo trong kỳ bảo trì định kỳ",
        caption: "Sơ đồ cụm van và thiết bị đo thuộc phạm vi bảo trì định kỳ.",
      },
      timeline: [
        {
          stage: "Giai đoạn 1",
          caption: "Khảo sát",
          title: "Thống kê thiết bị và lịch bảo dưỡng",
          body: "Kiểm tra danh mục van, thiết bị đo và đối chiếu lịch bảo dưỡng hiện hành của nhà máy.",
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
          body: "Thực hiện bảo dưỡng van, hiệu chuẩn thiết bị đo và ghi nhận kết quả từng hạng mục.",
        },
        {
          stage: "15/05/2026",
          caption: "Bàn giao",
          title: "Bàn giao biên bản và đề xuất kỳ tới",
          body: "Bàn giao biên bản bảo trì, ghi nhận tình trạng thiết bị và đề xuất hạng mục cần thay thế.",
          done: true,
        },
      ],
      outcomes: [
        {
          title: "Độ chính xác được duy trì",
          body: "Thiết bị đo lường được hiệu chuẩn, đối chiếu sai số theo đúng tiêu chuẩn kỹ thuật của nhà máy.",
        },
        {
          title: "Không ảnh hưởng huy động",
          body: "Công việc thực hiện theo từng cụm, tổ máy vẫn vận hành theo đúng kế hoạch huy động.",
        },
        {
          title: "Có cơ sở cho kỳ sau",
          body: "Biên bản bảo trì ghi rõ tình trạng từng thiết bị, làm cơ sở lập kế hoạch thay thế cho kỳ tiếp theo.",
        },
      ],
      related: [
        "cung-cap-thiet-bi-do-luong-vat-tu-dong-nai",
        "nang-cap-tu-dien-he-thong-dieu-khien-long-an",
      ],
    },
  },

  {
    slug: "cung-cap-thiet-bi-do-luong-vat-tu-dong-nai",
    title: "Cung cấp thiết bị đo lường & vật tư thay thế",
    tag: "Nhà máy chế biến — KCN Đồng Nai",
    description:
      "Cung cấp đồng hồ đo, van điều khiển và vật tư kỹ thuật chính hãng, đúng thông số cho từng hệ thống.",
    category: "thiet-bi",
    image: {
      src: "/imagery/news-valve-line.svg",
      width: 300,
      height: 190,
      alt: "Sơ đồ van điều khiển và thiết bị đo lường",
    },
    detail: {
      meta: {
        scope: "Thiết bị & vật tư kỹ thuật",
        location: "Khu công nghiệp Đồng Nai",
        sector: "Nhà máy chế biến",
        status: "Đã bàn giao",
        handover: "20/03/2026",
      },
      context: [
        "Nhà máy cần thay thế một loạt đồng hồ đo và van điều khiển đã hết tuổi thọ, đồng thời bổ sung vật tư dự phòng cho kế hoạch bảo trì năm. Yêu cầu đặt ra là thiết bị phải đúng thông số kỹ thuật của từng vị trí lắp đặt.",
        "Delta Energy rà soát danh mục thiết bị theo hồ sơ kỹ thuật hiện hữu, đối chiếu từng vị trí lắp đặt trước khi đề xuất chủng loại thay thế tương đương.",
      ],
      scope: [
        {
          title: "Rà soát danh mục thiết bị cần thay",
          body: "Đối chiếu hồ sơ kỹ thuật và tình trạng thực tế để xác định danh mục đồng hồ đo, van cần thay thế.",
        },
        {
          title: "Đối chiếu thông số từng vị trí lắp đặt",
          body: "Kiểm tra dải đo, cấp chịu áp và kiểu kết nối của từng vị trí trước khi chốt chủng loại.",
        },
        {
          title: "Cung cấp thiết bị chính hãng",
          body: "Cung cấp đồng hồ đo, van điều khiển và vật tư chính hãng, đúng thông số, kèm chứng từ xuất xứ.",
        },
        {
          title: "Giao nhận & hướng dẫn lắp đặt",
          body: "Giao nhận theo tiến độ nhà máy yêu cầu, kèm tài liệu kỹ thuật và hướng dẫn lắp đặt, hiệu chỉnh.",
        },
      ],
      solution: [
        "Danh mục thiết bị được lập theo từng vị trí lắp đặt thay vì theo mã hàng chung, nhờ đó thiết bị về đúng thông số và lắp vừa không cần gia công thêm.",
        "Toàn bộ thiết bị có nguồn gốc rõ ràng, kèm chứng từ xuất xứ và bảo hành theo quy định của nhà sản xuất.",
      ],
      diagram: {
        src: "/imagery/news-valve-line.svg",
        width: 300,
        height: 190,
        alt: "Sơ đồ van điều khiển và đồng hồ đo lường được cung cấp",
        caption: "Sơ đồ vị trí van điều khiển và thiết bị đo trong danh mục cung cấp.",
      },
      timeline: [
        {
          stage: "Giai đoạn 1",
          caption: "Rà soát",
          title: "Rà soát danh mục và hiện trạng thiết bị",
          body: "Kiểm tra tình trạng thực tế và đối chiếu với hồ sơ kỹ thuật của từng vị trí lắp đặt.",
        },
        {
          stage: "Giai đoạn 2",
          caption: "Chốt thông số",
          title: "Đối chiếu thông số và chốt chủng loại",
          body: "Xác nhận dải đo, cấp chịu áp, kiểu kết nối và thống nhất chủng loại thay thế tương đương.",
        },
        {
          stage: "Giai đoạn 3",
          caption: "Cung cấp",
          title: "Cung cấp thiết bị theo tiến độ",
          body: "Giao thiết bị chính hãng theo tiến độ nhà máy yêu cầu, kèm chứng từ và tài liệu kỹ thuật.",
        },
        {
          stage: "20/03/2026",
          caption: "Bàn giao",
          title: "Giao nhận và hướng dẫn lắp đặt",
          body: "Giao nhận đầy đủ, hướng dẫn lắp đặt và hiệu chỉnh cho đội bảo trì của nhà máy.",
          done: true,
        },
      ],
      outcomes: [
        {
          title: "Đúng thông số từng vị trí",
          body: "Thiết bị được chọn theo đúng dải đo và kiểu kết nối của từng vị trí, lắp vừa không cần gia công.",
        },
        {
          title: "Nguồn gốc rõ ràng",
          body: "Toàn bộ thiết bị có chứng từ xuất xứ và bảo hành theo quy định của nhà sản xuất.",
        },
        {
          title: "Chủ động vật tư dự phòng",
          body: "Vật tư dự phòng được bổ sung theo danh mục, giúp nhà máy chủ động cho kế hoạch bảo trì năm.",
        },
      ],
      related: [
        "bao-tri-dinh-ky-van-thiet-bi-do-mien-trung",
        "khao-sat-hien-trang-tu-van-hai-phong",
      ],
    },
  },

  {
    slug: "khao-sat-hien-trang-tu-van-hai-phong",
    title: "Khảo sát hiện trạng & tư vấn giải pháp kỹ thuật",
    tag: "Nhà máy sản xuất — KCN Hải Phòng",
    description:
      "Khảo sát hiện trạng hệ thống, đề xuất giải pháp tối ưu về kỹ thuật và chi phí đầu tư cho từng hạng mục.",
    category: "tu-van",
    image: {
      src: "/imagery/about-factory-blocks.svg",
      width: 400,
      height: 320,
      alt: "Sơ đồ khối nhà máy và đồng hồ đo trong khảo sát hiện trạng",
    },
    detail: {
      meta: {
        scope: "Tư vấn giải pháp kỹ thuật",
        location: "Khu công nghiệp Hải Phòng",
        sector: "Nhà máy sản xuất",
        status: "Đã bàn giao",
        handover: "18/02/2026",
      },
      context: [
        "Nhà máy dự kiến mở rộng năng lực sản xuất nhưng chưa xác định được hạng mục nào cần ưu tiên và chi phí đầu tư tương ứng. Chủ đầu tư cần một đánh giá độc lập trước khi ra quyết định.",
        "Delta Energy khảo sát toàn bộ hệ thống hiện hữu, đối chiếu với nhu cầu vận hành mục tiêu và phân tích phương án theo hai tiêu chí: hiệu quả kỹ thuật và chi phí đầu tư.",
      ],
      scope: [
        {
          title: "Khảo sát hiện trạng hệ thống",
          body: "Đo đạc, ghi nhận hiện trạng thiết bị và đối chiếu với hồ sơ kỹ thuật hiện hữu của nhà máy.",
        },
        {
          title: "Phân tích nhu cầu vận hành mục tiêu",
          body: "Làm rõ yêu cầu vận hành sau mở rộng để xác định các điểm nghẽn cần xử lý trước.",
        },
        {
          title: "Đề xuất phương án theo từng hạng mục",
          body: "Đề xuất giải pháp kỹ thuật cho từng hạng mục, kèm ước tính chi phí đầu tư và thứ tự ưu tiên.",
        },
        {
          title: "Báo cáo khảo sát & tư vấn",
          body: "Bàn giao báo cáo khảo sát, so sánh phương án và khuyến nghị lộ trình đầu tư theo giai đoạn.",
        },
      ],
      solution: [
        "Báo cáo phân tích từng hạng mục theo hai tiêu chí hiệu quả kỹ thuật và chi phí đầu tư, giúp chủ đầu tư so sánh phương án trên cùng một cơ sở.",
        "Lộ trình đầu tư được chia theo giai đoạn, ưu tiên các hạng mục xử lý điểm nghẽn vận hành trước.",
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
          title: "Khảo sát hiện trạng tại nhà máy",
          body: "Đo đạc, ghi nhận hiện trạng thiết bị và đối chiếu hồ sơ kỹ thuật hiện hữu.",
        },
        {
          stage: "Giai đoạn 2",
          caption: "Phân tích",
          title: "Phân tích nhu cầu và xác định điểm nghẽn",
          body: "Đối chiếu hiện trạng với nhu cầu vận hành mục tiêu để xác định hạng mục cần ưu tiên.",
        },
        {
          stage: "Giai đoạn 3",
          caption: "Đề xuất",
          title: "Đề xuất phương án và ước tính chi phí",
          body: "Lập phương án kỹ thuật cho từng hạng mục kèm ước tính chi phí đầu tư tương ứng.",
        },
        {
          stage: "18/02/2026",
          caption: "Bàn giao",
          title: "Bàn giao báo cáo khảo sát và tư vấn",
          body: "Bàn giao báo cáo, so sánh phương án và khuyến nghị lộ trình đầu tư theo giai đoạn.",
          done: true,
        },
      ],
      outcomes: [
        {
          title: "Quyết định đầu tư có cơ sở",
          body: "Chủ đầu tư có đánh giá độc lập về hiện trạng và chi phí trước khi ra quyết định đầu tư.",
        },
        {
          title: "Ưu tiên đúng hạng mục",
          body: "Các điểm nghẽn vận hành được xác định rõ và xếp thứ tự ưu tiên xử lý trước.",
        },
        {
          title: "Lộ trình theo giai đoạn",
          body: "Lộ trình đầu tư chia theo giai đoạn, phù hợp với kế hoạch mở rộng của nhà máy.",
        },
      ],
      related: [
        "lap-dat-he-thong-bom-duong-ong-binh-duong",
        "nang-cap-tu-dien-he-thong-dieu-khien-long-an",
      ],
    },
  },

  {
    slug: "chay-thu-nghiem-thu-ban-giao-mien-bac",
    title: "Chạy thử, nghiệm thu & bàn giao hệ thống",
    tag: "Nhà máy nhiệt điện — Miền Bắc",
    description:
      "Chạy thử, nghiệm thu và bàn giao hệ thống theo đúng tiêu chuẩn kỹ thuật đề ra, kèm hồ sơ vận hành.",
    category: "lap-dat",
    image: {
      src: "/imagery/news-project-handover.svg",
      width: 300,
      height: 190,
      alt: "Sơ đồ bàn giao hệ thống công nghệ",
    },
    detail: {
      meta: {
        scope: "Lắp đặt & vận hành hệ thống",
        location: "Nhà máy nhiệt điện — Miền Bắc",
        sector: "Năng lượng",
        status: "Đã bàn giao",
        handover: "09/01/2026",
      },
      context: [
        "Sau khi hoàn tất lắp đặt, hệ thống cần được chạy thử có tải, nghiệm thu và bàn giao chính thức cho nhà máy. Đây là bước quyết định để hệ thống được đưa vào vận hành thương mại.",
        "Delta Energy thực hiện chạy thử theo từng cụm, ghi nhận thông số ở các mức tải khác nhau và hiệu chỉnh trước khi nghiệm thu, đảm bảo hệ thống đạt đúng tiêu chuẩn đề ra.",
      ],
      scope: [
        {
          title: "Chuẩn bị chạy thử & kiểm tra an toàn",
          body: "Kiểm tra lần cuối trước chạy thử, rà soát điều kiện an toàn và thống nhất quy trình chạy thử.",
        },
        {
          title: "Chạy thử có tải theo từng cụm",
          body: "Chạy thử hệ thống ở các mức tải khác nhau, ghi nhận thông số vận hành của từng cụm thiết bị.",
        },
        {
          title: "Hiệu chỉnh thông số hệ thống",
          body: "Hiệu chỉnh thông số vận hành theo kết quả chạy thử, đảm bảo hệ thống chạy đúng thiết kế.",
        },
        {
          title: "Nghiệm thu & bàn giao hồ sơ",
          body: "Nghiệm thu theo tiêu chuẩn kỹ thuật, bàn giao hồ sơ vận hành và hướng dẫn cho đội ngũ nhà máy.",
        },
      ],
      solution: [
        "Quá trình chạy thử được chia theo từng cụm và ghi nhận thông số ở nhiều mức tải, nhờ đó các sai lệch được phát hiện và hiệu chỉnh trước khi nghiệm thu tổng thể.",
        "Hồ sơ bàn giao gồm biên bản chạy thử, thông số vận hành và hướng dẫn vận hành — bảo trì, giúp đội ngũ nhà máy tiếp nhận hệ thống thuận lợi.",
      ],
      diagram: {
        src: "/imagery/news-project-handover.svg",
        width: 300,
        height: 190,
        alt: "Sơ đồ hệ thống công nghệ trong giai đoạn chạy thử và bàn giao",
        caption: "Sơ đồ hệ thống công nghệ bàn giao cho nhà máy sau nghiệm thu.",
      },
      timeline: [
        {
          stage: "Giai đoạn 1",
          caption: "Chuẩn bị",
          title: "Kiểm tra điều kiện chạy thử",
          body: "Rà soát hệ thống sau lắp đặt, kiểm tra điều kiện an toàn và thống nhất quy trình chạy thử.",
        },
        {
          stage: "Giai đoạn 2",
          caption: "Chạy thử",
          title: "Chạy thử có tải theo từng cụm",
          body: "Chạy thử ở các mức tải khác nhau và ghi nhận thông số vận hành của từng cụm thiết bị.",
        },
        {
          stage: "Giai đoạn 3",
          caption: "Hiệu chỉnh",
          title: "Hiệu chỉnh thông số theo kết quả chạy thử",
          body: "Điều chỉnh thông số vận hành để hệ thống đạt đúng thiết kế trước khi nghiệm thu tổng thể.",
        },
        {
          stage: "09/01/2026",
          caption: "Bàn giao",
          title: "Nghiệm thu và bàn giao hệ thống",
          body: "Nghiệm thu theo tiêu chuẩn kỹ thuật đề ra, bàn giao hồ sơ vận hành và hướng dẫn cho nhà máy.",
          done: true,
        },
      ],
      outcomes: [
        {
          title: "Đạt tiêu chuẩn nghiệm thu",
          body: "Hệ thống được chạy thử, hiệu chỉnh và nghiệm thu theo đúng tiêu chuẩn kỹ thuật đề ra.",
        },
        {
          title: "Sai lệch được xử lý trước bàn giao",
          body: "Các sai lệch phát hiện trong quá trình chạy thử được hiệu chỉnh trước khi nghiệm thu tổng thể.",
        },
        {
          title: "Sẵn sàng vận hành",
          body: "Hồ sơ vận hành và hướng dẫn bảo trì được bàn giao đầy đủ, đội ngũ nhà máy tiếp nhận thuận lợi.",
        },
      ],
      related: [
        "lap-dat-he-thong-bom-duong-ong-binh-duong",
        "khao-sat-hien-trang-tu-van-hai-phong",
      ],
    },
  },
];

/** Toàn bộ dự án — mock, sẽ thay bằng GraphQL. */
export function getProjects(): Project[] {
  return projects;
}

/** Một dự án theo slug, `undefined` nếu không có. */
export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/** Các dự án liên quan đã resolve từ slug trong `detail.related`. */
export function getRelatedProjects(project: Project): Project[] {
  return project.detail.related
    .map((slug) => getProject(slug))
    .filter((item): item is Project => item !== undefined);
}
