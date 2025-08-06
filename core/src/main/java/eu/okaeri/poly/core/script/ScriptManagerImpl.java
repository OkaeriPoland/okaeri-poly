package eu.okaeri.poly.core.script;

import eu.okaeri.poly.api.script.ScriptHelper;
import eu.okaeri.poly.api.script.ScriptManager;
import eu.okaeri.poly.api.script.ScriptService;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import java.util.*;
import java.util.stream.Collectors;

@NoArgsConstructor(staticName = "create")
public class ScriptManagerImpl implements ScriptManager {

    private final Map<String, ScriptService> services = new LinkedHashMap<>();

    @Override
    public ScriptManager register(@NonNull String extension, @NonNull ScriptService scriptService) {
        this.services.put(extension, scriptService);
        return this;
    }

    @Override
    public Map<String, ScriptService> getServices() {
        return Collections.unmodifiableMap(this.services);
    }

    @Override
    public Map<ScriptService, Set<ScriptHelper>> getLoadedScripts() {
        return this.services.values().stream().collect(Collectors.toMap(
            service -> service,
            ScriptService::getLoadedScripts,
            (a, b) -> {
                throw new IllegalStateException("duplicate script service: a=" + a + ", b=" + b);
            },
            LinkedHashMap::new
        ));
    }

    @Override
    public boolean isLoaded(@NonNull String name) {
        return this.services.values().stream().anyMatch(service -> service.isLoaded(name));
    }

    @Override
    public ScriptHelper load(@NonNull String name, @NonNull String source) {

        String extension = this.getExtension(name);
        ScriptService service = this.services.get(extension);

        if (service == null) {
            throw new RuntimeException("Cannot find service for extension: " + extension);
        }

        return service.load(name, source);
    }

    @Override
    public Object eval(@NonNull String extension, @NonNull String source, @NonNull Map<String, Object> context) {

        ScriptService service = this.services.get(extension);
        if (service == null) {
            throw new RuntimeException("Cannot find service for extension: " + extension);
        }

        return service.eval(source, context);
    }

    @Override
    public boolean unload(@NonNull String name) {

        String extension = this.getExtension(name);
        if (extension == null) {
            throw new RuntimeException("Cannot resolve extension: " + name);
        }

        ScriptService service = this.services.get(extension);
        if (service == null) {
            throw new RuntimeException("Cannot find service for extension: " + extension);
        }

        return service.unload(name);
    }

    private String getExtension(@NonNull String name) {

        int lastDotIndex = name.lastIndexOf(".");
        if (lastDotIndex == -1) {
            return null;
        }

        return name.substring(lastDotIndex + 1);
    }
}
