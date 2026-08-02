import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#f6f8fa",
        borderTop: "1px solid #e5e7eb",
        color: "#616161",
        padding: "60px max(20px, calc((100% - 1300px) / 2)) 40px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "40px",
          marginBottom: "48px",
        }}
      >
        {/* Brand column */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
            <Image src="/blyx.png" alt="Blyx Logo" width={44} height={44} />
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: "24px",
                color: "#1f1f1f",
              }}
            >
              Blyx
            </span>
          </div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              color: "#616161",
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
              style={{ color: "#d34516", textDecoration: "none" }}
            >
              Rahul Chaube
            </a>
            .
          </p>
        </div>

        {/* Documentation */}
        <div>
          <h4
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              color: "#1f1f1f",
              marginBottom: "16px",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            Documentation
          </h4>
          {[
            ["The Blyx Book", "/learn/book"],
            ["API Reference", "/docs"],
            ["Interactive Playground", "/play"],
            ["Compiler Internals", "/compiler"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              style={{
                display: "block",
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                color: "#616161",
                textDecoration: "none",
                marginBottom: "10px",
              }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Community & Code */}
        <div>
          <h4
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              color: "#1f1f1f",
              marginBottom: "16px",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            Community
          </h4>
          {[
            ["GitHub Repository", "https://github.com/Rahulchaube1/blyxxxx"],
            ["Governance & RFCs", "/community"],
            ["Engineering Blog", "/blog"],
            ["Security Policy", "/security"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              style={{
                display: "block",
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                color: "#616161",
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
              fontWeight: 600,
              fontSize: "14px",
              color: "#1f1f1f",
              marginBottom: "16px",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            Social
          </h4>
          {[
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
                color: "#616161",
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
          borderTop: "1px solid #e5e7eb",
          paddingTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#616161" }}>
          Dual MIT + Apache 2.0 License • Copyright © {new Date().getFullYear()} Rahul Chaube
        </span>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#616161" }}>
          https://blyx-lang.space
        </span>
      </div>
    </footer>
  );
}
