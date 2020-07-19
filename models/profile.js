import mongoose from "mongoose";

const ProfileSchema = mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File is required.",
  },
  title: {
    type: String,
    required: "Title is required.",
  },
  name: {
    type: String,
    required: "Name is required.",
  },
  description: String,
  views: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment",
    },
  ],
});

const model = mongoose.model("Profile", ProfileSchema);
export default model;
