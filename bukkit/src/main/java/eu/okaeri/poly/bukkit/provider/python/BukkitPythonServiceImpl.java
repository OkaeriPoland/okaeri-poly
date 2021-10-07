package eu.okaeri.poly.bukkit.provider.python;

import eu.okaeri.poly.api.script.ScriptHelper;
import eu.okaeri.poly.bukkit.provider.BukkitScriptServiceImpl;
import lombok.Cleanup;
import lombok.NonNull;
import org.bukkit.plugin.Plugin;
import org.python.util.PythonInterpreter;

import java.util.Map;

public class BukkitPythonServiceImpl extends BukkitScriptServiceImpl {

    public BukkitPythonServiceImpl(Plugin plugin) {
        super(plugin);
    }

    @Override
    public ScriptHelper exec(@NonNull String name, @NonNull String source) {

        ScriptHelper scriptHelper = new BukkitPythonHelperImpl(this.getPlugin());
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
}
