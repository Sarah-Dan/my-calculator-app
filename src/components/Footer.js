import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer__container">
            <p className="footer__text">
            Made with <span className="footer__heart">❤</span> by{" Sarah Daniel "}
            </p>
            <a href="https://github.com/Sarah-Dan" target="_blank" rel= "noopener norefer" className="footer__link">GitHub</a>
        </div>
        </footer>
    );
};

export default Footer;