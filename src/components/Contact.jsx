import { Mail } from "lucide-react"
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Contact () {

    return (
        <section id="contact" className="contact-section">
            <h2 className="contact-heading">Get In Touch</h2>
            <p className="contact-description">I’m open to Frontend Developer, React Developer, Angular Developer, and Full Stack Developer opportunities. Feel free to connect with me to discuss software development roles, collaboration, or interesting projects.</p>
            <div className="contact-links">
                <a href="mailto:saitejaavadhootha26@gmail.com" className="contact-link">
                    <Mail size={20} aria-hidden="true" />
                    Email Me
                </a>
                <a
                    href="https://www.linkedin.com/in/saitejaavadhootha/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                >
                    <FaLinkedin size={20} aria-hidden="true" />
                    LinkedIn
                </a>
                <a
                    href="https://github.com/asaitej1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                >
                    <FaGithub size={20} aria-hidden="true" />
                    GitHub
                </a>
            </div>
        </section>
    )
}

export default Contact;