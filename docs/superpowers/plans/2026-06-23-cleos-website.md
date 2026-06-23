# Cleo's Charcuterie & Oysters Co. — Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a 6-page Next.js 15 marketing website for Cleo's Charcuterie & Oysters Co. with hand-crafted CSS design system, real food photography, and WhatsApp-based order flow.

**Architecture:** Next.js 15 App Router with static generation for all pages except `/order` (Client Component). CSS custom properties from `tokens.css` — no Tailwind. Shared components in `components/`. Order submission opens a pre-filled WhatsApp chat via `wa.me`.

**Tech Stack:** Next.js 15 · TypeScript · CSS Modules + CSS custom properties · next/font · next/image · lucide-react · Vercel

## Global Constraints

- Node ≥ 20. Next.js 15 (`next@15`). TypeScript strict mode.
- No Tailwind, no CSS-in-JS, no utility library. CSS custom properties only.
- No emoji anywhere in UI. Only typographic ♡ (`&#9825;`) and ⚓.
- All display type: Cinzel. Body prose: Cormorant Garamond. Script taglines only: Great Vibes. UI/labels/prices: Montserrat.
- All headings: `font-style: normal` (roman). No italic headers.
- Animate `transform` and `opacity` only. Duration 140–420ms. Easing `--ease-soft`.
- `html, body { overflow-x: clip }` — never `hidden`.
- WhatsApp number: `17823778050`. Brand email: `danibr-11@hotmail.com`. Phone display: `782-377-8050`. Instagram: `@cleos_charcuterie`.
- Verbatim taglines (Great Vibes): *"Simple. Beautiful. Made to Share."* · *"Locally sourced. Made with love in PEI."* · *"Let's graze!"* · *"Thank you for supporting a small business in PEI!"*

---

### Task 1: Project Scaffold

**Files:**
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `app/globals.css`

**Interfaces:**
- Produces: runnable `next dev` with TypeScript, no Tailwind, App Router

- [ ] **Step 1: Scaffold Next.js project**

```bash
npx create-next-app@15 . --typescript --app --no-tailwind --no-src-dir --no-eslint --import-alias "@/*"
```

Expected: project created, `next dev` runs on `localhost:3000`.

- [ ] **Step 2: Install dependencies**

```bash
npm install lucide-react
npm install --save-dev @testing-library/react @testing-library/jest-dom jest jest-environment-jsdom @types/jest
```

- [ ] **Step 3: Configure jest**

Create `jest.config.ts`:
```typescript
import type { Config } from 'jest';
const config: Config = {
  testEnvironment: 'jsdom',
  setupFilesAfterFramework: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/$1' },
};
export default config;
```

Create `jest.setup.ts`:
```typescript
import '@testing-library/jest-dom';
```

- [ ] **Step 4: Clean default files**

Delete `app/page.tsx` content (replace with empty export), delete `app/globals.css` content (will be replaced in Task 2).

- [ ] **Step 5: Configure next.config.ts**

```typescript
import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};
export default nextConfig;
```

- [ ] **Step 6: Copy assets to public/**

```bash
cp "LOGO.jpeg" public/logo.jpg
cp "WhatsApp Image 2026-06-21 at 11.17.43.jpeg" public/food-photo-1.jpg
cp "WhatsApp Image 2026-06-21 at 11.17.44.jpeg" public/food-photo-2.jpg
cp "assets/food-cluster.png" public/food-cluster.png
```

- [ ] **Step 7: Verify**

```bash
npx tsc --noEmit
```
Expected: no errors.

- [ ] **Step 8: Commit**

```bash
git add -A && git commit -m "feat: scaffold Next.js 15 project with lucide-react"
```

---

### Task 2: Design Tokens

**Files:**
- Create: `tokens.css`
- Modify: `app/globals.css`

**Interfaces:**
- Produces: all CSS custom properties consumed by every component

- [ ] **Step 1: Create tokens.css**

```css
/* Hallmark · macrostructure: Photographic · tone: warm editorial · anchor hue: terracotta
 * custom theme: paper=light · display=classical-serif (Cinzel) · accent=warm (terracotta ~38°)
 * nav: N6 Newspaper Masthead · footer: Ft6 Letter close
 */
:root {
  /* ── Brand colors ── */
  --clay-500: oklch(50% 0.11 38);
  --clay-600: oklch(44% 0.10 38);
  --clay-700: oklch(40% 0.10 38);
  --gold-500: oklch(65% 0.10 75);
  --gold-400: oklch(70% 0.10 75);
  --gold-300: oklch(78% 0.09 75);
  --gold-600: oklch(60% 0.10 75);
  --olive-500: oklch(30% 0.06 115);
  /* ── Paper ── */
  --paper-2: oklch(95% 0.018 80);
  --paper-1: oklch(97% 0.012 80);
  --paper-0: oklch(100% 0 0);
  --hairline: oklch(90% 0.020 80);
  /* ── Ink ── */
  --ink-900: oklch(20% 0.012 60);
  --ink-700: oklch(32% 0.015 60);
  --ink-500: oklch(46% 0.018 60);
  --ink-300: oklch(62% 0.018 60);
  --text-on-dark: oklch(94% 0.018 75);
  /* ── Typography ── */
  --font-display: 'Cinzel', serif;
  --font-serif:   'Cormorant Garamond', serif;
  --font-script:  'Great Vibes', cursive;
  --font-ui:      'Montserrat', sans-serif;
  /* ── Spacing (4pt scale) ── */
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md:  16px;
  --space-lg:  24px;
  --space-xl:  40px;
  --space-2xl: 64px;
  --space-3xl: 96px;
  /* ── Radii ── */
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-banner: 120px 90px 110px 80px / 40px 50px 38px 46px;
  /* ── Shadows ── */
  --shadow-md: 0 4px 16px -2px oklch(20% 0.04 60 / 0.12);
  /* ── Motion ── */
  --ease-soft: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast:  140ms;
  --dur-mid:   260ms;
  --dur-slow:  420ms;
  /* ── Layout ── */
  --max-width: 1180px;
  --page-pad:  clamp(var(--space-md), 5vw, var(--space-2xl));
}
```

- [ ] **Step 2: Create app/globals.css**

```css
@import '../tokens.css';

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html, body {
  overflow-x: clip;
  background: var(--paper-2);
  color: var(--ink-700);
  font-family: var(--font-ui);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

img, video { max-width: 100%; height: auto; display: block; }

a { color: inherit; text-decoration: none; }

h1, h2, h3, h4, h5, h6 {
  font-style: normal; /* never italic headers */
  line-height: 1.15;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 150ms !important;
  }
}
```

- [ ] **Step 3: Verify build**

```bash
npx next build
```
Expected: compiled successfully.

- [ ] **Step 4: Commit**

```bash
git add tokens.css app/globals.css && git commit -m "feat: add design tokens and global styles"
```

---

### Task 3: Font Setup + Root Layout Shell

**Files:**
- Create: `app/layout.tsx`

**Interfaces:**
- Produces: `localFonts` object exported as `{ cinzel, cormorant, greatVibes, montserrat }` CSS variables consumed by all pages

- [ ] **Step 1: Create app/layout.tsx**

```tsx
import type { Metadata } from 'next';
import { Cinzel, Cormorant_Garamond, Great_Vibes, Montserrat } from 'next/font/google';
import './globals.css';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
});
const greatVibes = Great_Vibes({
  subsets: ['latin'],
  variable: '--font-script',
  weight: '400',
  display: 'swap',
});
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-ui',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Cleo's Charcuterie & Oysters Co.",
  description: 'Handcrafted charcuterie boards, seafood platters & grazing tables. Locally sourced, made with love in Prince Edward Island.',
  openGraph: {
    title: "Cleo's Charcuterie & Oysters Co.",
    description: 'Simple. Beautiful. Made to Share.',
    images: ['/logo.jpg'],
    locale: 'en_CA',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${cormorant.variable} ${greatVibes.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 2: Verify fonts load**

```bash
npx next dev
```
Open `localhost:3000`. DevTools → Network → filter "font". Confirm 4 Google Fonts load.

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx && git commit -m "feat: configure next/font with Cinzel, Cormorant, Great Vibes, Montserrat"
```

---

### Task 4: Primitive Components — Button, Card, Badge, Divider

**Files:**
- Create: `components/Button.tsx`, `components/Button.module.css`
- Create: `components/Card.tsx`, `components/Card.module.css`
- Create: `components/Badge.tsx`, `components/Badge.module.css`
- Create: `components/Divider.tsx`, `components/Divider.module.css`

**Interfaces:**
- Produces:
  - `Button({ variant: 'olive'|'outline'|'ghost', size?: 'sm'|'lg', block?: boolean, children, ...props })`
  - `Card({ framed?: boolean, padding?: string, className?: string, children })`
  - `Badge({ tone: 'olive', children })`
  - `Divider()`

- [ ] **Step 1: Write Button**

`components/Button.tsx`:
```tsx
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'olive' | 'outline' | 'ghost';
  size?: 'sm' | 'lg';
  block?: boolean;
  href?: string;
}

export function Button({ variant = 'olive', size = 'sm', block, href, children, className = '', ...props }: ButtonProps) {
  const cls = [styles.btn, styles[variant], styles[size], block ? styles.block : '', className].filter(Boolean).join(' ');
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button className={cls} {...props}>{children}</button>;
}
```

`components/Button.module.css`:
```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  font-family: var(--font-ui);
  font-weight: 600;
  letter-spacing: 0.10em;
  text-transform: uppercase;
  border-radius: var(--radius-md);
  cursor: pointer;
  border: 1.5px solid transparent;
  transition: filter var(--dur-fast) var(--ease-soft),
              transform var(--dur-fast) var(--ease-soft),
              background var(--dur-fast) var(--ease-soft);
  white-space: nowrap;
  text-decoration: none;
}
.btn:focus-visible { outline: 2px solid var(--gold-400); outline-offset: 3px; }
.btn:active { transform: scale(0.97); }
.btn:disabled { opacity: 0.5; cursor: not-allowed; }

