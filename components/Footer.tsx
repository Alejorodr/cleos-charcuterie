import { Mail, Phone, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

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
          <a href="https://www.instagram.com/cleos_charcuterie" className={styles.contact} target="_blank" rel="noopener noreferrer">
            <span className={styles.icon}><InstagramIcon /></span>
            <span>@cleos_charcuterie</span>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61589357883370" className={styles.contact} target="_blank" rel="noopener noreferrer">
            <span className={styles.icon}><FacebookIcon /></span>
            <span>Cleo&apos;s Charcuterie &amp; Oysters</span>
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
