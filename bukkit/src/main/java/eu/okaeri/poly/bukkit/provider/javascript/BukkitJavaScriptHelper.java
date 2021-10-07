package eu.okaeri.poly.bukkit.provider.javascript;

import eu.okaeri.poly.bukkit.provider.BukkitScriptHelper;
import org.bukkit.plugin.Plugin;
import org.graalvm.polyglot.Context;

public class BukkitJavaScriptHelper extends BukkitScriptHelper {

    private final Context context;

    public BukkitJavaScriptHelper(Plugin plugin, Context context) {
        super(plugin);
        this.context = context;
    }

    @Override
    public void unregister() {
        super.unregister();
        this.context.close();
    }
}
