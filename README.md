# 🚀 Servers Benchmark

* 1  - Java 20 - Tomcat 10.1
* 2  - Java 20 - Netty 4
* 3  - Java 20 - Netty 4 Reactive
* 4 -  Java 21 - Netty 4 - GraalVM 21 - Boot 3x
* 5  - Java 20 - Undertow
* 6  - Java 20 - Micronaut
* 7  - Java 20 - Quarkus
* 8  - Java 21 - Smart Http
* 9  - Java 21 - nio-iouring
* 10 - Kotlin 1.9 - Ktor
* 11 - NodeJS 20 -Express
* 12 - Deno 1.37 - Fresh
* 13 - Bun 1.0 - Elysia
* 14 - Bun 1.0 - Hono 
* 15 - Python 3.11 - Twisted
* 16 - Python 3.11 - Tornado
* 17 - V 0.4 - pico
* 18 - C++ - Drogon
* 19 - Go 1.21 - net/http
* 20 - Rust 1.71 - Actix
* 21 - Rust 1.71 - Axum
* 22 - Rust 1.71 - may_minihttp
* 23 - Zig 0.11 - Zap
* 24 - Julia 1.8.5 - Genie
* 25 - Nim 2 - httpbeast
* 26 - Ocaml 5.1 - http_async
* 27 - PHP 8.1 - embedded server
* 28 - PHP 8.1 - Nginx
* 29 - Scala 3.0 - JDK 21 - Zio Http
* 30 - Scala 3.0 - JDK 21 - Play 2.9
* 31 - Scala 3.0 - JDK 21 - Akka-Http

# 🚀 Servers Benchmark - Contributions

* 1  - Rust 1.71 - Hyper <a href="https://github.com/andreixmartins">(@andreixmartins)</a>
* 2  - Lua 5.4 - Pegasus <a href="https://github.com/andreixmartins">(@andreixmartins)</a>
* 3  - Ruby 3.2 - TCP <a href="https://github.com/andreixmartins">(@andreixmartins)</a>
* 4  - Java 21 - default HTTP Server <a href="https://github.com/alex-carvalho">(@alex-carvalho)</a>
* 5  - Bun http - <a href="https://github.com/mrarticuno">(@mrarticuno)</a>
* 6  - Bun http workers - <a href="https://github.com/mrarticuno">(@mrarticuno)</a>
* 7  - Nodejs 20 http - <a href="https://github.com/mrarticuno">(@mrarticuno)</a>
* 8  - Nodejs 20 http workers - <a href="https://github.com/mrarticuno">(@mrarticuno)</a>
* 9  - Python 3.11 Flask - <a href="https://github.com/rRickson">(@rRickson)</a>
* 10 - Python 3.11 fast-api-uvicorn - <a href="https://github.com/rRickson">(@rRickson)</a>
* 11 - Python 3.11 fast-api-hypercorn - <a href="https://github.com/rRickson">(@rRickson)</a>
* 12 - Java 21 - Quarkus Reactive - <a href="https://github.com/dadpig">(@dadpig)</a>
* 13 - Dart 3.1 - Shelf - <a href="https://github.com/brscherer">(@brscherer)</a>
* 14 - Java 17 - Quarkus Native - Mandrel Podman <a href="https://github.com/andremayer">(@andremayer)</a>
* 15 - Clojure 1.11 - Ring/Jetty - <a href="https://github.com/deividfsantos">(@deividfsantos)</a>
* 16 - Haskell Scotty - <a href="https://github.com/deividfsantos">(@deividfsantos)</a>
* 17 - Elixir - Phoenix/Cowboy - <a href="https://github.com/deividfsantos">(@deividfsantos)</a>
* 18 - C - <a href="https://github.com/Thorugoh">(@Thorugoh)</a>
* 19 - Racket - Spin <a href="https://github.com/kilpp">(@kilpp)</a>
* 20 - Crystal 1.9.2 - Spider - <a href="https://github.com/LucasKonrath">(@LucasKonrath)</a>
* 21 - Java 8 - Blade - <a href="https://github.com/LucasKonrath">(@LucasKonrath)</a>
* 22 - Gleam - Mist - <a href="https://github.com/LucasKonrath">(@LucasKonrath)</a>
* 23 - Rust 1.7.1  - Gotham - <a href="https://github.com/andreixmartins">(@andreixmartins)</a>
* 24 - Rust 1.72.1 - Salvo <a href="https://github.com/andremayer">(@andremayer)</a>
* 25 - Rust 1.74.0-nightly - xitca <a href="https://github.com/andremayer">(@andremayer)</a>
* 26 - Haskell - Warp <a href="https://github.com/brunohaetinger">(@brunohaetinger)</a>
* 27 - Kotlin -Http4k <a href="https://github.com/codegik">(@codegik)</a>

