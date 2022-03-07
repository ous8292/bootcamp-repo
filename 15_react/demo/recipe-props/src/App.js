import Recipe from './components/Recipe';
import RecipeList from './components/RecipeList';
import Navbar from './components/Navbar';


import './App.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <RecipeList />
    </div>
  );
}
export default App;