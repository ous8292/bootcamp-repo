const express = require('express')
const app = express();

const mongoose = require("mongoose")
const keys = require('./config/keys')

//make a connection
mongoose.connect(keys.mongoURI)
.then(() => console.log(`Hey you are connected to ${keys.db}!`))
.catch(error => console.log("issues connecting:", error))

//blue prints - scheme and model
//creating Schema
let characterSchema = mongoose.Schema({
    alias: {
        type: String,
        required: [true, 'You must have an alias'] //gives message and makes it required
    },
    fname: String,
    lname: String,
    nemesis: String,
    hero:  {
        type: Boolean,
        default: true // you could leave this out when entering, and will by default add this data as true
    },
    created: {
        type: Date,
        default: Date.now()
    },
    alive: {
        type: Boolean,
        default: true
    }
})

//creating model
let CharacterModel = mongoose.model("characters", characterSchema)


// write queries

let Character = new CharacterModel({
    alias: "Spider-Man",
    fname: "Peter",
    lname: "Parker",
    nemesis: "Green Goblin"
})

//saving document
// Character.save((error, character) => {
//     if(error)console.log("error saving document to database: ", error)
//     else console.log("save Document: ", character)
// })

//running find method to find all docs created
CharacterModel.find({}, (error, characters) => {
    if(error)console.log("error saving document to database: ", error)
    else console.log("save Document: ", characters)
    let newCharArray = characters.sort((a, b) => a.fname - b.fname)
    console.log(newCharArray)
})





const PORT = process.env.PORT || 3004
app.listen(PORT, ()=> console.log(`I am on ${PORT}`))