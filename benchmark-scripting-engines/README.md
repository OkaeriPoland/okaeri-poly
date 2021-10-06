## Results
```console
# JDK 11, Windows 11, Ryzen 5 3600
# graal: 21.2.0
# groovy: 3.0.9
Benchmark                                               Mode  Cnt     Score     Error  Units
BenchmarkScriptingMatmul.graaljs_matmul                thrpt    3     4,601 ±   0,047  ops/s
BenchmarkScriptingMatmul.groovy_matmul                 thrpt    3    13,054 ±   0,882  ops/s
BenchmarkScriptingMatmul.groovy_matmul_compile_static  thrpt    3  1648,556 ±   7,340  ops/s
BenchmarkScriptingMatmul.native_matmul                 thrpt    3  1729,092 ± 160,851  ops/s
```
