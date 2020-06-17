import React from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from '../Title/Title';

const Services = () => {
    const services = [
        {
            icon: <FaCocktail />,
            title: 'Free Cocktails',
            info:
                'All guests enjoy complimentary drinks and snacks at our nightly evening bars and clubs, if you are client of the VALYANO. Guests can choose from a variety of alcoholic and nonalcoholic beverages, along with light appetizers.'
        },
        {
            icon: <FaHiking />,
            title: 'Endless Hiking',
            info:
                'Weekly trips to mountains and lakes with incredible discounts. Unforgettable impressions and beautiful scenery await you. We have the best guides and routes.'
        },
        {
            icon: <FaShuttleVan />,
            title: 'Free Shuttle',
            info:
                'Our company offers you free shuttle from the airport to our appartments, as well as to our beautiful central city. For a small fee you can also travel where you need within the city.'
        },
        {
            icon: <FaBeer />,
            title: 'Local Craft Beer',
            info:
                'Bars and clubs collaborating with VALYANO company produces exquisite and delicious craft beer. We produce dark and light beer of varying degrees of fermentation with many interesting flavours.'
        }
    ];

    return (
        <section id="services">
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
