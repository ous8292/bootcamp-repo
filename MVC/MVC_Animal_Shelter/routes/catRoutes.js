const express = require('express')
const router = express.Router() //this lets us create routes, replace app with router
const {getCats, getCat, createCat, deleteCat} = require("../controllers/catControllers")



//GET /cats
//get a bunch of cats
router.get('/cats', getCats)
//GET /cat/:id
router.get('/:id', getCat)


//POST /cats - to send data to DB
router.post('/', createCat)


//DELETE /cats/:id
router.delete("/:", deleteCat)



//need to export out the route to be able to use
module.exports = router