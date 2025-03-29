import express from 'express';

import {createServer} from 'http'; 
import {Server} from 'socket.io'


const app=express(); 
const httpServer =  createServer(app); 
const io =  new Server(httpServer); 


const PORT = process.env.PORT ||= 4500;

httpServer.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
});





















