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
      <PageHero kicker="Let&apos;s graze!" title="Grazing Tables" lead="Breathtaking displays for weddings, corporate events, and celebrations." />
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
          <SectionHeading title="What&apos;s Included" rule align="center" />
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
