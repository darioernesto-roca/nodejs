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
  // 3.2 Global Install vs Local Install: NodeJS and NPM allow two methods of installing dependencies/packages: Local and Global. This is mainly used when adding a package or dependency as part of a specific project you're working on. The package would be installed (with its dependencies) in node_modules folder under your project. In addition, in package.json file there will be a new line added for the installed dependency under the label dependencies. At this point - you can start using the package in your NodeJS code by importing the package. Unlike the local install, you can install packages and dependencies globally. This would install it in a system path, and these packages would be available to any program which runs on this specific computer. This method is often used for installing command line tools (for example, even npm program is a Globally installed npm package).
  // 3.3 Installing packages with npm: To install a package, you can use the npm install command followed by the package name. For example, to install the express package, you can run the following command:
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
  // 3.3.1 Updating packages with npm: To update a package, you can use the npm update command followed by the package name. For example, to update the express package, you can run the following command:
  // npm update express
  // This will update the express package to the latest version and update the version number in your project's dependencies in the package.json file.
  // You can also update all packages in your project by running the following command:
  // npm update
  // This will update all packages in your project to their latest versions and update the version numbers in your project's dependencies in the package.json file.
  // 3.3.2 Running scripts with npm: npm allows you to define scripts in your package.json file that can be run using the npm run command. For example, you can define a script to start your application in the package.json file like this:
  // {
  //   "scripts": {
  //     "start": "node app.js"
  //   }
  // }
  // You can then run the script using the following command:
  // npm run start
  // This will run the app.js file using Node.js. You can also define other scripts, such as test scripts, build scripts, and more. For example, you can define a test script like this:
  // {
  //   "scripts": {
  //     "test": "mocha test.js"
  //   }
  // }
  // You can then run the test script using the following command:
  // npm run test
  // This will run the test.js file using the mocha testing framework. You can also pass arguments to your scripts by using the -- flag. For example, you can pass an argument to the start script like this:
  // npm run start -- --port=3000
  // This will run the app.js file with the --port=3000 argument. You can also define pre and post scripts that run before or after a script. For example, you can define a prestart script like this:
  // {
  //   "scripts": {
  //     "prestart": "npm install",
  //     "start": "node app.js"
  //   }
  // }
  // 3.4 Uninstalling packages with npm: To uninstall a package, you can use the npm uninstall command followed by the package name. For example, to uninstall the express package, you can run the following command:
  // npm uninstall express
  // This will uninstall the express package and remove it from your project's dependencies in the package.json file.
  // You can also uninstall multiple packages at once by separating the package names with a space. For example, to uninstall the express
  // 3.5 npx: npx is a very powerful command that's been available in npm starting version 5.2, released in July 2017. If you don't want to install npm, you can install npx as a standalone package. npx lets you run code built with Node.js and published through the npm registry, without needing to install the package itself. This is particularly useful for trying out new tools, running one-time commands, or using packages in shared environments where global installations are undesirable. npx takes care of downloading the package on-the-fly, running the desired command, and then cleaning up the temporary installation. This keeps your project's dependencies lean and avoids version conflicts.
  // 3.6 Semantic versioning: Semantic versioning (semver) is a versioning scheme for software that uses a three-part version number: MAJOR.MINOR.PATCH. The MAJOR version is incremented when there are incompatible changes, the MINOR version is incremented when new features are added in a backwards-compatible manner, and the PATCH version is incremented when backwards-compatible bug fixes are introduced. For example, if a package has a version number of 1.2.3, it means that it has had 1 major release, 2 minor releases, and 3 patch releases.
  // The version number is usually specified in the package.json file, which is a JSON file that contains metadata about the package, including its name, version, description, and dependencies. The version number is specified in the "version" field of the package.json file. For example:
  // {
  //     "name": "my-package",
  //     "version": "1.2.3",
  //     "description": "My package description",
  //     "dependencies": {
  //         "express": "^4.17.1"
  //     }
  // }
  // 3.7 npm workspaces: npm workspaces is a feature that allows you to manage multiple packages within a single repository. It allows you to create a monorepo, which is a single repository that contains multiple packages. This is useful for managing large projects that consist of multiple packages or modules. Workspaces allow you to share dependencies between packages, run scripts across multiple packages, and manage package versions more easily. To create a workspace, you can add a "workspaces" field to your package.json file. For example:
  // {
  //     "name": "my-monorepo",
  //     "version": "1.0.0",
  //     "workspaces": [
  //         "packages/*"
  //     ],
  //     "scripts": {
  //         "start": "npm run start --workspace=packages/package1"
  //     }
  // }
  // This will create a workspace that includes all packages in the packages directory. You can then run scripts across all packages using the npm run command. For example, to run the start script in all packages, you can run the following command:
  // npm run start --workspaces
  // This will run the start script in all packages in the workspace. You can also run scripts in a specific package by using the --workspace flag. For example, to run the start script in the package1 package, you can run the following command:
  // npm run start --workspace=packages/package1
  // 3.8 Creating Packages: npm packages allow you to bundle some specific functionality into a reusable package which can then be uploaded to some package registry such as npm or GitHub packages and then be installed and reused in projects using npm. To create a package, you can use the npm init command. This will create a package.json file in your project directory. You will be prompted to enter information about your package, such as its name, version, description, and entry point. For example:
  // npm init
  // This will create a package.json file with the following content:
  // {
  //     "name": "my-package",
  //     "version": "1.0.0",
  //     "description": "My package description",
  //     "main": "index.js",
  //     "scripts": {
  //         "test": "echo \"Error: no test specified\" && exit 1"
  //     },
  //     "keywords": [],
  //     "author": "",
  //     "license": "ISC"
  // }
  // You can also create a package.json file manually by creating a new file named package.json in your project directory and adding the necessary fields. For example:
  // {
  //     "name": "my-package",
  //     "version": "1.0.0",
  //     "description": "My package description",
  //     "main": "index.js",
  //     "scripts": {
  //         "test": "echo \"Error: no test specified\" && exit 1"
  //     },
  //     "keywords": [],
  //     "author": "",
  //     "license": "ISC"
  // }
  // 3.9 Publishing Packages: To publish a package, you can use the npm publish command. This will upload your package to the npm registry, making it available for others to install. Before publishing, make sure that your package.json file is correctly configured and that you have created an account on the npm registry. For example:
  // npm publish
  // This will publish your package to the npm registry. You can also specify a tag for your package by using the --tag flag. For example, to publish your package with the "latest" tag, you can run the following command:
  // npm publish --tag latest
  // This will publish your package with the "latest" tag, making it the default version that will be installed when users run npm install <package-name>.
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

  // 4.10. Callstacks / Stacktraces: A call stack is a data structure that keeps track of function calls in a program. When a function is called, it is added to the top of the call stack. When the function returns, it is removed from the call stack. If an error occurs in a function, the call stack can be used to trace back to the point where the error occurred. In Node.js, you can use the Error.captureStackTrace() method to capture the call stack at a specific point in your code. For example:
  function foo() {
    throw new Error("An error occurred");
  }

  try {
    foo();
  } catch (error) {
    Error.captureStackTrace(error, foo); // Capture the call stack
    console.error("Error:", error.message);
    console.error("Stack trace:", error.stack); // Print the stack trace
  }

  // 4.11. Debugging: Debugging is the process of finding and fixing errors in a program. In Node.js, you can use the built-in debugger to debug your code. You can start the debugger by running your Node.js application with the --inspect flag. For example:
  // node --inspect app.js
  // This will start the debugger and allow you to connect to it using a debugging client, such as Chrome DevTools or Visual Studio Code. You can set breakpoints, step through your code, and inspect variables to help you find and fix errors in your application.
  // 4.12. Logging: Logging is an important aspect of error handling that allows you to record information about errors and other events in your application. In Node.js, you can use the console object to log messages to the console. For example:
  console.log("Informational message");
  console.error("Error message");
  // You can also use third-party logging libraries, such as Winston or Bunyan, to provide more advanced logging capabilities, such as log levels, log rotation, and log formatting.
  // 4.13. Best Practices: Some best practices for error handling in Node.js include:
  // - Use try-catch blocks to handle exceptions and prevent crashes.
  // - Use error events to handle errors emitted by built-in modules.
  // - Use error handling middleware in Express.js to handle errors in your application.
  // - Create custom error classes to represent specific errors in your application.
  // - Use the assert module to perform assertions and throw assertion errors when assertions fail.
  // - Use the process object to handle uncaught exceptions and prevent crashes.
  // - Use the Error.captureStackTrace() method to capture the call stack at a specific point in your code.
  // - Use the built-in debugger to debug your code and find errors.
  // - Use logging to record information about errors and other events in your application.
  // - Use best practices for error handling, such as providing meaningful error messages, logging errors, and handling errors gracefully.
  // 4.14. Conclusion: Error handling is an important aspect of programming that allows developers to handle unexpected situations and prevent crashes in their applications. In Node.js, there are several ways to handle errors, including using try-catch blocks, error events, and error handling middleware. By following best practices for error handling, you can create more robust and reliable applications.
}

