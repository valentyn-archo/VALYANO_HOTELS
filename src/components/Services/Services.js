import React from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from '../Title/Title';

const Services = () => {
    const services = [
        {
            icon: <FaCocktail />,
            title: 'Free Cocktails',
            info:
                'All guests enjoy complimentary drinks and snacks at our nightly Evening Reception. Guests can choose from a variety of alcoholic and nonalcoholic beverages, along with light appetizers.'
        },
        {
            icon: <FaHiking />,
            title: 'Endless Hiking',
            info:
                'Unforgettable impressions and beautiful scenery await you. These are all reasonably priced.'
        },
        {
            icon: <FaShuttleVan />,
            title: 'Free Shuttle',
            info:
                'Our hotel offers you free shuttle from the airport as well as to our beautiful central city.'
        },
        {
            icon: <FaBeer />,
            title: 'Local Craft Beer',
            info:
                'VALYANO hotel produces exquisite and delicious craft beer. You will be very pleased when you try it.'
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
