"use client";

import React, { useState, useEffect } from "react";
import { Search as SearchIcon, X, BookOpen, Package, FileText, Code } from "lucide-react";
import Link from "next/link";

interface SearchResult {
  title: string;
  category: "Docs" | "Packages" | "Blog" | "Examples";
  url: string;
  snippet: string;
}

const INDEX: SearchResult[] = [
  { title: "Quick Start Guide", category: "Docs", url: "/docs", snippet: "Install Blyx and compile your first hello.blyx file." },
  { title: "BIR SSA IR Specification", category: "Docs", url: "/compiler", snippet: "Understand the Blyx Intermediate Representation static single-assignment format." },
  { title: "Actor Model Concurrency", category: "Docs", url: "/docs", snippet: "Lock-free message passing using spawn, send, and receive." },
  { title: "std::tensor Module", category: "Packages", url: "/packages", snippet: "Compile-time shape verified multidimensional tensor operations." },
  { title: "std::cuda GPU Kernel", category: "Packages", url: "/packages", snippet: "Direct GPU kernel dispatch without FFI overhead." },
  { title: "Static Tensor Types in Blyx", category: "Blog", url: "/blog", snippet: "How Blyx catches shape mismatch bugs at compile-time." },
  { title: "Matrix Multiplication Benchmark", category: "Examples", url: "/play", snippet: "Execute parallel 1000x1000 matrix multiplication in playground." },
];

export default function Search() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const results = query.trim()
    ? INDEX.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.snippet.toLowerCase().includes(query.toLowerCase())
      )
    : INDEX.slice(0, 4);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center space-x-2 px-3 py-1.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-all"
        aria-label="Search site"
      >
        <SearchIcon className="w-3.5 h-3.5" />
        <span>Search docs & packages...</span>
        <kbd className="hidden sm:inline-block px-1.5 py-0.5 font-mono text-[10px] bg-[var(--bg-card)] border border-[var(--border-color)] rounded text-[var(--text-muted)]">
          ⌘K
        </kbd>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
          <div className="bg-[var(--bg-card)] border border-[var(--border-strong)] rounded-xl w-full max-w-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95">
            {/* Header */}
            <div className="flex items-center px-4 border-b border-[var(--border-color)]">
              <SearchIcon className="w-4 h-4 text-[var(--text-muted)] mr-3" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search documentation, packages, blog, RFCs..."
                className="w-full bg-transparent py-3 text-sm text-[var(--text-primary)] focus:outline-none placeholder-[var(--text-muted)] font-sans"
                autoFocus
              />
              <button onClick={() => setOpen(false)} className="text-[var(--text-muted)] hover:text-[var(--text-primary)]">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results */}
            <div className="max-h-80 overflow-y-auto p-2 space-y-1">
              {results.length === 0 ? (
                <div className="p-4 text-center text-xs text-[var(--text-muted)] font-mono">
                  No matching results for &quot;{query}&quot;
                </div>
              ) : (
                results.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.url}
                    onClick={() => setOpen(false)}
                    className="block p-3 rounded-lg hover:bg-[var(--bg-secondary)] transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                        {item.title}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-muted)]">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] mt-1 truncate">{item.snippet}</p>
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
