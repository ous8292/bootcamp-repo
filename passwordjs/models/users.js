//building database model and schema
const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

let userSchema = mongoose.Schema({
    username: String,
    password: String
})

userSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('user', userSchema);