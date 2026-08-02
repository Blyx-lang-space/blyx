import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CommunityPage() {
  return (
    <div style={{ background: "#ffffff", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <main style={{ flex: 1, padding: "60px max(24px, calc((100% - 1100px) / 2))" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#586069", marginBottom: "24px" }}>
            <Link href="/" style={{ color: "#0066cc", textDecoration: "none" }}>Home</Link> / Community & Governance
          </div>

          <h1 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "40px", color: "#1a1a2e", marginBottom: "16px", letterSpacing: "-0.5px" }}>
            Community & Governance
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "18px", color: "#586069", lineHeight: 1.6, marginBottom: "48px" }}>
            Blyx is an open-source project created by Rahul Chaube and developed by a global community of compiler engineers.
          </p>

          {/* Author Box */}
          <div style={{ padding: "32px", background: "#f8f9fa", borderRadius: "8px", border: "1px solid #e1e4e8", marginBottom: "32px" }}>
            <div style={{ fontFamily: "'Source Code Pro', monospace", fontSize: "13px", color: "#0066cc", fontWeight: 700, textTransform: "uppercase", marginBottom: "8px" }}>
              Core Author & Lead Architect
            </div>
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "24px", color: "#1a1a2e", marginBottom: "12px" }}>
              Rahul Chaube
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "#586069", lineHeight: 1.6, margin: "0 0 16px" }}>
              Designer of the Blyx language specification, BIR SSA intermediate format, and lead maintainer of the compiler toolchain.
            </p>
            <a
              href="https://github.com/Rahulchaube1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0066cc", fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "14px", textDecoration: "none" }}
            >
              GitHub Profile →
            </a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
            <div style={{ padding: "24px", background: "#ffffff", borderRadius: "8px", border: "1px solid #e1e4e8" }}>
              <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "18px", color: "#1a1a2e", marginBottom: "12px" }}>
                GitHub Repository
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#586069", lineHeight: 1.6, marginBottom: "16px" }}>
                Inspect source code, submit bug reports, and create pull requests.
              </p>
              <a href="https://github.com/Rahulchaube1/blyxxxx" target="_blank" rel="noopener noreferrer" style={{ color: "#0066cc", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>
                Visit Repository →
              </a>
            </div>

            <div style={{ padding: "24px", background: "#ffffff", borderRadius: "8px", border: "1px solid #e1e4e8" }}>
              <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "18px", color: "#1a1a2e", marginBottom: "12px" }}>
                GitHub RFCs
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#586069", lineHeight: 1.6, marginBottom: "16px" }}>
                Propose language features, syntax changes, and compiler APIs.
              </p>
              <a href="https://github.com/Blyx-lang-space/blyx/tree/blyx-main/RFC" target="_blank" rel="noopener noreferrer" style={{ color: "#0066cc", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>
                Browse RFCs →
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
