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
      <section className={styles.hero}>
        <div className={styles.heroLogo}>
          <Image
            src="/logo.jpg"
            alt="Cleo's Charcuterie & Oysters Co. — official logo"
            fill
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 768px) 88vw, 480px"
            priority
          />
        </div>
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

      <section className={styles.ctaBand}>
        <div className={styles.ctaBandInner}>
          <p className={styles.ctaTagline}>Ready to share something beautiful?</p>
          <Button variant="olive" size="lg" href="/order">Place an Order</Button>
        </div>
      </section>
    </>
  );
}
