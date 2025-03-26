const express = require('express'); 
const { Server } = require('socket.io');  // Importing the Server class from the socket.io module
const http = require('http');  // Importing the HTTP module since Socket.IO requires an HTTP server

let app = express();  // Initializing an Express application instance  

const httpServer = http.createServer(app);  // Creating an HTTP server using the Express app instance  

const io = new Server(httpServer);  // Creating a Socket.IO server instance using the HTTP server  

// WebSocket connection event  
io.on("connection", (socket) => {  // Triggered when a client connects to the server  
    console.log("A user connected",socket.id);   

    //after the chat.js emit on joinroom custom event ....
socket.on("join-room",(data)=>{
    // console.log(data);   //from chat.js liked with index.html  willget data that we passing   
    socket.join(data.room); //this will internally create a room that room we provided and put the user into that .....

//Emit a event to tell others that new user joined.(you will see when someone joined the chat )
socket.broadcast.to(data.room).emit("new-user-joined",data.name); //using .broadcast all clients will get except the user that joined the chat ...also lets listen to this on frontend side ...
//but need to brodcast this msg to only a particular room ...

})




});



httpServer.listen(4550, () => {
    console.log("Listening on port 4550");
});  // Starts the server on port 4550
