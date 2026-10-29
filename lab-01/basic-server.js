/**
 * Lab 1: Node.js and Express Server
 * File: basic-server.js
 * Description: Basic HTTP server built using Node.js's native 'http' module.
 * Subject: Backend Development Fundamentals
 * Module: Node.js and Express.js Fundamentals
 * Institution: Aurora
 * Faculty: Joel Prashanth D
 * 
 * -----------------------------------------------------------------------------
 * VIVA & THEORY EXPLANATION FOR STUDENTS:
 * -----------------------------------------------------------------------------
 * 1. Request Object (req):
 *    - An instance of http.IncomingMessage.
 *    - Represents the incoming HTTP request from the client (browser, Postman, etc.).
 *    - Contains request metadata such as:
 *      * req.url    -> The requested URL path (e.g., '/', '/about').
 *      * req.method -> The HTTP method used (GET, POST, PUT, DELETE, etc.).
 *      * req.headers-> HTTP headers sent by the client (User-Agent, Accept, etc.).
 * 
 * 2. Response Object (res):
 *    - An instance of http.ServerResponse.
 *    - Used to craft and deliver the outgoing HTTP response back to the client.
 *    - Key methods:
 *      * res.writeHead(statusCode, headers) -> Sets status code (e.g., 200) and headers.
 *      * res.write(chunk)                  -> Sends data in parts/chunks to the client.
 *      * res.end([data])                   -> Signals that all response data and headers
 *                                             have been sent; closes the HTTP connection.
 * 
 * 3. server.listen(port, [host], [callback]):
 *    - Binds the created HTTP server to a network port (e.g., 3000).
 *    - Puts the server in an active listening state, waiting for incoming TCP connections.
 *    - The optional callback executes once the server has successfully bound to the port.
 * 
 * -----------------------------------------------------------------------------
 * HOW TO RUN:
 *   node basic-server.js
 * 
 * HOW TO TEST:
 *   Browser / curl: http://localhost:3000
 *   Expected Output: Hello
 *   Expected Status: 200 OK
 * -----------------------------------------------------------------------------
 */

// Step 1: Import Node.js built-in 'http' module (No npm install required)
const http = require('http');

// Step 2: Define port number
const PORT = 3000;

// Step 3: Create the HTTP server
// The callback (req, res) runs every time an HTTP request hits port 3000
const server = http.createServer((req, res) => {
  try {
    // Log the request to terminal for debugging and demonstration
    console.log(`[${new Date().toLocaleTimeString()}] Request received: ${req.method} ${req.url}`);

    // Set HTTP status code 200 (OK) and Content-Type header to plain text
    res.writeHead(200, {
      'Content-Type': 'text/plain; charset=utf-8'
    });

    // Send the required plain-text response 'Hello' and close the connection
    res.end('Hello');
  } catch (error) {
    // Handle unexpected runtime errors gracefully
    console.error('Server error handling request:', error.message);
    if (!res.headersSent) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('500 Internal Server Error');
    }
  }
});

// Step 4: Handle server-level startup errors (e.g., Port already in use)
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\n[ERROR] Port ${PORT} is already in use by another application!`);
    console.error(`Fix: Stop the application using port ${PORT} or change PORT in basic-server.js.\n`);
  } else {
    console.error(`\n[ERROR] Server error: ${err.message}\n`);
  }
  process.exit(1);
});

// Step 5: Start the server and listen on port 3000
server.listen(PORT, () => {
  console.log('====================================================');
  console.log('   Basic Node.js HTTP Server (Built-in http module)');
  console.log('====================================================');
  console.log(` Server started successfully!`);
  console.log(` Access URL : http://localhost:${PORT}`);
  console.log(` Response   : Hello (Plain Text)`);
  console.log(` Stop Server: Press Ctrl + C`);
  console.log('====================================================');
});

