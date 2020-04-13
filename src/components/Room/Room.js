import React from "react";
import AwesomeSlider from "react-awesome-slider";
import AwsSliderStyles from "react-awesome-slider/src/styles";
import defaultImg from "../../images/room-1.jpeg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./Room.css";

export default function Room({ room }) {
  const { name, slug, images, price } = room;
  return (
    <article className="room">
      {images.length === 1 ? (
        <div className="single-img-container">
          <img src={images.url || defaultImg} alt="room option" />
          <div className="price-top">
            <h6>${price}</h6>
            <p>per night</p>
          </div>
          <Link to={`/rooms/${slug}`} className="btn-primary room-link">
            Features
          </Link>
        </div>
      ) : (
        <div className="img-container">
          <AwesomeSlider cssModule={AwsSliderStyles} bullets={false}>
            {images.map((image) => {
              return (
                <div key={image.id} data-src={image.url}>
                  <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                  </div>
                </div>
              );
            })}
          </AwesomeSlider>
        </div>
      )}
      <p className="room-info">{name}</p>
    </article>
  );
}

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
