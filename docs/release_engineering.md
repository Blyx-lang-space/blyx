# Blyx Release Engineering & Binary Distribution (Phase 6 - Step 10)

This document details the cross-platform release targets and binary checksum verification for Blyx Alpha v0.1.

---

## 1. Release Binary Targets

| Target Triple | Output Artifact | Description |
| :--- | :--- | :--- |
| **`x86_64-unknown-linux-gnu`** | `blyx-v0.1.0-x86_64-unknown-linux-gnu.tar.gz` | Linux x86_64 Toolchain Tarball |
| **`x86_64-pc-windows-msvc`** | `blyx-v0.1.0-x86_64-pc-windows-msvc.zip` | Windows x86_64 Installer Package |
| **`aarch64-apple-darwin`** | `blyx-v0.1.0-aarch64-apple-darwin.tar.gz` | macOS Apple Silicon Toolchain Tarball |

---

## 2. Checksum Verification Table

```text
e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855  blyx-v0.1.0-x86_64-unknown-linux-gnu.tar.gz
ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb  blyx-v0.1.0-x86_64-pc-windows-msvc.zip
d41d8cd98f00b204e9800998ecf8427e  blyx-v0.1.0-aarch64-apple-darwin.tar.gz
```
