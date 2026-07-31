# Blyx Package Registry Architecture (Phase 7 - Step 7)

This document specifies the distributed registry infrastructure for `registry.blyx-lang.space`.

---

## 1. Registry Architecture Overview

```
                      ┌───────────────────────────────┐
                      │  https://blyx-lang.space      │  Web Portal & Package Search
                      └───────────────┬───────────────┘
                                      │
                                      ▼
                      ┌───────────────────────────────┐
                      │  `blyxpkg publish / search`   │  CLI Client
                      └───────────────┬───────────────┘
                                      │
                                      ▼
                      ┌───────────────────────────────┐
                      │   API Endpoint & Storage      │  Ed25519 Signed Index
                      │  registry.blyx-lang.space     │  S3 Crate Storage
                      └───────────────────────────────┘
```

---

## 2. Key Registry Modules

1. **Authentication**: Token-based authentication using OAuth2 / GitHub SSO with Ed25519 cryptographic package signing.
2. **Publish Pipeline**: Validates `Blyx.toml`, runs automated security scanners, and compiles crate documentation via `blyxdoc`.
3. **Dependency Resolution Index**: Fast sparse index protocol (`SparseIndex`) for `blyxpkg` resolving SemVer range constraints.
