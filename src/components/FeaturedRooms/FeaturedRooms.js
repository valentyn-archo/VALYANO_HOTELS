import React, {useContext} from 'react';
import {RoomContext} from '../../context/context';
import Loading from '../Loading/Loading';
import Room from '../Room/Room';
import Title from '../Title/Title';

const FeaturedRooms = () => {
    const context = useContext(RoomContext);

    let {loading, featuredRooms: rooms} = context;

    rooms = rooms.map((room) => {
        return <Room key={room.id} room={room} />;
    });

    return (
        <section id="featured-rooms">
            <Title title="featured rooms" />
            <div className="featured-rooms-center">
                {loading ? <Loading /> : rooms}
            </div>
        </section>
    );
};

export default FeaturedRooms;
