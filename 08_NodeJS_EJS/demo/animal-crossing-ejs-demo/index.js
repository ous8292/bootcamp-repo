const express = require("express");
const app = express();
// if using version 2.X or less use this import of node-fetch
// const $fetch = require('node-fetch')
const $fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

app.get("/", (req, res) => {
  let url = "https://acnhapi.com/v1a/villagers";
  $fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let villagers = data.slice(0, 15);
      res.status(200).render("home.ejs", { data: villagers });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("There was an error");
    });
});
app.get("/searchVillagers", (req, res) => {
  console.log(req.query);
  // get all the villagers
  // use .filter() method to find by name property
  res.end();
});

app.get("/:id", (req, res) => {
  const { id } = req.params;
  let url = `https://acnhapi.com/v1a/villagers/${id}`;
  // const id = req.params.id
  $fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      res.status(200).render("villager.ejs", { data: data });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("There was an error");
    });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("App is listening on port ", port));
