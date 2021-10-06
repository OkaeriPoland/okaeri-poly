package eu.okaeri.polyx.core.script;

import lombok.NonNull;

import java.util.Set;

public interface ScriptService {

    Set<String> listLoaded();

    void load(@NonNull String name, @NonNull String source);

    boolean unload(@NonNull String name);
}
