#!/bin/bash

ulimit -n 65000
sudo sysctl -w net.ipv4.ip_local_port_range="1025 65535"
echo 30000 | sudo tee /proc/sys/fs/nr_open
echo 30000 | sudo tee /proc/sys/fs/file-max

racket server.rkt
