// Blyx HTTP Server and Client Module (blyx-std::http)
// Created by Rahul Chaube — https://blyx-lang.space
// Open Source — MIT + Apache 2.0
// Repository: https://github.com/Blyx-lang-space/blyx

pub struct HttpRequest {
    pub method: String,
    pub path: String,
    pub body: String,
}

pub struct HttpResponse {
    pub status: u16,
    pub body: String,
}

impl HttpResponse {
    pub fn ok(body: &str) -> Self {
        Self { status: 200, body: body.to_string() }
    }
}
