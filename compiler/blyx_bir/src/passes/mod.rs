//! BIR Optimization Passes & Pass Manager Infrastructure

use crate::cfg::ControlFlowGraph;
use crate::instruction::BirInstruction;

pub trait OptimizationPass {
    fn name(&self) -> &'static str;
    fn run(&mut self, cfg: &mut ControlFlowGraph) -> bool;
}

pub struct ConstantFolding;
impl OptimizationPass for ConstantFolding {
    fn name(&self) -> &'static str { "ConstantFolding" }
    fn run(&mut self, _cfg: &mut ControlFlowGraph) -> bool { false }
}

pub struct DeadCodeEliminationPass;
impl OptimizationPass for DeadCodeEliminationPass {
    fn name(&self) -> &'static str { "DeadCodeElimination" }
    fn run(&mut self, cfg: &mut ControlFlowGraph) -> bool {
        let mut changed = false;
        for block in &mut cfg.blocks {
            let len = block.instructions.len();
            block.instructions.retain(|instr| !matches!(instr, BirInstruction::Move { dest, src, .. } if dest == src));
            if block.instructions.len() != len {
                changed = true;
            }
        }
        changed
    }
}

pub struct CopyPropagation;
impl OptimizationPass for CopyPropagation {
    fn name(&self) -> &'static str { "CopyPropagation" }
    fn run(&mut self, _cfg: &mut ControlFlowGraph) -> bool { false }
}

pub struct CommonSubexpressionElimination;
impl OptimizationPass for CommonSubexpressionElimination {
    fn name(&self) -> &'static str { "CommonSubexpressionElimination" }
    fn run(&mut self, _cfg: &mut ControlFlowGraph) -> bool { false }
}

pub struct ControlFlowSimplification;
impl OptimizationPass for ControlFlowSimplification {
    fn name(&self) -> &'static str { "ControlFlowSimplification" }
    fn run(&mut self, _cfg: &mut ControlFlowGraph) -> bool { false }
}

pub struct FunctionInlining;
impl OptimizationPass for FunctionInlining {
    fn name(&self) -> &'static str { "FunctionInlining" }
    fn run(&mut self, _cfg: &mut ControlFlowGraph) -> bool { false }
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum OptLevel {
    O0,
    O1,
    O2,
    O3,
    Os,
    Oz,
}

pub struct BirPassManager {
    pub level: OptLevel,
    pub passes: Vec<Box<dyn OptimizationPass>>,
}

impl BirPassManager {
    pub fn new(level: OptLevel) -> Self {
        let mut manager = BirPassManager {
            level,
            passes: Vec::new(),
        };
        match level {
            OptLevel::O0 => {}
            OptLevel::O1 => {
                manager.passes.push(Box::new(DeadCodeEliminationPass));
                manager.passes.push(Box::new(ConstantFolding));
            }
            OptLevel::O2 | OptLevel::O3 | OptLevel::Os | OptLevel::Oz => {
                manager.passes.push(Box::new(ConstantFolding));
                manager.passes.push(Box::new(CopyPropagation));
                manager.passes.push(Box::new(CommonSubexpressionElimination));
                manager.passes.push(Box::new(DeadCodeEliminationPass));
                manager.passes.push(Box::new(ControlFlowSimplification));
                manager.passes.push(Box::new(FunctionInlining));
            }
        }
        manager
    }

    pub fn run(&mut self, cfg: &mut ControlFlowGraph) -> bool {
        let mut any_changed = false;
        for pass in &mut self.passes {
            if pass.run(cfg) {
                any_changed = true;
            }
        }
        any_changed
    }

    pub fn run_until_fixed_point(&mut self, cfg: &mut ControlFlowGraph, max_iterations: usize) {
        for _ in 0..max_iterations {
            if !self.run(cfg) {
                break;
            }
        }
    }
}
