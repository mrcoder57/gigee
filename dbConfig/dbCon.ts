import mongoose from "mongoose";

const connectToDb=async()=>{
    try {
       await mongoose.connect(process.env.MONGODB_URI!);
        const connect=mongoose.connection
        connect.on('connected',()=>{
            console.log("connected to db")
        })
    } catch (error) {
        console.log("an error occured while connecting to db",error)
        process.exit()
    }
}
export default connectToDb