import React from 'react';
import RoomFilter from '../RoomFilter/RoomFilter';
import RoomList from '../RoomList/RoomList';
import {withRoomConsumer} from '../../context/context';
import Loading from '../Loading/Loading';
import MyMap from '../Map/Map';
import Title from '../Title/Title';


function RoomContainer({ context }) {
    const {loading, sortedRooms, rooms} = context;

    if (loading) {
        return <Loading />
    }
    return (
        <>
            <div style={{ marginTop: "40px" }}>
                <Title title='search rooms' />
            </div>
            <wrapper id="roomsWrapper">
                <RoomFilter rooms={rooms} />
                <RoomList rooms={sortedRooms} />
                <MyMap rooms={rooms} />
            </wrapper>
        </>
    );
};


export default withRoomConsumer(RoomContainer);