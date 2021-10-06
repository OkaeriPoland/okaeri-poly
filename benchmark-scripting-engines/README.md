## Results
```console
# JDK 11, Windows 11, Ryzen 5 3600
# graal: 21.2.0
# groovy: 3.0.9
Benchmark                                               Mode  Cnt     Score    Error  Units
BenchmarkScriptingMatmul.graaljs_matmul                thrpt    3     4,369 ±  0,512  ops/s
BenchmarkScriptingMatmul.groovy_matmul                 thrpt    3    12,199 ±  0,704  ops/s
BenchmarkScriptingMatmul.groovy_matmul_compile_static  thrpt    3  1613,874 ± 20,543  ops/s
```
