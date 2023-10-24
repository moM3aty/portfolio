import React from 'react';
import Profile from './Profile';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header id="header">
            <div className="d-flex flex-column">
                <Profile />
                <Navbar />
            </div>
        </header>
    );
}

export default Header;
