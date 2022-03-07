import logo from './logo.svg';
import './App.css';
import {useState} from 'react' //imports state



function App() {
  //creates state
  const [todos, setTodos] =useState([
    {
      id: 1,
      description: "Eat every cake on earth",
      isComplete: false,
    },
    {
      id: 2,
      description: "Eat so much Pie",
      isComplete: false,
    }
  ]) 

  //only available inside app
  //state can be whatever type
  const [something, setSomething] = useState({})
  const [newTodo, setNewTodo] = useState('')
  const [completedCount, setCompletedCount] = useState(0)
  const [completeTodo, setCompletedTodo] = useState(false)


  //these lines loop through the todos into a list and we render it in return.
  //this way we dont have to write every single todo
  const todoList = todos.map(doggyhorse => {
    return (<li key={doggyhorse.id}>
                    {doggyhorse.description}
                    </li>)
  })

  return (
    <div>
      <h1>Simple Todos</h1>
      <ol>
        {todoList}
        {/* <li>
          {todos[0].description}
        </li>
        <li>
          {todos[1].description}
        </li> */}
      </ol>

    </div>

  );
}

export default App;
