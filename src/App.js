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

  useEffect(async () => {
    const test = await fetch('/api/movies');
      const second = await test.json();
      setMovies(second);
  }, [])


 


  return (
    <BrowserRouter>
      <Toolbar />
      <Routes>
        <Route path="/" element={<MoviePane movies={movies} setMovies={setMovies}/>} />
        <Route path="/submit" element={<ReviewForm movies={movies} setMovies={setMovies}/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