/* Variants */
.olive { background: var(--olive-500); color: var(--text-on-dark); border-color: var(--olive-500); }
.olive:hover:not(:disabled) { filter: brightness(1.15); }

.outline { background: transparent; color: var(--clay-500); border-color: var(--clay-500); }
.outline:hover:not(:disabled) { background: oklch(50% 0.11 38 / 0.06); }

.ghost { background: transparent; color: var(--clay-500); border-color: transparent; }
.ghost:hover:not(:disabled) { text-decoration: underline; text-underline-offset: 3px; }

/* Sizes */
.sm { font-size: 12px; padding: var(--space-sm) var(--space-lg); }
.lg { font-size: 13px; padding: var(--space-md) var(--space-xl); }

.block { width: 100%; }
```

- [ ] **Step 2: Write Card**

`components/Card.tsx`:
```tsx
import styles from './Card.module.css';

interface CardProps {
  framed?: boolean;
  padding?: string;
  className?: string;
  children: React.ReactNode;
}

export function Card({ framed, padding, className = '', children }: CardProps) {
  return (
    <div
      className={[styles.card, framed ? styles.framed : '', className].filter(Boolean).join(' ')}
      style={padding ? { padding } : undefined}
    >
      {children}
    </div>
  );
}
```

`components/Card.module.css`:
```css
.card {
  background: var(--paper-1);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--hairline);
  padding: var(--space-xl);
}
.framed { border: 1.5px solid var(--gold-500); }
```

- [ ] **Step 3: Write Badge**

`components/Badge.tsx`:
```tsx
import styles from './Badge.module.css';

interface BadgeProps { tone: 'olive'; children: React.ReactNode; }

export function Badge({ tone, children }: BadgeProps) {
  return <span className={`${styles.badge} ${styles[tone]}`}>{children}</span>;
}
```

`components/Badge.module.css`:
```css
.badge {
  display: inline-block;
  font-family: var(--font-ui);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 3px var(--space-sm);
  border-radius: 999px;
}
.olive { background: var(--olive-500); color: var(--text-on-dark); }
```

- [ ] **Step 4: Write Divider**

`components/Divider.tsx`:
```tsx
import styles from './Divider.module.css';

export function Divider() {
  return (
    <div className={styles.divider} role="separator" aria-hidden="true">
      <span className={styles.heart}>&#9825;</span>
    </div>
  );
}
```

`components/Divider.module.css`:
```css
.divider {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin: var(--space-xl) 0;
}
.divider::before, .divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: linear-gradient(to var(--dir, right), transparent, var(--gold-500));
}
.divider::after { --dir: left; }
.heart {
  color: var(--gold-500);
  font-size: 18px;
  flex-shrink: 0;
}
```

- [ ] **Step 5: Verify types**

```bash
npx tsc --noEmit
```
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add components/ && git commit -m "feat: add Button, Card, Badge, Divider components"
```

---

### Task 5: Brand Components — Wordmark, SectionHeading, PriceTag, IconCircle, PageHero

**Files:**
- Create: `components/Wordmark.tsx`, `components/Wordmark.module.css`
- Create: `components/SectionHeading.tsx`, `components/SectionHeading.module.css`
- Create: `components/PriceTag.tsx`, `components/PriceTag.module.css`
- Create: `components/IconCircle.tsx`, `components/IconCircle.module.css`
- Create: `components/PageHero.tsx`, `components/PageHero.module.css`

**Interfaces:**
- Produces:
  - `Wordmark()` — stacked CLEO'S / CHARCUTERIE & OYSTERS CO. linked to /
  - `SectionHeading({ kicker?: string, title: string, rule?: boolean, align?: 'left'|'center' })`
  - `PriceTag({ children: string })` — e.g. `<PriceTag>$75</PriceTag>`
  - `IconCircle({ size?: number, children: ReactNode })` — Lucide icon inside gold ring
  - `PageHero({ kicker: string, title: string, lead?: string })`

- [ ] **Step 1: Write Wordmark**

`components/Wordmark.tsx`:
```tsx
import Link from 'next/link';
import styles from './Wordmark.module.css';

export function Wordmark() {
  return (
    <Link href="/" className={styles.wordmark} aria-label="Cleo's Charcuterie & Oysters Co. — Home">
      <span className={styles.primary}>CLEO&apos;S</span>
      <span className={styles.secondary}>CHARCUTERIE &amp; OYSTERS CO.</span>
    </Link>
  );
}
```

`components/Wordmark.module.css`:
```css
.wordmark {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  text-decoration: none;
}
.primary {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(28px, 4vw, 48px);
  color: var(--clay-500);
  letter-spacing: 0.28em;
  line-height: 1;
}
.secondary {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(9px, 1.2vw, 15px);
  color: var(--gold-600);
  letter-spacing: 0.22em;
  line-height: 1;
}
```

- [ ] **Step 2: Write SectionHeading**

`components/SectionHeading.tsx`:
```tsx
import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  rule?: boolean;
  align?: 'left' | 'center';
}

export function SectionHeading({ kicker, title, rule, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={`${styles.heading} ${styles[align]}`}>
      {kicker && <p className={styles.kicker}>{kicker}</p>}
      <h2 className={styles.title}>{title}</h2>
      {rule && <div className={styles.rule} aria-hidden="true" />}
    </div>
  );
}
```

`components/SectionHeading.module.css`:
```css
.heading { margin-bottom: var(--space-2xl); }
.left { text-align: left; }
.center { text-align: center; }

.kicker {
  font-family: var(--font-script);
  font-size: 28px;
  color: var(--clay-500);
  margin-bottom: var(--space-sm);
}
.title {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(20px, 3vw, 36px);
  color: var(--clay-500);
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.rule {
  width: 48px;
  height: 1.5px;
  background: var(--gold-500);
  margin-top: var(--space-md);
}
.center .rule { margin-left: auto; margin-right: auto; }
```

- [ ] **Step 3: Write PriceTag**

`components/PriceTag.tsx`:
```tsx
import styles from './PriceTag.module.css';

export function PriceTag({ children }: { children: string }) {
  return <span className={styles.tag}>{children}</span>;
}
```

`components/PriceTag.module.css`:
```css
.tag {
  display: inline-block;
  background: var(--olive-500);
  color: var(--text-on-dark);
  font-family: var(--font-ui);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.06em;
  padding: 4px 12px;
  border-radius: 999px;
}
```

- [ ] **Step 4: Write IconCircle**

`components/IconCircle.tsx`:
```tsx
import styles from './IconCircle.module.css';

interface IconCircleProps {
  size?: number;
  children: React.ReactNode;
  label?: string;
}

export function IconCircle({ size = 64, children, label }: IconCircleProps) {
  return (
    <div
      className={styles.circle}
      style={{ width: size, height: size }}
      aria-label={label}
    >
      {children}
    </div>
  );
}
```

`components/IconCircle.module.css`:
```css
.circle {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1.5px solid var(--gold-500);
  background: var(--paper-1);
  flex-shrink: 0;
}
```

- [ ] **Step 5: Write PageHero**

`components/PageHero.tsx`:
```tsx
import styles from './PageHero.module.css';

interface PageHeroProps {
  kicker: string;
  title: string;
  lead?: string;
}

export function PageHero({ kicker, title, lead }: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.kicker}>{kicker}</p>
        <h1 className={styles.title}>{title}</h1>
        {lead && <p className={styles.lead}>{lead}</p>}
      </div>
    </section>
  );
}
```

`components/PageHero.module.css`:
```css
.hero {
  background: var(--paper-2);
  padding: var(--space-2xl) var(--page-pad);
  border-bottom: 1px solid var(--hairline);
}
.inner {
  max-width: var(--max-width);
  margin: 0 auto;
  text-align: center;
}
.kicker {
  font-family: var(--font-script);
  font-size: 32px;
  color: var(--clay-500);
  margin-bottom: var(--space-sm);
}
.title {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(28px, 5vw, 56px);
  color: var(--clay-500);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: var(--space-md);
}
.lead {
  font-family: var(--font-serif);
  font-size: clamp(16px, 2vw, 20px);
  color: var(--ink-700);
  max-width: 640px;
  margin: 0 auto;
  font-style: italic;
}
```

- [ ] **Step 6: Verify**

```bash
npx tsc --noEmit
```
Expected: no errors.

- [ ] **Step 7: Commit**

```bash
git add components/ && git commit -m "feat: add Wordmark, SectionHeading, PriceTag, IconCircle, PageHero"
```

---

### Task 6: Header (N6 Masthead) + Footer (Ft6 Letter Close) + Layout

**Files:**
- Create: `components/Header.tsx`, `components/Header.module.css`
- Create: `components/Footer.tsx`, `components/Footer.module.css`
- Modify: `app/layout.tsx`

**Interfaces:**
- Produces: `Header()`, `Footer()` consumed by root layout

- [ ] **Step 1: Write Header**

