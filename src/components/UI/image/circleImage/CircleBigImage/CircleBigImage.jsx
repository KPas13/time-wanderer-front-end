import React from 'react';
import './circleBigImage.css';

const CircleBigImage = (props) => {
    return (
        <div className='circle-big-wrapper'>
            <div className='circle-big-image'>
                <img src={props.src} alt='#'/>
            </div>
            <span className='circle-big-image-nick'>{props.nickname}</span>
        </div>
    );
};

export default CircleBigImage;