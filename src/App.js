import logo from './logo.svg';
import Toolbar from './components/Toolbar';
import Header from './components/Header';
import Nothing from "./routes/nothing"
import { useState, useEffect } from 'react'
import './App.css';
import { Link, Routes, Route } from 'react-router-dom'

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
      <Routes>
        <Route path='/submit' />
        <Route path="*" element={<Nothing />} />
      </Routes>
    </div>
  );
}

export default App;
