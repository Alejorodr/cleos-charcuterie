# Design Spec — Cleo's Charcuterie & Oysters Co. Marketing Website

**Date:** 2026-06-22
**Status:** Approved for implementation

---

## Brief

Marketing website for **Cleo's Charcuterie & Oysters Co.**, a small-batch food business in Prince Edward Island (PEI), Canada. Sells charcuterie boards, seafood platters, and grazing tables for events and gatherings. The site lets visitors browse the menu and place an order.

**Audience:** PEI locals, families, event planners, food lovers.
**Primary use case:** Browse menu → place order via WhatsApp.
**Tone:** Warm, personal, celebratory artisan. NOT corporate, NOT SaaS.

---

## Stack

| Decision | Choice | Reason |
|---|---|---|
| Framework | Next.js 15 App Router | SSG for static pages, Client Component for Order |
| Styling | CSS custom properties (hand-crafted) | Pixel-accurate to brand tokens; no generic utility library fingerprints |
| Typography | Google Fonts via `next/font` | Cinzel, Cormorant Garamond, Great Vibes, Montserrat |
| Images | `next/image` | Optimized delivery; real food photos |
| Order flow | WhatsApp `wa.me` link | No backend; `wa.me/17823778050?text=<encoded-order>` |
| Deployment | Vercel | Native Next.js integration |
| Icons | Lucide React | Thin-line monoline, recolored to brand tokens |

---

## Design System (Hallmark — Custom Theme)

**Macrostructure:** Photographic (08) — food photos dominate each fold; text is caption/annotation, not headline. "The design says *look* before it says *read*."

**Genre:** Editorial — artisan food brand.

**Nav:** N6 Newspaper Masthead — full-width, large centered "CLEO'S" wordmark top row, nav links row beneath in Montserrat small-caps, double hairline rule below. No hamburger. No SaaS pill.

**Footer:** Ft6 Letter close — olive background, Great Vibes script close "Thank you for supporting a small business in PEI! ♡", contact as typographic list beneath.

### Color Tokens

All from `_ds/tokens/` — source of truth. No deviation.

```css
:root {
  /* Brand */
  --clay-500: oklch(50% 0.11 38);    /* #AB553C terracotta — headings, wordmark, links */
  --clay-600: oklch(44% 0.10 38);    /* #8F4530 pressed states */
  --clay-700: oklch(40% 0.10 38);    /* #7E3F2C deep states */
  --gold-500: oklch(65% 0.10 75);    /* #C5942F gold — engraving lines, dividers, ♡ */
  --gold-400: oklch(70% 0.10 75);    /* #D7AC52 gold tint */
  --gold-300: oklch(78% 0.09 75);    /* #E6C887 gold light */
  --gold-600: oklch(60% 0.10 75);    /* #B9892B gold on dark */
  --olive-500: oklch(30% 0.06 115);  /* #4A4C2C — banners, buttons, footer, badges */
  /* Paper */
  --paper-2: oklch(95% 0.018 80);    /* #F6F0E5 page background — never stark white */
  --paper-1: oklch(97% 0.012 80);    /* #FBF6EC card/raised surface */
  --paper-0: oklch(100% 0 0);        /* #FFFFFF photos/plates only */
  --hairline: oklch(90% 0.020 80);   /* #E3D8C4 warm dividers */
  /* Ink */
  --ink-900: oklch(20% 0.012 60);    /* #2C2A26 primary text */
  --ink-700: oklch(32% 0.015 60);    /* #4A4239 body text */
  --ink-500: oklch(46% 0.018 60);    /* #6E5F4F muted text */
  --ink-300: oklch(62% 0.018 60);    /* #9A8C7B captions */
  --text-on-dark: oklch(94% 0.018 75); /* #F4ECDD text on olive */
  /* Utility */
  --wash-paper: linear-gradient(180deg, oklch(93% 0.022 80) 0%, var(--paper-2) 100%);
}
```

### Typography

