const express = require('express')
const app = express();

const logger = require("morgan");
app.use(logger("dev"));

//1 Connection
const mongoose = require('mongoose');
const keys = require("./config/keys")

mongoose
.connect(keys.mongoURI)
.then(() => console.log(`Conencted to mongo DB`))
.catch((err) => console.log(`error connecting to database`, err))


//2 Build bulue prints (schema and model)

//2.a Schema
let userSchema = mongoose.Schema({
    username: String,
    age: Number,
    favorite_pizza: String,

})

//2.b Model

let userModel = mongoose.model("app_user", userSchema)



//3 creating data

// let User = new userModel({
//     username: 'Nancy',
//     age: 22,
//     favorite_pizza: 'Pepperoni' 
// })



let User = new userModel({
    username: 'Tommy',
    favorite_pizza: 'Veggie' 
})





//saving data to DB
User.save((err, user) => {
    if (err){
        console.log("error: ", err)
    } else {
        console.log(user)
    }
})



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));

