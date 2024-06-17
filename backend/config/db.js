import mongoose from "mongoose";

export async function db(){
try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("db connected");
} catch (error) {
    console.log(error);
    process.exit(1)
}
}