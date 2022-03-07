const express = require("express")
app = express()


const logger = require("morgan")
app.use(logger('dev'))

const request = require("request")


app.use(express.static('public')) //lets us use the CSS

//we will pas this link to our index.ejs, using our root route
let image = `https://images.dog.ceo/breeds/pyrenees/n02111500_7655.jpg`;


const baseURL = "https://dog.ceo/api"
const route = "breeds/image/random"


app.get('/', (req,res) =>{
    res.render('index.ejs', {image})
})


//HTTP Requests TO DO LIST
// 1 - know/use and enpoint
// 2 - if no error, get data
// 2.a - if there IS an error; handle the error
// 3 - parse the data
// 4 use the parsed data



//route handler - renders the index page when the button is pressed
app.get('/getImage', (req,res) => {
    let endpoint = `${baseURL}/${route}`
    request(endpoint, (error, response, body)=> {
        if(!error && response.statusCode == 200){
            let parsedData = JSON.parse(body)
            res.render('index.ejs', {image: parsedData.message})
        } else {
            res.render('error.ejs', {error: "something doggone funny happend"})
        }
    })
});


// https://dog.ceo/api/breeds/image/random



const PORT = process.env.PORT || 3006
app.listen(PORT, ()=> console.log(`App is on ${PORT}`))