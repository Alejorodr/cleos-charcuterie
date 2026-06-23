import styles from './Card.module.css';

interface CardProps {
  framed?: boolean;
  padding?: string;
  className?: string;
  children: React.ReactNode;
}

export function Card({ framed, padding, className = '', children }: CardProps) {
  return (
    <div
      className={[styles.card, framed ? styles.framed : '', className].filter(Boolean).join(' ')}
      style={padding ? { padding } : undefined}
    >
      {children}
    </div>
  );
}
