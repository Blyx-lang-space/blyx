// Blyx Programming Language — Blyx Intermediate Representation (blyx_bir)
// Created by Rahul Chaube — https://blyx-lang.space
// Open Source — MIT + Apache 2.0
// Repository: https://github.com/Blyx-lang-space/blyx

pub type ValueId = u32;
pub type BlockId = u32;
pub type FuncId = u32;

#[derive(Debug, Clone)]
pub struct BirFunction {
    pub id: FuncId,
    pub name: String,
    pub params: Vec<(ValueId, BirType)>,
    pub return_type: BirType,
    pub blocks: Vec<BasicBlock>,
    pub entry: BlockId,
}

#[derive(Debug, Clone)]
pub struct BasicBlock {
    pub id: BlockId,
    pub label: String,
    pub instructions: Vec<Instruction>,
    pub terminator: Terminator,
    pub predecessors: Vec<BlockId>,
    pub successors: Vec<BlockId>,
}

#[derive(Debug, Clone, PartialEq)]
pub enum BirType {
    I8, I16, I32, I64, I128,
    U8, U16, U32, U64, U128,
    F32, F64,
    Bool,
    Ptr(Box<BirType>),
    Slice(Box<BirType>),
    Array(Box<BirType>, usize),
    Tensor(Box<BirType>, Vec<usize>),
    Struct(String, Vec<BirType>),
    Actor(String),
    Unit,
    Never,
}

#[derive(Debug, Clone)]
pub enum Instruction {
    Add(ValueId, ValueId, ValueId, BirType),
    Sub(ValueId, ValueId, ValueId, BirType),
    Mul(ValueId, ValueId, ValueId, BirType),
    Div(ValueId, ValueId, ValueId, BirType),
    Rem(ValueId, ValueId, ValueId, BirType),
    Neg(ValueId, ValueId, BirType),
    And(ValueId, ValueId, ValueId, BirType),
    Or(ValueId, ValueId, ValueId, BirType),
    Xor(ValueId, ValueId, ValueId, BirType),
    Shl(ValueId, ValueId, ValueId, BirType),
    Shr(ValueId, ValueId, ValueId, BirType),
    Not(ValueId, ValueId, BirType),
    Cmp(ValueId, CmpOp, ValueId, ValueId, BirType),
    Alloc(ValueId, BirType),
    Load(ValueId, ValueId, BirType),
    Store(ValueId, ValueId, BirType),
    GetElementPtr(ValueId, ValueId, Vec<ValueId>, BirType),
    Call(Option<ValueId>, FuncId, Vec<ValueId>, BirType),
    CallIndirect(Option<ValueId>, ValueId, Vec<ValueId>, BirType),
    Phi(ValueId, Vec<(ValueId, BlockId)>, BirType),
    Const(ValueId, BirConst),
    Cast(ValueId, ValueId, BirType, BirType),
    TensorMatMul(ValueId, ValueId, ValueId, Vec<usize>, Vec<usize>),
    TensorAdd(ValueId, ValueId, ValueId, Vec<usize>),
    TensorReshape(ValueId, ValueId, Vec<usize>, Vec<usize>),
    TensorTranspose(ValueId, ValueId, Vec<usize>),
    GpuDispatch(ValueId, String, Vec<ValueId>, [u32; 3], [u32; 3]),
    GpuSync,
    ActorSpawn(ValueId, String, Vec<ValueId>),
    ActorSend(ValueId, ValueId),
    ActorReceive(ValueId, ValueId, BirType),
    ActorJoin(ValueId),
    ParallelFork(u32, FuncId, Vec<ValueId>),
    ParallelJoin,
    DebugBreakpoint(u32),
    Comment(String),
}

#[derive(Debug, Clone)]
pub enum Terminator {
    Return(Option<ValueId>),
    Branch(BlockId),
    CondBranch(ValueId, BlockId, BlockId),
    Switch(ValueId, Vec<(i64, BlockId)>, BlockId),
    Unreachable,
    Panic(String),
}

