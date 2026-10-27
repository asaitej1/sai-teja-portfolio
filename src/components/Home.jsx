import CustomButton from "./CustomButton";
import { Download } from "lucide-react"

function Home () {
    const developerName = "Hi, I'm Sai Teja Avadhootha"
    const developerRole = "Full Stack Developer | Frontend Developer";
    const primarySkills = "React • Angular • TypeScript • JavaScript • Node.js • Express.js";

    function handleViewExperiences() {
        document.getElementById("experience")?.scrollIntoView({
            behavior: "smooth"
        })
    }

    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <h1 className='developer-name'>{developerName}</h1>
                <p className='developer-role'>{developerRole}</p>
                <p className='primary-skills'>{primarySkills}</p>
                <p className='intro'>
                    Full Stack Developer with 5+ years of experience building scalable enterprise web applications. I specialize in developing responsive, high-performance user interfaces with React, Angular, and TypeScript, along with backend services and REST APIs using Node.js and Express.js.
                </p>
                <div className="hero-actions">
                    <CustomButton
                        label="View Experiences" 
                        className="view-projects-button"
                        onClick={handleViewExperiences}
                        type = "button"
                    />
                    <a 
                        className="download-resume-button" 
                        href="/resume/Sai_Teja_Avadhootha_Resume.pdf"
                        download={"Sai_Teja_Avadhootha_Resume.pdf"}
                    >
                        <Download size={20} aria-hidden="true" />
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Home;