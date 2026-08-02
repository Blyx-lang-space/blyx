'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Play, Share2, RotateCcw, Check, Copy } from 'lucide-react';

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), {
  ssr: false,
  loading: () => (
    <div className="h-full flex items-center justify-center bg-[#05080f] text-[#6b7a96] font-mono text-sm">
      Loading Monaco Editor...
    </div>
  ),
});

const samplePrograms = {
  hello: {
    name: 'Hello World',
    code: `// Hello World in Blyx
fn main() {
    println!("Hello, World from Blyx!");
}`,
    output: `Compiling main.blyx... [0.12s]
✓ Build succeeded (binary size: 310 KB)

Hello, World from Blyx!`,
    bir: `; BIR SSA Intermediate Representation for main.blyx
func @main() -> i32 {
bb0:
    %0 = Const "Hello, World from Blyx!"
    %1 = Call @println, [%0]
    Return 0
}`,
    llvm: `; LLVM IR Emitter output
define i32 @main() {
entry:
    %0 = call i32 @puts(i8* getelementptr inbounds ([24 x i8], [24 x i8]* @.str, i64 0, i64 0))
    ret i32 0
}`,
  },
  tensor: {
    name: 'Tensor Math',
    code: `// Static Tensor Matrix Multiplication in Blyx
fn main() {
    let weights: tensor<f32, 128, 64> = tensor::ones();
    let input:   tensor<f32, 64, 32>  = tensor::ones();
    
    let output = weights * input;
    println!("Output Shape: [128, 32]");
}`,
    output: `Compiling main.blyx... [0.18s]
✓ Static dimension check passed: tensor<128,64> * tensor<64,32> -> tensor<128,32>
✓ Matrix multiplication kernel executed (12.4 ms)

Output Shape: [128, 32]`,
    bir: `; BIR SSA Tensor lowered instructions
%0 = Alloc tensor<f32, 128, 64>
%1 = Alloc tensor<f32, 64, 32>
%2 = TensorMatMul %0, %1, [128,64], [64,32]
Return %2`,
    llvm: `; LLVM IR Tensor lowered instructions
define void @tensor_matmul(float* %A, float* %B, float* %C) {
    ; MatMul lowered SIMD vector loop
    ret void
}`,
  },
  actor: {
    name: 'Actor System',
    code: `// Lock-Free Actor System in Blyx
actor NetworkWorker {
    id: u64,
}

fn main() {
    let worker = spawn NetworkWorker { id: 1 };
    worker.send(Process { payload: 100 });
    println!("Actor spawned and message dispatched.");
}`,
    output: `Compiling main.blyx... [0.15s]
✓ Lock-free actor scheduler initialized (4 workers)

Actor spawned and message dispatched.`,
    bir: `; BIR SSA Actor lowered instructions
%0 = ActorSpawn "NetworkWorker", [%id]
%1 = ActorSend %0, %msg
Return 0`,
    llvm: `; LLVM IR Actor lowered instructions
define %struct.Actor* @spawn_actor(i64 %id) {
    call %struct.Actor* @blyx_actor_alloc()
    ret %struct.Actor* %0
}`,
  },
};

