import React from "react";
import Project from './Project2';
import "./Projects.css";
import Icon from "../ButtomGet/icon";
import { FormattedMessage } from "react-intl";

const Projects = ({projects}) => {
    return (
        <div>
            <div className="projects">
                {projects.map((project, index) => 
                    <Project 
                        key={index}
                        image={project.image}
                        title={project.title}
                        tools={project.tools}
                        description={project.description}
                        link={project.link}
                        delay={project.delay}
                    />
                )}
            </div>
            <div className='go-to-github' data-aos="fade-up">
                <p>
                    Check out More Projects on Github!
                </p>
                <a href="https://github.com/yehjuneheo" >
                <button className="cssbuttons-io-button">  
                    <FormattedMessage
                        id='btn-know-more'
                        defaultMessage='Go to Github'
                    />
                    <div className="icon">
                        <Icon/>
                    </div>
                </button>
                </a>
            </div>
        </div>
    );
}

export default Projects;