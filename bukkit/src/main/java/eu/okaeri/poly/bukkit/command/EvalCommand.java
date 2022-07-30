package eu.okaeri.poly.bukkit.command;

import eu.okaeri.commands.annotation.Arg;
import eu.okaeri.commands.annotation.Command;
import eu.okaeri.commands.annotation.Executor;
import eu.okaeri.commands.bukkit.annotation.Permission;
import eu.okaeri.commands.service.CommandService;
import eu.okaeri.injector.annotation.Inject;
import eu.okaeri.platform.bukkit.i18n.BI18n;
import eu.okaeri.poly.api.script.ScriptManager;
import eu.okaeri.poly.core.config.PolyConfig;
import eu.okaeri.poly.core.config.PolyMessages;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.Player;

import java.net.InetSocketAddress;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;

@Permission("poly.eval")
@Command(label = "eval", aliases = {">"})
public class EvalCommand implements CommandService {

    @Inject private ScriptManager scriptManager;
    @Inject private PolyConfig config;
    @Inject private BI18n i18n;
    @Inject private PolyMessages messages;

    @Executor(pattern = "*...")
    public String eval(CommandSender sender, @Arg String code) {

        if (!this.config.getEval().isEnabled()) {
            return "Eval not enabled! (see config.yml)";
        }

        if (!this.canAccessEval(sender)) {
            return "You are not allowed to use eval! (see config.yml)";
        }

        Map<String, Object> context = new LinkedHashMap<>();
        context.put("sender", sender);

        if (sender instanceof Player player) {
            context.put("player", player);
            context.put("world", player.getWorld());
        }

        String engine = this.config.getEval().getEngine();
        try {
            Object result = this.scriptManager.eval(engine, code, context);
            return "$> " + result;
        }
        catch (Exception exception) {

            String result = exception.getMessage();
            Throwable cause = exception.getCause();

            if (cause != null) {
                result += " caused by " + cause.getClass().getSimpleName() + ": " + cause.getMessage();
            }

            return "$!> " + result;
        }
    }

    private boolean canAccessEval(CommandSender sender) {

        if (!(sender instanceof Player)) {
            return true;
        }

        Set<String> addressWhitelist = this.config.getEval().getAddressWhitelist();
        if (addressWhitelist.isEmpty()) {
            return true;
        }

        Player player = (Player) sender;
        InetSocketAddress address = player.getAddress();

        if (address == null) {
            return false;
        }

        String strAddress = address.getAddress().getHostAddress();
        return addressWhitelist.contains(strAddress);
    }
}
