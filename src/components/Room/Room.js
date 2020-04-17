import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';

import defaultImg from '../../images/room-1.jpeg';

import './Room.scss';

const Room = ({room}) => {
    const {name, slug, images, price, id} = room;

    return (
        <article className="room" key={id}>
            {images.length === 1 ? (
                <div className="single-img-container">
                    <img src={images.url || defaultImg} alt="room option" />
                    <div className="price-top">
                        <h6>${price}</h6>
                        <p>per night</p>
                    </div>
                    <Link
                        to={`/rooms/${slug}`}
                        className="btn-primary room-link"
                    >
                        Features
                    </Link>
                </div>
            ) : (
                <div className="img-container">
                    <AwesomeSlider
                        animation="foldOutAnimation"
                        cssModule={[CoreStyles, AnimationStyles]}
                        bullets={false}
                        className="aws-btn"
                    >
                        {images.map((image) => {
                            return (
                                <div key={image.id} data-src={image.url}>
                                    <div className="price-top">
                                        <h6>${price}</h6>
                                        <p>per night</p>
                                    </div>
                                    <Link
                                        to={`/rooms/${slug}`}
                                        className="btn-primary room-link"
                                    >
                                        Features
                                    </Link>
                                </div>
                            );
                        })}
                    </AwesomeSlider>
                </div>
            )}
            <p className="room-info">{name}</p>
        </article>
    );
};

Room.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.object).isRequired,
        price: PropTypes.number.isRequired
    })
};

export default Room;
