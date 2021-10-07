import groovy.transform.Field
import org.bukkit.Material
import org.bukkit.attribute.Attribute
import org.bukkit.entity.Player
import org.bukkit.event.EventPriority
import org.bukkit.event.block.BlockBreakEvent
import org.bukkit.event.player.AsyncPlayerChatEvent
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.inventory.ItemStack

import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import java.time.Instant

@Field
long scriptGlobalCounter = 0

@Field
HttpClient httpClient = HttpClient.newHttpClient()


script.listen(PlayerJoinEvent) { event ->
    event.joinMessage = null
}

script.listen(PlayerQuitEvent) { event ->
    event.quitMessage = null
}

script.listen(AsyncPlayerChatEvent, EventPriority.LOWEST) { event ->
    event.format = "<3 ${event.format}"
}

script.listen(BlockBreakEvent, EventPriority.MONITOR, true) { event ->

    if (event.block.type != Material.STONE) {
        return
    }

    event.player.inventory.addItem(new ItemStack(Material.DIAMOND, 1))
    event.player.sendMessage("You're so lucky you received 1 diamond!")
}

script.command("healme") { sender, args ->

    if (!(sender instanceof Player)) {
        sender.sendMessage("Sorry no mercy for console.");
        return
    }

    def player = sender as Player
    def maxHealth = player.getAttribute(Attribute.GENERIC_MAX_HEALTH).getValue()

    player.health = maxHealth
    player.sendMessage("You have been healed!")
}

script.command("checkserverip") { sender, args ->

    if (!sender.hasPermission("demo.checkserverip")) {
        sender.sendMessage("No permission demo.checkserverip!")
        return
    }

    script.runNowAsync {

        def request = HttpRequest.newBuilder().GET()
                .uri(URI.create("https://checkip.amazonaws.com/"))
                .build()

        def response = httpClient.send(request, HttpResponse.BodyHandlers.ofString())
        sender.sendMessage("Server IP: ${response.body()}")
    }
}

script.runEveryAsync(60 * 20) {
    server.broadcastMessage("It is ${Instant.now()}! ${scriptGlobalCounter++} from ${Thread.currentThread().getName()}")
}
