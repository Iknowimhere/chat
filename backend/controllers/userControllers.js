import User from "../models/User.js"


//register
export const register=async (req,res)=>{
    try {
        console.log(req.file);
        const {name,email,password,confirmPassword}=req.body
        const newUser=await User.create({
            name,email,password,confirmPassword,photo:req.file.path
        })
        res.status(201).json({
            status:"Success",
            data:newUser
        })
    } catch (error) {
        res.status(400).json({
            status:"Fail",
            message:error.message
        })
    }
}



//login