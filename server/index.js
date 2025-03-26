const express = require('express'); 
const { Server } = require('socket.io');  // Importing the Server class from the socket.io module
const http = require('http');  // Importing the HTTP module since Socket.IO requires an HTTP server

let app = express();  // Initializing an Express application instance  

const httpServer = http.createServer(app);  // Creating an HTTP server using the Express app instance  

const io = new Server(httpServer);  // Creating a Socket.IO server instance using the HTTP server  

// WebSocket connection event  
io.on("connection", (socket) => {  // Triggered when a client connects to the server  
    console.log("A user connected");  
});

httpServer.listen(4550, () => {
    console.log("Listening on port 4550");
});  // Starts the server on port 4550
