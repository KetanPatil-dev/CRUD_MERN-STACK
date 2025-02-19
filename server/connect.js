import mongoose from "mongoose";

const connectMongoDB=async()=>{
    try{
       await mongoose.connect("mongodb://127.0.0.1:27017/CRUD_MERN")
       console.log("MongoDB Connected Successfully...")
    } catch(err)
    {
        console.error("ERROR",err)
    }
}
export default connectMongoDB