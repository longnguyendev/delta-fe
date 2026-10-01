# Delta Energy — Brand Guide

**Delta Energy** · CÔNG TY TNHH DỊCH VỤ KỸ THUẬT DELTA ENERGY
Source: <https://longnguyendev.github.io/demo3> · Brand id `longnguyendev-202055` · Registered design system `user:longnguyendev-github-io`

A prose guide an autonomous design agent can follow without re-reading the site. Every value below was measured from the live page (rendered CSS custom properties, markup, and computed contrast), not inferred from a screenshot.

---

## 1. Provenance and what was corrected

The provisional registration for this project was built from the pasted `context/input-DESIGN.md`, which is a generic style-family seed (category "Themed & Unique", "Agentic", primary `#FF5701`, secondary `#F6F6F1`, display `Playfair Display`). **None of those values exist on the live site.** The live page defines its entire visual language in a single `:root` block:

```css
--lime:#7CB342; --lime-dark:#5E8C31; --lime-light:#EDF5E4;
--ink:#1F2937;  --ink-soft:#4B5563;  --line:#E5E7EB;
--bg:#FFFFFF;   --bg-alt:#F7F9FA;    --radius:3px;
--font-head:'Montserrat',sans-serif; --font-body:'Inter',sans-serif;
```

This enrichment therefore replaces the provisional brand name, palette, typography, radius and spacing with measured truth. The pasted file is still honoured where it does not contradict measurement — it is the source for the mono face (JetBrains Mono) and for the warning/error state colours carried in `brand.json.seed`. If you deliberately want the orange/Playfair style family instead, say so and it can be re-applied; it is a style direction, not this site's brand.

Also corrected by measurement: the site has **no favicon, no apple-touch-icon and no `og:image`** (all three URLs 404), so there is no raster mark to harvest — the logo is the inline clip-path mark in the header.

---

## 2. Colour

Strictly ink + lime on white. No hue outside this set appears anywhere on the site except Zalo's own `#0068FF` on the third-party chat FAB, which is not a brand token.

| Role | Name | Hex | OKLch | Contrast (WCAG) |
| --- | --- | --- | --- | --- |
| background | Canvas | `#ffffff` | `oklch(100% 0 0)` | — |
| surface | Alt surface | `#f7f9fa` | `oklch(98.1% 0.0025 228.8)` | — |
| foreground | Ink | `#1f2937` | `oklch(27.8% 0.0296 256.8)` | 14.68:1 on canvas |
| muted | Ink soft | `#4b5563` | `oklch(44.6% 0.0263 256.8)` | 7.56:1 on canvas · 7.16:1 on band |
| border | Line | `#e5e7eb` | `oklch(92.8% 0.0058 264.5)` | rule / grid only |
| accent | Lime | `#7cb342` | `oklch(70.5% 0.1553 131.4)` | `#12200A` on lime = 6.78:1 |
| accent-secondary | Lime dark | `#5e8c31` | `oklch(58.7% 0.1314 132.1)` | 3.98:1 on canvas · 3.98:1 white on it |

Supporting values measured on the page (not new roles): `#EDF5E4` lime tint for the form-success banner, `#12200A` is the ink used **on** the lime button, `#D7DBDF` / `#B9BFC5` / `#9CA3AF` / `#8A9096` are the footer's light text tones on `#1F2937`, `#0D1012` is the dark-theme footer, and `#EDF0F2` sits behind project thumbnails.

### Usage rules

- Lime is a **signal**, never a wash. One lime element per composition: the primary button, the eyebrow label, the metric numerals, or the single highlighted bar in an illustration.
- Lime fills always carry ink text (`#12200A`), never white — white on lime is 2.50:1 and fails.
- Neutral text never goes lighter than `#4B5563` on canvas. On the `#1F2937` footer band, `#D7DBDF` is the ceiling.
- Depth comes from 1px `#E5E7EB` rules and alternating bands, not from shadows or extra radii.

