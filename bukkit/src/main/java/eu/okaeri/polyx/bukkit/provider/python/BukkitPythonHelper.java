package eu.okaeri.polyx.bukkit.provider.python;

import eu.okaeri.polyx.bukkit.provider.BukkitScriptHelper;
import lombok.NonNull;
import org.bukkit.event.Event;
import org.bukkit.event.EventPriority;
import org.bukkit.plugin.Plugin;
import org.python.core.Py;
import org.python.core.PyFunction;

public class BukkitPythonHelper extends BukkitScriptHelper {

    public BukkitPythonHelper(Plugin plugin) {
        super(plugin);
    }

    public <T extends Event> void listen(@NonNull Class<T> eventClass, @NonNull PyFunction function) {
        this.listen(eventClass, (event) -> function.__call__(Py.java2py(event)));
    }

    public <T extends Event> void listen(@NonNull Class<T> eventClass, @NonNull EventPriority priority, @NonNull PyFunction function) {
        this.listen(eventClass, priority, (event) -> function.__call__(Py.java2py(event)));
    }

    public <T extends Event> void listen(@NonNull Class<T> eventClass, @NonNull EventPriority priority, boolean ignoreCancelled, @NonNull PyFunction function) {
        this.listen(eventClass, priority, ignoreCancelled, (event) -> function.__call__(Py.java2py(event)));
    }

    public void listenChannel(@NonNull String name, @NonNull PyFunction function) {
        this.listenChannel(name, (s, player, bytes) -> function.__call__(Py.java2py(s), Py.java2py(player), Py.java2py(bytes)));
    }

    public void command(@NonNull String label, @NonNull PyFunction function) {
        this.command(label, (sender, args) -> function.__call__(Py.java2py(sender), Py.java2py(args)));
    }

    public void runEvery(long ticks, @NonNull PyFunction function) {
        this.runEvery(ticks, function::__call__);
    }

    public void runEveryAsync(long ticks, @NonNull PyFunction function) {
        this.runEveryAsync(ticks, function::__call__);
    }

    public void runLater(long ticks, @NonNull PyFunction function) {
        this.runLater(ticks, function::__call__);
    }

    public void runLaterAsync(long ticks, @NonNull PyFunction function) {
        this.runLaterAsync(ticks, function::__call__);
    }

    public void runNowAsync(@NonNull PyFunction function) {
        this.runNowAsync(function::__call__);
    }

    public void runNow(@NonNull PyFunction function) {
        this.runNow(function::__call__);
    }
}
