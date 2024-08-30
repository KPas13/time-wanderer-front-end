import React from 'react';
import './errorpage.css';
import Button from "../../components/UI/button/Button";
import {Link} from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className='error-page-wrapper'>
            <div className='error-page-logo'>
                <span className='error-page-title'>Time<span className='error-page-purple'>Wanderer</span></span>
            </div>
            <div className='error-page-content'>
                <p className='error-page-text'>Hello there</p>
                <img src='/assets/images/404%20ERROR.png' alt='#'/>
                <p className='error-page-text'>Page not found</p>
                <Link to='/'><Button>Back to main page</Button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;