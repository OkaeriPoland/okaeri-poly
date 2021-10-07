package eu.okaeri.poly.core.config;

import eu.okaeri.i18n.configs.LocaleConfig;
import eu.okaeri.platform.core.annotation.Messages;
import lombok.Getter;

@Getter
@Messages
public class PolyMessages extends LocaleConfig {
    private String commandListServices = "Currently running {backends} {backend,backends#backends}:";
    private String commandListService = "- {backend}";
    private String commandListScript = " > {script}";
}
