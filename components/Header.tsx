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
