import React from 'react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';

export const metadata = {
  title: 'Blyx Language & Ecosystem Roadmap',
  description: 'Public release milestones leading to Blyx v1.0 Stable.',
};

export default function RoadmapPage() {
  const milestones = [
    {
      title: 'Blyx Beta v1.0 Release Candidate 1',
      status: 'Current Milestone',
      badge: 'cyan',
      details: 'BIR Intermediate Representation crate, LLVM IR emitter, ecosystem tools (blyxpkg, blyxfmt, blyx-analyzer), documentation book.',
    },
    {
      title: 'Blyx v1.0 Stable Release Target (Q2 2027)',
      status: 'In Progress',
      badge: 'purple',
      details: 'Self-hosted parser frontend, remote package registry API, and ABI stabilization.',
    },
    {
      title: 'Blyx v1.1 & Future Horizons',
      status: 'Planned',
      badge: 'gray',
      details: 'Advanced SIMD auto-vectorizer passes, dynamic tensor shapes, and multi-node distributed actor clustering.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#07090e] text-[#f8fafc] py-16 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#00f2fe] to-[#7f00ff] bg-clip-text text-transparent mb-4">
          Blyx Public Roadmap
        </h1>
        <p className="text-[#94a3b8] text-lg">Development milestones and timeline.</p>
      </div>

      <div className="space-y-6">
        {milestones.map((m, idx) => (
          <Card key={idx} title={m.title} subtitle={m.status}>
            <div className="mb-3">
              <Badge variant={m.badge as 'cyan' | 'purple' | 'gray'}>{m.status}</Badge>
            </div>
            <p className="text-sm text-[#cbd5e1]">{m.details}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
