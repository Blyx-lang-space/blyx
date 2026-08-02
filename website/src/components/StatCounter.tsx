"use client";

import React, { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  sublabel: string;
  decimals?: number;
}

const STATS: Stat[] = [
  {
    value: 2.8,
    suffix: "x",
    label: "faster than Python",
    sublabel: "matrix multiply benchmark",
    decimals: 1,
  },
  {
    value: 142,
    suffix: "M",
    label: "actor msgs/sec",
    sublabel: "lock-free throughput",
  },
  {
    value: 48,
    suffix: "KB",
    label: "binary size",
    sublabel: "hello world executable",
  },
  {
    value: 7,
    suffix: "",
    label: "compiler stages",
    sublabel: "lex → parse → sem → type → BIR → opt → emit",
  },
];

function useCountUp(target: number, decimals = 0, active: boolean) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1800;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, decimals]);

  return current;
}

function StatItem({ stat, active }: { stat: Stat; active: boolean }) {
  const count = useCountUp(stat.value, stat.decimals ?? 0, active);

  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: "clamp(36px, 5vw, 56px)",
          color: "#00e5ff",
          lineHeight: 1,
          letterSpacing: "-1px",
        }}
      >
        {stat.prefix ?? ""}
        {count}
        {stat.suffix}
      </div>
      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
          fontSize: "15px",
          color: "#e8edf5",
          marginTop: "10px",
        }}
      >
        {stat.label}
      </div>
      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "12px",
          color: "#6b7a96",
          marginTop: "4px",
          maxWidth: "180px",
          margin: "4px auto 0",
        }}
      >
        {stat.sublabel}
      </div>
    </div>
  );
}

interface StatCounterProps {
  value?: string;
  label?: string;
  sublabel?: string;
}

function parseStatValue(valStr: string): { num: number; suffix: string; decimals: number } {
  const match = valStr.match(/^([0-9.]+)\s*(.*)$/);
  if (!match) return { num: 0, suffix: valStr, decimals: 0 };
  const num = parseFloat(match[1]);
  const decimals = match[1].includes(".") ? match[1].split(".")[1].length : 0;
  return { num, suffix: match[2], decimals };
}

function SingleStatCounter({ value, label, sublabel }: { value: string; label: string; sublabel: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const { num, suffix, decimals } = parseStatValue(value);
  const count = useCountUp(num, decimals, active);

  return (
    <div ref={ref} className="text-center p-6 bg-[#0d1420] border border-[#1a2535] rounded-xl">
      <div className="font-['Space_Grotesk'] font-bold text-4xl sm:text-5xl text-[#00e5ff] tracking-tight">
        {count}{suffix}
      </div>
      <div className="font-['Inter'] font-medium text-sm sm:text-base text-[#e8edf5] mt-2">
        {label}
      </div>
      <div className="font-['Inter'] text-xs text-[#6b7a96] mt-1 max-w-[200px] mx-auto">
        {sublabel}
      </div>
    </div>
  );
}

export default function StatCounter({ value, label, sublabel }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  if (value && label && sublabel) {
    return <SingleStatCounter value={value} label={label} sublabel={sublabel} />;
  }

  return (
    <div ref={ref}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "40px",
          padding: "60px 0 20px",
        }}
      >
        {STATS.map((stat, i) => (
          <StatItem key={i} stat={stat} active={active} />
        ))}
      </div>
      <p
        style={{
          textAlign: "center",
          fontSize: "12px",
          color: "#6b7a96",
          marginTop: "24px",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        * Benchmarks on x86_64 Linux.{" "}
        <a href="/benchmarks" style={{ color: "#00e5ff", textDecoration: "none" }}>
          Full methodology →
        </a>
      </p>
    </div>
  );
}