/* 5. Asynchronous Programming */
{
  // 5.1. Asynchronous programming is a programming paradigm that allows you to write code that can run concurrently without blocking the main thread. In Node.js, asynchronous programming is achieved using callbacks, promises, and async/await.

  // 5.2. Callbacks: A callback is a function that is passed as an argument to another function and is executed when the operation is complete. For example:
  const fs = require("fs");
  fs.readFile("example.txt", "utf8", (error, data) => {
    if (error) {
      console.error("Error reading file:", error.message);
      return;
    }
    console.log("File data:", data);
  });

  // 5.3. Promises: A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises can be in one of three states: pending, fulfilled, or rejected. For example:
  const readFilePromise = new Promise((resolve, reject) => {
    fs.readFile("example.txt", "utf8", (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });

  readFilePromise
    .then((data) => {
      console.log("File data:", data);
    })
    .catch((error) => {
      console.error("Error reading file:", error.message);
    });

  // 5.4. Async/Await: Async/await is a syntax for working with promises that makes asynchronous code look more like synchronous code. It allows you to write asynchronous code in a more readable and maintainable way. For example:
  async function readFileAsync() {
    try {
      const data = await readFilePromise;
      console.log("File data:", data);
    } catch (error) {
      console.error("Error reading file:", error.message);
    }
  }

  readFileAsync();

  // 5.5 Promises: Promises are a way to handle asynchronous operations in JavaScript. They represent a value that may not be available yet but will be resolved in the future. Promises can be in one of three states: pending, fulfilled, or rejected. You can create a promise using the Promise constructor and resolve or reject it based on the outcome of an asynchronous operation. For example:
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Simulate success or failure
      if (success) {
        resolve("Operation successful");
      } else {
        reject(new Error("Operation failed"));
      }
    }, 1000);
  });

  promise
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error.message);
    });

  // 5.6.SetTimeout: The setTimeout runs a function after the specified period expires. Times are declared in milliseconds.
  setTimeout(() => {
    console.log("This message is displayed after 2 seconds");
  }, 2000);

  // 5.7. SetInterval: The setInterval runs a function repeatedly at the specified interval. Times are declared in milliseconds.
  const intervalId = setInterval(() => {
    console.log("This message is displayed every 1 second");
  }, 1000);

  // To stop the interval after 5 seconds add a clearInterval function. This is a native JavaScript function that stops the interval from running.
  // It takes the interval ID as an argument, which is returned by the setInterval function.
  setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval cleared");
  }, 5000);

  // 5.8 setInmmediate: The setImmediate function delays the execution of a function to be called after the current event loops finish all their execution. It's very similar to calling setTimeout with 0 ms delay.
  setImmediate(() => {
    console.log("This message is displayed after the current event loop");
  });
  // 5.9. Event Loop: The event loop is a mechanism that allows Node.js to handle asynchronous operations. It continuously checks for events and executes the corresponding callbacks when they are ready. The event loop is responsible for managing the execution of asynchronous code in Node.js.
  // 5.10. Event Loop Phases: The event loop has several phases, each responsible for handling different types of events. The main phases are:
  // - Timers: This phase executes callbacks scheduled by setTimeout and setInterval.
  // - I/O Callbacks: This phase executes callbacks for I/O operations, such as reading files or making network requests.
  // - Idle, Prepare: This phase is used for internal operations and is not typically used by developers.
  // - Poll: This phase retrieves new I/O events and executes their callbacks.
  // - Check: This phase executes callbacks scheduled by setImmediate.
  // - Close Callbacks: This phase executes callbacks for closed resources, such as sockets or file descriptors.
  // 5.11. Event Loop Example: Here's a simple example that demonstrates the event loop in action:
  console.log("Start");
  setTimeout(() => {
    console.log("Timeout callback");
  }, 0);
  setImmediate(() => {
    console.log("Immediate callback");
  });
  console.log("End");
  // Output:
  // Start
  // End
  // Immediate callback
  // Timeout callback
  // In this example, the "Start" and "End" messages are logged immediately, while the "Immediate callback" and "Timeout callback" messages are logged in the next iteration of the event loop. The order of execution is determined by the event loop phases.

  // 5.12. Process.nextTick: The process.nextTick function allows you to schedule a callback to be executed in the next iteration of the event loop, before any I/O operations or timers. It is often used to ensure that a callback is executed immediately after the current operation completes. For example:
  process.nextTick(() => {
    console.log(
      "This message is displayed in the next iteration of the event loop"
    );
  });

  // 5.13. Event Emitter: The EventEmitter class is a built-in module in Node.js that allows you to create and manage custom events. It provides methods for emitting events, listening for events, and removing event listeners. You can create an instance of the EventEmitter class and use it to handle custom events in your application. For example:
  const EventEmitter = require("events");
  const myEmitter = new EventEmitter();

  myEmitter.on("event", () => {
    console.log("An event occurred!");
  });

  myEmitter.emit("event"); // Output: An event occurred!

  // 5.14. Event loop: The event loop is a fundamental concept in Node.js that allows for non-blocking I/O operations. It enables the execution of asynchronous code by offloading operations to the system kernel whenever possible. This means that Node.js can handle many connections simultaneously without being blocked by slow operations. The event loop continuously checks for pending events and executes their callbacks, ensuring that the application remains responsive.
}

/* 6. Working with Files */
/* You can programmatically manipulate files in Node.js with the built-in fs module. The name is short for “file system,” and the module contains all the functions you need to read, write, and delete files on the local machine. */
// The key points to remember when working with files in Node.js:
// - Core Modules: Node.js provides built-in modules like fs (File System) and path that are essential for file operations. You'll use require('fs') and require('path') to access them.
// - Asynchronous vs. Synchronous:
// Asynchronous methods (e.g., fs.readFile, fs.writeFile) are non-blocking. They initiate an operation and then use a callback function or Promises/async/await to handle the result when it's ready. This is generally preferred for performance, especially in web servers.
// Synchronous methods (e.g., fs.readFileSync, fs.writeFileSync) block the event loop until the operation is complete. Avoid these in production code as they can cause performance issues.
// - Reading Files:
// Use fs.readFile (asynchronous) or fs.readFileSync (synchronous) to read the entire contents of a file.
// Specify the encoding (e.g., 'utf8') to get a string representation of the file content. Without encoding, you'll get a Buffer object.
// - Writing Files:
// Use fs.writeFile (asynchronous) or fs.writeFileSync (synchronous) to write data to a file, replacing the file if it exists.
// Use fs.appendFile (asynchronous) or fs.appendFileSync (synchronous) to add data to the end of a file.
// - File Paths:
// Use absolute paths for clarity, or relative paths from the current working directory.
// The path module is crucial for manipulating file paths in a platform-independent way. Use methods like path.join() to construct paths safely.
// - File System Operations: The fs module offers a wide range of functions for tasks like:
// fs.mkdir / fs.mkdirSync: Create directories.
// fs.rmdir / fs.rmdirSync: Remove directories.
// fs.unlink / fs.unlinkSync: Delete files.
// fs.rename / fs.renameSync: Rename files or directories.
// fs.existsSync: Check if a file or directory exists.
// fs.readdir / fs.readdirSync: Read the contents of a directory.
// fs.stat / fs.statSync: Get file or directory metadata (size, modification date, etc.).
// - Error Handling: Always handle errors when working with files. Wrap your code in try...catch blocks (for synchronous operations) or check the err argument in callback functions (for asynchronous operations).
// - Streams: For large files, streams (fs.createReadStream, fs.createWriteStream) are more efficient than reading/writing the entire file at once. They allow you to process data in chunks.
// - Promises and Async/Await: To avoid callback hell with asynchronous operations, consider using Promises with fs.promises or the async/await syntax.

