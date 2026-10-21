import CustomButton from "./CustomButton";


function ThemeToggle ({isDarkMode, onToggle}) {

    return (
        <>
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