# Unhandled Promise Rejection in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications: unhandled promise rejections within asynchronous operations, specifically within an HTTP server.  The bug showcases how an unhandled error within an asynchronous operation can lead to a silent failure without providing appropriate feedback to the client or logging detailed error information.

The solution demonstrates how to properly handle the error using `.catch()` to provide more robust error handling.