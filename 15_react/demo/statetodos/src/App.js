import './App.css';
import { useState } from 'react'




const TodoItem = ({text}) => (
  <li>{text}</li>
)


function App() {
  const [todos, setTodos] = useState([]) //initializing an emtpy array for all our todos
  const [newTodo, setNewTodo] = useState('') //place holder text in input field

  const handleChange = event => {
    setNewTodo(event.target.value)
  }

  const todoList = todos.map((todo,index) => (
    <TodoItem key={index} text={todo} />
  ))

  const handleSubmit = event => {
    event.preventDefault()
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
    setNewTodo('')
  }


  return (
    <div className="App">
      <h1>Simple Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input
          class="todo-input"
          autoComplete="off"
          type="text"
          name="newTodo"
          placeholder="what needs to be done?"
          onChange={handleChange}
          value={newTodo}
          />
          <button type='submit' className='save-button'>SAVE</button>
      </form>
      <div classname="todo-content">
        <ol>
          { todoList }
        </ol>
      </div>
    </div>
  );
}

export default App;
