import eu.okaeri.poly.api.bukkit.BukkitScriptHelper;
import eu.okaeri.tesdeser.DefinitionGenerator;
import org.bukkit.Server;
import org.bukkit.plugin.java.JavaPlugin;

import java.util.logging.Logger;

public class CommonBukkitGenerator extends CommonGenerator {

    @Override
    public DefinitionGenerator defaults() {
        return super.defaults()
                .variable("script", BukkitScriptHelper.class)
                .variable("plugin", JavaPlugin.class)
                .variable("logger", Logger.class)
                .variable("server", Server.class);
    }
}
