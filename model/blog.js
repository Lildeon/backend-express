import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const blogSchema = new Schema({
  title: String,
  content: String,
});

export const Blog = models?.Blog || model("Blog", blogSchema);
