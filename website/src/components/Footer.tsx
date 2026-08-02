import React from "react";
import Link from "next/link";

const FOOTER_NAV = [
  {
    title: "Language",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Download", href: "/download" },
      { label: "Playground", href: "/play" },
      { label: "Standard Library", href: "/packages" },
    ],
  },
  {
    title: "Toolchain",
    links: [
      { label: "Compiler Architecture", href: "/compiler" },
      { label: "BIR SSA Specification", href: "/compiler" },
      { label: "VS Code Extension", href: "/vscode" },
      { label: "Benchmarks", href: "/benchmarks" },
    ],
  },
  {
    title: "Community & Governance",
    links: [
      { label: "GitHub RFCs", href: "/community" },
      { label: "Discord Server", href: "/community" },
      { label: "Engineering Blog", href: "/blog" },
      { label: "Development Roadmap", href: "/roadmap" },
      { label: "Security Policy", href: "/security" },
      { label: "About & Creator", href: "/about" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-color)] text-xs text-[var(--text-secondary)] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded bg-black dark:bg-white text-white dark:text-black font-['IBM_Plex_Sans'] font-bold text-sm flex items-center justify-center">
                B
              </div>
              <span className="font-['IBM_Plex_Sans'] font-bold text-base text-[var(--text-primary)]">
                BLYX
              </span>
            </div>
            <p className="text-xs leading-relaxed text-[var(--text-muted)]">
              Blyx is an open-source systems programming language created by{" "}
              <a
                href="https://github.com/Rahulchaube1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-primary)] font-medium underline hover:text-[var(--accent)]"
              >
                Rahul Chaube
              </a>
              . Licensed under Dual MIT or Apache-2.0.
            </p>
          </div>

          {/* Navigation Columns */}
          {FOOTER_NAV.map((col, idx) => (
            <div key={idx} className="space-y-3">
              <h4 className="font-['IBM_Plex_Sans'] font-semibold text-xs text-[var(--text-primary)] uppercase tracking-wider">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link
                      href={link.href}
                      className="hover:text-[var(--text-primary)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between text-[var(--text-muted)] font-mono text-[11px] gap-4">
          <div>© {new Date().getFullYear()} Blyx Core Language Team. All rights reserved.</div>
          <div>Official Portal • https://blyx-lang.space</div>
        </div>
      </div>
    </footer>
  );
}
