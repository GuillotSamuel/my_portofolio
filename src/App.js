import React from 'react'
import {Routes, Route} from "react-router-dom"
import './App.css';

import Header from "./components/Header"
import Presentation from "./components/Presentation"
import Skills from "./components/Skills"
import Works from "./components/Works"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


function App() {
  return (
    <div className="App">
      <Header/>
      <Presentation/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
