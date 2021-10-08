import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.event.player.PlayerQuitEvent

script.listen(PlayerJoinEvent) { event ->
    event.joinMessage = null
}

script.listen(PlayerQuitEvent) { event ->
    event.quitMessage = null
}
