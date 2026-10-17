function CustomButton ({label, className, type = "button", onClick}) {
    return (
        <button 
            className={className}
            type={type}
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default CustomButton;