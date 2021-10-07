# Okaeri Poly

![License](https://img.shields.io/github/license/OkaeriPoland/okaeri-poly)
![Total lines](https://img.shields.io/tokei/lines/github/OkaeriPoland/okaeri-poly)
![Repo size](https://img.shields.io/github/repo-size/OkaeriPoland/okaeri-poly)
![Contributors](https://img.shields.io/github/contributors/OkaeriPoland/okaeri-poly)
[![Discord](https://img.shields.io/discord/589089838200913930)](https://discord.gg/hASN5eX)

Enterprise grade Minecraft scripting adapter for Groovy, JavaScript, and Python. Created with [okaeri-platform](https://github.com/OkaeriPoland/okaeri-platform).

## Requirements

Java 11 or newer. Using GraalVM will improve performance if JavaScript backend is required.

## Supported platforms

- **[Bukkit](https://github.com/OkaeriPoland/okaeri-poly/tree/master/bukkit)**: Spigot/Paper minecraft server plugin (**disclaimer**: requires version `1.13` or newer)
- ~~**[Bungee](https://github.com/OkaeriPoland/okaeri-poly/tree/master/bungee)**: BungeeCord/Waterfall minecraft proxy plugin~~ (incoming)

## Installation

Grab latest [release](https://github.com/OkaeriPoland/okaeri-poly/releases) jar for your platform and install it like any other plugin, e.g. put in `plugins/` for Spigot/Paper and BungeeCord/Waterfall
servers.

Put your script files inside `plugins/Poly/scripts/` directory. File extension will determine backend to be used (`groovy`, `js`, `py`).

## Development

Command support, event listeners, and scheduler can be accessed through `script` object/variable helper. This ensures script unloading unregisters commands, listeners, and cancels pending tasks.

```groovy
import org.bukkit.event.player.PlayerJoinEvent

// groovy example
script.listen(PlayerJoinEvent) { event ->
    logger.info("${event.player.name} joined the game!")
}
```

### Bukkit

| Backend    | Helper                                                                                                                                                           | Note                                                                                                                               |
|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| Groovy     | [BukkitScriptHelper](https://github.com/OkaeriPoland/okaeri-poly/blob/master/bukkit/src/main/java/eu/okaeri/poly/bukkit/provider/BukkitScriptHelper.java)        | BukkitGroovyHelper exists, but thanks to good interop all methods are contained in BukkitScriptHelper.                             |
| JavaScript | [BukkitScriptHelper](https://github.com/OkaeriPoland/okaeri-poly/blob/master/bukkit/src/main/java/eu/okaeri/poly/bukkit/provider/BukkitScriptHelper.java)        | BukkitJavaScriptHelper exists, but thanks to good interop all methods are contained in BukkitScriptHelper.                         |
| Python     | [BukkitPythonHelper](https://github.com/OkaeriPoland/okaeri-poly/blob/master/bukkit/src/main/java/eu/okaeri/poly/bukkit/provider/python/BukkitPythonHelper.java) | Uses python functions instead of standard methods accepting java consumers/functions due to poor interop and language limitations. |

Additional global variables:

- `plugin`: instance of `eu.okaeri.poly.bukkit.PolyPlugin`
- `logger`: instance of `java.util.logging.Logger`
- `server`: instance of `org.bukkit.Server`

### Bungee

| Backend    | Helper                                                                                                                                                           | Note                                                                                                                               |
|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| Groovy     | [BungeeScriptHelper](https://github.com/OkaeriPoland/okaeri-poly/blob/master/bungee/src/main/java/eu/okaeri/poly/bukkit/provider/BungeeScriptHelper.java)        | BungeeGroovyHelper exists, but thanks to good interop all methods are contained in BungeeScriptHelper.                             |
| JavaScript | [BungeeScriptHelper](https://github.com/OkaeriPoland/okaeri-poly/blob/master/bungee/src/main/java/eu/okaeri/poly/bukkit/provider/BungeeScriptHelper.java)        | BungeeJavaScriptHelper exists, but thanks to good interop all methods are contained in BungeeScriptHelper.                         |
| Python     | [BungeePythonHelper](https://github.com/OkaeriPoland/okaeri-poly/blob/master/bungee/src/main/java/eu/okaeri/poly/bukkit/provider/python/BungeePythonHelper.java) | Uses python functions instead of standard methods accepting java consumers/functions due to poor interop and language limitations. |

Additional global variables:

- `plugin`: instance of `eu.okaeri.poly.bungee.PolyPlugin`
- `logger`: instance of `java.util.logging.Logger`
- `proxy`: instance of `net.md_5.bungee.api.ProxyServer`

### Details

Otherwise, standard implementation practices/limitations apply. This software is intended for advanced users that are not afraid to explore. See provider repos for more details:

- Groovy: [apache/groovy](https://github.com/apache/groovy), docs: [groovy-lang.org](https://groovy-lang.org/documentation.html)
- JavaScript: [oracle/graaljs](https://github.com/oracle/graaljs), docs: [github.com](https://github.com/oracle/graaljs/tree/master/docs/user)
- Python: [jython/jython](https://github.com/jython/jython), docs: [jython.readthedocs.io](https://jython.readthedocs.io/en/latest/)

## Backend comparison

| Backend                      | Performance (OpenJDK 11) | Performance (GraalVM 11) | IDE Support (IntelliJ) | Interoperability |
|------------------------------|--------------------------|--------------------------|------------------------|------------------|
| ⭐ Groovy (w. @CompileStatic) | ⭐ Excellent              | ⭐ Excellent              | ⭐ Excellent            | ⭐ Excellent      |
| ⭐ Groovy                     | 🔵 Good                   | 🔵 Good                   | 🟢 Very good            | ⭐ Excellent      |
| 🔵 JavaScript (Graaljs)       | 🟠 Fair                   | 🟢 Very good              | 🔴 Poor                 | 🟢 Very good      |
| 🟠 Python (Jython)            | 🔵 Good                   | 🔵 Good                   | 🔴 Poor                 | 🟠 Fair           |

### Performance

- ⭐ _Excellent_: almost the same or better as native, can be used even for most demanding tasks
- 🟢 _Very good_: applicable for most of the tasks (expect at least 1/4 of native performance)
- 🔵 _Good_: fast enough, but requires caution in possible hotspots
- 🟠 _Fair_: fast enough to be used for basic tasks
- 🔴 _Poor_: hardly usable in any case

### IDE support

- ⭐ _Excellent_: good typing support, advanced auto-completion, advanced static-analysis
- 🟢 _Very good_: good typing support, auto-completion, static-analysis
- 🔵 _Good_: good typing support, may include basic auto-completion and static-analysis
- 🟠 _Fair_: at least some typing support and usability for target language
- 🔴 _Poor_: no real integration or cannot map java types

### Interoperability

- ⭐ _Excellent_: integrating feels like Java or better, with almost no disturbances
- 🟢 _Very good_: just another day in the office with minor disturbances here and there
- 🔵 _Good_: it is good enough, but may require some patience with minor problems
- 🟠 _Fair_: it kinda works, but requires some tricks or pesky wrappers, major headache
- 🔴 _Poor_: almost no interop or really complicated
