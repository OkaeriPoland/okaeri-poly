package eu.okaeri.polytest;

import groovy.lang.Binding;
import groovy.lang.GroovyShell;
import org.codehaus.groovy.control.CompilerConfiguration;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class TestPoly {

    private static final boolean DEBUG = Boolean.getBoolean("poly.debug");

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
