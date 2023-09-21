# 🚀 Servers Benchmark

* Java 20 - Tomcat 10.1
* Java 20 - Netty 4
* Java 20 - Netty 4 Reactive
* Java 20 - Undertow
* Java 20 - Micronaut
* Java 20 - Quarkus
* NodeJS 20 -Express
* Deno 1.37 - Fresh
* Bun 1.0 - Elysia
* Python 3.11 - Twisted
* Python 3.11 - Tornado
* V 0.4 - pico
* C++ - Drogon
* Go 1.21 - net/http
* Rust 1.71 - Actix
* Zig 0.11 - Zap

# 🚀 Servers Benchmark - Contributions

* Rust 1.71 - Hyper <a href="https://github.com/andreixmartins">(@andreixmartins)</a>

### Results Summary (☕ Java)

1k users, during 1 minute non-stop
* Boot-Netty    : 60000 total/OK, p99: 2 ms 
* Boot-Tomcat   : 60000 total/OK, p99: 6 ms
* Boot-Undertow : 60000 total/OK, p99: 15 ms
* Micronaut     : 60000 total/OK, p99: 129 ms
* Quarkus       : 60000 total/OK, p99: 4 ms 

### build Java ☕

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

### Build All 💻

Make sure you have installed and configured on the $PATH
1. Java sdk 20
2. Zig version 0.11
3. Rust 1.71.0
4. Go 1.21.0
5. g++ 11.4.0
6. bun 1.0.0
7. Deno 1.37
5. Nodejs 20
6. Python 3.11
7. V 0.4

```bash
./build-all.sh
```

### Gatling reports 📈

* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/java-pocs/blob/master/pocs/server-benchmarks-fun/gatling-benchmarks/results/1k/nettysimulation-20230831101614369/index.html">Boot Netty 4</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/java-pocs/blob/master/pocs/server-benchmarks-fun/gatling-benchmarks/results/1k/nettymonosimulation-20230901072503134/index.html">Boot Mono Netty 4</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/nettymonosimulation2-20230919081717174/index.html">Boot Mono Netty 4 V2</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/java-pocs/blob/master/pocs/server-benchmarks-fun/gatling-benchmarks/results/1k/tomcatsimulation-20230831101829804/index.html">Boot Tomcat 10.1</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/java-pocs/blob/master/pocs/server-benchmarks-fun/gatling-benchmarks/results/1k/undertowsimulation-20230831102016479/index.html">Boot Undertow</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/java-pocs/blob/master/pocs/server-benchmarks-fun/gatling-benchmarks/results/1k/micronautsimulation-20230831102207513/index.html">Micronaut</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/java-pocs/blob/master/pocs/server-benchmarks-fun/gatling-benchmarks/results/1k/quarkussimulation-20230831102413091/index.html">Quarkus</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/java-pocs/blob/master/pocs/server-benchmarks-fun/gatling-benchmarks/results/1k/nodejsexpresssimulation-20230901061955293/index.html">NodeJS 20 Express</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/denofreshsimulation-20230921064305734/index.html">Deno Fresh</a> 
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/bunelysiasimulation-20230920055931647/index.html">Bun 1 Elysia</a> 
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/vpicovsimulation-20230920082545435/index.html">V 0.4 pico</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/pythontwistedsimulation-20230919084103214/index.html">Python 3.11 Twisted</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/pythontornadosimulation-20230921231608429/index.html">Python 3.11 Tornado</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/java-pocs/blob/master/pocs/server-benchmarks-fun/gatling-benchmarks/results/1k/gosimulation-20230901071759216/index.html">Go 1.21</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/cppdrogonsimulation-20230920053756755/index.html">C++ Drogon 3x</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/java-pocs/blob/master/pocs/server-benchmarks-fun/gatling-benchmarks/results/1k/rustactixsimulation-20230901065954265/index.html">Rust 1.71 Actix</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/java-pocs/blob/master/pocs/server-benchmarks-fun/gatling-benchmarks/results/1k/zigzapsimulation-20230901083939880/index.html">Zig 0.11 Zap</a>

### Gatling reports - Contributions 📈

* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/rusthypersimulation-20230921073554122/index.html">Rust 1.71 Hyper</a>

### Throwing a little bit of Salt 🧂

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

### for V and pico
gatling is having issues, but apache ab is working fine.
```bash
ab -n 60000 -c 1000 http://127.0.0.1:8080/
```
```
This is ApacheBench, Version 2.3 <$Revision: 1879490 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking 127.0.0.1 (be patient)
Completed 6000 requests
Completed 12000 requests
Completed 18000 requests
Completed 24000 requests
Completed 30000 requests
Completed 36000 requests
Completed 42000 requests
Completed 48000 requests
Completed 54000 requests
Completed 60000 requests
Finished 60000 requests


Server Software:        
Server Hostname:        127.0.0.1
Server Port:            8080

Document Path:          /
Document Length:        36 bytes

Concurrency Level:      1000
Time taken for tests:   487.475 seconds
Complete requests:      60000
Failed requests:        0
Total transferred:      6000000 bytes
HTML transferred:       2160000 bytes
Requests per second:    123.08 [#/sec] (mean)
Time per request:       8124.588 [ms] (mean)
Time per request:       8.125 [ms] (mean, across all concurrent requests)
Transfer rate:          12.02 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0   13   9.0     13      56
Processing:  7043 8026 271.9   8059   15159
Waiting:        0    7   6.6      6      69
Total:       7056 8039 272.1   8069   15179

Percentage of the requests served within a certain time (ms)
  50%   8069
  66%   8072
  75%   8075
  80%   8077
  90%   8090
  95%   8105
  98%   8126
  99%   8129
 100%  15179 (longest request)
```
Fix gatling for V and pic by sharing connection.
```Java
HttpProtocolBuilder httpProtocol = http
        .baseUrl("http://localhost:8080")
        .acceptHeader("text/html")
        .doNotTrackHeader("1")
        .userAgentHeader("Gat")
        .shareConnections();
```

### Open a PR to add new language / server?

1. Create a gatling simulation
2. Create a gatling script
3. Add the new project with new language/framework
4. Dont publish gatling results
5. I will re-run on my machine, you can run all in our machine in our fork to compare different results with different hardware

## TODO

* Migrate to JDK 21
* GraalVM
