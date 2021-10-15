package eu.okaeri.poly.bukkit;

import eu.okaeri.commands.Commands;
import eu.okaeri.commands.handler.completion.SimpleNamedCompletionHandler;
import eu.okaeri.injector.annotation.Inject;
import eu.okaeri.platform.bukkit.OkaeriBukkitPlugin;
import eu.okaeri.platform.core.annotation.Bean;
import eu.okaeri.platform.core.annotation.Register;
import eu.okaeri.platform.core.plan.ExecutionPhase;
import eu.okaeri.platform.core.plan.Planned;
import eu.okaeri.poly.api.Poly;
import eu.okaeri.poly.api.script.ScriptHelper;
import eu.okaeri.poly.api.script.ScriptManager;
import eu.okaeri.poly.bukkit.command.EvalCommand;
import eu.okaeri.poly.bukkit.command.PolyCommand;
import eu.okaeri.poly.bukkit.provider.graal.BukkitGraalServiceImpl;
import eu.okaeri.poly.bukkit.provider.groovy.BukkitGroovyServiceImpl;
import eu.okaeri.poly.bukkit.provider.python.BukkitPythonServiceImpl;
import eu.okaeri.poly.core.PolyClassLoader;
import eu.okaeri.poly.core.config.PolyConfig;
import eu.okaeri.poly.core.config.PolyMessages;
import eu.okaeri.poly.core.script.ScriptLoggerWrapper;
import eu.okaeri.poly.core.script.ScriptManagerImpl;
import lombok.Getter;
import lombok.SneakyThrows;
import org.bukkit.plugin.java.JavaPlugin;
import org.graalvm.polyglot.Engine;

import java.io.File;
import java.io.IOException;
import java.lang.reflect.Method;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Map;
import java.util.Set;
import java.util.logging.Level;
import java.util.stream.Stream;

@Getter // api
@Register(PolyConfig.class)
@Register(PolyMessages.class)
@Register(PolyCommand.class)
@Register(EvalCommand.class)
public class PolyPlugin extends OkaeriBukkitPlugin implements Poly {

    @Inject private ScriptManager scriptManager;

    @Override
    public Map<String, Object> getDefaultBindings(ScriptHelper scriptHelper) {
        return Map.of(
                "script", scriptHelper,
                "plugin", this,
                "logger", new ScriptLoggerWrapper(this.getLogger(), scriptHelper.getName()),
                "server", this.getServer()
        );
    }

    @SneakyThrows
    @Planned(ExecutionPhase.STARTUP)
    private void loadAllScripts(@Inject("dataFolder") File dataFolder, ScriptManager scriptManager, Path scriptFolder) {
        Files.list(scriptFolder).forEach(path -> {
            try {
                long start = System.currentTimeMillis();
                scriptManager.load(path);
                long took = System.currentTimeMillis() - start;
                this.log("- Loaded script: " + path.getFileName() + " [" + took + " ms]");
            }
            catch (Exception exception) {
                this.getLogger().log(Level.SEVERE, "Failed script load for " + path, exception);
            }
        });
    }

    @SneakyThrows
    @Planned(ExecutionPhase.SETUP)
    private void setupClassLoader() {

        // get url
        Method getFile = JavaPlugin.class.getDeclaredMethod("getFile");
        getFile.setAccessible(true);
        File jar = (File) getFile.invoke(this);

        // replace context classloader
        URL[] urls = {jar.toURI().toURL()};
        PolyClassLoader loader = new PolyClassLoader(urls, this.getClassLoader());
        Thread.currentThread().setContextClassLoader(loader);
    }

    @Planned(ExecutionPhase.PRE_STARTUP)
    private void setupCustomCompletion(Commands commands, @Inject("scriptFolder") Path scriptFolder) {
        commands.registerCompletion("loadedscripts", new SimpleNamedCompletionHandler(() -> this.scriptManager.listLoaded().stream()));
        commands.registerCompletion("unloadedscripts", new SimpleNamedCompletionHandler(() -> {
            try {
                Set<String> loaded = this.scriptManager.listLoaded();
                return Files.list(scriptFolder)
                        .map(Path::getFileName)
                        .map(Path::toString)
                        .filter(name -> !loaded.contains(name));
            } catch (IOException ignored) {
                return Stream.of();
            }
        }));
    }

    @SneakyThrows
    @Bean("scriptFolder")
    private Path configureScriptsPath(@Inject("dataFolder") File dataFolder) {
        return Files.createDirectories(dataFolder.toPath().resolve("scripts"));
    }

    @Bean("scriptManager")
    private ScriptManager configureScriptManager() {

        // basic a.k.a. default languages
        ScriptManager scriptManager = ScriptManagerImpl.create()
                .register("groovy", new BukkitGroovyServiceImpl(this))
                .register("js", new BukkitGraalServiceImpl(this, "js"))
                .register("py", new BukkitPythonServiceImpl(this));

        // additional supported by graal
        Engine.create().getLanguages().forEach((extension, lang) -> {

            // already enabled
            if (scriptManager.getServices().containsKey(extension)) {
                return;
            }

            // add support
            scriptManager.register(extension, new BukkitGraalServiceImpl(this, extension));
            this.log("Added language: " + lang);
        });

        return scriptManager;
    }
}
