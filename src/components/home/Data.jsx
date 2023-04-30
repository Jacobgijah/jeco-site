import React from "react";

const Data = () => {
    return (
        <div className="home__data">
            <h1 className="home__title">
                Jacob Gijjah
                {/* <i className="home__hand" class="uil uil-spinner"></i> */}
            </h1>

            <h3 className="home__subtitle">Software Developer</h3>
            <p className="home__description">
                I design, implement, and maintain software programs as a 
                software developer to assist my clients in achieving their objectives.
            </p>

            <a href="#contact" className="button button--flex">
                Greetings
                <i class="uil uil-message"></i>
            </a>
        </div>
    )
}

export default Data