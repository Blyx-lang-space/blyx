//! Control Flow Graph (CFG) and Basic Blocks for BIR

use crate::instruction::BirInstruction;

#[derive(Debug, Clone)]
pub struct BasicBlock {
    pub id: usize,
    pub instructions: Vec<BirInstruction>,
    pub predecessors: Vec<usize>,
    pub successors: Vec<usize>,
}

impl BasicBlock {
    pub fn new(id: usize) -> Self {
        BasicBlock {
            id,
            instructions: Vec::new(),
            predecessors: Vec::new(),
            successors: Vec::new(),
        }
    }

    pub fn push_instruction(&mut self, instr: BirInstruction) {
        self.instructions.push(instr);
    }
}

#[derive(Debug, Clone)]
pub struct ControlFlowGraph {
    pub blocks: Vec<BasicBlock>,
}

impl ControlFlowGraph {
    pub fn new() -> Self {
        let entry = BasicBlock::new(0);
        ControlFlowGraph { blocks: vec![entry] }
    }

    pub fn add_block(&mut self) -> usize {
        let id = self.blocks.len();
        self.blocks.push(BasicBlock::new(id));
        id
    }

    pub fn add_edge(&mut self, from: usize, to: usize) {
        if from < self.blocks.len() && to < self.blocks.len() {
            self.blocks[from].successors.push(to);
            self.blocks[to].predecessors.push(from);
        }
    }
}
