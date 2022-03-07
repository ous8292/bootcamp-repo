import { useEffect, useState } from 'react'
import './App.css';



// generates the li element and all its attributes
const TodoItem = ({todoObj, toggleComplete, handleDelete}) => ( //to do component
  <div>
    <li 
      onClick={toggleComplete} 
      className={todoObj.isComplete ? "completed" : "not"}
    >
      {todoObj.description}
    </li>
    <span onClick={() => {handleDelete(todoObj.id)}}>X</span>
  </div>
)

// Holder of the render (look for return statement) and the state (todos, newTodo)
function App() { //app component
  //url for the API - hardcoding the user id
  let url = 'https://acctodos.herokuapp.com/user/1/todos' 

  const [todos, setTodos] = useState([ //mock data
    // {
    //   id: 1,
    //   description: "Hike Patagonia",
    //   isComplete: true
    // }, 
    // {
    //   id: 2,
    //   description: "View Earth from Space",
    //   isComplete: false
    // }
  ])
  const [newTodo, setNewTodo] = useState('')

  // provides 2 way binding between the input element and the state:newTodo
    //keep track of things user is typing
  const handleChange = event => {
    setNewTodo(event.target.value)
  }

  // transfers the newTodo to the todos Array (system of record within the React app)
  const handleSubmit = event => {
    event.preventDefault()
    const newTodos = [...todos, { id: Date.now(), description: newTodo, isComplete: false}]
    setTodos(newTodos)
    setNewTodo('')
  }
  
  // it changes the state by flipping the isComplete property of the clicked todo
  //updates the todo 
  //passing an id of the todo and flipping the status
  const handleClick = id => {
    // we need to inform the backend, (the truth)
    fetch(url+'/'+id, {method: 'PUT'})
    .then(responseObject => responseObject.json()) // running .json on the responseObject
    .then(() => { //runs if fetch is sucessful
      // now tell the front end that the status has flipped
      // update the state with the appropriate todo item's completion property flipped
      // update the state
      setTodos(todos => { //changes the state
        let copyOfTodos = [...todos];
        // find the relevant todo object using the id
        let clickedTodoIndex = copyOfTodos.findIndex(t => t.id === id);
        // change it's isComplete/flip its status
        copyOfTodos[clickedTodoIndex].isComplete = !copyOfTodos[clickedTodoIndex].isComplete;
        return copyOfTodos;
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  // it changes the state by removing the specific todo with the matching id
  const handleDelete = id => {
    setTodos(todosArray => {
      return todosArray.filter(t => {
        return t.id !== id
      })
    })
  }

  // generates a list of TodoItem's
  const todoList = todos.map(todoObj => (
    <TodoItem 
      key={todoObj.id} 
      todoObj={todoObj}
      handleDelete={handleDelete}
      toggleComplete={() => {
        handleClick(todoObj.id)
      }} 
    />
  ));

//it is run as an effect (impure action)
useEffect(() => {
  //here we make the API GET call
  console.log('I am the useEffect function')
  fetch(url)
  .then(responseObject => responseObject.json())
  .then(todosArray => {
    setTodos(todosArray)
  })
//compares todos in the state and only runs if it is different from what we get
}, []) 
//empty [] will tell it to just run once at the begining and the code will handle updates


  // sends the JSX generated for rendering
  //renders app on browser
  return (
    <div className="App">
      <h1>My Bucket List</h1>
      <form onSubmit={handleSubmit}>
        <input 
          className="todo-input"
          autoComplete="off"
          type="text"
          name="newTodo"
          placeholder="My next bucket list item"
          onChange={handleChange}
          value={newTodo}
        />
        <button type="submit" className="save-button">SAVE</button>
      </form>
      <div className="todo-content">
        <ol>
          { todoList }
        </ol>
      </div>
    </div>
  );
}

export default App;




/*

1. Create a simple component that shows "my bucket list"
2. Add a state to the component - state is like a local database
3. fill state with some dummy bucket list items
4. loop through the todos to display the todos

5. a way to enter new list items
  a. add input box
  b. form
  c. a function to handle the use case of user hitting Enter Key (aka sumbit)
    - stop the form from refreshing the page
    - inform the backend
    - update the state
6. a way to mark the todo complete
    - inform the backend
    -change the state
    - style the completed somehow
7. a way to delete a todo
8. a way to show my todo list when I load a page



9. Deploy to a public server so I can get my friends to comment and feedback

*/