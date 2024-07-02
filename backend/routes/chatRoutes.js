import { Router } from "express";
import auth from "../middlewares/auth.js";
import { accessChat, fetchChats } from "../controllers/chatControllers.js";

let chatRouter=Router()

chatRouter.post("/",auth,accessChat);
chatRouter.get("/",auth,fetchChats);


export default chatRouter;
