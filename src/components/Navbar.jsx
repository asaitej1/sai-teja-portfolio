import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import CustomButton from "./CustomButton";

function Navbar ({isDarkMode, onToggle}) {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function handleMenuToggle () {
        setIsMenuOpen ((prev) => (!prev))
    }

    return (
        <nav className="navbar">
            <p className="navbar-brand">Sai Teja</p>
            <CustomButton 
                className="menu-toggle"
                onClick={handleMenuToggle}
                label={isMenuOpen ? "✕" : "☰"}
                ariaLabel={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                ariaExpanded={isMenuOpen}
                ariaControls={"primary-navigation"}
            />
            <div id="primary-navigation" className={`navbar-content ${isMenuOpen ? "menu-open" : ""}`}>
                <ul className="navbar-links">
                    <li onClick={() => setIsMenuOpen(false)}><a href="#home">Home</a></li>
                    <li onClick={() => setIsMenuOpen(false)}><a href="#about">About</a></li>
                    <li onClick={() => setIsMenuOpen(false)}><a href="#skills">Skills</a></li>
                    <li onClick={() => setIsMenuOpen(false)}><a href="#experience">Experience</a></li>
                    <li onClick={() => setIsMenuOpen(false)}><a href="#projects">Projects</a></li>
                    <li onClick={() => setIsMenuOpen(false)}><a href="#contact">Contact</a></li>
                </ul>
                <ThemeToggle
                    isDarkMode={isDarkMode}
                    onToggle={onToggle}
                />
            </div>
        </nav>
    )
}

export default Navbar;