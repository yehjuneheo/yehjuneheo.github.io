import React, { useState } from "react";
import { useSpring, animated, config } from 'react-spring';
import "./Projects.css";


const Project2 = ({image, title, tools, description, link, delay}) => {
    const [showDescription, setShowDescription] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const descriptionStyles = useSpring({
        maxHeight: showDescription ? 300 : 0, // You may need to adjust this value
        config: showDescription ? config.default : { duration: 0 }
    });

    const arrowStyles = useSpring({
        transform: showDescription ? 'rotate(180deg)' : 'rotate(0deg)',
        color: isHovered ? 'white' : 'gray',
    });

    return (
        <div className="project" data-aos="fade-up" data-aos-delay={delay}>
            <div className="project-image-div">
                <a href={link} target="_blank">
                    <img src={image} alt={title} className="project-image"/>
                </a>
            </div>
            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <ul className="project-tools">
                    <li>{tools.join(' - ')}</li>
                </ul>
                <button 
                    className="project-button" 
                    onClick={() => setShowDescription(!showDescription)}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                <animated.span style={arrowStyles} className="arrow">⏏</animated.span>
                </button>
                <animated.div style={descriptionStyles} className="project-description">
                    <p>{description}</p>
                </animated.div>
            </div>
        </div>
    );
}

export default Project2;