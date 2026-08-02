"use client";

import React, { useState } from "react";
import Link from "next/link";

interface SearchItem {
  title: string;
  category: "Docs" | "Book" | "Examples" | "Packages" | "Blog";
  href: string;
  desc: string;
}

const INDEX: SearchItem[] = [
  { title: "The Blyx Book: Introduction", category: "Book", href: "/learn", desc: "Language overview and principles." },
  { title: "Ownership & Borrowing Rules", category: "Book", href: "/learn/book/ch05-ownership-memory", desc: "Linear memory safety without GC." },
  { title: "Static Tensor Types (tensor<T, D1, D2>)", category: "Docs", href: "/learn/book/ch12-tensors-ai", desc: "Compile-time dimension verification." },
  { title: "Actor Model Concurrency", category: "Book", href: "/learn/book/ch11-actors-concurrency", desc: "Lock-free messaging runtime." },
  { title: "Inline GPU Kernel Blocks (gpu {})", category: "Examples", href: "/learn/book/ch13-gpu-compute", desc: "Direct PTX compilation." },
  { title: "std/tensor Package", category: "Packages", href: "/packages", desc: "Tensor primitives with SIMD." },
  { title: "Installing Blyx via Terminal", category: "Docs", href: "/download", desc: "curl install script and OS binaries." },
  { title: "Designing BIR SSA IR", category: "Blog", href: "/blog", desc: "Compiler architecture deep dive." },
];

export default function Search() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const results = INDEX.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.desc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "6px 14px",
          borderRadius: "6px",
          border: "1px solid #1e293b",
          background: "#111827",
          color: "#94a3b8",
          fontSize: "13px",
          fontFamily: "'Inter', sans-serif",
          cursor: "pointer",
        }}
      >
        <span>Search [?]</span>
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.7)",
            zIndex: 1000,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingTop: "100px",
          }}
          onClick={() => setOpen(false)}
        >
          <div
            style={{
              width: "90%",
              maxWidth: "600px",
              background: "#111827",
              border: "1px solid #1e293b",
              borderRadius: "8px",
              boxShadow: "0 20px 25px -5px rgba(0,0,0,0.5)",
              overflow: "hidden",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ padding: "16px", borderBottom: "1px solid #1e293b", display: "flex", alignItems: "center", gap: "12px" }}>
              <input
                autoFocus
                type="text"
                placeholder="Type to search documentation, book chapters, packages..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  fontSize: "16px",
                  fontFamily: "'Inter', sans-serif",
                  background: "transparent",
                  color: "#ffffff",
                }}
              />
              <button
                onClick={() => setOpen(false)}
                style={{
                  background: "#1e293b",
                  border: "none",
                  color: "#ffffff",
                  padding: "4px 10px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "13px",
                }}
              >
                Close [X]
              </button>
            </div>

            <div style={{ maxHeight: "360px", overflowY: "auto", padding: "8px" }}>
              {results.length === 0 ? (
                <div style={{ padding: "24px", textAlign: "center", color: "#64748b", fontSize: "14px" }}>
                  No matching results found.
                </div>
              ) : (
                results.map((r, idx) => (
                  <Link
                    key={idx}
                    href={r.href}
                    onClick={() => setOpen(false)}
                    style={{
                      display: "block",
                      padding: "12px 16px",
                      borderRadius: "6px",
                      textDecoration: "none",
                      color: "#e2e8f0",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontWeight: 600, fontSize: "15px" }}>{r.title}</span>
                      <span style={{ fontSize: "11px", background: "#1e293b", color: "#60a5fa", padding: "2px 6px", borderRadius: "4px", fontWeight: 600 }}>
                        {r.category}
                      </span>
                    </div>
                    <p style={{ fontSize: "13px", color: "#94a3b8", margin: "4px 0 0" }}>{r.desc}</p>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
