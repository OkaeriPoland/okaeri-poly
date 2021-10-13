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
import panda.interpreter.architecture.Application;
import panda.interpreter.utils.PandaUtils;
import panda.std.Option;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

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

    @Test
    @SneakyThrows
    public void test_basic_panda() {

        Path scriptPath = Paths.get("./target/script.panda");
        Files.writeString(scriptPath,
                "internal type ScriptRunnable : Runnable {\n" +
                        "override run () -> PrimitiveVoid {\n" +
                        " log 'hi'\n" +
                        "}}\n" +
                "main { new ScriptRunnable().run(); return 1 + 1 }"
        );

        Option<Object> application = PandaUtils.load(new File("./target/"), scriptPath.toFile())
                .flatMap(Application::launch)
                .get();

        Object result = application.get();
        assertEquals(2, result);
    }
}
