---
name: "Delta Energy"
category: Brands
surface: web
colors:
  canvas: "#ffffff"
  alt-surface: "#f7f9fa"
  ink: "#1f2937"
  ink-soft: "#4b5563"
  line: "#e5e7eb"
  lime: "#7cb342"
  lime-dark: "#5e8c31"
---

# Delta Energy

> Category: Brands

> Surface: web

*Dịch vụ & Giải pháp Kỹ thuật Công nghiệp*

Delta Energy (CÔNG TY TNHH DỊCH VỤ KỸ THUẬT DELTA ENERGY) is an industrial technical-services company. It supplies equipment, engineering solutions and field services to factories and industrial works — from solution consulting and equipment supply to installation and maintenance. The website is a capability-and-trust site: it introduces the company, its four service lines, its product categories, delivered projects and news, and funnels visitors to a hotline / Zalo / quote-request form.

## Color Palette

| Role | Name | Hex | Usage |
| --- | --- | --- | --- |
| background | Canvas | `#ffffff` | Page canvas and card fill (--bg). Body copy sits on this at 14.7:1. |
| surface | Alt surface | `#f7f9fa` | Alternating section band, hero backdrop, product/project/news thumbnails and form inputs (--bg-alt). |
| foreground | Ink | `#1f2937` | Headings, body text, outlines and the footer band (--ink). 14.7:1 on canvas. |
| muted | Ink soft | `#4b5563` | Lead paragraphs, nav links, captions, metadata and footer sub-copy (--ink-soft). 7.6:1 on canvas. |
| border | Line | `#e5e7eb` | 1px rules, card outlines, the 40px hero blueprint grid and section dividers (--line). |
| accent | Lime | `#7cb342` | Primary action fill, metric numerals, illustration highlights and focus rings (--lime). Pair with ink #12200A text (6.8:1), not white (2.5:1). |
| accent-secondary | Lime dark | `#5e8c31` | Secondary accent: eyebrow labels, inline links, icons and the call FAB; also the primary button hover fill (--lime-dark). 3.98:1 on canvas — see the accessibility caveat in BRAND.md. |