### Gatling reports 📈

* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/java-pocs/blob/master/pocs/server-benchmarks-fun/gatling-benchmarks/results/1k/nettysimulation-20230831101614369/index.html">Boot Netty 4</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/java-pocs/blob/master/pocs/server-benchmarks-fun/gatling-benchmarks/results/1k/nettymonosimulation-20230901072503134/index.html">Boot Mono Netty 4</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/nettymonosimulation2-20230919081717174/index.html">Boot Mono Netty 4 V2</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/graalvm-21-nettysimulation-20230922230621982/index.html">Java 21 - Boot 3x Netty 4 - GraalVM 21</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/java-pocs/blob/master/pocs/server-benchmarks-fun/gatling-benchmarks/results/1k/tomcatsimulation-20230831101829804/index.html">Boot Tomcat 10.1</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/java-pocs/blob/master/pocs/server-benchmarks-fun/gatling-benchmarks/results/1k/undertowsimulation-20230831102016479/index.html">Boot Undertow</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/java-pocs/blob/master/pocs/server-benchmarks-fun/gatling-benchmarks/results/1k/micronautsimulation-20230831102207513/index.html">Micronaut</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/java-pocs/blob/master/pocs/server-benchmarks-fun/gatling-benchmarks/results/1k/quarkussimulation-20230831102413091/index.html">Quarkus</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/javasmarthttpsimulation-20230923095909699/index.html">Java 21 - Smart Http</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/javaiouringsimulation-20230923191253473/index.html">Java 21 - nio-iouring</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/ktorsimulation-20230922005446049/index.html">Kotlin 1.9 Ktor (Netty) </a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/java-pocs/blob/master/pocs/server-benchmarks-fun/gatling-benchmarks/results/1k/nodejsexpresssimulation-20230901061955293/index.html">NodeJS 20 Express</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/denofreshsimulation-20230921064305734/index.html">Deno Fresh</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/bunelysiasimulation-20230920055931647/index.html">Bun 1 Elysia</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/bunhonosimulation-20230922083820115/index.html">Bun 1 Hono</a> 
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/vpicovsimulation-20230920082545435/index.html">V 0.4 pico</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/pythontwistedsimulation-20230919084103214/index.html">Python 3.11 Twisted</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/pythontornadosimulation-20230921231608429/index.html">Python 3.11 Tornado</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/java-pocs/blob/master/pocs/server-benchmarks-fun/gatling-benchmarks/results/1k/gosimulation-20230901071759216/index.html">Go 1.21</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/cppdrogonsimulation-20230920053756755/index.html">C++ Drogon 3x</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/java-pocs/blob/master/pocs/server-benchmarks-fun/gatling-benchmarks/results/1k/rustactixsimulation-20230901065954265/index.html">Rust 1.71 Actix</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/rustaxumsimulation-20230921233750315/index.html">Rust 1.71 Axum</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/rustmayminihttpsimulation-20230922101320809/index.html">Rust 1.71 may_minihttp</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/java-pocs/blob/master/pocs/server-benchmarks-fun/gatling-benchmarks/results/1k/zigzapsimulation-20230901083939880/index.html">Zig 0.11 Zap</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/juliageniesimulation-20230922015229438/index.html">Julia 1.8.5 Genie</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/nim2beastsimulation-20230922022501073/index.html">Nim 2 - httpbeast</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/ocamlhttpasyncsimulation-20230926085859534/index.html">Ocaml 5 - http_async</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/phpembededserversimulation-20230927052808543/index.html">PHP 8.1 - Embedded Server</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/phpnginxsimulation-20230927054623525/index.html">PHP 8.1 - Nginx</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/scala3ziohttpsimulation-20230927075424874/index.html">Scala 3.0 - JDK 21 - Zio Http</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/scala3play2simulation-20230927093935324/index.html">Scala 3.0 - JDK 21 - Play 2.9</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/scala3akkahttpsimulation-20230927103318567/index.html">Scala 3.0 - JDK 21 - Akka Http</a>

