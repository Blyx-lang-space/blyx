// Blyx JSON Parser & Serializer Module (blyx-std::json)
// Created by Rahul Chaube — https://blyx-lang.space
// Open Source — MIT + Apache 2.0
// Repository: https://github.com/Blyx-lang-space/blyx

pub fn stringify(key: &str, val: &str) -> String {
    format!("{{\"{}\": \"{}\"}}", key, val)
}
