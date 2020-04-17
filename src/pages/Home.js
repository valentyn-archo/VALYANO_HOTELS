import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import MainInfoContainer from '../components/MainInfoContainer/MainInfoContainer';
import Banner from '../components/Banner/Banner';
import Services from '../components/Services/Services';
import FeaturedRooms from '../components/FeaturedRooms/FeaturedRooms';

const Home = () => {
    return (
        <Fragment>
            <MainInfoContainer>
                <Banner
                    title="VALYANO HOTEL"
                    subtitle="very comfortable rooms for a good price"
                >
                    <Link to="/rooms" className="btn-primary">
                        view rooms
                    </Link>
                </Banner>
            </MainInfoContainer>
            <Services />
            <FeaturedRooms />
        </Fragment>
    );
};

export default Home;
