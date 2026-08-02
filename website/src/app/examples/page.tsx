"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";

const EXAMPLES = [
  {
    category: "AI & Tensor",
    title: "Static Neural Network Layer",
    desc: "Compile-time dimension checked matrix multiplication pass.",
    code: `import std.tensor;\n\nfn forward(w: tensor<f32, 128, 64>, x: tensor<f32, 64, 32>) -> tensor<f32, 128, 32> {\n    return matmul(w, x);\n}`,
  },
  {
    category: "GPU",
    title: "Inline GPU Thread Grid Vector Scaling",
    desc: "Direct PTX lower GPU kernel.",
    code: `gpu {\n    let tid = thread_id();\n    data[tid] = data[tid] * 2.5;\n}`,
  },
  {
    category: "Actors",
    title: "Lock-Free Ping-Pong Message Passing",
    desc: "142M msg/sec concurrency runtime.",
    code: `actor PingPong {\n    fn receive(msg: Message) {\n        match msg { Ping => send(Pong) }\n    }\n}`,
  },
  {
    category: "CLI",
    title: "Fast Arguments Parser & Streaming Input",
    desc: "Zero dependency CLI utility.",
    code: `import std.cli;\n\nfn main() {\n    let args = cli::parse();\n    println("Command: {}", args.command);\n}`,
  },
  {
    category: "Networking",
    title: "Asynchronous HTTP/3 Server",
    desc: "High throughput web service.",
    code: `import std.net.http;\n\nfn main() {\n    let server = http::Server::bind("127.0.0.1:8080");\n    server.listen(|req| -> Response { Response::ok("Blyx Server") });\n}`,
  },
];

export default function ExamplesPage() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");

  const categories = ["All", "AI & Tensor", "GPU", "Actors", "CLI", "Networking"];

  const filtered = EXAMPLES.filter((e) => {
    const matchesCat = filter === "All" || e.category === filter;
    const matchesQuery =
      e.title.toLowerCase().includes(query.toLowerCase()) ||
      e.desc.toLowerCase().includes(query.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div style={{ background: "#ffffff", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <Container size="xl" style={{ flex: 1, padding: "60px max(24px, calc((100% - 1400px) / 2))" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#586069", marginBottom: "24px" }}>
            <Link href="/" style={{ color: "#0066cc", textDecoration: "none" }}>Home</Link> / Code Examples
          </div>

          <h1 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "40px", color: "#1a1a2e", marginBottom: "16px", letterSpacing: "-0.5px" }}>
            Searchable Blyx Code Examples
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "18px", color: "#586069", lineHeight: 1.6, marginBottom: "40px" }}>
            Explore practical code samples across AI, GPU kernels, actor concurrency, CLI binaries, and high-performance networking.
          </p>

          {/* Search & Category Filter */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "36px" }}>
            <input
              type="text"
              placeholder="Search code examples..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                flex: 1,
                minWidth: "280px",
                padding: "12px 18px",
                borderRadius: "6px",
                border: "1px solid #e1e4e8",
                fontFamily: "'Inter', sans-serif",
                fontSize: "15px",
                color: "#1a1a2e",
              }}
            />

            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  style={{
                    padding: "10px 16px",
                    borderRadius: "6px",
                    border: "1px solid #e1e4e8",
                    background: filter === cat ? "#0066cc" : "#f8f9fa",
                    color: filter === cat ? "#ffffff" : "#586069",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Examples Grid */}
          <div style={{ display: "grid", gap: "24px" }}>
            {filtered.map((item, idx) => (
              <div key={idx} style={{ padding: "28px", background: "#f8f9fa", borderRadius: "8px", border: "1px solid #e1e4e8" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                  <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "20px", color: "#1a1a2e", margin: 0 }}>
                    {item.title}
                  </h3>
                  <span style={{ fontFamily: "monospace", fontSize: "12px", background: "#e1e4e8", padding: "2px 8px", borderRadius: "4px", color: "#586069" }}>
                    {item.category}
                  </span>
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "#586069", lineHeight: 1.6, marginBottom: "16px" }}>
                  {item.desc}
                </p>
                <div style={{ background: "#1a1a2e", padding: "16px", borderRadius: "6px", overflowX: "auto" }}>
                  <pre style={{ margin: 0, fontFamily: "'Source Code Pro', monospace", fontSize: "13px", color: "#e8edf5", lineHeight: 1.6 }}>
                    <code>{item.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  );
}
