package eu.okaeri.poly.bukkit.provider.groovy;

import eu.okaeri.poly.bukkit.provider.BukkitScriptHelperImpl;
import groovy.lang.Closure;
import lombok.NonNull;
import org.bukkit.plugin.Plugin;

public class BukkitGroovyHelperImpl extends BukkitScriptHelperImpl {

    public BukkitGroovyHelperImpl(Plugin plugin, String scriptName) {
        super(plugin, scriptName);
    }

    public void command(@NonNull String label, @NonNull Closure<?> closure) {
        this.command(label, (sender, args) -> closure.call(sender));
    }
}
