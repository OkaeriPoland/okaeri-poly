package eu.okaeri.polyx.core.script;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NonNull;

import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;

@Getter(AccessLevel.PROTECTED)
public abstract class ScriptService {

    private final Map<String, ScriptHelper> scripts = new LinkedHashMap<>();

    public Set<String> listLoaded() {
        return Collections.unmodifiableSet(this.scripts.keySet());
    }

    public void load(@NonNull String name, @NonNull String source) {

        if (this.unload(name)) {
            this.log("Unloaded '" + name + "' before loading again.");
        }

        ScriptHelper scriptHelper = this.eval(name, source);
        this.getScripts().put(name, scriptHelper);
        this.log("The script '" + name + "' was loaded.");
    }

    public boolean unload(@NonNull String name) {

        if (!this.scripts.containsKey(name)) {
            return false;
        }

        this.scripts.get(name).unregister();
        return true;
    }

    protected abstract ScriptHelper eval(@NonNull String name, @NonNull String source);

    protected abstract void log(@NonNull String message);
}
