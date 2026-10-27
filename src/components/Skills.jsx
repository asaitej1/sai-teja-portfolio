import SkillCard from "./SkillCard";
import {
    SiReact,
    SiAngular,
    SiJavascript,
    SiTypescript,
    SiRedux,
    SiHtml5,
    SiCss,
    SiNodedotjs,
    SiGit,
    SiExpress,
    SiPrimereact,
    SiAxios,
    SiMongodb,
    SiMysql,
    SiFigma
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import {
    Webhook,
    Layers,
    Component,
    GitBranch,
    MonitorSmartphone,
    Users
} from "lucide-react";

function Skills () {

    const skillCategories = [
    {
        category: "Frontend",
        skills: [
            { name: "React", icon: SiReact },
            { name: "Angular", icon: SiAngular },
            { name: "JavaScript", icon: SiJavascript },
            { name: "TypeScript", icon: SiTypescript },
            { name: "HTML5", icon: SiHtml5 },
            { name: "CSS3", icon: SiCss },
        ]
    },
    {
        category: "Backend & APIs",
        skills: [
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Express.js", icon: SiExpress },
            { name: "REST APIs", icon: Webhook },
        ]
    },
    {
        category: "State Management & UI",
        skills: [
            { name: "Redux", icon: SiRedux },
            { name: "Redux Toolkit", icon: Layers },
            { name: "React Hooks", icon: Component },
            { name: "PrimeReact", icon: SiPrimereact },
            { name: "Angular Material", icon: Component },
            { name: "Axios", icon: SiAxios }
        ]
    },
    {
        category: "Databases",
        skills: [
            { name: "MongoDB", icon: SiMongodb },
            { name: "MySQL", icon: SiMysql },
        ]
    },
    {
        category: "Cloud & DevOps",
        skills: [
            { name: "Azure", icon: VscAzure },
            { name: "AWS", icon: FaAws },
            { name: "Git", icon: SiGit },
            { name: "CI/CD", icon: GitBranch },
        ]
    },
    {
        category: "Design & Development",
        skills: [
            { name: "Figma", icon: SiFigma },
            { name: "Responsive Design", icon: MonitorSmartphone },
            { name: "Agile", icon: Users },
        ]
    },
];

    return (
        <section id="skills" className="skills-section">
            <h2 className="skills-heading">Technical Skills</h2>
            <div className="skills-grid">
                {skillCategories.map((category) => (
                    <div className="skill-category" key={category.category}>
                        <h3>{category.category}</h3>
                        <div className="category-skills-grid">
                            {category.skills.map((skill) => (
                                <SkillCard
                                    key={skill.name}
                                    skill={skill} 
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )

}

export default Skills;