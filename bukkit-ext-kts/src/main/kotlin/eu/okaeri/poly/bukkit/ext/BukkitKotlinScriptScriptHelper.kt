package eu.okaeri.poly.bukkit.ext;

import eu.okaeri.poly.api.Poly
import eu.okaeri.poly.api.script.ScriptHelper

class BukkitKotlinScriptScriptHelper(poly: Poly, private val name: String) : ScriptHelper {
    override fun getName(): String = this.name

    override fun callOnLoad() {
        TODO("Not yet implemented")
    }

    override fun callOnUnload() {
        TODO("Not yet implemented")
    }

    override fun unregister() {
        TODO("Not yet implemented")
    }
}
