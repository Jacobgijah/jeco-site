import React, { useState } from "react";
import './services.css';

const Services = () => {
    const [toggleState, setToggleState] = useState(0);
    
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I Offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">
                            UI/UX <br /> Designer
                        </h3>

                        <span className="services__button" onClick={() => toggleTab(1)}>
                            View More
                            <i className="uil uil-arrow-right services__button-icon"></i> 
                        </span>

                        <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                            <div className="services__model-content">
                                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                                <h3 className="services__modal-title">User Interface / User Experience 
                                    <br /> Designer</h3>
                                <p className="services__modal-description">
                                    Over three years of experience services. delivering to clients 
                                    high-quality work.
                                </p>

                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">
                                            I develop the user interface.
                                        </p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">
                                            Web page development.
                                        </p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">
                                            I create UX element interactions.
                                        </p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">
                                            Design and mockups of products for companies.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">
                            Web Apps <br /> Designer
                        </h3>

                        <span className="services__button" onClick={() => toggleTab(2)}>
                            View More
                            <i className="uil uil-arrow-right services__button-icon"></i> 
                        </span>

                        <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                            <div className="services__model-content">
                                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                                <h3 className="services__modal-title">Web-based Application 
                                    <br />Designer</h3>
                                <p className="services__modal-description">
                                    Over three years of experience services. delivering to clients 
                                    high-quality work.
                                </p>

                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">
                                            Responsive Design.
                                        </p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">
                                            Integration with Backend Systems.
                                        </p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">
                                            API Design and Development.
                                        </p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">
                                            API Integration.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-analytics services__icon"></i>
                        <h3 className="services__title">
                            Data <br /> Analysis
                        </h3>

                        <span className="services__button" onClick={() => toggleTab(3)}>
                            View More
                            <i className="uil uil-arrow-right services__button-icon"></i> 
                        </span>

                        <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                            <div className="services__model-content">
                                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                                <h3 className="services__modal-title">Data Scicence Anaylsis</h3>
                                <p className="services__modal-description">
                                    Over two years of experience services. delivering to clients 
                                    high-quality work.
                                </p>

                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">
                                            Data Analysis.
                                        </p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">
                                            Data Visualization.
                                        </p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">
                                            I develop Predictive Models.
                                        </p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">
                                            IT Consultation and Training.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </section>
    )
}
export default Services