import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DownloadPage() {
  return (
    <div style={{ background: "#ffffff", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <main style={{ flex: 1, padding: "60px max(24px, calc((100% - 1100px) / 2))" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#586069", marginBottom: "24px" }}>
            <Link href="/" style={{ color: "#0066cc", textDecoration: "none" }}>Home</Link> / Install
          </div>

          <h1 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "40px", color: "#1a1a2e", marginBottom: "16px", letterSpacing: "-0.5px" }}>
            Install Blyx
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "18px", color: "#586069", lineHeight: 1.6, marginBottom: "48px" }}>
            Install official standalone binaries for Linux, macOS, and Windows. Every release includes the compiler (<code style={{ background: "#f0f4f8", padding: "2px 6px", borderRadius: "4px", fontFamily: "monospace" }}>blyx</code>), package manager (<code style={{ background: "#f0f4f8", padding: "2px 6px", borderRadius: "4px", fontFamily: "monospace" }}>blyxpkg</code>), and language server (<code style={{ background: "#f0f4f8", padding: "2px 6px", borderRadius: "4px", fontFamily: "monospace" }}>blyx-lsp</code>).
          </p>

          {/* Quick Terminal Command */}
          <div
            style={{
              background: "#1a1a2e",
              borderRadius: "8px",
              overflow: "hidden",
              border: "1px solid #333355",
              marginBottom: "48px",
            }}
          >
            <div style={{ background: "#252540", padding: "10px 16px", borderBottom: "1px solid #333355", color: "#888", fontSize: "13px", fontFamily: "monospace" }}>
              Quick Installer Terminal Command
            </div>
            <pre style={{ margin: 0, padding: "20px 24px", fontFamily: "'Source Code Pro', monospace", fontSize: "14px", lineHeight: 1.8, color: "#e8edf5" }}>
              <span style={{ color: "#22863a" }}>$</span> curl -sSf https://blyx-lang.space/install.sh | sh
            </pre>
          </div>

          {/* OS Packages Table */}
          <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "24px", color: "#1a1a2e", marginBottom: "20px" }}>
            Standalone Binary Packages
          </h2>
          <div style={{ display: "grid", gap: "16px" }}>
            {[
              { os: "Linux", arch: "x86_64", file: "blyx-v0.1.0-alpha-x86_64-linux-gnu.tar.gz" },
              { os: "macOS", arch: "Apple Silicon (aarch64)", file: "blyx-v0.1.0-alpha-aarch64-apple-darwin.tar.gz" },
              { os: "Windows", arch: "x64", file: "blyx-v0.1.0-alpha-x86_64-pc-windows-msvc.zip" },
            ].map((pkg, idx) => (
              <div
                key={idx}
                style={{
                  padding: "20px 24px",
                  background: "#f8f9fa",
                  borderRadius: "8px",
                  border: "1px solid #e1e4e8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "12px",
                }}
              >
                <div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "16px", color: "#1a1a2e" }}>
                    {pkg.os} — <span style={{ fontSize: "14px", color: "#586069", fontWeight: 400 }}>{pkg.arch}</span>
                  </div>
                  <div style={{ fontFamily: "'Source Code Pro', monospace", fontSize: "12px", color: "#888", marginTop: "4px" }}>
                    {pkg.file}
                  </div>
                </div>
                <a
                  href="https://github.com/Rahulchaube1/blyxxxx/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "#0066cc",
                    color: "#fff",
                    padding: "8px 20px",
                    borderRadius: "6px",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "14px",
                    textDecoration: "none",
                  }}
                >
                  Download Package
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
