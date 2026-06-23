import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'olive' | 'outline' | 'ghost';
  size?: 'sm' | 'lg';
  block?: boolean;
  href?: string;
}

export function Button({ variant = 'olive', size = 'sm', block, href, children, className = '', ...props }: ButtonProps) {
  const cls = [styles.btn, styles[variant], styles[size], block ? styles.block : '', className].filter(Boolean).join(' ');
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button className={cls} {...props}>{children}</button>;
}
