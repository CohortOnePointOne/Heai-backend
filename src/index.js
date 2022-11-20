import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose"
import dbConnection from "./db/mongoose.js";
dbConnection()

const app = express()

app.use(bodyParser.json())
app.get("/", (req, res)=>{
    res.send("Home Page")
})
const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server running at Port ${PORT}`))