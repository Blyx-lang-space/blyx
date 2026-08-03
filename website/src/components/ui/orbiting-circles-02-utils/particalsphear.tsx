"use client";
import React, { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  z: number;
}

export default function ParticleSphereAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const N = 320;          // number of particles
    const RADIUS = 0.42;    // fraction of canvas half-size
    const SPEED = 0.004;    // rotation speed (rad/frame)

    let angle = 0;
    let rafId: number;

    // Generate points on sphere using the Fibonacci spiral
    const phi = Math.PI * (3 - Math.sqrt(5));
    const basePoints: Point[] = Array.from({ length: N }, (_, i) => {
      const y = 1 - (i / (N - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = phi * i;
      return { x: Math.cos(theta) * r, y, z: Math.sin(theta) * r };
    });

    function draw() {
      const W = canvas!.width;
      const H = canvas!.height;
      const R = Math.min(W, H) * RADIUS;

      ctx!.clearRect(0, 0, W, H);

      const cos = Math.cos(angle);
      const sin = Math.sin(angle);

      const projected = basePoints.map(({ x, y, z }) => {
        // Rotate around Y axis
        const rx = x * cos - z * sin;
        const rz = x * sin + z * cos;
        // Simple perspective
        const fov = 2.4;
        const scale = fov / (fov + rz);
        return {
          sx: W / 2 + rx * R * scale,
          sy: H / 2 + y * R * scale,
          depth: (rz + 1) / 2,   // 0 = back, 1 = front
        };
      });

      // Sort back-to-front
      projected.sort((a, b) => a.depth - b.depth);

      for (const { sx, sy, depth } of projected) {
        const alpha = 0.15 + depth * 0.85;
        const dotR = 0.5 + depth * 1.5;

        // Color transitions: purple → pink → orange (Blyx palette)
        const r = Math.round(183 + (224 - 183) * depth);
        const g = Math.round(93 + (93 - 93) * depth);
        const b = Math.round(105 + (68 - 105) * depth);

        ctx!.beginPath();
        ctx!.arc(sx, sy, dotR, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${r},${g},${b},${alpha})`;
        ctx!.fill();
      }

      angle += SPEED;
      rafId = requestAnimationFrame(draw);
    }

    // DPR-aware resize
    const ro = new ResizeObserver(() => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width  = canvas!.offsetWidth  * dpr;
      canvas!.height = canvas!.offsetHeight * dpr;
    });
    ro.observe(canvas);

    rafId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block" }}
      aria-label="Particle sphere"
    />
  );
}
