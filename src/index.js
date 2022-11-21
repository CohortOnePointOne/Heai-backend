import bodyParser from "body-parser";
import express from "express";
<<<<<<< HEAD
=======
// import dotenv from "dotenv";
// import mongoose from "mongoose";
>>>>>>> a8e56b5 (setup linting)
import dbConnection from "./db/mongoose.js";

dbConnection();

const app = express();

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Home Page");
});
const { PORT } = process.env;

app.listen(PORT, console.log(`Server running at Port ${PORT}`));
