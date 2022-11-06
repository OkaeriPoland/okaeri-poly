package eu.okaeri.poly.bukkit.ext

import eu.okaeri.poly.api.Poly
import eu.okaeri.poly.bukkit.PolyPlugin
import org.bukkit.plugin.java.JavaPlugin

class PolyKotlinScriptExtension : JavaPlugin() {
    override fun onLoad() {
        val poly = this.server.pluginManager.getPlugin("Poly") as PolyPlugin
        poly.scriptManager.register("kts", BukkitKotlinScriptServiceImpl(poly, this))
    }
}
