@BaseScript BukkitGroovyScript script

import eu.okaeri.poly.api.bukkit.BukkitGroovyScript
import groovy.transform.BaseScript
import org.bukkit.event.EventPriority
import org.bukkit.event.player.AsyncPlayerChatEvent

listen(AsyncPlayerChatEvent, EventPriority.LOWEST) { event ->
    event.format = "<3 ${event.format}"
}
