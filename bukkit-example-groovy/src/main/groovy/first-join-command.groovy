@BaseScript BukkitGroovyScript script

import eu.okaeri.poly.api.bukkit.BukkitGroovyScript
import groovy.transform.BaseScript
import org.bukkit.event.player.PlayerJoinEvent

listen(PlayerJoinEvent) { event ->

    if (event.player.hasPlayedBefore()) {
        return
    }

    server.dispatchCommand(server.consoleSender, "kit start ${event.player.name}")
}
