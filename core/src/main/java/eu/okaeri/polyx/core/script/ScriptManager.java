package eu.okaeri.polyx.core.script;

import lombok.NoArgsConstructor;
import lombok.NonNull;

import java.util.*;
import java.util.stream.Collectors;

@NoArgsConstructor(staticName = "create")
public class ScriptManager implements ScriptService {

    private final Map<String, ScriptService> services = new LinkedHashMap<>();

    public ScriptManager register(@NonNull String extension, @NonNull ScriptService scriptService) {
        this.services.put(extension, scriptService);
        return this;
    }

    public Map<String, ScriptService> getServices() {
        return Collections.unmodifiableMap(this.services);
    }

    @Override
    public Set<String> listLoaded() {
        return this.services.values().stream()
                .map(ScriptService::listLoaded)
                .flatMap(Collection::stream)
                .collect(Collectors.toSet());
    }

    @Override
    public void load(@NonNull String name, @NonNull String source) {

        String extension = this.getExtension(name);
        ScriptService service = this.services.get(extension);

        if (service == null) {
            throw new RuntimeException("Cannot find service for extension: " + extension);
        }

        service.load(name, source);
    }

    @Override
    public boolean unload(@NonNull String name) {

        String extension = this.getExtension(name);
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
