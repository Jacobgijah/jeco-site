import React, { useEffect } from "react";
import "./scrollup.css";

const ScrollUp = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollup = document.querySelector(".scrollup");
            // when the scroll is higher than 560 viewport height, 
            // add the show-scroll to a tag with the scroll-top class
            if (window.scrollY >= 560) {
                scrollup.classList.add("show-scroll");
            } else {
                scrollup.classList.remove("show-scroll");
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <a href="#" className="scrollup">
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    );
}

export default ScrollUp;