#!/usr/bin/bash

ulimit -n 65000 
./mvnw gatling:test -Dgatling.simulation=VPicovSimulation
