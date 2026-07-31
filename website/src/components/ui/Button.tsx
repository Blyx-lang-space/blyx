import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ variant = 'primary', size = 'md', className = '', children, ...props }: ButtonProps) {
  const base = "font-semibold rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#00f2fe]";
  
  const variants = {
    primary: "bg-gradient-to-r from-[#00f2fe] to-[#7f00ff] text-black hover:opacity-95 shadow-md shadow-[#00f2fe]/20",
    secondary: "bg-[#0f141d] text-white border border-[#00f2fe]/20 hover:border-[#00f2fe]",
    outline: "bg-transparent text-[#00f2fe] border border-[#00f2fe]/40 hover:bg-[#00f2fe]/10",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3 text-base",
  };

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}
