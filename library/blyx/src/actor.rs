// Blyx Actor Model Implementation (blyx::actor)
// Created by Rahul Chaube — https://blyx-lang.space
// Open Source — MIT + Apache 2.0
// Repository: https://github.com/Blyx-lang-space/blyx

pub trait Actor: Send + 'static {
    type Message: Send;
    fn handle(&mut self, msg: Self::Message);
}

pub struct ActorHandle<M> {
    _phantom: std::marker::PhantomData<M>,
}

pub fn spawn_actor<A: Actor>(_actor: A) -> ActorHandle<A::Message> {
    ActorHandle { _phantom: std::marker::PhantomData }
}

impl<M: Send> ActorHandle<M> {
    pub fn send(&self, _msg: M) {}
    pub fn join(self) {}
}
