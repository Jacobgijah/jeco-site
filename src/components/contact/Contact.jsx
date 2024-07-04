import React, { useRef, useState } from "react";
import "./contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm('service_nqyjaj9', 'template_v26e1mq', form.current, {
                publicKey: 'J2mhmP044Uow3nFlo',
            })
            .then(
                () => {
                    setLoading(false);
                    setSuccessMessage('Message successfully sent!');
                    form.current.reset();
                },
                (error) => {
                    setLoading(false);
                    setSuccessMessage(`Failed to send message: ${error.text}`);
                },
            );
    };

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
                            <a href="mailto:jacobgijjah@yahoo.com" className="contact__button" target="_blank" rel="noopener noreferrer">
                                Write me{" "} 
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>
                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">0782-671-763</span>
                            <a href="https://wa.link/zre58y" className="contact__button" target="_blank" rel="noopener noreferrer">
                                Write me{" "} 
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-messenger contact__card-icon"></i>
                            <h3 className="contact__card-title">Messenger</h3>
                            <span className="contact__card-data">techguy.fbacount</span>
                            <a href="#" className="contact__button" target="_blank" rel="noopener noreferrer">
                                Write me{" "} 
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write to us your project</h3>

                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input 
                              type="text"
                              name="user_name"
                              className="contact__form-input"
                              placeholder="Insert your name"
                            />
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Mail</label>
                            <input 
                              type="email"
                              name="user_email"
                              className="contact__form-input"
                              placeholder="Insert your email"
                            />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Project</label>
                            <textarea 
                              name="message"
                              id="message"
                              cols="30"
                              rows="10"
                              className="contact__form-input"
                              placeholder="Write your project"
                            ></textarea>
                        </div>

                        <button className="button button--flex" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <i className="uil uil-message"></i>
                        </button>
                    </form>
                    {successMessage && <p className="success-message">{successMessage}</p>}
                </div>
            </div>
        </section>
    );
}

export default Contact;
