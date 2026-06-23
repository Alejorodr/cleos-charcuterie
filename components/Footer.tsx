import { AtSign, Mail, Phone, MapPin } from 'lucide-react';
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
            <AtSign size={16} strokeWidth={1.4} className={styles.icon} />
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
