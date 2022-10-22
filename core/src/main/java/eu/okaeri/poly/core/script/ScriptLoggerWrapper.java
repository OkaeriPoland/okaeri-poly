package eu.okaeri.poly.core.script;

import lombok.NonNull;

import java.util.logging.LogRecord;
import java.util.logging.Logger;

public class ScriptLoggerWrapper extends Logger {

    private final Logger delegate;
    private final String scriptName;

    public ScriptLoggerWrapper(@NonNull Logger delegate, @NonNull String scriptName) {
        super(delegate.getName(), delegate.getResourceBundleName());
        this.delegate = delegate;
        this.scriptName = scriptName;
    }

    @Override
    public void log(LogRecord record) {
        record.setLoggerName(record.getLoggerName() + "/" + this.scriptName);
        this.delegate.log(record);
    }
}
