import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
}

/** Botón base reutilizable en toda la aplicación. */
export const Button = ({ variant = 'primary', className = '', children, ...rest }: ButtonProps) => {
  const variantClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  return (
    <button className={`${variantClass} ${className}`} {...rest}>
      {children}
    </button>
  );
};
