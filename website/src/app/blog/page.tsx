import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <div style={{ background: "#ffffff", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <main style={{ flex: 1, padding: "60px max(24px, calc((100% - 1100px) / 2))" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#586069", marginBottom: "24px" }}>
            <Link href="/" style={{ color: "#0066cc", textDecoration: "none" }}>Home</Link> / Blog
          </div>

          <h1 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "40px", color: "#1a1a2e", marginBottom: "16px", letterSpacing: "-0.5px" }}>
            Blyx Engineering Blog
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "18px", color: "#586069", lineHeight: 1.6, marginBottom: "48px" }}>
            Compiler architecture deep dives, release announcements, and language design notes.
          </p>

          <div style={{ display: "grid", gap: "32px" }}>
            {[
              {
                title: "Designing BIR: A Strongly-Typed SSA Intermediate Representation",
                date: "August 2, 2026",
                author: "Rahul Chaube",
                summary: "An in-depth look at how the Blyx Intermediate Representation enforces static shape verification and lifetime bounds before LLVM codegen.",
              },
              {
                title: "Memory Safety Without Garbage Collection in Blyx",
                date: "July 28, 2026",
                author: "Rahul Chaube",
                summary: "How compile-time linear ownership tracking eliminates double frees and data races with zero runtime latency overhead.",
              },
              {
                title: "Direct GPU PTX Compilation from High-Level Code",
                date: "July 15, 2026",
                author: "Rahul Chaube",
                summary: "Bypassing C/C++ CUDA wrappers: How Blyx lowers GPU kernels directly to NVPTX instructions.",
              },
            ].map((post, idx) => (
              <div key={idx} style={{ padding: "32px", background: "#f8f9fa", borderRadius: "8px", border: "1px solid #e1e4e8" }}>
                <div style={{ fontFamily: "'Source Code Pro', monospace", fontSize: "13px", color: "#888", marginBottom: "8px" }}>
                  {post.date} • By {post.author}
                </div>
                <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "22px", color: "#1a1a2e", marginBottom: "12px" }}>
                  {post.title}
                </h2>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "#586069", lineHeight: 1.6, margin: 0 }}>
                  {post.summary}
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
