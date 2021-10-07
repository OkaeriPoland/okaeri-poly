package eu.okaeri.poly.api.bukkit;

import eu.okaeri.poly.api.script.ScriptHelper;
import lombok.NonNull;
import org.bukkit.command.CommandSender;
import org.bukkit.event.Event;
import org.bukkit.event.EventPriority;
import org.bukkit.event.Listener;
import org.bukkit.plugin.Plugin;
import org.bukkit.plugin.messaging.PluginMessageListener;
import org.bukkit.scheduler.BukkitTask;

import java.util.List;
import java.util.function.BiConsumer;
import java.util.function.Consumer;

public interface BukkitScriptHelper extends ScriptHelper {

    Plugin getPlugin();

    Listener getScriptEventListener();

    List<String> getScriptCommands();

    List<BukkitTask> getScriptTasks();

    List<PluginMessageListener> getScriptChannelListeners();

    <T extends Event> void listen(@NonNull Class<T> eventClass, @NonNull Consumer<T> consumer);

    <T extends Event> void listen(@NonNull Class<T> eventClass, @NonNull EventPriority priority, @NonNull Consumer<T> consumer);

    <T extends Event> void listen(@NonNull Class<T> eventClass, @NonNull EventPriority priority, boolean ignoreCancelled, @NonNull Consumer<T> consumer);

    void listenChannel(@NonNull String name, @NonNull PluginMessageListener pluginMessageListener);

    void command(@NonNull String label, @NonNull BiConsumer<CommandSender, List<String>> consumer);

    void runEvery(long ticks, @NonNull Runnable runnable);

    void runEveryAsync(long ticks, @NonNull Runnable runnable);

    void runLater(long ticks, @NonNull Runnable runnable);

    void runLaterAsync(long ticks, @NonNull Runnable runnable);

    void runNowAsync(@NonNull Runnable runnable);

    void runNow(@NonNull Runnable runnable);

    void registerOutgoingPluginChannel(@NonNull String name);
}
