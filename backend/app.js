import express from 'express'
import { db } from './config/db.js'
import dotenv from 'dotenv'
import cors from 'cors'
import userRouter from './routes/userRoutes.js'
dotenv.config()
db()
let app=express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//users
app.use("/api/v1/users",userRouter)

export default app;
