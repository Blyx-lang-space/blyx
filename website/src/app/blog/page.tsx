import React from 'react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';

export const metadata = {
  title: 'Engineering Blog — Blyx Compiler & Language Architecture',
  description: 'Articles on SSA intermediate representations, lock-free actor scheduling, static tensor verification, and LLVM codegen.',
};

export default function BlogPage() {
  const posts = [
    {
      title: 'Designing BIR: An SSA Intermediate Representation for Blyx',
      date: 'July 31, 2026',
      author: 'Compiler Architecture Team',
      summary: 'Deep dive into the instruction set design, basic block CFG edges, and optimization passes in compiler/blyx_bir.',
      category: 'Compiler',
    },
    {
      title: 'Static Tensor Dimension Verification at Compile Time',
      date: 'July 24, 2026',
      author: 'Type System Working Group',
      summary: 'How Blyx catches matrix rank mismatch errors during type checking with zero runtime overhead.',
      category: 'Language',
    },
    {
      title: 'Blyx Beta v1.0 Release Candidate Announcement',
      date: 'July 15, 2026',
      author: 'Release Engineering Team',
      summary: 'Summary of ecosystem toolchain binaries, standard library APIs, and playground execution targets.',
      category: 'Release',
    },
  ];

  return (
    <div className="min-h-screen bg-[#07090e] text-[#f8fafc] py-16 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00f2fe] to-[#7f00ff] bg-clip-text text-transparent mb-4">
          Blyx Engineering Blog
        </h1>
        <p className="text-[#94a3b8] text-lg">Insights on compiler engineering, runtime scheduling, and language design.</p>
      </div>

      <div className="space-y-6">
        {posts.map((post, idx) => (
          <Card key={idx} title={post.title} subtitle={`${post.date} • By ${post.author}`}>
            <div className="mb-4">
              <Badge variant="cyan">{post.category}</Badge>
            </div>
            <p className="text-sm text-[#cbd5e1]">{post.summary}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
