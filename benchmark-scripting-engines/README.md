## Results
```console
# JDK 11, Windows 11, Ryzen 5 3600
#
# jdk: 11.0.12 (temurin)
# graal: 21.2.0
# groovy: 3.0.9
#
Benchmark                                               Mode  Cnt     Score     Error  Units
BenchmarkScriptingMatmul.graaljs_matmul                thrpt    3     4,601 ±   0,047  ops/s
BenchmarkScriptingMatmul.groovy_matmul                 thrpt    3    13,054 ±   0,882  ops/s
BenchmarkScriptingMatmul.groovy_matmul_compile_static  thrpt    3  1648,556 ±   7,340  ops/s
BenchmarkScriptingMatmul.native_matmul                 thrpt    3  1729,092 ± 160,851  ops/s
```
```console
# JDK 11, Windows 11, Ryzen 5 3600
#
# jdk: 11.0.12 (graalvm-ce)
# graal: 21.2.0
# groovy: 3.0.9
#
Benchmark                                               Mode  Cnt     Score     Error  Units
BenchmarkScriptingMatmul.graaljs_matmul                thrpt    3  1159,523 ±  87,696  ops/s
BenchmarkScriptingMatmul.groovy_matmul                 thrpt    3    11,877 ±   0,935  ops/s
BenchmarkScriptingMatmul.groovy_matmul_compile_static  thrpt    3  1719,940 ± 624,958  ops/s
BenchmarkScriptingMatmul.native_matmul                 thrpt    3  1763,808 ± 266,482  ops/s
```
