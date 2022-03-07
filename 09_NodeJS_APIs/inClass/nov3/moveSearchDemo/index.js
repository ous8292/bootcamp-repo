const express = require('express')
const app = express()

// const logger = require('morgan')
// app.use(logger('dev'))

const request = require('request')

const key = require('./config/keys') //says grab this file throws it into keys

app.use(express.static('public'))

app.get('/', (req, res) => { //first is client second is response object
    res.render('home.ejs')
})

//need endpoint
//composed of two things: baseURL and route

//https://api.themoviedb.org/3/search/movie?api_key=669505d9eb1fcf22be19dd03db0cc25c&query=Avengers&page=1&include_adult=false

const baseURL = "https://api.themoviedb.org/3"


app.get('/getMovies', (req,res) => {
    let route = `search/movie?api_key=${key.tmbd_key}&query=${req.query.myKey}&page=1&include_adult=false`
    let endpoint = `${baseURL}/${route}`

    //Check list for request
    // get/use our endpoint
    // if everything ok - get some data that needs to be parsed
    // if not ok - handle errors
    // use the parsed data

    request(endpoint, (error, response, body)=>{
        let parsedData = JSON.parse(body)
        // console.log(parsedData.results)
        res.render('results.ejs', {data: parsedData.results})
    })
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`App is on port ${PORT}`))





