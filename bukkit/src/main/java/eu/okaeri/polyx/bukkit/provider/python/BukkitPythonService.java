package eu.okaeri.polyx.bukkit.provider.python;

import eu.okaeri.polyx.bukkit.provider.BukkitScriptHelper;
import eu.okaeri.polyx.bukkit.provider.BukkitScriptService;
import lombok.Cleanup;
import lombok.NonNull;
import org.bukkit.plugin.Plugin;
import org.python.util.PythonInterpreter;

import java.util.Map;

public class BukkitPythonService extends BukkitScriptService {

    public BukkitPythonService(Plugin plugin) {
        super(plugin);
    }

    @Override
    protected BukkitScriptHelper eval(@NonNull String name, @NonNull String source) {

        BukkitPythonHelper scriptHelper = new BukkitPythonHelper(this.getPlugin());
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
