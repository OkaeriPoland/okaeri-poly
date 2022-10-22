package eu.okaeri.poly.bukkit.provider.python;

import eu.okaeri.poly.api.bukkit.BukkitPythonHelper;
import eu.okaeri.poly.bukkit.provider.BukkitScriptHelperImpl;
import lombok.NonNull;
import org.bukkit.event.Event;
import org.bukkit.event.EventPriority;
import org.bukkit.plugin.Plugin;
import org.python.core.Py;
import org.python.core.PyFunction;

public class BukkitPythonHelperImpl extends BukkitScriptHelperImpl implements BukkitPythonHelper {

    public BukkitPythonHelperImpl(@NonNull Plugin plugin, @NonNull String scriptName) {
        super(plugin, scriptName);
    }

    @Override
    public <T extends Event> void listen(@NonNull Class<T> eventClass, @NonNull PyFunction function) {
        this.listen(eventClass, (event) -> function.__call__(Py.java2py(event)));
    }

    @Override
    public <T extends Event> void listen(@NonNull Class<T> eventClass, @NonNull EventPriority priority, @NonNull PyFunction function) {
        this.listen(eventClass, priority, (event) -> function.__call__(Py.java2py(event)));
    }

    @Override
    public <T extends Event> void listen(@NonNull Class<T> eventClass, @NonNull EventPriority priority, boolean ignoreCancelled, @NonNull PyFunction function) {
        this.listen(eventClass, priority, ignoreCancelled, (event) -> function.__call__(Py.java2py(event)));
    }

    @Override
    public void listenChannel(@NonNull String name, @NonNull PyFunction function) {
        this.listenChannel(name, (s, player, bytes) -> function.__call__(Py.java2py(s), Py.java2py(player), Py.java2py(bytes)));
    }

    @Override
    public void command(@NonNull String label, @NonNull PyFunction function) {
        this.command(label, (sender, args) -> function.__call__(Py.java2py(sender), Py.java2py(args)));
    }

    @Override
    public void runEvery(long ticks, @NonNull PyFunction function) {
        this.runEvery(ticks, function::__call__);
    }

    @Override
    public void runEveryAsync(long ticks, @NonNull PyFunction function) {
        this.runEveryAsync(ticks, function::__call__);
    }

    @Override
    public void runLater(long ticks, @NonNull PyFunction function) {
        this.runLater(ticks, function::__call__);
    }

    @Override
    public void runLaterAsync(long ticks, @NonNull PyFunction function) {
        this.runLaterAsync(ticks, function::__call__);
    }

    @Override
    public void runNowAsync(@NonNull PyFunction function) {
        this.runNowAsync(function::__call__);
    }

    @Override
    public void runNow(@NonNull PyFunction function) {
        this.runNow(function::__call__);
    }
}
