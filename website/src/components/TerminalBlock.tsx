'use client';

import React from 'react';

export default function TerminalBlock() {
  return (
    <div className="w-full max-w-3xl bg-[#020509] border border-[#1a2535] rounded-xl overflow-hidden shadow-2xl font-mono text-sm">
      <div className="flex items-center px-4 py-3 bg-[#0d1420] border-b border-[#1a2535] gap-2">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        <span className="text-xs text-[#6b7a96] ml-2">bash — blyx quickstart</span>
      </div>
      <div className="p-6 space-y-3 leading-relaxed">
        <div>
          <span className="text-[#00ff88] font-bold">$ </span>
          <span className="text-[#e8edf5]">curl -sSf https://blyx-lang.space/install.sh | sh</span>
        </div>
        <div className="text-[#6b7a96]">Installing blyxc, blyxpkg, blyxup (v0.1.0-alpha)...</div>
        <div>
          <span className="text-[#00ff88] font-bold">$ </span>
          <span className="text-[#e8edf5]">blyxc --version</span>
        </div>
        <div className="text-[#00e5ff]">blyx 0.1.0-alpha (stable release)</div>
        <div>
          <span className="text-[#00ff88] font-bold">$ </span>
          <span className="text-[#e8edf5]">blyxpkg new hello && cd hello</span>
        </div>
        <div className="text-[#6b7a96]">✓ Created new Blyx package `hello`</div>
        <div>
          <span className="text-[#00ff88] font-bold">$ </span>
          <span className="text-[#e8edf5]">blyxpkg run</span>
        </div>
        <div className="text-[#00ff88] font-bold">Hello, World from Blyx! <span className="animate-blink">▮</span></div>
      </div>
    </div>
  );
}
