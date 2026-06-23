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
