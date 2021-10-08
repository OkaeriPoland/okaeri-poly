package eu.okaeri.poly.api.script;

public interface ScriptHelper {

    String getName();

    void callOnLoad();

    void callOnUnload();

    void unregister();
}
