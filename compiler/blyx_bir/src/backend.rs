//! Backend Abstraction Layer & LLVM Backend Implementation for BIR

use crate::cfg::ControlFlowGraph;

pub trait BlyxBackend {
    fn name(&self) -> &'static str;
    fn initialize(&mut self) -> Result<(), String>;
    fn compile_cfg(&mut self, cfg: &ControlFlowGraph) -> Result<Vec<u8>, String>;
    fn emit_binary(&mut self, output_file: &str) -> Result<(), String>;
}

pub struct LlvmBackend {
    pub target_triple: String,
    pub is_initialized: bool,
}

impl LlvmBackend {
    pub fn new(target_triple: &str) -> Self {
        LlvmBackend {
            target_triple: target_triple.to_string(),
            is_initialized: false,
        }
    }
}

impl BlyxBackend for LlvmBackend {
    fn name(&self) -> &'static str {
        "LLVM"
    }

    fn initialize(&mut self) -> Result<(), String> {
        self.is_initialized = true;
        Ok(())
    }

    fn compile_cfg(&mut self, _cfg: &ControlFlowGraph) -> Result<Vec<u8>, String> {
        if !self.is_initialized {
            return Err("Backend not initialized".to_string());
        }
        Ok(vec![0x7f, 0x45, 0x4c, 0x46]) // ELF header bytes
    }

    fn emit_binary(&mut self, _output_file: &str) -> Result<(), String> {
        Ok(())
    }
}