### Gatling reports - Contributions 📈

* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/rusthypersimulation-20230921073554122/index.html">Rust 1.71 Hyper</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/luasimulation-20230922085012164/index.html">Lua 5.4 Pegasus</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/rubysimulation-20230922192324693/index.html">Ruby TCP</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/javahttpserversimulation-20230922193519476/index.html">Java 21 - Default HTTP Server</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/bunhttpserversimulation-20230922195053137/index.html">Bun http</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/bunhttpserverworkersimulation-20230922194342638/index.html">Bun http workers</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/nodejshttpserversimulation-20230922203521630/index.html">Nodejs 20 http</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/nodejshttpserverworkersimulation-20230922204031221/index.html">Nodejs 20 http workers</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/pythonflasksimulation-20230922205154050/index.html">Python 3.11 Flask</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/pythonfastapisimulation-20230922205817316/index.html">Python 3.11 fast-api-uvicorn</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/pythonfastapihypercornsimulation-20230922211032590/index.html">Python 3.11 fast-api-hypercorn</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/quarkusreactsimulation-20230922215821094/index.html">Java 21 - Quarkus Reactive</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/dartshelfsimulation-20230925045329572/index.html">Dart 3 - Shelf</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/quarkusnativesimulation-20230925051246598/index.html">Java 17 - Quarkus Native - Mandrel Podman</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/clojureringjettysimulation-20230925052855479/index.html">Clojure 1.11 - Ring/Jetty</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/haskellscottysimulation-20230925055042035/index.html">Haskell Scotty</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/elixirphoenixcowboysimulation-20230925061250436/index.html">Elixir - Phoenix/Cowboy</a> 
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/cscratchsimulation-20230925193615164/index.html">C</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/racketspinsimulation-20230925235144482/index.html">Racket - Spin</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/crystalspidergazellesimulation-20230928055122772/index.html">Crystal 1.9.2 - Spider</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/javabladesimulation-20230928060755901/index.html">Java 8 - Blade</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/gleammistsimulation-20230928071343301/index.html">Gleam - Mist</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/rustgothamsimulation-20230930010745272/index.html">Rust 1.7.1 - Gotham</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/rustsalvosimulation-20231001211803463/index.html">Rust 1.72.1 - Salvo</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/rustxitcasimulation-20231001213138805/index.html">Rust 1.74.0-nightly (ca62d2c44 2023-09-30) - Xitca</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/haskellwarpsimulation-20231003073823194/index.html">Haskell - Warp</a>
* <a href="https://htmlpreview.github.io/?https://github.com/diegopacheco/servers-benchmark/blob/main/gatling-benchmarks/results/1k/http4ksimulation-20231003075332167/index.html">Kotlin - Http4k</a>

### Throwing a little bit of Salt 🧂

Things that this should be doing to be better.
* Wram up
* Run on AWS
* Have 2 different machines for server and gatling
* Make more rounds with more users, 10k, 100k, 1M
* Have other uses cases like, read json from DB, read static file, persist data, etc...

### Results Summary (☕ Java)

1k users, during 1 minute non-stop
* Boot-Netty    : 60000 total/OK, p99: 2 ms 
* Boot-Tomcat   : 60000 total/OK, p99: 6 ms
* Boot-Undertow : 60000 total/OK, p99: 15 ms
* Micronaut     : 60000 total/OK, p99: 129 ms
* Quarkus       : 60000 total/OK, p99: 4 ms 

### Build All 💻

Make sure you have installed and configured on the $PATH
1. Java sdk 20
2. Kotlin 1.9.10
3. Zig version 0.11
4. Rust 1.71.0
5. Go 1.21.0
6. g++ 11.4.0
7. bun 1.0.0
8. Deno 1.37
9. Nodejs 20
10. Python 3.11
11. V 0.4
12. Julia 1.8.5
13. Nim 2.0
14. Lua 5.4
15. Ruby 3.2.2
16. Dart 3.2.1
17. Podman 3.4.2
18. Clojure 1.11 / Leiningen 2.9
19. Haskell 9.2 / Cabal 3.6
20. gcc 11.4
21. Racket 8.2
22. Ocaml 5.1 / opam 2.1 / dune 3.7
23. PHP 8.1
24. Scala 3.3.1 / sbt 1.9.6
25. Crystal 1.9.2
26. Gleam 0.31.0 / mist 0.13.2

