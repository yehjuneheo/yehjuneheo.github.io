import React from 'react';
import './ContactPage.css'
/* TypedJs */
import Typical from 'react-typical';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const Contact = () => (

    <section className="contactos2" id="contactos">

        <h2 className="heading">
            <FormattedMessage
                id='contact'
                defaultMessage='Contact'
            />
        </h2>
        <h3 className="titulo" >
            <FormattedMessage
                id='contact-info'
                defaultMessage='Contact me by: '
            />
            <Typical
                className="site-contacto"
                loop={Infinity}
                wrapper="b"
                steps={[
                    'Gmail', 1500,
                    'Instragram', 1500,
                    'Linkedin', 1500,
                    'Github', 1500,
                ]}
            />

        </h3>
        <section className="inicio2" id="inicio">
        
            <div className="tituli">

                <div className="wrapper">
                    <a className="button" href="mailto:yehjune111@gmail.com/" target="_blank">
                        <div className="icon">
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                    </a>
                    <a className="button" href="https://www.linkedin.com/in/yehjune-heo-811980225/" target="_blank" >
                        <div className="icon">
                            <i className="fab fa-linkedin"></i>
                        </div>
                    </a>
                    <a className="button" href="https://github.com/yehjuneheo" target="_blank">
                        <div className="icon">
                            <i className="fab fa-github"></i>
                        </div>
                    </a>
                    <a className="button" href="https://www.instagram.com/yehjune.heo.02/" target="_blank">
                        <div className="icon">
                            <i className="fab fa-instagram"></i>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    </section>
);

export default React.memo(Contact);