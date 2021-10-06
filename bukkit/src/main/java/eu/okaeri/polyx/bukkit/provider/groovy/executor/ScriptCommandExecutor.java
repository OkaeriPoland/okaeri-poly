package eu.okaeri.polyx.bukkit.provider.groovy.executor;

import groovy.lang.Closure;
import org.bukkit.command.Command;
import org.bukkit.command.CommandSender;

import java.util.Arrays;

public class ScriptCommandExecutor extends Command {

    private final Closure<?> closure;

    public ScriptCommandExecutor(String label, Closure<?> closure) {
        super(label);
        this.closure = closure;
    }

    @Override
    public boolean execute(CommandSender commandSender, String s, String[] strings) {
        this.closure.call(commandSender, Arrays.asList(strings));
        return true;
    }
}