`components/Header.tsx`:
```tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Wordmark } from './Wordmark';
import { Button } from './Button';
import styles from './Header.module.css';

const NAV_LINKS = [
  { href: '/boards', label: 'Boards' },
  { href: '/seafood', label: 'Seafood' },
  { href: '/grazing', label: 'Grazing' },
  { href: '/about', label: 'About' },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.masthead}>
        <Wordmark />
      </div>
      <div className={styles.navRow}>
        <nav className={styles.nav} aria-label="Main navigation">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={[styles.link, pathname === href ? styles.active : ''].filter(Boolean).join(' ')}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Button variant="olive" size="sm" href="/order">Order Now</Button>
      </div>
      {/* Mobile */}
      <button
        className={styles.burger}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
      >
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
      </button>
      {open && (
        <nav className={styles.drawer} aria-label="Mobile navigation">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className={styles.drawerLink} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Button variant="olive" size="lg" block href="/order">Order Now</Button>
        </nav>
      )}
    </header>
  );
}
```

`components/Header.module.css`:
```css
.header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: oklch(95% 0.018 80 / 0.86);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--hairline);
}

.masthead {
  display: flex;
  justify-content: center;
  padding: var(--space-md) var(--page-pad) var(--space-sm);
  border-bottom: 1px solid var(--hairline);
}

.navRow {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--space-sm) var(--page-pad);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-xl);
}

.nav {
  display: flex;
  align-items: center;
  gap: var(--space-xl);
}

.link {
  font-family: var(--font-ui);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-700);
  text-decoration: none;
  padding-bottom: 2px;
  border-bottom: 1.5px solid transparent;
  transition: color var(--dur-fast) var(--ease-soft),
              border-color var(--dur-fast) var(--ease-soft);
}
.link:hover { color: var(--clay-500); }
.active { color: var(--clay-500); border-bottom-color: var(--gold-500); }

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: var(--space-md);
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  right: var(--page-pad);
  top: var(--space-md);
}
.burgerLine {
  display: block;
  width: 22px;
  height: 1.5px;
  background: var(--ink-700);
}

.drawer {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  padding: var(--space-xl) var(--page-pad);
  background: var(--paper-1);
  border-top: 1px solid var(--hairline);
}
.drawerLink {
  font-family: var(--font-ui);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-700);
  padding: var(--space-sm) 0;
  border-bottom: 1px solid var(--hairline);
}

@media (max-width: 768px) {
  .navRow { display: none; }
  .burger { display: flex; }
  .masthead { padding-right: 60px; }
}
```

- [ ] **Step 2: Write Footer**

`components/Footer.tsx`:
```tsx
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.tagline}>Let&apos;s graze! &#9825;</p>
          <p className={styles.blurb}>
            Handcrafted charcuterie boards, seafood platters &amp; grazing tables.
            Locally sourced, made with love in Prince Edward Island.
          </p>
        </div>
        <div className={styles.right}>
          <a href="https://instagram.com/cleos_charcuterie" className={styles.contact} target="_blank" rel="noopener noreferrer">
            <Instagram size={16} strokeWidth={1.4} className={styles.icon} />
            <span>@cleos_charcuterie</span>
          </a>
          <a href="mailto:danibr-11@hotmail.com" className={styles.contact}>
            <Mail size={16} strokeWidth={1.4} className={styles.icon} />
            <span>danibr-11@hotmail.com</span>
          </a>
          <a href="tel:7823778050" className={styles.contact}>
            <Phone size={16} strokeWidth={1.4} className={styles.icon} />
            <span>782-377-8050</span>
          </a>
          <div className={styles.contact}>
            <MapPin size={16} strokeWidth={1.4} className={styles.icon} />
            <span>Prince Edward Island</span>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.signoff}>Thank you for supporting a small business in PEI! &#9825;</p>
      </div>
    </footer>
  );
}
```

`components/Footer.module.css`:
```css
.footer {
  background: var(--olive-500);
  color: var(--text-on-dark);
}
.inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--space-3xl) var(--page-pad);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-3xl);
}
.tagline {
  font-family: var(--font-script);
  font-size: 40px;
  color: var(--gold-300);
  margin-bottom: var(--space-md);
  line-height: 1.2;
}
.blurb {
  font-family: var(--font-ui);
  font-size: 14px;
  color: var(--text-on-dark);
  opacity: 0.85;
  line-height: 1.7;
}
.right {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  padding-top: var(--space-sm);
}
.contact {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  font-family: var(--font-ui);
  font-size: 14px;
  color: var(--text-on-dark);
  text-decoration: none;
  transition: color var(--dur-fast) var(--ease-soft);
}
.contact:hover { color: var(--gold-300); }
.icon { color: var(--gold-400); flex-shrink: 0; }

.bottom {
  border-top: 1px solid oklch(60% 0.06 115);
  padding: var(--space-xl) var(--page-pad);
  text-align: center;
}
.signoff {
  font-family: var(--font-script);
  font-size: 28px;
  color: var(--gold-300);
}

@media (max-width: 768px) {
  .inner { grid-template-columns: 1fr; gap: var(--space-2xl); }
}
```

- [ ] **Step 3: Wire into layout**

`app/layout.tsx` — add Header and Footer imports, wrap children:
```tsx
// Add after existing imports:
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

// Replace body content:
<body>
  <Header />
  <main>{children}</main>
  <Footer />
</body>
```

- [ ] **Step 4: Verify nav renders**

```bash
npx next dev
```
Open `localhost:3000`. Confirm: centered wordmark, nav links, "Order Now" button. Resize to <768px: confirm burger icon appears, nav links hide.

- [ ] **Step 5: Commit**

```bash
git add components/Header.tsx components/Header.module.css components/Footer.tsx components/Footer.module.css app/layout.tsx
git commit -m "feat: add N6 Masthead header and Ft6 Letter Close footer"
```

---

### Task 7: Home Page

**Files:**
- Create: `app/page.tsx`, `app/page.module.css`

**Interfaces:**
- Consumes: Button, Card, Badge, Divider, SectionHeading, PriceTag, IconCircle
- Produces: `/` route — Home page with hero, features, boards preview, seafood preview, values, banner

- [ ] **Step 1: Write app/page.tsx**

