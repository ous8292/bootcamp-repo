const express = require('express')
const app = express()

const logger = require('morgan')
app.use(logger('dev'))

// app.set("view engine", "ejs") //basically lets you not have to write .ejs after all render files

app.get('/', (req,res) => {
    res.send('root page')
})



// //animals render an animals.ejs
// app.get('/:animals', (req, res) => {
//     res.render('animals.ejs', {animals: req.params.animals})
// })

// /demo render page called demo
// app.get('/demo', (req,res) => {
//     let animals = ['dog', 'cat', 'bigger cat']
//     res.render('demo.ejs', {data: animals})
// })


// /demo2 render demo2 page

app.get('/demo2', (req,res) => {
    let animals = [
        {
          breed: 'dog', 
          name: 'Spike'
        },
        {
          breed: 'cat', 
          name: 'Mr Tabby'
        },
        {
          breed: 'bird', 
          name: 'Tweety'
        }
      ]
    res.render('demo2.ejs', {data: animals})

})



app.get('/:dog/:cat', (req, res) => {
    // let dog = req.params.dog //dynamic value
    // let cat = req.params.cat //dynamic value
    let {dog, cat} = req.params // "destructuring"
    res.render('demo3.ejs', {dog,cat})
})


app.get('*', (req,res) => {
    res.send('No page to send')
})


const PORT = process.env.PORT || 3004
app.listen(PORT, () => console.log(`App is on port ${PORT}`))