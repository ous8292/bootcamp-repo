const express = require('express')
const app = express();


//Mongoose is promised based, so we can chain
//1. Make a connection
//2. Build blueprints
        // schema - the structure
        // model
//2. write query


//1 Connection
const mongoose = require('mongoose')
const keys = require('./config/keys')

mongoose.connect(keys.mongoURI,
    {useNewUrlParser: true,
    useUnifiedTopology: true
    })//for older versions of mongoose use the last two inputs
.then(() => console.log("Hey you are connected!"))
.catch(error => console.log("issues connecting:", error))

app.get('/', (req,res) => {
    res.send('This is the root route')
})

const PORT = process.env.PORT || 3003
app.listen(PORT, ()=> console.log(`I am on ${PORT}`))


//creating the structure of the database, Defines what the structure will be
//cannot do anything different then this
let characterSchema = mongoose.Schema({
    name: String,
    age: Number,
    email: String
})

//Attaching the structure to a collection
let CharacterModel = mongoose.model("character", characterSchema)

//taking all this information and creating a copy with all this informtion
// let Character = new CharacterModel({
//     name: "Jerry",
//     age: "45",
//     email: "jerryS@whatsthedealwithairplanefood.com"
// })


// let Character = new CharacterModel({
//     name: "Kramer",
//     age: 42,
//     email: "cosmo@gmail.com"
// })


//3 Writing our first query in mongoose
//if there is an error gets sent back and put in first position
//if everything is okay, then mongo sends us a receipt that everything is okay
// Character.save((err, character) =>{
//     if (err){
//         console.log("error: ", err)
//     } else {
//         console.log(character)
//     }
// })


let person = {
    name: "Elaine",
    age:56,
    email: "elainebenese@gmail.com"
}



//create method, passing in the data. Basically the same as constructore method as above
//if you use create you use the raw model
//if you use the constructor you uses the contructed model
// CharacterModel.create({
//     name: "Elaine",
//     age: "32",
//     email: "elainebenese@gmail.com"
// }, (err, character) => {
//     if (err){
//         console.log("error", err)
//     } else {
//         console.log(character)
//     }
// })


//reading data
CharacterModel.find({}, (err, characters) =>{
    if(err){
        console.log("Error: ", error)
    } else {
        console.log(characters)
    }
})

// console.log(err ? `Error: ${err}` : characters) turnary way of writing the above


 //   .save vs .create
 // 