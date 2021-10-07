package eu.okaeri.poly.bukkit.provider.groovy;

import eu.okaeri.injector.annotation.Inject;
import eu.okaeri.platform.core.annotation.Component;
import eu.okaeri.poly.api.script.ScriptHelper;
import eu.okaeri.poly.bukkit.provider.BukkitScriptServiceImpl;
import groovy.lang.Binding;
import groovy.lang.GroovyShell;
import lombok.NonNull;
import org.bukkit.plugin.Plugin;

@Component
public class BukkitGroovyServiceImpl extends BukkitScriptServiceImpl {

    @Inject
    public BukkitGroovyServiceImpl(Plugin plugin) {
        super(plugin);
    }

    @Override
    public ScriptHelper exec(@NonNull String name, @NonNull String source) {

        ScriptHelper scriptHelper = new BukkitGroovyHelperImpl(this.getPlugin());
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
