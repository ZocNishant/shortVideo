import mongoose from "mongoose";

const shortVideoSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  channel: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  song: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  shares: {
    type: Number,
    required: true,
  },
  messages: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("ShortVideos", shortVideoSchema);
