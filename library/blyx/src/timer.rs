// Blyx Timer System (blyx::timer)
// Created by Rahul Chaube — https://blyx-lang.space
// Open Source — MIT + Apache 2.0
// Repository: https://github.com/Blyx-lang-space/blyx

use std::time::Duration;

pub fn sleep(duration: Duration) {
    std::thread::sleep(duration);
}
