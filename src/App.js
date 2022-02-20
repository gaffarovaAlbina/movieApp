import React from "react";
import {HashRouter, Routes, Route} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import "./App.css";
import Navigation from "./components/Navigation";
import Detail from "./components/Detail";

function App() {
  return (
  <HashRouter>
    <Navigation />
    <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/movie/:id" element={<Detail />}></Route>
        <Route exact path="/" element={<Home />}></Route>
    </Routes>
  </HashRouter>
  
  )
}

export default App;