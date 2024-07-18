import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const url=process.env.DB_URL;

export const connectUsingMongoose=async()=>{
    try{
        await mongoose.connect(url);
        console.log("mongoDB using mongoose has connected");
    }
    catch(err)
    {
        console.log(err);
    }
}