{
  // 6.1 File System Module: The fs module provides an API for interacting with the file system. It allows you to read and write files, create directories, and perform other file system operations. You can require the fs module in your Node.js application like this:
  const fs = require("fs");

  // 6.2 __dirname: The __dirname variable is a global variable in Node.js that contains the absolute path to the directory that contains the currently executing script. It is useful for constructing file paths relative to the current script. For example:
  const path = require("path");
  const filePath = path.join(__dirname, "example.txt");
  console.log("File path:", filePath); // Output: File path: /path/to/example.txt

  // 6.3 __filename: The __filename variable is a global variable in Node.js that contains the absolute path to the currently executing script file. It is useful for constructing file paths relative to the current script file. For example:
  const fileName = path.basename(__filename);
  console.log("File name:", fileName); // Output: File name: nodejs-breakpoint.js

  // The difference between __dirname and __filename is that __dirname gives you the directory path (that means the folder containing the script) of the current script, while __filename gives you the full path (that means the complete location including the file name) to the current script file.

  // 6.4 glob: The glob pattern is most commonly used to specify filenames, called wildcard characters, and strings, called wildcard matching. The glob module is a third-party module that allows you to match files and directories using glob patterns. It is useful for finding files that match a specific pattern, such as all JavaScript files in a directory. You can install the glob module using npm:
  // npm install glob
  const glob = require("glob");
  glob("*.js", (error, files) => {
    if (error) {
      console.error("Error matching files:", error.message);
      return;
    }
    console.log("Matched files:", files); // Output: Matched files: [ 'nodejs-breakpoint.js', ... ]
  });

  //glob stands for "global" pattern matching. It allows you to search for files using wildcards, like:
  //*.js → all JavaScript files in a folder
  //**/*.json → all .json files in a directory and subdirectories
  //src/**/test-*.js → all files starting with test- in any subfolder under src
  //It mimics shell-style pattern matching (bash, zsh, etc.) but works inside your Node.js scripts.

  // Here are real-world use cases where glob shines:

  // 6.4.1. ✅ Dynamic File Importing
  // Imagine a project where you have dozens of route files:

  // bash
  // Copy
  // Edit
  // routes/
  // ├── auth.js
  // ├── users.js
  // └── blog/
  //     └── comments.js

  // You can dynamically import all:
  glob("routes/**/*.js", (err, files) => {
    files.forEach((file) => require(`./${file}`));
  });

  // 6.4.2. 🔄 Batch Processing Files
  // Process all markdown files for a blog generator:
  glob("content/**/*.md", (err, files) => {
    files.forEach((file) => convertMarkdownToHTML(file));
  });

  // 6.5 fs-extra: The fs-extra module is a third-party module that extends the functionality of the built-in fs module. It provides additional methods for working with files and directories, such as copying files, moving files, and removing directories. You can install the fs-extra module using npm. fs-extra adds file system methods that aren't included in the native fs module and adds promise support to the fs methods. It also uses graceful-fs to prevent EMFILE errors. It should be a drop in replacement for fs.

  // npm install fs-extra
  const fsExtra = require("fs-extra");
  // Example: Copying a file
  fsExtra
    .copy("source.txt", "destination.txt")
    .then(() => {
      console.log("File copied successfully");
    })
    .catch((error) => {
      console.error("Error copying file:", error.message);
    });

  // Example: Moving a file
  fsExtra
    .move("source.txt", "destination.txt")
    .then(() => {
      console.log("File moved successfully");
    })
    .catch((error) => {
      console.error("Error moving file:", error.message);
    });

  // Example: Removing a directory
  fsExtra
    .remove("directory")
    .then(() => {
      console.log("Directory removed successfully");
    })
    .catch((error) => {
      console.error("Error removing directory:", error.message);
    });

  // 6.6 Globby: The globby module is a third-party module that provides a more powerful and flexible way to match files and directories using glob patterns. It is built on top of the glob module and provides additional features, such as support for multiple patterns, negation patterns, and more. You can install the globby module using npm:
  // npm install globby
  const globby = require("globby");
  // Example: Matching files using globby
  (async () => {
    const files = await globby(["*.js", "!node_modules/**"]);
    console.log("Matched files:", files); // Output: Matched files: [ 'nodejs-breakpoint.js', ... ]
  })().catch((error) => {
    console.error("Error matching files:", error.message);
  });

  // 6.7 Chokidar: The chokidar module is a third-party module that provides a simple and efficient way to watch for changes in files and directories. It is built on top of the fs module and provides additional features, such as support for recursive watching, filtering, and more. You can install the chokidar module using npm:
  // npm install chokidar
  const chokidar = require("chokidar");
  // Example: Watching a directory for changes
  const watcher = chokidar.watch("directory", {
    persistent: true,
    ignored: /node_modules/,
  });
  watcher
    .on("add", (path) => {
      console.log(`File added: ${path}`);
    })
    .on("change", (path) => {
      console.log(`File changed: ${path}`);
    })
    .on("unlink", (path) => {
      console.log(`File removed: ${path}`);
    })
    .on("error", (error) => {
      console.error("Error watching directory:", error.message);
    });

  // Chokidar is a popular and robust Node.js library that provides a way to watch file system changes. Think of it as a super-powered fs.watch (Node.js's built-in file watching module). While fs.watch can be a bit unreliable and inconsistent across different operating systems, Chokidar aims to solve these problems by providing a more consistent, reliable, and feature-rich file watching experience.

  // Why Use Chokidar?

  // Cross-Platform Consistency: Chokidar normalizes file system events across different operating systems (macOS, Windows, Linux), so your code behaves the same way regardless of the platform it's running on.
  // Handles Network Drives: It gracefully handles watching files on network drives, which can be problematic with fs.watch.
  // Persistent Watching: Chokidar can continue watching files even if they are temporarily unavailable (e.g., due to network issues). It will automatically resume watching when the files become available again.
  // Glob Support: You can use glob patterns to watch multiple files and directories with a single watcher.
  // Ignored Paths: Easily exclude files and directories from being watched using ignore patterns.
  // Ready Event: Chokidar emits a ready event when the initial scan of the file system is complete, ensuring that you don't process events before the watcher is fully initialized.
  // Add/Unlink Events for Directories: Chokidar provides addDir and unlinkDir events, which are missing in the native fs.watch.
  // Better Performance: In some cases, Chokidar can offer better performance than fs.watch, especially when watching large directories with many files.

  // 6.8. process.cwd(): The process.cwd() method returns the current working directory of the Node.js process. It is useful for constructing file paths relative to the current working directory. For example:
  const currentDir = process.cwd();
  console.log("Current working directory:", currentDir); // Output: Current working directory: /path/to/current/dir
  // You can use this method to get the current working directory of the Node.js process. This is useful when you want to construct file paths relative to the current working directory. For example:
  const filePath2 = path.join(process.cwd(), "example.txt");
  console.log("File path:", filePath2); // Output: File path: /path/to/current/dir/example.txt

  // 6.9. Path Module: The path module provides utilities for working with file and directory paths. It allows you to manipulate paths in a platform-independent way, making it easier to work with file systems across different operating systems. You can require the path module in your Node.js application like this:
  const path = require("path");
  // Example: Joining paths
  const joinedPath = path.join(__dirname, "subdir", "file.txt");
  console.log("Joined path:", joinedPath); // Output: Joined path: /path/to/subdir/file.txt
  // Example: Getting the file extension
  const fileExtension = path.extname("example.txt");
  console.log("File extension:", fileExtension); // Output: File extension: .txt
  // Example: Getting the base name of a file
  const baseName = path.basename("/path/to/file.txt");
  console.log("Base name:", baseName); // Output: Base name: file.txt
  // Example: Getting the directory name of a file
  const dirName = path.dirname("/path/to/file.txt");
  console.log("Directory name:", dirName); // Output: Directory name: /path/to
  // Example: Normalizing a path
  const normalizedPath = path.normalize("/path/to/../file.txt");
  console.log("Normalized path:", normalizedPath); // Output: Normalized path: /path
  // Example: Resolving a path
  const resolvedPath = path.resolve("subdir", "file.txt");
  console.log("Resolved path:", resolvedPath); // Output: Resolved path: /path/to/current/dir/subdir/file.txt
  // Example: Getting the absolute path of a file
  const absolutePath = path.resolve("file.txt");
  console.log("Absolute path:", absolutePath); // Output: Absolute path: /path/to/current/dir/file.txt
  // Example: Getting the relative path between two paths
  const relativePath = path.relative(
    "/path/to/current/dir",
    "/path/to/other/dir/file.txt"
  );
  console.log("Relative path:", relativePath); // Output: Relative path: ../other/dir/file.txt
  // Example: Parsing a path
  const parsedPath = path.parse("/path/to/file.txt");
  console.log("Parsed path:", parsedPath);
  // Output: Parsed path: {
  // root: '/',
  // dir: '/path/to',
  // base: 'file.txt',
  // ext: '.txt',
  // name: 'file'
  // };
}

/* 7. Command Line Applications */
// Command Line Applications (CLIs) are programs that run in a terminal or command prompt, allowing users to interact with the system through text-based commands. Node.js provides several modules and libraries to help you create powerful and user-friendly CLIs. Here are some key concepts and tools for building CLIs in Node.js:

