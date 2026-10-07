import type { Dictionary } from "./vi";

/**
 * English copy. Typed against `Dictionary`, so it must mirror `vi.ts` exactly.
 * Same voice as the Vietnamese source: technical, plain-spoken, proof over
 * adjectives — no superlatives, no exclamation marks in headings.
 */
export const en: Dictionary = {
  meta: {
    title: "Delta Energy — Industrial Engineering Services & Solutions",
    description:
      "Delta Energy (CÔNG TY TNHH DỊCH VỤ KỸ THUẬT DELTA ENERGY) supplies equipment, engineering solutions and field services for factories and industrial facilities — from solution consulting and equipment supply through installation and maintenance.",
  },
  nav: {
    label: "Main navigation",
    home: "Delta Energy — back to top",
    items: [
      { href: "#solutions", label: "Solutions" },
      { href: "#services", label: "Services" },
      { href: "/projects", label: "Projects" },
      { href: "#faq", label: "FAQ" },
      { href: "#contact", label: "Contact" },
    ],
    call: "Call 1900 1234",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    drawerLabel: "Navigation menu",
    languageLabel: "Select language",
    languageNames: { vi: "Tiếng Việt", en: "English" },
  },
  hero: {
    eyebrow: "Industrial engineering services",
    h1Pre: "A technical partner for ",
    h1Accent: "sustainable industrial operations",
    lead: "We supply genuine equipment, engineering solutions and field services for factories and industrial facilities — from solution consulting and equipment supply through installation and maintenance.",
    ctaPrimary: "Request a quote",
    ctaSecondary: "View capability profile",
    stats: [
      { value: "10+", label: "Years of experience" },
      { value: "150+", label: "Projects delivered" },
      { value: "40+", label: "Strategic partners" },
    ],
    imgAlt: "Technical system diagram on a 40px blueprint grid",
  },
  trust: {
    line: "Trusted by 40+ strategic partners",
    sectors: [
      "Energy",
      "Manufacturing",
      "Food & Beverage",
      "Chemicals",
      "Warehousing & Logistics",
    ],
  },
  problem: {
    kicker: "Operational issues",
    title: "Every hour of downtime has a cost",
    lead: "Sound familiar? Left alone, these problems quietly erode your plant's operating performance.",
    items: [
      {
        title: "Unplanned downtime",
        body: "A small fault left untreated escalates into unplanned downtime, costing output and pushing delivery schedules back.",
      },
      {
        title: "Maintenance costs hard to forecast",
        body: "Equipment without a periodic maintenance schedule fails without warning, and the repair costs that follow are hard to control.",
      },
      {
        title: "Equipment of unknown origin",
        body: "Non-genuine equipment carries safety risk, shortens system service life and comes with no technical support from the manufacturer.",
      },
    ],
  },
  pillars: {
    kicker: "Why Delta Energy",
    title: "How we solve operational problems",
    lead: "Three pillars shape the way Delta Energy works with every customer.",
    items: [
      {
        title: "A full-lifecycle partner",
        body: "Solution consulting → equipment supply → installation → maintenance, handled end to end by one engineering team.",
      },
      {
        title: "Proof over adjectives",
        body: "10+ years of experience, 150+ projects delivered, 40+ strategic partners — the numbers are published on this page.",
      },
      {
        title: "Continuous operation is the commitment",
        body: "Minimise downtime and keep systems running 24/7 — safely and efficiently, on every site.",
      },
    ],
  },
  process: {
    kicker: "How we work",
    title: "Stable operations in three steps",
    lead: "No production interruption. No projects that drag on for months.",
    items: [
      {
        title: "Survey & consult",
        body: "Our engineers survey the site, listen to your operating requirements and propose a suitable solution.",
      },
      {
        title: "Quote & supply",
        body: "Transparent pricing, genuine equipment, a clear delivery schedule.",
      },
      {
        title: "Install & hand over",
        body: "Installation, commissioning and handover to operations, with technical support after handover.",
      },
    ],
  },
  ctaBand: {
    title: "Need advice on your system right now?",
    lead: "Call the hotline on 1900 1234 — we reply during working hours.",
    cta: "Call for advice",
  },
  services: {
    kicker: "Services",
    title: "Four core engineering service lines",
    lead: "Each service line has its own process — and they all come back to one goal: continuous operation.",
    readMore: "Read more →",
    items: [
      {
        kicker: "Service 01",
        title: "Genuine industrial equipment supply",
        body: "Equipment with clear provenance, supplied with documentation and the manufacturer's warranty — pumps, control valves, instrumentation and system accessories.",
        alt: "Illustration of an industrial pump and piping assembly",
      },
      {
        kicker: "Service 02",
        title: "Engineering solutions to requirement",
        body: "We survey the site, analyse operating requirements and propose an engineering solution suited to each industrial facility.",
        alt: "Industrial technical system diagram",
      },
      {
        kicker: "Service 03",
        title: "System installation & upgrade",
        body: "Installation, wiring and upgrade of electrical, piping and equipment systems — inspected and commissioned before handover.",
        alt: "Illustration of a control electrical system upgrade",
      },
      {
        kicker: "Service 04",
        title: "Periodic maintenance & operation",
        body: "Maintenance scheduled to manufacturer recommendations and actual operating conditions, reducing downtime and extending equipment service life.",
        alt: "Illustration of periodic rig maintenance",
      },
    ],
  },
  statsBand: {
    items: [
      { value: "10+", label: "Years of experience" },
      { value: "150+", label: "Projects delivered" },
      { value: "40+", label: "Strategic partners" },
      { value: "24/7", label: "Technical support" },
    ],
  },
  projects: {
    kicker: "Capability profile",
    title: "Projects handed over on real sites",
    lead: "Results from work we have actually delivered — in numbers, not adjectives.",
    readMore: "Read more →",
    items: [
      {
        tag: "Industrial electrical",
        title: "Control electrical system upgrade",
        body: "Replaced ageing control cabinets, re-wired and commissioned the full electrical system for a production line.",
        alt: "Illustration of a control electrical system upgrade project",
      },
      {
        tag: "Industrial equipment",
        title: "Pump skid & piping supply",
        body: "Supplied and installed a pump skid together with the piping system for a processing plant.",
        alt: "Illustration of a pump skid and piping supply project",
      },
      {
        tag: "Maintenance",
        title: "Periodic rig maintenance",
        body: "Scheduled and carried out periodic rig maintenance to the manufacturer's recommendations.",
        alt: "Illustration of a periodic rig maintenance project",
      },
    ],
  },
  projectsPage: {
    meta: {
      title: "Delivered projects — Delta Energy",
      description:
        "Delta Energy capability profile: representative works in pumping, process piping, control cabinets and maintenance of valve and instrument systems for industrial plants.",
    },
    crumbs: { label: "You are here", home: "Home", current: "Projects" },
    hero: {
      eyebrow: "Capability profile",
      title: "Delivered projects",
      lead: "A selection of representative works Delta Energy has delivered with partners across the industrial sector.",
      stats: [
        { value: "10+", label: "Years of experience" },
        { value: "150+", label: "Projects delivered" },
        { value: "40+", label: "Strategic partners" },
      ],
    },
    filters: {
      label: "Filter projects by service group",
      all: "All",
      categories: {
        "tu-van": "Solution consulting",
        "thiet-bi": "Equipment & materials",
        "lap-dat": "Installation & operation",
        "bao-tri": "Maintenance & repair",
      },
      showing: "Showing",
      of: "of",
      unit: "projects",
      empty: "No projects in this service group yet.",
    },
    card: { viewDetail: "View details" },
    featured: {
      eyebrow: "Featured project",
      metaLabels: {
        handover: "Handover date",
        location: "Location",
        serviceGroup: "Service group",
      },
      ctaPrimary: "Read the case study",
    },
    lifecycle: {
      eyebrow: "Delivery process",
      title: "Four core service groups",
      lead: "Every engagement runs through these four service groups — one point of responsibility end to end.",
      items: [
        {
          title: "Engineering solution consulting",
          body: "Survey the existing system and propose the best technical and cost-effective solution for each project.",
        },
        {
          title: "Equipment & technical materials",
          body: "Supply genuine equipment, spare parts and technical materials to the correct specification for each system.",
        },
        {
          title: "System installation & operation",
          body: "Carry out installation, commissioning and handover to the technical standards agreed for the project.",
        },
        {
          title: "System maintenance & repair",
          body: "Periodic maintenance, fault response and industrial equipment repair that minimise plant downtime.",
        },
      ],
    },
    cta: {
      title: "Talk to us about your scope of work",
      lead: "Send us the current condition or system drawings and Delta Energy's engineering team will survey and propose a suitable solution.",
      quote: "Request a quote",
      call: "Call 1900 1234",
    },
  },
  projectDetail: {
    hero: {
      ctaQuote: "Request a quote for similar work",
      allProjects: "View all projects",
    },
    metaLabels: {
      scope: "Scope",
      location: "Location",
      sector: "Sector",
      status: "Status",
      handover: "Handover",
    },
    context: { eyebrow: "Background", title: "What the owner needed" },
    scope: {
      eyebrow: "Scope of work",
      title: "What Delta Energy delivered",
      lead: "From survey and equipment supply through installation to handover and maintenance guidance — one point of responsibility end to end.",
    },
    solution: {
      eyebrow: "Engineering solution",
      title: "The approach Delta Energy proposed",
    },
    timeline: {
      eyebrow: "Delivery timeline",
      title: "Key project milestones",
      lead: "The phases of the standard Delta Energy process applied to this scope of work.",
    },
    outcomes: {
      eyebrow: "Handover results",
      title: "What Delta Energy committed to",
      lead: "Three results Delta Energy commits to for this scope of work.",
    },
    related: {
      eyebrow: "Related projects",
      title: "Other related works",
      linkLabel: "View details",
    },
    cta: {
      title: "Need a survey for similar work?",
      lead: "Send us the current condition or system drawings and Delta Energy's engineering team will survey and propose a suitable solution.",
      quote: "Request a quote",
      call: "Call 1900 1234",
    },
  },
  faq: {
    kicker: "Before you get in touch",
    title: "Frequently asked questions",
    items: [
      {
        q: "What services does Delta Energy provide?",
        a: "We supply genuine industrial equipment, engineering solutions to requirement, system installation and upgrades, and periodic maintenance for factories and industrial facilities.",
      },
      {
        q: "How long does a quote take?",
        a: "We respond within the working day of receiving your request, and send a detailed quote after surveying the site where one is needed.",
      },
      {
        q: "Is the equipment genuine?",
        a: "All equipment supplied by Delta Energy has clear provenance, with documentation and warranty under the manufacturer's terms.",
      },
      {
        q: "Do you support periodic maintenance?",
        a: "Yes. We build the maintenance schedule around manufacturer recommendations and actual operating conditions, which helps reduce downtime.",
      },
      {
        q: "How do I get in touch?",
        a: "You can call the hotline on 1900 1234, message us on Zalo, or send a quote request through the form on this page. Note: the site does not support online ordering yet.",
      },
    ],
  },
  contact: {
    kicker: "Contact",
    title: "Get a quote within the working day",
    lead: "Three ways to reach us — pick whichever suits you best.",
    badge: "Fastest response",
    items: [
      {
        title: "Quote by hotline",
        body: "Talk directly to an engineer about your requirements.",
        cta: "Call 1900 1234",
      },
      {
        title: "Advice via Zalo",
        body: "Send a description and photos of the site on Zalo — we reply as soon as we can.",
        cta: "Message on Zalo",
      },
      {
        title: "Send a quote request",
        body: "Fill in the request form and we will send a detailed quote within the working day.",
        cta: "Send request",
      },
    ],
    footnote:
      "The site does not support online ordering yet. Please contact us by hotline, Zalo, or the form below to receive a quote.",
  },
  contactForm: {
    panel: {
      brand: "Delta Energy",
      title: "Delta Energy — fast replies, clear quotes",
      bullets: [
        "Reply within the working day",
        "Line-item quotes with clear detail",
        "Engineering support through rollout",
      ],
    },
    form: {
      title: "Send a quote request",
      support:
        "Fill in your details and we will send a detailed quote within the working day.",
      name: {
        label: "Full name",
        placeholder: "Jane Doe",
        required: "Please enter your name.",
      },
      email: {
        label: "Email",
        placeholder: "you@company.com",
        required: "Please enter your email.",
        invalid: "That email doesn't look right — try name@company.com.",
      },
      phone: {
        label: "Phone number",
        placeholder: "0901 234 567",
        optional: "Optional",
        invalid:
          "That phone number doesn't look right — try 0901 234 567 or +84 901 234 567.",
      },
      message: {
        label: "What do you need?",
        placeholder:
          "Describe your requirement — equipment to quote, scale, expected timing…",
        required: "Please describe your request.",
      },
      submit: "Send request",
      submitting: "Sending…",
      privacy:
        "The details you provide are used to contact you and send your quote.",
    },
    success: {
      title: "Request received",
      body: "We reply within the working day and send a detailed quote based on what you shared.",
      reset: "Send another request",
    },
    error: {
      generic:
        "We couldn't send your request. Please try again, or call the hotline 1900 1234 for help.",
    },
  },
  finalCta: {
    title: "Ready for more stable operations?",
    lead: "Send your request today — we reply within the working day.",
    call: "Call for advice — 1900 1234",
    zalo: "Message on Zalo →",
    note: "Reply within the working day · Transparent pricing",
  },
  footer: {
    tagline:
      "Delta Energy supplies equipment, engineering solutions and field services for factories and industrial facilities — from consulting and equipment supply through installation and maintenance.",
    cols: [
      {
        heading: "Navigation",
        links: [
          { href: "#solutions", label: "Solutions" },
          { href: "#services", label: "Services" },
          { href: "#projects", label: "Projects" },
          { href: "#faq", label: "FAQ" },
        ],
      },
      {
        heading: "Company",
        links: [
          { href: "#projects", label: "About" },
          { href: "#projects", label: "Capability profile" },
          { href: "#contact", label: "Contact" },
        ],
      },
      {
        heading: "Contact",
        links: [
          { href: "tel:19001234", label: "Hotline 1900 1234" },
          { href: "#contact", label: "Message on Zalo" },
          { href: "#contact", label: "Send a quote request" },
        ],
      },
    ],
    legal: "© 2026 Delta Energy · CÔNG TY TNHH DỊCH VỤ KỸ THUẬT DELTA ENERGY",
    values: "Engineering · Reliable · Clear",
  },
};
