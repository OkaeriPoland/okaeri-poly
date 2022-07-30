package eu.okaeri.poly.bukkit.provider.groovy;

import eu.okaeri.poly.api.Poly;
import eu.okaeri.poly.api.bukkit.BukkitGroovyScript;
import eu.okaeri.poly.api.script.ScriptHelper;
import eu.okaeri.poly.core.script.ScriptServiceImpl;
import groovy.lang.Binding;
import groovy.lang.GroovyShell;
import lombok.NonNull;
import org.bukkit.plugin.Plugin;
import org.codehaus.groovy.control.CompilerConfiguration;

import java.util.Map;

public class BukkitGroovyServiceImpl extends ScriptServiceImpl {

    public BukkitGroovyServiceImpl(Poly poly) {
        super(poly);
    }

    @Override
    public ScriptHelper exec(@NonNull String name, @NonNull String source) {

        CompilerConfiguration compilerConfiguration = new CompilerConfiguration();
        compilerConfiguration.setScriptBaseClass(BukkitGroovyScript.class.getName());

        ScriptHelper scriptHelper = new BukkitGroovyHelperImpl((Plugin) this.getPoly(), name);
        Map<String, Object> defaultBindings = this.getDefaultBindings(scriptHelper);
        GroovyShell groovyShell = new GroovyShell(new Binding(defaultBindings), compilerConfiguration);

        try {
            BukkitGroovyScript script = (BukkitGroovyScript) groovyShell.parse(source);
            this.updateWithBindings(script, defaultBindings);
            script.run();
        }
        catch (Throwable throwable) {
            throw new RuntimeException("Failed script load", throwable);
        }

        return scriptHelper;
    }

    @Override
    public Object eval(@NonNull String source, @NonNull Map<String, Object> context) {

        ScriptHelper scriptHelper = new BukkitGroovyHelperImpl((Plugin) this.getPoly(), "eval");
        Binding binding = new Binding(this.getDefaultBindings(scriptHelper));
        context.forEach(binding::setVariable);
        GroovyShell groovyShell = new GroovyShell(binding);

        try {
            return groovyShell.evaluate(source);
        }
        catch (Throwable throwable) {
            throw new RuntimeException("Failed script eval", throwable);
        }
    }
}
