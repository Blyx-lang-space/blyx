"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      style={{
        background: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
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
      {/* Left: Brand Logo & Title */}
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
            color: "#1f1f1f",
            letterSpacing: "-0.5px",
          }}
        >
          Blyx
        </span>
      </Link>

      {/* Navigation Text Links (Rust Orange hover) */}
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
              color: "#616161",
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
            color: "#d34516",
            textDecoration: "none",
            border: "1px solid #e5e7eb",
            padding: "6px 14px",
            borderRadius: "6px",
            background: "#ffffff",
          }}
        >
          GitHub ↗
        </a>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        style={{
          background: "#ffffff",
          border: "1px solid #e5e7eb",
          color: "#1f1f1f",
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
            background: "#ffffff",
            borderBottom: "1px solid #e5e7eb",
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
                color: "#1f1f1f",
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
              color: "#d34516",
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
