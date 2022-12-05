import bodyParser from "body-parser";
import express from "express";
import { errors } from "celebrate";
import dbConnection from "./db/mongoose.js";
import userAuth from "./routes/api-v1/auth.js"

dbConnection();

const app = express();

app.use(bodyParser.json());
// Middle Ware
app.use("/api/v1/auth/user/", userAuth)
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use(errors())
const { PORT } = process.env;

app.listen(PORT, console.log(`Server running at Port ${PORT}`));
