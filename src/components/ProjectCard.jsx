function ProjectCard ({project}) {

    return (
        <article className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="technologies">
                {project.technologies.map((tech) => (
                    <span key={tech} className="technology-badge">
                        {tech}
                    </span>
                ))}
            </div>
        </article>
    )
}

export default ProjectCard;