## Typography
- **Display:** Montserrat — weights 700, 800 — fallbacks: system-ui, -apple-system, Segoe UI, Helvetica Neue, Arial, sans-serif (Measured: --font-head on the live site, loaded from Google Fonts as Montserrat 700;800. Applied to h1-h4, .brand, .eyebrow (700), stat numerals, .hero-stats strong, .about-metrics strong and footer .foot-brand. Headings run at weight 800 with letter-spacing -0.01em.)
- **Body:** Inter — weights 400, 500, 600 — fallbacks: system-ui, -apple-system, Segoe UI, Helvetica Neue, Arial, sans-serif (Measured: --font-body on the live site, loaded as Inter 400;500;600. Base 16px / line-height 1.6. Buttons and labels use 600, nav links and sub-copy 500, paragraphs 400.)
- **Mono:** JetBrains Mono — weights 400, 500 — fallbacks: ui-monospace, SFMono-Regular, Menlo, monospace (Not used on the live site. Carried over from the source DESIGN.md the user supplied (families: primary=Playfair Display, display=Playfair Display, mono=JetBrains Mono) because that file names JetBrains Mono as the system's mono face for code, part numbers and spec tables. Supplement, not a measured site token.)

## Voice & Tone

- **Adjectives:** technical, dependable, plain-spoken, industrial, response-oriented
- **Tone:** Vietnamese B2B register. The company speaks as "Delta Energy" or "chúng tôi" and addresses the reader as "khách hàng" / "đối tác" / "Quý khách". Sentences are short and declarative and lead with capability, not adjectives. Eyebrow labels are ALL-CAPS Vietnamese ("GIẢI PHÁP KỸ THUẬT CÔNG NGHIỆP", "HỒ SƠ NĂNG LỰC"); headlines are a single clause of roughly 6–10 words with the operative phrase set in lime, e.g. "Đối tác kỹ thuật cho vận hành công nghiệp bền vững" and "Delta Energy — kỹ thuật đúng chuẩn, vận hành ổn định". CTAs are imperative and concrete: "Nhận báo giá", "Gọi tư vấn ngay", "Xem hồ sơ năng lực", "Gửi yêu cầu báo giá", "Đọc thêm". No emoji, no exclamation marks in headings, no hype superlatives. Missing capability is stated plainly — "trang hiện chưa hỗ trợ đặt mua trực tuyến" — rather than glossed over.

### Messaging pillars
- Full-lifecycle partner: tư vấn giải pháp → cung cấp thiết bị → lắp đặt → bảo trì vận hành, run by one accountable engineering team.
- Proof over adjectives: 10+ năm kinh nghiệm, 150+ dự án hoàn thành, 40+ đối tác chiến lược, shown as a three-figure stat row in the hero and repeated in the About block.
- Uptime is the promise: "giảm thiểu thời gian ngừng máy", "vận hành liên tục 24/7", "an toàn và hiệu quả".
- Direct contact, always one tap away: hotline 1900 1234, Zalo chat and a quote form answered with "Delta Energy sẽ liên hệ lại với bạn sớm nhất".

### Vocabulary
- **Use:** Delta Energy, giải pháp kỹ thuật, thiết bị chính hãng, bảo trì vận hành, hồ sơ năng lực, nhà máy, công trình công nghiệp, tư vấn, báo giá
- **Avoid:** giải pháp toàn diện, đột phá, số 1 Việt Nam, cam kết 100%, emoji in buttons or labels, generic core-values copy, lorem ipsum

## Imagery

- **Style:** Illustration-only, technical-drawing language. Every visual on the site is a flat geometric SVG: thin strokes (1.5–5px), no gradients, no shadows, no rounded corners beyond 2px, no photography anywhere. The palette is strictly two-tone — ink #1F2937 as line and mass, lime #7CB342 as the single highlight — drawn on the alt surface #F7F9FA (#EDF0F2 behind project thumbs). The hero sits on a 40px blueprint grid drawn with repeating-linear-gradient, which is the brand's signature backdrop.
- **Subjects:** Industrial plants and factory blocks rendered as stacked rectangular masses, Pumps, control valves, pressure gauges and electrical control cabinets, Process piping, system schematics and instrument dials with radial ticks, Site handover, periodic maintenance and calibration of instrumentation
- **Treatment:** Orthographic, front-facing, no perspective. Masses are flat fills at 8–85% ink or lime opacity; outlines are 3–5px. Lime is reserved for exactly one element per composition (the live module, the moving part, the highlighted bar) while the rest stays ink at reduced opacity. Product and project thumbs scale to 1.05 on card hover over 300ms; the call FAB pulses with a 2.2s ring keyframe that is disabled under prefers-reduced-motion.
- **Avoid:** Stock photography of people, hard hats or handshakes, Glossy 3D renders, bevels, drop shadows and gradients, Emoji or decorative icon rows used as illustration, Purple/violet accents or any hue outside ink + lime, Raster screenshots of UI chrome

## Layout

- **Radius:** 3px
- **Border weight:** 1px
- **Spacing:** 8px baseline grid

### Posture rules
- Container: .wrap is max-width 1180px with 24px side padding. Sections breathe at 88px vertical, 56px below 768px.
- Section rhythm alternates canvas #FFFFFF with band #F7F9FA, and every band is closed by 1px #E5E7EB rules — never by shadow or extra radius.
- Grids: services and products 4-up, projects and news 3-up, hero 1.05fr/0.95fr, about 0.9fr/1.1fr, contact 1fr/1.05fr, footer 1.3fr/1fr/1fr/1fr. They collapse 4-up → 2-up at 900px → 1-up at 560px.
- Elevation is flat. One shadow exists in the entire system — the 54px floating action buttons at 0 6px 18px rgba(0,0,0,.22). Cards are separated by 1px borders only.
- Radii stay at 3px for cards, buttons, inputs, thumbs and the sticky header; only the FAB and footer social buttons are circular.
- Sticky header is 76px tall, opaque canvas with a 1px bottom rule. Under 900px the nav becomes a full-height off-canvas drawer sliding in over 220ms.
- One shared tempo: 150ms ease for background/color/border, 220ms for the drawer, 300ms for the 1.05 image scale, 500ms for the .reveal translateY(14px) entrance. Nothing bounces or springs.
- Focus-visible is a 2px lime outline at 2px offset; inputs take a 2px lime outline at 1px offset plus a lime border. Outlines are never removed.
- Buttons: 13px/26px padding at 15px/600 (≈50px tall) and .btn-sm at 9px/18px and 13.5px (≈42px). Normalize anything new to a 44px minimum hit target.
- Contrast caveat — fix, do not copy: #5E8C31 small text on canvas is 3.98:1 and the primary button's hover state swaps to white on #5E8C31 (3.98:1), a decrease from the 6.78:1 resting state. Use #557F2C (4.71:1 both directions) for small lime text and for the hover fill. #D7DBDF and lighter are the only text tones allowed on the #1F2937 footer band.
- Motion honours prefers-reduced-motion: the FAB ring keyframe stops; keep the .reveal entrance but make it opacity-only.
