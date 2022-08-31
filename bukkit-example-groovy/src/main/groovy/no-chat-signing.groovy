@BaseScript BukkitGroovyScript script

import eu.okaeri.poly.api.bukkit.BukkitGroovyScript
import groovy.transform.BaseScript
import org.bukkit.event.EventPriority
import org.bukkit.event.player.AsyncPlayerChatEvent

/**
 * Resends chat messages as system messages, thus removing
 * "this message is not secure" warnings or any message
 * reporting capabilities.
 */
listen(AsyncPlayerChatEvent, EventPriority.MONITOR, true) {
    it.cancelled = true
    def result = String.format(it.format, it.player.displayName, it.message)
    it.recipients.each { it.sendMessage(result) }
}
