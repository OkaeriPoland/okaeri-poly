package eu.okaeri.poly.bukkit.provider.graal;

import eu.okaeri.poly.bukkit.provider.BukkitScriptHelperImpl;
import lombok.NonNull;
import org.bukkit.plugin.Plugin;
import org.graalvm.polyglot.Context;

public class BukkitGraalHelperImpl extends BukkitScriptHelperImpl {

    private final Context context;

    public BukkitGraalHelperImpl(@NonNull Plugin plugin, @NonNull String scriptName, @NonNull Context context) {
        super(plugin, scriptName);
        this.context = context;
    }

    @Override
    public void unregister() {
        super.unregister();
        this.context.close();
    }
}
