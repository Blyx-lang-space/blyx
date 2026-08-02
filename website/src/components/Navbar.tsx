"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      style={{
        background: "#0a0e1a",
        borderBottom: "1px solid #1e293b",
        padding: "0 max(20px, calc((100% - 1300px) / 2))",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "72px",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {/* Left: Bigger Logo & Brand Text */}
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          textDecoration: "none",
        }}
      >
        <Image src="/blyx.png" alt="Blyx Logo" width={44} height={44} priority />
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: "26px",
            color: "#ffffff",
            letterSpacing: "-0.5px",
          }}
        >
          Blyx
        </span>
      </Link>

      {/* Desktop Links (No icons, text only) */}
      <div
        style={{
          display: "flex",
          gap: "28px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
        className="hidden md:flex"
      >
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
              fontSize: "15px",
              color: "#94a3b8",
              textDecoration: "none",
            }}
          >
            {label}
          </Link>
        ))}

        <a
          href="https://github.com/Rahulchaube1/blyxxxx"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: "15px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #1e293b",
            padding: "6px 14px",
            borderRadius: "6px",
            background: "#111827",
          }}
        >
          GitHub ↗
        </a>
      </div>

      {/* Mobile Menu Toggle Button (Text/Words only) */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        style={{
          background: "#111827",
          border: "1px solid #1e293b",
          color: "#ffffff",
          padding: "8px 14px",
          borderRadius: "6px",
          fontFamily: "'Inter', sans-serif",
          fontSize: "14px",
          fontWeight: 600,
          cursor: "pointer",
        }}
        className="md:hidden"
      >
        {mobileOpen ? "Close [X]" : "Menu [=]"}
      </button>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            position: "absolute",
            top: "72px",
            left: 0,
            right: 0,
            background: "#0a0e1a",
            borderBottom: "1px solid #1e293b",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
          className="md:hidden"
        >
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
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "16px",
                fontWeight: 500,
                color: "#e2e8f0",
                textDecoration: "none",
              }}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://github.com/Rahulchaube1/blyxxxx"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "16px",
              fontWeight: 600,
              color: "#60a5fa",
              textDecoration: "none",
              paddingTop: "8px",
            }}
          >
            GitHub Repository ↗
          </a>
        </div>
      )}
    </nav>
  );
}
