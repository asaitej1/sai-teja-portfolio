import { useState } from "react";
import ProjectCard from "./ProjectCard";
import CustomButton from "./CustomButton";

function Projects () {

    const [selectedTechnology, setSelectedTechnology] = useState("All");

    const filterOptions = ["All", "React"];

    const projects = [
        {
            id: "elnas-ui",
            name: "ELNAS UI",
            description: "Enterprise network management interface built using React and Redux.",
            technologies: ["React", "TypeScript", "Redux", "PrimeReact"]
        },
        {
            id: "enterprise-catalog",
            name: "Enterprise Catalog",
            description: "Enterprise catalog application designed in Figma and developed using Angular and Node.js.",
            technologies: ["Angular", "TypeScript", "Node.js", "MongoDB"]
        },
        {
        id: "portfolio",
        name: "Personal Developer Portfolio",
        description: "A responsive personal portfolio built with React and JavaScript to showcase my technical skills, professional experience, and projects. Features reusable components, dark/light theme switching, technology-based skill categories, and responsive layouts.",
        technologies: ["React", "JavaScript", "HTML5", "CSS3", "Vite"
        ]

    }
    ];

    const filteredProjects = selectedTechnology === "All"
        ? projects
        : projects.filter((project) => (
            project.technologies.includes(selectedTechnology)
        ));

    
    return (
        <section id="projects" className="projects-section">
            <h2 className="projects-heading">Featured Projects</h2>
            <div className="project-filters">
                {filterOptions.map((filterButton) => (
                    <CustomButton 
                        key={filterButton}
                        className={`filter-button ${selectedTechnology === filterButton ? "active" : ""}`} 
                        label={filterButton}
                        type="button"
                        onClick={() => setSelectedTechnology(filterButton)}
                    />
                ))}
            </div>
            <div className="projects-grid">
                {filteredProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>
        </section>
    )

}

export default Projects;