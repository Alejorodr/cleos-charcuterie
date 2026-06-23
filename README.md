# Handoff: Cleo's Charcuterie & Oysters Co. — Marketing Website

## Overview
A complete multi-page marketing website for **Cleo's Charcuterie & Oysters Co.**, a Prince Edward Island small-batch food business making charcuterie boards, seafood platters, and grazing tables. The site lets visitors browse the menu, learn about the brand, and place an order via an interactive order builder.

Pages: **Home, Boards, Seafood, Grazing, About, Order.**

## About the Design Files
The files in this bundle are **design references created in HTML/React (Babel-in-browser)** — prototypes showing the intended look, content, and behavior. They are **not production code to ship directly.** Your task is to **recreate these designs in the target codebase's environment** (Next.js, Astro, plain React, etc.) using its established patterns, routing, and build tooling. If no codebase exists yet, choose an appropriate modern framework (Next.js + React recommended for this content-driven marketing site) and implement the designs there.

The prototypes load a prebuilt **design-system bundle** (`_ds_bundle.js`) that exposes branded React components on `window.CleoSDesignSystem_33cea7`. In production you should reimplement these components natively (see Design Tokens + Components below) rather than depending on the browser-Babel bundle.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, copy, and interactions are all specified. Recreate the UI pixel-accurately using the tokens below. The order builder and order routing reflect real intended behavior.

## Brand voice (copywriting)
Warm, personal, generous, celebratory — a proud small-business owner talking to a guest.
- Speaks to "you" / from "we." Loves the ampersand (&) and en-dash ranges (2–4 people, $12–$18).
- Signature taglines, used **verbatim, in the script font**: *"Simple. Beautiful. Made to Share."*, *"Locally sourced. Made with love in PEI."*, *"Let's graze!"*, *"Thank you for supporting a small business in PEI!"*
- Section headers / labels are **ALL CAPS, wide-tracked**. Feature names are Title Case. Taglines are sentence-case script.
- **No emoji, ever.** The only recurring symbols are the typographic gold **♡** (heart, `&#9825;`) sign-off and the **⚓ anchor** beside seafood sizes.

## Design Tokens

### Color
| Token | Hex | Use |
|---|---|---|
| `--clay-500` | `#AB553C` | Terracotta — primary brand; headings, wordmark, links, accents |
| `--clay-600 / 700` | `#8F4530` / `#7E3F2C` | Pressed / deep states |
| `--gold-500` | `#C5942F` | Gold — engraving lines, frames, ♡ hearts, dividers |
| `--gold-400 / 300 / 600` | `#D7AC52` / `#E6C887` / `#B9892B` | Gold tints / on-dark |
| `--olive-500` | `#4A4C2C` | Olive — banners, price chips, primary buttons, footer, inverse surfaces |
| `--paper-2` | `#F6F0E5` | Page background (ivory) — never stark white |
| `--paper-1` | `#FBF6EC` | Card / raised surface |
| `--paper-0` | `#FFFFFF` | True white (photos/plates only) |
| `--hairline` | `#E3D8C4` | Warm divider lines (never gray) |
| `--ink-900` | `#2C2A26` | Primary text |
| `--ink-700` | `#4A4239` | Body text |
| `--ink-500` | `#6E5F4F` | Muted brown text |
| `--ink-300` | `#9A8C7B` | Faint captions |
| `--text-on-dark` | `#F4ECDD` | Text on olive surfaces |

Backgrounds are flat warm ivory — **no busy gradients.** The only "gradient" is a faint paper warmth (`--wash-paper`, used on hero/page-hero bands).

### Typography (Google Fonts — substitutes for the brand's commercial fonts)
| Token | Family | Use | Tracking |
|---|---|---|---|
| `--font-display` | **Cinzel** | Wordmark + ALL-CAPS section/page titles | wide, 0.14–0.32em |
| `--font-serif` | **Cormorant Garamond** | Item names, descriptive prose, italic leads | — |
| `--font-script` | **Great Vibes** | Taglines & decorative accents ONLY (never body) | — |
| `--font-sans` | **Montserrat** | UI, body copy, prices, wide-tracked caps labels | labels 0.10–0.18em |

