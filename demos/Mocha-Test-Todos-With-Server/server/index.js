const express = require("express");
const app = express();
const logger = require("morgan");
// app.use(logger("dev"));
// this is our built-in body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const { todoArray } = require("./fakeData");
app.use(express.static("../client"));
app.get("/", (req, res) => {
  res.send("Root route");
});
// Read - GET
app.get("/todos", (req, res) => {
  // display todos
  if (todoArray.length > 0) {
    res.status(200).json(todoArray);
  } else {
    res.status(200).json({ message: "You ain't got no todos!!" });
  }
});
// Create - POST
let newId = 4;
app.post("/todos", (req, res) => {
  // add a new todo to our list
  let newTodo = {
    id: newId++,
    description: req.body.description,
    isComplete: false,
  };
  todoArray.push(newTodo);
  res.status(200).json(newTodo);
});
// Delete - DELETE
app.delete("/todos/:id", (req, res) => {
  let requestedId = parseInt(req.params.id);
  let requestedTodoIndex = todoArray.findIndex(
    (todo) => requestedId === todo.id
  );
  if (requestedTodoIndex !== -1) todoArray.splice(requestedTodoIndex, 1);
  res.status(200).json(todoArray);
});
// Update - PUT
app.put("/todos/:id", (req, res) => {
  let requestedId = parseInt(req.params.id);
  let requestedTodo = todoArray.find((todo) => {
    return todo.id === requestedId;
  });
  if (requestedTodo) {
    requestedTodo.isComplete = !requestedTodo.isComplete;
    res.status(200).json(requestedTodo);
  } else {
    res.status(404).json({ message: "Id does not exist in database" });
  }
});
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`App running on port ${PORT}`));
module.exports = app