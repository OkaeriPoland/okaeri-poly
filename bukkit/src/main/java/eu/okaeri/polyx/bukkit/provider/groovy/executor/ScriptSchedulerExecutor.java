package eu.okaeri.polyx.bukkit.provider.groovy.executor;

import groovy.lang.Closure;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class ScriptSchedulerExecutor implements Runnable {

    private final Closure<?> closure;

    @Override
    public void run() {
        this.closure.call();
    }
}
