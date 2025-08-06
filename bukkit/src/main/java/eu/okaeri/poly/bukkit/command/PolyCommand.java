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
import lombok.SneakyThrows;
import org.bukkit.command.CommandSender;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Map;

@Permission("poly.admin")
@Command(label = "poly", aliases = {"poly", "script"})
public class PolyCommand implements CommandService {

    private @Inject ScriptManager scriptManager;
    private @Inject BI18n i18n;
    private @Inject PolyMessages messages;
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
        if (this.scriptManager.unload(name)) {
            return "Unloaded script " + name + "!";
        }

        return "No script found for such name!";
    }

    @Executor
    @Permission("poly.admin.list")
    public Audience<?> list(CommandSender sender) {

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
