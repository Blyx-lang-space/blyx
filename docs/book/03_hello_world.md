# The Blyx Programming Language Book — Chapter 3: Hello World

Official Domain: https://blyx-lang.space

---

## Your First Blyx Program

Create a file named `hello.blyx`:

```blyx
fn main() {
    println!("Hello, World from Blyx!");
}
```

Compile and run using `blyxc`:

```bash
blyxc hello.blyx -o hello
./hello
```
