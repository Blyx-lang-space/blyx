# Blyx Language Support for VS Code

Official VS Code extension for the [Blyx programming language](https://blyx-lang.space).

**Created by Rahul Chaube** — [@RahulChaube_](https://x.com/RahulChaube_)

## Features

- **Syntax Highlighting** — Full grammar for `.blyx` files including `actor`, `tensor`, `gpu`, `parallel` keywords
- **Language Server** — Real-time diagnostics, hover info, go-to-definition, completions via `blyx-analyzer`
- **Format on Save** — Automatic code formatting via `blyxfmt`
- **Snippets** — Code snippets for common patterns

## Requirements

Install the Blyx toolchain first:

```sh
curl -sSf https://blyx-lang.space/install.sh | sh
```

## Extension Settings

- `blyx.server.path`: Path to `blyx-analyzer` binary (auto-detected from PATH by default)
- `blyx.format.onSave`: Enable format-on-save (default: `true`)

## Getting Started

1. Install the extension.
2. Open a `.blyx` file.
3. Start writing Blyx code — syntax highlighting activates automatically.

## Links

- [Official Website](https://blyx-lang.space/)
- [GitHub Repository](https://github.com/Blyx-lang-space/blyx)
- [Interactive Playground](https://play.blyx-lang.space/)
- [Language Book](https://blyx-lang.space/learn)

## License

MIT OR Apache-2.0 — Copyright © 2026 Rahul Chaube
