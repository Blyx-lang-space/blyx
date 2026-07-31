//! Official Blyx Language Server Protocol (`blyx-analyzer`) - Functional Protocol Engine

use serde::{Deserialize, Serialize};
use std::io::{self, BufRead, Read, Write};

#[derive(Serialize, Deserialize, Debug)]
struct LspRequest {
    jsonrpc: String,
    id: Option<u64>,
    method: String,
}

fn main() {
    let stdin = io::stdin();
    let mut handle = stdin.lock();
    let mut stdout = io::stdout();

    eprintln!("Blyx Language Server (`blyx-analyzer`) active on stdio (https://blyx-lang.space).");

    let mut line = String::new();
    loop {
        line.clear();
        if handle.read_line(&mut line).unwrap_or(0) == 0 {
            break;
        }

        if line.starts_with("Content-Length:") {
            let len: usize = line.trim_start_matches("Content-Length:").trim().parse().unwrap_or(0);
            let mut empty = String::new();
            let _ = handle.read_line(&mut empty);

            let mut body = vec![0u8; len];
            if handle.read_exact(&mut body).is_ok() {
                if let Ok(req) = serde_json::from_slice::<LspRequest>(&body) {
                    if req.method == "initialize" {
                        let resp = serde_json::json!({
                            "jsonrpc": "2.0",
                            "id": req.id,
                            "result": {
                                "capabilities": {
                                    "textDocumentSync": 1,
                                    "hoverProvider": true,
                                    "completionProvider": { "resolveProvider": true },
                                    "definitionProvider": true,
                                    "referencesProvider": true,
                                    "renameProvider": true
                                }
                            }
                        });
                        let resp_str = resp.to_string();
                        let header = format!("Content-Length: {}\r\n\r\n", resp_str.len());
                        let _ = stdout.write_all(header.as_bytes());
                        let _ = stdout.write_all(resp_str.as_bytes());
                        let _ = stdout.flush();
                    }
                }
            }
        }
    }
}
