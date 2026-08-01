'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Install', href: '/download' },
    { name: 'Learn', href: '/docs' },
    { name: 'Play', href: '/play' },
    { name: 'Blog', href: '/blog' },
    { name: 'Benchmarks', href: '/benchmarks' },
    { name: 'Roadmap', href: '/roadmap' },
    { name: 'Community', href: '/community' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0d1420]/80 backdrop-blur-md border-b border-[#1a2535]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 flex items-center justify-center rounded-lg bg-[#00e5ff]/10 border border-[#00e5ff]/30 group-hover:border-[#00e5ff] transition-all">
            <Image
              src="/blyx.png"
              alt="Blyx Logo"
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
          <span className="font-['Space_Grotesk'] font-bold text-xl tracking-tight text-[#e8edf5] group-hover:text-[#00e5ff] transition-colors">
            Blyx
          </span>
          <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#8b5cf6]/10 text-[#8b5cf6] border border-[#8b5cf6]/20 font-medium">
            v0.1.0-alpha
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#e8edf5]/80 hover:text-[#00e5ff] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/play"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00e5ff] text-[#05080f] font-['Space_Grotesk'] font-medium text-sm hover:bg-[#00e5ff]/90 transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_25px_rgba(0,229,255,0.5)]"
          >
            Try Online <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#e8edf5] hover:text-[#00e5ff] hover:bg-[#1a2535] focus:outline-none transition-all"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Full-Width Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#1a2535] bg-[#0d1420] px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-[#e8edf5] hover:text-[#00e5ff] hover:bg-[#1a2535] transition-all"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/play"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#00e5ff] text-[#05080f] font-['Space_Grotesk'] font-bold text-sm hover:bg-[#00e5ff]/90 transition-all"
            >
              Try Online <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
