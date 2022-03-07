const express = require('express')
const app = express()

const logger = require('morgan')
app.use(logger('dev'))


app.get('/', (req,res) => {
    res.send('root page')
})


// let req = {
//     params: {
//         kittycat: "cat"
//     }
// }

//ALL DIFFERENT ROUTES
//  /:kittycat
//  /:kittycat/oscar any apartment but oscar can be there
//  /kittycat/oscar specific apartment, and oscar has to be there
//  /kittycat


app.get('/:kittycat', (req,res) => {
    //DO WHATEVER YOU WANT!!
    let mrM = req.params.kittycat.split("").reverse().join("")
    res.send(`This is the ${req.params.kittycat}`)
})


app.get('*', (req,res) => {
    res.send('No page to send')
})


const PORT = process.env.PORT || 3004
app.listen(PORT, () => console.log(`App is on port ${PORT}`))