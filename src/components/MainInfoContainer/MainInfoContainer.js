import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
import 'react-awesome-slider/dist/styles.css';
import './MainInfoContainer.scss';

import mainImage1 from '../../images/main-image-1.jpeg';
import mainImage2 from '../../images/main-image-2.gif';
import mainImage3 from '../../images/main-image-3.jpeg';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const images = [mainImage1, mainImage2, mainImage3];

const MainInfoContainer = ({children, className = 'defaultContainer'}) => {
    return (
        <div id="main-container">
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={3000}
                bullets={false}
                organicArrows={false}
                className="aws-btn-main"
                animation="foldOutAnimation"
                cssModule={[CoreStyles, AnimationStyles]}
            >
                {images.map((image, index) => {
                    return (
                        <div key={index} data-src={image}>
                            <header className={className}>{children}</header>
                        </div>
                    );
                })}
            </AutoplaySlider>
        </div>
    );
};

export default MainInfoContainer;
