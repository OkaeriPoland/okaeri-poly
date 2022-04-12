package eu.okaeri.poly.api.bukkit;

import groovy.lang.Closure;
import groovy.transform.stc.ClosureParams;
import groovy.transform.stc.FirstParam;
import groovy.transform.stc.FromString;
import lombok.NonNull;
import org.bukkit.event.Event;
import org.bukkit.event.EventPriority;

public interface BukkitGroovyHelper extends BukkitScriptHelper {

    <T extends Event> void listen(@NonNull Class<T> eventClass, @ClosureParams(FirstParam.FirstGenericType.class) @NonNull Closure<?> closure);

    <T extends Event> void listen(@NonNull Class<T> eventClass, @NonNull EventPriority priority, @ClosureParams(FirstParam.FirstGenericType.class) @NonNull Closure<?> closure);

    <T extends Event> void listen(@NonNull Class<T> eventClass, @NonNull EventPriority priority, boolean ignoreCancelled, @ClosureParams(FirstParam.FirstGenericType.class) @NonNull Closure<?> closure);

    void command(@NonNull String label, @ClosureParams(value = FromString.class, options = {
        "",
        "org.bukkit.command.CommandSender",
        "org.bukkit.command.CommandSender, java.util.ArrayList<java.lang.String>"
    }) @NonNull Closure<?> closure);
}
