#!/usr/bin/bash

./k6 run -e TEST=python-fast-api -e URL='http://localhost:8000/' --out dashboard=report=results/python-fast-api-1k.html test.js 