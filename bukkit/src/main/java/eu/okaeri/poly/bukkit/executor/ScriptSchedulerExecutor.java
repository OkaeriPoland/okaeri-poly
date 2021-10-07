package eu.okaeri.poly.bukkit.executor;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class ScriptSchedulerExecutor implements Runnable {

    @NonNull private final Runnable runnable;

    @Override
    public void run() {
        this.runnable.run();
    }
}
