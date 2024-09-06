import React, {useEffect, useState} from 'react';
import './authHeader.css';
import {Link, useNavigate} from "react-router-dom";

const AuthHeader = (props) => {

    const [isOpen, setIsOpen] = React.useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const profilePage = () => {
        navigate('/profile');
    }

    return (
        <div className='header-wrapper'>
            <div className='header-logo'>
                <span className='logo-text-header'>Time<span className='logo-purple-text-header'>Wanderer</span></span>
            </div>
            <div className='header-navigation'>
                <Link className='header-link' to='/'>Home</Link>
                <div className='header-menu'>
                    <img className='header-avatar' src={props.src} alt='#' />
                    <div className='header-menu-nav'>
                        <span className='header-nickname' onClick={profilePage}>{props.nickname}</span>
                        <img className='header-icon-menu' src='/assets/images/header-arrow.svg' alt='#' onClick={toggleMenu} />
                        {isOpen && (
                            <div className='header-nav'>
                                <Link className='header-link' to='/edit-profile'>Edit Profile</Link>
                                <Link className='header-link' to='/login' onClick={() => localStorage.clear()}>Log Out</Link>
                            </div>
                        )}
                    </div>
                </div>
                {/*<Link className='header-link' to='/login'>Login</Link>*/}
            </div>
        </div>
    );
};

export default AuthHeader;