# Okaeri Poly

![License](https://img.shields.io/github/license/OkaeriPoland/okaeri-poly)
![Total lines](https://img.shields.io/tokei/lines/github/OkaeriPoland/okaeri-poly)
![Repo size](https://img.shields.io/github/repo-size/OkaeriPoland/okaeri-poly)
![Contributors](https://img.shields.io/github/contributors/OkaeriPoland/okaeri-poly)
[![Discord](https://img.shields.io/discord/589089838200913930)](https://discord.gg/hASN5eX)

Enterprise grade Minecraft scripting adapter for Groovy (formerly also JavaScript, and Python). Created with [okaeri-platform](https://github.com/OkaeriPoland/okaeri-platform).

## Requirements

Java 17 or newer. It is recommended not to run other plugins using Groovy, with the exception to plugins using Poly as a script provider and a dependency.

## Supported platforms

- **[Bukkit](https://github.com/OkaeriPoland/okaeri-poly/tree/master/bukkit)**: Spigot/Paper minecraft server plugin (**disclaimer**: requires version `1.13` or newer)
- ~~**[Velocity](https://github.com/OkaeriPoland/okaeri-poly/tree/master/velocity)**: Velocity minecraft proxy plugin~~ (incoming)

## Installation

Grab latest [release](https://github.com/OkaeriPoland/okaeri-poly/releases) jar for your platform and install it like any other plugin, e.g. put in `plugins/` for Spigot/Paper and Velocity
servers.

Put your script files inside `plugins/Poly/scripts/` directory. File extension will determine backend to be used (`groovy`, `js`, `py`).

## Development

Command support, event listeners, and scheduler can be accessed through `script` object/variable helper. This ensures script unloading unregisters commands, listeners, and cancels pending tasks.

```groovy
@BaseScript BukkitGroovyScript script

import eu.okaeri.poly.api.bukkit.BukkitGroovyScript
import groovy.transform.BaseScript
import org.bukkit.event.player.PlayerJoinEvent

// groovy example (with @BaseScript)
listen(PlayerJoinEvent) { event ->
    logger.info("${event.player.name} joined the game!")
}
```

```groovy
import org.bukkit.event.player.PlayerJoinEvent

// groovy example (dynamic properties)
script.listen(PlayerJoinEvent) { event ->
    logger.info("${event.player.name} joined the game!")
}
```

### Bukkit

| Backend    | Helper                                                                                                                                                   | Note                                                                                                                               |
|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| Groovy     | [BukkitGroovyHelper](https://github.com/OkaeriPoland/okaeri-poly/blob/master/bukkit-api/src/main/java/eu/okaeri/poly/api/bukkit/BukkitGroovyHelper.java) | Exposes additional closure based methods for even better typing support. Use is optional and BukkitScriptHelper should work too.   |

Additional global variables:

- `plugin`: instance of `eu.okaeri.poly.bukkit.PolyPlugin`
- `logger`: instance of `java.util.logging.Logger`
- `server`: instance of `org.bukkit.Server`

Demo project: [bukkit-example-groovy](https://github.com/OkaeriPoland/okaeri-poly/tree/master/bukkit-example-groovy), [bukkit-example-javascript](https://github.com/OkaeriPoland/okaeri-poly/tree/master/bukkit-example-javascript)

### Velocity

| Backend    | Helper                                                                                                                                                           | Note                                                                                                                               |
|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| Groovy     | [VelocityGroovyHelper](https://github.com/OkaeriPoland/okaeri-poly/blob/master/velocity-api/src/main/java/eu/okaeri/poly/api/velocity/VelocityGroovyHelper.java) | Exposes additional closure based methods for even better typing support. Use is optional and VelocityScriptHelper should work too. |

Additional global variables:

- `plugin`: instance of `eu.okaeri.poly.velocity.PolyPlugin`
- `logger`: instance of `org.slf4j.Logger`
- `proxy`: instance of `com.velocitypowered.api.proxy.ProxyServer`

Demo project: [velocity-example](https://github.com/OkaeriPoland/okaeri-poly/tree/master/velocity-example)

### Dependency

### Maven

Add repository to the `repositories` section:

```xml
<repository>
    <id>okaeri-repo</id>
    <url>https://storehouse.okaeri.eu/repository/maven-public/</url>
</repository>
```

Add dependency to the `dependencies` section:

```xml
<dependency>
    <groupId>eu.okaeri</groupId>
    <artifactId>okaeri-poly-[platform]-api</artifactId>
    <version>1.4.0</version>
    <scope>provided</scope>
</dependency>
```

### Gradle

Add repository to the `repositories` section:

```groovy
maven { url "https://storehouse.okaeri.eu/repository/maven-public/" }
```

Add dependency to the `maven` section:

```groovy
compileOnly 'eu.okaeri:okaeri-poly-[platform]-api:1.4.0'
```

### IDE

#### IntelliJ (Groovy)

```console
my-poly-project/
    src/
        main/
            groovy/
                script1.groovy
                script2.groovy
    pom.xml
```

- **Using @BaseScript (recommended):**
  - Create new (maven/gradle) project or use existing project of your choice.
  - Add poly-\[platform]-api as a provided dependency.
  - Add platform provided dependencies (e.g. spigot-api).
  - Use BaseScript annotation in your scripts:
  ```groovy
  @BaseScript BukkitGroovyScript script
  
  import eu.okaeri.poly.api.bukkit.BukkitGroovyScript
  import groovy.transform.BaseScript
  ```
- **Using dynamic properties:**
  - Create new (maven/gradle) project or use existing project of your choice.
  - Add poly-\[platform]-api as a provided dependency.
  - Add platform provided dependencies (e.g. spigot-api).
  - Open any `.groovy` script with Groovy support enabled.
  - Point your cursor on the `script` variable.
  - Press `Alt + Enter` and choose `Add dynamic property 'script'`.
  - Set property type to matching helper type (see sections above).
  - Optionally add additional variables that are specified.

### Details

Otherwise, standard implementation practices/limitations apply. This software is intended for advanced users that are not afraid to explore. See provider repos for more details:

- Groovy: [apache/groovy](https://github.com/apache/groovy), docs: [groovy-lang.org](https://groovy-lang.org/documentation.html)

## Backend comparison

| Backend                      | Performance (OpenJDK 11) | Performance (GraalVM 11) | IDE Support (IntelliJ) | Interoperability |
|------------------------------|--------------------------|--------------------------|------------------------|------------------|
| ⭐ Groovy (w. @CompileStatic) | ⭐ Excellent              | ⭐ Excellent              | ⭐ Excellent            | ⭐ Excellent      |
| ⭐ Groovy                     | 🔵 Good                   | 🔵 Good                   | 🟢 Very good            | ⭐ Excellent      |

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
