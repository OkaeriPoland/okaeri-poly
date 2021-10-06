package eu.okaeri.polyx.bukkit;

import eu.okaeri.platform.bukkit.OkaeriBukkitPlugin;
import eu.okaeri.platform.core.plan.ExecutionPhase;
import eu.okaeri.platform.core.plan.Planned;
import eu.okaeri.polyx.core.PolyClassLoader;
import lombok.Cleanup;
import lombok.SneakyThrows;
import org.bukkit.plugin.java.JavaPlugin;
import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.Source;
import org.graalvm.polyglot.Value;

import java.io.File;
import java.lang.reflect.Method;
import java.net.URL;
import java.net.URLClassLoader;
import java.util.List;

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

    @SneakyThrows
    @Planned(ExecutionPhase.POST_STARTUP)
    public void test() {

        @Cleanup Context context = Context.newBuilder("js").build();

        context.eval(Source.newBuilder("js", "const a = 1 + 1", "src.js").build());
        Value result = context.getBindings("js").getMember("a");

        Integer integer = result.as(Integer.class);
        System.out.println("it works! " + integer);
    }
}
