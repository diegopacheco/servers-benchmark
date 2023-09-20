# Servers Benchmark

* Java 20 - Tomcat 10.1
* Java 20 - Netty 4
* Java 20 - Netty 4 Reactive
* Java 20 - Undertow
* Java 20 - Micronaut
* Java 20 - Quarkus
* NodeJS 20 Express
* Python 3.11 Twisted
* Go ne/nethttp
* Rust Actix
* Zig Zap

### Results

1k users, during 1 minute non-stop
* Boot-Netty    : 60000 total/OK, p99: 2 ms 
* Boot-Tomcat   : 60000 total/OK, p99: 6 ms
* Boot-Undertow : 60000 total/OK, p99: 15 ms
* Micronaut     : 60000 total/OK, p99: 129 ms
* Quarkus       : 60000 total/OK, p99: 4 ms 

### build Java

1. for Java - install sdkman - https://sdkman.io/
```bash
curl -s "https://get.sdkman.io" | bash
```
```bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
sdk install java 20.0.2-amzn
sdk use java 20.0.2-amzn
java -version
```
```bash
❯ java -version
openjdk version "20.0.1" 2023-04-18
OpenJDK Runtime Environment Homebrew (build 20.0.1)
OpenJDK 64-Bit Server VM Homebrew (build 20.0.1, mixed mode, sharing)
```

```bash
./mvnw clean install
```

### Build All

Make sure you have installed and configured on the $PATH
1. Java sdk 20
2. Zig version 0.11
3. Rust 1.71.0
4. Go 1.21.0
5. Nodejs 20
6. Python 3.11

```bash
./build-all.sh
```

### Gatling reports

* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/java-pocs/blob/master/pocs/server-benchmarks-fun/gatling-benchmarks/results/1k/nettysimulation-20230831101614369/index.html">Boot Netty 4</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/java-pocs/blob/master/pocs/server-benchmarks-fun/gatling-benchmarks/results/1k/nettymonosimulation-20230901072503134/index.html">Boot Mono Netty 4</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/nettymonosimulation2-20230919081717174/index.html">Boot Mono Netty 4 V2</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/java-pocs/blob/master/pocs/server-benchmarks-fun/gatling-benchmarks/results/1k/tomcatsimulation-20230831101829804/index.html">Boot Tomcat 10.1</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/java-pocs/blob/master/pocs/server-benchmarks-fun/gatling-benchmarks/results/1k/undertowsimulation-20230831102016479/index.html">Boot Undertow</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/java-pocs/blob/master/pocs/server-benchmarks-fun/gatling-benchmarks/results/1k/micronautsimulation-20230831102207513/index.html">Micronaut</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/java-pocs/blob/master/pocs/server-benchmarks-fun/gatling-benchmarks/results/1k/quarkussimulation-20230831102413091/index.html">Quarkus</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/java-pocs/blob/master/pocs/server-benchmarks-fun/gatling-benchmarks/results/1k/nodejsexpresssimulation-20230901061955293/index.html">NodeJS 20 Express</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/pythontwistedsimulation-20230919084103214/index.html">Python 3.11 Twisted</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/java-pocs/blob/master/pocs/server-benchmarks-fun/gatling-benchmarks/results/1k/gosimulation-20230901071759216/index.html">Go 1.21</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/cppdrogonsimulation-20230920053756755/index.html">C++ Drogon 3x</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/java-pocs/blob/master/pocs/server-benchmarks-fun/gatling-benchmarks/results/1k/rustactixsimulation-20230901065954265/index.html">Rust 1.71 Actix</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/java-pocs/blob/master/pocs/server-benchmarks-fun/gatling-benchmarks/results/1k/zigzapsimulation-20230901083939880/index.html">Zig 0.11 Zap</a>

### Throwing a little bit of Salt

Things that this should be doing to be better.

* Wram up
* Run on AWS
* Have 2 different machines for server and gatling
* Make more rounds with more users, 10k, 100k, 1M
* Have other uses cases like, read json from DB, read static file, persist data, etc...

### Important OS tunning

1. default file descriptors for linux is 1024, mac is 256 - need to be twecked.
2. also open files 
3. switch to ip v4
here are steps on how to do it: https://gist.github.com/diegopacheco/ad1e63691380ad1a6b3be6b62910c3fb

### Open a PR to add new language / server?

1. Create a gatling simulation
2. Updad the reports
3. update the readme to add the new server / link to gatling report
