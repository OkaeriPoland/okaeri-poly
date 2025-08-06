package eu.okaeri.poly.bukkit.command;

import eu.okaeri.commands.annotation.Arg;
import eu.okaeri.commands.annotation.Command;
import eu.okaeri.commands.annotation.Completion;
import eu.okaeri.commands.annotation.Executor;
import eu.okaeri.commands.bukkit.annotation.Permission;
import eu.okaeri.commands.service.CommandService;
import eu.okaeri.injector.annotation.Inject;
import eu.okaeri.poly.api.script.ScriptHelper;
import eu.okaeri.poly.api.script.ScriptManager;
import eu.okaeri.poly.api.script.ScriptService;
import lombok.SneakyThrows;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Permission("poly.admin")
@Command(label = "poly", aliases = {"script"})
public class PolyCommand implements CommandService {

    private @Inject ScriptManager scriptManager;
    private @Inject Path scriptFolder;

    @SneakyThrows
    @Permission("poly.admin.load")
    @Executor(pattern = "load *...")
    @Completion(arg = "name", value = "@script")
    public String load(@Arg String name) {

        Path path = this.scriptFolder.resolve(Path.of(name));

        if (Files.isDirectory(path)) {
            return "Given path is a directory!";
        }

        if (!Files.isRegularFile(path)) {
            return "No script found for the path: " + path;
        }

        String userFriendlyName = this.scriptFolder.relativize(path).toString();
        ScriptHelper script = this.scriptManager.load(userFriendlyName, Files.readString(path));

        return "Loaded script " + script.getName() + "!";
    }

    @SneakyThrows
    @Permission("poly.admin.unload")
    @Executor(pattern = "unload *...")
    @Completion(arg = "name", value = "@script:loaded")
    public String unload(@Arg String name) {
        return this.scriptManager.unload(name)
            ? "Unloaded script " + name + "!"
            : "No script found for such name!";
    }

    @Executor
    @Permission("poly.admin.list")
    public String list() {
        Map<String, ScriptService> services = this.scriptManager.getServices();
        return Stream.concat(
            Stream.of("Currently running " + services.size() + " backend(s):"),
            services.entrySet().stream().flatMap(entry -> Stream.concat(
                Stream.of("- " + entry.getKey()),
                entry.getValue().getLoadedScripts().stream().map(script -> " > " + script.getName())
            ))
        ).collect(Collectors.joining("\n"));
    }
}
