import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RoadmapPage() {
  return (
    <div style={{ background: "#ffffff", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <main style={{ flex: 1, padding: "60px max(24px, calc((100% - 1100px) / 2))" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#586069", marginBottom: "24px" }}>
            <Link href="/" style={{ color: "#0066cc", textDecoration: "none" }}>Home</Link> / Roadmap
          </div>

          <h1 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "40px", color: "#1a1a2e", marginBottom: "16px", letterSpacing: "-0.5px" }}>
            Development Roadmap
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "18px", color: "#586069", lineHeight: 1.6, marginBottom: "48px" }}>
            Milestones tracking compiler stabilization, language specs, and standard library releases.
          </p>

          <div style={{ display: "grid", gap: "24px" }}>
            {[
              {
                phase: "v0.1.0-alpha",
                status: "Completed",
                title: "Language Foundation & BIR SSA",
                desc: "Recursive descent parser, AST lowering, BIR SSA format, static type checking, and LLVM IR codegen.",
              },
              {
                phase: "v0.1.0-beta",
                status: "Active",
                title: "Native Tensors & GPU Compilation",
                desc: "Static multidimensional tensor inference, lock-free actor model, direct PTX/SPIR-V GPU lowering, and VS Code extension.",
              },
              {
                phase: "v1.0.0-stable",
                status: "Upcoming",
                title: "Production Release",
                desc: "Standard library stabilization (std::tensor, std::actor), package registry launch, and production support.",
              },
            ].map((m, idx) => (
              <div key={idx} style={{ padding: "32px", background: "#f8f9fa", borderRadius: "8px", border: "1px solid #e1e4e8" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <span style={{ fontFamily: "'Source Code Pro', monospace", fontWeight: 700, fontSize: "16px", color: "#0066cc" }}>
                    {m.phase}
                  </span>
                  <span style={{ fontFamily: "monospace", fontSize: "12px", background: m.status === "Active" ? "#f0f9ff" : "#e1e4e8", color: m.status === "Active" ? "#0066cc" : "#586069", padding: "2px 8px", borderRadius: "4px", fontWeight: 600 }}>
                    {m.status}
                  </span>
                </div>
                <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "20px", color: "#1a1a2e", marginBottom: "8px" }}>
                  {m.title}
                </h2>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "#586069", lineHeight: 1.6, margin: 0 }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
