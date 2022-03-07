
const express = require('express');
const app = express();


//route handler
app.get("/", function(req, res){
	res.send("I made it")
})

//adding another route
app.get("/cat", (req, res) => {
	res.send("I like cats!!"
	)});


app.get("/dog", (requ, res) => {
	res.send("I like dogs!!")
});

app.get("*", (requ, res) => {
	res.send("*")
});


//LISTENER




const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App is running on port ${port}`));