```bash
./build-all.sh
```

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

### Important OS tuning

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
3. Create a run.sh script - add the tuning for linux os pls
3. Add the new project with new language/framework (1 pr per lang/framework)
4. Dont publish gatling results
5. I will re-run on my machine, you can run all in our machine in our fork to compare different results with different hardware
6. Add a different script to install dependencies

## Note on Java 21

Java 21 there is some performance degradetion comparing spring boot 3x and netty.

Correto JDK 21
```
================================================================================
---- Global Information --------------------------------------------------------
> request count                                      60000 (OK=60000  KO=0     )
> min response time                                      0 (OK=0      KO=-     )
> max response time                                    276 (OK=276    KO=-     )
> mean response time                                     2 (OK=2      KO=-     )
> std deviation                                         14 (OK=14     KO=-     )
> response time 50th percentile                          1 (OK=1      KO=-     )
> response time 75th percentile                          1 (OK=1      KO=-     )
> response time 95th percentile                          1 (OK=1      KO=-     )
> response time 99th percentile                          8 (OK=8      KO=-     )
> mean requests/sec                                923.077 (OK=923.077 KO=-     )
---- Response Time Distribution ------------------------------------------------
> t < 800 ms                                         60000 (100%)
> 800 ms <= t < 1200 ms                                  0 (  0%)
> t >= 1200 ms                                           0 (  0%)
> failed                                                 0 (  0%)
================================================================================
```

Correto JDK 20
```
================================================================================
---- Global Information --------------------------------------------------------
> request count                                      60000 (OK=60000  KO=0     )
> min response time                                      0 (OK=0      KO=-     )
> max response time                                    267 (OK=267    KO=-     )
> mean response time                                     2 (OK=2      KO=-     )
> std deviation                                         13 (OK=13     KO=-     )
> response time 50th percentile                          1 (OK=1      KO=-     )
> response time 75th percentile                          1 (OK=1      KO=-     )
> response time 95th percentile                          1 (OK=1      KO=-     )
> response time 99th percentile                          7 (OK=7      KO=-     )
> mean requests/sec                                923.077 (OK=923.077 KO=-     )
---- Response Time Distribution ------------------------------------------------
> t < 800 ms                                         60000 (100%)
> 800 ms <= t < 1200 ms                                  0 (  0%)
> t >= 1200 ms                                           0 (  0%)
> failed                                                 0 (  0%)
================================================================================
```
### Application boot time on Java 21, GraalVM 21 and Netty

0.049 seconds
```

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::                (v3.1.3)

2023-09-22T16:06:05.325-07:00  INFO 450420 --- [           main] c.g.d.sandboxspring.Application          : Starting AOT-processed Application using Java 21 with PID 450420 (/mnt/e35d88d4-42b9-49ea-bf29-c4c3b018d429/diego/git/diegopacheco/servers-benchmark/server-boot-netty/target/server-boot-netty started by diego in /mnt/e35d88d4-42b9-49ea-bf29-c4c3b018d429/diego/git/diegopacheco/servers-benchmark/server-boot-netty)
2023-09-22T16:06:05.325-07:00  INFO 450420 --- [           main] c.g.d.sandboxspring.Application          : No active profile set, falling back to 1 default profile: "default"
2023-09-22T16:06:05.361-07:00  INFO 450420 --- [           main] o.s.b.web.embedded.netty.NettyWebServer  : Netty started on port 8080
2023-09-22T16:06:05.362-07:00  INFO 450420 --- [           main] c.g.d.sandboxspring.Application          : Started Application in 0.049 seconds (process running for 0.055)
Spring Boot 3.1.x working! 
```

