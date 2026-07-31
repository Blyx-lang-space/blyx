// Test duplicate actor declaration error handling.

#![feature(blyx_experimental)]

actor Worker {
    id: u32,
}

actor Worker { //~ ERROR the name `Worker` is defined multiple times
    id: u32,
}

fn main() {}
