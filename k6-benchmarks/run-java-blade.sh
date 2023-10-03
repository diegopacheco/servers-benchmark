#!/usr/bin/bash

ulimit -n 65000
sudo sysctl -w net.ipv4.ip_local_port_range="1025 65535"
echo 300000 | sudo tee /proc/sys/fs/nr_open
echo 300000 | sudo tee /proc/sys/fs/file-max

./k6 run -e TEST=java-blade -e URL='http://127.0.0.1:9000/uuid' --out dashboard=report=results/java-blade-1k.html test.js 
