package eu.okaeri.polyx.bukkit;

import eu.okaeri.platform.bukkit.OkaeriBukkitPlugin;
import eu.okaeri.platform.core.annotation.Bean;
import eu.okaeri.platform.core.annotation.Register;
import eu.okaeri.platform.core.plan.ExecutionPhase;
import eu.okaeri.platform.core.plan.Planned;
import eu.okaeri.polyx.bukkit.command.PolyCommand;
import eu.okaeri.polyx.core.config.PolyMessages;
import eu.okaeri.polyx.bukkit.provider.groovy.BukkitGroovyScriptService;
import eu.okaeri.polyx.core.PolyClassLoader;
import eu.okaeri.polyx.core.script.ScriptManager;
import lombok.SneakyThrows;
import org.bukkit.plugin.java.JavaPlugin;

import java.io.File;
import java.lang.reflect.Method;
import java.net.URL;

@Register(PolyMessages.class)
@Register(PolyCommand.class)
public class PolyXPlugin extends OkaeriBukkitPlugin {

    @SneakyThrows
    @Planned(ExecutionPhase.SETUP)
    public void setupClassLoader() {

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

    @Bean("scriptManager")
    public ScriptManager configureScriptManager() {
        return ScriptManager.create()
                .register("groovy", new BukkitGroovyScriptService(this));
    }
}
