'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-[#07090e]/85 backdrop-blur-md border-b border-[#00f2fe]/15">
      <Link href="/" className="flex items-center gap-3 font-bold text-xl text-[#00f2fe]">
        <img src="/blyx.png" alt="Blyx Logo" className="w-8 h-8 rounded-lg shadow-md shadow-[#00f2fe]/30" />
        <span>Blyx</span>
      </Link>

      <div className="hidden md:flex items-center gap-6 text-sm text-[#94a3b8]">
        <Link href="/docs" className="hover:text-[#00f2fe] transition-colors">Docs</Link>
        <Link href="/play" className="hover:text-[#00f2fe] transition-colors">Playground</Link>
        <Link href="/download" className="hover:text-[#00f2fe] transition-colors">Download</Link>
        <Link href="/packages" className="hover:text-[#00f2fe] transition-colors">Packages</Link>
        <Link href="/benchmarks" className="hover:text-[#00f2fe] transition-colors">Benchmarks</Link>
        <Link href="/vscode" className="hover:text-[#00f2fe] transition-colors">VS Code</Link>
        <Link href="/community" className="hover:text-[#00f2fe] transition-colors">Community</Link>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <Link href="/play" className="px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-[#00f2fe] to-[#7f00ff] text-black hover:opacity-90 shadow-lg shadow-[#00f2fe]/20">
          Try Online
        </Link>
      </div>

      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#94a3b8] focus:outline-none">
        ☰
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#0f141d] border-b border-[#00f2fe]/20 p-4 flex flex-col gap-3 md:hidden">
          <Link href="/docs" onClick={() => setIsOpen(false)} className="text-[#f8fafc]">Docs</Link>
          <Link href="/play" onClick={() => setIsOpen(false)} className="text-[#f8fafc]">Playground</Link>
          <Link href="/download" onClick={() => setIsOpen(false)} className="text-[#f8fafc]">Download</Link>
          <Link href="/packages" onClick={() => setIsOpen(false)} className="text-[#f8fafc]">Packages</Link>
          <Link href="/benchmarks" onClick={() => setIsOpen(false)} className="text-[#f8fafc]">Benchmarks</Link>
          <Link href="/vscode" onClick={() => setIsOpen(false)} className="text-[#f8fafc]">VS Code</Link>
        </div>
      )}
    </nav>
  );
}
