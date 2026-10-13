import { company } from "@/constants/company";

/**
 * Vietnamese copy — the source of truth for the dictionary shape.
 * `en.ts` is typed against `Dictionary`, so a missing key fails the build.
 *
 * Dữ kiện liên hệ (số điện thoại, tên pháp nhân) không viết cứng ở đây mà lấy
 * từ `@/constants/company` — cùng nguồn với JSON-LD, nên số trên giao diện và
 * số trong structured data không thể lệch nhau.
 */
export const vi = {
  meta: {
    title: "Delta Energy — Gia công & Sản xuất Kết cấu Thép Công nghiệp",
    description:
      "Delta Energy (CÔNG TY TNHH DỊCH VỤ KỸ THUẬT DELTA ENERGY) sản xuất, gia công kết cấu thép và cấu kiện kim loại theo bản vẽ thiết kế — khung thép, dầm, cột, giàn thép, sàn thao tác, cầu thang và cấu kiện phụ trợ cho công trình xây dựng và nhà xưởng công nghiệp.",
  },
  /** Dùng chung — chuỗi thay cho trường chưa có dữ liệu bên Strapi. */
  common: {
    updating: "Đang cập nhật",
  },
  nav: {
    label: "Điều hướng chính",
    home: "Delta Energy — về trang chủ",
    items: [
      { href: "#solutions", label: "Giải pháp" },
      { href: "/services", label: "Dịch vụ" },
      { href: "/projects", label: "Dự án" },
      { href: "#faq", label: "FAQ" },
      { href: "#contact", label: "Liên hệ" },
    ],
    call: `Gọi ${company.phone.display}`,
    openMenu: "Mở menu",
    closeMenu: "Đóng menu",
    drawerLabel: "Menu điều hướng",
    languageLabel: "Chọn ngôn ngữ",
    languageNames: { vi: "Tiếng Việt", en: "English" },
  },
  hero: {
    eyebrow: "Gia công kết cấu thép công nghiệp",
    h1Pre: "Đối tác gia công ",
    h1Accent: "kết cấu thép theo bản vẽ",
    lead: "Chúng tôi sản xuất, gia công kết cấu thép và cấu kiện kim loại theo bản vẽ thiết kế — khung thép, dầm, cột, giàn thép và cấu kiện phụ trợ cho công trình xây dựng và nhà xưởng công nghiệp.",
    ctaPrimary: "Nhận báo giá",
    ctaSecondary: "Xem hồ sơ năng lực",
    stats: [
      { value: "10+", label: "Năm kinh nghiệm" },
      { value: "150+", label: "Dự án hoàn thành" },
      { value: "40+", label: "Đối tác chiến lược" },
    ],
    imgAlt: "Sơ đồ hệ thống kỹ thuật trên nền lưới bản vẽ 40px",
  },
  trust: {
    line: "Được tin tưởng bởi 40+ đối tác chiến lược",
    sectors: [
      "Năng lượng",
      "Sản xuất",
      "Thực phẩm & Đồ uống",
      "Hóa chất",
      "Kho vận & Logistics",
    ],
  },
  problem: {
    kicker: "Vấn đề thường gặp",
    title: "Chọn nhầm đối tác gia công, cả công trình trả giá",
    lead: "Nghe quen không? Những vấn đề này càng để lâu càng đẩy tiến độ và chi phí dự án ra khỏi tầm kiểm soát.",
    items: [
      {
        title: "Tiến độ gia công bị trễ hẹn",
        body: "Nhà thầu gia công chậm bàn giao kéo theo toàn bộ tiến độ lắp dựng và hoàn thiện công trình phía sau.",
      },
      {
        title: "Chất lượng không đồng đều",
        body: "Kích thước sai lệch, mối hàn không đạt yêu cầu khiến cấu kiện phải sửa lại, đội thêm chi phí và thời gian.",
      },
      {
        title: "Báo giá thiếu minh bạch",
        body: "Báo giá không rõ chủng loại vật tư và khối lượng, dẫn đến phát sinh khó kiểm soát trong quá trình thực hiện.",
      },
    ],
  },
  pillars: {
    kicker: "Vì sao chọn Delta Energy",
    title: "Cách chúng tôi giữ chất lượng và tiến độ",
    lead: "Ba trụ cột định hình cách Delta Energy nhận việc với từng khách hàng.",
    items: [
      {
        title: "Một đầu mối từ bản vẽ đến bàn giao",
        body: "Tiếp nhận bản vẽ → chuẩn bị vật tư → gia công → bàn giao, do một đội kỹ thuật chịu trách nhiệm xuyên suốt.",
      },
      {
        title: "Bằng chứng thay lời nói",
        body: "10+ năm kinh nghiệm, 150+ dự án hoàn thành, 40+ đối tác chiến lược — con số được công bố rõ ràng ngay trên trang.",
      },
      {
        title: "Bám theo yêu cầu kỹ thuật đã chốt",
        body: "Gia công theo bản vẽ và quy cách đã thống nhất, kiểm tra kích thước và mối hàn ở từng công đoạn trước khi bàn giao.",
      },
    ],
  },
  process: {
    kicker: "Quy trình làm việc",
    title: "Từ bản vẽ đến sản phẩm chỉ trong ba bước",
    lead: "Không bước nào thiếu kiểm tra. Không tiến độ nào để trôi.",
    items: [
      {
        title: "Tiếp nhận & báo giá",
        body: "Tiếp nhận bản vẽ, đối chiếu yêu cầu kỹ thuật và gửi báo giá theo chủng loại vật tư, khối lượng rõ ràng.",
      },
      {
        title: "Vật tư & gia công",
        body: "Chuẩn bị thép hình, thép tấm theo bảng kê; cắt, khoan, hàn và tổ hợp theo bản vẽ đã chốt.",
      },
      {
        title: "Kiểm tra & bàn giao",
        body: "Kiểm tra kích thước, mối hàn và tình trạng bề mặt trước khi bàn giao theo tiến độ đã thống nhất.",
      },
    ],
  },
  ctaBand: {
    title: "Cần báo giá cho hạng mục kết cấu thép?",
    lead: `Gọi hotline ${company.phone.display} — chúng tôi phản hồi trong giờ làm việc.`,
    cta: "Gọi tư vấn ngay",
  },
  services: {
    kicker: "Dịch vụ",
    title: "Bốn nhóm dịch vụ gia công cốt lõi",
    lead: "Mỗi nhóm dịch vụ có quy trình riêng — và đều quy về một mục tiêu: sản phẩm đúng bản vẽ, đúng tiến độ.",
    readMore: "Đọc thêm →",
    items: [
      {
        kicker: "Dịch vụ 01",
        title: "Sản xuất kết cấu thép",
        body: "Sản xuất, chế tạo khung thép, dầm, cột, giàn thép và các cấu kiện kết cấu theo bản vẽ thiết kế cho công trình xây dựng và nhà xưởng công nghiệp.",
        alt: "Minh họa khung thép nhà xưởng với dầm và cột",
      },
      {
        kicker: "Dịch vụ 02",
        title: "Gia công cấu kiện kim loại",
        body: "Gia công thép tấm, thép hình và các chi tiết kim loại theo kích thước, quy cách và bản vẽ kỹ thuật — từ cắt, khoan, hàn đến lắp ráp và hoàn thiện sản phẩm.",
        alt: "Minh họa gia công thép tấm với đường cắt và lỗ khoan",
      },
      {
        kicker: "Dịch vụ 03",
        title: "Gia công kết cấu thép phụ trợ công nghiệp",
        body: "Gia công sàn thao tác, cầu thang thép, lan can, giá đỡ và các cấu kiện kim loại phụ trợ cho nhà máy, nhà xưởng và công trình công nghiệp.",
        alt: "Minh họa sàn thao tác và cầu thang thép",
      },
      {
        kicker: "Dịch vụ 04",
        title: "Hàn, lắp ráp và hoàn thiện sản phẩm",
        body: "Thực hiện hàn liên kết, lắp ráp và hoàn thiện cấu kiện thép theo yêu cầu kỹ thuật, đảm bảo chất lượng sản phẩm và tiến độ bàn giao.",
        alt: "Minh họa hàn liên kết cấu kiện thép",
      },
    ],
  },
  statsBand: {
    items: [
      { value: "10+", label: "Năm kinh nghiệm" },
      { value: "150+", label: "Dự án hoàn thành" },
      { value: "40+", label: "Đối tác chiến lược" },
      { value: "24/7", label: "Hỗ trợ kỹ thuật" },
    ],
  },
  projects: {
    kicker: "Hồ sơ năng lực",
    title: "Những dự án đã bàn giao trên thực tế",
    lead: "Kết quả thực tế từ các công trình chúng tôi đã thực hiện — bằng con số, không bằng tính từ.",
    viewAll: "Xem tất cả dự án →",
    /*
     * Không có `items` viết cứng: ba thẻ ở khối này lấy từ Strapi qua
     * `getLatestProjects`, xem `components/projects.tsx`.
     */
  },
  projectsPage: {
    meta: {
      title: "Dự án đã thực hiện — Delta Energy",
      description:
        "Hồ sơ năng lực Delta Energy: các công trình tiêu biểu trong sản xuất, gia công kết cấu thép và cấu kiện kim loại cho công trình xây dựng và nhà xưởng công nghiệp.",
    },
    crumbs: { label: "Bạn đang ở", home: "Trang chủ", current: "Dự án" },
    hero: {
      eyebrow: "Hồ sơ năng lực",
      title: "Dự án đã thực hiện",
      lead: "Một số công trình tiêu biểu Delta Energy đã triển khai cùng đối tác trong ngành công nghiệp.",
      stats: [
        { value: "10+", label: "Năm kinh nghiệm" },
        { value: "150+", label: "Dự án hoàn thành" },
        { value: "40+", label: "Đối tác chiến lược" },
      ],
    },
    filters: {
      label: "Lọc dự án theo hạng mục",
      all: "Tất cả",
      showing: "Đang hiển thị",
      of: "trên",
      unit: "dự án",
      empty: "Chưa có dự án nào trong hạng mục này.",
    },
    card: { viewDetail: "Xem chi tiết" },
    featured: {
      eyebrow: "Dự án tiêu biểu",
      metaLabels: {
        handover: "Thời điểm bàn giao",
        location: "Địa điểm",
        category: "Hạng mục",
      },
      ctaPrimary: "Đọc case study",
    },
    lifecycle: {
      eyebrow: "Quy trình triển khai",
      title: "Bốn nhóm dịch vụ chính",
      lead: "Mỗi hạng mục đều đi qua bốn nhóm dịch vụ này — một đầu mối chịu trách nhiệm xuyên suốt.",
      items: [
        {
          title: "Sản xuất kết cấu thép",
          body: "Sản xuất, chế tạo khung thép, dầm, cột, giàn thép và cấu kiện kết cấu theo bản vẽ thiết kế.",
        },
        {
          title: "Gia công cấu kiện kim loại",
          body: "Gia công thép tấm, thép hình và chi tiết kim loại theo kích thước, quy cách và bản vẽ kỹ thuật.",
        },
        {
          title: "Gia công kết cấu thép phụ trợ công nghiệp",
          body: "Gia công sàn thao tác, cầu thang thép, lan can, giá đỡ và cấu kiện phụ trợ cho nhà máy, nhà xưởng.",
        },
        {
          title: "Hàn, lắp ráp và hoàn thiện sản phẩm",
          body: "Hàn liên kết, lắp ráp và hoàn thiện cấu kiện thép theo yêu cầu kỹ thuật, đúng tiến độ bàn giao.",
        },
      ],
    },
    cta: {
      title: "Trao đổi về hạng mục của bạn",
      lead: "Gửi bản vẽ hoặc yêu cầu kỹ thuật, đội ngũ Delta Energy sẽ đánh giá phương án gia công và báo giá theo từng hạng mục.",
      quote: "Gửi yêu cầu báo giá",
      call: `Gọi ${company.phone.display}`,
    },
  },
  projectDetail: {
    hero: {
      ctaQuote: "Nhận báo giá hạng mục tương tự",
      allProjects: "Xem tất cả dự án",
    },
    metaLabels: {
      category: "Hạng mục",
      location: "Địa điểm",
      sector: "Lĩnh vực",
      status: "Trạng thái",
      handover: "Bàn giao",
    },
    context: { eyebrow: "Bối cảnh", title: "Tổng quan dự án" },
    related: {
      eyebrow: "Dự án liên quan",
      title: "Các hạng mục liên quan",
      linkLabel: "Xem chi tiết",
    },
    cta: {
      title: "Cần báo giá một hạng mục tương tự?",
      lead: "Gửi bản vẽ hoặc yêu cầu kỹ thuật, đội ngũ Delta Energy sẽ đánh giá phương án gia công và báo giá phù hợp.",
      quote: "Gửi yêu cầu báo giá",
      call: `Gọi ${company.phone.display}`,
    },
  },
  servicesPage: {
    meta: {
      title: "Dịch vụ gia công kết cấu thép — Delta Energy",
      description:
        "Bốn nhóm dịch vụ Delta Energy: sản xuất kết cấu thép, gia công cấu kiện kim loại, kết cấu thép phụ trợ công nghiệp và hàn, lắp ráp, hoàn thiện sản phẩm cho công trình xây dựng và nhà xưởng.",
    },
    crumbs: { label: "Bạn đang ở", home: "Trang chủ", current: "Dịch vụ" },
    hero: {
      eyebrow: "Lĩnh vực hoạt động",
      title: "Dịch vụ gia công kết cấu thép",
      lead: "Bốn nhóm dịch vụ chính đưa sản phẩm từ bản vẽ thiết kế đến bàn giao — đúng quy cách kỹ thuật và đúng tiến độ.",
      stats: [
        { value: "10+", label: "Năm kinh nghiệm" },
        { value: "150+", label: "Dự án hoàn thành" },
        { value: "40+", label: "Đối tác chiến lược" },
      ],
    },
    list: {
      eyebrow: "Bốn nhóm dịch vụ",
      title: "Từ bản vẽ đến sản phẩm hoàn thiện",
      lead: "Delta Energy nhận sản xuất và gia công kết cấu thép, cấu kiện kim loại cho công trình xây dựng và nhà xưởng công nghiệp — một đầu mối từ tiếp nhận bản vẽ, chuẩn bị vật tư đến gia công và bàn giao.",
      viewDetail: "Xem chi tiết dịch vụ",
    },
    products: {
      eyebrow: "Sản phẩm theo nhóm dịch vụ",
      title: "Kết cấu thép & cấu kiện kim loại",
      lead: "Sản phẩm được phân theo từng nhóm, gia công theo bản vẽ và yêu cầu kỹ thuật của đơn hàng. Vui lòng liên hệ để được tư vấn báo giá — trang hiện chưa hỗ trợ đặt mua trực tuyến.",
      quote: "Nhận báo giá",
    },
    commitments: {
      eyebrow: "Cam kết dịch vụ",
      title: "Ba điều Delta Energy giữ ở mọi đơn hàng",
      items: [
        {
          title: "Đúng bản vẽ và quy cách kỹ thuật",
          body: "Cấu kiện được gia công theo bản vẽ đã chốt, có kiểm tra kích thước và mối hàn ở từng công đoạn.",
        },
        {
          title: "Vật tư rõ chủng loại",
          body: "Thép hình, thép tấm và vật tư đầu vào được kiểm tra chủng loại, quy cách theo bảng kê kỹ thuật của đơn hàng.",
        },
        {
          title: "Đúng tiến độ bàn giao",
          body: "Tiến độ thực hiện được thống nhất trước khi nhận việc và có thông tin cập nhật xuyên suốt quá trình gia công.",
        },
      ],
    },
    cta: {
      title: "Cần báo giá một nhóm dịch vụ?",
      lead: "Gửi bản vẽ hoặc yêu cầu kỹ thuật, đội ngũ Delta Energy sẽ đánh giá phương án gia công và báo giá theo từng hạng mục.",
      quote: "Gửi yêu cầu báo giá",
      call: `Gọi ${company.phone.display}`,
    },
  },
  serviceDetail: {
    hero: {
      eyebrow: "Nhóm dịch vụ",
      ctaQuote: "Nhận báo giá dịch vụ",
      allServices: "Xem tất cả dịch vụ",
    },
    metaLabels: {
      group: "Nhóm dịch vụ",
      scope: "Phạm vi",
      equipment: "Vật liệu",
      acceptance: "Nghiệm thu",
      handover: "Bàn giao",
    },
    context: { eyebrow: "Phạm vi công việc" },
    scope: {
      eyebrow: "Bốn hạng mục",
      title: "Delta Energy thực hiện trong nhóm dịch vụ này",
      lead: "Từ tiếp nhận bản vẽ và chuẩn bị vật tư đến gia công và bàn giao — mỗi bước đều có kiểm tra và tiêu chuẩn nghiệm thu rõ ràng.",
    },
    system: { eyebrow: "Vật tư & hạng mục đảm nhận" },
    timeline: {
      eyebrow: "Quy trình thực hiện",
      title: "Bốn giai đoạn triển khai",
      lead: "Quy trình chuẩn Delta Energy áp dụng cho mọi đơn hàng thuộc nhóm dịch vụ này.",
    },
    projects: {
      eyebrow: "Dự án đã triển khai",
      title: "Hạng mục cùng nhóm dịch vụ",
      linkLabel: "Đọc case study",
    },
    others: {
      eyebrow: "Dịch vụ liên quan",
      title: "Các nhóm dịch vụ khác",
      viewDetail: "Xem chi tiết dịch vụ",
    },
    cta: {
      title: "Cần báo giá một hạng mục tương tự?",
      lead: "Gửi bản vẽ hoặc yêu cầu kỹ thuật, đội ngũ Delta Energy sẽ đánh giá phương án gia công và báo giá phù hợp.",
      quote: "Gửi yêu cầu báo giá",
      call: `Gọi ${company.phone.display}`,
    },
  },
  faq: {
    kicker: "Trước khi liên hệ",
    title: "Câu hỏi thường gặp từ khách hàng",
    items: [
      {
        q: "Delta Energy cung cấp những sản phẩm và dịch vụ nào?",
        a: "Chúng tôi tập trung vào sản xuất, gia công kết cấu thép và cấu kiện kim loại phục vụ xây dựng và công nghiệp. Sản phẩm được thực hiện theo bản vẽ, quy cách và yêu cầu kỹ thuật cụ thể của từng dự án.",
      },
      {
        q: "Công ty có nhận gia công theo bản vẽ của khách hàng không?",
        a: "Có. Chúng tôi tiếp nhận bản vẽ kỹ thuật và yêu cầu của Quý khách để xem xét khả năng gia công, phương án thực hiện và báo giá phù hợp.",
      },
      {
        q: "Delta Energy kiểm soát chất lượng sản phẩm như thế nào?",
        a: "Chất lượng được kiểm soát theo yêu cầu kỹ thuật và tiêu chí đã thống nhất trong hợp đồng, bao gồm kiểm tra vật liệu, kích thước, mối hàn và tình trạng hoàn thiện trong phạm vi áp dụng của từng đơn hàng.",
      },
      {
        q: "Thời gian gia công và hoàn thành đơn hàng là bao lâu?",
        a: "Thời gian thực hiện phụ thuộc vào khối lượng, độ phức tạp của sản phẩm, tình trạng vật tư và yêu cầu kỹ thuật. Tiến độ cụ thể được xác nhận sau khi đánh giá hồ sơ và thống nhất với Quý khách.",
      },
      {
        q: "Khách hàng cần cung cấp thông tin gì để nhận báo giá?",
        a: "Quý khách nên cung cấp bản vẽ, quy cách và kích thước sản phẩm, chủng loại vật liệu, số lượng, yêu cầu hoàn thiện bề mặt và địa điểm giao hàng. Nếu chưa có bản vẽ hoàn chỉnh, Quý khách có thể trao đổi trước để xác định thông tin cần thiết.",
      },
      {
        q: "Làm thế nào để liên hệ và hợp tác với Delta Energy?",
        a: `Quý khách có thể gọi hotline ${company.phone.display}, gửi email tới ${company.email.address} hoặc để lại yêu cầu qua website. Chúng tôi tiếp nhận, trao đổi các yêu cầu kỹ thuật và xem xét phương án hợp tác phù hợp.`,
      },
    ],
  },
  contact: {
    kicker: "Liên hệ",
    title: "Nhận báo giá trong ngày làm việc",
    lead: "Ba cách liên hệ — chọn cách thuận tiện nhất với Quý khách.",
    badge: "Phản hồi nhanh nhất",
    items: [
      {
        title: "Báo giá qua hotline",
        body: "Trao đổi trực tiếp với kỹ thuật viên về nhu cầu của Quý khách.",
        cta: `Gọi ${company.phone.display}`,
      },
      {
        title: "Tư vấn qua Zalo",
        body: "Gửi mô tả và ảnh hiện trạng qua Zalo, chúng tôi phản hồi sớm nhất.",
        cta: "Nhắn Zalo",
      },
      {
        title: "Gửi yêu cầu báo giá",
        body: "Điền biểu mẫu yêu cầu, chúng tôi gửi báo giá chi tiết trong ngày làm việc.",
        cta: "Gửi yêu cầu",
      },
    ],
    footnote:
      "Trang hiện chưa hỗ trợ đặt mua trực tuyến. Quý khách vui lòng liên hệ hotline, Zalo hoặc gửi yêu cầu qua biểu mẫu bên dưới để nhận báo giá.",
  },
  contactForm: {
    panel: {
      brand: "Delta Energy",
      title: "Delta Energy — phản hồi nhanh, báo giá minh bạch",
      bullets: [
        "Phản hồi trong ngày làm việc",
        "Báo giá chi tiết theo từng hạng mục",
        "Hỗ trợ kỹ thuật khi triển khai",
      ],
    },
    form: {
      title: "Gửi yêu cầu báo giá",
      support:
        "Điền thông tin bên dưới, chúng tôi gửi báo giá chi tiết trong ngày làm việc.",
      name: {
        label: "Họ và tên",
        placeholder: "Nguyễn Văn A",
        required: "Vui lòng nhập họ và tên.",
      },
      email: {
        label: "Email",
        placeholder: "ten@congty.com",
        required: "Vui lòng nhập email.",
        invalid: "Email chưa đúng định dạng — ví dụ: ten@congty.com.",
      },
      phone: {
        label: "Số điện thoại",
        placeholder: "0901 234 567",
        optional: "Không bắt buộc",
        invalid:
          "Số điện thoại chưa đúng định dạng — ví dụ: 0901 234 567 hoặc +84 901 234 567.",
      },
      message: {
        label: "Nội dung yêu cầu",
        placeholder:
          "Mô tả nhu cầu của Quý khách — hạng mục cần báo giá, bản vẽ, số lượng, thời gian dự kiến…",
        required: "Vui lòng nhập nội dung yêu cầu.",
      },
      submit: "Gửi yêu cầu",
      submitting: "Đang gửi…",
      privacy:
        "Thông tin Quý khách cung cấp được dùng để liên hệ và gửi báo giá.",
    },
    success: {
      title: "Đã nhận yêu cầu của Quý khách",
      body: "Chúng tôi phản hồi trong ngày làm việc và gửi báo giá chi tiết theo nội dung Quý khách cung cấp.",
      reset: "Gửi yêu cầu khác",
    },
    error: {
      generic: `Không gửi được yêu cầu. Quý khách vui lòng thử lại, hoặc gọi hotline ${company.phone.display} để được hỗ trợ.`,
    },
  },
  finalCta: {
    title: "Bạn đang tìm kiếm đối tác gia công kết cấu thép đáng tin cậy?",
    lead: "Liên hệ với DELTA ENERGY để được tư vấn giải pháp phù hợp với yêu cầu kỹ thuật và tiến độ dự án của bạn.",
    call: `Gọi tư vấn ngay — ${company.phone.display}`,
    zalo: "Nhắn Zalo →",
    note: "Phản hồi trong ngày làm việc · Báo giá minh bạch",
  },
  footer: {
    tagline:
      "Delta Energy sản xuất, gia công kết cấu thép và cấu kiện kim loại theo bản vẽ thiết kế — khung thép, dầm, cột, giàn thép và cấu kiện phụ trợ cho công trình xây dựng và nhà xưởng công nghiệp.",
    /** Nhãn cho khối thông tin pháp nhân — giá trị nằm ở `@/constants/company`. */
    info: {
      headOffice: "Trụ sở",
      workshop: "Xưởng",
      email: "Email",
      taxCode: "MST",
      workingHours: "Giờ làm việc",
    },
    cols: [
      {
        heading: "Điều hướng",
        links: [
          { href: "#solutions", label: "Giải pháp" },
          { href: "/services", label: "Dịch vụ" },
          { href: "#projects", label: "Dự án" },
          { href: "#faq", label: "FAQ" },
        ],
      },
      {
        heading: "Công ty",
        links: [
          { href: "#projects", label: "Giới thiệu" },
          { href: "#projects", label: "Hồ sơ năng lực" },
          { href: "#contact", label: "Liên hệ" },
        ],
      },
      {
        heading: "Liên hệ",
        links: [
          {
            href: company.phone.href,
            label: `Hotline ${company.phone.display}`,
          },
          { href: "#contact", label: "Nhắn Zalo" },
          { href: "#contact", label: "Gửi yêu cầu báo giá" },
        ],
      },
    ],
    legal: `© 2026 Delta Energy · ${company.legalName}`,
    values: "Kỹ thuật · Đáng tin cậy · Rõ ràng",
  },
};

export type Dictionary = typeof vi;
