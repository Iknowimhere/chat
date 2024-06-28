import asyncHandler from "express-async-handler";
import Chat from "../models/Chat.js";

//@description   Create or fetch one-on-one chat
//@Path          POST /api/v1/chat
//access         Private 
export const accessChat=asyncHandler(async(req,res)=>{
    const {userId}=req.body

    if(!userId){
        console.log("User id not sent");
        res.sendStatus(400)
    }

    let isChat=await Chat.find({
        isGroupChat:false,
        $and:[{users:{$elemMatch:{$eq:userId}}},{users:{$elemMatch:{$eq:req.userId}}}]
    }).populate("users","-password","-confirmPassword").populate("latestMessage")

    isChat=await Chat.populate(isChat,{
        path:"latestMessage.sender",
        select:"name email photo"
    })

    if(isChat.length>0){
        res.send(isChat[0])
    }else{
        var chatData={
            chatName:"Sender",
            isGroupChat:false,
            users:[userId,req.userId]
        }
    }
    try {
        let newChat=await Chat.create(chatData)

        newChat=await Chat.findById(newChat._id).populate("users","name email photo")

        res.send(newChat)
    } catch (error) {
        let err=new Error(error.message)
        next(err)
    }
})