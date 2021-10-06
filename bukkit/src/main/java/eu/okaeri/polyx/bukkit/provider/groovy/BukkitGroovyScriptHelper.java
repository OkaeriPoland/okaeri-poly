package eu.okaeri.polyx.bukkit.provider.groovy;

import eu.okaeri.polyx.bukkit.provider.groovy.executor.ScriptCommandExecutor;
import eu.okaeri.polyx.bukkit.provider.groovy.executor.ScriptEventExecutor;
import eu.okaeri.polyx.bukkit.provider.groovy.executor.ScriptPluginMessageExecutor;
import eu.okaeri.polyx.bukkit.provider.groovy.executor.ScriptSchedulerExecutor;
import groovy.lang.Closure;
import groovy.transform.stc.ClosureParams;
import groovy.transform.stc.FirstParam;
import groovy.transform.stc.SimpleType;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.bukkit.event.Event;
import org.bukkit.event.EventPriority;
import org.bukkit.event.Listener;
import org.bukkit.plugin.Plugin;
import org.bukkit.scheduler.BukkitTask;

import java.util.ArrayList;
import java.util.List;

@Getter(AccessLevel.PROTECTED)
@RequiredArgsConstructor
public class BukkitGroovyScriptHelper {

    private final Plugin plugin;
    private final Listener scriptEventListener = new Listener() {};
    private final List<String> scriptCommands = new ArrayList<>();
    private final List<BukkitTask> scriptTasks = new ArrayList<>();
    private final List<ScriptPluginMessageExecutor> scriptChannelListeners = new ArrayList<>();

    public <T extends Event> void listen(@NonNull Class<T> eventClass, @NonNull @ClosureParams(FirstParam.FirstGenericType.class) Closure<?> closure) {
        this.listen(eventClass, EventPriority.NORMAL, false, closure);
    }

    public <T extends Event> void listen(@NonNull Class<T> eventClass, @NonNull EventPriority priority, @NonNull @ClosureParams(FirstParam.FirstGenericType.class) Closure<?> closure) {
        this.listen(eventClass, priority, false, closure);
    }

    public <T extends Event> void listen(@NonNull Class<T> eventClass, @NonNull EventPriority priority, boolean ignoreCancelled, @NonNull @ClosureParams(FirstParam.FirstGenericType.class) Closure<?> closure) {
        ScriptEventExecutor executor = new ScriptEventExecutor(closure);
        this.plugin.getServer().getPluginManager().registerEvent(eventClass, this.scriptEventListener, priority, executor, this.plugin, ignoreCancelled);
    }

    public void listenChannel(@NonNull String name, @NonNull @ClosureParams(value = SimpleType.class, options = {"java.lang.String", "org.bukkit.entity.Player", "byte[]"}) Closure<?> closure) {
        ScriptPluginMessageExecutor scriptPluginMessageExecutor = new ScriptPluginMessageExecutor(name, closure);
        this.plugin.getServer().getMessenger().registerIncomingPluginChannel(this.plugin, name, scriptPluginMessageExecutor);
        this.scriptChannelListeners.add(scriptPluginMessageExecutor);
    }

    public void registerOutgoingPluginChannel(@NonNull String name) {
        this.plugin.getServer().getMessenger().registerOutgoingPluginChannel(this.plugin, name);
    }

    public void command(@NonNull String label, @NonNull @ClosureParams(value = SimpleType.class, options = {"org.bukkit.command.CommandSender", "java.util.ArrayList"}) Closure<?> closure) {
        ScriptCommandExecutor scriptCommandExecutor = new ScriptCommandExecutor(label, closure);
//        this.commandMap.register(label, scriptCommandExecutor); FIXME
        this.scriptCommands.add(scriptCommandExecutor.getName());
    }

    public void runEvery(long ticks, @NonNull Closure<?> closure) {
        ScriptSchedulerExecutor scriptSchedulerExecutor = new ScriptSchedulerExecutor(closure);
        BukkitTask bukkitTask = this.plugin.getServer().getScheduler().runTaskTimer(this.plugin, scriptSchedulerExecutor, ticks, ticks);
        this.scriptTasks.add(bukkitTask);
    }

    public void runEveryAsync(long ticks, @NonNull Closure<?> closure) {
        ScriptSchedulerExecutor scriptSchedulerExecutor = new ScriptSchedulerExecutor(closure);
        BukkitTask bukkitTask = this.plugin.getServer().getScheduler().runTaskTimerAsynchronously(this.plugin, scriptSchedulerExecutor, ticks, ticks);
        this.scriptTasks.add(bukkitTask);
    }

    public void runLater(long ticks, @NonNull Closure<?> closure) {
        ScriptSchedulerExecutor scriptSchedulerExecutor = new ScriptSchedulerExecutor(closure);
        BukkitTask bukkitTask = this.plugin.getServer().getScheduler().runTaskLater(this.plugin, scriptSchedulerExecutor, ticks);
        this.scriptTasks.add(bukkitTask);
    }

    public void runLaterAsync(long ticks, @NonNull Closure<?> closure) {
        ScriptSchedulerExecutor scriptSchedulerExecutor = new ScriptSchedulerExecutor(closure);
        BukkitTask bukkitTask = this.plugin.getServer().getScheduler().runTaskLaterAsynchronously(this.plugin, scriptSchedulerExecutor, ticks);
        this.scriptTasks.add(bukkitTask);
    }

    public void runNowAsync(@NonNull Closure<?> closure) {
        ScriptSchedulerExecutor scriptSchedulerExecutor = new ScriptSchedulerExecutor(closure);
        BukkitTask bukkitTask = this.plugin.getServer().getScheduler().runTaskAsynchronously(this.plugin, scriptSchedulerExecutor);
        this.scriptTasks.add(bukkitTask);
    }

    public void runNow(@NonNull Closure<?> closure) {
        ScriptSchedulerExecutor scriptSchedulerExecutor = new ScriptSchedulerExecutor(closure);
        BukkitTask bukkitTask = this.plugin.getServer().getScheduler().runTask(this.plugin, scriptSchedulerExecutor);
        this.scriptTasks.add(bukkitTask);
    }
}
