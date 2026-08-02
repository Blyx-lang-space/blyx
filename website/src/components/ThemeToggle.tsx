"use client";

import React, { useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  return (
    <button
      onClick={() => setDark(!dark)}
      style={{
        background: "#111827",
        border: "1px solid #1e293b",
        color: "#94a3b8",
        padding: "6px 12px",
        borderRadius: "6px",
        fontFamily: "'Inter', sans-serif",
        fontSize: "13px",
        cursor: "pointer",
      }}
    >
      {dark ? "Dark" : "Light"}
    </button>
  );
}
