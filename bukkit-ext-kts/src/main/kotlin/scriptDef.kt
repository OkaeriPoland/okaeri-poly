import kotlinx.coroutines.runBlocking
import org.jetbrains.kotlin.mainKts.*
import kotlin.script.experimental.annotations.KotlinScript
import kotlin.script.experimental.api.*
import kotlin.script.experimental.dependencies.*
import kotlin.script.experimental.dependencies.maven.MavenDependenciesResolver
import kotlin.script.experimental.jvm.*
import kotlin.script.experimental.jvmhost.jsr223.configureProvidedPropertiesFromJsr223Context
import kotlin.script.experimental.jvmhost.jsr223.importAllBindings
import kotlin.script.experimental.jvmhost.jsr223.jsr223

@KotlinScript(
    // File extension for the script type
    fileExtension = "kts",
    // Compilation configuration for the script type
    compilationConfiguration = CustomMainKtsScriptDefinition::class
)
abstract class ScriptWithMavenDeps()

object ScriptWithMavenDepsConfiguration: ScriptCompilationConfiguration(
    {
        defaultImports(DependsOn::class, Repository::class, Import::class, CompilerOptions::class, ScriptFileLocation::class)
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
object CustomMainKtsScriptDefinition : ScriptCompilationConfiguration(
    {
        defaultImports(DependsOn::class, Repository::class, Import::class, CompilerOptions::class, ScriptFileLocation::class)
        jvm {
//            dependenciesFromClassloader(classLoader = PolyPlugin::class.java.classLoader, wholeClasspath = true)
            dependenciesFromCurrentContext(wholeClasspath = true)
        }
        refineConfiguration {
            onAnnotations(DependsOn::class, Repository::class, Import::class, CompilerOptions::class, handler = MainKtsConfigurator())
            onAnnotations(ScriptFileLocation::class, handler = ScriptFileLocationCustomConfigurator())
            beforeCompiling(::configureScriptFileLocationPathVariablesForCompilation)
            beforeCompiling(::configureProvidedPropertiesFromJsr223Context)
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
        // resolving maven artifacts using annotation arguments
        resolver.resolveFromScriptSourceAnnotations(annotations)
    }.onSuccess {
        context.compilationConfiguration.with {
            // updating the original configurations with the newly resolved artifacts as compilation dependencies
            dependencies.append(JvmDependency(it))
        }.asSuccess()
    }
}
