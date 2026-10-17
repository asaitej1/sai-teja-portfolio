import CustomButton from "./CustomButton";


function ThemeToggle ({isDarkMode, onToggle}) {

    return (
        <>
            <div>Current Theme: {isDarkMode ? "Dark" : "Light"}</div>
            <CustomButton
                label={`Switch to ${isDarkMode ? "Light Mode" : "Dark Mode"}`}
                type="button"
                className="theme-toggle-button"
                onClick={onToggle}
            />
        </>
    )
}

export default ThemeToggle;