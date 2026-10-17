import { useState, useEffect } from "react";
import Home from './components/Home'
import ThemeToggle from './components/ThemeToggle';
import './App.css'

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
      <ThemeToggle
        isDarkMode={isDarkMode}
        onToggle={handleThemeToggle}
      />
      <Home />
    </div>
  );
}

export default App;
