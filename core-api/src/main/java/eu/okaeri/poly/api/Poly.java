package eu.okaeri.poly.api;

import eu.okaeri.poly.api.script.ScriptHelper;
import eu.okaeri.poly.api.script.ScriptManager;

import java.util.Map;

public interface Poly {

    ScriptManager getScriptManager();

    Map<String, Object> getDefaultBindings(ScriptHelper scriptHelper);
}
