import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  //creating dynamic values and rendering them in the h1 using { }
  // react can out put integers, arrays, strings -> converts it into a string and displays
  // react can not output booleans and objects

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
