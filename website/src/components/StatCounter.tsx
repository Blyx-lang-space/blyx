'use client';

import React, { useState, useEffect, useRef } from 'react';

interface StatCounterProps {
  value: string;
  label: string;
  sublabel?: string;
}

export default function StatCounter({ value, label, sublabel }: StatCounterProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center p-6 bg-[#0d1420] border border-[#1a2535] rounded-xl hover:border-[#00e5ff]/30 transition-all">
      <div className={`font-['Space_Grotesk'] font-bold text-5xl sm:text-6xl text-[#00e5ff] tracking-tight transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {value}
      </div>
      <div className="mt-2 font-['Inter'] text-sm text-[#e8edf5] font-medium">{label}</div>
      {sublabel && <div className="text-xs text-[#6b7a96] mt-0.5">{sublabel}</div>}
    </div>
  );
}
