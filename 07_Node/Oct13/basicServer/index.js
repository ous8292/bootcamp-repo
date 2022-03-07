//Creating a basic server


//FOUNDATION - everything I need to make the server run
const express = require('express');
const app = express(); //this takes the express, invokes the function built into express, and returns a gaint object

// ROUTE HANDLERS - 
app.get("/", function(req, res){
    res.send("I made it")
})
//LISTENER
//enviromental variables must be all uppercase
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App is running on port ${port}`));
