import React from 'react';

interface AlertProps {
  title?: string;
  children: React.ReactNode;
  variant?: 'info' | 'success' | 'warning' | 'error';
}

export function Alert({ title, children, variant = 'info' }: AlertProps) {
  const styles = {
    info: 'bg-[#00f2fe]/10 border-[#00f2fe]/30 text-[#00f2fe]',
    success: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
    warning: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
    error: 'bg-rose-500/10 border-rose-500/30 text-rose-400',
  };

  return (
    <div className={`p-4 rounded-xl border ${styles[variant]} text-sm`}>
      {title && <h5 className="font-bold mb-1 font-heading">{title}</h5>}
      <div className="text-xs text-[#cbd5e1]">{children}</div>
    </div>
  );
}
