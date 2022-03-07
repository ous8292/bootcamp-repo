import "./App.css";
import Arbuckle from "./assets/jon-arbuckle.png";
import About from "./assets/components/about";
import Bio from "./assets/components/bio";
import Favfoods from "./assets/components/favfoods";
import Hates from "./assets/components/hates";

function App() {
  return (
    <div className="App">
      <About />
      <img src={Arbuckle} alt="garfield" />
      <Bio />
      <Favfoods />
      <Hates />
    </div>
  );
}

export default App;
