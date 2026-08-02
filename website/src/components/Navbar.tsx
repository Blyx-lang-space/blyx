"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav
      style={{
        background: "#0a0e1a",
        borderBottom: "1px solid #1e293b",
        padding: "0 max(24px, calc((100% - 1200px) / 2))",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "60px",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {/* Brand */}
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          textDecoration: "none",
        }}
      >
        <Image src="/blyx.png" alt="Blyx Logo" width={28} height={28} priority />
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: "20px",
            color: "#f1f5f9",
            letterSpacing: "-0.5px",
          }}
        >
          Blyx
        </span>
      </Link>

      {/* Nav Links */}
      <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
        {[
          ["Install", "/download"],
          ["Learn", "/learn"],
          ["Play", "/play"],
          ["Tools", "/compiler"],
          ["Community", "/community"],
          ["Blog", "/blog"],
        ].map(([label, href]) => (
          <Link
            key={href}
            href={href}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: "14px",
              color: "#94a3b8",
              textDecoration: "none",
            }}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Right GitHub link */}
      <div>
        <a
          href="https://github.com/Rahulchaube1/blyxxxx"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            fontSize: "14px",
            color: "#60a5fa",
            textDecoration: "none",
          }}
        >
          GitHub ↗
        </a>
      </div>
    </nav>
  );
}
