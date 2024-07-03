import React from "react";
import "./contact.css";

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in Touch</h2>
            <span className="section__subtitle">Contact Us</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Let's Talk</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">jacobgijjah@yahoo.com</span>

                            <a href="mailto:jacobgijjah@yahoo.com" className="contact__button" target="_blank"> 
                                Write me{" "} 
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>

                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">0782-671-763</span>

                            <a href="https://wa.link/zre58y" className="contact__button" target="_blank"> 
                                Write me{" "} 
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-messenger contact__card-icon"></i>

                            <h3 className="contact__card-title">Messenger</h3>
                            <span className="contact__card-data">techguy.fbacount</span>

                            <a href="#" className="contact__button" target="_blank"> 
                                Write me{" "} 
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write to us your project</h3>

                    <form className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input 
                              type="text"
                              name="name"
                              className="contact__form-input"
                              placeholder="Insert your name"
                            />
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Mail</label>
                            <input 
                              type="email"
                              name="email"
                              className="contact__form-input"
                              placeholder="Insert your email"
                            />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Project</label>
                            <textarea 
                              name="project"
                              cols="30"
                              rows="10"
                              className="contact__form-input"
                              placeholder="Write your project"
                            ></textarea>
                        </div>

                        <button className="button button--flex">
                            Send Message
                            <i class="uil uil-message"></i>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact