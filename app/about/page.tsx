import type { Metadata } from 'next';
import Image from 'next/image';
import { AtSign, Mail, Phone, MapPin, Leaf, Star, Recycle, Package } from 'lucide-react';
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
  { icon: <AtSign size={20} strokeWidth={1.4} />, label: '@cleos_charcuterie', href: 'https://instagram.com/cleos_charcuterie' },
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
