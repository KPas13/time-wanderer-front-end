import React from 'react';
import './goldCircleImage.css';

const GoldCircleImage = (props) => {
    return (
        <div className='gold-circle-wrapper'>
            <div className='gold-circle-image'>
                <div className='gold-circle-crown'>
                    <img className='' src='/assets/images/gold-crown.svg' alt='#'/>
                </div>
                <div className='gold-circle-main-image'>
                    <img src={props.src} alt='#'/>
                </div>
                <div className='gold-circle-level'>
                    <span>1</span>
                </div>
            </div>
            <div className='gold-circle-nickname'>
                <span>{props.nickname}</span>
            </div>
            <div className='gold-circle-points'>
                <span>{props.points} exp</span>
            </div>
        </div>
    );
};

export default GoldCircleImage;