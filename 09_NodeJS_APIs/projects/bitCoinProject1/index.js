const express = require('express')
const app = express()

const logger = require('morgan')
app.use(logger('dev'))

const request = require('request')

app.use(express.static('public')) //lets us use the CSS



const baseURL = 'https://api.coindesk.com'
const route = '/v1/bpi/currentprice.json'

//could also put everything in one line endpoint = https://api.coindesk.com/v1/bpi/currentprice.json'

app.get('/', (req,res) => {
    res.render('index.ejs')
})



app.get('/getCoin', (req,res) => {
    let endpoint = `${baseURL}/${route}`
    // console.log('req.query obj is:', req.query)
    // console.log('req.params obj is:', req.params)
    request(endpoint, (error, response,body) => {
        let parsedData = JSON.parse(body)
        //console.log(parsedData.bpi)
        console.log(parsedData.bpi[req.query.country]) //bpi is a key, with a value of objects
        res.render('index.ejs', {data: parsedData.bpi[req.query.country]})
    })
})

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`I'm on port: ${PORT}`))




