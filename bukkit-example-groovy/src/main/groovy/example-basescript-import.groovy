@BaseScript BukkitGroovyScript script

import eu.okaeri.poly.api.bukkit.BukkitGroovyScript
import groovy.transform.BaseScript
import org.bukkit.event.player.PlayerJoinEvent

listen(PlayerJoinEvent) { event ->
    runNowAsync {
        event.player.sendMessage("Running from ${Thread.currentThread().name}")
    }
}
