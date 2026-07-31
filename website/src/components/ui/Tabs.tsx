'use client';

import React, { useState } from 'react';

interface TabItem {
  key: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  items: TabItem[];
  defaultKey?: string;
}

export function Tabs({ items, defaultKey }: TabsProps) {
  const [activeKey, setActiveKey] = useState(defaultKey || items[0]?.key);
  const currentTab = items.find((t) => t.key === activeKey);

  return (
    <div className="w-full">
      <div className="flex border-b border-white/10 gap-2 mb-4">
        {items.map((item) => (
          <button
            key={item.key}
            onClick={() => setActiveKey(item.key)}
            className={`px-4 py-2 text-xs font-mono rounded-t-lg transition-colors ${
              activeKey === item.key
                ? 'bg-[#00f2fe]/10 text-[#00f2fe] border-b-2 border-[#00f2fe] font-semibold'
                : 'text-[#94a3b8] hover:text-white'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="p-4 rounded-xl bg-[#0f141d] border border-white/5">
        {currentTab?.content}
      </div>
    </div>
  );
}
