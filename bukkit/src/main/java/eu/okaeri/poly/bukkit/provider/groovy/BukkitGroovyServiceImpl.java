package eu.okaeri.poly.bukkit.provider.groovy;

import eu.okaeri.poly.api.Poly;
import eu.okaeri.poly.api.script.ScriptHelper;
import eu.okaeri.poly.core.script.ScriptServiceImpl;
import groovy.lang.Binding;
import groovy.lang.GroovyShell;
import lombok.NonNull;
import org.bukkit.plugin.Plugin;

public class BukkitGroovyServiceImpl extends ScriptServiceImpl {

    public BukkitGroovyServiceImpl(Poly poly) {
        super(poly);
    }

    @Override
    public ScriptHelper exec(@NonNull String name, @NonNull String source) {

        ScriptHelper scriptHelper = new BukkitGroovyHelperImpl((Plugin) this.getPoly());
        GroovyShell groovyShell = new GroovyShell(new Binding(this.getDefaultBindings(scriptHelper)));

        try {
            groovyShell.evaluate(source);
        }
        catch (Throwable throwable) {
            throw new RuntimeException("Failed script load", throwable);
        }

        return scriptHelper;
    }

    @Override
    public Object eval(@NonNull String source) {

        ScriptHelper scriptHelper = new BukkitGroovyHelperImpl((Plugin) this.getPoly());
        GroovyShell groovyShell = new GroovyShell(new Binding(this.getDefaultBindings(scriptHelper)));

        try {
            return groovyShell.evaluate(source);
        }
        catch (Throwable throwable) {
            throw new RuntimeException("Failed script eval", throwable);
        }
    }
}
