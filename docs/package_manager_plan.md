# Blyx Package Manager Architecture & Migration Plan

This document defines the strategy for transitioning from Cargo to **`blyx-pkg`** (or `blyx`), the native package manager and build orchestrator for the Blyx ecosystem.

---

## 1. Overview & Identity

- **Binary Name**: `blyx-pkg` (aliased to `blyx pkg` or `blyx`).
- **Manifest File**: `Blyx.toml` (retaining fallback support for `Cargo.toml` during initial bootstrapping migration).
- **Lockfile**: `Blyx.lock`.
- **Registry Endpoint**: `https://registry.blyx-lang.org`.
- **Default Source Layout**:
  - `src/main.blyx` (application entry point)
  - `src/lib.blyx` (library entry point)

---

## 2. Package Manifest Structure (`Blyx.toml`)

```toml
[package]
name = "my_app"
version = "0.1.0"
edition = "2026"
authors = ["Blyx Developer <dev@blyx-lang.org>"]
description = "A native Blyx application"

[dependencies]
blyx_std = { version = "1.0.0" }
blyx_matrix = { version = "0.2.0" }
```

---

## 3. Migration Roadmap

1. **Compatibility Layer**: `blyx-pkg` will initially wrapping Cargo under the hood while parsing `Blyx.toml` manifests.
2. **Native Toolchain Integration**: `blyx-pkg` directly invokes `blyxc` for compilation, `blyxdoc` for documentation, and `blyxfmt` for code formatting.
3. **Ecosystem Registry Launch**: Deployment of `blyx-registry.org` with cryptographic package signing and sandboxed build verification.
