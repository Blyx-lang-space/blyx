import React from "react";
import Link from "next/link";
import Image from "next/image";

const COLS = [
  {
    heading: "Get Help",
    links: [
      ["Documentation", "/docs"],
      ["The Blyx Book", "/learn/book"],
      ["Playground (blyxplay)", "/play"],
      ["Compiler Architecture", "/compiler"],
      ["Benchmarks", "/benchmarks"],
    ],
  },
  {
    heading: "Policies",
    links: [
      ["Code of Conduct", "/community"],
      ["License: MIT + Apache 2.0", "/community"],
      ["Security Disclosures", "/security"],
      ["Engineering Blog", "/blog"],
      ["Roadmap", "/roadmap"],
    ],
  },
  {
    heading: "Social",
    links: [],
    social: [
      ["GitHub Repository", "https://github.com/Rahulchaube1/blyxxxx"],
      ["GitHub Organization", "https://github.com/Blyx-lang-space"],
      ["Creator X (Twitter)", "https://x.com/RahulChaube_"],
      ["LinkedIn", "https://linkedin.com/in/rahulchaube1"],
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#1f2937", color: "#d1d5db" }}>
      <div style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "clamp(48px, 6vw, 96px) clamp(20px, 5vw, 80px) clamp(32px, 4vw, 48px)",
        display: "grid",
        gridTemplateColumns: "2fr repeat(3, 1fr)",
        gap: "48px",
      }}>
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
            <Image src="/blyx.png" alt="Blyx Logo" width={48} height={48} />
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 900,
              fontSize: "26px",
              color: "#ffffff",
              letterSpacing: "-1px",
            }}>
              Blyx
            </span>
          </div>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(14px, 1.5vw, 16px)",
            color: "#9ca3af",
            lineHeight: 1.7,
            marginBottom: "20px",
            maxWidth: "340px",
          }}>
            A language empowering everyone to build reliable and efficient AI systems.
            Memory-safe. GPU-native. Actor-concurrent. Zero garbage collector.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#6b7280" }}>
            Created by{" "}
            <a href="https://github.com/Rahulchaube1" target="_blank" rel="noopener noreferrer"
              style={{ color: "#fb923c", fontWeight: 600 }}>
              Rahul Chaube
            </a>
          </p>
        </div>

        {/* Columns */}
        {COLS.map((col) => (
          <div key={col.heading}>
            <h4 style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(13px, 1.4vw, 15px)",
              color: "#f9fafb",
              marginBottom: "20px",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}>
              {col.heading}
            </h4>
            {col.links.map(([label, href]) => (
              <Link key={href} href={href} style={{
                display: "block",
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(14px, 1.4vw, 16px)",
                color: "#9ca3af",
                textDecoration: "none",
                marginBottom: "12px",
                transition: "color 0.15s",
              }}>
                {label}
              </Link>
            ))}
            {col.social?.map(([label, href]) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" style={{
                display: "block",
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(14px, 1.4vw, 16px)",
                color: "#9ca3af",
                textDecoration: "none",
                marginBottom: "12px",
              }}>
                {label} ↗
              </a>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div style={{
        borderTop: "1px solid #374151",
        padding: "24px clamp(20px, 5vw, 80px)",
        maxWidth: "1280px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "12px",
      }}>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(12px, 1.4vw, 14px)", color: "#6b7280" }}>
          Dual MIT + Apache 2.0 License — Copyright © {new Date().getFullYear()} Rahul Chaube
        </span>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(12px, 1.4vw, 14px)", color: "#6b7280" }}>
          https://blyx-lang.space
        </span>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          footer > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
