import {Router} from 'express';

let userRouter=Router()

userRouter.post("/register",register)
userRouter.post("/login",login)

export default userRouter;