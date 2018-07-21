import express from "express";
import path from "path";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import Promise from "bluebird";

import auth from "./routes/auth";
import users from "./routes/users";

dotenv.config();

const app = express();
const port = '7898';
app.use(bodyParser.json()); 
mongoose.Promise = Promise;

const uri = process.env.MONGODB_URL;

mongoose.connect(uri ,{
  useNewUrlParser: true 
});

process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled Rejection at:::', reason.stack || reason || promise.get);
    })


app.use("/api/auth", auth);
app.use("/api/users", users);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => console.log("Running on localhost port: " + port));