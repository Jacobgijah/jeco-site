import React from "react";
import "./footer.css";

export const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">jeco</h1>

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
                        href="https://www.instagram.com/jacobgijjah"
                        className="footer__social-link" 
                        target="_blank"
                    >
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a
                        href="https://wa.link/zre58y"
                        className="footer__social-link"
                        target="_blank"
                    >
                        <i className="bx bxl-whatsapp"></i>
                    </a>
                    <a
                        href="https://twitter.com/gijjah_jacob"
                        className="footer__social-link"
                        target="_blank"
                    >
                        <i className="bx bxl-twitter"></i>
                    </a>
                </div>

                <span className="footer__copy">
                     jacobgijjah 2024 &#169; All rights reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer