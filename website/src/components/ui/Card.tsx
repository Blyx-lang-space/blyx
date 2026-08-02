import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-6 transition-all duration-200 hover:border-[var(--border-strong)] ${className}`}
    >
      {children}
    </div>
  );
}
