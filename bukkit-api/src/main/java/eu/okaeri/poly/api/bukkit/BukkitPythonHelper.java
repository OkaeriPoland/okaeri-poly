package eu.okaeri.poly.api.bukkit;

import lombok.NonNull;
import org.bukkit.event.Event;
import org.bukkit.event.EventPriority;
import org.python.core.PyFunction;

public interface BukkitPythonHelper extends BukkitScriptHelper {

    <T extends Event> void listen(@NonNull Class<T> eventClass, @NonNull PyFunction function);

    <T extends Event> void listen(@NonNull Class<T> eventClass, @NonNull EventPriority priority, @NonNull PyFunction function);

    <T extends Event> void listen(@NonNull Class<T> eventClass, @NonNull EventPriority priority, boolean ignoreCancelled, @NonNull PyFunction function);

    void listenChannel(@NonNull String name, @NonNull PyFunction function);

    void command(@NonNull String label, @NonNull PyFunction function);

    void runEvery(long ticks, @NonNull PyFunction function);

    void runEveryAsync(long ticks, @NonNull PyFunction function);

    void runLater(long ticks, @NonNull PyFunction function);

    void runLaterAsync(long ticks, @NonNull PyFunction function);

    void runNowAsync(@NonNull PyFunction function);

    void runNow(@NonNull PyFunction function);
}