Type floor: body never below ~13px; section titles ~20–46px; hero wordmark up to 64px.

### Spacing, radii, shadows
- 4px spacing scale; generous, airy whitespace — the brand breathes.
- Soft corners only: `--radius-md` 10px, `--radius-lg` 16px. Cards gently rounded, never sharp.
- Warm, low, brown-tinted shadows (`--shadow-md`); never harsh black.
- The **painted banner** uses an irregular organic border-radius to read like a brush stroke:
  `border-radius: 120px 90px 110px 80px / 40px 50px 38px 46px;` on an olive fill.

### Motion & states
- Gentle, warm — soft fades + small scales, durations 140–420ms, `--ease-soft`. Never bouncy.
- Hover: ~8% brightness lift and/or small lift; links underline with offset.
- Press: `scale(0.97)`. Focus: soft gold ring (`--gold-400`).

## Components (reimplement natively)
All exposed on `window.CleoSDesignSystem_33cea7` in the prototype:
- **Button** — variants: `olive` (primary, olive fill), `outline`, `ghost`; sizes `sm`/`lg`; `block`.
- **Card** — ivory `--paper-1`, `--radius-lg`, warm shadow, 1px hairline; `framed` variant adds a gold hairline border; `padding` prop.
- **Badge** — small pill label; `tone="olive"` (e.g. "Most Popular").
- **IconCircle** — gold-ringed circular badge wrapping an icon (`size` prop). Recreates the flyer's feature circles.
- **Divider** — gold hairline fading at both ends with a centered ♡.
- **SectionHeading** — `kicker` (small script/caps eyebrow) + `title` (Cinzel caps) + optional gold `rule`; `align` left/center.
- **PriceTag** — olive price chip; `size` prop.
- **Input / Select** — form fields with label; warm styling, gold focus ring.

### Iconography
Thin-line monoline icons via **Lucide** (CDN, stroke ~1.25–1.4), recolored to `--clay-500` or `--gold-600`, wrapped in `IconCircle`. Substitute for the brand's engraved line art. Glyphs used: `utensils-crossed`, `shell`, `grape`, `gift`, `anchor`, `fish`, `leaf`, `heart`, `recycle`, `calendar-heart`, `beef`, `cherry`, `wheat`, `wheat-off`, `nut`, `flower`, `cookie`, `grip`, `droplet`, `cake-slice`, `instagram`, `mail`, `phone`, `map-pin`. (If you have the original engraved SVGs, drop them in instead.)

## Shared chrome (every page)

### Header (`home/parts.jsx` → `Header`)
- Sticky top, `z-index:20`, translucent ivory `rgba(246,240,229,0.86)` + `backdrop-filter: blur(10px)`, 1px hairline bottom border.
- Inner: max-width 1180px, padding 16px 32px, flex space-between.
- Left: **Wordmark** (links to Home). Right: nav links **Boards · Seafood · Grazing · About** (Montserrat, 12px, 600, 0.14em, uppercase, `--ink-700`) + **Order Now** olive `sm` button → `Order.html`.
- Active link: clay color + 1.5px gold bottom border.

### Wordmark (`parts.jsx` → `Wordmark`)
Stacked: "CLEO'S" (Cinzel, 600, clay-500, letter-spacing 0.28em) over "CHARCUTERIE & OYSTERS CO." (Cinzel, 500, gold-600, 0.22em, ~0.34× size). Links to Home.

### Footer (`parts.jsx` → `Footer`)
Olive `--olive-500` background, `--text-on-dark`. Left: script "Let's graze! ♡" + sans blurb. Right: contact rows (Instagram `@cleos_charcuterie`, `danibr-11@hotmail.com`, `782-377-8050`, `Prince Edward Island`) each with a gold Lucide icon. Bottom bar (top hairline): centered script "Thank you for supporting a small business in PEI! ♡".

## Screens / Views

