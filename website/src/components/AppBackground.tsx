"use client";

import React from "react";
import WavesShader from "@/components/WavesShader";

export default function AppBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <WavesShader style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
    </div>
  );
}