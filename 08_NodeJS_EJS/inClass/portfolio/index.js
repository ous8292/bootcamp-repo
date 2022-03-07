const express = require('express')
const app = express()


const logger = require('morgan')
app.subscribe(logger("dev"));

const {testData} = require('./fakeData')


app.use(express.static('public'))


app.get('/', (req, res) =>{
    res.redirect('/home')
});


app.get('/home', (req,res) => {
    res.render('home.ejs', {data: testData}) //passing data to home
});


app.get('/about', (req,res) => {
    res.render('about.ejs')
});

app.get('*', (req,res) =>{
    res.redirect('/home')
});



const PORT = process.env.PORT || 3005
app.listen(PORT, () => console.log(`port: ${PORT}`))
