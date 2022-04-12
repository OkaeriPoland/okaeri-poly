package eu.okaeri.poly.api.bukkit;

import groovy.lang.Closure;
import groovy.lang.Script;
import groovy.transform.stc.ClosureParams;
import groovy.transform.stc.FirstParam;
import groovy.transform.stc.FromString;
import lombok.NonNull;
import org.bukkit.Server;
import org.bukkit.command.CommandSender;
import org.bukkit.event.Event;
import org.bukkit.event.EventPriority;
import org.bukkit.event.Listener;
import org.bukkit.plugin.Plugin;
import org.bukkit.plugin.java.JavaPlugin;
import org.bukkit.plugin.messaging.PluginMessageListener;
import org.bukkit.scheduler.BukkitTask;

import java.util.List;
import java.util.function.BiConsumer;
import java.util.function.Consumer;
import java.util.logging.Logger;

@SuppressWarnings("unused")
public abstract class BukkitGroovyScript extends Script implements BukkitGroovyHelper {

    public BukkitGroovyHelper script;
    public JavaPlugin plugin;
    public Logger logger;
    public Server server;

    @Override
    public Plugin getPlugin() {
        return this.plugin;
    }

    @Override
    public Listener getScriptEventListener() {
        return this.script.getScriptEventListener();
    }

    @Override
    public List<String> getScriptCommands() {
        return this.script.getScriptCommands();
    }

    @Override
    public List<BukkitTask> getScriptTasks() {
        return this.script.getScriptTasks();
    }

    @Override
    public List<PluginMessageListener> getScriptChannelListeners() {
        return this.script.getScriptChannelListeners();
    }

    @Override
    public <T extends Event> void listen(@NonNull Class<T> eventClass, @NonNull Consumer<T> consumer) {
        this.script.listen(eventClass, consumer);
    }

    @Override
    public <T extends Event> void listen(@NonNull Class<T> eventClass, @ClosureParams(FirstParam.FirstGenericType.class) @NonNull Closure<?> closure) {
        this.script.listen(eventClass, closure);
    }

    @Override
    public <T extends Event> void listen(@NonNull Class<T> eventClass, @NonNull EventPriority priority, @NonNull Consumer<T> consumer) {
        this.script.listen(eventClass, priority, consumer);
    }

    @Override
    public <T extends Event> void listen(@NonNull Class<T> eventClass, @NonNull EventPriority priority, @ClosureParams(FirstParam.FirstGenericType.class) @NonNull Closure<?> closure) {
        this.script.listen(eventClass, priority, closure);
    }

    @Override
    public <T extends Event> void listen(@NonNull Class<T> eventClass, @NonNull EventPriority priority, boolean ignoreCancelled, @NonNull Consumer<T> consumer) {
        this.script.listen(eventClass, priority, ignoreCancelled, consumer);
    }

    @Override
    public <T extends Event> void listen(@NonNull Class<T> eventClass, @NonNull EventPriority priority, boolean ignoreCancelled, @ClosureParams(FirstParam.FirstGenericType.class) @NonNull Closure<?> closure) {
        this.script.listen(eventClass, priority, ignoreCancelled, closure);
    }

    @Override
    public void listenChannel(@NonNull String name, @NonNull PluginMessageListener pluginMessageListener) {
        this.script.listenChannel(name, pluginMessageListener);
    }

    @Override
    public void command(@NonNull String label, @NonNull BiConsumer<CommandSender, List<String>> consumer) {
        this.script.command(label, consumer);
    }

    @Override
    public void command(@NonNull String label, @ClosureParams(value = FromString.class, options = {
        "",
        "org.bukkit.command.CommandSender",
        "org.bukkit.command.CommandSender, java.util.ArrayList<java.lang.String>"
    }) @NonNull Closure<?> closure) {
        this.script.command(label, closure);
    }

    @Override
    public void runEvery(long ticks, @NonNull Runnable runnable) {
        this.script.runEvery(ticks, runnable);
    }

    @Override
    public void runEveryAsync(long ticks, @NonNull Runnable runnable) {
        this.script.runEveryAsync(ticks, runnable);
    }

    @Override
    public void runLater(long ticks, @NonNull Runnable runnable) {
        this.script.runLater(ticks, runnable);
    }

    @Override
    public void runLaterAsync(long ticks, @NonNull Runnable runnable) {
        this.script.runLaterAsync(ticks, runnable);
    }

    @Override
    public void runNow(@NonNull Runnable runnable) {
        this.script.runNow(runnable);
    }

    @Override
    public void runNowAsync(@NonNull Runnable runnable) {
        this.script.runNowAsync(runnable);
    }

    @Override
    public void onLoad(@NonNull Runnable runnable) {
        this.script.onLoad(runnable);
    }

    @Override
    public void onUnload(@NonNull Runnable runnable) {
        this.script.onUnload(runnable);
    }

    @Override
    public void registerOutgoingPluginChannel(@NonNull String name) {
        this.script.registerOutgoingPluginChannel(name);
    }

    @Override
    public String getName() {
        return this.script.getName();
    }

    @Override
    public void callOnLoad() {
        this.script.callOnLoad();
    }

    @Override
    public void callOnUnload() {
        this.script.callOnUnload();
    }

    @Override
    public void unregister() {
        this.script.unregister();
    }
}
