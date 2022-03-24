import React from "react";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";



function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
