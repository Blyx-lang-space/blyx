import React from 'react';
import { Card } from '../../components/ui/Card';

export const metadata = {
  title: 'Community & Governance — Blyx Language',
  description: 'Blyx open-source community guidelines, maintainers roster, working groups, and RFC process.',
};

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-[#07090e] text-[#f8fafc] py-16 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#00f2fe] to-[#7f00ff] bg-clip-text text-transparent mb-4">
          Blyx Open Source Community
        </h1>
        <p className="text-[#94a3b8] text-lg">Governance structures, maintainers roster, and working groups.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card title="Core Maintainers" subtitle="Maintainer Roster">
          <p className="text-sm text-[#cbd5e1] mb-2">Rahul Chaube (@Rahulchaube1) — Lead Compiler Architect</p>
          <p className="text-xs text-[#94a3b8]">Contact: maintainers@blyx-lang.space</p>
        </Card>

        <Card title="Working Groups" subtitle="Active Language Teams">
          <ul className="text-sm text-[#cbd5e1] space-y-2 list-disc list-inside">
            <li><strong>Compiler Team</strong>: <code>blyxc</code> & BIR optimizations</li>
            <li><strong>Libs Team</strong>: <code>blyx-std</code> standard library</li>
            <li><strong>Tools Team</strong>: <code>blyxpkg</code> & <code>blyx-analyzer</code></li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
