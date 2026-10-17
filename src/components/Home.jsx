import WelcomeMessage from "./WelcomeMessage";
import CustomButton from "./CustomButton";

function Home () {
    const developerName = "Sai Teja Avadhootha"
    const developerRole = "Frontend Developer";
    const primarySkills = "React | Angular | TypeScript";

    function handleButtonClick (buttonName) {
        console.log(`${buttonName} button clicked!`);
    }

    return (
        <>
            <h1 className='developer-name'>{developerName}</h1>
            <p className='developer-role'>{developerRole}</p>
            <p className='primary-skills'>{primarySkills}</p>
            <WelcomeMessage
                message="Welcome to My Portfolio"
            />
            <p className='intro'>
                Frontend Developer specializing in React, Angular, and TypeScript, with experience building responsive, scalable enterprise applications. I focus on creating intuitive user experiences, reusable components, and maintainable frontend architectures.
            </p>
            <CustomButton
                label="View Projects" 
                className="view-projects-button"
                onClick={() => handleButtonClick("View Projects")}
                type = "button"
            />
            <CustomButton
                label="Download Resume" 
                className="download-resume-button"
                onClick={() => handleButtonClick("Download Resume")}
                type = "button"
            />
        </>
    )
}

export default Home;