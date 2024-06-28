import { Router } from "express";
import auth from "../middlewares/auth.js";
import { accessChat } from "../controllers/chatControllers.js";

let chatRouter=Router()

chatRouter.post("/",auth,accessChat);


export default chatRouter;
