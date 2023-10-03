#!/usr/bin/bash

./k6 run -e TEST=java-http-server-virtual-threads -e URL='http://localhost:8080/' --out dashboard=report=results/java-http-server-virtual-threads-1k.html test.js 