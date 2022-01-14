import logo from './logo.svg';
import Toolbar from './components/Toolbar';
import Header from './components/Header';
import Movie from './components/Movie';
import { useState, useEffect } from 'react'
import './App.css';

function App() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('./movies.json')
    .then((response) => response.json())
    .then((data) => setMovies(data))
  }, [])

  return (
    <div className="App">
      <Header title="Movie Reviews" />
      <Toolbar />
      {movies.map((movie, i) => { 
        return <Movie key={i} title={movie.name} release_date={movie.release_date} actors={movie.actors} poster={movie.poster} rating={movie.rating} />
        })}
    </div>
  );
}

export default App;
