import styles from './Divider.module.css';

export function Divider() {
  return (
    <div className={styles.divider} role="separator" aria-hidden="true">
      <span className={styles.heart}>&#9825;</span>
    </div>
  );
}
