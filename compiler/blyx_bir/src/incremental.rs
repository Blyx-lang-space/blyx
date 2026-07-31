//! Incremental Compilation Engine & Module Cache Database

use std::collections::HashMap;

#[derive(Debug, Clone)]
pub struct SourceFingerprint {
    pub file_path: String,
    pub content_hash: u64,
}

pub struct IncrementalCacheEngine {
    pub hash_db: HashMap<String, u64>,
    pub module_cache: HashMap<String, Vec<u8>>,
}

impl IncrementalCacheEngine {
    pub fn new() -> Self {
        IncrementalCacheEngine {
            hash_db: HashMap::new(),
            module_cache: HashMap::new(),
        }
    }

    pub fn should_recompile(&self, file_path: &str, new_hash: u64) -> bool {
        match self.hash_db.get(file_path) {
            Some(&cached_hash) => cached_hash != new_hash,
            None => true,
        }
    }

    pub fn update_cache(&mut self, file_path: &str, new_hash: u64, artifact: Vec<u8>) {
        self.hash_db.insert(file_path.to_string(), new_hash);
        self.module_cache.insert(file_path.to_string(), artifact);
    }
}
