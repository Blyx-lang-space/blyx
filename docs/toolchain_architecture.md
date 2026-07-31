# Blyx Ecosystem and Toolchain Architecture (Phase 5)

This document specifies the integrated developer ecosystem for the Blyx programming language.

---

## 1. Toolchain Components

| Tool | Purpose | Integration Mechanism |
| :--- | :--- | :--- |
| **`blyxc`** | Core Blyx Compiler | Compiles source files (`.blyx`) to native machine binaries or WASM targets via LLVM backend. |
| **`blyxdoc`** | Documentation Generator | Extracts doc-comments (`///`, `//!`) and renders static HTML sites with interactive search. |
| **`blyxfmt`** | Code Formatter | Enforces code formatting standards (`blyxfmt.toml`). |
| **`blyx-analyzer`** | Language Server (LSP) | Provides IDE code completion, inline diagnostics, go-to-definition, and refactoring support. |
| **`blyxup`** | Toolchain Installer & Version Manager | Downloads, manages, and updates Blyx compiler toolchains and channels (stable, nightly). |
| **`blyx-pkg`** | Package Manager & Build Orchestrator | Manages `Blyx.toml` dependencies, builds, tests, and publishes to the Blyx Registry. |

---

## 2. Blyx Ecosystem Service Services

- **Blyx Package Registry**: `https://registry.blyx-lang.org`
  - Cryptographic package signing using ed25519.
  - Automatic documentation build generation via `blyxdoc`.
- **Blyx Interactive Playground**: `https://play.blyx-lang.org`
  - Online browser playground executing Blyx code with WASM and server-side evaluation.
- **Documentation Portal**: `https://doc.blyx-lang.org`
  - Central hosting for *The Blyx Book*, *Blyx Standard Library Reference*, and *Blyxc Developer Guide*.
