import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";
export const ConnectDB=async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("DB Connected")
    }
    catch(err){
        console.log(err)
    }
}