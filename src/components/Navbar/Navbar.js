import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {GoThreeBars as Hamburger} from 'react-icons/go';

import logo from '../../images/roomLogo.png';

const Navbar = () => {
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
                            alt="room book"
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
                <ul className={isOpen ? 'nav-links show-nav' : 'nav-links'}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">Services</Link>
                    </li>
                    <li>
                        <Link to="/rooms">Rooms </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
