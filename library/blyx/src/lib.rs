//! Blyx Official Runtime System (`blyx`)
//! Official Domain: https://blyx-lang.space

pub mod startup {
    pub fn init_runtime() {
        eprintln!("[blyx] Blyx runtime initialized.");
    }
}

pub mod actor_scheduler {
    pub struct ActorScheduler;

    impl ActorScheduler {
        pub fn new() -> Self {
            ActorScheduler
        }

        pub fn spawn_actor<F>(&self, _f: F)
        where
            F: FnOnce() + Send + 'static,
        {
            std::thread::spawn(_f);
        }
    }
}

pub mod panic_handler {
    pub fn handle_panic(info: &std::panic::PanicHookInfo) {
        eprintln!("[blyx panic]: {}", info);
    }
}
