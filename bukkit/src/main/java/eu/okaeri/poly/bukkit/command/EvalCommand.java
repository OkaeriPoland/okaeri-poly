package eu.okaeri.poly.bukkit.command;

import eu.okaeri.commands.annotation.Arg;
import eu.okaeri.commands.annotation.Command;
import eu.okaeri.commands.annotation.Executor;
import eu.okaeri.commands.bukkit.annotation.Permission;
import eu.okaeri.commands.service.CommandService;
import eu.okaeri.injector.annotation.Inject;
import eu.okaeri.poly.api.script.ScriptManager;
import eu.okaeri.poly.core.config.PolyConfig;
import lombok.Cleanup;
import org.bukkit.command.CommandSender;
import org.bukkit.command.ConsoleCommandSender;
import org.bukkit.command.RemoteConsoleCommandSender;
import org.bukkit.entity.Player;

import java.net.InetSocketAddress;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;

@Permission("poly.eval")
@Command(label = "eval", aliases = {">"})
public class EvalCommand implements CommandService {

    private @Inject ScriptManager scriptManager;
    private @Inject PolyConfig config;

    @Executor(pattern = "*...")
    public String eval(CommandSender sender, @Arg String code) {

        if (!this.config.getEval().isEnabled()) {
            return "Poly's eval is disabled! (see plugins/Poly/config.yml)";
        }

        if ((sender instanceof RemoteConsoleCommandSender remote) && !this.config.getEval().isRemoteConsole()) {
            return "Remote console sender (CRON) eval is disabled! (see plugins/Poly/config.yml)";
        }

        if ((sender instanceof ConsoleCommandSender) && !this.config.getEval().isLocalConsole()) {
            return "Local console sender eval is disabled! (see plugins/Poly/config.yml)";
        }

        if (!this.canAccessEval(sender)) {
            return "You are not allowed to use eval! (see plugins/Poly/config.yml)";
        }

        Map<String, Object> context = new LinkedHashMap<>();
        context.put("sender", sender);

        if (sender instanceof Player player) {
            context.put("player", player);
            context.put("world", player.getWorld());
        }

        if (code.startsWith("http")) {
            if (!this.config.getEval().isUrls()) {
                return "Auto download of scripts is disabled! (see plugins/Poly/config.yml)";
            }
            try {
                @Cleanup HttpClient client = HttpClient.newHttpClient();
                code = client
                    .send(
                        HttpRequest.newBuilder(URI.create(code))
                            .header("User-Agent", "Poly/1.3.0")
                            .GET()
                            .build(),
                        HttpResponse.BodyHandlers.ofString()
                    )
                    .body();
            }
            catch (Exception e) {
                return "$!> Failed to fetch script from URL: " + e.getMessage();
            }
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

        if (!(sender instanceof Player player)) {
            return true;
        }

        Set<String> addressWhitelist = this.config.getEval().getAddressWhitelist();
        if (addressWhitelist.isEmpty()) {
            return true;
        }

        InetSocketAddress address = player.getAddress();
        if (address == null) {
            return false;
        }

        String strAddress = address.getAddress().getHostAddress();
        return addressWhitelist.contains(strAddress);
    }
}
