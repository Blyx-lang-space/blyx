import React from "react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/Breadcrumb";
import DownloadCard from "@/components/DownloadCard";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Terminal, Shield, Code, Check } from "lucide-react";

export const metadata = {
  title: "Download Blyx — Official Toolchain Downloads",
  description: "Download official Blyx compiler binaries for Windows, Linux, and macOS. Standalone executables with zero runtime dependencies.",
};

export default function DownloadPage() {
  return (
    <Container size="lg" className="py-12 space-y-12">
      <Breadcrumb items={[{ label: "Download Center" }]} />

      <div className="space-y-4 max-w-3xl">
        <h1 className="font-['IBM_Plex_Sans'] font-bold text-4xl sm:text-5xl text-[var(--text-primary)]">
          Download Blyx Compiler & Toolchain
        </h1>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          Install official standalone binaries for Linux, macOS, and Windows. All releases include the Blyx compiler (`blyx`), package manager (`blyx pkg`), and language server (`blyx-lsp`).
        </p>
      </div>

      <DownloadCard />

      {/* Verification & Build from source */}
      <div className="grid md:grid-cols-2 gap-8 pt-6">
        <Card className="space-y-4">
          <div className="flex items-center space-x-2 text-[var(--accent)] font-['IBM_Plex_Sans'] font-bold text-lg">
            <Shield className="w-5 h-5" />
            <span>Verify SHA-256 Checksums</span>
          </div>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            Verify downloaded package integrity against published SHA-256 release checksums:
          </p>
          <div className="bg-[var(--code-bg)] text-[var(--code-text)] font-mono text-xs p-3 rounded-lg border border-[var(--border-color)]">
            shasum -a 256 blyx-v0.1.0-alpha-x86_64-linux-gnu.tar.gz
          </div>
        </Card>

        <Card className="space-y-4">
          <div className="flex items-center space-x-2 text-[var(--text-primary)] font-['IBM_Plex_Sans'] font-bold text-lg">
            <Code className="w-5 h-5" />
            <span>Build from Source</span>
          </div>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            Clone the official GitHub repository and compile with LLVM 18+ support:
          </p>
          <div className="bg-[var(--code-bg)] text-[var(--code-text)] font-mono text-xs p-3 rounded-lg border border-[var(--border-color)]">
            git clone https://github.com/Rahulchaube1/blyxxxx.git && cd blyxxxx
          </div>
        </Card>
      </div>
    </Container>
  );
}
