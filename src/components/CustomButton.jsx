function CustomButton ({label, className, type = "button", onClick, ariaLabel, ariaExpanded, ariaControls}) {
    return (
        <button 
            className={className}
            type={type}
            onClick={onClick}
            aria-label={ariaLabel}
            aria-expanded={ariaExpanded}
            aria-controls={ariaControls}
        >
            {label}
        </button>
    )
}

export default CustomButton;