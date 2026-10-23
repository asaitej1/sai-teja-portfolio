function Contact () {

    return (
        <section id="contact" className="contact-section">
            <h2 className="contact-heading">Get In Touch</h2>
            <p className="contact-description">I’m open to discussing frontend development opportunities and interesting projects. Feel free to connect with me!</p>
            <div className="contact-links">
                <a href="mailto:saitejaavadhootha26@gmail.com" className="contact-link">
                    Email Me
                </a>
                <a
                    href="https://www.linkedin.com/in/saitejaavadhootha/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                >
                    LinkedIn
                </a>
                <a
                    href="https://github.com/asaitej1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                >
                    GitHub
                </a>
            </div>
        </section>
    )
}

export default Contact;