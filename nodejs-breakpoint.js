/* NODE.JS BREAKDOWN */

const title = "JavaScript Breakdown";
console.log(title);

/* 1. Node.js Introduction */

{
  // 1.1. What is Node.js: Node.js is an open source, cross-platform runtime environment and library that is used for running web applications outside the client’s browser. It is used for server-side programming, and primarily deployed for non-blocking, event-driven servers, such as traditional web sites and back-end API services, but was originally designed with real-time, push-based architectures in mind. Every browser has its own version of a JS engine, and node.js is built on Google Chrome’s V8 JavaScript engine. Official sites:  https://nodejs.org/en/ - https://nodejs.org/docs/latest/api/
  // 1.2. Why to use Node.js: Node.js is a cross-platform runtime, perfect for a wide range of use cases. Its huge community makes it easy to get started. It uses the V8 engine to compile JavaScript and runs at lightning-fast speeds. Node.js applications are very scalable and maintainable. Cross-platform support allows the creation of all kinds of applications - desktop apps, software as a service, and even mobile applications. Node.js is perfect for data-intensive and real-time applications since it uses an event-driven, non-blocking I/O model, making it lightweight and efficient. With such a huge community, a vast collection of Node.js packages is available to simplify and boost development.
  // 1.3. History of Node.js: Node.js was written initially by Ryan Dahl in 2009, about thirteen years after the introduction of the first server-side JavaScript environment, Netscape’s LiveWire Pro Web. The initial release supported only Linux and macOS X. Its development and maintenance were led by Dahl and later sponsored by Joyent. In 2011, Node.js was forked into a separate project called io.js, which was later merged back into the main Node.js project. The Node.js Foundation was created in 2015 to support the development of Node.js and to promote its use. In 2019, the Node.js Foundation merged with the JS Foundation to form the OpenJS Foundation, which now oversees the development of Node.js and other JavaScript projects.
  // 1.4. Nodejs vs Browser: Both the browser and Node.js use JavaScript as their programming language. Building apps that run in the browser is entirely different than building a Node.js application. Even though it's always JavaScript, some key differences make the experience radically different.
  // 1.5. Differences between Node.js and the Browser:
  // 1.5.1. Environment: Node.js is a server-side environment, while the browser is a client-side environment.
  // 1.5.2. Global Object: In Node.js, the global object is called global, while in the browser, it is called window.
  // 1.5.3. Modules: Node.js uses CommonJS modules, while the browser uses ES6 modules.
  // 1.5.4. File System: Node.js has access to the file system, while the browser does not.
  // 1.5.5. APIs: Node.js has access to a wide range of APIs, while the browser has a limited set of APIs.
  // 1.5.6. Event Loop: Node.js has a single-threaded event loop, while the browser has a multi-threaded event loop.
  // 1.5.7. Networking: Node.js has built-in support for networking, while the browser does not.
  // 1.5.8. Performance: Node.js is generally faster than the browser because it is optimized for server-side applications.
  // 1.5.9. Security: Node.js is less secure than the browser because it has access to the file system and other system resources.
  // 1.5.10. Debugging: Node.js has built-in debugging tools, while the browser has limited debugging tools.
  // 1.5.11. Package Management: Node.js has a built-in package manager (npm), while the browser does not have a built-in package manager.
  // 1.5.12. Asynchronous Programming: Node.js uses asynchronous programming, while the browser uses synchronous programming.
  // 1.5.13. Event Handling: Node.js uses event-driven programming, while the browser uses event-based programming.
  // 1.5.14. Error Handling: Node.js uses try-catch for error handling, while the browser uses window.onerror.
  // 1.5.15. Debugging: Node.js has built-in debugging tools, while the browser has limited debugging tools.
  // 1.5.16. Testing: Node.js has built-in testing tools, while the browser has limited testing tools.
  // 1.5.17. Deployment: Node.js applications are deployed on servers, while browser applications are deployed on client machines.
  // 1.5.18. Scalability: Node.js applications are more scalable than browser applications because they can handle a large number of concurrent connections.
  // 1.5.19. Community: Node.js has a large and active community, while the browser has a smaller community.
  // 1.5.20. Learning Curve: Node.js has a steeper learning curve than the browser because it requires knowledge of server-side programming concepts.

}

