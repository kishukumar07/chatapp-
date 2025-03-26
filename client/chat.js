//this file will contain all the code for the javascript ....


// Initializing the Socket.IO connection with the server
const socket = io('http://localhost:4550', { transports: ["websocket"] });
//the io is provided from cdn only ..

// The 'io()' function automatically connects to the server from which the page was served.
// If you need to connect to a specific server, you can pass the URL like this:
// const socket = io('http://localhost:3000');  // Example for local server

// Now, 'socket' can be used to send and receive real-time events/messages.

/*
🚀 Explanation of `{ transports: ["websocket"] }`:
- By default, Socket.IO first tries HTTP Polling and then upgrades to WebSockets.
- This option forces the connection to **use only WebSockets** and disables polling.
- Useful in environments where polling is unnecessary or blocked.

**agar(by default) http req dalega to cors policy ayega...  that's why ...
*/

const username = document.querySelector("#name"); 
const room =document.querySelector("#room"); 
const joinBtn =document.querySelector("#joinBtn"); 



joinBtn.addEventListener("click",()=>{
    let user = {name :username.value , room:room.value }

    socket.emit("join-room",user);
  
    window.location.href="chat.html"  //redirect to chat.html when btn clicked 
}) 



//listining custom event  
socket.on("new-user-joined",(user)=>{
alert(`${user} joined the room. `)
})






















