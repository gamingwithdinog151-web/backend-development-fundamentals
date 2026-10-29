/**
 * Lab 1: Node.js and Express Server
 * File: server.js
 * Description: Express.js REST server implementing required lab endpoints and 404 middleware.
 * Subject: Backend Development Fundamentals
 * Module: Node.js and Express.js Fundamentals
 * Institution: Aurora
 * Faculty: Joel Prashanth D
 * 
 * -----------------------------------------------------------------------------
 * VIVA & ARCHITECTURE NOTES FOR STUDENTS:
 * -----------------------------------------------------------------------------
 * 1. Why Express.js instead of raw Node.js 'http'?
 *    - Built-in intuitive routing (app.get, app.post, etc.).
 *    - Seamless JSON response handling via res.json().
 *    - Middleware pipeline architecture for modular request processing.
 *    - Minimal boilerplate compared to parsing URLs manually in raw http.
 * 
 * 2. Middleware Concept:
 *    - Functions that have access to the request object (req), response object (res),
 *      and the next middleware function in the application’s request-response cycle.
 *    - Route handlers are middleware functions bound to specific HTTP paths and methods.
 *    - The 404 catch-all handler is placed at the end of the middleware stack so it
 *      only runs if no preceding route matched the incoming request.
 * -----------------------------------------------------------------------------
 */

// Step 1: Import Express framework
// Express is a lightweight, flexible Node.js web application framework
const express = require('express');

// Step 2: Initialize Express application instance
const app = express();

// Step 3: Define server port
// Uses process.env.PORT for cloud deployment environments (e.g., Render, Railway)
// Falls back to local development port 3000 if process.env.PORT is not set
const PORT = process.env.PORT || 3000;

// Optional helper middleware: Parse JSON body for incoming requests (good practice)
app.use(express.json());

// -----------------------------------------------------------------------------
// ENDPOINT 1: GET /
// Purpose: Welcome endpoint verifying server is alive and functioning
// Expected Status: 200 OK
// Expected Content-Type: text/plain or text/html
// -----------------------------------------------------------------------------
app.get('/', (req, res) => {
  // res.status(200) explicitly sets HTTP status code to 200 OK
  // res.send() sends a plain-text response and automatically sets Content-Type
  res.status(200).send('Welcome to Lab 1: Node.js and Express Server!');
});

// -----------------------------------------------------------------------------
// ENDPOINT 2: GET /about
// Purpose: Returns student information and lab details in JSON format
// Expected Status: 200 OK
// Expected Content-Type: application/json
// Note: Replace "YOUR_NAME" and "YOUR_SECTION" with your actual details!
// -----------------------------------------------------------------------------
app.get('/about', (req, res) => {
  const studentInfo = {
    name: "YOUR_NAME",
    section: "YOUR_SECTION",
    lab: "Lab 1: Node.js and Express Server"
  };

  // res.json() automatically serializes the JavaScript object into JSON
  // and sets the 'Content-Type: application/json' response header
  res.status(200).json(studentInfo);
});

// -----------------------------------------------------------------------------
// ENDPOINT 3: GET /time
// Purpose: Returns current dynamic server date and time
// Expected Status: 200 OK
// Expected Content-Type: application/json
// -----------------------------------------------------------------------------
app.get('/time', (req, res) => {
  // Dynamically generate current ISO timestamp on every request
  const currentTimestamp = new Date().toISOString();

  const timeData = {
    currentDateTime: currentTimestamp,
    message: "Current server date and time"
  };

  res.status(200).json(timeData);
});

// -----------------------------------------------------------------------------
// ENDPOINT 4: Unknown Routes Catch-All Middleware (404 Not Found)
// IMPORTANT: This middleware MUST be defined AFTER all valid routes!
// If an incoming request does not match GET /, GET /about, or GET /time,
// it cascades down to this handler.
// Expected Status: 404 Not Found
// Expected Content-Type: application/json
// -----------------------------------------------------------------------------
app.use((req, res) => {
  res.status(404).json({
    error: "404 Not Found",
    message: "The requested route does not exist."
  });
});

// -----------------------------------------------------------------------------
// Global Error-Handling Middleware (Best Practice for Production / VIVA)
// Catches any unexpected internal server exceptions
// -----------------------------------------------------------------------------
app.use((err, req, res, next) => {
  console.error('Unhandled application error:', err.stack);
  res.status(500).json({
    error: "500 Internal Server Error",
    message: "An unexpected error occurred on the server."
  });
});

// -----------------------------------------------------------------------------
// Start the Express server
// app.listen binds to the designated port and begins accepting incoming requests
// -----------------------------------------------------------------------------
const server = app.listen(PORT, () => {
  console.log('====================================================');
  console.log('   Express.js Web Server (Backend Fundamentals)');
  console.log('====================================================');
  console.log(` Server successfully started!`);
  console.log(` Running at: http://localhost:${PORT}`);
  console.log(` Port Mode : ${process.env.PORT ? 'Cloud (process.env.PORT)' : 'Local Default (3000)'}`);
  console.log(' Available Endpoints:');
  console.log(`   - GET  http://localhost:${PORT}/`);
  console.log(`   - GET  http://localhost:${PORT}/about`);
  console.log(`   - GET  http://localhost:${PORT}/time`);
  console.log(`   - 404  http://localhost:${PORT}/unknown (or any undefined route)`);
  console.log(' Stop Server: Press Ctrl + C');
  console.log('====================================================');
});

// Handle EADDRINUSE gracefully
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\n[ERROR] Port ${PORT} is already in use by another process!`);
    console.error(`Please terminate the conflicting process or run on a different port:\n  PORT=3001 node server.js\n`);
  } else {
    console.error(`\n[ERROR] Server startup error: ${err.message}\n`);
  }
  process.exit(1);
});

module.exports = app; // Export app for testing purposes