```tsx
import Image from 'next/image';
import Link from 'next/link';
import { UtensilsCrossed, Shell, Leaf, CalendarHeart, Recycle, Package, Star } from 'lucide-react';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Badge } from '@/components/Badge';
import { Divider } from '@/components/Divider';
import { SectionHeading } from '@/components/SectionHeading';
import { PriceTag } from '@/components/PriceTag';
import { IconCircle } from '@/components/IconCircle';
import styles from './page.module.css';

const BOARDS = [
  { id: 'mini', name: 'Mini Board', people: '2–4', price: '$40', items: ['2 cheeses', '2 meats', 'Crackers', 'Fruit', 'Olives & pickles', 'Nuts', 'Sweet touch'] },
  { id: 'classic', name: 'Classic Board', people: '5–7', price: '$75', items: ['3 cheeses', '3 meats', 'Crackers & breadsticks', 'Seasonal fruit', 'Olives & pickles', 'Jam or honey', 'Nuts', 'Chocolates'], popular: true },
  { id: 'large', name: 'Large Board', people: '8–12', price: '$110', items: ['4 cheeses', '4 meats', 'Crackers & pretzels', 'Fruit variety', 'Nuts & dips', 'Olives & pickles', 'Chocolates'] },
  { id: 'party', name: 'Party Board', people: '15–20', price: '$175', items: ['4+ cheeses', '4+ meats', 'Crackers & pretzels', 'Fruit variety', 'Nuts & dips', 'Olives & pickles', 'Chocolates'] },
];

const FEATURES = [
  { icon: <UtensilsCrossed size={36} strokeWidth={1.25} />, label: 'Charcuterie Boards' },
  { icon: <Shell size={36} strokeWidth={1.25} />, label: 'Seafood Platters' },
  { icon: <Leaf size={36} strokeWidth={1.25} />, label: 'Grazing Tables' },
  { icon: <CalendarHeart size={36} strokeWidth={1.25} />, label: 'Perfect for Any Occasion' },
];

const VALUES = [
  { icon: <Leaf size={32} strokeWidth={1.25} />, label: 'Locally Sourced' },
  { icon: <Star size={32} strokeWidth={1.25} />, label: 'Made Fresh' },
  { icon: <Recycle size={32} strokeWidth={1.25} />, label: 'Sustainable' },
  { icon: <Package size={32} strokeWidth={1.25} />, label: 'Order Ahead' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <Image
          src="/food-cluster.png"
          alt="Cleo's Charcuterie — engraved illustration of boards and oysters"
          width={540}
          height={540}
          className={styles.heroImage}
          priority
        />
        <Divider />
        <div className={styles.heroText}>
          <div className={styles.wordmarkHero}>
            <span className={styles.heroName}>CLEO&apos;S</span>
            <span className={styles.heroSub}>CHARCUTERIE &amp; OYSTERS CO.</span>
          </div>
          <p className={styles.heroTagline}>Simple. Beautiful. Made to Share. &#9825;</p>
        </div>
        <div className={styles.heroCtas}>
          <Button variant="olive" size="lg" href="/order">Order a Board</Button>
          <Button variant="outline" size="lg" href="/boards">View the Menu</Button>
        </div>
      </section>

      {/* Features strip */}
      <section className={styles.features}>
        <div className={styles.featuresInner}>
          {FEATURES.map(({ icon, label }) => (
            <div key={label} className={styles.featureItem}>
              <IconCircle size={104} label={label}>
                <span className={styles.featureIcon}>{icon}</span>
              </IconCircle>
              <p className={styles.featureLabel}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Boards preview */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <SectionHeading kicker="Handcrafted with love" title="Charcuterie Boards" rule align="center" />
          <div className={styles.boardsGrid}>
            {BOARDS.map((board) => (
              <div key={board.id} className={styles.boardCardWrap}>
                {board.popular && (
                  <div className={styles.badgeWrap}>
                    <Badge tone="olive">Most Popular</Badge>
                  </div>
                )}
                <Card framed={board.popular}>
                  <h3 className={styles.boardName}>{board.name}</h3>
                  <p className={styles.boardPeople}>{board.people} PEOPLE</p>
                  <ul className={styles.boardItems}>
                    {board.items.map(item => <li key={item}>{item}</li>)}
                  </ul>
                  <div className={styles.boardFooter}>
                    <PriceTag>{board.price}</PriceTag>
                    <Link href="/order" className={styles.orderLink}>Order &#8594;</Link>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          <div className={styles.ctaCenter}>
            <Button variant="olive" size="lg" href="/boards">See Full Menu</Button>
          </div>
        </div>
      </section>

      {/* Seafood preview */}
      <section className={styles.seafoodSection}>
        <div className={styles.sectionInner}>
          <div className={styles.seafoodGrid}>
            <div>
              <SectionHeading kicker="Smoked. Fresh. Flavorful." title="Seafood Platter" rule />
              <p className={styles.seafoodLead}>
                Prince Edward Island oysters, shrimp, ceviche, and smoked mussels — 
                served with crackers, lemon &amp; sauce. Available in three sizes.
              </p>
              <Button variant="outline" size="lg" href="/seafood">View Seafood Menu</Button>
            </div>
            <div>
              <Image
                src="/food-photo-1.jpg"
                alt="Cleo's seafood platter — smoked oysters and fresh shrimp"
                width={540}
                height={400}
                className={styles.seafoodPhoto}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <SectionHeading title="Good to Know" rule align="center" />
          <div className={styles.valuesGrid}>
            {VALUES.map(({ icon, label }) => (
              <div key={label} className={styles.valueItem}>
                <IconCircle size={80}>
                  <span className={styles.valueIcon}>{icon}</span>
                </IconCircle>
                <p className={styles.valueLabel}>{label}</p>
              </div>
            ))}
          </div>
          <div className={styles.banner}>
            <p className={styles.bannerText}>Locally sourced. Made with love in PEI. &#9825;</p>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className={styles.ctaBand}>
        <div className={styles.ctaBandInner}>
          <p className={styles.ctaTagline}>Ready to share something beautiful?</p>
          <Button variant="olive" size="lg" href="/order">Place an Order</Button>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Write app/page.module.css**

```css
/* ── Hero ── */
.hero {
  background: linear-gradient(180deg, oklch(93% 0.022 80) 0%, var(--paper-2) 100%);
  padding: var(--space-2xl) var(--page-pad) var(--space-3xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.heroImage {
  width: min(76%, 540px);
  height: auto;
  margin-bottom: var(--space-xl);
}
.heroText { margin-bottom: var(--space-xl); }
.wordmarkHero { display: flex; flex-direction: column; align-items: center; gap: 4px; margin-bottom: var(--space-md); }
.heroName {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(36px, 8vw, 64px);
  color: var(--clay-500);
  letter-spacing: 0.28em;
}
.heroSub {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(9px, 1.5vw, 15px);
  color: var(--gold-600);
  letter-spacing: 0.22em;
}
.heroTagline {
  font-family: var(--font-script);
  font-size: clamp(28px, 5vw, 46px);
  color: var(--ink-900);
  line-height: 1.3;
}
.heroCtas { display: flex; gap: var(--space-md); flex-wrap: wrap; justify-content: center; }

/* ── Features ── */
.features {
  background: var(--paper-1);
  padding: var(--space-2xl) var(--page-pad);
  border-top: 1px solid var(--hairline);
  border-bottom: 1px solid var(--hairline);
}
.featuresInner {
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--space-xl);
}
.featureItem { display: flex; flex-direction: column; align-items: center; gap: var(--space-md); text-align: center; }
.featureIcon { color: var(--clay-500); }
.featureLabel {
  font-family: var(--font-ui);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-700);
}

/* ── Shared section wrapper ── */
.section { padding: var(--space-3xl) var(--page-pad); }
.sectionInner { max-width: var(--max-width); margin: 0 auto; }

/* ── Boards ── */
.boardsGrid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--space-lg);
  margin-bottom: var(--space-2xl);
}
.boardCardWrap { position: relative; }
.badgeWrap { position: absolute; top: var(--space-md); right: var(--space-md); z-index: 1; }
.boardName {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 14px;
  color: var(--clay-500);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: var(--space-sm);
}
.boardPeople {
  font-family: var(--font-ui);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.16em;
  color: var(--ink-300);
  margin-bottom: var(--space-md);
}
.boardItems {
  list-style: none;
  padding: 0;
  margin-bottom: var(--space-xl);
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}
.boardItems li {
  font-family: var(--font-serif);
  font-size: 15px;
  color: var(--ink-700);
  padding-left: var(--space-md);
  position: relative;
}
.boardItems li::before {
  content: '·';
  color: var(--gold-500);
  position: absolute;
  left: 0;
  font-size: 18px;
  line-height: 1;
  top: 1px;
}
.boardFooter { display: flex; align-items: center; justify-content: space-between; gap: var(--space-md); }
.orderLink {
  font-family: var(--font-ui);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--clay-500);
  text-decoration: none;
  transition: text-decoration var(--dur-fast);
}
.orderLink:hover { text-decoration: underline; text-underline-offset: 3px; }
.ctaCenter { display: flex; justify-content: center; }

/* ── Seafood ── */
.seafoodSection {
  background: var(--paper-1);
  padding: var(--space-3xl) var(--page-pad);
  border-top: 1px solid var(--hairline);
  border-bottom: 1px solid var(--hairline);
}
.seafoodGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-3xl);
  align-items: center;
}
.seafoodLead {
  font-family: var(--font-serif);
  font-size: 18px;
  color: var(--ink-700);
  line-height: 1.7;
  margin-bottom: var(--space-xl);
}
.seafoodPhoto {
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  width: 100%;
  height: auto;
  object-fit: cover;
}

/* ── Values ── */
.valuesGrid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--space-xl);
  margin-bottom: var(--space-2xl);
}
.valueItem { display: flex; flex-direction: column; align-items: center; gap: var(--space-md); text-align: center; }
.valueIcon { color: var(--clay-500); }
.valueLabel {
  font-family: var(--font-ui);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-700);
}
.banner {
  background: var(--olive-500);
  border-radius: var(--radius-banner);
  padding: var(--space-xl) var(--space-2xl);
  text-align: center;
}
.bannerText {
  font-family: var(--font-script);
  font-size: clamp(24px, 3vw, 36px);
  color: var(--gold-300);
}

