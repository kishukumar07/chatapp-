//tracking user records with room 


const users = []; //each user consists of  id{using socket id here } , username , room 

const getAUser = (id) => {
    return users.find((user) => user.id == id);
};

const allUser = (room) => {
    return users.filter((user) => user.room == room);
};

const deleteUser = (id) => {
    const index = users.findIndex((user) => user.id == id);
    if (index != -1) {  //if user is present 
        return users.splice(index, 1)[0];//remove the particular user at particular index and return the arr. 
    }
};

const joinUser = (id ,name,room) => {
  const user =  {id,name,room} ; 
    users.push(user);
    
    return user;
};



export  {getAUser ,allUser ,deleteUser , joinUser }; 