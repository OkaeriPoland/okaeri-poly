package eu.okaeri.poly.bukkit.ext

import ScriptWithMavenDeps
import eu.okaeri.poly.api.Poly
import eu.okaeri.poly.api.script.ScriptHelper
import eu.okaeri.poly.core.script.ScriptServiceImpl
import kotlin.script.experimental.api.*
import kotlin.script.experimental.host.toScriptSource
import kotlin.script.experimental.jvmhost.BasicJvmScriptingHost
import kotlin.script.experimental.jvmhost.createJvmCompilationConfigurationFromTemplate

class BukkitKotlinScriptServiceImpl(poly: Poly, private val ext: PolyKotlinScriptExtension) : ScriptServiceImpl(poly) {
    override fun exec(name: String, source: String): ScriptHelper {
        val helper = BukkitKotlinScriptScriptHelper(ext, name)
        val compilationConfiguration = createJvmCompilationConfigurationFromTemplate<ScriptWithMavenDeps>() {
            providedProperties(getDefaultBindings(helper).map { it.key to KotlinType(it.value.javaClass.kotlin) }.toMap())
        }
        val result = BasicJvmScriptingHost().eval(source.toScriptSource(name), compilationConfiguration, ScriptEvaluationConfiguration {
            providedProperties(getDefaultBindings(helper))
            constructorArgs(getDefaultBindings(helper))
        })
        result.reports.forEach { println(it) }
        return helper
    }

    override fun eval(source: String, context: MutableMap<String, Any>): Any {
        TODO("Not yet implemented")
    }
}
