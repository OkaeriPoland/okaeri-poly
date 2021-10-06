package eu.okaeri.polyx.bukkit.provider.groovy;

import eu.okaeri.polyx.bukkit.provider.BukkitScriptHelper;
import eu.okaeri.polyx.bukkit.provider.groovy.executor.ScriptCommandExecutor;
import eu.okaeri.polyx.bukkit.provider.groovy.executor.ScriptEventExecutor;
import eu.okaeri.polyx.bukkit.provider.groovy.executor.ScriptPluginMessageExecutor;
import eu.okaeri.polyx.bukkit.provider.groovy.executor.ScriptSchedulerExecutor;
import groovy.lang.Closure;
import groovy.transform.stc.ClosureParams;
import groovy.transform.stc.FirstParam;
import groovy.transform.stc.SimpleType;
import lombok.NonNull;
import org.bukkit.event.Event;
import org.bukkit.event.EventPriority;
import org.bukkit.plugin.Plugin;
import org.bukkit.scheduler.BukkitTask;

public class BukkitGroovyHelper extends BukkitScriptHelper {

    public BukkitGroovyHelper(Plugin plugin) {
        super(plugin);
    }

    public <T extends Event> void listen(@NonNull Class<T> eventClass, @NonNull @ClosureParams(FirstParam.FirstGenericType.class) Closure<?> closure) {
        this.listen(eventClass, EventPriority.NORMAL, false, closure);
    }

    public <T extends Event> void listen(@NonNull Class<T> eventClass, @NonNull EventPriority priority, @NonNull @ClosureParams(FirstParam.FirstGenericType.class) Closure<?> closure) {
        this.listen(eventClass, priority, false, closure);
    }

    public <T extends Event> void listen(@NonNull Class<T> eventClass, @NonNull EventPriority priority, boolean ignoreCancelled, @NonNull @ClosureParams(FirstParam.FirstGenericType.class) Closure<?> closure) {
        ScriptEventExecutor executor = new ScriptEventExecutor(closure);
        this.getPlugin().getServer().getPluginManager().registerEvent(eventClass, this.getScriptEventListener(), priority, executor, this.getPlugin(), ignoreCancelled);
    }

    public void listenChannel(@NonNull String name, @NonNull @ClosureParams(value = SimpleType.class, options = {"java.lang.String", "org.bukkit.entity.Player", "byte[]"}) Closure<?> closure) {
        ScriptPluginMessageExecutor scriptPluginMessageExecutor = new ScriptPluginMessageExecutor(name, closure);
        this.getPlugin().getServer().getMessenger().registerIncomingPluginChannel(this.getPlugin(), name, scriptPluginMessageExecutor);
        this.getScriptChannelListeners().add(scriptPluginMessageExecutor);
    }

    public void registerOutgoingPluginChannel(@NonNull String name) {
        this.getPlugin().getServer().getMessenger().registerOutgoingPluginChannel(this.getPlugin(), name);
    }

    public void command(@NonNull String label, @NonNull @ClosureParams(value = SimpleType.class, options = {"org.bukkit.command.CommandSender", "java.util.ArrayList"}) Closure<?> closure) {
        ScriptCommandExecutor scriptCommandExecutor = new ScriptCommandExecutor(label, closure);
//        this.commandMap.register(label, scriptCommandExecutor); FIXME
        this.getScriptCommands().add(scriptCommandExecutor.getName());
    }

    public void runEvery(long ticks, @NonNull Closure<?> closure) {
        ScriptSchedulerExecutor scriptSchedulerExecutor = new ScriptSchedulerExecutor(closure);
        BukkitTask bukkitTask = this.getPlugin().getServer().getScheduler().runTaskTimer(this.getPlugin(), scriptSchedulerExecutor, ticks, ticks);
        this.getScriptTasks().add(bukkitTask);
    }

    public void runEveryAsync(long ticks, @NonNull Closure<?> closure) {
        ScriptSchedulerExecutor scriptSchedulerExecutor = new ScriptSchedulerExecutor(closure);
        BukkitTask bukkitTask = this.getPlugin().getServer().getScheduler().runTaskTimerAsynchronously(this.getPlugin(), scriptSchedulerExecutor, ticks, ticks);
        this.getScriptTasks().add(bukkitTask);
    }

    public void runLater(long ticks, @NonNull Closure<?> closure) {
        ScriptSchedulerExecutor scriptSchedulerExecutor = new ScriptSchedulerExecutor(closure);
        BukkitTask bukkitTask = this.getPlugin().getServer().getScheduler().runTaskLater(this.getPlugin(), scriptSchedulerExecutor, ticks);
        this.getScriptTasks().add(bukkitTask);
    }

    public void runLaterAsync(long ticks, @NonNull Closure<?> closure) {
        ScriptSchedulerExecutor scriptSchedulerExecutor = new ScriptSchedulerExecutor(closure);
        BukkitTask bukkitTask = this.getPlugin().getServer().getScheduler().runTaskLaterAsynchronously(this.getPlugin(), scriptSchedulerExecutor, ticks);
        this.getScriptTasks().add(bukkitTask);
    }

    public void runNowAsync(@NonNull Closure<?> closure) {
        ScriptSchedulerExecutor scriptSchedulerExecutor = new ScriptSchedulerExecutor(closure);
        BukkitTask bukkitTask = this.getPlugin().getServer().getScheduler().runTaskAsynchronously(this.getPlugin(), scriptSchedulerExecutor);
        this.getScriptTasks().add(bukkitTask);
    }

    public void runNow(@NonNull Closure<?> closure) {
        ScriptSchedulerExecutor scriptSchedulerExecutor = new ScriptSchedulerExecutor(closure);
        BukkitTask bukkitTask = this.getPlugin().getServer().getScheduler().runTask(this.getPlugin(), scriptSchedulerExecutor);
        this.getScriptTasks().add(bukkitTask);
    }
}
