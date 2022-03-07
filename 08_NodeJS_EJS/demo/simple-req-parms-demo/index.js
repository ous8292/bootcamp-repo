const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.send("root route");
});

app.get("/about/:stuff", function (req, res) {
  var stuff = req.params.stuff;
  res.render("about.ejs", { stuff: stuff });
});

app.listen(3005, function () {
  console.log("app is running on port 300");
});
