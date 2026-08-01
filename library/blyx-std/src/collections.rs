// Blyx Collections Module (blyx-std::collections)
// Created by Rahul Chaube — https://blyx-lang.space
// Open Source — MIT + Apache 2.0
// Repository: https://github.com/Blyx-lang-space/blyx

pub struct Vec<T> {
    data: std::vec::Vec<T>,
}

impl<T> Vec<T> {
    pub fn new() -> Self {
        Self { data: std::vec::Vec::new() }
    }

    pub fn push(&mut self, item: T) {
        self.data.push(item);
    }

    pub fn pop(&mut self) -> Option<T> {
        self.data.pop()
    }

    pub fn len(&self) -> usize {
        self.data.len()
    }

    pub fn is_empty(&self) -> bool {
        self.data.is_empty()
    }
}

pub struct HashMap<K, V> {
    data: std::collections::HashMap<K, V>,
}

impl<K: std::cmp::Eq + std::hash::Hash, V> HashMap<K, V> {
    pub fn new() -> Self {
        Self { data: std::collections::HashMap::new() }
    }

    pub fn insert(&mut self, k: K, v: V) -> Option<V> {
        self.data.insert(k, v)
    }

    pub fn get(&self, k: &K) -> Option<&V> {
        self.data.get(k)
    }

    pub fn len(&self) -> usize {
        self.data.len()
    }
}

pub struct HashSet<T> {
    data: std::collections::HashSet<T>,
}

impl<T: std::cmp::Eq + std::hash::Hash> HashSet<T> {
    pub fn new() -> Self {
        Self { data: std::collections::HashSet::new() }
    }

    pub fn insert(&mut self, value: T) -> bool {
        self.data.insert(value)
    }

    pub fn contains(&self, value: &T) -> bool {
        self.data.contains(value)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_vec_ops() {
        let mut v = Vec::new();
        v.push(42);
        assert_eq!(v.len(), 1);
        assert_eq!(v.pop(), Some(42));
    }

    #[test]
    fn test_hashmap_ops() {
        let mut map = HashMap::new();
        map.insert("key", 100);
        assert_eq!(map.get(&"key"), Some(&100));
    }
}
