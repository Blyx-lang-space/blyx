# Blyx Language Changelog

All notable changes to the Blyx Programming Language will be documented in this file.

Official Domain: https://blyx-lang.space

## [0.1.0-alpha] - 2026-07-31

### Initial Release Highlights
- **Language Rebrand**: Complete identity evolution from Rust compiler fork to **Blyx** (`blyxc`, `blyxdoc`, `blyxfmt`).
- **Feature Gate Infrastructure**: Added `#![feature(blyx_experimental)]`, `#![feature(blyx_tensor)]`, `#![feature(blyx_gpu)]`, `#![feature(blyx_actor)]`.
- **Parser Extensions**: Support for `tensor<T, D1, D2>`, `gpu { ... }`, `parallel { ... }`, and `actor Worker { ... }`.
- **Ecosystem Toolchain**: Initial implementations for package manager (`blyxpkg`), formatter (`blyxfmt`), and language server (`blyx-analyzer`).
- **Web Portal & Playground**: Deployed `https://blyx-lang.space` and interactive playground (`play.blyx-lang.space`).
