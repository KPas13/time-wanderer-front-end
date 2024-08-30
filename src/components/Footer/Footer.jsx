import React from 'react';
import {Link} from 'react-router-dom';
import './footer.css';
import FooterInput from "../UI/input/footerInput/FooterInput";


const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <div className='footer-links'>
                <div className='footer-logo'>
                    <span className='logo-text'>Time<span className='logo-purple-text'>Wanderer</span></span>
                    <span className='text-copyright'>©2024. All rights reserved</span>
                </div>
                <div className='footer-navigation'>
                    <h2 className='footer-heading'>NAVIGATION</h2>
                    <a className='nav-links' href='#'>Home</a>
                    <a className='nav-links' href='#'>Routes</a>
                    <a className='nav-links' href='#'>Articles</a>
                    <a className='nav-links' href='#'>Places</a>
                </div>
                <div className='footer-acc-social'>
                    <h2 className='footer-heading' href='#'>ACCOUNT</h2>
                    <a className='nav-links' href='#'>Profile</a>
                    <a className='nav-links' href='#'>Registration</a>
                    <a className='nav-links' href='#'>Sign In</a>
                    <h2 className='footer-heading'>SOCIALS</h2>
                    <div className='socials'>
                        <img src='/assets/images/instagram.svg' className='social-icon' alt='#'/>
                        <img src='/assets/images/twitter.svg' className='social-icon' alt='#'/>
                        <img src='/assets/images/facebook.svg' className='social-icon' alt='#'/>
                    </div>
                </div>
            </div>
            <div className='footer-letter'>
                <h2 className='footer-heading'>LETTER US</h2>
                <span>Left your opinion about us</span>
                <FooterInput placeholder='Email us...'/>
                <div className='policy'>
                    <a className='policy-links' href='#'>Private policy</a>
                    <div className='footer-circle'></div>
                    <a className='policy-links' href='#'>Cookies</a>
                    <div className='footer-circle'></div>
                    <a className='policy-links' href='#'>Terms&Conditions</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;