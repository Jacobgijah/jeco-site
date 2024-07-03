import React from "react";
import './about.css';
import AboutImg from '../../assets/dp.jpg';
import CV from '../../assets/jacob_cv_2.pdf';
import Info from './Info';

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">I'm About</h2>
                <span className="section__subtitle">Introducing Me</span>

                <div className="about__container container grid">
                    <img src={AboutImg} alt="" className="about__img" />

                    <div className="about__data">
                        <Info />

                        <p className="about__descripton">
                            I produce software as a backend and frontend developer. I have years of 
                            experience, and I employ that experience to craft software solutions that 
                            are suited to the particular requirements of our clients.
                        </p>

                        <a download="" href={CV} className="button button--flex">
                            Download CV
                            <i class="uil uil-file-download-alt"></i>    
                        </a>
                        
                    </div>
                </div>
        </section>
    )
}

export default About