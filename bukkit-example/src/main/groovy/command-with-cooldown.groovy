import groovy.transform.CompileStatic
import groovy.transform.Field
import org.bukkit.ChatColor
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack

import java.time.Duration
import java.time.Instant

// config
@Field
Duration cooldownDuration = Duration.ofSeconds(60)

@Field
Closure cooldownMessage = { "${ChatColor.RED}You need to wait ${it.seconds}s to use this command again!" }

@Field
String cooldownBypass = "cake.nocooldown";

// fields
@Field
Map<UUID, Instant> cakeUses = [:]

// helper methods
@CompileStatic
boolean isInCooldown(Duration remainingTime, Player player) {
    return !player.hasPermission(cooldownBypass) && remainingTime > Duration.ZERO
}

@CompileStatic
Duration getRemainingTime(Player player) {
    def lastUse = cakeUses.getOrDefault(player.uniqueId, Instant.MIN)
    return cooldownDuration - Duration.between(lastUse, Instant.now())
}

// command itself
script.command("cake") { sender ->

    if (!(sender instanceof Player)) {
        sender.sendMessage("No cake for console!")
        return
    }

    def player = sender as Player
    def remainingTime = getRemainingTime(player)

    if (isInCooldown(remainingTime, player)) {
        player.sendMessage(cooldownMessage(remainingTime))
        return
    }

    player.inventory.addItem(new ItemStack(Material.CAKE, 1))
    cakeUses.put(player.uniqueId, Instant.now())
}