{
  // 7.0. Exiting / Exit Codes: In Node.js, you can exit a process using the process.exit() method. You can also specify an exit code to indicate whether the process completed successfully or encountered an error.  The exit code can be either 0 or 1. 0 means end the process without any kind of failure and 1 means end the process with some failure. By convention, an exit code of 0 indicates success, while any non-zero exit code indicates an error. For example:
  // process.exit(0); // Exit with success
  // process.exit(1); // Exit with an error

  // 7.1. Process Object: The process object is a global object in Node.js that provides information about the current Node.js process. It allows you to access command-line arguments, environment variables, and other process-related information. For example:
  console.log("Process ID:", process.pid); // Output: Process ID: 12345
  console.log("Node.js Version:", process.version); // Output: Node.js Version: v14.17.0
  console.log("Command-Line Arguments:", process.argv); // Output: Command-Line Arguments: [
  // '/path/to/node', '/path/to/script.js', 'arg1', 'arg2' ]

  // 7.2. Environment Variables: Environment variables are key-value pairs that can be used to configure the behavior of your application. You can access environment variables using the process.env object. For example:
  console.log("Environment Variable PATH:", process.env.PATH); // Output: Environment Variable PATH: /usr/local/bin:/usr/bin:/bin
  console.log("Custom Environment Variable MY_VAR:", process.env.MY_VAR); // Output: Custom Environment Variable MY_VAR: value
  // You can set environment variables before running your Node.js application, like this:
  // MY_VAR=value node script.js
  // You can also set environment variables in your code:
  process.env.MY_VAR = "value";

  // 7.3. dotenv package: The dotenv package is a popular library for loading environment variables from a .env file into the process.env object. This allows you to manage configuration settings in a separate file, making it easier to manage different environments (development, production, etc.). You can install the dotenv package using npm:
  // npm install dotenv
  const dotenv = require("dotenv");
  dotenv.config(); // Load environment variables from .env file
  console.log("Loaded Environment Variable MY_VAR:", process.env.MY_VAR); // Output: Loaded Environment Variable MY_VAR: value
  // The dotenv package allows you to define environment variables in a .env file, which is a simple text file with key-value pairs. For example:
  // MY_VAR=value
  // ANOTHER_VAR=another_value
  // You can then load these variables into your Node.js application using the dotenv.config() method
  dotenv.config();
  // console.log("MY_VAR:", process.env.MY_VAR); // Output: MY_VAR: value
  // console.log("ANOTHER_VAR:", process.env.ANOTHER_VAR); // Output: ANOTHER_VAR: another_value

  // 7.4 Takin Input - process.stdin: The process.stdin object is a readable stream that allows you to read input from the standard input (stdin) stream. You can use it to read user input from the command line. For example:
  process.stdin.on("data", (data) => {
    console.log("User Input:", data.toString().trim()); // Output: User Input: input from user
  });

  // You can use this key to take input from the terminal. Let's take an input from the terminal using stdin and then display it on the screen with stdout. For that, I am going to run the following code using node:
  process.stdin.pipe(process.stdout);
  // This will take input from the terminal and display it on the screen. You can type something in the terminal and press enter to see the output.
  // For example, if you type "Hello, World!" and press enter, you will see "Hello, World!" printed on the screen.

  // 7.5 Takin Input - Inquirer Package: The inquirer package is a popular library for creating interactive command-line interfaces. It allows you to prompt users for input, display menus, and handle user responses in a user-friendly way. You can install the inquirer package using npm:
  // npm install inquirer
  const inquirer = require("inquirer");
  // Example: Prompting the user for input

  inquirer
    .prompt([
      {
        type: "input",
        name: "username",
        message: "Enter your username:",
      },
      {
        type: "password",
        name: "password",
        message: "Enter your password:",
      },
    ])
    .then((answers) => {
      console.log("User Input:", answers); // Output: User Input: { username: 'user', password: 'pass' }
    })
    .catch((error) => {
      console.error("Error prompting user:", error.message);
    });

  // 7.6 Takin Input - Prompts Package: The prompts package is another library for creating interactive command-line interfaces. It provides a simple and flexible way to prompt users for input, display menus, and handle user responses. You can install the prompts package using npm:
  // npm install prompts
  const prompts = require("prompts");
  // Example: Prompting the user for input
  (async () => {
    const response = await prompts({
      type: "text",
      name: "username",
      message: "Enter your username:",
    });
    console.log("User Input:", response.username); // Output: User Input: user
  })();

  // 7.7 Printing Output - process.stdout: The process.stdout object is a writable stream that allows you to write output to the standard output (stdout) stream. You can use it to print messages to the console. For example:
  process.stdout.write("Hello, World!\n"); // Output: Hello, World!
  // You can use this key to print output to the terminal. Let's print "Hello, World!" to the terminal using stdout. For that, I am going to run the following code using node.
  // stderr.write("Hello, World!\n");
  // This will print "Hello, World!" to the terminal. You can also use console.log() to print output to the terminal, but using process.stdout.write() gives you more control over the output format and allows you to write directly to the standard output stream.
  // For example, you can use process.stdout.write() to print output without a newline character

  // 7.8 Printing Output - Chalk package: The chalk package is a popular library for styling terminal output. It allows you to add colors, styles, and formatting to your console messages, making them more visually appealing. You can install the chalk package using npm:
  // npm install chalk
  const chalk = require("chalk");
  // Example: Styling console output
  console.log(chalk.blue("This text is blue")); // Output: This text is blue
  console.log(chalk.red("This text is red")); // Output: This text is red
  console.log(chalk.green("This text is green")); // Output: This text is green
  console.log(chalk.bold("This text is bold")); // Output: This text is bold
  console.log(chalk.underline("This text is underlined")); // Output: This text is underlined

  // 7.9 Printing Output - Figlet package: The figlet package is a library for creating ASCII art text. It allows you to generate large, stylized text representations of strings, which can be used to create eye-catching headers or banners in your command-line applications. You can install the figlet package using npm:
  // npm install figlet
  const figlet = require("figlet");
  // Example: Generating ASCII art text
  figlet("Hello, World!", (error, result) => {
    if (error) {
      console.error("Error generating ASCII art:", error);
      return;
    }
    console.log(result);
  });

  // 7.10 CLI Progress Bar - Progress Package: The progress package is a library for creating progress bars in command-line applications. It allows you to display the progress of long-running operations, such as file downloads or data processing, in a visually appealing way. You can install the progress package using npm:
  // npm install progress
  const ProgressBar = require("progress");
  // Example: Creating a progress bar
  const bar = new ProgressBar(":bar :percent", {
    total: 100,
    width: 20,
    complete: "=",
    incomplete: " ",
  });
  // Example: Updating the progress bar
  const timer = setInterval(() => {
    bar.tick();
    if (bar.complete) {
      clearInterval(timer);
      console.log("Progress completed!");
    }
  }, 100);

  // 7.11 Command Line Arguments - process.argv: The process.argv array contains the command-line arguments passed to the Node.js process. It allows you to access user input and configuration options provided when running your application. For example:
  console.log("Command-Line Arguments:", process.argv); // Output: Command-Line Arguments: [<arguments>]

  // 7.12 Command Line Arguments - Commander: The commander package is a popular library for building command-line interfaces in Node.js. It provides a simple and intuitive way to define commands, options, and arguments for your CLI applications. You can install the commander package using npm:
  // npm install commander
  const { Command } = require("commander");
  const program = new Command();
  // Example: Defining a command with options and arguments
  program
    .command("greet <name>")
    .option("-g, --greeting <greeting>", "Custom greeting message", "Hello")
    .action((name, options) => {
      console.log(`${options.greeting}, ${name}!`); // Output: Custom greeting message, name!
    });

  // 7.13 Commander: The commander package allows you to define commands, options, and arguments for your CLI applications. It provides a simple and intuitive API for building command-line interfaces. You can define commands with options and arguments, and handle user input in a structured way. For example:
  program.command("add <num1> <num2>").action((num1, num2) => {
    const sum = parseFloat(num1) + parseFloat(num2);
    console.log(`The sum of ${num1} and ${num2} is ${sum}`);
  });
  // Example: Parsing command-line arguments
  program.parse(process.argv);
  // Example: Displaying the help message
  program.help(); // Output: Usage: <command> [options]
}

/* 8. Building & Consuming APIs - Express*/

{
  // 8.1. APIs (Application Programming Interfaces) are a set of rules and protocols that allow different software applications to communicate with each other. In Node.js, you can build and consume APIs using various modules and libraries.

  // 8.2. Express.js: Express.js is a popular web framework for Node.js that simplifies the process of building APIs. It provides a set of features and middleware for handling HTTP requests, routing, and serving static files. You can install Express.js using npm:

  // npm install express
  const express = require("express");
  const app = express();
  // Example: Creating a simple API endpoint
  app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello, World!" });
  });
  // Example: Starting the server
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  // 8.3. Middleware: Middleware functions are functions that have access to the request and response objects in an Express.js application. They can modify the request or response, end the request-response cycle, or call the next middleware function in the stack. Middleware is often used for tasks such as logging, authentication, and error handling. For example:
  app.use((req, res, next) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    next();
  });

  // 8.4. Routing: Routing is the process of defining how an application responds to client requests for specific endpoints. In Express.js, you can define routes using the app.get(), app.post(), app.put(), and app.delete() methods. Each method corresponds to a specific HTTP verb. For example:
  app.post("/api/users", (req, res) => {
    const user = req.body; // Assuming body-parser middleware is used
    console.log("User created:", user);
    res.status(201).json({ message: "User created successfully", user });
  });

  app.get("/api/404", (req, res) => {
    res.status(404).json({ error: "Not Found" });
  });

  app.get("/api/users", (req, res) => {
    res.status(200).json({ message: "List of users" });
  });

  // 8.5. Serving static files: Express.js can serve static files, such as HTML, CSS, and JavaScript files, using the express.static middleware. This is useful for serving front-end assets in a web application. For example:
  app.use(express.static("public")); // Serve static files from the "public" directory

  // 8.6. Template engines: Express.js supports various template engines, such as EJS, Pug, and Handlebars, for rendering dynamic HTML pages. You can set the view engine using the app.set() method. For example:
  app.set("view engine", "ejs");
  app.get("/api/template", (req, res) => {
    res.render("template", { title: "Hello, World!" }); // Render the "template.ejs" file
  });

  // 8.7. Error handling: Express.js provides a built-in error handling mechanism that allows you to catch and handle errors in your application. You can define error-handling middleware using the app.use() method with four parameters (err, req, res, next). For example:
  app.use((err, req, res, next) => {
    console.error("Error occurred:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  });

  // 8.8. CORS (Cross-Origin Resource Sharing): CORS is a security feature that restricts web pages from making requests to a different domain than the one that served the web page. In Express.js, you can enable CORS using the cors middleware. You can install the cors package using npm:
  // npm install cors
  const cors = require("cors");
  app.use(cors()); // Enable CORS for all routes

  // 8.9. Body parsing: Express.js provides built-in middleware for parsing request bodies, such as express.json() for JSON data and express.urlencoded() for URL-encoded data. This allows you to easily access the request body in your route handlers. For example:
  app.use(express.json()); // Parse JSON request bodies

  // 8.10. Query parameters: Query parameters are key-value pairs appended to the URL after a question mark (?). In Express.js, you can access query parameters using the req.query object. For example:
  app.get("/api/search", (req, res) => {
    const query = req.query.q; // Access the "q" query parameter
    console.log("Search query:", query);
    res.json({ message: `Search results for "${query}"` });
  });

  // 8.11. URL parameters: URL parameters are dynamic segments in the URL that can be used to capture values from the request URL. In Express.js, you can define URL parameters using the colon (:) syntax in the route path. You can access URL parameters using the req.params object. For example:
  app.get("/api/users/:id", (req, res) => {
    const userId = req.params.id; // Access the "id" URL parameter
    console.log("User ID:", userId);
    res.json({ message: `User details for ID ${userId}` });
  });
}

/* 9. Building & Consuming APIs - Fastify */

{
  // 9.1. Fastify: Fastify is a high-performance web framework for Node.js that is designed to be fast and efficient. It provides a simple and intuitive API for building APIs and web applications. You can install Fastify using npm:
  // npm install fastify
  const fastify = require("fastify")();
  // Example: Creating a simple API endpoint
  fastify.get("/api/hello", (request, reply) => {
    reply.send({ message: "Hello, World!" });
  });

  // 9.2. Fastify Plugins: Fastify has a powerful plugin system that allows you to encapsulate functionality and reuse it across your application. You can create a plugin by defining a function that takes the Fastify instance as an argument. For example:
  fastify.register((instance, options, done) => {
    instance.get("/api/plugin", (request, reply) => {
      reply.send({ message: "Hello from the plugin!" });
    });
    done();
  });

  // 9.3. Fastify Middleware: Fastify supports middleware functions that can be used to modify the request or response objects, end the request-response cycle, or call the next middleware function in the stack. Middleware is often used for tasks such as logging, authentication, and error handling. For example:
  fastify.addHook("onRequest", (request, reply, done) => {
    console.log(`Request received: ${request.method} ${request.url}`);
    done();
  });

  // 9.4. Fastify Error Handling: Fastify provides a built-in error handling mechanism that allows you to handle errors in a centralized manner. You can define an error handler using the setErrorHandler method. For example:
  fastify.setErrorHandler((error, request, reply) => {
    console.error("Error occurred:", error.message);
    reply.status(500).send({ error: "Internal Server Error" });
  });

  // 9.5. Fastify CORS: Fastify has built-in support for CORS (Cross-Origin Resource Sharing) through the fastify-cors plugin. You can enable CORS for your Fastify application by registering the plugin. You can install the fastify-cors plugin using npm:
  // npm install fastify-cors
  const fastifyCors = require("fastify-cors");
  fastify.register(fastifyCors, {
    origin: "*", // Allow all origins
  });

  // 9.6. Fastify Body Parsing: Fastify provides built-in support for parsing request bodies, such as JSON and URL-encoded data. You can enable body parsing by registering the fastify-formbody and fastify-json-body-parser plugins. You can install these plugins using npm:
  // npm install fastify-formbody fastify-json-body-parser
  const fastifyFormbody = require("fastify-formbody");
  const fastifyJsonBodyParser = require("fastify-json-body-parser");
  fastify.register(fastifyFormbody); // Parse URL-encoded request bodies
  fastify.register(fastifyJsonBodyParser); // Parse JSON request bodies

  // 9.7. Fastify Query Parameters: Fastify allows you to access query parameters using the request.query object. Query parameters are key-value pairs appended to the URL after a question mark (?). For example:
  fastify.get("/api/search", (request, reply) => {
    const query = request.query.q; // Access the "q" query parameter
    console.log("Search query:", query);
    reply.send({ message: `Search results for "${query}"` });
  });
  // 9.8. Fastify URL Parameters: Fastify allows you to define URL parameters using the colon (:) syntax in the route path. You can access URL parameters using the request.params object. For example:
  fastify.get("/api/users/:id", (request, reply) => {
    const userId = request.params.id; // Access the "id" URL parameter
    console.log("User ID:", userId);
    reply.send({ message: `User details for ID ${userId}` });
  });
}

/* 10. Building & Consuming APIs - Nest JS */

{
  // 10.1. NestJS: NestJS is a progressive Node.js framework for building efficient and scalable server-side applications. It is built on top of Express.js and provides a modular architecture, dependency injection, and powerful decorators for defining routes, controllers, and services. You can install NestJS using npm:
  // npm install @nestjs/core @nestjs/common @nestjs/platform-express
  const { NestFactory } = require("@nestjs/core");
  const { AppModule } = require("./app.module"); // Import your main application module

  async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000); // Start the server on port 3000
    console.log("NestJS server is running on http://localhost:3000");
  }
  bootstrap();

  // 10.2. NestJS Controllers: Controllers in NestJS are responsible for handling incoming requests and returning responses. You can define controllers using the @Controller() decorator. For example:
  const { Controller, Get } = require("@nestjs/common");

  @Controller("api")
  class ApiController {
    @Get("hello")
    getHello() {
      return { message: "Hello, World!" };
    }
  }

  // 10.3. NestJS Services: Services in NestJS are used to encapsulate business logic and data access. You can define services using the @Injectable() decorator. For example:
  const { Injectable } = require("@nestjs/common");

  @Injectable()
  class UserService {
    getUserById(id) {
      // Logic to retrieve user by ID
      return { id, name: "John Doe" };
    }
  }

  // 10.4. NestJS Dependency Injection: NestJS uses dependency injection to manage the lifecycle of services and controllers. You can inject services into controllers using the @Inject() decorator or by defining them in the constructor. For example:
  // const { Inject } = require("@nestjs/common");
  // @Controller("users")
  // class UserController {
  //   constructor(@Inject(UserService) private userService) {}
  //   @Get(":id")
  //   getUser(id) {
  //     return this.userService.getUserById(id); // Use the injected UserService to get user details
  //   }
  // }
}

