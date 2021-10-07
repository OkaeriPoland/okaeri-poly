package eu.okaeri.poly.bukkit.provider;

import eu.okaeri.poly.api.script.ScriptHelper;
import eu.okaeri.poly.core.script.ScriptServiceImpl;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.bukkit.plugin.Plugin;

import java.util.Map;

@Getter(AccessLevel.PROTECTED)
@RequiredArgsConstructor
public abstract class BukkitScriptServiceImpl extends ScriptServiceImpl {

    private final Plugin plugin;

    @Override
    public Map<String, Object> getDefaultBindings(@NonNull ScriptHelper scriptHelper) {
        return Map.of(
                "script", scriptHelper,
                "plugin", this.getPlugin(),
                "logger", this.getPlugin().getLogger(),
                "server", this.plugin.getServer()
        );
    }

    @Override
    public abstract ScriptHelper exec(@NonNull String name, @NonNull String source);
}
