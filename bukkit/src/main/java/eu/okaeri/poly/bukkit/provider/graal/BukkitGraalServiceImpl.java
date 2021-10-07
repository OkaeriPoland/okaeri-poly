package eu.okaeri.poly.bukkit.provider.graal;

import eu.okaeri.poly.api.Poly;
import eu.okaeri.poly.api.script.ScriptHelper;
import eu.okaeri.poly.core.graal.GraalScriptService;
import org.bukkit.plugin.Plugin;
import org.graalvm.polyglot.Context;

public class BukkitGraalServiceImpl extends GraalScriptService {

    public BukkitGraalServiceImpl(Poly poly, String languageId) {
        super(poly, languageId);
    }

    @Override
    protected ScriptHelper createScriptHelper(Context context) {
        return new BukkitGraalHelperImpl((Plugin) this.getPoly(), context);
    }
}
