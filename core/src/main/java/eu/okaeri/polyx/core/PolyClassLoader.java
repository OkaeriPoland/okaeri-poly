package eu.okaeri.polyx.core;

import java.net.URL;
import java.net.URLClassLoader;

public class PolyClassLoader extends URLClassLoader {

    public PolyClassLoader(URL[] urls, ClassLoader parent) {
        super(urls, parent);
    }
}
