package eu.okaeri.poly.api.script;

import lombok.NonNull;

import java.nio.file.Path;
import java.util.Map;
import java.util.Set;

public interface ScriptManager {

    ScriptManager register(@NonNull String extension, @NonNull ScriptService scriptService);

    Map<String, ScriptService> getServices();

    Set<String> listLoaded();

    ScriptHelper load(@NonNull Path path);

    ScriptHelper load(@NonNull String name, @NonNull String source);

    Object eval(@NonNull String extension, @NonNull String source);

    boolean unload(@NonNull String name);
}
