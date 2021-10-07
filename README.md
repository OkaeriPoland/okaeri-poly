# Okaeri Poly

![License](https://img.shields.io/github/license/OkaeriPoland/okaeri-poly)
![Total lines](https://img.shields.io/tokei/lines/github/OkaeriPoland/okaeri-poly)
![Repo size](https://img.shields.io/github/repo-size/OkaeriPoland/okaeri-poly)
![Contributors](https://img.shields.io/github/contributors/OkaeriPoland/okaeri-poly)
[![Discord](https://img.shields.io/discord/589089838200913930)](https://discord.gg/hASN5eX)

Enterprise grade Minecraft scripting adapter for Groovy, JavaScript, and Python.

## Requirements
Java 11 or newer. Using GraalVM will improve performance if JavaScript backend is required.

## Backend comparision
| Backend                      | Performance (OpenJDK 11) | Performance (GraalVM 11) | IDE Support (IntelliJ) | Interoperability |
|------------------------------|--------------------------|--------------------------|------------------------|------------------|
| ⭐ Groovy (w. @CompileStatic) | ⭐ Excellent              | ⭐ Excellent              | ⭐ Excellent            | ⭐ Excellent      |
| ⭐ Groovy                     | 🔵 Good                   | 🔵 Good                   | 🟢 Very good            | ⭐ Excellent      |
| 🔵 JavaScript (Graaljs)       | 🟠 Fair                   | 🟢 Very good              | 🔴 Poor                 | 🟢 Very good      |
| 🟠 Python (Jython)            | 🔵 Good                   | 🔵 Good                   | 🔴 Poor                 | 🟠 Fair           |

#### Performance
- ⭐ _Excellent_: almost the same or better as native, can be used even for most demanding tasks
- 🟢 _Very good_: applicable for most of the tasks (expect at least 1/4 of native performance)
- 🔵 _Good_: fast enough but requires caution in possible hotspots
- 🟠 _Fair_: fast enough to be used for basic tasks
- 🔴 _Poor_: hardly usable in any case

#### IDE support
- ⭐ _Excellent_: good typing support, advanced auto-completion, advanced static-analysis
- 🟢 _Very good_: good typing support, auto-completion, static-analysis
- 🔵 _Good_: good typing support, may include basic auto-completion and static-analysis
- 🟠 _Fair_: at least some typing support and usability for target language
- 🔴 _Poor_: no real integration or cannot map java types

#### Interoperability
- ⭐ _Excellent_: integrating feels like Java or better, with almost no disturbances
- 🟢 _Very good_: just another day in the office with minor disturbances here and there
- 🔵 _Good_: it is good enough, but may require some patience with minor problems
- 🟠 _Fair_: it kinda works, but requires some tricks or pesky wrappers, major headache
- 🔴 _Poor_: almost no interop or really complicated
