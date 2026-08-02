import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SecurityPage() {
  return (
    <div style={{ background: "#ffffff", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <main style={{ flex: 1, padding: "60px max(24px, calc((100% - 1100px) / 2))" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#586069", marginBottom: "24px" }}>
            <Link href="/" style={{ color: "#0066cc", textDecoration: "none" }}>Home</Link> / Security Policy
          </div>

          <h1 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "40px", color: "#1a1a2e", marginBottom: "16px", letterSpacing: "-0.5px" }}>
            Blyx Security Policy
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "18px", color: "#586069", lineHeight: 1.6, marginBottom: "48px" }}>
            Vulnerability disclosure policy and compiler safety invariants.
          </p>

          <div style={{ padding: "32px", background: "#f8f9fa", borderRadius: "8px", border: "1px solid #e1e4e8" }}>
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "22px", color: "#1a1a2e", marginBottom: "12px" }}>
              Reporting Security Vulnerabilities
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "#586069", lineHeight: 1.7, margin: 0 }}>
              To report security vulnerabilities or compiler soundness bugs, please email <strong>rahulchaube1@gmail.com</strong> or submit a private disclosure on GitHub.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
