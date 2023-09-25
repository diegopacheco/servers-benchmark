#!/bin/bash

ulimit -n 65000
make webserver
./webserver
