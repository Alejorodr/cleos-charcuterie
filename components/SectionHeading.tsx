import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  rule?: boolean;
  align?: 'left' | 'center';
}

export function SectionHeading({ kicker, title, rule, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={`${styles.heading} ${styles[align]}`}>
      {kicker && <p className={styles.kicker}>{kicker}</p>}
      <h2 className={styles.title}>{title}</h2>
      {rule && <div className={styles.rule} aria-hidden="true" />}
    </div>
  );
}
