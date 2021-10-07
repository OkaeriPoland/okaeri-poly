package eu.okaeri.poly.api.script;

import lombok.NonNull;

import java.util.Map;
import java.util.Set;

public interface ScriptService {

    Set<String> listLoaded();

    Map<String, Object> getDefaultBindings(@NonNull ScriptHelper scriptHelper);

    ScriptHelper load(@NonNull String name, @NonNull String source);

    boolean unload(@NonNull String name);

    ScriptHelper exec(@NonNull String name, @NonNull String source);

    Object eval(@NonNull String source);
}
