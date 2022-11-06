package eu.okaeri.poly.bukkit.ext

import ScriptWithMavenDeps
import eu.okaeri.poly.api.Poly
import eu.okaeri.poly.api.script.ScriptHelper
import eu.okaeri.poly.core.script.ScriptServiceImpl
import kotlin.script.experimental.api.ScriptEvaluationConfiguration
import kotlin.script.experimental.api.providedProperties
import kotlin.script.experimental.api.scriptExecutionWrapper
import kotlin.script.experimental.host.toScriptSource
import kotlin.script.experimental.jvmhost.BasicJvmScriptingHost
import kotlin.script.experimental.jvmhost.createJvmCompilationConfigurationFromTemplate

class BukkitKotlinScriptServiceImpl(poly: Poly, private val ext: PolyKotlinScriptExtension) : ScriptServiceImpl(poly) {
    override fun exec(name: String, source: String): ScriptHelper {
        val helper = BukkitKotlinScriptScriptHelper(ext, name)
        val compilationConfiguration = createJvmCompilationConfigurationFromTemplate<ScriptWithMavenDeps>()
        val result = BasicJvmScriptingHost().eval(source.toScriptSource(name), compilationConfiguration, ScriptEvaluationConfiguration{
            providedProperties.append(getDefaultBindings(helper))
        })
        result.reports.forEach { println(it) }
        return helper
    }

    override fun eval(source: String, context: MutableMap<String, Any>): Any {
        TODO("Not yet implemented")
    }
}
