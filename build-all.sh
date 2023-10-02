#!/bin/bash

echo ">>> Building java projects"
./mvnw clean install

echo ">>> Building Rust"
cd rust-actix/
cargo build --release
cd ../

echo ">>> Building Zig"
cd zig-zap/
zig build -Doptimize=ReleaseFast
cd ../

echo ">>> Building Go"
cd go-nethttp/
go build
cd ../

echo ">>> Building Gleam"
cd gleam-mist/
gleam build
cd ../

echo ">>> Building Crystal"
cd crystal-spider-gazelle/
crystal build ./src/app.cr
cd ../

echo ">>> DONE. "
