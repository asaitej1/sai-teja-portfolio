function ExperienceCard ({experience}) {

    return (
        <article className="experience-card">
            <h3>{experience.role}</h3>
            <p>{experience.company}</p>
            <p>{experience.duration}</p>
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