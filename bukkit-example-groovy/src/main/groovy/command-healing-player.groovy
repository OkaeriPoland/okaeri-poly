@BaseScript BukkitGroovyScript script

import eu.okaeri.poly.api.bukkit.BukkitGroovyScript
import groovy.transform.BaseScript
import org.bukkit.attribute.Attribute
import org.bukkit.entity.Player

command("healme") { sender, args ->

    if (!(sender instanceof Player)) {
        sender.sendMessage("Sorry no mercy for console.")
        return
    }

    def player = sender as Player
    def maxHealth = player.getAttribute(Attribute.GENERIC_MAX_HEALTH).getValue()

    player.health = maxHealth
    player.sendMessage("You have been healed!")
}
