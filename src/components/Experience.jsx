import ExperienceCard from "./ExperienceCard";

function Experience () {

    const experiences = [
        {
            id: "att-react",
            company: "AT&T",
            role: "Frontend Developer",
            duration: "Feb 2025 – Present",
            technologies: ["React", "TypeScript", "Redux", "PrimeReact"],
            responsibilities: [
            "Developed reusable React components for enterprise applications",
            "Implemented dynamic forms, data tables, and search workflows",
            "Integrated frontend features with backend REST APIs"
            ]
        },
        {
            id: "att-angular",
            company: "AT&T",
            role: "Fullstack Developer",
            duration: "Jun 2024 – Feb 2025",
            technologies: ["Angular", "TypeScript", "Node.js", "MongoDB"],
            responsibilities: [
            "Designed application interfaces using Figma",
            "Developed frontend features using Angular",
            "Integrated Node.js APIs and MongoDB"
            ]
        }
    ];

    return(
        <section id="experience" className="experience-section">
            <h2 className="experience-heading">Professional Experience</h2>
            <div className="experience-list">
                {experiences.map((experience) => (
                    <ExperienceCard key={experience.id} experience={experience} />
                ))}
            </div>
        </section>
    )

}

export default Experience;