/* ── CTA Band ── */
.ctaBand {
  padding: var(--space-2xl) var(--page-pad);
  border-top: 1px solid var(--hairline);
  text-align: center;
}
.ctaBandInner { max-width: 600px; margin: 0 auto; }
.ctaTagline {
  font-family: var(--font-serif);
  font-size: clamp(20px, 3vw, 28px);
  font-style: italic;
  color: var(--ink-700);
  margin-bottom: var(--space-xl);
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .boardsGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .featuresInner { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .valuesGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 768px) {
  .boardsGrid { grid-template-columns: 1fr; }
  .seafoodGrid { grid-template-columns: 1fr; }
  .featuresInner { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .valuesGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .heroCtas { flex-direction: column; width: 100%; }
}
```

- [ ] **Step 3: Verify**

```bash
npx next build
```
Expected: route `/` compiles, no errors.

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx app/page.module.css && git commit -m "feat: home page with hero, boards, seafood, values"
```

---

### Task 8: Boards Page

**Files:**
- Create: `app/boards/page.tsx`, `app/boards/page.module.css`

- [ ] **Step 1: Create app/boards/page.tsx**

```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { Wheat, WheatOff, Cherry, Cookie, Grape, Beef } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Card } from '@/components/Card';
import { Badge } from '@/components/Badge';
import { PriceTag } from '@/components/PriceTag';
import { SectionHeading } from '@/components/SectionHeading';
import { IconCircle } from '@/components/IconCircle';
import { Button } from '@/components/Button';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: "Charcuterie Boards — Cleo's Charcuterie & Oysters Co.",
};

const BOARDS = [
  { id: 'mini', name: 'Mini Board', people: '2–4', price: '$40', items: ['2 cheeses', '2 meats', 'Crackers', 'Fruit', 'Olives & pickles', 'Nuts', 'Sweet touch'] },
  { id: 'classic', name: 'Classic Board', people: '5–7', price: '$75', items: ['3 cheeses', '3 meats', 'Crackers & breadsticks', 'Seasonal fruit', 'Olives & pickles', 'Jam or honey', 'Nuts', 'Chocolates'], popular: true },
  { id: 'large', name: 'Large Board', people: '8–12', price: '$110', items: ['4 cheeses', '4 meats', 'Crackers & pretzels', 'Fruit variety', 'Nuts & dips', 'Olives & pickles', 'Chocolates'] },
  { id: 'party', name: 'Party Board', people: '15–20', price: '$175', items: ['4+ cheeses', '4+ meats', 'Crackers & pretzels', 'Fruit variety', 'Nuts & dips', 'Olives & pickles', 'Chocolates'] },
];

const ADDONS = [
  { icon: <Wheat size={28} strokeWidth={1.25} />, name: 'Extra Crackers', price: '$6' },
  { icon: <Grape size={28} strokeWidth={1.25} />, name: 'Extra Cheese', price: '$10' },
  { icon: <Beef size={28} strokeWidth={1.25} />, name: 'Extra Meats', price: '$12' },
  { icon: <Cherry size={28} strokeWidth={1.25} />, name: 'Extra Fruit', price: '$8' },
  { icon: <Cookie size={28} strokeWidth={1.25} />, name: 'Honey / Jam Jar', price: '$6' },
  { icon: <WheatOff size={28} strokeWidth={1.25} />, name: 'Gluten-Free Crackers', price: '$8' },
  { icon: <Cookie size={28} strokeWidth={1.25} />, name: 'Dessert Add-On', price: '$12–$18' },
];

export default function BoardsPage() {
  return (
    <>
      <PageHero
        kicker="Made to share"
        title="Charcuterie Boards"
        lead="Every board is assembled fresh to order with seasonal, locally sourced ingredients."
      />
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.boardsGrid}>
            {BOARDS.map(board => (
              <div key={board.id} className={styles.cardWrap}>
                {board.popular && <div className={styles.badgeWrap}><Badge tone="olive">Most Popular</Badge></div>}
                <Card framed={board.popular} padding="var(--space-xl)">
                  <h2 className={styles.boardName}>{board.name}</h2>
                  <p className={styles.boardPeople}>{board.people} PEOPLE</p>
                  <ul className={styles.items}>
                    {board.items.map(i => <li key={i}>{i}</li>)}
                  </ul>
                  <div className={styles.cardFooter}>
                    <PriceTag>{board.price}</PriceTag>
                    <Link href="/order" className={styles.orderLink}>Order &#8594;</Link>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.addonsSection}>
        <div className={styles.inner}>
          <SectionHeading title="Add-Ons" kicker="Customize your board" rule align="center" />
          <div className={styles.addonsGrid}>
            {ADDONS.map(addon => (
              <Card key={addon.name} padding="var(--space-lg)">
                <div className={styles.addonInner}>
                  <IconCircle size={56}><span className={styles.addonIcon}>{addon.icon}</span></IconCircle>
                  <p className={styles.addonName}>{addon.name}</p>
                  <PriceTag>{addon.price}</PriceTag>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaBand}>
        <p className={styles.ctaText}>Ready to order your board?</p>
        <Button variant="olive" size="lg" href="/order">Place an Order</Button>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Create app/boards/page.module.css**

```css
.section { padding: var(--space-3xl) var(--page-pad); }
.inner { max-width: var(--max-width); margin: 0 auto; }

.boardsGrid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--space-lg);
}
.cardWrap { position: relative; }
.badgeWrap { position: absolute; top: var(--space-md); right: var(--space-md); z-index: 1; }
.boardName {
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--clay-500);
  margin-bottom: var(--space-sm);
}
.boardPeople {
  font-family: var(--font-ui);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.16em;
  color: var(--ink-300);
  margin-bottom: var(--space-md);
}
.items {
  list-style: none;
  padding: 0;
  margin-bottom: var(--space-xl);
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.items li {
  font-family: var(--font-serif);
  font-size: 15px;
  color: var(--ink-700);
  padding-left: var(--space-md);
  position: relative;
}
.items li::before {
  content: '·';
  color: var(--gold-500);
  position: absolute;
  left: 0;
  font-size: 18px;
  line-height: 1;
  top: 1px;
}
.cardFooter { display: flex; align-items: center; justify-content: space-between; gap: var(--space-md); }
.orderLink {
  font-family: var(--font-ui);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--clay-500);
  text-decoration: none;
}
.orderLink:hover { text-decoration: underline; text-underline-offset: 3px; }

.addonsSection {
  background: var(--paper-1);
  padding: var(--space-3xl) var(--page-pad);
  border-top: 1px solid var(--hairline);
}
.addonsGrid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--space-md);
}
.addonInner { display: flex; flex-direction: column; align-items: center; gap: var(--space-md); text-align: center; }
.addonIcon { color: var(--clay-500); }
.addonName {
  font-family: var(--font-serif);
  font-size: 15px;
  color: var(--ink-700);
  flex: 1;
}

.ctaBand {
  padding: var(--space-2xl) var(--page-pad);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xl);
  border-top: 1px solid var(--hairline);
}
.ctaText {
  font-family: var(--font-serif);
  font-size: 24px;
  font-style: italic;
  color: var(--ink-700);
}

@media (max-width: 1024px) {
  .boardsGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .addonsGrid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}
@media (max-width: 768px) {
  .boardsGrid { grid-template-columns: 1fr; }
  .addonsGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
```

- [ ] **Step 3: Verify**

```bash
npx next build
```
Expected: route `/boards` compiles, no errors.

- [ ] **Step 4: Commit**

```bash
git add app/boards/ && git commit -m "feat: boards page with pricing grid and add-ons"
```

---

### Task 9: Seafood, Grazing, About Pages

**Files:**
- Create: `app/seafood/page.tsx`, `app/seafood/page.module.css`
- Create: `app/grazing/page.tsx`, `app/grazing/page.module.css`
- Create: `app/about/page.tsx`, `app/about/page.module.css`

- [ ] **Step 1: Create app/seafood/page.tsx**

```tsx
import type { Metadata } from 'next';
import { Anchor, Shell, Fish, Droplet, Leaf } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Card } from '@/components/Card';
import { PriceTag } from '@/components/PriceTag';
import { IconCircle } from '@/components/IconCircle';
import { Divider } from '@/components/Divider';
import { Button } from '@/components/Button';
import styles from './page.module.css';

export const metadata: Metadata = { title: "Seafood Platter — Cleo's Charcuterie & Oysters Co." };

const SIZES = [
  { name: 'Small', people: '2–3 people', price: '$50' },
  { name: 'Medium', people: '4–6 people', price: '$80' },
  { name: 'Large', people: '7–10 people', price: '$115' },
];

const ITEMS = [
  { icon: <Shell size={24} strokeWidth={1.25} />, name: 'Smoked Oysters', desc: 'Rich, smoky & full of flavor.' },
  { icon: <Fish size={24} strokeWidth={1.25} />, name: 'Shrimp', desc: 'Juicy, fresh & perfectly cooked.' },
  { icon: <Droplet size={24} strokeWidth={1.25} />, name: 'Ceviche', desc: 'Zesty, refreshing & made fresh.' },
  { icon: <Leaf size={24} strokeWidth={1.25} />, name: 'Smoked Mussels', desc: 'Delicate, smoky & irresistible.' },
];

