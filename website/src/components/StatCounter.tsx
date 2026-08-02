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

export default function StatCounter() {
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
