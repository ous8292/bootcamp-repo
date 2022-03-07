const express = require("express");
const app = express();
const logger = require("morgan");
app.use(logger("dev"));
app.use(express.json());
const connectDB = require("./config/dbConnection") //imports connectDB / this is how to import in node JS

connectDB()


const catRoutes = require("./routes/catRoutes") //importing cat routes
app.use(catRoutes) //lets us use the cat routes

//1st argument says when to use the 2nd argoument
//2nd argument = what you're using


app.get("*", (req, res) => {
  res.json({ message: "That route doesn't exist" });
});
const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`Port running on ${port}`));