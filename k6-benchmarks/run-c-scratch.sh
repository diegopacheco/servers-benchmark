#!/usr/bin/bash

./k6 run -e TEST=c-scratch -e URL='http://localhost:8080/' --out dashboard=report=results/c-scratch-1k.html test.js 