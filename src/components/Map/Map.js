import React, {useState, useContext} from 'react';
import {RoomContext} from '../../context/context';
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker,
    InfoWindow
} from 'react-google-maps';
import {Link} from 'react-router-dom';
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';

let MyCurrentRoom = {};

function Map() {
    const context = useContext(RoomContext);
    const [selectedRoom, setSelectedRoom] = useState(null);

    let tempRooms = context.sortedRooms;

    return (
        <GoogleMap
            defaultZoom={13}
            defaultCenter={{lat: 30.2672, lng: -97.7431}}
        >
            {tempRooms.map((room, index) => {
                return (
                    <Marker
                        key={index}
                        position={{
                            lat: room.coordinates.lat,
                            lng: room.coordinates.lng
                        }}
                        onClick={() => {
                            setSelectedRoom(room);
                        }}
                    />
                );
            })}

            {selectedRoom && (
                <InfoWindow
                    position={{
                        lat: selectedRoom.coordinates.lat,
                        lng: selectedRoom.coordinates.lng
                    }}
                    onCloseClick={() => {
                        setSelectedRoom(null);
                    }}
                >
                    <article className="info-room">
                        {selectedRoom.images.length === 1 ? (
                            <div className="info-img-container">
                                <img
                                    src={selectedRoom.images[0].url}
                                    alt="room option"
                                    className="single-info-image"
                                />
                                <div className="info-price-top">
                                    <h6>${selectedRoom.price}</h6>
                                    <p>per night</p>
                                </div>
                                <Link
                                    to={`/rooms/${selectedRoom.slug}`}
                                    className="btn-primary info-room-link"
                                >
                                    Features
                                </Link>
                            </div>
                        ) : (
                            <div className="info-img-container">
                                <AwesomeSlider
                                    animation="foldOutAnimation"
                                    cssModule={[CoreStyles, AnimationStyles]}
                                    bullets={false}
                                    className="aws-btn map-btn info-image"
                                >
                                    {selectedRoom.images.map((image, index) => {
                                        return (
                                            <div
                                                key={index}
                                                data-src={image.url}
                                            >
                                                <div className="info-price-top">
                                                    <h6>
                                                        ${selectedRoom.price}
                                                    </h6>
                                                    <p>per night</p>
                                                </div>
                                                <Link
                                                    to={`/rooms/${selectedRoom.slug}`}
                                                    className="btn-primary info-room-link"
                                                >
                                                    Features
                                                </Link>
                                            </div>
                                        );
                                    })}
                                </AwesomeSlider>
                            </div>
                        )}
                        <h4 className="info-room-info">{selectedRoom.name}</h4>
                    </article>
                </InfoWindow>
            )}
        </GoogleMap>
    );
}

const SingleMap = () => {
    let currentCoords = {
        lat: MyCurrentRoom.coordinates.lat,
        lng: MyCurrentRoom.coordinates.lng
    };
    return (
        <GoogleMap defaultZoom={13} defaultCenter={currentCoords}>
            <Marker position={currentCoords} />
        </GoogleMap>
    );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function MyMap() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <div style={{width: '100%', height: '100%'}}>
                <WrappedMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB0KhffiMteHVLTmx5bdgG4_m2gI5YAFgw`} // https://toolset.com/forums/topic/map-plugin-always-generates-geocoding-api-4xx-errors-unable-to-find-debug-info/
                    loadingElement={<div style={{height: `100%`}} />}
                    containerElement={<div className="mapContainer" />}
                    mapElement={<div style={{height: `100%`}} />}
                />
            </div>
        </div>
    );
}

const SingleWrappedMap = withScriptjs(withGoogleMap(SingleMap));

export function MySingleMap({room}) {
    MyCurrentRoom = room;
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <div id="single-map">
                <SingleWrappedMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB0KhffiMteHVLTmx5bdgG4_m2gI5YAFgw`} // https://toolset.com/forums/topic/map-plugin-always-generates-geocoding-api-4xx-errors-unable-to-find-debug-info/
                    loadingElement={<div style={{height: `100%`}} />}
                    containerElement={
                        <div
                            className="singleMapContainer"
                            style={{height: '400px', marginBottom: '40px'}}
                        />
                    }
                    mapElement={<div style={{height: `100%`}} room={room} />}
                />
            </div>
        </div>
    );
}
