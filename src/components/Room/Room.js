import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';

import './Room.scss';

const Room = ({room}) => {
    const {name, slug, images, price} = room;

    return (
        <article className="room">
            {images.length === 1 ? (
                <div className="single-img-container">
                    <img src={images[0].url} alt="room option" />
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
                        {images.map((image, index) => {
                            return (
                                <div key={index} data-src={image.url}>
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