## Server Spec
```
Linux Kernel: 6.2.0-1009-lowlatency 
OS          : Ubuntu 22.04.3 LTS
```
```bash
inxi -Fxz
```
```
System:
  Kernel: 6.2.0-1009-lowlatency x86_64 bits: 64 compiler: N/A
    Desktop: GNOME 42.9 Distro: Ubuntu 22.04.3 LTS (Jammy Jellyfish)
Machine:
  Type: Laptop System: Avell High Performance product: Avell G1555 MUV / A62
    v: Standard serial: <superuser required>
  Mobo: Avell High Performance model: Avell G1555 MUV / A62 v: Standard
    serial: <superuser required> UEFI: American Megatrends v: N.1.04
    date: 08/13/2019
Battery:
  ID-1: BAT0 charge: 44.9 Wh (96.1%) condition: 46.7/46.7 Wh (100.0%)
    volts: 12.5 min: 11.4 model: standard status: Not charging
CPU:
  Info: 6-core model: Intel Core i7-9750H bits: 64 type: MT MCP
    arch: Coffee Lake rev: A cache: L1: 384 KiB L2: 1.5 MiB L3: 12 MiB
  Speed (MHz): avg: 3498 high: 4202 min/max: 800/4500 cores: 1: 4154
    2: 4200 3: 2600 4: 4196 5: 2600 6: 4092 7: 2600 8: 4127 9: 4202 10: 4014
    11: 2600 12: 2600 bogomips: 62399
  Flags: avx avx2 ht lm nx pae sse sse2 sse3 sse4_1 sse4_2 ssse3 vmx
Graphics:
  Device-1: Intel CoffeeLake-H GT2 [UHD Graphics 630]
    vendor: Tongfang Hongkong driver: i915 v: kernel bus-ID: 00:02.0
  Device-2: NVIDIA TU116M [GeForce GTX 1660 Ti Mobile]
    vendor: Tongfang Hongkong driver: nouveau v: kernel bus-ID: 01:00.0
  Device-3: Logitech BRIO Ultra HD Webcam type: USB
    driver: snd-usb-audio,uvcvideo bus-ID: 1-12.4:10
  Device-4: Acer HD Webcam type: USB driver: uvcvideo bus-ID: 1-13:5
  Display: wayland server: X.Org v: 1.22.1.1 with: Xwayland v: 22.1.1
    compositor: gnome-shell driver: X: loaded: modesetting,nvidia
    unloaded: fbdev,nouveau,vesa gpu: i915,nouveau resolution:
    1: 3840x2160~60Hz 2: 1920x1080~60Hz
  OpenGL: renderer: Mesa Intel UHD Graphics 630 (CFL GT2)
    v: 4.6 Mesa 23.0.4-0ubuntu1~22.04.1 direct render: Yes
Network:
  Device-1: Intel Cannon Lake PCH CNVi WiFi driver: iwlwifi v: kernel
    bus-ID: 00:14.3
  IF: wlo1 state: up mac: <filter>
  Device-2: Realtek RTL8111/8168/8411 PCI Express Gigabit Ethernet
    driver: r8169 v: kernel port: N/A bus-ID: 03:00.0
Drives:
  Local Storage: total: 1.36 TiB used: 742.63 GiB (53.1%)
  ID-1: /dev/nvme0n1 vendor: Samsung model: SSD 970 EVO Plus 500GB
    size: 465.76 GiB temp: 50.9 C
  ID-2: /dev/sda vendor: Crucial model: CT1000MX500SSD1 size: 931.51 GiB
Partition:
  ID-1: / size: 456.89 GiB used: 372.27 GiB (81.5%) fs: ext4
    dev: /dev/nvme0n1p2
  ID-2: /boot/efi size: 511 MiB used: 6.1 MiB (1.2%) fs: vfat
    dev: /dev/nvme0n1p1
Swap:
  ID-1: swap-1 type: file size: 2 GiB used: 0 KiB (0.0%) file: /swapfile
Sensors:
  System Temperatures: cpu: 84.0 C pch: 75.0 C mobo: 84.0 C gpu: nouveau
    temp: 69.0 C
  Fan Speeds (RPM): N/A
Info:
  Processes: 449 Uptime: 1d 45m Memory: 62.65 GiB used: 10.58 GiB (16.9%)
  Init: systemd runlevel: 5 Compilers: gcc: 11.4.0 clang: 16.0.4
  Packages: 4360 Shell: Zsh v: 5.8.1 inxi: 3.3.13
```