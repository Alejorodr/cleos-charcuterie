import styles from './PriceTag.module.css';

export function PriceTag({ children }: { children: string }) {
  return <span className={styles.tag}>{children}</span>;
}