/* 11.  Building & Consuming APIs - Hono */

{
  // 11.1. Hono: Hono is a lightweight and fast web framework for building APIs in Node.js. It is designed to be simple and easy to use, while providing powerful features for building APIs. You can install Hono using npm:
  // npm install hono
  const { Hono } = require("hono");
  const app = new Hono();
  // Example: Creating a simple API endpoint
  app.get("/api/hello", (c) => {
    return c.json({ message: "Hello, World!" });
  });

  // 11.2. Hono Middleware: Hono supports middleware functions that can be used to modify the request or response objects, end the request-response cycle, or call the next middleware function in the stack. Middleware is often used for tasks such as logging, authentication, and error handling. For example:
  app.use((c, next) => {
    console.log(`Request received: ${c.req.method} ${c.req.path}`);
    return next(); // Call the next middleware or route handler
  });

  // 11.3. Hono Route Parameters: Hono allows you to define route parameters using the colon (:) syntax in the route path. You can access route parameters using the context object. For example:
  app.get("/api/users/:id", (c) => {
    const userId = c.req.param("id"); // Access the "id" route parameter
    console.log("User ID:", userId);
    return c.json({ message: `User details for ID ${userId}` });
  });

  // 11.4. Hono error Handling: Hono provides a built-in error handling mechanism that allows you to handle errors in a centralized manner. You can define an error handler using the app.onError() method. For example:
  app.onError((err, c) => {
    console.error("Error occurred:", err.message);
    return c.json({ error: "Internal Server Error" }, 500); // Return a JSON response with a 500 status code
  });
}

/* 12. Building & Consuming APIs - Making API Calls */

{
  // 12.1. Making API Calls - Axios: Axios is a popular HTTP client for making API calls in Node.js. It provides a simple and intuitive API for sending HTTP requests and handling responses. You can install Axios using npm:
  // npm install axios
  const axios = require("axios");
  // Example: Making a GET request to an API
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      console.log("API Response:", response.data); // Output: API Response: [ { id: 1, title: '...', ... }, ... ]
    })
    .catch((error) => {
      console.error("Error making API call:", error.message);
    });

  // 12.2. Making API Calls - Fetch: The Fetch API is a built-in JavaScript API for making HTTP requests. In Node.js, you can use the node-fetch package to use the Fetch API. You can install node-fetch using npm:
  // npm install node-fetch
  const fetch = require("node-fetch");
  // Example: Making a GET request to an API
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      console.log("API Response:", data); // Output: API Response: [ { id: 1, title: '...', ... }, ... ]
    })
    .catch((error) => {
      console.error("Error making API call:", error.message);
    });

  // 12.3 http module: The built-in http module in Node.js can also be used to make API calls. It provides a low-level interface for sending HTTP requests and handling responses. Here's an example of making a GET request using the http module:
  const http = require("http");
  // Example: Making a GET request to an API
  http
    .get("http://jsonplaceholder.typicode.com/posts", (res) => {
      let data = "";
      // Listen for data chunks
      res.on("data", (chunk) => {
        data += chunk;
      });
      // Listen for the end of the response
      res.on("end", () => {
        console.log("API Response:", JSON.parse(data));
      });
    })
    .on("error", (error) => {
      console.error("Error making API call:", error.message);
    });

  // 12.4 Ky: Ky is a modern HTTP client for Node.js and browsers that is built on top of the Fetch API. It provides a simple and powerful API for making HTTP requests, handling responses, and managing request options. You can install Ky using npm:
  // npm install ky
  const ky = require("ky");
  // Example: Making a GET request to an API
  ky("https://jsonplaceholder.typicode.com/posts")
    .json()
    .then((data) => {
      console.log("API Response:", data); // Output: API Response: [ { id: 1, title: '...', ... }, ... ]
    })
    .catch((error) => {
      console.error("Error making API call:", error.message);
    });

  // 12.5 Got: Got is another popular HTTP client for Node.js that provides a simple and powerful API for making HTTP requests. It supports promises, streams, and async/await syntax. You can install Got using npm:
  // npm install got
  const got = require("got");
  // Example: Making a GET request to an API
  got("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      console.log("API Response:", JSON.parse(response.body)); // Output: API Response: [ { id: 1, title: '...', ... }, ... ]
    })
    .catch((error) => {
      console.error("Error making API call:", error.message);
    });
  // 12.6 Superagent: Superagent is a flexible and powerful HTTP client for Node.js that provides a simple API for making HTTP requests. It supports promises, streams, and async/await syntax. You can install Superagent using npm:
  // npm install superagent
  const superagent = require("superagent");
  // Example: Making a GET request to an API
  superagent
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      console.log("API Response:", response.body); // Output: API Response: [ { id: 1, title: '...', ... }, ... ]
    })
    .catch((error) => {
      console.error("Error making API call:", error.message);
    });

  // 12.7 Fetch with Async/Await: You can also use the Fetch API with async/await syntax for making API calls in Node.js. Here's an example:
  (async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      console.log("API Response:", data); // Output: API Response: [ { id: 1, title: '...', ... }, ... ]
    } catch (error) {
      console.error("Error making API call:", error.message);
    }
  })();
}

/* 13. Authentication */