### 1. Home (`Home Page.html`)
- **Hero** — centered, `--wash-paper` bg, padding 64px/76px. Engraved `food-cluster.png` (76% width, max 540px), fading gold rule, "CLEO'S" Cinzel 64px clay + "CHARCUTERIE & OYSTERS CO." gold caps 15px, script tagline "Simple. Beautiful. Made to Share. ♡" 46px ink, two buttons: **Order a Board** (olive lg → Order) + **View the Menu** (outline lg → Boards).
- **Features** — `--paper-1`, four IconCircles (size 104) with caps labels: Charcuterie Boards, Seafood Platters, Grazing Tables, Perfect for Any Occasion.
- **Boards** — full 4-card pricing grid (see Boards page).
- **Seafood** — two-column section (see Seafood page).
- **Values** ("Good to Know") + painted olive banner.
- **Footer.**

### 2. Boards (`Boards.html`)
- **PageHero** — kicker (script) "Made to share", title "Charcuterie Boards", serif lead.
- **Boards grid** — 4 equal cards (`grid-template-columns: repeat(4,1fr)`, gap 22). Each card: name (Cinzel caps clay), people-count (caps muted), bulleted item list (gold dot bullets), and a footer row with **PriceTag** + ghost "Order →" link (→ Order page). The **Classic Board** card is `framed` and carries a "Most Popular" olive Badge top-right.
- **Add-Ons** — `--paper-1`, SectionHeading "Add-Ons", 4-col grid of cards: IconCircle + name + PriceTag.
- **CTA band** + Footer.

**Boards data:**
| Board | People | Price | Items |
|---|---|---|---|
| Mini Board | 2–4 | $40 | 2 cheeses, 2 meats, Crackers, Fruit, Olives & pickles, Nuts, Sweet touch |
| Classic Board ★ | 5–7 | $75 | 3 cheeses, 3 meats, Crackers & breadsticks, Seasonal fruit, Olives & pickles, Jam or honey, Nuts, Chocolates |
| Large Board | 8–12 | $110 | 4 cheeses, 4 meats, Crackers & pretzels, Fruit variety, Nuts & dips, Olives & pickles, Chocolates |
| Party Board | 15–20 | $175 | 4+ cheeses, 4+ meats, Crackers & pretzels, Fruit variety, Nuts & dips, Olives & pickles, Chocolates |

**Add-ons:** Extra Crackers $6 · Extra Cheese $10 · Extra Meats $12 · Extra Fruit $8 · Honey/Jam Jar $6 · Gluten-Free Crackers $8 · Dessert Add-On $12–$18.

### 3. Seafood (`Seafood.html`)
- **PageHero** — kicker "Smoked. Fresh. Flavorful.", title "Seafood Platter".
- **Seafood section** — two columns (1fr/1fr, gap 48). Left: sizes list, each row = ⚓ anchor icon + size name (Cinzel caps) + people-count + PriceTag, hairline divider between. Right: a Card listing the four items with small IconCircles.
- **CTA band** + Footer.

**Sizes:** Small 2–3 people $50 · Medium 4–6 people $80 · Large 7–10 people $115. Served with crackers, lemon & sauce.
**Items:** Smoked Oysters — "Rich, smoky & full of flavor." · Shrimp — "Juicy, fresh & perfectly cooked." · Ceviche — "Zesty, refreshing & made fresh." · Smoked Mussels — "Delicate, smoky & irresistible."

### 4. Grazing (`Grazing.html`)
- **PageHero** — kicker "Let's graze!", title "Grazing Tables".
- **GrazingTables** — SectionHeading + serif intro + 3-col card grid; **Medium Event** is `framed` + "Most Popular". Each card centered: name (Cinzel caps clay), people-count caps, big per-person price (Montserrat 40px 700) with " pp", total range in serif muted.
- **GrazingIncludes** — "What's Included", 3-col grid of icon + title + description rows.
- **CTA band** + Footer.

**Tiers:** Small Event 25–35 people $15–$18 pp ($375–$630) · Medium Event ★ 40–50 people $13–$16 pp ($520–$800) · Large Event 60–100 people $12–$15 pp ($720–$1,500). Pricing includes a beautiful display with variety, abundance & fresh local ingredients.

