import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import MainInfoContainer from '../components/MainInfoContainer/MainInfoContainer';
import Banner from '../components/Banner/Banner';
import RoomContainer from '../components/RoomContainer/RoomContainer';

const Rooms = () => {
    return (
        <Fragment>
            <MainInfoContainer className="roomsHero">
                <Banner title="our rooms">
                    <Link to="/" className="btn-primary">
                        return home
                    </Link>
                </Banner>
            </MainInfoContainer>
            <RoomContainer />
        </Fragment>
    );
};

export default Rooms;
