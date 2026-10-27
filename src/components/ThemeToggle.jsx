import { Sun, Moon} from "lucide-react"


function ThemeToggle ({isDarkMode, onToggle}) {

    return (
            <button
                type="button"
                className="theme-toggle-button"
                onClick={onToggle}
                aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
            >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
    )
}

export default ThemeToggle;