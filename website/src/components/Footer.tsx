import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#24292e",
        color: "#e8edf5",
        padding: "48px max(24px, calc((100% - 1100px) / 2))",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "40px",
          marginBottom: "48px",
        }}
      >
        {/* Brand column */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <Image src="/blyx.png" alt="Blyx Logo" width={28} height={28} />
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: "18px",
                color: "#fff",
              }}
            >
              Blyx
            </span>
          </div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "13px",
              color: "#888",
              lineHeight: 1.6,
            }}
          >
            AI-native systems language.
            <br />
            Created by{" "}
            <a
              href="https://github.com/Rahulchaube1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#79b8ff", textDecoration: "none" }}
            >
              Rahul Chaube
            </a>
            .
          </p>
        </div>

        {/* Get help */}
        <div>
          <h4
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              color: "#fff",
              marginBottom: "16px",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            Get Help
          </h4>
          {[
            ["Documentation", "/docs"],
            ["Playground", "/play"],
            ["GitHub Discussions", "https://github.com/Rahulchaube1/blyxxxx/discussions"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              style={{
                display: "block",
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                color: "#888",
                textDecoration: "none",
                marginBottom: "8px",
              }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Policies */}
        <div>
          <h4
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              color: "#fff",
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
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              style={{
                display: "block",
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                color: "#888",
                textDecoration: "none",
                marginBottom: "8px",
              }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Social */}
        <div>
          <h4
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              color: "#fff",
              marginBottom: "16px",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            Social
          </h4>
          {[
            ["GitHub", "https://github.com/Rahulchaube1/blyxxxx"],
            ["X / Twitter", "https://x.com/RahulChaube_"],
            ["LinkedIn", "https://linkedin.com/in/rahulchaube1"],
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
                color: "#888",
                textDecoration: "none",
                marginBottom: "8px",
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid #444",
          paddingTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#666" }}>
          Dual MIT + Apache 2.0 License • Copyright © {new Date().getFullYear()} Rahul Chaube
        </span>
        <a
          href="https://github.com/Rahulchaube1/blyxxxx"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#666", textDecoration: "none" }}
        >
          github.com/Rahulchaube1/blyxxxx
        </a>
      </div>
    </footer>
  );
}
