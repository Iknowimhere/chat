export const getuserName=(loggedUserId,users)=>{
    console.log("chatlogics",loggedUserId,users);
    return users.find(user=>user._id!==loggedUserId).name
}