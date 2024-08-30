import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className='header-logo'>
                <span className='logo-text-header'>Time<span className='logo-purple-text-header'>Wanderer</span></span>
            </div>
            <div className='header-navigation'>
                <Link className='header-link' to='/'>Home</Link>
                <Link className='header-link' to='/login'>Login</Link>
            </div>
        </div>
    );
};

export default Header;