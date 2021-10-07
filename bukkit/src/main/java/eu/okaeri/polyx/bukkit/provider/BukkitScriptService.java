package eu.okaeri.poly.bukkit.provider;

import eu.okaeri.poly.core.script.ScriptService;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.bukkit.plugin.Plugin;

import java.util.Map;

@Getter(AccessLevel.PROTECTED)
@RequiredArgsConstructor
public abstract class BukkitScriptService extends ScriptService {

    private final Plugin plugin;

    @Override
    protected void log(@NonNull String message) {
        this.plugin.getLogger().info(message);
    }

    protected Map<String, Object> getDefaultBindings(@NonNull BukkitScriptHelper scriptHelper) {
        return Map.of(
                "script", scriptHelper,
                "plugin", this.getPlugin(),
                "server", this.plugin.getServer()
        );
    }

    protected abstract BukkitScriptHelper eval(@NonNull String name, @NonNull String source);
}
