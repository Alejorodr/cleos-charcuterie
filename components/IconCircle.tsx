import styles from './IconCircle.module.css';

interface IconCircleProps {
  size?: number;
  children: React.ReactNode;
  label?: string;
}

export function IconCircle({ size = 64, children, label }: IconCircleProps) {
  return (
    <div
      className={styles.circle}
      style={{ width: size, height: size }}
      aria-label={label}
    >
      {children}
    </div>
  );
}
