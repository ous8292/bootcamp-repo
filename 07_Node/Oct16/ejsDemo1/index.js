const express = require('express')
const app = express()

const logger = require('morgan')
app.use(logger('dev'))


app.get('/', (req,res) => {
    res.render('home.ejs') //this renders the ejs file
    // res.send("I am server")
});

app.get('/about', (req,res) => {
    res.render('about.ejs')
})

app.get('/about/:hobby', (req, res) =>{
    let {hobby} = req.params
    res.render('hobby.ejs', {hobby}) //first hobby is not the same as second
})

//if you key is the same name as your value, you just make it one word {hobby: hobby} is short handed to  {hobby}

//Have learned
//res.send()
//res.end()
//res.render() <- NEW

let pets = ['Dog', 'Cat', 'Hedgehog']

app.get('/animals', (req,res) => {
    res.render('animals.ejs', {doggyHorse: pets})
})



app.get('/fullpage', (req,res) => {
    res.render('fullpage.ejs')
})





const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App is on port ${port}`));