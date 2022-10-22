package eu.okaeri.poly.bukkit.command;

import eu.okaeri.commands.annotation.Arg;
import eu.okaeri.commands.annotation.Command;
import eu.okaeri.commands.annotation.Completion;
import eu.okaeri.commands.annotation.Executor;
import eu.okaeri.commands.bukkit.annotation.Permission;
import eu.okaeri.commands.service.CommandService;
import eu.okaeri.injector.annotation.Inject;
import eu.okaeri.platform.bukkit.i18n.BI18n;
import eu.okaeri.platform.bukkit.i18n.message.BukkitAudience;
import eu.okaeri.platform.core.i18n.message.Audience;
import eu.okaeri.poly.api.script.ScriptHelper;
import eu.okaeri.poly.api.script.ScriptManager;
import eu.okaeri.poly.api.script.ScriptService;
import eu.okaeri.poly.core.config.PolyMessages;
import lombok.Cleanup;
import lombok.SneakyThrows;
import org.bukkit.command.CommandSender;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Stream;

@Permission("poly.admin")
@Command(label = "poly", aliases = {"poly", "script"})
public class PolyCommand implements CommandService {

    private @Inject ScriptManager scriptManager;
    private @Inject BI18n i18n;
    private @Inject PolyMessages messages;
    private @Inject Path scriptFolder;

    @Executor
    @SneakyThrows
    @Permission("poly.admin.load")
    @Completion(arg = "name", value = "@unloadedscripts")
    public String load(@Arg String name) {

        @Cleanup Stream<Path> scriptStream = Files.list(this.scriptFolder);
        Optional<Path> pathOptional = scriptStream
            .filter(path -> path.getFileName().toString().startsWith(name))
            .findAny();

        if (pathOptional.isEmpty()) {
            return "No script found found for such name!";
        }

        Path path = pathOptional.get();
        ScriptHelper script = this.scriptManager.load(path);

        return "Loaded script " + script.getName() + "!";
    }

    @Executor
    @SneakyThrows
    @Permission("poly.admin.unload")
    @Completion(arg = "name", value = "@loadedscripts")
    public String unload(@Arg String name) {

        @Cleanup Stream<Path> scriptStream = Files.list(this.scriptFolder);
        String scriptName = scriptStream
            .map(Path::getFileName)
            .map(Path::toString)
            .filter(fileName -> fileName.startsWith(name))
            .findAny()
            .orElse(name);

        if (this.scriptManager.unload(scriptName)) {
            return "Unloaded script " + scriptName + "!";
        }

        return "No script found for such name!";
    }

    @Executor
    @Permission("poly.admin.list")
    public Audience list(CommandSender sender) {

        BukkitAudience audience = BukkitAudience.of(sender);
        Map<String, ScriptService> services = this.scriptManager.getServices();

        audience.accept(this.i18n.get(this.messages.getCommandListServices())
            .with("backends", services.size()));

        for (Map.Entry<String, ScriptService> entry : services.entrySet()) {

            audience.accept(this.i18n.get(this.messages.getCommandListService())
                .with("backend", entry.getKey()));

            for (String loadedScript : entry.getValue().listLoaded()) {
                audience.accept(this.i18n.get(this.messages.getCommandListScript())
                    .with("script", loadedScript));
            }
        }

        return audience;
    }
}
