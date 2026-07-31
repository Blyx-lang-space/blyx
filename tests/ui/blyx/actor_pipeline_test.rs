// End-to-End Pipeline Test: Actor Item Syntax & Feature Gate Resolution

#![feature(blyx_experimental)]

actor SystemWorker {
    worker_id: u64,
}

fn main() {
    let _w = SystemWorker { worker_id: 1 };
}
