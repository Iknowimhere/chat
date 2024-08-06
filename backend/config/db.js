import mongoose from "mongoose";

export async function db() {
  try {
    let client = await mongoose.connect(process.env.MONGO_URI);
    console.log(`db connected ${client.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
