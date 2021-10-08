package eu.okaeri.poly.core.script;

import eu.okaeri.poly.api.Poly;
import eu.okaeri.poly.api.script.ScriptHelper;
import eu.okaeri.poly.api.script.ScriptService;
import lombok.*;

import java.lang.reflect.Field;
import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;

@RequiredArgsConstructor
@Getter(AccessLevel.PROTECTED)
public abstract class ScriptServiceImpl implements ScriptService {

    private final Map<String, ScriptHelper> scripts = new LinkedHashMap<>();
    private final Poly poly;

    @Override
    public Map<String, Object> getDefaultBindings(@NonNull ScriptHelper scriptHelper) {
        return this.poly.getDefaultBindings(scriptHelper);
    }

    @Override
    public Set<String> listLoaded() {
        return Collections.unmodifiableSet(this.scripts.keySet());
    }

    @Override
    public ScriptHelper load(@NonNull String name, @NonNull String source) {

        if (this.scripts.containsKey(name)) {
            this.unload(name);
        }

        ScriptHelper scriptHelper = this.exec(name, source);
        this.getScripts().put(name, scriptHelper);
        scriptHelper.callOnLoad();

        return scriptHelper;
    }

    @Override
    public boolean unload(@NonNull String name) {

        if (!this.scripts.containsKey(name)) {
            return false;
        }

        this.scripts.get(name).unregister();
        return this.scripts.remove(name) != null;
    }

    @SneakyThrows
    protected void updateWithBindings(@NonNull Object script, @NonNull Map<String, Object> defaultBindings) {
        for (Field field : script.getClass().getFields()) {

            String fieldName = field.getName();
            Class<?> fieldType = field.getType();

            if (!defaultBindings.containsKey(fieldName)) {
                continue;
            }

            Object newValue = defaultBindings.get(fieldName);
            if (newValue == null || !fieldType.isAssignableFrom(newValue.getClass())) {
                continue;
            }

            field.set(script, newValue);
        }
    }
}
