//Here we will hold the functions for our routes
const Cat = require("../models/catModel")



const getCats = (req,res) => {
    Cat.find({})
    .then(cats => {
        console.log(cats)
        res.status(200).json({message: "You got some cats!", cats:cats})
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "A cat stole the server"})
    })
}

const getCat = (req,res) => {
    let id = req.params.id //takes the id input from route, and saves to it a variable

    Cat.findById(id)
    .then(cat => {
        console.log(cat)
        res.status(200).json({message: `I am a cat with the id of ${id}`, cat:cat})
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "A cat stole the server"})
    })
}

//function for creating data
const createCat = (req, res) => {
    //console.log(req.body)
    const newCat = new Cat(req.body)
    newCat
    .save()
    .then(cat => {
        res.status(201).json({message: "Cat has been created!", cat: cat})
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "A cat stole the server"})
    })
}


const deleteCat = (req, res) => {
    let id= req.params.id
    Cat.findByIdAndDelete(id)
    .then(cat => {
        res.status(200).json({message: `you deleted a cat wioth id ${id}`, cat})
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "A cat stole the server"})
    
    })
}


//exporting functions, this formate for sending multiple functions
//cat controllers
module.exports = {
    getCats:getCats,
    getCat:getCat,
    createCat: createCat,
    deleteCat: deleteCat
}