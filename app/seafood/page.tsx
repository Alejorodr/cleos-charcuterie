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
