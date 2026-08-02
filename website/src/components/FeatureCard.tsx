import React from "react";
import Card from "./ui/Card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="flex flex-col space-y-3">
      <div className="w-10 h-10 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent)]">
        {icon}
      </div>
      <h3 className="font-['IBM_Plex_Sans'] font-semibold text-lg text-[var(--text-primary)]">
        {title}
      </h3>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
        {description}
      </p>
    </Card>
  );
}
