import express from "express";
import dotenv from "dotenv";
import { userRoutes } from "./routes/user.js";
import mongoose from "mongoose";
import { Blog } from "./model/blog.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("viwe engine", "ejs");
app.use(express.static("public"));
dotenv.config();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGODB_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Database connection success"))
  .catch((err) => console.log("Error", err.message));

app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.get("/blog", async (req, res) => {
  const blog = await Blog.find();
  res.json(blog);
});

app.use("/api/user", userRoutes);

console.log(`Server running on port: ${PORT}`);

app.listen(PORT);
