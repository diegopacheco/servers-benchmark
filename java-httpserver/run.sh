#!/bin/bash
./mvnw clean package

java -jar ./target/java-http-server-1.0-SNAPSHOT.jar


