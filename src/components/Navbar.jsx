import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react"

function Navbar ({isDarkMode, onToggle}) {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function handleMenuToggle () {
        setIsMenuOpen ((prev) => (!prev))
    }

    return (
        <nav className="navbar">
            <p className="navbar-brand">Sai Teja</p>
            <div id="primary-navigation" className={`navbar-content ${isMenuOpen ? "menu-open" : ""}`}>
                <ul className="navbar-links">
                    <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                    <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
                    <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
                    <li><a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
                    {/* <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li> */}
                    <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                </ul>
            </div>
            <div className="navbar-controls">
                <ThemeToggle
                    isDarkMode={isDarkMode}
                    onToggle={onToggle}
                />
                <button 
                    className="menu-toggle"
                    onClick={handleMenuToggle}
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls={"primary-navigation"}
                    type="button"
                >
                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>
        </nav>
    )
}

export default Navbar;