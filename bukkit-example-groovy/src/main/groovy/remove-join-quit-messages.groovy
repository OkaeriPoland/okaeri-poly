@BaseScript BukkitGroovyScript script

import eu.okaeri.poly.api.bukkit.BukkitGroovyScript
import groovy.transform.BaseScript
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.event.player.PlayerQuitEvent

listen(PlayerJoinEvent) { event ->
    event.joinMessage = null
}

listen(PlayerQuitEvent) { event ->
    event.quitMessage = null
}
