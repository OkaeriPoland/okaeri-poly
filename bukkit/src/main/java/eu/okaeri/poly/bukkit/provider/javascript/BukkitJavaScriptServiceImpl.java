package eu.okaeri.poly.bukkit.provider.javascript;

import eu.okaeri.injector.annotation.Inject;
import eu.okaeri.platform.core.annotation.Component;
import eu.okaeri.poly.api.script.ScriptHelper;
import eu.okaeri.poly.bukkit.provider.BukkitScriptServiceImpl;
import lombok.NonNull;
import org.bukkit.plugin.Plugin;
import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.HostAccess;
import org.graalvm.polyglot.Source;
import org.graalvm.polyglot.Value;

@Component
public class BukkitJavaScriptServiceImpl extends BukkitScriptServiceImpl {

    private static final boolean DEBUG = Boolean.getBoolean("poly.debug");
    public static final String LANGUAGE_ID = "js";

    @Inject
    public BukkitJavaScriptServiceImpl(Plugin plugin) {
        super(plugin);
    }

    @Override
    public ScriptHelper exec(@NonNull String name, @NonNull String source) {

        Context context = Context.newBuilder(LANGUAGE_ID)
                .option("engine.WarnInterpreterOnly", (DEBUG ? "true" : "false"))
                .allowHostClassLookup(className -> true)
                .allowHostAccess(HostAccess.ALL)
                .build();
        ScriptHelper scriptHelper = new BukkitJavaScriptHelperImpl(this.getPlugin(), context);

        Value bindings = context.getBindings(LANGUAGE_ID);
        this.getDefaultBindings(scriptHelper).forEach(bindings::putMember);

        try {
            context.eval(Source.newBuilder(LANGUAGE_ID, source, name).build());
        }
        catch (Throwable throwable) {
            throw new RuntimeException("Failed script load", throwable);
        }

        return scriptHelper;
    }
}
