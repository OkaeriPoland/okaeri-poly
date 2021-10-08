/***
 * Loads (parses and executes) the specified JavaScript source code
 *
 * Source can be of type:
 * - a String: the path of the source file or a URL to execute.
 * - java.lang.URL: the URL is queried for the source code to execute if the js.load-from-url option is set to true.
 * - java.io.File: the file is read for the source code to execute.
 * - a JavaScript object: the object is queried for a name and a script property, which represent the source name and code, respectively.
 * - all other types: the source is converted to a String.
 */
declare function load(script: string | any);

// see more: https://github.com/oracle/graaljs/blob/master/docs/user/JavaScriptCompatibility.md
declare var Java: {
    // loads the specified Java class and provides it as an object
    // fields of this object can be read directly from it, and new instances can be created with the JavaScript new keyword:
    type(className: string): object;
    // creates a shallow copy of the Java datastructure (Array, List) as a JavaScript array
    from(javaData: any): any[];
    // converts the argument to a Java dataype
    to(jsData: any[], toType: any);
    // returns whether obj is an object of the Java language
    // returns false for native JavaScript objects, as well as for objects of other polyglot languages
    isJavaObject(obj: any): boolean
    // returns whether obj is an object of the Java language, representing a Java Class instance
    // returns false for all other arguments
    isType(obj: any): boolean
    // returns the Java Class name of obj
    // note: obj is expected to represent a Java Class instance, i.e., isType(obj) should return true; otherwise, undefined is returned.
    typeName(obj: any): string
    // adds the specified location (file name or path name, as String) to Java's classpath
    addToClasspath(location: string);
}

// see more: https://github.com/oracle/graaljs/blob/master/docs/user/JavaScriptCompatibility.md
declare var Polyglot: {
    // exports the JavaScript value under the name key (a string) to the polyglot bindings:
    export(key: string, value: any);
    // imports the value identified by key (a string) from the polyglot bindings and returns it:
    import(key: string);
    // parses and evaluates the sourceCode with the interpreter identified by languageId
    eval(languageId: string, sourceCode: string | any);
    // parses the file sourceFileName with the interpreter identified by languageId
    evalFile(languageId: string, sourceFileName: string | any)
}
