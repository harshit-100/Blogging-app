const express = require("express");
const path = require("path");

const app = express();
const port = 5000;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.listen(port, () => {
  console.log("app is working");
});
