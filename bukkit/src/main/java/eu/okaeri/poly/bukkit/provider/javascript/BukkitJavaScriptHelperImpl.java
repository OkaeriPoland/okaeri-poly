package eu.okaeri.poly.bukkit.provider.javascript;

import eu.okaeri.poly.bukkit.provider.BukkitScriptHelperImpl;
import org.bukkit.plugin.Plugin;
import org.graalvm.polyglot.Context;

public class BukkitJavaScriptHelperImpl extends BukkitScriptHelperImpl {

    private final Context context;

    public BukkitJavaScriptHelperImpl(Plugin plugin, Context context) {
        super(plugin);
        this.context = context;
    }

    @Override
    public void unregister() {
        super.unregister();
        this.context.close();
    }
}
