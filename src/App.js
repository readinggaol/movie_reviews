import Toolbar from './components/Toolbar';
import Header from './components/Header';
import { useState, useEffect } from 'react'
import './App.css';
import MoviePane from './components/MoviePane';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReviewForm from './components/ReviewForm';
import ErrorPage from './components/ErrorPage';

function App() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('./movies.json')
    .then((response) => response.json())
    .then((data) => setMovies(data))
  }, [])

  return (
    <BrowserRouter>
      <Toolbar />
      <Routes>
        <Route path="/" element={<MoviePane movies={movies} setMovies={setMovies}/>} />
        <Route path="/submit" element={<ReviewForm movies={movies}/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
