import React from 'react';

interface CardProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export function Card({ title, subtitle, children, className = '' }: CardProps) {
  return (
    <div className={`p-6 rounded-2xl bg-[#0f141d] border border-[#00f2fe]/15 backdrop-blur-md transition-all hover:border-[#00f2fe]/40 ${className}`}>
      {title && <h3 className="text-xl font-bold text-white mb-1 font-heading">{title}</h3>}
      {subtitle && <p className="text-xs text-[#94a3b8] mb-4">{subtitle}</p>}
      {children}
    </div>
  );
}
