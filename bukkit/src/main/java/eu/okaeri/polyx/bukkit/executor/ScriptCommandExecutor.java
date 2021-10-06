package eu.okaeri.polyx.bukkit.executor;

import lombok.NonNull;
import org.bukkit.command.Command;
import org.bukkit.command.CommandSender;

import java.util.Arrays;
import java.util.List;
import java.util.function.BiConsumer;

public class ScriptCommandExecutor extends Command {

    private final BiConsumer<CommandSender, List<String>> consumer;

    public ScriptCommandExecutor(@NonNull String label, @NonNull BiConsumer<CommandSender, List<String>> consumer) {
        super(label);
        this.consumer = consumer;
    }

    @Override
    public boolean execute(CommandSender commandSender, String s, String[] strings) {
        this.consumer.accept(commandSender, Arrays.asList(strings));
        return true;
    }
}

