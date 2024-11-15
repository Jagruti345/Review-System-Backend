import mongoose from "mongoose";


const dbConnect=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDB connection successfully");
        
    }catch(error) {
        console.log("MongoDB connection failed",error);
        
    }
}
export default dbConnect;