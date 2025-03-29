import express from 'express';

import {createServer} from 'http'; 
import {Server} from 'socket.io'


const app=express(); 
const httpServer =  createServer(app); 
const io =  new Server(httpServer); 


//connection 

io.on("connection" ,(socket)=>{
    console.log("a user connected ",socket.id); 

socket.on("join-room",(data)=>{
    console.log(data, "from serverside")
//Join the room 
    socket.join(data.room); 
//Emit a event to tell others that new user joined. 
socket.broadcast.to(data.room).emit("new-user-joined" , data.name); 
})





})







const PORT = process.env.PORT ||= 4500;

httpServer.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
}); 


 

















