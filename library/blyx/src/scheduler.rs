// Blyx Task Scheduler (blyx::scheduler)
// Created by Rahul Chaube — https://blyx-lang.space
// Open Source — MIT + Apache 2.0
// Repository: https://github.com/Blyx-lang-space/blyx

pub struct TaskScheduler {
    num_workers: usize,
}

impl TaskScheduler {
    pub fn new(num_workers: usize) -> Self {
        Self { num_workers }
    }

    pub fn schedule<F: FnOnce() + Send + 'static>(&self, task: F) {
        std::thread::spawn(task);
    }
}
