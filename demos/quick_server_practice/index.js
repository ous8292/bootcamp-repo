
const express = require("express")
const app = express()
​
const port = process.env.PORT || 5000
console.log("hello")
​
​
app.get("/", (req,res) => {
    res.send("hello")
})
app.get('/home', (req, res)=> {
    res.render('home.ejs')
})
app.get('/findCookies', (req, res)=> {
    let cookieType = req.query.cookieType;
​
    res.render('results.ejs', {cookieType})
})
​
app.get("/:id", (req, res) => {
    let id = req.params.id;
    res.send(`Your id is ${id}`);
})
​
Collapse




