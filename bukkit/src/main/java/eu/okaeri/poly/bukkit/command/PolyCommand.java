package eu.okaeri.poly.bukkit.command;

import eu.okaeri.commands.annotation.Arg;
import eu.okaeri.commands.annotation.Executor;
import eu.okaeri.commands.annotation.ServiceDescriptor;
import eu.okaeri.commands.service.CommandService;
import eu.okaeri.i18n.message.Message;
import eu.okaeri.injector.annotation.Inject;
import eu.okaeri.platform.bukkit.i18n.BI18n;
import eu.okaeri.platform.bukkit.i18n.message.BukkitAudience;
import eu.okaeri.platform.core.i18n.message.Audience;
import eu.okaeri.poly.api.script.ScriptManager;
import eu.okaeri.poly.api.script.ScriptService;
import eu.okaeri.poly.core.config.PolyMessages;
import lombok.SneakyThrows;
import org.bukkit.command.CommandSender;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Map;
import java.util.Optional;

@ServiceDescriptor(label = "poly", aliases = {"poly", "script"})
public class PolyCommand implements CommandService {

    @Inject private ScriptManager scriptManager;
    @Inject private BI18n i18n;
    @Inject private PolyMessages messages;
    @Inject private Path scriptFolder;

    @SneakyThrows
    @Executor(pattern = "load *")
    public Message load(@Arg String name) {

        Optional<Path> pathOptional = Files.list(this.scriptFolder)
                .filter(path -> path.getFileName().toString().startsWith(name))
                .findAny();

        if (pathOptional.isEmpty()) {
            return Message.of("No script found found for such name!");
        }

        Path path = pathOptional.get();
        this.scriptManager.load(path);

        return Message.of("Loaded script " + path + "!");
    }

    @Executor(pattern = "unload *")
    public Message unload(@Arg String name) {

        if (this.scriptManager.unload(name)) {
            return Message.of("Script unloaded!");
        }

        return Message.of("No script found for such name!");
    }

    @Executor
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
