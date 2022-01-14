import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movies from "./routes/movies"
import Submit from "./routes/submit"
import Nothing from "./routes/nothing"

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="submit" element={<Submit />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


