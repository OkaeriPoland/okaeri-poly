package eu.okaeri.poly.bukkit.executor;

import lombok.Getter;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.bukkit.entity.Player;
import org.bukkit.plugin.messaging.PluginMessageListener;

@RequiredArgsConstructor
public class ScriptPluginMessageExecutor implements PluginMessageListener {

    private @Getter final String channelName;
    private final PluginMessageListener listener;

    @Override
    public void onPluginMessageReceived(@NonNull String channel, @NonNull Player player, byte[] payload) {
        this.listener.onPluginMessageReceived(channel, player, payload);
    }
}
