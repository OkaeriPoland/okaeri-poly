package eu.okaeri.polyxtest;

import lombok.Cleanup;
import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.Source;
import org.graalvm.polyglot.Value;
import org.junit.jupiter.api.Test;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class TestPolyX {

    static {
        System.setProperty("polyglot.engine.WarnInterpreterOnly", "false");
    }

    @Test
    public void test_basic_graal_context() throws IOException {

        @Cleanup Context context = Context.create();
        context.eval(Source.newBuilder("js", "const a = 1 + 1", "src.js").build());
        Value result = context.getBindings("js").getMember("a");

        Integer integer = result.as(Integer.class);
        assertEquals(2, integer);
    }
}
