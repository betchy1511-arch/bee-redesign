# STYLE-GUIDE.md — Big Easy Electricians Redesign
*Stage 2: Visual Identity | Sonic Autopilot | Generated 2026-06-05*

---

## Design Direction

**Concept: "The Expert in Your City"**

The current site is blue-and-yellow electrician generic. The redesign goes deeper: dark, authoritative, rooted in New Orleans. Think craftsman + trade expert + local institution — not a franchise, not a startup. The visual language should communicate that this company has been here for 30 years and knows every shotgun double on the block.

**Design personality:** Authoritative / Trustworthy / Local / Direct / No-Nonsense

---

## Color Palette

### Primary Colors

| Name | Hex | Usage |
|------|-----|-------|
| Deep Navy | `#0A1628` | Primary background, hero sections, footer |
| Electric Yellow | `#F5C518` | Primary CTA buttons, accent highlights, icons |
| Pure White | `#FFFFFF` | Body text on dark, card backgrounds |

### Secondary Colors

| Name | Hex | Usage |
|------|-----|-------|
| Storm Blue | `#1B3A5C` | Section dividers, card backgrounds, nav hover |
| Copper Orange | `#C4622D` | Warning callouts, danger/urgency signals (knob-and-tube alerts) |
| Light Slate | `#E8EDF4` | Light section backgrounds, form fields |
| Muted Text | `#8A9BB5` | Captions, secondary text, footer fine print |

### Rationale
- **Deep Navy** replaces the current `#021f35` — richer, more premium, evokes night sky over the Mississippi
- **Electric Yellow** replaces the current `#ffeb01` — warmer, less fluorescent, still unmistakably electrical trade
- **Copper Orange** is new — nods to copper wire, NOLA's ironwork, and serves as a semantic danger signal for older wiring content
- Retired the generic mid-blue (`#0694de`) — too corporate, too ISP-generic

---

## Typography

### Font Stack

| Role | Font | Weight | Fallback |
|------|------|--------|---------|
| Headings | `Barlow Condensed` | 700 (Bold), 600 (SemiBold) | `Arial Narrow`, sans-serif |
| Body | `Inter` | 400 (Regular), 500 (Medium) | `Helvetica Neue`, sans-serif |
| Accent / Labels | `Barlow Condensed` | 500 (Medium), uppercase | — |
| Code / Schema | `JetBrains Mono` | 400 | `monospace` |

**Rationale:** Barlow Condensed is a condensed sans-serif with working-class authority — common in trade, infrastructure, industrial design. Not soft, not techy, not law firm. Inter is the clearest body text on screen. Together they read as competent and direct.

### Type Scale

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 (hero) | 56–72px | 700 | 1.05 |
| H1 (page) | 42–48px | 700 | 1.1 |
| H2 | 32–36px | 600 | 1.15 |
| H3 | 22–24px | 600 | 1.2 |
| Body | 17–18px | 400 | 1.65 |
| Small / Caption | 14px | 400 | 1.5 |
| CTA Button | 16px | 600 | — |
| Label / Badge | 12px | 700 uppercase | — |

---

## Layout System

### Grid
- Max content width: **1200px**
- Gutters: **24px** (mobile), **40px** (desktop)
- Column system: 12-column CSS Grid
- Section padding: **80px** top/bottom (desktop), **48px** (mobile)

### Breakpoints
| Name | Width |
|------|-------|
| Mobile | < 640px |
| Tablet | 640–1024px |
| Desktop | > 1024px |

### Spacing Scale (8px base)
`4 / 8 / 12 / 16 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 128`

---

## Component Specifications

### Primary CTA Button
```
Background: #F5C518 (Electric Yellow)
Text: #0A1628 (Deep Navy) — dark on light for contrast
Font: Barlow Condensed 600, 16px, uppercase, letter-spacing: 0.05em
Padding: 14px 28px
Border-radius: 4px
Hover: background #D4A815, slight scale(1.02)
Icon: optional right-arrow
```

### Secondary CTA Button (ghost)
```
Background: transparent
Border: 2px solid #F5C518
Text: #F5C518
Same typography as primary
Hover: background rgba(245,197,24,0.1)
```

### Phone Number (click-to-call)
```
Font: Barlow Condensed 700, 24px
Color: #F5C518 on dark backgrounds, #0A1628 on light
Always wrapped in <a href="tel:+15042267555">
Display prominently in header and every section footer
```

