import React from "react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/Breadcrumb";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Code, CheckCircle, Download, ExternalLink } from "lucide-react";

export const metadata = {
  title: "VS Code Extension — Blyx Language",
  description: "Official BLYX Language extension for Visual Studio Code featuring syntax highlighting, language server diagnostics, and code completion.",
};

export default function VSCodePage() {
  return (
    <Container size="lg" className="py-12 space-y-12">
      <Breadcrumb items={[{ label: "VS Code Extension" }]} />

      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-[var(--accent)] uppercase">
          <span>Marketplace Publisher: RahulChaube</span>
        </div>
        <h1 className="font-['IBM_Plex_Sans'] font-bold text-4xl text-[var(--text-primary)]">
          BLYX Language VS Code Extension
        </h1>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          The official Visual Studio Code language support extension for Blyx. Provides full syntax highlighting, language server protocol (LSP) diagnostics, code completion, and BIR SSA inspection.
        </p>
        <div className="pt-2 flex flex-wrap gap-4">
          <Button
            href="https://marketplace.visualstudio.com/items?itemName=RahulChaube.blyx-language"
            variant="primary"
            size="lg"
          >
            <Download className="w-4 h-4 mr-2" /> Install from Marketplace
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="space-y-3">
          <CheckCircle className="w-5 h-5 text-emerald-500" />
          <h3 className="font-['IBM_Plex_Sans'] font-bold text-base text-[var(--text-primary)]">
            Syntax Highlighting
          </h3>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            Full TextMate grammar highlighting keywords, static tensor types, actor primitives, and GPU kernels.
          </p>
        </Card>

        <Card className="space-y-3">
          <CheckCircle className="w-5 h-5 text-emerald-500" />
          <h3 className="font-['IBM_Plex_Sans'] font-bold text-base text-[var(--text-primary)]">
            LSP Diagnostics
          </h3>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            Real-time inline compiler error messages, type hover tooltips, and go-to-definition support.
          </p>
        </Card>

        <Card className="space-y-3">
          <CheckCircle className="w-5 h-5 text-emerald-500" />
          <h3 className="font-['IBM_Plex_Sans'] font-bold text-base text-[var(--text-primary)]">
            BIR SSA Viewer
          </h3>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            Inspect emitted BIR SSA intermediate code directly alongside your source files in VS Code.
          </p>
        </Card>
      </div>
    </Container>
  );
}
