import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function VSCodePage() {
  return (
    <div style={{ background: "#ffffff", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <main style={{ flex: 1, padding: "60px max(24px, calc((100% - 1100px) / 2))" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#586069", marginBottom: "24px" }}>
            <Link href="/" style={{ color: "#0066cc", textDecoration: "none" }}>Home</Link> / VS Code Extension
          </div>

          <h1 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "40px", color: "#1a1a2e", marginBottom: "16px", letterSpacing: "-0.5px" }}>
            BLYX Language VS Code Extension
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "18px", color: "#586069", lineHeight: 1.6, marginBottom: "48px" }}>
            Official language extension for Visual Studio Code published by RahulChaube. Features syntax highlighting, LSP diagnostics, and BIR SSA inspection.
          </p>

          <div style={{ padding: "32px", background: "#f8f9fa", borderRadius: "8px", border: "1px solid #e1e4e8", marginBottom: "32px" }}>
            <div style={{ fontFamily: "'Source Code Pro', monospace", fontSize: "13px", color: "#0066cc", fontWeight: 700, marginBottom: "8px" }}>
              Publisher: RahulChaube
            </div>
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "22px", color: "#1a1a2e", marginBottom: "12px" }}>
              Marketplace Release
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "#586069", lineHeight: 1.6, marginBottom: "20px" }}>
              Full TextMate grammar highlighting keywords, static tensor types, actor primitives, and GPU kernels.
            </p>
            <a
              href="https://marketplace.visualstudio.com/items?itemName=RahulChaube.blyx-language"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#0066cc",
                color: "#ffffff",
                padding: "10px 24px",
                borderRadius: "6px",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Install from Marketplace
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
