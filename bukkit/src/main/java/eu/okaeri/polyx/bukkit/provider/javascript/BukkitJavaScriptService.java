package eu.okaeri.polyx.bukkit.provider.javascript;

import eu.okaeri.injector.annotation.Inject;
import eu.okaeri.platform.core.annotation.Component;
import eu.okaeri.polyx.bukkit.provider.BukkitScriptHelper;
import eu.okaeri.polyx.bukkit.provider.BukkitScriptService;
import lombok.Cleanup;
import lombok.NonNull;
import org.bukkit.plugin.Plugin;
import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.HostAccess;
import org.graalvm.polyglot.Source;
import org.graalvm.polyglot.Value;

@Component
public class BukkitJavaScriptService extends BukkitScriptService {

    public static final String LANGUAGE_ID = "js";

    @Inject
    public BukkitJavaScriptService(Plugin plugin) {
        super(plugin);
    }

    @Override
    protected BukkitScriptHelper eval(@NonNull String name, @NonNull String source) {

        BukkitJavaScriptHelper scriptHelper = new BukkitJavaScriptHelper(this.getPlugin());
        @Cleanup Context context = Context.newBuilder(LANGUAGE_ID)
                .allowHostAccess(HostAccess.ALL)
                .build();

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