### Service Cards
```
Background: #1B3A5C (Storm Blue)
Border-left: 4px solid #F5C518
Border-radius: 6px
Padding: 28px
Heading: Barlow Condensed 600, 20px, White
Body: Inter 400, 16px, #E8EDF4
Hover: border-left color #C4622D, slight lift shadow
```

### Warning / Alert Callout (Knob-and-Tube, Aluminum Wiring)
```
Background: rgba(196, 98, 45, 0.1)
Border-left: 4px solid #C4622D
Border-radius: 4px
Padding: 20px 24px
Icon: ⚠️ or SVG warning icon in #C4622D
Text: Inter 400, 16px, #FFFFFF
Use for: older wiring alerts, permit requirement callouts, safety notices
```

### Trust Badge Strip
```
Background: #1B3A5C
Layout: flex row, centered
Items: "30+ Years Experience" | "Free Estimates" | "Licensed & Insured" | "500+ Reviews"
Font: Barlow Condensed 600, 14px uppercase
Icon: small SVG icon per badge
Color: #F5C518 icon, #FFFFFF text
Separator: 1px solid rgba(255,255,255,0.2)
```

### Section Divider
```
Alternate between:
- Dark: #0A1628 background (hero, CTA sections)
- Medium: #1B3A5C background (feature, testimonial sections)
- Light: #E8EDF4 background (service lists, FAQ, blog)
Never stack two same-tone sections.
```

---

## Image Style

### Photography Direction
- **No stock smiley teams** — no generic "electrician poses with cable" photos
- **Real work environments** — panel boards, wire runs, junction boxes, attic rewires
- **NOLA architectural context** — shotgun doubles, wrought iron fences, French Quarter buildings as establishing shots; NOT generic suburban homes
- **Warm-to-dark treatment** — images should lean slightly warm/dark to match the Deep Navy + Electric Yellow palette; avoid cold blue-tinted stock
- **People:** If showing electricians, show them working — diagnosing, running wire, at a panel. Not posing.

### Image Overlay Treatment
- Hero images: linear-gradient overlay from `rgba(10,22,40,0.85)` to `rgba(10,22,40,0.4)` (dark-left fade)
- Section backgrounds: `rgba(10,22,40,0.6)` scrim for text readability

### Alt Text Standard
All images must have descriptive alt text including the service, location context, and brand where appropriate.
Example: `alt="Big Easy Electricians electrician inspecting aluminum wiring in a 1960s Kenner home during panel upgrade assessment"`

---

## Icon System

- **Library:** Phosphor Icons (MIT license, consistent weight, sharp style)
- **Weight:** Regular (1.5px stroke) for UI, Bold for emphasis
- **Size:** 24px standard, 32px feature icons, 48px hero icons
- **Color:** #F5C518 on dark backgrounds, #0A1628 on light
- **Never use:** Lucide default icon set (too generic, AI-site tell)

---

## Motion + Interaction

- **Scroll reveal:** Elements fade up with `translateY(20px)` → `translateY(0)` on entering viewport. Duration 400ms, ease-out. One-time per element.
- **Button hover:** `scale(1.02)` + `background shift`. Duration 150ms.
- **Card hover:** `translateY(-4px)` + `box-shadow` lift. Duration 200ms.
- **Counter animations:** Stats (30+, 500+, etc.) count up when scrolled into view. Duration 1200ms.
- **No autoplay video, no parallax, no scroll-jacking.**

---

## Accessibility

- All color combinations meet WCAG 2.1 AA (4.5:1 body text, 3:1 large text)
- Focus styles: `outline: 2px solid #F5C518, outline-offset: 2px`
- Skip-to-content link at top of every page
- All form fields have visible labels
- Click targets minimum 44x44px

---

## Anti-Generic Checklist (Sonic Boom Standard)

Before any section goes live, verify:
- [ ] No gradient hero with centered text in a sans-serif — at minimum, left-align text
- [ ] No "Your satisfaction is our priority" or equivalent — cut or rewrite with specific proof
- [ ] No stock photo of smiling team in branded shirts
- [ ] No Lucide default icons
- [ ] No rainbow-gradient accents
- [ ] No floating blob shapes as decorative background
- [ ] NOLA-specific copy present above the fold

---

## Voice in Design

Every visual decision should reinforce the brand voice: direct, expert, local.

- Headlines in Barlow Condensed caps feel like trade signage, not SaaS landing pages
- Deep Navy + Electric Yellow evokes the trade without being cartoonish
- Copper Orange signals "pay attention to this" — used sparingly for wiring-specific warnings
- White space is used confidently — premium, not sparse

---

*Sign-off: APPROVED (autopilot mode — proceeding to Stage 3)*
