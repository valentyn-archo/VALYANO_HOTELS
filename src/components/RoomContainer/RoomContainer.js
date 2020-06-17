import React, {Fragment} from 'react';
import RoomFilter from '../RoomFilter/RoomFilter';
import RoomList from '../RoomList/RoomList';
import {withRoomConsumer} from '../../context/context';
import Loading from '../Loading/Loading';
import MyMap from '../Map/Map';
import Title from '../Title/Title';

const RoomContainer = ({context}) => {
    const {loading, sortedRooms, rooms} = context;

    return loading ? (
        <Loading />
    ) : (
        <Fragment>
            <div id="rooms-container">
                <Title title="search rooms" />
            </div>
            <div id="roomsWrapper">
                <RoomFilter rooms={rooms} />
                <RoomList rooms={sortedRooms} />
                <MyMap rooms={rooms} />
            </div>
        </Fragment>
    );
};

export default withRoomConsumer(RoomContainer);
