package eu.okaeri.poly.core.config;

import eu.okaeri.configs.OkaeriConfig;
import eu.okaeri.configs.annotation.Comment;
import eu.okaeri.configs.annotation.TargetType;
import eu.okaeri.configs.annotation.Variable;
import eu.okaeri.platform.core.annotation.Configuration;
import lombok.Getter;

import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Configuration
public class PolyConfig extends OkaeriConfig {

    @Comment("Eval command settings")
    @Comment("Command permission: poly.eval")
    @Comment("Command aliases: /eval, />")
    private EvalConfig eval = new EvalConfig();

    @Getter
    public static class EvalConfig extends OkaeriConfig {

        @Variable("POLY_EVAL_ENABLED")
        @Comment("Should eval command be enabled?")
        @Comment("This feature is a potential security hole")
        @Comment("and can allow knowledgeable attacker")
        @Comment("to execute any arbitrary code/scripts.")
        private boolean enabled = false;

        @TargetType(LinkedHashSet.class)
        @Variable("POLY_EVAL_ADDRESS_WHITELIST")
        @Comment("Which IP addresses should be allowed to use eval?")
        @Comment("You shouldn't but you can leave this list empty to allow all addresses.")
        private Set<String> addressWhitelist = Set.of("127.0.0.1");

        @Variable("POLY_EVAL_ENGINE")
        @Comment("Which scripting engine should be used for eval?")
        @Comment("Available: groovy (recommended), js")
        private String engine = "groovy";
    }
}
