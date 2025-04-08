/* NODE.JS BREAKDOWN */

const title = "JavaScript Breakdown";
console.log(title);

/* 1. Node.js Introduction */

{
    // 1. What is Node.js: Node.js is an open source, cross-platform runtime environment and library that is used for running web applications outside the client’s browser. It is used for server-side programming, and primarily deployed for non-blocking, event-driven servers, such as traditional web sites and back-end API services, but was originally designed with real-time, push-based architectures in mind. Every browser has its own version of a JS engine, and node.js is built on Google Chrome’s V8 JavaScript engine. Official sites:  https://nodejs.org/en/ - https://nodejs.org/docs/latest/api/

    // 2. Why to use Node.js: Node.js is a cross-platform runtime, perfect for a wide range of use cases. Its huge community makes it easy to get started. It uses the V8 engine to compile JavaScript and runs at lightning-fast speeds. Node.js applications are very scalable and maintainable. Cross-platform support allows the creation of all kinds of applications - desktop apps, software as a service, and even mobile applications. Node.js is perfect for data-intensive and real-time applications since it uses an event-driven, non-blocking I/O model, making it lightweight and efficient. With such a huge community, a vast collection of Node.js packages is available to simplify and boost development.

    // 3. History of Node.js: Node.js was written initially by Ryan Dahl in 2009, about thirteen years after the introduction of the first server-side JavaScript environment, Netscape’s LiveWire Pro Web. The initial release supported only Linux and macOS X. Its development and maintenance were led by Dahl and later sponsored by Joyent. In 2011, Node.js was forked into a separate project called io.js, which was later merged back into the main Node.js project. The Node.js Foundation was created in 2015 to support the development of Node.js and to promote its use. In 2019, the Node.js Foundation merged with the JS Foundation to form the OpenJS Foundation, which now oversees the development of Node.js and other JavaScript projects.

    // 4. Nodejs vs Browser: Both the browser and Node.js use JavaScript as their programming language. Building apps that run in the browser is entirely different than building a Node.js application. Even though it's always JavaScript, some key differences make the experience radically different.

    // Differences between Node.js and the Browser:
    // 1. Environment: Node.js is a server-side environment, while the browser is a client-side environment.
    // 2. Global Object: In Node.js, the global object is called global, while in the browser, it is called window.
    // 3. Modules: Node.js uses CommonJS modules, while the browser uses ES6 modules.
    // 4. File System: Node.js has access to the file system, while the browser does not.
    // 5. APIs: Node.js has access to a wide range of APIs, while the browser has a limited set of APIs.
    // 6. Event Loop: Node.js has a single-threaded event loop, while the browser has a multi-threaded event loop.
    // 7. Networking: Node.js has built-in support for networking, while the browser does not.
    // 8. Performance: Node.js is generally faster than the browser because it is optimized for server-side applications.
    // 9. Security: Node.js is less secure than the browser because it has access to the file system and other system resources.
    // 10. Debugging: Node.js has built-in debugging tools, while the browser has limited debugging tools.
    // 11. Package Management: Node.js has a built-in package manager (npm), while the browser does not have a built-in package manager.
    // 12. Asynchronous Programming: Node.js uses asynchronous programming, while the browser uses synchronous programming.
    // 13. Event Handling: Node.js uses event-driven programming, while the browser uses event-based programming.
    // 14. Error Handling: Node.js uses try-catch for error handling, while the browser uses window.onerror.
    // 15. Debugging: Node.js has built-in debugging tools, while the browser has limited debugging tools.
    // 16. Testing: Node.js has built-in testing tools, while the browser has limited testing tools.
    // 17. Deployment: Node.js applications are deployed on servers, while browser applications are deployed on client machines.
    // 18. Scalability: Node.js applications are more scalable than browser applications because they can handle a large number of concurrent connections.
    // 19. Community: Node.js has a large and active community, while the browser has a smaller community.
    // 20. Learning Curve: Node.js has a steeper learning curve than the browser because it requires knowledge of server-side programming concepts.

}

/* 2. */