import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DocsPage() {
  return (
    <div style={{ background: "#ffffff", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <main style={{ flex: 1, padding: "60px max(24px, calc((100% - 1100px) / 2))" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {/* Breadcrumb */}
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#586069", marginBottom: "24px" }}>
            <Link href="/" style={{ color: "#0066cc", textDecoration: "none" }}>Home</Link> / Documentation
          </div>

          <h1 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "40px", color: "#1a1a2e", marginBottom: "16px", letterSpacing: "-0.5px" }}>
            Blyx Documentation
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "18px", color: "#586069", lineHeight: 1.6, marginBottom: "48px" }}>
            Comprehensive guides, language specs, standard library references, and compiler tutorials.
          </p>

          {/* Doc Sections Grid */}
          <div style={{ display: "grid", gap: "24px" }}>
            {[
              {
                title: "Getting Started",
                desc: "Install the Blyx compiler, set up your editor, and build your first standalone binary.",
                links: [
                  ["Installation & Setup", "/download"],
                  ["Your First Program", "/play"],
                  ["Package Manager (blyxpkg)", "/packages"],
                ],
              },
              {
                title: "Language Reference",
                desc: "Learn the core syntax, memory ownership rules, static tensor types, and actor model.",
                links: [
                  ["Syntax & Control Flow", "#syntax"],
                  ["Static Tensor Types", "#tensors"],
                  ["Actor Model Concurrency", "#actors"],
                  ["GPU Compute Blocks", "#gpu"],
                ],
              },
              {
                title: "Compiler & Tools",
                desc: "Understand the BIR SSA intermediate format and LLVM code generation pipeline.",
                links: [
                  ["BIR SSA Architecture", "/compiler"],
                  ["VS Code Extension", "/vscode"],
                  ["Language Server (LSP)", "/compiler"],
                ],
              },
            ].map((sec, idx) => (
              <div
                key={idx}
                style={{
                  padding: "32px",
                  background: "#f8f9fa",
                  borderRadius: "8px",
                  border: "1px solid #e1e4e8",
                }}
              >
                <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "22px", color: "#1a1a2e", marginBottom: "8px" }}>
                  {sec.title}
                </h2>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "#586069", marginBottom: "20px", lineHeight: 1.6 }}>
                  {sec.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                  {sec.links.map(([label, href], lIdx) => (
                    <Link
                      key={lIdx}
                      href={href}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 500,
                        fontSize: "14px",
                        color: "#0066cc",
                        textDecoration: "none",
                      }}
                    >
                      {label} →
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
