# Cleo's Charcuterie & Oysters Co. — Design System

> Simple. Beautiful. Made to Share. — Locally sourced, made with love in PEI. ♡

A brand & UI design system for **Cleo's Charcuterie & Oysters Co.**, a Prince Edward
Island small-batch food business that makes charcuterie boards, seafood platters, and
grazing tables for events and celebrations. The brand voice is warm, personal, and
hand-crafted; the visual world is built on **vintage engraved food illustrations**, a
**terracotta + gold + olive + ivory** palette, classical serif type, and flowing script
accents.

---

## Sources

This system was derived entirely from the brand's own artwork (no codebase or Figma was
provided):

- `assets/logo.jpeg` — primary circular logo lockup (engraved food cluster + wordmark).
- `assets/brand-flyer.jpeg` — brand intro flyer (tagline, feature circles, contact block).
- `assets/menu-sheet.jpeg` — full price/menu sheet (boards, grazing tables, add-ons,
  seafood platter, "Good to know").
- `assets/food-cluster.png` — the engraved illustration cropped from the logo for reuse.

**Contact (from the artwork, stored for reference — do not assume reader access):**
Instagram `@cleos_charcuterie` · `danibr-11@hotmail.com` · `782-377-8050` · Prince Edward Island.

> ⚠️ **Font substitution:** the printed artwork uses commercial fonts we don't have the
> files for. We substituted the closest **Google Fonts** matches (see Visual Foundations).
> If you have the licensed originals, drop the files in and update `tokens/fonts.css`.

---

## Content fundamentals — how Cleo's writes

The voice is that of a **warm, proud small-business owner** talking directly to a guest.
It is personal and generous, never corporate.

- **Tone:** inviting, celebratory, a little romantic about food. "Made for birthdays,
  showers & celebrations." "Perfect for date night, picnics or a little treat."
