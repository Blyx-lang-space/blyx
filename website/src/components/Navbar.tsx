"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Search from "./Search";
import ThemeToggle from "./ThemeToggle";
import { Github, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Docs", href: "/docs" },
  { label: "Download", href: "/download" },
  { label: "Compiler", href: "/compiler" },
  { label: "Playground", href: "/play" },
  { label: "Packages", href: "/packages" },
  { label: "Blog", href: "/blog" },
  { label: "Community", href: "/community" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-8 h-8 rounded-lg bg-black dark:bg-white text-white dark:text-black font-['IBM_Plex_Sans'] font-bold text-lg flex items-center justify-center tracking-tighter">
            B
          </div>
          <div className="flex flex-col">
            <span className="font-['IBM_Plex_Sans'] font-bold text-lg text-[var(--text-primary)] tracking-tight group-hover:text-[var(--accent)] transition-colors">
              BLYX
            </span>
            <span className="text-[10px] font-mono text-[var(--text-muted)] -mt-1">
              v0.1.0-beta
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  isActive
                    ? "text-[var(--accent)] font-semibold"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center space-x-3">
          <Search />
          <ThemeToggle />
          <a
            href="https://github.com/Rahulchaube1/blyxxxx"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            aria-label="GitHub Repository"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center space-x-2 sm:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="sm:hidden border-b border-[var(--border-color)] bg-[var(--bg-card)] px-4 pt-2 pb-4 space-y-3">
          <Search />
          <nav className="flex flex-col space-y-2 pt-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
