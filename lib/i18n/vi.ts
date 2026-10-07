/**
 * Vietnamese copy — the source of truth for the dictionary shape.
 * `en.ts` is typed against `Dictionary`, so a missing key fails the build.
 */
export const vi = {
  meta: {
    title: "Delta Energy — Dịch vụ & Giải pháp Kỹ thuật Công nghiệp",
    description:
      "Delta Energy (CÔNG TY TNHH DỊCH VỤ KỸ THUẬT DELTA ENERGY) cung cấp thiết bị, giải pháp kỹ thuật và dịch vụ hiện trường cho nhà máy và công trình công nghiệp — từ tư vấn giải pháp, cung cấp thiết bị đến lắp đặt và bảo trì vận hành.",
  },
  nav: {
    label: "Điều hướng chính",
    home: "Delta Energy — về đầu trang",
    items: [
      { href: "#solutions", label: "Giải pháp" },
      { href: "/services", label: "Dịch vụ" },
      { href: "/projects", label: "Dự án" },
      { href: "#faq", label: "FAQ" },
      { href: "#contact", label: "Liên hệ" },
    ],
    call: "Gọi 1900 1234",
    openMenu: "Mở menu",
    closeMenu: "Đóng menu",
    drawerLabel: "Menu điều hướng",
    languageLabel: "Chọn ngôn ngữ",
    languageNames: { vi: "Tiếng Việt", en: "English" },
  },
  hero: {
    eyebrow: "Giải pháp kỹ thuật công nghiệp",
    h1Pre: "Đối tác kỹ thuật cho ",
    h1Accent: "vận hành công nghiệp bền vững",
    lead: "Chúng tôi cung cấp thiết bị chính hãng, giải pháp kỹ thuật và dịch vụ hiện trường cho nhà máy, công trình công nghiệp — từ tư vấn giải pháp, cung cấp thiết bị đến lắp đặt và bảo trì vận hành.",
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
    kicker: "Vấn đề vận hành",
    title: "Mỗi giờ ngừng máy đều có cái giá của nó",
    lead: "Nghe quen không? Càng để lâu, những vấn đề này càng âm thầm bào mòn hiệu suất vận hành của nhà máy.",
    items: [
      {
        title: "Ngừng máy ngoài kế hoạch",
        body: "Sự cố nhỏ không được xử lý kịp thời sẽ lan rộng thành ngừng máy ngoài kế hoạch, kéo theo thiệt hại sản lượng và trễ tiến độ giao hàng.",
      },
      {
        title: "Chi phí bảo trì khó dự toán",
        body: "Thiết bị thiếu lịch bảo trì định kỳ dẫn đến hỏng hóc đột xuất, chi phí sửa chữa phát sinh khó kiểm soát.",
      },
      {
        title: "Thiết bị không rõ nguồn gốc",
        body: "Thiết bị không chính hãng tiềm ẩn rủi ro an toàn, giảm tuổi thọ hệ thống và không có hỗ trợ kỹ thuật từ nhà sản xuất.",
      },
    ],
  },
  pillars: {
    kicker: "Vì sao chọn Delta Energy",
    title: "Cách chúng tôi giải quyết bài toán vận hành",
    lead: "Ba trụ cột định hình cách Delta Energy làm việc với từng khách hàng.",
    items: [
      {
        title: "Đối tác trọn vòng đời",
        body: "Tư vấn giải pháp → cung cấp thiết bị → lắp đặt → bảo trì vận hành, do một đội kỹ thuật chịu trách nhiệm xuyên suốt.",
      },
      {
        title: "Bằng chứng thay lời nói",
        body: "10+ năm kinh nghiệm, 150+ dự án hoàn thành, 40+ đối tác chiến lược — con số được công bố rõ ràng ngay trên trang.",
      },
      {
        title: "Vận hành liên tục là cam kết",
        body: "Giảm thiểu thời gian ngừng máy, vận hành liên tục 24/7, an toàn và hiệu quả cho từng công trình.",
      },
    ],
  },
  process: {
    kicker: "Quy trình làm việc",
    title: "Vận hành ổn định chỉ sau ba bước",
    lead: "Không gián đoạn sản xuất. Không dự án kéo dài hàng tháng.",
    items: [
      {
        title: "Khảo sát & tư vấn",
        body: "Kỹ thuật viên khảo sát hiện trạng, lắng nghe yêu cầu vận hành và đề xuất giải pháp phù hợp.",
      },
      {
        title: "Báo giá & cung cấp",
        body: "Báo giá minh bạch, thiết bị chính hãng, tiến độ giao hàng rõ ràng.",
      },
      {
        title: "Lắp đặt & bàn giao",
        body: "Lắp đặt, chạy thử và bàn giao vận hành; hỗ trợ kỹ thuật sau bàn giao.",
      },
    ],
  },
  ctaBand: {
    title: "Cần tư vấn ngay cho hệ thống của Quý khách?",
    lead: "Gọi hotline 1900 1234 — chúng tôi phản hồi trong giờ làm việc.",
    cta: "Gọi tư vấn ngay",
  },
  services: {
    kicker: "Dịch vụ",
    title: "Bốn mảng dịch vụ kỹ thuật cốt lõi",
    lead: "Mỗi mảng dịch vụ đều có quy trình riêng — và đều quy về một mục tiêu: vận hành liên tục.",
    readMore: "Đọc thêm →",
    items: [
      {
        kicker: "Dịch vụ 01",
        title: "Cung cấp thiết bị công nghiệp chính hãng",
        body: "Thiết bị có nguồn gốc rõ ràng, kèm chứng từ và bảo hành theo quy định nhà sản xuất — máy bơm, van điều khiển, thiết bị đo lường và phụ kiện hệ thống.",
        alt: "Minh họa cụm bơm và đường ống công nghiệp",
      },
      {
        kicker: "Dịch vụ 02",
        title: "Giải pháp kỹ thuật theo yêu cầu",
        body: "Khảo sát hiện trạng, phân tích yêu cầu vận hành và đề xuất giải pháp kỹ thuật phù hợp với từng công trình công nghiệp.",
        alt: "Sơ đồ hệ thống kỹ thuật công nghiệp",
      },
      {
        kicker: "Dịch vụ 03",
        title: "Lắp đặt & nâng cấp hệ thống",
        body: "Thi công lắp đặt, đấu nối và nâng cấp hệ thống điện, đường ống và thiết bị — có kiểm tra, chạy thử trước khi bàn giao.",
        alt: "Minh họa nâng cấp hệ thống điện điều khiển",
      },
      {
        kicker: "Dịch vụ 04",
        title: "Bảo trì & vận hành định kỳ",
        body: "Lịch bảo trì theo khuyến nghị nhà sản xuất và điều kiện vận hành thực tế, giúp giảm thiểu thời gian ngừng máy và kéo dài tuổi thọ thiết bị.",
        alt: "Minh họa bảo trì định kỳ giàn máy",
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
    readMore: "Đọc thêm →",
    items: [
      {
        tag: "Điện công nghiệp",
        title: "Nâng cấp hệ thống điện điều khiển",
        body: "Thay thế tủ điều khiển cũ, đấu nối và chạy thử toàn bộ hệ thống điện cho dây chuyền sản xuất.",
        alt: "Minh họa dự án nâng cấp hệ thống điện điều khiển",
      },
      {
        tag: "Thiết bị công nghiệp",
        title: "Cung cấp cụm bơm & đường ống",
        body: "Cung cấp và lắp đặt cụm bơm cùng hệ thống đường ống cho nhà máy chế biến.",
        alt: "Minh họa dự án cung cấp cụm bơm và đường ống",
      },
      {
        tag: "Bảo trì vận hành",
        title: "Bảo trì định kỳ giàn máy",
        body: "Lập lịch và thực hiện bảo trì định kỳ giàn máy theo khuyến nghị của nhà sản xuất.",
        alt: "Minh họa dự án bảo trì định kỳ giàn máy",
      },
    ],
  },
  projectsPage: {
    meta: {
      title: "Dự án đã thực hiện — Delta Energy",
      description:
        "Hồ sơ năng lực Delta Energy: các công trình tiêu biểu trong lĩnh vực bơm, đường ống công nghệ, tủ điện điều khiển và bảo trì hệ thống van, thiết bị đo cho nhà máy công nghiệp.",
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
      label: "Lọc dự án theo nhóm dịch vụ",
      all: "Tất cả",
      categories: {
        "tu-van": "Tư vấn giải pháp",
        "thiet-bi": "Thiết bị & vật tư",
        "lap-dat": "Lắp đặt & vận hành",
        "bao-tri": "Bảo trì & sửa chữa",
      },
      showing: "Đang hiển thị",
      of: "trên",
      unit: "dự án",
      empty: "Chưa có dự án nào trong nhóm dịch vụ này.",
    },
    card: { viewDetail: "Xem chi tiết" },
    featured: {
      eyebrow: "Dự án tiêu biểu",
      metaLabels: {
        handover: "Thời điểm bàn giao",
        location: "Địa điểm",
        serviceGroup: "Nhóm dịch vụ",
      },
      ctaPrimary: "Đọc case study",
    },
    lifecycle: {
      eyebrow: "Quy trình triển khai",
      title: "Bốn nhóm dịch vụ chính",
      lead: "Mỗi hạng mục đều đi qua bốn nhóm dịch vụ này — một đầu mối chịu trách nhiệm xuyên suốt.",
      items: [
        {
          title: "Tư vấn giải pháp kỹ thuật",
          body: "Khảo sát hiện trạng, đề xuất giải pháp tối ưu về kỹ thuật và chi phí đầu tư cho từng dự án.",
        },
        {
          title: "Thiết bị & vật tư kỹ thuật",
          body: "Cung cấp thiết bị, phụ tùng và vật tư kỹ thuật chính hãng, đúng thông số cho từng hệ thống.",
        },
        {
          title: "Lắp đặt & vận hành hệ thống",
          body: "Thi công lắp đặt, chạy thử và bàn giao hệ thống theo đúng tiêu chuẩn kỹ thuật đề ra.",
        },
        {
          title: "Bảo trì & sửa chữa hệ thống",
          body: "Bảo trì định kỳ, xử lý sự cố và sửa chữa thiết bị công nghiệp, giảm thiểu thời gian ngừng máy.",
        },
      ],
    },
    cta: {
      title: "Trao đổi về hạng mục của bạn",
      lead: "Gửi hiện trạng hoặc bản vẽ hệ thống, đội ngũ kỹ thuật Delta Energy sẽ khảo sát và tư vấn giải pháp phù hợp.",
      quote: "Gửi yêu cầu báo giá",
      call: "Gọi 1900 1234",
    },
  },
  projectDetail: {
    hero: {
      ctaQuote: "Nhận báo giá hạng mục tương tự",
      allProjects: "Xem tất cả dự án",
    },
    metaLabels: {
      scope: "Hạng mục",
      location: "Địa điểm",
      sector: "Lĩnh vực",
      status: "Trạng thái",
      handover: "Bàn giao",
    },
    context: { eyebrow: "Bối cảnh", title: "Yêu cầu của chủ đầu tư" },
    scope: {
      eyebrow: "Phạm vi công việc",
      title: "Các hạng mục Delta Energy thực hiện",
      lead: "Từ khảo sát, cung cấp thiết bị, lắp đặt đến bàn giao và hướng dẫn bảo trì — một đầu mối chịu trách nhiệm xuyên suốt.",
    },
    solution: { eyebrow: "Giải pháp kỹ thuật", title: "Phương án Delta Energy đề xuất" },
    timeline: {
      eyebrow: "Tiến độ triển khai",
      title: "Các mốc chính của dự án",
      lead: "Các giai đoạn theo quy trình chuẩn Delta Energy áp dụng cho hạng mục này.",
    },
    outcomes: {
      eyebrow: "Kết quả bàn giao",
      title: "Kết quả Delta Energy cam kết",
      lead: "Ba kết quả Delta Energy cam kết cho hạng mục này.",
    },
    related: {
      eyebrow: "Dự án liên quan",
      title: "Các hạng mục liên quan",
      linkLabel: "Xem chi tiết",
    },
    cta: {
      title: "Cần khảo sát một hạng mục tương tự?",
      lead: "Gửi hiện trạng hoặc bản vẽ hệ thống, đội ngũ kỹ thuật Delta Energy sẽ khảo sát và đề xuất giải pháp phù hợp.",
      quote: "Gửi yêu cầu báo giá",
      call: "Gọi 1900 1234",
    },
  },
  servicesPage: {
    meta: {
      title: "Dịch vụ kỹ thuật cốt lõi — Delta Energy",
      description:
        "Bốn nhóm dịch vụ Delta Energy: tư vấn giải pháp kỹ thuật, thiết bị & vật tư, lắp đặt & vận hành, bảo trì & sửa chữa hệ thống cho nhà máy công nghiệp.",
    },
    crumbs: { label: "Bạn đang ở", home: "Trang chủ", current: "Dịch vụ" },
    hero: {
      eyebrow: "Lĩnh vực hoạt động",
      title: "Dịch vụ kỹ thuật cốt lõi",
      lead: "Bốn nhóm dịch vụ chính giúp khách hàng vận hành hệ thống công nghiệp an toàn, hiệu quả và đúng tiến độ.",
      stats: [
        { value: "10+", label: "Năm kinh nghiệm" },
        { value: "150+", label: "Dự án hoàn thành" },
        { value: "40+", label: "Đối tác chiến lược" },
      ],
    },
    list: {
      eyebrow: "Bốn nhóm dịch vụ",
      title: "Từ khảo sát đến bảo trì vận hành",
      lead: "Delta Energy đồng hành cùng khách hàng xuyên suốt vòng đời hệ thống — một đầu mối chịu trách nhiệm từ tư vấn giải pháp, cung cấp thiết bị, lắp đặt đến bảo trì vận hành.",
      viewDetail: "Xem chi tiết dịch vụ",
    },
    products: {
      eyebrow: "Sản phẩm theo nhóm dịch vụ",
      title: "Thiết bị & vật tư kỹ thuật",
      lead: "Sản phẩm được phân theo từng danh mục, có thông tin và hình ảnh chi tiết. Vui lòng liên hệ để được tư vấn báo giá — trang hiện chưa hỗ trợ đặt mua trực tuyến.",
      quote: "Nhận báo giá",
    },
    commitments: {
      eyebrow: "Cam kết dịch vụ",
      title: "Ba điều Delta Energy giữ ở mọi hạng mục",
      items: [
        {
          title: "Giảm thiểu thời gian ngừng máy",
          body: "Công tác bảo trì và xử lý sự cố được tổ chức để hệ thống sớm trở lại trạng thái vận hành ổn định.",
        },
        {
          title: "Thiết bị chính hãng, đúng thông số",
          body: "Thiết bị, phụ tùng và vật tư được cung cấp đúng chủng loại theo hồ sơ kỹ thuật của từng hệ thống.",
        },
        {
          title: "Đúng tiêu chuẩn kỹ thuật đề ra",
          body: "Mỗi hạng mục đều có hồ sơ nghiệm thu và tài liệu bàn giao đầy đủ cho nhà máy.",
        },
      ],
    },
    cta: {
      title: "Cần tư vấn một nhóm dịch vụ?",
      lead: "Gửi hiện trạng hoặc bản vẽ hệ thống, đội ngũ kỹ thuật Delta Energy sẽ khảo sát và đề xuất giải pháp phù hợp.",
      quote: "Gửi yêu cầu báo giá",
      call: "Gọi 1900 1234",
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
      equipment: "Thiết bị",
      acceptance: "Nghiệm thu",
      handover: "Bàn giao",
    },
    context: { eyebrow: "Phạm vi công việc" },
    scope: {
      eyebrow: "Bốn hạng mục",
      title: "Delta Energy thực hiện trong nhóm dịch vụ này",
      lead: "Từ khảo sát và chốt phương án đến bàn giao hồ sơ — mỗi bước đều có biên bản và tiêu chuẩn nghiệm thu rõ ràng.",
    },
    system: { eyebrow: "Thiết bị & hệ thống đảm nhận" },
    timeline: {
      eyebrow: "Quy trình thực hiện",
      title: "Bốn giai đoạn triển khai",
      lead: "Quy trình chuẩn Delta Energy áp dụng cho mọi hạng mục thuộc nhóm dịch vụ này.",
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
      title: "Cần khảo sát một hạng mục tương tự?",
      lead: "Gửi hiện trạng hoặc bản vẽ hệ thống, đội ngũ kỹ thuật Delta Energy sẽ khảo sát và đề xuất giải pháp phù hợp.",
      quote: "Gửi yêu cầu báo giá",
      call: "Gọi 1900 1234",
    },
  },
  faq: {
    kicker: "Trước khi liên hệ",
    title: "Câu hỏi thường gặp từ khách hàng",
    items: [
      {
        q: "Delta Energy cung cấp những dịch vụ nào?",
        a: "Chúng tôi cung cấp thiết bị công nghiệp chính hãng, giải pháp kỹ thuật theo yêu cầu, lắp đặt & nâng cấp hệ thống và bảo trì vận hành định kỳ cho nhà máy, công trình công nghiệp.",
      },
      {
        q: "Quy trình nhận báo giá mất bao lâu?",
        a: "Sau khi nhận yêu cầu, chúng tôi phản hồi trong ngày làm việc và gửi báo giá chi tiết sau khi khảo sát hiện trạng (nếu cần).",
      },
      {
        q: "Thiết bị có chính hãng không?",
        a: "Toàn bộ thiết bị do Delta Energy cung cấp đều có nguồn gốc rõ ràng, kèm chứng từ và bảo hành theo quy định nhà sản xuất.",
      },
      {
        q: "Có hỗ trợ bảo trì định kỳ không?",
        a: "Có. Chúng tôi xây dựng lịch bảo trì theo khuyến nghị của nhà sản xuất và điều kiện vận hành thực tế, giúp giảm thiểu thời gian ngừng máy.",
      },
      {
        q: "Làm thế nào để liên hệ?",
        a: "Quý khách có thể gọi hotline 1900 1234, nhắn Zalo hoặc gửi yêu cầu báo giá qua biểu mẫu trên trang. Lưu ý: trang hiện chưa hỗ trợ đặt mua trực tuyến.",
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
        cta: "Gọi 1900 1234",
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
          "Mô tả nhu cầu của Quý khách — thiết bị cần báo giá, quy mô, thời gian dự kiến…",
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
      generic:
        "Không gửi được yêu cầu. Quý khách vui lòng thử lại, hoặc gọi hotline 1900 1234 để được hỗ trợ.",
    },
  },
  finalCta: {
    title: "Sẵn sàng cho hệ thống vận hành ổn định hơn?",
    lead: "Gửi yêu cầu hôm nay, chúng tôi phản hồi trong ngày làm việc.",
    call: "Gọi tư vấn ngay — 1900 1234",
    zalo: "Nhắn Zalo →",
    note: "Phản hồi trong ngày làm việc · Báo giá minh bạch",
  },
  footer: {
    tagline:
      "Delta Energy cung cấp thiết bị, giải pháp kỹ thuật và dịch vụ hiện trường cho nhà máy và công trình công nghiệp — từ tư vấn, cung cấp thiết bị đến lắp đặt và bảo trì vận hành.",
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
          { href: "tel:19001234", label: "Hotline 1900 1234" },
          { href: "#contact", label: "Nhắn Zalo" },
          { href: "#contact", label: "Gửi yêu cầu báo giá" },
        ],
      },
    ],
    legal: "© 2026 Delta Energy · CÔNG TY TNHH DỊCH VỤ KỸ THUẬT DELTA ENERGY",
    values: "Kỹ thuật · Đáng tin cậy · Rõ ràng",
  },
};

export type Dictionary = typeof vi;
