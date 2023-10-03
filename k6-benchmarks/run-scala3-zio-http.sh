#!/usr/bin/bash

ulimit -n 65000
sudo sysctl -w net.ipv4.ip_local_port_range="1025 65535"
echo 300000 | sudo tee /proc/sys/fs/nr_open
echo 300000 | sudo tee /proc/sys/fs/file-max

./k6 run -e TEST=scala3-zio-http -e URL='http://127.0.0.1:8080/u' --out dashboard=report=results/scala3-zio-http-1k.html test.js 