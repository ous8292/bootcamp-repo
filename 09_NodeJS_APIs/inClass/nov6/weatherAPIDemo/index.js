const express = require("express");
app = express();
const $fetch = require('node-fetch')


const logger = require("morgan");
app.use(logger('dev'))

app.get('/', (req, res) => {
    res.redirect('/home')
})


// use/get our endpoint
// if no error get data and parse it
// if error handle it
// use the parsed Data

//FORMAT: request(endpoint, callbackFunction(error, response, body) =>{
    //if no error
        //parse the data
        //send data to client
    //handle the error
//  })

app.get('/home', (req, res) => {
    res.render('home.ejs')
})


const baseURL = 'https://www.metaweather.com/api/location'


app.get('/getResults', (req,res) =>{
    let route = '2487956/'
    let endpoint = `${baseURL}/${route}`
    $fetch(endpoint)
        .then((response) => response.json()) //Is JSON, parse the data => turns to object => sends to line below
        .then((data) => {
            console.log(data.consolidated_weather[0])
            res.render('results.ejs', {data: data.consolidated_weather[0]})
        }) //takes the object from above, send to client
        .catch(error => console.log(error)) //handle errors here
            //long hand: function(error){console.log(error)}
});

app.get('/london', (req,res) =>{
    let route = '44418/'
    let endpoint = `${baseURL}/${route}`
    $fetch(endpoint)
        .then((response) => response.json()) 
        .then((data) => {
            console.log(data.consolidated_weather[0])
            res.render('results.ejs', {data: data.consolidated_weather[0]})
        }) 
        .catch(error => console.log(error))
});




const PORT = process.env.PORT || 3003
app.listen(PORT, ()=> console.log(`I am on ${PORT}`))