```css
:root {
  --font-display: 'Cinzel', serif;        /* Wordmark, ALL-CAPS section titles — tracking 0.14–0.32em */
  --font-serif:   'Cormorant Garamond', serif; /* Item names, prose, italic leads */
  --font-script:  'Great Vibes', cursive; /* Taglines & decorative accents ONLY */
  --font-ui:      'Montserrat', sans-serif; /* UI, body copy, prices, wide-tracked labels */
}
```

**Rules:**
- Body never below 13px. Section titles 20–46px. Hero wordmark up to 64px.
- Headers: always `font-style: normal` (roman). No italic headers — ever.
- Section labels: ALL CAPS, wide-tracked Montserrat. Feature names: Title Case.
- Taglines: sentence-case Great Vibes script. No emoji anywhere.

### Spacing & Motion

```css
:root {
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md:  16px;
  --space-lg:  24px;
  --space-xl:  40px;
  --space-2xl: 64px;
  --space-3xl: 96px;

  --radius-md: 10px;
  --radius-lg: 16px;

  /* Painted banner organic radius */
  --radius-banner: 120px 90px 110px 80px / 40px 50px 38px 46px;

  --shadow-md: 0 4px 16px -2px oklch(20% 0.04 60 / 0.12);

  --ease-soft:  cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast:   140ms;
  --dur-mid:    260ms;
  --dur-slow:   420ms;
}
```

**Motion rules:**
- Animate `transform` and `opacity` only. Never layout properties.
- Hover: `filter: brightness(1.08)` + `translateY(-2px)`.
- Press: `scale(0.97)`.
- Focus: gold ring `outline: 2px solid var(--gold-400)`, `outline-offset: 3px`. Instant — never animated.
- `prefers-reduced-motion: reduce` → all spatial motion collapses to ≤150ms opacity fade.

---

## Assets

| Asset | Source | Usage |
|---|---|---|
| `food-cluster.png` | `assets/food-cluster.png` | Engraved illustration — Home hero, About story |
| Food photo 1 | `WhatsApp Image 2026-06-21 at 11.17.43.jpeg` | Real food photo — secondary hero bands |
| Food photo 2 | `WhatsApp Image 2026-06-21 at 11.17.44.jpeg` | Real food photo — secondary hero bands |
| Logo | `LOGO.jpeg` | Favicon, og:image, footer |

Move all to `public/` in the Next.js project. Rename to url-safe names:
- `public/food-cluster.png`
- `public/food-photo-1.jpg`
- `public/food-photo-2.jpg`
- `public/logo.jpg`

---

## Pages & Routes

| Route | File | Rendering |
|---|---|---|
| `/` | `app/page.tsx` | Static (SSG) |
| `/boards` | `app/boards/page.tsx` | Static (SSG) |
| `/seafood` | `app/seafood/page.tsx` | Static (SSG) |
| `/grazing` | `app/grazing/page.tsx` | Static (SSG) |
| `/about` | `app/about/page.tsx` | Static (SSG) |
| `/order` | `app/order/page.tsx` | Client Component (interactive state) |

---

## Components

### Shared Chrome

**`<Header />`** (`components/Header.tsx`)
- N6 Newspaper Masthead style
- Full-width, sticky top, `z-index: 20`
- Translucent ivory backdrop: `background: oklch(95% 0.018 80 / 0.86)`, `backdrop-filter: blur(10px)`
- Top row: centered `<Wordmark />` component
- Bottom row: nav links (Montserrat, 12px, 600, 0.14em, uppercase) — Boards · Seafood · Grazing · About — + "Order Now" olive button right-aligned
- Double hairline rule below (`border-bottom: 1px solid var(--hairline)`)
- Active link: `color: var(--clay-500)` + `border-bottom: 1.5px solid var(--gold-500)`
- Mobile (<768px): single row, wordmark left, burger icon right → slide-down drawer with nav links

