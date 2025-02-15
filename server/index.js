import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import route from "./routes/userRoutes.js";
import connectMongoDB from "./connect.js";
import cors from "cors"

const app = express();
app.use(bodyParser.json());
app.use(cors())

const PORT = 5959;

(async () => {
  try {
    await connectMongoDB("mongodb://127.0.0.1:27017/CRUD_MERN");
    app.use("/api", route);
    app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
  } catch (err) {
    console.error("ERROR", err);
  }
})();
