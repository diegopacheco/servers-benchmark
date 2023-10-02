#!/bin/bash

./mvnw clean package

ulimit -n 65000
sudo sysctl -w net.ipv4.ip_local_port_range="1025 65535"
echo 300000 | sudo tee /proc/sys/fs/nr_open
echo 300000 | sudo tee /proc/sys/fs/file-max

java -jar ./target/server-blade-1.0-SNAPSHOT-jar-with-dependencies.jar
