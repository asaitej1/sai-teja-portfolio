import WelcomeMessage from "./WelcomeMessage";
import CustomButton from "./CustomButton";

function Home () {
    const developerName = "Hi, I'm Sai Teja Avadhootha"
    const developerRole = "Frontend Developer";
    const primarySkills = "React | Angular | TypeScript";

    function handleButtonClick (buttonName) {
        console.log(`${buttonName} button clicked!`);
    }

    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <h1 className='developer-name'>{developerName}</h1>
                <p className='developer-role'>{developerRole}</p>
                <p className='primary-skills'>{primarySkills}</p>
                <WelcomeMessage
                    message="Welcome to My Portfolio"
                />
                <p className='intro'>
                    I build responsive, scalable enterprise applications with a focus on user experience and performance.
                </p>
                <div className="hero-actions">
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
                </div>
            </div>
        </section>
    )
}

export default Home;