### Accessibility finding to fix (recorded, not copied)

The live site's small lime text (`#5E8C31` eyebrows, links, `.tag`, `.news-link`) is **3.98:1** on canvas — below AA 4.5:1 for 11.5–13.5px text. The primary button also *loses* contrast on hover: `#12200A` on `#7CB342` (6.78:1) becomes white on `#5E8C31` (3.98:1). Use **`#557F2C`** for both (4.71:1 on canvas, and 4.71:1 for white-on-fill) when the token is regenerated, and keep the hover state at least as legible as the rest state.

---

## 3. Typography

| Slot | Family | Weights | Source |
| --- | --- | --- | --- |
| Display | **Montserrat** | 700, 800 | measured `--font-head`, Google Fonts |
| Body | **Inter** | 400, 500, 600 | measured `--font-body`, Google Fonts |
| Mono | JetBrains Mono | 400, 500 | carried from the supplied DESIGN.md; not on the live site |

- Headings `h1–h4` are Montserrat **800**, `letter-spacing: -0.01em`. Hero `clamp(32px, 4.6vw, 50px)/1.12`; section heads `clamp(26px, 3.4vw, 36px)/1.2`; card heads 15.5–17px.
- Eyebrows are Montserrat **700**, 13px, uppercase Vietnamese, `#5E8C31`.
- Body is Inter 400 at 16px / 1.6; lead paragraphs `#4B5563` at 17px capped to 480–540px measure.
- Buttons and labels are Inter **600**; nav links and sub-copy Inter **500**.
- Stat numerals are Montserrat 800 at 26–28px in lime-dark.
- Fallback stack everywhere: `system-ui, -apple-system, 'Segoe UI', Helvetica Neue, Arial, sans-serif`.

---

## 4. Logo

The mark is a **delta**: a 34×34 box clipped to `polygon(30% 0, 100% 0, 60% 100%, 0 100%)` in `#1F2937` with a lime notch `polygon(30% 0, 100% 0, 78% 55%, 40% 55%)`. The lockup pairs it with `DELTA ENERGY` in Montserrat 800 19px over the 10.5px Inter 500 line `Dịch vụ & Giải pháp Kỹ thuật` in `#4B5563`.

