const express = require('express')
const app = express()

const logger = require('morgan')
app.use(logger("dev"))

app.use(express.static('public'))



app.get('/', (req,res) => {
    // res.send('I am the root')
    res.redirect('/home') //redirects to whatever you pass into
})

app.get('/home', (req,res) => {
    res.render('home.ejs')
})


app.get('/contact', (req,res) => {
    res.render('contact.ejs')
})

app.get('/about', (req,res) => {
    res.render('about.ejs')
})

app.get('*', (req,res) => {
    res.render('error.ejs')
})

//res.end() ends the cycle
//res.send()
//res.render() renders a file and sends

const PORT = process.env.PORT || 3002;
app.listen(PORT, ()=> console.log(`App is running on ${PORT}`))
