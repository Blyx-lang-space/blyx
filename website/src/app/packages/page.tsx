import React from "react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/Breadcrumb";
import Card from "@/components/ui/Card";
import { Package, Download, Search, Sparkles } from "lucide-react";

export const metadata = {
  title: "Package Registry — Blyx Package Index",
  description: "Browse official packages, libraries, and GPU kernels for the Blyx programming language ecosystem.",
};

const PACKAGES = [
  {
    name: "std/tensor",
    version: "v0.1.0",
    desc: "Multidimensional static shape verified tensor primitives with SIMD acceleration.",
    downloads: "42.8k",
    author: "blyx-core",
  },
  {
    name: "std/actor",
    version: "v0.1.0",
    desc: "Lock-free actor concurrency model, spawn primitives, and message channels.",
    downloads: "38.1k",
    author: "blyx-core",
  },
  {
    name: "std/cuda",
    version: "v0.1.0",
    desc: "NVIDIA PTX compiler target lowering and direct GPU kernel dispatch.",
    downloads: "29.4k",
    author: "blyx-core",
  },
  {
    name: "std/net",
    version: "v0.1.0",
    desc: "Asynchronous TCP, UDP, and HTTP/3 networking stack.",
    downloads: "21.0k",
    author: "blyx-core",
  },
];

export default function PackagesPage() {
  return (
    <Container size="lg" className="py-12 space-y-10">
      <Breadcrumb items={[{ label: "Package Registry" }]} />

      <div className="space-y-4 max-w-3xl">
        <h1 className="font-['IBM_Plex_Sans'] font-bold text-4xl text-[var(--text-primary)]">
          Blyx Package Registry
        </h1>
        <p className="text-lg text-[var(--text-secondary)]">
          Discover and publish libraries for the Blyx ecosystem using <code className="font-mono text-sm">blyx pkg</code>.
        </p>
      </div>

      {/* Package Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {PACKAGES.map((pkg) => (
          <Card key={pkg.name} className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Package className="w-5 h-5 text-[var(--accent)]" />
                <span className="font-mono font-bold text-base text-[var(--text-primary)]">
                  {pkg.name}
                </span>
              </div>
              <span className="font-mono text-xs px-2 py-0.5 rounded bg-[var(--bg-secondary)] text-[var(--text-muted)] border border-[var(--border-color)]">
                {pkg.version}
              </span>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{pkg.desc}</p>
            <div className="pt-2 border-t border-[var(--border-color)] flex items-center justify-between text-xs text-[var(--text-muted)] font-mono">
              <span>Author: {pkg.author}</span>
              <span className="flex items-center space-x-1">
                <Download className="w-3.5 h-3.5" />
                <span>{pkg.downloads}</span>
              </span>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
}
