import { useState, useEffect } from "react";
import Home from './components/Home'
import './App.css'
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

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
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
