import Toolbar from './components/Toolbar';
import Header from './components/Header';
import { useState, useEffect } from 'react'
import './App.css';
import MoviePane from './components/MoviePane';

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
      <MoviePane movies={movies} setMovies={setMovies} />
    </div>
  );
}

export default App;
