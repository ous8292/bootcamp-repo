import steve1 from './assets/steve1.jpg'
import './App.css';
import Videos from './components/videos'
import Bio from './components/bio'
import Resources from './components/resources';
import Data from './components/data'

function App() {

  

  return (
    <div className="App">
      <h1>Welcome to the Ultimate Steve Jobs Fan Website</h1>
      <img src={steve1} alt="steve"/>
      <Bio />
      <Resources />
      <Videos video={Data}/>



    </div>
  );
}

export default App;
