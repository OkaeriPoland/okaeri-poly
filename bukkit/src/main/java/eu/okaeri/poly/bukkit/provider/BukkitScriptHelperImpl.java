package eu.okaeri.poly.bukkit.provider;

import eu.okaeri.commands.bukkit.CommandsBukkit;
import eu.okaeri.poly.api.bukkit.BukkitScriptHelper;
import eu.okaeri.poly.bukkit.executor.ScriptCommandExecutor;
import eu.okaeri.poly.bukkit.executor.ScriptEventExecutor;
import eu.okaeri.poly.bukkit.executor.ScriptPluginMessageExecutor;
import eu.okaeri.poly.bukkit.executor.ScriptSchedulerExecutor;
import lombok.Getter;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.bukkit.command.CommandMap;
import org.bukkit.command.CommandSender;
import org.bukkit.event.Event;
import org.bukkit.event.EventPriority;
import org.bukkit.event.HandlerList;
import org.bukkit.event.Listener;
import org.bukkit.plugin.Plugin;
import org.bukkit.plugin.messaging.PluginMessageListener;
import org.bukkit.scheduler.BukkitTask;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.function.BiConsumer;
import java.util.function.Consumer;

@Getter
@RequiredArgsConstructor
public abstract class BukkitScriptHelperImpl implements BukkitScriptHelper {

    private final Plugin plugin;
    private final Listener scriptEventListener = new Listener() {};
    private final List<String> scriptCommands = new ArrayList<>();
    private final List<BukkitTask> scriptTasks = new ArrayList<>();
    private final List<PluginMessageListener> scriptChannelListeners = new ArrayList<>();

    @Override
    public void unregister() {

        HandlerList.unregisterAll(this.getScriptEventListener());
        this.getScriptTasks().forEach(BukkitTask::cancel);

        this.getScriptChannelListeners().stream()
                .map(ScriptPluginMessageExecutor.class::cast)
                .forEach(executor -> this.plugin.getServer().getMessenger().unregisterIncomingPluginChannel(this.plugin, executor.getChannelName(), executor));

        CommandMap commandMap = CommandsBukkit.getCommandMap();
        this.getScriptCommands().stream()
                .map(commandMap::getCommand)
                .filter(Objects::nonNull)
                .forEach(command -> command.unregister(commandMap));
    }

    @Override
    public <T extends Event> void listen(@NonNull Class<T> eventClass, @NonNull Consumer<T> consumer) {
        this.listen(eventClass, EventPriority.NORMAL, false, consumer);
    }

    @Override
    public <T extends Event> void listen(@NonNull Class<T> eventClass, @NonNull EventPriority priority, @NonNull Consumer<T> consumer) {
        this.listen(eventClass, priority, false, consumer);
    }

    @Override
    public <T extends Event> void listen(@NonNull Class<T> eventClass, @NonNull EventPriority priority, boolean ignoreCancelled, @NonNull Consumer<T> consumer) {
        ScriptEventExecutor<T> executor = new ScriptEventExecutor<>(consumer);
        this.getPlugin().getServer().getPluginManager().registerEvent(eventClass, this.getScriptEventListener(), priority, executor, this.getPlugin(), ignoreCancelled);
    }

    @Override
    public void listenChannel(@NonNull String name, @NonNull PluginMessageListener pluginMessageListener) {
        ScriptPluginMessageExecutor scriptPluginMessageExecutor = new ScriptPluginMessageExecutor(name, pluginMessageListener);
        this.getPlugin().getServer().getMessenger().registerIncomingPluginChannel(this.getPlugin(), name, scriptPluginMessageExecutor);
        this.getScriptChannelListeners().add(scriptPluginMessageExecutor);
    }

    @Override
    public void command(@NonNull String label, @NonNull BiConsumer<CommandSender, List<String>> consumer) {
        ScriptCommandExecutor scriptCommandExecutor = new ScriptCommandExecutor(label, consumer);
        CommandsBukkit.getCommandMap().register(label, scriptCommandExecutor);
        this.getScriptCommands().add(scriptCommandExecutor.getName());
    }

    @Override
    public void runEvery(long ticks, @NonNull Runnable runnable) {
        ScriptSchedulerExecutor scriptSchedulerExecutor = new ScriptSchedulerExecutor(runnable);
        BukkitTask bukkitTask = this.getPlugin().getServer().getScheduler().runTaskTimer(this.getPlugin(), scriptSchedulerExecutor, ticks, ticks);
        this.getScriptTasks().add(bukkitTask);
    }

    @Override
    public void runEveryAsync(long ticks, @NonNull Runnable runnable) {
        ScriptSchedulerExecutor scriptSchedulerExecutor = new ScriptSchedulerExecutor(runnable);
        BukkitTask bukkitTask = this.getPlugin().getServer().getScheduler().runTaskTimerAsynchronously(this.getPlugin(), scriptSchedulerExecutor, ticks, ticks);
        this.getScriptTasks().add(bukkitTask);
    }

    @Override
    public void runLater(long ticks, @NonNull Runnable runnable) {
        ScriptSchedulerExecutor scriptSchedulerExecutor = new ScriptSchedulerExecutor(runnable);
        BukkitTask bukkitTask = this.getPlugin().getServer().getScheduler().runTaskLater(this.getPlugin(), scriptSchedulerExecutor, ticks);
        this.getScriptTasks().add(bukkitTask);
    }

    @Override
    public void runLaterAsync(long ticks, @NonNull Runnable runnable) {
        ScriptSchedulerExecutor scriptSchedulerExecutor = new ScriptSchedulerExecutor(runnable);
        BukkitTask bukkitTask = this.getPlugin().getServer().getScheduler().runTaskLaterAsynchronously(this.getPlugin(), scriptSchedulerExecutor, ticks);
        this.getScriptTasks().add(bukkitTask);
    }

    @Override
    public void runNowAsync(@NonNull Runnable runnable) {
        ScriptSchedulerExecutor scriptSchedulerExecutor = new ScriptSchedulerExecutor(runnable);
        BukkitTask bukkitTask = this.getPlugin().getServer().getScheduler().runTaskAsynchronously(this.getPlugin(), scriptSchedulerExecutor);
        this.getScriptTasks().add(bukkitTask);
    }

    @Override
    public void runNow(@NonNull Runnable runnable) {
        ScriptSchedulerExecutor scriptSchedulerExecutor = new ScriptSchedulerExecutor(runnable);
        BukkitTask bukkitTask = this.getPlugin().getServer().getScheduler().runTask(this.getPlugin(), scriptSchedulerExecutor);
        this.getScriptTasks().add(bukkitTask);
    }

    @Override
    public void registerOutgoingPluginChannel(@NonNull String name) {
        this.getPlugin().getServer().getMessenger().registerOutgoingPluginChannel(this.getPlugin(), name);
    }
}