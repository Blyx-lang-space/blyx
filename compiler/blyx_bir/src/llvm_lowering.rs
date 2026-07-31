//! BIR to LLVM IR Lowering Pass

use crate::cfg::ControlFlowGraph;
use crate::instruction::BirInstruction;

pub struct LlvmIrEmitter {
    pub module_name: String,
    pub ir_output: String,
}

impl LlvmIrEmitter {
    pub fn new(module_name: &str) -> Self {
        LlvmIrEmitter {
            module_name: module_name.to_string(),
            ir_output: String::new(),
        }
    }

    pub fn lower_cfg(&mut self, cfg: &ControlFlowGraph) -> String {
        let mut ir = format!("; ModuleID = '{}'\ntarget datalayout = \"e-m:e-p270:32:32-p271:32:32-p272:64:64-i64:64-i128:128-f80:128-n8:16:32:64-S128\"\n\n", self.module_name);

        ir.push_str("define i32 @main() {\n");
        for block in &cfg.blocks {
            ir.push_str(&format!("bb{}:\n", block.id));
            for instr in &block.instructions {
                match instr {
                    BirInstruction::Allocate { dest, ty, .. } => {
                        ir.push_str(&format!("  {} = alloca {}\n", dest, ty));
                    }
                    BirInstruction::Load { dest, ptr, .. } => {
                        ir.push_str(&format!("  {} = load i32, i32* {}\n", dest, ptr));
                    }
                    BirInstruction::Store { ptr, src, .. } => {
                        ir.push_str(&format!("  store i32 {}, i32* {}\n", src, ptr));
                    }
                    BirInstruction::Move { dest, src, .. } => {
                        ir.push_str(&format!("  {} = add i32 {}, 0\n", dest, src));
                    }
                    BirInstruction::Return { val, .. } => match val {
                        Some(v) => ir.push_str(&format!("  ret i32 {}\n", v)),
                        None => ir.push_str("  ret void\n"),
                    },
                    BirInstruction::Branch { target_block, .. } => {
                        ir.push_str(&format!("  br label %bb{}\n", target_block));
                    }
                    BirInstruction::Call { dest, func, .. } => {
                        ir.push_str(&format!("  {} = call i32 @{}()\n", dest, func));
                    }
                    _ => {
                        ir.push_str(&format!("  ; [blyx-bir] Emitted instruction: {}\n", instr));
                    }
                }
            }
        }
        ir.push_str("}\n");
        self.ir_output = ir.clone();
        ir
    }
}
