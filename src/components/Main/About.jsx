import React, { useEffect, useState, useRef } from 'react';
import './AboutPage.css'
import { ButtomGet } from '../ButtomGet/ButtomGet';
/* Multi idioma */
import { FormattedMessage } from 'react-intl';
import unity_icon from '../../img/unity-icon.png'

const Skill = ({ alt, src, skill, proficiency, selectedSkill, setSelectedSkill }) => {
    const [progress, setProgress] = useState(-1);
    const [isBarVisible, setIsBarVisible] = useState(false);
    const [isBarHiding, setIsBarHiding] = useState(false);
    const isSelected = selectedSkill === skill;

    useEffect(() => {
        if (isSelected) {
            setTimeout(() => {
                setIsBarHiding(false);
                setIsBarVisible(true);
            }, 0);

            setTimeout(() => setProgress(proficiency), 100); // start progress bar animation after slide down animation
        } else {
            if (isBarVisible) {
                setIsBarHiding(true);
                setTimeout(() => {
                    setIsBarVisible(false);
                    setIsBarHiding(false);
                    setProgress(-1);
                }, 500); // Same duration as slideUp animation
            } else {
                setProgress(-1);
            }
        }
    }, [isSelected, proficiency]);

    return (
        <div>
            <img
                alt={alt}
                className="icons-skils"
                src={src}
                onClick={() => setSelectedSkill(isSelected ? null : skill)}
            />
            <h5>{skill}</h5>
            {(isBarVisible || isBarHiding) && (
                <div className={`animated-progress progress-blue ${isBarHiding ? 'slideUp' : 'slideDown'}`}>
                    <span style={{ width: `${progress}%` }}>{progress > 0 ? `${progress}%` : ''}</span>
                </div>
            )}
        </div>
    );
};


