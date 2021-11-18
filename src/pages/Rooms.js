import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import MainInfoContainer from '../components/MainInfoContainer/MainInfoContainer';
import Banner from '../components/Banner/Banner';
import RoomContainer from '../components/RoomContainer/RoomContainer';
import Navbar from '../components/Navbar/Navbar';

const Rooms = () => {
    return (
        <Fragment>
            <Navbar isRooms />
            <MainInfoContainer className="roomsHero">
                <Banner title="our apartments">
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
