const express = require("express");
const path = require("path");
const userRoute = require("./routes/user");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

mongoose
  .connect("mongodb://localhost:27017/blogify")
  .then((e) => console.log("mongoDB conected"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("home");
});

app.use("/user", userRoute);

app.listen(port, () => {
  console.log("app is working");
});
