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
 }