import mongoose from "mongoose";
import dotenv from "dotenv"
export default function dbConnection () {
    mongoose.connect(process.env.DB_CONNECT, ()=>{
       console.log("connected to DataBase")
   })
}
