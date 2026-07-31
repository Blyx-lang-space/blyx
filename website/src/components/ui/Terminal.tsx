import React from 'react';

interface TerminalProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Terminal({ title = 'bash', children, className = '' }: TerminalProps) {
  return (
    <div className={`rounded-xl border border-[#00f2fe]/20 bg-[#07090e] overflow-hidden shadow-2xl ${className}`}>
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0f141d] border-b border-white/10 font-mono text-xs text-[#94a3b8]">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
          <span className="ml-2 font-medium">{title}</span>
        </div>
        <span>Blyx CLI</span>
      </div>
      <div className="p-4 font-mono text-sm text-[#38bdf8] overflow-x-auto leading-relaxed">
        {children}
      </div>
    </div>
  );
}
