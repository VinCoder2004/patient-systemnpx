import mongoose from "mongoose";


export async function connectDB(){
    mongoose.connection.on("connected", ()=> console.log("Database active"));
    await mongoose.connect(process.env.MONGGO_URL as string);
}