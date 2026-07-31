import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'purple' | 'gray';
}

export function Badge({ children, variant = 'cyan' }: BadgeProps) {
  const styles = {
    cyan: "bg-[#00f2fe]/10 border-[#00f2fe]/20 text-[#00f2fe]",
    purple: "bg-[#7f00ff]/10 border-[#7f00ff]/20 text-[#c084fc]",
    gray: "bg-white/5 border-white/10 text-[#94a3b8]",
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold ${styles[variant]}`}>
      {children}
    </span>
  );
}
