import React from 'react';
import Room from '../Room/Room';

const RoomsList = ({rooms}) => {
    return rooms.length === 0 ? (
        <div className="empty-search">
            <h3>unfortunately no rooms matched your search</h3>
        </div>
    ) : (
        <section className="roomslist">
            <div className="roomslist-center">
                {rooms.map((item) => {
                    return <Room key={item.id} room={item} />;
                })}
            </div>
        </section>
    );
};

export default RoomsList;
