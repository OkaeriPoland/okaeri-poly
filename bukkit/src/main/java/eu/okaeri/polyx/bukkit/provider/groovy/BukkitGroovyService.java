package eu.okaeri.polyx.bukkit.provider.groovy;

import eu.okaeri.injector.annotation.Inject;
import eu.okaeri.platform.core.annotation.Component;
import eu.okaeri.polyx.bukkit.provider.BukkitScriptHelper;
import eu.okaeri.polyx.bukkit.provider.BukkitScriptService;
import groovy.lang.Binding;
import groovy.lang.GroovyShell;
import lombok.NonNull;
import org.bukkit.plugin.Plugin;

@Component
public class BukkitGroovyService extends BukkitScriptService {

    @Inject
    public BukkitGroovyService(Plugin plugin) {
        super(plugin);
    }

    @Override
    protected BukkitScriptHelper eval(@NonNull String name, @NonNull String source) {

        BukkitGroovyHelper scriptHelper = new BukkitGroovyHelper(this.getPlugin());
        GroovyShell groovyShell = new GroovyShell(new Binding(this.getDefaultBindings(scriptHelper)));

        try {
            groovyShell.evaluate(source);
        }
        catch (Throwable throwable) {
            throw new RuntimeException("Failed script load", throwable);
        }

        return scriptHelper;
    }
}
