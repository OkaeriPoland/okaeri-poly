package eu.okaeri.poly.bukkit.provider.panda;

import eu.okaeri.poly.api.Poly;
import eu.okaeri.poly.api.bukkit.BukkitScriptHelper;
import eu.okaeri.poly.api.script.ScriptHelper;
import eu.okaeri.poly.bukkit.PolyPlugin;
import eu.okaeri.poly.core.script.ScriptServiceImpl;
import lombok.NonNull;
import org.bukkit.plugin.Plugin;
import panda.interpreter.architecture.Application;
import panda.interpreter.utils.PandaUtils;

import java.io.File;

public class BukkitPandaServiceImpl extends ScriptServiceImpl {

    public BukkitPandaServiceImpl(Poly poly) {
        super(poly);
    }

    @Override
    public ScriptHelper exec(@NonNull String name, @NonNull String source) {

        BukkitScriptHelper scriptHelper = new BukkitPandaHelperImpl((Plugin) this.getPoly(), name);
        BukkitPandaContext.setCurrentScript(scriptHelper);

        File scriptsDir = new File(((PolyPlugin) this.getPoly()).getDataFolder(), "scripts");
        File scriptFile = new File(scriptsDir, name);

        try {
            PandaUtils.load(scriptsDir, scriptFile)
                    .flatMap(Application::launch)
                    .get();
            BukkitPandaContext.setCurrentScript(null);
        }
        catch (Throwable throwable) {
            throw new RuntimeException("Failed script load", throwable);
        }

        return scriptHelper;
    }

    @Override
    public Object eval(@NonNull String source) {
        throw new RuntimeException("Not implemented yet.");
    }
}
