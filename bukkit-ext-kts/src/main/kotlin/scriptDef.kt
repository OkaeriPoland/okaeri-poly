import eu.okaeri.poly.bukkit.PolyPlugin
import eu.okaeri.poly.bukkit.ext.BukkitKotlinScriptScriptHelper
import eu.okaeri.poly.core.script.ScriptLoggerWrapper
import kotlinx.coroutines.runBlocking
import org.bukkit.Server
import org.jetbrains.kotlin.mainKts.*
import kotlin.script.experimental.annotations.KotlinScript
import kotlin.script.experimental.api.*
import kotlin.script.experimental.dependencies.*
import kotlin.script.experimental.dependencies.maven.MavenDependenciesResolver
import kotlin.script.experimental.jvm.*
import kotlin.script.experimental.jvmhost.jsr223.importAllBindings
import kotlin.script.experimental.jvmhost.jsr223.jsr223

@KotlinScript(
    fileExtension = "poly.kts",
    compilationConfiguration = ScriptWithMavenDepsConfiguration::class
)
abstract class ScriptWithMavenDeps(val bindings: Map<String, Any?>) {
    @JvmField
    val server = bindings["server"] as Server
    @JvmField
    var script = bindings["script"] as BukkitKotlinScriptScriptHelper
    @JvmField
    var logger = bindings["logger"] as ScriptLoggerWrapper
    @JvmField
    var plugin = bindings["plugin"] as PolyPlugin
}

object ScriptWithMavenDepsConfiguration : ScriptCompilationConfiguration(
    {
        defaultImports(
            DependsOn::class,
            Repository::class,
            Import::class,
            CompilerOptions::class,
            ScriptFileLocation::class
        )
        jvm {
            dependenciesFromCurrentContext(wholeClasspath = true)
        }
        refineConfiguration {
            onAnnotations(DependsOn::class, Repository::class, handler = ::configureMavenDepsOnAnnotations)
        }
        ide {
            acceptedLocations(ScriptAcceptedLocation.Everywhere)
        }
        jsr223 {
            importAllBindings(true)
        }
    }
)

private val resolver = CompoundDependenciesResolver(FileSystemDependenciesResolver(), MavenDependenciesResolver())

fun configureMavenDepsOnAnnotations(context: ScriptConfigurationRefinementContext): ResultWithDiagnostics<ScriptCompilationConfiguration> {
    val annotations = context.collectedData?.get(ScriptCollectedData.collectedAnnotations)?.takeIf { it.isNotEmpty() }
        ?: return context.compilationConfiguration.asSuccess() // If no action is performed, the original configuration should be returned
    return runBlocking {
        resolver.resolveFromScriptSourceAnnotations(annotations)
    }.onSuccess {
        context.compilationConfiguration.with {
            dependencies.append(JvmDependency(it))
        }.asSuccess()
    }
}
