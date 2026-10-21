import SkillCard from "./SkillCard";

function Skills () {

    const skills = [
        "React",
        "Angular",
        "JavaScript",
        "TypeScript",
        "Redux",
        "HTML5",
        "CSS3",
        "Node.js",
        "Git",
    ]

    return (
        <section id="skills" className="skills-section">
            <h2 className="skills-heading">Technical Skills</h2>
            <div className="skills-grid">
                {skills.map((skill) =>
                        <SkillCard
                            key={skill}
                            skill={skill} 
                        />
                )}
            </div>
        </section>
    )

}

export default Skills;