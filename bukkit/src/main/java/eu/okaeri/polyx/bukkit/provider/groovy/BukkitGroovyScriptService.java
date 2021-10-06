package eu.okaeri.polyx.bukkit.provider.groovy;

import eu.okaeri.injector.annotation.Inject;
import eu.okaeri.platform.core.annotation.Component;
import eu.okaeri.polyx.core.script.ScriptService;
import groovy.lang.Binding;
import groovy.lang.GroovyShell;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.bukkit.event.HandlerList;
import org.bukkit.plugin.Plugin;
import org.bukkit.scheduler.BukkitTask;
import org.codehaus.groovy.control.CompilerConfiguration;
import org.codehaus.groovy.control.customizers.ImportCustomizer;

import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;

@Component
@RequiredArgsConstructor(onConstructor = @__(@Inject))
public class BukkitGroovyScriptService implements ScriptService {

    private final Plugin plugin;
    private final Map<String, BukkitGroovyScriptHelper> scripts = new LinkedHashMap<>();

    @Override
    public Set<String> listLoaded() {
        return Collections.unmodifiableSet(scripts.keySet());
    }

    @Override
    public void load(@NonNull String name, @NonNull String source) {

        if (this.unload(name)) {
            this.plugin.getLogger().info("Unloaded '" + name + "' before loading again.");
        }

        BukkitGroovyScriptHelper scriptHelper = new BukkitGroovyScriptHelper(this.plugin);
        GroovyShell groovyShell = this.getShell(scriptHelper);

        try {
            groovyShell.evaluate(source);
        } catch (Throwable throwable) {
            throw new RuntimeException("Failed script load", throwable);
        }

        this.scripts.put(name, scriptHelper);
        this.plugin.getLogger().info("The script '" + name + "' was loaded.");
    }

    @Override
    public boolean unload(@NonNull String name) {

        if (!this.scripts.containsKey(name)) {
            return false;
        }

        BukkitGroovyScriptHelper scriptHelper = this.scripts.get(name);
        HandlerList.unregisterAll(scriptHelper.getScriptEventListener());
        scriptHelper.getScriptTasks().forEach(BukkitTask::cancel);
        scriptHelper.getScriptChannelListeners().forEach(executor -> this.plugin.getServer().getMessenger().unregisterIncomingPluginChannel(this.plugin, executor.getChannelName(), executor));
        scriptHelper.getScriptCommands().forEach(command -> {
            // TODO: unregister
        });

        return true;
    }

    private GroovyShell getShell(@NonNull BukkitGroovyScriptHelper scriptHelper) {

        Binding binding = new Binding();
        binding.setVariable("script", scriptHelper);
        binding.setVariable("plugin", this.plugin);
        binding.setVariable("server", this.plugin.getServer());

        ImportCustomizer importCustomizer = new ImportCustomizer();
        // TODO: default imports [?]

        CompilerConfiguration configuration = new CompilerConfiguration();
        configuration.addCompilationCustomizers(importCustomizer);

        return new GroovyShell(binding, configuration);
    }
}
