import React from "react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/Breadcrumb";
import Card from "@/components/ui/Card";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Engineering Blog — Blyx Language",
  description: "Technical articles, release notes, and compiler architecture deep dives written by Rahul Chaube and the Blyx Core Team.",
};

const POSTS = [
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
];

export default function BlogPage() {
  return (
    <Container size="lg" className="py-12 space-y-10">
      <Breadcrumb items={[{ label: "Engineering Blog" }]} />

      <div className="space-y-4 max-w-3xl">
        <h1 className="font-['IBM_Plex_Sans'] font-bold text-4xl text-[var(--text-primary)]">
          Blyx Engineering Blog
        </h1>
        <p className="text-lg text-[var(--text-secondary)]">
          Deep dives into compiler design, memory safety models, and high-performance parallel computing.
        </p>
      </div>

      <div className="space-y-6">
        {POSTS.map((post, idx) => (
          <Card key={idx} className="space-y-3">
            <div className="flex items-center space-x-4 text-xs font-mono text-[var(--text-muted)]">
              <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1" /> {post.date}</span>
              <span>•</span>
              <span className="flex items-center"><User className="w-3.5 h-3.5 mr-1" /> {post.author}</span>
            </div>
            <h2 className="font-['IBM_Plex_Sans'] font-bold text-xl text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">
              {post.title}
            </h2>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{post.summary}</p>
          </Card>
        ))}
      </div>
    </Container>
  );
}
