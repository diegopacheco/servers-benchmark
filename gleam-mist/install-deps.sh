#!/bin/bash

cd /tmp
git clone https://github.com/gleam-lang/gleam.git --branch v0.9.x
cd gleam

# Build the Gleam compiler. This will take some time!
make install

# Verify the compiler is installed
# Prints "gleam $VERSION"
gleam --version
