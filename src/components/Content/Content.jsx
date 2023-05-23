import React from 'react';
import './Content.css';
import { Link } from 'react-scroll';
import { FormattedMessage } from 'react-intl';
import Background from './background';

const Content = () => (
    <div className="contenido">
        <div className='background_layer'>
            <Background />
        </div>
        <section className="inicio" id="inicio">
        
            <div className="titulo">
            
                <h1 data-aos="fade-up" data-aos-delay="800">
                    <FormattedMessage
                        id='name'
                        defaultMessage='Yehjune Heo'
                    />
                </h1>
                <p data-aos="fade-up" data-aos-delay="1000">
                    <FormattedMessage
                        id='rol'
                        defaultMessage='Software Developer'
                    />
                </p>
            <Link to="sobre-mi" href="#sobre-mi">
                <div className="scroll-down"></div>
            </Link>
            </div>

        </section>
    </div>
);

export default Content;