{
  // 13.1. Authentication: Authentication is the process of verifying the identity of a user or system. In Node.js, you can implement authentication using various methods, such as session-based authentication, token-based authentication, and OAuth.

  // 13.2. Session-Based Authentication: Session-based authentication involves creating a session for a user after they log in. The server stores the session data, and the client sends a session ID with each request to verify the user's identity. You can use the express-session middleware in Express.js to implement session-based authentication. For example:
  const session = require("express-session");
  const express = require("express");
  const app = express();
  app.use(
    session({
      secret: "your-secret-key",
      resave: false,
      saveUninitialized: true,
    })
  );

  // 13.3. Token-Based Authentication: Token-based authentication involves generating a token (usually a JSON Web Token or JWT) after a user logs in. The client stores the token and sends it with each request to verify the user's identity. You can use the jsonwebtoken package to implement token-based authentication in Node.js. For example:
  const jwt = require("jsonwebtoken");
  const secretKey = "your-secret-key";
  // Generate a token
  const token = jwt.sign({ userId: 123 }, secretKey, { expiresIn: "1h" });
  console.log("Generated Token:", token);
  // Verify a token
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.error("Invalid Token:", err.message);
    } else {
      console.log("Decoded Token:", decoded);
    }
  });

  // 13.4 Passport.js: Passport.js is a popular authentication middleware for Node.js that provides a simple and flexible way to implement various authentication strategies, such as local authentication, OAuth, and OpenID Connect. You can install Passport.js using npm:
  // npm install passport passport-local
  const passport = require("passport");
  const LocalStrategy = require("passport-local").Strategy;
  // Example: Using Passport.js for local authentication
  passport.use(
    new LocalStrategy((username, password, done) => {
      // Logic to verify username and password
      if (username === "user" && password === "pass") {
        return done(null, { id: 1, username: "user" });
      } else {
        return done(null, false, { message: "Invalid credentials" });
      }
    })
  );
}

// 14. Monitor Changes (Dev)

{
  // 14.1. --watch: The --watch flag is a command-line option that can be used with Node.js to automatically restart the application when files change. This is useful during development to see changes without manually restarting the server. You can use it like this:
  // node --watch app.js
  // This will start the app.js file and watch for changes in the file. If you make any changes to the app.js file, the application will automatically restart.
  // 14.2. Nodemon: Nodemon is a popular tool that automatically restarts your Node.js application when file changes are detected. It is often used during development to avoid manually restarting the server after every change. You can install Nodemon globally using npm:
  // npm install -g nodemon
  // Example: Running a Node.js application with Nodemon
  // nodemon app.js
  // This will start the app.js file and watch for changes in the file. If you make any changes to the app.js file, Nodemon will automatically restart the application.
}

/* 15. Template engines */
{
  // 15.1 Template engines: Template engines are used to generate HTML dynamically by combining templates with data. In Node.js, you can use various template engines, such as EJS, Pug, and Handlebars. These engines allow you to create reusable templates and render them with data from your application.

  // 15.2 EJS: EJS is a template language or engine that allows you to generate HTML markup with pure JavaScript. And this is what makes it perfect for Nodejs applications. In simple words, the EJS template engine helps to easily embed JavaScript into your HTML template.
  // You can install EJS using npm:
  // npm install ejs

  // 15.2.1  set the view engine to ejs
  // app.set('view engine', 'ejs');

  // 15.2.2 Partials
  // <!DOCTYPE html>
  // <html lang="en">
  // <head>
  //   <%- include('../partials/head'); %>
  // </head>
  // <body class="container">

  // <header>
  //   <%- include('../partials/header'); %>
  // </header>

  // <main>
  //   <div class="jumbotron">
  //     <h1>This is great</h1>
  //     <p>Welcome to templating using EJS</p>
  //   </div>
  // </main>

  // <footer>
  //   <%- include('../partials/footer'); %>
  // </footer>

  // </body>
  // </html>

  // 15.2.3 Passing data to views and partials
  var express = require("express");
  var app = express();

  // set the view engine to ejs
  app.set("view engine", "ejs");

  // 15.2.4 use res.render to load up an ejs view file

  // index page
  app.get("/", function (req, res) {
    var mascots = [
      { name: "Sammy", organization: "DigitalOcean", birth_year: 2012 },
      { name: "Tux", organization: "Linux", birth_year: 1996 },
      { name: "Moby Dock", organization: "Docker", birth_year: 2013 },
    ];
    var tagline =
      "No programming concept is complete without a cute animal mascot.";

    res.render("pages/index", {
      mascots: mascots,
      tagline: tagline,
    });
  });

  // about page
  app.get("/about", function (req, res) {
    res.render("pages/about");
  });

  app.listen(8080);
  console.log("Server is listening on port 8080");

  // 15.2.5 Rendering a Single Variable in EJS
  // views/pages/index.ejs

  // <!DOCTYPE html>
  // <html lang="en">
  // <head>
  //   <%- include('../partials/head'); %>
  // </head>
  // <body class="container">

  // <header>
  //   <%- include('../partials/header'); %>
  // </header>

  // <main>
  //   <div class="jumbotron">
  //     <h1>This is great</h1>
  //     <p>Welcome to templating using EJS</p>

  //     <h2>Variable</h2>
  //     <p><%= tagline %></p>
  //   </div>
  // </main>

  // <footer>
  //   <%- include('../partials/footer'); %>
  // </footer>

  // </body>
  // </html>

  // 15.2.6 Rendering a List in EJS
  // views/pages/index.ejs

  //     <h2>List of Mascots</h2>
  //     <ul>
  //       <% mascots.forEach(function(mascot) { %>
  //         <li><%= mascot.name %> - <%= mascot.organization %> (<%= mascot.birth_year %>)</li>
  //       <% }); %>
  //     </ul>

  // 15.2.7 Passing Data to a Partial in EJS
  // The EJS partial has access to all the same data as the parent view. But be careful. If you are referencing a variable in a partial, it needs to be defined in every view that uses the partial or it will throw an error. You can also define and pass variables to an EJS partial in the include syntax like this:

  // views/pages/about.ejs
  // ...
  // <header>
  //   <%- include('../partials/header', {variant: 'compact'}); %>
  // </header>
  // ...

  // But you need to again be careful about assuming a variable has been defined. If you want to reference a variable in a partial that may not always be defined, and give it a default value, you can do so like this:

  // views/partials/header.ejs
  // ...
  // <em>Variant: <%= typeof variant != 'undefined' ? variant : 'default' %></em>
  // ...

  // 15.3 Pug: Pug is a high-performance template engine heavily influenced by Haml and implemented with JavaScript for Node.js and browsers. Pug was formerly called Jade. It allows you to write HTML in a more concise and readable way. Pug compiles to HTML and can be used with Node.js applications. To use Pug, you need to install it via npm:
  // npm install pug

  // 15.3.1 Set the view engine to Pug
  // app.set('view engine', 'pug');

  // 15.3.2 Creating a Pug template
  // views/pages/index.pug
  // doctype html
  // html(lang="en")
  //   head
  //     title My Pug App
  //   body
  //     h1 Welcome to My Pug App
  //     p This is a simple Pug template.

  // 15.3.3 Passing data to Pug templates
  // var express = require("express");
  // var app = express();

  // // set the view engine to pug
  // app.set("view engine", "pug");

  // // index page
  // app.get("/", function (req, res) {
  //   var mascots = [
  //     { name: "Sammy", organization: "DigitalOcean", birth_year: 2012 },
  //     { name: "Tux", organization: "Linux", birth_year: 1996 },
  //     { name: "Moby Dock", organization: "Docker", birth_year: 2013 },
  //   ];
  //   var tagline =
  //     "No programming concept is complete without a cute animal mascot.";

  //   res.render("pages/index", {
  //     mascots: mascots,
  //     tagline: tagline,
  //   });
  // });

  // // about page
  // app.get("/about", function (req, res) {
  //   res.render("pages/about");
  // });

  // app.listen(8080);
  // console.log("Server is listening on port 8080");

  // 15.3.4 Rendering a Single Variable in Pug
  // views/pages/index.pug
  // doctype html
  // html(lang="en")
  //   head
  //     title My Pug App
  //   body
  //     h1 Welcome to My Pug App
  //     p This is a simple Pug template.

  //     h2 Variable
  //     p= tagline

  // 15.3.5 Rendering a List in Pug
  // views/pages/index.pug
  //     h2 List of Mascots
  //     ul
  //       each mascot in mascots
  //         li= "#{mascot.name} - #{mascot.organization} (#{mascot.birth_year})"

  // 15.3.6 Passing Data to a Partial in Pug
  // The Pug partial has access to all the same data as the parent view. But be careful. If you are referencing a variable in a partial, it needs to be defined in every view that uses the partial or it will throw an error. You can also define and pass variables to a Pug partial in the include syntax like this:

  // views/pages/about.pug
  // ...
  // header
  //   include ../partials/header.pug variant='compact'
  // ...

  // But you need to again be careful about assuming a variable has been defined. If you want to reference a variable in a partial that may not always be defined, and give it a default value, you can do so like this:

  // views/partials/header.pug
  // ...
  // em Variant: #{typeof variant != 'undefined' ? variant : 'default'}

  // 15.4 Handlebars: Handlebars is a popular templating engine that allows you to create dynamic HTML templates with a simple and intuitive syntax. It is built on top of the Mustache templating language and provides additional features such as helpers and partials. You can install Handlebars using npm:
  // npm install handlebars

  // 15.4.1 Setting up Handlebars with Express
  // You can use the express-handlebars package to integrate Handlebars with Express.js:
  // npm install express-handlebars

  // 15.4.2 Creating a Handlebars Template
  // views/pages/index.hbs
  // <!DOCTYPE html>
  // <html lang="en">
  //   <head>
  //     <meta charset="UTF-8" />
  //     <meta name="viewport" content="width=device-width, initial-scale=1" />
  //     <title>My Handlebars App</title>
  //   </head>
  //   <body>
  //     <h1>Welcome to My Handlebars App</h1>
  //     <p>This is a simple Handlebars template.</p>
  //   </body>
  // </html>

  // 15.4.3 Passing Data to Handlebars Templates
  // var express = require("express");
  // var exphbs = require("express-handlebars");
  // var app = express();

  // // set the view engine to handlebars
  // app.engine("hbs", exphbs({ extname: ".hbs" }));
  // app.set("view engine", "hbs");

  // // index page
  // app.get("/", function (req, res) {
  //   var mascots = [
  //     { name: "Sammy", organization: "DigitalOcean", birth_year: 2012 },
  //     { name: "Tux", organization: "Linux", birth_year: 1996 },
  //     { name: "Moby Dock", organization: "Docker", birth_year: 2013 },
  //   ];
  //   var tagline =
  //     "No programming concept is complete without a cute animal mascot.";

  //   res.render("pages/index", {
  //     mascots: mascots,
  //     tagline: tagline,
  //   });
  // });

  // // about page
  // app.get("/about", function (req, res) {
  //   res.render("pages/about");
  // });

  // app.listen(8080);
  // console.log("Server is listening on port 8080");

  // 15.4.4 Rendering a Single Variable in Handlebars
  // views/pages/index.hbs
  // <!DOCTYPE html>
  // <html lang="en">
  //   <head>
  //     <meta charset="UTF-8" />
  //     <meta name="viewport" content="width=device-width, initial-scale=1" />
  //     <title>My Handlebars App</title>
  //   </head>
  //   <body>
  //     <h1>Welcome to My Handlebars App</h1>
  //     <p>This is a simple Handlebars template.</p>
  //   </body>
  // </html>

  // 15.4.5 Rendering a List in Handlebars
  // views/pages/index.hbs
  // <!DOCTYPE html>
  // <html lang="en">
  //   <head>
  //     <meta charset="UTF-8" />
  //     <meta name="viewport" content="width=device-width, initial-scale=1" />
  //     <title>My Handlebars App</title>
  //   </head>
  //   <body>
  //     <h1>Welcome to My Handlebars App</h1>
  //     <p>This is a simple Handlebars template.</p>
  //     <h2>List of Mascots</h2>
  //     <ul>
  //       {{#each mascots}}
  //         <li>{{name}} - {{organization}} ({{birth_year}})</li>
  //       {{/each}}
  //     </ul>
  //   </body>
  // </html>

  // 15. 5 Marko: Marko is a modern UI framework that allows you to build fast and efficient web applications. It uses a unique approach to rendering and offers features like server-side rendering, client-side hydration, and a powerful templating language. You can install Marko using npm:
  // npm install marko
  // If you're starting from scratch, you can use Marko's CLI commands to quickly create a starter app:
  // npm init marko
  // This will use an interactive CLI to automatically create a project for you using the pre-made starter template of your choosing. The basic template is the most minimal and the easiest way to get started. It uses our recommended app framework Marko Run that handles building, bundling, and serving your web application. These projects are config-free with built-in file based routing and automatic code reloading.
}


