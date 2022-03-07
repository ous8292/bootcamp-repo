import AddForm from "./components/AddForm";
import { useState } from 'react'
import Display from './components/Display'

function App() {
  const [result, setResult] = useState()




  return (
    <div className="App">
      <h1>State Practice</h1>
      <AddForm setResult={setResult} />
      <Display result={result} />
    </div>
  );
}

export default App;
