import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {GoThreeBars as Hamburger} from 'react-icons/go';

import logo from '../../images/valyanoLogo.jpg';

const Navbar = ({isHome, isRooms, isSingleRoom}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="VALYANO"
                            style={{width: '250px', height: 'auto'}}
                        />
                    </Link>
                    <button
                        type="button"
                        className="nav-btn"
                        onClick={handleToggle}
                    >
                        <Hamburger className="nav-icon" />
                    </button>
                </div>
                {isHome && (
                    <ul className={isOpen ? 'nav-links show-nav' : 'nav-links'}>
                        <li>
                            <a href="#main-container">Home</a>
                        </li>
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li>
                            <Link to="/rooms">Apartments</Link>
                        </li>
                        <li>
                            <a href="#featured-rooms">Featured</a>
                        </li>
                    </ul>
                )}
                {isRooms && (
                    <ul className={isOpen ? 'nav-links show-nav' : 'nav-links'}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <a href="#rooms-container">Search</a>
                        </li>
                    </ul>
                )}
                {isSingleRoom && (
                    <ul className={isOpen ? 'nav-links show-nav' : 'nav-links'}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/rooms">Apartments</Link>
                        </li>
                        <li>
                            <a href="#single-room">Info</a>
                        </li>
                        <li>
                            <a href="#single-map">Map</a>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
