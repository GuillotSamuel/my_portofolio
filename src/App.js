import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/General.css";

import Header from "./components/Header";
import Presentation from "./components/Presentation";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <body>
        <Presentation />
        <AboutMe />
        <Skills />
        <Works />
      </body>
      <div className="contactFooterContainer">
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
