import "./App.css";
import { useState } from "react"; //importing state hook/initializing state
import keys from "./config/keys"; //allows access to api keys

function App() {
  const [movies, setMovies] = useState([
    // {
    //   id: 0,
    //   poster_path: "https://image.tmdb.org/t/p/w185/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    //   title: "Avengers: Infinity War", overview: "The Avengers fight Thanos."
    // },
    // {
    // id: 1,
    // poster_path: "https://image.tmdb.org/t/p/w185/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    // title: "The Avengers",
    // overview: "The Avengers fight Loki."
    // }
  ]);

  //SEARCH FUNCTION --FETCH
  const performSearch = (searchTerm) => {
    const url = `https://api.themoviedb.org/3`;
    const movieRoute = `/search/movie?api_key=${keys.tmdb_key}&query=${searchTerm}`;
    const endpoint = url + movieRoute;
    fetch(endpoint) //fetching data
      .then((response) => {
        //parsing to json
        return response.json();
      })
      .then((searchResults) => {
        // do something with data
        if (searchResults.results) {
          setMovies(searchResults.results);
        }
      })
      .catch((error) => {
        console.error("Error coming from API: ", error);
      });
  };

  const SearchChangeHandler = (event) => {
    console.log("I am an the event", event.target.value);
    performSearch(event.target.value);
  };

  return (
    <div>
      <h1>Movie Search</h1>
      <input
        type="text"
        id="inputField"
        placeholder="enter your movie"
        onChange={SearchChangeHandler}
      ></input>

      {movies.map((movie) => (
        <div key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt="poster"
          />
          <h3>{movie.title} </h3>
          <br></br>
          <p>Summary: {movie.overview}</p>
          <br></br>
          <p>Release: {movie.release_date}</p>
          <br></br>
          <p>Average Score: {movie.vote_average} out of 10</p>
          <br></br>
          <br></br>
        </div>
      ))}
    </div>
  );
}

export default App;

// 'bounce' could solve the problem of all the calls per keystroke

//Note: Important for web dev ---> Think about how the user would think of the website/ interact with website

//try styling this better!
