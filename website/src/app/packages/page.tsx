import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PackagesPage() {
  return (
    <div style={{ background: "#ffffff", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <main style={{ flex: 1, padding: "60px max(24px, calc((100% - 1100px) / 2))" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#586069", marginBottom: "24px" }}>
            <Link href="/" style={{ color: "#0066cc", textDecoration: "none" }}>Home</Link> / Package Registry
          </div>

          <h1 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "40px", color: "#1a1a2e", marginBottom: "16px", letterSpacing: "-0.5px" }}>
            Blyx Package Registry
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "18px", color: "#586069", lineHeight: 1.6, marginBottom: "48px" }}>
            Discover and publish packages for the Blyx ecosystem using <code style={{ background: "#f0f4f8", padding: "2px 6px", borderRadius: "4px", fontFamily: "monospace" }}>blyxpkg</code>.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {[
              {
                name: "std/tensor",
                ver: "v0.1.0-beta",
                author: "blyx-core",
                desc: "Multidimensional static shape verified tensor primitives with SIMD acceleration.",
              },
              {
                name: "std/actor",
                ver: "v0.1.0-beta",
                author: "blyx-core",
                desc: "Lock-free actor model concurrency runtime with channels and message passing.",
              },
              {
                name: "std/cuda",
                ver: "v0.1.0-beta",
                author: "blyx-core",
                desc: "NVIDIA NVPTX GPU kernel lowering and direct device memory dispatch.",
              },
              {
                name: "std/net",
                ver: "v0.1.0-beta",
                author: "blyx-core",
                desc: "High-throughput asynchronous TCP, UDP, and HTTP/3 networking stack.",
              },
            ].map((pkg, idx) => (
              <div
                key={idx}
                style={{
                  padding: "28px",
                  background: "#f8f9fa",
                  borderRadius: "8px",
                  border: "1px solid #e1e4e8",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                    <span style={{ fontFamily: "'Source Code Pro', monospace", fontWeight: 700, fontSize: "16px", color: "#1a1a2e" }}>
                      {pkg.name}
                    </span>
                    <span style={{ fontFamily: "monospace", fontSize: "12px", background: "#e1e4e8", padding: "2px 6px", borderRadius: "4px", color: "#586069" }}>
                      {pkg.ver}
                    </span>
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#586069", lineHeight: 1.6, margin: "0 0 16px" }}>
                    {pkg.desc}
                  </p>
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#888", borderTop: "1px solid #e1e4e8", paddingTop: "12px" }}>
                  Publisher: {pkg.author}
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
