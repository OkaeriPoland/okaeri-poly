package eu.okaeri.poly.bukkit;

import eu.okaeri.injector.annotation.Inject;
import eu.okaeri.platform.bukkit.OkaeriBukkitPlugin;
import eu.okaeri.platform.core.annotation.Bean;
import eu.okaeri.platform.core.annotation.Register;
import eu.okaeri.platform.core.plan.ExecutionPhase;
import eu.okaeri.platform.core.plan.Planned;
import eu.okaeri.poly.bukkit.command.PolyCommand;
import eu.okaeri.poly.bukkit.provider.groovy.BukkitGroovyService;
import eu.okaeri.poly.bukkit.provider.javascript.BukkitJavaScriptService;
import eu.okaeri.poly.bukkit.provider.python.BukkitPythonService;
import eu.okaeri.poly.core.PolyClassLoader;
import eu.okaeri.poly.core.config.PolyMessages;
import eu.okaeri.poly.core.script.ScriptManager;
import lombok.Getter;
import lombok.SneakyThrows;
import org.bukkit.plugin.java.JavaPlugin;

import java.io.File;
import java.lang.reflect.Method;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.logging.Level;

@Getter // api
@Register(PolyMessages.class)
@Register(PolyCommand.class)
public class PolyPlugin extends OkaeriBukkitPlugin {

    @Inject private ScriptManager scriptManager;

    @SneakyThrows
    @Planned(ExecutionPhase.STARTUP)
    private void loadAllScripts(File dataFolder, ScriptManager scriptManager, Path scriptFolder) {
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

        // no warning needed
        System.setProperty("polyglot.engine.WarnInterpreterOnly", "false");

        // get url
        Method getFile = JavaPlugin.class.getDeclaredMethod("getFile");
        getFile.setAccessible(true);
        File jar = (File) getFile.invoke(this);

        // replace context classloader
        URL[] urls = {jar.toURI().toURL()};
        PolyClassLoader loader = new PolyClassLoader(urls, this.getClassLoader());
        Thread.currentThread().setContextClassLoader(loader);
    }

    @SneakyThrows
    @Bean("scriptFolder")
    private Path configureScriptsPath(File dataFolder) {
        return Files.createDirectories(dataFolder.toPath().resolve("scripts"));
    }

    @Bean("scriptManager")
    private ScriptManager configureScriptManager() {
        return ScriptManager.create()
                .register("groovy", new BukkitGroovyService(this))
                .register("js", new BukkitJavaScriptService(this))
                .register("py", new BukkitPythonService(this));
    }
}