export default function SeafoodPage() {
  return (
    <>
      <PageHero kicker="Smoked. Fresh. Flavorful." title="Seafood Platter" />
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.grid}>
            <div className={styles.sizes}>
              {SIZES.map((s, i) => (
                <div key={s.name}>
                  <div className={styles.sizeRow}>
                    <Anchor size={20} strokeWidth={1.4} className={styles.anchor} />
                    <div>
                      <h2 className={styles.sizeName}>{s.name}</h2>
                      <p className={styles.sizePeople}>{s.people}</p>
                    </div>
                    <PriceTag>{s.price}</PriceTag>
                  </div>
                  {i < SIZES.length - 1 && <Divider />}
                </div>
              ))}
              <p className={styles.served}>Served with crackers, lemon &amp; sauce.</p>
              <Button variant="olive" size="lg" href="/order">Order Now</Button>
            </div>
            <div>
              <Card>
                <h3 className={styles.itemsTitle}>What&apos;s Included</h3>
                <div className={styles.itemsList}>
                  {ITEMS.map(item => (
                    <div key={item.name} className={styles.item}>
                      <IconCircle size={48}><span className={styles.itemIcon}>{item.icon}</span></IconCircle>
                      <div>
                        <p className={styles.itemName}>{item.name}</p>
                        <p className={styles.itemDesc}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Create app/seafood/page.module.css**

```css
.section { padding: var(--space-3xl) var(--page-pad); }
.inner { max-width: var(--max-width); margin: 0 auto; }
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-3xl); align-items: start; }
.sizeRow { display: flex; align-items: center; gap: var(--space-lg); }
.anchor { color: var(--clay-500); flex-shrink: 0; }
.sizeName {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--clay-500);
}
.sizePeople {
  font-family: var(--font-ui);
  font-size: 11px;
  letter-spacing: 0.12em;
  color: var(--ink-300);
  text-transform: uppercase;
}
.served {
  font-family: var(--font-serif);
  font-size: 15px;
  font-style: italic;
  color: var(--ink-500);
  margin: var(--space-lg) 0 var(--space-xl);
}
.itemsTitle {
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--clay-500);
  margin-bottom: var(--space-xl);
}
.itemsList { display: flex; flex-direction: column; gap: var(--space-lg); }
.item { display: flex; align-items: center; gap: var(--space-md); }
.itemIcon { color: var(--clay-500); }
.itemName {
  font-family: var(--font-serif);
  font-size: 16px;
  font-weight: 600;
  color: var(--ink-900);
}
.itemDesc {
  font-family: var(--font-serif);
  font-size: 14px;
  font-style: italic;
  color: var(--ink-500);
}
@media (max-width: 768px) { .grid { grid-template-columns: 1fr; } }
```

- [ ] **Step 3: Create app/grazing/page.tsx**

```tsx
import type { Metadata } from 'next';
import { Leaf, Package, Heart, Star } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Card } from '@/components/Card';
import { Badge } from '@/components/Badge';
import { SectionHeading } from '@/components/SectionHeading';
import { IconCircle } from '@/components/IconCircle';
import { Button } from '@/components/Button';
import styles from './page.module.css';

export const metadata: Metadata = { title: "Grazing Tables — Cleo's Charcuterie & Oysters Co." };

const TIERS = [
  { name: 'Small Event', people: '25–35 people', pp: '$15–$18', total: '$375–$630' },
  { name: 'Medium Event', people: '40–50 people', pp: '$13–$16', total: '$520–$800', popular: true },
  { name: 'Large Event', people: '60–100 people', pp: '$12–$15', total: '$720–$1,500' },
];

const INCLUDES = [
  { icon: <Leaf size={28} strokeWidth={1.25} />, title: 'Locally Sourced', desc: 'Fresh seasonal ingredients from PEI farms and waters.' },
  { icon: <Star size={28} strokeWidth={1.25} />, title: 'Beautiful Display', desc: 'Artfully arranged tables that become the centrepiece of your event.' },
  { icon: <Heart size={28} strokeWidth={1.25} />, title: 'Made with Love', desc: 'Every grazing table is crafted with care and attention to detail.' },
  { icon: <Package size={28} strokeWidth={1.25} />, title: 'Full Variety', desc: 'Charcuterie, cheeses, fruits, nuts, spreads, and more.' },
  { icon: <Leaf size={28} strokeWidth={1.25} />, title: 'Abundance', desc: 'Generous portions ensuring guests are satisfied throughout.' },
  { icon: <Star size={28} strokeWidth={1.25} />, title: 'Order Ahead', desc: 'Book in advance to secure your date and customize your spread.' },
];

export default function GrazingPage() {
  return (
    <>
      <PageHero kicker="Let's graze!" title="Grazing Tables" lead="Breathtaking displays for weddings, corporate events, and celebrations." />
      <section className={styles.section}>
        <div className={styles.inner}>
          <SectionHeading kicker="Perfect for every event" title="Grazing Table Packages" rule align="center" />
          <div className={styles.tiersGrid}>
            {TIERS.map(tier => (
              <div key={tier.name} className={styles.tierWrap}>
                {tier.popular && <div className={styles.badgeWrap}><Badge tone="olive">Most Popular</Badge></div>}
                <Card framed={tier.popular} padding="var(--space-2xl)">
                  <div className={styles.tierInner}>
                    <h2 className={styles.tierName}>{tier.name}</h2>
                    <p className={styles.tierPeople}>{tier.people}</p>
                    <p className={styles.tierPp}>{tier.pp} <span className={styles.pp}>pp</span></p>
                    <p className={styles.tierTotal}>{tier.total} total</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          <p className={styles.note}>Pricing includes a beautiful display with variety, abundance &amp; fresh local ingredients.</p>
        </div>
      </section>

      <section className={styles.includesSection}>
        <div className={styles.inner}>
          <SectionHeading title="What's Included" rule align="center" />
          <div className={styles.includesGrid}>
            {INCLUDES.map(item => (
              <div key={item.title} className={styles.includeItem}>
                <IconCircle size={64}><span className={styles.includeIcon}>{item.icon}</span></IconCircle>
                <h3 className={styles.includeTitle}>{item.title}</h3>
                <p className={styles.includeDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaBand}>
        <p className={styles.ctaText}>Ready to plan your event?</p>
        <Button variant="olive" size="lg" href="/order">Request a Grazing Table</Button>
      </section>
    </>
  );
}
```

- [ ] **Step 4: Create app/grazing/page.module.css**

```css
.section { padding: var(--space-3xl) var(--page-pad); }
.inner { max-width: var(--max-width); margin: 0 auto; }
.tiersGrid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-xl);
  margin-bottom: var(--space-xl);
}
.tierWrap { position: relative; }
.badgeWrap { position: absolute; top: var(--space-md); right: var(--space-md); z-index: 1; }
.tierInner { text-align: center; }
.tierName {
  font-family: var(--font-display);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--clay-500);
  margin-bottom: var(--space-sm);
}
.tierPeople {
  font-family: var(--font-ui);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-300);
  margin-bottom: var(--space-xl);
}
.tierPp {
  font-family: var(--font-ui);
  font-size: 40px;
  font-weight: 700;
  color: var(--ink-900);
  line-height: 1;
  margin-bottom: var(--space-sm);
}
.pp { font-size: 18px; font-weight: 400; color: var(--ink-500); }
.tierTotal {
  font-family: var(--font-serif);
  font-size: 15px;
  font-style: italic;
  color: var(--ink-500);
}
.note {
  font-family: var(--font-serif);
  font-size: 15px;
  font-style: italic;
  color: var(--ink-500);
  text-align: center;
}
.includesSection {
  background: var(--paper-1);
  padding: var(--space-3xl) var(--page-pad);
  border-top: 1px solid var(--hairline);
}
.includesGrid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-2xl);
}
.includeItem { display: flex; flex-direction: column; align-items: center; text-align: center; gap: var(--space-md); }
.includeIcon { color: var(--clay-500); }
.includeTitle {
  font-family: var(--font-serif);
  font-size: 17px;
  font-weight: 600;
  color: var(--ink-900);
}
.includeDesc {
  font-family: var(--font-serif);
  font-size: 14px;
  font-style: italic;
  color: var(--ink-500);
}
.ctaBand {
  padding: var(--space-2xl) var(--page-pad);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xl);
  border-top: 1px solid var(--hairline);
}
.ctaText { font-family: var(--font-serif); font-size: 24px; font-style: italic; color: var(--ink-700); }
@media (max-width: 768px) {
  .tiersGrid { grid-template-columns: 1fr; }
  .includesGrid { grid-template-columns: 1fr; }
}
```

- [ ] **Step 5: Create app/about/page.tsx**

```tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import { Instagram, Mail, Phone, MapPin, Leaf, Star, Recycle, Package } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { IconCircle } from '@/components/IconCircle';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import styles from './page.module.css';

export const metadata: Metadata = { title: "About — Cleo's Charcuterie & Oysters Co." };

const VALUES = [
  { icon: <Leaf size={28} strokeWidth={1.25} />, label: 'Locally Sourced', desc: 'Ingredients from PEI farms and waters.' },
  { icon: <Star size={28} strokeWidth={1.25} />, label: 'Made Fresh', desc: 'Assembled to order, every time.' },
  { icon: <Recycle size={28} strokeWidth={1.25} />, label: 'Sustainable', desc: 'Mindful sourcing and minimal waste.' },
  { icon: <Package size={28} strokeWidth={1.25} />, label: 'Order Ahead', desc: 'Book in advance to secure your date.' },
];

const CONTACTS = [
  { icon: <Instagram size={20} strokeWidth={1.4} />, label: '@cleos_charcuterie', href: 'https://instagram.com/cleos_charcuterie' },
  { icon: <Mail size={20} strokeWidth={1.4} />, label: 'danibr-11@hotmail.com', href: 'mailto:danibr-11@hotmail.com' },
  { icon: <Phone size={20} strokeWidth={1.4} />, label: '782-377-8050', href: 'tel:7823778050' },
  { icon: <MapPin size={20} strokeWidth={1.4} />, label: 'Prince Edward Island', href: undefined },
];

export default function AboutPage() {
  return (
    <>
      <PageHero kicker="Our story" title="About Cleo's" />

      <section className={styles.story}>
        <div className={styles.inner}>
          <div className={styles.storyGrid}>
            <div className={styles.storyImageWrap}>
              <Image src="/food-cluster.png" alt="Cleo's handcrafted charcuterie" width={480} height={480} className={styles.storyImage} />
              <p className={styles.storyScript}>Made with love in PEI &#9825;</p>
            </div>
            <div className={styles.storyText}>
              <p className={styles.storySerpraf}>
                Cleo&apos;s Charcuterie &amp; Oysters Co. was born from a love of good food, great company,
                and the incredible flavours Prince Edward Island has to offer. We believe that a beautiful
                board brings people together — and that every gathering deserves something special.
              </p>
              <p className={styles.storyPara}>
                Everything we make is assembled with care, using locally sourced ingredients that celebrate
                the best of PEI. From our signature charcuterie boards to seafood platters and grazing tables,
                each creation is a little piece of the island on your table.
              </p>
              <p className={styles.storyTagline}>Simple. Beautiful. Made to Share.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className={styles.inner}>
          <SectionHeading title="Good to Know" rule align="center" />
          <div className={styles.valuesGrid}>
            {VALUES.map(v => (
              <div key={v.label} className={styles.valueItem}>
                <IconCircle size={80}><span className={styles.valueIcon}>{v.icon}</span></IconCircle>
                <p className={styles.valueLabel}>{v.label}</p>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
          <div className={styles.banner}>
            <p className={styles.bannerText}>Locally sourced. Made with love in PEI. &#9825;</p>
          </div>
        </div>
      </section>

      <section className={styles.contact}>
        <div className={styles.inner}>
          <SectionHeading title="Get in Touch" rule align="center" />
          <div className={styles.contactGrid}>
            {CONTACTS.map(c => (
              <Card key={c.label} padding="var(--space-xl)">
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>{c.icon}</span>
                  {c.href
                    ? <a href={c.href} className={styles.contactLabel} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{c.label}</a>
                    : <span className={styles.contactLabel}>{c.label}</span>
                  }
                </div>
              </Card>
            ))}
          </div>
          <div className={styles.contactCta}>
            <Button variant="olive" size="lg" href="/order">Place an Order</Button>
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 6: Create app/about/page.module.css**

```css
.story { padding: var(--space-3xl) var(--page-pad); }
.inner { max-width: var(--max-width); margin: 0 auto; }
.storyGrid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-3xl); align-items: center; }
.storyImageWrap { position: relative; }
.storyImage { width: 100%; height: auto; border-radius: var(--radius-lg); }
.storyScript {
  font-family: var(--font-script);
  font-size: 32px;
  color: var(--clay-500);
  text-align: center;
  margin-top: var(--space-md);
}
.storySerpraf {
  font-family: var(--font-serif);
  font-size: clamp(17px, 2vw, 22px);
  font-style: italic;
  color: var(--ink-700);
  line-height: 1.7;
  margin-bottom: var(--space-xl);
}
.storyPara {
  font-family: var(--font-serif);
  font-size: 16px;
  color: var(--ink-700);
  line-height: 1.8;
  margin-bottom: var(--space-xl);
}
.storyTagline {
  font-family: var(--font-script);
  font-size: 28px;
  color: var(--clay-500);
  font-style: italic;
}

.values {
  background: var(--paper-1);
  padding: var(--space-3xl) var(--page-pad);
  border-top: 1px solid var(--hairline);
}
.valuesGrid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--space-xl);
  margin-bottom: var(--space-2xl);
}
.valueItem { display: flex; flex-direction: column; align-items: center; text-align: center; gap: var(--space-md); }
.valueIcon { color: var(--clay-500); }
.valueLabel {
  font-family: var(--font-ui);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-700);
}
.valueDesc {
  font-family: var(--font-serif);
  font-size: 14px;
  font-style: italic;
  color: var(--ink-500);
}
.banner {
  background: var(--olive-500);
  border-radius: var(--radius-banner);
  padding: var(--space-xl) var(--space-2xl);
  text-align: center;
}
.bannerText {
  font-family: var(--font-script);
  font-size: clamp(24px, 3vw, 36px);
  color: var(--gold-300);
}

