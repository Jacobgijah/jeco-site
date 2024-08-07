import React, { useState } from "react";
import './qualification.css';

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);
    
    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Individual Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div 
                        className={
                            toggleState === 1 
                            ? "qualification__button qualification__active button--flex"
                            : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap 
                            qualification__icon"></i>
                            Education
                    </div>

                    <div 
                        className={
                            toggleState === 2  
                            ? "qualification__button qualification__active button--flex"  
                            : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt
                            qualification__icon"></i>
                            Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div 
                        className={
                            toggleState === 1
                            ? "qualification__content qualification__content-active" 
                            : "qualification__content"
                        }
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">BSC. Information Systems</h3>
                                <span className="qualification__subtitle">University Of Dodoma</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                        2020 - 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Diploma in ICT</h3>
                                <span className="qualification__subtitle">University Of Dodoma</span>
                                <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                        2017 - 2019
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Certificate in ICT</h3>
                                <span className="qualification__subtitle">University Of Dodoma</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                        2016 - 2017
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">CSEE</h3>
                                <span className="qualification__subtitle">Mbeya Secondary</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                        2011 - 2014
                                </div>
                            </div>
                        </div>
                    </div>

                    <div 
                        className={
                            toggleState === 2 ?
                            "qualification__content qualification__content-active" : 
                            "qualification__content"
                        }
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web & Mobile development</h3>
                                <span className="qualification__subtitle">FreshInk Digital</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                        May 2024 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Predictive Modelling</h3>
                                <span className="qualification__subtitle">University Of Dodoma - Final year project</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                        Nov 2022 - June 2023
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web development</h3>
                                <span className="qualification__subtitle">eGovernment Authority - RIDC</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                        Aug 2022 - Jan 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
    )
}
export default Qualification