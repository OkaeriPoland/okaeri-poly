package eu.okaeri.poly.bukkit.ext

import ScriptWithMavenDeps
import eu.okaeri.poly.api.Poly
import eu.okaeri.poly.api.script.ScriptHelper
import eu.okaeri.poly.core.script.ScriptServiceImpl
import org.bukkit.plugin.Plugin
import kotlin.script.experimental.host.toScriptSource
import kotlin.script.experimental.jvmhost.BasicJvmScriptingHost
import kotlin.script.experimental.jvmhost.createJvmCompilationConfigurationFromTemplate

class BukkitKotlinScriptServiceImpl(poly: Poly) : ScriptServiceImpl(poly) {
    override fun exec(name: String, source: String): ScriptHelper {
        val compilationConfiguration = createJvmCompilationConfigurationFromTemplate<ScriptWithMavenDeps>()
        val result = BasicJvmScriptingHost().eval(source.toScriptSource("sus.main.kts"), compilationConfiguration, null)
        result.reports.forEach { println(it) }
        return BukkitKotlinScriptScriptHelper(poly, "sus.main.kts")
    }

    override fun eval(source: String, context: MutableMap<String, Any>): Any {
        TODO("Not yet implemented")
    }
}
