import React from "react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/Breadcrumb";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Github, MessageSquare, FileText, UserCheck, ShieldCheck, Heart } from "lucide-react";

export const metadata = {
  title: "Community & Governance — Blyx Language",
  description: "Join the Blyx open-source community, contribute via GitHub RFCs, participate in design governance, and join the Discord.",
};

export default function CommunityPage() {
  return (
    <Container size="lg" className="py-12 space-y-12">
      <Breadcrumb items={[{ label: "Community & Governance" }]} />

      <div className="space-y-4 max-w-3xl">
        <h1 className="font-['IBM_Plex_Sans'] font-bold text-4xl text-[var(--text-primary)]">
          Community & Governance
        </h1>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          Blyx is an open-source project created by Rahul Chaube and developed by a global community of compiler engineers and systems programmers.
        </p>
      </div>

      {/* Creator Spotlight */}
      <Card className="bg-[var(--bg-secondary)] border-[var(--border-strong)] p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-[var(--accent)] uppercase">
            <UserCheck className="w-4 h-4" />
            <span>Core Author & Lead Architect</span>
          </div>
          <h2 className="font-['IBM_Plex_Sans'] font-bold text-2xl text-[var(--text-primary)]">
            Rahul Chaube
          </h2>
          <p className="text-sm text-[var(--text-secondary)] max-w-xl">
            Lead architect of the Blyx programming language, designer of the BIR SSA IR, and author of the Blyx compiler frontend.
          </p>
        </div>
        <Button href="https://github.com/Rahulchaube1" variant="outline" size="md">
          <Github className="w-4 h-4 mr-2" /> GitHub Profile
        </Button>
      </Card>

      {/* Community Links */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="space-y-3">
          <Github className="w-6 h-6 text-[var(--text-primary)]" />
          <h3 className="font-['IBM_Plex_Sans'] font-bold text-lg text-[var(--text-primary)]">
            GitHub Repository
          </h3>
          <p className="text-sm text-[var(--text-secondary)]">
            Inspect source code, file issues, and submit pull requests.
          </p>
          <Button href="https://github.com/Rahulchaube1/blyxxxx" variant="outline" size="sm" className="w-full">
            Visit GitHub
          </Button>
        </Card>

        <Card className="space-y-3">
          <FileText className="w-6 h-6 text-[var(--accent)]" />
          <h3 className="font-['IBM_Plex_Sans'] font-bold text-lg text-[var(--text-primary)]">
            GitHub RFC Process
          </h3>
          <p className="text-sm text-[var(--text-secondary)]">
            Propose language features, syntax changes, and compiler APIs.
          </p>
          <Button href="https://github.com/Blyx-lang-space/blyx/tree/blyx-main/RFC" variant="outline" size="sm" className="w-full">
            Browse RFCs
          </Button>
        </Card>

        <Card className="space-y-3">
          <MessageSquare className="w-6 h-6 text-indigo-500" />
          <h3 className="font-['IBM_Plex_Sans'] font-bold text-lg text-[var(--text-primary)]">
            Community Chat
          </h3>
          <p className="text-sm text-[var(--text-secondary)]">
            Join the developer chat for live help, compiler discussions, and announcements.
          </p>
          <Button href="https://discord.gg/blyx" variant="outline" size="sm" className="w-full">
            Join Community
          </Button>
        </Card>
      </div>
    </Container>
  );
}
