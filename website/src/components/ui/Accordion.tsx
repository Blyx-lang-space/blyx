'use client';

import React, { useState } from 'react';

interface AccordionItem {
  key: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openKey, setOpenKey] = useState<string | null>(items[0]?.key || null);

  return (
    <div className="w-full divide-y divide-white/10 rounded-2xl bg-[#0f141d] border border-[#00f2fe]/15 overflow-hidden">
      {items.map((item) => {
        const isOpen = openKey === item.key;
        return (
          <div key={item.key} className="transition-colors">
            <button
              onClick={() => setOpenKey(isOpen ? null : item.key)}
              className="w-full flex items-center justify-between p-5 text-left font-semibold text-white hover:text-[#00f2fe] focus:outline-none"
            >
              <span>{item.title}</span>
              <span className="font-mono text-sm text-[#00f2fe]">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
              <div className="p-5 pt-0 text-sm text-[#cbd5e1] leading-relaxed border-t border-white/5">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
