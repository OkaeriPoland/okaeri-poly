package eu.okaeri.poly.bukkit;

import eu.okaeri.commands.Commands;
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
import eu.okaeri.poly.bukkit.provider.groovy.BukkitGroovyServiceImpl;
import eu.okaeri.poly.core.PolyClassLoader;
import eu.okaeri.poly.core.config.PolyConfig;
import eu.okaeri.poly.core.config.PolyMessages;
import eu.okaeri.poly.core.script.ScriptLoggerWrapper;
import eu.okaeri.poly.core.script.ScriptManagerImpl;
import lombok.Cleanup;
import lombok.Getter;
import lombok.NonNull;
import lombok.SneakyThrows;

import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;
import java.util.function.Predicate;
import java.util.logging.Level;
import java.util.regex.Pattern;
import java.util.stream.Stream;

@Getter // api
@Register(PolyConfig.class)
@Register(PolyMessages.class)
@Register(PolyCommand.class)
@Register(EvalCommand.class)
public class PolyPlugin extends OkaeriBukkitPlugin implements Poly {

    private ScriptManager scriptManager;

    @Override
    // initialize ScriptManager early to allow external
    // registration of services before scripts are loaded
    public void onLoad() {
        this.scriptManager = ScriptManagerImpl.create().register("groovy", new BukkitGroovyServiceImpl(this));
    }

    @Override
    public Map<String, Object> getDefaultBindings(@NonNull ScriptHelper scriptHelper) {
        return new LinkedHashMap<>(Map.of(
            "script", scriptHelper,
            "plugin", this,
            "logger", new ScriptLoggerWrapper(this.getLogger(), scriptHelper.getName()),
            "server", this.getServer()
        ));
    }

    @SneakyThrows
    @Planned(ExecutionPhase.STARTUP)
    private void loadAllScripts(@Inject("dataFolder") File dataFolder, ScriptManager scriptManager, Path scriptFolder) {
        @Cleanup Stream<Path> scriptStream = this.getScriptPaths(scriptFolder);
        scriptStream.forEach(path -> {
            try {
                long start = System.currentTimeMillis();
                String userFriendlyName = scriptFolder.relativize(path).toString();
                scriptManager.load(userFriendlyName, Files.readString(path));
                long took = System.currentTimeMillis() - start;
                this.log("- Loaded script: " + userFriendlyName + " [" + took + " ms]");
            } catch (Exception exception) {
                this.getLogger().log(Level.SEVERE, "Failed script load for " + path, exception);
            }
        });
    }

    @SneakyThrows
    @Planned(ExecutionPhase.SETUP)
    private void setupClassLoader() {
        URL[] urls = {this.getFile().toURI().toURL()};
        PolyClassLoader loader = new PolyClassLoader(urls, this.getClassLoader());
        Thread.currentThread().setContextClassLoader(loader);
    }

    @Planned(ExecutionPhase.PRE_STARTUP)
    private void setupCustomCompletion(Commands commands, @Inject("scriptFolder") Path scriptFolder) {
        commands.registerCompletion("loadedscripts", this.scriptManager.listLoaded()::stream);
        commands.registerCompletion("unloadedscripts", () -> {
            try {
                Set<String> loaded = this.scriptManager.listLoaded();
                return this.getScriptPaths(scriptFolder)
                    .map(scriptFolder::relativize)
                    .map(Path::toString)
                    .filter(Predicate.not(loaded::contains));
            } catch (IOException ignored) {
                return Stream.of();
            }
        });
    }

    @SneakyThrows
    @Bean("scriptFolder")
    private Path configureScriptsPath(@Inject("dataFolder") File dataFolder) {
        return Files.createDirectories(dataFolder.toPath().resolve("scripts"));
    }

    @Bean("scriptManager")
    private ScriptManager configureScriptManager() {
        return this.scriptManager;
    }

    @SuppressWarnings("resource")
    private Stream<Path> getScriptPaths(@NonNull Path scriptFolder) throws IOException {
        Set<String> registeredExtensions = this.scriptManager.getServices().keySet();
        return Files.walk(scriptFolder)
            .filter(Predicate.not(Files::isDirectory))
            .map(Path::toString)
            .filter(name -> {
                String[] split = name.split(Pattern.quote(File.separator));
                for (int i = 0; i < split.length; i++) {
                    String fileName = split[i];
                    // ignore paths which have hidden folders/files (prefixed with dot)
                    if (fileName.startsWith(".")) {
                        return false;
                    }

                    // ignore path elements preceding the last element
                    if (i != (split.length - 1)) {
                        continue;
                    }

                    // ignore paths where file name doesn't end with one of registered extensions
                    String extension = fileName.substring(fileName.lastIndexOf(".") + 1);
                    if (!registeredExtensions.contains(extension)) {
                        return false;
                    }
                }
                return true;
            })
            .map(Path::of);
    }
}
