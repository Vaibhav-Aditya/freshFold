# Simple Node.js Static Server

This project is a basic web server built with **Node.js**. It uses the native `http` and `fs` modules to serve static HTML pages and images based on the requested URL.

-----

## How It Works (`server.js`)

The server's logic is contained entirely within the `server.js` file. Here’s a step-by-step breakdown of its operation.

### 1\. Importing Modules 📦

The script begins by importing two core Node.js modules:

  * `const http = require('http');`: The `http` module provides the capabilities to create an HTTP server that can listen for and respond to requests.
  * `const fs = require('fs');`: The `fs` (File System) module allows the server to interact with the file system, which is used here to read HTML files and images from the disk.

### 2\. Server Creation and Request Handling 🔄

The main logic is wrapped inside `http.createServer()`.

  * `http.createServer((req, res) => { ... })` creates a new instance of an HTTP server.
  * The callback function `(req, res)` is the request handler, which is executed **every time** a client sends a request to the server.
      * `req` (Request): An object containing information about the incoming request, such as the URL (`req.url`) and the HTTP method (`req.method`).
      * `res` (Response): An object used to send a response back to the client.

### 3\. Routing 🗺️

The server implements a simple routing mechanism using a series of `if/else if` statements to check the request's URL.

  * It inspects `req.url` to determine which page or asset the user is asking for.
  * It handles routes for HTML pages (`/`, `/home`, `/about`, `/contact`) and images (`/logo.png`, `/laundry.png`).
  * For text-based routes, `url.toLowerCase()` is used to make them case-insensitive (e.g., `/About` will be treated the same as `/about`).

### 4\. Serving Files 📄

Once a route is matched, the server reads the corresponding file from the disk.

  * `fs.readFileSync()`: This method is used to read file contents **synchronously**.
      * **HTML Files**: For files like `index.html`, the encoding `"utf-8"` is specified to read the file as a text string.
      * **Image Files**: For `.png` files, no encoding is specified. Node.js reads the file as a raw **Buffer**, which is the correct way to handle binary data like images.
  * `res.write(data)`: Writes the file content (the HTML string or the image Buffer) into the response body.
  * `return res.end()`: Finalizes the response and signals to the server that the request has been fully handled. Using `return` here is a good practice to exit the function immediately after sending the response.

### 5\. Error Handling 🚨

If a request is made to a URL that does not match any of the defined routes, the final `else` block is executed.

  * `res.writeHead(404)`: Sets the HTTP status code of the response to `404 Not Found`.
  * It then reads and serves a custom error page located at `./assests/error/index.html`.

### 6\. Starting the Server ▶️

  * `.listen(PORT, () => { ... })`: This method binds the server to the specified `PORT` (in this case, 3000) and starts listening for incoming connections.
  * The callback function logs a confirmation message to the console, so you know the server is up and running.

-----

## Expected File Structure

For the server to work correctly, your project must have the following file structure:

```
.
├── assests/
│   ├── about/
│   │   └── index.html
│   ├── contact/
│   │   └── index.html
│   ├── error/
│   │   └── index.html
│   └── home/
│       └── index.html
├── logo.png
├── laundry.png
└── server.js
```

-----

## How to Run

1.  **Node.js Installation**: Ensure you have [Node.js](https://nodejs.org/) installed on your machine.
2.  **Project Setup**: Create the files and folders as shown in the file structure above.
3.  **Start the Server**: Open your terminal, navigate to the project's root directory, and run the following command:
    ```bash
    node server.js
    ```
4.  **Access the Server**: You will see the message `Server running on http://localhost:3000`. Open your web browser and navigate to this address.

-----