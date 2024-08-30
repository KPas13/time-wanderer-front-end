import React from 'react';
import './banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <div className='logo'>
                Time
                <span className='purple-text'>Wanderer</span>
            </div>
            <div className='banner-text'>
                Plan and explore historical journeys with interactive maps, tailored recommendations, and detailed site information. Enhance your experience with quizzes, rewards, and social features to share your adventures. Secure and user-friendly, <span className='text-logo'>
                Time
                <span className='purple-text'>Wanderer</span>
                </span> offers everything you need for an enriching travel experience.
            </div>
        </div>
    );
};

export default Banner;