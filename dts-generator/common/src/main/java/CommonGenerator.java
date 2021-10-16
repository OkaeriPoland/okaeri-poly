import eu.okaeri.tesdeser.DefinitionGenerator;
import lombok.SneakyThrows;

import java.net.http.HttpClient;
import java.net.http.HttpResponse;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class CommonGenerator {

    public DefinitionGenerator defaults() {
        return new DefinitionGenerator()
                // common
                .entrypoint(HttpClient.class)
                .entrypoint(HttpResponse.BodyHandlers.class)
                .entrypoint("eu.okaeri.poly.api.")
                // bukkit
                .entrypoint("org.bukkit.")
                .blacklist("eu.okaeri.poly.api.bukkit.BukkitPythonHelper")
                .blacklist("org.bukkit.plugin.java.LibraryLoader");
    }

    @SneakyThrows
    public void write(String platform, String target, DefinitionGenerator generator) {

        String projectVersion = System.getProperty("poly.version", "1.2.1");
        String javaVersion = System.getProperty("java.version").split("\\.")[0];

        Path targetPath = Paths.get("../target");
        Files.createDirectories(targetPath);

        String dtsName = "okaeri-poly-" + platform + "-api-" + projectVersion + "-jdk" + javaVersion + "-" + target + ".d.ts";
        Files.writeString(targetPath.resolve(dtsName), generator.define());
    }
}
