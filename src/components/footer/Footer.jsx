import React from "react";
import "./footer.css";

export const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Innovators</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#home" className="footer__link">Home</a>
                    </li>

                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#services" className="footer__link">Services</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a 
                        href="https://www.instagram.com/"
                        className="footer__social-link" 
                        target="_blank"
                    >
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a
                        href="0782671763"
                        className="footer__social-link"
                        target="_blank"
                    >
                        <i className="bx bxl-whatsapp"></i>
                    </a>
                    <a
                        href="https://twitter.com/"
                        className="footer__social-link"
                        target="_blank"
                    >
                        <i className="bx bxl-twitter"></i>
                    </a>
                </div>

                <span className="footer__copy">
                    &#169; InnovatorSquad. All rights reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer