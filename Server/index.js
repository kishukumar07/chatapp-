import express from 'express';

import {createServer} from 'http'; 
import {Server} from 'socket.io'


const app=express(); 
const httpServer =  createServer(app); 
const io =  new Server(httpServer); 

io.on("connection" ,(socket)=>{
    console.log("a user connected"); 

socket.on("join-room",(data)=>{
    console.log(data, "from serverside")
})





})







const PORT = process.env.PORT ||= 4500;

httpServer.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
}); 


 

















