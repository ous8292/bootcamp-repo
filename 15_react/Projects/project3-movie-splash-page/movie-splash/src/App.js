import './App.css';
import data from "./data"
import Movie from "./components/Movie"

function App() {

  const movies = data.map(movie => (
    <Movie movie={movie} />
  ))

  
  return (
    <div className="App">
      <h1>Now Playing </h1>
      {/* <Movie movie={data[0]} /> */}
      {/* <Movie image={data[0].description} director={data[0].director} title={data[0].title}/> */}
          {movies}
    </div>
  );
}

export default App;
