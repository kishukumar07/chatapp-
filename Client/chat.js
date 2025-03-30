const socket = io("http://localhost:4500", { transports: ["websocket"] });




const username = document.querySelector("#name");
const room = document.querySelector("#room");

const joinBtn = document.querySelector("#enter");

joinBtn.addEventListener("click", () => {
  let   user = { name: username.value, room: room.value };

    console.log(user, "From clientSide");
    socket.emit("join-room", user); 

//we want to redirect user into another chat.html page 
 window.location.href="chat.html"; 
});



socket.on("new-user-joined",(user)=>{ 
                //  console.log(user ,"broadcasting byevent at clientside ");
 alert(`${user} joined the room.`); 

 
}); 




