package eu.okaeri.polytest;

import groovy.lang.Binding;
import groovy.lang.GroovyShell;
import lombok.Cleanup;
import lombok.SneakyThrows;
import org.codehaus.groovy.control.CompilerConfiguration;
import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.Source;
import org.graalvm.polyglot.Value;
import org.junit.jupiter.api.Test;
import org.python.core.PyObject;
import org.python.util.PythonInterpreter;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class TestPoly {

    private static final boolean DEBUG = Boolean.getBoolean("poly.debug");

    @Test
    @SneakyThrows
    public void test_basic_graal_context() {

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

    @Test
    @SneakyThrows
    public void test_basic_jython() {

        @Cleanup PythonInterpreter python = new PythonInterpreter();
        PyObject result = python.eval("1 + 1");

        int integer = result.asInt();
        assertEquals(2, integer);
    }
}
