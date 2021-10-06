package eu.okaeri.polyx.bukkit.executor;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.bukkit.event.Event;
import org.bukkit.event.Listener;
import org.bukkit.plugin.EventExecutor;

import java.util.function.Consumer;

@RequiredArgsConstructor
public class ScriptEventExecutor<T extends Event> implements EventExecutor, Listener {

    @NonNull private final Consumer<T> consumer;

    @Override
    @SuppressWarnings("unchecked")
    public void execute(Listener listener, Event event) {
        this.consumer.accept((T) event);
    }
}