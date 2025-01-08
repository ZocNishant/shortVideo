// IMPORTS
import express, { json } from "express";
import mongoose from "mongoose";
import cors from "cors";
import ShortVideos from "./db.js";
import dotenv from "dotenv";
dotenv.config();

// APP CONFIG
const app = express();

const port = process.env.PORT || 2222;

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// DB CONFIG
mongoose
  .connect(process.env.MONGO_URI)
  .then(console.log("Db Connected"))
  .catch((error) => {
    console.log(error);
  });

// API ENDPOINTS
app.get("/v2/posts", async (req, res) => {
  try {
    const videos = await ShortVideos.find();
    res.status(200).json(videos);
  } catch (error) {
    res.status(400),
      json({ message: "Error getting videos", error: error.message });
  }
});

app.post("/v2/posts", async (req, res) => {
  try {
    const dbVideos = new ShortVideos(req.body);
    const savedVideos = await dbVideos.save();

    res.status(201).json(savedVideos);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error Saving Videos", error: error.message });
  }
});

// LISTENER
app.listen(port, () => {
  console.log(`Server started in port ${port}.`);
});
