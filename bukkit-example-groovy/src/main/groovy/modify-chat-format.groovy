import org.bukkit.event.EventPriority
import org.bukkit.event.player.AsyncPlayerChatEvent

script.listen(AsyncPlayerChatEvent, EventPriority.LOWEST) { event ->
    event.format = "<3 ${event.format}"
}
