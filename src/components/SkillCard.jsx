function SkillCard ({skill}) {

    const Icon = skill.icon;

    return (
        <div className="skill-card">
            <Icon size={24} aria-hidden="true" />
            {skill.name}
        </div>
    )
}

export default SkillCard;