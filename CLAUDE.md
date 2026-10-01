@AGENTS.md

# Skill — Build with the Delta Energy Design System

Use this when producing any HTML deliverable for **Delta Energy**
(CÔNG TY TNHH DỊCH VỤ KỸ THUẬT DELTA ENERGY) — landing pages, decks, posters, emails,
forms, dashboards or prototypes. It encodes the contract in `DESIGN.md` and
`brand.json` as executable rules, so the result stays on-brand without re-reading the
source site.

Registered design system: `user:longnguyendev-github-io` · Brand id `longnguyendev-202055`.

---

## 0. Bind the tokens first

Paste `system/variables.css` into the first `<style>` block, or bind the seven roles
directly:

```css
:root {
  --bg: #ffffff;
  --surface: #f7f9fa;
  --fg: #1f2937;
  --muted: #4b5563;
  --border: #e5e7eb;
  --accent: #7cb342;
  --accent-2: #5e8c31;
  --on-accent: #12200a; /* ink, never white, on lime */
  --accent-accessible: #557f2c; /* use for small lime text + hover fills */
  --radius: 3px;
  --font-head:
    "Montserrat", system-ui, -apple-system, "Segoe UI", Helvetica Neue, Arial,
    sans-serif;
  --font-body:
    "Inter", system-ui, -apple-system, "Segoe UI", Helvetica Neue, Arial,
    sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
}
```

Load both families in one request:

```html
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Inter:wght@400;500;600&display=swap"
/>
```

**Never introduce a colour outside the seven roles.** Zalo `#0068FF` is third-party
branding on the chat FAB, not a token. No gradients, no glows, no bevels, no second
shadow, no radius above 3px on a rectangular surface.

---

## 1. Type

| Slot           | Family     | Weight | Size / leading                                          |
| -------------- | ---------- | ------ | ------------------------------------------------------- |
| Hero           | Montserrat | 800    | `clamp(32px,4.6vw,50px)/1.12`, `letter-spacing:-0.01em` |
| Section head   | Montserrat | 800    | `clamp(26px,3.4vw,36px)/1.2`                            |
| Card head      | Montserrat | 800    | 15.5–17px                                               |
| Eyebrow        | Montserrat | 700    | 13px uppercase, `0.06em`, `--accent-2`                  |
| Stat numeral   | Montserrat | 800    | 26–28px, `--accent-2`                                   |
| Body           | Inter      | 400    | 16px/1.6, measure ≤ 65ch                                |
| Lead           | Inter      | 400    | 17px, `--muted`, 480–540px measure                      |
| Button / label | Inter      | 600    | 15px                                                    |
| Nav / sub-copy | Inter      | 500    | 14–15px                                                 |

Three weights per face is the ceiling. Minimum body size 14px. Fallback stack always
declared. Never set a heading in `system-ui` alone.

---

## 2. Layout

- Container max-width **1180px**, 24px side padding.
- Section padding **88px** vertical, **56px** below 768px.
- Alternating `--bg` / `--surface` bands, **each closed by a 1px `--border` rule**;
  whitespace before borders, borders before shadows.
- Grids: 4-up (services, products) · 3-up (projects, news) · split ratios
  1.05fr/0.95fr (hero), 0.9fr/1.1fr (about), 1fr/1.05fr (contact),
  1.3fr/1fr/1fr/1fr (footer). Collapse 4-up → 2-up at 900px → 1-up at 560px.
- Sticky header **76px**, opaque `--bg`, 1px bottom rule; under 900px a full-height
  off-canvas drawer at 220ms.
- Radius **3px** for cards, buttons, inputs, thumbs, header. Only FABs and social
  buttons are circular.
- **Hierarchy order:** eyebrow → headline → support text → action.

---

## 3. Components

- **Buttons** — Inter 600. Primary: `--accent` fill, `--on-accent` text, 13px/26px
  padding (~50px tall). `.btn-sm`: 9px/18px at 13.5px (~42px). Secondary: 1.5px `--fg`
  outline, transparent fill; hover takes a lime border and `--accent-2` text.
  Normalise any new control to a **44px minimum** target.
- **Inputs** — 1px `--border`, 3px radius, `--surface` fill, 12px/14px padding.
  Focus: 2px lime outline at 1px offset plus a lime border. Labels Inter 600 13.5px,
  required marker `*` in `--accent-2`.
- **Cards** — `--bg` (or `--surface` on a canvas band), 1px `--border`, 3px radius, no
  shadow. Hover raises only the thumbnail to `scale(1.05)` over 300ms.
- **Eyebrow labels** — Montserrat 700 13px uppercase `--accent-2`, 10px below.
- **Stat rows** — three Montserrat 800 numerals 26–28px with 13px `--muted` captions,
  separated by a top rule rather than boxes.
- **Floating actions** — 54px circles, `right:20px; bottom:22px`; Zalo `#0068FF` and
  call in `--accent-2` with a 2.2s ring keyframe. One shadow only:
  `0 6px 18px rgba(0,0,0,.22)`.

---

## 4. Interaction states — contrast may never drop

Define hover, focus-visible, active and disabled as a **foreground/background pair**.

