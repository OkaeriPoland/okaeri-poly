package eu.okaeri.polyx.bukkit.provider.groovy.executor;

import groovy.lang.Closure;
import lombok.RequiredArgsConstructor;
import org.bukkit.event.Event;
import org.bukkit.event.Listener;
import org.bukkit.plugin.EventExecutor;

@RequiredArgsConstructor
public class ScriptEventExecutor implements EventExecutor, Listener {

    private final Closure<?> closure;

    @Override
    public void execute(Listener listener, Event event) {
        this.closure.call(event);
    }
}