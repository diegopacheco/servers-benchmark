#!/bin/bash

export CFLAGS='-luuid'
gcc webserver.c -luuid -o target