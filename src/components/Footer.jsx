function Footer () {

    const currentYear = new Date().getFullYear();

    return(
        <footer className="footer">
            © {currentYear} Sai Teja Avadhootha. Built with React.
        </footer>
    )
}

export default Footer;