package eu.okaeri.poly.core.graal;

import eu.okaeri.poly.api.Poly;
import eu.okaeri.poly.api.script.ScriptHelper;
import eu.okaeri.poly.core.script.ScriptServiceImpl;
import lombok.NonNull;
import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.HostAccess;
import org.graalvm.polyglot.Source;
import org.graalvm.polyglot.Value;

import java.util.Map;

public abstract class GraalScriptService extends ScriptServiceImpl {

    private static final boolean DEBUG = Boolean.getBoolean("poly.debug");

    public final String languageId;

    public GraalScriptService(@NonNull Poly poly, @NonNull String languageId) {
        super(poly);
        this.languageId = languageId;
    }

    protected abstract ScriptHelper createScriptHelper(@NonNull Context context, @NonNull String scriptName);

    protected Context createContext() {
        return Context.newBuilder(languageId)
            .option("engine.WarnInterpreterOnly", (DEBUG ? "true" : "false"))
            .allowHostClassLookup(className -> true)
            .allowHostAccess(HostAccess.ALL)
            .build();
    }

    @Override
    public ScriptHelper exec(@NonNull String name, @NonNull String source) {

        Context context = this.createContext();
        ScriptHelper scriptHelper = this.createScriptHelper(context, name);

        Value bindings = context.getBindings(languageId);
        this.getDefaultBindings(scriptHelper).forEach(bindings::putMember);

        try {
            context.eval(Source.newBuilder(languageId, source, name).build());
        }
        catch (Throwable throwable) {
            throw new RuntimeException("Failed script eval", throwable);
        }

        return scriptHelper;
    }

    @Override
    public Object eval(@NonNull String source, @NonNull Map<String, Object> context) {

        Context graalContext = this.createContext();
        ScriptHelper scriptHelper = this.createScriptHelper(graalContext, "eval");

        Value bindings = graalContext.getBindings(languageId);
        this.getDefaultBindings(scriptHelper).forEach(bindings::putMember);
        context.forEach(bindings::putMember);

        try {
            return graalContext.eval(Source.newBuilder(languageId, source, "script." + languageId).build());
        }
        catch (Throwable throwable) {
            throw new RuntimeException("Failed script eval", throwable);
        }
    }
}
