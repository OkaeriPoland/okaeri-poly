package eu.okaeri.polyx.bukkit.provider.groovy.executor;

import groovy.lang.Closure;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.bukkit.entity.Player;
import org.bukkit.plugin.messaging.PluginMessageListener;

@RequiredArgsConstructor
public class ScriptPluginMessageExecutor implements PluginMessageListener {

    @Getter private final String channelName;
    private final Closure<?> closure;

    @Override
    public void onPluginMessageReceived(String s, Player player, byte[] bytes) {
        this.closure.call(s, player, bytes);
    }
}