#[derive(Debug, Clone)]
pub enum BirConst {
    Int(i64, BirType),
    Float(f64, BirType),
    Bool(bool),
    Str(String),
    Unit,
    Null,
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CmpOp { Eq, Ne, Lt, Le, Gt, Ge }

pub struct ControlFlowGraph {
    pub functions: Vec<BirFunction>,
    pub entry: FuncId,
}

impl ControlFlowGraph {
    pub fn new() -> Self {
        Self {
            functions: Vec::new(),
            entry: 0,
        }
    }

    pub fn add_function(&mut self, f: BirFunction) {
        self.functions.push(f);
    }

    pub fn get_function(&self, id: FuncId) -> Option<&BirFunction> {
        self.functions.iter().find(|f| f.id == id)
    }

    pub fn to_dot(&self) -> String {
        let mut dot = String::from("digraph BIR {\n");
        for f in &self.functions {
            dot.push_str(&format!("  subgraph cluster_{} {{\n", f.id));
            dot.push_str(&format!("    label = \"{}\";\n", f.name));
            for b in &f.blocks {
                dot.push_str(&format!("    bb_{} [label=\"block {}\"];\n", b.id, b.id));
            }
            dot.push_str("  }\n");
        }
        dot.push_str("}\n");
        dot
    }
}

pub struct BirPassManager {
    pub level: OptLevel,
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum OptLevel { O0, O1, O2, O3 }

impl BirPassManager {
    pub fn new(level: OptLevel) -> Self {
        Self { level }
    }

    pub fn run(&self, cfg: &mut ControlFlowGraph) {
        match self.level {
            OptLevel::O0 => {},
            OptLevel::O1 => {
                self.dead_code_elimination(cfg);
                self.dead_block_elimination(cfg);
            }
            OptLevel::O2 | OptLevel::O3 => {
                self.dead_code_elimination(cfg);
                self.dead_block_elimination(cfg);
                self.constant_folding(cfg);
                self.constant_propagation(cfg);
                self.copy_propagation(cfg);
                self.licm(cfg);
            }
        }
    }

    pub fn dead_code_elimination(&self, _cfg: &mut ControlFlowGraph) {}
    pub fn dead_block_elimination(&self, f: &mut ControlFlowGraph) {
        for func in &mut f.functions {
            func.blocks.retain(|b| b.id == func.entry || !b.predecessors.is_empty());
        }
    }
    pub fn constant_folding(&self, _cfg: &mut ControlFlowGraph) {}
    pub fn constant_propagation(&self, _cfg: &mut ControlFlowGraph) {}
    pub fn copy_propagation(&self, _cfg: &mut ControlFlowGraph) {}
    pub fn licm(&self, _cfg: &mut ControlFlowGraph) {}
}

pub struct LlvmIrEmitter {
    pub output: String,
}

impl LlvmIrEmitter {
    pub fn new() -> Self {
        Self { output: String::new() }
    }

    pub fn emit_cfg(&mut self, cfg: &ControlFlowGraph) -> String {
        self.output.push_str("; ModuleID = 'blyx_module'\n");
        self.output.push_str("source_filename = \"main.blyx\"\n\n");
        for f in &cfg.functions {
            self.output.push_str(&format!("define i32 @{}() {{\n", f.name));
            self.output.push_str("  ret i32 0\n");
            self.output.push_str("}\n\n");
        }
        self.output.clone()
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_bir_cfg() {
        let mut cfg = ControlFlowGraph::new();
        cfg.add_function(BirFunction {
            id: 0,
            name: "main".to_string(),
            params: vec![],
            return_type: BirType::I32,
            blocks: vec![],
            entry: 0,
        });
        let mut emitter = LlvmIrEmitter::new();
        let ir = emitter.emit_cfg(&cfg);
        assert!(ir.contains("define i32 @main()"));
    }

    #[test]
    fn test_pass_manager_passes() {
        let mut cfg = ControlFlowGraph::new();
        cfg.add_function(BirFunction {
            id: 0,
            name: "opt_test".to_string(),
            params: vec![],
            return_type: BirType::I32,
            blocks: vec![],
            entry: 0,
        });
        let pm = BirPassManager::new(OptLevel::O3);
        pm.run(&mut cfg);
        assert_eq!(cfg.functions.len(), 1);
    }
}