.contact { padding: var(--space-3xl) var(--page-pad); }
.contactGrid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-md);
  margin-bottom: var(--space-2xl);
}
.contactItem { display: flex; align-items: center; gap: var(--space-md); }
.contactIcon { color: var(--gold-500); flex-shrink: 0; }
.contactLabel {
  font-family: var(--font-serif);
  font-size: 16px;
  color: var(--ink-700);
  text-decoration: none;
}
a.contactLabel:hover { color: var(--clay-500); text-decoration: underline; text-underline-offset: 3px; }
.contactCta { display: flex; justify-content: center; }

@media (max-width: 768px) {
  .storyGrid { grid-template-columns: 1fr; }
  .valuesGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .contactGrid { grid-template-columns: 1fr; }
}
```

- [ ] **Step 7: Verify build**

```bash
npx next build
```
Expected: routes `/seafood`, `/grazing`, `/about` compile, no errors.

- [ ] **Step 8: Commit**

```bash
git add app/seafood/ app/grazing/ app/about/ && git commit -m "feat: seafood, grazing, and about pages"
```

---

### Task 10: WhatsApp Utility + OrderBuilder + Order Page

**Files:**
- Create: `lib/whatsapp.ts`
- Create: `lib/whatsapp.test.ts`
- Create: `components/OrderBuilder.tsx`, `components/OrderBuilder.module.css`
- Create: `app/order/page.tsx`, `app/order/page.module.css`

**Interfaces:**
- Produces:
  - `buildWhatsAppUrl(board: BoardOption, addons: AddonOption[]): string`
  - `OrderBuilder()` — Client Component with board selection, addon toggles, live total, WhatsApp submit

- [ ] **Step 1: Write failing test for WhatsApp URL builder**

`lib/whatsapp.test.ts`:
```typescript
import { buildWhatsAppUrl } from './whatsapp';

const CLASSIC: import('./whatsapp').BoardOption = {
  id: 'classic',
  name: 'Classic Board',
  people: '5–7',
  price: 75,
};

const ADDON_CHEESE: import('./whatsapp').AddonOption = {
  id: 'extra-cheese',
  name: 'Extra Cheese',
  price: 10,
};

describe('buildWhatsAppUrl', () => {
  it('builds a wa.me URL with phone number', () => {
    const url = buildWhatsAppUrl(CLASSIC, []);
    expect(url).toMatch(/^https:\/\/wa\.me\/17823778050\?text=/);
  });

  it('encodes board name and price in message', () => {
    const url = buildWhatsAppUrl(CLASSIC, []);
    const decoded = decodeURIComponent(url.split('?text=')[1]);
    expect(decoded).toContain('Classic Board');
    expect(decoded).toContain('$75');
  });

  it('includes addon names and prices', () => {
    const url = buildWhatsAppUrl(CLASSIC, [ADDON_CHEESE]);
    const decoded = decodeURIComponent(url.split('?text=')[1]);
    expect(decoded).toContain('Extra Cheese');
    expect(decoded).toContain('$10');
  });

  it('calculates total correctly', () => {
    const url = buildWhatsAppUrl(CLASSIC, [ADDON_CHEESE]);
    const decoded = decodeURIComponent(url.split('?text=')[1]);
    expect(decoded).toContain('$85');
  });

  it('returns no-addons total when addons array is empty', () => {
    const url = buildWhatsAppUrl(CLASSIC, []);
    const decoded = decodeURIComponent(url.split('?text=')[1]);
    expect(decoded).toContain('$75');
  });
});
```

- [ ] **Step 2: Run test to confirm it fails**

```bash
npx jest lib/whatsapp.test.ts
```
Expected: FAIL — "Cannot find module './whatsapp'"

- [ ] **Step 3: Implement lib/whatsapp.ts**

```typescript
export interface BoardOption {
  id: string;
  name: string;
  people: string;
  price: number;
}

export interface AddonOption {
  id: string;
  name: string;
  price: number;
}

