import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';

export default function BlogPage() {
  const posts = [
    {
      id: 'introducing-blyx',
      date: '2026-07-31',
      title: 'Introducing Blyx: An AI-Native Systems Language',
      summary: 'Why we created a memory-safe, GPU-native systems language with static tensor types and lock-free actor concurrency from scratch.',
      author: 'Rahul Chaube',
      readTime: '6 min read',
    },
    {
      id: 'bir-intermediate-representation',
      date: '2026-07-28',
      title: "BIR: Blyx's Intermediate Representation Design",
      summary: 'An inside look at our 7-stage compiler pipeline, SSA control flow graphs, and -O3 optimization passes for tensor fusion and LICM.',
      author: 'Rahul Chaube',
      readTime: '8 min read',
    },
    {
      id: 'static-tensor-types',
      date: '2026-07-25',
      title: 'Static Tensor Types: Catching Dimension Errors at Compile Time',
      summary: 'How tensor<T, D1, D2> type checking eliminates matrix shape runtime panics before your machine learning model ever executes.',
      author: 'Rahul Chaube',
      readTime: '5 min read',
    },
    {
      id: 'actor-model-in-blyx',
      date: '2026-07-22',
      title: 'The Actor Model in Blyx: No Locks, No Deadlocks',
      summary: 'Exploring lock-free actor message queues, zero-copy message passing, and work-stealing thread pool runtime scheduling.',
      author: 'Rahul Chaube',
      readTime: '7 min read',
    },
    {
      id: 'new-systems-language-for-ai',
      date: '2026-07-18',
      title: 'Why We Need a New Systems Language for the AI Era',
      summary: 'Traditional systems languages treat heterogeneous GPUs and tensor math as external library attachments. Blyx makes them language primitives.',
      author: 'Rahul Chaube',
      readTime: '9 min read',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 text-[#00e5ff] text-xs font-mono">
          ENGINEERING BLOG &bull; ARCHITECTURE & RESEARCH
        </div>
        <h1 className="font-['Space_Grotesk'] font-bold text-4xl sm:text-6xl text-[#e8edf5]">
          Blyx Engineering Blog
        </h1>
        <p className="max-w-2xl mx-auto text-[#6b7a96] text-base sm:text-lg">
          Technical deep dives into compiler design, BIR SSA optimizations, GPU kernel lowering, and language benchmarks.
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-[#0d1420] border border-[#1a2535] rounded-2xl p-7 flex flex-col justify-between hover:border-[#00e5ff]/40 transition-all space-y-4 group">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#00e5ff]">
                <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                <span className="text-[#6b7a96]">{post.readTime}</span>
              </div>
              <h2 className="font-['Space_Grotesk'] font-bold text-xl text-[#e8edf5] group-hover:text-[#00e5ff] transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="text-xs text-[#6b7a96] leading-relaxed">
                {post.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-[#1a2535] flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 text-[#6b7a96]"><User className="w-3.5 h-3.5" /> {post.author}</span>
              <span className="inline-flex items-center gap-1 text-[#00e5ff] font-mono font-medium group-hover:translate-x-1 transition-transform">
                Read Article <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
