package eu.okaeri.poly.api.script;

import lombok.NonNull;

import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

public interface ScriptManager {

    ScriptManager register(@NonNull String extension, @NonNull ScriptService scriptService);

    Map<String, ScriptService> getServices();

    Map<ScriptService, Set<ScriptHelper>> getLoadedScripts();

    default Set<String> getLoadedScriptNames() {
        return this.getLoadedScripts().values().stream()
            .flatMap(scripts -> scripts.stream().map(ScriptHelper::getName))
            .collect(Collectors.toSet());
    }

    boolean isLoaded(@NonNull String name);

    ScriptHelper load(@NonNull String name, @NonNull String source);

    default Object eval(@NonNull String extension, @NonNull String source) {
        return this.eval(extension, source, Map.of());
    }

    Object eval(@NonNull String extension, @NonNull String source, @NonNull Map<String, Object> context);

    boolean unload(@NonNull String name);
}
