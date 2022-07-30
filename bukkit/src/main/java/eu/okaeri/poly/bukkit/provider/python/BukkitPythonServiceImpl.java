package eu.okaeri.poly.bukkit.provider.python;

import eu.okaeri.poly.api.Poly;
import eu.okaeri.poly.api.script.ScriptHelper;
import eu.okaeri.poly.core.script.ScriptServiceImpl;
import lombok.Cleanup;
import lombok.NonNull;
import org.bukkit.plugin.Plugin;
import org.python.util.PythonInterpreter;

import java.util.Map;

public class BukkitPythonServiceImpl extends ScriptServiceImpl {

    public BukkitPythonServiceImpl(Poly poly) {
        super(poly);
    }

    @Override
    public ScriptHelper exec(@NonNull String name, @NonNull String source) {

        ScriptHelper scriptHelper = new BukkitPythonHelperImpl((Plugin) this.getPoly(), name);
        @Cleanup PythonInterpreter python = new PythonInterpreter();

        Map<String, Object> bindings = this.getDefaultBindings(scriptHelper);
        bindings.forEach(python::set);

        try {
            python.exec(source);
        }
        catch (Throwable throwable) {
            throw new RuntimeException("Failed script load", throwable);
        }

        return scriptHelper;
    }

    @Override
    public Object eval(@NonNull String source, @NonNull Map<String, Object> context) {

        ScriptHelper scriptHelper = new BukkitPythonHelperImpl((Plugin) this.getPoly(), "eval");
        @Cleanup PythonInterpreter python = new PythonInterpreter();

        Map<String, Object> bindings = this.getDefaultBindings(scriptHelper);
        bindings.forEach(python::set);
        context.forEach(python::set);

        try {
            // limited capability and weird return type
            // not sure if usable in the command form
            return python.eval(source);
        }
        catch (Throwable throwable) {
            throw new RuntimeException("Failed script eval", throwable);
        }
    }
}
