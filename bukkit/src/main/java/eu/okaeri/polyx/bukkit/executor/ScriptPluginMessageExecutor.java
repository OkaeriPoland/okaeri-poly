package eu.okaeri.polyx.bukkit.executor;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.bukkit.entity.Player;
import org.bukkit.plugin.messaging.PluginMessageListener;

@RequiredArgsConstructor
public class ScriptPluginMessageExecutor implements PluginMessageListener {

    @Getter private final String channelName;
    private final PluginMessageListener listener;

    @Override
    public void onPluginMessageReceived(String channel, Player player, byte[] bytes) {
        this.listener.onPluginMessageReceived(channel, player, bytes);
    }
}
