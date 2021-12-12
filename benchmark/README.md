## Results

```console
# JDK 11, Windows 11, Ryzen 5 3600
#
# jdk: 11.0.12 (temurin)
# graal: 21.2.0
# groovy: 3.0.9
# jython: 2.7.2
#
Benchmark                                               Mode  Cnt     Score      Error  Units
BenchmarkScriptingMatmul.graaljs_matmul                thrpt    3     4,512 ±    0,016  ops/s
BenchmarkScriptingMatmul.groovy_matmul                 thrpt    3    12,661 ±    1,700  ops/s
BenchmarkScriptingMatmul.groovy_matmul_compile_static  thrpt    3  1662,161 ±   26,739  ops/s
BenchmarkScriptingMatmul.jython_matmul                 thrpt    3    12,974 ±    0,131  ops/s
BenchmarkScriptingMatmul.native_matmul                 thrpt    3  1739,149 ± 1514,806  ops/s
```

```console
# JDK 11, Windows 11, Ryzen 5 3600
#
# jdk: 11.0.12 (graalvm-ce)
# graal: 21.2.0
# groovy: 3.0.9
# jython: 2.7.2
#
Benchmark                                               Mode  Cnt     Score    Error  Units
BenchmarkScriptingMatmul.graaljs_matmul                thrpt    3  1233,284 ± 20,865  ops/s
BenchmarkScriptingMatmul.groovy_matmul                 thrpt    3    12,685 ±  1,306  ops/s
BenchmarkScriptingMatmul.groovy_matmul_compile_static  thrpt    3  1813,959 ± 23,357  ops/s
BenchmarkScriptingMatmul.jython_matmul                 thrpt    3    12,505 ±  0,315  ops/s
BenchmarkScriptingMatmul.native_matmul                 thrpt    3  1783,404 ± 54,866  ops/s
```
