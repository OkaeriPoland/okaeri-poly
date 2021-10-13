package eu.okaeri.poly.bukkit.provider.panda;

import eu.okaeri.poly.api.bukkit.BukkitScriptHelper;

public class BukkitPandaContext {

    private static BukkitScriptHelper currentScript;

    public static void setCurrentScript(BukkitScriptHelper script) {
        currentScript = script;
    }

    public static BukkitScriptHelper getCurrentScript() {
        return currentScript;
    }
}
