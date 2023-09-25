#!/usr/bin/bash

podman build -f src/main/docker/Dockerfile.multistage -t quarkus/quarkus-native .
