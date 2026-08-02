import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div style={{ background: "#ffffff", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <main style={{ flex: 1, padding: "60px max(24px, calc((100% - 1100px) / 2))" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#586069", marginBottom: "24px" }}>
            <Link href="/" style={{ color: "#0066cc", textDecoration: "none" }}>Home</Link> / About
          </div>

          <h1 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "40px", color: "#1a1a2e", marginBottom: "16px", letterSpacing: "-0.5px" }}>
            About Blyx & Philosophy
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "18px", color: "#586069", lineHeight: 1.6, marginBottom: "48px" }}>
            Blyx was created to bridge high-level AI framework expressiveness with low-level systems performance.
          </p>

          <div style={{ padding: "32px", background: "#f8f9fa", borderRadius: "8px", border: "1px solid #e1e4e8", marginBottom: "32px" }}>
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "22px", color: "#1a1a2e", marginBottom: "12px" }}>
              Design Principles
            </h2>
            <ul style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "#586069", lineHeight: 1.7, margin: 0, paddingLeft: "20px" }}>
              <li><strong>Zero-Cost Abstractions:</strong> High-level tensor operations and actor messaging compile directly to machine code without runtime overhead.</li>
              <li><strong>Compile-Time Verification:</strong> Memory safety, array bounds, and tensor dimensions are checked before execution.</li>
              <li><strong>Unified Toolchain:</strong> Single binary handles building, testing, package management, formatting, and LSP diagnostics.</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
