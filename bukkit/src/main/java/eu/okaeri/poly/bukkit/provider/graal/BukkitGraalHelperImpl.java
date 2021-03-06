package eu.okaeri.poly.bukkit.provider.graal;

import eu.okaeri.poly.bukkit.provider.BukkitScriptHelperImpl;
import org.bukkit.plugin.Plugin;
import org.graalvm.polyglot.Context;

public class BukkitGraalHelperImpl extends BukkitScriptHelperImpl {

    private final Context context;

    public BukkitGraalHelperImpl(Plugin plugin, String scriptName, Context context) {
        super(plugin, scriptName);
        this.context = context;
    }

    @Override
    public void unregister() {
        super.unregister();
        this.context.close();
    }
}
