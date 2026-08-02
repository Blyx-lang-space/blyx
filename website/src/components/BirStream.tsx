"use client";

import React from "react";

const BIR_LINES = [
  "%0 = alloc tensor<f32, 128, 64>",
  "%1 = alloc tensor<f32, 64, 32>",
  "%2 = TensorMatMul %0, %1, [128,64], [64,32]",
  "%3 = ActorSpawn \"NetworkWorker\", [%worker_id]",
  "%4 = GpuDispatch \"vec_add\", [256,1,1], [128,1,1]",
  "%5 = Load %weights, f32",
  "%6 = Add %5, %bias, f32",
  "%7 = Call fn_compute_sum, [%a, %b], i32",
  "%8 = Phi [%6 -> bb1, %7 -> bb2], i32",
  "%9 = TensorReshape %2, [128,64], [64,128]",
  "%10 = ActorSend %3, %msg",
  "%11 = GpuSync",
  "%12 = Store %result, %9",
  "%13 = Return %12",
  "bb0: branch bb1",
  "bb1: %14 = Cmp Eq %x, %y, i32",
  "bb2: CondBranch %14, bb3, bb4",
  "%15 = TensorTranspose %0, [128,64]",
  "%16 = TensorAdd %15, %2, [128,64]",
  "%17 = alloc actor<DataProcessor>",
  "%18 = ActorReceive %17, BatchMsg",
  "%19 = parallel_fork 8, fn_worker, [%data]",
  "%20 = parallel_join",
  "%21 = TensorSlice %2, [(0,64),(0,32)]",
  "%22 = GpuMemCopy %21, DeviceToHost",
  "%23 = Call fn_relu, [%22], tensor<f32,64,32>",
  "%24 = TensorBroadcast %5, [1,64], [128,64]",
  "%25 = Alloc tensor<f32, 256, 256>",
  "%26 = ActorJoin %3",
];

export default function BirStream() {
  const content = [...BIR_LINES, ...BIR_LINES].join("\n");

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {/* Top fade */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "160px",
          background: "linear-gradient(to bottom, #05080f, transparent)",
          zIndex: 2,
        }}
      />
      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "160px",
          background: "linear-gradient(to top, #05080f, transparent)",
          zIndex: 2,
        }}
      />
      {/* Scrolling BIR text */}
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "12px",
          lineHeight: "1.9",
          color: "#00e5ff",
          opacity: 0.07,
          whiteSpace: "pre",
          padding: "0 48px",
          animation: "birScroll 35s linear infinite",
          userSelect: "none",
        }}
      >
        {content}
        {"\n"}
        {content}
      </div>
      <style>{`
        @keyframes birScroll {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
      `}</style>
    </div>
  );
}
