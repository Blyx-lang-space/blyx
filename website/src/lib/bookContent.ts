export const chapters: Record<string, { title: string; html: string }> = {
  'ch01-getting-started': {
    title: 'Getting Started',
    html: `
<p style="color:#64748b; font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:1px; margin-bottom:8px">Chapter 1</p>
<h1 style="font-size:36px; font-weight:700; color:#f1f5f9; margin-bottom:16px">Getting Started</h1>

<p>Welcome to <em>The Blyx Programming Language</em>. Blyx is a systems programming language designed for the AI era — memory-safe, GPU-native, and actor-concurrent. This chapter gets you up and running with your first Blyx program.</p>

<h2 style="font-size:24px; font-weight:600; color:#e2e8f0; margin-top:40px; margin-bottom:16px; border-bottom:1px solid #1e293b; padding-bottom:8px">1.1 Installation</h2>
<p>The recommended way to install Blyx is through <code>blyxup</code>, the official toolchain installer. It manages stable, beta, and nightly releases and handles updates automatically.</p>

<h3 style="font-size:18px; font-weight:600; color:#e2e8f0; margin-top:24px; margin-bottom:12px">On Linux and macOS</h3>
<p>Open a terminal and run:</p>
<pre style="background:#111827; border:1px solid #1e293b; padding:16px; border-radius:8px"><code>curl -sSf https://blyx-lang.space/install.sh | sh</code></pre>
<p>This downloads and runs the installer, which installs <code>blyxup</code>, <code>blyxc</code> (the compiler), and <code>blyxpkg</code> (the package manager) to <code>~/.blyx/bin</code>.</p>
<p>Add Blyx to your PATH:</p>
<pre style="background:#111827; border:1px solid #1e293b; padding:16px; border-radius:8px"><code>export PATH="$PATH:$HOME/.blyx/bin"</code></pre>

<h2 style="font-size:24px; font-weight:600; color:#e2e8f0; margin-top:40px; margin-bottom:16px; border-bottom:1px solid #1e293b; padding-bottom:8px">1.2 Hello, World!</h2>
<p>Create a new file called <code>main.blyx</code> and write:</p>
<pre style="background:#111827; border:1px solid #1e293b; padding:20px; border-radius:8px"><code><span style="color:#6b7a96">// main.blyx\n</span><span style="color:#c084fc">fn </span><span style="color:#93c5fd">main</span>() {\n    <span style="color:#93c5fd">println</span>!(<span style="color:#86efac">"Hello, World from Blyx!"</span>);\n}</code></pre>
<p>Compile and run with <code>blyxc main.blyx -o hello && ./hello</code>.</p>
`,
  },

  'ch02-hello-world': {
    title: 'A Guessing Game',
    html: `
<p style="color:#64748b; font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:1px; margin-bottom:8px">Chapter 2</p>
<h1 style="font-size:36px; font-weight:700; color:#f1f5f9; margin-bottom:16px">Programming a Guessing Game</h1>

<p>To hands-on learn Blyx concepts, let us build a complete guessing game program that generates a secret random number between 1 and 100 and prompts the user to guess it.</p>

<pre style="background:#111827; border:1px solid #1e293b; padding:20px; border-radius:8px"><code><span style="color:#c084fc">use </span>std::io;\n<span style="color:#c084fc">use </span>std::rand;\n\n<span style="color:#c084fc">fn </span><span style="color:#93c5fd">main</span>() {\n    <span style="color:#c084fc">let </span>secret = rand::thread_rng().gen_range(<span style="color:#fbbf24">1</span>..=<span style="color:#fbbf24">100</span>);\n    <span style="color:#93c5fd">println</span>!(<span style="color:#86efac">"Guess the secret number!"</span>);\n\n    <span style="color:#c084fc">loop </span>{\n        <span style="color:#c084fc">let mut </span>guess = String::new();\n        io::stdin().read_line(&amp;<span style="color:#c084fc">mut </span>guess).expect(<span style="color:#86efac">"Failed to read line"</span>);\n        <span style="color:#c084fc">let </span>guess: <span style="color:#67e8f9">i32 </span>= <span style="color:#c084fc">match </span>guess.trim().parse() {\n            Ok(num) =&gt; num,\n            Err(_) =&gt; <span style="color:#c084fc">continue</span>,\n        };\n        <span style="color:#c084fc">if </span>guess == secret {\n            <span style="color:#93c5fd">println</span>!(<span style="color:#86efac">"You win!"</span>);\n            <span style="color:#c084fc">break</span>;\n        }\n    }\n}</code></pre>
`,
  },

  'ch03-types-variables': {
    title: 'Common Concepts',
    html: `
<p style="color:#64748b; font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:1px; margin-bottom:8px">Chapter 3</p>
<h1 style="font-size:36px; font-weight:700; color:#f1f5f9; margin-bottom:16px">Common Programming Concepts</h1>

<p>This chapter covers concepts present in almost every programming language: variables, scalar & compound data types, functions, and control flow.</p>

<h2 style="font-size:24px; font-weight:600; color:#e2e8f0; margin-top:40px; margin-bottom:16px">3.1 Variables and Mutability</h2>
<p>By default, variables in Blyx are immutable. This is one of many nudges Blyx provides to write code that takes advantage of safety and easy concurrency.</p>

<pre style="background:#111827; border:1px solid #1e293b; padding:20px; border-radius:8px"><code><span style="color:#c084fc">let </span>x = <span style="color:#fbbf24">5</span>;               <span style="color:#6b7a96">// Immutable\n</span><span style="color:#c084fc">let mut </span>y = <span style="color:#fbbf24">10</span>;          <span style="color:#6b7a96">// Mutable\n</span>y = <span style="color:#fbbf24">15</span>;</code></pre>
`,
  },

  'ch04-functions': {
    title: 'Functions & Closures',
    html: `
<p style="color:#64748b; font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:1px; margin-bottom:8px">Chapter 4</p>
<h1 style="font-size:36px; font-weight:700; color:#f1f5f9; margin-bottom:16px">Functions & Closures</h1>

<p>Functions are pervasive in Blyx code. The <code>fn</code> keyword allows you to declare new functions with parameter type annotations and explicit return signatures.</p>

<pre style="background:#111827; border:1px solid #1e293b; padding:20px; border-radius:8px"><code><span style="color:#c084fc">fn </span><span style="color:#93c5fd">add</span>(a: <span style="color:#67e8f9">i32</span>, b: <span style="color:#67e8f9">i32</span>) -&gt; <span style="color:#67e8f9">i32 </span>{\n    a + b\n}</code></pre>
`,
  },

  'ch05-ownership-memory': {
    title: 'Ownership & Memory',
    html: `
<p style="color:#64748b; font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:1px; margin-bottom:8px">Chapter 5</p>
<h1 style="font-size:36px; font-weight:700; color:#f1f5f9; margin-bottom:16px">Ownership & Memory Safety</h1>

<p>Ownership is Blyx’s most unique feature and enables memory safety guarantees without needing a garbage collector.</p>

<h2 style="font-size:24px; font-weight:600; color:#e2e8f0; margin-top:40px; margin-bottom:16px">Ownership Rules</h2>
<ul style="color:#94a3b8; line-height:1.8">
  <li>Each value in Blyx has an owner.</li>
  <li>There can only be one owner at a time.</li>
  <li>When the owner goes out of scope, the value is dropped automatically.</li>
</ul>

<pre style="background:#111827; border:1px solid #1e293b; padding:20px; border-radius:8px"><code><span style="color:#c084fc">let </span>s1 = String::from(<span style="color:#86efac">"hello"</span>);\n<span style="color:#c084fc">let </span>s2 = s1; <span style="color:#6b7a96">// s1 ownership moves to s2\n// s1 is no longer valid here</span></code></pre>
`,
  },

  'ch06-structs-enums': {
    title: 'Structs & Enums',
    html: `
<p style="color:#64748b; font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:1px; margin-bottom:8px">Chapter 6</p>
<h1 style="font-size:36px; font-weight:700; color:#f1f5f9; margin-bottom:16px">Structs & Enums</h1>

<p>A struct, or structure, is a custom data type that lets you package together and name multiple related values.</p>

<pre style="background:#111827; border:1px solid #1e293b; padding:20px; border-radius:8px"><code><span style="color:#c084fc">struct </span>User {\n    username: String,\n    active: <span style="color:#67e8f9">bool</span>,\n}\n\n<span style="color:#c084fc">enum </span>Message {\n    Quit,\n    Move { x: <span style="color:#67e8f9">i32</span>, y: <span style="color:#67e8f9">i32 </span>},\n}</code></pre>
`,
  },

  'ch07-pattern-matching': {
    title: 'Pattern Matching',
    html: `
<p style="color:#64748b; font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:1px; margin-bottom:8px">Chapter 7</p>
<h1 style="font-size:36px; font-weight:700; color:#f1f5f9; margin-bottom:16px">Pattern Matching</h1>

<p>Blyx has an extremely powerful control flow construct called <code>match</code> that allows you to compare a value against a series of patterns.</p>

<pre style="background:#111827; border:1px solid #1e293b; padding:20px; border-radius:8px"><code><span style="color:#c084fc">match </span>msg {\n    Message::Quit =&gt; <span style="color:#93c5fd">println</span>!(<span style="color:#86efac">"Quitting"</span>),\n    Message::Move { x, y } =&gt; <span style="color:#93c5fd">println</span>!(<span style="color:#86efac">"Move to {}, {}"</span>, x, y),\n}</code></pre>
`,
  },

  'ch08-traits-generics': {
    title: 'Traits & Generics',
    html: `
<p style="color:#64748b; font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:1px; margin-bottom:8px">Chapter 8</p>
<h1 style="font-size:36px; font-weight:700; color:#f1f5f9; margin-bottom:16px">Traits & Generics</h1>

<p>A trait defines functionality a particular type has and can share with other types. Generics allow writing zero-cost polymorphic functions.</p>
`,
  },

  'ch09-error-handling': {
    title: 'Error Handling',
    html: `
<p style="color:#64748b; font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:1px; margin-bottom:8px">Chapter 9</p>
<h1 style="font-size:36px; font-weight:700; color:#f1f5f9; margin-bottom:16px">Error Handling</h1>

<p>Blyx groups errors into two major categories: recoverable and unrecoverable errors. For a recoverable error, such as a file not found error, Blyx uses <code>Result&lt;T, E&gt;</code>.</p>
`,
  },

  'ch10-collections': {
    title: 'Collections & Iterators',
    html: `
<p style="color:#64748b; font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:1px; margin-bottom:8px">Chapter 10</p>
<h1 style="font-size:36px; font-weight:700; color:#f1f5f9; margin-bottom:16px">Collections & Iterators</h1>

<p>Blyx's standard library includes useful data structures called collections (Vectors, HashMaps, Strings) and functional iterator adaptors.</p>
`,
  },

  'ch11-actors-concurrency': {
    title: 'Actors & Concurrency',
    html: `
<p style="color:#64748b; font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:1px; margin-bottom:8px">Chapter 11 • Blyx Unique Feature</p>
<h1 style="font-size:36px; font-weight:700; color:#f1f5f9; margin-bottom:16px">Actors & Concurrency</h1>

<p>Blyx implements native actor model primitives. Actors isolate state and communicate exclusively via lock-free message channels, guaranteeing freedom from data races.</p>

<pre style="background:#111827; border:1px solid #1e293b; padding:20px; border-radius:8px"><code><span style="color:#c084fc">actor </span>ComputeWorker {\n    <span style="color:#c084fc">fn </span><span style="color:#93c5fd">receive</span>(msg: Message) {\n        <span style="color:#c084fc">match </span>msg {\n            Task(id) =&gt; <span style="color:#93c5fd">println</span>!(<span style="color:#86efac">"Processing task {}"</span>, id),\n        }\n    }\n}\n\n<span style="color:#c084fc">fn </span><span style="color:#93c5fd">main</span>() {\n    <span style="color:#c084fc">let </span>worker = <span style="color:#c084fc">spawn </span>ComputeWorker();\n    worker.send(Task(<span style="color:#fbbf24">42</span>));\n}</code></pre>
`,
  },

  'ch12-tensors-ai': {
    title: 'Tensors & AI',
    html: `
<p style="color:#64748b; font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:1px; margin-bottom:8px">Chapter 12 • Blyx Unique Feature</p>
<h1 style="font-size:36px; font-weight:700; color:#f1f5f9; margin-bottom:16px">Tensors & AI Workloads</h1>

<p>Blyx includes first-class <code>tensor&lt;T, D1, D2&gt;</code> types. Matrix dimensions are verified at compile-time by the BIR type checker.</p>

<pre style="background:#111827; border:1px solid #1e293b; padding:20px; border-radius:8px"><code><span style="color:#c084fc">fn </span><span style="color:#93c5fd">forward</span>(w: <span style="color:#c084fc">tensor</span>&lt;<span style="color:#67e8f9">f32</span>, <span style="color:#fbbf24">128</span>, <span style="color:#fbbf24">64</span>&gt;, x: <span style="color:#c084fc">tensor</span>&lt;<span style="color:#67e8f9">f32</span>, <span style="color:#fbbf24">64</span>, <span style="color:#fbbf24">32</span>&gt;) -&gt; <span style="color:#c084fc">tensor</span>&lt;<span style="color:#67e8f9">f32</span>, <span style="color:#fbbf24">128</span>, <span style="color:#fbbf24">32</span>&gt; {\n    matmul(w, x)\n}</code></pre>
`,
  },

  'ch13-gpu-compute': {
    title: 'GPU & Heterogeneous Compute',
    html: `
<p style="color:#64748b; font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:1px; margin-bottom:8px">Chapter 13 • Blyx Unique Feature</p>
<h1 style="font-size:36px; font-weight:700; color:#f1f5f9; margin-bottom:16px">GPU Compute Blocks</h1>

<p>Inline <code>gpu {}</code> blocks lower directly to SPIR-V and NVPTX GPU assembly without external C++ CUDA host wrappers.</p>

<pre style="background:#111827; border:1px solid #1e293b; padding:20px; border-radius:8px"><code><span style="color:#c084fc">gpu </span>{\n    <span style="color:#c084fc">let </span>tid = thread_id();\n    data[tid] = data[tid] * <span style="color:#fbbf24">2.0</span>;\n};</code></pre>
`,
  },

  'ch14-async-await': {
    title: 'Async & Await',
    html: `
<p style="color:#64748b; font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:1px; margin-bottom:8px">Chapter 14</p>
<h1 style="font-size:36px; font-weight:700; color:#f1f5f9; margin-bottom:16px">Async & Await</h1>

<p>Asynchronous programming allows non-blocking I/O operations through zero-cost Futures and <code>async/await</code> syntax.</p>
`,
  },

  'ch15-modules-packages': {
    title: 'Modules & Packages',
    html: `
<p style="color:#64748b; font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:1px; margin-bottom:8px">Chapter 15</p>
<h1 style="font-size:36px; font-weight:700; color:#f1f5f9; margin-bottom:16px">Modules & Packages</h1>

<p>Blyx has a module system that lets you organize your code's privacy, visibility, and package dependencies in <code>Blyx.toml</code>.</p>
`,
  },

  'ch16-testing': {
    title: 'Testing',
    html: `
<p style="color:#64748b; font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:1px; margin-bottom:8px">Chapter 16</p>
<h1 style="font-size:36px; font-weight:700; color:#f1f5f9; margin-bottom:16px">Testing & Benchmarking</h1>

<p>Blyx provides built-in unit test runner capabilities with <code>#[test]</code> and <code>#[bench]</code> annotations built directly into <code>blyxpkg test</code>.</p>
`,
  },

  'ch17-compiler-internals': {
    title: 'Compiler Architecture',
    html: `
<p style="color:#64748b; font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:1px; margin-bottom:8px">Chapter 17 • Blyx Unique Feature</p>
<h1 style="font-size:36px; font-weight:700; color:#f1f5f9; margin-bottom:16px">Compiler Architecture & BIR</h1>

<p>Deep dive into <code>blyxc</code>: Lexer → Parser → AST → Semantic → Type Checker → BIR SSA Intermediate Representation → LLVM Codegen.</p>
`,
  },

  'ch18-advanced-features': {
    title: 'Advanced Features',
    html: `
<p style="color:#64748b; font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:1px; margin-bottom:8px">Chapter 18</p>
<h1 style="font-size:36px; font-weight:700; color:#f1f5f9; margin-bottom:16px">Advanced Features</h1>

<p>Unsafe Blyx, Foreign Function Interface (FFI) to C/C++, declarative macros, custom allocators, and compiler intrinsics.</p>
`,
  },
};
