const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(express.json()); //lets you get json out of the body of the request - when req.body is underfined
//CORS
app.use(cors());

//MORGAN
const logger = require("morgan");
app.use(logger("dev"));

//MONGOOSE / MONGO

const mongoose = require("mongoose");
const keys = require("./config/keys");

//make a connection
mongoose
  .connect(keys.mongoURI)
  .then(() => console.log(`Hey you are connected to ${keys.db}!`))
  .catch((error) => console.log("issues connecting:", error));

//blue prints - scheme and model
//creating Schema
let personSchema = mongoose.Schema({
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: Number,
  message: {
    type: String,
    default: [true, "No message submitted"],
  },
});

//creating model
let PersonModel = mongoose.model("Person", personSchema);

app.post("/person", (req, res) => {
    //req.body is what we send to the body - we did post man - FE will be the other way
  const newPerson = new PersonModel(req.body);
  console.log(req.body);

  newPerson
    .save()
    .then((person) => {
      res
        .status(201)
        .json({ message: "Person has been created", person: person });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "There was a problem with the server" });
    });
});

app.get("/persons", (req, res) => {
    PersonModel.find({})
    .then((persons) => {
      console.log(persons);
      res.status(200).json({ message: "You have person", persons: persons });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({ message: "There was a problem with the server" });
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`App is running on ${PORT}`));