**`<Wordmark />`** (`components/Wordmark.tsx`)
- Stacked: "CLEO'S" (Cinzel 600, `--clay-500`, 0.28em tracking) over "CHARCUTERIE & OYSTERS CO." (Cinzel 500, `--gold-600`, 0.22em, ~34% size)
- Links to `/`

**`<Footer />`** (`components/Footer.tsx`)
- Ft6 Letter close
- `background: var(--olive-500)`, `color: var(--text-on-dark)`
- Left column: Great Vibes "Let's graze! ♡" + Montserrat sans blurb
- Right column: contact rows — Instagram `@cleos_charcuterie`, `danibr-11@hotmail.com`, `782-377-8050`, `Prince Edward Island` — each with gold Lucide icon
- Bottom bar (top hairline `--gold-600`): centered Great Vibes "Thank you for supporting a small business in PEI! ♡"
- Mobile: stacks columns vertically

### Design System Components (reimplement natively — no `_ds_bundle.js`)

| Component | Props | Notes |
|---|---|---|
| `<Button />` | `variant: olive\|outline\|ghost`, `size: sm\|lg`, `block?: bool` | Olive = primary fill; 8-state interactive |
| `<Card />` | `framed?: bool`, `padding?: string` | ivory `--paper-1`, `--radius-lg`, warm shadow; `framed` adds gold hairline |
| `<Badge />` | `tone: olive` | Small pill; "Most Popular" |
| `<IconCircle />` | `size: number` | Gold-ringed circle wrapping Lucide icon |
| `<Divider />` | — | Gold hairline fading at ends with centered ♡ |
| `<SectionHeading />` | `kicker?, title, rule?, align: left\|center` | kicker in script/caps, title in Cinzel caps |
| `<PriceTag />` | `size?: string` | Olive price chip |
| `<Input />` / `<Select />` | `label` | Warm styling, gold focus ring |

---

## Page Specs

### Home (`/`)

Sections in order:

1. **Hero** — H6 Photographic fold
   - Full-bleed `food-cluster.png` illustration (76% width, max 540px, centered on ivory `--wash-paper` bg)
   - Centered wordmark stack: "CLEO'S" Cinzel 64px `--clay-500` + "CHARCUTERIE & OYSTERS CO." gold 15px
   - Great Vibes tagline: *"Simple. Beautiful. Made to Share. ♡"* 46px `--ink-900`
   - Two CTAs: **Order a Board** (olive lg → `/order`) + **View the Menu** (outline lg → `/boards`)
   - Gold `<Divider />` beneath

2. **Features strip** — `--paper-1` bg, 4 `<IconCircle size={104} />` horizontally:
   - Charcuterie Boards (`utensils-crossed`) · Seafood Platters (`shell`) · Grazing Tables (`leaf`) · Perfect for Any Occasion (`calendar-heart`)

3. **Boards preview** — 4-card pricing grid (see Boards page spec)

4. **Seafood preview** — two-column section (see Seafood page spec)

5. **Values ("Good to Know")** — 4 IconCircles: Locally Sourced / Made Fresh / Sustainable / Order Ahead + painted olive banner "Locally sourced. Made with love in PEI. ♡"

6. **Footer**

### Boards (`/boards`)

1. **PageHero** — kicker script "Made to share", title Cinzel "CHARCUTERIE BOARDS", serif lead paragraph
2. **Boards grid** — `grid-template-columns: repeat(4,1fr)`, gap 22px
   - Each card: `<Card framed={id==='classic'} />`, name (Cinzel caps `--clay-500`), people-count (caps muted), gold-dot bullet list, footer row with `<PriceTag />` + ghost "Order →" link → `/order`
   - Classic Board: `<Badge tone="olive">Most Popular</Badge>` top-right

   | Board | People | Price | Items |
   |---|---|---|---|
   | Mini Board | 2–4 | $40 | 2 cheeses, 2 meats, Crackers, Fruit, Olives & pickles, Nuts, Sweet touch |
   | Classic Board ★ | 5–7 | $75 | 3 cheeses, 3 meats, Crackers & breadsticks, Seasonal fruit, Olives & pickles, Jam or honey, Nuts, Chocolates |
   | Large Board | 8–12 | $110 | 4 cheeses, 4 meats, Crackers & pretzels, Fruit variety, Nuts & dips, Olives & pickles, Chocolates |
   | Party Board | 15–20 | $175 | 4+ cheeses, 4+ meats, Crackers & pretzels, Fruit variety, Nuts & dips, Olives & pickles, Chocolates |

