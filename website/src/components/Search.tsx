"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search as SearchIcon, X } from "lucide-react";

interface SearchItem {
  title: string;
  category: "Docs" | "Book" | "Examples" | "Packages" | "Blog";
  href: string;
  desc: string;
}

const INDEX: SearchItem[] = [
  { title: "The Blyx Book: Introduction", category: "Book", href: "/learn", desc: "Language overview and principles." },
  { title: "Ownership & Borrowing Rules", category: "Book", href: "/learn#ownership", desc: "Linear memory safety without GC." },
  { title: "Static Tensor Types (tensor<T, D1, D2>)", category: "Docs", href: "/docs#tensors", desc: "Compile-time dimension verification." },
  { title: "Actor Model Concurrency", category: "Book", href: "/learn#actors", desc: "Lock-free messaging runtime." },
  { title: "Inline GPU Kernel Blocks (gpu {})", category: "Examples", href: "/examples#gpu", desc: "Direct PTX compilation." },
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
          border: "1px solid #e1e4e8",
          background: "#f8f9fa",
          color: "#586069",
          fontSize: "13px",
          fontFamily: "'Inter', sans-serif",
          cursor: "pointer",
        }}
      >
        <SearchIcon className="w-4 h-4" />
        <span>Search ecosystem...</span>
        <kbd style={{ fontSize: "10px", background: "#ffffff", padding: "1px 4px", borderRadius: "3px", border: "1px solid #ccc" }}>
          ⌘K
        </kbd>
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
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
              width: "100%",
              maxWidth: "600px",
              background: "#ffffff",
              borderRadius: "8px",
              boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)",
              overflow: "hidden",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ padding: "16px", borderBottom: "1px solid #e1e4e8", display: "flex", alignItems: "center", gap: "12px" }}>
              <SearchIcon className="w-5 h-5 text-gray-400" />
              <input
                autoFocus
                type="text"
                placeholder="Search documentation, book chapters, packages..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  fontSize: "16px",
                  fontFamily: "'Inter', sans-serif",
                }}
              />
              <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", cursor: "pointer" }}>
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            <div style={{ maxHeight: "360px", overflowY: "auto", padding: "8px" }}>
              {results.length === 0 ? (
                <div style={{ padding: "24px", textAlign: "center", color: "#888", fontSize: "14px" }}>
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
                      color: "#1a1a2e",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontWeight: 600, fontSize: "15px" }}>{r.title}</span>
                      <span style={{ fontSize: "11px", background: "#f0f4f8", color: "#0066cc", padding: "2px 6px", borderRadius: "4px", fontWeight: 600 }}>
                        {r.category}
                      </span>
                    </div>
                    <p style={{ fontSize: "13px", color: "#586069", margin: "4px 0 0" }}>{r.desc}</p>
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
