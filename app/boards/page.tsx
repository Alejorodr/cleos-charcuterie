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
