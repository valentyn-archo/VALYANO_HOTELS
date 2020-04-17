import React from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from '../Title/Title';

const Services = () => {
    const services = [
        {
            icon: <FaCocktail />,
            title: 'Free Cocktails',
            info:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, velit.'
        },
        {
            icon: <FaHiking />,
            title: 'Endless Hiking',
            info:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, velit.'
        },
        {
            icon: <FaShuttleVan />,
            title: 'Free Shuttle',
            info:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, velit.'
        },
        {
            icon: <FaBeer />,
            title: 'Local Craft Beer',
            info:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, velit.'
        }
    ];

    return (
        <section className="services">
            <Title title="services" />
            <div className="services-center">
                {services.map((item, index) => {
                    return (
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Services;