3. **Add-Ons** — `--paper-1` bg, 4-col grid: IconCircle + name + PriceTag

   | Add-On | Price |
   |---|---|
   | Extra Crackers | $6 |
   | Extra Cheese | $10 |
   | Extra Meats | $12 |
   | Extra Fruit | $8 |
   | Honey/Jam Jar | $6 |
   | Gluten-Free Crackers | $8 |
   | Dessert Add-On | $12–$18 |

4. **CTA band** + Footer

### Seafood (`/seafood`)

1. **PageHero** — kicker "Smoked. Fresh. Flavorful.", title "SEAFOOD PLATTER"
2. **Seafood section** — two columns (1fr / 1fr, gap 48px)
   - Left: sizes list — ⚓ anchor icon + size name (Cinzel caps) + people-count + `<PriceTag />`, `<Divider />` between rows
   - Right: `<Card />` listing 4 items with small `<IconCircle />`

   | Size | People | Price |
   |---|---|---|
   | Small | 2–3 | $50 |
   | Medium | 4–6 | $80 |
   | Large | 7–10 | $115 |

   Items: Smoked Oysters · Shrimp · Ceviche · Smoked Mussels. Served with crackers, lemon & sauce.

3. **CTA band** + Footer

### Grazing (`/grazing`)

1. **PageHero** — kicker "Let's graze!", title "GRAZING TABLES"
2. **Grazing tiers** — `<SectionHeading />` + serif intro + 3-col card grid
   - Medium Event: `<Card framed />` + `<Badge tone="olive">Most Popular</Badge>`
   - Each card: centered name (Cinzel caps `--clay-500`), people-count caps, big per-person price (Montserrat 40px 700) + "pp", total range in serif muted

   | Tier | People | Per person | Total |
   |---|---|---|---|
   | Small Event | 25–35 | $15–$18 pp | $375–$630 |
   | Medium Event ★ | 40–50 | $13–$16 pp | $520–$800 |
   | Large Event | 60–100 | $12–$15 pp | $720–$1,500 |

3. **What's Included** — 3-col grid: icon + title + description
4. **CTA band** + Footer

### About (`/about`)

1. **PageHero** — kicker "Our story", title "ABOUT CLEO'S"
2. **Story** — two columns: `food-cluster.png` + Great Vibes "Made with love in PEI ♡" headline, two serif paragraphs, italic tagline "Simple. Beautiful. Made to Share."
3. **Values** — 4 IconCircles: Locally Sourced / Made Fresh / Sustainable / Order Ahead + painted olive banner "Locally sourced. Made with love in PEI. ♡"
4. **Contact** — `<SectionHeading title="GET IN TOUCH" />`, 2-col contact cards + "Place an Order" olive button → `/order`
5. **Footer**

### Order (`/order`) — Client Component

1. **PageHero** — kicker "Let's graze!", title "PLACE AN ORDER"
2. **OrderBuilder** — two columns (1fr / 360px sticky):
   - **Left:** Step 1 — 4 selectable board radio cards (clay border + filled check when selected, default: Classic). Step 2 — toggle add-on chips (olive when on).
   - **Right (sticky):** `<Card framed />` order summary — board + chosen add-ons + hairline + live total (board price + add-on sum). **"Send Order on WhatsApp"** olive button.

