function ExperienceCard ({experience}) {

    return (
        <article className="experience-card">
            <div className="experience-header">
                <h3>{experience.role}</h3>
                <p>{experience.duration}</p>
            </div>
            <p className="experience-company">{experience.company}</p>
            {experience.project && (
                <p className="experience-project">
                    Project: {experience.project}
                </p>
            )}
            <div className="technologies">
                {experience.technologies.map((tech) => (
                    <span key={tech} className="technology-badge">{tech}</span>
                ))}
            </div>
            <ul>
                {experience.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                ))}
            </ul>
        </article>
    )
}

export default ExperienceCard;