package eu.okaeri.poly.core;

import lombok.NonNull;

import java.net.URL;
import java.net.URLClassLoader;

public class PolyClassLoader extends URLClassLoader {

    public PolyClassLoader(@NonNull URL[] urls, @NonNull ClassLoader parent) {
        super(urls, parent);
    }
}
