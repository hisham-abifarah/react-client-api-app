import express from "express";
import path from "path";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import Promise from "bluebird";

import auth from "./routes/auth";

dotenv.config();

const app = express();
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

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(8882, () => console.log("Running on localhost:8882"));