### 5. About (`About.html`)
- **PageHero** — kicker "Our story", title "About Cleo's".
- **AboutStory** — two columns: engraved `food-cluster.png` + script "Made with love in PEI ♡" headline, two serif paragraphs, italic tagline "Simple. Beautiful. Made to Share."
- **Values** ("Good to Know") — four IconCircles: Locally Sourced / Made Fresh / Sustainable / Order Ahead, each with a one-line description; followed by the painted olive banner "Locally sourced. Made with love in PEI. ♡".
- **Contact** — SectionHeading "Get in Touch", 2-col grid of contact cards + "Place an Order" olive button.
- **Footer.**

### 6. Order (`Order.html`) — interactive
- **PageHero** — kicker "Let's graze!", title "Place an Order".
- **OrderBuilder** (`home/builder.jsx`) — two columns (1fr / 360px):
  - **Left:** Step "1 · Choose your board" → 4 selectable board options (radio-style, clay border + filled check when selected, default **Classic**). Step "2 · Add a little extra" → toggle add-on chips (olive when on).
  - **Right (sticky):** an order-summary Card (`framed`) listing the board + chosen add-ons, a hairline, and a **live total** (board price + add-on prices), then a **Request Order** olive button. On submit, the card swaps to a script "Thank you! ♡" confirmation with an "Edit Order" button.
- **Footer.**

## Interactions & Behavior
- **Navigation:** header links and the wordmark are real page links. "Order Now" (header), "Order a Board" (hero), all "Order →" / CTA buttons route to `Order.html`. "View the Menu" routes to `Boards.html`.
- **Order builder state:** `boardId` (default `classic`), `addons` (map id→bool), `placed` (bool). Total = selected board price + sum of selected add-on prices, recomputed live. Submitting sets `placed=true` (front-end only — no backend; wire to a real endpoint/email in production).
- **Lucide icons** are created on mount (`lucide.createIcons()`); reinitialize after any client render.
- **Responsive:** prototypes are laid out for ~1180px desktop. For production, collapse multi-column grids (boards 4→2→1, seafood/about 2→1, grazing 3→1) and switch the header nav to a mobile menu under ~768px.

## State Management
Only the **Order** page holds state (board selection, add-ons, placed). All other pages are static/presentational. No data fetching in the prototype — board/seafood/grazing/add-on data is hard-coded (see tables above); move to CMS/constants in production. Order submission should POST to a real handler (email to `danibr-11@hotmail.com` or a form service).

## Assets
- `assets/food-cluster.png` — engraved charcuterie & oysters illustration (cropped from the logo; white background). Used in the Home hero and About story. A transparent/vector version would be ideal in production.
- Additional brand artwork in the design-system project (not bundled here): `logo.jpeg`, `brand-flyer.jpeg`, `menu-sheet.jpeg`.
- **Real food photography** (warm-lit, top-down/3-4, on wood/dark surfaces) should replace the illustration-only hero in production.
- Icons: Lucide (CDN) — substitute for the brand's engraved line art.

## Files (in this bundle)
- `Home Page.html`, `Boards.html`, `Seafood.html`, `Grazing.html`, `About.html`, `Order.html` — the six page prototypes.
- `home/parts.jsx` — Header, Footer, Wordmark, Lucide `Icon` helper.
- `home/sections.jsx` — Hero, Features, Boards, Seafood, Values sections.
- `home/pages.jsx` — PageHero, AddOns, GrazingTables, GrazingIncludes, AboutStory, Contact, CTABand.
- `home/builder.jsx` — interactive OrderBuilder.
- `assets/food-cluster.png` — hero/story illustration.
- `_ds/` — the bound design system (tokens CSS + `_ds_bundle.js`). Use `tokens/*.css` as the source of truth for colors/type/spacing; reimplement the bundle's components natively.

## Notes
- Fonts are **Google Fonts substitutes** for the brand's licensed originals — swap if you obtain them, updating the font tokens only.
- Keep the **no-emoji** rule and the verbatim taglines; they are core to the brand voice.
