import { useState, useEffect } from "react";
import Home from './components/Home'
import './App.css'
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("isDarkMode")
    return savedTheme === "true"
  })

  useEffect (() => {
    localStorage.setItem("isDarkMode", String(isDarkMode))
  }, [isDarkMode]);

  function handleThemeToggle () {
      setIsDarkMode((prev) => !prev)
  }

  return (
    <div className={ `app-container ${isDarkMode ? "dark-theme" : "light-theme"}`}>
      <Navbar
        isDarkMode={isDarkMode}
        onToggle={handleThemeToggle}
      />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