/* 16. Working with databases - NoSQL */

{
  // 16.6.1 Mongoose: Mongoose is a popular ODM (Object Data Modeling) library for MongoDB and Node.js. It provides a schema-based solution to model your application data and includes built-in type casting, validation, and query building.

  // You can install Mongoose using npm:
  // npm install mongoose

  // Once Mongoose is installed, you can use it to define your data models and interact with your MongoDB database. You can create a folder called db and add your Mongoose models there. A model is a JavaScript object that represents a collection in your MongoDB database and defines the structure of the documents within that collection.

  // 16.6.2 Prisma: Prisma is a modern database toolkit that simplifies database access and management. It provides a type-safe query builder, migrations, and a powerful ORM (Object-Relational Mapping) layer. Prisma provides an open source next-generation ORM in the TypeScript ecosystem. It offers a dedicated API for relation filters. It provides an abstraction layer that makes you more productive compared to writing SQL. Prisma currently supports PostgreSQL, MySQL, SQL Server, SQLite, MongoDB and CockroachDB. You can install Prisma using npm:
  // npm install prisma --save-dev
  // npx prisma init
  // This will create a new Prisma project with a schema.prisma file where you can define your data models and relationships.

  // 16.6.3 Native Drivers: Native drivers are the lowest-level way to interact with a database. They provide a direct interface to the database and are typically used for performance-critical applications. For example, the MongoDB Node.js driver allows you to interact with a MongoDB database using JavaScript.
}

/* 17. Working with databases - Relational */

{
  // 17.1 Drizzle: Drizzle lets you build your project the way you want, without interfering with your project or structure. Using Drizzle you can define and manage database schemas in TypeScript, access your data in a SQL-like or relational way, and take advantage of opt-in tools to make your developer experience amazing.
  // You can install Drizzle using npm:
  // npm install drizzle-orm
  // Once Drizzle is installed, you can use it to define your database schema and interact with your database in a type-safe manner.
  // Drizzle supports various databases, including PostgreSQL, MySQL, SQLite, and more. It provides a simple and intuitive API for querying and manipulating data.

  // 17.2 TypeORM: TypeORM is an ORM that can run in Node.js and can be used with TypeScript and JavaScript. It supports many SQL-based databases and provides a powerful set of features for working with relational data.
  // You can install TypeORM using npm:
  // npm install typeorm reflect-metadata
  // TypeORM requires the reflect-metadata package to be imported at the entry point of your application.

  // 17.3 Knex: Knex.js is a "batteries included" SQL query builder for PostgreSQL, CockroachDB, MSSQL, MySQL, MariaDB, SQLite3, Better-SQLite3, Oracle, and Amazon Redshift designed to be flexible, portable, and fun to use. To use Knex with node.js we have to install it using npm:
  // npm install knex
  // We also need to install the database driver for the database we're using. For example, if we're using PostgreSQL, we need to install the pg package:
  // npm install pg
  // Once Knex is installed, we can create a Knex instance and configure it to connect to our database.

  // 17.4 Sequelize: Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more. You can install Sequelize using npm:
  // npm install sequelize
  // You also need to install the database driver for the database you're using. For example, if we're using PostgreSQL, we need to install the pg package:
  // npm install pg
  // Once Sequelize is installed, you can use it to define your data models and interact with your database.

  // 17.5 Prisma: Prisma is a modern database toolkit that simplifies database access and management. It provides a type-safe query builder, migrations, and a powerful ORM (Object-Relational Mapping) layer. Prisma provides an open source next-generation ORM in the TypeScript ecosystem. It offers a dedicated API for relation filters. It provides an abstraction layer that makes you more productive compared to writing SQL. Prisma currently supports PostgreSQL, MySQL, SQL Server, SQLite, MongoDB and CockroachDB. You can install Prisma using npm:
  // npm install prisma --save-dev
  // npx prisma init
  // This will create a new Prisma project with a schema.prisma file where you can define your data models and relationships.

  // 17.6 Native Drivers: Native drivers are the lowest-level way to interact with a database. They provide a direct interface to the database and are typically used for performance-critical applications. For example, the MongoDB Node.js driver allows you to interact with a MongoDB database using JavaScript. Native drivers are often used in scenarios where you need fine-grained control over database operations or when working with databases that don't have a mature ORM ecosystem. However, using native drivers typically requires more boilerplate code and a deeper understanding of the database's query language. For example, the MongoDB Node.js driver provides a rich set of features for working with MongoDB, including support for transactions, aggregation, and change streams.
}

/* 18. Testing */

{
  // 18.1 Test: A test is a piece of code that verifies that another piece of code behaves as expected. In the context of Node.js applications, tests are typically written using a testing framework such as Mocha, Chai, or Jest.

  // 18.2 Vitest: Vitest is a fast unit test framework powered by Vite. It provides a great developer experience with features like hot module replacement (HMR), a rich API, and excellent TypeScript support. You can install Vitest using npm:
  // npm install vitest --save-dev
  // Once installed, you can create test files alongside your source files and run them using the Vitest CLI.

  // 18.3 Jest: Jest is a popular testing framework for JavaScript applications, including Node.js. It provides a simple and intuitive API for writing tests, along with features like snapshot testing, mocking, and code coverage. You can install Jest using npm:
  // npm install jest --save-dev
  // Once installed, you can create test files alongside your source files and run them using the Jest CLI.

  // 18.4 Mocha: Mocha is a flexible testing framework for Node.js that allows you to write tests in a variety of styles, including BDD (Behavior-Driven Development) and TDD (Test-Driven Development). You can install Mocha using npm:
  // npm install mocha --save-dev
  // Once installed, you can create test files alongside your source files and run them using the Mocha CLI.

  // 18.5 Node:test: Node:test is a built-in testing module in Node.js that provides a simple way to write and run tests. It is designed to work seamlessly with the Node.js ecosystem and can be used to test any Node.js application. You can create test files with the .test.js extension and run them using the Node.js command line. For example:
  // node test/example.test.js

  // 18.6 Cypress: Cypress is a powerful end-to-end testing framework that is designed for modern web applications. It provides a rich set of features for testing user interactions, including support for mocking APIs, simulating user actions, and inspecting application state. You can install Cypress using npm:
  // npm install cypress --save-dev
  // Once installed, you can create test files in the cypress/integration directory and run them using the Cypress Test Runner.

  // 18.7 Playwright: Playwright is a powerful end-to-end testing framework that is designed for modern web applications. It provides a rich set of features for testing user interactions across different browsers, including support for mocking APIs, simulating user actions, and inspecting application state. You can install Playwright using npm:
  // npm install playwright --save-dev
  // Once installed, you can create test files in the tests directory and run them using the Playwright Test Runner.

}

/* 19 Logging */

{
  // 19.1 Winston: Winston is a popular logging library for Node.js that provides a simple and flexible API for logging messages. It supports multiple transports (e.g., console, file, HTTP) and allows you to customize the log format and level. You can install Winston using npm:
  // npm install winston --save
  // Once installed, you can create a logger instance and use it to log messages at different levels (e.g., info, warn, error). For example:

  // const winston = require('winston');
  // const logger = winston.createLogger({
  //   level: 'info',
  //   format: winston.format.json(),
  //   transports: [
  //     new winston.transports.Console(),
  //     new winston.transports.File({ filename: 'error.log', level: 'error' }),
  //   ],
  // });

  // 19.2 Morgan: Morgan is a middleware for logging HTTP requests in Node.js applications. It provides a simple way to log request details, such as the request method, URL, and response time. You can install Morgan using npm:
  // npm install morgan --save
  // Once installed, you can use Morgan as middleware in your Express application. For example:

  // const morgan = require('morgan');
  // app.use(morgan('combined'));

  // Morgan is used in combination with Winston to provide a comprehensive logging solution for your application. For example:

  // const express = require('express');
  // const app = express();
  // app.use(morgan('combined', { stream: { write: (message) => logger.info(message.trim()) } }));

  // This way, all HTTP requests will be logged using Winston, providing a consistent logging format across your application.
}

