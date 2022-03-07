import './App.css';
import { Component } from 'react'
import keys from './config/keys'
import axios from 'axios'

class App extends Component {
  //optional
  //only runs ONCE => sets up initial state -- NEVER AGAIN
  // all changes are done OUTSIDE the constructor
  constructor(props){
    // if parent? then run parent constructor first, then child constructor
    // now we have access to parent data/variables
    super(props); 
    //sets the intial state of movies to an empty array
    this.state = {
      movies: []
    }
  }
  performSearch = searchTerm => {
    const url = `https://api.themoviedb.org/3`
    const movieRoute = `/search/movie?api_key=${keys.tmdb_key}&query=${searchTerm}`
    const endpoint = url + movieRoute
    // fetch(endpoint) //fetching data
    // .then(response => { //parsing to json
    //   return response.json()
    // })
    // .then(searchResults => { // do something with search result
    //   if(searchResults.results){
    //     //this.setState is a method/function that you pass in an object. Which is the new state
    //     this.setState({movies: searchResults.results})
    //   }
    // })
    axios.get(endpoint)
    .then((searchResults)=>{
      if (searchResults.data.results){
        this.setState({movies: searchResults.results.data})
      }
    })

    .catch(error => {
      console.error('Error coming from API: ', error)
    })
  }


  SearchChangeHandler = event => {
    console.log('I am an the event', event.target.value)
    this.performSearch(event.target.value)
  }
  // mandatory!!!
  //happens EVERY time something (props or state ) changes
  render(){
    return(
      <div>
      <h1>Movie Search</h1>
      <input type="text" 
              id="inputField" 
              placeholder="enter your movie"
              onChange={this.SearchChangeHandler}
              ></input>

      {
        this.state.movies.map(movie => (
          <div key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt='poster' />
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
        ))
      }

    </div>
    )
  }

}


export default App;
