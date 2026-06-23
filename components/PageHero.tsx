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