const About = () => {
    const [selectedSkill, setSelectedSkill] = useState(null);

    return (
    <section className="sobre-mi" id="sobre-mi">
        <h2 className="heading">
            <FormattedMessage
                id='about'
                defaultMessage='About me'
            />
        </h2>

        <div className="row container">
            <div className="columns" data-aos="fade-right" data-aos-delay="300">
                <h3>
                    <FormattedMessage
                        id='im'
                        defaultMessage='who I am'
                    />
                </h3>
                <h4>
                    <FormattedMessage
                        id='description'
                        defaultMessage='Hey 👋 I am Yehjune Heo, a Software Developer'
                    />
                </h4>
                <p>
                    <FormattedMessage
                        id='my-description'
                        defaultMessage='I am currently studying in University of Texas at Austin as an Eletrical and Computer Engineering Major. I will be pursuing the Software Design track to improve my ability in the software development field. Having about 7 years of experience in coding, 2 years of experience in web development, 2 years of experience in machine learning and neural networks, and 3 years of experience in software engineering, I am willing to apply my abilities to various institutions and fields.'
                    />
                </p>
                <div className="mas-info">
                    <div className='mas-info-btn'>
                        <a href="https://drive.google.com/file/d/1ZUedZ_UDz-4TCacz78uiCSBiGxdPciZj/view" target="_blank" rel="noopener noreferrer">
                            <ButtomGet/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="columns col-skill" data-aos="fade-left" data-aos-delay="650">
                <h3>skills</h3>
                <h4>Languages & Databases</h4>
                <div className="skill">
                    <Skill
                        alt="Python"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                        skill="Python"
                        proficiency="80"
                        selectedSkill={selectedSkill}
                        setSelectedSkill={setSelectedSkill}
                    />
                    <Skill
                        alt="Js"
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
                        skill="JavaScript"
                        proficiency="60"
                        selectedSkill={selectedSkill}
                        setSelectedSkill={setSelectedSkill}
                    />
                    <Skill
                        alt="HTML"
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                        skill="HTML"
                        proficiency="80"
                        selectedSkill={selectedSkill}
                        setSelectedSkill={setSelectedSkill}
                    />
                    <Skill
                        alt="CSS"
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                        skill="CSS"
                        proficiency="80"
                        selectedSkill={selectedSkill}
                        setSelectedSkill={setSelectedSkill}
                    />
                    <Skill
                        alt="C" 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
                        skill="C"
                        proficiency="60"
                        selectedSkill={selectedSkill}
                        setSelectedSkill={setSelectedSkill}
                    />
                    <Skill
                        alt="C++"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                        skill="C++"
                        proficiency="50"
                        selectedSkill={selectedSkill}
                        setSelectedSkill={setSelectedSkill}
                    />
                    <Skill
                        alt="C#"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                        skill="C#"
                        proficiency="40"
                        selectedSkill={selectedSkill}
                        setSelectedSkill={setSelectedSkill}
                    />
                    <Skill
                        alt="Java"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                        skill="Java"
                        proficiency="30"
                        selectedSkill={selectedSkill}
                        setSelectedSkill={setSelectedSkill}
                    />
                    <Skill
                        alt="MySQL"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                        skill="MySQL"
                        proficiency="30"
                        selectedSkill={selectedSkill}
                        setSelectedSkill={setSelectedSkill}
                    />
                </div>
                <h4>Frameworks & Platforms</h4>
                <div className="skill">
                    <Skill
                        alt="Django"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
                        skill="Django"
                        proficiency="80"
                        selectedSkill={selectedSkill}
                        setSelectedSkill={setSelectedSkill}
                    />
                    <Skill
                        alt="React"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                        skill="React"
                        proficiency="80"
                        selectedSkill={selectedSkill}
                        setSelectedSkill={setSelectedSkill}
                    />
                    <Skill
                        alt="TensorFlow"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
                        skill="TensorFlow"
                        proficiency="30"
                        selectedSkill={selectedSkill}
                        setSelectedSkill={setSelectedSkill}
                    />
                    <Skill
                        alt="Numpy"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
                        skill="Numpy"
                        proficiency="50"
                        selectedSkill={selectedSkill}
                        setSelectedSkill={setSelectedSkill}
                    />
                    <Skill
                        alt="Angular" 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
                        skill="Angular"
                        proficiency="30"
                        selectedSkill={selectedSkill}
                        setSelectedSkill={setSelectedSkill}
                    />
                    <Skill
                        alt="NodeJS"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                        skill="NodeJS"
                        proficiency="30"
                        selectedSkill={selectedSkill}
                        setSelectedSkill={setSelectedSkill}
                    />
                    <Skill
                        alt="Unity"
                        src={unity_icon}
                        skill="Unity"
                        proficiency="60"
                        selectedSkill={selectedSkill}
                        setSelectedSkill={setSelectedSkill}
                    />
                    <Skill
                        alt="OpenCV"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg"
                        skill="OpenCV"
                        proficiency="30"
                        selectedSkill={selectedSkill}
                        setSelectedSkill={setSelectedSkill}
                    />
                </div>
                <h4>
                    <FormattedMessage
                        id='tools'
                        defaultMessage='Devops & Tools'
                    />
                </h4>
                <div className="skill">
                    <Skill
                        alt="Git"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                        skill="Git"
                        proficiency="50"
                        selectedSkill={selectedSkill}
                        setSelectedSkill={setSelectedSkill}
                    />
                    <Skill
                        alt="AWS"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
                        skill="AWS"
                        proficiency="30"
                        selectedSkill={selectedSkill}
                        setSelectedSkill={setSelectedSkill}
                    />
                    <Skill
                        alt="Google Cloud"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
                        skill="Google Cloud"
                        proficiency="30"
                        selectedSkill={selectedSkill}
                        setSelectedSkill={setSelectedSkill}
                    />
                    <Skill
                        alt="Anaconda"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg"
                        skill="Anaconda"
                        proficiency="30"
                        selectedSkill={selectedSkill}
                        setSelectedSkill={setSelectedSkill}
                    />
                    <Skill
                        alt="Heroku"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg"
                        skill="Heroku"
                        proficiency="30"
                        selectedSkill={selectedSkill}
                        setSelectedSkill={setSelectedSkill}
                    />
                    <Skill
                        alt="Figma"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                        skill="Figma"
                        proficiency="30"
                        selectedSkill={selectedSkill}
                        setSelectedSkill={setSelectedSkill}
                    />
                    <Skill
                        alt="Linux"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                        skill="Linux"
                        proficiency="30"
                        selectedSkill={selectedSkill}
                        setSelectedSkill={setSelectedSkill}
                    />
                </div>
            </div>
        </div>
    </section>
)};

export default React.memo(About);