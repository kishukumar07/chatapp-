import express from 'express';
import path from "path";              // Import path module

import { createServer } from 'http';
import { Server } from 'socket.io'
import { getAUser, allUser, deleteUser, joinUser } from './helper/util.js';

import { fileURLToPath } from "url";  // Import to handle file URLs



//manually defining the _dirname.
// 🔹 Convert import.meta.url to a normal path
const __filename = fileURLToPath(import.meta.url); // Get full file path
const __dirname = path.dirname(__filename);        // Extract directory path



const app = express();
app.use(express.static("public")) // serving all the files from the backend .  
const httpServer = createServer(app);
const io = new Server(httpServer);




app.get("/room", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "chat.html"));
})



//connection 
io.on("connection", (socket) => {
    console.log("a user connected ", socket.id);


    socket.on("join-room", (data) => {
        // console.log(data, "from serverside"); 

        //Join the room 
        socket.join(data.room);
        //mentioning track who joined in which room . 
        joinUser(socket.id, data.name, data.room);

        // console.log("All users in room:", allUser(data.room));

        //Emit a event to tell others that new user joined. 
        socket.broadcast.to(data.room).emit("new-user-joined", data);
        //also emitting the all users 

        // console.log(allUser(data.room)); 

        socket.broadcast.to(data.room).emit("online-users", allUser(data.room));


        //emit message to client  
        socket.on("chat", (data) => {
            io.to(data.room).emit("chat", {
                name: data.name,
                message: data.message,
            });
        });

        // broadcast who is typing
        socket.on("typing", (data) => {
            socket.broadcast.to(data.room).emit("typing", { name: data.name });
        });

        // when user leaves the room remove user from users array and notify other in that room.
        
        
        socket.on("disconnect", () => {
            deleteUser(socket.id);
            // socket.broadcast.to(data.room).emit("user-left", data.name);
            socket.broadcast.to(data.room).emit("online-users", allUser(data.room));
            console.log("Disconnected"); 
            
        });
   
   
   
   
    }) //at join-user





    






});






const PORT = process.env.PORT ||= 4500;

httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




















