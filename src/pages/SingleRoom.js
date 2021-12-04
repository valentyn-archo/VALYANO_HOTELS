import React, {Fragment, useContext} from 'react';
import {Link} from 'react-router-dom';
import Banner from '../components/Banner/Banner';
import {RoomContext} from '../context/context';
import MainInfoContainer from '../components/MainInfoContainer/MainInfoContainer';
import {MySingleMap} from '../components/Map/Map';
import Navbar from '../components/Navbar/Navbar';

const SingleRoom = (props) => {
    const context = useContext(RoomContext);
    const {getRoom} = context;
    const slug = props.match.params.slug;
    const room = getRoom(slug);

    const {
        name,
        description,
        capacity,
        size,
        price,
        extras,
        breakfast,
        pets,
        images
    } = room;

    const [mainImg, ...defaultImg] = images;

    if (!room) {
        return (
            <div className="error">
                <h3>apartment not found.</h3>
                <Link to="/apartments" className="btn-primary">
                    back to apartments
                </Link>
            </div>
        );
    }

    return (
        <Fragment>
            <Navbar isSingleRoom />
            <MainInfoContainer>
                <Banner title={`${name} room`}>
                    <Link to="/apartments" className="btn-primary">
                        back to apartments
                    </Link>
                </Banner>
            </MainInfoContainer>
            <section id="single-room">
                <div className="single-room-images">
                    {defaultImg.map((item, index) => {
                        return <img key={index} src={item.url} alt={name} />;
                    })}
                    {images.length === 1 && (
                        <img src={mainImg.url} alt={name} />
                    )}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>info</h3>
                        <h6>price : ${price}</h6>
                        <h6>size : {size} SQFT</h6>
                        <h6>
                            max capacity:{' '}
                            {capacity > 1
                                ? `${capacity} people`
                                : `${capacity} person`}
                        </h6>
                        <h6>{pets ? `pets allowed` : `no pets allowed`}</h6>
                        <h6>{breakfast && 'free breakfast included'}</h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>extras</h6>
                <ul className="extras">
                    {extras.map((item, index) => {
                        return <li key={index}>{item}</li>;
                    })}
                </ul>
            </section>
            <section>
                <MySingleMap room={room} />
            </section>
        </Fragment>
    );
};

export default SingleRoom;
