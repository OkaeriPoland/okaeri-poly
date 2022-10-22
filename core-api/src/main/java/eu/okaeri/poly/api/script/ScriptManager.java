package eu.okaeri.poly.api.script;

import lombok.NonNull;

import java.nio.file.Path;
import java.util.Map;
import java.util.Set;

public interface ScriptManager {

    ScriptManager register(@NonNull String extension, @NonNull ScriptService scriptService);

    Map<String, ScriptService> getServices();

    Set<String> listLoaded();

    ScriptHelper load(@NonNull String name, @NonNull String source);

    default Object eval(@NonNull String extension, @NonNull String source) {
        return this.eval(extension, source, Map.of());
    }

    Object eval(@NonNull String extension, @NonNull String source, @NonNull Map<String, Object> context);

    boolean unload(@NonNull String name);
}
