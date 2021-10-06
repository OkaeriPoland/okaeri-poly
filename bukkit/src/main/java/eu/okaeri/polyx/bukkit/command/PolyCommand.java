package eu.okaeri.polyx.bukkit.command;

import eu.okaeri.commands.annotation.Arg;
import eu.okaeri.commands.annotation.Executor;
import eu.okaeri.commands.annotation.ServiceDescriptor;
import eu.okaeri.commands.service.CommandService;
import eu.okaeri.i18n.message.Message;
import eu.okaeri.injector.annotation.Inject;
import eu.okaeri.platform.bukkit.i18n.BI18n;
import eu.okaeri.platform.bukkit.i18n.message.BukkitAudience;
import eu.okaeri.platform.core.i18n.message.Audience;
import eu.okaeri.polyx.core.config.PolyMessages;
import eu.okaeri.polyx.core.script.ScriptManager;
import eu.okaeri.polyx.core.script.ScriptService;
import org.bukkit.command.CommandSender;

import java.util.Map;

@ServiceDescriptor(label = "poly", aliases = {"polyx", "script"})
public class PolyCommand implements CommandService {

    @Inject private ScriptManager scriptManager;
    @Inject private BI18n i18n;
    @Inject private PolyMessages messages;

    @Executor(pattern = "load *")
    public Message load(@Arg String name) {
        return null;
    }

    @Executor(pattern = "unload *")
    public Message unload(@Arg String name) {
        return null;
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