/* 2. Modules */
 {
    // 2.1. We split our code into different files to maintain, organize and reuse code whenever possible. A module system allows us to split and include code and import code written by other developers whenever required. In simple terms, a module is nothing but a JavaScript file. Node.js has many built-in modules that are part of the platform and comes with Node.js installation, for example, HTTP, fs, path, and more.

    // 2.2. CommonJS: Node.js uses the CommonJS module system. It is a standard for structuring JavaScript code into reusable modules. It allows developers to create modules that can be imported and used in other modules. The CommonJS module system uses the require() function to import modules and the module.exports object to export modules. In Node.js, each file is treated as a separate module. For example, consider a file named foo.js:

    // foo.js
    const foo = () => {
        console.log("Hello from foo!");
    };
    module.exports = foo;

    // In another file, we can import the foo module using the require() function:
    // main.js
    const foo = require("./foo.js");
    foo(); // Output: Hello from foo!

    // 2.3. ES6 Modules: ES6 (ECMAScript 2015) introduced a new module system that is now widely used in modern JavaScript development. It uses the import and export keywords to define modules. The ES6 module system is more flexible and powerful than the CommonJS module system. In Node.js, we can use ES6 modules by using the --experimental-modules flag or by using the .mjs file extension.
    // For example, consider a file named foo.mjs:
    // foo.mjs
    // export const foo2 = () => {
    //     console.log("Hello from foo!");
    // };

    // In another file, we can import the foo module using the import statement:
    // main.mjs
    // import { foo2 } from "./foo.mjs";
    // foo2(); // Output: Hello from foo!

    // 2.4. Node.js Built-in Modules: Node.js comes with a set of built-in modules that provide various functionalities. Some of the most commonly used built-in modules are:

    // 2.4.1. fs: The fs module provides an API for interacting with the file system. It allows us to read and write files, create directories, and perform other file system operations.
    const fs = require("fs");
    const filePath = "./example.txt";
    fs.writeFileSync(filePath, "Hello, World!"); // Create a file and write to it

    // 2.4.2. http: The http module provides an API for creating HTTP servers and clients. It allows us to create web servers and make HTTP requests.
    const http = require("http");
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("Hello, World!\n");
    });
    server.listen(3000, () => {
        console.log("Server running at http://localhost:3000/");
    });

    // 2.4.3. path: The path module provides utilities for working with file and directory paths. It allows us to manipulate file paths and resolve relative paths.
    const path = require("path");
    const filePath2 = path.join(__dirname, "example.txt");
    console.log("File path:", filePath2); // Output: File path: /path/to/example.txt

    // 2.4.4. os: The os module provides information about the operating system. It allows us to get information about the system's CPU, memory, and network interfaces.
    const os = require("os");
    console.log("OS type:", os.type()); // Output: OS type: Linux
    console.log("OS platform:", os.platform()); // Output: OS platform: linux
    console.log("OS architecture:", os.arch()); // Output: OS architecture: x64
    console.log("Total memory:", os.totalmem()); // Output: Total memory: 16777216000
    console.log("Free memory:", os.freemem()); // Output: Free memory: 1234567890
    console.log("CPU info:", os.cpus()); // Output: CPU info: [ { model: 'Intel(R) Core(TM) i7-8565U CPU @ 1.80GHz', speed: 1800, times: { user: 123456, nice: 0, sys: 123456, idle: 123456, irq: 123456 } }, ... ]
 }

 /* 3. npm */

 {
    // 3.1 What is npm: npm is the standard package manager for Node.js.
    // It is two things: first and foremost, it is an online repository for the publishing of open-source Node.js projects; second, it is a command-line utility for interacting with said repository that aids in package installation, version management, and dependency management. A plethora of Node.js libraries and applications are published on npm, and many more are added every day. npm is the default package manager for the JavaScript runtime environment Node.js. It is written entirely in JavaScript and is itself a Node.js application. npm is included with Node.js by default, so you don't need to install it separately.

    // 3.2 Installing packages with npm: To install a package, you can use the npm install command followed by the package name. For example, to install the express package, you can run the following command:
    // npm install express
    // This will install the express package and add it to your project's dependencies in the package.json file.
    // You can also install a package globally by using the -g flag. For example, to install the nodemon package globally, you can run the following command:
    // npm install -g nodemon
    // This will install the nodemon package globally, allowing you to use it from anywhere on your system.
    // You can also install a specific version of a package by specifying the version number. For example, to install version 4.17.1 of the express package, you can run the following command:
    // npm install express@4.17.1
    // This will install version 4.17.1 of the express package and add it to your project's dependencies in the package.json file.
    // You can also install multiple packages at once by separating the package names with a space. For example, to install the express and mongoose packages, you can run the following command:
    // npm install express mongoose
    // This will install both the express and mongoose packages and add them to your project's dependencies in the package.json file.
    // You can also install packages from a Git repository by specifying the repository URL. For example, to install the express package from a Git repository, you can run the following command:
    // npm install git+
    //github.com:expressjs/express.git
    // This will install the express package from the specified Git repository and add it to your project's dependencies in the package.json file.
    // You can also install packages from a tarball by specifying the tarball URL. For example, to install the express package from a tarball, you can run the following command:
    // npm install https://registry.npmjs.org/express/-/express-4.17.1.tgz
    // This will install the express package from the specified tarball and add it to your project's dependencies in the package.json file.

    // 3.3 Uninstalling packages with npm: To uninstall a package, you can use the npm uninstall command followed by the package name. For example, to uninstall the express package, you can run the following command:
    // npm uninstall express
    // This will uninstall the express package and remove it from your project's dependencies in the package.json file.
    // You can also uninstall multiple packages at once by separating the package names with a space. For example, to uninstall the express

    // npx: npx is a very powerful command that's been available in npm starting version 5.2, released in July 2017. If you don't want to install npm, you can install npx as a standalone package. npx lets you run code built with Node.js and published through the npm registry, without needing to install the package itself. This is particularly useful for trying out new tools, running one-time commands, or using packages in shared environments where global installations are undesirable. npx takes care of downloading the package on-the-fly, running the desired command, and then cleaning up the temporary installation. This keeps your project's dependencies lean and avoids version conflicts.

    // Semantic versioning: Semantic versioning (semver) is a versioning scheme for software that uses a three-part version number: MAJOR.MINOR.PATCH. The MAJOR version is incremented when there are incompatible changes, the MINOR version is incremented when new features are added in a backwards-compatible manner, and the PATCH version is incremented when backwards-compatible bug fixes are introduced. For example, if a package has a version number of 1.2.3, it means that it has had 1 major release, 2 minor releases, and 3 patch releases.
    // The version number is usually specified in the package.json file, which is a JSON file that contains metadata about the package, including its name, version, description, and dependencies. The version number is specified in the "version" field of the package.json file. For example:
    // {
    //     "name": "my-package",
    //     "version": "1.2.3",
    //     "description": "My package description",
    //     "dependencies": {
    //         "express": "^4.17.1"
    //     }
    // }
 }

 /* 4. Error Handling */
{
    // 4.1. Error handling is an important aspect of programming that allows developers to handle unexpected situations and prevent crashes in their applications. In Node.js, there are several ways to handle errors, including using try-catch blocks, error events, and error handling middleware.

    // 4.2. Try-Catch Blocks: The try-catch statement is used to handle exceptions in JavaScript. It allows you to catch errors that occur in a block of code and handle them gracefully. For example:
    try {
        const result = riskyFunction(); // This function may throw an error
        console.log("Result:", result);
    } catch (error) {
        console.error("Error:", error.message); // Handle the error
    }

    // 4.3. Error Events: Node.js provides an event-driven architecture, and many built-in modules emit error events when an error occurs. You can listen for these events and handle them accordingly. For example:
    const fs = require("fs");
    fs.readFile("nonexistent-file.txt", (error, data) => {
        if (error) {
            console.error("Error reading file:", error.message); // Handle the error
            return;
        }
        console.log("File data:", data.toString());
    });

    // 4.4. Error Handling Middleware: In Express.js, you can create custom error handling middleware to handle errors that occur in your application. This middleware can be used to log errors, send error responses, or perform any other necessary actions when an error occurs.

    // 4.5. System errors: Node.js provides a set of built-in error classes that represent different types of errors. These include:
    // Error: The base error class.
    // TypeError: Represents a type-related error.
    // ReferenceError: Represents a reference-related error.
    // SyntaxError: Represents a syntax-related error.
    // RangeError: Represents a range-related error.
    // You can create custom error classes by extending the built-in Error class.

    // 4.6. User Specified Errors: You can create custom error classes to represent specific errors in your application. This allows you to provide more meaningful error messages and handle errors in a more structured way. For example:

    class CustomError extends Error {
        constructor(message) {
            super(message);
            this.name = "CustomError";
        }
    }

    // 4.7. Assertion Errors: Assertion errors are used to indicate that an assertion has failed. In Node.js, you can use the assert module to perform assertions and throw assertion errors when the assertions fail. For example:
    const assert = require("assert");
    const value = 5;
    assert.strictEqual(value, 10, "Value should be 10"); // This will throw an assertion error

    // 4.8. JavaScript Errores: JavaScript Errors are used by JavaScript to inform developers about various issue in the script being executed. These issues can be syntax error where the developer/programmer has used the wrong syntax, it can be due to some wrong user input or some other problem. JavaScript has six types of errors that may occur during the execution of the script:
    // EvalError: Represents an error in the eval() function.
    // RangeError: Represents a number that is outside the allowable range.
    // ReferenceError: Represents a reference to a variable that is not defined.
    // SyntaxError: Represents a syntax error in the code.
    // TypeError: Represents a type-related error.
    // URIError: Represents an error in the encodeURI() or decodeURI() functions.

    // 4.9. Uncaught Exceptions: Uncaught exceptions are errors that occur during the execution of a program and are not caught by any error handling mechanism. In Node.js, uncaught exceptions can be handled using the process object. You can listen for the "uncaughtException" event and handle the error accordingly. For example:
    process.on("uncaughtException", (error) => {
        console.error("Uncaught exception:", error.message); // Handle the uncaught exception
    });


}