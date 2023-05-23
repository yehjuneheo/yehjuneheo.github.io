import React from 'react';
import './Timeline.css'

const Timeline = ({ events }) => (
    <div className="timeline" data-aos="fade-down" data-aos-delay="500">
        {events.map((event, index) => (
            <div key={index} className="timeline-item">
                <div className="timeline-item-content">
                    <span className="circle"/>
                    <p className="timeline-date">{event.date}</p>
                    <h2 className="timeline-title">{event.title}</h2>
                    <h3 className="timeline-basicInfo">{event.basicInfo}</h3>
                </div>
                <div className='timeline-item-explanation'>
                    <p>{event.explanation}</p>
                </div>
            </div>
        ))}
    </div>
);

export default Timeline;