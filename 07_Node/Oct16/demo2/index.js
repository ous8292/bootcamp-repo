
const express = require('express')
const app = express();

const logger = require("morgan");
app.use(logger('dev'))

const chalk = require("chalk")



app.get('/', function(req,res){
	res.send("I am server")})


app.get('/multiply/:num1/:num2', (req,res) => {
	let {num1, num2} = req.params;
	res.send(`${ num1 * num2}`)
})

// app.get('/ifmulti/:num1/:num2', (req,res) => {
// 	let {num1, num2} = req.params;
// 	//if num 1 is larger than num 2 then multiply
// 	//otherwise,add them together
// 	if(num1 > num2){
// 		res.send(`${num1 * num2}`)
// 	} else {
// 		res.send(`${Number(num1) + Number(num2)}`) //or ParseInt()
// 	}
// })

// app.get('/ifmulti/:num1/:num2', (req,res) => {
// 	let {num1, num2} = req.params;
// 	//if num 1 is larger than num 2 then multiply
// 	//otherwise,add them together
// 	if(num1 > num2)res.send(`${num1 * num2}`) 
// 	else res.send(`${Number(num1) + Number(num2)}`) //or ParseInt()
	


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(chalk.green(`App is running on port ${port}`)));
