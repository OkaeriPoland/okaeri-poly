package eu.okaeri.polyxtest;

import groovy.lang.Binding;
import groovy.lang.GroovyShell;
import lombok.Cleanup;
import org.codehaus.groovy.control.CompilerConfiguration;
import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.Source;
import org.graalvm.polyglot.Value;
import org.junit.jupiter.api.Test;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class TestPolyX {

    private static final boolean DEBUG = Boolean.getBoolean("polyx.debug");

    @Test
    public void test_basic_graal_context() throws IOException {

        @Cleanup Context context = Context.newBuilder("js")
                .option("engine.WarnInterpreterOnly", (DEBUG ? "true" : "false"))
                .build();
        context.eval(Source.newBuilder("js", "const a = 1 + 1", "src.js").build());
        Value result = context.getBindings("js").getMember("a");

        Integer integer = result.as(Integer.class);
        assertEquals(2, integer);
    }

    @Test
    public void test_basic_groovy_shell() {

        Binding binding = new Binding();
        CompilerConfiguration configuration = new CompilerConfiguration();

        GroovyShell shell = new GroovyShell(binding, configuration);
        Object result = shell.evaluate("1 + 1");

        Integer integer = (Integer) result;
        assertEquals(2, integer);
    }
}
