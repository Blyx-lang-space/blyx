"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Search from "./Search";
import ThemeToggle from "./ThemeToggle";
import { Github, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Learn", href: "/learn" },
  { label: "Docs", href: "/docs" },
  { label: "Playground", href: "/play" },
  { label: "Packages", href: "/packages" },
  { label: "Compiler", href: "/compiler" },
  { label: "Download", href: "/download" },
  { label: "Examples", href: "/examples" },
  { label: "Blog", href: "/blog" },
  { label: "Community", href: "/community" },
  { label: "Roadmap", href: "/roadmap" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      style={{
        background: "#ffffff",
        borderBottom: "1px solid #e1e4e8",
        padding: "0 max(24px, calc((100% - 1400px) / 2))",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "64px",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {/* Left: Brand */}
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          textDecoration: "none",
        }}
      >
        <Image src="/blyx.png" alt="Blyx Logo" width={32} height={32} priority />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: "22px",
              color: "#1a1a2e",
              letterSpacing: "-0.5px",
              lineHeight: 1,
            }}
          >
            Blyx
          </span>
          <span style={{ fontFamily: "monospace", fontSize: "10px", color: "#64748b", marginTop: "2px" }}>
            v0.1.0-beta
          </span>
        </div>
      </Link>

      {/* Center/Right Links */}
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }} className="hidden xl:flex">
        {NAV_LINKS.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: "15px",
              color: "#586069",
              textDecoration: "none",
            }}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Actions: Search, GitHub, ThemeToggle */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Search />
        <ThemeToggle />
        <a
          href="https://github.com/Rahulchaube1/blyxxxx"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#586069", textDecoration: "none" }}
          aria-label="GitHub Repository"
        >
          <Github className="w-5 h-5" />
        </a>
      </div>
    </nav>
  );
}
