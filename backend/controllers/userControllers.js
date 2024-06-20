import User from "../models/User.js"
import asyncHandler from "express-async-handler"
import { genToken } from "../utils/generateToken.js"

//register
export const register=asyncHandler(async (req,res)=>{
    const {name,email,password,confirmPassword}=req.body
    const existingUser=await User.findOne({email})
    if(existingUser){
        throw new Error("User exists already")
    }
    const newUser= await User.create({
        name,email,password,confirmPassword,photo:req.file.path
    })
    let token=await genToken(newUser._id)
    res.status(201).json({
        status:"Success",
        data:newUser,
        token
    })
})



//login
export const login=asyncHandler(async (req,res,next)=>{
    const {email,password}=req.body
    const existingUser=await User.findOne({email})
    if(!existingUser || !(await existingUser.comparePassword(password,existingUser.password))){
        let err= new Error("No user found,Please Register")
        next(err)
    }
    let token=await genToken(existingUser._id)
    res.status(200).json({
        status:"Success",
        data:existingUser,
        token
    })
})
