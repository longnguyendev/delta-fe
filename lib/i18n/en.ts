import { company } from "@/constants/company";

import type { Dictionary } from "./vi";

/**
 * English copy. Typed against `Dictionary`, so it must mirror `vi.ts` exactly.
 * Same voice as the Vietnamese source: technical, plain-spoken, proof over
 * adjectives — no superlatives, no exclamation marks in headings.
 *
 * Contact facts come from `@/constants/company` for the same reason as `vi.ts`;
 * the legal name and addresses stay in Vietnamese in both locales.
 */
export const en: Dictionary = {
  meta: {
    title: "Delta Energy — Steel Structure Fabrication & Manufacturing",
    /* Kept under 160 characters — Google truncates the rest in most viewports. */
    description:
      "Delta Energy fabricates steel structures and metal components to drawings — frames, beams, columns and trusses for construction and industrial workshops.",
  },
  /** Shared — stands in for a field with no data in Strapi yet. */
  common: {
    updating: "Being updated",
  },
  nav: {
    label: "Main navigation",
    home: "Delta Energy — back to home page",
    items: [
      { href: "#solutions", label: "Solutions" },
      { href: "/services", label: "Services" },
      { href: "/projects", label: "Projects" },
      { href: "#faq", label: "FAQ" },
      { href: "#contact", label: "Contact" },
    ],
    call: `Call ${company.phone.display}`,
    openMenu: "Open menu",
    closeMenu: "Close menu",
    drawerLabel: "Navigation menu",
    languageLabel: "Select language",
    languageNames: { vi: "Tiếng Việt", en: "English" },
  },
  hero: {
    eyebrow: "Industrial steel fabrication",
    h1Pre: "A fabrication partner for ",
    h1Accent: "steel structures built to drawing",
    lead: "We manufacture and fabricate steel structures and metal components to design drawings — steel frames, beams, columns, trusses and auxiliary components for construction works and industrial workshops.",
    ctaPrimary: "Request a quote",
    ctaSecondary: "View capability profile",
    stats: [
      { value: "10+", label: "Years of experience" },
      { value: "150+", label: "Projects delivered" },
      { value: "40+", label: "Strategic partners" },
    ],
    imgAlt: "Technical drawing diagram on a 40px blueprint grid",
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
    kicker: "Common problems",
    title: "The wrong fabrication partner costs the whole project",
    lead: "Sound familiar? Left alone, these problems push schedule and cost further out of your control.",
    items: [
      {
        title: "Fabrication runs late",
        body: "A late fabrication handover drags the whole erection and finishing schedule behind it.",
      },
      {
        title: "Inconsistent quality",
        body: "Dimension errors and welds below requirement force rework, adding cost and time.",
      },
      {
        title: "Opaque quotes",
        body: "Quotes without clear material grades and quantities lead to hard-to-control extras during execution.",
      },
    ],
  },
  pillars: {
    kicker: "Why Delta Energy",
    title: "How we keep quality and schedule",
    lead: "Three pillars shape how Delta Energy takes on every order.",
    items: [
      {
        title: "One point of contact from drawing to handover",
        body: "Drawing intake → material preparation → fabrication → handover, handled end to end by one engineering team.",
      },
      {
        title: "Proof over adjectives",
        body: "10+ years of experience, 150+ projects delivered, 40+ strategic partners — the numbers are published on this page.",
      },
      {
        title: "To the agreed technical requirements",
        body: "Fabrication follows the drawings and specifications agreed, with dimension and weld checks at every stage before handover.",
      },
    ],
  },
  process: {
    kicker: "How we work",
    title: "From drawing to product in three steps",
    lead: "No step without inspection. No schedule left to drift.",
    items: [
      {
        title: "Intake & quote",
        body: "We take your drawings, check the technical requirements and quote with clear material grades and quantities.",
      },
      {
        title: "Materials & fabrication",
        body: "Steel sections and plates prepared to the bill of materials; cutting, drilling, welding and assembly to the agreed drawings.",
      },
      {
        title: "Inspection & handover",
        body: "Dimension, weld and surface checks before handover on the agreed schedule.",
      },
    ],
  },
  ctaBand: {
    title: "Need a quote for steel structure work?",
    lead: `Call the hotline on ${company.phone.display} — we reply during working hours.`,
    cta: "Call for advice",
  },
  services: {
    kicker: "Services",
    title: "Four core fabrication service lines",
    lead: "Each service line has its own process — and they all come back to one goal: product to drawing, on schedule.",
    readMore: "Read more →",
    items: [
      {
        kicker: "Service 01",
        title: "Steel structure manufacturing",
        body: "Manufacturing steel frames, beams, columns, trusses and structural components to design drawings for construction works and industrial workshops.",
        alt: "Illustration of a workshop steel frame with beams and columns",
      },
      {
        kicker: "Service 02",
        title: "Metal component fabrication",
        body: "Fabricating steel plate, steel sections and metal parts to the dimensions, specification and drawings required — from cutting and drilling through welding, assembly and finishing.",
        alt: "Illustration of steel plate fabrication with a cut line and drilled holes",
      },
      {
        kicker: "Service 03",
        title: "Industrial auxiliary steel fabrication",
        body: "Fabricating access platforms, steel stairs, handrails, supports and auxiliary metal components for factories, workshops and industrial works.",
        alt: "Illustration of an access platform and steel stairs",
      },
      {
        kicker: "Service 04",
        title: "Welding, assembly & finishing",
        body: "Welded connections, assembly and finishing of steel components to the technical requirements, meeting product quality and the handover schedule.",
        alt: "Illustration of welded steel component joints",
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
    viewAll: "View all projects →",
    /* No hard-coded `items` — the three cards come from Strapi; see
     * `components/projects.tsx`. */
  },
  projectsPage: {
    meta: {
      title: "Delivered projects",
      description:
        "Delta Energy capability profile: works in manufacturing and fabricating steel structures and metal components for construction and industrial workshops.",
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
      label: "Filter projects by category",
      all: "All",
      showing: "Showing",
      of: "of",
      unit: "projects",
      empty: "No projects in this category yet.",
    },
    card: { viewDetail: "View details" },
    featured: {
      eyebrow: "Featured project",
      metaLabels: {
        handover: "Handover date",
        location: "Location",
        category: "Category",
      },
      ctaPrimary: "Read the case study",
    },
    lifecycle: {
      eyebrow: "Delivery process",
      title: "Four core service groups",
      lead: "Every engagement runs through these four service groups — one point of responsibility end to end.",
      items: [
        {
          title: "Steel structure manufacturing",
          body: "Manufacturing steel frames, beams, columns, trusses and structural components to design drawings.",
        },
        {
          title: "Metal component fabrication",
          body: "Fabricating steel plate, steel sections and metal parts to the required dimensions, specification and drawings.",
        },
        {
          title: "Industrial auxiliary steel fabrication",
          body: "Fabricating access platforms, steel stairs, handrails, supports and auxiliary components for factories and workshops.",
        },
        {
          title: "Welding, assembly & finishing",
          body: "Welded connections, assembly and finishing of steel components to the technical requirements, on the handover schedule.",
        },
      ],
    },
    cta: {
      title: "Talk to us about your scope of work",
      lead: "Send your drawings or technical requirements and Delta Energy's team will review the fabrication approach and quote line by line.",
      quote: "Request a quote",
      call: `Call ${company.phone.display}`,
    },
  },
  projectDetail: {
    hero: {
      ctaQuote: "Request a quote for similar work",
      allProjects: "View all projects",
    },
    metaLabels: {
      category: "Category",
      location: "Location",
      sector: "Sector",
      status: "Status",
      handover: "Handover",
    },
    context: { eyebrow: "Background", title: "Project overview" },
    related: {
      eyebrow: "Related projects",
      title: "Other related works",
      linkLabel: "View details",
    },
    cta: {
      title: "Need a quote for similar work?",
      lead: "Send your drawings or technical requirements and Delta Energy's team will review the fabrication approach and quote accordingly.",
      quote: "Request a quote",
      call: `Call ${company.phone.display}`,
    },
  },
  servicesPage: {
    meta: {
      title: "Steel fabrication services",
      description:
        "Delta Energy's four fabrication services: steel structures, metal components, industrial auxiliary steel and welding, assembly & finishing.",
    },
    crumbs: { label: "You are here", home: "Home", current: "Services" },
    hero: {
      eyebrow: "Areas of operation",
      title: "Steel fabrication services",
      lead: "Four service groups that take a product from design drawing to handover — to the agreed technical specification, on schedule.",
      stats: [
        { value: "10+", label: "Years of experience" },
        { value: "150+", label: "Projects delivered" },
        { value: "40+", label: "Strategic partners" },
      ],
    },
    list: {
      eyebrow: "Four service groups",
      title: "From drawing to finished product",
      lead: "Delta Energy manufactures and fabricates steel structures and metal components for construction works and industrial workshops — one point of responsibility from drawing intake and material preparation through fabrication and handover.",
      viewDetail: "View service details",
    },
    products: {
      eyebrow: "Products by service group",
      title: "Steel structures & metal components",
      lead: "Products are organised by group and fabricated to the drawings and technical requirements of each order. Please contact us for a quote — the site does not support online ordering yet.",
      quote: "Request a quote",
    },
    commitments: {
      eyebrow: "Service commitments",
      title: "Three things Delta Energy holds to on every order",
      items: [
        {
          title: "To drawing and specification",
          body: "Components are fabricated to the agreed drawings, with dimension and weld checks at every stage.",
        },
        {
          title: "Materials of clear grade",
          body: "Steel sections, plate and input materials are checked for grade and specification against the order's bill of materials.",
        },
        {
          title: "On the agreed schedule",
          body: "The schedule is agreed before the order is accepted, with progress updates throughout fabrication.",
        },
      ],
    },
    cta: {
      title: "Need a quote for a service group?",
      lead: "Send your drawings or technical requirements and Delta Energy's team will review the fabrication approach and quote line by line.",
      quote: "Request a quote",
      call: `Call ${company.phone.display}`,
    },
  },
  serviceDetail: {
    hero: {
      eyebrow: "Service group",
      ctaQuote: "Request a quote for this service",
      allServices: "View all services",
    },
    metaLabels: {
      group: "Service group",
      scope: "Scope",
      equipment: "Materials",
      acceptance: "Acceptance",
      handover: "Handover",
    },
    context: { eyebrow: "Scope of work" },
    scope: {
      eyebrow: "Four work items",
      title: "What Delta Energy delivers in this service group",
      lead: "From drawing intake and material preparation through fabrication and handover — every step carries checks and clear acceptance standards.",
    },
    system: { eyebrow: "Materials & items covered" },
    timeline: {
      eyebrow: "Delivery process",
      title: "Four delivery stages",
      lead: "The standard Delta Energy process applied to every order in this service group.",
    },
    projects: {
      eyebrow: "Delivered projects",
      title: "Work in the same service group",
      linkLabel: "Read the case study",
    },
    others: {
      eyebrow: "Related services",
      title: "Other service groups",
      viewDetail: "View service details",
    },
    cta: {
      title: "Need a quote for similar work?",
      lead: "Send your drawings or technical requirements and Delta Energy's team will review the fabrication approach and quote accordingly.",
      quote: "Request a quote",
      call: `Call ${company.phone.display}`,
    },
  },
  /**
   * Per-service meta, keyed by slug. The entity copy in `lib/data/services.ts`
   * is Vietnamese-only, so `/en/services/*` reads its title and description
   * here while the page body stays in the entity language.
   */
  servicePageMeta: {
    "ket-cau-thep": {
      title: "Steel structure manufacturing",
      description:
        "Manufacturing steel frames, beams, columns, trusses and structural components to design drawings for construction works and industrial workshops.",
    },
    "cau-kien-kim-loai": {
      title: "Metal component fabrication",
      description:
        "Fabricating steel plate, steel sections and metal parts to the drawings required — from cutting and drilling through welding, assembly and finishing.",
    },
    "ket-cau-phu-tro": {
      title: "Industrial auxiliary steel fabrication",
      description:
        "Fabricating access platforms, steel stairs, handrails, supports and auxiliary metal components for factories, workshops and industrial works.",
    },
    "han-lap-rap": {
      title: "Welding, assembly & finishing",
      description:
        "Welded connections, assembly and finishing of steel components to the technical requirements, meeting product quality and the handover schedule.",
    },
  },
  faq: {
    kicker: "Before you get in touch",
    title: "Frequently asked questions",
    items: [
      {
        q: "What products and services does Delta Energy provide?",
        a: "We focus on manufacturing and fabricating steel structures and metal components for construction and industry. Products are made to the drawings, specifications and technical requirements of each project.",
      },
      {
        q: "Do you fabricate to customer drawings?",
        a: "Yes. We take your technical drawings and requirements and review the fabrication feasibility, the method of execution and a suitable quotation.",
      },
      {
        q: "How does Delta Energy control product quality?",
        a: "Quality is controlled against the technical requirements and the criteria agreed in the contract, covering material, dimension, weld and finish inspection within the scope of each order.",
      },
      {
        q: "How long does fabrication and order completion take?",
        a: "Lead time depends on the volume, the complexity of the product, material availability and the technical requirements. A firm schedule is confirmed after we review the documents and agree it with you.",
      },
      {
        q: "What information do I need to provide for a quote?",
        a: "You should provide drawings, product specification and dimensions, material type, quantity, surface finish requirements and the delivery location. If your drawings are not final yet, we can talk first to work out what is needed.",
      },
      {
        q: "How do I get in touch and work with Delta Energy?",
        a: `You can call the hotline on ${company.phone.display}, email ${company.email.address}, or leave a request on the website. We receive it, discuss the technical requirements and review a suitable way to work together.`,
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
        cta: `Call ${company.phone.display}`,
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
          "Describe your requirement — scope to quote, drawings, quantity, expected timing…",
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
      generic: `We couldn't send your request. Please try again, or call the hotline ${company.phone.display} for help.`,
    },
  },
  finalCta: {
    title: "Looking for a reliable steel fabrication partner?",
    lead: "Contact Delta Energy for advice on a solution that fits your technical requirements and project schedule.",
    call: `Call for advice — ${company.phone.display}`,
    zalo: "Message on Zalo →",
    note: "Reply within the working day · Transparent pricing",
  },
  /** Floating contact buttons — icon-only, so the label lives in `aria-label`. */
  floatingActions: {
    call: `Call the Delta Energy hotline ${company.phone.display}`,
    zalo: "Message Delta Energy on Zalo",
  },
  /** 404 page — localised; the Next.js default is English-only. */
  notFound: {
    title: "Page not found",
    body: "The address does not exist or has changed. You can return to the home page or contact us for help.",
    backHome: "Back to home",
  },
  footer: {
    tagline:
      "Delta Energy manufactures and fabricates steel structures and metal components to design drawings — steel frames, beams, columns, trusses and auxiliary components for construction works and industrial workshops.",
    /** Labels for the company-information block — values live in `@/constants/company`. */
    info: {
      headOffice: "Head office",
      workshop: "Workshop",
      email: "Email",
      taxCode: "Tax code",
      workingHours: "Working hours",
    },
    cols: [
      {
        heading: "Navigation",
        links: [
          { href: "#solutions", label: "Solutions" },
          { href: "/services", label: "Services" },
          { href: "#projects", label: "Projects" },
          { href: "#faq", label: "FAQ" },
        ],
      },
      {
        heading: "Company",
        links: [
          { href: "#solutions", label: "About" },
          { href: "/projects", label: "Capability profile" },
          { href: "#contact", label: "Contact" },
        ],
      },
      {
        heading: "Contact",
        links: [
          {
            href: company.phone.href,
            label: `Hotline ${company.phone.display}`,
          },
          { href: company.zalo.href, label: "Message on Zalo" },
          { href: "#contact-form", label: "Send a quote request" },
        ],
      },
    ],
    legal: `© 2026 Delta Energy · ${company.legalName}`,
    values: "Engineering · Reliable · Clear",
  },
};