- **Person:** speaks to **"you"** and from **"we"** ("We shop local & support PEI
  producers", "Every board is made just for you"). Warm and relational.
- **Signature taglines** (use verbatim, in script): *"Simple. Beautiful. Made to Share."*,
  *"Locally sourced. Made with love in PEI."*, *"Let's graze!"*, *"Thank you for supporting
  a small business in PEI!"*
- **Casing:** section headers and labels are **ALL CAPS** with wide tracking
  ("CHARCUTERIE BOARDS", "SEAFOOD PLATTER", "GOOD TO KNOW"). Feature names are Title Case
  ("Mini Board", "Classic Board"). Flowing taglines are sentence-case script.
- **Punctuation:** loves the ampersand ("cheeses, meats & a little something sweet"), the
  en-dash for ranges ("2–4 people", "$12–$18"), and a trailing **♡ heart** as a sign-off
  flourish. Periods used for cadence in taglines ("Smoked. Fresh. Flavorful.").
- **Copy patterns:** short benefit phrases ("Juicy, fresh & perfectly cooked"), people-count
  framing for sizing ("5–7 people"), and friendly logistics ("24–48 hours notice
  appreciated").
- **Emoji:** **none.** The only recurring symbol is the **♡ heart** (typographic, gold),
  plus an **⚓ anchor** marker beside seafood sizes. No emoji anywhere.
- **Vibe in one line:** a beautifully styled grazing table at a friend's PEI cottage —
  abundant, local, and made with care.

---

## Visual foundations

### Color
A warm, earthy, appetite-forward palette pulled straight from the artwork.
- **Terracotta / clay** `--clay-500 #AB553C` — the CLEO'S wordmark; the primary brand color
  for headings, links, and accents.
- **Gold / ochre** `--gold-500 #C5942F` — the engraving lines, the circular logo frame, the
  ♡ hearts, hairline rules and dividers. The "metallic" sparkle of the brand.
- **Olive** `--olive-500 #4A4C2C` — the deep secondary: the painted banner, the price chips,
  inverse surfaces and primary buttons.
- **Ivory paper** `--paper-2 #F6F0E5` (page) / `--paper-1 #FBF6EC` (cards) — everything sits
  on warm cream, never stark white. Photos and plates use true white.
- **Ink** `--ink-900 #2C2A26` for text, with `--ink-500 #6E5F4F` warm brown for muted copy.
- Salami-blush `--clay-300` reads as a soft illustrative pink. Status colors are kept earthy
  (olive success, gold warning, brick danger).

### Type
Four voices (all Google Fonts substitutes — see Sources):
- **Cinzel** (`--font-display`) — classical roman caps. The wordmark and ALL-CAPS section
  titles. Always tracked wide (0.14–0.32em).
- **Cormorant Garamond** (`--font-serif`) — elegant editorial serif. Menu item names,
  descriptive prose, italic leads ("Smoked. Fresh. Flavorful.").
- **Great Vibes** (`--font-script`) — flowing signature script. Taglines and decorative
  accents **only** — never body copy or anything dense.
- **Montserrat** (`--font-sans`) — geometric sans. UI, body copy, prices, and the wide-tracked
  caps labels under feature circles.

### Spacing, radii, shadows
- Generous, airy spacing on a 4px scale — the brand breathes; whitespace is part of the look.
- **Soft** corners only (`--radius-md 10px`, `--radius-lg 16px`); cards are gently rounded,
  never sharp, never pill-everything.
- **Warm, low shadows** (`--shadow-md`) tinted brown, never harsh black. Print-soft.
- The painted **banner** uses an irregular organic border-radius to read like a brush stroke.

### Backgrounds, texture & imagery
- Backgrounds are flat warm ivory — **no busy gradients**. The only "gradient" is a faint
  paper warmth (`--wash-paper`) and the fading gold hairline rule.
- **Imagery is two kinds:** (1) **engraved line illustrations** (the logo's salami, cheese,
  oyster, lemon, rosemary) — vintage, hand-drawn, warm; and (2) **real food photography** of
  finished boards — abundant, top-down or 3/4, warm-lit, on wood/dark surfaces.
- Decorative **olive-branch / laurel** sprigs and a centered **♡** are recurring ornaments.

### Motion & states
- Motion is **gentle and warm** — soft fades and small scales, never bouncy or flashy.
  `--ease-soft`, durations 140–420ms.
- **Hover:** slight brightness lift (~8%) and/or a tiny lift; links underline with offset.
- **Press:** a small `scale(0.97)` — a tactile "press", no harsh color flip.
- **Focus:** a soft gold ring (`--ring`), matching the gold accent language.

### Borders, dividers & frames
- The signature divider is a **gold hairline that fades at both ends with a centered ♡**
  (`Divider`). A plain gold line with a center dot is the secondary.
- The logo's **double gold circle frame** inspires the optional `framed` card treatment
  (gold hairline border).
- Hairlines are warm (`--hairline #E3D8C4`), never gray.

### Cards
Ivory (`--paper-1`), `--radius-lg`, warm `--shadow-md`, 1px warm hairline — or the gold
`framed` variant. Roomy padding (`--space-6`+). Photos sit flush to the top with the same
radius.

---

## Iconography

Cleo's iconography is **thin-line, hand-drawn engraving-style** monoline art — the flyer's
feature circles (a cheese plate, an oyster spread, a grazing table, a gift box) and the
seafood **⚓ anchor** markers. There is **no icon font or SVG set in the source material.**

- **Substitute set (flagged):** we use **[Lucide](https://lucide.dev)** (thin 1.25 stroke,
  rounded, monoline) as the closest available match to the engraved line aesthetic. Loaded
  from CDN in cards and UI kits; recolor to `--clay-500` or `--gold-600`. Representative
  glyphs: `utensils-crossed`, `shell`, `grape`, `gift`, `anchor`, `leaf`, `heart`,
  `instagram`, `phone`, `mail`, `map-pin`.
- Wrap icons in the **`IconCircle`** component to recreate the flyer's gold-ringed feature
  badges.
- **Emoji are never used.** The only "icon-as-glyph" is the typographic **♡** (gold) and the
  **⚓** beside seafood sizes.
- If you have the original engraved line icons, drop the SVGs into `assets/icons/` and
  reference them inside `IconCircle` instead of Lucide.

---

## Index / manifest

**Foundations**
- `styles.css` — global entry (consumers link this one file; `@import` lines only).
- `tokens/fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `effects.css` · `base.css`
- `cards/` — foundation specimen cards (Design System tab): Type, Colors, Spacing, Brand.

**Components** (`window.CleoSDesignSystem_33cea7.*`)
- `components/buttons/` — **Button**, **PriceTag**
- `components/display/` — **Card**, **Badge**, **IconCircle**, **Divider**, **SectionHeading**
- `components/forms/` — **Input**, **Select**

**UI kits**
- `ui_kits/website/` — Cleo's marketing site (hero, features, boards, seafood, order/contact).
- `ui_kits/order-menu/` — interactive digital menu & order flow.

**Assets**
- `assets/logo.jpeg`, `assets/food-cluster.png`, `assets/brand-flyer.jpeg`, `assets/menu-sheet.jpeg`

**Other**
- `SKILL.md` — Agent-Skill manifest for using this system in Claude Code.

---

## Caveats
- **Fonts are Google substitutes**, not the licensed originals — replace if you have them.
- **Icons are Lucide (CDN)**, a substitute for the brand's engraved line art.
- The engraved illustration is cropped from a JPEG logo (white background); a transparent
  PNG / vector version would be ideal for flexible placement.
