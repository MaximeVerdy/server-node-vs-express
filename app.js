////////////////////////////////////////////////
/////////// NODE SERVER, NO EXPRESS ////////////
////////////////////////////////////////////////

// Import the 'http' module, a core Node.js API, providing the essentials for handling HTTP transactions.
// Direct utilization of this module illustrates a lower-level approach compared to frameworks like Express, offering fine-grained control over the HTTP lifecycle.
const http = require('http');

// Instantiate an HTTP server. The provided callback is an event listener that reacts to 'request' events,
// illustrating the event-driven nature of Node.js. This pattern is crucial for non-blocking I/O operations.
http.createServer((req, res) => {
  // The response starts with writing headers. Setting the status to 200 indicates success.
  // The 'Content-Type' header is critical for client interpretation of the response.
  res.writeHead(200, {'Content-Type': 'text/html'});

  // Parsing the request URL.This routing mechanism is rudimentary but demonstrates the foundational logic for handling different request paths.
  const url = req.url;
  switch(url) {
    case '/about':
      // Dynamic content generation is simplified for demonstration. In practice, template engines or server-side rendering solutions are used here.
      res.write('<h1>About Me</h1>');
      break;
    case '/contact':
      // This contact page example is static, but real-world applications should sanitize and validate user data rigorously.
      res.write('<h1>Contact Me</h1>');
      break;
    default:
      // The default case acts as a catch-all, an essential concept for ensuring a robust user experience by handling unexpected routes.
      res.write('<h1>Landing Page</h1>');
  }

  // Conclude the response. This operation finalizes the response cycle, sending all pending data to the client.
  // In complex scenarios, `res.end` might be called conditionally or as part of asynchronous operations.
  res.end(); 

// Binding the server to a port is a non-blocking operation, showcasing Node.js's non-blocking I/O model.
// The callback confirms startup, serving as a basic example of asynchronous callbacks that are central to Node.js's design philosophy.
}).listen(3000, () => console.log("Server started at port 3000"));



////////////////////////////////////////////////
//////////////// EXPRESS SERVER ////////////////
////////////////////////////////////////////////

// Importing Express, framework for Node.js.
// Express abstracts away the low-level handling of HTTP transactions, encapsulating Node.js's native `http` module.
const express = require('express');

// Creating an Express application. This step replaces the manual setup of an HTTP server
// and wraps all the low-level logic for listening to requests and sending responses.
const app = express();

// Defining routes with Express. Each route is defined by a specific method (get, post, etc.),
// simplifying routing compared to the switch or if/else used with the `http` module.
app.get('/', (req, res) => {
  // Express automatically handles headers and HTTP status here,
  // replacing manual calls to res.writeHead and res.write in the `http` server.
  // Express's res.send method simplifies response sending. Here, it directly replaces
  // the logic of res.write followed by res.end, making the code more readable and concise.
  res.send('<h1>Landing Page</h1>');
});
app.get('/about', (req, res) => {
  res.send('<h1>About Me</h1>');
});

app.get('/contact', (req, res) => {
  res.send('<h1>Contact Me</h1>');
});

// Starting the server on port 3000. Express encapsulates the call to .listen
app.listen(3000, () => {
  console.log('Server started at port 3000');
});


