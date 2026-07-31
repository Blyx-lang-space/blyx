# Blyx v1.0.0-rc.1 Compatibility & Example Execution Matrix (Phase 13 - Step 3)

Official Domain: https://blyx-lang.space

This document presents the compatibility matrix recorded across all example programs compiled with `blyxc`.

---

## 1. Example Compilation & Execution Results

| Example File | Category | Compilation | Execution | Result Notes |
| :--- | :--- | :--- | :--- | :--- |
| [hello.blyx](file:///d:/blyxlanguage/examples/basic/hello.blyx) | Basic | **PASS** | **PASS** | Prints "Hello, World from Blyx!" |
| [http_server.blyx](file:///d:/blyxlanguage/examples/web/http_server.blyx) | Web | **PASS** | **PASS** | Binds socket and emits HTTP headers |
| [rest_api.blyx](file:///d:/blyxlanguage/examples/web/rest_api.blyx) | Web | **PASS** | **PASS** | User struct field initialization pass |
| [websocket.blyx](file:///d:/blyxlanguage/examples/network/websocket.blyx) | Network | **PASS** | **PASS** | Real-time WebSocket protocol server |
| [cli_tool.blyx](file:///d:/blyxlanguage/examples/network/cli_tool.blyx) | Network | **PASS** | **PASS** | Argument parsing pass |
| [gpu_kernel.blyx](file:///d:/blyxlanguage/examples/gpu/gpu_kernel.blyx) | GPU | **PASS** | **PASS** | Feature-gated `gpu { ... }` block pass |
| [tensor_math.blyx](file:///d:/blyxlanguage/examples/tensor/tensor_math.blyx) | Tensor | **PASS** | **PASS** | Feature-gated `tensor<f32, 128, 64>` pass |
| [actor_system.blyx](file:///d:/blyxlanguage/examples/actors/actor_system.blyx) | Actors | **PASS** | **PASS** | Feature-gated `actor` struct declaration pass |
| [database.blyx](file:///d:/blyxlanguage/examples/database/database.blyx) | Database | **PASS** | **PASS** | Database access method pass |
| [file_io.blyx](file:///d:/blyxlanguage/examples/async/file_io.blyx) | Async | **PASS** | **PASS** | File creation and write pass |
| [json_parsing.blyx](file:///d:/blyxlanguage/examples/async/json_parsing.blyx) | Async | **PASS** | **PASS** | Struct JSON data flow pass |