- Hover moves the background by ±0.06–0.12 on the OKLch L channel, or adjusts border,
  shadow or position. **Never** shift the foreground toward `--muted`.
- Never white-on-lime (2.50:1). Lime fills always carry `--on-accent` ink (6.78:1).
- Small lime text uses `--accent-accessible` `#557F2C` (4.71:1), not `#5E8C31` (3.98:1).
- Body copy on canvas never lighter than `--muted` (7.56:1). On the `#1F2937` footer
  band, `#D7DBDF` is the ceiling.
- `:focus-visible` is a 2px lime outline at 2px offset and is never removed.
- Disabled is the only state allowed to reduce contrast.
- `prefers-reduced-motion`: stop the FAB ring keyframe; keep `.reveal` opacity-only.

Tempo, shared across the system: 150ms ease (background / colour / border),
220ms (drawer), 300ms (image scale), 500ms (`.reveal`, opacity + 14px rise).
Nothing bounces, springs or overshoots.

---

## 5. Imagery

**Illustration-only. Do not introduce photography.** Every visual is a flat geometric
SVG: ink `#1F2937` masses and strokes (3–5px, fills at 8–85% opacity) on `--surface`
with **exactly one** lime `#7CB342` highlight per composition.

- Subjects: factory blocks, pumps, control valves, pressure gauges, control cabinets,
  process piping, instrument dials, site handover, periodic maintenance.
- Signature backdrop for hero-scale surfaces: the **40px blueprint grid** in
  `#E5E7EB` (see `imagery/hero-blueprint-band.svg`).
- Reuse the eight harvested files in `imagery/`; they are the site's real assets.
- Avoid: stock photos of people or hard hats, handshakes, glossy 3D renders,
  gradients, bevels, emoji, purple/violet accents, UI screenshots.

---

## 6. Voice — Vietnamese B2B

Technical, dependable, plain-spoken, industrial, response-oriented. Speak as
"Delta Energy" / "chúng tôi" to "khách hàng" / "đối tác" / "Quý khách".

- Headlines: one clause, 6–10 words, operative phrase in lime.
  _"Đối tác kỹ thuật cho vận hành công nghiệp bền vững"_.
- Eyebrows: ALL-CAPS Vietnamese. _"HỒ SƠ NĂNG LỰC"_, _"GIẢI PHÁP KỸ THUẬT CÔNG NGHIỆP"_.
- CTAs: imperative and concrete — _"Nhận báo giá"_, _"Gọi tư vấn ngay"_,
  _"Xem hồ sơ năng lực"_, _"Gửi yêu cầu báo giá"_, _"Đọc thêm"_.
- Proof over adjectives: **10+ năm kinh nghiệm · 150+ dự án hoàn thành ·
  40+ đối tác chiến lược**, shown as a three-figure stat row.
- Uptime is the promise: _"giảm thiểu thời gian ngừng máy"_, _"vận hành liên tục 24/7"_.
- State limits plainly instead of glossing: _"trang hiện chưa hỗ trợ đặt mua trực tuyến"_.
- Banned: emoji as icons, exclamation marks in headings, _"giải pháp toàn diện"_,
  _"đột phá"_, _"số 1 Việt Nam"_, _"cam kết 100%"_, generic core-values copy, lorem ipsum.

**Message pillars:** full-lifecycle partner (tư vấn giải pháp → cung cấp thiết bị →
lắp đặt → bảo trì vận hành) · proof over adjectives · uptime is the promise ·
direct contact one tap away.

---

## 7. Action economy

One action, one primary CTA. A single lime primary button per viewport; a long
scrolling page may repeat it once at the end. Every other entry point (nav, hero,
cards, footer) is secondary, ghost or a text link, and its copy must not repeat word
for word. An adjacent button group holds at most one solid primary.

---

## 8. Pre-delivery checklist

- [ ] Every colour literal is one of the seven roles (+ `--on-accent`,
      `--accent-accessible`, the recorded supporting neutrals).
- [ ] Montserrat for display, Inter for body/UI, fallback stacks declared.
- [ ] Radius 3px on rectangular surfaces; at most one shadow.
- [ ] One lime element per composition; no white-on-lime.
- [ ] Hover/focus/active contrast ≥ the default state; `:focus-visible` present.
- [ ] Touch targets ≥ 44px; body ≥ 14px; print ≥ 12pt.
- [ ] Imagery is illustration-only, from `imagery/`, one lime highlight each.
- [ ] Vietnamese B2B voice; no banned superlatives, no emoji icons.
- [ ] No horizontal scroll at 360 / 390 / 430 / 600 / 768 / 820 / 1024 / 1366 / 1440 / 1920px.
- [ ] No overlapping, clipped or overflowing content; no orphaned final-line characters.

---

## 9. Regenerating

`system/` is generated — never edit it by hand. Change `brand.json` (or
`brand.json.seed` for engine overrides such as `controlHeight`), then:

```
od brand preview  longnguyendev-202055
od brand finalize longnguyendev-202055 --json
```

Finalize re-derives the light / dark / compact tokens and the six artifacts and
updates the registered design system **in place**.
