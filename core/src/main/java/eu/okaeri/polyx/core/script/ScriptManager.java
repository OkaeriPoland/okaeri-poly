package eu.okaeri.polyx.core.script;

import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.SneakyThrows;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.*;
import java.util.stream.Collectors;

@NoArgsConstructor(staticName = "create")
public class ScriptManager {

    private final Map<String, ScriptService> services = new LinkedHashMap<>();

    public ScriptManager register(@NonNull String extension, @NonNull ScriptService scriptService) {
        this.services.put(extension, scriptService);
        return this;
    }

    public Map<String, ScriptService> getServices() {
        return Collections.unmodifiableMap(this.services);
    }

    public Set<String> listLoaded() {
        return this.services.values().stream()
                .map(ScriptService::listLoaded)
                .flatMap(Collection::stream)
                .collect(Collectors.toSet());
    }

    @SneakyThrows
    public ScriptHelper load(@NonNull Path path) {
        String fileName = path.getFileName().toString();
        String source = String.join("\n", Files.readAllLines(path));
        return this.load(fileName, source);
    }

    public ScriptHelper load(@NonNull String name, @NonNull String source) {

        String extension = this.getExtension(name);
        ScriptService service = this.services.get(extension);

        if (service == null) {
            throw new RuntimeException("Cannot find service for extension: " + extension);
        }

        return service.load(name, source);
    }

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
