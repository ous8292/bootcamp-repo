const express = require('express')
const app = express()


let pizza = "I like my pizza with extra pineapple";
let cappuccino = "I like my cappuccino to be sweet";
let fries = "I like my fries with extra salt"

app.get('/', (req,res) =>{
    res.redirect('/home', {pizza, pizza})
})

app.get('/about', (req,res) =>{
    res.render('about.ejs', {cappuccino})
})

app.get('/contact', (req,res) => {
    res.render('contact.ejs', {fries})
})


const PORT = process.env.PORT || 3004;
app.listen(PORT, () => console.log(`I am running on port ${PORT}`))