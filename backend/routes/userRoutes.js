import {Router} from 'express';
import { register } from '../controllers/userControllers.js';
import upload from '../middlewares/uploadFile.js';

let userRouter=Router()

userRouter.post("/register",upload.single("photo"),register)
// userRouter.post("/login",login)

export default userRouter;