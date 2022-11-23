import mongoose from "mongoose";

export default function dbConnection() {
  mongoose.connect(process.env.DB_CONNECT, () => {
    console.log("connected to DataBase");
  });
}
