package eu.okaeri.poly.bukkit.provider.graal;

import eu.okaeri.poly.api.Poly;
import eu.okaeri.poly.api.script.ScriptHelper;
import eu.okaeri.poly.core.graal.GraalScriptService;
import lombok.NonNull;
import org.bukkit.plugin.Plugin;
import org.graalvm.polyglot.Context;

public class BukkitGraalServiceImpl extends GraalScriptService {

    public BukkitGraalServiceImpl(@NonNull Poly poly, @NonNull String languageId) {
        super(poly, languageId);
    }

    @Override
    protected ScriptHelper createScriptHelper(@NonNull Context context, @NonNull String scriptName) {
        return new BukkitGraalHelperImpl((Plugin) this.getPoly(), scriptName, context);
    }
}