| File | Use |
| --- | --- |
| `logos/delta-energy-lockup.svg` | **Primary.** Horizontal lockup on light surfaces. |
| `logos/delta-energy-mark.svg` | Mark alone — favicons, app tiles, avatar slots. |
| `logos/delta-energy-lockup-light.svg` | Lockup for dark surfaces (#1F2937 / #0D1012). |
| `logos/delta-energy-wordmark.svg` | Two-line wordmark without the mark. |
| `logos/delta-energy-logo-square.jpg` | 1654×1654 asset supplied by the user (`assets/LOGO.jpg`). |

Clear space is one mark-width on all sides; never re-colour the lime notch, never outline or add a shadow, never set the wordmark in anything but Montserrat 800.

---

## 5. Imagery

**Illustration-only.** The site contains zero photographs. Every image is a flat, geometric, two-tone SVG drawn on `#F7F9FA` with ink `#1F2937` masses and exactly one lime `#7CB342` highlight.

- **Subjects:** factory blocks as stacked rectangles, pumps, control valves, pressure gauges, control cabinets, process piping, instrument dials.
- **Treatment:** orthographic and front-facing, no perspective; strokes 3–5px; fills at 8–85% opacity; no gradients, no shadows, no rounded corners beyond 2px.
- **Signature backdrop:** a 40px blueprint grid built from two `repeating-linear-gradient`s in `#E5E7EB` over the hero band — reuse it for any hero-scale surface.
- **Motion on imagery:** thumbs scale to 1.05 over 300ms on card hover.
- **Avoid:** stock photos of people in hard hats, glossy 3D renders, emoji, purple/violet accents, UI screenshots.
- Eight harvested samples live in `imagery/` and are listed in `brand.json` → `imagery.samples`. The product thumbnails (200×150 viewBox, ≈266px rendered) were excluded by the ≥320px rendered-size filter.

---

## 6. Voice

Technical, dependable, plain-spoken, industrial, response-oriented. Vietnamese B2B register; the company speaks as "Delta Energy" / "chúng tôi" to "khách hàng" / "đối tác".

- Headlines: one clause, 6–10 words, operative phrase in lime. *"Đối tác kỹ thuật cho vận hành công nghiệp bền vững"*.
- Eyebrows: ALL-CAPS Vietnamese labels. *"HỒ SƠ NĂNG LỰC"*.
- CTAs: imperative and concrete. *"Nhận báo giá"*, *"Gọi tư vấn ngay"*, *"Xem hồ sơ năng lực"*, *"Gửi yêu cầu báo giá"*.
- Proof: figures, not adjectives — 10+ năm, 150+ dự án, 40+ đối tác.
- Limits are stated plainly: *"trang hiện chưa hỗ trợ đặt mua trực tuyến"*.
- Banned: emoji, exclamation marks in headings, "giải pháp toàn diện", "đột phá", "số 1 Việt Nam", "cam kết 100%".

**Message pillars:** full-lifecycle partner (tư vấn → thiết bị → lắp đặt → bảo trì) · proof over adjectives · uptime is the promise · direct contact one tap away.

---

## 7. Layout posture

- `.wrap` max-width **1180px**, 24px side padding; sections **88px** vertical (56px under 768px).
- Alternating canvas `#FFFFFF` / band `#F7F9FA`, each band closed by 1px `#E5E7EB` rules.
- Grids: services & products 4-up · projects & news 3-up · hero 1.05fr/0.95fr · about 0.9fr/1.1fr · contact 1fr/1.05fr · footer 1.3fr/1fr/1fr/1fr. Collapse 4-up → 2-up at 900px → 1-up at 560px.
- **Radius 3px** everywhere (cards, buttons, inputs, thumbs, header); only the 54px FABs and footer social buttons are round.
- **One shadow in the whole system:** the FAB at `0 6px 18px rgba(0,0,0,.22)`.
- Sticky 76px header, opaque canvas, 1px bottom rule; under 900px the nav becomes a full-height off-canvas drawer (220ms).
- Tempo: 150ms ease for colour/background/border, 220ms drawer, 300ms image scale, 500ms `.reveal` (opacity + 14px rise). Nothing bounces.
- Focus-visible: 2px lime outline at 2px offset; inputs add 1px offset + lime border. Never removed.
- Controls: 15px/600 buttons at ≈50px, `.btn-sm` at ≈42px — normalise new controls to a 44px minimum.
- `prefers-reduced-motion`: stop the FAB ring keyframe, keep the reveal as opacity-only.

---

## 8. Engine overrides

`brand.json.seed` persists authored overrides that survive `od brand finalize`:

```json
{ "fontSize": 16, "controlHeight": 44, "colorWarning": "#d97706", "colorError": "#dc2626" }
```

`fontSize` (16) and `controlHeight` (44) are measured from the page; `borderRadius` (3) is derived from `layout.radius`. `colorWarning` / `colorError` are the two state colours taken from the supplied DESIGN.md, the only place that file's tokens could apply without contradicting the live site.

---

## 9. Known gaps

- **No raster brand assets on the source site.** No favicon, apple-touch-icon or social card exists to harvest; the mark files were transcribed from the site's own clip-path geometry and CSS typography.
- **The supplied `context/input-DESIGN.md` is a different style family** (orange `#FF5701` + Playfair Display) and was not applied to the brand roles. See §1.
- **Imagery is vector-only**, so the imagery gallery reads as a set of engineering diagrams rather than a photo library. That is what the site actually publishes.
- Product thumbnails were excluded from `imagery.samples` by the rendered-size filter; they remain in the page source if product-category art is needed later.
