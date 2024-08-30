import React from 'react';
import './achievementBlock.css';

const AchievementBlock = (props) => {
    return (
        <div className='achievement-block-wrapper'>
            <div className='achievement-images'>
                <img src={props.src} alt='#'/>
            </div>
            <div className='achievement-text'>
                <h2 className='achievement-block-title'>{props.title}</h2>
                <p className='achievement-block-description'>{props.description}</p>
            </div>
        </div>
    );
};

export default AchievementBlock;