export function buildWhatsAppUrl(board: BoardOption, addons: AddonOption[]): string {
  const phone = '17823778050';
  const total = board.price + addons.reduce((sum, a) => sum + a.price, 0);

  const addonLines = addons.length > 0
    ? addons.map(a => `• ${a.name} — $${a.price}`).join('\n')
    : '• None';

  const message = [
    "Hello! I'd like to place an order:",
    '',
    `Board: ${board.name} (${board.people} people) — $${board.price}`,
    'Add-ons:',
    addonLines,
    '',
    `Total: $${total}`,
    '',
    'Thank you! ♡',
  ].join('\n');

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
```

- [ ] **Step 4: Run test to confirm it passes**

```bash
npx jest lib/whatsapp.test.ts
```
Expected: PASS — 5 tests pass.

- [ ] **Step 5: Write OrderBuilder component**

`components/OrderBuilder.tsx`:
```tsx
'use client';
import { useState } from 'react';
import { Check } from 'lucide-react';
import { Card } from './Card';
import { PriceTag } from './PriceTag';
import { Button } from './Button';
import { Divider } from './Divider';
import { buildWhatsAppUrl, type BoardOption, type AddonOption } from '@/lib/whatsapp';
import styles from './OrderBuilder.module.css';

const BOARDS: BoardOption[] = [
  { id: 'mini', name: 'Mini Board', people: '2–4', price: 40 },
  { id: 'classic', name: 'Classic Board', people: '5–7', price: 75 },
  { id: 'large', name: 'Large Board', people: '8–12', price: 110 },
  { id: 'party', name: 'Party Board', people: '15–20', price: 175 },
];

const ADDONS: AddonOption[] = [
  { id: 'crackers', name: 'Extra Crackers', price: 6 },
  { id: 'cheese', name: 'Extra Cheese', price: 10 },
  { id: 'meats', name: 'Extra Meats', price: 12 },
  { id: 'fruit', name: 'Extra Fruit', price: 8 },
  { id: 'honey', name: 'Honey / Jam Jar', price: 6 },
  { id: 'gf-crackers', name: 'Gluten-Free Crackers', price: 8 },
  { id: 'dessert', name: 'Dessert Add-On', price: 15 },
];

export function OrderBuilder() {
  const [boardId, setBoardId] = useState<string>('classic');
  const [addonIds, setAddonIds] = useState<Set<string>>(new Set());
  const [placed, setPlaced] = useState(false);

  const selectedBoard = BOARDS.find(b => b.id === boardId)!;
  const selectedAddons = ADDONS.filter(a => addonIds.has(a.id));
  const total = selectedBoard.price + selectedAddons.reduce((s, a) => s + a.price, 0);

  function toggleAddon(id: string) {
    setAddonIds(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function handleOrder() {
    const url = buildWhatsAppUrl(selectedBoard, selectedAddons);
    window.open(url, '_blank', 'noopener,noreferrer');
    setPlaced(true);
  }

  return (
    <div className={styles.builder}>
      {/* Left: Selections */}
      <div className={styles.left}>
        <div className={styles.step}>
          <p className={styles.stepLabel}><span className={styles.stepNum}>1</span> Choose your board</p>
          <div className={styles.boardList}>
            {BOARDS.map(board => (
              <button
                key={board.id}
                className={[styles.boardOption, boardId === board.id ? styles.selected : ''].filter(Boolean).join(' ')}
                onClick={() => setBoardId(board.id)}
                type="button"
                aria-pressed={boardId === board.id}
              >
                <span className={styles.boardCheck}>
                  {boardId === board.id && <Check size={14} strokeWidth={2.5} />}
                </span>
                <span className={styles.boardInfo}>
                  <span className={styles.boardOptionName}>{board.name}</span>
                  <span className={styles.boardOptionPeople}>{board.people} people</span>
                </span>
                <PriceTag>${board.price}</PriceTag>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.step}>
          <p className={styles.stepLabel}><span className={styles.stepNum}>2</span> Add a little extra</p>
          <div className={styles.addonList}>
            {ADDONS.map(addon => (
              <button
                key={addon.id}
                className={[styles.addonChip, addonIds.has(addon.id) ? styles.addonOn : ''].filter(Boolean).join(' ')}
                onClick={() => toggleAddon(addon.id)}
                type="button"
                aria-pressed={addonIds.has(addon.id)}
              >
                {addon.name} +${addon.price}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Summary */}
      <div className={styles.right}>
        <div className={styles.stickyCard}>
          {placed ? (
            <Card framed padding="var(--space-2xl)">
              <p className={styles.thankYou}>Thank you! &#9825;</p>
              <p className={styles.thankYouSub}>We&apos;ll confirm your order on WhatsApp shortly.</p>
              <Button variant="ghost" size="sm" onClick={() => setPlaced(false)}>Edit Order</Button>
            </Card>
          ) : (
            <Card framed padding="var(--space-xl)">
              <h3 className={styles.summaryTitle}>Your Order</h3>
              <div className={styles.summaryBoard}>
                <span className={styles.summaryItem}>{selectedBoard.name}</span>
                <span className={styles.summaryPrice}>${selectedBoard.price}</span>
              </div>
              {selectedAddons.length > 0 && (
                <div className={styles.summaryAddons}>
                  {selectedAddons.map(a => (
                    <div key={a.id} className={styles.summaryAddon}>
                      <span className={styles.summaryItem}>{a.name}</span>
                      <span className={styles.summaryPrice}>${a.price}</span>
                    </div>
                  ))}
                </div>
              )}
              <Divider />
              <div className={styles.summaryTotal}>
                <span className={styles.totalLabel}>TOTAL</span>
                <span className={styles.totalAmount}>${total}</span>
              </div>
              <Button variant="olive" size="lg" block onClick={handleOrder}>
                Send Order on WhatsApp
              </Button>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
```

`components/OrderBuilder.module.css`:
```css
.builder {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: var(--space-3xl);
  align-items: start;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--space-3xl) var(--page-pad);
}

/* Step labels */
.step { margin-bottom: var(--space-2xl); }
.stepLabel {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--clay-500);
  margin-bottom: var(--space-lg);
}
.stepNum {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1.5px solid var(--gold-500);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  flex-shrink: 0;
}

/* Board options */
.boardList { display: flex; flex-direction: column; gap: var(--space-sm); }
.boardOption {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-md) var(--space-lg);
  border: 1.5px solid var(--hairline);
  border-radius: var(--radius-md);
  background: var(--paper-1);
  cursor: pointer;
  transition: border-color var(--dur-fast) var(--ease-soft),
              background var(--dur-fast) var(--ease-soft);
  text-align: left;
  width: 100%;
}
.boardOption:hover { border-color: var(--clay-500); }
.selected { border-color: var(--clay-500); background: oklch(50% 0.11 38 / 0.04); }
.boardCheck {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1.5px solid var(--clay-500);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--clay-500);
}
.selected .boardCheck { background: var(--clay-500); color: white; }
.boardInfo { flex: 1; display: flex; flex-direction: column; gap: 2px; }
.boardOptionName {
  font-family: var(--font-serif);
  font-size: 16px;
  font-weight: 600;
  color: var(--ink-900);
}
.boardOptionPeople {
  font-family: var(--font-ui);
  font-size: 11px;
  color: var(--ink-300);
  letter-spacing: 0.10em;
}

/* Addon chips */
.addonList { display: flex; flex-wrap: wrap; gap: var(--space-sm); }
.addonChip {
  font-family: var(--font-ui);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  padding: var(--space-sm) var(--space-md);
  border: 1.5px solid var(--hairline);
  border-radius: 999px;
  background: var(--paper-1);
  cursor: pointer;
  color: var(--ink-700);
  transition: all var(--dur-fast) var(--ease-soft);
}
.addonChip:hover { border-color: var(--olive-500); }
.addonOn { background: var(--olive-500); border-color: var(--olive-500); color: var(--text-on-dark); }

/* Summary card */
.right {}
.stickyCard { position: sticky; top: 120px; }
.summaryTitle {
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--clay-500);
  margin-bottom: var(--space-lg);
}
.summaryBoard, .summaryAddon {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-sm);
}
.summaryAddons { margin-top: var(--space-sm); }
.summaryItem {
  font-family: var(--font-serif);
  font-size: 15px;
  color: var(--ink-700);
}
.summaryPrice {
  font-family: var(--font-ui);
  font-size: 14px;
  font-weight: 600;
  color: var(--ink-900);
}
.summaryTotal {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-xl);
}
.totalLabel {
  font-family: var(--font-ui);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  color: var(--ink-300);
}
.totalAmount {
  font-family: var(--font-ui);
  font-size: 28px;
  font-weight: 700;
  color: var(--clay-500);
}

/* Confirmation */
.thankYou {
  font-family: var(--font-script);
  font-size: 40px;
  color: var(--clay-500);
  text-align: center;
  margin-bottom: var(--space-md);
}
.thankYouSub {
  font-family: var(--font-serif);
  font-size: 15px;
  font-style: italic;
  color: var(--ink-500);
  text-align: center;
  margin-bottom: var(--space-xl);
}

@media (max-width: 768px) {
  .builder { grid-template-columns: 1fr; }
  .stickyCard { position: static; }
}
```

- [ ] **Step 6: Create app/order/page.tsx**

```tsx
import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { OrderBuilder } from '@/components/OrderBuilder';

export const metadata: Metadata = { title: "Place an Order — Cleo's Charcuterie & Oysters Co." };

export default function OrderPage() {
  return (
    <>
      <PageHero kicker="Let's graze!" title="Place an Order" />
      <OrderBuilder />
    </>
  );
}
```

- [ ] **Step 7: Run all tests**

```bash
npx jest
```
Expected: all 5 whatsapp tests pass.

- [ ] **Step 8: Verify build**

```bash
npx next build
```
Expected: all 6 routes compile, no TypeScript errors.

- [ ] **Step 9: Manual test — order flow**

```bash
npx next dev
```
Open `localhost:3000/order`. Confirm:
1. Default selection is "Classic Board" with filled check.
2. Selecting "Party Board" updates right-side total.
3. Toggling "Extra Cheese" adds $10, toggles off removes it.
4. Clicking "Send Order on WhatsApp" opens `wa.me/17823778050?text=...` in new tab.
5. Right card swaps to "Thank you! ♡" state.
6. "Edit Order" resets to selection state.

- [ ] **Step 10: Commit**

```bash
git add lib/ components/OrderBuilder.tsx components/OrderBuilder.module.css app/order/ && git commit -m "feat: order page with WhatsApp integration and full interactive state"
```

---

### Task 11: Vercel Deployment

**Files:**
- Create: `vercel.json`
- Modify: `package.json` (add scripts)

- [ ] **Step 1: Ensure next.config.ts is production-ready**

Confirm `next.config.ts` already has `images.formats`. No changes needed.

- [ ] **Step 2: Final type-check + build**

```bash
npx tsc --noEmit && npx next build
```
Expected: both pass with no errors.

- [ ] **Step 3: Commit production-ready state**

```bash
git add -A && git commit -m "feat: production-ready Cleo's website — 6 pages, WhatsApp order, Vercel"
```

- [ ] **Step 4: Deploy to Vercel**

```bash
npx vercel --yes
```
Expected: deployment URL printed, e.g. `https://cleos-xyz.vercel.app`.

- [ ] **Step 5: Smoke-test production**

Open the Vercel URL. Verify:
1. All 6 routes load (`/`, `/boards`, `/seafood`, `/grazing`, `/about`, `/order`).
2. Fonts render (Cinzel for headings, Cormorant for body prose, Great Vibes for script taglines).
3. Header masthead centered wordmark visible, nav links work.
4. Footer olive background with script close.
5. Order page WhatsApp button opens correct `wa.me` link.
6. No horizontal scroll at any viewport.
7. No emoji anywhere — only ♡ and ⚓ glyphs.

- [ ] **Step 6: Deploy to production**

```bash
npx vercel --prod
```

---

## Self-Review

**Spec coverage:**

| Spec requirement | Covered in |
|---|---|
| 6 pages: Home, Boards, Seafood, Grazing, About, Order | Tasks 7–10 |
| CSS custom properties, no Tailwind | Task 2 |
| next/font: Cinzel, Cormorant, Great Vibes, Montserrat | Task 3 |
| next/image for photos | Tasks 7–9 |
| WhatsApp wa.me order flow | Task 10 |
| N6 Masthead nav | Task 6 |
| Ft6 Letter close footer | Task 6 |
| Board data (4 boards + 7 add-ons) | Tasks 7, 8, 10 |
| Seafood data (3 sizes + 4 items) | Task 9 |
| Grazing data (3 tiers + includes) | Task 9 |
| About story + contact | Task 9 |
| Responsive breakpoints | All CSS modules |
| `overflow-x: clip` on html/body | Task 2 |
| No emoji, only ♡ and ⚓ | All components |
| Painted olive banner (organic radius) | Tasks 7, 9 |
| `prefers-reduced-motion` | Task 2 |
| Vercel deployment | Task 11 |

**No placeholders found.** All prices, copy, and brand data are verbatim from spec. All code blocks are complete. Type signatures are consistent across tasks (BoardOption/AddonOption defined in Task 10 Step 3, consumed in OrderBuilder Step 5).
