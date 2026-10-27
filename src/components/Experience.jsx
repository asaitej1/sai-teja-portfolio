import ExperienceCard from "./ExperienceCard";

function Experience () {

    const experiences = [
        {
            id: "att-react",
            company: "AT&T",
            role: "Frontend Developer",
            project: "ELNAS UI",
            duration: "Feb 2025 – Present",
            technologies: [
            "React",
            "TypeScript",
            "Redux Toolkit",
            "PrimeReact",
            "Axios",
            "REST APIs",
            ],
            responsibilities: [
            "Develop reusable React and TypeScript components for enterprise applications.",
            "Implement advanced search, filtering, sorting, pagination, and dynamic UI workflows.",
            "Integrate RESTful APIs using Axios and implement role-based access control.",
            "Optimize frontend performance and collaborate on application releases and troubleshooting.",
            ],
        },
        {
            id: "att-angular",
            company: "AT&T",
            role: "Full Stack Developer",
            project: "Enterprise Catalog Application",
            duration: "Jun 2024 – Feb 2025",
            technologies: [
            "Angular",
            "TypeScript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Figma",
            ],
            responsibilities: [
            "Designed application screens and workflows in Figma before development.",
            "Developed responsive, reusable frontend components using Angular and TypeScript.",
            "Built RESTful API endpoints using Node.js and Express.js.",
            "Integrated MongoDB and implemented role-based authorization for application modules.",
            ],
        },
        {
            id: "software-concepts",
            company: "Software Concepts LLC",
            role: "Frontend Developer",
            duration: "Jun 2023 – Jun 2024",
            technologies: [
            "React",
            "JavaScript",
            "Redux",
            "HTML5",
            "CSS3",
            "REST APIs",
            ],
            responsibilities: [
            "Developed responsive web applications using React, JavaScript, HTML5, and CSS3.",
            "Built reusable functional components using React Hooks and Redux.",
            "Integrated RESTful APIs and implemented dynamic filtering and sorting functionality.",
            "Collaborated with UI/UX and engineering teams to deliver responsive interfaces.",
            ],
        },
        {
            id: "optum",
            company: "Optum Global Solutions",
            role: "Full Stack Developer Intern",
            duration: "Dec 2020 – Jun 2021",
            technologies: [
            "Angular",
            "JavaScript",
            "Node.js",
            "Express.js",
            "REST APIs",
            ],
            responsibilities: [
            "Developed reusable frontend components using Angular, HTML, and CSS.",
            "Built and supported backend endpoints using Node.js and Express.js.",
            "Integrated RESTful APIs to retrieve and display application data.",
            "Collaborated with developers and documented application functionality.",
            ],
        },
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