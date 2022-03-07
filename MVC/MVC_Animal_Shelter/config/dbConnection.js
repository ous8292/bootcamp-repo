require('dotenv').config()
const mongoose = require('mongoose')


function connectDB () {
    mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB connected...."))
    .catch(err => {
        console.log("Error connecting with DB", err)
    })
}


//exports out the connectDB function
module.exports = connectDB