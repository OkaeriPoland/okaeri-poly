package eu.okaeri.poly.bukkit.provider.groovy;

import eu.okaeri.poly.api.bukkit.BukkitGroovyHelper;
import eu.okaeri.poly.bukkit.provider.BukkitScriptHelperImpl;
import groovy.lang.Closure;
import lombok.NonNull;
import org.bukkit.event.Event;
import org.bukkit.event.EventPriority;
import org.bukkit.plugin.Plugin;

public class BukkitGroovyHelperImpl extends BukkitScriptHelperImpl implements BukkitGroovyHelper {

    public BukkitGroovyHelperImpl(Plugin plugin, String scriptName) {
        super(plugin, scriptName);
    }

    @Override
    public <T extends Event> void listen(@NonNull Class<T> eventClass, @NonNull Closure<?> closure) {
        this.listen(eventClass, closure::call);
    }

    @Override
    public <T extends Event> void listen(@NonNull Class<T> eventClass, @NonNull EventPriority priority, @NonNull Closure<?> closure) {
        this.listen(eventClass, priority, closure::call);
    }

    @Override
    public <T extends Event> void listen(@NonNull Class<T> eventClass, @NonNull EventPriority priority, boolean ignoreCancelled, @NonNull Closure<?> closure) {
        this.listen(eventClass, priority, ignoreCancelled, closure::call);
    }

    @Override
    public void command(@NonNull String label, @NonNull Closure<?> closure) {
        switch (closure.getMaximumNumberOfParameters()) {
            case 0:
                this.command(label, (sender, args) -> closure.call());
                break;
            case 1:
                this.command(label, (sender, args) -> closure.call(sender));
                break;
            case 2:
                this.command(label, closure::call);
                break;
            default:
                throw new RuntimeException("Too many closure params for command, found " + closure.getMaximumNumberOfParameters() + " in " + this.getName());
        }
    }
}