3. **WhatsApp Order Flow:**
   ```
   URL: https://wa.me/17823778050?text=<encoded-message>

   Message format:
   "Hello! I'd like to place an order:

   Board: Classic Board (5–7 people) — $75
   Add-ons:
   • Extra Cheese — $10
   • Dessert Add-On — $15

   Total: $100

   Thank you! ♡"
   ```
   On click: `window.open(waUrl, '_blank')`. No backend. Order submission = opening WhatsApp.

4. **Confirmation state:** after click, card swaps to Great Vibes "Thank you! ♡" + "Edit Order" ghost button.
5. **Footer**

---

## Responsive Breakpoints

| Breakpoint | Boards grid | Grazing grid | Seafood cols | About cols | Header |
|---|---|---|---|---|---|
| ≥1180px | 4 col | 3 col | 2 col | 2 col | Masthead full |
| 768–1179px | 2 col | 2 col | 1 col | 1 col | Masthead compact |
| <768px | 1 col | 1 col | 1 col | 1 col | Mobile drawer |

**Hard floor (mobile):**
- `html, body { overflow-x: clip }` — no horizontal scroll, never `hidden`
- Buttons/nav links never wrap to 2 lines
- Image grid tracks use `minmax(0, 1fr)`
- Display headers: `overflow-wrap: anywhere; min-width: 0`

---

## Hallmark Anti-Slop Gates (enforced in implementation)

- ✗ Hero with centered text on gradient overlay → use photo fold with corner caption
- ✗ Card grid with identical aspect ratios → vary card sizes by tier/importance
- ✗ Generic sans-serif headings → Cinzel is mandatory for all display type
- ✗ SaaS hamburger nav → N6 masthead, mobile drawer only below 768px
- ✗ Italic headers → all display roman (`font-style: normal`)
- ✗ Invented metrics or testimonials → all prices/data from spec, no fabrication
- ✗ Bouncy/spring animations → `--ease-soft` only, never `spring()` or overshoot
- ✗ Mid-render hex values → all colors via CSS custom property tokens
- ✗ `overflow: hidden` on root → use `overflow-x: clip`
- ✗ Emoji → typographic ♡ (&#9825;) and ⚓ only, no Unicode emoji

---

## File Structure (Next.js)

```
cleos/
├── app/
│   ├── layout.tsx          # Root layout: fonts, Header, metadata
│   ├── globals.css         # @import tokens.css; base reset
│   ├── page.tsx            # Home
│   ├── boards/page.tsx
│   ├── seafood/page.tsx
│   ├── grazing/page.tsx
│   ├── about/page.tsx
│   └── order/page.tsx      # 'use client'
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Wordmark.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Badge.tsx
│   ├── IconCircle.tsx
│   ├── Divider.tsx
│   ├── SectionHeading.tsx
│   ├── PriceTag.tsx
│   ├── Input.tsx
│   ├── PageHero.tsx
│   └── OrderBuilder.tsx
├── tokens.css              # All CSS custom properties (Hallmark token file)
├── public/
│   ├── food-cluster.png
│   ├── food-photo-1.jpg
│   ├── food-photo-2.jpg
│   └── logo.jpg
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## Brand Voice (verbatim — do not paraphrase)

Signature taglines used **verbatim in Great Vibes script**:
- *"Simple. Beautiful. Made to Share."*
- *"Locally sourced. Made with love in PEI."*
- *"Let's graze!"*
- *"Thank you for supporting a small business in PEI!"*

Rules:
- Speak to "you" / from "we"
- Love the ampersand (&) and en-dash ranges (2–4 people, $12–$18)
- Section headers / labels: ALL CAPS, wide-tracked Montserrat
- Feature names: Title Case
- **No emoji, ever.** Only ♡ (`&#9825;`) and ⚓ anchor
- Recurring gold ♡ sign-off

---

*Spec self-review: No placeholders or TBDs. Prices, copy, and data are all from the source spec. No contradictions. Architecture matches feature descriptions. Scope is focused — single marketing site, 6 pages, one interactive component.*