/* 20. Keep app running */

{
  // 20.1 PM2: PM2 is a popular process manager for Node.js applications that makes it easy to keep your app running. You can install PM2 globally using npm:
  // npm install pm2 -g
  // Once installed, you can start your application using PM2:
  // pm2 start app.js
  // PM2 will keep your app running in the background and automatically restart it if it crashes.
}

/* 21. Threads */
// Node.js is a single-threaded language and gives us ways to work parallelly to our main process. Taking note of nowadays multicore system single threading is very memory efficient.

{
  // 21.1 Worker Threads: Node.js provides a built-in module called 'worker_threads' that allows you to create multiple threads for parallel execution. This can be useful for CPU-intensive tasks. You can use the Worker class to create a new thread and communicate with it using message passing. For example:

  // const { Worker } = require('worker_threads');
  // const worker = new Worker('./worker.js');
  // worker.on('message', (result) => {
  //   console.log('Result from worker:', result);
  // });
  // worker.postMessage('Hello, worker!');

  // 21.2 Cluster: Node.js provides a built-in module called 'cluster' that allows you to create multiple instances of your application to take advantage of multi-core systems. This can help improve the performance and scalability of your application. For example:

  // const cluster = require('cluster');
  // const numCPUs = require('os').cpus().length;

  // if (cluster.isMaster) {
  //   for (let i = 0; i < numCPUs; i++) {
  //     cluster.fork();
  //   }
  // } else {
  //   // Start your application
  // }

  // Some cases where you might want to use threads or clusters include:
  // - CPU-intensive tasks (e.g., image processing, data analysis)
  // - Handling a large number of simultaneous connections
  // - Offloading work from the main thread to improve responsiveness

  // 21.3 Child Processes: The 'child_process' module in Node.js allows you to spawn new processes and communicate with them. This can be useful for running external commands or scripts, or for offloading work to separate processes. For example:

  // const { exec } = require('child_process');
  // exec('ls -la', (error, stdout, stderr) => {
  //   if (error) {
  //     console.error(`Error: ${error.message}`);
  //     return;
  //   }
  //   if (stderr) {
  //     console.error(`Stderr: ${stderr}`);
  //     return;
  //   }
  //   console.log(`Stdout: ${stdout}`);
  // });
}

/* 22. Streams */

{
  // 22.1 Streams: Streams are a powerful feature in Node.js that allow you to read and write data in a continuous flow. They are particularly useful for handling large amounts of data, such as files or network connections, without having to load the entire dataset into memory at once.

  // 22.2 Types of Streams: There are four main types of streams in Node.js:
  // - Readable streams: Used for reading data from a source (e.g., file, network).
  // - Writable streams: Used for writing data to a destination (e.g., file, network).
  // - Duplex streams: Can be both readable and writable (e.g., TCP sockets).
  // - Transform streams: A type of duplex stream that can modify or transform the data as it is read or written (e.g., zlib compression).

  // Multiple streams can be chained together using pipe() method.

  // 22.3 Using Streams: You can use streams in Node.js by importing the 'stream' module and creating instances of the appropriate stream type. For example, to read a file using a readable stream:

  const fs = require("fs");
  const readableStream = fs.createReadStream("input.txt");
  readableStream.on("data", (chunk) => {
    console.log("Received chunk:", chunk);
  });

  // To write to a file using a writable stream:
  const writableStream = fs.createWriteStream("output.txt");
  writableStream.write("Hello, world!\n");
  writableStream.end();
  writableStream.on("finish", () => {
    console.log("Finished writing to file.");
  });

  // To transform data using a transform stream:
  const { Transform } = require("stream");
  const upperCaseTransform = new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.toString().toUpperCase());
      callback();
    },
  });
  readableStream.pipe(upperCaseTransform).pipe(writableStream);

  // Streams are particularly useful for handling large files or data sources, as they allow you to process data in smaller chunks, reducing memory usage and improving performance.

  // Some common use cases for streams include:
  // - Reading and writing large files
  // - Handling HTTP requests and responses
  // - Processing data from databases or APIs
  // - Real-time data processing (e.g., WebSockets, chat applications)

  // Here some popular stream libraries:
  // - Streamifier: A simple library for converting strings, buffers, and arrays into readable streams.
  // - Highland: A high-level stream library that provides a functional programming style for working with streams.
  // - Through2: A small library for creating transform streams with a simple API.
  // - RxJS: A reactive programming library that provides a powerful way to work with streams of data using observables.

  // - Node.js built-in 'stream' module: Provides a set of utilities for working with streams, including readable, writable, and transform streams.

  // 22.4 Streams applications examples:
  // - File processing: Reading and writing large files in chunks to avoid loading the entire file into memory.
  // - Data transformation: Transforming data as it is read or written, such as compressing or encrypting data.
  // - Real-time data processing: Handling real-time data streams, such as WebSocket connections or live data feeds.
  // - Network communication: Reading and writing data over network connections, such as TCP sockets or HTTP requests/responses.

  // 22.5 Website examples:
  // - Video streaming platforms: Services like YouTube and Netflix use streams to deliver video content to users in real-time.
  // - Music streaming services: Platforms like Spotify and Apple Music use streams to deliver audio content to users.
  // - File sharing services: Services like Dropbox and Google Drive use streams to upload and download files efficiently.
  // - Real-time collaboration tools: Applications like Google Docs and Slack use streams to enable real-time collaboration and communication between users.

  // Streams are a fundamental part of Node.js and are widely used in various applications to handle data efficiently and effectively. In the backend, streams are commonly used for file processing, data transformation, and network communication. In the frontend, streams are often used for handling real-time data, such as WebSocket connections and live data feeds. The stream functions are efficient and help in reducing memory consumption, making them ideal for handling large datasets and real-time applications. They are efficient because they process data in smaller chunks, allowing for better memory management and improved performance.
}

/* 23. Debugging */

{
  // 23.1 Debugging: Debugging is the process of identifying and fixing errors or bugs in your code. In Node.js, there are several tools and techniques you can use to debug your applications. Debugging is a concept to identify and remove errors from software applications. It is a crucial part of the software development process, as it helps ensure that the application functions correctly and meets the desired requirements.

  // Why not to use console.log() for debugging?
  // Using console.log to debug the code generally dives into an infinite loop of “stopping the app and adding a console.log, and start the app again” operations. Besides slowing down the development of the app, it also makes the writing dirty and creates unnecessary code. Finally, trying to log out variables alongside with the noise of other potential logging operations, may make the process of debugging difficult when attempting to find the values you are debugging.

  // 23.2 Built-in Debugger: Node.js has a built-in debugger that you can use to step through your code and inspect variables. You can start the debugger by running your Node.js application with the --inspect flag:
  // node --inspect app.js
  // This will start your application and open a debugging session that you can connect to using a compatible debugger, such as Chrome DevTools or Visual Studio Code. You can set breakpoints, step through your code, and inspect variables to help identify and fix issues.

  // 23.3 Visual Studio Code Debugger: If you're using Visual Studio Code as your code editor, you can take advantage of its built-in debugging capabilities for Node.js applications. You can create a launch configuration in your workspace settings to define how to start and debug your application. Once configured, you can set breakpoints, step through your code, and inspect variables directly within the editor.

  // 23.4 Third-Party Debugging Tools: There are several third-party debugging tools available for Node.js applications, such as:
  // - Node Inspector: A web-based debugger that allows you to debug your Node.js applications using Chrome DevTools.
  // - ndb: An improved debugging experience for Node.js applications that provides a more user-friendly interface and additional features.
  // - Debug: A simple debugging utility that allows you to add debug statements to your code and control the output using environment variables.

  // These tools can provide additional features and capabilities that may be useful for debugging your applications.

  // 23.5 Browser DevTools: If your Node.js application is running in a browser environment (e.g., using Electron or NW.js), you can use the browser's built-in developer tools to debug your application. Most modern browsers, such as Chrome and Firefox, have powerful developer tools that allow you to inspect elements, view console output, and debug JavaScript code. TO debug on the browser, you can use the following command:
  // node --inspect-brk app.js
  // This will start your application and pause execution at the first line of code, allowing you to connect to the debugger using the browser's developer tools. 

  // 23.6.1 Memory Leaks: Memory leaks can occur in Node.js applications when objects are not properly released from memory, leading to increased memory usage over time. To identify and fix memory leaks, you can use tools such as:
  // - Chrome DevTools: You can use the Memory tab in Chrome DevTools to take heap snapshots and analyze memory usage in your application.
  // - Node.js built-in heap profiler: You can use the --inspect flag with the --heap-profiler option to generate heap profiles that can be analyzed using tools like Chrome DevTools or the node-heapdump package.
  // - Third-party tools: There are several third-party tools available for detecting and fixing memory leaks in Node.js applications, such as memwatch-next and leakage.

  // 23.6.2 Garbage Collection: Node.js uses a garbage collector to automatically manage memory allocation and deallocation. However, in some cases, you may need to manually trigger garbage collection to free up memory. You can do this by using the --expose-gc flag when starting your Node.js application:

  // 23.7 node --inspect: The --inspect flag enables the V8 inspector integration, allowing you to debug your Node.js application using Chrome DevTools or other compatible debuggers. You can start your application with the --inspect flag like this:
  // node --inspect app.js
  // This will start your application and open a debugging session that you can connect to using a compatible debugger. You can set breakpoints, step through your code, and inspect variables to help identify and fix issues.

}