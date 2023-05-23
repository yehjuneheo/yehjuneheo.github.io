import React from 'react';
import './ServicesPage.css'
import Timeline from './Timeline';
import './Timeline.css'

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const events = [
    {
        date: '2023-05 ~ 2023-08',
        title: 'Software Engineer',
        basicInfo: 'STP',
        explanation: 'I am currently working on a website that precisely calculates the area surface of 3D objects. This company is a manufacturing company that prints 3D objects out of various materials based on customers\' orders. This website will be used for the STP company to allow customers to get an estimated price of their products, along with a system to order online and get shipped.'
    },
    {
        date: '2022-12 ~ Present',
        title: 'CEO, Full Stack Developer',
        basicInfo: 'MeetingU',
        explanation: 'I have started a startup company with a colleague and currently serving as the CEO, main programmer, and business manager. I developed the frontend/backend/database side of the website using Django, and currently planning marketing/sales strategies.'
    },
    {
        date: '2022-08 ~ Present',
        title: 'Electrical and Computer Engineering Honors Student',
        basicInfo: 'University of Texas at Austin',
        explanation: "I am studying various fields in Electrical and Computer Engineering, while pursuing a software design track. I have currently completed the following courses: Intro to Electrical Engineering, Intro to Computing, Intro to Embedded Systems, Sofware Design and Implementation, etc."
    },
];

const Service = () => (
    <section className="servicios" id="servicios">
        <h2 className="heading" >
            <FormattedMessage
                id='services'
                defaultMessage='Experiences'
            />
        </h2>
        <Timeline events={events} />
    </section>
);

export default React.memo(Service);