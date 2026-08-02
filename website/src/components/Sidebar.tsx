"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface SidebarSection {
  title: string;
  links: { label: string; href: string }[];
}

export default function Sidebar({ sections }: { sections: SidebarSection[] }) {
  const pathname = usePathname();

  return (
    <aside className="w-64 flex-shrink-0 space-y-8 pr-6 border-r border-[var(--border-color)] hidden md:block">
      {sections.map((section, idx) => (
        <div key={idx} className="space-y-2">
          <h4 className="font-['IBM_Plex_Sans'] text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">
            {section.title}
          </h4>
          <ul className="space-y-1 text-sm">
            {section.links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block px-3 py-1.5 rounded-md font-medium transition-colors ${
                      isActive
                        ? "bg-[var(--bg-secondary)] text-[var(--accent)] font-semibold border-l-2 border-[var(--accent)]"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </aside>
  );
}
