import React from 'react';
import './circleImage.css';

const CircleImage = (props) => {
    return (
        <div className='circle-image-wrapper'>
            <div className='circle-image'>
                <img src={props.src} alt='#'/>
            </div>
            <span className='circle-image-nick'>{props.nickname}</span>
        </div>
    );
};

export default CircleImage;