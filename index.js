const express = require("express");
const path = require("path");
const userRoute = require("./routes/user");
const blogRoute = require("./routes/blog");
const mongoose = require("mongoose");
const cookiepaser = require("cookie-parser");
const Blog = require("./models/blog");
require('dotenv').config();
const {
  checkForAuthenticationCookie,
} = require("./middlewares/authentication");

const app = express();
const port = process.env.PORT || 5050;

mongoose
  .connect(process.env.DB_URI)
  .then((e) => console.log("mongoDB conected"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));
app.use(cookiepaser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve("./public")));

app.get("/", async (req, res) => {
  const allBlogs = await Blog.find({});
  res.render("home", {
    user: req.user,
    blogs: allBlogs,
  });
});

app.use("/user", userRoute);
app.use("/blog", blogRoute);

app.listen(port, () => {
  console.log("app is working");
});
