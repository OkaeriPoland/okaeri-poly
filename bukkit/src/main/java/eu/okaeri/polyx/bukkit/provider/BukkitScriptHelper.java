package eu.okaeri.polyx.bukkit.provider;

import eu.okaeri.polyx.bukkit.provider.groovy.executor.ScriptPluginMessageExecutor;
import eu.okaeri.polyx.core.script.ScriptHelper;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.bukkit.event.HandlerList;
import org.bukkit.event.Listener;
import org.bukkit.plugin.Plugin;
import org.bukkit.scheduler.BukkitTask;

import java.util.ArrayList;
import java.util.List;

@Getter
@RequiredArgsConstructor
public abstract class BukkitScriptHelper implements ScriptHelper {

    private final Plugin plugin;
    private final Listener scriptEventListener = new Listener() {};
    private final List<String> scriptCommands = new ArrayList<>();
    private final List<BukkitTask> scriptTasks = new ArrayList<>();
    private final List<ScriptPluginMessageExecutor> scriptChannelListeners = new ArrayList<>();

    @Override
    public void unregister() {

        HandlerList.unregisterAll(this.getScriptEventListener());
        this.getScriptTasks().forEach(BukkitTask::cancel);
        this.getScriptChannelListeners().forEach(executor -> this.plugin.getServer().getMessenger().unregisterIncomingPluginChannel(this.plugin, executor.getChannelName(), executor));

        this.getScriptCommands().forEach(command -> {
            // TODO: unregister
        });
    }
}
