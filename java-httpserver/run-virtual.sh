#!/bin/bash
./mvnw clean package

java -jar -Dvirtual-thread=true ./target/java-http-server-1.0-SNAPSHOT.jar


