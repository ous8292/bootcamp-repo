const express = require('express')
const app = express()

const logger = require('morgan')
app.use(logger('dev'))


app.get('/', (req,res) => {
    res.send('root page')
})

app.get('/home', (req,res) => {
    res.render('home.ejs')
});

app.get('/about', (req,res) => {
    res.render('about.ejs')
});

app.get('/contact', (req,res) => {
    res.render('contact.ejs')
});



const PORT = process.env.PORT || 3005
app.listen(PORT, () => console.log(`App is on port ${PORT}`))

