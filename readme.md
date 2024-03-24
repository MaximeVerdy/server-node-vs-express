This repository conducts a comparative exploration between constructing a web server using Node.js's primitives and the abstraction provided by Express. 
_See comments in the code for more specific information._

## Node.js and Express: Core Principles

At its most elemental level, a Node.js server directly leverages the `http` module to orchestrate the HTTP transaction lifecycle. This approach illustrates the direct interaction with the HTTP protocol, requiring explicit management of requests, responses, and routing. Express introduces a layer of abstraction over the `http` module. It encapsulates common web development patterns, accelerating the setup of robust and maintainable web servers.

### The Benefits of Avoiding Express
- **Granular Control and Flexibility**: Direct control over the HTTP request/response flow allows for custom behavior, crucial for advanced data streaming or header manipulation.
- **Minimal Dependencies and Lightweight**: Smaller memory footprint and potentially improved security. Minimal dependencies aid in avoiding long-term maintenance issues related to dependency version management.
- **Understanding of Node.js and HTTP**

### Contributions of Express

- **Routing Simplification**: Streamlines route definition, reducing the complexity of manual routing.
- **Automated Management**: Handles HTTP responses, including headers and status codes, transparently, easing the manual control burden.
- **Middleware Architecture**: Allows for a modular and reusable composition of application logic, promoting DRY and SOLID principles.