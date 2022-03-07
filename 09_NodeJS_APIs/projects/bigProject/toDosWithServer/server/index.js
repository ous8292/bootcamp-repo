const express = require('express');
const app = express()


const logger = require("morgan")
app.use(logger('dev'))

const {todoArray} = require('./data')

//this is our built-in body-parser
//we dont know how they will send data
//but we do know they will send it through body
app.use(express.json());
//could be other data
app.use(express.urlencoded({extended: false}))

app.use(express.static('../client')) //connects to the client folder


app.get('/', (req,res) =>{
    res.send('I am root')
})


//NOTE: we can only use two routs
//  /todos
//  /todos/<id>

//READ
app.get('/todos', (req,res) => {
    res.status(200).json(todoArray)
})


// Create - adding a todo to our list
//      -POST method

let newId = 4;

app.post('/todos', (req,res) => {
    //add a new todo to our list
    let newTodo = {
        id: newId++,
        description: req.body.description,
        isComplete: false
    }
    todoArray.push(newTodo)
    res.status(200).json(newTodo) //sending a receipt
})



//DELETE
app.delete('/todos/:id', (req,res)=> {
    let requestedId = parseInt(req.params.id); //comes in as a string, need to make it a number
    let requestedToDoIndex = todoArray.findIndex((todo)=>{
        return requestedId === todo.id
    })
    if(requestedToDoIndex !== -1){
        todoArray.splice(requestedToDoIndex,1) //takes the index we pulled, and deletes one. physically alters the array
    }
    res.status(200).json(todoArray) //sending back a 200 status everything is okay then jsoning the array and sending it
})



//UPDATE -- Setting false to True
app.put('/todos/:id', (req,res) => {
    //need to change isComplete from false to true
    let requestedId = parseInt(req.params.id); //comes in as a string, need to make it a number
    let requestedTodo = todoArray.find((todo) => {
        return todo.id === requestedId
    });
    if(requestedTodo.isComplete){
        requestedTodo.isComplete =! requestedTodo.isComplete
        res.status(200).json(requestedTodo)
    } 
    res.status(404).json({message:"ID does not exist in database"})
});



const PORT = process.env.PORT || 3002
app.listen(PORT, () => console.log(`App is on ${PORT}`))







