// Blyx Networking Module (blyx-std::net)
// Created by Rahul Chaube — https://blyx-lang.space
// Open Source — MIT + Apache 2.0
// Repository: https://github.com/Blyx-lang-space/blyx

pub struct TcpServer {
    pub addr: String,
}

impl TcpServer {
    pub fn bind(addr: &str) -> Result<Self, String> {
        Ok(Self { addr: addr.to_string() })
    }

    pub fn listen(&self) {
        // Tcp listening socket loop
    }
}
