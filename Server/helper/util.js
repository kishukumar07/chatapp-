//tracking user records with room 

const users = []; //each user consists of  id{using socket id here } , username , room 

const getUser = (id) => {
    return users.find((user) => {
        if (user.id == id) return true;
    })
};

const allUser = (room) => {
    return users.filter((user) => {
        if (user.room == room) return true;
    })
};


const deleteUser = (id) => {

    const index = users.findIndex((user) => {
        if(user.id == id) return true;
    })

   if(index!=-1){ //if user is present 
    return users.splice(index ,1)[0] ; //remove the particular user at particular index and return the arr. 
   }
};

const joinUser = (id ,username , room) => { 
    const user = {username ,id , room}; 
    users.push(user); 
}; 



export  {getUser ,allUser ,deleteUser , joinUser }; 