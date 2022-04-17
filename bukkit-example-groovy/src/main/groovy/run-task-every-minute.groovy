@BaseScript BukkitGroovyScript script

import eu.okaeri.poly.api.bukkit.BukkitGroovyScript
import groovy.transform.BaseScript
import groovy.transform.Field

import java.time.Instant

@Field
long scriptGlobalCounter = 0


runEveryAsync(60 * 20) {
    server.broadcastMessage("It is ${Instant.now()}! ${scriptGlobalCounter++} from ${Thread.currentThread().getName()}")
}
