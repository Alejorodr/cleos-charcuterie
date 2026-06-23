import styles from './Badge.module.css';

interface BadgeProps { tone: 'olive'; children: React.ReactNode; }

export function Badge({ tone, children }: BadgeProps) {
  return <span className={`${styles.badge} ${styles[tone]}`}>{children}</span>;
}
