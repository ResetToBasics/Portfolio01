import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md',
  children, 
  className = '', 
  ...props 
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none';
  
  const shadowClasses = 'shadow-[inset_0px_2px_2px_rgba(255,255,255,0.3),inset_0px_-3px_0px_rgba(0,0,0,0.15),0px_4px_6px_rgba(0,0,0,0.1)]';
  const activeClasses = 'active:translate-y-[1px] active:shadow-[inset_0px_1px_1px_rgba(255,255,255,0.3),inset_0px_-1px_0px_rgba(0,0,0,0.15),0px_2px_3px_rgba(0,0,0,0.1)]';

  const variants = {
    primary: `bg-gradient-to-b from-accent to-[#76c776] text-black rounded-xl ${shadowClasses} ${activeClasses} hover:brightness-105`,
    secondary: `bg-muted hover:bg-gray-100 text-primary rounded-xl ${shadowClasses} ${activeClasses}`,
    outline: `border border-border bg-white hover:bg-muted text-primary rounded-xl ${shadowClasses} ${activeClasses}`,
    ghost: `hover:bg-muted text-secondary hover:text-primary rounded-xl ${activeClasses}`,
  };

  const sizes = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-[15px]',
    lg: 'py-4 px-8 text-base',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

