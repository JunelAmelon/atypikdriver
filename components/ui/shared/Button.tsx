'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps {
  href?: string;
  variant?: 'primary' | 'secondary' | 'gradient';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ 
  href, 
  variant = 'primary', 
  className = '', 
  children,
  onClick
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-bold transition-all duration-300';
  
  const variants = {
    primary: 'bg-primary hover:bg-secondary text-white hover:text-text py-3 px-6',
    secondary: 'bg-secondary hover:bg-primary text-text hover:text-white py-3 px-6',
    gradient: 'bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white py-3 px-6'
  };

  const styles = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
}