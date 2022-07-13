// //connected to MongoDB

import mongoose from "mongoose";
// const MONGO_URL = ""

const connectDB = handler=> async (req,res)=>{
    if (mongoose.connections[0].readyState) {
        return handler(req,res)
    }
//  await mongoose.connect(process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log(`You are now connected to the MongoDB Atlas`)
    return handler(req,res)
})
.catch((err)=>{
    console.log(`Not Connected! ${err}`)
})
}

export default connectDB



