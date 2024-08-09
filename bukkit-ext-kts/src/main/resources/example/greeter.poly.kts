import org.bukkit.Bukkit
import org.bukkit.event.player.PlayerJoinEvent

script.listen(PlayerJoinEvent::class.java) {
    Bukkit.broadcastMessage("Hello, ${it.player.name}!")

}