export default function PlaygroundPage() {
  const [selectedKey, setSelectedKey] = useState<'hello' | 'tensor' | 'actor'>('hello');
  const [code, setCode] = useState(samplePrograms.hello.code);
  const [activeTab, setActiveTab] = useState<'output' | 'bir' | 'llvm'>('output');
  const [isRunning, setIsRunning] = useState(false);
  const [hasRun, setHasRun] = useState(true);
  const [copied, setCopied] = useState(false);

  const currentProgram = samplePrograms[selectedKey];

  const handleSelectExample = (key: 'hello' | 'tensor' | 'actor') => {
    setSelectedKey(key);
    setCode(samplePrograms[key].code);
    setHasRun(true);
  };

  const handleRun = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setHasRun(true);
    }, 400);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col bg-[#05080f]">
      {/* Playground Top Bar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-[#0d1420] border-b border-[#1a2535] gap-4">
        <div className="flex items-center gap-3">
          <span className="font-['Space_Grotesk'] font-bold text-lg text-[#e8edf5]">◈ Playground</span>
          <span className="text-xs text-[#6b7a96] font-mono hidden sm:inline">Blyx v0.1.0-alpha Interactive REPL</span>
        </div>

        <div className="flex items-center gap-3">
          {/* Example Selector */}
          <div className="flex items-center gap-1 bg-[#05080f] p-1 rounded-lg border border-[#1a2535]">
            {(['hello', 'tensor', 'actor'] as const).map((k) => (
              <button
                key={k}
                onClick={() => handleSelectExample(k)}
                className={`px-3 py-1 text-xs font-mono rounded-md transition-all ${
                  selectedKey === k
                    ? 'bg-[#00e5ff]/20 text-[#00e5ff] border border-[#00e5ff]/40 font-bold'
                    : 'text-[#6b7a96] hover:text-[#e8edf5]'
                }`}
              >
                {samplePrograms[k].name}
              </button>
            ))}
          </div>

          <button
            onClick={handleRun}
            disabled={isRunning}
            className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#00e5ff] text-[#05080f] font-['Space_Grotesk'] font-bold text-xs hover:bg-[#00e5ff]/90 transition-all disabled:opacity-50"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            {isRunning ? 'Compiling...' : 'Run ▶'}
          </button>

          <button
            onClick={handleCopy}
            className="p-2 rounded-lg bg-[#1a2535] text-[#6b7a96] hover:text-[#00e5ff] transition-all"
            title="Copy Code"
          >
            {copied ? <Check className="w-4 h-4 text-[#00ff88]" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Main Split Pane Area */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        {/* Left Pane: Editor */}
        <div className="h-full border-r border-[#1a2535] flex flex-col bg-[#05080f]">
          <div className="px-4 py-2 bg-[#0d1420] border-b border-[#1a2535] text-xs font-mono text-[#6b7a96] flex items-center justify-between">
            <span>{currentProgram.name.toLowerCase().replace(' ', '_')}.blyx</span>
            <span>UTF-8</span>
          </div>
          <div className="flex-1 w-full relative">
            <MonacoEditor
              height="100%"
              language="rust"
              theme="vs-dark"
              value={code}
              onChange={(v: string | undefined) => setCode(v || '')}
              options={{
                fontSize: 14,
                minimap: { enabled: false },
                lineNumbers: 'on',
                scrollBeyondLastLine: false,
                automaticLayout: true,
                padding: { top: 12 },
              }}
            />
          </div>
        </div>

        {/* Right Pane: Output / BIR / LLVM IR */}
        <div className="h-full flex flex-col bg-[#020509]">
          <div className="flex items-center justify-between px-4 py-2 bg-[#0d1420] border-b border-[#1a2535]">
            <div className="flex items-center gap-2 font-mono text-xs">
              <button
                onClick={() => setActiveTab('output')}
                className={`px-3 py-1 rounded transition-all ${
                  activeTab === 'output' ? 'bg-[#00e5ff]/20 text-[#00e5ff] font-bold' : 'text-[#6b7a96] hover:text-[#e8edf5]'
                }`}
              >
                Output
              </button>
              <button
                onClick={() => setActiveTab('bir')}
                className={`px-3 py-1 rounded transition-all ${
                  activeTab === 'bir' ? 'bg-[#00e5ff]/20 text-[#00e5ff] font-bold' : 'text-[#6b7a96] hover:text-[#e8edf5]'
                }`}
              >
                BIR SSA IR
              </button>
              <button
                onClick={() => setActiveTab('llvm')}
                className={`px-3 py-1 rounded transition-all ${
                  activeTab === 'llvm' ? 'bg-[#00e5ff]/20 text-[#00e5ff] font-bold' : 'text-[#6b7a96] hover:text-[#e8edf5]'
                }`}
              >
                LLVM IR
              </button>
            </div>
            <span className="text-[10px] text-[#6b7a96] font-mono">Execution Simulation</span>
          </div>

          <div className="flex-1 p-6 font-mono text-sm overflow-auto text-[#e8edf5] leading-relaxed">
            {isRunning ? (
              <div className="text-[#00e5ff] animate-pulse">$ blyxc {currentProgram.name.toLowerCase().replace(' ', '_')}.blyx --emit-ir...</div>
            ) : hasRun ? (
              activeTab === 'output' ? (
                <pre className="text-[#00ff88] whitespace-pre-wrap">{currentProgram.output}</pre>
              ) : activeTab === 'bir' ? (
                <pre className="text-[#00e5ff] whitespace-pre-wrap">{currentProgram.bir}</pre>
              ) : (
                <pre className="text-[#8b5cf6] whitespace-pre-wrap">{currentProgram.llvm}</pre>
              )
            ) : (
              <div className="text-[#6b7a96]">Press &quot;Run ▶&quot; to compile and execute the Blyx program.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
