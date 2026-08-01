'use client';

import React from 'react';

const birLines = [
  '%0 = alloc tensor<f32, 128, 64>',
  '%1 = alloc tensor<f32, 64, 32>',
  '%2 = TensorMatMul %0, %1, [128,64], [64,32]',
  '%3 = ActorSpawn "NetworkWorker", [%worker_id]',
  '%4 = GpuDispatch "vec_add", [256,1,1], [128,1,1], [%a, %b, %out]',
  '%5 = Load %weights, f32',
  '%6 = Add %5, %bias, f32',
  '%7 = Call fn_compute_sum, [%a, %b], i32',
  '%8 = Phi [%6 -> bb1, %7 -> bb2], i32',
  '%9 = TensorReshape %2, [128,64], [64,128]',
  '%10 = ActorSend %3, %msg',
  '%11 = GpuSync',
  '%12 = Store %result, %9',
  '%13 = Return %12',
  'bb0: branch bb1',
  'bb1: %14 = Cmp Eq %x, %y, i32',
  'bb2: CondBranch %14, bb3, bb4',
  '%15 = TensorTranspose %0, [128,64]',
  '%16 = TensorAdd %15, %2, [128,64]',
];

export default function BirStream() {
  const content = [...birLines, ...birLines, ...birLines, ...birLines].join('\n');

  return (
    <div className="bir-stream">
      <div className="bir-stream-inner">
        {content}
      </div>
    </div>
  );
}
