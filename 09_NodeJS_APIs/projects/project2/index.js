const express = require('express')
const app = express();
const $fetch = require('node-fetch')

const key = require('./config/keys')

const logger = require('morgan');
app.use(logger('dev'));


app.use(express.static('public'))


app.get('/', (req, res) => {
    res.redirect('/home');
})

app.get('/home', (req, res) => {
    res.render('home.ejs')
})

const baseURL = "https://api.themoviedb.org/3"


app.get('/getMovie', (req, res) => {
    let route = `search/movie?api_key=${key.tmbd_key}&query=${req.query.myKey}&page=1&include_adult=false`
    let endpoint = `${baseURL}/${route}`
    $fetch(endpoint)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.results)
            res.render('results.ejs', {data: data.results})
        })
        .catch()
    
})




const PORT = process.env.PORT || 3006
app.listen(PORT, () => console.log(`app is on ${PORT}`))