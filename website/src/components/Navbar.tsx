"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav
      style={{
        background: "#ffffff",
        borderBottom: "1px solid #e1e4e8",
        padding: "0 max(24px, calc((100% - 1100px) / 2))",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "56px",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {/* Logo */}
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
            color: "#1a1a2e",
            letterSpacing: "-0.5px",
          }}
        >
          Blyx
        </span>
      </Link>

      {/* Nav Links */}
      <div style={{ display: "flex", gap: "24px", alignItems: "center", flexWrap: "wrap" }}>
        {[
          ["Install", "/download"],
          ["Docs", "/docs"],
          ["Playground", "/play"],
          ["Compiler", "/compiler"],
          ["Packages", "/packages"],
          ["Blog", "/blog"],
          ["Community", "/community"],
        ].map(([label, href]) => (
          <Link
            key={href}
            href={href}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "15px",
              color: "#586069",
              textDecoration: "none",
            }}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
