#!/bin/bash

cargo build --release

ulimit -n 65000
ulimit -a

target/release/rust-hyper