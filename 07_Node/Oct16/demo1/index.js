
const express = require('express')
const app = express();


//route handler
app.get("/", function(req, res){
	res.send("I am server")

})

//baseURL/ROUTE PARAM1, ROUTE PARAM2, ect.


//specific routes
// app.get("/fruit", (req, res) => {
// 	res.send("I like fruit!!")});

// app.get("/animal", (req, res) => {
// 	res.send("I like animals")});

// app.get("/camping", (req, res) => {
// 	res.send("I like camping")});
// let req = {
// 	params: {
// 		something:'doggyHorse'
// 	}
// }

//general routes
app.get('/:something', (req,res) =>{
	console.log(req.params.something)
	res.end()
})


app.get('/bank/:fname/money/:number', (req, res) => {
	//destructuring 
	let {fname, number} = req.params;
	let stringy = `Hello ${fname}. You have $${number}`;

	//send back a string that says 'hello fname. you have number"
	//let stringy = `Hello ${req.params.fname}. You have $${req.params.number}`;
	res.send(stringy)
})



//listner
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App is running on port ${port}`));