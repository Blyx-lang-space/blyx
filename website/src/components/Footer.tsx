import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#24292e",
        color: "#d1d5db",
        padding: "60px 24px 40px",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "40px",
          marginBottom: "48px",
        }}
      >
        {/* Brand column */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <Image src="/blyx.png" alt="Blyx Logo" width={36} height={36} />
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 800,
                fontSize: "22px",
                color: "#ffffff",
              }}
            >
              Blyx
            </span>
          </div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              color: "#9ca3af",
              lineHeight: 1.6,
            }}
          >
            A language empowering everyone to build reliable and efficient AI systems.
            <br />
            Created by{" "}
            <a
              href="https://github.com/Rahulchaube1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ff8c66", textDecoration: "none" }}
            >
              Rahul Chaube
            </a>
            .
          </p>
        </div>

        {/* Get Help */}
        <div>
          <h4
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              color: "#ffffff",
              marginBottom: "16px",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            Get Help
          </h4>
          {[
            ["Documentation", "/docs"],
            ["The Blyx Book", "/learn/book"],
            ["Playground", "/play"],
            ["Compiler Architecture", "/compiler"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              style={{
                display: "block",
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                color: "#9ca3af",
                textDecoration: "none",
                marginBottom: "10px",
              }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Policies & Community */}
        <div>
          <h4
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              color: "#ffffff",
              marginBottom: "16px",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            Policies
          </h4>
          {[
            ["Code of Conduct", "/community"],
            ["License (MIT + Apache 2.0)", "/community"],
            ["Security Policy", "/security"],
            ["Engineering Blog", "/blog"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              style={{
                display: "block",
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                color: "#9ca3af",
                textDecoration: "none",
                marginBottom: "10px",
              }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Social Links */}
        <div>
          <h4
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              color: "#ffffff",
              marginBottom: "16px",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            Social
          </h4>
          {[
            ["GitHub Repository", "https://github.com/Rahulchaube1/blyxxxx"],
            ["GitHub Organization", "https://github.com/Blyx-lang-space"],
            ["Creator X Profile", "https://x.com/RahulChaube_"],
            ["LinkedIn Network", "https://linkedin.com/in/rahulchaube1"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                color: "#9ca3af",
                textDecoration: "none",
                marginBottom: "10px",
              }}
            >
              {label} ↗
            </a>
          ))}
        </div>
      </div>

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          borderTop: "1px solid #374151",
          paddingTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#9ca3af" }}>
          Dual MIT + Apache 2.0 License • Copyright © {new Date().getFullYear()} Rahul Chaube
        </span>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#9ca3af" }}>
          https://blyx-lang.space
        </span>
      </div>
    </footer>
  );
}
