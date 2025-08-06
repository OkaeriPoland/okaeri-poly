package eu.okaeri.poly.api.script;

import lombok.NonNull;

import java.util.Map;
import java.util.Set;

public interface ScriptService {

    Set<ScriptHelper> getLoadedScripts();

    boolean isLoaded(@NonNull String name);

    Map<String, Object> getDefaultBindings(@NonNull ScriptHelper scriptHelper);

    ScriptHelper load(@NonNull String name, @NonNull String source);

    boolean unload(@NonNull String name);

    ScriptHelper exec(@NonNull String name, @NonNull String source);

    default Object eval(@NonNull String source) {
        return this.eval(source, Map.of());
    }

    Object eval(@NonNull String source, @NonNull Map<String, Object> context);
}
