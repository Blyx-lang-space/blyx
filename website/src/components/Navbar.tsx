"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 100, background: "#ffffff", borderBottom: "1px solid #e1e4e8" }}>
      {/* Top Banner (Optional release notification bar) */}
      <div style={{ background: "#24292e", color: "#ffffff", textAlign: "center", padding: "6px 16px", fontSize: "13px", fontFamily: "'Inter', sans-serif" }}>
        Blyx v0.1.0-alpha is out!{" "}
        <a href="https://github.com/Rahulchaube1/blyxxxx/releases" target="_blank" rel="noopener noreferrer" style={{ color: "#ff8c66", textDecoration: "underline", fontWeight: 600 }}>
          Check out the release notes {"->"}
        </a>
      </div>

      {/* Main Navigation Bar */}
      <nav
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
        }}
      >
        {/* Brand */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
          }}
        >
          <Image src="/blyx.png" alt="Blyx Logo" width={40} height={40} priority />
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: "24px",
              color: "#24292e",
              letterSpacing: "-0.5px",
            }}
          >
            Blyx
          </span>
        </Link>

        {/* Navigation Links (Text only, no icons) */}
        <div style={{ display: "flex", gap: "28px", alignItems: "center" }} className="hidden md:flex">
          {[
            ["Install", "/download"],
            ["Learn", "/learn"],
            ["Playground", "/play"],
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
                color: "#586069",
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
              fontSize: "14px",
              color: "#d34516",
              textDecoration: "none",
              border: "1px solid #e1e4e8",
              padding: "6px 16px",
              borderRadius: "6px",
              background: "#ffffff",
            }}
          >
            GitHub ↗
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: "#ffffff",
            border: "1px solid #e1e4e8",
            color: "#24292e",
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

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div
            style={{
              position: "absolute",
              top: "98px",
              left: 0,
              right: 0,
              background: "#ffffff",
              borderBottom: "1px solid #e1e4e8",
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
            }}
            className="md:hidden"
          >
            {[
              ["Install", "/download"],
              ["Learn", "/learn"],
              ["Playground", "/play"],
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
                  color: "#24292e",
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
    </header>
  );
}
