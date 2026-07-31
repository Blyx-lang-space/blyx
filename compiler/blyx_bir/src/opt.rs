//! Optimization Pass Infrastructure for BIR

use crate::cfg::ControlFlowGraph;
use crate::instruction::BirInstruction;

pub trait BirOptimizationPass {
    fn name(&self) -> &'static str;
    fn run(&mut self, cfg: &mut ControlFlowGraph) -> bool;
}

pub struct DeadCodeElimination;

impl BirOptimizationPass for DeadCodeElimination {
    fn name(&self) -> &'static str {
        "DeadCodeElimination"
    }

    fn run(&mut self, cfg: &mut ControlFlowGraph) -> bool {
        let mut changed = false;
        for block in &mut cfg.blocks {
            let orig_len = block.instructions.len();
            block.instructions.retain(|instr| match instr {
                BirInstruction::Move { dest, src, .. } => dest != src,
                _ => true,
            });
            if block.instructions.len() != orig_len {
                changed = true;
            }
        }
        changed
    }
}
